# Drill Bank — project notes

Spaced-repetition drill engine + weak-area tracker for nursing exam prep.
Single user, vanilla JS, no backend service, no dependencies. Node 18+,
ES modules (`"type": "module"`). `npm test` must stay green; there is nothing
else guarding this.

## Layout is course-scoped — check the slug before touching paths

Each class lives under `courses/<slug>/`:

- `courses/<slug>/course.json` — metadata (same field names as factbank-tool's `book.json`)
- `courses/<slug>/drills/chN.md` — authored drill questions
- `courses/<slug>/sources/ChN_Fact_Bank.md` — source textbook fact banks (raw material, NOT questions)
- `courses/<slug>/data/` — the three JSON files below

There is no top-level `data/` or `drills/` any more. Current courses, as of
2026-09-15:

| Slug | Course | Ch | Questions | Topics | Attempts |
|---|---|---|---|---|---|
| `nur3420-3421-pharm` | NUR 3420/1 Pharmacology I & II | 20 | 832 | 170 | 34 |
| `nur4353-community-and-culture` | NUR 4353 Community/Public Health | 21 | 802 | 99 | 0 |
| `nur4351-research-consumer` | NUR 4351 Consumer of Research | 14 | 404 | 92 | none |
| `nur4226-4339-childrearing` | NUR 4226/4339 Childrearing Family | 31 | 1394 | 315 | none |
| `nur4225-4334-childbearing` | NUR 4225/4334 Childbearing Family | 28 | 1363 | 301 | 8 |

**The Attempts column gates one real operation.** Where it is `none` or `0`,
`questions.json` is still derivable from `drills/*.md` and a delete-and-reimport
is safe. Where attempts exist, qids are load-bearing and history is keyed to
them, so import additively and never regenerate — see "Never renumber or
regenerate qids" below. That column only ever grows, so check it rather than
assuming.

Childbearing is partial: its chapter count is what has been authored so far,
not what the blueprint covers. Childrearing is complete at 31 chapters —
chapters 7, 8 and 9 were omitted on purpose and will not be added.

The slug is shared with two sibling tools in the same parent directory —
`factbank-tool/courses/<slug>/factbanks/` and `study-guides/<slug>/` — and
`bridge/*.py` derives the drillbank slug from the factbank course dir's
basename (`--drill-course` overrides). Renaming a course directory here breaks
that correspondence; the bridge reports "no drillbank course data" rather than
doing the wrong thing, but nothing else notices.

`src/courses.js` is the **only** module that knows where files live.
`src/schema.js`, `src/scheduler.js`, `src/importer.js` and `src/export.js` are
pure; `scripts/*` and `server.js` get their paths from it. Keep it that way — a
new directory in the layout should be a one-file change.

## Data layer — three JSON files per course, three roles
- `courses/<slug>/data/questions.json` — `{qid: Question}`. Immutable once imported; re-imports keep existing qids.
- `courses/<slug>/data/attempts_log.json` — `Attempt[]`. Append-only, the only thing that can't be regenerated.
- `courses/<slug>/data/schedule_state.json` — `{qid: ScheduleEntry}`. Derived; `replay()` in `src/scheduler.js` rebuilds it from the log.

Attempt history and schedule state are per course on purpose: two classes share
no questions, so a topic's rolling accuracy is only meaningful inside one of
them, and a merged log would make both dashboards lie.

## Layout
- `src/courses.js` — course discovery + slug resolution. The only path-aware module.
- `src/scheduler.js` — SM-2-ish scheduling (pure; runs in node and browser). Ladder 1/3/7/14/30, ease 1.3–2.8, topics under 70% rolling accuracy pulled forward, round-robin topic interleaving within priority buckets.
- `src/importer.js` — drill-file parser + bank merge.
- `src/tracker.js` — stem-key identity shared by the publisher and the import CLI (`stemKey`, `keyIndex`, `mergeAttempts`). Pure, and node-side only: the pages read the precomputed `k` rather than hashing anything.
- `src/export.js` — standalone HTML export + landing-page renderers (`renderExport`, `renderIndex`, `renderCourseIndex`, `embedJson`, `escapeHtml`).
- `scripts/import.js` — importer CLI. `scripts/export.js` — one shareable file. `scripts/publish.js` — builds `docs/` for Pages. `scripts/import-attempts.js` — pulls drilled answers off the published pages.
- `public/` — the app. `server.js` — static server + JSON API. `test/` — node:test suites.

## Common commands
```
node scripts/import.js --course nur4353         # that course's drills/ -> its questions.json
node scripts/import-attempts.js results.json    # drilled answers -> that course's attempts_log.json
node scripts/import-attempts.js --stdin         # paste the export, then Ctrl-Z / Ctrl-D
node server.js                                  # http://localhost:4173
npm test                                        # node --test test/*.test.js (~39 tests, no deps)
npm run publish -- --title "Nursing Drills"     # rebuild all of docs/ for Pages
npm run publish -- --course nur4353             # rebuild one course, leave the others
```

`--course` takes a full slug or any unambiguous prefix, and can be omitted when
there is only one course. Ambiguity is an error rather than a guess: picking the
wrong course writes attempt history into the wrong class's log.

## API and app
`/api/courses` lists them; data routes are `/api/<slug>/{questions,attempts,schedule}`.
The slug is matched against the real course list, so a path trying to climb out
of `courses/` resolves to nothing. The app's top-bar course picker is remembered
in localStorage and reflected in `?course=<slug>`; it hides itself when there is
only one course. Switching mid-session abandons the queue — answers already
given are safe on disk, but a queue built from one bank means nothing against
another.

## Drill / fact-bank format (see FORMAT.md)
Sticky `Topic:` / `Subtopic:` lines, then `Q:`, lettered options `A)` `B)`…,
`Answer:` (multi-letter answer = SATA, auto-inferred), `Rationale:`, optional `Trap:`.

## Authoring questions
Fact banks in `courses/<slug>/sources/` are source material, not pre-written
questions — author drill questions from them. Each chapter's question set is
self-contained (no cross-chapter dedup; the same fact may appear in two
chapters' drills on purpose).

Topics must be **conceptual and lowercase** (`payment mechanisms`, `sampling
methods`), never chapter-numbered. The dashboard tracks rolling accuracy per
topic, so a red topic has to name something you can go restudy.

All five course banks are hand-authored. `bridge/generate_drills.py` emits
`Topic: "Ch5: ..."` items, which would inject parallel duplicate topics
alongside the authored conceptual ones and dilute the dashboard — use it only
for brand-new unauthored chapters. For an authored course the loop is
drill → `bridge/sync_misses.py` → factbank regenerate.

## Publishing (GitHub Pages)
- `npm run publish` rebuilds all of `docs/` from scratch (rm + rebuild) so renamed/deleted chapters can't leave stale pages. `--course <slug>` replaces only that folder and rebuilds the picker from what is on disk, so the other courses stay linked. `docs/` is committed on purpose — Pages serves it.
- Site layout mirrors `courses/`: `docs/index.html` is a static course picker, `docs/<slug>/index.html` is that course's session builder, `docs/<slug>/chN.html` are the chapter pages.
- Deploy is a GitHub Actions workflow (`.github/workflows/pages.yml`), **not** "deploy from a branch" — the branch backend stalled on this repo. Concurrency group `pages` with `cancel-in-progress: true` (a stuck "waiting" run once held the slot and blocked every later deploy).
- **The `github-pages` environment has a custom deployment-branch policy.** Only branches on that list can deploy, and a run from any other branch is rejected in ~4 seconds with "Branch X is not allowed to deploy to github-pages due to environment protection rules" — before it does any work, so the logs are empty and it looks like a workflow bug. It is not. This silently froze the live site from 2026-08-06 to 2026-08-09 because the policy still named `claude/drill-engine-weak-area-73veus` after the rename to `main`. If the default branch is ever renamed again, update the policy too:
  `gh api repos/<owner>/<repo>/environments/github-pages/deployment-branch-policies`
- Live site: https://yungnrekless.github.io/DrillBankApp/ . After changing docs, verify the Actions run reached `success` — and check the deployment itself (`gh api repos/<owner>/<repo>/deployments?environment=github-pages` then its `/statuses`), because the `status` field on the `/pages` endpoint stays `errored` from past failures and does not clear on a later success.
- The github.io URL **can** be loaded through the browser pane (`preview_start` with the URL), which is the only end-to-end proof the deploy actually served. `curl` from the shell is what doesn't work.
- Each course's landing page is a session builder: per-chapter checkboxes + a 25/50/75/100 count dropdown; builds a shuffled mix from the checked chapters. Scripts-blocked viewers fall back to a plain list of per-chapter links — never blank.

## Export safety invariants (don't regress)
- Exported HTML is fully self-contained: no external src/href (data: URIs and relative paths only). Tested by `externalRefs` in `test/export.test.js`. This is also what lets `docs/` be opened straight from disk with no server.
- Questions render as static HTML *before* any script runs, with answers marked; the script replaces that view on boot and a boot failure restores it (try/catch). Never let the page be blank with JS off.
- `embedJson` escapes `<`→`<` and U+2028/U+2029 so payloads can't break out of the `<script>` block. `qid` and source filenames are stripped from shipped payloads.
- `renderIndex`'s drill runner is a deliberate copy of `renderExport`'s, not an oversight — the per-chapter pages are already deployed, and keeping the landing page's changes out of that code path is worth more than removing the duplication. Don't "fix" it.

## Attempts come back by hand — the published pages cannot phone home

`docs/**` is standalone HTML on Pages with no backend to post to, so for a
long time drilling on a phone left no trace at all: every authored question at
the time — 1206 of them, across the two courses that then existed — sat
against an empty `attempts_log.json`, which meant the dashboard, the scheduler
and `bridge/sync_misses.py` had never had data to work on. The LT button in the
page corner buffers graded answers in `localStorage`; `scripts/import-attempts.js`
is the other end. studybank surfaces the same script as **Import drill results**.

- **Identity is the normalized stem key, not the qid.** `embedJson` strips qids
  from shipped payloads, so the page cannot name the question it just graded.
  `stemKey()` in `src/tracker.js` is what both ends agree on, and it is why an
  unrelated edit elsewhere in the bank does not orphan a pending buffer.
- **The key is computed at build time, not in the browser** — unlike
  `relabelSource`, no copy of the hashing function is shipped. `src/export.js`
  and `scripts/publish.js` both import `stemKey` and stamp each shipped question
  with `k:` (plus the course slug); the page only ever reads `q.k` and skips
  recording when it is absent. That is stronger than inlining, because there is
  no second copy that can drift — but it does mean **a page built before this
  change records nothing**, silently, and the only fix is a republish.
- **`keyIndex()` refuses rather than guesses.** Two questions normalizing to the
  same key abort the import with both qids named, because filing an answer
  against the wrong question corrupts that topic's accuracy and its schedule.
- **Import is idempotent on qid + timestamp + session**, so the browser buffer
  is deliberately *not* cleared after an export. Import, keep drilling, import
  again — the overlap does not double-count. Don't add an auto-clear; the buffer
  is the only copy until it lands here.
- **The export names its own course**, and a `--course` that resolves to a
  different slug is an error, not a preference — one class's answers in
  another's log makes both dashboards lie.
- **Unmatched records are normal after a bank edit.** They mean the stem changed
  since those pages were built; the fix is republish, not a data repair.
- `attempts_log.json` is the one file that cannot be regenerated, so the write
  is temp-file-and-rename. `schedule_state.json` is derived and gets rebuilt
  wholesale by `replay()` rather than patched.
- **A republish is required before any of this reaches the live site** — same
  rule as the relabel below. `grep -lr "LT_STORE" docs/` should hit every page
  except `docs/index.html`, which is the course picker and has no runner.

### Only course pages track — `scripts/export.js` deliberately does not

`renderExport` gates the tracker on its `course` option (`ltCss`/`ltJs` in
`src/export.js`): `scripts/publish.js` passes `course: slug`, `scripts/export.js`
passes nothing and gets a no-op `ltRecord(){}` stub. That is correct — storage is
keyed `drillbank.lt.<course>` and `import-attempts.js` refuses a blob that does
not name its course, so a one-off shareable file has nothing to file answers
against and would only produce un-importable data. **A file exported by
`scripts/export.js` can never be used to test the tracker.**

Which is what `public/lt-check.html` is for: a copy of a *published* page, put in
`public/` because `server.js` serves only that directory (`docs/` is not served
at all) and `localStorage` needs a real `http://` origin — browsers treat
`file://` as opaque for storage. It makes the whole loop testable at
`http://localhost:4173/lt-check.html` without a publish-and-deploy cycle per
iteration. It is gitignored: it can only be refreshed *after* a publish, so it is
a snapshot that silently goes stale into an old runner. Refresh it with a copy,
not an export:

```
cp docs/nur4351-research-consumer/ch5.html public/lt-check.html
```

## Rationale/trap text refers to options by letter — the runners must translate
**1874 of the 2770 banked questions** have a `Trap:` or `Rationale:` that names
options by letter — "(B) and (E) look like rigor". Counted 2026-09-03; the
proportion is now the majority of the corpus, not an edge case. Both forms are
live and both must keep working: 1857 use the parenthesized `(B)` form, while
`nur4353-community-and-culture` uses **only** the `Option A` form (17
questions, zero parenthesized). Pharm and childrearing are at 100% and
childbearing at 98% — so a regression here breaks nearly every question in them.
Those letters are the **stored** option order, and all three
runners reshuffle options before printing them, so a raw letter points at
whatever landed in that slot, frequently the correct answer.

`src/relabel.js` translates the letters through the display order at reveal
time. Data is never rewritten: the letters are also in the hand-authored
`drills/*.md`, and a re-import will not overwrite an existing question
(`mergeIntoBank` matches on stem), so a bank-only edit would just go stale.

- Apply it wherever feedback is printed against a shuffled list — currently
  `public/app.js` (imports it) and both runners in `src/export.js` (inline it
  via `relabelSource`, which is `relabelLetters.toString()`, so the shipped
  copy cannot drift from the tested one). Keep the function self-contained;
  closing over anything module-level would break the exported pages silently.
- The static answer key in `staticFallback` prints options in stored order, so
  its letters already agree with the prose. Do **not** relabel there.
- A letter with no on-screen slot is left as written rather than remapped.
- The importer warns about the two cases translation cannot rescue: a letter
  past the end of the option list, and a trap whose references are *all*
  correct answers (`checkOptionRefs` in `src/importer.js`). It warns rather
  than rejects — the whole current corpus trips it exactly once, on a
  deliberate "students wrongly drop this correct answer" trap in
  `nur4351-research-consumer/ch8.md`. A plain letter reference is **not**
  warned about; that is a supported thing to write.
- **Republish after touching either runner.** `docs/**` has the runner baked in
  as text; the fix does not reach the live site until `npm run publish` and a
  push. `grep -lr "function relabelLetters" docs/` should hit every page except
  `docs/index.html` (the course picker, which has no runner).

## Other things that look safe and are not
- **The export runners live inside template literals.** A stray backtick in
  code or even a comment there ends the string — `src/export.js` fails to parse
  and every export test dies at import with a confusing `SyntaxError` pointing
  at ordinary-looking JS. Use `"quotes"` in those comments.
- **Never renumber or regenerate qids.** `mergeIntoBank` matches on a normalized stem so re-importing an unchanged drill file keeps the existing qid, and the qid is what attempt history and schedule state are keyed by. Rewriting ids silently orphans the log.
- **The scheduler constants are mirrored in `bridge/sync_misses.py`** (0.7 threshold, 20-attempt rolling window). Change one, change both, or the two ends disagree about what "weak" means.
- Server writes go through temp-file-and-rename and are serialized through one promise chain, so a crash mid-write cannot truncate the log.

## Working conventions
- Default branch is `main`; commit and push there and don't open a PR unless asked. (The course-scoping work was an explicit exception — the user asked for a branch.)
- `git push -u origin <branch>`; retry on network errors with backoff. Note that this repo is public, so `fetch`/`ls-remote` succeed anonymously while `push` needs real credentials — a hanging push is an auth prompt, not a network stall, and it has to be run from an interactive terminal.
- No dependencies. Not "few" — zero, including dev. Keep it that way.
- Run `npm test` before pushing; keep the export-safety tests green.
