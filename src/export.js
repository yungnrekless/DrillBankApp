/**
 * Standalone export: turn a slice of the question bank into a single
 * self-contained HTML file that runs with no server, no data files and no
 * network. Everything — styles, script, questions — is inlined, so the file
 * can be emailed or dropped in a shared folder and just opened.
 *
 * The exported page is deliberately a different program from the app: it has
 * no scheduler, no attempt log and no dashboard, because a classmate opening
 * it once wants a drill, not a study system. What carries over is the part
 * that matters — reveal with rationale and trap, SATA scored all-or-nothing,
 * and a weakest-first topic breakdown at the end.
 */

import { relabelSource } from './relabel.js';
import { stemKey } from './tracker.js';

/**
 * The long-term-tracking widget, shared verbatim by both runners.
 *
 * Published pages are static and the repo is public, so results cannot be
 * posted anywhere — see src/tracker.js. Instead this buffers graded attempts
 * in localStorage and hands them over on demand for
 * `scripts/import-attempts.js` to merge into the course's attempt log.
 *
 * Off until switched on, and deliberately unobtrusive: a dim "LT" in the
 * corner that only colours up once it is recording.
 */
const LT_CSS = `
.lt{position:fixed;right:14px;bottom:14px;z-index:40;font-family:ui-monospace,Menlo,Consolas,monospace}
.lt-b{display:flex;align-items:center;gap:6px;background:var(--paper);border:1.5px solid var(--line);color:var(--soft);font:inherit;font-size:10px;letter-spacing:.14em;padding:6px 9px;cursor:pointer;opacity:.5;transition:.12s}
.lt-b:hover{opacity:1;border-color:var(--navy);color:var(--navy)}
.lt.on .lt-b{opacity:1;border-color:var(--teal);color:var(--teal);background:#fff}
.lt-n{background:var(--teal);color:#fff;padding:1px 5px;font-size:9px;letter-spacing:.06em}
.lt-p{display:none;position:absolute;right:0;bottom:36px;width:244px;background:#fff;border:1.5px solid var(--navy);padding:13px;box-shadow:0 8px 24px rgba(22,40,59,.18)}
.lt.open .lt-p{display:block}
.lt-h{font-size:10px;letter-spacing:.14em;color:var(--accent);margin-bottom:7px}
.lt-t{font-family:Georgia,serif;font-size:13px;color:var(--navy);line-height:1.45;margin-bottom:10px}
.lt-t b{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px}
.lt-a{display:flex;flex-wrap:wrap;gap:6px}
.lt-a button{flex:1 1 auto;background:var(--paper2);border:1px solid var(--line);color:var(--navy);font:inherit;font-size:10px;letter-spacing:.1em;padding:6px 8px;cursor:pointer}
.lt-a button:hover:not(:disabled){border-color:var(--navy)}
.lt-a button:disabled{opacity:.4;cursor:default}
.lt-a .warn:hover:not(:disabled){border-color:var(--accent);color:var(--accent)}
@media print{.lt{display:none}}
`;

/**
 * Browser half of the tracker. Written as string concatenation rather than
 * template literals because it is itself interpolated into one.
 *
 * Every localStorage touch is wrapped: private-mode Safari throws on write,
 * and a drill page that dies because tracking is unavailable would be a much
 * worse bug than not tracking.
 */
const LT_JS = `
var LT_STORE = 'drillbank.lt.' + COURSE, LT_FLAG = 'drillbank.lt.on.' + COURSE;
var LT_SESSION = 'pub-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
function ltLoad(){ try { var v = JSON.parse(localStorage.getItem(LT_STORE)); return Array.isArray(v) ? v : [] } catch (e) { return [] } }
function ltSave(a){ try { localStorage.setItem(LT_STORE, JSON.stringify(a)); return true } catch (e) { return false } }
function ltOn(){ try { return localStorage.getItem(LT_FLAG) === '1' } catch (e) { return false } }
function ltSetOn(v){ try { localStorage.setItem(LT_FLAG, v ? '1' : '0') } catch (e) {} }

// Called from grade() for every question, whichever runner is driving.
function ltRecord(q, ok, picked){
  if (!ltOn() || !q || !q.k) return;
  var a = ltLoad();
  a.push({ k: q.k, correct: !!ok, timestamp: new Date().toISOString(), session_id: LT_SESSION, selected: picked.slice().sort(function(x,y){return x-y}) });
  ltSave(a);
  ltPaint();
}

function ltBlob(){
  return JSON.stringify({ course: COURSE, exported: new Date().toISOString(), attempts: ltLoad() }, null, 1);
}

function ltPaint(){
  var wrap = document.getElementById('lt');
  if (!wrap) return;
  var n = ltLoad().length, on = ltOn();
  wrap.className = 'lt' + (on ? ' on' : '') + (wrap.classList.contains('open') ? ' open' : '');
  document.getElementById('lt-count').innerHTML = n ? '<span class="lt-n">' + n + '</span>' : '';
  document.getElementById('lt-state').innerHTML = on
    ? 'Recording to this browser. <b>' + n + '</b> answer' + (n === 1 ? '' : 's') + ' held.'
    : (n ? 'Paused. <b>' + n + '</b> answer' + (n === 1 ? '' : 's') + ' still held.' : 'Off. Answers are not being kept.');
  document.getElementById('lt-toggle').textContent = on ? 'PAUSE' : 'START';
  document.getElementById('lt-copy').disabled = !n;
  document.getElementById('lt-save').disabled = !n;
  document.getElementById('lt-clear').disabled = !n;
}

function ltMount(){
  var wrap = document.createElement('div');
  wrap.id = 'lt';
  wrap.className = 'lt';
  wrap.innerHTML =
    '<div class="lt-p">' +
      '<div class="lt-h">LONG-TERM TRACKING</div>' +
      '<div class="lt-t" id="lt-state"></div>' +
      '<div class="lt-a">' +
        '<button id="lt-toggle"></button>' +
        '<button id="lt-copy">COPY</button>' +
        '<button id="lt-save">FILE</button>' +
        '<button id="lt-clear" class="warn">CLEAR</button>' +
      '</div>' +
    '</div>' +
    '<button class="lt-b" id="lt-btn">LT<span id="lt-count"></span></button>';
  document.body.appendChild(wrap);

  document.getElementById('lt-btn').onclick = function(){ wrap.classList.toggle('open'); ltPaint() };
  document.getElementById('lt-toggle').onclick = function(){ ltSetOn(!ltOn()); ltPaint() };

  document.getElementById('lt-copy').onclick = function(){
    var text = ltBlob(), btn = this;
    var done = function(){ btn.textContent = 'COPIED'; setTimeout(function(){ btn.textContent = 'COPY' }, 1400) };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function(){ ltFallbackCopy(text, done) });
    } else ltFallbackCopy(text, done);
  };

  document.getElementById('lt-save').onclick = function(){
    var url = URL.createObjectURL(new Blob([ltBlob()], { type: 'application/json' }));
    var a = document.createElement('a');
    a.href = url;
    a.download = 'drillbank-' + COURSE + '-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url) }, 4000);
  };

  document.getElementById('lt-clear').onclick = function(){
    if (!confirm('Discard the answers held in this browser? Import them first if you want them counted.')) return;
    ltSave([]); ltPaint();
  };

  ltPaint();
}

function ltFallbackCopy(text, done){
  var t = document.createElement('textarea');
  t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
  document.body.appendChild(t); t.select();
  try { document.execCommand('copy'); done() } catch (e) {}
  t.remove();
}
`;

/**
 * Tracking code only ships to pages that belong to a course.
 *
 * A standalone export is a file you hand someone else; it has nothing to file
 * attempts against, so carrying the widget would be dead weight and a
 * confusing button. `grade()` calls `ltRecord` unconditionally, so the
 * untracked build still needs the name to exist — hence the stub rather than
 * nothing at all.
 */
const ltCss = (course) => (course ? LT_CSS : '');
const ltJs = (course) => (course
  ? LT_JS
  : '\n// Not a course page: nothing to record against.\nfunction ltRecord(){}\n');

const PALETTE = {
  navy: '#16283B',
  accent: '#B23A2E',
  teal: '#2F6F6A',
  gold: '#B8892B',
  paper: '#F6F2E9',
  paper2: '#EFE8D8',
  line: '#C9BFA8',
  soft: '#33475C',
};

/** Escape for HTML text nodes. */
export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Serialize data for embedding inside a <script> block. Escaping `<` prevents
 * a `</script>` inside any string from ending the block early; the line and
 * paragraph separators are escaped because they are literal newlines in JS
 * source but legal inside a JSON string.
 */
export function embedJson(value) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

/**
 * Top-level course picker for a multi-course site: one card per class, each
 * linking into that course's own landing page.
 *
 * Unlike the chapter index this page is static HTML with no script at all —
 * it is three links and a heading, and there is nothing a session builder
 * could add. That also means it renders identically in preview panes and mail
 * clients that block inline scripts.
 *
 * @param {Array<{href,name,chapters,count,sata,topics}>} courses
 * @param {{title?: string, subtitle?: string}} meta
 */
export function renderCourseIndex(courses, meta = {}) {
  const title = meta.title || 'Drill Bank';
  const subtitle = meta.subtitle || `${courses.length} course${courses.length === 1 ? '' : 's'}`;

  const cards = courses.map((c) => `<a class="card" href="${escapeHtml(c.href)}">
<div class="card-title">${escapeHtml(c.name)}</div>
<div class="card-meta">${c.chapters} chapter${c.chapters === 1 ? '' : 's'} &middot; ${c.count} questions &middot; ${c.sata} select-all &middot; ${c.topics} topics</div>
</a>`).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect width='16' height='16' fill='%23F6F2E9'/><rect x='2' y='3' width='12' height='2' fill='%23B23A2E'/><rect x='2' y='7' width='12' height='2' fill='%232F6F6A'/><rect x='2' y='11' width='8' height='2' fill='%23B8892B'/></svg>">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--navy:${PALETTE.navy};--accent:${PALETTE.accent};--teal:${PALETTE.teal};--paper:${PALETTE.paper};--line:${PALETTE.line};--soft:${PALETTE.soft}}
body{background:var(--paper);color:var(--navy);font-family:Georgia,'Times New Roman',serif;line-height:1.5;padding:16px;max-width:820px;margin:0 auto}
.top{border-bottom:2px solid var(--navy);padding-bottom:10px;margin-bottom:16px}
h1{font-size:23px;letter-spacing:-.01em}
.sub{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.lede{font-size:14.5px;color:var(--soft);margin-bottom:18px}
.card{display:block;text-decoration:none;color:inherit;background:#fff;border:1.5px solid var(--line);padding:15px 16px;margin-bottom:11px;transition:.12s}
.card:hover{border-color:var(--navy);transform:translateX(2px)}
.card-title{font-size:18px;font-weight:600;margin-bottom:5px}
.card-meta{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:var(--soft)}
.empty{font-size:14.5px;color:var(--soft);font-style:italic}
.foot{margin-top:26px;padding-top:14px;border-top:1px solid var(--line);font-size:12.5px;color:var(--soft);line-height:1.55}
</style>
</head>
<body>
<div class="top"><div class="sub">${escapeHtml(subtitle)}</div><h1>${escapeHtml(title)}</h1></div>
<p class="lede">Pick a course. Each one opens its own chapter list and session builder.</p>
${cards || '<p class="empty">No courses published yet.</p>'}
<p class="foot">Student-made study aid. The questions are written from course reading and are
not affiliated with or endorsed by any publisher. Check anything that looks off against your
own text &mdash; and if you find an error, say so, so it can be fixed for everyone.</p>
</body>
</html>
`;
}

/**
 * Landing page. When JavaScript runs it is a session builder: pick any set of
 * chapters with checkboxes, choose how many questions (25/50/75/100), and drill
 * a shuffled mix drawn from just those chapters. When JavaScript is blocked
 * (preview panes, mail clients) it falls back to a plain list of links to the
 * per-chapter pages, so the page is never blank and every chapter is still
 * reachable.
 *
 * The drill runner here is intentionally a copy of the one in renderExport
 * rather than a shared import: the per-chapter pages are already built, tested,
 * and deployed, and keeping this page's changes from touching that code path is
 * worth more than removing the duplication.
 *
 * @param {Array<{href,title,count,sata,topics,items}>} chapters — items is the
 *   stripped drill payload for that chapter (see publish.js#toDrillItem).
 * @param {{title?: string, subtitle?: string}} meta
 */
export function renderIndex(chapters, meta = {}) {
  const title = meta.title || 'Drill Bank';
  const subtitle = meta.subtitle || 'Practice questions';

  // No-JS fallback: the chapter list as links, exactly the old behavior.
  const cards = chapters.map((c) => `<a class="card" href="${escapeHtml(c.href)}">
<div class="card-title">${escapeHtml(c.title)}</div>
<div class="card-meta">${c.count} questions &middot; ${c.sata} select-all &middot; ${c.topics.length} topics</div>
<div class="card-topics">${c.topics.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join('')}</div>
</a>`).join('\n');

  // What the script needs: display name + counts + the drill items per chapter.
  const chapterData = chapters.map((c) => ({
    title: c.title,
    href: c.href,
    count: c.count,
    sata: c.sata,
    topics: c.topics.length,
    items: c.items || [],
  }));

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect width='16' height='16' fill='%23F6F2E9'/><rect x='2' y='3' width='12' height='2' fill='%23B23A2E'/><rect x='2' y='7' width='12' height='2' fill='%232F6F6A'/><rect x='2' y='11' width='8' height='2' fill='%23B8892B'/></svg>">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--navy:${PALETTE.navy};--accent:${PALETTE.accent};--teal:${PALETTE.teal};--gold:${PALETTE.gold};--paper:${PALETTE.paper};--paper2:${PALETTE.paper2};--line:${PALETTE.line};--soft:${PALETTE.soft}}
body{background:var(--paper);color:var(--navy);font-family:Georgia,'Times New Roman',serif;line-height:1.5;padding:16px;max-width:820px;margin:0 auto}
.top{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid var(--navy);padding-bottom:10px;margin-bottom:16px;flex-wrap:wrap;gap:8px}
h1{font-size:23px;letter-spacing:-.01em}
.sub{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.score{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:var(--soft);text-align:right}
.score b{color:var(--navy);font-size:15px}
.lede{font-size:14.5px;color:var(--soft);margin-bottom:18px;line-height:1.5}
.card{display:block;text-decoration:none;color:inherit;background:#fff;border:1.5px solid var(--line);padding:15px 16px;margin-bottom:11px;transition:.12s}
.card:hover{border-color:var(--navy);transform:translateX(2px)}
.card-title{font-size:18px;font-weight:600;margin-bottom:5px}
.card-meta{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:var(--soft);margin-bottom:9px}
.card-topics{display:flex;gap:5px;flex-wrap:wrap}
.card-topics .chip{font-size:9px;letter-spacing:.08em}
.foot{margin-top:26px;padding-top:14px;border-top:1px solid var(--line);font-size:12.5px;color:var(--soft);line-height:1.55}
/* setup screen */
.setrow{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px}
.countlab{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--soft);display:flex;align-items:center;gap:8px}
select#count{font-family:Georgia,serif;font-size:15px;padding:7px 30px 7px 10px;border:1.5px solid var(--line);background:#fff;color:var(--navy);cursor:pointer}
.bulk{display:flex;gap:8px}
.chap{display:flex;gap:11px;align-items:flex-start;background:#fff;border:1.5px solid var(--line);padding:12px 14px;margin-bottom:8px;cursor:pointer}
.chap:hover{border-color:var(--navy)}
.chap.on{border-color:var(--teal);background:rgba(47,111,106,.07)}
.chap input{margin-top:2px;width:18px;height:18px;accent-color:var(--teal);flex:none;cursor:pointer}
.chap-title{font-size:16px;font-weight:600;display:block}
.chap-meta{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10.5px;color:var(--soft);letter-spacing:.03em}
.startbar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:16px;flex-wrap:wrap;position:sticky;bottom:0;background:var(--paper);padding:12px 0;border-top:1px solid var(--line)}
.avail{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11.5px;color:var(--soft)}
/* drill (copied from the chapter-page export) */
.bar{height:5px;background:var(--paper2);margin-bottom:16px;border:1px solid var(--line)}
.bar>div{height:100%;background:var(--teal);width:0;transition:width .3s}
.meta{display:flex;gap:8px;align-items:center;margin-bottom:10px;flex-wrap:wrap}
.chip{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;padding:3px 7px;border:1px solid var(--line);background:var(--paper2);color:var(--soft)}
.chip.t1{background:var(--accent);color:#fff;border-color:var(--accent)}
.chip.t2{background:var(--gold);color:#fff;border-color:var(--gold)}
.stem{font-size:17px;line-height:1.45;margin-bottom:14px;font-weight:600}
.sa{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10px;color:var(--accent);letter-spacing:.1em;margin-bottom:8px;text-transform:uppercase}
.opt{display:block;width:100%;text-align:left;padding:11px 13px;margin-bottom:7px;background:#fff;border:1.5px solid var(--line);font-family:Georgia,serif;font-size:15px;color:var(--navy);cursor:pointer;transition:.12s;line-height:1.35}
.opt:hover:not(:disabled){border-color:var(--navy);transform:translateX(2px)}
.opt:disabled{cursor:default}
.opt.sel{border-color:var(--navy);background:var(--paper2)}
.opt.right{border-color:var(--teal);background:rgba(47,111,106,.13)}
.opt.wrong{border-color:var(--accent);background:rgba(178,58,46,.11)}
.opt .mk{font-family:ui-monospace,monospace;font-size:11px;font-weight:700;margin-right:7px}
.opt.right .mk{color:var(--teal)}
.opt.wrong .mk{color:var(--accent)}
.actions{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
button.btn{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;padding:10px 16px;border:1.5px solid var(--navy);background:var(--navy);color:var(--paper);cursor:pointer}
button.btn.alt{background:transparent;color:var(--navy)}
button.btn:disabled{opacity:.35;cursor:default}
.rev{margin-top:14px;border-left:3px solid var(--teal);background:var(--paper2);padding:12px 14px}
.rev.no{border-left-color:var(--accent)}
.rev .lb{font-family:ui-monospace,monospace;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--teal);font-weight:700;margin-bottom:5px}
.rev.no .lb{color:var(--accent)}
.rev p{font-size:14.5px;line-height:1.5;color:var(--soft)}
.trap{margin-top:9px;padding-top:9px;border-top:1px solid var(--line)}
.trap .lb2{font-family:ui-monospace,monospace;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:4px}
.done{text-align:center;padding:26px 16px}
.done h2{font-size:26px;margin-bottom:8px}
.pct{font-size:52px;font-weight:700;color:var(--teal);font-family:ui-monospace,monospace;line-height:1}
.brk{margin:18px 0;text-align:left}
.brow{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line);font-size:14px}
.brow .n{font-family:ui-monospace,monospace;font-size:12.5px}
.brow.weak .n{color:var(--accent);font-weight:700}
.hint{font-size:12.5px;color:var(--soft);font-style:italic;margin-top:14px}
.note{font-size:12.5px;color:var(--soft);font-style:italic;margin-bottom:14px}
${ltCss(meta.course)}
</style>
</head>
<body>
<div id="app">
<div class="top"><div><div class="sub">${escapeHtml(subtitle)}</div><h1>${escapeHtml(title)}</h1></div></div>
<p class="lede">Pick the chapters you want and how many questions, then drill a shuffled mix.
This list is the no-JavaScript view; with scripts enabled you get checkboxes and a question count.
Each chapter link below opens that chapter on its own.</p>
${cards}
<p class="foot">Student-made study aid. The questions are written from course reading and are
not affiliated with or endorsed by any publisher. Check anything that looks off against your
own text &mdash; and if you find an error, say so, so it can be fixed for everyone.</p>
</div>
<script>
const CHAPTERS = ${embedJson(chapterData)};
const TITLE = ${embedJson(title)};
const SITE_SUB = ${embedJson(subtitle)};
const COURSE = ${embedJson(meta.course || '')};
const COUNTS = [25, 50, 75, 100];

let Q = [], order = [], i = 0, sel = [], locked = false, score = 0, log = [], shown = [];
let SUBTITLE = SITE_SUB, NOTE = '';
const app = document.getElementById('app');
const FALLBACK = app.innerHTML;

function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function shuffle(a){for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a}
// Inlined verbatim from src/relabel.js so the tested copy is the shipped one.
${relabelSource}

// ── setup screen ───────────────────────────────────────────────────
function showSetup(){
  const opts = COUNTS.map(c => '<option value="' + c + '">' + c + '</option>').join('');
  const rows = CHAPTERS.map((c, n) =>
    '<label class="chap" data-row="' + n + '">' +
      '<input type="checkbox" data-i="' + n + '">' +
      '<span><span class="chap-title">' + esc(c.title) + '</span>' +
      '<span class="chap-meta">' + c.count + ' questions &middot; ' + c.sata + ' select-all &middot; ' + c.topics + ' topics</span></span>' +
    '</label>').join('');
  app.innerHTML =
    '<div class="top"><div><div class="sub">' + esc(SITE_SUB) + '</div><h1>' + esc(TITLE) + '</h1></div></div>' +
    '<p class="lede">Pick the chapters you want to study, choose how many questions, and start. ' +
    'Questions are drawn only from the chapters you check, shuffled, with rationale and traps on every reveal.</p>' +
    '<div class="setrow">' +
      '<label class="countlab">Questions <select id="count">' + opts + '</select></label>' +
      '<div class="bulk"><button class="btn alt" id="all">Select all</button>' +
      '<button class="btn alt" id="clear">Clear</button></div>' +
    '</div>' +
    '<div id="chaplist">' + rows + '</div>' +
    '<div class="startbar"><div class="avail" id="avail"></div>' +
    '<button class="btn" id="start" disabled>Start drilling</button></div>';

  app.querySelectorAll('#chaplist input').forEach(cb => cb.addEventListener('change', updateAvail));
  document.getElementById('count').addEventListener('change', updateAvail);
  document.getElementById('all').onclick = () => { setAll(true); };
  document.getElementById('clear').onclick = () => { setAll(false); };
  document.getElementById('start').onclick = startSession;
  updateAvail();
}

function setAll(on){
  app.querySelectorAll('#chaplist input').forEach(cb => { cb.checked = on; });
  updateAvail();
}

function selectedChapters(){
  return [...app.querySelectorAll('#chaplist input:checked')].map(cb => +cb.dataset.i);
}

function updateAvail(){
  const chosen = selectedChapters();
  app.querySelectorAll('.chap').forEach(l => {
    l.classList.toggle('on', l.querySelector('input').checked);
  });
  const avail = chosen.reduce((s, n) => s + CHAPTERS[n].count, 0);
  const want = +document.getElementById('count').value;
  const start = document.getElementById('start');
  const el = document.getElementById('avail');
  start.disabled = chosen.length === 0;
  if (!chosen.length) {
    el.textContent = 'No chapters selected';
  } else {
    const use = Math.min(want, avail);
    el.textContent = chosen.length + ' chapter' + (chosen.length > 1 ? 's' : '') +
      ' \\u00b7 ' + avail + ' available' + (want > avail ? ' (all ' + use + ' will be used)' : '');
  }
}

function startSession(){
  const chosen = selectedChapters();
  if (!chosen.length) return;
  let pool = [];
  chosen.forEach(n => { pool = pool.concat(CHAPTERS[n].items); });
  shuffle(pool);
  const want = +document.getElementById('count').value;
  Q = pool.slice(0, Math.min(want, pool.length));
  order = [...Q.keys()]; shuffle(order);
  i = 0; sel = []; locked = false; score = 0; log = [];
  SUBTITLE = chosen.length === 1 ? CHAPTERS[chosen[0]].title : chosen.length + ' chapters';
  NOTE = 'Answer order is reshuffled every run. Select-all items are scored all or nothing, the same as on the exam.';
  render();
}

// ── drill runner (copy of the chapter-page export) ─────────────────
function render(){
  if (i >= order.length) return done();
  const q = Q[order[i]];
  shown = shuffle([...q.options.keys()]);
  app.innerHTML =
   '<div class="top">' +
     '<div><div class="sub">' + esc(SUBTITLE) + '</div><h1>Question ' + (i+1) + ' of ' + order.length + '</h1></div>' +
     '<div class="score">CORRECT<br><b>' + score + ' / ' + i + '</b></div>' +
   '</div>' +
   '<div class="bar"><div style="width:' + (i/order.length)*100 + '%"></div></div>' +
   (i === 0 && NOTE ? '<div class="note">' + esc(NOTE) + '</div>' : '') +
   '<div class="meta">' +
     '<span class="chip t1">' + esc(q.topic) + '</span>' +
     '<span class="chip t2">' + esc(q.subtopic) + '</span>' +
   '</div>' +
   (q.sata ? '<div class="sa">Select all that apply &middot; scored all or nothing</div>' : '') +
   '<div class="stem">' + esc(q.stem) + '</div>' +
   '<div id="opts"></div>' +
   '<div class="actions">' +
     (q.sata ? '<button class="btn" id="sub">Submit</button>' : '') +
     '<button class="btn alt" id="next" disabled>Next &rarr;</button>' +
   '</div>' +
   '<div id="rev"></div>';

  const ob = document.getElementById('opts');
  shown.forEach((realIdx, slot) => {
    const b = document.createElement('button');
    b.className = 'opt';
    b.dataset.k = realIdx;
    b.innerHTML = '<span class="mk">' + String.fromCharCode(65 + slot) + '</span>' + esc(q.options[realIdx]);
    b.onclick = () => pick(realIdx);
    ob.appendChild(b);
  });
  if (q.sata) document.getElementById('sub').onclick = () => grade();
  document.getElementById('next').onclick = () => { i++; sel = []; locked = false; render(); };
}

function pick(k){
  if (locked) return;
  const q = Q[order[i]];
  if (q.sata) {
    sel = sel.includes(k) ? sel.filter(x => x !== k) : sel.concat(k);
    [...document.querySelectorAll('.opt')].forEach(b => b.classList.toggle('sel', sel.includes(+b.dataset.k)));
  } else {
    sel = [k];
    grade();
  }
}

function grade(){
  if (locked || !sel.length) return;
  locked = true;
  const q = Q[order[i]];
  const key = [...q.correct].sort((a,b) => a-b);
  const got = [...sel].sort((a,b) => a-b);
  const ok = got.length === key.length && got.every((v,n) => v === key[n]);
  if (ok) score++;
  log.push({ topic: q.topic, ok });
  ltRecord(q, ok, sel);

  [...document.querySelectorAll('.opt')].forEach(b => {
    const k = +b.dataset.k;
    b.disabled = true;
    b.classList.remove('sel');
    if (q.correct.includes(k)) { b.classList.add('right'); b.querySelector('.mk').textContent = '\\u2713'; }
    else if (sel.includes(k)) { b.classList.add('wrong'); b.querySelector('.mk').textContent = '\\u2717'; }
  });

  const sb = document.getElementById('sub');
  if (sb) sb.disabled = true;

  document.getElementById('rev').innerHTML =
    '<div class="rev ' + (ok ? '' : 'no') + '">' +
      '<div class="lb">' + (ok ? 'Correct' : (q.sata ? 'Not quite &mdash; all or nothing' : 'Not quite')) + '</div>' +
      '<p>' + esc(relabelLetters(q.why, shown)) + '</p>' +
      (q.trap ? '<div class="trap"><div class="lb2">Watch for</div><p>' + esc(relabelLetters(q.trap, shown)) + '</p></div>' : '') +
    '</div>';

  const sc = document.querySelector('.score');
  if (sc) sc.innerHTML = 'CORRECT<br><b>' + score + ' / ' + (i+1) + '</b>';
  const nx = document.getElementById('next');
  nx.disabled = false;
  nx.focus();
}

function done(){
  const pct = Math.round(score / order.length * 100);
  const by = {};
  log.forEach(r => { by[r.topic] = by[r.topic] || {c:0,t:0}; by[r.topic].t++; if (r.ok) by[r.topic].c++; });
  const rows = Object.entries(by)
    .sort((a,b) => (a[1].c/a[1].t) - (b[1].c/b[1].t))
    .map(([t,v]) => '<div class="brow ' + ((v.c/v.t) < 0.7 ? 'weak' : '') + '"><span>' + esc(t) + '</span><span class="n">' + v.c + '/' + v.t + '</span></div>')
    .join('');
  app.innerHTML =
    '<div class="done">' +
      '<div class="sub">Session complete</div>' +
      '<div class="pct">' + pct + '%</div>' +
      '<h2>' + score + ' of ' + order.length + ' correct</h2>' +
      '<div class="brk">' + rows + '</div>' +
      '<p class="hint">Topics in red are below 70% &mdash; those are where your remaining study time pays off most.</p>' +
      '<div class="actions" style="justify-content:center">' +
        '<button class="btn" id="again">Pick chapters again</button>' +
      '</div>' +
    '</div>';
  document.getElementById('again').onclick = showSetup;
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const nx = document.getElementById('next');
  if (nx && !nx.disabled) { e.preventDefault(); nx.click(); return; }
  const sb = document.getElementById('sub');
  if (sb && !sb.disabled) { e.preventDefault(); sb.click(); }
});

${ltJs(meta.course)}

try {
  showSetup();
} catch (err) {
  app.innerHTML = '<div class="foot"><b>The session builder could not start.</b> ' +
    esc(err && err.message ? err.message : String(err)) +
    ' The chapter list is below.</div>' + FALLBACK;
}

// See the matching note in renderExport: tracking must never stop the drill.
try { if (COURSE) ltMount(); } catch (err) {}
</script>
</body>
</html>
`;
}

/**
 * The document body before any script runs: the full question set as plain,
 * readable, printable HTML with the answers marked.
 *
 * This is not a courtesy fallback, it is the load-bearing one. An HTML file
 * sent to someone gets opened in mail previews, chat attachment viewers, and
 * sandboxes that block inline scripts outright — and a page whose entire
 * content is built in JS shows up blank in every one of them, with no hint
 * that anything is wrong. Rendering the questions statically means the file
 * is always useful; the script upgrades it to the interactive drill when it
 * is allowed to run, and replaces this wholesale on boot.
 */
function staticFallback(items, title, subtitle) {
  const questions = items.map((q, n) => {
    const opts = q.options.map((text, k) => {
      const right = q.correct.includes(k);
      return `<li class="fopt${right ? ' right' : ''}">` +
        `<span class="mk">${right ? '&#10003;' : escapeHtml(String.fromCharCode(65 + k))}</span>` +
        `${escapeHtml(text)}</li>`;
    }).join('');
    return `<article class="fq">
<div class="meta"><span class="chip t1">${escapeHtml(q.topic)}</span><span class="chip t2">${escapeHtml(q.subtopic)}</span></div>
<div class="stem">${n + 1}. ${escapeHtml(q.stem)}</div>
${q.sata ? '<div class="sa">Select all that apply &middot; scored all or nothing</div>' : ''}
<ul class="fopts">${opts}</ul>
<div class="rev"><div class="lb">Rationale</div><p>${escapeHtml(q.why)}</p>
${q.trap ? `<div class="trap"><div class="lb2">Watch for</div><p>${escapeHtml(q.trap)}</p></div>` : ''}</div>
</article>`;
  }).join('\n');

  return `<div class="top">
<div><div class="sub">${escapeHtml(subtitle)}</div><h1>${escapeHtml(title)}</h1></div>
</div>
<div class="fallback-note"><b>Answer key view.</b> The interactive drill needs JavaScript, which this
viewer has not run &mdash; some preview panes and mail clients block it. To drill the questions with
answers hidden, save this file and open it directly in a browser. Otherwise everything is below,
with the correct answers marked &#10003; &mdash; it prints cleanly as a study sheet.</div>
${questions}`;
}

/**
 * @param {Record<string, object>} questions slice of the bank to export
 * @param {{title?: string, subtitle?: string, note?: string}} meta
 * @returns {string} a complete HTML document
 */
export function renderExport(questions, meta = {}) {
  const title = meta.title || 'Drill';
  const subtitle = meta.subtitle || 'Practice questions';
  const note = meta.note || '';

  // Strip the fields the standalone page has no use for (source, ids) so the
  // payload stays small and the file has nothing to leak about the bank.
  const items = Object.values(questions).map((q) => ({
    topic: q.topic,
    subtopic: q.subtopic,
    stem: q.stem,
    options: q.options,
    correct: q.correct,
    sata: q.type === 'sata',
    why: q.rationale,
    trap: q.trap || null,
    // Identity for long-term tracking. Not the qid — a hash of the stem that
    // is already printed on the page, so the payload still gives away nothing
    // about the bank. See src/tracker.js.
    k: stemKey(q.stem),
  }));

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect width='16' height='16' fill='%23F6F2E9'/><rect x='2' y='3' width='12' height='2' fill='%23B23A2E'/><rect x='2' y='7' width='12' height='2' fill='%232F6F6A'/><rect x='2' y='11' width='8' height='2' fill='%23B8892B'/></svg>">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--navy:${PALETTE.navy};--accent:${PALETTE.accent};--teal:${PALETTE.teal};--gold:${PALETTE.gold};--paper:${PALETTE.paper};--paper2:${PALETTE.paper2};--line:${PALETTE.line};--soft:${PALETTE.soft}}
body{background:var(--paper);color:var(--navy);font-family:Georgia,'Times New Roman',serif;line-height:1.5;padding:16px;max-width:820px;margin:0 auto}
.top{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid var(--navy);padding-bottom:10px;margin-bottom:14px;flex-wrap:wrap;gap:8px}
h1{font-size:21px;letter-spacing:-.01em}
.sub{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:3px}
.score{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:var(--soft);text-align:right}
.score b{color:var(--navy);font-size:15px}
.bar{height:5px;background:var(--paper2);margin-bottom:16px;border:1px solid var(--line)}
.bar>div{height:100%;background:var(--teal);width:0;transition:width .3s}
.meta{display:flex;gap:8px;align-items:center;margin-bottom:10px;flex-wrap:wrap}
.chip{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;padding:3px 7px;border:1px solid var(--line);background:var(--paper2);color:var(--soft)}
.chip.t1{background:var(--accent);color:#fff;border-color:var(--accent)}
.chip.t2{background:var(--gold);color:#fff;border-color:var(--gold)}
.stem{font-size:17px;line-height:1.45;margin-bottom:14px;font-weight:600}
.sa{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10px;color:var(--accent);letter-spacing:.1em;margin-bottom:8px;text-transform:uppercase}
.opt{display:block;width:100%;text-align:left;padding:11px 13px;margin-bottom:7px;background:#fff;border:1.5px solid var(--line);font-family:Georgia,serif;font-size:15px;color:var(--navy);cursor:pointer;transition:.12s;line-height:1.35}
.opt:hover:not(:disabled){border-color:var(--navy);transform:translateX(2px)}
.opt:disabled{cursor:default}
.opt.sel{border-color:var(--navy);background:var(--paper2)}
.opt.right{border-color:var(--teal);background:rgba(47,111,106,.13)}
.opt.wrong{border-color:var(--accent);background:rgba(178,58,46,.11)}
.opt .mk{font-family:ui-monospace,monospace;font-size:11px;font-weight:700;margin-right:7px}
.opt.right .mk{color:var(--teal)}
.opt.wrong .mk{color:var(--accent)}
.actions{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
button.btn{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;padding:10px 16px;border:1.5px solid var(--navy);background:var(--navy);color:var(--paper);cursor:pointer}
button.btn.alt{background:transparent;color:var(--navy)}
button.btn:disabled{opacity:.35;cursor:default}
.rev{margin-top:14px;border-left:3px solid var(--teal);background:var(--paper2);padding:12px 14px}
.rev.no{border-left-color:var(--accent)}
.rev .lb{font-family:ui-monospace,monospace;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--teal);font-weight:700;margin-bottom:5px}
.rev.no .lb{color:var(--accent)}
.rev p{font-size:14.5px;line-height:1.5;color:var(--soft)}
.trap{margin-top:9px;padding-top:9px;border-top:1px solid var(--line)}
.trap .lb2{font-family:ui-monospace,monospace;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:4px}
.done{text-align:center;padding:26px 16px}
.done h2{font-size:26px;margin-bottom:8px}
.pct{font-size:52px;font-weight:700;color:var(--teal);font-family:ui-monospace,monospace;line-height:1}
.brk{margin:18px 0;text-align:left}
.brow{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line);font-size:14px}
.brow .n{font-family:ui-monospace,monospace;font-size:12.5px}
.brow.weak .n{color:var(--accent);font-weight:700}
.hint{font-size:12.5px;color:var(--soft);font-style:italic;margin-top:14px}
.note{font-size:12.5px;color:var(--soft);font-style:italic;margin-bottom:14px}
.fallback-note{font-size:13px;color:var(--soft);background:var(--paper2);border-left:3px solid var(--gold);padding:11px 13px;margin-bottom:20px;line-height:1.45}
.fq{margin-bottom:26px;padding-bottom:20px;border-bottom:1px solid var(--line)}
.fq:last-child{border-bottom:none}
.fopts{list-style:none;margin-bottom:12px}
.fopt{padding:9px 13px;margin-bottom:6px;background:#fff;border:1.5px solid var(--line);font-size:15px;line-height:1.35}
.fopt.right{border-color:var(--teal);background:rgba(47,111,106,.13)}
.fopt .mk{font-family:ui-monospace,monospace;font-size:11px;font-weight:700;margin-right:7px}
.fopt.right .mk{color:var(--teal)}
@media print{.fallback-note{display:none}.fq{page-break-inside:avoid}}
${ltCss(meta.course)}
</style>
</head>
<body>
<div id="app">${staticFallback(items, title, subtitle)}</div>
<script>
const Q = ${embedJson(items)};
const TITLE = ${embedJson(title)};
const SUBTITLE = ${embedJson(subtitle)};
const NOTE = ${embedJson(note)};
const COURSE = ${embedJson(meta.course || '')};

let order = [...Q.keys()], i = 0, sel = [], locked = false, score = 0, log = [], shown = [];
const app = document.getElementById('app');
// Keep the static answer key so a runtime failure restores something readable
// instead of wiping the page to blank.
const FALLBACK = app.innerHTML;

function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function shuffle(a){for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a}
// Inlined verbatim from src/relabel.js so the tested copy is the shipped one.
${relabelSource}
shuffle(order);

function render(){
  if (i >= order.length) return done();
  const q = Q[order[i]];
  // Answer order is reshuffled per question, so the letters the rationale and
  // trap were written against no longer name the right options. relabelLetters
  // translates them at reveal time; "shown" is the slot -> stored-index map it
  // needs, so it has to stay in scope until grade() runs.
  shown = shuffle([...q.options.keys()]);
  app.innerHTML =
   '<div class="top">' +
     '<div><div class="sub">' + esc(SUBTITLE) + '</div><h1>Question ' + (i+1) + ' of ' + order.length + '</h1></div>' +
     '<div class="score">CORRECT<br><b>' + score + ' / ' + i + '</b></div>' +
   '</div>' +
   '<div class="bar"><div style="width:' + (i/order.length)*100 + '%"></div></div>' +
   (i === 0 && NOTE ? '<div class="note">' + esc(NOTE) + '</div>' : '') +
   '<div class="meta">' +
     '<span class="chip t1">' + esc(q.topic) + '</span>' +
     '<span class="chip t2">' + esc(q.subtopic) + '</span>' +
   '</div>' +
   (q.sata ? '<div class="sa">Select all that apply &middot; scored all or nothing</div>' : '') +
   '<div class="stem">' + esc(q.stem) + '</div>' +
   '<div id="opts"></div>' +
   '<div class="actions">' +
     (q.sata ? '<button class="btn" id="sub">Submit</button>' : '') +
     '<button class="btn alt" id="next" disabled>Next &rarr;</button>' +
   '</div>' +
   '<div id="rev"></div>';

  const ob = document.getElementById('opts');
  shown.forEach((realIdx, slot) => {
    const b = document.createElement('button');
    b.className = 'opt';
    b.dataset.k = realIdx;
    b.innerHTML = '<span class="mk">' + String.fromCharCode(65 + slot) + '</span>' + esc(q.options[realIdx]);
    b.onclick = () => pick(realIdx);
    ob.appendChild(b);
  });
  if (q.sata) document.getElementById('sub').onclick = () => grade();
  document.getElementById('next').onclick = () => { i++; sel = []; locked = false; render(); };
}

function pick(k){
  if (locked) return;
  const q = Q[order[i]];
  if (q.sata) {
    sel = sel.includes(k) ? sel.filter(x => x !== k) : sel.concat(k);
    [...document.querySelectorAll('.opt')].forEach(b => b.classList.toggle('sel', sel.includes(+b.dataset.k)));
  } else {
    sel = [k];
    grade();
  }
}

function grade(){
  if (locked || !sel.length) return;
  locked = true;
  const q = Q[order[i]];
  const key = [...q.correct].sort((a,b) => a-b);
  const got = [...sel].sort((a,b) => a-b);
  const ok = got.length === key.length && got.every((v,n) => v === key[n]);
  if (ok) score++;
  log.push({ topic: q.topic, ok });
  ltRecord(q, ok, sel);

  [...document.querySelectorAll('.opt')].forEach(b => {
    const k = +b.dataset.k;
    b.disabled = true;
    b.classList.remove('sel');
    if (q.correct.includes(k)) { b.classList.add('right'); b.querySelector('.mk').textContent = '\\u2713'; }
    else if (sel.includes(k)) { b.classList.add('wrong'); b.querySelector('.mk').textContent = '\\u2717'; }
  });

  const sb = document.getElementById('sub');
  if (sb) sb.disabled = true;

  document.getElementById('rev').innerHTML =
    '<div class="rev ' + (ok ? '' : 'no') + '">' +
      '<div class="lb">' + (ok ? 'Correct' : (q.sata ? 'Not quite &mdash; all or nothing' : 'Not quite')) + '</div>' +
      '<p>' + esc(relabelLetters(q.why, shown)) + '</p>' +
      (q.trap ? '<div class="trap"><div class="lb2">Watch for</div><p>' + esc(relabelLetters(q.trap, shown)) + '</p></div>' : '') +
    '</div>';

  const sc = document.querySelector('.score');
  if (sc) sc.innerHTML = 'CORRECT<br><b>' + score + ' / ' + (i+1) + '</b>';
  const nx = document.getElementById('next');
  nx.disabled = false;
  nx.focus();
}

function done(){
  const pct = Math.round(score / order.length * 100);
  const by = {};
  log.forEach(r => { by[r.topic] = by[r.topic] || {c:0,t:0}; by[r.topic].t++; if (r.ok) by[r.topic].c++; });
  const rows = Object.entries(by)
    .sort((a,b) => (a[1].c/a[1].t) - (b[1].c/b[1].t))
    .map(([t,v]) => '<div class="brow ' + ((v.c/v.t) < 0.7 ? 'weak' : '') + '"><span>' + esc(t) + '</span><span class="n">' + v.c + '/' + v.t + '</span></div>')
    .join('');
  app.innerHTML =
    '<div class="done">' +
      '<div class="sub">Session complete</div>' +
      '<div class="pct">' + pct + '%</div>' +
      '<h2>' + score + ' of ' + order.length + ' correct</h2>' +
      '<div class="brk">' + rows + '</div>' +
      '<p class="hint">Topics in red are below 70% &mdash; those are where your remaining study time pays off most.</p>' +
      '<div class="actions" style="justify-content:center">' +
        '<button class="btn" onclick="location.reload()">Run again (reshuffled)</button>' +
      '</div>' +
    '</div>';
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const nx = document.getElementById('next');
  if (nx && !nx.disabled) { e.preventDefault(); nx.click(); return; }
  const sb = document.getElementById('sub');
  if (sb && !sb.disabled) { e.preventDefault(); sb.click(); }
});

${ltJs(meta.course)}

try {
  render();
} catch (err) {
  app.innerHTML = '<div class="fallback-note"><b>The interactive drill could not start.</b> ' +
    esc(err && err.message ? err.message : String(err)) +
    ' The full answer key is below.</div>' + FALLBACK;
}

// Mounted separately from render() and swallowed on failure: tracking is a
// convenience, and it must never be the reason the drill does not come up.
// Only on published course pages — a standalone file handed to someone else
// has no course to file attempts against.
try { if (COURSE) ltMount(); } catch (err) {}
</script>
</body>
</html>
`;
}
