/**
 * Course resolution — the one place that knows where a course's files live.
 *
 * The layout mirrors factbank-tool (`courses/<slug>/…`) and study-guides
 * (`<slug>/…`) so the same slug names a course in all three tools and the
 * pipeline between them is a matter of passing the slug along:
 *
 *   courses/<slug>/course.json   metadata (same field names as factbank's book.json)
 *   courses/<slug>/drills/       the authored drill files
 *   courses/<slug>/sources/      the fact banks the drills were written from
 *   courses/<slug>/data/         questions.json, attempts_log.json, schedule_state.json
 *
 * Attempt history and schedule state are per course on purpose: two classes
 * share no questions, so a topic's rolling accuracy is only meaningful inside
 * one of them.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const COURSES_DIR = path.join(ROOT, 'courses');

// Slugs arrive from the CLI *and* from URL paths, so the shape is enforced
// rather than assumed — this is what stops /api/../../etc/passwd resolving.
const SLUG_RE = /^[a-z0-9][a-z0-9._-]*$/;

export function isSlug(value) {
  return typeof value === 'string' && value.length <= 64 && SLUG_RE.test(value);
}

/** Every path belonging to one course. Pure — touches no filesystem. */
export function coursePaths(slug) {
  const dir = path.join(COURSES_DIR, slug);
  const data = path.join(dir, 'data');
  return {
    slug,
    dir,
    meta: path.join(dir, 'course.json'),
    drills: path.join(dir, 'drills'),
    sources: path.join(dir, 'sources'),
    data,
    questions: path.join(data, 'questions.json'),
    attempts: path.join(data, 'attempts_log.json'),
    schedule: path.join(data, 'schedule_state.json'),
  };
}

/** course.json if it is there and parseable, otherwise an empty object. */
export function readMeta(slug) {
  const file = coursePaths(slug).meta;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return {};
  }
}

/** "NUR 4353 — Community/Public Health Nursing", falling back to the slug. */
export function displayName(slug, meta = readMeta(slug)) {
  const parts = [meta.course, meta.course_title].filter(Boolean);
  if (parts.length) return parts.join(' — ');
  return slug.replace(/[-_]+/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
}

function questionCount(slug) {
  try {
    return Object.keys(JSON.parse(fs.readFileSync(coursePaths(slug).questions, 'utf8'))).length;
  } catch {
    return 0;
  }
}

/**
 * Every course directory, slug-sorted. A directory counts as a course if it
 * has any of course.json / drills / data — so a course being set up (drills
 * written, nothing imported yet) still shows up instead of silently vanishing.
 */
export function listCourses() {
  let entries;
  try {
    entries = fs.readdirSync(COURSES_DIR, { withFileTypes: true });
  } catch {
    return [];
  }
  return entries
    .filter((e) => e.isDirectory() && isSlug(e.name))
    .map((e) => e.name)
    .filter((slug) => {
      const p = coursePaths(slug);
      return fs.existsSync(p.meta) || fs.existsSync(p.drills) || fs.existsSync(p.data);
    })
    .sort()
    .map((slug) => {
      const meta = readMeta(slug);
      return { slug, name: displayName(slug, meta), meta, questions: questionCount(slug) };
    });
}

/**
 * Turn whatever the user typed into exactly one slug.
 *
 *   resolveCourse('nur4353-community-and-culture')  exact
 *   resolveCourse('nur4353')                        unique prefix/substring
 *   resolveCourse(null)                             only if there is one course
 *
 * Ambiguity and misses are errors rather than a guess: picking the wrong
 * course writes attempt history into the wrong class's log.
 */
export function resolveCourse(input, { courses = listCourses() } = {}) {
  const slugs = courses.map((c) => c.slug);
  const known = slugs.length
    ? `Known courses: ${slugs.join(', ')}`
    : `No courses found in ${path.relative(ROOT, COURSES_DIR)}/.`;

  if (!input) {
    if (slugs.length === 1) return slugs[0];
    if (!slugs.length) throw new Error(known);
    throw new Error(`--course is required when there is more than one course.\n${known}`);
  }

  const needle = String(input).toLowerCase();
  if (slugs.includes(needle)) return needle;

  const hits = slugs.filter((s) => s.startsWith(needle));
  const matches = hits.length ? hits : slugs.filter((s) => s.includes(needle));
  if (matches.length === 1) return matches[0];
  if (matches.length > 1) {
    throw new Error(`"${input}" matches ${matches.length} courses: ${matches.join(', ')}`);
  }
  throw new Error(`No course matching "${input}". ${known}`);
}

/** resolveCourse, but reporting the failure as a CLI error rather than a throw. */
export function resolveCourseOrExit(input) {
  try {
    return resolveCourse(input);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
