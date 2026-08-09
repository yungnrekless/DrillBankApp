#!/usr/bin/env node
/**
 * CLI importer.
 *
 *   node scripts/import.js --course nur4353            # that course's drills/
 *   node scripts/import.js --course nur4353 seed/      # every .md/.txt/.json in a dir
 *   node scripts/import.js --course nur4353 a.md b.md  # specific files
 *   node scripts/import.js --course nur4353 --dry-run  # parse and report, write nothing
 *
 * --course takes a slug or any unambiguous prefix of one, and may be omitted
 * when there is only one course. With no files named, it imports that course's
 * own drills/ directory, which is the usual case.
 *
 * Idempotent: re-running against already-imported content adds nothing and
 * leaves existing qids (and therefore attempt history) alone.
 */

import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown, parseJson, mergeIntoBank } from '../src/importer.js';
import { validateBank } from '../src/schema.js';
import { ROOT, coursePaths, displayName, resolveCourseOrExit } from '../src/courses.js';

const EXTS = new Set(['.md', '.markdown', '.txt', '.json']);

function collect(target) {
  const stat = fs.statSync(target);
  if (stat.isFile()) return [target];
  return fs.readdirSync(target)
    .map((f) => path.join(target, f))
    .filter((f) => fs.statSync(f).isFile() && EXTS.has(path.extname(f).toLowerCase()))
    .sort();
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  const courseIdx = args.indexOf('--course');
  const slug = resolveCourseOrExit(courseIdx > -1 ? args[courseIdx + 1] : null);
  const paths = coursePaths(slug);
  const BANK = paths.questions;

  // Drop --course and its value along with the other flags.
  const targets = args.filter((a, i) => !a.startsWith('--') && i !== courseIdx + 1);

  // No files named — import the course's own drills/, the everyday case.
  const roots = targets.length ? targets : [paths.drills];
  if (!targets.length && !fs.existsSync(paths.drills)) {
    console.error(`${path.relative(ROOT, paths.drills)}/ does not exist — name the files to import.`);
    process.exit(1);
  }

  console.log(`Course: ${displayName(slug)}  (${slug})`);

  const files = roots.flatMap(collect);
  if (!files.length) {
    console.error('No importable files found (.md, .markdown, .txt, .json).');
    process.exit(1);
  }

  const drafts = [];
  const warnings = [];
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    const name = path.basename(file);
    const parsed = path.extname(file).toLowerCase() === '.json'
      ? parseJson(text, name)
      : parseMarkdown(text, name);
    console.log(`  parsed ${parsed.questions.length.toString().padStart(4)} from ${name}`);
    drafts.push(...parsed.questions);
    warnings.push(...parsed.warnings);
  }

  const existing = fs.existsSync(BANK) ? JSON.parse(fs.readFileSync(BANK, 'utf8')) : {};
  const { bank, added, skipped, errors } = mergeIntoBank(existing, drafts);

  for (const w of warnings) console.warn(`  warn: ${w}`);
  for (const e of errors) console.error(`  error: ${e}`);

  console.log(`\n${added} added, ${skipped} already present, ${errors.length} rejected.`);
  console.log(`Bank now holds ${Object.keys(bank).length} questions across ` +
    `${new Set(Object.values(bank).map((q) => q.topic)).size} topics.`);

  if (dryRun) { console.log('\n--dry-run: nothing written.'); return; }

  validateBank(bank);
  fs.mkdirSync(path.dirname(BANK), { recursive: true });
  fs.writeFileSync(BANK, `${JSON.stringify(bank, null, 2)}\n`);
  console.log(`Wrote ${path.relative(ROOT, BANK)}`);
}

main();
