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

- [x] **Item 2: Fix `#opportunities` Navigation Anchor**
  - Implement the missing `#opportunities` section on the landing page or resolve navigation routing. (Done)
  - Provide real student value (corporate partner pilot waitlist, 1-click notification, referral network). (Done)

- [x] **Item 3: Interactive Video Breakdown Preview / Modal in Hero**
  - Replace the dead static mockup card with an interactive preview player or modal. (Done)
  - Enable visitors to watch an actual pattern breakdown (Contains Duplicate via Bunny Stream). (Done)

- [x] **Item 4: Fix Stats Section Spacing & Sticky Navbar Cutoff**
  - Resolve vertical spacing, margins, and clipping issues on scroll. (Done)
  - Comprehensive mobile responsiveness overhaul across Hero, Stats, Cards, Drawer, and Course Player. (Done)

---

## 🟠 Category 2: Missing Essential SaaS Sections (Conversion & Trust)

- [x] **Item 5: Company Placements & Target Employers Marquee**
  - Add visual social proof (Google, Meta, Microsoft, Amazon, Apple, Netflix, Uber, Stripe, Atlassian marquee ticker). (Done)
  - Added "Crack MAANG & Tier-1 Tech Interviews" narrative with the DSA + System Design + AI Application triad breakdown. (Done)

- [x] **Item 6: Interactive "How It Works" Deep Dive (3 Pillars)**
  - Pattern Intuition $\to$ Visual Step-Through $\to$ Production System Implementation. (Done)
  - Interactive live demonstration canvas with Brute Force vs Hash Set comparison, 4-step pointer trace simulator, and multi-language production code terminal (TypeScript/Python/Go). (Done)

- [ ] **Item 7: Verified Student Testimonials & Review Wall (Deferred)**
  - Deferred until real student cohort reviews are collected to maintain brand integrity and trust.

- [x] **Item 8: FAQ Accordion Section**
  - Implement accessible Radix FAQ addressing lifetime access, refund policy, and prerequisites. (Done)
  - Added 6 high-conversion answers with keyboard accessibility, smooth animations, and email support link. (Done)

- [x] **Item 9: Bottom High-Impact Conversion Banner**
  - Closing CTA banner driving signups before the footer. (Done)
  - Designed high-contrast card with ambient glowing lighting, lifetime access badges, dual CTAs, and trust perks. (Done)

---

## 🟡 Category 3: Visual Polish, Typography & Aesthetic Hierarchy

- [x] **Item 10: Restore Hero Typography Hierarchy**
  - Scaled up to bold, commanding SaaS typography (`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]`) with vibrant multi-stop gradient accent and responsive mobile-first typography.

- [x] **Item 11: Upgrade Hero Visual Depth**
  - Integrated high-contrast macOS IDE window with authentic traffic-light dots (`#ff5f56`, `#ffbd2e`, `#27c93f`), breadcrumbs (`blind-75 / contains-duplicate.ts`), syntax watermark, pulsing play button, and ambient multi-colored aura.

- [x] **Item 12: Upgrade Course Roadmap Cards**
  - Added semantic difficulty badges (Emerald for Beginner, Amber for Intermediate, Purple for Advanced), lesson count and video duration metadata, topic tags pills, and interactive hover depth.

---

## 🟢 Category 4: Architecture, Data Hygiene & SEO

- [x] **Item 13: Backend Data Synchronization with Graceful Fallback**
  - Connected landing page course cards to TanStack Query via `fetchCourses`. Synchronizes live database IDs with zero-latency fallback to `landingCourses`.

- [x] **Item 14: Route-Specific SEO Head Tags**
  - Configured route-level `head` meta definition with Title, Meta Description, Keywords, OpenGraph (`og:title`, `og:description`, `og:type`, `og:url`), and Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`).
