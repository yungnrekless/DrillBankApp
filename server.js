#!/usr/bin/env node
/**
 * Zero-dependency static server + JSON data API.
 *
 * The app deliberately stores state in real files on disk (data/*.json), not
 * in browser storage, so the history is greppable, diffable and survives a
 * cleared cache. That needs a process with filesystem access, hence this.
 *
 *   GET  /api/questions          -> questions.json
 *   GET  /api/attempts           -> attempts_log.json
 *   POST /api/attempts           -> append one attempt (or an array of them)
 *   GET  /api/schedule           -> schedule_state.json
 *   PUT  /api/schedule           -> replace schedule_state.json
 *
 *   node server.js [--port 4173]
 */

import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.join(ROOT, 'data');
const PUBLIC = path.join(ROOT, 'public');

const FILES = {
  questions: path.join(DATA, 'questions.json'),
  attempts: path.join(DATA, 'attempts_log.json'),
  schedule: path.join(DATA, 'schedule_state.json'),
};

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

async function handleApi(req, res, route) {
  if (req.method === 'GET') {
    const fallback = route === 'attempts' ? [] : {};
    return send(res, 200, await readJson(FILES[route], fallback));
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
      const log = await readJson(FILES.attempts, []);
      log.push(...incoming);
      await writeJson(FILES.attempts, log);
      return log.length;
    });
    return send(res, 201, { appended: incoming.length, total });
  }

  if (req.method === 'PUT' && route === 'schedule') {
    const payload = JSON.parse(await readBody(req));
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return send(res, 400, { error: 'schedule must be an object keyed by qid' });
    }
    await serialize(() => writeJson(FILES.schedule, payload));
    return send(res, 200, { ok: true, entries: Object.keys(payload).length });
  }

  return send(res, 405, { error: `${req.method} not allowed on /api/${route}` });
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
    const apiMatch = pathname.match(/^\/api\/(questions|attempts|schedule)$/);
    if (apiMatch) return await handleApi(req, res, apiMatch[1]);
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

if (!fs.existsSync(FILES.questions)) {
  console.warn('data/questions.json is missing — run: node scripts/import.js seed/');
}

server.listen(PORT, () => {
  console.log(`Drill bank running at http://localhost:${PORT}`);
});
