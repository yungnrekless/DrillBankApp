/**
 * Drill session runner.
 *
 * Flow: build today's queue from the scheduler → ask → immediate reveal with
 * rationale and trap → log the attempt and update schedule state → next.
 * Every attempt is written to the append-only log as it happens, so quitting
 * mid-session still records the work you did.
 */

import { api } from '/api.js';
import {
  buildQueue, grade, todayISO, weakTopics, topicAccuracy, WEAK_THRESHOLD,
} from '/src/scheduler.js';
import { relabelLetters } from '/src/relabel.js';
import { renderDashboard } from '/dashboard.js';

const $ = (id) => document.getElementById(id);

const COURSE_KEY = 'drillbank.course';

const state = {
  course: null,        // slug of the class being drilled
  courses: [],         // [{slug, name, questions}]
  questions: {},
  attempts: [],
  schedule: {},
  queue: [],
  index: 0,
  sessionId: null,
  answered: false,
  current: null,       // { qid, q, order } — order maps display slot -> real index
  shuffle: true,
  results: [],         // this session's attempts, for the summary
};

/* ── boot ─────────────────────────────────────────────────────────── */

/**
 * Which course to open. The URL wins so a link can point at a specific class;
 * otherwise the last one used, and failing that the first course there is.
 */
function initialCourse(courses) {
  const slugs = courses.map((c) => c.slug);
  const fromUrl = new URLSearchParams(location.search).get('course');
  if (fromUrl && slugs.includes(fromUrl)) return fromUrl;
  const remembered = localStorage.getItem(COURSE_KEY);
  if (remembered && slugs.includes(remembered)) return remembered;
  return slugs[0] || null;
}

async function boot() {
  try {
    state.courses = await api.courses();
  } catch (err) {
    $('setup-summary').textContent = `Could not load courses: ${err.message}`;
    return;
  }

  if (!state.courses.length) {
    $('setup-summary').textContent =
      'No courses found. Add courses/<slug>/drills/ and run: node scripts/import.js --course <slug>';
    $('start-session').disabled = true;
    return;
  }

  const select = $('course-select');
  select.replaceChildren(...state.courses.map((c) => {
    const opt = document.createElement('option');
    opt.value = c.slug;
    opt.textContent = c.name;
    return opt;
  }));
  // A single course needs no picker — showing a one-item dropdown just adds
  // a control that cannot do anything.
  select.hidden = state.courses.length < 2;
  select.addEventListener('change', () => loadCourse(select.value));

  await loadCourse(initialCourse(state.courses));
}

/** Point the whole app at one course: fetch its data, drop any live session. */
async function loadCourse(slug) {
  if (!slug) return;
  state.course = slug;
  $('course-select').value = slug;
  localStorage.setItem(COURSE_KEY, slug);

  // Keep the URL shareable and the back/forward buttons honest.
  const url = new URL(location.href);
  url.searchParams.set('course', slug);
  history.replaceState(null, '', url);

  // Switching mid-session abandons it. Attempts already answered are on disk
  // under the old course, so nothing is lost — but the queue is not portable.
  state.queue = [];
  state.results = [];
  state.current = null;
  $('question-card').hidden = true;
  $('session-summary').hidden = true;
  $('session-setup').hidden = false;
  $('score').hidden = true;

  $('setup-summary').textContent = 'Loading bank…';
  $('start-session').disabled = true;
  try {
    const [questions, attempts, schedule] = await Promise.all([
      api.questions(slug), api.attempts(slug), api.schedule(slug),
    ]);
    state.questions = questions;
    state.attempts = attempts;
    state.schedule = schedule;
  } catch (err) {
    $('setup-summary').textContent = `Could not load data: ${err.message}`;
    return;
  }
  renderSetup();
  if (!$('view-dashboard').hidden) renderDashboard(state);
}

function renderSetup() {
  const total = Object.keys(state.questions).length;
  if (!total) {
    $('setup-summary').textContent =
      `No questions in this course's bank yet. Run: node scripts/import.js --course ${state.course}`;
    $('weak-callout').hidden = true;
    $('start-session').disabled = true;
    return;
  }
  $('start-session').disabled = false;
  const due = buildQueue(state.questions, state.schedule, state.attempts, { limit: 9999 }).length;
  const topics = new Set(Object.values(state.questions).map((q) => q.topic)).size;
  $('setup-summary').textContent =
    `${total} questions across ${topics} topics · ${due} due or pulled forward today.`;

  const weak = weakTopics(state.attempts, state.questions);
  const callout = $('weak-callout');
  if (weak.length) {
    const acc = topicAccuracy(state.attempts, state.questions);
    callout.textContent = `Below ${Math.round(WEAK_THRESHOLD * 100)}%: ` +
      weak.map((t) => `${t} (${Math.round(acc[t].accuracy * 100)}%)`).join(', ') +
      '. These are weighted to the front of the queue.';
    callout.hidden = false;
  } else {
    callout.hidden = true;
  }
}

/* ── session ──────────────────────────────────────────────────────── */

function startSession() {
  const limit = Math.max(1, Number($('session-length').value) || 20);
  state.shuffle = $('shuffle-options').checked;
  state.queue = buildQueue(state.questions, state.schedule, state.attempts, { limit });
  if (!state.queue.length) return;

  state.index = 0;
  state.results = [];
  state.sessionId = `s_${new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14)}`;

  $('session-setup').hidden = true;
  $('session-summary').hidden = true;
  $('question-card').hidden = false;
  $('score').hidden = false;
  updateScore();
  renderQuestion();
}

function shuffled(n) {
  const order = [...Array(n).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

function renderQuestion() {
  const qid = state.queue[state.index];
  const q = state.questions[qid];
  const order = state.shuffle ? shuffled(q.options.length) : [...Array(q.options.length).keys()];
  state.current = { qid, q, order };
  state.answered = false;

  $('q-topic').textContent = q.topic;
  $('q-subtopic').textContent = q.subtopic;
  $('q-type').textContent = q.type === 'sata' ? 'SATA — all or nothing' : 'single';
  $('q-count').textContent = `${state.index + 1} / ${state.queue.length}`;
  $('q-stem').textContent = q.stem;

  const form = $('q-options');
  form.replaceChildren();
  order.forEach((realIdx, slot) => {
    const id = `opt-${slot}`;
    const label = document.createElement('label');
    label.className = 'option';
    label.htmlFor = id;

    const input = document.createElement('input');
    input.type = q.type === 'sata' ? 'checkbox' : 'radio';
    input.name = 'answer';
    input.id = id;
    input.value = String(realIdx);

    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.textContent = `${String.fromCharCode(65 + slot)}.`;

    const text = document.createElement('span');
    text.textContent = q.options[realIdx];

    label.append(input, letter, text);
    form.appendChild(label);
  });

  $('reveal').hidden = true;
  $('trap-block').hidden = true;
  $('submit-answer').hidden = false;
  $('submit-answer').disabled = false;
  $('next-question').hidden = true;
}

function selectedIndices() {
  return [...$('q-options').querySelectorAll('input:checked')]
    .map((i) => Number(i.value))
    .sort((a, b) => a - b);
}

async function submitAnswer() {
  if (state.answered) return;
  const { qid, q } = state.current;
  const selected = selectedIndices();
  if (!selected.length) return;

  // SATA is all-or-nothing: the sets must match exactly.
  const key = [...q.correct].sort((a, b) => a - b);
  const correct = selected.length === key.length && selected.every((v, i) => v === key[i]);

  state.answered = true;
  revealAnswer(selected, correct);

  const attempt = {
    qid,
    timestamp: new Date().toISOString(),
    correct,
    session_id: state.sessionId,
    selected,
  };
  state.attempts.push(attempt);
  state.results.push(attempt);
  state.schedule[qid] = grade(state.schedule[qid], correct, todayISO());
  updateScore();

  // Pinned to the course the question came from: a mid-flight switch must not
  // land this attempt in another class's log.
  const course = state.course;
  try {
    await Promise.all([api.logAttempts(course, attempt), api.saveSchedule(course, state.schedule)]);
  } catch (err) {
    $('verdict').textContent += `  (warning: not saved — ${err.message})`;
  }
}

function revealAnswer(selected, correct) {
  const { q, order } = state.current;
  const chosen = new Set(selected);
  const key = new Set(q.correct);

  [...$('q-options').children].forEach((label, slot) => {
    const realIdx = order[slot];
    label.classList.add('is-locked');
    label.querySelector('input').disabled = true;
    if (key.has(realIdx)) label.classList.add('is-correct');
    else if (chosen.has(realIdx)) label.classList.add('is-wrong');
  });

  const verdict = $('verdict');
  verdict.textContent = correct
    ? 'Correct'
    : (q.type === 'sata' ? 'Wrong — SATA is all or nothing' : 'Wrong');
  verdict.className = `verdict ${correct ? 'right' : 'wrong'}`;

  // Rationales and traps in the source files often refer to options by their
  // stored letters ("(C) is right for fee-for-service"). With reshuffling on
  // those letters point at the wrong option, so state the key in the order
  // shown right now and translate the prose to match it.
  $('q-key').textContent = q.correct
    .map((realIdx) => `${String.fromCharCode(65 + order.indexOf(realIdx))}. ${q.options[realIdx]}`)
    .sort()
    .join('  ·  ');
  $('q-rationale').textContent = relabelLetters(q.rationale, order);
  if (q.trap) {
    $('q-trap').textContent = relabelLetters(q.trap, order);
    $('trap-block').hidden = false;
  }
  $('reveal').hidden = false;
  $('submit-answer').hidden = true;
  $('next-question').hidden = false;
  $('next-question').focus();
}

function nextQuestion() {
  state.index++;
  if (state.index >= state.queue.length) return endSession();
  renderQuestion();
}

function updateScore() {
  const n = state.results.length;
  const right = state.results.filter((a) => a.correct).length;
  $('score-value').textContent = `${right} / ${n}`;
  $('score-pct').textContent = n ? `${Math.round((right / n) * 100)}%` : '';
}

function endSession() {
  $('question-card').hidden = true;
  $('session-summary').hidden = false;

  const n = state.results.length;
  const right = state.results.filter((a) => a.correct).length;
  $('summary-score').textContent = n
    ? `${right} / ${n} · ${Math.round((right / n) * 100)}%`
    : 'No questions answered.';

  // Per-topic breakdown for this session only.
  const byTopic = {};
  for (const a of state.results) {
    const t = state.questions[a.qid].topic;
    byTopic[t] ||= { n: 0, right: 0 };
    byTopic[t].n++;
    if (a.correct) byTopic[t].right++;
  }
  const host = $('summary-topics');
  host.replaceChildren();
  for (const [topic, s] of Object.entries(byTopic).sort()) {
    const acc = s.right / s.n;
    const row = document.createElement('div');
    row.className = 'dd-meta';
    row.style.marginBottom = '6px';
    const name = document.createElement('span');
    name.textContent = topic;
    const val = document.createElement('span');
    val.textContent = `${s.right}/${s.n} · ${Math.round(acc * 100)}%`;
    if (acc < WEAK_THRESHOLD) val.className = 'bad';
    row.append(name, val);
    host.appendChild(row);
  }
}

function backToSetup() {
  $('session-summary').hidden = true;
  $('question-card').hidden = true;
  $('session-setup').hidden = false;
  $('score').hidden = true;
  renderSetup();
}

/* ── view switching ───────────────────────────────────────────────── */

function showView(view) {
  for (const tab of document.querySelectorAll('.tab')) {
    tab.classList.toggle('is-active', tab.dataset.view === view);
  }
  $('view-drill').hidden = view !== 'drill';
  $('view-dashboard').hidden = view !== 'dashboard';
  if (view === 'dashboard') renderDashboard(state);
}

/* ── wiring ───────────────────────────────────────────────────────── */

$('start-session').addEventListener('click', startSession);
$('submit-answer').addEventListener('click', submitAnswer);
$('next-question').addEventListener('click', nextQuestion);
$('restart-session').addEventListener('click', backToSetup);
for (const tab of document.querySelectorAll('.tab')) {
  tab.addEventListener('click', () => showView(tab.dataset.view));
}

// Enter submits, then advances — keeps a drill session on the keyboard.
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' || $('question-card').hidden) return;
  e.preventDefault();
  if (state.answered) nextQuestion();
  else submitAnswer();
});

boot();
