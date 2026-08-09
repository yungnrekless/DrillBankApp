#!/usr/bin/env node
/**
 * Build the shareable site into docs/, ready for GitHub Pages to serve from
 * the docs/ folder.
 *
 *   node scripts/publish.js                        # every course
 *   node scripts/publish.js --course nur4353       # just one, others left alone
 *   node scripts/publish.js --title "Nursing Drills"
 *
 * Layout mirrors the courses/ tree, so one Pages site carries every class:
 *
 *   docs/index.html            course picker
 *   docs/<slug>/index.html     that course's chapter picker / session builder
 *   docs/<slug>/ch5.html       one standalone page per chapter
 *
 * Every chapter page is the same self-contained export used by
 * scripts/export.js, so a link works on a phone with nothing to install, and
 * saving a page still gives an offline copy.
 *
 * docs/ is committed on purpose: Pages serves the built files, so they have
 * to be in the repo. Re-run this after importing new questions.
 */

import fs from 'node:fs';
import path from 'node:path';
import { renderExport, renderIndex, renderCourseIndex } from '../src/export.js';
import { ROOT, coursePaths, displayName, listCourses, resolveCourseOrExit } from '../src/courses.js';

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

// The drill payload each question contributes, stripped of bank-internal
// fields (source, id) exactly as renderExport does. Shared so the per-chapter
// pages and the combined-session index embed the same shape.
const toDrillItem = (q) => ({
  topic: q.topic,
  subtopic: q.subtopic,
  stem: q.stem,
  options: q.options,
  correct: q.correct,
  sata: q.type === 'sata',
  why: q.rationale,
  trap: q.trap || null,
});

function loadBank(slug) {
  const bankFile = coursePaths(slug).questions;
  if (!fs.existsSync(bankFile)) return null;
  const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
  return Object.keys(bank).length ? bank : null;
}

/** Build docs/<slug>/ from that course's bank. False if there was nothing to build. */
function publishCourse(slug, siteTitle) {
  const bank = loadBank(slug);
  if (!bank) {
    console.warn(`  skipped ${slug} — empty or unimported (run scripts/import.js --course ${slug})`);
    return false;
  }

  const bySource = {};
  for (const q of Object.values(bank)) {
    (bySource[q.source || 'drill.md'] ||= []).push(q);
  }

  const courseName = displayName(slug);
  const outDir = path.join(DOCS, slug);
  // Rebuild this course's folder from scratch so a renamed or removed chapter
  // cannot leave a stale page live. Other courses are untouched.
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  // Order chapters by chapter number, not lexically, so the index lists
  // Ch2 before Ch10 rather than after it.
  const chapterNo = (src) => {
    const m = src.match(/(\d+)/);
    return m ? Number(m[1]) : Infinity;
  };
  const ordered = Object.keys(bySource)
    .sort((a, b) => chapterNo(a) - chapterNo(b) || a.localeCompare(b));

  const chapters = [];
  for (const source of ordered) {
    const items = bySource[source];
    const name = prettyName(source);
    const fileSlug = slugify(source);
    const topics = [...new Set(items.map((q) => q.topic))];
    const sata = items.filter((q) => q.type === 'sata').length;

    const html = renderExport(Object.fromEntries(items.map((q, i) => [`i${i}`, q])), {
      title: `${name} — ${courseName}`,
      subtitle: name,
      note: 'Answer order is reshuffled every run. Select-all items are scored all or nothing, the same as on the exam.',
    });
    fs.writeFileSync(path.join(outDir, `${fileSlug}.html`), html);
    chapters.push({
      href: `${fileSlug}.html`,
      title: name,
      count: items.length,
      sata,
      topics,
      items: items.map(toDrillItem),
    });
    console.log(`  ${slug}/${fileSlug}.html  —  ${items.length} questions (${sata} SATA)`);
  }

  fs.writeFileSync(path.join(outDir, 'index.html'), renderIndex(chapters, {
    title: courseName,
    subtitle: `${chapters.length} chapter${chapters.length === 1 ? '' : 's'} · ${siteTitle}`,
  }));
  return true;
}

/** A course's card on the picker, or null if it has no page to link to. */
function summarize(slug) {
  const bank = loadBank(slug);
  // Only link courses whose pages are actually on disk — otherwise publishing
  // one course would put dead links to the others on the front page.
  if (!bank || !fs.existsSync(path.join(DOCS, slug, 'index.html'))) return null;
  const qs = Object.values(bank);
  return {
    href: `${slug}/index.html`,
    name: displayName(slug),
    chapters: new Set(qs.map((q) => q.source || 'drill.md')).size,
    count: qs.length,
    sata: qs.filter((q) => q.type === 'sata').length,
    topics: new Set(qs.map((q) => q.topic)).size,
  };
}

function main() {
  const args = process.argv.slice(2);
  const titleIdx = args.indexOf('--title');
  const siteTitle = titleIdx > -1 ? args[titleIdx + 1] : 'Drill Bank';
  const courseIdx = args.indexOf('--course');
  const oneCourse = courseIdx > -1 ? resolveCourseOrExit(args[courseIdx + 1]) : null;

  const all = listCourses().map((c) => c.slug);
  if (!all.length) {
    console.error('No courses found in courses/ — nothing to publish.');
    process.exit(1);
  }

  // A full publish rebuilds docs/ from nothing, so a course removed from
  // courses/ cannot leave its pages live. A single-course publish keeps the
  // rest of the site and only replaces that one folder.
  if (!oneCourse) fs.rmSync(DOCS, { recursive: true, force: true });
  fs.mkdirSync(DOCS, { recursive: true });

  const targets = oneCourse ? [oneCourse] : all;
  const built = targets.filter((slug) => publishCourse(slug, siteTitle));
  if (!built.length) {
    console.error('Nothing was published — every course was empty or unimported.');
    process.exit(1);
  }

  // Built from what is on disk, not from this run, so the other courses stay
  // on the picker after a single-course publish.
  const cards = all.map(summarize).filter(Boolean);
  fs.writeFileSync(path.join(DOCS, 'index.html'), renderCourseIndex(cards, {
    title: siteTitle,
    subtitle: `${cards.length} course${cards.length === 1 ? '' : 's'}`,
  }));
  // Stops GitHub Pages running the files through Jekyll.
  fs.writeFileSync(path.join(DOCS, '.nojekyll'), '');

  const total = cards.reduce((n, c) => n + c.count, 0);
  console.log(`\nBuilt docs/ — course picker plus ${cards.length} course(s), ${total} questions total.`);
  // Pages deploys from .github/workflows/pages.yml, not the deploy-from-a-branch
  // backend, which stalled on this repo. Pushing is what triggers it.
  console.log('Commit and push to main — .github/workflows/pages.yml deploys docs/ from there.');
}

main();
