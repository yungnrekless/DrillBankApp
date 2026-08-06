# Fact bank — Chapter 17: Public Health Surveillance and Outbreak Investigation

**Source:** Stanhope & Lancaster, *Foundations for Population Health in Community/Public Health Nursing*, 6th ed., Section 4, printed pp. 305–316. Author: Laura H. Clayton.

**Blueprint weight:** 5 questions.

**To regenerate the raw text:**

```bash
python3 extract.py pull FOUNDATIONS_for_POPULATION_HEALTH_with_bookmarks.pdf 305 316 --offset 20 --out ch17_raw.txt
python3 extract.py digest ch17_raw.txt --out ch17_facts_raw.md --chapter 17
```

Raw pull is 63,169 chars — **the shortest chapter on the final blueprint.** This file is the curated layer.

---

## ⚠️ READ THIS FIRST — the blueprint row does not match the chapter

**The final blueprint's Ch. 17 row lists eight topics:**

| Topic listed in the blueprint | Where it actually lives |
|---|---|
| At-risk populations for infectious disease | **Ch. 11 / Ch. 12** |
| Measures to control and prevent communicable disease (handwashing, vaccines, immunizations) | **Ch. 11** |
| **Types of immunity (herd, passive, active)** | **Ch. 11** — not in Ch. 17 at all |
| Legal responsibilities of CPHN for communicable disease (reporting, confidentiality) | **Ch. 17 (reporting)** — confidentiality is NOT in Ch. 17 |
| Emerging and reemerging diseases | **Ch. 11** |
| Food safety | **Ch. 11** — Ch. 17 gives only the foodborne *outbreak definition* |
| Familiarity with West Nile, Lyme disease, TB, HIV risk | **Ch. 11 (West Nile, Lyme) / Ch. 12 (TB, HIV)** |
| Disease transmission | **Ch. 11** — Ch. 17 covers *outbreak patterns*, not modes of transmission |

**Only ONE of the eight topics is substantially covered in Chapter 17: mandatory disease reporting.** Everything else in that row belongs to Chapters 11 and 12, which are separately assigned at 4 questions each.

**What this means for drilling:** the 5 questions attached to the Ch. 17 row are most likely drawing on **Ch. 11 and Ch. 12 content**, not surveillance mechanics. But the chapter is assigned, so surveillance content is fair game too. **Build items from both this bank and the Ch11/Ch12 banks for that blueprint row.** Chapter 17's own most testable material is: the four surveillance system types, notifiable disease reporting, case definitions, and the outbreak pattern types.

---

## Chapter outline (printed pages)

| Section | p. |
|---|---|
| Disease Surveillance — Definitions and Importance | 306 |
| Uses of Public Health Surveillance | 306 |
| Purposes of Surveillance | 307 |
| Collaboration Among Partners | 307 |
| Nurse Competencies | 307 |
| Data Sources for Surveillance | 309 |
| Notifiable Diseases / National / State | 309–310 |
| Case Definitions and Examples | 310 |
| Types of Surveillance Systems (Passive, Active, Sentinel, Special) | 312 |
| The Investigation — Objectives, When to Investigate | 313–314 |

---

## Key terms (all 27, with printed page)

| Term | p. | Definition as given |
|---|---|---|
| algorithms | 307 | **A precise step-by-step plan outlining a procedure that in a finite number of steps helps to identify the appropriate event.** Used to determine which events should be investigated. |
| bioterrorism | 306 | **"The intentional use of MICROORGANISMS OR TOXINS DERIVED FROM LIVING ORGANISMS to cause death or disease in humans or the animals and plants on which we depend"** (Ryan, 2016). |
| case definition | 309 | Criteria providing **a uniform, standardized method of reporting and monitoring diseases.** May include **clinical symptoms, laboratory values, and epidemiologic criteria.** |
| chemical terrorism | 306 | **The intentional release of HAZARDOUS CHEMICALS into the environment for the purpose of harming or killing.** |
| clusters of illness | 306 | Unusual groupings health departments have **legal authority to investigate.** |
| common source | 313 | An outbreak in which **a group is exposed to a common noxious influence** (e.g., release of noxious gases such as ricin in a subway or water system). |
| disease surveillance | 306 | **"The ongoing systematic COLLECTION, ANALYSIS, INTERPRETATION, and DISSEMINATION of specific health data for use in public health."** |
| endemic | 313 | A **persistent (usual) presence with LOW TO MODERATE number of cases** of the disease or event in a population. **Provides the BASELINE.** |
| epidemic | 313 | **The occurrence of a disease within an area CLEARLY IN EXCESS of expected levels (endemic) for a given time period.** **"This is often called the OUTBREAK."** |
| holoendemic | 313 | **A HIGHLY PREVALENT problem that is COMMONLY ACQUIRED EARLY IN LIFE.** ⚠️ **"The prevalence of this problem DECREASES as age INCREASES."** |
| hyperendemic | 313 | A **persistently (usually) HIGH number of cases.** Example given: **the high cholera incidence rate among Asian and Pacific Islanders.** |
| infectivity | 313 | **The capacity of an agent to ENTER a susceptible host and produce infection or disease.** |
| intermittent or continuous source | 313 | Cases **exposed over a period of DAYS OR WEEKS.** Example: food poisonings at a restaurant chain from contaminated green onions. |
| mixed outbreak | 313 | **"When a victim of a COMMON SOURCE epidemic has PERSON-TO-PERSON CONTACT with others and spreads the disease, further propagating the health problem."** Example: influenza. |
| National Notifiable Disease Surveillance System (NNDSS) | 310 | The CDC system to which state health departments report selected diseases, per CDC/CSTE policy. |
| National Syndromic Surveillance Program (NSSP) | 313 | Promotes **timely exchange and monitoring of syndromic data**, including patient encounter data from **emergency departments, urgent care, ambulatory care, and inpatient settings, as well as pharmacy and laboratory data.** **Real-time data used as potential indicators of an event, disease, or outbreak.** |
| outbreak | 307 | See epidemic — the two are used interchangeably. |
| outbreak detection | 313 | **"Identifying an INCREASE IN THE FREQUENCY of disease ABOVE THE USUAL OCCURRENCE of the disease"** — the function of the investigator. |
| outcome data | 306 | Data focusing on **CHANGES IN HEALTH STATUS.** Example: **incidence rates of influenza** among a population in a year. |
| pandemic | 313 | **The EPIDEMIC SPREAD of the problem over SEVERAL COUNTRIES OR CONTINENTS** (e.g., COVID-19). |
| pathogenicity | 313 | **The PROPORTION of INFECTED people who DEVELOP THE DISEASE.** |
| point source | 313 | An outbreak in which **ALL persons exposed become ill AT THE SAME TIME, during ONE incubation period.** |
| process data | 306 | Data focusing on **WHAT IS DONE** — services provided or protocols for health care delivery. Example: **the proportion of the eligible population VACCINATED against influenza in a year.** |
| propagated outbreak | 313 | **Does NOT have a common source** and **spreads GRADUALLY from person to person over MORE THAN ONE incubation period.** Example: **tuberculosis** spreading from one person to another. |
| public health protection | 306 | The domain surveillance has served **since the 1200s**, during investigations of the **bubonic plague in Europe.** |
| sentinel | 309 | A system providing **monitoring of KEY HEALTH EVENTS when information is NOT OTHERWISE AVAILABLE**, or for **calculating or estimating disease morbidity in VULNERABLE POPULATIONS.** |
| sporadic | 313 | Problems with **an IRREGULAR pattern**, with **occasional cases found at irregular intervals.** |
| syndromic surveillance systems | 312 | Developed **as a result of bioterrorism** to **monitor ILLNESS SYNDROMES or events.** Requires **automated data systems** to report **continued (real-time) or daily (near-real-time)** disease outbreaks. |
| virulence | 313 | **The PROPORTION of people WITH CLINICAL DISEASE who become SEVERELY ILL OR DIE.** |

---

## §1 Definition, History, and Legal Basis (p. 306)

**Definition (memorize the four verbs):**
> **Disease surveillance is the ongoing systematic COLLECTION, ANALYSIS, INTERPRETATION, and DISSEMINATION of specific health data for use in public health.**

**"The CDC indicates that public health surveillance is THE FOUNDATION OF PUBLIC HEALTH PRACTICE."**

**History:** Disease surveillance has been part of public health protection **since the 1200s, during the investigations of the BUBONIC PLAGUE in Europe.**

**Legal basis:**
- **The Constitution of the United States provides for "POLICE POWERS" necessary to preserve health safety.** **These powers include public health surveillance.**
- **State and local "police powers" also provide for surveillance activities.**
- **Health departments usually have LEGAL AUTHORITY to investigate unusual CLUSTERS OF ILLNESS.**

**Foundation:** Surveillance is built on understanding of **epidemiologic principles of AGENT, HOST, and ENVIRONMENTAL relationships** and on the **natural history of disease** (Ch. 10).

### Process vs. outcome data — a clean confusable pair

| | Focus | Example given |
|---|---|---|
| **Process data** | **WHAT IS DONE** — services provided or protocols for health care delivery | **The proportion of the eligible population VACCINATED against influenza in any one year** |
| **Outcome data** | **CHANGES IN HEALTH STATUS** | **The INCIDENCE RATES (new cases) of influenza among the same population in the same year** |

**"The activities generated by analyses of these data aim to IMPROVE PUBLIC HEALTH RESPONSE SYSTEMS."**

### Scope expansion

> **"Although surveillance was INITIALLY devoted to monitoring and reducing the spread of INFECTIOUS DISEASES, it is NOW used to monitor and reduce CHRONIC DISEASES AND INJURIES, as well as ENVIRONMENTAL AND OCCUPATIONAL EXPOSURES"** — and personal health behaviors.

### Box 17.1 — Surveillance Features

Surveillance:
- **Is organized and planned**
- **Is the PRINCIPAL MEANS by which a population's health status is assessed**
- **Involves ongoing collection of specific data**
- **Involves analyzing data on a REGULAR BASIS**
- **Requires SHARING THE RESULTS with others**
- **Requires broad and repeated contact with the public about personal health issues**
- **Motivates public health action as a result of data analyses to: reduce morbidity, reduce mortality, improve health**

### Bioterrorism vs. chemical terrorism

| | Definition |
|---|---|
| **Bioterrorism** | **"The intentional use of MICROORGANISMS OR TOXINS DERIVED FROM LIVING ORGANISMS to cause death or disease in humans or the animals and plants on which we depend."** Named agents: **botulism, anthrax** |
| **Chemical terrorism** | **"The intentional release of HAZARDOUS CHEMICALS into the environment for the purpose of harming or killing."** Named agents: **sarin, ricin** |

---

## §2 Uses and Purposes of Surveillance (p. 306–307)

### Eleven uses of public health surveillance

1. **Estimate the magnitude of a problem** (disease or event)
2. **Determine geographic distribution** of an illness or symptoms
3. **Portray the natural history of a disease**
4. **Detect epidemics; define a problem**
5. **Generate hypotheses; stimulate research**
6. **Evaluate control measures**
7. **Monitor changes in infectious agents**
8. **Detect changes in health practices and health behaviors**
9. **Facilitate planning**
10. **Guide public health policy and programs**

### Box 17.2 — Purposes of Surveillance (the short list)

- **Assess public health status**
- **Respond to unusual disease spread and terrorism**
- **Define public health priorities**
- **Plan public health programs**
- **Evaluate programs**
- **Stimulate research**
- **Improve health**

**Surveillance activities relate to the THREE CORE FUNCTIONS of public health: ASSESSMENT, POLICY DEVELOPMENT, and ASSURANCE.**

**"Disease surveillance helps establish BASELINE (ENDEMIC) RATES of disease occurrence and patterns of spread."**

**CDC responsiveness:** In one 24-month period, **the CDC responded to 750 health threats.** Named recent responses: **Ebola (2014–2018), Zika (2016–2017), water contamination (2016), hepatitis A (2017), the opioid epidemic**, numerous **foodborne outbreaks predominantly related to salmonella and E. coli**, and **COVID-19 (2020).**

**How surveillance evaluates programs:**
> **"By determining the change in the number of cases at the BEGINNING of a program (BASELINE) with the number of cases AFTER program implementation, it is possible to estimate the EFFECTIVENESS of a program."**

### Collaboration among partners

A quality surveillance system requires collaboration among: **federal agencies; state and local public health agencies; hospitals; health care providers; medical examiners; veterinarians; agriculture; pharmaceutical agencies; emergency management; law enforcement; 911 systems; ambulance services; urgent care and emergency departments; poison control centers; nurse hotlines; schools; and industry.** **Sometimes international agencies as well.**

**HOW TO use algorithms to identify which events should be investigated** — the four questions an algorithm answers:
1. **How to investigate?**
2. **Whom to contact?**
3. **How and to whom is information to be disseminated?**
4. **Who is responsible for appropriate action?**

---

## §3 Nurse Competencies (p. 307–309)

> **"It is the NURSE WHO SEES THE EVENT FIRST"** (APHN, 2014).

**The eight Quad Council practice domains:** assessment and analytical skills; policy development/program planning; communication; cultural competence; community dimensions of practice; public health sciences; financial planning, evaluation, and management; and leadership and systems thinking.

**Staff nurse knowledge required (by domain):**

| Domain | Required knowledge |
|---|---|
| **Assessment and analytical** | Defining a problem; determining a cause; identifying and understanding relevant data; using data to address community health problems; developing community health assessments; incorporating evidence in decision making; **identifying risks** |
| **Policy development/program planning** | Planning, implementing, and evaluating policies and programs and strategic plans |
| **Communication** | **Assessing and addressing population literacy levels**; providing effective oral and written reports; soliciting input and presenting accurate demographic, statistical, and scientific information |
| **Community dimensions of practice** | **Establishing and maintaining links DURING the investigation**; collaborating with partners; developing, implementing, and evaluating an assessment to define the problem |
| **Basic public health science** | Identifying individual and organizational responsibilities; identifying and retrieving current relevant evidence-based practice |
| **Leadership and systems thinking** | Identifying internal and external issues affecting the investigation; promoting team and organizational efforts; contributing to developing, implementing, and monitoring the investigation |

> **"While the STAFF nurse PARTICIPATES in these activities, the ADVANCED PRACTICE public health nurse should be PROFICIENT in applying these competencies."**

### The Minnesota model — seven basic steps of surveillance for nurses

1. **Consider whether surveillance as an intervention is APPROPRIATE for the situation**
2. **Organize the knowledge of the problem, its natural course of history, and its aftermath**
3. **Establish CLEAR CRITERIA for what constitutes a CASE**
4. **Collect SUFFICIENT data from MULTIPLE VALID SOURCES**
5. **Analyze data**
6. **Interpret data and DISSEMINATE to DECISION MAKERS**
7. **EVALUATE the impact of the surveillance system**

### Table 17.1 — Nursing process linked to preparedness

| Assessment | Planning | Implementation | Evaluation |
|---|---|---|---|
| **Assess the populations at risk for special needs during a disaster** | **Develop plans to care for special needs populations during a disaster** | **Conduct training, drills, and exercises related to care of special needs persons** | **Evaluate plans for serving populations with special needs** |

**Overall preparedness definition given:** **"Assure capacity to respond effectively to disasters and emergencies."**

**Healthy People 2030 objectives (global health surveillance):**
- **GH-D01:** Increase the number of individuals **trained globally to prevent, detect, or respond to public health threats**
- **GH-D02:** Increase the number of **globally important public health events that are tracked and reported**
- **GH-D03:** Increase **laboratory diagnostic testing capacity, surveillance, and reporting globally**

---

## §4 Data Sources for Surveillance (p. 309)

**Who reports:** **Clinicians, health care agencies, and laboratories report cases to STATE health departments.** Data also come from **death certificates and administrative data such as discharge reports and billing records.**

### Mortality vs. morbidity data sources

| **Mortality data** | **Morbidity data** |
|---|---|
| ⚠️ **"Mortality data are OFTEN THE ONLY SOURCE of health-related data available for SMALL GEOGRAPHIC AREAS."** Sources: **vital statistics reports (death certificates, medical examiner reports, birth certificates)**; the **National Vital Statistics System** | **Notifiable disease reports; laboratory reports; hospital discharge reports; billing data; outpatient health care data; specialized disease registries; injury surveillance systems; environmental surveys; sentinel surveillance systems** |

**Mortality data assist in:** **identifying differences in health status among groups, populations, occupations, and communities; monitoring preventable deaths; and examining cause-and-effect factors in diseases.**

**Named programs:**
- **National Program of Cancer Registries (NPCR)** — monitors **the types of cancers found in a state and the locations of cancer risks and health problems**
- **County Health Rankings and Roadmaps** — a **Robert Wood Johnson Foundation** program

### ⚠️ Six reasons for underreporting or incomplete reporting (high-yield list)

1. **SOCIAL STIGMA attached to a disease** (such as HIV/AIDS)
2. **Ignorance of the required reporting system**
3. **Lack of knowledge about the case definition, procedural changes in reporting, or changes in a database**
4. **Limited diagnostic abilities**
5. **Low priority given to reporting**

> **The saving grace:** "However, **if there is CONSISTENCY in the use of surveillance methods, the data collected WILL SHOW TRENDS** in events or disease patterns that may indicate a change needed in a program or a needed prevention intervention."

### Registries vs. surveys

| | What it does |
|---|---|
| **Registries** | **Monitor CHRONIC DISEASE in a systematic manner, LINKING information from a variety of sources** (health department, clinics, hospitals) to identify disease control and prevention strategies |
| **Surveys** | Provide data from individuals about **PREVALENCE of health conditions and health risks.** Allow **monitoring changes OVER TIME** and **assessing the individual's KNOWLEDGE, ATTITUDES, AND BELIEFS** |

---

## §5 Notifiable Diseases and Reporting (p. 309–312)

**This is the one blueprint topic genuinely covered by this chapter.**

### History of standardization

> **"Before 1990, state and local health departments used MANY DIFFERENT CRITERIA for identifying cases of reportable diseases. Using different criteria made the data LESS USEFUL because it could not be COMPARED across health departments or states. For this reason, some diseases may have been UNDERreported and others may have been OVERreported."**

**In 1990, the CDC and the Council of State and Territorial Epidemiologists (CSTE) assembled the FIRST list of standard case definitions.** **Revised in 1997.** **New case definitions are added as new diseases are identified.**

### National vs. state notifiable diseases

| | Detail |
|---|---|
| **National** | **CDC/CSTE policy REQUIRES state health departments to report selected diseases to the NNDSS.** Data from **50 states, US territories, New York City, and the District of Columbia** are **published WEEKLY in the Morbidity and Mortality Weekly Report (MMWR).** **Annual updated final reports are published in CDC WONDER.** |
| **State** | ⚠️ **"Requirements for reporting diseases are MANDATED BY LAW OR REGULATION."** **Each state and Washington, DC, DIFFER in the list of reportable diseases.** ⚠️ **"Because state requirements differ, NOT ALL nationally notifiable diseases are LEGALLY MANDATED for reporting in a state."** States transmit data **electronically (WEEKLY)** through the **National Electronic Disease Surveillance System (NEDSS).** |

**The usefulness of the data depends on three things: "UNIFORMITY, SIMPLICITY, and TIMELINESS."**

**What NNDSS data are used for (CDC, 2018d):** **detecting disease outbreaks; identifying person characteristics; calculating incidence, geographic distribution, and temporal trends; initiating prevention programs; evaluating established prevention and control practices; suggesting new intervention strategies; identifying areas for research; documenting the need for disease control funds; and helping answer questions from the community.**

**Outcomes of ongoing analysis:** **better diagnosis and treatment methods, national vaccine schedule recommendations, changes in vaccine formulation, and the recognition of new or resurgent diseases.**

### The reporting mechanics — how a case moves

1. **Adverse health data for the calendar year are documented on the reportable disease form, entitled EPID**, to the **local health department or the state department for public health**
2. **LOCAL health department surveillance personnel INVESTIGATE case reports** and proceed with recommended public health measures, **requesting assistance from the state when needed**
3. **Reports are forwarded by MAIL or FAX or, IN URGENT CIRCUMSTANCES, BY TELEPHONE 24 HOURS A DAY, 7 DAYS A WEEK**
4. When received, reports are **scrutinized carefully** and additional steps are initiated to **assist local health departments in planning interventions**

> **"To determine which of the national notifiable diseases are reportable in YOUR state, go to your STATE HEALTH DEPARTMENT WEBSITE."**

### Case definitions

**Purpose:** **"A case definition provides UNDERSTANDING of the data being collected and REDUCES THE LIKELIHOOD that different criteria will be used for reporting similar cases."**

**Case definitions may include:** **clinical symptoms, laboratory values, and epidemiologic criteria** (e.g., exposure to a known or suspected case).

**Three case classifications by strength of evidence: SUSPECTED, PROBABLE, or CONFIRMED.**

**Variation across diseases:**
- **Some diseases REQUIRE laboratory confirmation even though clinical symptoms may be present**
- **Other diseases DO NOT HAVE laboratory tests to confirm the diagnosis**
- **Other cases are diagnosed on the basis of EPIDEMIOLOGIC DATA ALONE**, such as exposure to contaminated food

> ⚠️ **The critical limitation (a likely correct-answer stem):**
> **"The case definition should NOT be used as the ONLY criterion for CLINICAL DIAGNOSIS, QUALITY ASSURANCE, STANDARDS FOR REIMBURSEMENT, or TAKING PUBLIC HEALTH ACTION. ACTION TO CONTROL A DISEASE SHOULD BE TAKEN AS SOON AS A PROBLEM IS IDENTIFIED, ALTHOUGH THERE MAY NOT BE ENOUGH INFORMATION TO MEET THE CASE DEFINITION."**

### Case definition examples given

**Hepatitis A (CDC):** A **"discrete onset of symptoms consistent with hepatitis** (e.g., fever, headache, malaise, anorexia, nausea, vomiting, diarrhea, and abdominal pain) **AND either JAUNDICE or ELEVATED SERUM AMINOTRANSFERASE levels."**

Because **the clinical symptoms of patients with ALL types of acute viral hepatitis are the SAME**, a person with acute hepatitis A must **either**:
1. **Have a POSITIVE IgM ANTIBODY for hepatitis A**, **OR**
2. **Meet the clinical symptoms AND have an EPIDEMIOLOGIC LINK with a person who has laboratory-confirmed hepatitis A** — household or sexual contact with an infected person **during the 15 to 50 days before the onset of symptoms**

**COVID-19 (WHO, 2020):** A person who meets the clinical criteria: **acute onset of FEVER AND COUGH; OR acute onset of ANY THREE OR MORE of the following: fever, cough, general weakness/fatigue, headache, myalgia, sore throat, coryza, dyspnea, anorexia/nausea/vomiting, diarrhea, altered mental status.**

### Box 17.3 — Notifiable infectious diseases (2018), selected

The full list is long. Categories and notable entries include: **anthrax; arboviral diseases (California serogroup, chikungunya, Eastern equine encephalitis, Powassan, St. Louis encephalitis, WEST NILE, Western equine encephalitis); babesiosis; botulism (foodborne, infant, wound, other); brucellosis; campylobacteriosis; CP-CRE; chancroid; chlamydia; cholera; coccidioidomycosis; congenital syphilis; cryptosporidiosis; cyclosporiasis; dengue; diphtheria; ehrlichiosis and anaplasmosis; giardiasis; gonorrhea; H. influenzae invasive disease; Hansen's disease; hantavirus; hemolytic uremic syndrome; HEPATITIS A/B/C (acute, chronic, perinatal); HIV infection (AIDS has been RECLASSIFIED as HIV stage III); influenza-associated pediatric mortality; invasive pneumococcal disease; LATENT TB INFECTION; legionellosis; leptospirosis; listeriosis; LYME DISEASE; malaria; measles; meningococcal disease; mumps; novel influenza A; pertussis; plague; poliomyelitis; psittacosis; Q fever; rabies (animal and human); rubella and congenital rubella syndrome; salmonellosis; SARS-CoV; Shiga toxin-producing E. coli; shigellosis; smallpox; spotted fever rickettsiosis; streptococcal toxic shock syndrome; SYPHILIS (primary, secondary, early nonprimary/nonsecondary, unknown/late); tetanus; toxic shock syndrome; trichinellosis; TUBERCULOSIS; tularemia; typhoid fever; VISA/VRSA; varicella and varicella deaths; vibriosis; viral hemorrhagic fevers (Crimean-Congo, EBOLA, Lassa, Lujo, Marburg, New World arenaviruses); yellow fever; ZIKA virus disease and infection (congenital and noncongenital).**

> ⚠️ **Two entries worth noting because they cross into other blueprint chapters:** **LATENT TB INFECTION is separately notifiable** (relevant to Ch. 12 and Ch. 24's migrant TB content), and **AIDS has been RECLASSIFIED as HIV stage III** (relevant to Ch. 12).

---

## §6 The Four Types of Surveillance Systems (p. 312–313)

**This is the most likely single item from Chapter 17 itself.**

| System | How it works | Direction of effort | Example |
|---|---|---|---|
| **PASSIVE** | **Case reports are SENT TO local health departments BY health care providers** (physicians, public health nurses), **or laboratory reports are SENT TO the local health department.** Reports are summarized and forwarded to the state, national government, CDC, or WHO | **Reports come IN to the health department** | **Cancer registry system**; the **state reportable disease system** used to complete a community assessment or MAPP |
| **ACTIVE** | **The NURSE, as an employee of the health department, BEGINS A SEARCH for cases through CONTACTS with local health care providers and agencies.** **The nurse NAMES the disease or event and GATHERS data about existing cases to determine the magnitude of the problem** | **The health department GOES OUT looking** | **Several schoolchildren become ill after eating lunch in the cafeteria**; **following up on contacts of a newly diagnosed TB or STD patient at the local homeless shelter** |
| **SENTINEL** | **Trends in COMMONLY OCCURRING diseases or KEY HEALTH INDICATORS are monitored.** ⚠️ **"A DISEASE or event may be the sentinel, OR a POPULATION may be the sentinel."** **A SAMPLE of health care providers or agencies is asked to report the problem** | **A designated subset reports** | **Certain providers/agencies asked to report the number of cases of influenza seen during a given time period to make projections about the severity of the flu season** |
| **SPECIAL** | **Developed for collecting PARTICULAR types of data**; **may be a COMBINATION of active, passive, and/or sentinel systems** | Mixed | **Syndromic surveillance systems** |

> ⚠️ **"Although all of the systems are important, THE PUBLIC HEALTH NURSE IS MOST LIKELY TO USE THE ACTIVE OR PASSIVE SYSTEMS."**

**The passive system's weakness:** **"Because the system has LIMITS, a disease outbreak MAY BE OCCURRING BEFORE ALL REPORTS ARE RECEIVED by the state health department."**

**NEDSS (National Electronic Disease Surveillance System):** **a VOLUNTARY system monitored by the CDC**, including **a total of 682 infectious diseases or conditions** with case definitions considered important to the public's health. **Each state determines for itself which diseases and conditions are of importance to the state's health and legally requires reporting of those.** Provides **disease-specific demographic, geographic, and seasonal trends over time.**

**Syndromic surveillance and the NSSP:**
- **Syndromic surveillance systems** were developed **as a result of bioterrorism**, to **monitor illness SYNDROMES or events.** Requires **automated data systems** reporting **continued (real-time) or daily (near-real-time)** outbreaks
- **The NSSP** promotes **timely exchange and monitoring of syndromic data**, including patient encounter data from **emergency departments, urgent care, ambulatory care, and inpatient settings, as well as pharmacy and laboratory data**
- **NSSP examples given:** tracking **influenza trends in New York City** through emergency department visits; **detecting clusters of carbon monoxide poisoning due to power outages after a windstorm** (Louisiana, generators after a hurricane, 2020); tracking the **COVID-19 outbreak**, including **persons on cruise ships**

**Box 17.4 — Bioterrorism and Response Networks:** **Health Alert Network; the Emerging Infections Program; Epidemiology and Laboratory Capacity program (ELC); Hazardous Substances Data Bank (TOXNET); influenza surveillance in the United States; community emergency response systems.**

---

## §7 The Investigation (p. 313–314)

### Three objectives of an investigation

1. **To CONTROL AND PREVENT disease or death**
2. **To IDENTIFY FACTORS that contribute to the outbreak of the disease and the occurrence of the event**
3. **To IMPLEMENT MEASURES to prevent occurrences**

### HOW TO Conduct an Investigation — the six steps (CDC)

1. **Confirm the existence of an outbreak**
2. **Verify the diagnosis and/or define a case**
3. **Estimate the number of cases**
4. **Orient the data collected to PERSON, PLACE, and TIME**
5. **Develop and evaluate a HYPOTHESIS**
6. **Institute CONTROL MEASURES and COMMUNICATE FINDINGS**

### When to investigate

> **"ANY UNUSUAL INCREASE IN DISEASE INCIDENCE (new cases) or an unusual event in the community SHOULD BE INVESTIGATED."**

**Five factors determining the amount of effort / the system used:**
1. **The intensity of the event**
2. **The severity or magnitude of the disease/problem**
3. **The number of people or communities affected**
4. **The potential for harm to the community or the spread of disease**
5. **The availability and effectiveness of available intervention measures**

> ⚠️ **The predictability point:** **"MOST of the outbreaks of diseases (or increased incidence rates) occur NATURALLY and/or are PREDICTABLE when compared with the consistent patterns of previous outbreaks of a disease, such as influenza, tuberculosis, or common infectious diseases. WHEN a disease or event outbreak occurs AS A RESULT OF PURPOSEFUL INTRODUCTION of an agent into the population, THEN PREDICTABLE PATTERNS MAY NOT EXIST."**

### The magnitude vocabulary — the endemic family

| Term | Meaning | Memory hook |
|---|---|---|
| **Endemic** | **Persistent (usual) presence with LOW TO MODERATE number of cases.** **Establishes the BASELINE** | The normal background level |
| **Hyperendemic** | **Persistently (usually) HIGH number of cases** | Baseline, but high |
| **Holoendemic** | **HIGHLY PREVALENT and COMMONLY ACQUIRED EARLY IN LIFE; prevalence DECREASES as age INCREASES** | Childhood-acquired, adults have it less |
| **Sporadic** | **IRREGULAR pattern, occasional cases at IRREGULAR INTERVALS** | Scattered, unpredictable |
| **Epidemic** | **Occurrence CLEARLY IN EXCESS of expected (endemic) levels for a given time period.** **"Often called the OUTBREAK"** | Above baseline |
| **Pandemic** | **Epidemic spread over SEVERAL COUNTRIES OR CONTINENTS** | Epidemic, gone global |

> **"The BASELINE must be known to determine the existence of a change or increase in the number of cases from baseline."** This is why endemic rates matter.

### Patterns of occurrence — the five outbreak types

**Purpose:** **"These patterns are used to DEFINE THE BOUNDARIES of a problem to help investigate possible CAUSES OR SOURCES."**

| Pattern | Definition | Textbook example |
|---|---|---|
| **Common source** | **A group exposed to a COMMON NOXIOUS INFLUENCE** | **Release of noxious gases — ricin in the Japanese subway system and in a water system in the US** |
| **Point source** | **ALL persons exposed become ill AT THE SAME TIME, during ONE incubation period** | — |
| **Intermittent or continuous source** | **Cases exposed over a period of DAYS OR WEEKS** | **Food poisonings at a restaurant chain throughout the US from the purchase of CONTAMINATED GREEN ONIONS** |
| **Mixed** | **"When a victim of a common source epidemic has PERSON-TO-PERSON CONTACT with others and spreads the disease, further propagating the health problem"** | **The spreading of INFLUENZA** |
| **Propagated** | **Does NOT have a common source; spreads GRADUALLY from person to person over MORE THAN ONE incubation period** | **The spread of TUBERCULOSIS from one person to another** |

> **The discriminator to memorize: POINT SOURCE = one incubation period, everyone at once. PROPAGATED = more than one incubation period, no common source. MIXED = starts common source, then goes person-to-person.**

### Foodborne outbreak definition — relevant to the blueprint's "food safety"

> **"The CDC defines a FOODBORNE DISEASE OUTBREAK as occurring when TWO OR MORE PEOPLE get the SAME ILLNESS after ingesting the SAME CONTAMINATED FOOD OR DRINK."**

**2018 foodborne outbreaks were linked to:** **contaminated coconut, raw sprouts, lettuce, fast-food chain salads, and precut melon.** **Bacteria most commonly associated: various strains of E. COLI and SALMONELLA.**

### Box 17.5 — Classification of Agents (a three-way ladder, expect an item)

| Term | Definition | What it measures |
|---|---|---|
| **Infectivity** | **The capacity of an agent to ENTER a susceptible host and produce infection or disease** | **Can it get in?** |
| **Pathogenicity** | **The PROPORTION OF INFECTED PEOPLE WHO DEVELOP THE DISEASE** | **Of those infected, how many get sick?** |
| **Virulence** | **The PROPORTION OF PEOPLE WITH CLINICAL DISEASE WHO BECOME SEVERELY ILL OR DIE** | **Of those sick, how many get severe/die?** |

**The ladder: enter → become sick → become severely sick.**

### Box 17.6 — Types of Agent Factors

| Category | Examples |
|---|---|
| **Host factors** | **Age, sex, race, socioeconomic status, genetics, and lifestyle choices** (cigarette smoking, sexual practices, contraception, eating habits) |
| **Environmental factors** | **Weather, temperature, humidity, physical surroundings, and biological** (e.g., insects that transmit the agent) |
| **Socioeconomic factors** | **Behavior (e.g., terrorist behaviors), personality, cultural characteristics of group, CROWDING, SANITATION, and AVAILABILITY OF HEALTH SERVICES** |

### HOW TO Recognize the Epidemiologic Clues That May Signal a Covert Bioterrorism Attack

- **Large number of ill persons with similar disease or syndrome**
- **Large number of unexplained disease, syndrome, or deaths**
- **Unusual illness in a population**
- **Higher morbidity and mortality than expected with a common disease or syndrome**
- **FAILURE OF A COMMON DISEASE TO RESPOND TO USUAL THERAPY**
- **Single case of disease caused by an UNCOMMON AGENT**
- **Multiple unusual or unexplained disease entities coexisting in the same person without other explanation**
- **Disease with an UNUSUAL GEOGRAPHIC OR SEASONAL distribution**
- **Multiple ATYPICAL PRESENTATIONS of disease agents**
- **Similar GENETIC TYPE among agents isolated from temporally or spatially distinct sources**
- **Unusual, atypical, GENETICALLY ENGINEERED, or ANTIQUATED strain of agent**
- **ENDEMIC disease with UNEXPLAINED INCREASE in incidence**
- **SIMULTANEOUS CLUSTERS of similar illness in NONCONTIGUOUS areas, domestic or foreign**
- **Atypical aerosol, food, or water transmission**
- **Ill people presenting at ABOUT THE SAME TIME**
- ⚠️ **DEATH OR ILLNESS AMONG ANIMALS that PRECEDES OR ACCOMPANIES illness or death in humans**
- ⚠️ **NO illness in people NOT exposed to common ventilation systems, BUT illness among those in proximity to the systems**

### Levels of Prevention box — Surveillance Activities

| Level | Intervention as printed |
|---|---|
| **Primary** | **Develop an approach for MASS SCREENING AND VACCINATIONS for citizens to reduce the occurrence of COVID-19 in the community.** |
| **Secondary** | **INVESTIGATE an outbreak of flulike illness in a local school to determine the cause of the symptoms.** |
| **Tertiary** | **Provide HEALTH CARE AND TREATMENT for those INFECTED by COVID-19.** |

### Emergency public health measures

> **"Response to bioterrorism or large-scale infectious disease outbreak may require the use of EMERGENCY PUBLIC HEALTH MEASURES such as QUARANTINE, ISOLATION, CLOSING PUBLIC PLACES, SEIZING PROPERTY, MANDATORY VACCINATION, TRAVEL RESTRICTIONS, and DISPOSAL OF THE DECEASED."**

**Provider protection measures named for COVID-19:** **standard precautions when coming into contact with broken skin or body fluids; disposable nonsterile gowns and gloves followed by adequate hand washing after removal; and use of a mask or face shield.**

---

## Source conflicts and traps

- ⚠️ **The blueprint row is the biggest trap in this chapter.** Seven of the eight listed topics are **Ch. 11 and Ch. 12 content**, not Ch. 17. **Do not build all five questions for this row from surveillance mechanics.** See the mismatch table at the top of this file. In particular, **"types of immunity (herd, passive, active)" does not appear in Chapter 17 at all** — that is Chapter 11.

- ⚠️ **"Confidentiality" is named in the blueprint's legal-responsibilities topic but is NOT discussed in Chapter 17.** The chapter covers **mandatory reporting** thoroughly and mentions **social stigma (HIV/AIDS) as a cause of underreporting**, and the Evidence-Based Practice box touches **informed consent ethics in surveillance** — but there is no confidentiality content proper. Cross-reference **Ch. 12** for HIV/STI confidentiality and partner notification. **Flag for Canvas verification.**

- ⚠️ **Passive vs. active is about WHO INITIATES, not about how fast or how good.** **Passive = reports come IN to the health department. Active = the health department GOES OUT and searches.** A distractor may frame passive as "lazy" or active as "automated." The active system's defining feature is **the nurse naming the disease and gathering data about existing cases.**

- ⚠️ **Sentinel can be a DISEASE or a POPULATION.** The chapter states both explicitly. Distractors usually offer only one.

- ⚠️ **Point source vs. propagated hinges on INCUBATION PERIODS, not on severity or number of cases.** **Point source = one incubation period. Propagated = more than one.** The mixed outbreak is the hybrid, and influenza is its named example while TB is the propagated example.

- ⚠️ **Holoendemic prevalence DECREASES with age.** This is counterintuitive (most conditions increase with age) and is stated explicitly, which makes it a natural item.

- ⚠️ **Infectivity / pathogenicity / virulence is a three-step ladder with different denominators.** Infectivity = can it enter. Pathogenicity = **of the infected**, who gets disease. Virulence = **of those with clinical disease**, who gets severely ill or dies. Swapping the last two is the standard error.

- ⚠️ **Act before the case definition is met.** The chapter states plainly: **"Action to control a disease should be taken AS SOON AS A PROBLEM IS IDENTIFIED, although there may not be enough information to meet the case definition."** An option saying the nurse should wait for laboratory confirmation before acting is wrong.

- **Not all nationally notifiable diseases are reportable in every state.** Reporting is **mandated by state law or regulation**, and lists differ. An item assuming uniformity is wrong.

- **Mortality data are often the ONLY health data for small geographic areas.** This is stated twice. It also connects to Ch. 24's rural content, where small-area data are scarce.

- **The nurse sees the event first.** Stated verbatim. Combined with Ch. 16's "health care professionals are the first on the scene" in a biological incident, this is a recurring theme across the two chapters.

- **Animals dying before humans is a bioterrorism clue.** So is illness confined to people sharing a ventilation system. Both are concrete and easy to write items around.

- **OCR bleed:** the key terms block (p. 305) renders out of order with stray quote marks. The Box 17.3 notifiable disease list is rendered in **two interleaved columns**, so entries appear scrambled (e.g., "Congenital syphilis / Syphilitic stillbirth" splits oddly); the list above has been reordered by hand. One passage on p. 309 discussing mortality data uses is **catastrophically character-interleaved** in the raw pull and was reconstructed from the chapter summary at the end.
