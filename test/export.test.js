import test from 'node:test';
import assert from 'node:assert/strict';
import { renderExport, embedJson, escapeHtml } from '../src/export.js';

const bank = {
  q_0001: {
    topic: 'poverty', subtopic: 'federal poverty measures',
    stem: 'Who issues the Federal Poverty Guidelines?',
    options: ['Census Bureau', 'USDHHS'], correct: [1],
    rationale: 'USDHHS issues them annually.', trap: 'Thresholds come from Census.',
    type: 'single', source: 'ch25.md',
  },
  q_0002: {
    topic: 'homelessness', subtopic: 'definitions and categories',
    stem: 'Select all that apply.',
    options: ['a', 'b', 'c'], correct: [0, 2],
    rationale: 'Because.', type: 'sata', source: 'ch25.md',
  },
};

test('the export is a complete standalone document', () => {
  const html = renderExport(bank, { title: 'Ch25' });
  assert.match(html, /^<!doctype html>/);
  assert.match(html, /<title>Ch25<\/title>/);
  assert.match(html, /<\/html>\s*$/);
});

test('the export references nothing external', () => {
  const html = renderExport(bank);
  // No src/href attributes at all means no CDN, font, image or stylesheet
  // fetch can happen — the file has to work offline from a file:// URL.
  assert.equal(html.match(/\b(src|href)\s*=/g), null);
  assert.equal(html.match(/https?:\/\//g), null);
});

test('every question and its rationale and trap are embedded', () => {
  const html = renderExport(bank);
  assert.ok(html.includes('Who issues the Federal Poverty Guidelines?'));
  assert.ok(html.includes('USDHHS issues them annually.'));
  assert.ok(html.includes('Thresholds come from Census.'));
  assert.ok(html.includes('Select all that apply.'));
});

test('bank-internal fields are not shipped to recipients', () => {
  const html = renderExport(bank);
  assert.ok(!html.includes('q_0001'), 'question ids stay in the bank');
  assert.ok(!html.includes('ch25.md'), 'source filenames stay in the bank');
});

test('SATA questions are marked so the page can score them all-or-nothing', () => {
  const html = renderExport(bank);
  const payload = JSON.parse(html.match(/const Q = (\[.*?\]);\n/s)[1].replace(/\\u003c/g, '<'));
  assert.equal(payload.length, 2);
  assert.equal(payload[0].sata, false);
  assert.equal(payload[1].sata, true);
  assert.deepEqual(payload[1].correct, [0, 2]);
});

test('embedded JSON cannot break out of the script block', () => {
  const nasty = { stem: 'closing tag </script><script>alert(1)</script> inside a stem' };
  const embedded = embedJson(nasty);
  assert.ok(!embedded.includes('</script>'));
  assert.ok(embedded.includes('\\u003c/script>'));
  assert.deepEqual(JSON.parse(embedded.replace(/\\u003c/g, '<')), nasty);
});

test('embedded JSON escapes the line and paragraph separators', () => {
  const embedded = embedJson({ s: 'a\u2028b\u2029c' });
  assert.ok(!embedded.includes('\u2028'));
  assert.ok(!embedded.includes('\u2029'));
  assert.equal(JSON.parse(embedded).s, 'a\u2028b\u2029c');
});

test('a stem containing markup cannot inject into the document', () => {
  const html = renderExport({
    q_0001: {
      ...bank.q_0001,
      stem: '</script><img onerror=alert(1)>',
    },
  });
  assert.ok(!html.includes('</script><img'), 'the raw sequence never reaches the document');
  assert.equal(html.match(/\bsrc\s*=/g), null);
});

test('escapeHtml covers the attribute-breaking characters', () => {
  assert.equal(escapeHtml('<a href="x">&</a>'), '&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;');
});

test('the questions render as static HTML before any script runs', () => {
  // The load-bearing property: a viewer that blocks inline scripts must still
  // show the questions rather than a blank page.
  const html = renderExport(bank);
  const body = html.slice(html.indexOf('<body>'), html.indexOf('<script>'));
  assert.ok(body.includes('Who issues the Federal Poverty Guidelines?'), 'stem is in the markup');
  assert.ok(body.includes('USDHHS issues them annually.'), 'rationale is in the markup');
  assert.ok(body.includes('Thresholds come from Census.'), 'trap is in the markup');
  assert.ok(body.includes('Select all that apply.'), 'every question, not just the first');
});

test('the static view marks the correct answers', () => {
  const html = renderExport(bank);
  const body = html.slice(html.indexOf('<body>'), html.indexOf('<script>'));
  // Two questions, three correct options between them.
  assert.equal((body.match(/class="fopt right"/g) || []).length, 3);
});

test('the static view escapes question text', () => {
  const html = renderExport({
    q_0001: { ...bank.q_0001, stem: '<img onerror=alert(1)>' },
  });
  const body = html.slice(html.indexOf('<body>'), html.indexOf('<script>'));
  assert.ok(!body.includes('<img'), 'markup in a stem is escaped, not rendered');
  assert.ok(body.includes('&lt;img'));
});

test('the script replaces the static view rather than appending to it', () => {
  const html = renderExport(bank);
  assert.match(html, /const FALLBACK = app\.innerHTML;/);
  assert.match(html, /app\.innerHTML =\s*\n?\s*'<div class="top">/);
  assert.match(html, /catch \(err\)/, 'a boot failure restores the answer key');
});
