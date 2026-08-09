import test from 'node:test';
import assert from 'node:assert/strict';
import { parseMarkdown, mergeIntoBank, normalizeStem, topicFromFilename } from '../src/importer.js';

test('parses a basic single-answer question', () => {
  const { questions } = parseMarkdown(`
Topic: economics
Subtopic: payment mechanisms

Q: Who carries utilization risk under capitation?
A) The patient
B) The provider organization
C) The payer
Answer: B
Rationale: Capitation pays a fixed PMPM amount.
Trap: (C) is right for fee-for-service.
`, 'econ.md');

  assert.equal(questions.length, 1);
  const q = questions[0];
  assert.equal(q.topic, 'economics');
  assert.equal(q.subtopic, 'payment mechanisms');
  assert.equal(q.type, 'single');
  assert.deepEqual(q.correct, [1]);
  assert.equal(q.options.length, 3);
  assert.match(q.rationale, /fixed PMPM/);
  assert.match(q.trap, /fee-for-service/);
});

test('multiple answer letters make the question a SATA', () => {
  const { questions } = parseMarkdown(`
Topic: t
Q: Select all that apply.
A) one
B) two
C) three
D) four
Answer: A, C and D
Rationale: because.
`, 'f.md');
  assert.equal(questions[0].type, 'sata');
  assert.deepEqual(questions[0].correct, [0, 2, 3]);
});

test('tolerates bold and bulleted key lines', () => {
  const { questions } = parseMarkdown(`
**Topic:** pharm
### **Q1:** What monitors unfractionated heparin?
- **A)** INR
- **B)** aPTT
- **Answer:** B
- **Rationale:** aPTT or anti-Xa.
`, 'f.md');
  assert.equal(questions.length, 1);
  assert.equal(questions[0].topic, 'pharm');
  assert.deepEqual(questions[0].correct, [1]);
});

test('stems and rationales wrap across lines', () => {
  const { questions } = parseMarkdown(`
Topic: t
Q: A long stem that
continues on the next line.
A) one
B) two
Answer: A
Rationale: First sentence.
Second sentence.
`, 'f.md');
  assert.equal(questions[0].stem, 'A long stem that continues on the next line.');
  assert.equal(questions[0].rationale, 'First sentence. Second sentence.');
});

test('prose between questions is ignored', () => {
  const { questions } = parseMarkdown(`
Topic: t
Some chapter narrative that is not a question at all.

Q: Real question?
A) one
B) two
Answer: A
Rationale: r
`, 'f.md');
  assert.equal(questions.length, 1);
});

test('a question with no answer is dropped with a warning', () => {
  const { questions, warnings } = parseMarkdown(`
Topic: t
Q: Incomplete question?
A) one
B) two
`, 'f.md');
  assert.equal(questions.length, 0);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /missing options or answer/);
});

test('gaps in option letters are closed and answers remapped', () => {
  const { questions, warnings } = parseMarkdown(`
Topic: t
Q: Skipped letter?
A) one
B) two
D) four
Answer: D
Rationale: r
`, 'f.md');
  assert.deepEqual(questions[0].options, ['one', 'two', 'four']);
  assert.deepEqual(questions[0].correct, [2]);
  assert.match(warnings[0], /gaps in its option letters/);
});

test('topic falls back to the filename', () => {
  assert.equal(topicFromFilename('Economics_ch04-drills.md'), 'economics ch04 drills');
  const { questions } = parseMarkdown(`
Q: No topic declared?
A) one
B) two
Answer: A
Rationale: r
`, 'Economics_ch04.md');
  assert.equal(questions[0].topic, 'economics ch04');
});

test('re-importing keeps existing qids and adds nothing', () => {
  const drafts = [
    { topic: 't', subtopic: 's', stem: 'First?', options: ['a', 'b'], correct: [0], rationale: 'r', type: 'single' },
    { topic: 't', subtopic: 's', stem: 'Second?', options: ['a', 'b'], correct: [1], rationale: 'r', type: 'single' },
  ];
  const first = mergeIntoBank({}, drafts);
  assert.equal(first.added, 2);
  assert.deepEqual(Object.keys(first.bank), ['q_0001', 'q_0002']);

  const second = mergeIntoBank(first.bank, drafts);
  assert.equal(second.added, 0);
  assert.equal(second.skipped, 2);
  assert.deepEqual(second.bank, first.bank);

  // A new question continues the numbering rather than reusing an id.
  const third = mergeIntoBank(first.bank, [...drafts,
    { topic: 't', subtopic: 's', stem: 'Third?', options: ['a', 'b'], correct: [0], rationale: 'r', type: 'single' }]);
  assert.equal(third.added, 1);
  assert.ok(third.bank.q_0003);
});

test('stem matching ignores whitespace, case and punctuation', () => {
  assert.equal(normalizeStem('Who  carries  RISK, under capitation?'), normalizeStem('who carries risk under capitation'));
});

test('invalid questions are rejected rather than written', () => {
  const { bank, added, errors } = mergeIntoBank({}, [
    { topic: 't', subtopic: 's', stem: 'Bad?', options: ['a'], correct: [5], rationale: 'r', type: 'single' },
  ]);
  assert.equal(added, 0);
  assert.deepEqual(bank, {});
  assert.ok(errors.length);
});

const drill = (body) => `
Topic: economics
Subtopic: payment mechanisms

Q: Who carries utilization risk under capitation?
A) The patient
B) The provider organization
C) The payer
Answer: B
${body}
`;

test('a normal letter reference in a trap is not warned about', () => {
  // The runners translate these to display order, so they are correct as-is.
  const { warnings } = parseMarkdown(drill('Rationale: Fixed PMPM.\nTrap: (C) is right for fee-for-service.'), 'econ.md');
  assert.deepEqual(warnings, []);
});

test('a letter reference past the end of the option list is warned about', () => {
  const { warnings } = parseMarkdown(drill('Rationale: Fixed PMPM.\nTrap: (E) is the reflex answer.'), 'econ.md');
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /trap refers to \(E\).*only 3 options/);
});

test('a trap naming only correct answers is warned about', () => {
  const { warnings } = parseMarkdown(drill('Rationale: Fixed PMPM.\nTrap: (B) looks too generous to be keyed.'), 'econ.md');
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /trap refers only to correct answers \(B\)/);
});

test('a trap naming a distractor alongside the answer is fine', () => {
  const { warnings } = parseMarkdown(drill('Rationale: Fixed PMPM.\nTrap: (B) is keyed but (C) tempts you.'), 'econ.md');
  assert.deepEqual(warnings, []);
});

test('the out-of-range check also covers rationales', () => {
  const { warnings } = parseMarkdown(drill('Rationale: Option F restates the stem.\nTrap: (C) is right for FFS.'), 'econ.md');
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /rationale refers to \(F\)/);
});
