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

There is no top-level `data/` or `drills/` any more. Current courses:
`nur4353-community-and-culture` (802 questions) and
`nur4351-research-consumer` (404).

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
- `src/export.js` — standalone HTML export + landing-page renderers (`renderExport`, `renderIndex`, `renderCourseIndex`, `embedJson`, `escapeHtml`).
- `scripts/import.js` — importer CLI. `scripts/export.js` — one shareable file. `scripts/publish.js` — builds `docs/` for Pages.
- `public/` — the app. `server.js` — static server + JSON API. `test/` — node:test suites.

## Common commands
```
node scripts/import.js --course nur4353         # that course's drills/ -> its questions.json
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

Both current banks are hand-authored. `bridge/generate_drills.py` emits
`Topic: "Ch5: ..."` items, which would inject parallel duplicate topics
alongside the authored conceptual ones and dilute the dashboard — use it only
for brand-new unauthored chapters. For an authored course the loop is
drill → `bridge/sync_misses.py` → factbank regenerate.

## Publishing (GitHub Pages)
- `npm run publish` rebuilds all of `docs/` from scratch (rm + rebuild) so renamed/deleted chapters can't leave stale pages. `--course <slug>` replaces only that folder and rebuilds the picker from what is on disk, so the other courses stay linked. `docs/` is committed on purpose — Pages serves it.
- Site layout mirrors `courses/`: `docs/index.html` is a static course picker, `docs/<slug>/index.html` is that course's session builder, `docs/<slug>/chN.html` are the chapter pages.
- Deploy is a GitHub Actions workflow (`.github/workflows/pages.yml`), **not** "deploy from a branch" — the branch backend stalled on this repo. Concurrency group `pages` with `cancel-in-progress: true` (a stuck "waiting" run once held the slot and blocked every later deploy).
- Live site: https://yungnrekless.github.io/DrillBankApp/ . After changing docs, verify the Actions run reached `success`. This environment can't fetch the github.io URL, so don't try to curl it to verify.
- Each course's landing page is a session builder: per-chapter checkboxes + a 25/50/75/100 count dropdown; builds a shuffled mix from the checked chapters. Scripts-blocked viewers fall back to a plain list of per-chapter links — never blank.

## Export safety invariants (don't regress)
- Exported HTML is fully self-contained: no external src/href (data: URIs and relative paths only). Tested by `externalRefs` in `test/export.test.js`. This is also what lets `docs/` be opened straight from disk with no server.
- Questions render as static HTML *before* any script runs, with answers marked; the script replaces that view on boot and a boot failure restores it (try/catch). Never let the page be blank with JS off.
- `embedJson` escapes `<`→`<` and U+2028/U+2029 so payloads can't break out of the `<script>` block. `qid` and source filenames are stripped from shipped payloads.
- `renderIndex`'s drill runner is a deliberate copy of `renderExport`'s, not an oversight — the per-chapter pages are already deployed, and keeping the landing page's changes out of that code path is worth more than removing the duplication. Don't "fix" it.

## Other things that look safe and are not
- **Never renumber or regenerate qids.** `mergeIntoBank` matches on a normalized stem so re-importing an unchanged drill file keeps the existing qid, and the qid is what attempt history and schedule state are keyed by. Rewriting ids silently orphans the log.
- **The scheduler constants are mirrored in `bridge/sync_misses.py`** (0.7 threshold, 20-attempt rolling window). Change one, change both, or the two ends disagree about what "weak" means.
- Server writes go through temp-file-and-rename and are serialized through one promise chain, so a crash mid-write cannot truncate the log.

## Working conventions
- Default branch is `main`; commit and push there and don't open a PR unless asked. (The course-scoping work was an explicit exception — the user asked for a branch.)
- `git push -u origin <branch>`; retry on network errors with backoff. Note that this repo is public, so `fetch`/`ls-remote` succeed anonymously while `push` needs real credentials — a hanging push is an auth prompt, not a network stall, and it has to be run from an interactive terminal.
- No dependencies. Not "few" — zero, including dev. Keep it that way.
- Run `npm test` before pushing; keep the export-safety tests green.
