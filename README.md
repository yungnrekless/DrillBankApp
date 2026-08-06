# Drill Bank

A spaced-repetition drill engine with a weak-area tracker. Single user, no
backend service, no dependencies — a small node process serves a vanilla-JS
page and reads/writes three JSON files on disk.

```
node scripts/import.js drills/   # drill files -> data/questions.json
node server.js                   # http://localhost:4173
node scripts/export.js ch25      # one shareable HTML file -> dist/ch25.html
npm test                         # 31 tests, no deps
```

Replace `seed/` with your own drill files and re-run the importer. See
[FORMAT.md](FORMAT.md) for the file format — it is close to how drill files
are usually already written, and `--dry-run` shows what will be picked up
before anything is written.

## Data layer

Three files, three responsibilities:

| File | Shape | Lifecycle |
|---|---|---|
| `data/questions.json` | `{qid: Question}` | Immutable once imported. Re-imports keep existing qids. |
| `data/attempts_log.json` | `Attempt[]` | Append-only. The full history, and the only thing that cannot be regenerated. |
| `data/schedule_state.json` | `{qid: ScheduleEntry}` | Derived. Deletable — `replay()` in `src/scheduler.js` rebuilds it from the log. |

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
node scripts/export.js --list                       # what's in the bank
node scripts/export.js ch25                         # a chapter, by source file
node scripts/export.js ch25 --title "Ch. 25 Drill"
node scripts/export.js --topic poverty --topic homelessness --out dist/econ.html
node scripts/export.js --all --out dist/everything.html
```

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

`scripts/publish.js` builds `docs/` — a landing page plus one standalone page
per chapter — which GitHub Pages serves as a URL you can just send someone.
No download, no "open in browser" step, works on a phone.

The landing page is a **session builder**: check any set of chapters, pick a
question count (25/50/75/100), and drill a shuffled mix pulled only from those
chapters. Where scripts are blocked it falls back to a plain list of links to
the per-chapter pages, so it is never blank and every chapter stays reachable.

```
npm run publish -- --title "NUR 4353 Drills"
git add docs && git commit -m "Publish drills" && git push
```

One-time setup, in the repo on github.com:
**Settings → Pages → Source: Deploy from a branch → Branch: `<this branch>` / `docs` → Save.**
The site appears at `https://<user>.github.io/<repo>/` a minute or so later.

`docs/` is committed on purpose — Pages serves the built files, so they have
to be in the repo. Re-run `npm run publish` after importing new questions,
and it rebuilds the folder from scratch so a renamed or deleted chapter can't
leave a stale page live.

Note that a Pages site is **public**. Anyone with the URL can read the
questions, and search engines can index it. The landing page carries a line
noting it is a student-made study aid not affiliated with any publisher. If
that is not what you want, `scripts/export.js` gives the same drill as a file
you hand to specific people instead.

## Layout

```
src/schema.js       shared types + validation
src/scheduler.js    pure scheduling logic (used by node and the browser)
src/importer.js     drill-file parser + bank merge
src/export.js       standalone HTML export + landing page renderers
scripts/import.js   importer CLI
scripts/export.js   export CLI (one file, for sending directly)
scripts/publish.js  builds docs/ for GitHub Pages
docs/               the published site — generated, committed for Pages
server.js           static server + JSON API
public/             the app (index.html, app.js, dashboard.js, api.js, styles.css)
seed/               sample drill files — replace with your own
test/               node:test suites for the scheduler and importer
```

## Notes

- `data/questions.json` is committed so the app runs out of the box from the
  sample seed files. `attempts_log.json` and `schedule_state.json` start
  empty and are your personal state.
- Writes go through a temp-file-and-rename and are serialized in the server,
  so a crash mid-write cannot truncate the log.
- Node 18+.
