# SCALE WITH ADS™ — Website Rebuild Prompt

> Copy-paste this entire prompt into any AI website builder, front-end copilot, or design AI to rebuild the Scale With Ads™ website exactly as specified. Every color, animation, and section below is production-tested on the live site.

---

## 1. ROLE & BRAND OVERVIEW

You are building a **premium, dark, high-conversion marketing website** for **Scale With Ads™** — a done-for-you client acquisition agency for Meta (Facebook/Instagram) advertising.

**Core business promise:**
> "We install our proprietary Scale With Ads™ Client Acquisition System into your business and **double your revenue within 90 days** — or we work at **no management fee** until we do. Backed by a **written agreement**."

**Who we serve:** Media agencies, coaches, high-ticket services, B2B founders, and 9-figure operators. Minimum budget: **$10K/month**.

**Key proof points to display prominently:**
- $50M+ managed in Meta ad spend
- 12+ years of experience
- 3.32x average tracked ROAS
- 13,630+ offers converted
- 90-day written revenue guarantee
- 100% asset ownership, no lock-ins
- Two Comma Club Winner, ClickFunnels Awards

**Deliverables of the service (mention throughout):** Meta/Facebook ads, Google ads, scroll-stopping creative (UGC & short-form), landing pages/funnels, CRM + AI automations, lead qualification, VSL players, retargeting. The site must feel like **a 3D, cinematic, futuristic advertising engine** — not a template.

---

## 2. COLOR THEME (DARK PREMIUM RED / BLACK / WHITE)

This is a **red/black/white** theme. Black background dominates; red is the single accent that drives urgency, motion, and "alive" energy; white/zinc is for typography hierarchy.

| Token | Hex | Usage |
|---|---|---|
| **Near-black background** | `#070709` | Primary site background |
| **Panel / band-2** | `#121215` | Card surfaces, dark sections |
| **Elevated** | `#1c1c21` | Hover panels, modal surfaces |
| **Accent red** | `#ed1c24` | CTAs, highlights, active states, icons |
| **Deep red** | `#c4181e` | Accent hover, gradients |
| **Bright red** | `#ff3b43` / `#ff4d52` / `#ff5a24` | Gradient text stops, glows |
| **Soft red** | `#ff8f93` / `#ff7a90` | Gradient text highlight end |
| **White** | `#ffffff` | Headlines, primary text |
| **Zinc grays** | `#a1a1aa`, `#71717a`, `#52525b` | Secondary/tertiary text |
| **Glass** | `rgba(255,255,255,0.04–0.10)` | Chips, cards, blurred overlays |
| **Borders** | `rgba(255,255,255,0.08–0.15)` | Hairline dividers |

**Rules:**
- NEVER use blue, green, or purple. Red is the only brand accent.
- Light sections (TrustBar, ClientsShowcase, /book) use **white background with near-black text (#09090b)** and the same red accent.
- Text gradients: `#ff8f93 → #ff4d52 → #ed1c24 → #ff5a24` (animated, flowing).
- Red glows: `rgba(237,28,36,0.2–0.6)` radial gradients behind heroes, CTAs, and the play button.

---

## 3. TYPOGRAPHY & LAYOUT

- **Display font (headlines):** bold sans, weight 800, `letter-spacing: -0.035em`, `line-height: 1.05`. Massive, tight, cinematic.
- **Body font:** clean sans (system-ui fallback), `line-height: 1.6`.
- **Eyebrow labels:** `0.72rem`, weight 700, `letter-spacing: 0.16em`, UPPERCASE, muted gray or red.
- **Buttons:** pill-shaped (`border-radius: 9999px`), weight 700, `letter-spacing: -0.01em`, with glow shadows `0 10-12px 40px rgba(237,28,36,0.3–0.6)`.
- **Layout:** max content width ~`1240px` (`container-x`), generous vertical rhythm (`py-20`/`py-28` on mobile/desktop), `clamp()` responsive type.

---

## 4. 3D & WEBGL REQUIREMENTS (THE "3D WEBSITE")

The site must feel **three-dimensional and alive** at all times:

1. **Hero 3D canvas** — an interactive WebGL (three.js) scene behind the hero headline: a "profit growth ecosystem" — floating particles/network nodes, a rising 3D growth line/chart, and an orbiting red money/ad icon. Reacts subtly to mouse movement. Desktop only (hidden on touch to save battery).
2. **Scaling 3D Meta logo watermark** — a large 3D (extruded/revolved) "f" Meta logo spinning slowly behind the hero content at `opacity 0.09`, `mix-blend-screen`, red, ~`30rem–36rem`.
3. **3D tilt cards** — every dashboard screenshot, VSL preview, and client card tilts in 3D with the mouse (`maxTilt 4–12°`, `perspective 1000px`), with a **mouse-following red gradient border glow** and a soft red spotlight overlay.
4. **Animated scaling line chart** (WebGL/GSAP) — an SVG/3D revenue line chart that "draws itself" on scroll and pulses with red glow (`chartLinePulse` keyframes).
5. **Aurora / ambient glows** — large blurred red radial gradients that drift slowly (`glow-drift`, `glow-pulse` keyframes) behind sections.
6. **Grid overlays** — faint white grid lines (`rgba(255,255,255,0.035)`, 48px cells) masked radially from the top, layered under content for a "trading floor" tech aesthetic.

---

## 5. MOTION & ANIMATION SPEC (ReactBits-style polish)

Every component should feel premium and tactile:

- **Smooth scroll:** Lenis-style smooth scrolling synced 1:1 with GSAP ScrollTrigger (single ticker, `lerp ~0.09`, `wheelMultiplier ~1.05`). Anchor links scroll smoothly with an `-80px` nav offset.
- **Headline reveals:** SplitText — words/chars rise from below (`yPercent 110 → 0`, `ease: expo.out`) inside `overflow-hidden` line masks, staggered `0.05–0.06s`, triggered on scroll once.
- **Section entrances:** `FadeContent` — elements fade up 40px with an 8px blur to clear, on scroll, once.
- **Counters:** numbers count up when scrolled into view (`CountUp`, duration ~2s, eased `1-(1-t)^3`, thousands separators).
- **Gradient text:** headlines animate a flowing red gradient (`backgroundPosition` driven by rAF, speed ~6–8).
- **Spotlight cards:** a red radial spotlight follows the cursor inside cards (`radial-gradient(360px circle at Xpx Ypx)`), opacity 0→1 on hover, with spring smoothing.
- **Glare hover:** a white radial glare (`160px`) sweeps with the cursor over video tiles.
- **Click spark:** clicking primary CTAs bursts a circle of red/white sparks.
- **Custom cursor:** a custom cursor replaces the OS one — morphs on hover states ("play", "view", "book" labels) over CTAs, videos, and cards.
- **Marquees:** infinite logo/creator marquees (42s linear, seamless `-50%` translate), plus hover glow on logos.
- **Scroll progress bar:** thin red bar at the top tracking scroll progress.
- **Button shine:** every primary CTA has a diagonal white shine that sweeps across on hover.
- **Respect reduced motion:** all animations collapse to static when `prefers-reduced-motion: reduce`.
- **Noise overlay:** a subtle film-grain noise layer sits above everything (opacity ~4%) for cinematic texture.

---

## 6. PAGE STRUCTURE & SECTIONS

### HOMEPAGE (`/`)

1. **Announcement bar** — red strip, marquee/rotating urgency messages ("Booking new clients", "90-Day Guarantee").
2. **Sticky glass nav** — logo left; links: Acquisition Systems, 9-Figure Operators, Short Creatives, Campaign Results, Media Library, Book Strategy Call (red pill button). Mobile: full-screen overlay menu with staggered link reveals. Lenis scroll lock on open.
3. **HERO (above the fold)** — [the 3D canvas described in §4]:
   - Live status badge: pulsing red dot + "DFY CLIENT ACQUISITION SYSTEM" + "90-DAY GUARANTEE" chip (pulse-ring).
   - Eyebrow: "We Install Our Proprietary **Scale With Ads™** [animated gradient] System".
   - H1: "Client Acquisition System Into Your Business".
   - Red gradient subheadline: "Double Your Revenue Within The Next 90 Days…".
   - Body: "Or we'll continue working for you at no management fee until we do. Backed by a written agreement."
   - Stat pills (count up): $50M+ META ADS SPENT · 12 YRS EXPERIENCE · 90 DAYS REV TARGET · $10K+ MINIMUM.
   - CTAs: **[BOOK YOUR FREE CALL]** (red, shine + click spark, → /book) + [Explore Acquisition Systems] (outline, → #systems).
   - Proof tagline: Shield icon "100% Asset Ownership · Written Agreement · No Lock-ins".
   - **Right: 3D-tilting VSL card** — 16:10 video thumbnail (cover image), pulsing red play button, "WATCH 2-MIN VSL OVERVIEW" badge, bottom "Scale With Ads™ Playbook / $50M+ Meta Spend Framework", floating metric chips (3.32x ROAS, 13,630+ Offers). Click opens a full-screen video lightbox (custom `<video>` or MP4 iframe).
4. **Logo marquee** — "TRUSTED BY 1,000+ BRANDS & 9-FIGURE OPERATORS" with two counter-scrolling rows of white inverted logos.
5. **Scaling chart section** — animated revenue growth line chart that draws on scroll with glowing red line + drifting grid.
6. **PROVEN CAMPAIGN RESULTS (#results)** — dark section:
   - Headline: "Real Campaigns. **Real Tracked Revenue.**" [gradient].
   - Metric cards (tilt + count up): $847,000+ TRACKED REVENUE · 3.32x ROAS · 13,630+ OFFERS CONVERTED · $50M+ META ADS MANAGED.
   - Two live dashboard screenshots (expandable collapsed → expanded, animated height), "VIEW FULL PROOF" buttons opening a lightbox, "SEE MORE RESULTS" toggle button.
   - Bottom CTA: "BOOK YOUR FREE STRATEGY CALL".
7. **SHORT CREATIVE ADS (#shorts)** — filter tabs (All / Solar / MVA & Legal / HVAC & Home / Coaching & VSL) filtering a grid of **autoplaying muted 9:16 short-form video tiles** (aspect 9/16, IntersectionObserver play/pause, mute toggle, view counts, hover play icon, glare effect). Click opens a lightbox with controls + in-modal booking CTA.
8. **Trust bar (light section)** — white background; stat cards (SpotlightCard + CountUp): 12+ Years · $50M+ Managed · 90 Days Guarantee · 100% DFY.
9. **CAPABILITIES (Agency help)** — accordion rows (01–05) that expand on hover with inline image thumbnails: Social Ads & Performance Media · Creative Strategy & Disruptive UGC · Paid Funnel & CRO · TikTok Shop & Short Form · Influencer Acquisition. Each expands benchmark metrics.
10. **SYSTEMS (#systems)** — tab switcher (Meta Ads System / Done-For-You Lead Pilot / Agency 1:1 Mastermind) driving an animated bento: left = 3D-tilt VSL cover card, right = title, description, feature checklist, stats, "EXPLORE THIS SYSTEM" + "WATCH OVERVIEW".
11. **9-FIGURE OPERATORS (#clients, light)** — filterable marquee of client cards (4:5 photos, name, badge, "View Profile") → click opens a profile modal with case-study CTAs.
12. **Problem / Difference / Steps / Ownership / Training / Comparison** sections — pain-point framing ("Stop guessing…"), how the system differs from an agency, step-by-step process, asset ownership, and what's included in training.
13. **FINAL CTA (solid red band)** — glow + grid texture, "Ready To Build A Predictable Client Acquisition System?", chips ("Stop guessing / Stop relying on referrals / Stop switching agencies"), white CTA with shine → /book, outline "See How It Works".
14. **Footer (dark)** — pre-footer red bar with booking link, logo, 4 link columns (Navigate / Systems / Legal), copyright, "For $10K+/month businesses only", red bottom accent line.

### SUBPAGES
- **/book** — booking/application page (light theme): offer recap, minimums, guarantee, booking CTA.
- **/metads** — "Meta Ads That Sell" system deep-dive.
- **/leadpilot** — "Done-For-You Lead Pilot" — full DFY installation offer.
- **/privatemastermind** — "Agency 1:1 Growth Mastermind".
- **/medialibrary** — filterable media library (Videos / GIFs / Images tabs) of client proof.

---

## 7. MICRO-INTERACTIONS & UI DETAILS

- **Buttons:** pill, uppercase, bold; primary = solid red with `0 12px 40px rgba(237,28,36,0.6)` glow + shine sweep; secondary = glass outline `border-white/20`.
- **Cards:** `rounded-2xl`, glass surface `rgba(18,18,22,0.7)` + `backdrop-blur`, hairline white border, hover → red border + red glow shadow + `-4px` lift.
- **Badges:** pill, `bg-white/5`, hairline border, red dot with pulsing glow.
- **Dividers:** `border-white/10` hairlines; sections separated by `border-b border-zinc-800`.
- **Focus states:** red outline `2px` with 2px offset.
- **Scrollbar:** thin, red gradient thumb on near-black track.

---

## 8. BRAND VOICE & COPY TONE

Confident, results-first, zero fluff. Uppercase micro-labels. Direct benefit statements. Fear-of-missing-out but trustworthy (guarantees "in writing", "you own everything", "no lock-ins"). Numbers everywhere: `$50M+`, `3.32x`, `13,630`, `90 days`, `$10K minimum`.

---

## 9. TECHNICAL STACK

- **Framework:** Next.js (App Router) + React + TypeScript + Tailwind CSS v4.
- **3D/WebGL:** three.js (Vanta background or custom shaders) for hero.
- **Animations:** GSAP + ScrollTrigger + SplitText plugin; framer-motion for UI micro-interactions; Lenis for smooth scroll.
- **Icons:** lucide-react.
- **Responsive:** mobile-first; hide 3D canvas & custom cursor on touch devices.
- **Accessibility:** semantic landmarks, aria-hidden on decorative layers, `prefers-reduced-motion` support, keyboard-focusable modals closed with Escape.

---

## 10. ACCEPTANCE CRITERIA

1. Scrolls buttery-smooth (Lenis) with all reveals/parallax locked to scroll position.
2. Hero has a live 3D scene + 3D Meta logo watermark.
3. Every section heading animates with masked word reveals.
4. Red is the only accent; dark background everywhere except the two light sections.
5. All stats count up on scroll; all numbers accurate to the brief.
6. Tilt cards, spotlight cards, glare hovers, and click sparks work on hover/click.
7. VSL video opens in a lightbox; short-form videos autoplay muted and pause off-screen.
8. Custom cursor morphs on interactive elements.
9. Reduced-motion users get a fully static, readable experience.
10. Passes Lighthouse performance (3D canvas hidden on mobile) and a production build with zero TypeScript errors.
