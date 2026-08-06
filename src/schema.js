/**
 * Canonical shapes for the three data files. Shared by the importer, the
 * server and the browser bundle, so there is exactly one definition of
 * "what a question is".
 *
 * questions.json      { [qid]: Question }        immutable once imported
 * attempts_log.json   Attempt[]                  append-only
 * schedule_state.json { [qid]: ScheduleEntry }   recomputed each session
 */

export const QUESTION_TYPES = ['single', 'sata'];

/**
 * @typedef {Object} Question
 * @property {string}   topic
 * @property {string}   subtopic
 * @property {string}   stem
 * @property {string[]} options
 * @property {number[]} correct    indices into options
 * @property {string}   rationale
 * @property {string}   [trap]     why the tempting wrong answer is wrong
 * @property {'single'|'sata'} type
 * @property {string}   [source]   file the question was imported from
 */

/**
 * @typedef {Object} Attempt
 * @property {string}  qid
 * @property {string}  timestamp   ISO-8601
 * @property {boolean} correct     SATA is all-or-nothing
 * @property {string}  session_id
 * @property {number[]} [selected] what was actually picked, for post-hoc analysis
 */

/**
 * @typedef {Object} ScheduleEntry
 * @property {number}  interval_days
 * @property {number}  ease
 * @property {string}  due_date      YYYY-MM-DD
 * @property {'right'|'wrong'|null} last_result
 * @property {boolean} struggling
 * @property {number}  reps
 */

const isStr = (v) => typeof v === 'string' && v.length > 0;

/** Validate one question. Returns an array of human-readable problems. */
export function validateQuestion(qid, q) {
  const errs = [];
  if (!q || typeof q !== 'object') return [`${qid}: not an object`];
  for (const f of ['topic', 'subtopic', 'stem', 'rationale']) {
    if (!isStr(q[f])) errs.push(`${qid}: missing or empty "${f}"`);
  }
  if (!QUESTION_TYPES.includes(q.type)) {
    errs.push(`${qid}: type must be one of ${QUESTION_TYPES.join('|')}`);
  }
  if (!Array.isArray(q.options) || q.options.length < 2) {
    errs.push(`${qid}: needs at least 2 options`);
  }
  if (!Array.isArray(q.correct) || q.correct.length < 1) {
    errs.push(`${qid}: needs at least 1 correct index`);
  } else {
    for (const i of q.correct) {
      if (!Number.isInteger(i) || i < 0 || i >= (q.options || []).length) {
        errs.push(`${qid}: correct index ${i} is out of range`);
      }
    }
    if (q.type === 'single' && q.correct.length !== 1) {
      errs.push(`${qid}: type "single" must have exactly 1 correct answer`);
    }
  }
  return errs;
}

/** Validate a whole question bank. Throws on the first batch of problems. */
export function validateBank(bank) {
  const errs = Object.entries(bank).flatMap(([qid, q]) => validateQuestion(qid, q));
  if (errs.length) {
    throw new Error(`Question bank failed validation:\n  ${errs.join('\n  ')}`);
  }
  return true;
}

export function makeQid(n) {
  return `q_${String(n).padStart(4, '0')}`;
}
