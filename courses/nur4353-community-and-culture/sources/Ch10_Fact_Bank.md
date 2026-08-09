# Fact bank — Chapter 10: Epidemiologic Applications

**Source:** Stanhope & Lancaster, *Foundations for Population Health in Community/Public Health Nursing*, 6th ed., Section 3, printed pp. 169–193. Authors: Swann Arp Adams and DeAnne K. Hilfinger Messias.

**To regenerate the raw text** (offsets in the mechanical digest are valid against this exact command):

```bash
python3 extract.py pull FOUNDATIONS_for_POPULATION_HEALTH_with_bookmarks.pdf 169 193 --offset 20 --out ch10_raw.txt
python3 extract.py digest ch10_raw.txt --out ch10_facts_raw.md --chapter 10
```

Raw pull is 141,207 chars. **This file is the curated layer**: everything below has been read in the source and de-bled by hand. The two-column scan interleaves badly in this chapter (formulas and Case Study answer options bleed into the middle of definitions), so the mechanical digest's "definitional sentences" bucket is largely garbage here (e.g. it renders the rate definition split across two half-sentences). Trust this file over the digest.

This is the highest-density definitions chapter in the whole course. Blueprint weight is 4 questions, but the vocabulary here (sensitivity/specificity, incidence/prevalence, the study designs, the three levels) is the machinery that Ch 11, 12, 17, and every prevention item is built on. Treat it as leverage beyond its four questions.

---

## Chapter outline (printed pages)

| Section | p. |
|---|---|
| Basic Concepts in Epidemiology (Proportions, Rates, Risk) | 174 |
| Measures of Incidence and Prevalence | 174 |
| Mortality Rates (crude, cause-specific, CFR, PMR, infant) | 176 |
| Epidemiologic Triangle: Agent, Host, Environment / Web of Causality | 178 |
| Levels of Preventive Interventions | 179 |
| Screening | 180 |
| Reliability, Validity, and Surveillance | 181 |
| Basic Methods: Sources of Data, Rate Adjustment, Comparison Groups | 182 |
| Descriptive Epidemiology (person, place, time) | 183 |
| Analytic Epidemiology (cohort, case-control, cross-sectional, ecological) | 186 |
| Experimental Studies (clinical trials, community trials) | 188 |
| Causality / Assessing for Causality | 189 |

---

## Key terms (all 50, with printed page)

| Term | p. | Definition as given |
|---|---|---|
| agent | 178 | An animate or inanimate factor that must be present or lacking for a disease or condition to develop. |
| analytic epidemiology | 170 | The focus on investigation of causes and associations; deals with the factors that influence observed patterns and increase or decrease risk. Answers **how and why**. |
| attack rate | 176 | The proportion of persons who are exposed to an agent and develop the disease; used in infectious disease investigations. |
| bias | 189 | Systematic deviation from the truth. |
| case-control study | 187 | Subjects are enrolled because they are known to have the outcome of interest (cases) or not (controls). Neither incidence nor prevalence can be calculated directly; uses the **odds ratio**. Best design for **rare diseases**. |
| case fatality rate (CFR) | 177 | The proportion of persons diagnosed with a particular disorder (cases) who die within a specified period. **1 minus the CFR yields the survival rate.** |
| causal inference | 190 | Reasoning from a statistical association to causation. A statistical association is necessary but **not adequate proof**; evaluated against the seven guidelines in Box 10.3. |
| cohort study | 186 | A group sharing a characteristic of interest, enrolled and followed over time to observe an outcome. Because it observes new cases developing, it **allows calculation of incidence rates and estimates of risk**. May be prospective or retrospective. |
| confounding | 189 | Bias resulting from the relationship between the outcome and study factor and some third factor not accounted for. |
| contact tracing | 173 | Identifying and following up the other people a positive case had been near (COVID-19 example). |
| cross-sectional study | 188 | Simultaneous collection of exposure and outcome ("correlational"). Gives **prevalence, not incidence**; **no calculation of risk**; temporal sequence unclear. |
| descriptive epidemiology | 170 / 183 | Describes the distribution of disease, death, and other outcomes in the population according to **person, place, and time**. The who, where, and when. |
| determinants | 170 | Those factors, exposures, characteristics, behaviors, and contexts that determine or influence the patterns. May be individual, relational or social, communal, or environmental. |
| distribution | 170 | How, where, and when the disease occurs. |
| ecological fallacy | 188 | The associations observed at the group level may not hold true for individuals. |
| ecological model | 172 | Treats the multiple determinants of health as interrelated and acting synergistically (or antagonistically), rather than as discrete factors; spans biologic, mental, behavioral, social, and environmental levels including policy, culture, and economics. |
| ecological study | 188 | A study that is a bridge between descriptive and analytic epidemiology; uses group-level (aggregate) data. Quick, easy, inexpensive first study. |
| endemic | 175 | A health condition that occurs at a steady, expected rate among the population (example: malaria in Africa). |
| environment | 178 | All that is internal or external to a given host or agent and that is influenced by and influences the host and/or agent. |
| epidemic | 175 | Occurs when the rate of disease, injury, or other condition **exceeds the usual (endemic) level and spreads over a larger geographic area**. No specific threshold of incidence defines it. |
| epidemiologic triangle | 178 | The agent–host–environment model. Disease results from complex relationships among causal agents, susceptible persons, and environmental factors; a change in one element changes risk. |
| epidemiology | 170 | The basic science of public health; the study of the distribution and determinants of disease in populations. |
| herd immunity | 175 | "The resistance of a group of people to an attack by a disease to which a large proportion of the members of the group are immune. If a large percentage of the members of the group are immune, the entire population may be protected; not just those who are immune" (Celentano & Szklo, 2018). Provided by vaccination **or** prior infection. |
| host | 178 | A living species (human or animal) capable of being infected or affected by an agent. |
| incidence proportion | 174 | The proportion of an at-risk population that develops new disease over a specified period; also called **cumulative incidence**; estimates the **risk** for developing the disease. |
| incidence rate | 174 | Quantifies the rate of development of new cases in a population at risk during a specified time. |
| levels of prevention | 179 | The framework of primary, secondary, and tertiary prevention used in public health practice. |
| natural history of disease | 179 | The course of the disease process from onset to resolution. |
| negative predictive value | 181 | The proportion of persons with a **negative** test who are actually disease-free. |
| outbreak | 175 | A condition that occurs **in excess of what would be expected at the endemic level** (example: measles among unvaccinated children after a 2015 theme-park exposure). |
| pandemic | 175 | An epidemic that spreads globally. |
| point epidemic | 185 | A time-and-space-related pattern, most clearly seen when case frequency is graphed against time (a sharp peak). Indicates a common-source simultaneous exposure; important in infectious disease and toxic-exposure investigations. |
| positive predictive value | 181 | The proportion of persons with a **positive** test who actually have the disease. |
| prevalence proportion | 175 | A measure of **existing** disease in a population at a particular time. Affected by both incidence (risk) and duration (survival/recovery). |
| primary prevention | 179 | Interventions that promote health and prevent the occurrence of disease, injury, or disability; aimed at those susceptible but with **no discernible pathological process** (prepathogenesis). |
| proportion | 174 | A type of ratio in which the **denominator includes the numerator**; ranges from 0 to 1, often multiplied by 100 (or 1000, 100,000). |
| proportionate mortality ratio (PMR) | 177 | The proportion of all deaths resulting from a specific cause. Denominator is **total deaths, not the population at risk**; therefore it is **not a rate and does not estimate risk**. |
| rate | 174 | A measure of the frequency of a health event in different populations at certain periods. A ratio, but **not a proportion**, because the denominator is a function of both population size and time. |
| reliability | 181 | Precision; the consistency or repeatability of a measure. |
| risk | 174 | The probability that an event will occur within a specified period. |
| screening | 180 | Testing of groups of individuals who are at risk for a specific condition but **do not have symptoms**. A screening test is **not** a diagnostic test. A key component of secondary prevention. |
| secondary prevention | 179 | Interventions designed to increase the probability that a person with a disease will have that condition **diagnosed early enough that treatment is likely to result in a cure**. Screening is at the core. |
| secular trends | 184 | Long-term patterns of morbidity or mortality (over years or decades). |
| sensitivity | 181 | The proportion of persons **with** the disease whom the test correctly identifies as positive (true positives). |
| specificity | 181 | The proportion of persons **without** the disease whom the test correctly identifies as negative (true negatives). |
| surveillance | 181 | The systematic collection, analysis, and interpretation of data related to the occurrence of disease and the health status of a given population. Classified as **active or passive**; passive is the more common form used by most local and state health departments. |
| tertiary prevention | 180 | Interventions aimed at **limiting disability** and enhancing rehabilitation from disease, injury, or disability. |
| validity | 181 | Accuracy; whether the measure is really measuring what we think it is. In a screening test, measured by **sensitivity and specificity**. |
| web of causality | 178 | Recognizes the complex interrelationships of many factors interacting, sometimes subtly, to increase or decrease the risk for disease. Better fit than the triangle when many variables interact. |

---

## §1 Basic concepts: risk, proportion, rate (p. 174)

- **Risk** = probability an event occurs within a specified period. A **population at risk** is everyone for whom there is some finite probability of the event. (Men can be in the at-risk population for breast cancer; men are **not** at risk for ovarian cancer, women not for testicular cancer.)
- **Why rates and proportions instead of counts:** they take the size of the population at risk into account. "50 cases of influenza might be a serious epidemic in a population of 250 but would be a low rate in a population of 250,000." Always look at numerator (cases), denominator (population at risk), **and** the amount of time observed.
- **Proportion:** a ratio where the numerator is inside the denominator, so it ranges 0 to 1. Example: 647,457 heart-disease deaths / 2,813,503 total deaths = 0.230 = 23.0%.
- **Rate:** a ratio that is **not** a proportion, because the denominator depends on both population size **and time**.
- The three morbidity/mortality measures examined: **incidence proportions, incidence rates, and prevalence proportions.**

---

## §2 Incidence vs. prevalence (p. 174–176) — high-yield distinction

| | Incidence | Prevalence |
|---|---|---|
| Counts | **New** cases developing over a period | **Existing** cases at a point in time |
| Driven by | Risk only (development of disease) | Risk **and** duration (survival/recovery) |
| Best used for | **Studying etiology / risk factors** | **Planning services** (how much disease exists = size of population needing services) |

- **Formula to know:** when prevalence is small (P < 0.1), **P = I × D** (prevalence = incidence rate × average duration).
- Worked logic: breast cancer 5-year survival ~85%, lung cancer in women ~15%. Even at equal incidence, breast cancer has **higher prevalence** because patients **live longer with it** (longer duration).
- **Incidence is the measure of choice for etiology** because it is affected only by factors related to risk, not survival. Prevalence is less useful for etiology because it is confounded by duration.
- Worked TB example: a health department wants **both** the prevalence (existing level, to plan services) **and** the incidence (new cases, to study risk factors and evaluate prevention programs).

---

## §3 Mortality rates and Table 10.2 (p. 176–177) — memorize the denominators

The denominator is what distinguishes these. Read the trap section too.

| Rate/ratio | Numerator | Denominator |
|---|---|---|
| **Crude mortality rate** | Deaths from **any** cause in the period | Midyear total population |
| **Age-specific rate** | Deaths in a given age group | Midyear population **of that age group** |
| **Cause-specific rate** | Deaths from a **specific cause** | Total population at risk (× 100,000) |
| **Case fatality rate (CFR)** | Deaths from a specific disease | Number of persons **diagnosed** with that disease |
| **Proportionate mortality ratio (PMR)** | Deaths from a specific cause | **Total deaths** in the period (NOT population) |
| **Infant mortality rate** | Infant deaths before 1 year | Live births in the same year |
| **Neonatal mortality rate** | Infant deaths **under 28 days** | Live births in the same year |
| **Postneonatal mortality rate** | Infant deaths **28 days to 1 year** | Live births in the same year |

- **CFR ↔ survival:** survival rate = 1 − CFR. (Book example in the table: 87% CFR → 13% survival. See trap note about the second example.)
- **PMR is not a rate.** Its denominator is total deaths, not people at risk, so it does not estimate the risk of death. Its size shifts if deaths from *other* causes rise or fall even when the cause of interest is constant.
- **Crude rate limitation:** it is affected by the population's **age distribution** (older populations die more), so comparing crude rates across populations of different ages is misleading. Fix = **rate adjustment / age adjustment** (p. 183): assumes overall mortality is a function of the age distribution and the age-specific rates, and adjusts to a standard so the comparison is fair.
- **Infant mortality rate** is used worldwide as an indicator of overall health and availability of health services.

---

## §4 Causal models: triangle, web, ecological (p. 178) — pairs with the Week 1 lesson

**Epidemiologic triangle = agent + host + environment.** Disease results from complex relationships among these three; changing one element raises or lowers risk.

| Element | Definition | Box 10.1 examples |
|---|---|---|
| **Agent** | Animate or inanimate factor that must be present or lacking for the condition to develop | Infectious (bacteria, viruses, fungi, parasites); chemical (heavy metals, pesticides); physical (radiation, heat, cold, machinery) |
| **Host** | Living species capable of being infected or affected by an agent | Genetic susceptibility; immutable traits (age, sex); acquired traits (immunologic status); lifestyle (diet, exercise) |
| **Environment** | All internal or external to host/agent, influencing and influenced by them | Climate; plant/animal life (reservoirs, habitats); population distribution (crowding, social support); socioeconomic factors; working conditions |

- **Web of causality (web of causation):** recognizes many factors interacting, sometimes in both directions. Better model when causation is complex and multifactorial. (This is the same triangle-vs-web contrast as Ch. 23: the **triangle** fits a simple single-agent infectious model; the **web** fits multifactorial chronic disease and vulnerability.)
- **Ecological model** (IOM 2002): extends further, treating determinants as interrelated and synergistic across biologic, behavioral, social, and policy levels, with a life-span perspective. "Healthy people in healthy communities."

---

## §5 Levels of prevention (p. 179–180) — the definitions the whole course leans on

- **Primary:** promotes health and prevents disease/injury/disability in people who are susceptible but have **no discernible pathology** (prepathogenesis). Examples given: health education on hand hygiene, distancing, and masks for schoolteachers/students; immunizations; seat-belt teaching; **folic acid at preconception to prevent neural tube defects**; water fluoridation for dental caries; reducing exposure to carcinogens.
- **Secondary:** early diagnosis and prompt treatment so a condition is caught early enough to cure. **Screening is the core.** Examples: mammography, Pap smears, colonoscopy, prenatal screening for gestational diabetes; **oral rehydration therapy (ORT)** for infant diarrheal disease in developing countries.
- **Tertiary:** limits disability already present and enhances rehabilitation. Examples: medical treatment, physical and occupational therapy, rehabilitation. Occurs most often in specialized clinics, hospitals, and rehab centers, but also in community and primary-care settings.
- **Natural history of disease** = onset to resolution; the levels map onto stages of that natural history.

**LEVELS OF PREVENTION box — Related to Cardiovascular Disease** (paraphrased; the book's box uses "clients," but per the course convention this is written as **patients**):
- Primary: discuss a low-fat diet and regular physical exercise with patients.
- Secondary: implement blood pressure and cholesterol screening; give a treadmill stress test.
- Tertiary: provide cardiac rehabilitation, medication, and surgery.

---

## §6 Screening, validity, and reliability (p. 180–182) — dense, high-yield

**Sensitivity vs. specificity (the pair EAQ loves):**

| | Measures | Correctly identifies | Prioritize when |
|---|---|---|---|
| **Sensitivity** | True positives | Those **with** disease as positive | Early treatment matters; missing a case is dangerous; disease is serious and treatable |
| **Specificity** | True negatives | Those **without** disease as negative | Rescreening is impractical; it is important to **reduce false-positives** |

- **Sensitivity and specificity are usually inversely related.** Moving the cutpoint to raise sensitivity lowers specificity, and vice versa. The ideal (100%/100%) is not achievable in practice.
- Determined by comparing against a **gold standard** (definitive diagnostic test). Example: Pap smear (screen) vs. biopsy with histologic confirmation (diagnosis).
- **Predictive values** depend on sensitivity/specificity **and** on prevalence:
  - **PPV** = of those who test positive, the proportion who truly have the disease.
  - **NPV** = of those who test negative, the proportion who are truly disease-free.
- **Series vs. parallel testing:**
  - **Series (sequential):** positive only if **all** tests positive → enhances **specificity**, fewer false-positives, **lower sensitivity**. Sequence matters: a very **sensitive** test is used **first** to catch all cases, then a very specific test eliminates false-positives. (HIV example: positive ELISA followed by Western blot; positive only if both.)
  - **Parallel (simultaneous):** positive if **any** test positive → enhances **sensitivity**, fewer false-negatives, **lower specificity**. (Blood bank considers a sample positive on either ELISA or Western blot.)
- **Validity vs. reliability:**
  - **Validity** = accuracy (measuring the right thing). In screening = sensitivity + specificity.
  - **Reliability** = precision (consistency, repeatability). BP-cuff analogy: a cuff giving two different readings on the same person is **unreliable**; a cuff reading a consistent 10 mm Hg too high is **reliable but not valid**. **A measure can be consistent without being valid.**
  - Three sources of error affecting reliability: (1) variation inherent in the trait, (2) observer variation (intraobserver and interobserver), (3) inconsistency in the instrument.

**BOX 10.2 — Characteristics of a Successful Screening Program:** (1) Valid/accurate; (2) Reliable/precise; (3) Capable of large-group administration (fast, inexpensive); (4) Innocuous (few side effects, minimally invasive); (5) High yield (detects enough new cases to warrant the effort); (6) Ethical and effective (benefits outweigh moral/ethical infringements).

**USPSTF:** an independent, volunteer group of national experts in prevention and evidence-based medicine that makes recommendations on clinical preventive services (screening tests, counseling, preventive medications), by health-risk category, age, gender, and service type. Nurses should stay current because guidelines are regularly revised.

**Surveillance:** systematic collection, analysis, and interpretation of disease-occurrence and health-status data. **Passive** surveillance is the more common form used by local/state health departments; **active** is the other form.

---

## §7 Study designs (p. 186–189) — know incidence vs. odds, and which is best for rare disease

**Descriptive vs. analytic:** descriptive = person/place/time (who, where, when); analytic = determinants (how, why).

**Observational designs (Table 10.3):**

| Design | Key measure | Strengths | Weaknesses |
|---|---|---|---|
| **Ecological** | Group-level correlation | Quick, cheap, uses existing data; hypothesis-generating | **Ecological fallacy**; temporal sequence unclear |
| **Cross-sectional** | **Prevalence** | Fast, cheap, describes scope; good baseline | **No incidence, no risk**; temporal sequence unclear; selective-survival bias; poor for rare disease |
| **Case-control** (retrospective) | **Odds ratio** | **Best for rare disease**; quick; cheap; can study several exposures | Recall/selection bias; only indirect risk estimate; usually one outcome |
| **Prospective cohort** | **Incidence → relative risk** | **Best estimate of incidence and risk**; clearest temporal sequence | Expensive, slow; poor for rare disease; attrition; long latency |
| **Retrospective cohort** | Incidence from records | Combines cohort + case-control advantages; faster, cheaper | Relies on existing records; misclassification; may use surrogate exposure |

- **Cohort → relative risk (risk ratio):** the ratio of cumulative incidence rates in exposed vs. unexposed. Only a cohort (which follows people forward) can directly estimate incidence and therefore RR.
- **Case-control → odds ratio:** because subjects are chosen *by outcome*, neither incidence nor prevalence can be calculated directly; the OR estimates the RR. Worked example: adolescents with a suicide attempt were ~10× more likely to have a substance-abuse history (OR = (68×164)/(36×32) ≈ 10).
- **Interpreting RR and OR:** **= 1** no association; **> 1** increased risk; **< 1** protective. (Physical-activity/CHD example: RR = 0.4, protective.)

**Experimental (intervention) studies**, in which the investigator applies an intervention:
- Two types: **clinical trials** and **community trials.**
- **Randomization:** assigns treatments so every assignment has a predetermined probability, but neither subject nor investigator controls the actual assignment. Purpose: avoid selection bias.
- **Masking / blinding** (single, double): controls bias in outcome assessment.
- **Community trials:** best for testing whether mass interventions (knowledge, behavior, policy) work, but expensive, slow, and hard to find comparable control communities.

---

## §8 Endemic / epidemic / pandemic / outbreak (p. 175) — the escalation ladder

- **Endemic:** steady, expected baseline level (malaria in parts of Africa).
- **Outbreak:** occurrence **in excess of the endemic level** (2015 measles among unvaccinated theme-park visitors).
- **Epidemic:** exceeds the endemic level **and spreads over a larger geographic area** (2014–2016 Ebola in West Africa). **No fixed numeric threshold** defines an epidemic; it is relative to the usual level. Because smallpox is eradicated, a **single** case would count as an epidemic.
- **Pandemic:** an epidemic that spreads **globally** (COVID-19; 1918 Spanish influenza infected >⅓ of the world; 2003 SARS).
- **Point epidemic:** a common-source, single-exposure pattern; on a graph of cases vs. time it shows a **sharp single peak**. Knowing the incubation/latency period lets you back-calculate the probable exposure time.
- **Secular trends:** long-term (years to decades) changes in morbidity/mortality. May reflect real change in incidence, or artifacts of improved diagnosis, changed survival, or revised case definitions/coding. Example: rising lung-cancer mortality reflects **prior-decade** smoking (a delayed effect).

---

## §9 Causality (p. 189–190) — association is not proof

A statistical association can be real yet non-causal, arising from **chance, bias, or confounding.** Three general categories of bias: **selection** bias (how subjects enter), **misclassification/information** bias (how data are collected/classified), and **confounding** (a third factor tied to both exposure and outcome; classic example: smoking confounds any alcohol–low-birth-weight association).

**BOX 10.3 — Seven guidelines for causal inference** (association is necessary but not sufficient):
1. **Strength of association** (a RR of 7 is stronger evidence than a RR of 1.5)
2. **Consistency of findings** (across different designs and populations)
3. **Biologic plausibility**
4. **Correct temporal sequence** (the risk factor must precede the outcome)
5. **Dose-response relationship** (more exposure → more risk)
6. **Specificity of the association** (one-to-one agent–disease; from the infectious model; its absence does not rule out causality)
7. **Experimental evidence** (the **strongest** epidemiologic evidence, but often infeasible or unethical)

---

## Source conflicts and traps

- ⚠️ **The CFR/survival example is internally inconsistent.** Table 10.2 says an 87% CFR gives a 13% survival rate; the body text (p. 177) says an 86% CFR gives a 14% survival rate. Both obey survival = 1 − CFR, so the **rule** is safe; just don't memorize a specific number as "the" lung-cancer figure. If a question gives you a CFR, compute 1 − CFR.
- **PMR is the classic "not a rate" trap.** Its denominator is total deaths, not population at risk. Any option calling PMR a risk estimate or a true rate is the distractor. Same wording trap for many "mortality rates" in Table 10.2, which the book itself says are technically proportions.
- **Incidence vs. prevalence for etiology.** If the stem asks which measure to study **causes/risk factors**, the answer is **incidence** (prevalence is confounded by duration). If it asks what to use to **plan services / size the need**, the answer is **prevalence**.
- **Sensitivity vs. specificity mnemonic direction.** Sensitivity = catch the sick (true positives, rule OUT when negative). Specificity = clear the well (true negatives, rule IN when positive). "High sensitivity when missing a case is dangerous; high specificity when a false alarm is costly or rescreening is impractical." They trade off against each other.
- **Series vs. parallel is easy to invert.** Series = ALL positive to call positive → boosts **specificity**. Parallel = ANY positive to call positive → boosts **sensitivity**. The sensitive test goes first in a series.
- **Reliable ≠ valid.** The 10-mm-Hg-high cuff is the intended distractor: consistent (reliable) but wrong (not valid).
- **Which design for a rare disease?** Case-control. Which gives the best incidence/risk estimate and clearest temporal sequence? Prospective cohort. Which gives prevalence but no risk? Cross-sectional. Which risks the ecological fallacy? Ecological.
- **RR vs. OR by design.** Cohort yields relative risk; case-control yields the odds ratio (an estimate of RR). A stem that asks for "risk" from a case-control study is testing whether you know the OR only *estimates* risk indirectly.
- **Epidemic has no numeric threshold.** Any option implying a fixed case count defines an epidemic is wrong; it is defined relative to the endemic level. One smallpox case = epidemic.
- **Triangle vs. web (shared with Ch. 23).** Single-agent infectious scenario → epidemiologic triangle. Multifactorial chronic disease or vulnerability → web of causation.
- **OCR bleed:** the definitional-sentence bucket in the mechanical digest splits nearly every definition across a column break in this chapter. Always pull the section in full before writing.
