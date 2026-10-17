# CodeBreakdowns — Landing Page & Platform Fix Checklist

This document tracks all 14 prioritized items identified during the architectural audit of `codebreakdowns-frontend`. We will check them off one by one as we design, implement, and verify each fix.

---

## 🔴 Category 1: Critical Functional Bugs & Broken Navigation

- [x] **Item 1: Public Course & Curriculum Preview (Remove Auth Barrier & Implement Lock States)**
  - Make `/courses` and course previews accessible to unauthenticated guests. (Done)
  - Keep `/dashboard` strictly protected behind auth. (Done)
  - Allow unauthenticated and non-purchased users to browse the full curriculum (courses $\to$ chapters $\to$ lessons). (Done)
  - Replace the misleading `"Video coming soon"` screen with a high-converting **Video Lock Overlay** with direct enrollment CTAs. (Done)
  - Handle bundle vs. individual course ownership properly. (Done)

- [ ] **Item 2: Fix `#opportunities` Navigation Anchor**
  - Implement the missing `#opportunities` section on the landing page or resolve navigation routing.
  - Provide real student value (internship tracker, referral network, Discord community).

- [ ] **Item 3: Interactive Video Breakdown Preview / Modal in Hero**
  - Replace the dead static mockup card with an interactive preview player or modal.
  - Enable visitors to watch an actual 2-minute pattern breakdown (e.g., Two-Sum or Sliding Window).

- [ ] **Item 4: Fix Stats Section Spacing & Sticky Navbar Cutoff**
  - Resolve vertical spacing, margins, and clipping issues on scroll.

---

## 🟠 Category 2: Missing Essential SaaS Sections (Conversion & Trust)

- [ ] **Item 5: Company Placements & Target Employers Marquee**
  - Add visual social proof (Google, Microsoft, Amazon, Atlassian, Uber logos / placement ticker).

- [ ] **Item 6: Interactive "How It Works" Deep Dive (3 Pillars)**
  - Pattern Intuition $\to$ Visual Step-Through $\to$ Production System Implementation.

- [ ] **Item 7: Verified Student Testimonials & Review Wall**
  - Build social proof cards with verified student reviews, college tags, and internship outcomes.

- [ ] **Item 8: FAQ Accordion Section**
  - Implement accessible Radix FAQ addressing lifetime access, refund policy, and prerequisites.

- [ ] **Item 9: Bottom High-Impact Conversion Banner**
  - Closing CTA banner driving signups before the footer.

---

## 🟡 Category 3: Visual Polish, Typography & Aesthetic Hierarchy

- [ ] **Item 10: Restore Hero Typography Hierarchy**
  - Scale up from anemic font sizes to bold, commanding SaaS typography (`text-4xl sm:text-5xl lg:text-6xl`).

- [ ] **Item 11: Upgrade Hero Visual Depth**
  - Replace washed-out light mode placeholder with high-contrast, glowing IDE/video frame.

- [ ] **Item 12: Upgrade Course Roadmap Cards**
  - Add difficulty badges, lesson counts, estimated hours, and interactive hover depth.

---

## 🟢 Category 4: Architecture, Data Hygiene & SEO

- [ ] **Item 13: Backend Data Synchronization with Graceful Fallback**
  - Connect landing page course cards to TanStack Query (`fetchCourses` / `fetchProducts`).

- [ ] **Item 14: Route-Specific SEO Head Tags**
  - Add rich meta tags, OpenGraph cards, and Twitter summaries on the landing page route.
