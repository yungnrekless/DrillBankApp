import test from 'node:test';
import assert from 'node:assert/strict';
import {
  grade, newEntry, buildQueue, topicAccuracy, weakTopics, replay, addDays, daysBetween,
} from '../src/scheduler.js';

const TODAY = '2026-08-06';

const bank = {
  q_0001: { topic: 'econ', subtopic: 'a', stem: 'one', options: ['x', 'y'], correct: [0], rationale: 'r', type: 'single' },
  q_0002: { topic: 'econ', subtopic: 'a', stem: 'two', options: ['x', 'y'], correct: [1], rationale: 'r', type: 'single' },
  q_0003: { topic: 'pharm', subtopic: 'b', stem: 'three', options: ['x', 'y'], correct: [0], rationale: 'r', type: 'single' },
};

test('date helpers are inverse of each other', () => {
  assert.equal(addDays(TODAY, 3), '2026-08-09');
  assert.equal(daysBetween(TODAY, '2026-08-09'), 3);
  assert.equal(daysBetween('2026-08-09', TODAY), -3);
});

test('a correct answer walks up the interval ladder', () => {
  let e = grade(newEntry(TODAY), true, TODAY);
  assert.equal(e.interval_days, 1);
  e = grade(e, true, TODAY);
  assert.equal(e.interval_days, 3);
  e = grade(e, true, TODAY);
  assert.equal(e.interval_days, 7);
  e = grade(e, true, TODAY);
  assert.equal(e.interval_days, 14);
});

test('a wrong answer resets the interval and flags struggling', () => {
  let e = grade(grade(grade(newEntry(TODAY), true, TODAY), true, TODAY), true, TODAY);
  assert.equal(e.struggling, false);
  e = grade(e, false, TODAY);
  assert.equal(e.interval_days, 1);
  assert.equal(e.due_date, '2026-08-07');
  assert.equal(e.last_result, 'wrong');
  assert.equal(e.struggling, true);
});

test('ease is clamped at both ends', () => {
  let e = newEntry(TODAY);
  for (let i = 0; i < 20; i++) e = grade(e, false, TODAY);
  assert.equal(e.ease, 1.3);
  for (let i = 0; i < 40; i++) e = grade(e, true, TODAY);
  assert.equal(e.ease, 2.8);
});

test('grade does not mutate the entry it is given', () => {
  const before = newEntry(TODAY);
  const snapshot = { ...before };
  grade(before, false, TODAY);
  assert.deepEqual(before, snapshot);
});

test('topic accuracy ignores attempts for unknown questions', () => {
  const attempts = [
    { qid: 'q_0001', correct: false, timestamp: `${TODAY}T10:00:00Z`, session_id: 's1' },
    { qid: 'q_0002', correct: true, timestamp: `${TODAY}T10:01:00Z`, session_id: 's1' },
    { qid: 'q_9999', correct: true, timestamp: `${TODAY}T10:02:00Z`, session_id: 's1' },
  ];
  const acc = topicAccuracy(attempts, bank);
  assert.equal(acc.econ.attempts, 2);
  assert.equal(acc.econ.accuracy, 0.5);
  assert.equal(acc.pharm, undefined, 'untested topics are absent, not zero');
});

test('a topic under 70% is weak and its questions get pulled forward', () => {
  const attempts = [
    { qid: 'q_0001', correct: false, timestamp: `${TODAY}T10:00:00Z`, session_id: 's1' },
    { qid: 'q_0002', correct: false, timestamp: `${TODAY}T10:01:00Z`, session_id: 's1' },
    { qid: 'q_0003', correct: true, timestamp: `${TODAY}T10:02:00Z`, session_id: 's1' },
  ];
  assert.deepEqual(weakTopics(attempts, bank), ['econ']);

  // Everything is scheduled far out, so nothing is due on its own merits.
  const schedule = {
    q_0001: { interval_days: 14, ease: 2.5, due_date: '2026-12-01', last_result: 'right', struggling: false, reps: 3 },
    q_0002: { interval_days: 14, ease: 2.5, due_date: '2026-12-01', last_result: 'right', struggling: false, reps: 3 },
    q_0003: { interval_days: 14, ease: 2.5, due_date: '2026-12-01', last_result: 'right', struggling: false, reps: 3 },
  };
  const queue = buildQueue(bank, schedule, attempts, { limit: 2, today: TODAY });
  assert.deepEqual(queue.sort(), ['q_0001', 'q_0002'], 'weak-topic questions come first');
});

test('a session is never empty even when nothing is due', () => {
  const far = '2027-01-01';
  const schedule = Object.fromEntries(Object.keys(bank).map((qid) => [qid,
    { interval_days: 30, ease: 2.5, due_date: far, last_result: 'right', struggling: false, reps: 5 }]));
  const queue = buildQueue(bank, schedule, [], { limit: 3, today: TODAY });
  assert.equal(queue.length, 3);
});

test('replaying the log reconstructs schedule state', () => {
  const attempts = [
    { qid: 'q_0001', correct: true, timestamp: '2026-08-01T10:00:00Z', session_id: 's1' },
    { qid: 'q_0001', correct: true, timestamp: '2026-08-02T10:00:00Z', session_id: 's2' },
    { qid: 'q_0001', correct: false, timestamp: '2026-08-05T10:00:00Z', session_id: 's3' },
  ];
  const state = replay(attempts);
  assert.equal(state.q_0001.interval_days, 1);
  assert.equal(state.q_0001.struggling, true);
  assert.equal(state.q_0001.due_date, '2026-08-06', 'due date follows the attempt date, not today');
});
