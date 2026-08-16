/**
 * Long-term tracking: carrying drill results from the published pages back
 * into a course's attempt log.
 *
 * The published pages are static files on GitHub Pages with no backend, and
 * the repo is public, so there is nowhere to POST to and no secret that could
 * safely be embedded. Results are therefore buffered in the browser's
 * localStorage and exported on demand, then merged in by
 * `scripts/import-attempts.js`.
 *
 * Identity is the problem this module exists to solve. Attempts are keyed by
 * qid, but `renderExport` deliberately strips qid from shipped payloads, and
 * that invariant is worth keeping. Instead each item carries `k`, a hash of
 * its normalized stem — derived from the stem already printed on the page, so
 * it discloses nothing the payload did not already contain — and the importer
 * maps `k` back to a qid the same way `mergeIntoBank` re-links a re-imported
 * question.
 */

/**
 * Stable short key for a question, derived from its stem.
 *
 * The normalization matches `normalizeStem` in src/importer.js on purpose: a
 * question whose stem is reworded only in punctuation or spacing keeps its
 * identity, exactly as it does on re-import. Keep the two in step — the test
 * `stemKey normalizes the same way the importer does` pins it.
 *
 * Two independent FNV-1a passes are concatenated because one 32-bit hash over
 * a bank this size is closer to a birthday collision than is comfortable, and
 * a collision would silently file attempts against the wrong question.
 *
 * Runs at build time and in the import CLI, never in the browser: `src/export.js`
 * and `scripts/publish.js` stamp each shipped question with its key (`k:`) and
 * the pages just read that. Nothing ships this function's text, unlike
 * `relabelSource`, so there is no second copy to keep in step — but changing the
 * hash invalidates every already-published page, which goes on recording against
 * keys the bank no longer knows. Republish after touching it.
 *
 * @param {string} stem
 * @returns {string} lowercase base36 key
 */
export function stemKey(stem) {
  const norm = String(stem).toLowerCase().replace(/\s+/g, ' ').replace(/[^\w\s]/g, '').trim();
  let a = 0x811c9dc5;
  let b = 0x01000193;
  for (let i = 0; i < norm.length; i++) {
    const c = norm.charCodeAt(i);
    a = Math.imul(a ^ c, 0x01000193) >>> 0;
    b = Math.imul(b ^ c, 0x85ebca6b) >>> 0;
  }
  return a.toString(36) + b.toString(36);
}

/**
 * Map every question in a bank to its stem key.
 *
 * @param {Record<string, object>} bank
 * @returns {{byKey: Map<string, string>, collisions: string[][]}} key -> qid,
 *   plus any qid groups that hashed alike (which would misfile attempts)
 */
export function keyIndex(bank) {
  const byKey = new Map();
  const clashes = new Map();
  for (const [qid, q] of Object.entries(bank)) {
    const k = stemKey(q.stem);
    if (byKey.has(k)) {
      const group = clashes.get(k) || [byKey.get(k)];
      group.push(qid);
      clashes.set(k, group);
    } else {
      byKey.set(k, qid);
    }
  }
  return { byKey, collisions: [...clashes.values()] };
}

/**
 * Merge buffered attempts into an existing log.
 *
 * The log is append-only and is the one file in the project that cannot be
 * regenerated, so this has to be safe to run twice on the same export: an
 * attempt is identified by qid + timestamp + session, and a repeat is skipped
 * rather than appended. Buffered attempts carry `k`; unresolvable keys are
 * reported instead of dropped silently, since that means the bank moved on
 * from what the published page was built with.
 *
 * @param {object[]} existing current attempts_log.json contents
 * @param {object[]} incoming buffered records ({k, correct, timestamp, ...})
 * @param {Map<string, string>} byKey stem key -> qid, from keyIndex()
 * @returns {{log: object[], added: number, duplicates: number, unmatched: object[]}}
 */
export function mergeAttempts(existing, incoming, byKey) {
  const log = [...existing];
  const seen = new Set(log.map((a) => `${a.qid}|${a.timestamp}|${a.session_id || ''}`));
  const unmatched = [];
  let added = 0;
  let duplicates = 0;

  for (const rec of incoming) {
    const qid = byKey.get(rec.k);
    if (!qid) { unmatched.push(rec); continue; }

    const attempt = {
      qid,
      timestamp: rec.timestamp,
      correct: !!rec.correct,
      session_id: rec.session_id || 'published',
    };
    if (Array.isArray(rec.selected)) attempt.selected = rec.selected;

    const id = `${attempt.qid}|${attempt.timestamp}|${attempt.session_id}`;
    if (seen.has(id)) { duplicates++; continue; }
    seen.add(id);
    log.push(attempt);
    added++;
  }

  log.sort((x, y) => String(x.timestamp).localeCompare(String(y.timestamp)));
  return { log, added, duplicates, unmatched };
}
