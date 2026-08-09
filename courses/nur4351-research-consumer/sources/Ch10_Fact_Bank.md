# Fact bank — Chapter 10: Clarifying Measurement and Data Collection in Quantitative Research

**Source:** Grove & Gray, *Understanding Nursing Research: Building an Evidence-Based Practice*, 7th ed. (Elsevier, 2019), Chapter 10.

**To regenerate the raw text:**

```bash
factbank pull --course courses/nur4351-research-consumer --chapter 10
factbank digest --course courses/nur4351-research-consumer --chapter 10
```

Raw pull is 107,889 chars. **This file is the curated layer.** Text-layer PDF, no column bleed; definitions quoted directly. **Page numbers do not match the print edition** (see `pagination_note` in `book.json`), so this file cites section names.

**Blueprint weight: 10 questions — tied for the heaviest line on the final, its own solo line ("Stats: Data Collection & Measurement"). Computed depth: FULL.** The four levels of measurement (§2), the reliability/validity split (§4–5), and sensitivity/specificity (§6) are the three densest clusters.

---

## Key terms

| Term | Definition as given |
|---|---|
| **direct measures** | "Determining the value of **concrete factors** such as weight, waist circumference, temperature, heart rate, and BP." |
| **indirect measures (indicators)** | Measures that "capture **some of the elements**" of an abstract concept that cannot be measured directly. |
| **measurement error** | "The difference between the **true measure** and what is **actually measured.**" |
| **random measurement error** | "The difference between the measured value and the true value is **without pattern or direction.**" |
| **systematic measurement error** | "The variation in measurement values from the calculated average is **primarily in the same direction.**" |
| **reliability testing** | "Determines the **measurement error** in an instrument or scale used in a study." |
| **stability reliability** | "Concerned with the **reproducibility of scores with repeated measures** of the same concept... over time." Determined by **test-retest.** |
| **equivalence** | "The comparison of **two versions** of the same paper and pencil instrument or of **two observers** measuring the same event." |
| **interrater reliability** | "Comparison of **two observers or two judges** in a study." |
| **alternate (parallel) forms reliability** | "Comparison of **two paper and pencil instruments or scales.**" |
| **internal consistency (homogeneity)** | Testing "used primarily with **multi-item scales**, in which **each item is correlated with all other items**." |
| **Cronbach alpha coefficient** | "The **most commonly used** measure of internal reliability for scales with multiple items." |
| **validity** | "A determination of **how well the instrument measures the abstract concept** being examined." |
| **content validity** | "Examines the extent to which the measurement method or scale **includes all the major elements or items relevant** to the construct being measured." |
| **construct validity** | "Focuses on determining whether the instrument **actually measures the theoretical construct that it purports to measure**" — the fit between conceptual and operational definitions. |
| **criterion-related validity** | Strengthened when "a study participant's score on an instrument **can be used to infer his or her performance on another variable or criterion.**" |
| **predictive validity** | "The extent to which an individual's score... can be used to predict **future** performance or behavior on a criterion." |
| **concurrent validity** | "The extent to which an individual's score... can be used to estimate her or his **present or concurrent** performance on another variable." |
| **readability level** | "The study participants' **ability to read and comprehend** the content of an instrument or scale." |
| **sensitivity** | "The proportion of patients **with the disease** who have a **positive** test result, or **true-positive rate.**" |
| **specificity** | "The proportion of patients **without the disease** who have a **negative** test result, or **true-negative rate.**" |
| **likelihood ratios (LRs)** | Calculations "to determine the likelihood that a **positive test result is a true-positive** and that a **negative test result is a true-negative.**" |
| **rating scale** | "Lists an **ordered series of categories** of a variable that are assumed to be based on an underlying continuum." **"The crudest form of measurement involving scaling techniques."** |
| **Likert scale** | "Designed to determine the **opinions or attitudes** of study subjects"; contains **declarative statements** each followed by a scale. |
| **visual analog scale (VAS)** | "Used to measure **strength, magnitude, or intensity** of individuals' subjective feelings, sensations, or attitudes." |

---

## §1 Directness of measurement

- **Direct measures** — concrete: weight, waist circumference, temperature, heart rate, BP, plus demographics (age, educational level, number of surgeries, days of hospitalization). Focus is on **accuracy of the method and precision of the process.**
- **Indirect measures** — for abstract concepts (pain, coping, depression, adherence). **"Rarely, if ever, can a single measurement strategy measure all aspects of an abstract concept."**

> **The rule this generates:** **multiple measurement methods are needed for abstract concepts** — this "**decreases the measurement error and increases the understanding** of the concept."

**The chapter's pain example (Fig. 10.1):** pain measured by the **FACES® Pain Rating Scale**, **observation** (rubbing/guarding the area, facial grimacing, crying), and **physiological measures** (pulse, BP, respiration). Physiological measures give "a more **objective** measurement." **Even with all three, the entire concept of pain is not completely measured.**

**Precision in practice:** for BP, "three BP measurements are usually taken and **averaged**" to determine the most accurate and precise reading.

---

## §2 The four levels of measurement (Stevens, 1946) — highest-yield

**From low to high: NOMINAL → ORDINAL → INTERVAL → RATIO.** Each level adds a rule.

| Level | Rules it satisfies | Can you...? | Examples |
|---|---|---|---|
| **Nominal** | Exclusive, exhaustive, **NOT orderable** | Categorize only | Gender, race/ethnicity, marital status, **medical diagnoses** |
| **Ordinal** | Exclusive, exhaustive, **ranked** — but **unequal intervals** | Rank | Levels of mobility, self-care ability, **dyspnea scales**, pain categories |
| **Interval** | Adds **equal intervals**; **no absolute zero** | Add/subtract | **Temperature (°F)** |
| **Ratio** | Adds **absolute zero** | Add, subtract, multiply, divide; make ratio statements | **Weight, length, volume** |

**The three nominal rules, with the chapter's own worked failures:**
- **Not orderable** — "kidney stone cannot be rated higher than gastric ulcer." Categories "differ in **quality but not quantity.**"
- **Exclusive** — each datum fits **only one** category. *Failure:* a person widowed then remarried cannot choose between "Widowed" and "Married" — fix by redefining the variable as **"Current Marital Status."**
- **Exhaustive** — all data fit somewhere. *Failure:* "Cardiac Medical Diagnoses" offering only Hypertension / Heart Failure / MI leaves **cardiomyopathy** unmarkable. Adding **"Other"** makes it exhaustive, "but these data are **difficult to analyze and interpret.**"

**Why ordinal intervals are unequal:** with pain ranked excruciating/severe/moderate/mild/none, "a **greater difference may exist between mild and moderate pain than between excruciating and severe pain.**" Same for the 0–4 dyspnea scale: "a smaller difference may exist between the ranks of 1 and 2 than between the ranks of 3 and 4."

**Why interval isn't ratio:** "the difference between 70°F and 80°F is 10°F and is the same as the difference between 30°F and 40°F... However, **a temperature of 0°F does not indicate the absence of temperature.**"

**Why ratio permits ratio statements:** because of absolute zero, "**Participant A weighs 25 more pounds than participant B**" and "**Medication container A holds twice as much as container B**" are both justified.

> **The analytic consequence — this is why the level matters:** "**Interval- and ratio-level data can be added, subtracted, multiplied, and divided**... Thus interval and ratio data can be analyzed with **statistical techniques of greater strength** to determine significant relationships and differences." (Ties directly to Ch 9's power discussion and Ch 11's test selection.)

---

## §3 Measurement error

**"Some error is always present in any measurement strategy."** Even **direct measures** are subject to error: a scale inaccurate by 0.5 lb, calibrated BP equipment losing accuracy with use, a tape measure held at different tensions, or a 65-year-old writing illegibly so the age is entered wrong.

**With indirect measures**, methods may capture **elements that are not part of the concept** — pain measures "might be measuring aspects of **anxiety and fear** in addition to pain."

| | **Random error** | **Systematic error** |
|---|---|---|
| **Direction** | **No pattern or direction** — sometimes above, sometimes below the true value | **Primarily in the same direction** — mostly higher or mostly lower than the average |
| **Causes given** | Inconsistent procedure, a participant marking the wrong column, a data-entry keystroke error | A consistent flaw in the instrument or process |
| **Remedy** | **Average multiple values** — "an average value, such as the mean, is a closer estimate of the true measurement" | Not fixed by averaging |

**"As the number of random errors increases, the precision of the estimate decreases."**

---

## §4 Reliability — three types

**Reliability "exists in degrees and is usually expressed as a correlation coefficient."**

> **The rule most often missed:** "**Estimates of reliability are specific to the sample being tested.** High reliability values reported for an established instrument **do not guarantee** that reliability will be satisfactory in another sample or with a different population. Researchers need to perform reliability testing **on each instrument used in a study.**"

| Type | What it checks | How tested | Benchmarks |
|---|---|---|---|
| **Stability** | **Reproducibility over time** | **Test-retest** | CES-D: **r = 0.51 to 0.67** at 2–8 week intervals — "very solid" |
| **Equivalence** | Two observers, or two versions | **Interrater reliability** (two observers/judges); **alternate/parallel forms** (two instruments) | **Below 0.80 = serious concern.** **Best at 0.90 (90%) or higher.** "There is **no absolute value** below which interrater reliability is unacceptable" |
| **Internal consistency (homogeneity)** | Each item correlates with all other items | **Cronbach alpha** | **1.00 = perfect, 0.00 = none.** **0.80 = strong** for an established scale; **0.70 = acceptable for a relatively new scale** |

**Test-retest assumption:** "the attribute to be measured **remains the same** at the two testing times and that any change in the value or score is a consequence of **random error.**"

**Cronbach alpha constraint:** it "**can only be calculated for interval- and ratio-level data.**" **For dichotomous data (yes/no), use the Kuder-Richardson formula (K-R 20).**

**"The stronger correlation coefficients, which are closer to 1.0, indicate less random error and a more reliable scale."**

**Studies collecting observational data or requiring judgments by two or more data gatherers must report interrater reliability.**

---

## §5 Validity — three types

**"Validity, like reliability, is not an all-or-nothing phenomenon; it is measured on a continuum. No instrument is completely valid."**

> **The other rule most often missed:** "Validity will vary from one sample to another and one situation to another; therefore **validity testing evaluates the USE of an instrument for a specific group or purpose, rather than the instrument itself.** An instrument may be **valid in one situation but not another.**" The chapter's case: the CES-D was developed for **mental health settings** — whether it is valid for **cancer patients** must be established by **pilot-testing in the new population.**

### Content validity
Does the scale include **all the major elements** of the construct? Evidence comes from three sources:
1. How well items **reflect the description of the concept in the literature** (**face validity**)
2. **Content experts' evaluation** of item relevance (may be reported as an **index**)
3. **Study participants' responses** to scale items

### Construct validity — three kinds of evidence

| Evidence from | How it works | Expected result |
|---|---|---|
| **Contrasting groups** | Compare groups **expected/known to differ** (people diagnosed with depression vs. not) | The diagnosed group scores **higher** on the CES-D |
| **Convergence** | Administer a **new** instrument and an **existing** one measuring **the same** construct at the same time | **Strong POSITIVE correlation.** CES-D vs. Hamilton Rating Scale: **0.40 to 0.80** |
| **Divergence** | Administer instruments measuring **opposite** concepts (hope vs. hopelessness/despair) | **NEGATIVE correlation**, e.g. **−0.4 to −0.8** |

### Criterion-related validity — two kinds

| | **Predictive validity** | **Concurrent validity** |
|---|---|---|
| **Timing** | **FUTURE** performance | **PRESENT** performance |
| **Example** | A health-promotion-behaviors scale predicting **future** BP, BMI, minutes of exercise | Using a **self-esteem** score to estimate a **coping with illness** score now |

**"The difference between concurrent validity and predictive validity is the TIMING of the measurement of the other criterion."**

> **The dependency rule:** "You **cannot consider validity apart from reliability.** **If a measurement method does not have acceptable reliability, then it is not valid.**"

**Readability** "is essential if an instrument is to be considered **valid and reliable** for a sample." Assessing it takes **10 to 15 minutes**; **more than 30 readability formulas** exist.

---

## §6 Diagnostic test accuracy — sensitivity, specificity, predictive values

**The 2×2 table:** **a** = true-positive, **b** = false-positive, **c** = false-negative, **d** = true-negative.

| Measure | Definition | Plain-language rule from the chapter |
|---|---|---|
| **Sensitivity** | Proportion **with the disease** testing **positive** — **true-positive rate** | "A **highly sensitive** test is very good at **identifying the disease** in a patient." "If a test is highly sensitive, it has a **low percentage of FALSE NEGATIVES**" |
| **Specificity** | Proportion **without the disease** testing **negative** — **true-negative rate** | "A **highly specific** test is very good at **identifying the patients WITHOUT a disease.**" "If a test is very specific, it has a **low percentage of FALSE POSITIVES**" |
| **NPV** | — | "A **high NPV** test means the patient **probably does not have the disease**, which **reduces the number of uncomfortable, costly treatments**" |
| **PPV** | — | May "not be relevant" for ruling out disease |

> **The trade-off to memorize:** "**As a test becomes more sensitive, it usually becomes LESS specific.**"

**Benchmark values (CES-D, score ≥15):** sensitivity **89%** in adults / **92%** in older adults; specificity **70%** in adults / **87%** in older adults.

**The worked ASQ example** (Ask Suicide Screening Questions, 4 items, pediatric ED, ages 10–21; a "yes" to any item = positive screen):
- Development study vs. the SIQ criterion standard: sensitivity **97.6%**, specificity **65.6%**, NPV **96.9%**
- In the implementation study: sensitivity **93.3%**, specificity **43.3%**, NPV calculated at **98.98%**
- **53% of patients who screened positive did not present with suicide-related complaints** — they were more likely to be **male, African American, with externalizing behavior diagnoses**

**Likelihood ratios:**
- **Positive LR** = ratio of **true-positive to false-positive** results
- **Negative LR** = ratio of **true-negative to false-negative** results
- **LR > 10 → rules IN the disease.** **LR < 0.1 → almost rules OUT the disease.**

---

## §7 Measurement strategies

**Physiological measures** — accuracy and precision are the focus.

**Observational measurement** — requires **interrater reliability** reporting.

**Structured interviews.**

**Rating scales** — "the **crudest** form of measurement involving scaling techniques." Easy to develop, but **avoid end statements so extreme no participant will select them.** Some are far better validated than others: the **Wong-Baker FACES® Pain Rating Scale** has documented reliability and validity. For adults, "using the **NRS** is **more valid and reliable** than asking a patient to rate her or his pain on a scale from 1 to 10."

**Likert scale** — **the most commonly used scaling technique.**
- Measures **opinions or attitudes** via **declarative statements**
- Original version had **five** response categories; most negative = 0 or 1, most positive = 4 or 5
- Response types: **agreement** (strongly disagree → strongly agree), **evaluation** (bad–good, terrible–excellent), **frequency** (never → all the time)
- **Odd number of options → middle is "uncertain/neutral."** This is **controversial** because it "allows the participant to **avoid making a clear choice.**" Using **four or six options with no midpoint = a forced choice version**
- Usually **10 to 20 items**; values are **summed** for a single score

> **The level-of-measurement subtlety that makes a good exam item:** "Although the values of each item are **technically ORDINAL-level data**, the **summed score is often analyzed as INTERVAL-level data.**"

**The CES-D specifics:** four response options — Rarely/none (<1 day) = 0; Some/a little (1–2 days) = 1; Occasionally/moderate (3–4 days) = 2; Most/all (5–7 days) = 3. **Scores range 0 to 60**; higher = more depressive symptoms. **A score of 16 or higher is the extensively used cutoff for depression.**

**Visual analog scale (VAS)** — a line **usually 100 mm long** with **right-angle "stops" at either end**, presented horizontally or vertically, with **bipolar anchors** beyond each end. **The anchors must span the entire range possible** (all/none, best/worst, no pain/unbearable pain). Participants **place a mark through the line.**

---

## §8 The data collection process

Elements the chapter names: **recruitment of study participants**, **consistency in data collection**, and **studies obtaining data from existing databases.**

---

## Source conflicts and traps

- **Reliability and validity are properties of the USE, not the instrument.** Both "vary from one sample to another." An option treating a published Cronbach alpha as proof the scale is reliable *in this study* is wrong — researchers must test it in their own sample.
- **A reliable instrument is not necessarily valid, but an UNRELIABLE instrument cannot be valid.** "If a measurement method does not have acceptable reliability, then it is not valid." The one-way dependency is the testable point.
- **Sensitivity ↔ false negatives; specificity ↔ false positives.** High sensitivity = **few false negatives** (good for ruling disease *in* by catching cases); high specificity = **few false positives**. These are swapped constantly. And remember: **more sensitive usually means less specific.**
- **Ordinal data have UNEQUAL intervals** — that is the whole distinction from interval. Any option treating a 0–4 dyspnea or pain rank as having equal spacing is wrong.
- **Interval lacks absolute zero; ratio has it.** Temperature in °F is the standard interval example precisely because 0°F is not "no temperature." Only ratio data support "twice as much" statements.
- **A Likert item is ordinal, but the SUMMED Likert score is commonly analyzed as interval.** Both halves of that sentence are true — an item may test either.
- **Cronbach alpha requires interval/ratio data**; **dichotomous (yes/no) data need K-R 20.** A stem applying Cronbach alpha to yes/no items is the distractor.
- **Interrater reliability benchmarks: below 0.80 is a serious concern, 0.90+ is best** — but the chapter explicitly says there is **no absolute cutoff**. An option asserting a hard threshold overstates it.
- **Cronbach alpha benchmarks differ by scale maturity: 0.80 for established scales, 0.70 acceptable for new ones.** Judging a new scale against the 0.80 standard misapplies the rule.
- **Convergent validity → POSITIVE correlation; divergent validity → NEGATIVE correlation.** A negative correlation between a hope scale and a hopelessness scale *supports* validity — it is not a failure.
- **Predictive vs. concurrent validity is purely about TIMING** (future vs. present), not about strength.
- **Content validity includes face validity as one of three evidence sources** — face validity is not a separate fourth type in this chapter.
- **Random error is fixed by averaging; systematic error is not.** Parallel to Ch 9's rule that sample size fixes random but not systematic variation.
- **Even direct measures contain error.** An option claiming physiological measures are error-free contradicts the chapter's own examples (miscalibrated scales, tape tension).
- **Multiple measures are required for abstract concepts** — and even then the concept is not fully captured. An option claiming a single well-validated scale fully measures pain contradicts Fig. 10.1.
- **An "Other" category makes a nominal variable exhaustive but produces data that are "difficult to analyze and interpret."** Adding it is a trade-off, not a free fix.
