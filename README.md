# Drill Bank

A spaced-repetition drill engine with a weak-area tracker. Single user, no
backend service, no dependencies — a small node process serves a vanilla-JS
page and reads/writes three JSON files on disk.

```
node scripts/import.js seed/     # fact-bank files -> data/questions.json
node server.js                   # http://localhost:4173
node --test 'test/*.test.js'     # 20 tests, no deps
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

## Layout

```
src/schema.js       shared types + validation
src/scheduler.js    pure scheduling logic (used by node and the browser)
src/importer.js     fact-bank parser + bank merge
scripts/import.js   importer CLI
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
