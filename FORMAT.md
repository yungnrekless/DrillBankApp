# Fact-bank file format

The importer reads plain markdown or text. The goal is that you can keep
writing your drill files the way you already do and have them parse — the
parser is forgiving about bullets, bold markers, and punctuation.

## Minimal example

```
Topic: economics
Subtopic: payment mechanisms

Q: Under capitation, who carries utilization risk?
A) The patient
B) The provider organization
C) The payer
Answer: B
Rationale: Capitation pays a fixed PMPM amount regardless of services delivered.
Trap: (C) is right for fee-for-service, not capitation.
```

## Keys

| Key | Aliases | Required | Notes |
|---|---|---|---|
| `Topic:` | — | no | Sticky. Applies to every question below it until changed. Falls back to the filename. |
| `Subtopic:` | `Sub-topic:` | no | Sticky. Defaults to `general`. |
| `Q:` | `Question:`, `Q1:`, `### Q:` | **yes** | Starts a new question. Wraps onto following lines. |
| `A)` … `H)` | `A.`, `A:`, `- A)` | **yes** | At least two. Letters may be bolded. |
| `Answer:` | `Correct:`, `Key:` | **yes** | One letter, or several (`A, C, D` / `A and C`). |
| `Rationale:` | `Why:`, `Explanation:` | no | Wraps onto following lines. Defaults to a placeholder. |
| `Trap:` | `Distractor:`, `Pitfall:` | no | Shown in amber after the reveal. |
| `Type:` | — | no | `single` or `SATA`. Inferred from the answer count if omitted. |

## Rules the parser applies

- **More than one answer letter ⇒ SATA**, unless `Type:` says otherwise.
- **Prose between questions is ignored**, so chapter narrative in the same
  file is harmless.
- **Bold and bullet markers are stripped**, so `- **Answer:** B` parses.
- **Gaps in option letters** (A, B, D) are closed up and the answer indices
  remapped, with a warning.
- **A question missing options or an answer is dropped**, with a warning
  naming the stem — nothing fails silently.

## Identity and re-imports

Question ids are assigned once, in import order (`q_0001`, `q_0002`, …).
Re-running the importer matches on a whitespace- and punctuation-normalized
stem, so an already-imported question keeps its original id and its attempt
history. Editing a question's wording in the source file makes it a *new*
question, by design: questions are immutable once imported.

Check what a file will produce before writing anything:

```
node scripts/import.js path/to/file.md --dry-run
```
