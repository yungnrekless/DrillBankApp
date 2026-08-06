#!/usr/bin/env node
/**
 * CLI importer.
 *
 *   node scripts/import.js seed/                  # every .md/.txt/.json in a dir
 *   node scripts/import.js seed/economics.md ...  # specific files
 *   node scripts/import.js seed/ --dry-run        # parse and report, write nothing
 *
 * Idempotent: re-running against already-imported content adds nothing and
 * leaves existing qids (and therefore attempt history) alone.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseMarkdown, parseJson, mergeIntoBank } from '../src/importer.js';
import { validateBank } from '../src/schema.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BANK = path.join(ROOT, 'data', 'questions.json');
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
  const targets = args.filter((a) => !a.startsWith('--'));

  if (!targets.length) {
    console.error('usage: node scripts/import.js <file-or-dir> [...] [--dry-run]');
    process.exit(1);
  }

  const files = targets.flatMap(collect);
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
