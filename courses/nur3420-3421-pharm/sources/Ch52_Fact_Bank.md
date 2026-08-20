# Fact bank — Chapter 52: Antiemetic and Antinausea Drugs

**Source:** Lilley, Collins & Snyder, *Pharmacology and the Nursing Process*, 10th ed. (Elsevier, 2023), Part 9 (Drugs Affecting the Gastrointestinal System and Nutrition), Chapter 52, printed pp. 815–826.

**To regenerate the raw text:**

```bash
factbank build --course courses/nur3420-3421-pharm --chapter 52
```

Raw pull is 54,054 chars. `book.json` sets `offset: 22` (verified on printed p. 1), so every `p.` below is the book's **printed** page number, not the PDF page. Printed p. 815 is PDF page 837. Page boundaries were re-derived from this chapter's running heads and confirm the offset holds.

## Curation note

This is the curated, de-bled layer over `work/ch52_raw.txt`. The raw text is a two-column extraction and the columns interleave badly: Table 52.3 (mechanisms) and Table 52.4 (adverse effects) sit side by side and their rows alternate line by line, the anticholinergic profile runs into the pediatric-ipecac box mid-sentence, and every pharmacokinetics table is shredded into stray column headers. The generated digest's "definitional sentences" are pure bleed artifacts here and were used only as an index; every quotation was traced back to its own column and page-located against the running heads.

**Blueprint weight: 2 questions of 121 (1.7%), depth `focused`.** That is the smallest weight in the course, tied with Chapters 28 and 45, and this file is deliberately short. Reproduced in full: the **key-terms table**, the **class → receptor → site → signature adverse effect grid** (§1), and a trap note for every confusable pair. Compressed or omitted by choice: all pharmacokinetics tables, the nursing-process assessment and implementation narrative, the ginger herbal box, and most dosage ranges (GAPS 5, 6, 11).

The organizing spine is §1. Two items drawn from a seven-class chapter will almost certainly be built off that grid, because the grid is where the distractors come from: swap the receptor, swap the site, or swap the signature adverse effect, and you have three wrong options and one right one.

## Chapter outline

| Section | p. |
|---|---|
| Objectives; **KEY TERMS** (5); drug profile index; **HIGH-ALERT: promethazine**; Nausea and Vomiting overview | 815 |
| Pediatric ipecac box; **Table 52.1** neurotransmitters and sites; seven categories; anticholinergics; antihistamines; antidopaminergics; neurokinin blockers | 816 |
| **Fig. 52.1** pathways; **Table 52.2** categories, drugs, indications; **Fig. 52.2** sites of action; prokinetics; serotonin blockers | 817 |
| **Table 52.3** mechanisms; **Table 52.4** adverse effects; tetrahydrocannabinoids; indications; contraindications | 818 |
| Interactions; dosages table; drug profiles begin; **scopolamine** | 819 |
| Antihistamines (meclizine, dimenhydrinate, diphenhydramine, hydroxyzine); droperidol; amisulpride; **prochlorperazine**; **promethazine** | 820 |
| **aprepitant**; Akynzeo; rolapitant; **metoclopramide**; serotonin blockers; **ondansetron** | 821 |
| **dronabinol**; **phosphorated carbohydrate solution**; assessment; **Safety box: Right Route Is Essential** | 822 |
| Assessment by class; ginger box; **case study**; human need statements; planning; implementation | 823 |
| Implementation; evaluation; **patient teaching**; key points | 824 |
| Key points; **critical thinking exercises**; **review questions 1–8** | 825 |
| Evolve website; references | 826 |

---

## Key terms

All 5 terms from the chapter's KEY TERMS box, quoted as given (p. 815).

| Term | p. | Definition as given |
|---|---|---|
| **Antiemetic drugs** | 815 | "Drugs given to **relieve nausea and vomiting.**" |
| **Chemoreceptor trigger zone (CTZ)** | 815 | "The area of the brain that is involved in the **sensation of nausea** and the **action of vomiting.**" |
| **Emesis** | 815 | "The **forcible emptying or expulsion of gastric and, occasionally, intestinal contents through the mouth;** also called **vomiting.**" |
| **Nausea** | 815 | "**Sensation often leading to the urge to vomit.**" |
| **Vomiting center** | 815 | "The area of the brain that is involved in **stimulating the physiologic events that lead to nausea and vomiting.**" |

> **Trap (confusable pair).** **CTZ vs. vomiting center.** The key-term box will not separate them — both read "the area of the brain that is involved in..." Use the body text: "**Neurotransmitter signals are sent to the vomiting center from the chemoreceptor trigger zone (CTZ),**" and the VC is "responsible for **initiating** the physiologic events" (p. 815). Cue: *the **CTZ senses and signals**; the **VC**, in the **medulla**, **initiates**. Signals run CTZ → VC, never the reverse.*

> **Trap (confusable pair).** **Nausea vs. emesis.** *Nausea is the **feeling**; emesis is the **event**.* Only emesis requires "forcible emptying or expulsion." The chapter defines nausea twice, not identically: "**urge** to vomit" (key terms) and "an **unpleasant feeling that often precedes vomiting**" (body text), both p. 815. An **antiemetic** is defined against both — "to relieve **nausea and vomiting**," not vomiting alone.

---

## §1. The grid: class → receptor blocked → site → signature adverse effect

There are **seven categories** of antiemetic. The chapter says so twice: "seven categories of such drugs" (p. 816), "seven major classes of antiemetic drugs" (p. 819).

| Class (Table 52.2) | Receptor blocked (Table 52.3) | Site | Prototype(s) | Signature adverse effects (Table 52.4) |
|---|---|---|---|---|
| **Anticholinergics** | "Block **ACh** receptors in the **vestibular nuclei and reticular formation**" | Vestibular nuclei + reticular formation | **scopolamine** | **Dry mouth, blurred vision, dilated pupils,** difficult urination, constipation, tachycardia, dizziness/drowsiness/disorientation, rash |
| **Antihistamines** (H<sub>1</sub>) | "Block **H<sub>1</sub>** receptors, thereby **preventing ACh from binding** to receptors in the vestibular nuclei" | Vestibular + reticular | **meclizine,** dimenhydrinate, diphenhydramine | **Dizziness, drowsiness, confusion;** blurred vision, dilated pupils, dry mouth; **urinary retention** |
| **Antidopaminergics** | "Block **dopamine** in the **CTZ** and may also **block ACh**" | CTZ | **prochlorperazine, promethazine,** droperidol | **Extrapyramidal symptoms, tardive dyskinesia,** headache; **orthostatic hypotension,** tachycardia |
| **Neurokinin antagonists** | "Inhibit the **substance P–neurokinin** receptors" | **Brain stem** | **aprepitant,** fosaprepitant, rolapitant | **Hypotension, bradycardia;** fatigue, dizziness; diarrhea, dyspepsia, abdominal pain, gastritis |
| **Prokinetics** | "Block **dopamine** in the **CTZ or stimulate ACh receptors in the GI tract**" | CTZ **+ GI tract** | **metoclopramide** | Sedation, fatigue, restlessness, headache, **dystonia;** hypotension, supraventricular tachycardia |
| **Serotonin blockers** (5-HT<sub>3</sub>) | "Block **serotonin** receptors in the **GI tract, CTZ, and VC**" | **All three** | **ondansetron,** granisetron, dolasetron, palonosetron | **Headache;** diarrhea; rash, bronchospasm, **prolonged QT interval** |
| **Tetrahydrocannabinoids** | "Have **inhibitory effects** on the **reticular formation, thalamus, and cerebral cortex**" | Reticular formation, thalamus, cortex | **dronabinol** | Drowsiness, dizziness, anxiety, confusion, **euphoria;** visual disturbances; dry mouth |

**Indications (Table 52.2, p. 817), quoted:** anticholinergics — "**motion sickness,** secretion reduction before surgery, nausea and vomiting"; antihistamines — "**motion sickness,** nonproductive cough, sedation, rhinitis, allergy symptoms, nausea and vomiting"; antidopaminergics — "psychotic disorders (mania, schizophrenia, anxiety), **intractable hiccups,** nausea and vomiting"; neurokinin antagonists — "**acute and delayed** vomiting associated with chemotherapy"; prokinetics — "**delayed gastric emptying, gastroesophageal reflux,** nausea and vomiting"; serotonin blockers — "nausea and vomiting associated with **chemotherapy, postoperative** nausea and vomiting"; tetrahydrocannabinoids — "nausea and vomiting associated with chemotherapy, **anorexia associated with weight loss in patients with AIDS and cancer.**"

**Table 52.1, Neurotransmitters Involved in Nausea and Vomiting (p. 816)** — the receptor-to-site key the grid rests on:

| Neurotransmitter (receptor) | Site in the vomiting pathway |
|---|---|
| Acetylcholine (ACh) | "VC in brain; **vestibular and labyrinthine pathways in inner ear**" |
| Dopamine (D<sub>2</sub>) | "**GI tract and CTZ** in brain" |
| Histamine (H<sub>1</sub>) | "VC in brain; **vestibular and labyrinthine pathways in inner ear**" |
| **Prostaglandins** | "**GI tract**" |
| Serotonin (5-HT<sub>3</sub>) | "GI tract; **chemoreceptor trigger zone and VC** in brain" |
| Substance P (neurokinin 1) | "**Brain stem**" |

> **Trap (SATA, five options mapped to categories).** **Six neurotransmitters, five drug classes.** **Prostaglandins** are in the vomiting pathway (GI tract) but have **no blocking antiemetic** in Table 52.2 or 52.3. The five that map: **ACh → anticholinergics; H<sub>1</sub> → antihistamines; dopamine → antidopaminergics *and* prokinetics; 5-HT<sub>3</sub> → serotonin blockers; substance P/NK<sub>1</sub> → neurokinin antagonists.** Tetrahydrocannabinoids map to **no receptor in this table** — anatomic site only.

> **Trap (SATA, five options mapped to categories).** **"Seven categories" excludes drugs the chapter still tells you to use.** Glucocorticoids (**dexamethasone,** Ch 33), anxiolytics (**lorazepam,** Ch 16), and phosphorated carbohydrate solution (filed as "Miscellaneous") are all outside the seven, yet dexamethasone and lorazepam are drawn into Fig. 52.2 at the cortex beside THC. Cue: *how many **categories** → **seven**; which drugs are **used** for chemotherapy nausea → dexamethasone and lorazepam belong on the list.*

> **Trap (confusable pair).** **Anticholinergics vs. antihistamines — same destination, different door.** Table 52.1 gives ACh and H<sub>1</sub> the **identical site** entry, and antihistamines "also have **potent anticholinergic activity**" (p. 816), so the dry-mouth/blurred-vision set appears under **both** classes in Table 52.4 and cannot discriminate. Cue: *anticholinergics **block ACh directly**; antihistamines **block H<sub>1</sub>,** "thereby preventing ACh from binding."*

> **Trap (confusable pair).** **H<sub>1</sub> vs. H<sub>2</sub> blockers.** The chapter issues this one itself: "these drugs are **not to be confused with histamine 2 [H<sub>2</sub>] receptor blockers, used for gastric acid control** (see Chapter 50)" (p. 816). Cue: *H<sub>1</sub> = **vestibular**, motion sickness, allergy, sedation; H<sub>2</sub> = **parietal cell**, gastric acid.* Both are "histamine blockers"; only H<sub>1</sub> is an antiemetic.

> **Trap (confusable pair).** **Antidopaminergics vs. prokinetics — both block dopamine in the CTZ,** and the key points say so outright (p. 824). Discriminator is what prokinetics add: "Their **primary action, however, is to stimulate peristalsis** in the GI tract... **emptying of stomach contents into the duodenum**" (p. 817). Cue: *stem says **gastric emptying, reflux, motility** → **prokinetic**; **psychosis, hiccups, injectable hospital antiemetic** → **antidopaminergic**.* Table 52.3's prokinetic row is also the only line in the chapter where a class **stimulates** rather than blocks.

> **Trap (plausible-but-adjacent).** **Only serotonin blockers hit all three sites** — GI tract, CTZ, **and** vomiting center (pp. 818, 821). Prokinetics reach two; everything else, one. Fig. 52.2 puts **only serotonin blockers** at the VC, so a distractor naming anticholinergics there is borrowing Table 52.1's "VC in brain" entry for **ACh** — where the *neurotransmitter* acts, not where the *drug* was placed.

> **Trap (plausible-but-adjacent).** **Table 52.4 lists "nausea and vomiting" as an adverse effect of antiemetics,** in the GI rows of both the **antidopaminergics** and the **prokinetics** (p. 818). Printed as given, not a transcription error. An option saying an antiemetic can cause nausea is true, not a trick.

---

## §2. Drug by drug: only what discriminates

| Drug | Class | The discriminating fact |
|---|---|---|
| **scopolamine** (Transderm-Scōp) | Anticholinergic | "The **primary anticholinergic drug** used as an antiemetic" (p. 819); corrects "an **imbalance between... ACh and norepinephrine**" (p. 820). **72-hour transdermal patch releasing a total of 1 mg.** Also postoperative nausea. **Contraindicated in glaucoma.** |
| **meclizine** (Antivert) | Antihistamine | Treats "the **dizziness, vertigo,** and nausea and vomiting associated with motion sickness" (p. 820). **Oral only.** Contraindications: **shock and lactation.** |
| **hydroxyzine** (Vistaril) | Antihistamine | Oral and IM only. "Hydroxyzine must **never** be given by the intravenous route" (p. 820). |
| **prochlorperazine** (Compazine) | Phenothiazine antidopaminergic | "Especially in the **injectable** form, is used **frequently in the hospital setting**" (p. 820). Contraindicated in **phenothiazine hypersensitivity, coma, seizures, encephalopathy, bone marrow suppression.** |
| **promethazine** (Phenergan) | Phenothiazine antidopaminergic | **HIGH-ALERT DRUG** (p. 815). Preferred route **oral or IM.** **Sedation is the most common adverse effect** and "actually may be beneficial." **Contraindicated under age 2.** |
| **aprepitant** (Emend) | Neurokinin antagonist | "In contrast to other antiemetics, this drug has **little affinity for serotonin (5-HT<sub>3</sub>) and dopamine receptors**" (p. 821). For **highly emetogenic** chemotherapy "including **high-dose cisplatin,**" and postoperative nausea. **Major CYP-450 inhibitor. Fosaprepitant is the IV form.** |
| **metoclopramide** (Reglan) | Prokinetic | "The **only** prokinetic drug that is also used to prevent nausea and vomiting" (p. 821). Contraindicated in **seizure disorder, pheochromocytoma, breast cancer, GI obstruction,** or hypersensitivity to it or to **procaine or procainamide.** |
| **ondansetron** (Zofran) | Serotonin blocker | "The **prototypical** drug in this class" (p. 821), approved **1992.** Also treats **hyperemesis gravidarum.** Only contraindication: **known drug allergy.** |
| **dronabinol** (Marinol) | Tetrahydrocannabinoid | "The **only** commercially available tetrahydrocannabinoid" (p. 822); synthetic THC derivative, approved **1985.** "Generally used as a **second-line drug after treatment with other antiemetics has failed.**" Also **stimulates appetite and weight gain** in AIDS and cancer. **Oral only.** |
| **phosphorated carbohydrate solution** (Emetrol) | Miscellaneous | "**Direct local action on the walls of the GI tract,** where it **reduces cramping**" (p. 822). **Mild nausea only** — "not sufficient for... **cancer chemotherapy.**" Unlabeled use: **morning sickness.** |

> **Trap (confusable pair).** **prochlorperazine vs. promethazine.** The chapter flags it: "**prochlorperazine may be confused with promethazine**... to prevent **sound-alike medication errors**" (p. 823). Both are phenothiazine antidopaminergics, both category C. Cue: *promethazine is the **HIGH-ALERT** drug with the **intraarterial amputation** warning and the **under-2 contraindication**; prochlorperazine is the one contraindicated in **coma, seizures, encephalopathy, bone marrow suppression**.*

> **Trap (confusable pair).** **scopolamine vs. meclizine for motion sickness.** Both treat motion sickness, both are contraindicated in **narrow-angle glaucoma** (p. 822), both sedate. Cue: *stem says **patch behind the ear** or **travel/cruise** → **scopolamine**; stem says **vertigo** → **meclizine**.* Review question 2 turns on exactly that: meclizine is the only option carrying a separate "Treatment of **vertigo**" indication (p. 819).

> **Trap (confusable pair).** **ondansetron vs. dronabinol — first line vs. second line.** Indication cannot separate them; **sequence** can. Dronabinol "is generally used as a **second-line drug after treatment with other antiemetics has failed**" (p. 822), and the case study models it — dronabinol only after 2 weeks of failed ondansetron. Cue: *a **first** round of chemotherapy points to the serotonin blocker.*

> **Trap (confusable pair).** **Emetrol vs. a real chemotherapy antiemetic** (review question 5). Key sentence: Emetrol "is **not sufficient** for treatment of more severe nausea symptoms such as those associated with **cancer chemotherapy**" (p. 822, repeated p. 824). Cue: *Emetrol = **mild** nausea, **local** GI action, **no CNS receptor blockade at all**.* A distractor reading "used **only** after other drugs have not worked" describes **dronabinol**; one reading "used **only** for severe chemotherapy nausea" inverts the fact.

> **Trap (plausible-but-adjacent).** **aprepitant is the one antiemetic that blocks neither serotonin nor dopamine** (p. 821). Its value is that it **adds a pathway**: neurokinin blockers "are used **in conjunction with** serotonin blockers and glucocorticoids" and their use "**augments**" them (p. 816). An option offering aprepitant as an *alternative* to ondansetron misses that it is a **combination partner.**

---

## §3. Timing: the most testable numbers here

Antiemetics are **prophylactic** drugs, and every class has its own clock.

| Situation | Timing as printed | p. |
|---|---|---|
| Scopolamine patch, motion sickness | "Apply 1 patch to hairless area behind 1 ear **q 3 days** (starting **at least 4 hr before travel**)"; left in place **72 hours** | 819, 824 |
| Meclizine, motion sickness | "25–50 mg **1 hr before travel** and repeated daily during travel" | 819 |
| Serotonin blockers, **postoperative** | "approximately **30 minutes before the end of the surgical procedure**" | 821, 824 |
| Serotonin blockers, **chemotherapy** | "**30 to 60 minutes before the start of chemotherapy**" | 821, 824 |
| Antiemetics generally, chemotherapy | "**30 to 60 minutes before** a chemotherapy drug is administered... they may **also be given during** the chemotherapy treatment" | 824 |
| **Dronabinol** | "**1 to 3 hours before** antineoplastic therapy"; relief within approximately **15 minutes** of oral administration | 824 |
| Metoclopramide, oral | "**30 minutes before meals and at bedtime**" | 824 |
| Aprepitant | "**125 mg on day 1,** then **80 mg/day**" | 819, 823 |
| Ondansetron IV push | "up to **8 mg**... over **2 to 5 minutes**"; infusions over **15 minutes** | 821, 824 |
| Diphenhydramine IV, undiluted | "**25 mg/min**" | 823 |

> **Trap (level/stage swap).** **"Before the start of chemotherapy" vs. "before the end of surgery."** Same class, same drug, opposite anchors, numbers close enough to swap cleanly. Cue: *chemo is prevented at the **front end**; surgical nausea at the **back end,** so the drug is on board as the patient wakes.* The distractor form is "30 minutes before the **beginning** of the surgical procedure."

> **Trap (priority question).** **When do you give an antiemetic for chemotherapy?** Review question 3 offers 4 hours before, 30–60 minutes before, at the same time, and **at the first sign of nausea.** Default principle: **prophylaxis, not rescue** (p. 824; Ch 45, p. 720 calls premedication 30–60 minutes before "the **preferred**" approach). Cue: *"at the first sign of nausea" is wrong in a chemotherapy stem — the CTZ has already fired.* Override: a **breakthrough** stem, since antiemetics "may also be given **during** the chemotherapy treatment."

> **Trap (level/stage swap).** **Acute vs. delayed chemotherapy-induced emesis.** Neurokinin blockers cover "**acute and delayed** vomiting" (p. 817) and "inhibit **acute and delayed phases**" of chemotherapy-induced emesis (p. 816). Cue: *stem specifies the **delayed** phase → the neurokinin antagonist is in the answer.* The chapter never defines the boundary between phases (GAPS 4) — do not supply one.

> **Trap (plausible-but-adjacent).** **Scopolamine's "at least 4 hours" vs. "the day before"** (review question 1). The dosage table says "**starting at least 4 hr before travel**" (p. 819), making "the day before" sufficient but not the taught instruction. The other two distractors move the **site**: the patch goes **behind the ear** on a **hairless, cleansed, dried, nonirritated** area — not the **shoulder,** not the **temple.** Also taught: **rotate** sites, **wash hands** before and after, and if dislodged, "the **residual drug must be washed off** and a **fresh patch** put in place" (p. 824).

---

## §4. Safety rules that carry patient-harm weight

**promethazine is the chapter's only HIGH-ALERT drug** (p. 815). Rules (pp. 820, 822):

- Preferred route **oral or IM**. "The intravenous route is **not the preferred route** but is commonly used."
- "If promethazine is inadvertently given **intraarterially** instead of intravenously, **severe tissue damage, often requiring amputation, can occur.**"
- IV: "best diluted in **at least 10 mL** of fluid (**the more dilute, the better**) and given in a **running intravenous line at the port farthest from the patient's vein** or through a **large-bore vein (not hand or wrist vein).**"
- "Therapy must be **discontinued immediately** if **burning or pain** occurs." "It is **not to be given subcutaneously.**"

**hydroxyzine (Vistaril)** is the other half of the Safety and Quality Improvement box "**Right Route Is Essential**" (p. 822): oral or IM **only**, and "**intravenous, intraarterial, or subcutaneous** administration of hydroxyzine can result in significant **tissue damage, thrombosis, and gangrene.**"

> **Trap (confusable pair).** **hydroxyzine vs. promethazine route rules** — the box's two examples, one word apart in severity. Cue: *hydroxyzine, IV **never**; promethazine, IV **allowed but not preferred**.* Both punish **intraarterial** injection; hydroxyzine's named endpoint is **gangrene,** promethazine's is **amputation.**

| Drug | Warning | Year | p. |
|---|---|---|---|
| **droperidol** | FDA "called for a **black box warning** and required **continuous electrocardiographic monitoring**" over **QT widening and possible ventricular dysrhythmias.** Some institutions "still use" it, others have "**banned**" it. | not dated | 820 |
| **metoclopramide** | FDA "**public health advisory** regarding the potential for the development of **tardive dyskinesia** with **long-term use**" | **2009** | 821 |
| **dolasetron** | FDA warning re **cardiac dysrhythmias due to widening of the QT interval.** "The FDA **no longer recommends dolasetron** to be used for chemotherapy-induced nausea and vomiting." | **2010** | 821 |
| **ondansetron** | "the FDA added the **same warning**" (QT); separately, **cleft palate** concern with **first-trimester** use | **2011** | 821 |
| **syrup of ipecac** | AAP "**strongly advised against**" it. "There remains **no indication for use of syrup of ipecac in any setting** including health care settings." | **2003** | 816 |

> **Trap (setting vs. focus).** **Ipecac.** The pediatric box shifts the axis from *is it effective* to *where is it allowed,* and the answer is **nowhere**: "no indication... in **any setting including health care settings**" (p. 816). A distractor limiting the ban to the **home** is quoting the AAP's 2003 wording ("no longer be used as a **home treatment**") and stopping one sentence early. Taught action for poisoning: **national poison control hotline, 800-222-1222** — unless "the victim has **collapsed or stopped breathing,** call **911**."

> **Trap (confusable pair).** **Extrapyramidal symptoms vs. tardive dyskinesia.** Table 52.4 lists **both** under antidopaminergic CNS effects, and metoclopramide carries both. Cue: *EPS is what you **assess at baseline, monitor throughout,** and **report immediately**; **tardive dyskinesia** is the **long-term-use** problem, "an **involuntary neurologic movement**" (p. 824).* The chapter also names the stacking error: never give metoclopramide with "**phenothiazines, that would lead to the exacerbation of extrapyramidal reactions**" (p. 824) — i.e. not with prochlorperazine or promethazine.

> **Trap (level/stage swap).** **Two pediatric cutoffs, both at 2 years, different strength.** **Promethazine** is "**contraindicated** in children younger than 2 years of age" (p. 820); **granisetron's** "use **has not been established** in those younger than 2 years of age" (p. 823). *Contraindicated* is a prohibition; *not established* is an absence of evidence. Separately, antihistamines risk "severe **paradoxical reactions**" in **pediatric** patients, while **older adults** "may develop **agitation, mental confusion, hypotension, and even psychotic-type reactions**" (p. 822).

---

## §5. Contraindications and interactions

**"The primary contraindication for all antiemetics is known drug allergy"** (p. 818). For **ondansetron, dronabinol, and phosphorated carbohydrate solution** that is the *only* listed contraindication.

Interactions, quoted (pp. 818–819):

- **Anticholinergics:** additive **drying** effects with **antihistamines and antidepressants.**
- **Antihistamine antiemetics:** increased CNS depression with "**barbiturates, opioids, hypnotics, tricyclic antidepressants, or alcohol.**"
- **Antidopaminergics:** increased CNS depression with "**alcohol or other CNS depressants.**"
- **Metoclopramide:** with **alcohol,** "additive CNS depression"; and "**Anticholinergics and analgesics can block the motility effects of metoclopramide.**"
- **Neurokinin antagonists (aprepitant, fosaprepitant, rolapitant):** "may **induce the metabolism of warfarin**" (INR "must be checked **before each cycle**") and "may **reduce the effectiveness of oral contraceptives.**" Aprepitant is a **major** and rolapitant a **moderate** inhibitor of cytochrome P-450, so caution with **CYP3A4** substrates: "**azole antifungals, clarithromycin, diltiazem, nicardipine, protease inhibitors, and verapamil.**" It "may increase the **bioavailability of corticosteroids,** including **dexamethasone and methylprednisolone,** and dosages of these drugs **may need to be adjusted by 25% to 50%.**"
- **Serotonin blockers and THC:** "have **no significant drug interactions.**"

> **Trap (SATA, five options mapped to categories).** **Aprepitant interactions** (review question 8: digoxin, warfarin, oral contraceptives, NSAIDs, corticosteroids). The chapter names **warfarin, oral contraceptives, and corticosteroids** three separate times (pp. 818, 821, 823). **Digoxin and NSAIDs appear nowhere in this chapter's interaction text.** All-or-nothing scoring makes the two absent options the whole item.

> **Trap (confusable pair).** **Which classes have no significant interactions.** Exactly two: **serotonin blockers** and **THC** (p. 819), and the serotonin-blocker profile repeats it — "very specific actions... **very few adverse effects. No significant drug interactions are known to occur**" (p. 821). That sits directly beside **aprepitant,** the most interaction-heavy drug here. Cue: *the class that revolutionized chemotherapy antiemesis is the **cleanest**; the class that augments it is the **dirtiest**.* An option pairing ondansetron with a CYP interaction is borrowing aprepitant's paragraph.

> **Trap (confusable pair).** **Narrow-angle glaucoma cuts across two classes.** Scopolamine "is **contraindicated in patients with glaucoma**" (p. 819), and the nursing process **extends** it: "**The same concern regarding use in patients with narrow-angle glaucoma applies to antihistamines (e.g., meclizine)**" (p. 822). Cue: *glaucoma rules out **both** motion-sickness options,* and the taught action is that "**another antiemetic or antinausea drug must be prescribed.**" Note the chapter's own inconsistency: **glaucoma** unqualified at p. 819, **narrow-angle** at p. 822.

> **Trap (plausible-but-adjacent).** **Anticholinergics *block* metoclopramide.** "Anticholinergics and analgesics can **block the motility effects of metoclopramide**" (p. 819); its action "is **decreased** when it is taken with **anticholinergics or opiates**" (p. 823). This is the only interaction in the chapter that **reduces** an antiemetic's effect rather than compounding a toxicity, and it is clinically likely, because opioid patients are exactly the ones getting antiemetics. An option calling this pair "additive CNS depression" is substituting the more common interaction type.

> **Trap (SATA, five options mapped to categories).** **Prokinetic indications** (review question 4: motion sickness, vertigo, GERD, delayed gastric emptying, GI obstruction). Table 52.2 gives prokinetics exactly "**delayed gastric emptying, gastroesophageal reflux,** nausea and vomiting" (p. 817). **Motion sickness and vertigo belong to the anticholinergics and antihistamines,** and **GI obstruction is a contraindication to metoclopramide,** not an indication (p. 821) — the fifth option inverts a contraindication, the sharpest form this tactic takes.

> **Trap (SATA, five options mapped to categories).** **Dronabinol** (review question 6). Maps to: **chemotherapy nausea and vomiting** (yes, p. 822); **hyperemesis gravidarum** (no — that is **ondansetron,** p. 821); **appetite stimulation** in cancer/AIDS wasting (yes, pp. 818, 822); **extrapyramidal symptoms** (no — EPS belongs to the **antidopaminergics and prokinetics** in Table 52.4; dronabinol's CNS row is drowsiness, dizziness, anxiety, confusion, euphoria); **drowsiness or euphoria** (yes). Both false options are borrowed from a **neighboring drug's** profile.

---

## Cross-references

- **Chapter 21 (Cholinergic-Blocking Drugs)** for the anticholinergics and **Chapter 36** for the H<sub>1</sub> blockers (p. 816); **Chapter 9** for rectal suppository technique, left side, held several minutes (p. 823); **Chapter 57 (Ophthalmic Drugs)** for scopolamine's ocular form (p. 819).
- **Chapter 50 (Acid-Controlling Drugs)** for the **H<sub>2</sub> blockers** this chapter warns against confusing with H<sub>1</sub> blockers (p. 816). Course note: the exam blueprint document mislabels its Acid-Controlling Drugs row "Chapter 52"; that row is **Chapter 50**, worth **6 questions.** This chapter is the real 52, worth **2.** See GAPS 1.
- **Chapter 16 (Psychotherapeutic Drugs)** twice: the antipsychotic use of the antidopaminergics (p. 816), and **lorazepam,** which "is often used in the treatment and prevention of chemotherapy-induced nausea and vomiting" and "helps to **blunt the memory** of the nausea and vomiting experience (especially with cancer chemotherapy)" (p. 819).
- **Chapter 33 (Adrenal Drugs)** for **dexamethasone:** "Glucocorticoids (i.e., dexamethasone) are **often used** for chemotherapy-induced nausea and vomiting and are discussed in Chapter 33" (p. 816).
- **Chapter 10 (Analgesic Drugs) — loop closed both ways.** Chapter 10 defers here explicitly ("**Antiemetics (see Chapter 52)**...", Ch 10, p. 142) and its opioid adverse-effects box says opioids "**stimulate the vomiting center in the CNS,** so nausea and vomiting are often experienced... Nausea and vomiting may be managed with the use of **antiemetics such as phenothiazines**" (Ch 10, p. 142). The phenothiazines it means are **prochlorperazine and promethazine** here. Four pages later Chapter 10 gives a **second, different** locus: "Opioids can irritate the GI tract, **stimulating the chemoreceptor trigger zone in the CNS**" (Ch 10, p. 146).
  > **Trap (confusable pair, across chapters).** **Chapter 10 names both the vomiting center and the CTZ as the opioid target, in the same chapter.** Neither is wrong under Chapter 52's model, since the CTZ signals the VC, but a stem quoting one and offering the other as a distractor exploits the book's own inconsistency. Cue: *the CTZ version is tied to **GI irritation**; the VC version to the **CNS** directly.*
- **Chapter 45 (Antineoplastic Drugs Part 1)** is the demand side: "Many antineoplastic drugs cause nausea and vomiting by **stimulating the cells of the chemoreceptor trigger zone.** Several antiemetic drugs... are described in **Chapter 52**" (Ch 45, p. 706). **Box 45.1**, "**Relative Emetic Potential of Selected Antineoplastic Drugs**" (Ch 45, p. 707), is where "**highly emetogenic**" in this chapter's aprepitant profile and critical thinking exercise 1 is quantified. Chapter 45 names the drugs back and adds that "**Combination antiemetic drug therapy may be more effective than single-drug therapy**" (Ch 45, p. 720) — this chapter's own claim that combining categories works "because **more than one pathway becomes blocked**" (p. 816).
- **Chapter 10, Table 10.8** for **cannabinoids** — read the table's title first. It is "**Drugs Not Recommended for Treatment of Cancer Pain**" (Ch 10, p. 160), and cannabinoids are listed as a drug to **avoid for pain** ("Adverse effects of **dysphoria, drowsiness, hypotension, and bradycardia**"); the clause "may be indicated for use in treating **severe chemotherapy-induced nausea and vomiting**" is the table's *concession,* not its recommendation.
  > **Trap (plausible-but-adjacent, across chapters).** **Cannabinoids: right drug, wrong problem.** An option offering dronabinol as an adjuvant analgesic for cancer pain is quoting the very table that forbids it. Cue: *cannabinoids in oncology are for **nausea,** not **pain** — and even for nausea, Chapter 52 makes them **second line**.* The hypotension in Table 10.8's reason column is the same fact as this chapter's key point that dronabinol "is associated with **postural hypotension**" (p. 825).

---

## GAPS (flagged, not filled)

1. **The blueprint gives a weight but no topics, and it mislabels a neighboring row.** `blueprint.json` sets this chapter at **2 questions (depth `focused`)**, derived from `blueprint_source.docx`, which has **no required-topic column** — so the brief's topic checklist is empty and the validator's required-topic check passes vacuously. Section emphasis is my judgment; only the depth is the exam's. That document also labels its 6-question **Acid-Controlling Drugs** row "**Chapter 52**," which is wrong — Acid-Controlling Drugs is **Chapter 50**. **Two chapters were competing for the label "52,"** and a plan built off the uncorrected blueprint would have spent 6 questions of effort on the wrong one.
2. **Fig. 52.1 and Fig. 52.2 survive the extraction only as label lists.** Recoverable: Fig. 52.1 shows **labyrinth, GI tract, and cerebral cortex** feeding the **CTZ,** and the CTZ feeding the **vomiting center (medulla)**. Fig. 52.2 — **labyrinth:** anticholinergics, antihistamines, antidopaminergics, prokinetics; **GI tract:** prokinetics, serotonin blockers; **cortex:** THC, corticosteroids, benzodiazepines; **CTZ:** antidopaminergics, prokinetics, serotonin blockers; **VC:** serotonin blockers (both p. 817). **Arrows, spatial relationships, and image-rendered labels are lost.**
3. **Fig. 52.2 and Table 52.3 do not agree, and the chapter does not reconcile them.** Table 52.3 places anticholinergics at the **vestibular nuclei and reticular formation**; Fig. 52.2 places them at the **labyrinth** only, also places **antidopaminergics at the labyrinth** (unsupported by any text), and adds **corticosteroids and benzodiazepines,** which are not among the seven categories. Both reported as printed; neither harmonized from memory.
4. **The acute/delayed distinction is named but never defined** (pp. 816, 817). **No time boundary, no hour count, and no mechanism for the delayed phase** appears anywhere in the chapter. Not filled.
5. **Pharmacokinetics tables are omitted by choice, not absence.** Onset, peak, half-life, and duration are printed for **scopolamine, meclizine, prochlorperazine, promethazine, aprepitant, metoclopramide, ondansetron, and dronabinol** (pp. 820–822). The two load-bearing values (scopolamine's **72-hour** duration, dronabinol's **15-minute** onset of relief) are quoted in §3 from body text instead.
6. **Dosage ranges appear only where the dose is itself the fact.** The "Selected Antiemetic and Antinausea Drugs" table (p. 819) has a full "Usual Adult Dosage Range" column that is not transcribed. **Review question 7 needs one of the omitted numbers:** promethazine 12.5 mg IM from **25-mg/mL** vials → 12.5 ÷ 25 = **0.5 mL.** That is my computation, not the printed key.
7. **Pregnancy categories are printed as given and are obsolete.** Scopolamine (C), meclizine (B), prochlorperazine (C), promethazine (C), aprepitant (B), metoclopramide (B), ondansetron (B), dronabinol (C), and all serotonin blockers "**pregnancy category B**" (p. 821). The FDA replaced the letter system with the **Pregnancy and Lactation Labeling Rule in 2015**; this 2023 edition still prints letters. The chapter shows why the letter is not the answer: ondansetron is **category B** yet carries a **cleft palate** concern in the first trimester.
8. **This PDF is an uncorrected proof.** Quoted as printed, not corrected:
   - **The dosage table (p. 819) has no "Neurokinin antagonists" subheading,** so **aprepitant** falls inside the **"Antidopaminergics"** block right after promethazine, despite its own class cell reading "Substance P–neurokinin inhibitor." Print omission or extraction loss is not determinable from the text layer; the classification implied by the layout is **wrong** either way.
   - "Drug (Pregnancy Category)**Pharmacologic Class**" (p. 819), missing space in the table header.
   - "**capillary refill time (normal is less than 5 seconds)**" (p. 822), stated once in passing inside an assessment paragraph. Reported as printed; this chapter is not a source for capillary refill norms.
   - "Administer intramuscular forms into large muscles (e.g., **ventral, gluteal**)" (p. 823), where the site is almost certainly the **ventrogluteal**; the comma makes it read as two sites.
   - Chapter 45 spells ondansetron "**onadansetron**" (Ch 45, p. 720), quoted with *[sic]* above.
   - Subscripts are stripped throughout the extraction ("histamine 1 [H 1 ]", "5-HT 3", "D 2"). Those are **OCR artifacts, not printed errors,** and were restored to H<sub>1</sub>, 5-HT<sub>3</sub>, D<sub>2</sub>.
9. **Answers are not in the pull, and they live in two different places.** The **case study** (p. 823) and **critical thinking exercises** (p. 825) say "For answers, see **http://evolve.elsevier.com/Lilley**." The **review questions** (p. 825) say "For answers, see **Answers to Review Questions at the back of the book**," outside this chapter's page range and outside the pull. Everything above about review questions 1–8 and the two critical thinking exercises is **reasoning from the chapter's body text, not the official key.**
10. **Critical thinking exercise 1 is answered only obliquely.** A patient given a **highly emetogenic** drug has orders for **both ondansetron and prochlorperazine**; which is best and how (p. 825)? The chapter supports **ondansetron** — key points call granisetron and ondansetron "**most commonly used for the prevention of chemotherapy-induced nausea and vomiting**" (p. 825) — by IV push over **2 to 5 minutes,** dosed **30 to 60 minutes before** chemotherapy. **The chapter never states a head-to-head preference between those two drugs,** so that is inference.
11. **Nursing-process content is compressed at `focused` depth.** The assessment paragraphs by class (pp. 822–823), three **human need statements** and three **planning outcomes** (p. 823), the implementation narrative (pp. 823–824), the evaluation criteria (p. 824), and the **patient teaching box** (p. 824) are summarized only where they produced a trap. The **ginger (*Zingiber officinale*) herbal box** (p. 823) is omitted except for its testable content: ginger "**can increase the absorption of all oral medications**," may theoretically increase bleeding risk with **warfarin or clopidogrel,** may worsen **cholelithiasis,** and has **anecdotal abortifacient properties.**
12. **Two cross-references named in the task brief are not supported by the pulled text and are not claimed above.** **Chapter 38 (Antibiotics Part 1)** was searched in full for "antiemetic" and "antinausea": **zero occurrences.** It discusses antibiotic-induced nausea as an adverse effect but does not name antiemetics as the management and does not point here. **Chapter 44 (Antiinflammatory and Antigout Drugs) contains no antiemetic or cannabinoid material at all**; the cannabinoid table attributed to it is **Table 10.8 in Chapter 10,** and it is a *do-not-use* list for cancer pain rather than an adjuvant recommendation.
13. **Amisulpride, Akynzeo, and rolapitant are named once each with almost no detail.** "**Amisulpride (Barhemsys)** is a new atypical antipsychotic indicated for **postoperative nausea and vomiting**" (p. 820) — no mechanism, dose, or adverse effects. "**Akynzeo**... includes a 5-HT<sub>3</sub> (**palonosetron**) and a substance P inhibitor (**netupitant**)... for use with **highly emetogenic** chemotherapy regimens" (p. 821); netupitant appears nowhere else and is not in Table 52.2. **Rolapitant (Varubi)** is "the newest drug in this class" but has no drug profile; everything known about it comes from the interactions paragraph.
14. **Terminology note:** the source uses "**patient**" throughout, already matching the house contract, so no substitution was needed. All quotations preserve the source's wording and punctuation, including the items in GAPS 8.
