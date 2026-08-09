import test from 'node:test';
import assert from 'node:assert/strict';
import { relabelLetters, relabelSource, optionRefs } from '../src/relabel.js';

// order[slot] = stored option index, the same shape every runner builds.
const IDENTITY = [0, 1, 2, 3, 4];

test('a reference names the slot its option is actually drawn in', () => {
  // Stored B (index 1) is drawn third, stored E (index 4) is drawn first.
  const order = [4, 2, 1, 0, 3];
  assert.equal(relabelLetters('(B) and (E) look like rigor.', order), '(C) and (A) look like rigor.');
});

test('an unshuffled order leaves the text alone', () => {
  const text = '(B) and (E) look like rigor.';
  assert.equal(relabelLetters(text, IDENTITY), text);
});

test('"Option"/"Choice" phrases and their letter lists are translated', () => {
  // order[slot]=stored, so stored A/B/C are drawn in slots 1/2/0 -> B/C/A.
  const order = [2, 0, 1];
  assert.equal(relabelLetters('Option A describes the reverse.', order), 'Option B describes the reverse.');
  assert.equal(relabelLetters('Options A and B are stated backwards.', order), 'Options B and C are stated backwards.');
  assert.equal(relabelLetters('option C, A or B', order), 'option A, B or C');
  assert.equal(relabelLetters('Choice B is the definition.', order), 'Choice C is the definition.');
});

test('a letter that is not on screen is left as written rather than guessed at', () => {
  // Only three options are shown, so (E) resolves to nothing.
  assert.equal(relabelLetters('(E) is a distractor.', [0, 1, 2]), '(E) is a distractor.');
  // A partly-resolvable list is left whole, so it cannot half-translate.
  assert.equal(relabelLetters('Options A and E differ.', [1, 0, 2]), 'Options A and E differ.');
});

test('prose that merely starts with a capital letter is not a reference', () => {
  const order = [2, 1, 0];
  for (const text of [
    'Options Are ranked by cost.',
    'Alternatives include a waiver.',
    'The (b) subsection applies.',
    'Choices About care belong to the patient.',
  ]) {
    assert.equal(relabelLetters(text, order), text);
  }
});

test('missing text or order is passed through untouched', () => {
  assert.equal(relabelLetters('', IDENTITY), '');
  assert.equal(relabelLetters(null, IDENTITY), null);
  assert.equal(relabelLetters('(A) stands.', undefined), '(A) stands.');
});

test('relabelSource is self-contained so exported pages can inline it', () => {
  // It must not close over anything module-level; rebuild it from its own text
  // in an empty scope and check it still works.
  // eslint-disable-next-line no-new-func
  const rebuilt = new Function(`return (${relabelSource})`)();
  assert.equal(rebuilt('(B) and (E) look like rigor.', [4, 2, 1, 0, 3]), '(C) and (A) look like rigor.');
});

test('optionRefs agrees with what relabelLetters rewrites', () => {
  // relabelLetters must stay self-contained, so it carries its own copy of the
  // pattern. This pins the two together: anything one treats as a reference,
  // the other must too.
  const corpus = [
    '(B) and (E) look like rigor.',
    'Option A describes the reverse.',
    'Options A and B are stated backwards, Choice C is not.',
    'option C, A or B',
    'Options Are ranked by cost.',
    'Alternatives include a waiver.',
    'The (b) subsection applies.',
    'No references at all here.',
  ];
  // A reversing order makes any rewritten letter differ from the original, so
  // counting changed letters counts exactly what relabelLetters treated as a ref.
  const order = [7, 6, 5, 4, 3, 2, 1, 0];
  for (const text of corpus) {
    const rewritten = relabelLetters(text, order);
    let changed = 0;
    for (let i = 0; i < text.length; i++) if (text[i] !== rewritten[i]) changed++;
    assert.equal(changed, optionRefs(text).length, `disagreement on: ${text}`);
  }
});

test('optionRefs reads letters as stored indices, in order of mention', () => {
  assert.deepEqual(optionRefs('(B) and (E) look like rigor.'), [1, 4]);
  assert.deepEqual(optionRefs('Options C, A or B'), [2, 0, 1]);
  assert.deepEqual(optionRefs('nothing here'), []);
  assert.deepEqual(optionRefs(undefined), []);
});
