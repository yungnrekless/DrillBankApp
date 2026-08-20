# Fact bank — Chapter 28: Diuretic Drugs

**Source:** Lilley, Collins & Snyder, *Pharmacology and the Nursing Process*, 10th ed. (Elsevier, 2023), Part 4 (Drugs Affecting the Cardiovascular and Renal Systems), Chapter 28, printed pp. 445–457.

**To regenerate the raw text:**

```bash
factbank build --course courses/nur3420-3421-pharm --chapter 28
```

Raw pull is 66,346 chars. `book.json` sets `offset: 22` (verified on printed p. 1), so every `p.` below is the book's **printed** page number, not the PDF page (printed p. 445 is PDF page 467). Pages were re-derived from the running heads in `work/ch28_raw.txt`; the offset holds across all thirteen pages.

## Curation note

This is the curated, de-bled layer over `work/ch28_raw.txt`. The raw text is a **two-column scan that bleeds badly** — the potassium-sparing indications paragraph interleaves with the interactions paragraph, and every dosage table is shredded into one-word lines. The digest's "definitional sentences" are almost entirely bleed artifacts and were used as an **index only**; every quotation below was traced back to its own column and page-located against the running heads.

**Blueprint weight: 2 questions of 121 (1.7%), depth `focused`.** `focused` means **named topics plus confusable-pair traps,** not exhaustive coverage. Compressed out on purpose, and flagged in GAPS rather than reproduced: the seven pharmacokinetic tables, the three dosage-range tables, the assessment lab reference ranges, the pediatric and older-adult lifespan boxes, and the patient-teaching card template. Trap notes are kept at full count and written in the rulebook's short, cue-first style, because at `focused` depth the traps are the deliverable.

Emphasis went to **one structure: the class-by-class grid of nephron site of action against signature electrolyte effect, with each class's prototype.** Every distractor this chapter can generate comes from swapping one cell of that grid. Second emphasis is the **potassium-wasting vs. potassium-sparing split,** which drives the teaching item, the digoxin item, and the lab-monitoring item the chapter's own review questions ask.

## Chapter outline

| Section | p. |
|---|---|
| Objectives; **KEY TERMS** (15 terms); drug profile index | 445 |
| Overview; nephron anatomy; GFR; afferent/efferent arterioles; classification and **potency ranking**; CAI mechanism | 446 |
| **Fig. 28.1** sites of action; **Table 28.1** classification; CAI indications through dosages; profile **acetazolamide** | 447 |
| **Table 28.2** loop adverse effects; **Loop diuretics** mechanism through toxicity | 448 |
| **Table 28.3** loop interactions; sequential nephron blockade; profile **furosemide**; **equipotent loop doses**; osmotic mechanism | 449 |
| Pediatric box; mannitol indications through profile; **potassium-sparing** mechanism | 450 |
| K-sparing indications through interactions; **Table 28.4**; profiles **spironolactone**, **triamterene** | 451 |
| **Thiazides and thiazide-like** mechanism through toxicity; **Tables 28.5, 28.6** | 452 |
| Profiles **hydrochlorothiazide** (ceiling effect) and **metolazone**; **nursing process: assessment** | 453 |
| Older-adult box; medical-history card; planning; human need statements | 454 |
| **Implementation**; evaluation; case study (HCTZ); patient teaching | 455 |
| Patient teaching cont'd; **key points**; critical thinking exercises; review questions 1–4 | 456 |
| Review questions 5–8; Evolve website; references | 457 |

---

## Key terms

All 15 terms from the KEY TERMS box, quoted as given (p. 445). **Twelve of the fifteen are anatomy, not pharmacology** — this chapter's vocabulary load is the nephron itself.

| Term | p. | Definition as given |
|---|---|---|
| **Afferent arterioles** | 445 | "The small blood vessels **approaching** the glomerulus (proximal part of the nephron)." |
| **Aldosterone** | 445 | "A **mineralocorticoid steroid hormone produced by the adrenal cortex** that regulates **sodium and water balance.**" |
| **Ascites** | 445 | "An **intraperitoneal accumulation of fluid** (defined as a volume of **500 mL or more**) containing large amounts of **protein and electrolytes.**" |
| **Collecting duct** | 445 | "The **most distal** part of the nephron **between the distal convoluted tubule and the ureters,** which lead to the urinary bladder." |
| **Distal convoluted tubule** | 445 | "The part of the nephron immediately **distal to the ascending loop of Henle and proximal to the collecting duct.**" |
| **Diuretics** | 445 | "Drugs or other substances that **promote the formation and excretion of urine.**" |
| **Efferent arterioles** | 445 | "The small blood vessels **exiting** the glomerulus. At this point blood has **completed its filtration** in the glomerulus." |
| **Filtrate** | 445 | "The material that passes through a filter. In the kidney, the filter is the **glomerulus** and the filtrate is the material extracted from the blood (normally liquid), which **becomes urine.**" |
| **Glomerular capsule** | 445 | "The open, rounded, and **most proximal part of the proximal convoluted tubule** that **surrounds the glomerulus** and receives the filtrate from the blood." |
| **Glomerular filtration rate (GFR)** | 445 | "An estimate of the **volume of blood that passes through the glomeruli of the kidney per minute.**" |
| **Glomerulus** | 445 | "The **cluster of kidney capillaries** that marks the **beginning of the nephron** and is immediately **proximal to the proximal convoluted tubule.**" |
| **Loop of Henle** | 445 | "The part of the nephron **between the proximal and distal convoluted tubules.**" |
| **Nephron** | 445 | "The **functional filtration unit of the kidney,** consisting of (in anatomic order from proximal to distal) the **glomerulus, proximal convoluted tubule, loop of Henle, distal convoluted tubule, and collecting duct,** which empties urine into the ureters." |
| **Open-angle glaucoma** | 445 | "A condition in which **pressure is elevated in the eye** because of **obstruction of the outflow of aqueous humor.**" |
| **Proximal convoluted (twisted) tubule** | 445 | "The part of the nephron that is immediately **distal to the glomerulus and proximal to the loop of Henle.**" |

> **Trap (confusable pair).** *A for **approach** and **afferent**; E for **exit** and **efferent*** — the book's own mnemonic (p. 446). Afferent = blood arriving, not yet filtered; efferent = blood that "has **completed its filtration.**" An option putting the efferent arteriole before the glomerulus has reversed the pair.

> **Trap (confusable pair).** *Glomerulus = the **vessels**; glomerular capsule = the **container***, and the capsule "is the **most proximal part of the proximal convoluted tubule.**" If the stem says *cluster of capillaries* → glomerulus; if it says *surrounds and receives the filtrate* → capsule.

---

## §1 The master grid (the whole chapter in one table)

| Class | Prototype | Site of action, as stated | Effect on potassium | Potency |
|---|---|---|---|---|
| **Carbonic anhydrase inhibitors (CAIs)** | **acetazolamide** (Diamox), p. 447 | "primarily in the **proximal tubule**" (p. 446) | **Hypokalemia** — "metabolic abnormalities such as **acidosis and hypokalemia**" (p. 447) | Weakest: "much **less potent** ... than loop diuretics or thiazides" (p. 447) |
| **Loop diuretics** | **furosemide** (Lasix), p. 449 | "primarily along the **thick ascending limb of the loop of Henle** blocking **chloride** and, secondarily, sodium resorption" (p. 448) | **Hypokalemia** — "**Hypokalemia is of serious clinical importance**" (p. 448); a loop diuretic "causes the excretion of **sodium, potassium, and chloride** into the urine" (p. 456) | **Most potent** (p. 446) |
| **Osmotic diuretics** | **mannitol** (Osmitrol), p. 450 | "works along the **entire nephron.** Its major site of action, however, is the **proximal tubule and descending limb of the loop of Henle**" (p. 449) | **Minimal change** — "produces only a **slight loss of electrolytes,** especially sodium" (p. 449) | 2nd (p. 446) |
| **Potassium-sparing diuretics** | **spironolactone** (Aldactone), p. 451; also amiloride, triamterene | "work in the **collecting ducts and distal convoluted tubules,** where they interfere with **sodium-potassium exchange**" (p. 450) | **Hyperkalemia** — "the problem that may occur is **hyperkalemia rather than hypokalemia**" (p. 455) | "relatively **weak** compared with the thiazide and loop diuretics" (p. 450) |
| **Thiazide / thiazide-like** | **hydrochlorothiazide (HCTZ)**, p. 453; **metolazone** (Zaroxolyn), p. 453 | "primary site of action ... is the **distal convoluted tubule,** where they inhibit the resorption of **sodium, potassium, and chloride**" (p. 452) | **Hypokalemia** — plus "elevated levels of **calcium,** lipids, glucose, and uric acid" (p. 452) | 4th; metolazone 3rd (p. 446) |

**Potency order, as printed (p. 446):** "The most potent diuretics are the **loop diuretics,** followed by **mannitol, metolazone** (a thiazide-like diuretic), **the thiazides,** and the **potassium-sparing diuretics.**" Stated reason: potency "is a **function of where they work in the nephron** ... The **more sodium and water they inhibit from resorption, the greater** the amount of diuresis."

**Sodium handled per segment** (p. 446), which is why the loop wins: proximal tubule "returns **60% to 70%**" (CAIs, mannitol's major site); ascending loop "another **20% to 25%**" (loops); distal tubule "the remaining **5% to 10%**" (thiazides); collecting duct is where ADH "increase[s] the absorption of water" (potassium-sparing, with the distal tubule).

> **Trap (setting vs. focus).** The grid has **two independent axes** and distractors swap the wrong one: **WHERE** the drug acts vs. **WHAT it does to potassium.** They do not track each other — CAIs act proximally and thiazides distally yet both waste potassium, while potassium-sparing drugs share the distal tubule with thiazides yet move potassium the opposite way. *Site-of-action stems → anatomy column; lab-value stems → potassium column.*

> **Trap (level/stage swap).** Right class, wrong segment. Order is **glomerulus → proximal tubule → loop of Henle → distal tubule → collecting duct.** *Proximal = **CAI** (and mannitol's major site); **ascending** limb = **loop**; **descending** limb = **mannitol**; distal tubule = **thiazide**; distal tubule **+ collecting duct** = **potassium-sparing.*** The two swaps that actually appear: thiazides moved into the loop, and loops moved into the *descending* limb. Mannitol alone works "along the **entire nephron,**" so an option confining it to one segment is over-narrow.

> **Trap (confusable pair).** **Loop vs. thiazide by segment.** The book's own key-point example: "if a **loop diuretic** is given, its site of action is the **loop of Henle**" (p. 456). *The class is named after its segment, which leaves the **distal tubule** to the **thiazides.*** Shared hypokalemia does not make them interchangeable; the discriminators are **potency** and **renal-function threshold** (§3).

> **Trap (SATA, five options mapped to categories).** Select-all items map five drugs onto the five classes. Membership from **Table 28.1** (p. 447): **CAI** — acetazolamide *(only drug)*; **loop** — bumetanide, ethacrynic acid, furosemide, torsemide; **osmotic** — mannitol *(class also includes urea, organic acids, glucose)*; **potassium-sparing** — amiloride, spironolactone, triamterene; **thiazide/thiazide-like** — chlorthalidone, chlorothiazide, hydrochlorothiazide, indapamide, metolazone. The two people miss: **ethacrynic acid is a loop diuretic,** and **chlorthalidone, indapamide, and metolazone are thiazide-*like*** — the thiazides proper are only chlorothiazide and HCTZ (p. 452).

---

## §2 The potassium split

**Potassium-wasting:** loop, thiazide/thiazide-like, CAI — the chapter's phrase is "the **potassium-wasting (e.g., loop, thiazide) diuretics**" (p. 451). **Potassium-sparing:** amiloride, spironolactone, triamterene, "also referred to as **aldosterone-inhibiting diuretics** because they block the aldosterone receptors" (p. 450).

| | Potassium-wasting (loop, thiazide, CAI) | Potassium-sparing (spironolactone, triamterene, amiloride) |
|---|---|---|
| Serum K | **Down** (hypokalemia) | **Up** (hyperkalemia) |
| Signs | "anorexia, nausea, lethargy, **muscle weakness,** mental confusion, and hypotension" (p. 455) | "**nausea, vomiting, and diarrhea** ... with toxic levels manifested by **cardiac rhythm abnormalities**" (p. 455) |
| K-rich foods | **Encourage** | **Do not** — encourage them "**except when contraindicated or when potassium-sparing diuretics are used**" (p. 455) |
| Danger combination | **digoxin** — hypokalemia produces "Increased **digoxin toxicity**" (Tables 28.3, 28.6) | **ACE inhibitors, potassium supplements, other K-sparing drugs** (p. 451) |
| Contraindicating lab | — | **Hyperkalemia,** "serum potassium level **exceeding 5.5 mEq/L**" (p. 451) |

Normal serum potassium is "**3.5 to 5 mEq/L**" (p. 455). Potassium-rich foods, in full (p. 455): "bananas, oranges, apricots, dates, raisins, broccoli, green beans, potatoes, tomatoes, meats, fish, wheat bread, and legumes."

> **Trap (confusable pair).** **Wasting vs. sparing**, the chapter's most-swapped fact; review questions 3 and 4 both turn on it. *"**Sparing**" means the drug **keeps** potassium in the patient, so the risk is **too much**; every other diuretic **wastes** it.* The teaching flips with it — **HCTZ or furosemide → eat** potassium-rich foods; **spironolactone → avoid** them. "Eat foods high in potassium" offered to a spironolactone patient is the classic reversal.

> **Trap (SATA, five options mapped to categories).** The two symptom sets barely overlap. **Hypokalemia:** anorexia, nausea, lethargy, **muscle weakness,** mental confusion, hypotension. **Hyperkalemia:** nausea, **vomiting, diarrhea,** and at toxic levels cardiac rhythm abnormalities. *Nausea is the only overlap and discriminates nothing; **weakness and confusion point low, vomiting and diarrhea point high.***

> **Trap (priority question).** **Spironolactone ordered on top of a potassium supplement** (critical thinking exercise 1, p. 456: spironolactone 50 mg daily, existing KCl 20 mEq daily, potassium 4.0 mEq/L). Governing rule: *potassium-sparing diuretic + potassium supplement = hyperkalemia risk;* "potassium supplements" is named among the contraindicating conditions (p. 454). Default priority is **hold and clarify with the prescriber,** not give-and-monitor. Printed answer is on Evolve, not in the pull (GAPS item 2).

> **Trap (priority question).** **Potassium-wasting diuretic + digoxin.** "As with any **diuretic-induced hypokalemia, excluding the potassium-sparing diuretics,** if digoxin is being taken by the patient, toxicity may occur" (p. 453); both interaction tables read "**Hypokalemia**" → "Increased **digoxin toxicity.**" *Priority assessment is **serum potassium,** because potassium is the mechanism.* Home-teaching marker is pulse: "A pulse rate of **60 beats/min or lower** may indicate digoxin toxicity" (p. 456); toxicity signs are "headache, dizziness, confusion, nausea, visual disturbances, and bradycardia."

> **Trap (plausible-but-adjacent).** The clause "**excluding the potassium-sparing diuretics**" (p. 453) is load-bearing: the digoxin-hypokalemia chain does **not** apply to spironolactone, triamterene, or amiloride. A stem pairing spironolactone with digoxin and asking about hypokalemia has the direction wrong.

---

## §3 Class-by-class, compressed

### Carbonic anhydrase inhibitors — acetazolamide (Diamox), pp. 446–448

"Chemical derivatives of **sulfonamide antibiotics**" (p. 446). Carbonic anhydrase normally "makes **hydrogen ions available**" for proximal sodium-for-hydrogen exchange; block it and "little sodium and water can be resorbed." Indications: "**glaucoma, edema,** and **high-altitude sickness**" — specifically adjunct in long-term **open-angle glaucoma,** short-term with miotics before ocular surgery, and heart-failure edema "that has become **resistant to other diuretics**" (p. 447). Self-limiting: "because of the **metabolic acidosis they induce, their effectiveness diminishes in 2 to 4 days.**" Adverse: acidosis, hypokalemia, and "**elevation of the blood glucose level and glycosuria in diabetic patients**" (p. 446).

> **Trap (plausible-but-adjacent).** **Acetazolamide is a diuretic that is mostly not used as a diuretic.** *Headline uses are **glaucoma** and **high-altitude sickness.*** A stem about pulmonary edema or heart failure needing rapid diuresis is not an acetazolamide stem, even though "edema" sits in its indication list — that use is the **resistant-to-other-diuretics** case only.

### Loop diuretics — furosemide (Lasix), pp. 448–449

- **Prototype:** "by far the **most commonly used** loop diuretic ... and the **prototypical drug in this class**" (p. 449). **Clinical Pearl, verbatim:** "**Furosemide (Lasix) lasts 6 hours.**" IV onset **5 minutes;** PO onset 30 to 60 minutes.
- **Renal advantage:** "a **distinct advantage over thiazide diuretics** in that their diuretic action **continues even when creatinine clearance decreases below 25 mL/min** ... even when **kidney function diminishes, loop diuretics can still work**" (p. 448).
- **Indications:** edema of heart failure and hepatic or renal disease, hypertension, and "to **increase the renal excretion of calcium** in patients with hypercalcemia" (p. 448); furosemide adds pulmonary edema, nephrotic syndrome, **ascites** (p. 449).
- **Safety:** "**Furosemide has a black box warning regarding fluid and electrolyte loss**" (pp. 449, 456). Toxicity is "**electrolyte loss and dehydration,** which can result in **circulatory failure,**" treated with "**electrolyte and fluid replacement.**" "Prolonged administration of **high dosages** can **rarely** result in **ototoxicity.**" Skin: "**exfoliative dermatitis with furosemide, Stevens-Johnson syndrome with torsemide**" (p. 453).
- **Equipotent doses (p. 449):** bumetanide **1 mg** = ethacrynic acid **50 mg** = furosemide **40 mg** = torsemide **20 mg.**
- **Sequential nephron blockade:** loop + thiazide "(especially **metolazone**) results in the blockade of sodium and water resorption at **multiple sites in the nephron** ... which increases their effects" (p. 449).

> **Trap (confusable pair).** **Loop vs. thiazide in renal failure.** *The number **25** belongs to the loops (still work **below** CrCl 25 mL/min); **30 to 50** belongs to the thiazides (must **not** be used below it); **10** belongs to **metolazone** alone.* Normal CrCl is 125 mL/min (p. 452). Failing kidneys → **loop or metolazone,** never a plain thiazide.

> **Trap (confusable pair).** **Equipotent loop doses.** *The **smaller** the equipotent number, the **more potent** per milligram* — bumetanide (1 mg) most, ethacrynic acid (50 mg) least, with furosemide 40 mg as the reference point. This table is the chapter's only milligram-for-milligram comparison, so distractors just shuffle the four numbers.

> **Trap (priority question).** **Loop diuretic + aminoglycoside** (review question 8, p. 457). Table 28.3: "**Additive effect**" → "Increased **neurotoxicity, especially ototoxicity**" for aminoglycosides and vancomycin. *Answer is **ototoxicity.*** **Nephrotoxicity** is the plausible-but-adjacent distractor — it is the aminoglycoside's *own* signature toxicity, not the interaction's.

### Osmotic diuretics — mannitol (Osmitrol), pp. 449–450

- "A **nonabsorbable solute**" and "the **prototypical osmotic diuretic**"; "Because it is not absorbed, it **increases osmotic pressure in the glomerular filtrate,** which in turn **pulls fluid, primarily water, into the renal tubules**" (pp. 449–450).
- **Indications:** early **oliguric phase of acute renal failure** ("an **excellent drug for preventing kidney damage**" there), "promote the **excretion of toxic substances,**" "**reduce intracranial pressure** and treat **cerebral edema,**" and intraocular pressure unresponsive to other drugs. It works in renal failure only if "enough **renal blood flow and glomerular filtration must still remain** to enable the drug to reach the renal tubules."
- **Not** for peripheral edema: "**not indicated for patients with peripheral edema** because it **does not promote sufficient sodium excretion**" (p. 449).
- **Contraindications:** "known drug allergy, **severe renal disease, pulmonary edema (loop diuretics are used instead),** and **active intracranial bleeding**." **Adverse:** "**convulsions, thrombophlebitis, and pulmonary congestion.**" **Interactions:** "There are **no drugs that interact significantly** with mannitol" (p. 450).
- **Administration:** parenteral only. "Mannitol may **crystallize when exposed to low temperatures** ... more likely ... when **concentrations exceed 15%.** Because of this, mannitol is **always administered intravenously through a filter,** and vials ... are often **stored in a warmer.** Before administering mannitol, **visually inspect the container for precipitants.**" Percentage = grams per 100 mL: "**5% indicates 5 g/100 mL.**"

> **Trap (confusable pair).** **Mannitol vs. loop for pulmonary edema.** The discriminator sits inside the contraindication: "**pulmonary edema (loop diuretics are used instead).**" *Fluid in the **lungs** → **furosemide;** pressure in the **head** or **eye** → **mannitol.*** Mannitol's own adverse effects include **pulmonary congestion.**

> **Trap (confusable pair).** **Peripheral vs. cerebral edema.** *Mannitol treats **cerebral** edema and raised ICP and is explicitly **not** for **peripheral** edema,* because it barely excretes sodium. Peripheral edema is the loop/thiazide answer.

> **Trap (plausible-but-adjacent).** When the stem asks what the nurse *does,* the answer is the **filter** — mannitol "is **always administered intravenously through a filter.**" Warming the vials and inspecting for precipitants are printed too, but they are precautions, not the standing rule; concentrations **above 15%** are the ones at risk.

### Potassium-sparing — spironolactone, triamterene, amiloride, pp. 450–452

- **Two mechanisms inside one class:** "**Spironolactone competitively binds to aldosterone receptors** ... found primarily in the **distal tubule. Amiloride and triamterene do not bind to aldosterone receptors;** however, they inhibit both aldosterone-induced and basal sodium resorption, working in **both the distal tubule and collecting ducts**" (p. 450).
- **Why they pair with thiazides:** "**synergistic diuretic effects**" and they "**counteract each other's adverse metabolic effects** ... thiazides cause **potassium, magnesium, and chloride to be lost** ... potassium-sparing diuretics counteract this by **elevating the potassium and chloride levels**" (p. 450). Also "often prescribed for **children with heart failure** because pediatric cardiac problems are frequently accompanied by an **excess secretion of aldosterone.**"
- **Spironolactone:** "a **synthetic steroid** that blocks aldosterone receptors"; "in **high dosages** for the treatment of **ascites,** a condition commonly associated with **cirrhosis of the liver**"; "shown to **reduce morbidity and mortality in patients with severe heart failure**"; **greatest antihypertensive activity** of the three; "most commonly prescribed for **children** who have heart failure"; cardioprotective "in **preventing** [ventricular] **remodeling**" (p. 451). Onset **1 to 3 days.** Adverse: "**gynecomastia, amenorrhea, irregular menses, and postmenopausal bleeding.**"
- **Triamterene:** "It has **little or no antihypertensive effect**"; may "**reduce folic acid levels** and cause the formation of **kidney stones and urinary casts** ... may also precipitate **megaloblastic anemia.** However, adverse effects from triamterene are **rare**" (p. 451). Onset 2 to 3 hr.
- **Amiloride:** similar uses "but ... **less effective in the long term.** It **may be more effective** ... in ... **metabolic alkalosis** ... primarily used in the management of **heart failure**" (p. 451).

> **Trap (confusable pair).** **Spironolactone vs. triamterene/amiloride.** *Only **spironolactone** binds the **aldosterone receptor.*** Everything else follows: spironolactone has the **greatest antihypertensive activity** while triamterene has "little or no antihypertensive effect"; spironolactone carries the **endocrine** adverse effects because it is a **synthetic steroid;** spironolactone is the one with **heart-failure mortality** data.

> **Trap (plausible-but-adjacent).** Same class, different drug-specific effects: *steroid drug → **gynecomastia** and menstrual changes (spironolactone); **triamterene → folic acid, kidney stones, urinary casts, megaloblastic anemia.*** Both are printed and both are real, which is what makes them swappable.

> **Trap (level/stage swap).** **Spironolactone's onset is days, not minutes** — **1 to 3 days,** against IV furosemide's **5 minutes.** *A stem needing rapid diuresis or acute pulmonary edema relief is never answered with a potassium-sparing diuretic,* however sound the electrolyte reasoning.

### Thiazides and thiazide-like — HCTZ, metolazone, pp. 452–453

- "Considered **equivalent in their effects**"; thiazides "are **benzothiadiazines,** which are **chemical derivatives of sulfonamide antibiotics**" (p. 452). Thiazides = chlorothiazide, HCTZ; thiazide-like = chlorthalidone, indapamide, metolazone.
- **HCTZ** is "the **prototypical thiazide diuretic** ... **safe, effective, and inexpensive**" and the "**most commonly prescribed and least expensive**" of the class. **Ceiling effect, defined here:** "**Dosages exceeding 50 mg/day rarely produce additional clinical results and may only increase drug toxicity. This property is known as a ceiling effect**" (p. 453).
- Used "**primarily in the treatment of hypertension**"; also edema of various origins, **idiopathic hypercalciuria, diabetes insipidus,** adjunct in heart failure and hepatic cirrhosis (p. 452). The overview names diuretics, "**especially the thiazides,** as among the **first-line drugs in the treatment of hypertension**" (p. 446). They "cause **direct relaxation of the arterioles** ... which reduces **peripheral vascular resistance (afterload).**"
- **Metabolic signature:** "mainly **reduced potassium and sodium levels** and **elevated levels of calcium, lipids, glucose, and uric acid**" (p. 452); the mechanism section says "specifically **hypokalemia and hypercalcemia**" plus hyperlipidemia, hyperglycemia, hyperuricemia. Overdose → hypokalemia; "treatment involves **electrolyte replacement.**"
- **Metolazone** "appears to be **more potent than the thiazide diuretics** ... remains effective to a creatinine clearance **as low as 10 mL/min**," is combined with loops in moderate-to-severe heart failure, and is "**more efficacious when given 30 minutes before loop diuretics**" (p. 453). "**Dizziness and vertigo are common adverse effects of metolazone therapy,**" from "**sudden shifts in the plasma volume**" (p. 452).

> **Trap (confusable pair).** **Thiazide vs. thiazide-*like*.** They are "**equivalent in their effects,**" so the trap is **membership and renal threshold.** *If the name contains "thiazide" it **is** one; chlorthalidone, indapamide, and **metolazone** are thiazide-**like**.* Metolazone alone breaks the class's renal ceiling (CrCl 10 mL/min) and outranks the plain thiazides on potency.

> **Trap (confusable pair).** **Calcium moves opposite ways in the two classes,** and both statements are printed here. *Loops "**increase the renal excretion of calcium** in patients with hypercalcemia" (p. 448) — calcium **out;** thiazides cause "**elevated levels of calcium**" (p. 452) — calcium **up,** which is why they treat **idiopathic hypercalciuria.*** A distractor giving a thiazide for hypercalcemia is backwards.

> **Trap (priority question).** **Patient with diabetes started on a thiazide** (review question 5, p. 457). Thiazides cause **hyperglycemia,** and Table 28.6 lists antidiabetic drugs as "**Antagonism**" → "Reduced therapeutic hypoglycemic effect (i.e., **increased blood glucose levels**)." *Correct action is **blood glucose monitoring.*** "Avoid foods high in potassium" is the potassium-sparing teaching misapplied; "take it at night" contradicts the morning-dosing rule in §4.

> **Trap (plausible-but-adjacent).** The **ceiling effect** is a **dose** concept only: *more drug stops producing more result and adds only toxicity,* at **50 mg/day of HCTZ.** It is not metolazone's greater potency, and it is not a tolerance phenomenon like the CAIs' loss of effect over "**2 to 4 days**" from self-induced acidosis.

---

## §4 Cross-class interactions and the nursing process

**Shared by loops and thiazides** (Tables 28.3, 28.6, pp. 449, 452):

| Interacting drug | Mechanism as printed | Result |
|---|---|---|
| **Aminoglycosides, vancomycin** (loops) | "Additive effect" | "Increased **neurotoxicity, especially ototoxicity**" |
| **Corticosteroids** | "Additive effect" | "Additive **hypokalemia**" |
| **digoxin** | "Hypokalemia" | "Increased **digoxin toxicity**" |
| **lithium** | "Decrease in renal excretion" (loops) / "Decreased clearance" (thiazides) | "Increased **lithium toxicity**" |
| **NSAIDs** | "Inhibition of **renal prostaglandins**" | "**Decreased diuretic activity**" |
| **Antidiabetic drugs** | "Antagonism" | Decreased effectiveness / **hyperglycemia** |

The NSAID mechanism appears twice more: NSAIDs "may **diminish the reduction in vascular resistance** induced by loop diuretics because these two drug classes have **opposite effects on prostaglandin activity**" (p. 449); and with potassium-sparing drugs they "**decreas[e] blood flow to the kidneys** and also the delivery of diuretic drugs to this site of action ... [leading] to a **diminished diuretic response**" (p. 451).

**Timing:** diuretics taken "**late in the afternoon or evening** may lead to **nocturia** ... and subsequent **loss of sleep,** [so] these medications are usually **scheduled for dosing in the morning**" (p. 455); in older adults nocturia brings "confusion and dizziness" and "the potential for **falls and injury.**"

**Postural hypotension, defined here:** "a **drop in blood pressure of 20 mm Hg or more upon standing**"; assess postural pressures "**lying, sitting, standing**" before and during therapy (p. 453).

**Monitoring** (pp. 453–456): vital signs, **weight, intake/output,** breath and heart sounds, skin turgor, capillary refill, and serum **potassium, sodium, chloride, magnesium, calcium, uric acid, creatinine.** Key points name the fluid-status set: "**skin and mucous membranes, blood pressure, pulse rate, intake and output, and daily weights.**" **Therapeutic effect, for evaluation:** "resolution of or reduction of **edema, fluid volume overload, heart failure, or hypertension** or a **return to normal intraocular pressures** (if used for that purpose, as with the CAIs)" (p. 455). Also printed: **constipation** managed with "**fluids and fiber** ... and/or ... **natural bulk-forming products**"; a **heat caution,** since "Heat raises core body temperature and causes **further loss of potassium, sodium, and water through sweat**"; and the vulnerable groups — "**older adult patients, those with chronic illnesses, and patients with altered renal or liver function**" (p. 456).

> **Trap (setting vs. focus).** The same parameters recur in **all three nursing-process phases,** and stems separate them by **when,** not **what.** *"Obtain baseline," "**before giving** a patient any type of diuretic" → **assessment;** "measure and document ... **during** diuretic therapy," safety teaching → **implementation;** "the **therapeutic effects** ... include the resolution of edema," "**monitor** ... for ... **adverse reactions**" → **evaluation.*** Right parameter, wrong phase is the whole distractor.

> **Trap (priority question).** **Diuretic + lithium** always runs one direction: the diuretic **raises** lithium and produces **lithium toxicity** — loops by decreasing its **renal excretion,** thiazides by decreasing its **clearance,** potassium-sparing drugs because "**lithium toxicity may occur** ... because of the hyperkalemia" (p. 454). *No diuretic in this chapter lowers lithium.*

> **Trap (confusable pair).** **NSAIDs blunt the diuretic, not the reverse** — both tables give the result as "**Decreased diuretic activity.**" *Prostaglandins are what the diuretic **recruits** (loops "**activate renal prostaglandins,**" p. 448) and what the NSAID **blocks,** so the NSAID wins and the diuresis fails.*

---

## Cross-references

- **Chapter 2 (Pharmacologic Principles)** defines the renal handling every drug here manipulates: "The actual act of renal excretion is accomplished through **glomerular filtration, active tubular reabsorption, and active tubular secretion**" (Ch 2, p. 24). This chapter's classes interrupt **tubular reabsorption** segment by segment; mannitol instead alters what stays in the **filtrate.** Chapter 28's definitions of **GFR, filtrate, glomerulus,** and **nephron** (p. 445) are the anatomy behind that sentence, and it adds that GFR "can be estimated mathematically by calculating **creatinine clearance**" (p. 446).
- **Chapter 38 (Antibiotics Part 1)** carries the **sulfa-allergy** verdict, stated more plainly than here: "Chemically related drugs such as the sulfonylureas ..., **thiazide and loop diuretics (see Chapter 28), and carbonic anhydrase inhibitors (see Chapter 28) are generally considered relatively safe in a patient who has a sulfonamide allergy.** However, the cyclooxygenase-2 inhibitor **celecoxib (Celebrex) should not be used** (see Chapter 44) in patients with a known sulfonamide allergy" (Ch 38, p. 595). It also warns that a person allergic to sulfonamide drugs "**may or may not** also be allergic to sulfite preservatives." Chapter 28 agrees for the loops — "cross-reaction is unlikely to occur" (p. 448) — but see GAPS item 3, where it contradicts itself.
- **Chapter 39 (Antibiotics Part 2)** carries the ototoxicity interaction from the antibiotic's side: "**Concurrent use with loop diuretics increases the risk for ototoxicity**" (Ch 39, p. 618, amikacin). It also supplies the discrimination review question 8 needs: **ototoxicity** is ear toxicity "likely to be **permanent,**" whereas **nephrotoxicity** is "**usually reversible** upon withdrawal of the offending drug."
- **Chapter 44 (Antiinflammatory and Antigout Drugs)** prints the NSAID interaction from the NSAID's side: "**Diuretics and ACE inhibitors** — Inhibition of prostaglandin synthesis — **Reduced hypotensive and diuretic effects**" (Ch 44, p. 689). It adds the renal-injury direction Chapter 28 omits: "**NSAIDs can compromise existing renal function. Renal toxicity can occur in patients who are dehydrated, those with heart failure or liver dysfunction, and those taking diuretics** or angiotensin-converting enzyme inhibitors" (Ch 44, p. 688). The pairing is doubly bad — the NSAID blunts the diuretic, and the diuretic-induced volume depletion worsens the NSAID's renal risk.
- **Chapter 22** for the ACE inhibitors that combine with potassium-sparing diuretics to cause hyperkalemia (p. 451). **Chapter 29** for the electrolytes themselves, cited three times here for hyperkalemia signs and normal potassium values (pp. 455, 456). **Chapter 57 (Ophthalmic Drugs)** for the topical miotics and epinephrine derivatives acetazolamide is added to in open-angle glaucoma (p. 447).

---

## GAPS (flagged, not filled)

1. **The blueprint gives an item count but no topic list.** `blueprint.json` sets this chapter at **2 questions of 121 (depth `focused`)**, from `blueprint_source.docx`, which tallies returned exams by chapter row. That document has **no required-topic column,** so the brief's checklist is empty and the validator's required-topic check passes vacuously. *Which* two facts were tested is **unknown**; building everything around the site-of-action/potassium grid is my judgment about testability, not the exam's. Only the **depth** is the exam's. The brief's section 3 is likewise empty — **no logged misses yet for this chapter.**
2. **Answer keys are not in the pull, and they live in two places.** The **case study** (p. 455) and **critical thinking exercises** (p. 456) say "For answers, see http://evolve.elsevier.com/Lilley," an external site. The **review questions** (p. 457) say "For answers, see **Answers to Review Questions at the back of the book,**" outside this chapter's page range. Everything above that reasons about review questions 1–8 or the critical thinking exercises is **derived from the chapter's body text and is not the official key.** The one arithmetic item, **review question 7** — mannitol 0.5 g/kg for a 165-lb patient from a 100-mL vial of 20% — works out, on the chapter's own rule that 20% = 20 g/100 mL, to **37.5 g and 187.5 mL.** That is my computation, not the printed key.
3. **The chapter contradicts itself on sulfonamide cross-sensitivity, between two of its own sections.** Pharmacology, on the loops: "analysis of the literature indicates that **cross-reaction with the loop diuretics is unlikely to occur.** Loop diuretics are commonly given to such patients in clinical practice" (p. 448). Assessment, five pages later: "**Cross-sensitivity has been documented in patients who are allergic to sulfonamide antibiotics** (see discussion of pharmacology)" (p. 453) — pointing back to the passage that says the opposite. For the CAIs it hedges a third way: "Although the product labeling **lists sulfa allergy as a contraindication,** the scientific basis for this **has been questioned** ... Nonetheless, it is **prudent to watch for hypersensitivity reactions**" (p. 447). All three quoted as printed rather than reconciled; Chapter 38 sides with "relatively safe."
4. **Fig. 28.1 is a figure and its OCR is scrambled.** Labels survive only as loose fragments interleaved with body text ("Glomerulus / Distal / Afferent / tubule / arteriole"). Recoverable is the **numbered legend,** as printed: "**1. Osmotic diuretics; 2. Carbonic anhydrase inhibitors; 3. Loop diuretics; 4. Thiazide diuretics; 5. Potassium-sparing diuretics.**" The **spatial** mapping of those numbers onto segments is **not** recoverable from the text layer; §1's grid was built from prose statements of site of action, not from the figure.
5. **Numbers deliberately not reproduced, per `focused` depth.** Pharmacokinetic tables are printed for **acetazolamide, furosemide, mannitol, spironolactone, triamterene, HCTZ,** and **metolazone;** only the four with a testable contrast were pulled up (furosemide's 6-hour duration and 5-minute IV onset, spironolactone's 1-to-3-day onset, triamterene's 2-to-3-hour onset). Dosage ranges are printed for all seven; only the **equipotent loop doses** and the **HCTZ 50 mg ceiling** were kept, because there the number *is* the fact. **Mannitol has no numeric range at all** — its entry reads only "**Dose varies widely depending on indication**" (p. 449), and nothing was supplied from memory. The **pediatric** (p. 450) and **older-adult** (p. 454) lifespan boxes and the patient-teaching card template are likewise below the depth line, not contradicted.
6. **Pregnancy categories are printed as given and are obsolete:** acetazolamide **(C)**, furosemide **(C)**, mannitol **(C)**, spironolactone **(D)**, triamterene **(D)**, HCTZ **(B)**, metolazone **(B)**. The FDA replaced the letter system with the Pregnancy and Lactation Labeling Rule in 2015; this 2023 edition still prints letters. Do not treat them as current labeling.
7. **This PDF is an uncorrected proof.** Errors quoted **as they appear,** not silently corrected:
   - "used to adjust drugs based on the patient's renal function, **based on manufacturers recommendations**" (p. 446) — missing possessive apostrophe, "based on" repeated inside one sentence.
   - "The equipotent doses of the drugs are listed at the **bottom the following table**" (p. 449) — missing "of."
   - "Potassium supplementation may be recommended by a prescriber **depending presenting symptoms by the patient** and serum levels" (p. 455) — words dropped; the sentence does not parse.
   - Review question 6, option f: "Please call your doctor immediately if you notice **muscle weakness or increased dizziness**" (p. 456) — closing quotation mark present, terminal period absent, unlike every other option in the set.
   - The running head reads "**PART 4** Drugs Affecting the Cardiovascular and Renal Systems," while the brief's digest-map regex reported a "PART 5" pattern. The printed page is authoritative: this chapter is in **Part 4.**
8. **Two-column bleed made several passages unusable until reconstructed.** Worst: the **potassium-sparing indications/interactions** pair on p. 451 (the sentence "One common feature of heart failure is a hyperactive renin-angiotensin-aldosterone system" interleaves with the lithium interaction from the adjacent column), the **loop contraindications** on p. 448, and every **dosage table,** rendered one word per line with the Indications column detached from its drug. The digest's "definitional sentences" list is composed almost entirely of these artifacts. All quotations above were re-assembled from single columns; none is a splice.
9. **The chapter is not internally consistent about thiazides and calcium.** The mechanism section names "specifically **hypokalemia and hypercalcemia**" (p. 452) and the adverse-effects section "elevated levels of **calcium,** lipids, glucose, and uric acid," but **Table 28.5's** Metabolic row lists only "**Hypokalemia, hyperglycemia, hyperuricemia, hypochloremic alkalosis**" — no calcium. The prose is the more specific source and was followed; the table's omission is noted, not reconciled.
10. **Terminology note:** the source uses "**patient**" throughout, already matching the house contract, so no substitution was needed. All quotations preserve the source's wording and punctuation unchanged, including the errors in item 7.
