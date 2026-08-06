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
  }));

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
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
</style>
</head>
<body>
<div id="app"></div>
<script>
const Q = ${embedJson(items)};
const TITLE = ${embedJson(title)};
const SUBTITLE = ${embedJson(subtitle)};
const NOTE = ${embedJson(note)};

let order = [...Q.keys()], i = 0, sel = [], locked = false, score = 0, log = [], shown = [];
const app = document.getElementById('app');

function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function shuffle(a){for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a}
shuffle(order);

function render(){
  if (i >= order.length) return done();
  const q = Q[order[i]];
  // Answer order is reshuffled per question; rationales never refer to
  // options by letter, so nothing depends on the printed order.
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
      '<p>' + esc(q.why) + '</p>' +
      (q.trap ? '<div class="trap"><div class="lb2">Watch for</div><p>' + esc(q.trap) + '</p></div>' : '') +
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

render();
</script>
</body>
</html>
`;
}
