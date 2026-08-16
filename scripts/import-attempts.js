#!/usr/bin/env node
/**
 * Pull drill results off the published pages into a course's attempt log.
 *
 *   node scripts/import-attempts.js drillbank-nur4351-2026-08-10.json
 *   node scripts/import-attempts.js --stdin                  # paste, then Ctrl-Z / Ctrl-D
 *   node scripts/import-attempts.js results.json --dry-run   # report, write nothing
 *
 * The published pages have no backend to post to (see src/tracker.js), so the
 * LT button in the corner buffers answers in the browser and hands them over
 * as JSON. This is the other end of that: it maps each record's stem key back
 * to a qid, appends to attempts_log.json, and rebuilds schedule_state.json.
 *
 * The course comes from the file itself; --course only has to be given if the
 * blob predates that field, and a mismatch is an error rather than a guess —
 * filing one class's answers into another's log would corrupt both dashboards.
 *
 * Idempotent: an attempt is identified by qid + timestamp + session, so
 * re-importing the same file adds nothing. That matters because the browser
 * buffer is not cleared automatically — you can import, keep drilling, and
 * import again without double-counting the overlap.
 */

import fs from 'node:fs';
import path from 'node:path';
import { keyIndex, mergeAttempts } from '../src/tracker.js';
import { replay } from '../src/scheduler.js';
import { ROOT, coursePaths, displayName, resolveCourseOrExit } from '../src/courses.js';

function die(msg) {
  console.error(msg);
  process.exit(1);
}

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch {
    return die('Could not read from stdin.');
  }
}

/** attempts_log.json is the one file here that cannot be regenerated. */
function writeAtomic(file, data) {
  const tmp = `${file}.tmp`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(tmp, data);
  fs.renameSync(tmp, file);
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const useStdin = args.includes('--stdin');

  const courseIdx = args.indexOf('--course');
  const askedCourse = courseIdx > -1 ? args[courseIdx + 1] : null;

  const files = args.filter((a, n) => !a.startsWith('--') && n !== courseIdx + 1);
  if (!useStdin && files.length !== 1) {
    die('Name exactly one exported JSON file, or pass --stdin to paste one.');
  }

  const raw = useStdin ? readStdin() : fs.readFileSync(files[0], 'utf8');
  let blob;
  try {
    blob = JSON.parse(raw);
  } catch (err) {
    die(`That is not valid JSON: ${err.message}`);
  }

  const records = Array.isArray(blob) ? blob : blob.attempts;
  if (!Array.isArray(records)) {
    die('Expected {"course":...,"attempts":[...]} as copied from the LT button.');
  }
  if (!records.length) die('That export holds no answers.');

  // The blob names its own course; --course only overrides when it cannot.
  if (blob.course && askedCourse) {
    const resolved = resolveCourseOrExit(askedCourse);
    if (resolved !== blob.course) {
      die(`That export is from "${blob.course}" but --course resolved to "${resolved}". ` +
        'Refusing to file answers against a different class.');
    }
  }
  const slug = resolveCourseOrExit(blob.course || askedCourse);
  const paths = coursePaths(slug);

  if (!fs.existsSync(paths.questions)) {
    die(`${slug} has no questions.json — run scripts/import.js --course ${slug} first.`);
  }
  const bank = JSON.parse(fs.readFileSync(paths.questions, 'utf8'));
  const { byKey, collisions } = keyIndex(bank);
  if (collisions.length) {
    // Two questions hashing alike would file answers against the wrong one.
    die(`Cannot import: these questions share a stem key, so answers cannot be told apart:\n  ${
      collisions.map((g) => g.join(', ')).join('\n  ')}`);
  }

  const existing = fs.existsSync(paths.attempts)
    ? JSON.parse(fs.readFileSync(paths.attempts, 'utf8'))
    : [];
  const { log, added, duplicates, unmatched } = mergeAttempts(existing, records, byKey);

  console.log(`${displayName(slug)} (${slug})`);
  console.log(`  ${records.length} in the export, ${existing.length} already logged`);
  console.log(`  ${added} added, ${duplicates} already imported, ${unmatched.length} unmatched`);

  if (unmatched.length) {
    // Almost always a stem edited after the page was published.
    console.warn(`  warn: ${unmatched.length} answer(s) match no current question and were ` +
      'left out — the bank has changed since those pages were built. Republish to resync.');
  }
  if (!added) {
    console.log('\nNothing new to record.');
    return;
  }

  const correct = log.filter((a) => a.correct).length;
  console.log(`  log now holds ${log.length} attempts, ${Math.round(correct / log.length * 100)}% correct`);

  if (dryRun) {
    console.log('\n--dry-run: nothing written.');
    return;
  }

  writeAtomic(paths.attempts, `${JSON.stringify(log, null, 2)}\n`);
  // Schedule state is derived, so rebuild it rather than patching it.
  writeAtomic(paths.schedule, `${JSON.stringify(replay(log), null, 2)}\n`);
  console.log(`\nWrote ${path.relative(ROOT, paths.attempts)} and ${path.relative(ROOT, paths.schedule)}`);
  console.log('The dashboard and today\'s queue will reflect these on next load.');
}

main();
