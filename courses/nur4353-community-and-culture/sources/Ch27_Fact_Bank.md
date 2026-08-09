# Fact bank — Chapter 27: Violence and Human Abuse

**Source:** Stanhope & Lancaster, *Foundations for Population Health in Community/Public Health Nursing*, 6th ed., Section 6, printed pp. 483–504. Authors: Jeanne L. Alhusen, Gerard M. Jellig, and Jacquelyn C. Campbell.

**Blueprint weight:** 10 questions (tied for heaviest on the final, with Ch. 23, 24, and 25).

**To regenerate the raw text:**

```bash
python3 extract.py pull FOUNDATIONS_for_POPULATION_HEALTH_with_bookmarks.pdf 483 504 --offset 20 --out ch27_raw.txt
python3 extract.py digest ch27_raw.txt --out ch27_facts_raw.md --chapter 27
```

Raw pull is 126,116 chars. **This file is the curated layer**, read in the source and de-bled by hand. This chapter's scan is somewhat cleaner than Ch. 23–25, but the boxed content (Box 27.1–27.4, the HOW TO box, the Levels of Prevention box) interleaves badly with body text, and those boxes are where most of the testable lists live.

---

## Chapter outline (printed pages)

| Section | p. | Named in the final blueprint? |
|---|---|---|
| Social and Community Factors Influencing Violence | 484 | partial |
| Individual / Relationship / Community / Societal | 485 | partial (socioecological model) |
| Violence Against Individuals or Oneself | 485 | — |
| Homicide | 486 | — |
| Assault | 486 | — |
| Sexual Violence and Rape | 487 | yes |
| Human Trafficking | 489 | yes — "sex trafficking" named verbatim |
| Suicide | 490 | — |
| Family Violence and Abuse | 490 | yes — "domestic abuse" |
| Development of Abusive Patterns | 491 | yes — "characteristics and behaviors of victims and abusers" |
| Types of Family Violence | 491 | yes |
| — Child Abuse / Neglect / Sexual Abuse | 492–494 | yes — "screening for abuse" |
| — Intimate Partner Abuse | 495 | yes — "intimate partner abuse" named verbatim |
| — Battering during pregnancy | 496 | yes — "violence during pregnancy" named verbatim |
| — Strangulation | 496 | yes (subsumed under IPV) |
| Abuse of Older Adults | 497 | yes — "elder abuse" named verbatim |
| Nursing Interventions: Violence and Abuse | 498 | yes — "levels of prevention," "legal responsibilities" |

> **Blueprint note:** the Ch. 27 row lists ten topics, and unlike Ch. 24 these are **not** all section headings. Two are cross-cutting and require assembling material from several places: **"Nurses' legal responsibilities in abusive situations"** (mandatory reporting, p. 501) and **"Nursing interventions for abuse and violence (primary, secondary, and tertiary levels of prevention)"** (the Levels of Prevention box plus Box 27.3 plus the narrative on pp. 498–502). Those two are flagged in their own sections below.

---

## Key terms (all 24, with printed page)

| Term | p. | Definition as given |
|---|---|---|
| assault | 486 | Not separately defined; the chapter distinguishes **aggravated** from **simple** assault and notes aggravated assault is reported to police more often, but **all assault types are underreported**. |
| child abuse | 492 | Umbrella for physical, sexual, emotional abuse and neglect (see the four/five types below). Ranges "from violent physical attacks to passive neglect." |
| child neglect | 494 | Failure to meet a child's basic needs, including housing, food, clothing, education, and access to health care. Two categories: **physical** and **emotional**. |
| community violence | 483 | Violence occurring **between strangers, friends, or acquaintances**, typically **outside of residential dwellings**. Includes physical fighting and assault with or without firearms and other weapons (Decker et al.). |
| elder abuse | 497 | **CDC:** "an intentional act or failure to act that causes a risk of harm to an older adult." **An older adult is a person age 60 or older.** **WHO:** "a single or repeated act, or lack of appropriate action, occurring within any relationship where there is an **expectation of trust**, which causes harm or distress to an older person." |
| emotional abuse | 492 | Behaviors that harm a child's **self-worth or emotional well-being** — name calling, shaming, rejection, withholding love, threatening. USDHHS phrasing: "any pattern of behavior that impairs a child's emotional development or sense of self-worth, including constant criticism, threats, and rejection." |
| emotional neglect | 494 | **Omission of basic nurturing, acceptance, and caring** essential for healthy personal development. These children are largely ignored or treated as nonpersons. Usually affects development of **self-esteem**. |
| family violence | 490 | Sexual, emotional, and physical abuse, which **tend to occur together as part of a system of coercive control**. "Generally, family violence is **violence of the most powerful against the least powerful**." |
| forensic nursing | 488 | ⚠️ **Listed as a key term but never explicitly defined in the chapter.** Described functionally: the forensic nurse "provides a key link between the investigative process, health care, and the court." **SANE is named as a subspecialty of forensic nursing.** |
| homicide | 486 | A death resulting from the **use of force against another person when a preponderance of evidence indicates that force was intentional** (Parks, 2014). The FBI's Uniform Crime Report uses **"murder"** instead, defined as "the wilful non-negligent killing of one human being by another." |
| human trafficking | 489 | Umbrella term for activities involved in **recruiting, harboring, transporting, or providing an individual for forced service or commercial sex acts through the use of force, deception, or coercion** (UNODC, 2019). **"A child under age 18 engaged in commercial sex is a victim of sex trafficking even if the youth's participation is not forced or coerced."** |
| incest | 494 | Not formally defined; described through the typical paternal pattern. **Father-daughter incest is the type most often reported.** Occurs in **all races, religious groups, and socioeconomic classes.** |
| intimate partner violence (IPV) | 484 | **Physical, sexual, or psychological harm, including stalking, caused by a current or former partner or spouse.** CDC 2019a phrasing: "abuse or aggression that occurs in a close relationship," referring to both current and former spouses and dating partners. **Four types of behavior: physical violence, sexual violence, stalking, psychological aggression.** Can also include **financial abuse**. |
| neglect | 494 | **Failure to meet a child's basic physical and emotional needs** — housing, food, clothing, education, and access to health care. |
| passive neglect | 493 | ⚠️ **Listed as a key term but never explicitly defined.** Used once in context: child abuse "ranges from violent physical attacks to passive neglect," and "**passive neglect may result in malnutrition** or other problems." |
| physical abuse | 490 | **Intentional use of physical force that can result in physical harm** — hitting, kicking, shaking, burning, or other shows of force against a child. |
| physical neglect | 494 | **Failure to provide adequate food, proper clothing, shelter, hygiene, or necessary medical care.** **Most often associated with extreme poverty.** |
| rape | 487 | Subsumed under sexual violence. **"Rape is a crime of violence, not a crime of passion."** The underlying issues are **hostility, power, and control** rather than sexual desire. **The defining issue is lack of consent of the victim.** |
| sexual abuse | 494 | **Pressuring or forcing a child to engage in sexual acts** — fondling, penetration, and exposing a child to other sexual acts. |
| sexual assault nurse examiner (SANE) | 488 | A **subspecialty of forensic nursing**. In most states, SANE nurses perform the physical examination in the ED to **gather evidence for criminal prosecution** (hair samples, skin fragments beneath fingernails, evidence from pelvic exams using colposcopy). **Nurses' evidence is credible and effective in court proceedings.** |
| sexual violence | 484 | **Sexual activity when consent is not obtained or not given freely** (Decker et al.). Expanded (Breiding et al., 2014): forcing a person to take part in a sexual act without consent — includes rape (attempted and completed), sexual coercion, being made to penetrate a perpetrator, unwanted sexual contact, and unwanted sexual **noncontact** experiences (being flashed or made to view sexually explicit media). |
| spouse abuse | 495 | Neither "wife abuse" nor "spouse abuse" **takes into account violence in dating or cohabiting relationships or violence in same-sex relationships** — this is the chapter's explicit critique of both terms. |
| strangulation | 496 | "A violent and deadly act" that **may not leave visible evidence until hours or days after the incident** (McCarthy and Stagg, 2020). A form of IPV that is **often overlooked**. |
| suicide | 484 | **Self-directed violence** (contrasted with the interpersonal forms). |
| violence | 483 | Described rather than defined: "a pervasive public health, social, and developmental threat." **The leading cause of death and disability that disproportionally affects youth, low-income populations, and people of color.** |
| wife abuse | 495 | See spouse abuse. "**Spouse abuse is usually wife abuse.**" |

---

## §1 The Public Health Approach and the Socioecological Model (p. 483–485)

### CDC's public health approach to violence prevention — four steps (Fig. 27.1)

The chapter frames this as answering: *Where does the problem begin? How could we prevent it from occurring?*

1. **Identify the problem** — collect data to determine the "who," "what," "where," "when," and "how." **This is an epidemiological approach.**
2. **Identify the risk factors** — why does one person or community experience violence and another does not?
3. **Develop and test prevention strategies** and share the information with others.
4. **Disseminate and implement** the strategies.

Fig. 27.1 renders the same model bottom-to-top as: **Define the problem → Identify risk and protective factors → Develop and test prevention strategies → Assure widespread adoption.**

### CDC's four-level socioecological model (Fig. 27.2)

| Level | What it covers |
|---|---|
| **Individual** | **Biological and personal history factors** that increase the likelihood of becoming a victim or perpetrator: education, substance use, **a history of abuse including witnessing abuse**, and mental health disorders. |
| **Relationship** | How **close social relationships** — peers, intimate partners, family members — increase risk for victimization and perpetration. Examples: risk increases for a woman and one or more children living with an abuser; **adolescents are more likely to engage in violent behavior when their peers accept it.** |
| **Community** | Settings such as **schools, workplaces, and neighborhoods**. Neighborhood considerations: high mobility, low cohesiveness and affiliation with neighbors, high population density, highly built environment with few green areas, drug traffic. Also: does the workplace tolerate verbal abuse? How do schools deal with bullying? Do youth find their peer group in a gang rather than at sports, arts, or church? |
| **Societal** | Broader factors contributing to **a culture that accepts violence**, that **reduce inhibitions against violence**, and that **create and perpetuate disparities** between segments of society. Includes "health, economic, educational and social policies that help maintain economic or social inequalities between groups in society." |

**Two statements the chapter makes explicitly about the model — both are classic distractor material:**
- **"The presence of risks does not guarantee violence. Neither do protective factors eliminate the risk of violence."**
- **"It is important in order to prevent violence to act across multiple levels of the model simultaneously."**

**Factors that increase resilience to violence (community level):**
- Coordination of resources and support services among community agencies
- Access to mental health and substance abuse treatment services
- Support and connectedness — to one's community, family, peers, and school

**Sumner et al. (2015) on where violence is higher:** communities with **limited economic opportunities**; **high concentrations of poor and unemployed people**; where **people move frequently**; and where there are **limited public, mental health, and social services** and **fewer civic and voluntary associations**.

**COVID-19 (SAMHSA, 2020):** increased cases of IPV and child abuse. "Such conditions may **stimulate violence in families where it did not exist before** and **worsen situations in homes where mistreatment and violence has been a problem.**"

**Why incidence can't be perfectly determined:** people may not seek health or social service assistance; victims may be **young, embarrassed, afraid, or unaware of how to seek help**; victims often think that **if they leave the abuser they will have no other place to live and no other form of support.**

**Healthy People 2030 objectives for reducing violence:**
- **IVP-03:** Reduce the number of young adults who report **3 or more adverse childhood experiences**
- **IVP-D04:** Reduce **intimate partner violence**
- **IVP-12:** Reduce **gun carrying among adolescents**

---

## §2 Homicide, Assault, and Suicide (p. 485–490)

### Homicide (p. 486)

- 2018 UCR estimate: **16,214 murders**, a **6.2% decrease** from 2017.
- Regional distribution of 2018 murders: **South 46.2%**, Midwest 22.0%, West 19.9%, **Northeast 11.9%**.
- Homicides by age group (2017 death certificate data): 5–14 = 352; **15–24 = 4,905**; **25–44 = 8,839** (highest); 45–64 = 4,019. **None reported in the 65-and-older category.**
- **A friend, acquaintance, or family member commits the majority of homicides.** Therefore "**the prevention of homicide is at least as much an issue for the public health system as for the criminal justice system.**"

**Intimate partner homicide (IPH) — high-yield:**
- **Women are nine times more likely to be killed by an intimate partner than by a stranger.**
- **The top risk factor for IPH is previous domestic violence.** Other risk factors: **access to guns, estrangement, threats to kill and threats with a weapon, nonfatal strangulation, and a stepchild in the home if the victim is female.**
- **75% of women killed by a husband, boyfriend, or ex-partner had been seen in a health care setting during the year before the homicide** (Nannini et al., 2008).
- **"Nurses have a duty to warn family members of the possibility of homicide when severe abuse is present, just as they warn them of the hazards of smoking."**
- **Children may witness the murder or find the body of a family member.** **No automatic follow-up or counseling of these children occurs** through the criminal justice or mental health system in most communities. They are at great risk for mental disorder, self-harm, substance use, and completed suicide if older than 18.

**Firearms:** In 2018 there were **39,740 firearm-related deaths** in the US; **more people suffer nonfatal firearm injuries than die**. **Males account for 85% of all firearm fatality victims and 88% of nonfatal firearm injuries.** Higher household gun ownership at the state level is associated with significantly increased rates of **nonstranger** firearm homicides, but **not** with stranger homicides (Siegel et al., 2014).

### Assault (p. 486–487)

- Violent crime rates, declining for years, **reversed direction in 2018**. Violent crime victims age 12+ grew from **2.7 million in 2015 to 3.3 million in 2018**, driven by increases in **rape or sexual assault, aggravated assault, and simple assault**.
- **The greatest risk factor for an individual's victimization through violence is AGE, and youths are at significantly higher risk.**
- **More males than females are victims of homicide and assault, but women are more likely to be victimized by a relative, especially a male partner.**
- Offender same race/ethnicity as victim: **70%** of incidents involving Black victims, 62% white, 45% Hispanic, 24% Asian.
- "Sometimes the difference between a homicide and an assault is **only the response time and the quality of emergency transport and treatment facilities.**"

### Suicide (p. 490)

- **Age-adjusted suicide rate increased 33%** from 10.5 to 14.0 per 100,000 between 1999 and 2017.
- 2018: more than **48,000 deaths by suicide** — **1 death every 11 minutes**.
- Ranking by age: **2nd leading cause for ages 20–34**; 4th for 35–54; 8th for 55–64. In 2017, **2nd leading cause of death for persons ages 10 to 24**.
- Highest in **non-Hispanic American Indian/Alaska Native and non-Hispanic White** populations. Other disproportionate groups: **veterans, other military personnel, and workers in construction and in arts, design, entertainment, sports, and media.**
- ⚠️ **The counterintuitive one:** "**Affluent and educated people often have higher rates of suicide than do economically and educationally disadvantaged people.** The exceptions are Native Alaskan and American Indian populations, who are often poor and yet commit suicide in alarming numbers."
- **The presence of a gun in the home is an important risk factor for both suicide and homicide.**
- **The majority of individuals who complete suicide have visited a health care provider in the prior month** — this is the rationale for universal screening.
- Suicide risk is higher among people who have **experienced violence, including bullying, child or sexual abuse, depression, and other mental disorders.**
- **Survivors:** often feel **angry toward the dead person, yet may turn the anger inward**; often **question their own liability** for the death; may limit social activities because friends and family are unable to talk about the suicide.

---

## §3 Sexual Violence and Rape (p. 487–489)

**Statistics:**
- Rate of rape or sexual assault rose from **1.4 per 1000** persons age 12+ in 2017 to **2.7 per 1000** in 2018.
- Highest-rate age groups: **12 to 17 years and 19 to 24 years**.
- Rates of violent victimization from 2017 to 2018 increased for persons in households with **the lowest AND the highest incomes**.

**Campus rape (the White House Task Force to Protect Students from Sexual Assault was established in 2014):**
- **One in four college women will be a victim of sexual assault.**
- **60% of these assaults will be perpetrated by an acquaintance** of the victim.
- **Heavy episodic drinking increases the chance of being raped eight-fold.**
- **Fewer than 5% of all incidents will be brought to the attention of administrators or authorities.**
- **Female undergraduates are more likely to be victimized than graduate students**, and the vast majority of students who experienced sexual violence were victimized when **incapacitated due to intoxication or asleep.**
- **Nonheterosexual students are more likely to be victimized than heterosexual students.**
- Freshmen are taught safety measures at orientation but "**often do not pay close attention**" because they are adjusting to life away from home.

**Circumstances (p. 487–488):** For reported rapes, **cities are higher-risk areas than rural areas**; the most critical times are **between 8 pm and 2 am, weekends, and summer**. In about **50%** of rapes, victim and offender **meet on the street**; in other cases the rapist enters the victim's home or entices/forces the victim to accompany him. **The majority of rapists are known to the victim.**

**Health effects:** Physical — cuts, scratches, bruises, welts, broken bones, internal bleeding, chronic pain, stomach problems, STDs, unwanted pregnancies, head trauma. Emotional — flashbacks, panic attacks, trouble sleeping, eating disorders, depression. Victims may engage in negative health behaviors: smoking, abusing alcohol or drugs, risky sexual behaviors.

### Correcting misconceptions — the chapter states these as facts to teach

- **Rape is a crime of violence, not a crime of passion.** Underlying issues are **hostility, power, and control** rather than sexual desire.
- **The defining issue is lack of consent.**
- **"People have the right to change their mind, even when they seemed initially agreeable."**
- **Pressure from physical contact, threats, or deliberate inducement of drug or alcohol intoxication is a violation of the law.**
- The myths that must end: that **women say "no" when they really mean "yes"** and that **victims are culpable because of the way they dress or act.**
- **"The absence of physical evidence does not mean that sexual violence such as rape did not occur"** (WHO, 2015).

### Dating violence and its four forms

**Dating violence includes: sexual violence, physical violence, psychological aggression, and stalking** — and can take place **in person or electronically** (texting, posting sexual pictures of a partner online). **These four forms also apply to intimate partner violence.**

| Term | Definition as given |
|---|---|
| **Psychological aggression** | Use of **verbal and nonverbal communication with the intent to harm another person mentally, emotionally, or as a form of exerting control.** |
| **Stalking** | **Repeated, unwanted attention and contact** by another person that **causes fear or concern for one's own safety or that of someone close to the victim.** |

**Teen dating violence statistics (2019):** nearly **1 in 11 female teens** and **1 in 15 male teens** reported **physical** dating violence; **1 in 9 female** and **1 in 36 male** high school students reported **sexual** dating violence; **26% of women and 15% of men experienced IPV for the first time before age 18.**

Teen victims are more likely to be **depressed or anxious and do poorly in school**; may use drugs, tobacco, and alcohol; think about suicide; and show antisocial behaviors such as lying, stealing, bullying, or hitting.

**CDC toolkit:** *Dating Matters: Strategies to Promote Healthy Teen Relationships*, focused on **11- to 14-year-olds**.

### Nursing care after sexual assault (p. 488)

Victims should be:
1. Given **privacy, respect, and assurance of confidentiality**
2. **Told about health care procedures** conducted immediately after the rape
3. Given a **complete physical examination by a trained nurse examiner** (SANE or forensic nurse examiner)
4. **Linked with proper resources for ease of reporting**

- **Rape victims seldom offer sensitive information unless you specifically ask for it and make it clear that confidentiality will be upheld.**
- **Nonjudgmental listening is important.** In any psychological trauma, **the right to privacy and confidentiality is crucial.**
- **Because many victims deny the event once the initial crisis has passed, a single-session debriefing should be completed during the initial examination.**
- **Fault should not be placed on survivors**; they should be taught to **take control, learn assertiveness, and think they can take specific actions** to prevent future rapes.
- Help victims **identify the issues behind self-blame.**
- If **PTSD** has developed, professional psychological or psychiatric treatment is indicated.
- **Many rape victims forget or fail to keep appointments.** Nurses should make referrals and **obtain permission from the victim to remain in contact through telephone conversations.**

**Evidence collection (the concrete example worth memorizing):** When cutting the shirt off a person shot in the chest, **avoid cutting through the bullet hole** — **cut to the side of the hole** to protect the point of origin of the bullet for later criminal investigation. **Most common types of evidence:** clothing, bullets, bloodstains, hairs, fibers, and small pieces of material such as fragments of metal, glass, paint, and wood. **DNA provides key information in the analysis of sexual assault.**

**CDC's five strategies to prevent sexual violence (Basile et al., 2016, "STOP SV"):**
1. Promoting social norms that protect against violence
2. Teaching skills to prevent sexual violence
3. Providing opportunities to empower girls and women
4. Creating protective environments
5. Supporting victims/survivors to lessen harm

**Cultural and social norms that support violence:** beliefs that **men have a right to control or discipline women through physical means**; the belief that **violence is a private affair**, which prevents victims from speaking out; **use of violence to solve conflicts or as part of child rearing**. Children learn to accept violence when they see **corporal punishment, violence in the family, or violence in the media.** Societies tolerating **higher rates of acute alcohol intoxication** report stronger associations between alcohol use and violence.

---

## §4 Human Trafficking (p. 489–490)

**Scope:** An estimated **50,000 women and children may be trafficked into the United States each year.** In 2018 the National Human Trafficking Hotline reported **41,088 contacts**, a **25% increase in cases from 2017 to 2018**. Top three types in 2018: **sex (7,859); labor (1,249); sex and labor (637)**; 1,202 unspecified. **Human trafficking is the fastest growing and one of the most lucrative crimes in the United States.**

**Who is at risk:** Affects **all races, ages, and genders**, but **women and children under 18 are at heightened risk**. **Children are often targeted due to their earning potential, with runaway and homeless youth at greatest risk.** The majority of individuals experiencing trafficking in the US are **women or girls**, and the majority are **forced into the sex service industry**.

### The health care encounter — this is the testable core

- **Most trafficked individuals will come in contact with a health care provider, often through the emergency department**, for treatment of an illness or injury at some point during their captivity. **Yet they are seldom appropriately identified as victims of trafficking.**
- **Why victims do not self-identify:** fear of captor; distrust of available support systems (medical, legal, social services); uncertainty about available supports; unfamiliarity with regional language or culture; **feelings of shame** about their situation.
- **Victims will often present accompanied by their trafficker, who may identify themselves as a family member or trusted support person.** **The trafficker may be male or female, and may appear supportive, caring, and sympathetic.**

**Red flags in the presentation:**
- A **"family member" or "friend" who doesn't allow the individual to answer the provider's questions or consistently answers for them**
- The individual is **reluctant to describe symptoms** or the events leading to the complaint; **vague** responses or **inconsistencies**
- **Unable to provide a home address**
- **No identification documents**
- **Unaware of the city or state** in which they are receiving services

**Physical signs:** unexplained bruises, burns, lacerations, bite marks, vaginal or anal tearing, STIs, unintended pregnancy, nutritional deficits, substance use disorder.
**Mental health:** increased risk for **depression, PTSD, suicidal ideation, or suicide attempts.**

### Nursing actions — the sequence matters

1. **Interview the patient ALONE.** This facilitates disclosure. **Explaining that it is routine practice in this setting to interview patients alone may decrease suspicion in the captor.**
2. If a one-on-one interview is hard to obtain, **accompany the patient to a restroom or to a private setting for a particular reason**, such as the laboratory or x-ray.
3. If the victim does not speak English, **use a professional interpreter** to assure accuracy.
4. **Engage a social worker or victim advocate early.**
5. **For patients under 18, a call to the state's child protective services agency is necessary.**
6. **If the provider thinks the patient is in immediate danger, contact law enforcement.**
7. **If NOT in immediate danger, notify the patient BEFORE engaging law enforcement on their behalf.** "Involving the patient may improve trust and facilitate disclosure."

**Approach:** trauma-informed, **nonjudgmental**. **The goal is to create a safe space and support empowerment.**

**Screening questions (Crane, 2013) — note "there are no validated screening questions":**
- Can you come and go from your home (or job) whenever you please?
- Has anyone at home or work ever physically harmed you?
- Have you been threatened for trying to leave your job?
- Is anyone forcing you to do things you do not want to do?
- Do you have to ask permission to eat, sleep, or use the bathroom?
- Are there locks on your doors and windows that keep you from leaving?
- Have you ever been denied food, water, sleep, or medical care?
- Has anyone ever threatened your family?
- Has anyone taken away your identification papers or cards?

**Resource:** **National Human Trafficking Resource Center hotline, 1-888-373-7888.** Toll free, **available 24 hours/day, in 180 languages.** Provides guidance on interview questions, indicators of potential trafficking, and **access to safety resources including shelters.** Also **polarisproject.org**, with an interactive US map of local organizations, resources, and state laws.

---

## §5 Development of Abusive Patterns (p. 491)

**The three characterizing factors:** **upbringing, living conditions, and increased stress.**

> **Of these, the one most predictably present is PREVIOUS EXPOSURE TO SOME FORM OF VIOLENCE.**

**The intergenerational mechanism:**
- As children, abusers were **often beaten or saw siblings or parents beaten.** They learned that **violence is a way to manage conflict.**
- **Both men and women who witnessed abuse as children were more likely to abuse their children.**
- **Childhood physical punishment teaches children to use violent conflict resolution as adults.**
- **"A child may learn to associate love with violence because a parent is usually the first person to hit a child. Children may think that those who love them also are those who hit them."**
- **Financial solvency and support tended to decrease the incidence of child abuse.**

**Personality profile of abusers:**
- Hostile personality styles; **verbally aggressive**
- **Low tolerance for frustration, emotional instability, onset of aggressive feelings with minimal provocation**
- Because of **emotional insecurity, they often depend on a child or spouse to meet their needs of feeling valued and secure.** When needs are not met, they may become **overly critical of the child.**
- **The vicious cycle:** critical, resentful behavior and unrealistic expectations lead to rejection and alienation; the more critical they become, the more they are rejected.
- **Abusive individuals often think the target of their hostility is "out to get" them.** The chapter's example: a parent might think or say that **an infant deliberately kept him or her awake all night.** "We know that infants do not intentionally keep parents awake. Rather, infants cry for reasons of their own, not to annoy and inconvenience others."
- Parents at risk for child abuse tend to be **young, single, have many dependent children, substance abuse issues, mental health problems, and low income.**

**Precipitating and environmental factors:**
- **A perceived or actual crisis may precede an abusive incident**, because a crisis reinforces feelings of inadequacy and low self-esteem.
- Triggers named: **unemployment, marital strains, an unplanned pregnancy**, the daily hassles of raising young children in an economically strained household.
- **Stressful life events, poverty, and the number of small children in the home** are often associated with family violence.
- **Crowded living conditions can precipitate abuse** — several people in a small space increases tensions, reduces privacy, and "tempers flare as a result of the constant stimulation from others."
- **Social isolation** reduces social support and decreases a family's ability to cope with stress.
- ⚠️ **Frequent moves — read this one carefully.** Mobility disrupts social support, increases stress, and isolates people. **"Because frequent moving may be BOTH a risk factor for abuse AND a sign of an abusive family trying to avoid detection, nurses should assess such families carefully for abuse."**

**Cross-contamination between types (p. 491):**
- **Nurses who detect child abuse should also suspect other forms of family violence.**
- When older adult parents report that their now-adult child was abused or has a history of violence toward others, **the nurse should recognize the potential for elder abuse.**
- **Physical abuse of women may be accompanied by sexual abuse.**
- **Severe wife abusers may commit other acts of violence, especially child abuse.**
- **When one child is abused, others may be physically, sexually, or emotionally abused.**
- **Families who are verbally aggressive in conflict resolution (name calling, belittling, screaming, yelling) are more likely to be physically abusive.**
- **"No member of the family is guaranteed immunity from abuse and neglect."**

---

## §6 Child Abuse and Neglect (p. 492–495)

### The types — note the objectives say four, the body lists five

The chapter **objective** states: "Define the **four** general types of child abuse: neglect, physical, emotional, and sexual." The **body text (p. 492)** lists **five**, adding trafficking:

| Type | Definition as given |
|---|---|
| **Physical abuse** | Intentional use of physical force that can result in physical harm — **hitting, kicking, shaking, burning**, or other shows of force against a child |
| **Sexual abuse** | Pressuring or forcing a child to engage in sexual acts — **fondling, penetration, exposing a child to other sexual acts** |
| **Emotional abuse** | Behaviors that harm a child's **self-worth or emotional well-being** — name calling, shaming, rejection, withholding love, threatening |
| **Neglect** | Failure to meet a child's **basic physical and emotional needs** — housing, food, clothing, education, access to health care |
| **Trafficking** | A commercial sexual act induced by force, fraud, or coercion, **or in which the person induced has not attained 18 years of age** |

**Statistics (2018):**
- Nearly **1,770 children died** of abuse and neglect in the US.
- **At least 1 in 7 children experienced child abuse and neglect** the previous year.
- **678,000 victims** of child abuse and neglect.
- **Children in their first year of life have the highest rate of being victims.**
- **Girls 9.6 per 1000; boys 8.7 per 1000.**
- **Children who live in poverty are five times more likely to be abused and neglected** than children with higher socioeconomic resources.
- **The lifetime economic burden of child abuse and/or neglect is about the same as that of stroke and type 2 diabetes.**

**The perpetrator:**
- **More than four-fifths are between ages 18 and 44**
- **More than half are female**
- Three highest percentage groups: **White (49.6%), African American (20.6%), Hispanic (19.3%)**
- **The majority of perpetrators (77.5%) are a parent of the victim**

**Why a particular child is targeted (p. 492) — high-yield and counterintuitive:**
> **In many families, only one child is abused.** Parents may **identify with this particular child** and be especially critical of the child's behavior. The child may have qualities that provoke the parent: **looking like a relative, being handicapped, trying to resist the violence, or being particularly bright and capable or strong willed.** Often there is an **explicit or covert threat to children other than the one most severely abused.** Other children may have **conflicting feelings of both guilt and relief**, and **the targeted child is often coerced into silence by threats toward the sibling(s).**

**Box 27.1 — Determining Risk Factors for Child Abuse (11 questions):**
1. Are the parents unemployed?
2. Do the parents have the financial resources to care for a child?
3. Is there a support network that is willing to offer assistance?
4. Do one or both parents have a history of child abuse?
5. Is a parent a victim or perpetrator of intimate partner violence?
6. Do the parents have knowledge about child development?
7. Do one or both parents have problems with substance abuse?
8. Are the parents overly critical of the child?
9. Are the parents communicative with each other and the nurse?
10. Does the mother of the child seem frightened of her partner?
11. Does the child suffer from recurrent injuries or unexplained illnesses?

**HOW TO Identify Potentially Abusive Parents** (warning signs in couples expecting a child):
- **Denial of the reality of the pregnancy** — refusal to talk about the impending birth or to think of a name for the child
- **Concern or fear that the baby will not meet some predetermined standard** — sex, hair color, temperament, resemblance to family members
- **Failure to follow through on the desire for an abortion**
- **An initial decision to place the child for adoption and a change of mind**
- **Rejection of the mother by the father of the baby**
- Family experiencing stress and numerous crises so the birth may be "the last straw"
- Initial and unresolved negative feelings about having a child
- Lack of support for the new parents; **isolation from friends, neighbors, or family**
- **Parental evidence of poor impulse control or fear of losing control**
- **Contradictory history**
- **Appearance of detachment**; appearance of misusing drugs or alcohol
- **Shopping for hospitals or health care providers**
- **Unrealistic expectations of the child**
- **Verbal, physical, or sexual abuse of the mother by the father, especially during pregnancy**
- **Child is not the biological offspring of the husband or the mother's current boyfriend**
- **Excessive talk of needing to "discipline" children** and plans to use harsh physical punishment

### Eleven indicators of child abuse (p. 494) — memorize this list

1. An **unexplained injury**
2. On the skin: **burns, old or recent scars, ecchymosis, soft tissue swelling, or human bites**
3. **Recent or healed fractures**
4. **Subdural hematomas**
5. **Trauma to the genitalia**
6. **Whiplash caused by shaking children**
7. **Dehydration or malnourishment without obvious cause**
8. **Giving inappropriate food or drugs**
9. **Evidence of poor general care** — poor hygiene, dirty clothes, unkempt hair, dirty nails
10. **Unusual fear of the nurse or others**
11. **Being referred to as a "bad" child**

**Physical symptoms of stress from abuse:** hyperactivity, withdrawal, overeating, dermatological problems, vague physical complaints, and exacerbation of stress-related physical problems such as **asthma, stuttering, enuresis (bladder incontinence), and encopresis (bowel incontinence)**.

> ⚠️ **"Sadly, bedwetting is often a trigger for further abuse, which creates a particularly vicious cycle."**

> **"When a child displays physical symptoms without clear physiological origin, ruling out the possibility of abuse should be part of the nurse's assessment process."**

**Long-term consequences:** Maltreatment causes stress that can **disrupt early brain development** and at extreme levels **affect the development of the nervous and immune systems.** Abused children are at higher risk for adult **alcoholism, depression, substance abuse, eating disorders, obesity, smoking, suicide, and some chronic diseases.**

**Adverse Childhood Experiences (ACE) Pyramid (Fig. 27.4)** — bottom to top: Generational Embodiment/Historical Trauma → Social Conditions/Local Context → **Adverse Childhood Experiences** → Disrupted Neurodevelopment → Social, Emotional, & Cognitive Impairment → Disease, Disability, & Social Problems → **Death**.

**Five categories of children at risk for maltreatment:**
1. Those with **young parents** who lack experience with children and have unrealistic expectations
2. Those in families struggling with **poverty, unstable housing, divorce, or unemployment**
3. Those whose **parents abuse drugs or alcohol**
4. Those whose **parents have themselves had childhood trauma**
5. Those with parents who are **isolated and do not have a supportive partner, family, or community**

### Child neglect (p. 494)

| Category | Definition | Association |
|---|---|---|
| **Physical neglect** | Failure to provide **adequate food, proper clothing, shelter, hygiene, or necessary medical care** | **Most often associated with extreme poverty** |
| **Emotional neglect** | **Omission of basic nurturing, acceptance, and caring** essential for healthy personal development; children largely ignored or treated as nonpersons | Usually affects development of **self-esteem** |

> ⚠️ **"Neglect is more difficult to assess and evaluate than abuse because it is subtle and may go unnoticed. It is NOT directly related to poverty and occurs across the socioeconomic spectrum of families."** Note the tension with physical neglect being "most often associated with extreme poverty" — the chapter is saying neglect as a whole is not confined to poor families.

### Child sexual abuse and incest (p. 494–495)

- **About 1 in 4 girls and 1 in 13 boys** in the US experience sexual abuse at some time in childhood.
- **Every 73 seconds, an American is sexually assaulted** (RAINN, 2020). **The rate of sexual violence has fallen by more than half since 1993.** In 2016, **1.2 people out of 1000** were sexually abused.
- **The majority of sexual assaults occur at or near the victim's home.**
- **The majority of child sexual abuse is committed by someone the child or the family knows.** Within the home: parent, stepparent, sibling, or another relative. Outside: friend, neighbor, childcare person, teacher, or stranger.
- **Long-term effects:** depression, PTSD, drug addiction, sexual disorders, and suicidal behaviors later in life.
- **PTSD signs and symptoms:** **intrusion (memories), avoidance, negative alterations in cognition and mood, and hyperarousal.**

**The typical paternal incest pattern — expect a scenario item:**
> The daughter is **usually about 9 years of age at the onset** and is **often the oldest or only daughter**. **The father or stepfather seldom uses physical force.** He most likely relies on **threats, bribes, intimidation, or misrepresentation of moral standards**, or he **exploits the daughter's need for human affection.**

- **Father-daughter incest is the type most often reported**; however, **mothers do engage in child sexual abuse.**
- **Many cases of parental incest go unreported because victims fear punishment, abandonment, rejection, or family disruption.**
- **Incest occurs in all races, religious groups, and socioeconomic classes.**

**Symptoms of sexual abuse:** pain, bleeding, redness, or swelling in the anal or genital area; **age-inappropriate sexual play** with toys, self, or others; **age-inappropriate knowledge of sex.**

> ⚠️ **The runaway reframe:** "Adolescents may display inappropriate sexual activity or truancy or may run away from home. **Running away is usually considered a sign of delinquency; however, an adolescent who runs away may be using a HEALTHY RESPONSE to a violent family situation.**" This is a likely correct-answer stem.

**Foster care and reunification (p. 493):** Quality foster care is **not available for all abused children**. **Abused children generally want to return to their parents**, and most agencies try to keep natural families together as long as it is safe. **The nurse's goal is to enhance parenting skills, not to be viewed as yet another watchdog.**

> **The replacement pregnancy:** "Abusive parents may try to replace a child who has been removed by the courts. **This is a NORMAL response to the grief of losing a child.** Rather than regarding another pregnancy as a sign of continued poor judgment or pathological behavior, the pregnancy can be perceived by the nurse as **an opportunity for intensive intervention** to prevent abuse of the expected child."

---

## §7 Intimate Partner Abuse (p. 495–497)

**Definition and scope:**
- **IPV includes four types of behavior: physical violence, sexual violence, stalking, and psychological aggression.** Can also include **financial abuse**.
- 2015 data brief: **about 1 in 4 women and 1 in 10 men** experience sexual violence, physical violence, and/or stalking by an intimate partner in their lifetime — **43.6 million women and 37.3 million men**.
- Past 12 months: **1 in 18 (6.6 million) women** and **1 in 20 (5.8 million) men**.
- 2018: **over 1 in 3 women** experienced contact sexual violence, physical violence, and/or stalking by an intimate partner during their lifetime.
- **The majority of IPV is directed toward women.**
- **In the United States, 39% of homicides of women are committed by an intimate partner.**

**LGBTQ IPV:** **Typically follows similar dynamics as heterosexual IPV and has similar outcomes.** Dynamics of **power and control caused by race, gender expression, ability, immigration status, age, and class** are methods of control in same-sex IPV. **LGBTQ people face more barriers to seeking help than non-LGBTQ people.**

**Why "abuse of female partners has the most serious community health ramifications" (four reasons):**
1. The greater **prevalence**
2. The greater **potential for homicide**
3. The **effects on the children** in the household
4. The more serious **long-term emotional and physical consequences**

### Predicting abuse — the direction matters

> ⚠️ **"Using evidence of a violent childhood to identify WOMEN at risk for abuse is LESS USEFUL, because abuse cannot be predicted on the basis of characteristics of the individual woman. The violent background of an abusive MALE, combined with his tendencies to be POSSESSIVE, CONTROLLING, and EXTREMELY JEALOUS, is most predictive of abuse."**

**"Substance abuse is also associated with battering, although it cannot be said to CAUSE the violence."**

### Signs of abuse (p. 496)

- Battered women often have **bruises and lacerations of the face, head, and trunk**.
- **Attacks are often carefully inflicted on parts of the body that can easily be disguised by clothing** — **breasts, abdomen, upper thighs, and back.**
- **Forms of physical abuse (ACOG, 2012):** hitting, kicking, punching, slapping, strangling, shaking, confining, burning, freezing, pushing, tripping, scratching, cutting, biting, pinching, throwing things, **or hiding medications**.
- **Emotional, psychological, and verbal abuse:** coercion, manipulation, isolation, intimidation, mocking or criticizing, humiliating, lying, screaming, threatening, or using **menacing forms of nonverbal behavior**.
- **Financial abuse** is seen when a partner **limits the other person's access to money as a method of control.**
- **Abused women have more physical health problems:** chronic headaches, palpitations, sleep and appetite disturbances, **chronic pelvic pain, urinary frequency and/or urgency, irritable bowel syndrome** and other abdominal symptoms, sexual dysfunction, and **recurrent vaginal infections**.

### How to screen — the specific wording is testable

> **When a woman has a black eye or bruises about the mouth, ask "WHO HIT YOU?" rather than "What happened to you?"** The latter **implies that the nurse is neither knowledgeable nor comfortable with violence, and this may prompt the woman to fabricate a more acceptable cause of her injury.**

**Screening conditions:**
- Complete any screening in a **quiet, private setting**
- **Do not ask anyone who accompanies the woman to translate or explain**
- **It is best to have no one else present during the interview**
- **Remember that any person accompanying the victim might be an abuser**
- Follow up with **"When did this happen?"** and **"Where did this happen?"**
- **Write up what the person actually said using quotation marks**, and note **grooming, posture, and mannerisms**

**Additional questions if you observe signs of IPV:**
- Is someone hurting you?
- Are you frightened of your partner?
- Did someone you know do this to you?

**Universal sexual assault question:** **"Have you ever been forced into sex you did not wish to participate in?"** should be used **in all nursing assessments** to see if marital rape, date rape, or rape of a male has occurred.

### Abuse as a process (Ford-Gilboe et al., 2011)

1. **Initially she tries to minimize the seriousness of the situation.** The violence usually starts with **a slight shove in the middle of a heated argument.**
2. **Both the man and the woman tend to blame the incident on something external** — a stressful day at work, drinking too much.
3. **The male partner usually apologizes**, and the couple tries to improve the situation.
4. **Abuse tends to escalate in frequency and severity over time, and the man's remorse tends to lessen.**
5. Because women often feel **responsible for the success of a relationship**, they may **try to change their own behavior to end the violence** and **blame themselves for infuriating their spouse.** **Women who blame themselves are more likely to have low self-esteem and be depressed.**
6. Some experience a **moral conflict** between the need to leave and the sense that maintaining the relationship is their responsibility.
7. She **tries to hide the violence because of the stigma**, tries to placate her spouse, and **feels she is losing her sense of self.**
8. She fears her partner will **kill her, the children, or both** if she leaves. **She may kill herself or her abuser to escape because she sees no other way out.**

> ⚠️ **The counseling trap:** **"Although marital counseling may be useful at this EARLY stage, it is generally CONTRAINDICATED at all other stages because of the risk to the woman's safety."**

> ⚠️ **The leaving trap:** **"Women who try to leave an abusive relationship are at significant risk for homicide."** / **"As a woman tries to leave, the risk for homicide increases."** Do not treat "leave immediately" as automatically the safest answer.

**Nursing priorities when severe abuse is present:**
- **A nurse encountering a family in which there is severe abuse needs to consider the SAFETY of the woman and her children as the PRIORITY.**
- She will need an **order of protection** — a legal document specifically designed to keep the abuser away from her. **The abuser may ignore the order of protection.**
- She will need help **getting to a safe place, such as a wife abuse shelter in a location the abuser cannot find.**
- **At the very least**, she must design a **carefully thought-out plan for escape** and arrange for **a family member, friend, neighbor, or an adolescent child to call the police** when another violent episode occurs.
- **Women should not be pushed into actions that they are not ready to take.**
- Abused women need **affirmation, support, reassurances of the normalcy of their responses, accurate information about shelters and legal resources, and brainstorming about possible solutions.**
- **Consider cultural factors that influence the way women respond to IPV**, and use this to design the intervention.

**Batterer programs:** most effective **if they are court mandated**, **if the perpetrator's underlying values about women are addressed as well as his violence**, and **if the perpetrator is held accountable.**

**After the relationship ends:** a period of recovery ensues, including **a normal grief response for the relationship that has ended and a search for meaning.** **"A formerly battered woman who is feeling depressed and lonely after the relationship has ended is exhibiting a NORMAL response for which support is needed."**

**Barrier:** many women identify **a dearth of long-term and family-oriented services**; **the high cost of attorney fees** to obtain equitable divorces or child custody is a factor many face.

### Violence during pregnancy (p. 496) — named verbatim in the blueprint

**Risks to the woman and infant:** spontaneous abortion, **premature delivery, delivery of low-birth-weight infants**, substance abuse during pregnancy, and depression.

**Key mechanisms:**
- **Abuse before pregnancy often precedes abuse during pregnancy.**
- **A man's control of contraception, a form of abusive controlling, may lead to unintended pregnancy and subsequent abuse.**
- **A man's refusal to use a condom places a woman at increased risk for STDs, including HIV.**
- **Infants whose mothers were battered are often at high risk for child abuse.**

**Practice standard:**
> **All pregnant women should be assessed for abuse at EACH prenatal care visit, and postpartum home visits should include assessment for BOTH child abuse and partner abuse.**

### Strangulation (p. 496)

**"A violent and deadly act" that may not leave visible evidence until hours or days after the incident.** Victims are often **hesitant to report because they fear they will not be believed since there may not be visible signs.** **Sexual assault increases the risk for nonfatal strangulation (NFS).** Recall that **nonfatal strangulation is also a named risk factor for intimate partner homicide.**

| Subjective data | Physical signs |
|---|---|
| Neck or throat pain; discomfort or difficulty swallowing or talking; vocal changes; shortness of breath; loss of consciousness; memory loss; dizziness; feeling faint; blurry vision; involuntary urination or defecation; tinnitus | Linear abrasions; bruising on the **upper neck, chin, or face**; **subconjunctival hemorrhage**; **conjunctivae petechiae**; neck swelling or neck tenderness on palpation |

**Suspect NFS if the patient has neurological symptoms** such as **seizures, stroke symptoms, concentration and recall difficulties, or agitation.**

---

## §8 Abuse of Older Adults (p. 497–498)

**Definitions:** CDC — "an intentional act or failure to act that causes a risk of harm to an older adult." **An older adult is a person age 60 or older.** WHO — "a single or repeated act, or lack of appropriate action, occurring **within any relationship where there is an expectation of trust**, which causes harm or distress to an older person."

**Prevalence:** Abuse including neglect and exploitation affects about **1 in 10 elders who live at home** (CDC). **WHO estimated in 2020 that 1 in 6 people 60 or older experienced a form of abuse in community settings in the past year**, and rates are **also high in nursing homes and long-term care facilities.**

> **"Like spouse abuse and child abuse, most cases of elder abuse go unreported because the elder is afraid to tell police, friends, or family about the violence."**

### The six types (CDC, 2020h)

| Type | Description |
|---|---|
| **Physical** | The person is **hit, kicked, pushed, slapped, or burned** |
| **Sexual** | The elder is **forced to take part in a sexual act against his or her will, or when the elder cannot consent** |
| **Emotional** | Behaviors to **demean or affect the elder's self-esteem** — name-calling, scaring, embarrassing, **destroying property**, or **not letting the person see family or friends** |
| **Neglect** | Basic needs for **food, housing, clothing, and medical care** are not met |
| **Abandonment** | **The caregiver leaves the elder and no longer provides care** |
| **Financial** | The elder's **money, property, or assets are misused** |

### Caregiver actions that constitute abuse (p. 497)

- **Rough handling** that can lead to bruises and bleeding into body tissues **because of the fragility of elders' skin and vascular systems.** ⚠️ **"It is often difficult to determine whether the injuries of elders result from abuse, falls, or other natural causes. Careful assessment through both observation and discussion can help determine the cause."**
- **Imposing unrealistic toileting demands**
- **Ignoring special needs and previous living patterns**
- **Giving food that the older person cannot chew or swallow**, or that is contraindicated because of dietary restrictions or social or cultural preferences
- **Giving medication to induce confusion or drowsiness** so the elder will be less troublesome, need less care, or allow others to gain control of their financial and personal resources

> **The most common form of psychological abuse is REJECTION or simply IGNORING older adults, indicating that they are worthless and useless to others.**

**The dependency cycle:** Elders may **regress and become increasingly dependent** on others, who **resent the imposition and demands.** "**The pattern becomes cyclical; as the person becomes more regressed, the level of dependence increases.**" **Past accomplishments and present abilities may not be consistently acknowledged, causing the person to feel even less capable.**

**Precipitating factors:**
- The elder may be a **physical, emotional, or financial burden** on the caregiver, leading to **frustration and resentment**
- **The elder may have previously been the abuser**
- **Children who have lived in abusive households learn that behavior**
- **Confused and frail elders** place a high burden on the caregiver, with subsequent **caregiver depression**
- **Patients with Alzheimer's disease may become verbally and even physically aggressive as a result of their illness, which may trigger retaliatory violence**
- **Around-the-clock tasks often exhaust family members**

**The abuser** may be an **acquaintance, close or extended family member, caregiver, or stranger.**

> **"ALL elders should be assessed for abuse. This is especially true for confused and frail elders."**

**Prevention:**
- **A plan for regular RESPITE CARE is essential** when families plan to care for an older family member at home; nurses must **help them fully evaluate that decision and prepare for the stressors.**
- **Primary and secondary prevention strategies:** **victim support groups, senior advocacy volunteer programs, and training for providers working with elders.**
- **"Elderly people need to retain as much autonomy and decision-making ability as possible."**

**CDC's six recommended actions to prevent elder abuse before it begins:**
1. **Listen** to older adults and their caregivers to understand their challenges and provide support
2. **Report** abuse or suspected abuse to **Adult Protective Services**
3. **Educate** yourself and others about ways to recognize and report elder abuse
4. **Learn how the signs of elder abuse differ from the normal aging process**
5. **Check in often** on adults who may have few friends and family members
6. **Provide overburdened caregivers with support** — friends, family, local relief care groups, **adult day care programs, counseling**, and outlets to promote emotional well-being

---

## §9 Nursing Interventions and Levels of Prevention (p. 498–502)

### Levels of Prevention box — Related to Violence (memorize verbatim)

| Level | Intervention as printed |
|---|---|
| **Primary** | **Strengthen the individual and family by teaching parenting skills.** |
| **Secondary** | **Reduce or end abuse by early screening; teach families how to deal with stress and how to have fun and enjoy recreation.** |
| **Tertiary** | **When signs of abuse are evident, refer the patient to appropriate community organizations.** |

### Box 27.3 — Prevention Strategies for Violence (note the level tags)

**Individual and family levels:**
- Assess during routine examination — **secondary**
- Assess for marital discord — **secondary**
- Educate on developmental stages and the needs of children — **primary**
- Counsel for at-risk parents — **secondary**
- Teach parenting techniques — **primary**
- Assist with controlling anger — **secondary**
- **Treat for substance abuse — tertiary**
- Teach stress-reduction techniques — **primary**

**Community level:** develop policy; conduct community resource mapping; collaborate with the community to develop systematic responses to violence; develop a media campaign; **develop resources such as transition housing and shelters**.

### Primary prevention in the narrative (p. 498–500)

**Community programs named:**
- **School-based curricula** teaching children and youth to cope with anger, stress, and frustration and teaching **communication and mediation skills**
- **Family programs** teaching parents how to more effectively respond to their children
- **Preschool programs** helping children develop intellectual and social skills
- **Public education programs** about different forms of violence and ways to get help and intervene
- **Home visit programs** designed to prevent child abuse and neglect for at-risk families
- **Lobbying for legislation to outlaw physical punishment in schools and marital rape**

**Nurse-Family Partnership (NFP):** provides **intensive prenatal and postnatal home visits, ideally to the child's second birthday**. Visits are delivered by **registered nurses to low-income first-time mothers**, and it **has been shown to reduce the rate of child maltreatment.**

**Personal security measures:** keep windows and doors locked, **trim shrubs around homes**, keep lights on during high-crime periods; neighbors may informally agree to monitor one another's property.

**Firearms — the primary prevention teaching (p. 500):**
- **"Handguns are far more likely to kill family members than intruders."**
- **Firearm accidents are a leading cause of death for young children.**
- **The majority of homicides between family members and most suicides involve a handgun.**
- **Nursing assessments should include a question about guns kept in the home.**
- If the family thinks keeping a gun is necessary, teach: **keep the gun unloaded and in a locked compartment; keep the ammunition separate from the gun and also locked away; instruct children about the dangers of firearms.**
- **Lobbying for handgun-control laws is named as a primary prevention effort.**

**Nurses teach parenting skills** in a class, clinic, or home visit: **diapering, feeding, quieting, holding, rocking, and nonphysical disciplining.**

**Strong community sanctions against violence in the home, as well as high levels of community cohesion, can reduce levels of abuse.**

> **Safety caveat for bystanders:** nurses can encourage others to intervene when they see a child hit in a store, an elder not properly cared for, a youth bullied, or hear a neighbor hitting someone. **"However, whenever a person intervenes in a violent episode, the safety of the one who is intervening should clearly be kept in mind."**

### Secondary prevention (p. 501)

- **Both developmental and situational crises present opportunities for abusive situations to develop.**
- Nurses can **form groups to assist battered women**, **work closely with shelters**, and **develop screening practices in the health care arena.**
- On a family level, help members **discuss problems and seek ways to deal with the tension** that led to the abuse.
- **Injured persons must be temporarily or permanently placed in a safe location.**
- **"Secondary preventive measures are most useful when potential abusers recognize their tendency to be abusive and seek help."**
- For children, there is often a need for **24-hour child protection services** or caregivers who can care for the child until the acute crisis is resolved.
- **Respite care is extremely important in families with frail elderly family members.**
- **Telephone crisis lines** provide immediate emergency assistance.

### Tertiary prevention and the therapeutic stance (p. 501–502)

**Nurses engage in tertiary prevention by acting as a CASE MANAGER and coordinating the other agencies and activities involved.**

**Five principles of giving care to families experiencing violence:**
1. **Intolerance for violence**
2. **Respect and caring for all family members**
3. **Safety as the first priority**
4. **Absolute honesty**
5. **Empowerment**

> **The stance on the abuser:** "It is often difficult for nurses to value the worth of an individual who willfully abuses another. **THE BEHAVIOR, NOT THE PERSON, SHOULD BE CONDEMNED.**" Effective communication **must be preceded by an attitude of acceptance.**

**Additional guidance:**
- Abusers **frequently fear they will be condemned**, so it is often difficult to make and maintain contact. Families **may avoid being home at the scheduled visit time** because of fear of the consequences or an inability to believe anyone really wants to help them. **If the victim is a child, parents may fear the nurse will try to remove the child.**
- **Use a nurse-family partnership rather than a paternalistic or authoritarian approach.** **Families often can generate many of their own solutions, which tend to be more culturally appropriate and individualized than those the nurse generates in isolation.**
- **Recognize and capitalize on the violent family's STRENGTHS**, as well as assessing and dealing with its problems.
- Victims need **information about their options and resources**, reassurance that **abuse is unfortunately rather common and that they are not alone**, and reassurance that **their responses are normal and that they do not deserve to be abused.**
- **Not all families know how to have fun.** Assess how much recreation is integrated into the family's lifestyle; families may need **counseling about the value of recreation and play in reducing tension.**

### Legal responsibilities — mandatory reporting (p. 501)

> **Nurses are MANDATORY REPORTERS of child abuse, EVEN WHEN ONLY SUSPECTED, in ALL STATES.**
>
> **They are also mandatory reporters of ELDER ABUSE and abuse of other physically and cognitively dependent adults, as well as of FELONY ASSAULTS of anyone in MOST states.**

- **The mandatory reporting laws also protect reporters from legal action on cases that are never substantiated.**
- **Even so, physicians and nurses are sometimes reluctant to report abuse.** They may be **more willing to report abuse in a poor family than in a middle-class one**, or think an older adult or child is **better off at home** than in a nursing home or foster home.
- **"Referral to protective service agencies is a way to GET HELP, rather than an automatic step toward removal of the victim or toward criminal justice action."**
- **Families should be included in any reporting so they can have input.** **"Absolute honesty about what will be reported to officials, what the family can expect, what the nurse is entering into records, and what the nurse is feeling is essential."**

**Forensic evaluation (p. 488):** **"When a person is admitted to a hospital with traumatic injuries, they should be evaluated to determine the forensic nature of the injuries."**

### Box 27.4 — Common Community Services

Child Protective Services; Child Abuse Prevention programs; **Adult Protective Services**; Parents Anonymous; wife abuse shelter; program for children of battered women; community support group; **24-hour hotline for crisis intervention or counseling** (available at national and local levels); legal advocacy or information; **state coalition against domestic violence**; batterer treatment; victim assistance programs; sexual assault programs.

> **"Frequently, people do not seek services early in an abusive situation because they simply do not know what is available to them."** Ideally, a program for abused people **begins with a NEEDS ASSESSMENT** to identify potential patients and determine how to effectively serve the group.

### Box 27.2 — Assessing for Violence in a Community Context

**Individual factors:** signs of physical abuse (abrasions, contusions, burns); physical symptoms related to emotional distress; developmental and behavioral difficulties; presence of physical disability; social isolation; decreased role performance within the family and on the job or decreased school-related activities; mental health problems such as depression, low self-esteem, and anxiety; fear of intimacy with others; substance abuse.

**Familial factors:** economic stressors; presence of some form of family violence; poor communication; problems with child rearing; lack of family cohesion; recurrent familial conflict; lack of social support networks; poor social integration into the community; **multiple changes of residence**; **access to guns**; homelessness.

**Community characteristics:** high crime rate; high levels of unemployment; lack of neighborhood resources and support systems; lack of community cohesiveness.

**Fig. 27.5 — Factors to include when assessing potential for violence:**

| Victim member factors | Perpetrator factors |
|---|---|
| Learned or actual helplessness; acquired or congenital disability; **inability to meet expectations of others**; poor self-esteem; social isolation; **object of scapegoating** | **Low self-esteem**; **fear and distrust of others**; **poor self-control**; isolated, inadequate social skills; **immature motivation for marriage or childbearing** |

---

## Source conflicts and traps

- ⚠️ **Four vs. five types of child abuse.** The chapter **objective** says "define the **four** general types of child abuse: neglect, physical, emotional, and sexual." The **body text** lists **five**, adding **trafficking**. If a SATA item offers five options, trafficking is likely intended as correct; if it asks "the four types," trafficking is the distractor. Know both framings.

- ⚠️ **Two key terms are listed but never defined: `forensic nursing` (p. 488) and `passive neglect` (p. 493).** If a definition item on either appears, it is coming from a Canvas module or PowerPoint, not the textbook. Flag for Canvas verification. Functional descriptions are in the key terms table above.

- ⚠️ **"Neglect is not directly related to poverty" vs. "physical neglect is most often associated with extreme poverty."** Both sentences are on p. 494. Reconcile as: **physical** neglect correlates with extreme poverty, but **neglect as a category occurs across the socioeconomic spectrum**. A stem implying neglect only happens in poor families is wrong.

- ⚠️ **Affluent and educated people have HIGHER suicide rates**, with Native Alaskan and American Indian populations as the named exception. This inverts the usual "poverty equals worse outcomes" pattern that runs through Section 6, so it is a natural item.

- ⚠️ **Predicting IPV works on the male, not the female.** Using a violent childhood to identify **women** at risk is explicitly called **less useful**. The predictive profile is the **male's violent background plus possessiveness, controlling behavior, and extreme jealousy.** Distractors will offer victim characteristics.

- ⚠️ **Leaving increases homicide risk.** "Women who try to leave an abusive relationship are at significant risk for homicide." Any option that treats immediate departure as automatically safest, without a safety plan, order of protection, and shelter placement, is the trap. Similarly, **marital counseling is contraindicated at all but the earliest stage.**

- **"Who hit you?" not "What happened to you?"** The chapter gives the rationale explicitly. This is the single most quotable line in the chapter and an obvious item.

- **Interview the trafficking victim ALONE, and notify before involving law enforcement unless there is immediate danger.** Two sequencing decisions in one section; both are testable. For **minors**, the CPS call is **necessary** and is not optional.

- **Elder abuse: age 60, not 65.** CDC defines an older adult here as **60 or older**. Also note the two prevalence figures side by side: **CDC 1 in 10** living at home; **WHO 1 in 6** age 60+ in community settings in the past year. Different sources and denominators, both in the reading.

- **Homicide age data has no 65+ entry.** The 2017 table reports **none in the 65-and-older category** — a scan artifact of the printed table rather than a claim that no older adults are murdered. Don't build a "homicide doesn't affect elders" inference from it.

- **Report the same regardless of social class.** The chapter explicitly names the bias that providers are **more willing to report abuse in a poor family than in a middle-class one.** Any stem where the nurse hesitates because the family is affluent or professional is testing this.

- **Frequent moves cut both ways.** They are **both a risk factor for abuse and a sign of a family avoiding detection.** A stem describing a family that has moved four times in two years is cuing careful assessment, not reassurance.

- **Running away can be adaptive.** The chapter explicitly reframes it as possibly **a healthy response to a violent family situation**, not simply delinquency.

- **Replacement pregnancy is a normal grief response**, and the correct nursing frame is **an opportunity for intensive intervention**, not evidence of pathology.

- **Condemn the behavior, not the person.** Any answer option that frames the nursing stance toward an abuser as punitive or judgmental is wrong, even though **"intolerance for violence"** is simultaneously one of the five care principles.

- **OCR bleed:** Box 27.1's numbered list renders with corrupted numerals in the raw pull (`Z`, `S`, `V`, `0`, `l` in place of digits). The eleven questions are intact and correctly ordered above, but do not trust the raw text's numbering.
