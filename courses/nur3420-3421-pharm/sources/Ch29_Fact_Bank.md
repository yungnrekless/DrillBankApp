# Fact bank — Chapter 29: Fluids and Electrolytes

**Source:** Lilley, Collins & Snyder, *Pharmacology and the Nursing Process*, 10th ed. (Elsevier, 2023), Part 4 (Drugs Affecting the Cardiovascular and Renal Systems), Chapter 29, printed pp. 458–474.

**To regenerate the raw text:**

```bash
factbank build --course courses/nur3420-3421-pharm --chapter 29
```

(`factbank` is not on PATH: run `python -m factbank.cli build ...` with cwd `factbank-tool/`.)

`book.json` sets `offset: 22` (verified on printed p. 1), so every `p.` below is the **printed** page. Printed p. 458 is PDF page 480. Running heads were located at raw offsets 4090 (p. 459) through 90726 (p. 474) and every fact was page-fixed against them.

## Curation note

The curated, de-bled layer over `work/ch29_raw.txt`. The raw text is a two-column extraction and the KEY TERMS box is the worst-hit region: each printed line concatenates a left-column line with an unrelated right-column line, so the digest's "definitional sentences" are garbage (`Hypertonic saline — high-alert drug and should not be given faster particles are eliminated quickly`). The digest was used as an **index only**; every definition was reassembled column-by-column and quoted as printed.

**Blueprint weight: 1 question of 121 (0.8%), depth `light`.** The 93 KB pull was cut to about 16 KB. **Discarded:** the whole nursing process (pp. 468–472, roughly 20 KB), the patient teaching box, the case study, all five pharmacokinetics boxes, every individual product dose (Table 29.3 survives as one volume ratio; Table 29.4's composition and cost columns are gone), the acid-base compensation discussion the book itself calls "beyond the scope of this textbook," and the conivaptan, tolvaptan, patiromer, and Lokelma profiles, cut to trap-level one-liners. **Kept:** the full 22-term key-terms table, the crystalloid / colloid / blood-product grid, potassium and sodium with ranges and deficiency/excess signs, and a trap for every confusable pair and every level-based concept. Those last two are the floor on length: a fully quoted 22-term table plus 20 mandatory traps is about 9 KB before anything else is written, so this file sits slightly above a typical `light` target rather than dropping either. This chapter is a worked example of **supportive and supplemental therapy** as Chapter 2 defines it.

---

## Key terms

All 22 terms from the KEY TERMS box, quoted as given (pp. 458–459).

| Term | p. | Definition as given |
|---|---|---|
| Blood | 458 | "The fluid that circulates through the heart, arteries, capillaries, and veins, carrying nutriment and oxygen to the body cells. It consists of plasma, its liquid component, plus three major solid components: erythrocytes (red blood cells [RBCs], leukocytes (white blood cells or WBCs), and platelets." |
| Colloids | 458 | "Protein substances that increase the colloid oncotic pressure." |
| Colloid oncotic pressure | 458 | "Another name for oncotic pressure. It is a form of osmotic pressure exerted by protein in blood plasma that tends to pull water into the circulatory system." |
| Crystalloids | 458 | "Substances in a solution that diffuse through a semipermeable membrane." |
| Dehydration | 458 | "Excessive loss of water from the body tissues. It is accompanied by an imbalance in the concentrations of electrolytes, particularly sodium, potassium, and chloride." |
| Edema | 458 | "The abnormal accumulation of fluid in interstitial spaces." |
| Extracellular fluid (ECF) | 458 | "That portion of the body fluid comprising the interstitial fluid and intravascular fluid." |
| Gradient | 458 | "A difference in the concentration of a substance on two sides of a permeable barrier." |
| Homeostasis | 458 | "The tendency of a cell or organism to maintain equilibrium by regulating its internal environment and adjusting its physiologic processes." |
| Hyperkalemia | 458 | "An abnormally high potassium concentration in the blood, most often the result of defective renal excretion but also caused by excessive dietary potassium or certain drugs, such as potassium-sparing diuretics or angiotensin-converting enzyme (ACE) inhibitors and other causes such as acidosis." |
| Hypernatremia | 458 | "An abnormally high sodium concentration in the blood; may be due to defective renal excretion but is more commonly caused by excessive dietary sodium or replacement therapy or the loss of water." |
| Hypokalemia | 458 | "A condition in which there is an inadequate amount of potassium in the bloodstream; possible causes include diarrhea, diuretic use, and others." |
| Hyponatremia | 458 | "A condition in which there is an inadequate amount of sodium in the bloodstream, caused by inadequate excretion of water or by excessive water intake." |
| Interstitial fluid (ISF) | 458 | "The extracellular fluid that fills in the spaces between most of the cells of the body." |
| Intracellular fluid (ICF) | 458 | "The fluid located within cell membranes throughout most of the body. It contains dissolved solutes that are essential to maintaining electrolyte balance and healthy metabolism." |
| Intravascular fluid (IVF) | 458 | "The fluid inside blood vessels." |
| Isotonic | 458 | "Having the same concentration of solutes as another solution and hence exerting the same osmotic pressure as that solution, such as an isotonic saline solution that contains an amount of salt equal to that found in the intracellular and extracellular fluid." |
| Osmotic pressure | 459 | "The pressure produced by a solution necessary to prevent the osmotic passage of solvent into it when the solution and solvent are separated by a semipermeable membrane." |
| Plasma | 459 | "The watery, straw-colored fluid component of lymph and blood in which the leukocytes, erythrocytes, and platelets are suspended." |
| Serum | 459 | "The clear, cell-free portion of the blood from which fibrinogen has been separated during the clotting process, as typically carried out with a laboratory sample." |
| Solute | 459 | "A substance that is dissolved in another substance." |
| Transcellular fluid | 459 | "The fluid that is contained within specialized body compartments such as cerebrospinal, pleural, and synovial cavities." |

> **Trap (confusable pair).** *Plasma* holds the cells and still has fibrinogen; *serum* is what clotting leaves. Cue: **serum is the lab-tube word**, which is why every value here is a *serum* potassium or sodium.

> **Trap (confusable pair).** *Colloids* are the particles; *colloid oncotic pressure* is what they exert. Discriminator: **crystalloids diffuse through the membrane, colloids cannot.**

> **Trap (SATA, five options mapped to compartments).** TBW (about 60% of adult body weight, higher in infants, lower in older adults) = ICF 2/3 + ECF 1/3; ECF = IVF + ISF; **transcellular sits inside ISF, not beside it.** Death "often occurs when 20% to 25% of TBW is lost" (p. 459).

---

## Crystalloids vs. colloids vs. blood products

"There are three categories of agents that can be used ... crystalloids, colloids, and blood products. The clinical situation dictates which category of agents is most appropriate" (p. 460).

| | Crystalloids | Colloids | Blood products |
|---|---|---|---|
| What | IV fluids supplying water and sodium, **no proteins**: NS (0.9% NaCl), lactated Ringer's | substances that "increase the colloid oncotic pressure and move fluid from the interstitial compartment to the plasma compartment": albumin, dextran, hetastarch | "biologic drugs" that "augment the plasma volume": PRBCs, FFP, whole blood, PPF, cryoprecipitate, platelets |
| When | "maintenance fluids," insensible losses, specific electrolyte disturbances; best for **treating dehydration** | "**shock and burns,** or whenever the patient requires plasma volume expansion" | loss of "**25% or more blood volume**" |
| Advantages | cheapest; "no risk for viral transmission or anaphylaxis and no alteration in the coagulation profile"; **best for emergency short-term expansion** | hold plasma volume **longer**; "less likely than crystalloids to cause **edema**" | **carry oxygen**; hold oncotic pressure "for several hours to days" |
| Disadvantages | leak into tissues (**peripheral and pulmonary edema**), dilute plasma proteins, need **liters**, risk **fluid overload**, "relatively short-lived" | expensive; "more likely to **promote bleeding**"; **no oxygen-carrying ability, no clotting factors** | most expensive, **require human donors**, transfusion reactions, can transmit **hepatitis and HIV** |

Crystalloids and colloids share their contraindications (drug allergy, **hypervolemia**, possibly severe electrolyte disturbance); blood products have "**no absolute contraindications**." Interactions are minimal for all three (pp. 461–464).

**Volume equivalence (Table 29.3, p. 462), the one dosing fact worth carrying.** To raise plasma volume by 1 L: **5–6 L of 0.9% saline, 1.5–2 L of 3% saline, 1 L of iso-oncotic colloid (5% albumin, hetastarch), 0.5 L of hyperoncotic 25% colloid.** Saline distributes 25% plasma / 75% interstitial; colloids stay 100% plasma.

> **Trap (plausible-but-adjacent).** Both are on p. 462: colloids hold plasma volume **longer**, but "crystalloids are better than colloids for **emergency short-term** plasma volume expansion." Read the time frame, not the word "better."

> **Trap (level/stage swap, blood loss).** Table 29.6 (p. 464): **20% or less slow** = crystalloids; **20%–50% slow** = dextran or hetastarch; **over 50% slow or 20% acute** = whole blood or PRBCs, PPF, FFP; **80% or more** = add 1–2 units FFP and 1–2 units platelets per 5 units of blood. Distractors shift the band one row.

> **Trap (SATA, five options mapped to categories).** Match product to *reason*, not severity (Table 29.5, p. 463): **PRBCs = oxygen-carrying capacity; FFP = clotting factors; whole blood = extreme (over 25%) loss**, because it adds plasma proteins, "the chief osmotic component"; **cryoprecipitate and PPF = acute bleeding.**

> **Trap (priority question).** "Blood products can be administered with normal saline **ONLY**" (p. 464), because D5W hemolyzes red cells. A dextrose flush is the standing distractor, and **fever or hematuria mid-transfusion is a reaction requiring immediate attention**, never "expected" (p. 469).

> **Trap (confusable pair, albumin).** Albumin is the colloid exception twice: cleared by the **reticuloendothelial system** and its particles are **all one size.** It generates "approximately 70% of the colloid oncotic pressure" and is contraindicated in **heart failure, severe anemia, or renal insufficiency** (p. 463).

---

## Tonicity, osmolality, and the three dehydrations

"**Osmolality** is used in reference to **body fluids** ... between 290 and 310 mOsm/kg. **Tonicity** is used in reference to **intravenous fluids**" (p. 460).

> **Trap (setting vs. focus).** The axis is **what is measured**: osmolality describes the **patient**, tonicity describes the **bag**. The book flags the swap itself, calling them "similar terms that are often used interchangeably."

A cue for each of the three levels, in both senses the chapter uses them (p. 460, Table 29.1):

| Level | As an IV fluid | As a dehydration |
|---|---|---|
| **Isotonic** | pressures inside and outside the cell are the **same** (0.9% NaCl, lactated Ringer's): "no net fluid movement" | "loss of **both** sodium and water ... decrease in the volume of extracellular fluid." Example: **diarrhea and vomiting** |
| **Hypotonic** | outside the cell is **lower** (0.45%, 0.25%): fluid moves "out of the vein and into the tissues and cells"; cells can **burst** | "sodium loss is **greater than** water loss ... fluid ... pulled from outside the cells into the cells." Example: **renal insufficiency**, inadequate **aldosterone** |
| **Hypertonic** | outside the cell is **higher** (3%, 5% NaCl, high-alert): fluid moves "from the ISF into the veins"; cells **shrink** | "water loss is **greater than** sodium loss ... thus dehydrating the cells." Example: fever with **perspiration** |

> **Trap (level/stage swap).** Same three words, opposite senses across the two columns. For **dehydration**, name the loss that is *greater*; for **fluids**, name where water *goes.* Vomiting and diarrhea (critical thinking exercise 1, p. 473) lose both, so **isotonic.**

> **Trap (priority question, high-alert).** Hypertonic saline is high-alert: **no faster than 100 mL/hr** with frequent serum monitoring. Too fast gives **osmotic demyelination syndrome** (formerly central pontine myelinolysis), "potentially fatal," worst when correcting **chronic** hyponatremia (pp. 461, 467, 473).

> **Trap (plausible-but-adjacent).** The dilute end has its own harm, unrelated to the D5W rule: **0.25% NaCl** "can cause **hemolysis of the red blood cells**" (p. 461).

> **Trap (level/stage swap, acid-base).** pH **7.35–7.45**; **acidosis below, alkalosis above**; pH is "inversely related to hydrogen ion concentration." An **acid donates** hydrogen ions, a **base accepts** them (p. 460).

---

## Potassium and sodium

"Electrolytes are solutes ... measured in milliequivalent (mEq) units" (p. 464). **Cations:** Na+, K+, Ca++, Mg++. **Anions:** Cl−, PO4−, HCO3−. Sodium and chloride are the principal **ECF** electrolytes, potassium the major **ICF** one; all are controlled by the **renin-angiotensin-aldosterone system, ADH, and the sympathetic nervous system.** "Patients who receive diuretics (see Chapter 28) are at risk for electrolyte abnormalities."

| | Potassium (K+) | Sodium (Na+) |
|---|---|---|
| Normal serum range | **3.5 to 5 mEq/L** (pp. 464, 468, 469) | **135 to 145 mEq/L** (p. 466) |
| Location | ICF, approx. 150 mEq/L; "approximately 95% ... is intracellular" | "the principal cation outside cells" |
| Deficiency | **Hypokalemia, < 3.5.** *Early:* hypotension, lethargy, mental confusion, muscle weakness, nausea. *Late:* cardiac irregularities, neuropathies, paralytic ileus (p. 465) | **Hyponatremia, < 135.** Lethargy, hypotension, stomach cramps, vomiting, diarrhea, seizures; also anorexia, confusion, agitation, headache (p. 466) |
| Excess | **Hyperkalemia, > 5.5.** Generalized fatigue, weakness, paresthesia, palpitations, paralysis; "generally related to the heart." **> 7** precipitates **ventricular fibrillation and cardiac arrest** (p. 465) | **Hypernatremia, > 145.** "Causes cellular dehydration": muscle cramps, headache, lethargy, seizures, coma, possible **intracranial hemorrhage** (p. 466) |

> **Trap (level-based, potassium).** **< 3.5** hypokalemia, **3.5–5** normal, **> 5.5** hyperkalemia, **> 7** ventricular fibrillation and arrest. Both ends give weakness and rhythm problems, so weakness decides nothing: **hypotension, lethargy, confusion, nausea, ileus** point low; **palpitations and paresthesia** point high. A low potassium raises **digoxin** toxicity.

> **Trap (the chapter contradicts itself on the cutoff).** p. 465 says hyperkalemia is "> 5.5," the Safety box on p. 469 says "> 5," and p. 468 says labs differ (5.0 vs. 5.3) and to check institutional policy. Carry **> 5 = report, > 5.5 = "toxic and dangerous."**

> **Trap (priority question, IV potassium rate).** **No faster than 10 mEq/hr in unmonitored patients**; "20 mEq/hr or more" for critically ill patients on cardiac monitors; too fast and "cardiac arrest may occur." Max **20–40 mEq/L peripheral, 60 mEq/L central. Never IV push or bolus.**

> **Trap (level-based, hyponatremia subtypes).** Sorted by **total body water**, not the sodium value (p. 466): **hypovolemic** = TBW down, sodium down more; **euvolemic** = TBW up, sodium normal; **hypervolemic** = sodium up, TBW up more. **Conivaptan and tolvaptan ("vaptans") treat euvolemic only.**

> **Trap (confusable pair, hypernatremia presentation).** It "is associated with symptoms of water retention **but can be associated with normal fluid or even low fluid volume**" (p. 473): flushed skin, dry sticky mucous membranes, thirst, temperature elevation, decreased urination. **Do not infer volume status from the sodium value.**

> **Trap (setting vs. focus, potassium-lowering agents).** **Kayexalate** trades body potassium for resin sodium **in the intestine** (~1 mEq/g, onset 2–12 hr, never with **sorbitol**). **Patiromer and Lokelma** have delayed onset and are "not to be used for emergency treatment of hyperkalemia." Cue: **emergencies get the IV shift regimen (dextrose and insulin, bicarbonate, calcium), never a resin.**

> **Trap (plausible-but-adjacent, sodium chloride).** p. 461: "there are **no hypersensitivity reactions to it**"; p. 467: "**contraindicated in patients who are hypersensitive to it.**" The consistently stated contraindications are **hypernatremia and/or hyperchloremia.** NS carries **154 mEq of sodium per liter.**

---

## Limits

Condensed from the full GAPS list, keeping what protects against misreading this sheet as complete.

1. **The blueprint gives an item count but no topic list** — `{"chapters": [29], "questions": 1, "topics": []}`. Emphasis was inferred from the chapter's own signals (Clinical Pearls, high-alert flags, what the review questions test), not from the blueprint.
2. **Objective 2 is not satisfied by the chapter.** It promises "the various electrolytes and their **normal serum values**" (p. 458), but the chapter names calcium, magnesium, phosphorus, chloride, and bicarbonate and then gives ranges for **potassium and sodium only.** No range for Ca, Mg, PO4, Cl, or HCO3 appears anywhere in pp. 458–474; none was filled from memory. The only other numeric norms printed are **total body protein 7.4 g/dL** (shift below **5.3**), **osmolality 290–310 mOsm/kg**, and **pH 7.35–7.45**.
3. **Answer keys are absent and live in two places.** Case study and critical thinking answers → Evolve (p. 473); **review question answers → the back of the book** (p. 474), outside this chapter's pages. Review questions 1–8, including both SATA items and the drip-rate calculation in question 7 ("Infuse 1000 mL of NS over the next 8 hours," 15 gtt/mL), are discussed above **without verified keys**.
4. **Uncorrected proof, quoted as printed:** "Sodium is the **principle** extracellular electrolyte" (p. 459, for *principal*); the objectives are **misnumbered** 1, 2, 3, 3, 4, 5, 6, 7; the Blood key term carries an **unbalanced parenthesis**. Separately, the *extraction* rather than the proof breaks hyphenated compounds ("high-a lert," "acid-b ase") and drops subscripts, rendering CO2 and HCO3 as "CO" and "HCO."
