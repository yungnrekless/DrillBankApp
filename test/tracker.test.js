import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { stemKey, keyIndex, mergeAttempts } from '../src/tracker.js';
import { normalizeStem } from '../src/importer.js';
import { ROOT, listCourses, coursePaths } from '../src/courses.js';

const rec = (k, ts, ok = true, session = 's1') => ({ k, timestamp: ts, correct: ok, session_id: session });

test('stemKey normalizes the same way the importer does', () => {
  // Identity has to survive the same cosmetic edits a re-import survives,
  // or an edited stem would silently orphan its history.
  const a = 'Who issues the Federal Poverty Guidelines?';
  const b = '  who   issues the federal poverty guidelines ';
  assert.equal(normalizeStem(a), normalizeStem(b));
  assert.equal(stemKey(a), stemKey(b));
  assert.notEqual(stemKey(a), stemKey('Who issues the Supplemental Poverty Measure?'));
});

test('stemKey is stable and opaque', () => {
  const k = stemKey('Who issues the Federal Poverty Guidelines?');
  assert.equal(k, stemKey('Who issues the Federal Poverty Guidelines?'));
  assert.match(k, /^[0-9a-z]+$/);
});

test('no two questions in the real banks share a stem key', () => {
  // A collision would file answers against the wrong question, so this runs
  // against the shipped banks rather than a fixture.
  let checked = 0;
  for (const { slug } of listCourses()) {
    const file = coursePaths(slug).questions;
    if (!fs.existsSync(file)) continue;
    const bank = JSON.parse(fs.readFileSync(file, 'utf8'));
    const { collisions } = keyIndex(bank);
    assert.deepEqual(collisions, [], `${slug} has colliding stem keys`);
    checked += Object.keys(bank).length;
  }
  assert.ok(checked > 0, 'expected at least one bank to check');
});

test('keyIndex reports collisions rather than silently overwriting', () => {
  const { byKey, collisions } = keyIndex({
    q_0001: { stem: 'Same stem?' },
    q_0002: { stem: 'same   stem' },
    q_0003: { stem: 'A different one' },
  });
  assert.equal(collisions.length, 1);
  assert.deepEqual(collisions[0], ['q_0001', 'q_0002']);
  assert.equal(byKey.size, 2);
});

test('buffered records are mapped to qids and appended', () => {
  const byKey = new Map([['aaa', 'q_0001'], ['bbb', 'q_0002']]);
  const { log, added, unmatched } = mergeAttempts([], [
    rec('aaa', '2026-08-10T10:00:00.000Z', true),
    rec('bbb', '2026-08-10T10:01:00.000Z', false),
  ], byKey);

  assert.equal(added, 2);
  assert.deepEqual(unmatched, []);
  assert.deepEqual(log.map((a) => a.qid), ['q_0001', 'q_0002']);
  assert.equal(log[1].correct, false);
  assert.equal(log[0].session_id, 's1');
});

test('re-importing the same export adds nothing', () => {
  // The browser buffer is not cleared on import, so this has to hold.
  const byKey = new Map([['aaa', 'q_0001']]);
  const batch = [rec('aaa', '2026-08-10T10:00:00.000Z')];
  const first = mergeAttempts([], batch, byKey);
  const second = mergeAttempts(first.log, batch, byKey);

  assert.equal(second.added, 0);
  assert.equal(second.duplicates, 1);
  assert.equal(second.log.length, 1);
});

test('the same question answered twice in one session is kept twice', () => {
  // Distinct timestamps are distinct attempts — deduping those would lose work.
  const byKey = new Map([['aaa', 'q_0001']]);
  const { added } = mergeAttempts([], [
    rec('aaa', '2026-08-10T10:00:00.000Z'),
    rec('aaa', '2026-08-10T10:05:00.000Z'),
  ], byKey);
  assert.equal(added, 2);
});

test('records whose question no longer exists are reported, not dropped', () => {
  const { log, added, unmatched } = mergeAttempts([], [
    rec('gone', '2026-08-10T10:00:00.000Z'),
  ], new Map([['aaa', 'q_0001']]));

  assert.equal(added, 0);
  assert.equal(log.length, 0);
  assert.equal(unmatched.length, 1);
  assert.equal(unmatched[0].k, 'gone');
});

test('the merged log stays in timestamp order', () => {
  const byKey = new Map([['aaa', 'q_0001'], ['bbb', 'q_0002']]);
  const existing = [{ qid: 'q_0002', timestamp: '2026-08-10T12:00:00.000Z', correct: true, session_id: 'old' }];
  const { log } = mergeAttempts(existing, [rec('aaa', '2026-08-10T09:00:00.000Z')], byKey);
  assert.deepEqual(log.map((a) => a.timestamp), [
    '2026-08-10T09:00:00.000Z',
    '2026-08-10T12:00:00.000Z',
  ]);
});

test('the import CLI is wired into package.json', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  assert.equal(pkg.scripts['import-attempts'], 'node scripts/import-attempts.js');
});
