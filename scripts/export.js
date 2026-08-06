#!/usr/bin/env node
/**
 * Export a chapter (or any slice of the bank) as one self-contained HTML file
 * you can send to someone. No server, no data files, no network.
 *
 *   node scripts/export.js --list
 *   node scripts/export.js ch25
 *   node scripts/export.js ch25 --title "NUR 4353 — Chapter 25 Drill"
 *   node scripts/export.js --topic poverty --topic homelessness --out dist/econ.html
 *   node scripts/export.js --all --out dist/everything.html
 *
 * Selection:
 *   <positional>   match questions whose source file contains this string
 *   --topic NAME   include a topic (repeatable); matched case-insensitively
 *   --all          the whole bank
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderExport } from '../src/export.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BANK = path.join(ROOT, 'data', 'questions.json');

function parseArgs(argv) {
  const out = { topics: [], match: null, all: false, list: false, title: null, subtitle: null, note: null, outFile: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--all') out.all = true;
    else if (a === '--list') out.list = true;
    else if (a === '--topic') out.topics.push(argv[++i]);
    else if (a === '--title') out.title = argv[++i];
    else if (a === '--subtitle') out.subtitle = argv[++i];
    else if (a === '--note') out.note = argv[++i];
    else if (a === '--out') out.outFile = argv[++i];
    else if (a.startsWith('--')) { console.error(`unknown flag ${a}`); process.exit(1); }
    else out.match = a;
  }
  return out;
}

function loadBank() {
  if (!fs.existsSync(BANK)) {
    console.error('data/questions.json not found — run: node scripts/import.js drills/');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(BANK, 'utf8'));
}

function listSources(bank) {
  const bySource = {};
  for (const q of Object.values(bank)) {
    const key = q.source || '(no source)';
    bySource[key] ||= { n: 0, topics: new Set() };
    bySource[key].n++;
    bySource[key].topics.add(q.topic);
  }
  console.log('Sources in the bank:\n');
  for (const [src, s] of Object.entries(bySource)) {
    console.log(`  ${src}  —  ${s.n} questions`);
    console.log(`    topics: ${[...s.topics].join(', ')}\n`);
  }
  console.log('Export one with:  node scripts/export.js <source-substring>');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const bank = loadBank();

  if (args.list) return listSources(bank);

  if (!args.all && !args.match && !args.topics.length) {
    console.error('usage: node scripts/export.js <source-substring> | --topic NAME | --all  [--out FILE]');
    console.error('       node scripts/export.js --list   to see what is in the bank');
    process.exit(1);
  }

  const wantedTopics = args.topics.map((t) => t.toLowerCase());
  const selected = Object.fromEntries(Object.entries(bank).filter(([, q]) => {
    if (args.all) return true;
    if (args.match && !(q.source || '').toLowerCase().includes(args.match.toLowerCase())) return false;
    if (wantedTopics.length && !wantedTopics.includes(q.topic.toLowerCase())) return false;
    return true;
  }));

  const count = Object.keys(selected).length;
  if (!count) {
    console.error('Nothing matched. Run with --list to see what is in the bank.');
    process.exit(1);
  }

  const topics = [...new Set(Object.values(selected).map((q) => q.topic))];
  const stem = args.match || (args.topics.length ? args.topics.join('-') : 'drill');
  const slug = stem.replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const outFile = path.resolve(ROOT, args.outFile || path.join('dist', `${slug}.html`));

  const html = renderExport(selected, {
    title: args.title || `Drill — ${stem.replace(/\.[^.]+$/, '')}`,
    subtitle: args.subtitle || `${count} questions · ${topics.length} topics`,
    note: args.note
      ?? 'Answer order is reshuffled every run. Select-all items are scored all or nothing, the same as on the exam.',
  });

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);

  const sata = Object.values(selected).filter((q) => q.type === 'sata').length;
  const kb = Math.round(Buffer.byteLength(html) / 1024);
  console.log(`${count} questions (${sata} SATA) across ${topics.length} topics → ${path.relative(ROOT, outFile)} (${kb} KB)`);
  console.log('Self-contained: open it in any browser, no server needed.');
}

main();
