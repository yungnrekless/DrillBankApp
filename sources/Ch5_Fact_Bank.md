# Fact bank — Chapter 5: Economics of US Health Care Delivery

**Source:** Stanhope & Lancaster, *Foundations for Population Health in Community/Public Health Nursing*, 6th ed., Section 1, printed pp. 78–102. Author: Whitney Rogers Bischoff.

**To regenerate the raw text:**

```bash
python3 extract.py pull FOUNDATIONS_for_POPULATION_HEALTH_with_bookmarks.pdf 78 102 --offset 20 --out ch5_raw.txt
```

**This file is the curated layer**, de-bled from the two-column scan. **This is the chapter that was previously the standing gap** — the Canvas click-to-reveal widget hid the payment-mechanism definitions, so before this you had term names without meanings. **This fact bank pulls every one of those definitions in full from the textbook.** On the final blueprint, Ch 5 has its own 3-question line (WHO/US Health Dept/CDC roles, nurse practice acts). But the payment terms the blueprint lists under the Ch 3/4 line — **managed care, HMO, PPO, Medicare, Medicaid, CHIP, prospective payment** — are all defined **here**. Learn the payment vocabulary from this sheet.

---

## Key terms (with printed page)

| Term | p. | Definition as given |
|---|---|---|
| **economics** | 80 | The science concerned with the use of resources, including the production and distribution of goods and services. |
| **health economics / public health economics** | 80 | Application of economic principles to health and health care; concerned with resource allocation for population health. |
| **health care rationing** | 81 | Limiting or reducing access to care (e.g., providers refusing or restricting Medicare/Medicaid patients). Implies reduced access and potential quality decreases. |
| **fee-for-service** | 83 | Traditional method of paying **practitioners**: the practitioner sets the cost, delivers the service, and bills a third-party payer, based on **usual, customary, and reasonable (UCR)** charges. Retrospective in nature. |
| **capitation** | 98 | Paying a practitioner a **preset, negotiated fee per member** (per member per month), agreed **before** services are delivered, at a discounted rate. Typically used by managed care organizations. |
| **retrospective reimbursement** | 97 | Traditional method of paying **organizations**: fees are set **after** services are delivered, based on cost or charges. Encourages **cost shifting**. |
| **prospective payment system (PPS)** | 93 | Reimbursement rates set **before** care is delivered; encourages staying within budget. Medicare's hospital PPS is based on **DRGs** (est. 1983). |
| **diagnosis-related groups (DRGs)** | 93 | Classification used in Medicare's prospective payment: hospitals are paid a set amount per diagnosis category, regardless of actual cost. Established by the amended Social Security Act (PL 98-21) in **1983**. |
| **managed care** | 96 | A system based on **managed competition** (introduced late 1980s–early 1990s) to control cost and improve quality; integrates financing and delivery, negotiates with providers for "covered lives." |
| **third-party payer** | 96 | An entity (insurer or government program) that pays for care on behalf of the patient. |
| **Medicare** | 92 | Title XVIII, Social Security Act of 1965. **Federal insurance** for those **65+, permanently disabled, ALS, or ESRD.** |
| **Medicaid** | 82 | Title XIX, Social Security Act of 1965. **Joint federal/state social insurance** for the poor, aged, blind, disabled, and families with dependent children. |
| **means testing** | 90 | Determining eligibility for a program (like Medicaid) based on income/assets. |
| **safety net providers** | 82 | Providers (e.g., community health centers, ERs) that serve the uninsured and underserved regardless of ability to pay. |
| **American Health Benefits Exchanges** | 82 | ACA insurance marketplaces. |
| **Prevention and Public Health Fund** | 79 | ACA fund investing in community public health (e.g., COVID-19, WIC). |
| **inflation** | 80 | Rising prices; a driver of health care cost growth. |
| **intensity** | 84 | The volume/complexity of services provided per case; a cost driver. |
| **human capital** | 83 | The economic value of a person's health and productivity. |

---

## §1 The payment systems — the exact material that was missing (p. 97–98)

**Two axes: who is being paid (organization vs. practitioner) and when the rate is set (after vs. before).**

### Paying health care ORGANIZATIONS

| Method | When rate is set | How it works | Incentive / risk |
|---|---|---|---|
| **Retrospective reimbursement** | **After** services delivered | Paid on **cost per unit of service** (e.g., a home health visit, a patient-day) or on charges | Encourages inflating prices → **cost shifting** (charging one payer more to cover losses elsewhere). Little regard for cost. |
| **Prospective reimbursement (PPS)** | **Before** services delivered | Rate fixed in advance (e.g., **DRGs** for Medicare hospital care) | Encourages staying within budget but risks **under-serving** and compromising quality. |

### Paying health care PRACTITIONERS

| Method | When rate is set | How it works |
|---|---|---|
| **Fee-for-service** | After (like retrospective) | Practitioner sets cost, delivers service, bills third-party payer using **UCR** charges. Historically used by Medicare, Medicaid, and private insurers. |
| **Preferred provider** | Before (like prospective) | Third-party payer negotiates the rate **before** care; caps reimbursement per patient. |
| **Capitation** | Before | Practitioner contracts with a managed care org for a **preset fee per member** (per member per month), paid regardless of how much care the member uses. |

> **The single most testable contrast:** *retrospective / fee-for-service* = rate set **after** care, paid per service rendered (incentive to do **more**). *Prospective / capitation* = rate set **before** care, fixed per case or per member (incentive to do **less / stay in budget**). DRG = the prospective method for **hospitals**. Capitation = the prospective method for **practitioners** under managed care.

**RBRVS (resource-based relative value scale):** established by the Omnibus Reconciliation Act of 1989, adopted by Medicare in 1991; reimburses physicians based on the service provided and the resources required.

**NP/CNS reimbursement:** the Balanced Budget Act of 1997 (effective Jan 1, 1998) granted NPs and CNSs third-party reimbursement for **Medicare Part B** at **85% of physician rates** for the same service.

---

## §2 Medicare vs. Medicaid — the comparison table (p. 92–95)

| Feature | **Medicare** (Title XVIII) | **Medicaid** (Title XIX) |
|---|---|---|
| **Recipients** | People **65+, permanently disabled, ALS, or end-stage renal disease (ESRD)** | Specified **low-income and needy**: children, aged, blind, disabled |
| **Type** | **Insurance** | **Social insurance** (assistance) |
| **Government** | **Federal** (administered by CMS) | **Joint federal/state** (matching funds), administered by CMS |
| **Financing** | Part A: **Medicare Trust Fund + dedicated payroll tax**; Part B: **beneficiary premiums + general revenue** | **Federal + state** general revenues |
| **Basis** | Age/disability (not income) | **Income/means-tested** |

**Medicare has parts:**
- **Part A** — **hospital** insurance: inpatient hospital, home health, hospice, limited skilled nursing.
- **Part B** — **medical** insurance: "medically necessary" provider services, outpatient care, home health, diagnostics, physiotherapy.
- **Part C** — Medicare Advantage plans (since 1999).
- **Part D** — **prescription drug** coverage (2006).

> **The trap that gets everyone:** Medicare = **age 65+ / disability**, federal, *not* income-based. Medicaid = **poverty / means-tested**, joint federal-state. If the stem says "65-year-old," think **Medicare**; if it says "low-income family" or "needy," think **Medicaid.** Medicaid pays for **more than half** of all long-term care spending.

**CHIP (Children's Health Insurance Program):** created by the **Balanced Budget Act of 1997** to cover children in **low-income families who earn too much for Medicaid but can't afford private insurance.** (Note: this "CHIP" is the insurance program — distinct from the Community Health Improvement Process in Ch 1.)

---

## §3 Managed care and the acronyms (HMO / PPO) (p. 96)

**Managed care** integrates the **financing and delivery** of care to control cost and use, built on **managed competition** (patients choose services based on quality/reputation and price). Managed care organizations negotiate with hospitals and providers for care to their enrollees, called **covered lives.**

| Model | What it is |
|---|---|
| **HMO (Health Maintenance Organization)** | Prepaid plan; enrollees use a defined network and typically need a **primary care gatekeeper** for referrals. Emphasizes prevention to control cost. Often paid via **capitation**. |
| **PPO (Preferred Provider Organization)** | A network of **preferred providers** who accept negotiated (discounted) rates; enrollees may go out of network at higher cost. No strict gatekeeper. |

> **Distinguish:** HMO = tighter network, gatekeeper, prepaid/capitated, cheapest but least flexible. PPO = looser, preferred-provider discounts, more choice, higher cost. Both are forms of managed care.

---

## §4 Factors driving health care costs (blueprint: "factors impacting the cost of health care")

The chapter names these cost drivers:
- **Demographics** — population growth and the **aging population** (baby boomers → surging Medicare enrollment).
- **Technology and intensity** — more, and more complex, services per case.
- **Chronic illness** — long-term, high-cost care.
- **Prescription drugs** and **inflation.**

The blueprint calls out **population growth and aging population** specifically — both map to the "Demographics Affecting Health Care" section.

---

## §5 The uninsured and disparities (context)

- **Health care disparities** = differences among population groups in availability, accessibility, and quality of care.
- Uninsured fell from ~44–48 million (2013) to ~27.6–28.1 million (2016) after the **ACA (PL 111-148, 2010)** and Medicaid expansion.
- **More than 80% of the uninsured were in working families** (income < 400% of poverty); most had one or more full-time workers — the **"working poor"** who earn too much for Medicaid but can't afford coverage.
- Socioeconomic status is **inversely related** to mortality/morbidity for nearly every disease.
- The mentally ill die **15–30 years earlier** than counterparts without mental illness (links to Ch 25).

---

## §6 The blueprint's own Ch 5 line: WHO / US Health Department / CDC and nurse practice acts

The 3-question blueprint line filed under Ch 5 actually points to **agency roles and scope of practice** (which overlap Ch 3 and Ch 4). Quick anchors:
- **WHO** — global health leadership; Alma-Ata and primary health care (Ch 3).
- **US Health Department (USDHHS)** — federal health/welfare agency; houses the PHS and CMS (Ch 3).
- **CDC** — surveillance, prevention, and control of disease; part of the PHS (Ch 3).
- **Nurse practice acts** — the statutory law defining **scope of nursing practice and accountability**; enforced by state **Boards of Nursing** (Ch 4).

Cross-reference the **Ch3** and **Ch4** fact banks for the full treatment of these; they appear on the Ch 5 blueprint line but are developed in those chapters.
