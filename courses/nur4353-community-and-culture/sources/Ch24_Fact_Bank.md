# Fact bank — Chapter 24: Rural Health and Migrant Health

**Source:** Stanhope & Lancaster, *Foundations for Population Health in Community/Public Health Nursing*, 6th ed., Section 6, printed pp. 420–439. Authors: Angeline Bushy and Candace Kugel.

**Blueprint weight:** 10 questions (tied for heaviest on the final, with Ch. 23, 25, and 27).

**To regenerate the raw text:**

```bash
python3 extract.py pull FOUNDATIONS_for_POPULATION_HEALTH_with_bookmarks.pdf 420 439 --offset 20 --out ch24_raw.txt
python3 extract.py digest ch24_raw.txt --out ch24_facts_raw.md --chapter 24
```

Raw pull is 111,738 chars. **This file is the curated layer.** The mechanical digest's "definitional sentences" bucket is unusable for this chapter — the two-column scan interleaves columns, so it renders the migrant farmworker definition as fragments spliced with an unrelated case study. Everything below was read in the source and de-bled by hand. Trust this file over the digest.

---

## Chapter outline (printed pages)

| Section | p. | Named in the final blueprint? |
|---|---|---|
| Rural-Urban Continuum | 421 | yes — "characteristics of rural populations" |
| Population Characteristics and Cultural Considerations | 422 | yes |
| Health Status of Rural Residents | 423 | yes — "risk factors, health problems" |
| Women's Health and Maternal and Infant Health | 424 | yes |
| Health of Children | 424 | yes — "children" named explicitly |
| Mental Health | 425 | yes |
| Impact of COVID-19 in Rural America | 425 | no |
| Occupational and Environmental Health Problems in Rural Areas | 425 | yes — "effect of exposure to pesticides" |
| Rural Health Care Delivery Issues and Barriers to Care | 426 | yes — "barriers to care" |
| Health of Minorities, Particularly Migrant Farmworkers | 427 | yes |
| Characteristics of Migrant Farmworkers | 427 | yes — named verbatim |
| Migrant Lifestyle | 429 | yes |
| Housing | 430 | yes |
| Issues in Migrant Health | 430 | yes — "health problems and risk factors" |
| Other Specific Health Problems | 431 | yes |
| Children of Migrant Workers | 432 | yes |
| Cultural Considerations in Migrant Health Care | 433 | partial |
| Nurse-Client Relationship | 433 | partial |
| Health: Values, Beliefs, and Practices | 434 | partial |
| Nursing Care in Rural Environments | 434 | yes — "challenges of rural nursing" |
| Healthy People 2030 | 436 | no |
| Use of Technology | 436 | no |

> **Blueprint note:** the final blueprint's Ch. 24 row lists seven topics, and six of them map onto chapter section headings almost verbatim ("Characteristics of the migrant/seasonal worker," "Barriers to care for rural and migrant populations," "Challenges of rural nursing"). As with Ch. 23, this strongly suggests items are being written straight off the chapter outline. The one exception is **HPSAs** — see the traps section, this is a genuine source gap.

---

## Key terms (all 18, with printed page)

Most of these are defined in **Box 24.1, "Terms and Definitions"** (p. 421), sourced from the Rural Health Information Hub. Box 24.1 is the single densest testable object in the chapter.

| Term | p. | Definition as given |
|---|---|---|
| documentation | 427 | Confers legal, social, and physical mobility and facilitates access to information, education, employment, services, and legal protections (Messias et al., 2015). |
| farm residency | 421 | Residency **outside** area zoned as "city limits"; usually infers involvement in agriculture. |
| frontier | 425 | Regions having **fewer than six persons per square mile**. |
| metropolitan area | 421 | Contains a core urban area of **50,000 or more** population. (Box 24.1 phrases it as "metropolitan county: regions with a central city of at least 50,000 residents.") |
| micropolitan area | 421 | Contains an urban core of **at least 10,000 but fewer than 50,000** people. Box 24.1 phrases it as "counties that do not meet SMSA criteria." |
| migrant farmworker | 426 | A **seasonal farmworker who must travel** to do farm work and **is unable to return to a permanent residence within the same day**. |
| Migrant Health Act | 430 | Signed **1962**. Provides primary and supplemental health services to migrant workers and their families at migrant health centers. |
| migrant health center | 427 | Federally supported clinic delivering services under the Migrant Health Act. In 2018, 895,789 patients served at 174 reporting centers; 324,937 of those were uninsured (HRSA, 2018). |
| migrant lifestyle | 429 | The unpredictable pattern of leaving home annually, traveling to distant worksites, uncertainty about work and housing, isolation in new communities, and inadequate resources. |
| non-core areas | 421 | Areas with **no urban cluster of 10,000 or more** residents; average about 14,000 residents. |
| nonfarm residency | 421 | Residence **within** area zoned as "city limits." |
| pesticide exposure | 426 | Contact with agricultural chemicals, largest group being **organophosphates**; the most common health issue for farmworkers. |
| rural | 420 | Communities having **fewer than 20,000 residents OR fewer than 99 persons per square mile**. (The chapter then states: "In this chapter, rural refers to areas having fewer than 99 persons per square mile and communities having 20,000 or fewer inhabitants.") |
| rural-urban continuum | 421 | Rural and urban are **not opposing lifestyles** but a continuum: remote farm → village/small town → larger town/city → large metro area with core inner city. (Fig. 24.1) |
| seasonal farmworker | 427 | **Returns to a permanent residence**, works in agriculture seasonally, and does **not** work year-round exclusively in agriculture. |
| suburbs | 422 | Area adjacent to a highly populated city. |
| undocumented immigrant | 427 | "Individuals who either entered or are currently residing in the country **without valid immigration or residency documents**" (Messias et al., 2015, p. 86). |
| urban | 420 | Nonrural geographic areas with higher population density; **more than 99 persons per square mile**; cities with a population of at least 20,000 but less than 50,000. |

**Additional Box 24.1 terms not in the key term list but defined in the box:**

| Term | Definition |
|---|---|
| Large central | Counties in large (1 million+) metro areas containing all or part of the largest central city |
| Large fringe | Remaining counties in large (1 million+) metro areas |
| Small | Counties in metro areas with fewer than 1 million people |
| Standard metropolitan statistical area (SMSA) | Regions with a central city of at least 50,000 residents |
| Core-based statistical area (CBSA) | Collective term for both metro and micro areas |

---

## §1 Rural-Urban Continuum (p. 420–422)

- **There is no "typical rural town."** Definitions for rural are more subjective and relative than for urban. Some consider rural "a state of mind."
- Rural is defined generally by **(1)** geographic location and population density, or **(2)** distance from (e.g. 20 miles) or time needed (e.g. 30 minutes) to commute to an urban center. Other definitions link rural with **farm residency** and urban with **nonfarm residency**.
- Micro areas contain about **60%** of the total nonmetro population, averaging **43,000 people per county**. Non-core areas average about **14,000**.
- **"Doughnut effect"** — the recent population shift from urban to less-populated regions; people moving away from highly populated areas to outlying suburbs of urban centers. Accelerated in 2020 as urban residents relocated during COVID-19.

**Population characteristics (p. 422):**
- Whites comprise about **80%** of the rural population vs. **58%** of urban. Hispanics **9%**, Blacks **8%** (USDA, 2018).
- Rural communities have a **higher proportion of residents younger than 18 and older than 65**, and more residents who are married or widowed, than urban counterparts.
- The **"graying" of rural areas** is partly due to the attraction of **retirees** choosing rural areas for scenic beauty and slower pace of life.
- Rural families are **less likely to have private insurance** and **more likely to receive public assistance or be uninsured**.

**The working poor (p. 422) — a testable construct:**
> In working poor families, one or more adults are **employed but still cannot afford private health insurance**, and their annual income **disqualifies the family from public insurance**. They are particularly at risk for being underinsured or uninsured.

Why this happens more in rural settings: high proportion of rural residents are **self-employed in a family business** (ranching, farming) or work in **small enterprises** (service station, restaurant, grocery store); or employed in **part-time or seasonal occupations** where health insurance is not an employee benefit.

**Rural Health Information Hub's nine social determinants that are barriers to accessing care (p. 422):**
1. Higher poverty rates
2. Cultural and social norms about health behaviors
3. Low health literacy levels and incomplete perceptions of health
4. Linguistic and educational disparities
5. Limited affordable, reliable, or public transportation
6. Unpredictable work hours or unemployment
7. Lower population densities for program economies of scale coverage
8. Availability of resources to support personnel, use of facilities, and effective program operation
9. Lack of access to healthy foods and physical activity options

**Box 24.2 — Characteristics of Rural Life:**
More space, greater distances between residents and services; cyclical or seasonal work and leisure; informal social and professional interactions; access to extended kinship systems; residents who are related or acquainted; **lack of anonymity**; challenges maintaining confidentiality stemming from familiarity; small (often family) enterprises, fewer large industries; economic orientation to land and nature (agriculture, mining, lumbering, fishing, marine); more high-risk occupations; town as center of trade; churches and schools as socialization centers; **preference for interacting with locals (insiders)**; **mistrust of newcomers (outsiders)**.

---

## §2 Health Status of Rural Residents (p. 423–424)

**Overall pattern:** rural residents have a **poorer perception of their overall health and functional status** than urban counterparts. Rural adults under 65 are more likely than urban adults to view their health status as **fair to poor**.

**Rural adults are MORE likely to:** smoke, report higher rates of alcohol use, be obese, have more chronic health conditions and mobility limitations.

**Rural adults are LESS likely to:** engage in physical activity during leisure time, wear seat belts, have regular blood pressure checks, have Pap smears, perform breast self-examinations, have colorectal screenings, seek medical care.

**Usual source of care (p. 424):** Rural adults are **more likely than urban adults to identify a particular medical provider as their usual source of care**. Providers most often seen by rural adults are **general practitioners and APRNs**; urban adults are more likely to see a **medical specialist**. A person with a usual source of care is more likely to seek care when ill and follow prescribed regimens.

**Provider maldistribution (p. 424) — the numbers:**

| Measure | Rural | Urban |
|---|---|---|
| Primary care physicians per 100,000 | **39.8** | **53.3** |
| Specialty physicians per 100,000 | **30** | **263** |

**Injury/accident risk:** More than **50%** of vehicle crash-related fatalities occur in rural areas. There is an additional **22%** risk of injury-related deaths in rural areas (NRHA, 2020). Guns may be more readily found in rural vs. urban homes because of distance from town and the likelihood of animals being a danger.

**Box 24.3 — Rural-urban disparities (a two-sided list; know which side is which):**

| Residents of **fringe counties near large metro areas** have | Residents in **the most rural counties** have |
|---|---|
| Lowest premature mortality | Highest death rates for children and young adults |
| Lowest death rates for unintentional injuries, homicide, suicide | Highest death rates for unintentional and motor vehicle traffic injuries |
| Lowest levels of smoking, alcohol, adolescent childbearing | Highest death rates among adults for ischemic heart disease and suicide |
| Lowest prevalence of physical inactivity in leisure time among **women** | Highest levels of smoking among **adolescents**; highest levels of leisure physical activity among **men** |
| Lowest levels of obesity among adults | Highest levels of obesity among adults |
| Greatest number of physician specialists and dentists per capita | Fewest physician specialists and dentists per capita |
| Lowest percent without health insurance | Highest percent without health insurance |
| Lowest percent with no dental visits | Least likely to have seen a dentist |
| — | Highest percent of adults with activity limitations from chronic conditions |

**Women's/maternal-infant health (p. 424):** Rural populations have **higher infant and maternal morbidity rates**, especially counties designated as **HPSAs**, which often have a high proportion of racial minorities. Particularly at risk: women who **live on or near Indian reservations**, are **migrant workers**, and are of **African American descent**.

**Sexual assault in rural areas (p. 424) — a favorite scenario setup:** Incidence is hard to document because of rural isolation and the **higher likelihood that the person assaulted knows people in the community**. The rate is thought to be **higher than in urban areas**. Women may be hesitant to report because people who know her may **see her car parked at the reporting site**, or she may **personally know the person to whom the report is made**. **Perpetrators are often family members**, so the victim may not be believed or may be threatened into silence. **Confidentiality is often the issue.**

**Health of children (p. 424):**
- Urban children are **less likely to have a usual provider** but **more likely to see a pediatrician** when ill. Rural adults and children are more likely to have a **general practitioner** as regular caregiver.
- Farm children are exposed to noise, organic and inorganic dusts, and farm equipment hazards. **Farm children learn how to work by watching their parents**, and some may not use personal protective equipment. Injuries come from tractors, ATVs, cattle and horses, hand tools, barbed wire, and falls from heights such as a barn.
- **School nurses are scarce in frontier and rural areas** because of (1) a shortage of health care professionals and (2) fewer taxpayers, thus less income to support school nurses.
- Creative workarounds: two or more counties share the cost of a **"district" health nurse**; counties contract with an urban agency. In frontier states, schools may be **more than 100 miles apart**; the county nurse may visit each school **only once or twice per school term**, usually to update immunizations and teach maturation classes.

**Mental health (p. 425):**
- Stress, stress-related conditions, and mental illness are prevalent among populations with **economic difficulties**.
- Rural residents **delay seeking care** for emotional problems **until an emergency or crisis arises**, even when services are available and accessible.
- There is a **more persistent, endemic level of depression** among rural residents, related to high poverty, geographic isolation, and insufficient mental health services.
- Depression contributes to escalating **accidents and suicides, especially among rural male adolescents and young men**.
- Underreporting mechanism: when people are related or know each other well, they are **less likely to report** domestic violence and substance abuse. In small, tight-knit communities, **destructive coping behaviors come to be accepted as usual occurrences** for a particular family.
- Gaps in the rural mental health continuum: preventive education, anticipatory guidance, early intervention, crisis and acute care, follow-up care.

**COVID-19 in rural America (p. 425):** Rural Americans more vulnerable due to **higher proportion of elderly, higher smoking rates, prevalence of certain chronic diseases, and lower insurance coverage**. Nearly **half of rural hospitals operate in a financial deficit**; many closed or furloughed staff. **Many farmworkers fear testing for COVID since a positive test might mean permanent job loss.**

---

## §3 Occupational and Environmental Health in Rural Areas (p. 425–426)

**Four high-risk industries identified by OSHA found in predominantly rural environments:**
1. Forestry
2. Mining
3. Marine-related fields
4. Agriculture

Associated risks: machinery and vehicular accidents, trauma, selected cancers related to environmental factors, allergies and respiratory conditions from repeated exposure to toxins, pesticides, and herbicides.

**The regulatory gap (high-yield):**
- **Small enterprises with a small number of employees do not fall under OSHA guidelines.** Safety standards are therefore **not enforceable on most farms and ranches**, since these are often family enterprises.
- **Small businesses such as farms are not covered under workers' compensation insurance.**

**Six most common health issues for farmworkers (NCFH, 2018b):**
1. Pesticide exposure
2. Skin disorders
3. Infectious diseases
4. Musculoskeletal injuries
5. Respiratory illnesses
6. Hearing and vision disorders

**Pesticides (p. 426):**
- Most of the North American food supply is treated with agricultural chemicals; the largest group is **organophosphate pesticides**.
- Exposure is both **immediate** (working in fields foggy or wet with pesticides) and **chronic** (unknown long-term effects).
- **The farmworker's clothing and dwelling can be major sources of cross-contamination for both the worker and the family.** Entire families are at risk from **drift from nearby areas, not regularly washing hands, and bringing contaminated clothes home.**
- EPA and OSHA **require** that farmworkers be given information about pesticide safety. However, migrant farmworkers **may not receive it, may get ineffectual training, or may not be able to read it.**
- **Agricultural Worker Protection Standard (WPS)** — EPA revisions implemented **January 2017**: restrictions on the age of workers who handle pesticides, worker training, and other protective practices.

**Pesticide poisoning symptoms (NCFH, 2018b) — memorize the split:**

| Mild symptoms | Severe symptoms |
|---|---|
| Headache, fatigue, dizziness, nervousness, perspiration, loss of appetite, thirst, eye irritation, irritation of the nose and throat | Fever, intense thirst, vomiting, muscle twitches, convulsions, inability to breathe, unconsciousness |

Exposure to large doses can lead to **death**.

**Heat stress (p. 426):** signs and symptoms of heat exhaustion include **heavy sweating; cold/pale/clammy skin; fast, weak pulse; nausea and vomiting; and fainting**. Added danger: **pesticides are more readily absorbed through hot, sweaty skin than through cool skin.**

**Respiratory risk tasks (NCFH, 2018b, p. 4):** working in dusty fields and buildings; handling hay; feeding or working with feedstuffs; working in corn silage; cleaning silos or grain bins; working around fishmeal; working with bird droppings or dust from animal hair, fur, or feathers; applying agricultural chemicals such as fertilizers and pesticides. **These same tasks also lead to skin disorders and eye injuries.**

### Levels of Prevention — Related to Rural Health (textbook box, p. 426)

| Level | Intervention as printed |
|---|---|
| **Primary** | Teach workers how to **reduce exposure** to pesticides. |
| **Secondary** | Conduct **screening** such as **urine testing** for pesticide exposure. |
| **Tertiary** | **Initiate treatment** for symptoms of pesticide exposure such as nausea, vomiting, and skin irritation. |

---

## §4 Barriers to Care — the Four A's (p. 426–427)

This is the most likely single-concept item in the chapter. The textbook defines four terms in sequence:

| Term | Definition as given |
|---|---|
| **Availability** | Health services **exist** and have the necessary **personnel** to provide essential services. Sparseness of population limits the number and array of services in a region. |
| **Accessibility** | A person has **logistical access** to needed services **as well as the ability to purchase them**. |
| **Affordability** | Services are of **reasonable cost** and the family has **sufficient resources to purchase them** when needed. Associated with both availability and accessibility. |
| **Acceptability** | A particular service is **appropriate and offered in a manner congruent with the values of a target population**. Hampered by both the patient's cultural preference and the **urban orientation of health professions**. |

**Box 24.4 — Barriers to Health Care in Rural Areas:**
Lack of health care providers and services and great distances to obtain services; lack of personal transportation; unavailable public transportation; lack of telephone services; unavailable outreach services; inequitable reimbursement policies for providers; unpredictable weather or travel conditions; inability to pay for care or lack of insurance; lack of know-how to procure publicly funded entitlements and services; inadequate provider attitudes and understanding about rural populations; language barriers (caregivers not linguistically competent); care and services not culturally and linguistically appropriate.

**Provider attitude (p. 427):** A demeaning attitude, lack of accurate knowledge about rural populations, or insensitivity about the rural lifestyle **generates mistrust, causing rural patients to view professionals as outsiders to the community.** Conversely, some rural providers report **professional isolation and lack of community acceptance.**

---

## §5 Characteristics of Migrant Farmworkers (p. 427–429)

**The core distinction — expect this verbatim:**
- **Migrant farmworker** = a seasonal farmworker who **must travel** to do farm work and **cannot return to a permanent residence within the same day**.
- **Seasonal farmworker** = **returns to a permanent residence**, works in agriculture seasonally, does **not** work year-round exclusively in agriculture.

**Demographics:**
- USDA (2018) estimated **1.0 to 2.7 million** MSFWs in the United States.
- **70.7%** of MSFWs are **foreign born**; **64.1%** born in **Mexico** (NCFH, 2016). Others include Central Americans, African Americans, Jamaicans, Haitians, Laotians, and Thais.
- **28%** said they could **not speak English "at all"**; **9%** said they could speak English "somewhat."
- Approximately **28% of foreign-born US residents are undocumented immigrants**.
- **85%** of farmworkers are hired **directly**; **15%** are **contract** workers.
- Crop distribution: fruit and nut **40%**, horticultural **23%**, vegetable **21%**, field **13%**, miscellaneous **3%** (Carroll, 2016).
- April 2020 average wage: **$15.07/hour**. An estimated **688,000** workers hired directly by farm operators during the week of April 12–18, 2020.
- Fewer young immigrants are entering agriculture, so the **average age of immigrant farmworkers has risen**. The **share of women farmworkers has risen**, possibly due to increased mechanical aids meaning women do not have to carry heavy loads as often.

**Three traditional migratory streams (p. 429):**
1. **Eastern** — originating in **Florida**
2. **Midwestern** — originating in **Texas**
3. **Western** — originating in **California**

These streams are becoming **less distinct** as workers increasingly travel throughout the country.

**Why MSFWs are a "unique vulnerable population" (p. 430) — the textbook's own list:** mobility, the physical demands of their work, social and often geographic isolation, language differences, and high rates of financial impoverishment.

**Documented vs. undocumented (Evidence-Based Practice box, Messias et al., 2015):**
- Being undocumented **may not be a permanent state**. Documented immigrants may let visas expire and become undocumented; those who arrive undocumented may apply for and be granted permanent status.
- Undocumented immigrants often face a **dangerous passage**, then **rejection, stigmatization, and scapegoating**, and constant worry about **arrest or deportation**.
- Barriers: language, social and economic resources, restricted transportation and distance, and **fear and mistrust of the health care system**. These barriers lead them to **use emergency services more often, which increases the cost of care.**

**Labor trafficking (p. 429) — testable because it carries a legal duty:**
- Polaris Project definition: recruitment, harboring, transportation, provision, or obtaining of a person for labor or services **through the use of force, fraud, or coercion** for the purposes of involuntary servitude, peonage, debt bondage, or slavery (22 USC § 7102).
- The **agricultural sector is recognized as one of the most common labor markets involving foreign nationals trafficked in the US.**
- **Signs:** performing work duties in exchange for basic necessities (food, water, housing) rather than money; unable to freely choose where they live; **identification documents held by employer**.
- **Screening questions:** Do you have a debt to your employer or recruiter you can't pay off? Is your job different than you were promised? Is there verbal or physical abuse at work?
- **Nursing action:** If a **minor** is identified, notify **child protective services and law enforcement**; **the minor should not be left alone until services arrive.** For an **adult**, **obtain permission** to contact authorities and involve a social worker or agency. National Human Trafficking Resource Center hotline: **888-373-7888**.

**Labor law protections and their holes (p. 430):**

| Law | What it does | The exemption |
|---|---|---|
| **Fair Labor Standards Act (FLSA)** | Minimum wage, overtime pay, record keeping, child labor standards | Farms with **fewer than seven workers** in a calendar quarter are **exempt from minimum wage**; farmworkers are **not included in overtime pay** |
| **Migrant and Seasonal Agricultural Worker Protection Act** | Contractors/employers must disclose employment terms, post worker protection info at the worksite, pay what is due with itemized statements, ensure housing complies with federal and state safety standards | Employers have made multiple attempts to weaken or void the law |
| **OSH Act Field Sanitation Standards** | Ensure **drinkable water and accessible sanitation facilities** | Difficult to enforce |
| **H-2A guest worker regulations** | Allows agricultural employers to hire temporary foreign workers | Difficult to enforce; can leave workers unable to protect themselves from abusive conditions |

**Housing (p. 430):** May be camps with cabins, trailers, or houses; some live in cars or tents. Generally **crowded by federal standards**; much is **substandard**, lacking adequate sanitation and working appliances, or with severe structural defects. May be located **next to fields sprayed with pesticides** or where farm machinery endangers children. Poor and crowded residence contributes to **tuberculosis, gastroenteritis, hepatitis, and lead exposure**. Renting in rural areas is nearly impossible because of high rent, substantial deposits, long-term leases, lack of credit, discrimination, and lack of rental units.

---

## §6 Issues in Migrant Health (p. 430–432)

**Most often reported health issues among migrant workers (NCFH, 2018a):** overweight/obesity, hypertension, diabetes mellitus, **otitis media and eustachian tube disorders**, depression and other mood disorders, and substance abuse.

**Framing sentence worth knowing:** poor and unsanitary working and housing conditions make farmworkers susceptible to health problems **no longer seen as dangers to the general public**. **The agriculture industry is one of the most dangerous occupations in the United States.**

### Nine factors limiting adequate provision of health care services (p. 430–431)

1. **Lack of knowledge about services** — isolation and lack of English fluency mean they lack usual information sources.
2. **Inability to afford care** — Medicaid often not available, especially to undocumented workers. Workers **may not remain in an area long enough to be considered for benefits, or lose benefits when they relocate** to a state with different eligibility standards. Salaries fluctuate monthly, making them ineligible for periods. **If they do not work, they are not paid, so many avoid taking time off to get care.**
3. **Affordable Care Act / insurance subsidies** — many do not receive employer-mandated coverage because of the **small farm exemption** and exclusion of **seasonal workers employed fewer than 120 days** in the employer's tax year. **Undocumented workers are excluded from any employer and individual insurance mandates.**
4. **Availability of services** — treatment differs by whether they were in the US before the welfare reform legislation and by immigration category; each state decides whether to fill the gap. Many are ineligible for **SSI and SNAP**.
5. **Transportation** — services far from work or home; transportation unavailable, unreliable, or expensive. **Privacy is compromised when workers depend on employers for transportation to clinics.**
6. **Hours of services** — many services available only during work hours, so seeking care means **lost earnings**.
7. **Mobility and tracking** — families move but **health care records typically do not go with them**, fragmenting care for TB, chronic illness, and immunizations.
8. **Language barriers** — adults may not read or write English and **may be embarrassed to admit it, so they nod or say yes when understanding is minimal**. Children may be more competent in English, but **adults may prefer that children not know about their health needs**. Recruiting and retaining **bicultural and bilingual staff** is a priority.
9. **Discrimination** and **10. Documentation** — fear that getting services in a federally or state-funded clinic may lead to discovery and deportation.

**TB and the tracking problem (high-yield, appears twice):**
- Health departments dispense TB medications **monthly**; adequate treatment requires **6 to 12 months**. When migrant farmworkers move, **they must independently seek out new health services to continue their medications.**
- The **Migrant Clinicians Network (MCN) TB tracking program** makes previous provider information available to a farmworker's current provider, maintaining continuity of TB care for a mobile population.
- **Incomplete treatment contributes to resistant TB.**
- MSFWs are "among the highest-risk populations for **latent TB infection** in the United States" (Oren et al., 2016).
- **Being born outside the United States is a significant risk factor for TB**: in 2016, foreign-born individuals had a rate of **14.7 per 100,000, or 14 times higher** than native-born. Hispanics/Latinos accounted for **28%** of US TB cases in 2015; of TB cases among foreign-born people, Latinos represented **32%**.
- Contributing factors: **higher rates in countries of origin** (Latin America, Haiti, Southeast Asia), **crowded housing**, and **malnutrition**.

**Other specific health problems (p. 431–432):**
- **Dental disease is one of the most common health problems for farmworkers of all ages.** Barriers: no dental insurance, long travel times, language problems, shortage of dental providers. **Mexican Americans have higher rates of tooth decay and periodontal disease than non-Hispanic whites**, and their children are not spared.
- **Behavioral health:** depression, anxiety, PTSD, stress — related to isolation, discrimination, trauma, economic hardship, legal status, poor living conditions, and weather that interrupts work. **MSFWs identify themselves as stressed independently of how they rate their physical health.**
- **Nervios** — a term used by some Western hemisphere Hispanics for increased susceptibility to mental stress and symptoms of nervousness. **22%** of a California farmworker household survey reported it (O'Connor et al., 2015).
- Pulgar et al. (2016): **almost a third of farmworker women** reported significant depression symptoms, markedly higher than the overall US population. **Farmworkers, especially males, are reluctant to seek mental health care.**
- **Female farmworkers, especially the undocumented,** suffer harassment and sexual abuse. Human Rights Watch (2012): harassment and sexual abuse are **so common that female farmworkers see no escape from its occurrence and believe it is part of the job.** Sexually charged language, unwanted touching, stalking, and rape were identified as common. **Most victims do not report, often feeling powerless.**
- **Substance use:** alcohol poses safety hazards (driving accidents, workplace injuries) and contributes to greater HIV risk, violence in camps/home sites, domestic violence, and decreased funds for personal and family needs.
- **Diabetes:** prevalence among the US Latino population is estimated **three to five times greater** than the general population, with higher rates of end-stage complications. CDC (2017a) incidence **8.4 per 1000** for this population vs. **5.7 per 1000** for non-Hispanic whites. The migrant lifestyle makes proper nutrition, weight control, and continuity of medication difficult.
- **HIV risk factors:** lack of accurate knowledge, barriers to services, limited education, poverty, longer time in the United States, **sharing needles for common medications such as vitamins and antibiotics**, unprotected sexual activity, isolation and separation from families, available prostitution, migration across borders, and **needle sharing through amateur tattooing** (NCFH, 2018c).

### Box 24.5 — Example of Assessment With Migrant Farmworkers (the levels-of-prevention worked example)

The nurse, working with community partners and migrant camp gatekeepers, visits migrant camps to:
- Perform **nutrition education** → **primary prevention**
- **Screen for diabetes** → **secondary prevention**; if a high glucose level is obtained, refer to a migrant health center or county health department clinic for complete assessment
- For those **diagnosed with diabetes**, plan and execute a **culturally appropriate educational program on self-care** → **tertiary prevention**

---

## §7 Children of Migrant Workers (p. 432–433)

**Framing:** migrant farmworker parents want a better future for their children — "this strong desire is often the catalyst that causes many farmworkers to leave their country of origin." On the surface these children **may look like children from any other aggregate** (happy, outgoing, inquisitive), but they suffer real deficits.

**Health care deficits of migrant children:**
- **Malnutrition** (e.g. vitamin A, iron)
- **Infectious diseases** (upper respiratory tract infection, gastroenteritis)
- **Dental caries** — caused by prolonged use of the bottle, **bottle propping**, limited access to fluoride or dental care
- **Inadequate immunization status**
- **Pesticide exposure**
- **Injuries**
- **Overcrowding and exposure to lead** in poor housing conditions
- **Disruption of social and school life**

**Two named programs (know the age split):**

| Program | Ages served | Description |
|---|---|---|
| **Migrant and Seasonal Head Start Program** | **6 months to 5 years** | A safe, healthy, and educative option. **Inadequate funding results in lack of services for all migrant children.** |
| **Migrant Education Program** | **Older than 5 years** | A state and nationally sponsored **summer school** program for farmworkers' children. **Not available to all eligible migrant youth; currently offered in only 38 states.** |

**Migrant children as young as 8 years of age may stay home to care for younger children.**

**Most common threats to youth working on farms (NCFH, 2018d):**
- Injuries and fatalities: machinery including tractors; motor vehicles including ATVs; drownings
- **Heat and sun** — there is often a lack of drinking water
- **Musculoskeletal injuries** from constant bending, twisting, carrying heavy items, and repetitive motions during long work hours
- **Pesticides**
- **Educational deprivation**

**FLSA child labor rules in agriculture (the exclusions are the point):**

| Age | What is permitted |
|---|---|
| **Younger than 12** | May work on a farm with **fewer than seven full-time workers** |
| **12 and older** | May work on a farm **with parental permission** or if their **parent is also working** on the farm |
| **14 or 15** | May work in **nonhazardous** agricultural positions, **but not during school hours** |
| **16 and older** | May work **any farm job at any time**, including **hazardous work, with no restrictions on hours** |

> **Federal law does not protect children from overworking or by limiting the hours they work outside of school.** Children may work until late evenings or very early mornings every day of the week if not protected by state law.

**Educational consequences:** adolescent farmworkers reported being **too tired after working to do homework and attend classes**. They may **leave school before the end of the term** to travel with families and **arrive late in the fall**. Child farmworkers may attend **three to five different schools each year**.

---

## §8 Cultural Considerations in Migrant Health Care (p. 433–434)

Because the majority of migrant farmworkers are of Mexican descent, this section focuses on Mexican cultures — but the chapter explicitly cautions that **beliefs and practices differ among regions and localities and among individuals. Mexico is a multicultural country.** Many indigenous groups speak their regional dialect and **may or may not be able to read, understand, or speak Spanish.** Mexican immigrants who are **less educated, with fewer economic resources, and from rural areas tend to possess more traditional beliefs and practices.**

**Four Spanish relational concepts (expect a matching or scenario item):**

| Concept | Meaning |
|---|---|
| **Respeto** | Respect — the nurse is considered an authority figure who should show respect to the individual |
| **Personalismo** | Relating to the individual on a **personal** level |
| **Dignidad** | Maintaining the individual's **dignity** |
| **Simpatía** | Preference for **polite, nonconfrontational** relationships |

> **The simpatía trap:** because of simpatía, individuals and families **may appear to understand what is being said (by nodding their heads) when they do not.** **It is important to validate understanding in these situations.** This is the single most likely correct-answer stem in this section.

**Communication expectations:** a Mexican patient expects to **talk about personal matters (chit-chat) for the first few minutes** of an encounter, expects the nurse **not to appear rushed** and to be a **good listener**. **Humor is appreciated**, and **touching as a caring gesture is seen as positive** — though the chapter notes touching was no longer appropriate during COVID.

**Three arenas of care:**
1. **Popular arena** — knowledgeable individuals in family or community: the **señora** (wise older woman in the community), one's grandmother (**la abuela**), the local parish priest
2. **Traditional arena** — **folk healers**: **curanderos, herbalistas, espiritualistas**
3. **Professional/allopathic arena** — Western medicine. **Mexican patients may not seek care with health care professionals first.**

**Folk medicine definition (NCFH, 2018e):** "the mixture of **traditional healing practices and beliefs that involve herbal medicine, spirituality and manual therapies** in order to diagnose, treat, or prevent an ailment or illness." Practiced by the majority of the Mexican population while in Mexico; many continue in the United States. **It is important to know what folk medicine practices patients use so you can determine whether they interfere with allopathic practices.**

**Four common folk illnesses:**
1. **Mal de ojo** — evil eye
2. **Susto** — fright
3. **Empacho** — indigestion
4. **Caída de mollera** — fallen fontanel

**Commonly used herbs:** **manzanilla** (chamomile), **yerba buena** (peppermint), **aloe vera**, **nopales** (cactus), **epazote** (wormseed).

**Other beliefs:** hot-cold balance; pregnancy and postpartum behaviors (**cuarentena**).

**Health beliefs:**
- Health may be considered **a gift from God**.
- A common perception: **a healthy person is one who can continue to work and maintain daily activities, independent of symptoms or diagnosed diseases.** **A person may miss a clinic appointment if able to work that day.**
- Some believe **illness is a punishment from God** and think this is why therapies have not cured them — **more common with chronic illnesses**.

**Family structure:** The **woman is considered the caretaker**; the **man is considered the major decision maker**. However, **Mexican women in certain families have significant influence over most matters, including health decisions.** Grandmothers and sisters are highly significant to the wife. Families may communicate regularly with family in Mexico but **have no support system in the United States.**

**Two leverage points for the nurse:**
1. The Mexican patient **may be more willing to follow the advice of another Mexican individual with a similar health problem** than the advice of the health care professional.
2. **Love of their children rather than concern for their own health may encourage migrant parents to adopt healthier lifestyles.** Many children speak better English than their parents, so it is **often useful to teach the children** healthy behaviors and encourage them to talk with their parents about what they learned.

---

## §9 Nursing Care in Rural Environments (p. 434–436)

**The help-seeking sequence:** rural people, including MSFWs, **develop independent and creative ways to cope** because of distance, isolation, and sparse resources. They **prefer to seek help first through informal networks** — neighbors, extended family, church, and civic clubs — **before seeking a professional's care.**

**Lack of anonymity — the defining feature of rural practice:**
- Boundaries between home and work roles **blur** for nurses who go to the same church, shop at the same stores, and have children in the same schools as their patients.
- Many or all patients are known **as neighbors, as friends of an immediate family member, or as part of one's extended family.**
- Rural nurses say, "**I never really feel like I am off duty because everybody in the county knows me through my work.**"
- Nurses are **highly regarded** and viewed by local people as **experts on health and illness**; residents ask health questions in the grocery store, at a service station, at a basketball game, or at church.
- Rural nurses **may be expected to know something about everything.**

**Challenges of rural nursing (blueprint names this verbatim):**
1. Professional isolation
2. Limited opportunities for continuing education
3. Lack of other kinds of health care personnel or professionals with whom one can interact
4. Heavy workloads
5. The ability to function well in **several clinical areas**
6. Lack of anonymity
7. For some, a **restricted social life**

**Rewards of rural nursing:** close relationships with patients and coworkers; diverse clinical experiences caring for patients of all ages with a variety of health problems; caring for patients for long periods, in some cases **across several generations**; opportunities for professional development; **greater autonomy**; pleasures of living in a rural area.

**Community-oriented primary health care (COPHC) — four steps:**
1. Define and characterize the community
2. Identify the community's health problems
3. Develop or modify health care services in response to the community's identified needs
4. Monitor and evaluate program process and patient outcomes

**Case management and COPHC are the two effective models named** for addressing rural health disparities.

**Services most needed in rural areas:** school nurses; family planning services; prenatal care; emergency care; mental health services; services for children and adults with special needs as well as older adults.

**Healthy People 2030 objectives named for rural/migrant workers:**
- **OSH-01:** Reduce deaths from work-related injuries
- **OSH-02:** Reduce work-related injuries resulting in missed days of work
- **IVP-03:** Reduce unintentional injury deaths

When implementing HP2030 objectives, consider rural factors: **sparse population, geographic remoteness, scarce resources, personnel shortages, and physical, emotional, and social isolation.** **Members of the community must be involved in developing the plan and assume some ownership for it.**

**Use of technology (p. 436):** Telehealth requires that patients **have a cell phone and know how to text**, and **have a computer and know how to use email** — the chapter names this as the precondition, which is itself a rural access barrier. During COVID many electronic appointments **were reimbursed by insurers.**

---

## Source conflicts and traps

- ⚠️ **HPSA is a blueprint topic that the textbook never defines.** "Health professional shortage areas (HPSAs)" is listed verbatim in the final blueprint's Ch. 24 row, but HPSA appears **exactly once** in the entire chapter (p. 424, "counties designated as HPSAs, which often have a high proportion of racial minorities") and is **never defined** — not in Ch. 24, and not anywhere else in the assigned chapters. If an HPSA definition item appears, it is coming from a Canvas module or PowerPoint, not the book. The standard HRSA definition to fall back on: **a geographic area, population group, or facility designated by HRSA as having a shortage of primary care, dental, or mental health providers.** Flag this for Canvas verification.

- ⚠️ **The two "rural" definitions use OR, not AND.** Box 24.1 says "communities having fewer than 20,000 residents **or** fewer than 99 persons per square mile." But the chapter's own operating definition (p. 422) says "areas having fewer than 99 persons per square mile **and** communities having 20,000 or fewer inhabitants." Both phrasings are in the reading. The thresholds (**20,000** and **99 per square mile**) are what matter; don't get thrown by the conjunction.

- ⚠️ **Urban is defined twice with different numbers.** Box 24.1 defines urban as "more than 99 persons per square mile; cities with a population of **at least 20,000 but less than 50,000**." But a metropolitan area requires a core urban area of **50,000 or more**. These are different classification systems (RHI-Hub vs. CBSA) sitting on the same page. If a stem asks about **metro/micro**, use 50,000 and 10,000. If it asks about **urban vs. rural**, use 20,000 and 99 per square mile.

- **Migrant vs. seasonal is the highest-probability confusable pair in the chapter.** The discriminator is **travel and same-day return**, not the seasonality of the work — both are seasonal. Migrant = **travels and cannot return home the same day**. Seasonal = **returns to a permanent residence**.

- **Micropolitan vs. non-core.** Micro = urban core of **10,000 to under 50,000**. Non-core = **no urban cluster of 10,000 or more**. The trap is treating "non-core" as a synonym for rural generally.

- **Frontier is six, not 99.** Frontier = **fewer than six persons per square mile**. Rural = fewer than 99. A stem describing an extremely remote area with schools 100 miles apart is cuing **frontier**.

- **The OSHA exemption is counterintuitive and therefore testable.** Farms and ranches are among the **most dangerous** workplaces, yet small family enterprises **do not fall under OSHA guidelines** and **are not covered by workers' compensation**. Any distractor implying farmworkers are protected by standard occupational safety law is wrong.

- **Pesticide cross-contamination targets the family, not just the worker.** The mechanism named is **clothing and dwelling** plus **drift, unwashed hands, and contaminated clothes brought home**. A stem about a farmworker's child with pesticide symptoms is testing this pathway.

- **Primary prevention for pesticides is teaching exposure reduction; secondary is urine screening.** The textbook's own Levels of Prevention box is unusually specific here — **urine testing** is the named secondary intervention, not blood work or physical assessment.

- **Simpatía vs. actual comprehension.** Nodding is not understanding. The correct nursing action is always **validate/verify understanding**, never "document that the patient verbalized understanding."

- **Rural sexual assault is thought to be *higher* than urban, not lower**, despite being harder to document. The under-documentation is the *reason* the rate looks lower, not evidence that it is.

- **Head Start is 6 months–5 years; Migrant Education Program is over 5 years and is summer school.** Easy to invert.

- **OCR bleed:** as with Ch. 23, the mechanical digest's definitional-sentence bucket is unreliable for this chapter (it splices Box 24.1 with body text and the case study). Always pull sections in full rather than trusting the digest.
