# Fact bank — Chapter 11: Infectious Disease Prevention and Control

**Source:** Stanhope & Lancaster, *Foundations for Population Health in Community/Public Health Nursing*, 6th ed., Section 3, printed pp. 194–216. Authors: Susan C. Long-Marin and Donna E. Smith.

**To regenerate the raw text** (offsets in the mechanical digest are valid against this exact command):

```bash
python3 extract.py pull FOUNDATIONS_for_POPULATION_HEALTH_with_bookmarks.pdf 194 216 --offset 20 --out ch11_raw.txt
python3 extract.py digest ch11_raw.txt --out ch11_facts_raw.md --chapter 11
```

Raw pull is 133,884 chars. **This file is the curated layer**: everything below has been read in the source and de-bled by hand. Box 11.1 in particular is destroyed by the two-column scan (Toxicity and Invasiveness are letter-interleaved into a single unreadable line), so the six agent characteristics below were reconstructed from the clean occurrences of each definition, not from the digest. Trust this file over the digest.

Blueprint weight is 4 questions. This chapter is the applied companion to Ch 10: it takes the epidemiologic triangle and runs it through real communicable disease control. The heaviest testable clusters are the immunity types (active/passive/natural/acquired/herd), the six agent characteristics, the modes of transmission, and the levels-of-prevention mapping for infectious disease.

---

## Chapter outline (printed pages)

| Section | p. |
|---|---|
| Historical and Current Perspectives | 195 |
| Transmission of Communicable Diseases (Agent, Host, Environment) | 197 |
| Disease Development / Disease Spectrum / Modes of Transmission | 198 |
| Surveillance of Communicable Diseases; Reportable Diseases | 199 |
| Emerging Infectious Diseases / Emergence Factors | 200 |
| Prevention and Control (Primary, Secondary, Tertiary; eradication/elimination) | 202 |
| Agents of Bioterrorism (anthrax, smallpox, plague, botulism, tularemia, VHF) | 203 |
| Vaccine-Preventable Disease (measles, pertussis, influenza) | 204 |
| Foodborne and Waterborne Diseases (Salmonella, FoodNet, botulism, Giardia) | ~209 |
| Vector-Borne Disease and Zoonoses (Lyme, RMSF, WNV, malaria, rabies) | 211 |
| Parasitic Diseases; Health Care–Acquired Infections (HAIs) | 212–214 |

---

## Key terms (all 31, with printed page)

| Term | p. | Definition as given |
|---|---|---|
| acquired immunity | 197 | The resistance acquired by a host as a result of previous natural exposure to an infectious agent (having measles once protects against future infection). May be induced by active or passive immunization. |
| active immunization | 197 | The immunization of an individual by administration of an antigen (infectious agent or vaccine); characterized by an antibody **produced by the individual host** (vaccinating children). |
| agent | 197 | The infectious agent; one of the three elements of the epidemiologic triangle. |
| anthrax | 203 | An acute disease caused by the spore-forming bacterium *Bacillus anthracis*. A leading bioterrorism concern. |
| common vehicle | 198 | Transportation of the infectious agent from an infected host to a susceptible host via food, water, milk, blood, serum, saliva, or plasma. |
| communicable diseases | 197 | Diseases transmitted through the interaction of agent, host, and environment; used interchangeably with "infectious diseases." |
| communicable period | 198 | The interval during which an infectious agent may be transferred directly or indirectly from an infected person to another. **Not synonymous with the incubation period.** |
| disease | 198 | One of the possible outcomes of infection; may indicate a physiologic dysfunction or pathologic reaction. Infection does not always lead to disease. |
| elimination | 202 | To remove a disease from a **large geographic area** such as a country or region of the world. |
| emerging infectious diseases | 200 | Those in which the incidence has increased in the past several decades or has the potential to increase in the near future; may be new or known diseases. |
| endemic | 199 | The constant presence of a disease within a geographic area or a population (pertussis is endemic in the US). |
| environment | 197 | The physical, biologic, social, and cultural factors external to the human host that facilitate transmission from an infected host to susceptible hosts. |
| epidemic | 199 | The occurrence of a disease in a community or region **in excess of normal expectancy**. Even one case can be an epidemic if the disease was considered eliminated from that area. |
| epidemiologic triangle | 197 | Agent + host + environment; the model for communicable disease transmission (from Ch. 10). A change in any factor can change transmission. |
| eradication | 202 | Removing a disease **worldwide** by ending all transmission through the complete extermination of the infectious agent (smallpox, WHO declared May 8, 1980). |
| health care–acquired infections (HAIs) | 214 | Previously called **nosocomial infections**; infections acquired during the delivery of health care. *(The source sentence is cut by the two-column OCR after "acquired during"; wording completed from the standard usage the chapter introduces.)* |
| herd immunity | 198 | The immunity of a group or community; the resistance of a group to invasion and spread of an infectious agent, based on a high proportion of individuals being immune. The basis for increasing immunization coverage. |
| horizontal transmission | 198 | The person-to-person spread of infection through one or more of four routes: **direct or indirect contact, common vehicle, airborne, or vector-borne.** |
| host | 197 | A human or animal that can harbor an infectious agent. |
| incubation period | 198 | The time interval between invasion by an infectious agent and the first appearance of signs and symptoms of the disease. |
| infection | 198 | The entry, development, and multiplication of the infectious agent in the susceptible host. |
| infectiousness | 198 | A measure of the potential ability of an infected host to transmit the infection to other hosts; reflects the ease with which the agent is transmitted (measles is extremely infectious). |
| natural immunity | 197 | Species-determined, **innate** resistance to an infectious agent (opossums rarely contract rabies). |
| pandemic | 199 | An epidemic that occurs worldwide and affects large populations. |
| passive immunization | 197 | Immunization through the **transfer of a specific antibody** from an immunized individual (mother to infant, or immunoglobulin/antiserum). Almost immediate but **short lived**; often a stopgap until active immunity develops. |
| resistance | 197 | The ability of the host to withstand infection; may involve natural or acquired immunity. |
| severe acute respiratory syndrome (SARS) | 196 | A named emerging respiratory disease (2003). |
| surveillance | 199 | Ongoing systematic collection, analysis, and interpretation of data on disease occurrence, used to prevent and control disease. |
| vaccines | 204 | Antigens administered to induce active immunity against vaccine-preventable disease. |
| vectors | 198 | Arthropods (ticks, mosquitoes) or other invertebrates (snails) that transmit the infectious agent by biting or depositing infective material near the host. |
| vertical transmission | 198 | Infection passed from **parent to offspring** via sperm, placenta, milk, or contact in the vaginal canal at birth (transplacental HIV and syphilis). |

---

## §1 Immunity: the five terms EAQ pairs against each other (p. 197–198)

| Type | What it is | Key detail |
|---|---|---|
| **Natural immunity** | Species-determined, innate resistance | You are born with it; not disease-specific exposure |
| **Acquired immunity** | Resistance from previous exposure | Induced by active **or** passive immunization |
| **Active immunization** | Give an **antigen** (agent/vaccine); host makes its own antibody | Slower onset, **long lasting** (childhood vaccines) |
| **Passive immunization** | Transfer a **ready-made antibody** | **Immediate but short lived**; stopgap; e.g. hepatitis A, rabies, tetanus immunoglobulin; mother-to-infant |
| **Herd immunity** | Immunity of the **group/community** | High individual coverage blocks spread; rationale for immunization programs |

- **Resistance** = the host's ability to withstand infection, made up of natural + acquired immunity.
- The active/passive split is the classic distractor: active = you build it yourself (vaccine), slow but durable; passive = handed to you (immunoglobulin/antibody), fast but temporary.

---

## §2 The three factors: agent, host, environment (p. 197)

**BOX 11.1 — Six Characteristics of an Infectious Agent** (reconstructed from the clean text; the digest line is unreadable):
1. **Infectivity** — the ability to enter and multiply in the host.
2. **Pathogenicity** — the ability to produce a specific clinical reaction after infection occurs.
3. **Virulence** — the ability to produce a severe pathologic reaction.
4. **Toxicity** — the ability to produce a poisonous reaction.
5. **Invasiveness** — the ability to penetrate and spread throughout a tissue.
6. **Antigenicity** — the ability to stimulate an immunologic response.

- **Four categories of infectious agents:** bacteria, fungi, parasites, viruses.
- **Host factors** influencing spread: resistance, immunity, herd immunity, infectiousness.
- **Environment** = physical, biologic, social, and cultural factors external to the host that facilitate transmission. Altering the environment (mosquito nets, sanitation, sewage systems, safe food handling) reduces communicable disease risk.

---

## §3 Disease development and spectrum (p. 198) — infection ≠ disease

- **Infection does not equal disease.** Infection = entry, development, multiplication of the agent. Disease = a possible **outcome** of infection (physiologic dysfunction/pathologic reaction). Worked HIV example: HIV-positive with no signs = **infected, not diseased**; HIV-positive with clinical AIDS = **infected and diseased**.
- Whether infection occurs depends on the **infective dose, the infectivity of the agent, and the immunocompetence of the host.**
- **Incubation period vs. communicable period are not synonymous.** Incubation = invasion to first signs/symptoms. Communicable = the interval during which the agent can be transferred to others. They can overlap or diverge: HBV-infected persons are infectious **many weeks before** symptoms and stay infective through the acute phase and chronic carrier state (possibly for life); influenza communicable ~3 to 5 days after clinical onset.
- **Disease spectrum:** subclinical/inapparent → clinical (localized or systemic, mild to severe) → outcome (recovery, death, or in between, including a **carrier state**, complications, or disability). **Subclinical cases matter most in public health** because they are a source of infection but often are not in care; target them for early diagnosis and treatment.

---

## §4 Modes of transmission (p. 198) — vertical vs. horizontal

- **Vertical transmission:** parent to offspring via sperm, placenta, milk, or contact in the vaginal canal at birth. Examples: **transplacental HIV and syphilis.**
- **Horizontal transmission:** person-to-person, through four routes: **direct or indirect contact, common vehicle, airborne, or vector-borne.** Most STDs = direct sexual contact.
- **Common vehicle:** food, water, milk, blood, serum, saliva, plasma (hepatitis A via contaminated food/water; hepatitis B via contaminated blood).
- **Vector:** arthropod (tick, mosquito, fly) or invertebrate (snail); transmits by biting or depositing infective material.

---

## §5 Levels of prevention for infectious disease (p. 202)

**LEVELS OF PREVENTION box — Related to Infectious Disease Interventions:**
- **Primary (prevent occurrence):** educate about safe food-handling in the home. Also: immunization, "no shots, no school" laws, federally supplied vaccines, sanitation.
- **Secondary (prevent spread):** immediately evaluate the possible source of any foodborne outbreak. Also: screening (TB, HIV, STDs), contact investigation.
- **Tertiary (reduce complications and disability):** immediately treat any foodborne infection; treatment and rehabilitation.

**Multisystem approach to control (four goals):**
1. **Improve host resistance** (hygiene, distancing, masks, nutrition, fitness, immunization coverage, prophylactic/therapeutic drugs, mental health aids).
2. **Improve safety of the environment** (sanitation, clean water and air, proper food cooking/storage, vector and animal-reservoir control).
3. **Improve public health systems** (access to care, timely health education, better surveillance and reporting).
4. **Facilitate social and political change** (individual, group, and community action and legislation).

**Eradication vs. elimination (frequent trap):**
- **Elimination** = remove from a large geographic area (a country or region).
- **Eradication** = remove **worldwide** by ending all transmission (complete extermination). Only smallpox has been globally eradicated.

---

## §6 Surveillance and reportable diseases (p. 199)

- **Notifiable/reportable diseases:** those needing regular, frequent, timely case information for prevention and control.
- **Reporting is mandated by state law, not federal**, and varies slightly by state. States voluntarily report selected diseases to the **CDC through the National Notifiable Diseases Surveillance System (NNDSS)**. In 2019 there were **127 National Notifiable Conditions**; the list is revised as diseases emerge or decline.
- **BOX 11.2 — 10 Basic Elements of Surveillance:** mortality registration; morbidity reporting; epidemic reporting; epidemic field investigation; laboratory reporting; individual case investigation; surveys; use of biologic agents and drugs; distribution of animal reservoirs and vectors; demographic and environmental data.
- Nurses perform much of the communicable disease surveillance, reporting, and screening (TB, HIV, STDs, COVID-19).

---

## §7 Emerging infectious diseases and emergence factors (p. 200)

- **Emerging infectious diseases:** incidence has increased in recent decades or has potential to increase soon; may be new or known.
- Named examples: Ebola (identified 1976, Sudan/Zaire; high mortality, no licensed vaccine or known treatment, no recognized natural reservoir), hantavirus pulmonary syndrome (1993 US Southwest), *Streptococcus pyogenes* group A "flesh-eating" necrotizing fasciitis (1994), SARS (2003), Zika, H1N1, *E. coli* O157:H7, COVID-19.
- **Emergence factors (Table 11.1, CDC 1994):** except for microbial adaptation/change by the agent, **most emergence factors are consequences of human activities and behavior and environmental change** (deforestation, urbanization, industrialization).

---

## §8 Agents of bioterrorism (p. 203) — know the shortlist and the two CDC criteria

- **CDC criteria for the agents of highest concern:** they have the **potential for high mortality** AND **can be easily disseminated**, producing major public panic and social disruption.
- **The highest-concern agents (memorize this list and its organisms):**
  - **Anthrax** — *Bacillus anthracis* (spore-forming; a spore is a dormant cell that can revive under the right conditions). Postexposure for the exposed-but-well: antibiotics + anthrax vaccine; after infection: usually a 60-day antibiotic course.
  - **Plague** — *Yersinia pestis* (carried by fleas of wild rodents).
  - **Smallpox** — *Variola major*. Eradicated since 1979 (last natural death Somalia 1977); US stopped routine immunization in **1982**; susceptibility is **100% in the unvaccinated**; estimated fatality **20% to 40% or higher**. Vaccinia vaccine can protect **even after exposure**.
  - **Botulism** — *Clostridium botulinum*.
  - **Tularemia** — *Francisella tularensis*.
  - **Selected hemorrhagic viruses** — Filoviridae and Arenaviridae.

---

## §9 Vaccine-preventable disease and influenza (p. 204–205)

- **Influenza virus types:** A, B, C, D. **Type A causes large epidemics**; type B is more regional; type C is sporadic and mild; type D infects cattle, not people.
- **Antigenic drift vs. shift (high-yield):**
  - **Antigenic drift** = *minor* antigenic changes → yearly epidemics and regional outbreaks.
  - **Antigenic shift** = *major* changes producing new subtypes → **occur only with type A.** Shift plus drift drive epidemics every few years and **pandemics every 10 to 40 years** (novel influenza A H1N1, 2009).
- Because type A changes constantly, the flu vaccine developed each year does not always match perfectly.
- Measles is described as an acute, highly contagious respiratory disease (spreads readily on airborne droplets); a prime example of extreme infectiousness.

---

## §10 Foodborne, waterborne, vector-borne, and zoonotic (p. 209–212)

- **Salmonellosis:** a bacterial disease affecting the intestinal tract; bacteria live in animal/human intestines and shed through feces; humans infected via contaminated or undercooked food (meat, poultry, eggs). Hamburger is often involved in outbreaks. **Hemolytic uremic syndrome (HUS)** occurs in ~15% of pediatric cases and may cause acute renal failure.
- **FoodNet:** a **CDC sentinel surveillance system** across 10 sites, collecting lab data on enteric pathogens transmitted through food; a collaboration of **CDC, USDA, and FDA**; covers 15% of the US population (Salmonella, Campylobacter, Shigella, Cryptosporidium, and others).
- **Giardia:** a microscopic parasite passed via stool that can survive for weeks or months (waterborne).
- **Vector-borne disease:** the agent is transmitted by a carrier (vector), usually an arthropod. **Biologic transmission** = the vector is *necessary* for the agent to develop (mosquitoes for Zika and malaria, fleas for plague). Mechanical transmission = the vector simply carries the agent.
- **Lyme disease:** distinctive skin lesion (erythema migrans) makes early diagnosis straightforward; without the lesion it is harder because **serologic tests are more accurate in stages II and III than in stage I.** Prevention: reduce tick populations, avoid tick-infested areas, protective clothing (long sleeves, pants tucked into socks), repellents, prompt tick inspection and removal.
- **RMSF (Rocky Mountain spotted fever):** a serious tickborne illness that can be deadly if not treated early; spread by American dog tick, Rocky Mountain wood tick, and others.
- **WNV (West Nile virus):** an endemic mosquito-borne viral disease (with St. Louis, LaCrosse, Western and Eastern equine encephalitis). No human vaccine; prevention depends on **mosquito control and preventing bites** (DEET repellents).
- **Zoonosis:** an infection transmitted from a vertebrate animal to a human under natural conditions; caused by viruses, bacteria, parasites, or fungi. The agents **do not need humans** to maintain their life cycles.
- **Rabies:** **no successful treatment once symptoms appear.** Postexposure prophylaxis (human rabies immunoglobulin + rabies vaccine) can prevent disease if given promptly. This is a textbook **passive + active** combination: immunoglobulin (passive, immediate) plus vaccine (active, durable).
- **HAIs:** formerly "nosocomial infections."

---

## Source conflicts and traps

- **Active vs. passive immunity is the single most likely EAQ pair.** Active = the host makes its own antibody after an antigen/vaccine (slow, long-lasting). Passive = a ready-made antibody is transferred (immediate, short-lived, stopgap). Any option calling a vaccine "passive" or calling immunoglobulin "active" is the distractor. Rabies postexposure prophylaxis uses **both** at once.
- **Natural immunity ≠ acquired immunity.** Natural = innate, species-level (born with it). Acquired = from previous exposure or immunization. Do not confuse "natural immunity" with "naturally acquired active immunity from having the disease."
- **Incubation period vs. communicable period.** Incubation = exposure to symptoms. Communicable = the window you can infect others. HBV shows they diverge: infectious before symptoms appear.
- **Infection vs. disease.** HIV-positive but asymptomatic = infected, not diseased. This exact framing appears in the chapter and is a likely stem.
- **Eradication vs. elimination.** Elimination = a region/country; eradication = worldwide extermination. Smallpox is the only human disease eradicated. Any option using "eradicated" for a disease still present somewhere is wrong.
- **Reporting is state-mandated, not federal.** A stem implying federal law requires disease reporting is the distractor; states report **voluntarily** to the CDC via NNDSS.
- **Antigenic shift occurs only in type A.** Shift = new subtypes, pandemic potential; drift = minor, yearly. Attaching "shift" to type B/C is the trap.
- **Epidemic has no fixed number (shared with Ch. 10).** One case of an eliminated disease (e.g., polio, smallpox) counts as an epidemic. Any option requiring a large case count to define an epidemic is wrong.
- **Bioterrorism criteria are dual:** high mortality AND easy dissemination. An option citing only one is incomplete.
- **Vertical vs. horizontal transmission.** Vertical = parent to offspring (transplacental HIV/syphilis). Horizontal = person-to-person by the four routes. Mislabeling transplacental spread as "horizontal" is the distractor.
- **Rabies has no treatment once symptomatic;** the intervention window is postexposure prophylaxis before symptoms. An option offering "treatment after symptom onset" is wrong.
- **OCR bleed:** Box 11.1 (agent characteristics) and the HAI definition are both mangled by the two-column scan; both were reconstructed from clean occurrences. Always pull the full section before writing.
