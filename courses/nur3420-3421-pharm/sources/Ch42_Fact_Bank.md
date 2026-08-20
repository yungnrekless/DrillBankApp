# Fact bank — Chapter 42: Antifungal Drugs

**Source:** Lilley, Collins & Snyder, *Pharmacology and the Nursing Process*, 10th ed. (Elsevier, 2023), Part 7 (Antiinfective and Antiinflammatory Drugs), Chapter 42, printed pp. 662–670.

**To regenerate the raw text:**

```bash
factbank build --course courses/nur3420-3421-pharm --chapter 42
```

(`factbank` is not on PATH in this workspace; run it as `python -m factbank.cli build ...` with cwd `factbank-tool/`.)

Raw pull is 42,010 chars. `book.json` sets `offset: 22`, so every `p.` below is the book's **printed** page number, not the PDF page. Printed p. 662 is PDF page 684. Page boundaries were re-derived from the running heads before writing and hold across the chapter: 662 / 663 / 664 / 665 / 666 / 667 / 668 / 669 / 670.

## Curation note

This is the curated, de-bled layer over `work/ch42_raw.txt`. The raw text is a **two-column scan** and it bleeds badly. The generated digest's "definitional sentences" for this chapter are almost all column-bleed wreckage (`Nystatin There — risk for severe adverse effects (e.`; `Ibrexafungerp — new drug in the class of triter- Route Action Concentration Half-Life of Action penoids`), so the digest was used **only as an index of character offsets** and every definition below was re-quoted from the raw text, with its column traced. The worst stretches are the OBJECTIVES block (p. 662), the amphotericin B / caspofungin profile pair (p. 666), and the KEY POINTS box (p. 669), where the columns alternate almost line by line.

**Blueprint weight: 7 questions of 121 (5.8%), depth `standard`.** The split is **6 items on Exam 1 and 1 on the Final** — a front-loaded chapter, heavier on Exam 1 than Chapter 39 (4) or Chapter 11 (4), and nearly absent from the Final. It ties Chapter 12 for fifth heaviest overall. `standard` depth means a full key-term table plus every testable block, without Chapter 38's exhaustive per-drug treatment.

Emphasis went where the chapter's own structure puts it: the **class-by-class mechanism map** (which classes hit the cell *membrane*, which hits the cell *wall*), the **six drug profiles** the chapter singles out, the **amphotericin B infusion-reaction protocol,** and the **azole/cytochrome P-450 interaction direction.** Those four blocks account for all eight review questions and both critical thinking exercises. The drug list is small, so the full dosage and pharmacokinetics tables are reproduced rather than omitted.

## Chapter outline

| Section | p. |
|---|---|
| Opener; **OBJECTIVES** (3); **KEY TERMS box** (9 terms); drug profile index; **FUNGAL INFECTIONS** (fungi, yeasts, molds, mycosis, the four types of mycotic infection, who gets systemic infections) | 662 |
| **Table 42.1** Mycotic Infections; oral and vaginal candidiasis; **ANTIFUNGAL DRUGS** overview; the four chemical classes; **Mechanism of Action** (flucytosine, griseofulvin) | 663 |
| Mechanism continued (polyenes, azoles, echinocandins); **Indications; Contraindications; Adverse Effects; Interactions;** **DRUG PROFILES:** amphotericin B | 664 |
| **Table 42.2** adverse effects and cautions by drug; **Table 42.3** drug interactions | 665 |
| amphotericin B continued (test dose, local irrigant); **caspofungin**; pharmacokinetics; **Dosages: Selected Antifungal Drugs** | 666 |
| **fluconazole; nystatin; terbinafine; voriconazole** profiles; **NURSING PROCESS: Assessment**; human need statements | 667 |
| **CASE STUDY** (amphotericin B, 4 questions); **Planning**; **Implementation** | 668 |
| **Evaluation; PATIENT TEACHING; KEY POINTS; CRITICAL THINKING EXERCISES** (2) | 669 |
| **REVIEW QUESTIONS** (8); Evolve website; references | 670 |

**Objectives, de-bled** (p. 662): "**1.** Identify the various antifungal drugs. **2.** Describe the mechanisms of action, indications, contraindications, routes of administration, adverse and toxic effects, and drug interactions for the various antifungal drugs. **3.** Develop a nursing care plan that includes all phases of the nursing process for patients receiving antifungal drugs."

**Drug profile index as printed** (p. 662): amphotericin B, p. 664; caspofungin, p. 666; fluconazole, p. 667; nystatin, p. 667; terbinafine, p. 667; voriconazole, p. 667. **Six profiles; the review questions touch four of them.**

---

## Key terms

All 9 terms from the KEY TERMS box, quoted as given (p. 662). The box is two columns: left runs Antimetabolite through Fungi, right runs Molds through Yeasts.

| Term | p. | Definition as given |
|---|---|---|
| **Antimetabolite** | 662 | "A drug that is **either a receptor antagonist or that resembles a normal human metabolite** and interferes with its function in the body, usually by **competing for the metabolite's usual receptors or enzymes.**" |
| **Dermatophyte** | 662 | "One of several fungi that are often found in **soil** and infect the **skin, nails, or hair** of humans." |
| **Ergosterol** | 662 | "The **main sterol in fungal membranes.**" |
| **Fungi** | 662 | "A very large, diverse group of **eukaryotic** microorganisms; consist of **yeasts and molds.**" |
| **Molds** | 662 | "**Multicellular** fungi characterized by **long, branching filaments called hyphae,** which entwine to form a complex branched structure known as a **mycelium.**" |
| **Mycosis** | 662 | "The **general term for any fungal infection.**" |
| **Pathologic fungi** | 662 | "Fungi that **cause mycoses.**" |
| **Sterols** | 662 | "Substances in the **cell membranes of fungi** to which **polyene** antifungal drugs bind." |
| **Yeasts** | 662 | "**Single-celled** fungi that reproduce by **budding.**" |

The body text gives a second, shorter definition of the same headword (p. 662): "**Mycosis is an infection caused by a fungus.**" It also expands *budding*: "in which a **daughter cell forms by pouching out of and breaking off from a mother cell.**"

> **Trap (confusable pair).** **Yeasts vs. molds.** Cue: ***yeast = single cell, reproduces by budding; mold = multicellular, long branching filaments (hyphae) forming a mycelium.*** The key points repeat this verbatim and add what the term box leaves out: yeasts "may be **harmful** (e.g., causing infections) or **helpful** (e.g., aiding in **baking or brewing beer**)" (p. 669). *Hyphae* and *mycelium* are defined **inside the Molds entry,** not as their own key terms, so they are easy to skim past.

> **Trap (confusable pair).** **Sterols vs. ergosterol.** Two key terms one word apart. Cue: ***sterols* = the general class of fungal cell-membrane substances the polyenes bind; *ergosterol* = specifically "the main sterol in fungal membranes."** The mechanism paragraph uses **ergosterol** for both classes: polyenes **bind** it, azoles **block its production.** An option saying azoles *bind* ergosterol has borrowed the polyene mechanism.

> **Trap (confusable pair).** **Mycosis vs. dermatophyte vs. dermatomycosis.** Cue: ***mycosis* = any fungal infection (umbrella); *dermatophyte* = the organism that infects skin, nails, or hair; *dermatomycosis* = the infection it causes.** The chapter states the chain outright (p. 662): "Fungi that cause integumentary infections are known as **dermatophytes,** and such infections are known as **dermatomycoses.**" *Pathologic fungi* is the broader organism term.

> **Trap (plausible-but-adjacent).** **The key terms box and the body text define *mycosis* differently, and both are correct.** Box: "the general term for **any fungal infection**"; body: "an infection **caused by a fungus.**" Same meaning, different wording — not two concepts.

> **Trap (confusable pair).** **Antimetabolite belongs to two chapters.** Here it names **flucytosine's** mechanism; the chapter immediately notes that flucytosine's active product, **5-FU, "is also available as an antineoplastic (anticancer) drug and is discussed in more detail in Chapter 45"** (p. 663). Same molecule, two drug classes.

---

## §1 Fungal infections: what they are and who gets them (pp. 662–663)

**The infection** (p. 662): "A variety of fungi can cause clinically significant infections or mycoses. These are called **pathologic fungi,** and the infections they cause range in severity from **mild infections with annoying symptoms (e.g., athlete's foot) to systemic mycoses that can become life threatening.**" Some fungi "are part of the **normal flora of the skin, mouth, intestines, and vagina.**"

**Routes of acquisition** (p. 662): "the fungi can be **ingested orally;** can **grow on or in the skin, hair, or nails;** and, if the fungal spores are **airborne, can be inhaled.**"

**The four types, quoted in full** (p. 662): "There are **four general types of mycotic infection: systemic, cutaneous, subcutaneous, and superficial.** The **latter three** are infections of **various layers of the integumentary system (skin, hair, or nails).**"

**Who gets the severe ones** (p. 662): "The **most severe systemic fungal infections generally affect people whose host immune defenses are compromised.** Commonly these are patients who have received **organ transplants and are taking immunosuppressive drug therapy, cancer patients who are immunocompromised as a result of their chemotherapy, and patients with acquired immunodeficiency syndrome (AIDS).** In addition, the use of **antibiotics, antineoplastics, or immunosuppressants such as corticosteroids** may result in **colonization of *Candida albicans,*** followed by the development of a systemic infection."

**Oral candidiasis** (p. 662): "When the infection affects the mouth, it is referred to as **oral candidiasis, or thrush,** and is common in **newborns and immunocompromised patients.**"

**Vaginal candidiasis** (p. 663): "**Vaginal candidiasis, commonly called a yeast infection,** often affects **pregnant women, women with diabetes mellitus, women taking antibiotics, and women taking oral contraceptives.**"

> **Trap (level/stage swap).** **Three of the four mycotic types are the skin; one is not.** The four type names are a ready-made option set. Cue: ***systemic is the odd one out; cutaneous, subcutaneous, and superficial are all layers of the integumentary system.*** The treatment consequence follows the same split: "**Systemic mycotic infections and some cutaneous or subcutaneous mycoses are treated with oral or parenteral drugs**" (p. 663), while superficial infections go topical.

> **Trap (confusable pair).** **Oral vs. vaginal candidiasis: two risk-factor lists for one organism.** Cue: ***oral/thrush = newborns and the immunocompromised; vaginal/yeast infection = pregnancy, diabetes mellitus, antibiotics, oral contraceptives.*** The lists overlap only in "antibiotics," and that is the crossing point a distractor exploits. Offering "diabetes mellitus" as the classic risk for **thrush in a newborn** has swapped the lists.

> **Trap (SATA, five options mapped to categories).** **Who is at risk for a severe systemic mycosis?** The chapter supplies a clean five-way set on p. 662: **organ transplant recipients on immunosuppressants; cancer patients on chemotherapy; patients with AIDS; patients on antibiotics; patients on corticosteroids.** What is *not* on the list is the healthy adult with athlete's foot, the chapter's example of the **mild** end.

> **Trap (plausible-but-adjacent).** **"Opportunistic" and "broad-spectrum" appear only in the key points, not the body.** The key points (p. 669) call candidiasis "an **opportunistic** fungal infection caused by *C. albicans*" occurring with "**broad-spectrum** antibiotics"; the body just says "antibiotics." A stem using either word is still pointing at candidiasis.

---

## §2 Table 42.1 Mycotic Infections (p. 663)

Reproduced in full and de-bled. The table splits into **Systemic** and **Superficial/Topical,** and *Candidiasis appears in both halves.*

### Systemic infections

| Mycosis | Fungus | Endemic location | Reservoir | Transmission | Primary tissue affected |
|---|---|---|---|---|---|
| **Aspergillosis** | *Aspergillus* species | Universal | Soil | Inhalation | **Lungs** |
| **Blastomycosis** | *Blastomyces dermatitidis* | **North America** | Soil, animal droppings | Inhalation | **Lungs** |
| **Candidiasis** | *Candida albicans, glabrata, krusei, tropicalis, parapsilosis* | Universal | **Humans** | Direct contact, **overgrowth in response to treatment with antibiotic to which it is nonsusceptible** | **Blood, lungs** |
| **Coccidioidomycosis** | *Coccidioides immitis* | **Southwestern United States** | Soil, dust | Inhalation | **Lungs** |
| **Cryptococcosis** | *Cryptococcus neoformans* | Universal | Soil, **bird and chicken droppings** | Inhalation | **Lungs, meninges of brain** |
| **Histoplasmosis** | *Histoplasma capsulatum* | Universal | *(no entry in the pulled text; see GAPS item 4)* | Inhalation | **Lungs** |

### Superficial / topical infections

| Mycosis | Fungus | Endemic location | Reservoir | Transmission | Primary tissue affected |
|---|---|---|---|---|---|
| **Candidiasis** | *Candida albicans* | Universal | **Humans** | Direct contact, overgrowth in response to treatment with antibiotic to which it is nonsusceptible | **Mucous membrane, skin; disseminated (may be systemic)** |
| **Dermatophytosis, tinea** | *Epidermophyton* species, *Microsporum* species, *Trichophyton* spp. | Universal | **Humans** | **Direct and indirect contact with infected persons** | **Scalp, skin (e.g., groin, feet)** |
| **Tinea versicolor** | *Malassezia furfur* | Universal | **Humans** | **Unknown** (see footnote) | **Skin** |

Footnote as printed: "*Malassezia* species are a **usual part of the normal human flora** and appear to **cause infection in only select individuals.**"

> **Trap (setting vs. focus).** **Candidiasis is the only mycosis in BOTH halves,** and the axis separating the rows is **not** the organism but **where it lands.** Cue: ***systemic candidiasis → blood and lungs, and the fungus list widens to five* Candida *species; superficial candidiasis → mucous membrane and skin, and the organism is* C. albicans *alone.*** Both rows carry the identical reservoir (humans) and identical transmission clause, so transmission cannot discriminate them. Note the superficial row's own hedge: "**disseminated (may be systemic)**."

> **Trap (confusable pair).** **The two geographically restricted mycoses.** Every other row says "Universal." Cue: ***Blastomycosis = North America; Coccidioidomycosis = Southwestern United States.*** These are the only endemic-location entries naming a place, so a stem mentioning geography at all points at one of the two. Both are -mycosis, soil, inhaled, lungs — location is the only usable discriminator. Their reservoirs also differ by one word: **blastomycosis = soil + animal droppings; cryptococcosis = soil + bird and chicken droppings.**

> **Trap (confusable pair).** **Which mycosis reaches the brain.** All six systemic mycoses hit the lungs. Only one adds a second tissue: ***Cryptococcosis → "lungs, meninges of brain."*** That is the anatomic basis for **cryptococcal meningitis,** which fluconazole treats (p. 664) and which is a distractor in review question 8. Candidiasis is the other row with a second tissue, but its second tissue is **blood,** not brain.

> **Trap (confusable pair).** **Inhalation vs. direct contact.** The transmission column has only two values and they map almost cleanly onto the two halves. Cue: ***every INHALED mycosis here is systemic and lands in the lungs; every CONTACT mycosis is candidiasis or a dermatophytosis.*** The exception that proves it: systemic **candidiasis** is transmitted by contact and overgrowth, not inhalation, and still lands in blood and lungs.

> **Trap (plausible-but-adjacent).** **Three genera cause dermatophytosis and the chapter never names them again.** *Epidermophyton, Microsporum, Trichophyton* appear once, in one cell. The usable name for the same thing is **tinea,** and the tinea site names come from the **terbinafine** dosage row instead (p. 666): **tinea pedis (athlete's foot), tinea cruris (jock itch), tinea corporis (ringworm).** *Tinea versicolor* is a separate row with a **different organism** (*Malassezia furfur*), so it is not one of the dermatophytoses despite sharing the word.

---

## §3 The classification spine: which drug is in which class (p. 663)

**Quoted in full** (p. 663): "**Two antifungal drugs, flucytosine and griseofulvin, are not specifically classified according to their chemical structures.** The remaining drugs currently include **four specific chemical classes: polyenes** (amphotericin B and nystatin), **imidazoles** (ketoconazole), **triazoles** (fluconazole, itraconazole, voriconazole, posaconazole, and isavuconazonium), and the **echinocandins** (caspofungin, micafungin, and anidulafungin). **The imidazoles and triazoles are often referred to by the more general term azole antifungals.**"

| Class | Drugs | Notes from elsewhere in the chapter |
|---|---|---|
| **Polyenes** | **amphotericin B, nystatin** | bind sterols/ergosterol in the fungal cell **membrane** |
| **Imidazoles** | **ketoconazole** (the only one listed) | "Systemic ketoconazole use is **no longer recommended, unless all other therapies fail**" (p. 664) |
| **Triazoles** | **fluconazole, itraconazole, voriconazole, posaconazole, isavuconazonium** | "synthetic **azole** antifungals" (p. 664) |
| **Echinocandins** | **caspofungin, micafungin, anidulafungin** | block **glucan** synthesis in the fungal cell **wall** |
| **Allylamine** | **terbinafine** | "classified as an **allylamine** antifungal drug and is **currently the only drug in its class**" (p. 667) |
| **Not classified by chemical structure** | **flucytosine, griseofulvin** | "one of the **older** types of antifungal drugs" (p. 663) |
| **Triterpenoid** | **ibrexafungerp** | "a **new drug** in the class of **triterpenoids** and is used **orally for vulvovaginal candidiasis**" (p. 667) |

**The chapter's full drug list** (p. 663): "The drugs that proved successful in the treatment of **systemic mycoses as well as severe dermatomycoses** include **amphotericin B, caspofungin, fluconazole, flucytosine, griseofulvin, itraconazole, ketoconazole, micafungin, nystatin, terbinafine, anidulafungin, isavuconazonium, and voriconazole.**"

**Why the class is small** (p. 663): "There are few such drugs because **the fungi have proved to be very difficult to kill,** and research into new and improved drugs has occurred at a **slow pace.** One difficulty is that often the **chemical concentrations required for experimental drugs to be effective cannot be tolerated by humans.**"

**Topical is the most-used route** (p. 663): "**Topical antifungal drugs are the most commonly used drugs in this class** and are often administered **without prescription**... Although topical drug therapy is usually sufficient for these conditions, **systemic oral medications are sometimes used, especially for more severe or recurrent cases.**"

> **Trap (confusable pair).** **Imidazole vs. triazole, and the umbrella that covers both.** Cue: ***ketoconazole is the imidazole; every other -conazole here is a triazole; "azole antifungals" means both together.*** The trap runs both ways: calling fluconazole an imidazole is wrong on the class list, but calling ketoconazole "not an azole" is also wrong. When a stem says **azole,** all six drugs qualify — Table 42.3's interaction block is filed under "**Azole Antifungals**" precisely to cover them at once.

> **Trap (confusable pair).** **The two drugs that are NOT in a chemical class: flucytosine and griseofulvin.** They are the chapter's two orphans and its two **oldest** drugs; their use "**has been largely replaced by the newer antifungal drug classes**" though "**both... are still currently available in the US market**" (p. 663). Filing flucytosine under "polyene" or griseofulvin under "azole" invents a class the chapter explicitly denies them.

> **Trap (confusable pair).** **"First in its class" vs. "only in its class."** Cue: ***caspofungin was the FIRST echinocandin (micafungin and anidulafungin followed); terbinafine is the ONLY allylamine.*** Terbinafine's class name is easy to lose because the p. 663 classification paragraph lists **four** classes and terbinafine is not among them; the allylamine label arrives four pages later (p. 667) and again in the dosage table. Chapter 39 runs the identical pair (linezolid the **first** oxazolidinone, daptomycin the **only** lipopeptide).

> **Trap (confusable pair).** **-fungin means echinocandin.** Cue: ***caspofungin, micafungin, anidulafungin.*** The near-miss is **ibrexafungerp,** which carries a fungal-sounding stem but is a **triterpenoid,** oral, not injectable. Its one appearance is buried at the end of the **fluconazole** profile (p. 667), a placement that invites misattribution.

---

## §4 Mechanism of action, class by class (pp. 663–664)

**flucytosine** (p. 663): "Flucytosine, also known as **5-fluorocytosine (5-FC),** acts in much the same way as the **antiviral drugs.** It is an **antimetabolite,** which is a drug that **disrupts critical cellular metabolic pathways of the fungal cell.** Once inside a susceptible fungal cell, the drug is **deaminated by the enzyme cytosine deaminase to 5-fluorouracil (5-FU). Because human cells do not have this enzyme, they are not harmed by this antimetabolite.** Once the 5-FU is generated inside the fungal cell, it **interferes with fungal deoxyribonucleic acid (DNA) synthesis,** which results in both **inhibition of cell growth and reproduction and cell death.**"

**griseofulvin** (p. 663): "It works by **preventing susceptible fungi from reproducing.** It enters the fungal cell through an **energy-dependent transport system** and **inhibits fungal mitosis (cell division) by binding to key structures known as microtubules.** It has also been proposed that griseofulvin **causes the production of defective DNA, which is then unable to replicate.**"

**Polyenes** (p. 664): "The polyenes (amphotericin B and nystatin) act by **binding to sterols in the cell membranes of fungi.** Once the polyene drug molecule **binds to the ergosterol, a channel forms in the fungal cell membrane** that allows **potassium and magnesium ions to leak out** of the fungal cell. **This loss of ions causes fungal cellular metabolism to be altered, which leads to death of the cell.**"

**Azoles** (p. 664): "Imidazoles and triazoles... act as **either fungistatic or fungicidal drugs, depending on their concentration in the fungus.** They are **most effective in combating rapidly growing fungi** and work by **inhibiting fungal cell cytochrome P-450 enzymes that are needed to produce ergosterol.** When the production of ergosterol is inhibited, it results in **a defect similar to that caused by the polyene antifungals — namely, a leaky cell membrane that allows needed electrolytes to escape. The fungal cells die because they cannot carry on cellular metabolism.** The **allylamine terbinafine** is believed to act by a **similar mechanism.**"

**Echinocandins** (p. 664): "The echinocandins (caspofungin, micafungin, and anidulafungin) act by **preventing the synthesis of glucans, essential components of fungal cell walls that are not present in human cells.** This also contributes to fungal cell death."

| Class | Target | Step | End result |
|---|---|---|---|
| **flucytosine** | fungal **DNA** | converted by **cytosine deaminase** to **5-FU** | inhibited growth + cell death |
| **griseofulvin** | **microtubules** | inhibits **mitosis** | fungi cannot reproduce |
| **Polyenes** | **ergosterol,** cell **membrane** | **bind** it, forming a **channel** | potassium and magnesium leak out; cell dies |
| **Azoles + terbinafine** | **ergosterol,** cell **membrane** | block **production** via fungal **cytochrome P-450** | leaky membrane; electrolytes escape; cell dies |
| **Echinocandins** | **glucans,** cell **WALL** | block **synthesis** | cell death |

> **Trap (confusable pair).** **Cell MEMBRANE vs. cell WALL — the highest-value discriminator in this chapter.** Cue: ***polyenes and azoles (and terbinafine) attack the cell MEMBRANE via ergosterol; the echinocandins attack the cell WALL via glucan.*** Four of the six profiled drugs are membrane drugs and only one (caspofungin) is a wall drug, which is what makes the wall answer look wrong when it is right. The chapter supplies the selective-toxicity reason for each: **glucans are "not present in human cells"** and **cytosine deaminase is absent from human cells.**

> **Trap (confusable pair).** **Polyenes BIND ergosterol; azoles BLOCK ITS PRODUCTION.** The chapter flags the resemblance itself ("a defect **similar to** that caused by the polyene antifungals"), which is as close to a printed warning as this book gives. Cue: ***polyene = binds the finished sterol and punches a channel; azole = shuts down the fungal P-450 so the sterol is never made.*** Same end state, different step — and only the azole mechanism runs through **cytochrome P-450,** which is why only the azoles carry the huge human interaction list.

> **Trap (confusable pair).** **Which ions leak out? Potassium and magnesium.** The chapter names those two in the polyene paragraph and the matching adverse effects in Table 42.2 for amphotericin B: "**potassium loss, hypomagnesemia.**" The azole paragraph is deliberately vaguer ("needed electrolytes"). An option naming sodium and calcium invents electrolytes the chapter does not list; hypokalemia as an amphotericin B effect is correct twice over, from mechanism and from table.

> **Trap (level/stage swap).** **Fungistatic vs. fungicidal is a *concentration* property here, not a fixed class property.** Quoted: azoles act "as **either fungistatic or fungicidal drugs, depending on their concentration in the fungus.**" An option that flatly labels the azoles one or the other is more certain than the chapter is. Compare Chapter 38's bactericidal/bacteriostatic pairing, where the label **is** fixed per class.

> **Trap (confusable pair).** **flucytosine vs. griseofulvin: two old orphan drugs, unrelated mechanisms.** Cue: ***flucytosine = antimetabolite, becomes 5-FU, hits DNA synthesis; griseofulvin = binds microtubules, blocks mitosis.*** Their shared features make the swap tempting (both old, both unclassified, both "largely replaced"). One more discriminator: **flucytosine is the one compared to the antiviral drugs;** griseofulvin is compared to nothing.

> **Trap (plausible-but-adjacent).** **Terbinafine's mechanism is given only by analogy** — "is **believed** to act by a **similar mechanism**" to the azoles, with no paragraph of its own. Do not upgrade that hedge into a definite ergosterol-synthesis-inhibitor claim; the chapter did not make one.

---

## §5 Indications: which drug for which infection (p. 664)

Framing sentence: "Indications for the use of the various antifungal drugs are **specific to the drug.**"

| Drug | Indications as printed |
|---|---|
| **amphotericin B** | "effective against a **wide range of fungi.** It is **sometimes given with flucytosine** in the treatment of ***Candida* and cryptococcal infections because of the synergy of the two drugs.**" Also "**aspergillosis, blastomycosis, candidiasis, coccidioidomycosis, cryptococcosis, fungal endocarditis, histoplasmosis, zygomycosis, fungal septicemia,** and many other systemic fungal infections." |
| **nystatin** | "The activity of nystatin is **similar to that of amphotericin B, but its usefulness is limited because of its toxic effects when given in the dosages required** to accomplish the same antifungal actions... **most commonly used to treat oropharyngeal candidiasis, commonly referred to as thrush,** and is frequently used as a **topical powder.**" |
| **fluconazole** | "**esophageal, oropharyngeal, peritoneal, urinary tract, vaginal, and systemic candidal infections, blastomycosis, and cryptococcal meningitis,** and **may be used prophylactically.**" |
| **ketoconazole** | "Systemic ketoconazole use is **no longer recommended, unless all other therapies fail.**" |
| **itraconazole** | "**blastomycosis, histoplasmosis, aspergillosis, and oncychomycosis of the toenail.**" *(typo as printed; see GAPS item 6)* |
| **voriconazole** | "**invasive aspergillosis, candidal infections, and infections caused by *Fusarium* species.**" |
| **isavuconazonium** | "**invasive aspergillosis and invasive mucormycosis.**" |
| **posaconazole** | "the **prophylaxis** of **invasive aspergillus and candidal infections in severely immunocompromised patients.**" |
| **flucytosine** | "**endocarditis and cryptococcal meningoencephalitis in conjunction with amphotericin B.**" |
| **griseofulvin** | "**tinea infections.**" |
| **terbinafine** | "a **synthetic allylamine derivative** used in a **systemic oral form** for treatment of **onychomycoses — fungal infections of the fingernails or toenails.** **Topical forms**... are also used for various skin infections (see Chapter 56)." |

> **Trap (confusable pair).** **amphotericin B vs. nystatin: same class, "similar" activity, opposite roles.** Cue: ***nystatin is too toxic at the doses that would match amphotericin B systemically, so it is pushed to the mouth and skin while amphotericin B keeps the systemic job.*** The route facts confirm the split: **nystatin "is not available in a parenteral form"** (p. 667); **amphotericin B "is available in an injectable (intravenous) form"** (p. 666). An option giving IV nystatin for systemic candidiasis names a formulation that does not exist.

> **Trap (confusable pair).** **Several drugs treat aspergillosis; the discriminator is the treatment TIER, not the organism.** Cue: ***voriconazole = invasive aspergillosis, first line by the dosage table; caspofungin = invasive aspergillosis "in patients who are intolerant of or have infections refractory to other drugs," the rescue slot; posaconazole = PROPHYLAXIS only; isavuconazonium = invasive aspergillosis and mucormycosis; itraconazole and amphotericin B = aspergillosis, unqualified.*** The axis is **treatment vs. prophylaxis vs. salvage.**

> **Trap (confusable pair).** **Which drug for a nail infection.** Cue: ***itraconazole = onychomycosis of the TOENAIL specifically; terbinafine = onychomycoses of the FINGERNAILS OR TOENAILS.*** Terbinafine is the systemic oral nail drug the chapter builds review question 8 around; itraconazole's nail indication carries its own contraindication (severe cardiac problems, §6), which terbinafine's does not.

> **Trap (confusable pair).** **The two drugs used together, and why.** Cue: ***amphotericin B + flucytosine, for* Candida *and cryptococcal infections, "because of the SYNERGY of the two drugs."*** From flucytosine's side the target is narrower: "**endocarditis and cryptococcal meningoencephalitis in conjunction with amphotericin B.**" This is the same synergy concept Chapter 39 defines for antibiotics; this chapter uses the word without redefining it.

> **Trap (level/stage swap).** **Cryptococcal meningitis vs. meningoencephalitis — two drugs, two words, one organism.** Cue: ***fluconazole → cryptococcal MENINGITIS; flucytosine (with amphotericin B) → cryptococcal MENINGOENCEPHALITIS.*** The chapter uses the terms in two different paragraphs and never reconciles them. Do not read the difference as a staging distinction the chapter is drawing.

> **Trap (plausible-but-adjacent).** **Ketoconazole's indication is an anti-indication.** The only thing the chapter says about systemic ketoconazole is that it is "**no longer recommended, unless all other therapies fail.**" It is still listed as the sole imidazole, and Chapter 2's P-450 table uses it as the canonical **enzyme inhibitor.** Being classified is not being recommended.

> **Trap (confusable pair).** **fluconazole owns the longest indication list, and the only one with "urinary tract" and "prophylactically."** Cue: *five or six candidal sites at once, or "may be used to prevent," points to **fluconazole.*** Posaconazole is the other prophylactic drug, but only for **severely immunocompromised patients** and only for aspergillus and candidal infections.

---

## §6 Contraindications, adverse effects, interactions (pp. 664–665)

### Contraindications

**Quoted in full** (p. 664): "**Drug allergy is the most common contraindication for antifungal drugs. Chronic or active liver disease is a contraindication for terbinafine, and porphyria is listed for griseofulvin. Itraconazole should not be used to treat onychomycoses in patients with severe cardiac problems. Voriconazole can cause fetal harm in pregnant women.**"

| Contraindication | Drug |
|---|---|
| **Drug allergy** | all antifungals (the most common one) |
| **Chronic or active liver disease** | **terbinafine** |
| **Porphyria** | **griseofulvin** |
| **Severe cardiac problems** (for onychomycosis) | **itraconazole** |
| **Pregnancy / fetal harm** | **voriconazole** |
| **Known hypersensitivity**; caution in **severe bone marrow suppression or renal impairment** | **amphotericin B** (p. 664) |
| **Bone marrow suppression** | "**another contraindication** to the use of this drug" — amphotericin B (p. 667) |

> **Trap (SATA, five options mapped to categories).** **The four drug-specific contraindications are a ready-made matching set.** Cue: ***terbinafine → LIVER; griseofulvin → PORPHYRIA; itraconazole → HEART (and only for onychomycosis); voriconazole → PREGNANCY.*** Each appears exactly once, in one clause. Rotating the four diseases among the four drugs produces four wrong options and one right one with no extra writing — the cheapest distractor set in this chapter.

> **Trap (confusable pair).** **Voriconazole and pregnancy: two statements, one stronger.** The contraindications paragraph says voriconazole "**can cause fetal harm in pregnant women**" (p. 664); the drug profile escalates to "**It is also the ONLY antifungal drug contraindicated in pregnancy**" (p. 667). Cue: *asked which antifungal is contraindicated in pregnancy, there is exactly one answer and the chapter says "only."* This is in tension with the dosage table's letters, which put voriconazole at **(D)** while others are **(B)** or **(C)** and none is **X.** See GAPS item 5.

> **Trap (level/stage swap).** **Itraconazole's cardiac contraindication is indication-limited.** The sentence is "should not be used **to treat onychomycoses** in patients with severe cardiac problems," not "should not be used in patients with severe cardiac problems." An option that generalizes it has widened a restriction the chapter deliberately narrowed. The reference list carries a supporting citation on exactly this point (Cleary & Stover, *Antifungal-associated drug-induced cardiac disease,* p. 670).

### Adverse effects

**The headline sentence, which is also review question 1's answer** (p. 664): "**Drug interactions and hepatotoxicity are the primary concerns in patients receiving antifungal drugs.**"

**Amphotericin B** (p. 664): "**Amphotericin B is associated with a multitude of adverse effects,** and **premedications (including antiemetics, antihistamines, antipyretics, and corticosteroids) are often given to prevent or minimize infusion-related reactions.** The likelihood of such reactions also can be **reduced by using longer-than-average drug infusion times (i.e., 2 to 6 hours).**" From the profile: "**Almost all patients** given the drug intravenously experience **fever, chills, hypotension, tachycardia, malaise, muscle and joint pain, anorexia, nausea and vomiting, and headache.**"

### Table 42.2 Selected Antifungal Drugs: Common Adverse Effects and Cautions (p. 665)

Reproduced in full. Route tags are the table's own: **Sy** = systemic, **T** = topical.

| Drug (tag) | Body system | Adverse effects | Cautions |
|---|---|---|---|
| **amphotericin B (Sy)** | Cardiovascular | **Cardiac dysrhythmias** | "Recheck dosage and type of amphotericin B being administered" |
| | Central nervous | **Neurotoxicity; tinnitus; visual disturbances; hand or feet numbness, tingling, or pain; convulsions** | |
| | Renal | **Renal toxicity, potassium loss, hypomagnesemia** | |
| | Pulmonary | **Pulmonary infiltrates** | |
| | Other (infusion related) | **Fever, chills, headache, malaise, nausea, occasional hypotension, gastrointestinal upset, anemia** | |
| **fluconazole (Sy)** | Gastrointestinal | Nausea, vomiting, diarrhea, stomach pain | "Use with caution in patients with **renal or hepatic dysfunction**" |
| | Other | **Increased liver enzyme levels,** dizziness | |
| **caspofungin (Sy)** | Central nervous | **Fever, chills, headache** | "**Adjust dose for patients with hepatic dysfunction**" |
| | Cardiovascular | **Hypotension, peripheral edema, tachycardia** | |
| | Gastrointestinal | Nausea, vomiting, diarrhea, **hepatotoxicity** | |
| | Hematologic | **Decreased hemoglobin and hematocrit, leukopenia, anemia** | |
| | Integumentary | Rash, **facial edema,** itching | |
| **voriconazole (Sy)** | Central nervous | **Hallucinations** | *(none printed)* |
| | Gastrointestinal | Nausea, vomiting | |
| | Hepatic | Increased liver enzyme levels | |
| | Integumentary | Rash | |
| | Other | **Photophobia, hypokalemia** | |
| **nystatin (T)** | Gastrointestinal | Nausea, vomiting, diarrhea, cramps | "**Local irritation may occur**" |
| | Integumentary | Rash, urticaria | |
| **terbinafine (Sy, T)** | Central nervous | Headache, dizziness | "**Rarely causes irritation**" |
| | Gastrointestinal | Nausea, vomiting, diarrhea | |
| | Integumentary | Rash, pruritus | |
| | Other | **Alopecia, fatigue** | |

> **Trap (priority question).** **Which preexisting problem is of most concern before antifungal therapy?** Review question 1 (p. 670) offers **endocrine, hepatic, cardiac, pulmonary** disease. The governing sentence heads the adverse effects section: "**Drug interactions and hepatotoxicity are the primary concerns.**" Cue: ***default to the LIVER.*** Three reinforcements: caspofungin doses are cut for hepatic dysfunction, fluconazole and terbinafine carry liver cautions, and terbinafine's outright contraindication is liver disease. Cardiac disease is the seductive distractor because itraconazole and voriconazole carry cardiac language, but those are **drug-specific,** not the class default.

> **Trap (SATA, five options mapped to categories).** **Amphotericin B infusion reaction — the cardiovascular options are printed BACKWARD.** Review question 2 (p. 670) lists **hypertension, bradycardia, fever, headache, chills, nausea and vomiting.** The chapter names **fever, chills, hypoTENSION, tachyCARDIA,** malaise, muscle and joint pain, anorexia, nausea and vomiting, and headache. Cue: ***the chapter says hypoTENSION and tachyCARDIA; the options offer hyperTENSION and bradyCARDIA.*** Pure direction reversal, and it is the whole point of the item. (Official key not in the pull; GAPS item 8.)

> **Trap (SATA, five options mapped to categories).** **Caspofungin's serious adverse effects vs. amphotericin B's.** Review question 6 (p. 670) offers **blood dyscrasias, hypotension, pulmonary infiltrates, tinnitus, hepatotoxicity.** Table 42.2 gives caspofungin **hypotension, hepatotoxicity,** and **decreased Hgb/Hct, leukopenia, anemia** (which is what "blood dyscrasias" names), and gives it **no pulmonary row and no tinnitus.** Cue: ***pulmonary infiltrates and tinnitus belong to amphotericin B — they appear nowhere else in Table 42.2.*** A borrow-from-the-neighboring-block distractor, and that block sits directly above on the same printed page.

> **Trap (confusable pair).** **Where hepatotoxicity is filed in Table 42.2 differs by drug.** Cue: ***caspofungin's is filed under GASTROINTESTINAL; voriconazole's under HEPATIC; fluconazole's under OTHER.*** Three drugs, three headings for functionally the same finding — so if a stem asks caspofungin's "gastrointestinal" effects, hepatotoxicity is on the list by the table's own filing. Parallel oddity: caspofungin's **fever, chills, and headache are filed under CENTRAL NERVOUS,** where amphotericin B files the same three under **Other (infusion related).**

> **Trap (confusable pair).** **Hallucinations vs. convulsions.** Cue: ***voriconazole = hallucinations and photophobia (teaching box adds "avoid driving at night"); amphotericin B = neurotoxicity, tinnitus, visual disturbances, paresthesias, convulsions.*** Both are "central nervous" rows and both include a vision problem, which is the overlap. The discriminator: **voriconazole's vision problem is light sensitivity;** amphotericin B's is blurring/visual disturbance, and only voriconazole gets an explicit visual-acuity monitoring instruction (p. 668). Alopecia, meanwhile, belongs to **terbinafine** alone.

> **Trap (setting vs. focus).** **The (Sy)/(T) tags encode ROUTE, not severity.** Cue: ***nystatin is (T) alone; terbinafine is the only drug tagged (Sy, T); the other four are (Sy) alone.*** Terbinafine's dual tag matches its dosage row, which prints both an oral tablet regimen and a topical one. Nystatin's (T)-only tag sits awkwardly against its own dosage row, which prints an **oral** suspension (GAPS item 5).

### Interactions

**Quoted in full** (p. 664): "There are **many important drug interactions associated with antifungal drugs, some of which can be life threatening.** A common underlying source of the problem is that **many of the antifungal drugs, as well as other drugs, are metabolized by the cytochrome P-450 enzyme system.** The result of the co-administration of two drugs that are both broken down by this system is that they **compete for the limited amount of enzymes, and one of the drugs ends up accumulating.** In addition, **itraconazole and posaconazole are inhibitors of gastric P-glycoprotein.**"

### Table 42.3 Antifungal Drugs: Drug Interactions (p. 665)

| Antifungal | Interacting drug | Possible effects |
|---|---|---|
| **amphotericin B** | **Digitalis glycosides** | "Amphotericin B–induced **hypokalemia** may **increase the potential for digitalis toxicity**" |
| | **Nephrotoxic drugs** | "**Additive nephrotoxicity**" |
| | **Thiazide diuretics** | "**Severe hypokalemia** or **decreased adrenal cortex response to corticotrophin**" |
| **Azole antifungals** | **cyclosporine, sirolimus, tacrolimus, calcium channel blockers, benzodiazepines** | "**Increased plasma concentrations of target drugs**" |
| | **Oral anticoagulants** | "**Increased effects of anticoagulants**" |
| | **Oral hypoglycemics, statins** | "**Reduced metabolism** of hypoglycemic and statins; **increased toxicity**" |
| | **quinidine** | "**Prolongation of QT interval on electrocardiogram**" |
| | **phenytoin, rifampin, phenobarbital, carbamazepine** | "**Decreased levels of azole antifungals**" |

> **Trap (priority question).** **What patient factor causes most antifungal drug interactions?** Review question 3 (p. 670) offers **cardiac history, gallbladder surgery, ethnic background, the patient's cytochrome P-450 enzyme system.** The interaction section opens by naming P-450 as "a common underlying source of the problem." Cue: ***the answer is the P-450 system, not organ history and not demographics.*** The mechanism is competition, in plain words: two drugs "**compete for the limited amount of enzymes, and one of the drugs ends up accumulating.**"

> **Trap (level/stage swap).** **Table 42.3's azole rows run in TWO directions and the last row reverses.** Cue: ***the first four azole rows raise the OTHER drug; the last row lowers the AZOLE itself.*** The four enzyme inducers named — **phenytoin, rifampin, phenobarbital, carbamazepine** — do not become toxic; they make the antifungal **stop working.** This is Chapter 2's inducer/inhibitor direction trap exactly: an **inhibitor slows metabolism and raises levels** (azoles doing this to warfarin, statins, cyclosporine); an **inducer speeds metabolism and lowers levels** (rifampin and phenytoin doing this to the azoles). Chapter 2's P-450 table names **ketoconazole** as its canonical inhibitor, so the two chapters describe the same drug from opposite ends.

> **Trap (confusable pair).** **Amphotericin B's interactions all run through POTASSIUM; the azoles' all run through the LIVER.** Cue: ***hypokalemia + digoxin = digitalis toxicity; hypokalemia + thiazide = worse hypokalemia; nephrotoxic drug + amphotericin B = additive kidney damage.*** None of the three amphotericin B rows is a P-450 interaction. Explaining an amphotericin B/digoxin interaction by enzyme competition borrows the azole mechanism.

> **Trap (confusable pair).** **Quinidine appears twice for what is one reason.** Table 42.3 lists **quinidine → QT prolongation** under the azoles; the **voriconazole** profile names it as the example of drugs metabolized by **P-450 3A4,** with the consequence "**the risk for induction of serious cardiac dysrhythmias**" (p. 667). Cue: ***the ECG finding is QT prolongation; the clinical event is a dysrhythmia; the mechanism is 3A4 competition.*** Chapter 39 uses the identical three-layer structure for the quinolones.

> **Trap (plausible-but-adjacent).** **P-glycoprotein is not P-450.** Only **itraconazole and posaconazole** are "**inhibitors of gastric P-glycoprotein**" — a **transporter,** named in a separate sentence, applying to two of the six azoles. The chapter never says what that inhibition does; see GAPS item 3.

---

## §7 Drug profiles, dosages, and pharmacokinetics (pp. 664–667)

### Dosages: Selected Antifungal Drugs (p. 666)

Pregnancy letter categories printed **as given** and obsolete; see GAPS item 5.

| Drug (pregnancy category) | Pharmacologic class | Usual adult dosage range | Indications |
|---|---|---|---|
| **amphotericin B** (Amphocin, Fungizone) **(B)** | Polyene antifungal | **IV: Initial daily dose, 0.25 mg/kg; titrate up to 0.5–1.5 mg/kg/day** | Systemic infections with **broad spectrum of fungi** |
| **Abelcet** (lipid complex) **(B)** | Polyene antifungal | **IV: 5 mg/kg once daily** | Systemic fungal infections |
| **Amphotec** (cholesteryl complex) **(B)** | Polyene antifungal | **IV: 3–4 mg/kg/day** | Systemic fungal infections |
| **AmBisome** (liposomal) **(B)** | Polyene antifungal | **IV: 3–5 mg/kg/day** | Systemic fungal infections |
| **caspofungin** (Cancidas) **(C)** | **Echinocandin** antifungal | **IV: 70 mg loading dose on day 1, followed by 50 mg/day thereafter** | **Invasive aspergillosis** in patients who **do not tolerate or respond to other drugs** |
| **fluconazole** (Diflucan) **(C)** | **Synthetic triazole** antifungal | **PO: 150 mg in a single dose** | **Vaginal candidiasis** |
| | | **IV/PO: 100–400 mg/day for 2–5 weeks** (dose and duration depend on severity) | Oropharyngeal and esophageal candidiasis, systemic candidiasis |
| **nystatin** (Nilstat, Mycostatin, Nystex) **(C)** | Polyene antifungal | **PO: 400,000–600,000 units (4–6 mL) oral suspension in oral cavity 4 times daily** | **Oral candidiasis** |
| | | Topical (cream, lotion, powder): apply **2 or 3 times daily** | Topical candidiasis |
| **terbinafine** (Lamisil) **(B)** | **Synthetic allylamine** antifungal | **PO: 250 mg/day for 6 weeks (fingernail) or for 12 weeks (toenail)** | **Onychomycosis** (fungal infection of fingernail or toenail) |
| | | Topical cream or solution: **once to twice daily** for **1–4 weeks** | **Athlete's foot (tinea pedis), jock itch (tinea cruris), ringworm (tinea corporis)** |
| **voriconazole** (Vfend) **(D)** | **Synthetic triazole** antifungal | **PO: 200 mg every 12 hr**; **IV: 6 mg/kg every 12 hr for 2 doses followed by 4 mg/kg every 12 hr** | **Invasive aspergillosis;** other major fungal infections in patients who do not tolerate or respond to other antifungal drugs |

Footnote as printed: "CSF, Cerebrospinal fluid." (No CSF abbreviation appears anywhere in the table; GAPS item 6.)

### Pharmacokinetics (pp. 666–667)

Onset, peak, half-life, and duration are printed for **amphotericin B, caspofungin, fluconazole, nystatin, terbinafine, and voriconazole**, and for no other drug in the chapter. They are **lookup values, not memorizable structures,** and are not transcribed here; read the per-drug boxes directly. The two that carry meaning: **amphotericin B's half-life is 1 to 15 days** (which is why it accumulates) and **fluconazole's is 20 to 50 hours** (which is why single-dose therapy works).


### amphotericin B (Fungizone) (pp. 664, 666)

- **Status:** "remains **one of the drugs of choice for the treatment of severe systemic mycoses.** The **main drawback**... is that the drug **causes many adverse effects.**"
- **Lipid formulations:** "developed in an attempt to **decrease the incidence of its adverse effects and increase its efficacy.** There are currently **three lipid preparations:** amphotericin B **lipid complex (Abelcet),** amphotericin B **cholesteryl complex (Amphotec),** and **liposomal amphotericin B (AmBisome).** These lipid dosage forms have a **much higher cost**... and for this reason are **often used only when patients are intolerant of or have an infection refractory to nonlipid amphotericin B.**"
- **Contraindications:** "contraindicated in patients who have a **known hypersensitivity** to it, and **caution must be used in those with severe bone marrow suppression or renal impairment.**"
- **The override** (p. 666): "patients who have **life-threatening fungal infections may still be treated with this drug if culture results indicate that no other drug will kill the causative organism.**"
- **Route and test dose** (p. 666): "available in an **injectable (intravenous) form.** Often a **1-mg test dose is given over 20 to 30 minutes** to see if the patient will tolerate the drug."
- **Off-route uses** (p. 666): "used as a **local irrigant (in bladder irrigation)** for the treatment of **candidal cystitis,** and has been used **intrapleurally and intraperitoneally** for... fungal infections in those body cavities."

> **Trap (confusable pair).** **Conventional vs. lipid amphotericin B: the lipid forms are NOT first line.** Cue: ***lipid = fewer adverse effects and better efficacy, BUT much higher cost, so it is reserved for patients intolerant of or refractory to the nonlipid drug.*** The case study (p. 668) is built on this sequence: A.B. tolerates conventional amphotericin B badly overnight and "the next morning his physician... changes the order to **liposomal amphotericin B.**" An option reaching for AmBisome first skips the cost gate the chapter states twice.

> **Trap (confusable pair).** **Three lipid preparations, three names, three different mg/kg doses.** Cue: ***Abelcet = lipid complex = 5 mg/kg once daily; Amphotec = cholesteryl complex = 3–4 mg/kg/day; AmBisome = LIPOSOMAL = 3–5 mg/kg/day.*** Only **AmBisome** is the true liposomal form, and it is the one the case study names. Conventional amphotericin B runs an order of magnitude lower (**0.25 mg/kg start, titrate to 0.5–1.5 mg/kg/day**), so cross-applying doses either underdoses threefold to tenfold or is frankly toxic.

> **Trap (confusable pair).** **1-mg test dose vs. premedication vs. long infusion — three interventions, one problem.** Cue: ***test dose (1 mg over 20 to 30 minutes) tells you IF the patient tolerates the drug; premedication (antipyretics, antihistamines, antiemetics, corticosteroids) blunts the reaction; long infusion (2 to 6 hours) reduces its likelihood.*** They are not substitutes.

> **Trap (priority question).** **Longer infusion, not faster.** Review question 4 (p. 670) offers **forcing fluids, infusing quickly, infusing over a longer period, and stopping for 2 hours partway.** The chapter is unambiguous: reaction likelihood "can be **reduced by using longer-than-average drug infusion times (i.e., 2 to 6 hours).**" Cue: ***when an IV antiinfective in this book causes infusion reactions, the answer is SLOW IT DOWN.*** Chapter 39's vancomycin red man syndrome runs on identical logic (slow to at least 1 hour).

> **Trap (plausible-but-adjacent).** **Bladder irrigation with amphotericin B is real** — for **candidal cystitis** specifically, plus intrapleural and intraperitoneal for cavity infections. A non-IV amphotericin B route is not automatically wrong; the discriminator is whether the infection is **local to a cavity.**

### caspofungin (Cancidas) (p. 666)

"Caspofungin (Cancidas) was **the first echinocandin antifungal drug.** It is used for treatment of **severe *Aspergillus* infection (invasive aspergillosis) in patients who are intolerant of or have infections refractory to other drugs.** Caspofungin **doses need to be reduced in patients with impaired liver function.** The drug is **available only in injectable form.** Other echinocandins include **micafungin (Mycamine)** and **anidulafungin (Eraxis).**"

**Administration** (p. 668): "**Only use clear solutions** of caspofungin and dilute doses with the recommended amount of **normal saline. Do not use with dextrose-containing products for diluting and do not give as a bolus.**"

> **Trap (confusable pair).** **Caspofungin: normal saline ONLY; voriconazole: D5W OR normal saline.** Cue: ***the echinocandin is the one with the dextrose prohibition.*** Voriconazole's IV doses "may be diluted with **5% dextrose in water or normal saline**" (p. 668) — two drugs, two paragraphs apart, opposite diluent rules. Same shape as Chapter 39's Synercid exception (D5W only, no saline, no heparinized flush), except that exception runs the opposite way.

### fluconazole (Diflucan) (p. 667)

"Fluconazole (Diflucan) has proved to be a **significant improvement in the area of antifungal treatment.** It has a **much better adverse effect profile than that of amphotericin B,** and it also has **excellent coverage against many fungi. In fact, it is often preferred to amphotericin B because of these qualities.** Oral fluconazole has **excellent bioavailability,** which means that **almost the entire dose administered is absorbed into the circulation.** Fluconazole is available in **both oral and injectable forms. A single oral dose of fluconazole is usually effective for the treatment of vaginal candidiasis infections. Ibrexafungerp is a new drug in the class of triterpenoids and is used orally for vulvovaginal candidiasis.**"

**Administration** (p. 668): "intravenous dosage forms used **if there is a specific indication or if the oral dosage forms are poorly tolerated. Only administer intravenous dosage forms if the solution is clear. Protect the intravenous dosage form from light. Diluted solutions are stable for only 24 hours. If itching or a rash occurs, stop the infusion, take vital signs, and contact the prescriber immediately.**"

> **Trap (plausible-but-adjacent).** **One tablet really does treat a vaginal yeast infection.** Critical thinking exercise 1 (p. 669) is built on it: the order reads "**Fluconazole, 150 mg, one tablet by mouth now for vaginal yeast infection,**" and the patient asks, "Is that a mistake? How can one pill help that problem?" The chapter supplies both halves of the answer — the dosage table's "**PO: 150 mg in a single dose / Vaginal candidiasis**" row, and the profile's "**a single oral dose... is usually effective**" plus **excellent bioavailability.** Cue: *an option that questions the order or holds the dose is treating a correct single-dose regimen as an error.* (Official answer on Evolve; GAPS item 8.)

> **Trap (confusable pair).** **Fluconazole's IV form is the exception, not the default.** Cue: ***give it PO unless there is a specific indication or the oral form is poorly tolerated*** — the opposite of amphotericin B and caspofungin, which have no oral option at all. Excellent bioavailability is the stated reason.

> **Trap (confusable pair).** **fluconazole vs. voriconazole: two triazoles, two jobs.** Cue: ***fluconazole =* Candida *(plus cryptococcal meningitis and blastomycosis), broad and often prophylactic, category (C); voriconazole =* Aspergillus *(invasive), rescue tier, category (D), contraindicated in pregnancy, monitor vision.*** Two letters apart, same class, same suffix — only the indication and the pregnancy status reliably separate them.

### nystatin (Mycostatin) (p. 667)

"Nystatin (Mycostatin) is a **polyene antifungal drug** that is often **applied topically for the treatment of candidal diaper rash,** taken **orally as prophylaxis against candidal infections during periods of neutropenia in patients receiving immunosuppressive therapy,** and used for the **treatment of oral and vaginal candidiasis.** It is **not available in a parenteral form** but does come in **several oral and topical formulations.**"

**Administration** (p. 668): "Nystatin may be given orally in the form of **lozenges or troches. These dosage forms must be slowly and completely dissolved in the mouth for optimal effects. They are not to be chewed or swallowed whole.** If an **oral suspension** is used, **instruct the patient to swish the medication solution thoroughly in the mouth for as long as possible before swallowing.**" Teaching adds (p. 669): "the suspension needs to be **shaken thoroughly before measuring out each dose**... **suspensions are to be placed half in each cheek and then swallow; do not mix with food.**"

**Age limit** (p. 667): "**Nystatin lozenges are generally not used in children younger than 5 years of age.**"

> **Trap (confusable pair).** **Nystatin lozenge vs. nystatin suspension: two dosage forms, two instruction sets, and the exam uses both.** Cue: ***LOZENGE/TROCHE → dissolve slowly and completely, do NOT chew, do NOT swallow whole; SUSPENSION → shake, half in each cheek, swish as long as possible, THEN swallow.*** Review question 5 (p. 670) tests the lozenge half; three of its four options are exactly what the chapter forbids. Critical thinking exercise 2 (p. 669) tests the suspension half: the patient "takes the dosage cup... and says, 'I know how to take this,'" then **swallows the liquid all at once,** and the item asks for the nurse's **priority action.**

> **Trap (priority question).** **Why contact time matters at all.** Both oral nystatin forms work by **local contact with the oral mucosa** — hence "dissolved... for **optimal effects**" and "swish... **for as long as possible before swallowing.**" Cue: *swallowing nystatin immediately does not poison the patient; it means the drug never treated the mouth.* That is the reasoning frame for critical thinking exercise 2.

> **Trap (confusable pair).** **Nystatin's three uses map to three routes.** Cue: ***TOPICAL = candidal diaper rash (also "topical powder," p. 664); ORAL = prophylaxis during neutropenia on immunosuppressive therapy; ORAL or VAGINAL = treatment of oral and vaginal candidiasis. PARENTERAL = does not exist.***

> **Trap (level/stage swap).** **The nystatin dose arithmetic.** Review question 7 (p. 670): "Give nystatin suspension, **500,000 units**... The medication is available in a suspension of **100,000 units per mL.** How many milliliters will the nurse give per dose?" 500,000 ÷ 100,000 = **5 mL.** The stem's dose is **not** the dosage table's regimen (**400,000–600,000 units, 4–6 mL, four times daily**), but 5 mL sits exactly mid-range, which is the internal check. (My computation; official key at the back of the book, GAPS item 8.)

### terbinafine (Lamisil) (p. 667)

"Terbinafine (Lamisil) is classified as an **allylamine antifungal drug** and is **currently the only drug in its class.** It is available in a **topical cream, gel, and spray** for treating **superficial dermatologic infections, including tinea pedis (athlete's foot), tinea cruris (jock itch), and tinea corporis (ringworm).** A **tablet form** is also available for **systemic use** and is used **primarily to treat onychomycoses of the fingernails or toenails.**"

**Administration** (p. 668): "Terbinafine (Lamisil) **oral dosage forms may be taken without regard to food. Granules are to be taken with food** with sprinkling of packet contents on **pudding or a nonacidic food item.** It is then to be **swallowed without chewing.** Local skin reactions to be reported include **blistering, itching, oozing, redness, and swelling.**"

> **Trap (confusable pair).** **Terbinafine tablets vs. granules: opposite food rules for the same drug.** Cue: ***tablets = without regard to food; granules = WITH food, on pudding or a nonacidic item, swallowed without chewing.*** Two sentences in a row, the second reversing the first. The "nonacidic" qualifier is the detail a distractor drops (applesauce and citrus are the obvious wrong vehicles).

> **Trap (priority question).** **Terbinafine in a medication history means a NAIL infection.** Review question 8 (p. 670) offers **vaginal candidiasis, cryptococcal meningitis, invasive aspergillosis, fungal infection of toenails or fingernails.** Cue: ***the three distractors are the flagship indications of the other profiled systemic drugs — fluconazole, fluconazole again, and voriconazole/caspofungin — so the item is a four-way drug-to-indication match.*** Systemic oral terbinafine is "used **primarily** to treat onychomycoses of the fingernails or toenails."

### voriconazole (Vfend) (p. 667)

"Voriconazole (Vfend) is an **azole antifungal** used for treating **severe fungal infections caused by *Aspergillus* species (invasive aspergillosis).** It is also used for a variety of other severe fungal infections, such as those caused by ***Scedosporium* and *Fusarium* spp.** Voriconazole is **contraindicated in patients who have a known drug allergy to it** and in patients who are taking **certain other drugs metabolized by the cytochrome P-450 enzyme 3A4 (e.g., quinidine), because of the risk for induction of serious cardiac dysrhythmias. It is also the only antifungal drug contraindicated in pregnancy.** Voriconazole **dose must be adjusted for renal dysfunction** and is available in **oral and injectable forms.**"

**Administration** (p. 668): "oral doses are to be given **1 hour before or 1 hour after a meal.** Intravenous doses may be **diluted with 5% dextrose in water or normal saline**... **Monitor visual acuity when this drug is given (especially if ordered for longer than 28 days), and report any visual changes to the prescriber.**"

> **Trap (confusable pair).** **Caspofungin is dose-reduced for the LIVER; voriconazole is dose-adjusted for the KIDNEY.** Cue: ***echinocandin → hepatic; voriconazole → renal.*** Table 42.2 says the same from the other side (caspofungin: "adjust dose for patients with hepatic dysfunction"). Voriconazole gets **no** cautions entry in Table 42.2 at all, so its renal adjustment exists only in the profile text — exactly the kind of single-mention fact a distractor moves to the wrong drug.

> **Trap (confusable pair).** **Voriconazole's meal rule vs. terbinafine's.** Cue: ***voriconazole = 1 hour BEFORE or 1 hour AFTER a meal (away from food); terbinafine tablets = without regard to food.*** Both rules sit in the same implementation paragraph, and the teaching box restates only the voriconazole one — the tell that it is the one meant to be remembered.

> **Trap (SATA, five options mapped to categories).** **What to report on voriconazole** (p. 669): "**bleeding, bruising, soft-tissue swelling, dark urine, persistent nausea or diarrhea, rash, or yellow skin/eyes.**" The first three are the **same three** the teaching box gives for **amphotericin B,** so they cannot discriminate. The discriminating items are **dark urine and jaundice** (liver) plus the vision items — **photophobia,** monitored visual acuity, and "**avoid driving at night... because of drug-related vision changes.**"

> **Trap (confusable pair).** **Voriconazole and fluconazole both get a contraception instruction, for different reasons.** Cue: ***fluconazole = "the need for an ALTERNATIVE METHOD of contraception while taking this drug" (an interaction problem); voriconazole = "women of childbearing age need to use EFFECTIVE contraception because of drug-related TERATOGENIC effects" (a fetal-harm problem).*** Same teaching box, two different bullets.

---

## §8 Nursing process (pp. 667–669)

### Assessment (p. 667)

**Baseline for all antifungals:** "assess and document **vital signs, weight, hemoglobin (Hgb) level, hematocrit (Hct), red blood cell (RBC) counts, complete blood counts (CBCs) with differential, liver and renal function test results, and culture and sensitivity test results.**" Also: "**Baseline renal and hepatic function studies are usually ordered because of the adverse effects of nephrotoxicity and hepatotoxicity. Avoid concurrent administration of nephrotoxic drugs, if at all possible.**"

**Amphotericin B:** "There is a risk for severe adverse effects (e.g., **cardiac dysrhythmias, headache, chills, malaise, nausea, hypotension, anemia, gastrointestinal upset**) with intravenous amphotericin B administration... **thoroughly assess and document any issues with the cardiovascular and gastrointestinal systems.** Assess for any **special premedication orders for antiemetics, antihistamines, antipyretics, and/or antiinflammatory drugs**... **Bone marrow suppression is another contraindication to the use of this drug.**"

| Drug | Assess | Because of |
|---|---|---|
| **caspofungin** | "**blood pressure, pulse rate, liver function, RBC counts, and WBC counts**" | "hypotension, tachycardia, hepatotoxicity, decreased Hgb/Hct, and leukopenia" |
| **fluconazole** | "**preexisting gastrointestinal problems** and of **renal and/or hepatic functioning**" | "drug-induced adverse effects having an impact on these systems" |
| **nystatin** | lozenges "**generally not used in children younger than 5 years of age**" | (an age limit, not a lab) |

> **Trap (confusable pair).** **Which baseline goes with which antifungal.** Cue: ***amphotericin B = RENAL + hepatic + cardiovascular + GI (watch bone marrow suppression); caspofungin = BP, pulse, LIVER, RBC and WBC counts; fluconazole = GI history + renal/hepatic; nystatin = the patient's AGE.*** Chapter 39 runs the same matching structure for the antibiotics (aminoglycosides = hearing plus creatinine, daptomycin = CPK, linezolid = platelets), so the pattern carries across both chapters.

> **Trap (plausible-but-adjacent).** **"Avoid concurrent administration of nephrotoxic drugs, if at all possible"** is the nursing restatement of Table 42.3's "**Nephrotoxic drugs → Additive nephrotoxicity**" row. Chapter 39's aminoglycoside interaction table names **amphotericin B** explicitly, so a stem pairing gentamicin or vancomycin with amphotericin B draws on two chapters and the answer is the same from either side.

### Human need statements and outcomes (pp. 667–668)

| Human need statement | Matching outcome |
|---|---|
| "Altered **freedom from pain (acute)** related to symptoms of the infectious process" | "Patient has **minimal to no pain, resolution of fever, and improved well-being** after antifungal therapy has been initiated." |
| "Altered **self-actualization needs** related to a **deficient knowledge/experience** about antifungal drug therapy" | "Patient gains **increased knowledge** about the antifungal drug, its use, and adverse effects and reports **taking medication as prescribed and for the full course of therapy.**" |
| "Altered **safety needs, risk for injury,** related to **adverse effects of the medication treatment regimen**" | "Patient experiences **minimal to no injury to self** as related to the adverse effects of antifungal therapy and **returns to prescriber for constant monitoring of health status.**" |
| "Altered **safety needs, risk for injury,** related to the possibility of **poor adherence to completion of the treatment regimen**" | "Patient experiences minimal injury to self as related to **completion of full course of therapy.**" |

> **Trap (level/stage swap).** **Two of the four human need statements share identical opening words.** Statements 3 and 4 both begin "Altered safety needs, risk for injury," and the discriminator is entirely the "related to" clause: **adverse effects** vs. **poor adherence.** A distractor that swaps those two clauses keeps the diagnosis label correct and the etiology wrong, which is the standard nursing-diagnosis distractor shape.

### Implementation (p. 668)

**General IV rule:** "use an **inline filter** (see manufacturer guidelines) and **monitor the intravenous site for extravasation.**"

**Amphotericin B, step by step:**
- "**Do not administer solutions that are cloudy or have precipitates.**"
- "**Use of an intravenous infusion pump is recommended.**"
- "**Monitor vital signs every 15 minutes,** or as needed, to assess for adverse reactions such as **cardiac dysrhythmias, visual disturbances, paresthesias (numbness or tingling of the hands or feet), respiratory difficulty, pain, fever, chills, and nausea.**"
- "**If a severe reaction occurs (e.g., exacerbation of adverse effects, a decline in vital signs, difficulty breathing), discontinue the infusion while continuing to closely monitor the patient. Contact the prescriber immediately.**"
- "**Monitor the intravenous site for signs of phlebitis (e.g., heat, pain, and redness over the vein).**"
- "**Monitor intake and output and report decreasing urinary output of less than 240 mL/8 hr or less than 0.5 mL/kg/hr output.**"
- "**A gain of 2 lb or more in a 24-hour period or 5 lb or more in 1 week may indicate possible medication-induced renal damage and the need for prompt medical attention.**"

**IV fluid temperature, a general rule parked in the caspofungin paragraph:** "As with most intravenous infusions, **administer intravenous fluids at room temperature.** Blood is 98.6° F, so ideally intravenous fluids need to be **near the same temperature**... to **prevent a drop in body temperature and subsequent adverse effects.**"

**Caspofungin monitoring:** "**Liver toxicity may occur, so monitor liver function tests during therapy.** In addition, **constantly monitor the patient for the occurrence of tachycardia, hypotension, fever, hives, rash, increased feeling of warmth, flushing, chills, wheezing, or bleeding. Hgb and Hct levels also must be monitored frequently.**"

**Evaluation** (pp. 668–669): "The **therapeutic effects** of antifungals include **improvement and eventual resolution of the signs and symptoms of the fungal infection** if the patient has **remained totally adherent to the therapy regimen. Improved energy levels and improvement in overall sense of well-being with a normal temperature and other vital sign values** also indicate a therapeutic response."

> **Trap (priority question).** **Severe reaction during an amphotericin B infusion: DISCONTINUE, keep monitoring, then call.** Cue: ***the chapter's verb is "discontinue the infusion WHILE CONTINUING to closely monitor the patient," then "contact the prescriber immediately."*** Note this differs from review question 4's answer, which is about **preventing** reactions by infusing longer, and from Chapter 39's red man protocol, which **slows** rather than stops. Cue: ***prevention = infuse longer; established severe reaction = stop.*** A distractor that merely slows the rate during a severe reaction applies the prevention rule after the fact.

> **Trap (priority question).** **The case study's 1-hour-post-infusion reaction.** Case study question 3 (p. 668): "**One hour after the infusion is completed,** A.B. calls the nurse and says that he **feels as if he may vomit and has chills, yet feels hot at the same time.** What is the nurse's **priority action** at this time?" The three findings are the chapter's infusion-reaction triad (**nausea, chills, fever**), and the infusion is already **finished,** so stopping it is not an available action. The teaching box supplies the symptomatic-management list: "**Aspirin, acetaminophen, and/or ibuprofen; antihistamines; antiemetics; and antispasmodics.**" (Official answer on Evolve; GAPS item 8.)

> **Trap (confusable pair).** **Premedication vs. treatment: the same four categories do both jobs.** Case study question 1 asks the purpose of the acetaminophen and antihistamine given **before** the infusion; the teaching box lists nearly the same categories for symptoms **after** they occur. Cue: ***BEFORE = premedication to prevent or minimize the infusion-related reaction; AFTER = symptomatic management.*** The premedication list is **antiemetics, antihistamines, antipyretics, corticosteroids;** the assessment section swaps the fourth for "**antiinflammatory drugs**" (p. 667), the same category renamed.

> **Trap (priority question).** **Stay with the patient for the first 15 minutes.** Case study question 2 asks the rationale. The implementation rule is "**monitor vital signs every 15 minutes,** or as needed," and the profile rule is a **1-mg test dose over 20 to 30 minutes** to see whether the patient tolerates the drug. Cue: *early presence is about catching the infusion reaction while it is still small, not about the IV site.*

> **Trap (level/stage swap).** **Two numeric thresholds, both for renal damage on amphotericin B, measuring opposite things.** Cue: ***urine OUT: report less than 240 mL per 8 hours or less than 0.5 mL/kg/hr; weight ON: report a gain of 2 lb or more in 24 hours or 5 lb or more in 1 week.*** One is a rate, the other a gain, and both point at the same conclusion. Swapping the 2 and the 5, or the 24 hours and the 1 week, produces plausible wrong numbers.

> **Trap (plausible-but-adjacent).** **Room-temperature IV fluids is a general rule, not a caspofungin rule,** despite sitting inside the caspofungin paragraph: "as with **most** intravenous infusions." The stated reason is hypothermia prevention, not drug stability.

---

## §9 Patient teaching (p. 669)

De-bled from a two-column box and grouped by topic.

**Vaginal antifungal therapy**
- "**abstain from sexual intercourse until the treatment is completed and the infection is resolved.**"
- "**menstruation is not a contraindication** and... the medication **must be continued as prescribed.**"
- "**contact their prescribers if symptoms persist once treatment is completed.**"
- "If **vaginal troches** are prescribed: **with the applicator provided in the package, with use of a gloved hand, inserted high into the vagina, and followed with thorough hand washing** (see Chapter 9)."

**Amphotericin B**
- "may need **long-term treatment (i.e., 2 weeks to possibly 3 months).**"
- "Adverse effects include **tinnitus, blurred vision, burning and itching at the infusion site, headache, rash, fever, chills, hypokalemia, gastrointestinal upset, and various anemias.**"
- "The prescriber **must be notified immediately if there is bleeding, bruising, and/or soft-tissue swelling.**"
- "**Aspirin, acetaminophen, and/or ibuprofen; antihistamines; antiemetics; and antispasmodics** may be prescribed for the **symptomatic management** of adverse effects."

**Caspofungin**
- "**immediately report to the prescriber or call 911** if they have any problems with **shortness of breath, itching, facial swelling, and/or a rash.**"

**Nystatin**
- "the suspension needs to be **shaken thoroughly before measuring out each dose**"; "**placed half in each cheek and then swallow; do not mix with food.** Other directions may be to **swish and swallow.**"
- "**Avoid commercial mouthwashes during therapy** because these **may increase irritation to the oral mucosa.**"

**Fluconazole**
- "the need for an **alternative method of contraception** while taking this drug."
- "**Report any jaundice, nausea, vomiting, clay-colored stools, and/or dark urine to the prescriber immediately.**"

**Terbinafine**
- "the need for **long-term therapy of up to 10 weeks for toenail infection and 4 weeks for fingernail infection.**" *(conflicts with the dosage table; GAPS item 2)*

**Voriconazole**
- "often for **weeks up to 3 months,** depending on the type of infection"; "taken **1 hour before or 1 hour after meals**"; "the adverse effect of **photophobia**"; report "**bleeding, bruising, soft-tissue swelling, dark urine, persistent nausea or diarrhea, rash, or yellow skin/eyes**"; "**avoid driving at night**... because of **drug-related vision changes**"; "**Women of childbearing age need to use effective contraception** because of **drug-related teratogenic effects.**"

**General**
- "practice **good hand-washing technique at all times.**"
- "**keep affected body areas clean and dry** and to **wear light and cool clothing.**"
- "**Avoid contact of the topical dosage form with the eyes, mouth, nose, or other mucous membranes.**"

> **Trap (confusable pair).** **Menstruation does NOT interrupt vaginal antifungal therapy.** The chapter says it in the negative — "menstruation is not a contraindication and the medication must be continued as prescribed" — written as a correction of a common patient belief, which is the shape of a "which statement indicates a need for further teaching" item. The paired instruction, **abstain from intercourse until treatment is complete,** is a different rule with a different rationale.

> **Trap (level/stage swap).** **Three therapy durations, three drugs.** Cue: ***amphotericin B = 2 weeks to possibly 3 months; voriconazole = weeks up to 3 months; terbinafine = 4 to 10 weeks (teaching box) or 6 to 12 weeks (dosage table).*** The one invariant surviving the chapter's own contradiction is that **the toenail course is longer than the fingernail course,** which is therefore the safe fact to hold.

> **Trap (priority question).** **Caspofungin is the only drug here whose teaching says "call 911."** Cue: ***shortness of breath, itching, facial swelling, rash → prescriber immediately or 911.*** Those four are an anaphylaxis picture, and Table 42.2 supports it with caspofungin's integumentary row ("rash, **facial edema,** itching"). No other drug in this chapter gets an emergency-services instruction.

> **Trap (plausible-but-adjacent).** **Avoid commercial mouthwashes** is a nystatin instruction with a stated reason: they "may **increase irritation to the oral mucosa.**" A patient with thrush reaching for mouthwash is a plausible vignette; the wrong answer treats mouthwash as harmless adjunct hygiene.

---

## §10 Key points (p. 669)

The chapter's printed key points restate material already covered above and are **not reproduced here** — read them directly on p. 669. The two they emphasize that are easy to lose: yeasts "may be **harmful** (e.g., causing infections) or **helpful** (e.g., aiding in **baking or brewing beer**)," and the **fungistatic/fungicidal** distinction is concentration-dependent for the azoles.


## Cross-references

- **Chapter 38 (Antibiotics Part 1)** is the true prerequisite for this chapter's opening pages, even though Chapter 42 never cites it. Chapter 38 defines **superinfection** as "an infection occurring **during antimicrobial treatment for another infection,** resulting from **overgrowth of an organism not susceptible to the antibiotic used**" and gives the mechanism: antibiotics "**reduce or completely eliminate the normal bacterial flora**... other bacteria or **fungi** are permitted to take over and cause infection" (Ch 38, pp. 590, 592). **Chapter 42's candidiasis is that superinfection viewed from the antifungal side.** Table 42.1's transmission column for both candidiasis rows says it in the source's own words — "**overgrowth in response to treatment with antibiotic to which it is nonsusceptible**" — and this chapter's risk-factor lists are Chapter 38's superinfection risk list restated. Chapter 38's assessment cues bridge to this chapter's indications: "**whitish, sore patches on the oral mucosa** (from candidiasis or yeast infection)" and "vaginal itching, pain, and/or **cottage cheese–like discharge**" (Ch 38, p. 609). Chapter 38 carries **18 blueprint questions** to this chapter's 7, so a superinfection item can be asked from either end.
- **Chapter 39 (Antibiotics Part 2)** connects twice. **Amphotericin B appears in Chapter 39's own interaction table** as one of the nephrotoxic drugs raising aminoglycoside and vancomycin nephrotoxicity risk; Chapter 42 states the same interaction from its side ("**Nephrotoxic drugs → Additive nephrotoxicity,**" Table 42.3) and turns it into a nursing instruction (p. 667). And **infusion-reaction management is the same lesson twice:** Chapter 39's **red man syndrome** is fixed by slowing vancomycin to at least 1 hour; Chapter 42's amphotericin B reaction is prevented by a **2- to 6-hour** infusion — but once a **severe** reaction is underway, Chapter 39 slows the rate and Chapter 42 says **discontinue.** Chapter 39 also supplies the **synergy** definition this chapter uses without defining (amphotericin B plus flucytosine) and the **nephrotoxicity** definition ("usually reversible upon withdrawal of the offending drug").
- **Chapter 2 (Pharmacologic Principles)** is where the mechanism behind Table 42.3 is actually defined. **Cytochrome P-450** is a Chapter 2 key term ("the general name for a **large class of enzymes** that plays a significant role in **drug metabolism and drug interactions**," Ch 2, p. 13), and Chapter 2 states the rule Chapter 42 applies: "**most commonly, drug interactions occur when there is competition between two drugs for metabolizing enzymes, such as the cytochrome P-450 enzymes.**" Chapter 2's **inhibitor vs. inducer** direction rule is what makes Table 42.3's last row legible — azoles are **inhibitors** (target drug levels rise), while phenytoin, rifampin, phenobarbital, and carbamazepine are **inducers** (azole levels fall). Chapter 2's P-450 table uses **ketoconazole** as its worked inhibitor example, a Chapter 42 drug. **Therapeutic index** is likewise Chapter 2's term ("the **ratio between the toxic and therapeutic concentrations** of a drug"; a drug with a **low** index "has a greater likelihood of causing an adverse reaction, and therefore requires closer monitoring"). That is the frame for amphotericin B, whose therapeutic dose produces adverse effects in "almost all patients," and the exact reason nystatin cannot be dosed systemically ("**toxic effects when given in the dosages required**"). Chapter 2 carries **12 blueprint questions.**
- **Chapter 45 (Antineoplastic Drugs Part 1)** for **5-FU,** flucytosine's active metabolite: "5-FU is also available as an **antineoplastic (anticancer) drug** and is discussed in more detail in **Chapter 45**" (p. 663). Chapter 45 carries 2 blueprint questions.
- **Chapter 9** for the hand-washing and applicator technique in the vaginal troche teaching bullet (p. 669).
- **Chapter 56 (Dermatologic Drugs)** for topical antifungals generally (p. 663) and terbinafine's topical forms (p. 664). **Chapter 57 (Ophthalmic Drugs)** for **natamycin,** "a single antifungal drug... for ophthalmic use" (p. 663). Neither is on this blueprint.
- **Chapter 7 (OTC Drugs and Herbal/Dietary Supplements)** is not cited here, but the key points' assessment bullet names "**prescription drugs, over-the-counter drugs, and herbals**" (p. 669), and topical antifungals "are often administered **without prescription**" (p. 663). Chapter 7 carries 4 blueprint questions.

---

## GAPS (flagged, not filled)

1. **The blueprint gives a weight but no topics.** `blueprint.json` sets this chapter at **7 questions, depth `standard`,** derived from `blueprint_source.docx`, which tallies returned exams by chapter (Exam 1: 6 items; Final: 1; combined 7 of 121, 5.8%). That document has **no required-topic column,** so the brief's topic checklist is empty and the validator's required-topic check passes vacuously. Section emphasis within the chapter is therefore my judgment, weighted toward the eight review questions and two critical thinking exercises; **only the overall depth is the exam's.** There are also **no logged misses** for this chapter yet, so nothing here has been corrected by a drill or exam result.

2. **The chapter contradicts itself on terbinafine's therapy duration, and both numbers are printed.** The **dosage table** (p. 666): "PO: 250 mg/day for **6 weeks (fingernail)** or for **12 weeks (toenail)**." The **patient teaching box** (p. 669): "long-term therapy of up to **10 weeks for toenail** infection and **4 weeks for fingernail** infection." Both are quoted above as printed and **neither is reconciled here,** because the chapter does not reconcile them. The only statement surviving both versions is that the **toenail course is longer.** If a specific number is tested, this is a coin flip the source created.

3. **Three statements are unexplained or internally odd, and none was filled from outside knowledge:**
   - The **key points bullet attributing extravasation-induced tissue necrosis to fluconazole** inside a bullet whose subject is amphotericin B (p. 669). The body text's extravasation warning is generic and its phlebitis warning belongs to amphotericin B.
   - **P-glycoprotein inhibition by itraconazole and posaconazole** (p. 664) is stated in one clause with **no consequence attached** — no interacting drugs, no clinical effect, no cross-reference.
   - **Nystatin's oral onset of action (24 hr) exceeds its peak plasma concentration (2 hr)** in the pharmacokinetics table (p. 667). Printed as given.

4. **Table 42.1's histoplasmosis row has no reservoir entry in the pulled text.** Every other systemic row names one (soil; soil and animal droppings; humans; soil and dust; soil and bird/chicken droppings). The histoplasmosis row reads "*Histoplasma capsulatum* | Universal | | Inhalation | Lungs." This could be a genuinely blank cell or a casualty of the two-column extraction; **it was not filled from memory.** Read the printed table directly if this cell is tested.

5. **The pregnancy letter categories are printed as given and are obsolete.** The dosage table (p. 666) labels amphotericin B and its three lipid forms **(B)**, caspofungin **(C)**, fluconazole **(C)**, nystatin **(C)**, terbinafine **(B)**, and voriconazole **(D)**. The FDA replaced letter categories with the **Pregnancy and Lactation Labeling Rule (PLLR)** in 2015; this 2023 edition still prints letters. Reproduced as printed; **do not treat them as current regulatory labeling.** They also sit awkwardly against the chapter's prose, which calls voriconazole "**the only antifungal drug contraindicated in pregnancy**" — a stronger claim than category **D** conveys, with no drug in the table labeled **X** to support it. Separately, Table 42.2 tags nystatin **(T)** topical-only while the dosage table prints an **oral** nystatin regimen; both are reproduced rather than reconciled.

6. **This PDF is an uncorrected proof,** and this chapter carries several surviving errors, all quoted above **as they appear:**
   - "**oncychomycosis** of the toenail" (p. 664), for *onychomycosis,* which the chapter spells correctly elsewhere.
   - The dosage table's footnote reads "**CSF, Cerebrospinal fluid**" (p. 666), but **no CSF abbreviation appears anywhere in that table** — an orphaned footnote, most likely carried over from another table.
   - Review question 2's option **e** is set as "**C hills**" with an intruding space (p. 670).
   - The reference list misspells the article title: "management of **candidiaisis:** 2016 update" (Pappas et al., p. 670).
   - Table 42.1 mixes "**species**" and "**spp.**" within one cell (*Epidermophyton* species, *Microsporum* species, *Trichophyton* spp., p. 663), and the voriconazole profile writes "*Fusarium* **spp.**" (p. 667) where the indications paragraph wrote "*Fusarium* **species**" (p. 664).
   - The pharmacokinetics tables mix en dashes and hyphens for ranges in the same chapter ("1–15 days" vs. "8-15 hr" vs. "20-50 hr," pp. 666–667).
   - "**Blood is 98.6° F**" (p. 668) is a loose way of stating body temperature, printed inside a general rule about IV fluid warming.

7. **Most drugs named in the classification sentence get no profile, no dose, and almost no text.** **Micafungin (Mycamine)** and **anidulafungin (Eraxis)** appear twice each — in the class list and in caspofungin's closing sentence — with **no indications, no doses, no adverse effects, no pharmacokinetics.** **Posaconazole, isavuconazonium, itraconazole, ketoconazole, flucytosine, and griseofulvin** each get an indications clause and a contraindication or mechanism sentence but **no profile and no dosage row.** **Ibrexafungerp** gets one sentence. The chapter's depth is concentrated entirely in its **six profiled drugs.** If an exam item asks a dose or adverse effect for an unprofiled drug, **this chapter does not contain it,** and nothing was supplied from memory.

8. **Answers to the case study, critical thinking exercises, and review questions are not in the pulled text, and they live in two different places.** The **case study** (p. 668) and the **critical thinking exercises** (p. 669) both say "For answers, see **http://evolve.elsevier.com/Lilley.**" The **review questions** (p. 670) say "For answers, see **Answers to Review Questions at the back of the book,**" which is outside this chapter's page range and so outside the pull. Everything §5 through §11 says about review questions 1 through 8, the two critical thinking exercises, and the four case study questions is **reasoning from the chapter's own body text and is not the official key.**
   - The one exception is **review question 7,** arithmetic rather than judgment: 500,000 units ÷ 100,000 units/mL = **5 mL.** That is my computation, cross-checked against the dosage table's 400,000–600,000 units (4–6 mL) range, not the printed key.

9. **The chapter gives no antifungal-resistance content at all.** Chapters 38 and 39 devote substantial space to antibiotic resistance and resistant-organism vocabulary. Chapter 42 mentions resistance **only** as a fungus being "**nonsusceptible**" to an antibiotic (Table 42.1) and infections being "**refractory to**" other drugs (caspofungin, lipid amphotericin B). **Antifungal resistance as a phenomenon is not discussed,** and nothing was imported from the antibiotic chapters to fill the space. Likewise, **culture and sensitivity** is named as a baseline (p. 667) and invoked in the amphotericin B override (p. 666) but is defined in **Chapter 38,** not here.

10. **No figures.** This chapter contains **three numbered tables (42.1, 42.2, 42.3), one dosage table, six pharmacokinetics tables, and no figures at all** — not even a diagram of the fungal cell wall and membrane, the one image that would carry the §4 membrane/wall distinction. The digest's figure list is empty for this chapter, and nothing visual was reconstructed.

11. **Terminology note:** the source text uses "**patient**" throughout, matching the house format contract, so no substitution was needed. All direct quotations preserve the source's wording, spelling, and punctuation unchanged, including the errors listed in item 6.
