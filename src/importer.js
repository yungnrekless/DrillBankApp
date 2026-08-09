/**
 * Importer: fact-bank / drill files -> questions.json
 *
 * Supported input formats
 * -----------------------
 * 1. Markdown / plain text (see FORMAT.md for the full spec):
 *
 *      Topic: Economics
 *      Subtopic: Payment Mechanisms
 *
 *      Q: Under a capitated payment model, financial risk shifts to whom?
 *      A) The patient
 *      B) The provider organization
 *      C) The commercial payer
 *      D) The federal government
 *      Answer: B
 *      Rationale: Capitation pays a fixed per-member-per-month amount ...
 *      Trap: (C) is the reflex answer because payers carry risk under FFS ...
 *
 *    `Answer: A, C, D` (more than one letter) makes the question a SATA.
 *    Topic/Subtopic are sticky: set them once and every following question
 *    inherits them until the next declaration. If a file never declares a
 *    topic, the filename is used.
 *
 *    Letter references in Rationale/Trap are fine — the runners translate them
 *    to the shuffled display order. `checkOptionRefs` warns about the two kinds
 *    that translation cannot rescue.
 *
 * 2. JSON — either an array of question objects or a `{qid: question}` map.
 *    Used to re-import a previously exported bank.
 *
 * Identity rule: questions never change once imported. Re-running the
 * importer against an existing bank keeps the original qid for any question
 * whose stem already exists, so attempt history and schedule state survive.
 */

import { validateQuestion, makeQid } from './schema.js';
import { optionRefs } from './relabel.js';

/**
 * Key lines are matched after emphasis markers are stripped, because drill
 * files bold them inconsistently — `**Answer:** B`, `**Answer**: B` and
 * `Answer: B` all have to mean the same thing.
 */
const KEYS = {
  topic: /^\s*topic\s*[:\-]\s*(.+)$/i,
  subtopic: /^\s*sub-?topic\s*[:\-]\s*(.+)$/i,
  question: /^\s*(?:#{1,6}\s*)?(?:Q(?:uestion)?\s*\d*)\s*[:.)]\s*(.*)$/i,
  option: /^\s*[-*]?\s*([A-Ha-h])\s*[).:]\s+(.+)$/,
  answer: /^\s*[-*]?\s*(?:answer|correct|key)\s*[:\-]\s*(.+)$/i,
  rationale: /^\s*[-*]?\s*(?:rationale|why|explanation)\s*[:\-]\s*(.*)$/i,
  trap: /^\s*[-*]?\s*(?:trap|distractor|pitfall)\s*[:\-]\s*(.*)$/i,
  type: /^\s*[-*]?\s*type\s*[:\-]\s*(.+)$/i,
};

/** Remove `**bold**` / `__bold__` markers so key detection is not thrown by them. */
function stripEmphasis(line) {
  return line.replace(/\*\*/g, '').replace(/__/g, '');
}

/** "Economics_ch04-drills.md" -> "economics ch04 drills" */
export function topicFromFilename(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[_\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/** Collapse whitespace and case so the same stem always hashes the same. */
export function normalizeStem(stem) {
  return stem.toLowerCase().replace(/\s+/g, ' ').replace(/[^\w\s]/g, '').trim();
}

function letterToIndex(letter) {
  return letter.trim().toUpperCase().charCodeAt(0) - 65;
}

function parseAnswerLine(raw) {
  // "B", "A, C, D", "A and C", "B) provider organization"
  const letters = (raw.match(/\b([A-Ha-h])\b(?=\s*[).,;]|\s|$)/g) || [])
    .map((s) => letterToIndex(s));
  return [...new Set(letters)].sort((a, b) => a - b);
}

/**
 * Parse one markdown/text drill file into draft questions (no qids yet).
 * @param {string} text
 * @param {string} filename used for the topic fallback and provenance
 * @returns {{questions: object[], warnings: string[]}}
 */
export function parseMarkdown(text, filename = 'unknown') {
  const fallbackTopic = topicFromFilename(filename);
  const lines = text.split(/\r?\n/).map(stripEmphasis);
  const questions = [];
  const warnings = [];

  let topic = null;
  let subtopic = 'general';
  let cur = null;
  let field = null; // which multi-line field we are currently appending to

  const flush = () => {
    if (!cur) return;
    if (!cur.options.length || !cur.correct.length) {
      warnings.push(`${filename}: dropped "${cur.stem.slice(0, 60)}..." (missing options or answer)`);
    } else {
      cur.type = cur.type || (cur.correct.length > 1 ? 'sata' : 'single');
      cur.rationale = cur.rationale.trim() || 'No rationale supplied at import time.';
      cur.trap = cur.trap.trim() || undefined;
      cur.stem = cur.stem.trim();
      questions.push(cur);
    }
    cur = null;
    field = null;
  };

  for (const line of lines) {
    let m;

    if ((m = line.match(KEYS.topic))) { flush(); topic = m[1].trim(); continue; }
    if ((m = line.match(KEYS.subtopic))) { flush(); subtopic = m[1].trim(); continue; }

    if ((m = line.match(KEYS.question))) {
      flush();
      cur = {
        topic: topic || fallbackTopic,
        subtopic,
        stem: m[1] || '',
        options: [],
        correct: [],
        rationale: '',
        trap: '',
        type: null,
        source: filename,
      };
      field = 'stem';
      continue;
    }

    if (!cur) continue; // preamble, prose between questions — ignored

    if ((m = line.match(KEYS.option))) {
      const idx = letterToIndex(m[1]);
      cur.options[idx] = m[2].trim();
      field = null;
      continue;
    }
    if ((m = line.match(KEYS.answer))) { cur.correct = parseAnswerLine(m[1]); field = null; continue; }
    if ((m = line.match(KEYS.rationale))) { cur.rationale = m[1]; field = 'rationale'; continue; }
    if ((m = line.match(KEYS.trap))) { cur.trap = m[1]; field = 'trap'; continue; }
    if ((m = line.match(KEYS.type))) {
      const t = m[1].trim().toLowerCase();
      cur.type = t.includes('sata') || t.includes('multi') ? 'sata' : 'single';
      field = null;
      continue;
    }

    // Continuation of whatever multi-line field we are inside.
    if (field && line.trim()) cur[field] += ` ${line.trim()}`;
    else if (!line.trim()) field = field === 'stem' ? null : field;
  }
  flush();

  // Holes in the option list mean a lettered option was skipped (A, B, D).
  // Note: Array#some skips holes, so the gap has to be probed by index.
  for (const q of questions) {
    const hasGap = Array.from({ length: q.options.length }, (_, i) => q.options[i])
      .some((o) => o === undefined);
    if (hasGap) {
      warnings.push(`${filename}: "${q.stem.slice(0, 40)}..." has gaps in its option letters`);
      const present = [];
      const remap = new Map();
      q.options.forEach((o, i) => { if (o !== undefined) { remap.set(i, present.length); present.push(o); } });
      q.options = present;
      q.correct = q.correct.map((i) => remap.get(i)).filter((i) => i !== undefined);
    }
  }

  for (const q of questions) warnings.push(...checkOptionRefs(q, filename));

  return { questions, warnings };
}

/**
 * Flag letter references in feedback text that point somewhere unhelpful.
 *
 * Writing "(C) is the reflex answer" in a Trap is normal and supported — the
 * runners translate those letters into whatever slot the option is shuffled
 * into (see src/relabel.js). What they cannot fix is a reference that is wrong
 * in the source:
 *
 * - A letter past the end of the option list names nothing, so it is left as
 *   written and prints a letter the reader cannot find on screen.
 * - A trap whose references are *all* correct answers usually means the author
 *   miscounted, since a trap exists to explain a distractor. It is not always a
 *   mistake — "(D) looks too generous to be keyed, which is why students drop
 *   it" is a real pattern — so this warns rather than rejects. Exactly one
 *   question in the two current banks trips it, which is why it stays a signal
 *   and not noise.
 *
 * @param {object} q draft question, after any gap remapping
 * @param {string} filename for the warning text
 * @returns {string[]} warnings
 */
function checkOptionRefs(q, filename) {
  const warnings = [];
  if (!Array.isArray(q.options)) return warnings;
  const where = `${filename}: "${q.stem.slice(0, 40)}..."`;
  const letter = (i) => String.fromCharCode(65 + i);

  for (const field of ['rationale', 'trap']) {
    const refs = optionRefs(q[field]);
    if (!refs.length) continue;

    const past = [...new Set(refs.filter((i) => i >= q.options.length))];
    if (past.length) {
      warnings.push(`${where} ${field} refers to (${past.map(letter).join(') (')}) ` +
        `but the question has only ${q.options.length} options`);
    }

    if (field === 'trap' && !past.length) {
      const key = new Set(q.correct || []);
      if (refs.every((i) => key.has(i))) {
        warnings.push(`${where} trap refers only to correct answers ` +
          `(${[...new Set(refs)].map(letter).join(') (')}) — check the letters name the distractor`);
      }
    }
  }

  return warnings;
}

/** Parse a JSON bank (array or {qid: q} map) into draft questions. */
export function parseJson(text, filename = 'unknown') {
  const data = JSON.parse(text);
  const list = Array.isArray(data) ? data : Object.values(data);
  return {
    questions: list.map((q) => ({ source: filename, ...q })),
    warnings: [],
  };
}

/**
 * Merge draft questions into an existing bank.
 *
 * @param {Record<string, object>} existing current questions.json contents
 * @param {object[]} drafts
 * @returns {{bank: object, added: number, skipped: number, errors: string[]}}
 */
export function mergeIntoBank(existing, drafts) {
  const bank = { ...existing };
  const byStem = new Map(
    Object.entries(existing).map(([qid, q]) => [normalizeStem(q.stem), qid]),
  );
  let counter = Object.keys(existing).reduce((max, qid) => {
    const n = parseInt(qid.replace(/\D/g, ''), 10);
    return Number.isFinite(n) ? Math.max(max, n) : max;
  }, 0);

  let added = 0;
  let skipped = 0;
  const errors = [];

  for (const draft of drafts) {
    const key = normalizeStem(draft.stem || '');
    if (!key) { errors.push('question with an empty stem'); continue; }
    if (byStem.has(key)) { skipped++; continue; } // already imported — keep the original
    const qid = makeQid(++counter);
    const q = {
      topic: draft.topic,
      subtopic: draft.subtopic || 'general',
      stem: draft.stem,
      options: draft.options,
      correct: draft.correct,
      rationale: draft.rationale,
      type: draft.type,
      ...(draft.trap ? { trap: draft.trap } : {}),
      ...(draft.source ? { source: draft.source } : {}),
    };
    const problems = validateQuestion(qid, q);
    if (problems.length) { errors.push(...problems); continue; }
    bank[qid] = q;
    byStem.set(key, qid);
    added++;
  }

  return { bank, added, skipped, errors };
}
