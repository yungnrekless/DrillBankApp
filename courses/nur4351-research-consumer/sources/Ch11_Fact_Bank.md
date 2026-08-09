# Fact bank — Chapter 11: Understanding Statistics in Research

**Source:** Grove & Gray, *Understanding Nursing Research: Building an Evidence-Based Practice*, 7th ed. (Elsevier, 2019), Chapter 11.

**To regenerate the raw text:**

```bash
factbank pull --course courses/nur4351-research-consumer --chapter 11
factbank digest --course courses/nur4351-research-consumer --chapter 11
```

Raw pull is 127,849 chars. **This file is the curated layer.** Text-layer PDF, no column bleed; definitions quoted directly. **Page numbers do not match the print edition** (see `pagination_note` in `book.json`), so this file cites section names.

**Blueprint weight: 8 questions, its own solo line ("Stats: Data Analysis"). Computed depth: FULL.** The test-selection table (§6) and the Type I/II error logic (§2) are the two structures most likely to be tested.

---

## Key terms

| Term | Definition as given |
|---|---|
| **probability theory** | Used "to explain the **extent of a relationship**, the probability that an event will occur, or the probability that an event can be accurately predicted." |
| **decision theory** | "Assumes that **all of the groups in a study... are components of the same population** relative to the variables under study." |
| **null hypothesis** | "States that there is **no difference** between (or among) the groups in a study." |
| **alpha (α) / level of statistical significance** | "The probability level at which the results of statistical analysis are judged to indicate a **statistically significant difference** between the groups." |
| **Type I error** | Occurs "when the null hypothesis is **rejected when it is true**" — saying something is significant when it is not. |
| **Type II error (beta, β)** | Occurs "when the null hypothesis is **regarded as true but is in fact false**" — saying something is not significant when it is. |
| **power** | "The **probability that a statistical test will detect a significant difference that exists.**" |
| **effect size** | "The degree to which the phenomenon is present in the population, or the degree to which the **null hypothesis is false**" (Cohen, 1988). |
| **normal curve** | "A **theoretical** frequency distribution of all possible values in a population; however, **no real distribution exactly fits** the normal curve." |
| **two-tailed test** | "The analysis of a **nondirectional** hypothesis." |
| **one-tailed test** | Used when "the hypothesis is **directional**, and extreme statistical values that occur in a **single tail** of the curve are of interest." |
| **inference** | "A conclusion or judgment based on evidence." |
| **mode** | "The numerical value or score that occurs with **greatest frequency**." |
| **median** | "The midpoint or the score at the **exact center** of the ungrouped frequency distribution — the **50th percentile**." |
| **mean** | "The **sum of the scores divided by the number of scores** being summed." |
| **measures of dispersion (variability)** | "Measures of **individual differences** of the members of the sample"; how scores are "dispersed or spread around the mean." |
| **standard deviation (SD)** | "The **square root of the variance**" — "the **average difference (deviation) value**." |
| **confidence interval (CI)** | When "the probability of including the value of the population within an **interval estimate** is known." |
| **z-score** | A standardized score that "expresses **deviations from the mean** (difference scores) **in terms of SD units.**" |
| **parametric analyses** | Conducted when variables are at the **interval or ratio** level **and** values are **normally distributed.** |
| **nonparametric analyses** | Conducted when variables are measured at the **nominal and ordinal** levels. |
| **independent groups** | "The selection of one study participant is **unrelated** to the selection of other participants." |
| **paired (dependent) groups** | Participants or observations "are **related in some way** to the selection of other participants or observations." |
| **Pearson product-moment correlation** | "An inferential analysis technique conducted to examine **bivariate correlations.**" |
| **explained variance** | The variation "explained by the relationship between the two variables," indicated by **r²** and expressed as a **percentage.** |
| **ANOVA** | "A **parametric** statistical technique conducted to examine differences among **three or more groups.**" |
| **post hoc analyses** | Conducted after ANOVA "to determine the **location of the differences** among groups." |

---

## §1 Probability, decision theory, and significance

**Probability (p)** ranges from **0 to 1**, expressed as a decimal or percentage. **p = 0.23** means a **23% probability** the outcome occurs.

**Decision theory** assumes all groups **are from the same population** — expressed as the **null hypothesis.** "It is up to the researcher to provide evidence for a genuine difference."

**Alpha is set BEFORE data collection.** "The level of significance selected for most nursing studies is **0.05.**" If **p ≤ 0.05**, groups are "considered to be significantly different (members of different populations)."

> **The absoluteness rule — a favorite exam target:** "Decision theory requires that the cutoff point selected for a study be **ABSOLUTE**... It is **inappropriate** to state that the findings **approached significance at p = 0.051** if the alpha level was set at 0.05." Under decision theory that result means the groups are **not** significantly different.
>
> **And in the other direction:** "once the level of significance has been set at 0.05... if the analysis reveals a significant difference of **0.001, this result is NOT considered MORE significant** than the 0.05 originally proposed. **The level of significance is dichotomous** — the difference is significant or not significant; **there are no 'degrees' of significance.**"

**But from a probability-theory perspective**, p = 0.001 vs. p = 0.05 does differ in **Type I error risk**: at p = 0.001 the chance the groups are from the same population is **1 in 1000**; at p = 0.05 it is **5 in 100.**

**In summary:** "the **probability (p) value reveals the risk of a Type I error** in a particular study. The **alpha (α) value, set before the study**, reveals whether the probability value met the cutoff point."

---

## §2 Type I and Type II errors — the core logic

|  | **Null hypothesis is TRUE** | **Null hypothesis is FALSE** |
|---|---|---|
| **Reject the null** | **TYPE I ERROR** | Correct decision |
| **Accept the null** | Correct decision | **TYPE II ERROR (β)** |

- **Type I** = "saying something is **significant when it is not.**" **Risk is indicated by the level of significance.** **Greater risk at α = 0.05 (5 in 100) than at α = 0.01 (1 in 100).**
- **Type II** = concluding no relationship/difference **when one exists.** **Greater risk at α = 0.01 than at 0.05.**

> **The inverse relationship is the whole point:** tightening alpha (0.05 → 0.01) **reduces Type I risk but increases Type II risk.**

**Why Type II risk is high in nursing specifically:** "Type II errors are often caused by **flaws in the research methods**. In nursing research, many studies are conducted with **small samples** and with **instruments that do not accurately and precisely measure** the variables... In many nursing situations, **multiple variables interact**... When only a few of the interacting variables are examined, **small differences between groups may be overlooked.** Thus **the risk of a Type II error is often high in nursing studies.**"

**Power controls Type II risk.** **Cohen's four parameters of a power analysis:** (1) **power**, (2) **level of significance**, (3) **effect size**, (4) **sample size.** **"If three of the four are known, the fourth can be calculated."**

- **Minimum acceptable power = 0.80 (80%).**
- **In many nursing studies only small effect sizes can be expected** — and with a small effect, "a sample of **200 or more** is often needed to detect a significant difference."
- **Small effect sizes occur with small samples, weak study designs, and instruments measuring only large changes.**
- **"The power level should be discussed in studies that fail to reject the null hypothesis. If the power level is below 0.80, you need to question the validity of the nonsignificant findings."**

---

## §3 The normal curve and tailedness

**The normal curve** was developed by **Johann Gauss in 1795, at age 18.** No real distribution exactly fits it.

**The SD landmarks (memorize):**

| Within… | Contains |
|---|---|
| **1 SD** above/below the mean | **68%** of values |
| **1.96 SDs** | **95%** |
| **2 SDs** (−2 to +2) | **95.5%** |
| **2.58 SDs** | **99%** |

**The tails** are "the extreme ends... below −2 (−1.96 exactly) SDs (**2.5%**) or above +2 (+1.96 exactly) SDs (**2.5%**)."

**The logic of significance:** if groups are from the same population, their values fall **within the 95% range.** If a value falls **outside** it, the groups are considered to belong to different populations. **"However, in 5% of statistical tests, the value of one of the groups can be expected to fall outside the 95% range but still belong to the same population (a Type I error)."**

| | **Two-tailed** | **One-tailed** |
|---|---|---|
| **Hypothesis type** | **Nondirectional** | **Directional** |
| **Where the 5% sits** | Split across **both** tails (2.5% each) | All **5% in ONE** tail |
| **Requirement** | — | The researcher must have "**sufficient knowledge of the variables to predict** whether the difference will be in the tail above or below the mean" |

> **"One-tailed statistical tests are uniformly more powerful than two-tailed tests, decreasing the possibility of a Type II error."**

---

## §4 Descriptive statistics

### Measures of central tendency

| Measure | Definition | Appropriate for | Affected by outliers? |
|---|---|---|---|
| **Mode** | Most frequently occurring value | **NOMINAL** data | No |
| **Median** | Exact center, **50th percentile** | **ORDINAL** data | **No** — "not affected by extreme scores or outliers" |
| **Mean** | Sum ÷ number of scores | **INTERVAL and RATIO** data | **Yes** — "most affected by these" |

- **In a perfect normal distribution, all three are equal.**
- The mode "**does not necessarily indicate the center** of the data set." **Two modes = bimodal; more than two = multimodal.**
- The median: with an **even** number of scores it is the **average of the two middle scores**, so it **may not be one of the actual scores.** The mean likewise "may not be a member of the data set."
- **"If the study has outliers, the mean is most affected by these, and the MEDIAN might be the measure of central tendency included in the research report."**

### Measures of dispersion

**SD = the average deviation of a value from the mean.** "It indicates the **degree of error that would result if the mean alone were used** to interpret the data." Often reported as **mean ± SD** (e.g. 5.28 ± 2.22).

**The chapter's worked example** (mean = 5.28, SD = 2.22):
- 1 SD below = 5.28 − 2.22 = **3.06**; 1 SD above = **7.50** → **~68% of the sample falls in (3.06, 7.50)**
- 2 SDs → **(0.84, 9.72)**

**Confidence interval:** "The **95% CI** indicates that **95% of the time, the population mean would fall within this interval.**" Usually calculated for **95% and 99%.** CIs can be built around **any** population parameter — including **correlation coefficients and t-test values.**

**z-scores:** transform raw scores so distributions can be compared. **Mean as a z-score = 0.** Above the mean = **positive** z; below = **negative** z. **A z-score of 2 = 2 SDs above the mean.**

---

## §5 Statistics for relationships and prediction

**Pearson product-moment correlation** examines **bivariate** correlations — the relationship between **two** variables measured on a **single sample.**

**It gives two pieces of information:** the **nature** (positive or negative) and the **magnitude/strength** of the relationship.

> **Symmetry — why correlation never proves causation:** "The outcomes of correlational analyses are **symmetrical**... the analysis gives **no indication of the direction of the relationship.** It is **not possible to establish** whether variable A leads to or causes variable B, or that B causes A."

**Interpreting r** (range **−1 to +1**, 0 = no relationship):

| |r| value | Strength |
|---|---|
| **< 0.3** | **Weak** |
| **0.3 to 0.5** | **Moderate** |
| **> 0.5** | **Strong** |

"However, this interpretation **depends to a great extent on the variables being examined**... interpretation requires some **judgment** on the part of the researcher."

- **Positive:** high with high, **or low with low** — variables change **in the same direction.**
- **Negative (inverse):** high on one with low on the other.
- **As r approaches 0 from either direction, the strength decreases.**

**r² = the coefficient of determination = percentage of variance explained.** Worked example: **r = 0.6 → r² = 0.36 → 36% explained variance** for anxiety and depression.

**Regression** predicts a dependent variable from independent variables. In the chapter's worked example, **R² × 100% = 26%** of variance explained, with model significance tested by **ANOVA: F(4,79) = 7.051, p < 0.001.** **β (standardized coefficient)** values identify significant predictors.

---

## §6 Choosing the right test — the decision algorithm

**Four judgments determine the appropriate analysis** (Fig. 11.8):
1. Does the question focus on **differences or relationships (associations)**?
2. What is the **level of measurement** (nominal, ordinal, interval/ratio)?
3. **How many groups**?
4. Are samples **independent or paired (dependent)**?

**Parametric vs. nonparametric:**

| | Level of measurement | Distribution |
|---|---|---|
| **Nonparametric** | **Nominal, ordinal** | — |
| **Parametric** | **Interval, ratio** | **AND normally distributed** |

Normality is checked by computer — the chapter's example uses the **Kolmogorov-Smirnov test.**

**Independent vs. paired groups:**
- **Independent** — e.g. participants **randomly assigned** to treatment and control.
- **Paired (dependent)** — participants **serve as their own control** (pretest as control), **matched pairs**, or **twins** (one in each group). Researchers "sometimes match groups according to **age and severity of illness.**"

**The four difference tests:**

| Test | Number of groups | Level of data |
|---|---|---|
| **Chi-square test of independence** | Three or more | **Nominal or ordinal** |
| **t-test** | **TWO** | **Interval/ratio** |
| **ANOVA** | **Three or more** | **Interval/ratio** |
| **ANCOVA** | Three or more | **Interval/ratio** |

**ANOVA specifics:** it "tests for differences **in variance**," not just means.
- **Within-group variance** — individual scores varying from their group mean
- **Between-group variance** — group means varying around the **grand mean**
- Combined = **total variance**
- "The assumption is that **if all the samples are taken from the same population, these two sources of variance will exhibit little difference.**"

**Results are reported as an F statistic.** "If the F value is equal to or greater than the appropriate table value, there is a statistically significant difference."

> **Why post hoc tests exist:** "If only two groups are being examined, the location of a significant difference is clear. However, **if more than two groups are under study, it is NOT possible to determine from the ANOVA WHERE the significant differences occur.** Therefore **post hoc analyses** are conducted."

**Named post hoc tests:** **Bonferroni correction, Newman-Keuls, Tukey honestly significant difference (HSD), Scheffé, and Dunnett.**

**Statistics for differences also test causality:** "These statistics examine causality by testing for significant differences in outcomes between the intervention and control groups."

---

## §7 Other analysis steps the chapter names

**Management of missing data**, **reliability of measurement methods** (the t-test or Pearson correlation may be used for test-retest reliability), **exploratory analyses**, **degrees of freedom (df)**, **frequency distributions** (ungrouped, grouped, percentage), **factor analysis**, and **scatterplots.**

**Scatterplot conventions:** the **vertical scale is the Y-axis**, the **horizontal is the X-axis.** A positive relationship produces points extending "from the **lower left to the upper right** corners."

---

## Source conflicts and traps

- **There are NO degrees of significance.** p = 0.001 is **not "more significant"** than p = 0.05 once alpha is set, and p = 0.051 with α = 0.05 is **not significant** — "approached significance" is explicitly called inappropriate. This is the chapter's most emphasized rule and the most likely single item.
- **The p value reveals TYPE I error risk; alpha is the cutoff set beforehand.** Confusing the two, or attaching p to Type II risk, is the standard distractor.
- **Tightening alpha trades one error for the other.** α = 0.01 gives **less** Type I risk but **more** Type II risk than α = 0.05. An option claiming a stricter alpha reduces both is wrong.
- **Type II risk is HIGH in nursing research** — because of small samples, imprecise instruments, and multiple interacting variables. This is the chapter's own diagnosis of the field.
- **A nonsignificant result requires the power level before you believe it.** If power < 0.80, "question the validity of the nonsignificant findings." (Same rule as Ch 9.)
- **Mode → nominal, median → ordinal, mean → interval/ratio.** And **the median is the outlier-resistant one** — if a stem mentions skew or extreme scores, the median is the appropriate report.
- **Correlation is SYMMETRICAL and cannot establish causation** — the analysis gives no direction. Consistent with Ch 2 and Ch 5.
- **A negative correlation is not a weak one.** Strength is |r|; **−0.7 is strong.** Only values near **0** are weak.
- **r² is the percentage of variance explained**, not the correlation itself. r = 0.6 explains **36%**, not 60%.
- **t-test = TWO groups; ANOVA = THREE OR MORE.** Using a t-test for three groups is the classic error. Both require **interval/ratio** data; **chi-square** is the **nominal/ordinal** option.
- **ANOVA tells you THAT groups differ, not WHICH ones** — with more than two groups you need **post hoc** tests. An option interpreting a significant F as identifying the specific differing pair is wrong.
- **Parametric requires BOTH interval/ratio data AND normal distribution.** Interval-level data that are not normally distributed do not automatically qualify.
- **Paired groups include a participant serving as their own control** (pretest/posttest) and **matched pairs/twins** — not only repeated measures. Misclassifying a pretest–posttest design as independent samples changes the correct test.
- **One-tailed tests are MORE powerful** and reduce Type II error — but require enough prior knowledge to predict direction. They pair with **directional** hypotheses (Ch 5).
- **68% / 95% / 99% map to 1, 1.96, and 2.58 SDs** — and the ±2 SD range holds **95.5%**. Mixing up 95% (1.96 SD) with 95.5% (2 SD) is a fine-grained but fair item.
- **The normal curve is THEORETICAL** — "no real distribution exactly fits" it.
- **A 95% CI means the population mean falls in that interval 95% of the time** — it is not a statement that 95% of participants fall within it.
