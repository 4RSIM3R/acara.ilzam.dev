# Landing Page Brief — Acara

## 1. Strategy

### Primary goal
Get event organizers running **recurring paid events** to take the next step with Acara. The exact CTA (free trial vs demo vs waitlist) is blocked on section 6 — do not finalize hero copy until that's resolved.

### Audience
Solo operators and small teams (1–5 people) running **recurring** paid events: yoga studios, workshop hosts, multi-session training providers, small conference organizers.

**Do not invent pain quotes.** Pull real quotes before launch from:
- Bali beta tester outreach (`docs/bali-beta-tester-post.txt`)
- Direct outreach to recurring-event operators (yoga studios, workshop hosts, training providers) in the target market

If no voice-of-customer data exists at copy time, use concrete mechanics instead of quotes (see Copy Rules).

### Positioning
Acara is the **operations layer for recurring event businesses** — planning, selling, delivering, and retaining in one system.

Explicit non-claims (to avoid overpromising against the current product state in `docs/vertical.md`):
- Not a full ERP. SOURCE (vendors, budget, procurement) and ANALYZE (cohorts, LTV) are not built yet — do not imply they are.
- Not a one-off ticketing tool (Eventbrite territory).
- Not a general CRM.

### Traffic sources
- Warm: referrals and WhatsApp operator groups → homepage (this brief).
- SEO (later): long-tail vertical + region terms, covered by a separate programmatic SEO doc.
- Paid (later): covered by a separate paid-ads doc.

This brief is **the homepage / primary landing page only.** Ad-specific landing pages are out of scope.

---

## 2. Page Structure

Target length: five folds. If a writer expands beyond this, it stops being a landing page.

### Fold 1 — Hero

**Headline (primary)**
> Plan, sell, deliver, and bring them back. In one platform.

**Alternatives (for A/B once traffic exists)**
- A: *The event platform that doesn't stop at check-in.* — differentiator-led
- B: *Built for businesses that run events every week, not once a year.* — audience-led

**Subheadline**
> Acara covers the full lifecycle of a recurring event business — from the landing page and payment, through check-in and certificates, to membership and loyalty.

**CTA**: blocked on section 6. Placeholder for writer: `[PRIMARY_CTA]`, `[SECONDARY_CTA]`. Do not ship with these placeholders.

**Hero visual (brief to designer)**: the six-stage lifecycle band from `docs/vertical.md` (PLAN → MARKET → SELL → DELIVER → FOLLOW-UP → RETAIN) rendered as a clean horizontal graphic, with a product screenshot anchored below. No stock photos. No "tool logo chaos" metaphor — it's a cliché.

---

### Fold 2 — The lifecycle (solution)

**Header**: *One system for every stage of your event.*

Six short cards. Each card = one stage, one sentence of outcome, one concrete mechanic. Outcomes must be verifiable against shipped features in `docs/vertical.md`.

| Stage | Outcome | Concrete mechanic |
|---|---|---|
| **Plan** | Set up one class once, run it weekly. | Event templates, recurring schedules, venue and speaker conflict detection. |
| **Market** | Your event page, email list, and waitlist live in the same system. | Per-event landing page with SEO settings, tag-based email blasts, waitlist with auto-notification. |
| **Sell** | Take bank transfer, QRIS, vouchers, and referral discounts without a spreadsheet. | Order lifecycle tracking, invoice PDF, referral balance, voucher rules. |
| **Deliver** | Check attendees in on a phone. Certificates send themselves. | QR check-in, per-session attendance, auto-generated certificates from .docx templates. |
| **Follow-up** | Thank-yous, surveys, and recordings go out without you lifting a finger. | Scheduled post-event email, NPS surveys, gated recording access, Excel P&L export. |
| **Retain** | Turn attendees into members. | Monthly subscription plans, loyalty credits on check-in, auto customer segmentation, re-engagement campaigns. |

Caveat for the writer: **only mechanics listed in `docs/vertical.md` as "Done" may appear on the page.** No "coming soon" language on the homepage.

---

### Fold 3 — How it works

Three steps, no more:

1. **Build your event.** Start from a template or from scratch. Set sessions, pricing tiers, add-ons, and a landing page.
2. **Share and sell.** One link handles registration, payment, vouchers, and reminders.
3. **Run it and follow up.** QR check-in on the day. Certificates, feedback, and the next-event invite go out automatically.

---

### Fold 4 — Before / After: the tool stack

**Header**: *The tool stack you're running today. And what replaces it.*

**Intro line (one sentence, sets up the table)**:
> Most recurring-event operators are quietly running 8–12 tools, paying for half of them, and holding the rest together with WhatsApp and a spreadsheet.

Render this as a **visual side-by-side, not a wall of text.** Left column: a messy grid of logos/labels connected by dotted lines. Right column: a single Acara card. On mobile, stack vertically with the "before" scrolling and the "after" sticky.

**The full mapping (writer uses this as source; designer picks the visual density):**

| Job to be done | What you're using today | Replaced by |
|---|---|---|
| Event landing page | Carrd, Linktree, Wix, Instagram bio link | Per-event landing page with SEO settings |
| Registration form | Google Forms, Typeform, Jotform | Built-in order flow with catalog + add-ons |
| Payment collection | Bank transfer instructions in WhatsApp, QRIS screenshot | Bank transfer + QRIS with proof upload |
| Payment reconciliation | Spreadsheet, bank app, manual cross-check | Order lifecycle: pending → confirmed → completed |
| Invoices | Typed by hand in Word or Canva | Auto-generated PDF |
| Voucher / discount codes | Kept in a note on your phone | Voucher rules with date ranges, limits, stackability |
| Referral tracking | Nothing, or a spreadsheet | Per-customer referral code + balance |
| Reminder emails | Mailchimp, MailerLite, or WhatsApp broadcasts | Scheduled D-3 and D-1 emails, in-app |
| Waitlist for sold-out events | DMs in your inbox | Public waitlist with auto-notify on cancel |
| Attendee list on event day | Printed spreadsheet, pen tick-marks | QR check-in on phone |
| Per-session attendance | Separate list per day | Session-level attendance tracking |
| Event materials (PDFs, slides, links) | Google Drive link in WhatsApp | Materials tab, gated by check-in |
| Certificates | Canva template, edited by hand | Auto-generated from .docx template |
| Thank-you email after the event | Usually forgotten | Scheduled post-event email |
| Feedback and NPS | Google Forms link | Built-in survey with NPS gauge |
| Recording / replay access | YouTube unlisted link in a group chat | Embedded video with availability window |
| Financial reports | Spreadsheet with manual entries | Excel P&L export per event |
| Customer list | WhatsApp contacts + a spreadsheet | Customer database with auto-tags (frequency, recency, behavior) |
| Membership / recurring revenue | Not done, or a Google Sheet | Monthly subscription plans with feature gating |
| Loyalty for repeat attendees | Not done | Credit on check-in, usable on next order |
| Re-engagement of lapsed customers | Not done | Tag-based campaign with preview count |

**Summary line below the table**:
> That's up to 15 tools, three subscriptions, and a lot of tab-switching. Acara is one login.

**Important for the writer**:
- **Do not use competitor logos** unless we have written permission. Use generic labels ("form tool", "email tool") or plain-text names only.
- **Do not publish competitor feature comparisons** (Acara vs Eventbrite vs Mailchimp). That requires a dated verification doc and legal review. This fold compares **job-to-be-done**, not product-to-product.
- Every right-column claim must be verifiable against `docs/vertical.md` as "Done."

---

### Fold 5 — Pricing anchor + FAQ + final CTA

Bundled into one fold to keep the page tight.

**Pricing anchor** (required — do not ship without):
One line stating the pricing shape. Example shape only — fill in once section 6 is resolved:
> *Starts at [X] per month. One plan, no per-attendee fees.*

If pricing isn't decided by launch, the page is not ready to launch. Don't hide the question.

**FAQ** — answer the hard objections, not the soft ones:

- **What happens to my customer data if I leave?**
  Full export to Excel at any time — customers, orders, financial history. No lock-in.
- **How long does it take to move off my current tools?**
  First event live in under an hour if your details are ready. Data import from spreadsheets is manual today — if you have more than a few hundred past customers, contact us before signing up.
- **What payment methods are supported?**
  Manual bank transfer and QRIS. Payment gateway (Midtrans/Xendit) is not built yet — if auto-confirmation is a hard requirement, Acara is not ready for you today.
- **What if I outgrow it?**
  The analytics layer (cohort, LTV, pricing optimization) is not built yet. Acara fits operators running events, not data teams analyzing them.
- **Is this for one-off events?**
  No. Acara is built for recurring events. If you run one conference a year, Eventbrite or similar will fit you better.

**Final CTA**: mirrors fold 1. Same placeholders.

---

## 3. Copy Rules

- **Banned words**: streamline, optimize, seamless, innovative, unlock, empower, revolutionize, leverage, synergy, effortless.
- **No exclamation points.**
- **No fabricated stats, logos, or testimonials.** If the real number isn't known, don't write a number.
- **No "AI-powered" or similar trend language** unless an actual AI feature ships and is named.
- **Customer language**: class, session, workshop, attendee, member. Not: SKU, unit, inventory, user.
- **Active voice**: "Acara sends the certificate" not "certificates are sent."
- **Specificity beats adjectives**: "Check in with QR on a phone" beats "seamless check-in experience."
- **No claims about competitors** without a dated verification doc.
- **No "coming soon"** on the homepage. If it's not shipped, it's not here.

---

## 4. SEO Meta

- **Title**: `Acara — Event Management for Yoga Studios, Workshops, and Training Providers`
- **Meta description**: `One platform for the full event lifecycle — plan, sell, check in, follow up, and retain. Built for businesses that run events every week.`
- **H1**: matches fold 1 headline.
- **URL**: `/`

---

## 5. Mobile + Accessibility Notes

- Studio and workshop owners will mostly hit this page on phone. Design mobile-first.
- Lifecycle band (fold 1 / fold 2) must reflow to a vertical stack on mobile without losing the PLAN → RETAIN order.
- Comparison table in fold 4: use a stacked card layout on mobile, not a horizontal scroll.
- CTA must remain above the thumb line on mobile.

---

## 6. Open Decisions — Must Resolve Before Writing Final Copy

These block finalization. The page cannot ship without answers.

1. **CTA model** — free trial, demo booking, or waitlist? Determines `[PRIMARY_CTA]` / `[SECONDARY_CTA]`.
2. **Pricing shape and number** — required for fold 5. If undecided, the page should not go live.
3. **Real customer proof** — do we have 1–3 named customers willing to be quoted with permission? If yes, add a testimonial strip between fold 2 and fold 3. If no, omit — do not fabricate.
4. **Language** — English, Bahasa Indonesia, or both? Target market skews SEA; likely ID primary, EN secondary.
5. **Competitor comparison** — drop the competitor column, or commission a dated verification doc. Do not publish unverified claims.
6. **Payment gateway messaging** — the FAQ says "not built yet" honestly. Confirm this is acceptable, or delay launch until it ships.

Post-launch tactics (programmatic SEO, comparison pages, referral loops, founder-led content) live in a separate growth doc, not here.
