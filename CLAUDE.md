# CLAUDE.md — Drill Bank

Zero-dependency Node 18+ drill engine. Vanilla JS, no build step, no framework.
`npm test` (node:test) must stay green; there is nothing else guarding this.

## Layout is course-scoped — check the slug before touching paths

Every class lives under `courses/<slug>/` with `course.json`, `drills/`,
`sources/`, `data/`. There is no top-level `data/` or `drills/` any more.

The slug is shared with two sibling tools in the same parent directory:

- `factbank-tool/courses/<slug>/factbanks/Ch*_Fact_Bank.md` — the source material
- `study-guides/<slug>/ch*_study_guide.pdf` — the pre-drill study guides
- `bridge/*.py` — the glue, which derives the drillbank slug from the factbank
  course dir's basename (override with `--drill-course`)

Renaming a course directory here breaks that correspondence silently — the
bridge will report "no drillbank course data" rather than doing the wrong
thing, but nothing else will notice.

`src/courses.js` is the **only** module that knows where files live.
`src/schema.js`, `src/scheduler.js`, `src/importer.js` and `src/export.js` are
pure; `scripts/*` and `server.js` get their paths from `courses.js`. Keep it
that way — a new directory in the layout should be a one-file change.

## Things that look safe and are not

**Never renumber or regenerate qids.** `data/questions.json` is immutable once
imported. `mergeIntoBank` matches on a normalized stem so re-importing an
unchanged drill file keeps the existing qid, and the qid is what attempt
history and schedule state are keyed by. Rewriting ids silently orphans the
log.

**`data/attempts_log.json` is the only thing that cannot be regenerated.**
`schedule_state.json` is derived — `replay()` in `src/scheduler.js` rebuilds it
from the log, which is what makes changing the scheduling rules safe.

**The scheduler constants are mirrored in `bridge/sync_misses.py`** (0.7
threshold, 20-attempt rolling window). Change one, change both, or the two ends
will disagree about what "weak" means.

**`renderIndex`'s drill runner is a deliberate copy of `renderExport`'s**, not
an oversight. The per-chapter pages are already deployed; keeping the landing
page's changes out of that code path is worth more than removing the
duplication. Don't "fix" it.

**`docs/` is generated but committed** — GitHub Pages serves it from the repo.
Re-run `npm run publish` after importing. A full publish deletes and rebuilds
all of `docs/`; `--course <slug>` replaces only that folder and rebuilds the
picker from what is on disk. Editing anything in `docs/` by hand is pointless.

**The bank for `nur4353-community-and-culture` is hand-authored, not
generated.** `bridge/generate_drills.py` emits `Topic: "Ch5: ..."` items, which
would inject parallel duplicate topics alongside the authored conceptual ones
and dilute the dashboard. Use it only for brand-new unauthored chapters. For
this course the loop is drill → `sync_misses.py` → factbank regenerate.

## Conventions

- ES modules throughout (`"type": "module"`), `node:` prefixed builtins.
- No dependencies. Not "few" — zero, including dev. Keep it that way.
- The exported HTML must render without JavaScript (preview panes and mail
  clients block inline scripts). Questions are written into the document as
  static HTML and the script replaces them on boot; a runtime failure restores
  that view rather than wiping the page.
- Server writes go through temp-file-and-rename and are serialized through one
  promise chain, so a crash mid-write cannot truncate the log.
