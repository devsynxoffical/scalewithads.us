# SEO changelog: scalewithads.us

Baseline for this round: Google Search Console, 28 days to 21 Nov 2026: 79 impressions, 0 clicks, average position 44. "vsl meta ads" 7.3 and "meta vsl" 8.7 (shown for /metads, which redirects to /services). "mva leads" 82.0 (shown for /personal-injury-lead-generation).

## 2026-11-23: Top 10 push (round 1)

| Change | Page | Target keywords | Before | After | How to validate |
|---|---|---|---|---|---|
| Meta VSL ads section (H2, 5-step process, example from the $847K case study) and FAQ with FAQPage schema | /services | vsl meta ads, meta vsl, meta ads agency | No VSL section or FAQ on the redirect target of /metads | Section and 5 FAQs live | Position for "vsl meta ads" and "meta vsl" (goal: top 5) |
| Legal pages linked from the homepage (new "Lead generation for law firms" section) and /services (related cards now include workers comp and mass tort) | /, /services | mass tort leads, workers comp leads, car accident leads, facebook ads for lawyers, mva leads | Legal pages linked only from the menu, footer and each other | 6 legal cards on the homepage, 6 legal cards on /services | Indexing state of the 4 legal pages; internal link count |
| "MVA leads" FAQ on the PI page retargeted to "personal injury leads"; "buying MVA leads" FAQ renamed | /personal-injury-lead-generation | personal injury leads, personal injury lead generation | PI page shown for "mva leads" (82.0) and targeted it in an FAQ | "mva leads" targeted only by /exclusive-mva-leads | Which URL Google shows for "mva leads" |
| New article: How Much Do MVA Leads Cost? | /blog/how-much-do-mva-leads-cost | how much do mva leads cost | No page | Live, links to /exclusive-mva-leads, /car-accident-leads, /work | Impressions for MVA cost queries |
| New article: How to Get Workers' Comp Leads | /blog/how-to-get-workers-comp-leads | workers comp leads (supporting) | No page | Live, links to /workers-comp-leads, /mass-tort-leads | Impressions; links into /workers-comp-leads |
| Em dash removed from visible text | /services | | 1 em dash | 0 | grep |

Not changed: sitewide footer links to sister sites (none exist; the footer only links to the Facebook group and WhatsApp). Disavow file: no backlink export is available in this repo or session, so docs/disavow.txt was not generated.

## 2026-11-23: Content round (5 pages, from the DEVSYNX content brief)

/services and /personal-injury-lead-generation were also changed earlier today (round 1). The brief names both pages, so the copy, FAQs and meta were updated again. Layout, components and section order are unchanged on all 5 pages.

| Page | Target keywords | Before | After |
|---|---|---|---|
| /services | meta ads agency, best meta ads agency, facebook ads agency | Title "Meta Ads Agency for Lead Generation"; H1 "Meta Ads Agency services."; 5 FAQs; FAQPage schema only | Title "Meta Ads Agency for Client Acquisition"; H1 "Meta Ads Agency Services for Predictable Client Acquisition"; new copy in the 4 pillars and the VSL section; industry intro with links to /facebook-ads-for-lawyers, /exclusive-mva-leads and /personal-injury-lead-generation; 7 FAQs; Service + FAQPage schema |
| /facebook-ads-for-lawyers | facebook ads for lawyers, law firm facebook ads, can lawyers advertise on facebook | Title "Facebook Ads for Lawyers & Law Firms"; 6 FAQs | Title matches H1 "Facebook Ads for Lawyers That Bring Signed Cases"; proof intro, case-type cards, screening, cost and steps copy rewritten; in-text links to all 5 legal pages; 6 new FAQs |
| /personal-injury-lead-generation | personal injury leads, personal injury lead generation, exclusive personal injury leads | Title "Personal Injury Lead Generation With Facebook Ads"; 7 FAQs | Title "Personal Injury Leads From Facebook and Instagram"; H1 "...With Facebook and Instagram"; new copy in proof, case types, exclusive vs shared, how it works and who it's for; links to /exclusive-mva-leads, /car-accident-leads, /facebook-ads-for-lawyers, /blog/how-much-do-mva-leads-cost; 5 FAQs |
| /mass-tort-leads | mass tort leads, what is a mass tort, mass tort lead generation | Title "Mass Tort Leads From Facebook & Instagram Ads"; 6 FAQs | Title matches H1; "What is a mass tort?" paragraph near the top; criteria, screening and cost copy rewritten, still states no mass tort results are published; 5 FAQs |
| /exclusive-mva-leads | mva leads, exclusive mva leads, mva leads for attorneys | 6 FAQs; older description | New description; proof intro, three ways, cost, flow, accident types and ownership copy rewritten; link to /blog/how-much-do-mva-leads-cost and /facebook-ads-for-lawyers; 6 new FAQs |
| All legal pages (template, MVA, PI) | | No state bar line near the forms | "Advertising rules for attorneys vary by state. All campaigns are built to follow your state bar's advertising rules." next to every lead form |
| Sitewide footer and CTA sections | | 3 em dashes | 0 |

Checks after the build: each page has 1 H1, a unique title under 60 characters and description under 155, a canonical, valid Service + FAQPage JSON-LD that matches the visible FAQs word for word, no em dashes, no horizontal overflow at 390px.

## 2026-11-23: /privatemastermind/coaching layout and copy fix

| Before | After |
|---|---|
| H1 said "coaching" but the chip, intro, stats, buttons and list described Lead Pilot done-for-you ads ($10K minimum, revenue doubling) | The whole page is about 1-on-1 coaching: chip, intro, stats ($50M+ spent, 12 years, 1-on-1, all industries), buttons and a 6-card "What we cover in your 1-on-1 calls" grid |
| Oversized H1 (4 lines on desktop), single-column list, banner text hidden under the menu on mobile, 1 em dash | Smaller H1, 3-column card grid, banner visible on mobile, 0 em dashes; links to /leadpilot and /privatemastermind |

## 2026-11-23: /privatemastermind content replaced (owner request)

| Before | After |
|---|---|
| Hero: "We Will Install Our Proprietary ScaleWithAds Client Acquisition System", "Or We'll Keep Working With You For Free Until You Do", "Done-With-You. 1-on-1." and 4 stats ($50M+, 12 YRS, $10K+ minimum, 90 days) | Removed; hero keeps the eyebrow, H1 and video |
| "8 Core Pillars" curriculum and "Is This Private Mastermind Right For You?" qualification matrix | AI Client Acquisition Mastermind: program introduction, 4 core benefits, 6-week curriculum (12 classes, expandable topic lists), apply CTA, 6 differentiators, 14 implementation resources, who it is for, graduate support |
| 5 FAQs about the 90-day program and guarantee | 7 FAQs about the 6-week mastermind; FAQPage schema matches the visible text |
| Meta description mentioned "8 core growth pillars" | "A 6-week Meta Ads mastermind for agencies: 12 live classes on targeting, AI ads, tracking, scaling and profitability, applied to your own campaigns." |

## 2026-11-23: /privatemastermind program introduction made interactive

| Before | After |
|---|---|
| Centered heading and 2 paragraphs | Two-column layout: heading, intro, 6 / 12 / 14 stat tiles (weeks, live classes, resources) and an apply button, next to a clickable 6-week journey (week tabs, progress bar, each week's theme and classes, link to the full curriculum). Same copy, no new claims. |
- Section headings on /privatemastermind set to uppercase to match the rest of the site (font check).

## 2026-11-24: 12h monitor, /workers-comp-leads

Data: Search Console 28 days to 23 Nov. /workers-comp-leads 13 impressions, average position 23.4 (5 the previous run). New queries in striking distance: "how to find workers comp leads" 13.0, "lawyer workers comp leads" 13.0, "getting workers compensation leads" 17.0, "screened workers comp leads" 20.0; "workers comp leads" 23.0 -> 17.7. Page last changed 20 Nov; it is a target page and the data calls for the change.

| Before | After |
|---|---|
| 6 FAQs, none answering how lawyers find workers comp leads | New FAQ "How do lawyers find workers comp leads?" (FAQPage schema updated) |
| Qualification intro did not say leads are screened; no link to the workers comp article (unknown to Google) | Intro starts "Every lead is screened before intake" and links to /blog/how-to-get-workers-comp-leads |

## 2026-11-24: AEO and GEO plan (scalewithads.us part, weeks 1, 2 and 4)

7-day rule: /services, /facebook-ads-for-lawyers, /personal-injury-lead-generation, /mass-tort-leads, /exclusive-mva-leads, /workers-comp-leads and the homepage were edited on 23 or 24 Nov, so only titles, meta and FAQs were changed on them now. Answer boxes, "In short" lines, cost tables, "Key facts" blocks and "Updated" dates on those pages are scheduled for 1 Dec.

| Change | Page | Before | After |
|---|---|---|---|
| Brand description sentence (Organization and WebSite schema, llms.txt) | Sitewide | "done-for-you client acquisition agency ... 90-day double-revenue guarantee" | "Scale With Ads™ is a Meta ads agency that runs Facebook and Instagram campaigns for law firms and service businesses, including exclusive personal injury, MVA, mass tort and workers comp leads." |
| Organization knowsAbout | Sitewide | No mass tort or workers comp | Adds mass tort and workers compensation lead generation |
| robots.txt AI crawlers | Sitewide | Already allows GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot and others | No change needed |
| llms.txt | /llms.txt | Old mastermind entry, roofing/HVAC/solar listed as verticals, no published legal results, 2 em dashes | Brand sentence, 6-week mastermind and coaching, dated legal results, new guide, sister-site verticals removed, 0 em dashes |
| FAQs "What is a mass tort lead?" and "How does mass tort lead generation work?" (steps) | /mass-tort-leads | 5 FAQs | 7 FAQs, schema matches |
| New guide with answer box, comparison table, 8 criteria and 5 FAQs | /blog/how-to-choose-a-legal-lead-generation-company | No page | Live; links to PI, MVA, mass tort, workers comp, lawyers and MVA cost pages |
| Table block for blog posts | Blog template | Not available | Available |
| Em dashes in visible text | Homepage and shared sections | 40+ across shared components | 0 on every page |
| Home title | / | 60 characters | 59 characters |

## 2026-11-25: SEO, AEO and GEO plan, week 1 (owner decisions on 25 Nov)

| Change | URL | Target keywords | Before | After |
|---|---|---|---|---|
| Homepage retitle | / | facebook advertising agency, facebook ads agency | "Facebook Ads Agency for Client Acquisition" | "Facebook Ads Agency for Personal Injury Law Firms"; description now leads with "Facebook advertising agency for personal injury law firms" |
| New pillar page | /personal-injury-marketing | personal injury lawyer marketing, personal injury marketing, PI law firm marketing, PI marketing agency, PI advertising | No page | 1,579 words: answer block, 4-part system, channel table, case types, process, proof, pricing model, compliance, 6 FAQs |
| New hub page | /law-firm-marketing | law firm marketing, lawyer marketing, attorney marketing, legal marketing agency, law firm advertising | No page | 1,480 words: answer block, funnel, channel table, practice areas, agency checklist, markets, proof, pricing model, 6 FAQs |
| New page | /legal-lead-generation | legal lead generation, lawyer leads, attorney leads, law firm leads, lead generation for lawyers | No page | 1,368 words: answer block, lead source table, qualified lead criteria, lead types, process, buyer questions, proof, pricing model, 6 FAQs |
| Sitemap, footer and llms.txt | Sitewide | | 26 sitemap URLs | 29 URLs; footer Services links to the 3 new pages; llms.txt has a Key facts block (who we serve, case types, pricing model, setup, compliance) |

Already done before this plan: /facebook-ads-for-roofing-companies 301 to roofingsystems.co (23 Nov), /metads 301 to /services. Kept by owner decision: /blog/vsl-script-structure and /blog/low-ticket-offer-funnel. Offer pages (/metalto, /paidpilot, /leadpilot, /medialibrary) already have clear titles and descriptions; kept indexed.

Blocked by the 7-day rule (scheduled): legal page upgrades (/personal-injury-lead-generation, /exclusive-mva-leads, /car-accident-leads, /workers-comp-leads, /mass-tort-leads, /facebook-ads-for-lawyers) and the /mvaleadgeneration 301 merge, on 1 Dec. Person schema bios need owner text. State bar rule links could not be verified from this environment (americanbar.org unreachable), so no rule is cited by number.
