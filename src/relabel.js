/**
 * Option-letter relabelling for feedback text.
 *
 * Rationale and trap text is authored against the bank's stored option order
 * ("(B) and (E) look like rigor and are actually flaws"), but every runner
 * reshuffles the options before printing them, so a printed letter names
 * whatever happened to land in that slot. The reader then gets pointed at an
 * option the sentence is not talking about — often the correct one.
 *
 * This is not a rare authoring slip: 326 of the 1206 banked questions carry at
 * least one letter reference, and in `nur4351-research-consumer` it is 300 of
 * 404. Stripping the letters out of the prose by hand would mean rewriting
 * hand-authored text in two places (the bank and the `drills/*.md` it came
 * from, since a re-import will not overwrite an existing question), so the
 * translation happens at display time instead.
 *
 * Only the interactive runners need this. The static answer key in
 * `renderExport` prints options in stored order, so its letters already agree
 * with the prose.
 */

/**
 * Rewrite option-letter references so they name the slot each option is
 * actually being shown in.
 *
 * Matches a parenthesised letter, or an "Option"/"Choice" phrase which may
 * carry a list ("Options A and B", "Option C, D or E"). The trailing \b is
 * what keeps "Options Are..." from matching: the letter has to end a word,
 * and the A in "Are" does not.
 *
 * A reference whose letter is not on screen is left exactly as written rather
 * than guessed at — the banks currently contain no such reference, but a
 * future one should read oddly instead of pointing somewhere wrong.
 *
 * Self-contained on purpose: `relabelSource` ships this function's own text
 * into exported pages, so it must not close over anything module-level.
 *
 * @param {string} text     rationale or trap text, unescaped
 * @param {number[]} order  display slot -> stored option index
 * @returns {string} text with letters translated into display order
 */
export function relabelLetters(text, order) {
  if (!text || !Array.isArray(order)) return text;
  const REF = /\(([A-H])\)|\b((?:[Oo]ption|[Cc]hoice)s?\s+)([A-H](?:\s*(?:,|and|or|&)\s*[A-H])*)\b/g;

  // 'B' means stored index 1; find the slot that index is being drawn in.
  const slotOf = (letter) => {
    const slot = order.indexOf(letter.charCodeAt(0) - 65);
    return slot < 0 ? null : String.fromCharCode(65 + slot);
  };

  const remap = (run) => {
    let resolved = true;
    const out = run.replace(/[A-H]/g, (letter) => {
      const to = slotOf(letter);
      if (to === null) resolved = false;
      return to === null ? letter : to;
    });
    return resolved ? out : null;
  };

  return text.replace(REF, (match, paren, lead, run) => {
    if (paren !== undefined) {
      const to = remap(paren);
      return to === null ? match : `(${to})`;
    }
    const to = remap(run);
    return to === null ? match : lead + to;
  });
}

/**
 * Every option index a piece of feedback text refers to, in order of mention.
 *
 * This is the import-time counterpart to `relabelLetters`: the runners
 * translate references, the importer uses this to check they point somewhere
 * sensible before the question is banked. It deliberately does not share code
 * with `relabelLetters`, which has to stay self-contained so its source can be
 * inlined into exported pages — `option refs agree with what relabelLetters
 * rewrites` in test/relabel.test.js is what keeps the two patterns in step.
 *
 * @param {string} text rationale or trap text
 * @returns {number[]} stored option indices ('B' -> 1), duplicates kept
 */
export function optionRefs(text) {
  if (!text) return [];
  const REF = /\(([A-H])\)|\b(?:[Oo]ption|[Cc]hoice)s?\s+([A-H](?:\s*(?:,|and|or|&)\s*[A-H])*)\b/g;
  const out = [];
  for (const m of text.matchAll(REF)) {
    for (const letter of (m[1] || m[2]).match(/[A-H]/g)) out.push(letter.charCodeAt(0) - 65);
  }
  return out;
}

/**
 * The function's own source, for inlining into exported pages.
 *
 * The exported HTML is self-contained and cannot import anything, so the two
 * runners in `src/export.js` need this code as text. Embedding the real
 * function keeps the shipped copy from drifting away from the tested one —
 * three-way drift between the runners is exactly how the stale "rationales
 * never refer to options by letter" comment survived in `export.js`.
 */
export const relabelSource = relabelLetters.toString();
