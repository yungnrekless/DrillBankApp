# Drill Bank

A spaced-repetition drill engine with a weak-area tracker. Single user, no
backend service, no dependencies — a small node process serves a vanilla-JS
page and reads/writes three JSON files on disk.

```
node scripts/import.js --course nur4353    # that course's drills/ -> its questions.json
node server.js                             # http://localhost:4173
node scripts/export.js --course nur4353 ch25   # shareable HTML -> dist/<course>/ch25.html
npm test                                   # 39 tests, no deps
```

See [FORMAT.md](FORMAT.md) for the drill-file format — it is close to how drill
files are usually already written, and `--dry-run` shows what will be picked up
before anything is written.

## Courses

Everything is filed by course, so one checkout carries several classes:

```
courses/<slug>/course.json   metadata (same field names as factbank-tool's book.json)
courses/<slug>/drills/       the authored drill files
courses/<slug>/sources/      the fact banks the drills were written from
courses/<slug>/data/         questions.json, attempts_log.json, schedule_state.json
```

The slug is the same one `factbank-tool/courses/<slug>/` and `study-guides/<slug>/`
use, which is what lets the pipeline between the three tools be a matter of
passing the slug along.

Attempt history and schedule state are **per course** on purpose: two classes
share no questions, so a topic's rolling accuracy is only meaningful inside one
of them, and a mixed log would make both dashboards lie.

Every CLI takes `--course`, which accepts a full slug or any unambiguous prefix
(`--course nur4353`). It can be omitted entirely when there is only one course.
Adding a class means creating `courses/<new-slug>/drills/`, writing a
`course.json`, and importing — no code changes.

Starting a new course:

```
mkdir -p courses/nur4351-research-consumer/drills
# write course.json, drop drill files in drills/
node scripts/import.js --course nur4351
```

## Data layer

Three files per course, three responsibilities:

| File | Shape | Lifecycle |
|---|---|---|
| `courses/<slug>/data/questions.json` | `{qid: Question}` | Immutable once imported. Re-imports keep existing qids. |
| `courses/<slug>/data/attempts_log.json` | `Attempt[]` | Append-only. The full history, and the only thing that cannot be regenerated. |
| `courses/<slug>/data/schedule_state.json` | `{qid: ScheduleEntry}` | Derived. Deletable — `replay()` in `src/scheduler.js` rebuilds it from the log. |

The schedule being derived is the important property: if the scheduling rules
change, the whole history can be replayed under the new rules without losing
anything.

## Scheduler

Per question (`src/scheduler.js`):

- **Correct** → up the ladder: 1 → 3 → 7 → 14 → 30 days, stretched or
  compressed by an SM-2-style ease factor (clamped to 1.3–2.8).
- **Wrong** → interval resets to 1 day and the question is flagged
  `struggling`. Two clean reps clear the flag.

Per topic, layered on top: if a topic's rolling accuracy over its last 20
attempts is under **70%**, all of its questions are pulled forward regardless
of their own due dates. Queue priority runs:

1. unseen questions in weak topics
2. due questions in weak topics
3. due questions everywhere else
4. not-yet-due questions in weak topics ← the pull-forward rule
5. unseen questions anywhere

If nothing at all is due, the session falls back to the least-recently
scheduled material rather than showing an empty queue.

## Drill runner

Immediate reveal, rationale, trap explanation, live score, option
reshuffling, SATA scored all-or-nothing. Enter submits, then advances.

With more than one course a picker appears in the top bar. The choice is
remembered and reflected in the URL (`?course=<slug>`), so a bookmark opens the
class you meant. Switching mid-session abandons the queue — answers already
given are on disk under the course they were answered in, but a queue built
from one bank means nothing against another.

Each attempt is written to the log the moment it is answered, so quitting
halfway still records the work. Because reshuffling breaks rationales that
name options by letter ("(C) is the trap"), the reveal always restates the
key using the letters as displayed on screen.

## Dashboard

Topic-by-topic rolling accuracy, sorted weakest first, with a sparkline over
the last 5 sessions and a dashed 70% reference line. Anything under 70% is
red, matching the convention in the drill files. Clicking a topic opens
"why is this red" — every attempted question in that topic, worst accuracy
first, with its struggling flag and next due date.

Topics with no attempts show as `untested`, not 0% — those are different
things and collapsing them would make an unstarted topic look like a crisis.

## Export (sharing a chapter)

`scripts/export.js` writes one self-contained HTML file — styles, script and
questions all inlined. No server, no data files, no network requests, so it
can be emailed or dropped in a shared folder and opened straight from disk.

```
node scripts/export.js --course nur4353 --list            # what's in the bank
node scripts/export.js --course nur4353 ch25              # a chapter, by source file
node scripts/export.js --course nur4353 ch25 --title "Ch. 25 Drill"
node scripts/export.js --course nur4353 --topic poverty --out dist/econ.html
node scripts/export.js --course nur4353 --all --out dist/everything.html
```

Output lands in `dist/<course>/` by default, so exporting `ch5` from two
classes does not have one silently overwrite the other.

The exported page is a different program from the app on purpose: no
scheduler, no attempt log, no dashboard, because someone opening it once
wants a drill, not a study system. It keeps reveal-with-rationale, the trap
callout, all-or-nothing SATA scoring, reshuffled answer order, and a
weakest-first topic breakdown at the end with the same 70% red convention.

Question ids and source filenames are stripped from the payload — recipients
get the questions, not a map of your bank.

**The file is never blank.** The questions are written into the document as
static HTML with the answers marked, and the script replaces that with the
interactive drill on boot. Preview panes, mail clients and chat attachment
viewers routinely block inline scripts, and a page that builds its content in
JS shows up empty in all of them with no indication why. In those viewers the
recipient gets a readable, printable answer key instead, plus a line telling
them to save the file and open it in a browser to drill it properly. A
runtime failure restores the same view rather than wiping the page.

## Publishing a link (GitHub Pages)

`scripts/publish.js` builds `docs/`, which GitHub Pages serves as a URL you can
just send someone. No download, no "open in browser" step, works on a phone.
The site mirrors the `courses/` tree:

```
docs/index.html            course picker
docs/<slug>/index.html     that course's chapter picker / session builder
docs/<slug>/ch5.html       one standalone page per chapter
```

Each course's landing page is a **session builder**: check any set of chapters,
pick a question count (25/50/75/100), and drill a shuffled mix pulled only from
those chapters. Where scripts are blocked it falls back to a plain list of links
to the per-chapter pages, so it is never blank and every chapter stays reachable.
The course picker above it is static HTML with no script at all.

```
npm run publish -- --title "Nursing Drills"          # every course
npm run publish -- --course nur4353                  # just one, others left alone
git add docs && git commit -m "Publish drills" && git push
```

A full publish rebuilds `docs/` from nothing, so a course removed from
`courses/` cannot leave its pages live. A single-course publish replaces only
that folder and rebuilds the picker from what is on disk, so the other courses
stay linked.

Deployment runs through `.github/workflows/pages.yml`, **not** the
deploy-from-a-branch setting — that backend stalled on this repo. Pushing to
`main` is what triggers it; check the Actions run reached `success` afterwards.
The live site is https://yungnrekless.github.io/DrillBankApp/.

`docs/` is committed on purpose — the workflow uploads the built files, so they
have to be in the repo. Re-run `npm run publish` after importing new questions,
and it rebuilds the folder from scratch so a renamed or deleted chapter can't
leave a stale page live.

Note that a Pages site is **public**. Anyone with the URL can read the
questions, and search engines can index it. The landing page carries a line
noting it is a student-made study aid not affiliated with any publisher. If
that is not what you want, `scripts/export.js` gives the same drill as a file
you hand to specific people instead.

## Layout

```
src/courses.js      course discovery + slug resolution (the only path knowledge)
src/schema.js       shared types + validation
src/scheduler.js    pure scheduling logic (used by node and the browser)
src/importer.js     drill-file parser + bank merge
src/export.js       standalone HTML export + landing page renderers
scripts/import.js   importer CLI
scripts/export.js   export CLI (one file, for sending directly)
scripts/publish.js  builds docs/ for GitHub Pages
courses/<slug>/     one class: course.json, drills/, sources/, data/
docs/               the published site — generated, committed for Pages
server.js           static server + JSON API
public/             the app (index.html, app.js, dashboard.js, api.js, styles.css)
seed/               sample drill files, for trying the importer out
test/               node:test suites for the scheduler and importer
```

`src/courses.js` is the only module that knows where a course's files live —
`src/` is otherwise pure logic and `scripts/`, `server.js` get their paths from
it. Adding a directory to the layout means changing one file.

## Notes

- `courses/<slug>/data/questions.json` is committed so the app runs out of the
  box. `attempts_log.json` and `schedule_state.json` start empty and are your
  personal state.
- Writes go through a temp-file-and-rename and are serialized in the server,
  so a crash mid-write cannot truncate the log.
- Node 18+.
