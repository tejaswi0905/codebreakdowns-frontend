# CodeBreakdowns — Pre-Launch Readiness & Bug Fix Checklist

This document tracks all prioritized items required to bring **CodeBreakdowns** from its current state to a battle-tested, launch-ready production SaaS platform. We will check them off one by one as we design, implement, and verify each fix.

---

## 🔴 Category 1: Critical Functional Blockers & Silent Mocks (Code-Level Fixes)

- [x] **Item 1: User Identity Contract & Navbar Display Synchronization**
  - Fix mismatch between backend `User` schema (`id`, `name`, `email`, `avatarUrl`, `role`) and frontend `User` interface in [`src/services/api.ts`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/services/api.ts).
  - Update [`Navbar.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/components/Navbar.tsx) to display the user's real name and avatar initials (currently displays `"U"` and a blank `"@"`).
  - Wire up the dead "Help & Support" dropdown menu item in [`Navbar.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/components/Navbar.tsx) to `/contact`.
  - Fix [`dashboard.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/dashboard.tsx) greeting to cleanly display `user.name` instead of falling back to `"Learner"`.

- [x] **Item 2: Real Profile Persistence & Backend Endpoint**
  - Replace hardcoded dummy profile data (`"Aditi Kumar"`, IIT Delhi) in [`src/routes/profile.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/profile.tsx).
  - Create `PATCH /api/v1/users/me` endpoint in [`CB-backend`](file:///c:/Users/surek/OneDrive/Desktop/Coding/CB-backend/src/modules/users) to allow users to update their profile info.
  - Connect frontend [`profile.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/profile.tsx) to real database mutations with loading and error states.

- [ ] **Item 3: Working Contact Form & Support Ingestion**
  - Eliminate the `setTimeout` mock in [`src/routes/contact.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/contact.tsx) that silently drops student inquiries.
  - Implement a real backend support ingestion endpoint (`POST /api/v1/users/contact` or transactional email integration via Resend/Nodemailer) forwarding inquiries to `codebreakdowns@gmail.com`.
  - Add client-side validation, error handling, and delivery confirmation.

- [ ] **Item 4: Dynamic Course Overview & Roadmaps (Remove Hardcoded Fallbacks)**
  - Remove hardcoded `"Blind 150"`, `"63/150 solved"`, and static `"DSA Roadmap"` title in [`src/routes/overview.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/overview.tsx).
  - Dynamically render the active course roadmap, title, and progress metrics based on real database curriculum data.
  - Add an intuitive empty state when a selected course has unpublished modules.

- [ ] **Item 5: Eliminate Double Footer on `/about` & Dead Anchor Links in `/login`**
  - Remove the redundant `<footer>` declared inside [`src/routes/about.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/about.tsx) (prevents two stacked footers from rendering on `/about`).
  - Update dead `<a href="#">` links in [`src/routes/login.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/login.tsx) to properly link to `/terms-and-conditions` and `/privacy-policy`.

---

## 🟡 Category 2: Pre-Launch Polish & Missing Media Assets

- [ ] **Item 6: Create & Deploy Social Share OpenGraph Asset (`og-image.png`)**
  - Add high-resolution (1200×630px) branded OpenGraph preview card to [`codebreakdowns-frontend/public/og-image.png`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/public).
  - Verify rich link previews across Twitter/X, WhatsApp, Discord, and LinkedIn.

- [ ] **Item 7: First-Time Student Dashboard Onboarding & Empty States**
  - Polish the zero-enrollment state in [`dashboard.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/dashboard.tsx) with recommended starting paths (Blind 75 or Free modules) to guide first-time students.
  - Ensure fast 1-click continuation cards highlight the most recent unfinished lesson.

- [ ] **Item 8: Course Player Fallbacks & Outbound Problem Links**
  - Audit LeetCode external links across all lessons in [`courses.tsx`](file:///c:/Users/surek/OneDrive/Desktop/Coding/codebreakdowns-frontend/src/routes/courses.tsx) with graceful fallback tooltips when problem URLs are not yet populated.
  - Verify video player retry and reconnection behavior on unstable mobile network connections.

---

## 🟢 Category 3: Production Infrastructure, Auth & Operations

- [ ] **Item 9: Production Cross-Domain Cookie & CORS Audit**
  - Verify that JWT HTTP-only authentication cookies support cross-subdomain sharing (`domain: ".codebreakdowns.in"`, `sameSite: "none"`, `secure: true`) between `https://codebreakdowns.in` and `https://api.codebreakdowns.in`.
  - Prevent Safari/iOS Intelligent Tracking Prevention (ITP) cookie drops during OAuth redirects.

- [ ] **Item 10: Post-Purchase Automated Transactional Email**
  - Configure automated order confirmation & enrollment receipt email triggered by the Razorpay `order.paid` webhook.
  - Include direct login link, receipt ID, and curriculum onboarding guide.

- [ ] **Item 11: Production Error Monitoring (Sentry / LogRocket)**
  - Configure frontend and backend error tracking to capture client-side video playback failures or server-side webhook discrepancies in real time.

- [ ] **Item 12: End-to-End Live Payment & DRM Smoke Test**
  - Run a real ₹1 live Razorpay payment transaction on the production domain via mobile UPI.
  - Verify:
    1. Instant database receipt creation (`UserProduct`).
    2. Zero-reload unlock of Bunny video stream.
    3. Heartbeat watch-time tracking and dashboard sync.
