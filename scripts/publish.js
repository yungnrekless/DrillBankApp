#!/usr/bin/env node
/**
 * Build the shareable site into docs/ — a landing page plus one standalone
 * page per chapter, ready for GitHub Pages to serve from the docs/ folder.
 *
 *   node scripts/publish.js
 *   node scripts/publish.js --title "NUR 4353 Drills"
 *
 * Every page is the same self-contained export used by scripts/export.js, so
 * a link works on a phone with nothing to install, and saving a page still
 * gives an offline copy.
 *
 * docs/ is committed on purpose: Pages serves the built files, so they have
 * to be in the repo. Re-run this after importing new questions.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderExport, renderIndex } from '../src/export.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BANK = path.join(ROOT, 'data', 'questions.json');
const DOCS = path.join(ROOT, 'docs');

/** "ch25.md" -> "Chapter 25";  "week4-review.md" -> "Week4 review" */
function prettyName(source) {
  const base = source.replace(/\.[^.]+$/, '');
  const chapter = base.match(/^ch(?:apter)?[\s_-]*(\d+)$/i);
  if (chapter) return `Chapter ${chapter[1]}`;
  return base.replace(/[_-]+/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
}

function slugify(source) {
  return source.replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

function main() {
  const args = process.argv.slice(2);
  const titleIdx = args.indexOf('--title');
  const siteTitle = titleIdx > -1 ? args[titleIdx + 1] : 'Drill Bank';

  if (!fs.existsSync(BANK)) {
    console.error('data/questions.json not found — run: node scripts/import.js drills/');
    process.exit(1);
  }
  const bank = JSON.parse(fs.readFileSync(BANK, 'utf8'));

  const bySource = {};
  for (const q of Object.values(bank)) {
    (bySource[q.source || 'drill.md'] ||= []).push(q);
  }
  const sources = Object.keys(bySource).sort();
  if (!sources.length) {
    console.error('The bank is empty — nothing to publish.');
    process.exit(1);
  }

  // Rebuild docs/ from scratch so a renamed or removed chapter cannot leave a
  // stale page live on the site.
  fs.rmSync(DOCS, { recursive: true, force: true });
  fs.mkdirSync(DOCS, { recursive: true });

  const chapters = [];
  for (const source of sources) {
    const items = bySource[source];
    const name = prettyName(source);
    const slug = slugify(source);
    const topics = [...new Set(items.map((q) => q.topic))];
    const sata = items.filter((q) => q.type === 'sata').length;

    const html = renderExport(Object.fromEntries(items.map((q, i) => [`i${i}`, q])), {
      title: `${name} — ${siteTitle}`,
      subtitle: name,
      note: 'Answer order is reshuffled every run. Select-all items are scored all or nothing, the same as on the exam.',
    });
    fs.writeFileSync(path.join(DOCS, `${slug}.html`), html);
    chapters.push({ href: `${slug}.html`, title: name, count: items.length, sata, topics });
    console.log(`  ${slug}.html  —  ${items.length} questions (${sata} SATA)`);
  }

  fs.writeFileSync(path.join(DOCS, 'index.html'), renderIndex(chapters, {
    title: siteTitle,
    subtitle: `${chapters.length} chapter${chapters.length === 1 ? '' : 's'}`,
  }));
  // Stops GitHub Pages running the files through Jekyll.
  fs.writeFileSync(path.join(DOCS, '.nojekyll'), '');

  const total = Object.keys(bank).length;
  console.log(`\nBuilt docs/ — index plus ${chapters.length} chapter page(s), ${total} questions total.`);
  console.log('Commit and push, then enable Pages: Settings → Pages → Deploy from a branch → docs/');
}

main();
