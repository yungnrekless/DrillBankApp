#!/usr/bin/env node
/**
 * Zero-dependency static server + JSON data API.
 *
 * The app deliberately stores state in real files on disk
 * (courses/<slug>/data/*.json), not in browser storage, so the history is
 * greppable, diffable and survives a cleared cache. That needs a process with
 * filesystem access, hence this.
 *
 * Every data route is scoped to a course, because two classes share no
 * questions and mixing their attempt logs would make both dashboards lie:
 *
 *   GET  /api/courses                  -> [{slug, name, questions}, …]
 *   GET  /api/<slug>/questions         -> questions.json
 *   GET  /api/<slug>/attempts          -> attempts_log.json
 *   POST /api/<slug>/attempts          -> append one attempt (or an array)
 *   GET  /api/<slug>/schedule          -> schedule_state.json
 *   PUT  /api/<slug>/schedule          -> replace schedule_state.json
 *
 * The course list is read per request rather than cached at boot, so adding a
 * class to courses/ shows up on a refresh instead of needing a restart.
 *
 *   node server.js [--port 4173]
 */

import http from 'node:http';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { coursePaths, listCourses } from './src/courses.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(ROOT, 'public');

/** The file backing one route, or null if the slug is not a real course. */
function resolveFile(slug, route) {
  if (!listCourses().some((c) => c.slug === slug)) return null;
  return coursePaths(slug)[route];
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

const argPort = process.argv.indexOf('--port');
const PORT = Number(argPort > -1 ? process.argv[argPort + 1] : process.env.PORT || 4173);

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fsp.readFile(file, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return fallback;
    throw err;
  }
}

/** Write via a temp file + rename so a crash mid-write can't truncate data. */
async function writeJson(file, value) {
  await fsp.mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.tmp`;
  await fsp.writeFile(tmp, `${JSON.stringify(value, null, 2)}\n`);
  await fsp.rename(tmp, file);
}

// Serialize writes so two concurrent appends can't clobber each other.
let writeChain = Promise.resolve();
function serialize(fn) {
  const next = writeChain.then(fn, fn);
  writeChain = next.catch(() => {});
  return next;
}

function send(res, status, body, type = 'application/json; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}

async function readBody(req, limitBytes = 1 << 20) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limitBytes) throw new Error('payload too large');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function handleApi(req, res, slug, route) {
  const file = resolveFile(slug, route);
  if (!file) return send(res, 404, { error: `unknown course "${slug}"` });

  if (req.method === 'GET') {
    const fallback = route === 'attempts' ? [] : {};
    return send(res, 200, await readJson(file, fallback));
  }

  if (req.method === 'POST' && route === 'attempts') {
    const payload = JSON.parse(await readBody(req));
    const incoming = Array.isArray(payload) ? payload : [payload];
    for (const a of incoming) {
      if (!a || typeof a.qid !== 'string' || typeof a.correct !== 'boolean') {
        return send(res, 400, { error: 'each attempt needs a string qid and boolean correct' });
      }
      a.timestamp ||= new Date().toISOString();
    }
    const total = await serialize(async () => {
      const log = await readJson(file, []);
      log.push(...incoming);
      await writeJson(file, log);
      return log.length;
    });
    return send(res, 201, { appended: incoming.length, total });
  }

  if (req.method === 'PUT' && route === 'schedule') {
    const payload = JSON.parse(await readBody(req));
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return send(res, 400, { error: 'schedule must be an object keyed by qid' });
    }
    await serialize(() => writeJson(file, payload));
    return send(res, 200, { ok: true, entries: Object.keys(payload).length });
  }

  return send(res, 405, { error: `${req.method} not allowed on /api/${slug}/${route}` });
}

async function serveStatic(req, res, pathname) {
  const rel = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = path.join(PUBLIC, rel);
  // Refuse anything that escapes public/ once resolved.
  if (!file.startsWith(PUBLIC + path.sep)) return send(res, 403, { error: 'forbidden' });
  try {
    const body = await fsp.readFile(file);
    return send(res, 200, body, MIME[path.extname(file)] || 'application/octet-stream');
  } catch {
    return send(res, 404, 'Not found', 'text/plain; charset=utf-8');
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);

    if (pathname === '/api/courses') {
      if (req.method !== 'GET') return send(res, 405, { error: 'GET only' });
      return send(res, 200, listCourses().map(({ slug, name, questions }) => ({ slug, name, questions })));
    }
    // The slug pattern here is the same one src/courses.js validates, and
    // resolveFile then checks it against the real course list — a path that
    // tried to climb out of courses/ matches neither.
    const apiMatch = pathname.match(/^\/api\/([a-z0-9][a-z0-9._-]*)\/(questions|attempts|schedule)$/);
    if (apiMatch) return await handleApi(req, res, apiMatch[1], apiMatch[2]);
    // src/ is served so the browser can import the shared scheduler module.
    if (pathname.startsWith('/src/')) {
      const file = path.join(ROOT, pathname);
      if (!file.startsWith(path.join(ROOT, 'src') + path.sep)) return send(res, 403, { error: 'forbidden' });
      try {
        return send(res, 200, await fsp.readFile(file), MIME['.js']);
      } catch {
        return send(res, 404, 'Not found', 'text/plain; charset=utf-8');
      }
    }
    return await serveStatic(req, res, pathname);
  } catch (err) {
    send(res, 500, { error: err.message });
  }
});

const courses = listCourses();
if (!courses.length) {
  console.warn('No courses found in courses/ — add courses/<slug>/drills/ and run scripts/import.js');
} else {
  for (const c of courses) {
    const state = c.questions ? `${c.questions} questions` : 'not imported yet';
    console.log(`  ${c.slug.padEnd(32)} ${state}`);
  }
  if (!courses.some((c) => c.questions)) {
    console.warn('Nothing imported yet — run: node scripts/import.js --course <slug>');
  }
}

server.listen(PORT, () => {
  console.log(`Drill bank running at http://localhost:${PORT}`);
});
