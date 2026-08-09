import test from 'node:test';
import assert from 'node:assert/strict';
import { renderExport, renderIndex, embedJson, escapeHtml } from '../src/export.js';

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

/**
 * Every src/href in a document, as raw attribute values.
 * A resource is off-host if it carries a scheme (http:, //cdn...) — inline
 * `data:` URIs and relative paths are fetched from the file itself or from
 * alongside it, so neither reaches the network.
 */
function externalRefs(html) {
  const refs = [...html.matchAll(/\b(?:src|href)\s*=\s*"([^"]*)"/g)].map((m) => m[1]);
  return refs.filter((v) => !v.startsWith('data:') && /^[a-z][a-z0-9+.-]*:|^\/\//i.test(v));
}

test('the export references nothing external', () => {
  // The file has to work offline from a file:// URL, so nothing may point at
  // a CDN, font service, or remote image.
  assert.deepEqual(externalRefs(renderExport(bank)), []);
});

test('the landing page references nothing external', () => {
  const html = renderIndex([{ href: 'ch25.html', title: 'Chapter 25', count: 75, sata: 22, topics: ['poverty'] }]);
  assert.deepEqual(externalRefs(html), []);
  assert.ok(html.includes('href="ch25.html"'), 'chapter links are relative');
});

test('the landing page renders a no-JS fallback chapter list before any script', () => {
  // The page is now an interactive session builder, but a viewer that blocks
  // scripts must still see (and be able to open) every chapter. The fallback
  // links live in #app before the <script>, so they render without JS.
  const html = renderIndex([
    { href: 'a.html', title: 'Chapter A', count: 3, sata: 1, topics: ['t'], items: [] },
    { href: 'b.html', title: 'Chapter B', count: 5, sata: 0, topics: ['u'], items: [] },
  ]);
  const beforeScript = html.slice(0, html.indexOf('<script>'));
  assert.ok(beforeScript.includes('href="a.html"'), 'first chapter link is in the pre-script fallback');
  assert.ok(beforeScript.includes('href="b.html"'), 'second chapter link is in the pre-script fallback');
  assert.ok(beforeScript.includes('Chapter A'), 'fallback shows the chapter title');
});

test('the landing page embeds each chapter\'s drill items for combined sessions', () => {
  const items = [{ topic: 'poverty', subtopic: 's', stem: 'Q?', options: ['a', 'b'], correct: [0], sata: false, why: 'r', trap: null }];
  const html = renderIndex([{ href: 'ch25.html', title: 'Chapter 25', count: 1, sata: 0, topics: ['poverty'], items }]);
  const payload = JSON.parse(html.match(/const CHAPTERS = (\[.*?\]);\n/s)[1].replace(/\\u003c/g, '<'));
  assert.equal(payload.length, 1);
  assert.equal(payload[0].items.length, 1);
  assert.equal(payload[0].items[0].stem, 'Q?');
  assert.ok(html.includes('id="count"'), 'the question-count dropdown is present');
  assert.ok(html.includes('id="start"'), 'the start button is present');
});

test('the landing page escapes chapter titles and topics', () => {
  const html = renderIndex([{ href: 'x.html', title: '<b>x</b>', count: 1, sata: 0, topics: ['<i>t</i>'] }]);
  assert.ok(!html.includes('<b>x</b>'));
  assert.ok(html.includes('&lt;b&gt;x&lt;/b&gt;'));
  assert.ok(html.includes('&lt;i&gt;t&lt;/i&gt;'));
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

test('both runners inline the letter-relabeller and use it on reveal', () => {
  const items = [{ ...bank.q_0001, sata: false, why: bank.q_0001.rationale, trap: bank.q_0001.trap }];
  const pages = {
    'chapter export': renderExport(bank),
    'landing page': renderIndex([
      { href: 'ch25.html', title: 'Chapter 25', count: 1, sata: 0, topics: ['poverty'], items },
    ]),
  };

  for (const [name, html] of Object.entries(pages)) {
    assert.match(html, /function relabelLetters\(text, order\)/, `${name} inlines the helper`);
    // Both the rationale and the trap have to go through it, against the
    // display order — printing either one raw is the bug this guards.
    assert.match(html, /esc\(relabelLetters\(q\.why, shown\)\)/, `${name} relabels the rationale`);
    assert.match(html, /esc\(relabelLetters\(q\.trap, shown\)\)/, `${name} relabels the trap`);
  }
});

test('the static answer key does not relabel, because it prints stored order', () => {
  const html = renderExport({
    q_0001: { ...bank.q_0001, trap: 'Option B is the one to watch.' },
  });
  const body = html.slice(html.indexOf('<body>'), html.indexOf('<script>'));
  assert.ok(body.includes('Option B is the one to watch.'), 'letters already agree with the unshuffled list');
});
