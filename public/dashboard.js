/**
 * Dashboard: topic-by-topic accuracy, sparkline over the last N sessions,
 * and a "why is this red" drill-down listing the questions responsible.
 */

import { WEAK_THRESHOLD, topicAccuracy } from '/src/scheduler.js';

const SPARK_SESSIONS = 5;

const pct = (n) => `${Math.round(n * 100)}%`;

/** Attempts grouped by session, oldest first, per topic. */
function sessionSeries(attempts, questions, topic, limit = SPARK_SESSIONS) {
  const bySession = new Map();
  for (const a of attempts) {
    const q = questions[a.qid];
    if (!q || q.topic !== topic) continue;
    const key = a.session_id || a.timestamp?.slice(0, 10) || 'unknown';
    const bucket = bySession.get(key) || { n: 0, correct: 0 };
    bucket.n++;
    if (a.correct) bucket.correct++;
    bySession.set(key, bucket);
  }
  return [...bySession.values()].slice(-limit).map((b) => b.correct / b.n);
}

function sparkline(series, weak) {
  const w = 88;
  const h = 22;
  const stroke = weak ? 'var(--red)' : 'var(--green)';
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'spark');
  svg.setAttribute('width', w);
  svg.setAttribute('height', h);
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  if (series.length === 0) return svg;

  // 70% reference line — the same threshold the drill files use.
  const y = (v) => h - 2 - v * (h - 4);
  const rule = document.createElementNS(ns, 'line');
  rule.setAttribute('x1', 0); rule.setAttribute('x2', w);
  rule.setAttribute('y1', y(WEAK_THRESHOLD)); rule.setAttribute('y2', y(WEAK_THRESHOLD));
  rule.setAttribute('stroke', 'var(--line)');
  rule.setAttribute('stroke-dasharray', '2 3');
  svg.appendChild(rule);

  const step = series.length > 1 ? w / (series.length - 1) : 0;
  const points = series.map((v, i) => `${(i * step).toFixed(1)},${y(v).toFixed(1)}`);

  if (series.length === 1) {
    const dot = document.createElementNS(ns, 'circle');
    dot.setAttribute('cx', w / 2); dot.setAttribute('cy', y(series[0]));
    dot.setAttribute('r', 2.5); dot.setAttribute('fill', stroke);
    svg.appendChild(dot);
    return svg;
  }

  const line = document.createElementNS(ns, 'polyline');
  line.setAttribute('points', points.join(' '));
  line.setAttribute('fill', 'none');
  line.setAttribute('stroke', stroke);
  line.setAttribute('stroke-width', '1.6');
  line.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(line);

  const last = document.createElementNS(ns, 'circle');
  last.setAttribute('cx', ((series.length - 1) * step).toFixed(1));
  last.setAttribute('cy', y(series[series.length - 1]).toFixed(1));
  last.setAttribute('r', 2.5);
  last.setAttribute('fill', stroke);
  svg.appendChild(last);

  return svg;
}

/** Per-question stats within one topic, worst first. */
function questionBreakdown(attempts, questions, topic) {
  const stats = new Map();
  for (const [qid, q] of Object.entries(questions)) {
    if (q.topic === topic) stats.set(qid, { qid, q, n: 0, wrong: 0, lastWrong: null });
  }
  for (const a of attempts) {
    const s = stats.get(a.qid);
    if (!s) continue;
    s.n++;
    if (!a.correct) { s.wrong++; s.lastWrong = a.timestamp; }
  }
  return [...stats.values()]
    .filter((s) => s.n > 0)
    .sort((a, b) => (b.wrong / b.n) - (a.wrong / a.n) || b.wrong - a.wrong);
}

function renderDrilldown(root, { topic, attempts, questions, schedule }) {
  const title = document.getElementById('drilldown-title');
  const body = document.getElementById('drilldown-body');
  const panel = document.getElementById('drilldown-panel');
  title.textContent = `Why ${topic} is where it is`;
  body.replaceChildren();

  const rows = questionBreakdown(attempts, questions, topic);
  if (!rows.length) {
    body.innerHTML = '<p class="empty">No attempts logged in this topic yet.</p>';
    panel.hidden = false;
    return;
  }

  for (const s of rows) {
    const div = document.createElement('div');
    div.className = 'dd-q';
    const stem = document.createElement('p');
    stem.className = 'dd-stem';
    stem.textContent = s.q.stem;
    const meta = document.createElement('div');
    meta.className = 'dd-meta';
    const acc = (s.n - s.wrong) / s.n;
    const sched = schedule[s.qid];
    const bits = [
      `${s.n - s.wrong}/${s.n} correct`,
      `${pct(acc)}`,
      s.q.subtopic,
    ];
    if (sched?.struggling) bits.push('struggling');
    if (sched?.due_date) bits.push(`due ${sched.due_date}`);
    for (const b of bits) {
      const span = document.createElement('span');
      span.textContent = b;
      if (acc < WEAK_THRESHOLD && (b === pct(acc) || b === 'struggling')) span.className = 'bad';
      meta.appendChild(span);
    }
    div.append(stem, meta);
    body.appendChild(div);
  }
  panel.hidden = false;
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

export function renderDashboard({ questions, attempts, schedule }) {
  const list = document.getElementById('topic-list');
  list.replaceChildren();
  document.getElementById('drilldown-panel').hidden = true;

  const acc = topicAccuracy(attempts, questions);
  const allTopics = [...new Set(Object.values(questions).map((q) => q.topic))].sort();

  if (!allTopics.length) {
    list.innerHTML = '<p class="empty">No questions imported yet.</p>';
    return;
  }

  // Weak topics float to the top — that is the whole point of the view.
  allTopics.sort((a, b) => {
    const aa = acc[a]?.accuracy ?? Infinity;
    const bb = acc[b]?.accuracy ?? Infinity;
    return aa - bb || a.localeCompare(b);
  });

  for (const topic of allTopics) {
    const stat = acc[topic];
    const weak = stat ? stat.accuracy < WEAK_THRESHOLD : false;

    const row = document.createElement('button');
    row.className = 'topic-row';
    row.type = 'button';

    const name = document.createElement('div');
    name.className = 'topic-name';
    const dot = document.createElement('span');
    dot.className = `dot ${stat ? (weak ? 'bad' : 'ok') : 'none'}`;
    const label = document.createElement('span');
    label.textContent = topic;
    name.append(dot, label);

    const spark = sparkline(sessionSeries(attempts, questions, topic), weak);

    const right = document.createElement('div');
    right.className = `topic-acc${weak ? ' bad' : ''}`;
    right.textContent = stat ? pct(stat.accuracy) : '—';

    const n = document.createElement('div');
    n.className = 'topic-n';
    n.textContent = stat ? `${stat.attempts} att` : 'untested';

    row.append(name, spark, right);
    row.appendChild(n);
    row.addEventListener('click', () =>
      renderDrilldown(list, { topic, attempts, questions, schedule }));
    list.appendChild(row);
  }
}
