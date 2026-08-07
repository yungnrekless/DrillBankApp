# Drill Bank — project notes

Spaced-repetition drill engine + weak-area tracker for nursing exam prep
(NUR 4353 Community Health). Single user, vanilla JS, no backend service, no
dependencies. Node 18+, ES modules (`"type": "module"`).

## Data layer — three JSON files, three roles
- `data/questions.json` — `{qid: Question}`. Immutable once imported; re-imports keep existing qids.
- `data/attempts_log.json` — `Attempt[]`. Append-only, the only thing that can't be regenerated.
- `data/schedule_state.json` — `{qid: ScheduleEntry}`. Derived; `replay()` in `src/scheduler.js` rebuilds it from the log.

## Layout
- `src/scheduler.js` — SM-2-ish scheduling (pure; runs in node and browser). Ladder 1/3/7/14/30, ease 1.3–2.8, topics under 70% rolling accuracy pulled forward, round-robin topic interleaving within priority buckets.
- `src/importer.js` — drill-file parser + bank merge.
- `src/export.js` — standalone HTML export + landing-page renderers (`renderExport`, `renderIndex`, `embedJson`, `escapeHtml`).
- `scripts/import.js` — importer CLI. `scripts/export.js` — one shareable file. `scripts/publish.js` — builds `docs/` for Pages.
- `public/` — the app. `server.js` — static server + JSON API. `test/` — node:test suites.
- `drills/chN.md` — authored drill questions. `sources/ChN_Fact_Bank.md` — source textbook fact banks (raw material, NOT questions).

## Common commands
```
node scripts/import.js drills/    # drill files -> data/questions.json
node server.js                    # http://localhost:4173
npm test                          # node --test test/*.test.js (~39 tests, no deps)
npm run publish -- --title "NUR 4353 Drills"   # rebuild docs/ for Pages
```

## Drill / fact-bank format (see FORMAT.md)
Sticky `Topic:` / `Subtopic:` lines, then `Q:`, lettered options `A)` `B)`…,
`Answer:` (multi-letter answer = SATA, auto-inferred), `Rationale:`, optional `Trap:`.

## Authoring questions
Fact banks in `sources/` are source material, not pre-written questions —
author drill questions from them. Each chapter's question set is
self-contained (no cross-chapter dedup; the same fact may appear in two
chapters' drills on purpose).

## Publishing (GitHub Pages)
- `npm run publish` rebuilds `docs/` from scratch (rm + rebuild) so renamed/deleted chapters can't leave stale pages. `docs/` is committed on purpose — Pages serves it.
- Deploy is a GitHub Actions workflow (`.github/workflows/pages.yml`), not "deploy from a branch" — the branch backend stalled on this repo. Concurrency group `pages` with `cancel-in-progress: true` (a stuck "waiting" run once held the slot and blocked every later deploy).
- Live site: https://yungnrekless.github.io/DrillBankApp/ . After changing docs, verify the Actions run reached `success`. This environment can't fetch the github.io URL, so don't try to curl it to verify.
- The landing page is a session builder: per-chapter checkboxes + a 25/50/75/100 count dropdown; builds a shuffled mix from the checked chapters. Scripts-blocked viewers fall back to a plain list of per-chapter links — never blank.

## Export safety invariants (don't regress)
- Exported HTML is fully self-contained: no external src/href (data: URIs and relative paths only). Tested by `externalRefs` in `test/export.test.js`.
- Questions render as static HTML *before* any script runs, with answers marked; the script replaces that view on boot and a boot failure restores it (try/catch). Never let the page be blank with JS off.
- `embedJson` escapes `<`→`<` and U+2028/U+2029 so payloads can't break out of the `<script>` block. `qid` and source filenames are stripped from shipped payloads.

## Working conventions
- Branch: `claude/drill-engine-weak-area-73veus`. Commit + push there; don't open a PR unless asked.
- `git push -u origin <branch>`; retry on network errors with backoff.
- Run `npm test` before pushing; keep the export-safety tests green.
