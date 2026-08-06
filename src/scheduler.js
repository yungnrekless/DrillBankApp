/**
 * SM-2-ish scheduler, simplified.
 *
 *   correct -> walk up the interval ladder (1 -> 3 -> 7 -> 14 -> 30)
 *   wrong   -> reset to 1 day and flag the question "struggling"
 *
 * On top of the per-question schedule sits a topic-level modifier: if a
 * topic's rolling accuracy is under WEAK_THRESHOLD, everything in that topic
 * is pulled forward regardless of its own due date. The point of the tool is
 * to spend time where you are weak, not to respect a spacing curve for its
 * own sake.
 *
 * Pure functions only — no I/O, no clock reads except through an injected
 * `today`. That keeps it testable and usable from both node and the browser.
 */

export const INTERVAL_LADDER = [1, 3, 7, 14, 30];
export const WEAK_THRESHOLD = 0.7;   // topics below this are "red"
export const ROLLING_WINDOW = 20;    // attempts per topic used for accuracy
export const EASE_START = 2.5;
export const EASE_MIN = 1.3;
export const EASE_MAX = 2.8;

export function todayISO(now = new Date()) {
  return now.toISOString().slice(0, 10);
}

export function addDays(dateISO, days) {
  const d = new Date(`${dateISO}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function daysBetween(fromISO, toISO) {
  const ms = new Date(`${toISO}T00:00:00Z`) - new Date(`${fromISO}T00:00:00Z`);
  return Math.round(ms / 86400000);
}

export function newEntry(today = todayISO()) {
  return {
    interval_days: 0,
    ease: EASE_START,
    due_date: today,
    last_result: null,
    struggling: false,
    reps: 0,
  };
}

/** Next rung up the ladder from the current interval. */
function nextInterval(current) {
  const i = INTERVAL_LADDER.findIndex((v) => v >= current);
  if (i === -1) return INTERVAL_LADDER[INTERVAL_LADDER.length - 1];
  return INTERVAL_LADDER[Math.min(i + 1, INTERVAL_LADDER.length - 1)];
}

/**
 * Apply one graded attempt to a schedule entry.
 * @returns {import('./schema.js').ScheduleEntry} a new entry (input untouched)
 */
export function grade(entry, correct, today = todayISO()) {
  const e = entry ? { ...entry } : newEntry(today);
  e.reps = (e.reps || 0) + 1;

  if (correct) {
    e.ease = Math.min(EASE_MAX, e.ease + 0.1);
    e.interval_days = e.interval_days === 0 ? INTERVAL_LADDER[0] : nextInterval(e.interval_days);
    // Ease stretches or compresses the ladder rung, but never below 1 day.
    const scaled = Math.max(1, Math.round(e.interval_days * (e.ease / EASE_START)));
    e.due_date = addDays(today, scaled);
    e.last_result = 'right';
    // Two clean reps in a row clears the struggling flag.
    if (e.struggling && e.interval_days >= INTERVAL_LADDER[1]) e.struggling = false;
  } else {
    e.ease = Math.max(EASE_MIN, e.ease - 0.2);
    e.interval_days = 1;
    e.due_date = addDays(today, 1);
    e.last_result = 'wrong';
    e.struggling = true;
  }
  return e;
}

/**
 * Rolling accuracy per topic over the last ROLLING_WINDOW attempts in that
 * topic. Topics with no attempts are absent from the result rather than
 * reported as 0% — untested is not the same as failing.
 * @returns {Record<string, {attempts:number, correct:number, accuracy:number}>}
 */
export function topicAccuracy(attempts, questions, window = ROLLING_WINDOW) {
  const byTopic = {};
  for (const a of attempts) {
    const q = questions[a.qid];
    if (!q) continue;
    (byTopic[q.topic] ||= []).push(a);
  }
  const out = {};
  for (const [topic, list] of Object.entries(byTopic)) {
    const recent = list.slice(-window);
    const correct = recent.filter((a) => a.correct).length;
    out[topic] = { attempts: recent.length, correct, accuracy: correct / recent.length };
  }
  return out;
}

/** Topics whose rolling accuracy is under the threshold. */
export function weakTopics(attempts, questions, threshold = WEAK_THRESHOLD) {
  return Object.entries(topicAccuracy(attempts, questions))
    .filter(([, s]) => s.accuracy < threshold)
    .map(([t]) => t);
}

/**
 * Build today's queue.
 *
 * Selection, in priority order:
 *   1. never-seen questions in weak topics
 *   2. due questions in weak topics
 *   3. due questions everywhere else (never-seen questions count as due)
 *   4. not-yet-due questions in weak topics (the pull-forward rule)
 *
 * Within a bucket, struggling questions come first, then oldest due date, and
 * the survivors are dealt round-robin across topics. Without that last step a
 * fresh bank ties on every criterion and falls through to qid order, so the
 * first sessions are drawn entirely from whichever topic was imported first —
 * and the topic-level weak detection cannot see the other topics at all until
 * the bank has been worked through in import order.
 */
/** Deal one bucket's entries round-robin across topics, order preserved. */
function dealAcrossTopics(entries) {
  const lanes = new Map();
  for (const e of entries) {
    if (!lanes.has(e.topic)) lanes.set(e.topic, []);
    lanes.get(e.topic).push(e);
  }
  const queues = [...lanes.values()];
  const out = [];
  const deepest = Math.max(0, ...queues.map((l) => l.length));
  for (let i = 0; i < deepest; i++) {
    for (const lane of queues) {
      if (i < lane.length) out.push(lane[i]);
    }
  }
  return out;
}

/**
 * Spread topics *within* each priority bucket, never across them. Interleaving
 * the whole queue would let a bucket-4 question from an untouched topic jump
 * ahead of a bucket-0 question from a weak one, which is exactly the priority
 * the buckets exist to enforce.
 */
function interleaveByTopic(entries) {
  const buckets = new Map();
  for (const e of entries) {
    if (!buckets.has(e.bucket)) buckets.set(e.bucket, []);
    buckets.get(e.bucket).push(e);
  }
  return [...buckets.keys()]
    .sort((a, b) => a - b)
    .flatMap((b) => dealAcrossTopics(buckets.get(b)));
}

export function buildQueue(questions, schedule, attempts, opts = {}) {
  const { limit = 20, today = todayISO(), threshold = WEAK_THRESHOLD } = opts;
  const weak = new Set(weakTopics(attempts, questions, threshold));

  const scored = Object.entries(questions).map(([qid, q]) => {
    const s = schedule[qid];
    const isWeak = weak.has(q.topic);
    const unseen = !s || s.reps === 0;
    const due = s ? daysBetween(today, s.due_date) <= 0 : true;
    // Note `unseen` implies `due` — a question with no schedule entry is due
    // by definition — so there is no separate "unseen elsewhere" tier.
    let bucket;
    if (isWeak && unseen) bucket = 0;
    else if (isWeak && due) bucket = 1;
    else if (due) bucket = 2;
    else if (isWeak) bucket = 3;
    else bucket = 4; // not due, not weak — skip unless we're short
    return {
      qid,
      bucket,
      struggling: !!s?.struggling,
      overdue: s ? -daysBetween(today, s.due_date) : 9999,
      weak: isWeak,
      topic: q.topic,
    };
  });

  scored.sort((a, b) =>
    a.bucket - b.bucket ||
    Number(b.struggling) - Number(a.struggling) ||
    b.overdue - a.overdue ||
    a.qid.localeCompare(b.qid));

  const queue = scored.filter((s) => s.bucket < 4);
  // If nothing is due, fall back to the least-recently-scheduled material so
  // a session is never empty.
  const picked = interleaveByTopic(queue.length ? queue : scored).slice(0, limit);
  return picked.map((s) => s.qid);
}

/** Rebuild schedule_state from scratch by replaying the append-only log. */
export function replay(attempts, today = todayISO()) {
  const state = {};
  for (const a of attempts) {
    const day = (a.timestamp || '').slice(0, 10) || today;
    state[a.qid] = grade(state[a.qid], a.correct, day);
  }
  return state;
}
