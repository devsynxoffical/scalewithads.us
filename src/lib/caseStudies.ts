/**
 * Case studies built from client results we published on Facebook.
 * Every figure here is read directly from the source screenshot in
 * /public/workproof (the `file` field). Derived numbers (rates, averages)
 * are calculated from those figures only. Never add numbers that are not
 * visible in the screenshot.
 */
export type CaseStudy = {
  slug: string;
  /** Screenshot file name in /public/workproof (PNG name; served as .webp). */
  file: string;
  /** Short label used on proof cards. */
  cardTitle: string;
  title: string;
  /** Meta title, under ~60 characters (the layout adds no suffix). */
  metaTitle: string;
  description: string;
  primaryKeyword: string;
  industry: string;
  client: string;
  period: string;
  /** ISO date of the original post. */
  posted: string;
  headline: { value: string; label: string };
  stats: { value: string; label: string }[];
  summary: string;
  challenge: string[];
  setup: string[];
  table: [string, string][];
  insights: string[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
  /** Quote from the original post, as published. */
  quote: string;
};

export const PLATFORM = "Meta Ads (Facebook & Instagram)";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "roofing-leads-3-75-cost-per-lead",
    file: "Screenshot 2026-08-17 at 5.46.06 PM.png",
    cardTitle: "25 roofing leads at $3.75 each",
    title: "Roofing Leads at $3.75 Each: 25 Form Leads From $93.82 in One Day",
    metaTitle: "Roofing Leads at $3.75 Each: Meta Ads Case Study",
    description:
      "How a roofing campaign produced 25 Facebook lead-form leads at $3.75 per lead from $93.82 in one day, using six ads on $8 daily budgets.",
    primaryKeyword: "roofing leads cost per lead",
    industry: "Roofing",
    client: "Roofing company",
    period: "June 21, 2026 (single day)",
    posted: "2026-06-24",
    headline: { value: "$3.75", label: "Cost per roofing lead" },
    stats: [
      { value: "25", label: "Form leads" },
      { value: "$3.75", label: "Cost per lead" },
      { value: "$93.82", label: "Ad spend" },
      { value: "$1.02", label: "Cost per link click" },
    ],
    summary:
      "On a single day, one roofing campaign spent $93.82 across six ads and produced 25 lead-form leads at an average of $3.75 each. Every ad ran on a small $8 daily budget, which shows how far a well-built roofing offer can go before any scaling happens.",
    challenge: [
      "Roofing is one of the most expensive home-service categories to advertise in. Many roofing company owners we speak to are paying far more than they should per lead, often while buying shared leads that several competitors call at the same time.",
      "The goal of this campaign was simple: prove that exclusive homeowner leads could be generated cheaply from the company's own ad account before increasing spend.",
    ],
    setup: [
      "One campaign with six ads, each on an $8.00 daily budget.",
      "Facebook and Instagram instant lead forms (\"Leads (Form)\" results), so homeowners could request an inspection without leaving the app.",
      "Several creative variations tested side by side, so the budget could later be moved to the ads producing the cheapest leads.",
    ],
    table: [
      ["Date range", "June 21, 2026"],
      ["Ads running", "6 (5 produced leads that day)"],
      ["Daily budget per ad", "$8.00"],
      ["Amount spent", "$93.82"],
      ["Leads (form)", "25"],
      ["Cost per lead", "$3.75"],
      ["Cost per lead, best ad", "$2.66 (6 leads)"],
      ["CPC (cost per link click)", "$1.02"],
      ["CPM (cost per 1,000 impressions)", "$29.16"],
    ],
    insights: [
      "Five of the six ads produced leads, at between $2.66 and $3.88 each. That spread is narrow, which suggests the offer itself was doing most of the work rather than one lucky creative.",
      "The sixth ad spent $15.19 without a lead. On an $8 daily budget that is a small, cheap signal, and exactly why testing several ads on small budgets matters: weak ads are found before they cost real money.",
      "A $29.16 CPM is a normal cost to reach homeowners on Meta. The low cost per lead came from conversion, not from cheap impressions.",
    ],
    takeaways: [
      "Test several roofing ads on small, equal daily budgets before scaling.",
      "Instant lead forms reduce friction for homeowners requesting an inspection.",
      "Judge ads on cost per lead and lead quality, then move budget to the winners.",
      "One day is a snapshot, not a guarantee: costs vary by market, season and offer.",
    ],
    faqs: [
      {
        q: "How much do roofing leads cost on Facebook?",
        a: "It depends on the market, offer and follow-up. In this campaign, leads cost $3.75 on average over one day; across our published roofing results, costs have ranged from under $5 to around $20 per lead. These are past results, not a guarantee.",
      },
      {
        q: "Were these leads exclusive?",
        a: "Yes. The ads ran in the roofing company's own ad account, so every lead went only to that company instead of being sold to several roofers.",
      },
      {
        q: "Why use an $8 daily budget per ad?",
        a: "Small, equal budgets let you test several ads at once cheaply. Once you see which ads produce the cheapest qualified leads, you move more budget to them.",
      },
    ],
    quote: "Roofing company owners, how much are you paying per lead right now?",
  },
  {
    slug: "roofing-marketing-agency-664-leads",
    file: "Screenshot 2026-08-17 at 5.54.23 PM.png",
    cardTitle: "664 leads in 8 days for a roofing agency",
    title: "664 Leads in 8 Days for a Roofing Marketing Agency at $4.51 Each",
    metaTitle: "664 Leads in 8 Days for a Roofing Marketing Agency",
    description:
      "A roofing marketing agency generated 664 leads from roofing business owners in 8 days: $2,996 in Meta ad spend, $4.51 per lead, 2.13% CTR.",
    primaryKeyword: "roofing marketing agency lead generation",
    industry: "Roofing marketing agency (B2B)",
    client: "Agency selling marketing services to roofing business owners",
    period: "June 1 – June 8, 2026",
    posted: "2026-06-08",
    headline: { value: "664", label: "Leads in 8 days" },
    stats: [
      { value: "664", label: "Leads" },
      { value: "$4.51", label: "Cost per lead" },
      { value: "$2,996", label: "Ad spend" },
      { value: "2.13%", label: "Link click-through rate" },
    ],
    summary:
      "One of our clients is an agency that sells marketing services to roofing business owners. In the first eight days of June, its campaigns produced 664 leads from $2,996.01 in ad spend, an average of $4.51 per lead.",
    challenge: [
      "Agencies that sell to roofers face a harder audience than homeowners: busy business owners who are approached by marketing companies constantly. Getting them to raise their hand at a low cost requires a specific offer and creative that speaks their language.",
      "The agency needed a steady flow of roofing-business-owner leads for its own sales team, at a cost that left room for profit on every client it signed.",
    ],
    setup: [
      "Six ad sets running in parallel, so audiences and creative could be compared directly.",
      "Traffic sent to a landing page (2,072 landing page views from 2,229 link clicks).",
      "Leads tracked per ad, with budget concentrated on the strongest performer.",
    ],
    table: [
      ["Date range", "June 1 – June 8, 2026"],
      ["Ad sets", "6"],
      ["Amount spent", "$2,996.01"],
      ["Leads", "664"],
      ["Cost per lead", "$4.51"],
      ["Link clicks", "2,229"],
      ["Landing page views", "2,072"],
      ["CTR (link click-through rate)", "2.13%"],
      ["CPC (cost per link click)", "$1.34"],
      ["CPM (cost per 1,000 impressions)", "$28.68"],
      ["Best ad", "397 leads from $2,006.70 ($5.05 per lead)"],
    ],
    insights: [
      "About 93% of link clicks turned into landing page views (2,072 of 2,229), so the page loaded quickly and very few clicks were lost.",
      "Roughly 32% of landing page visitors became leads (664 of 2,072). For a cold B2B audience, that points to an offer that matched what roofing owners wanted.",
      "The best ad produced 397 of the 664 leads. Concentrating budget on a proven winner, while smaller ads kept testing, is what kept the overall cost per lead at $4.51.",
    ],
    takeaways: [
      "Agencies that serve roofers can use the same Meta Ads system to fill their own pipeline.",
      "A fast landing page protects ad spend: nearly every click became a page view.",
      "Let one winning ad carry the budget and keep testing challengers alongside it.",
    ],
    faqs: [
      {
        q: "Do you work with roofing marketing agencies?",
        a: "Yes. This client is an agency that sells marketing to roofing business owners. We build and run the campaigns that generate its leads, and we also help agencies deliver results for their own roofing clients.",
      },
      {
        q: "What was the cost per lead?",
        a: "$4.51 on average: 664 leads from $2,996.01 in ad spend between June 1 and June 8, 2026.",
      },
      {
        q: "Who were the leads?",
        a: "Roofing business owners interested in the agency's marketing services, collected through a landing page.",
      },
    ],
    quote:
      "This is how June is looking. One of our roofing agency clients selling marketing services to roofing business owners.",
  },
  {
    slug: "227-roofing-leads-14-cpl",
    file: "Screenshot 2026-08-17 at 5.55.25 PM.png",
    cardTitle: "227 roofing leads at $14 CPL",
    title: "227 Verified Roofing Leads at $14 Cost per Lead in 28 Days",
    metaTitle: "227 Roofing Leads at $14 CPL in 28 Days | Case Study",
    description:
      "How a roofing company got 227 leads in 28 days from $3,215 in Meta ad spend at $14.16 per lead, by shifting budget to the ads that converted.",
    primaryKeyword: "roofing leads case study",
    industry: "Roofing",
    client: "Roofing company",
    period: "28 days",
    posted: "2026-05-29",
    headline: { value: "227", label: "Roofing leads in 28 days" },
    stats: [
      { value: "227", label: "Leads" },
      { value: "$14.16", label: "Cost per lead" },
      { value: "$3,215", label: "Ad spend" },
      { value: "2.33%", label: "Link click-through rate" },
    ],
    summary:
      "Over 28 days, this roofing campaign produced 227 leads from $3,215.21 in ad spend, an average cost per lead of $14.16. The result came from finding a few strong ads early and moving the budget to them.",
    challenge: [
      "Most roofing companies we talk to are burning cash on junk leads while blaming the market. The real issue is usually an offer that attracts the wrong people and budget that stays on ads that do not convert.",
      "This roofing company needed a lower, predictable cost per lead without lowering lead quality.",
    ],
    setup: [
      "Multiple ads tested at the same time, each tracked by cost per lead.",
      "Traffic sent to a landing page (745 landing page views from 938 link clicks).",
      "Budget concentrated on the ads producing leads at roughly $11–$19, instead of those costing $20–$100+.",
    ],
    table: [
      ["Date range", "28 days"],
      ["Amount spent", "$3,215.21"],
      ["Leads", "227"],
      ["Cost per lead", "$14.16"],
      ["Link clicks", "938"],
      ["Landing page views", "745"],
      ["CTR (link click-through rate)", "2.33%"],
      ["Best ad", "146 leads from $1,596.43 ($10.93 per lead)"],
    ],
    insights: [
      "Individual ads ranged from $10.93 to over $100 per lead. Without moving budget, the expensive ads would have pulled the average far above $14.",
      "The best ad delivered 146 of the 227 leads at $10.93 each, nearly two-thirds of the result from under half the spend.",
      "About 30% of landing page visitors became leads (227 of 745), a strong conversion rate for homeowner traffic from social media.",
    ],
    takeaways: [
      "The spread between your best and worst ads is where most wasted spend hides.",
      "Review cost per lead per ad, not only the campaign average.",
      "A focused landing page turns clicks into leads: here, about 3 in 10 visitors converted.",
    ],
    faqs: [
      {
        q: "What is a good cost per lead for roofing?",
        a: "It varies by market and offer. This campaign averaged $14.16 per lead over 28 days. What matters most is how many leads turn into inspections and signed jobs.",
      },
      {
        q: "How did the campaign keep the cost per lead down?",
        a: "By tracking each ad's cost per lead and moving budget to the strongest ads. The best ad alone produced 146 leads at $10.93 each.",
      },
      {
        q: "How long did it take?",
        a: "The figures cover 28 days of spend: $3,215.21 for 227 leads.",
      },
    ],
    quote: "Most roofing companies are burning cash on junk leads while blaming the market.",
  },
  {
    slug: "florida-roofing-solar-280-leads",
    file: "Screenshot 2026-08-17 at 5.56.26 PM.png",
    cardTitle: "280 Florida home-service leads in 15 days",
    title: "280 Qualified Roofing, Gutter and Solar Leads in Florida in 15 Days",
    metaTitle: "280 Florida Roofing, Gutter & Solar Leads in 15 Days",
    description:
      "A Florida home-service company got 280 qualified roofing, gutter and solar leads in 15 days from $3,196.79 in Meta ads, at $11.42 per lead.",
    primaryKeyword: "florida roofing leads",
    industry: "Home services: roofing, gutters and solar",
    client: "Florida-based home-service company",
    period: "May 1 – May 15, 2026",
    posted: "2026-05-17",
    headline: { value: "280", label: "Qualified leads in 15 days" },
    stats: [
      { value: "280", label: "Qualified leads" },
      { value: "$11.42", label: "Cost per lead" },
      { value: "$3,197", label: "Ad spend" },
      { value: "2.46%", label: "Link click-through rate" },
    ],
    summary:
      "In the first half of May, a Florida home-service company selling roofing, gutters and solar received 280 qualified website leads from $3,196.79 in Meta ad spend, an average of $11.42 per lead, in one of the toughest markets in the country.",
    challenge: [
      "Florida is one of the most competitive home-service markets for paid social. Advertising costs are high, and homeowners see roofing and solar ads constantly.",
      "The company needed qualified leads across three services at once, without letting costs climb in a crowded market.",
    ],
    setup: [
      "Five campaigns and four ad sets covering roofing, gutters and solar.",
      "Short video ads, with traffic sent to website lead forms (\"Website Leads\").",
      "Each ad tracked by cost per lead, with budget concentrated on the strongest creative.",
    ],
    table: [
      ["Date range", "May 1 – May 15, 2026"],
      ["Market", "Florida"],
      ["Services", "Roofing, gutters, solar"],
      ["Amount spent", "$3,196.79"],
      ["Website leads", "280"],
      ["Cost per lead", "$11.42"],
      ["CTR (link click-through rate)", "2.46%"],
      ["CPM (cost per 1,000 impressions)", "$75.28"],
      ["Best ad", "96 leads from $889.82 ($9.27 per lead)"],
    ],
    insights: [
      "A $75.28 CPM is expensive, more than twice what several of our other roofing campaigns paid. The campaign still reached $11.42 per lead because the ads and pages converted well.",
      "A 2.46% click-through rate shows the video creative stopped the scroll in a market where homeowners see these ads all the time.",
      "The best ad produced 96 leads at $9.27 each, about a third of all leads.",
    ],
    takeaways: [
      "In expensive markets, conversion rate matters more than cheap impressions.",
      "Short video ads can hold a strong click-through rate even in saturated markets.",
      "One system can generate leads for several related home services at once.",
    ],
    faqs: [
      {
        q: "Do Facebook ads work for roofing companies in Florida?",
        a: "They can. This Florida home-service company received 280 qualified leads in 15 days at $11.42 per lead, despite paying a high $75.28 CPM.",
      },
      {
        q: "Can you run ads for solar and gutters as well as roofing?",
        a: "Yes. This campaign covered roofing, gutters and solar for the same company.",
      },
      {
        q: "What does CPM mean?",
        a: "Cost per 1,000 impressions: what you pay for your ads to be shown 1,000 times. A high CPM can still produce cheap leads if the ads convert well.",
      },
    ],
    quote:
      "280 Qualified leads for This Florida Based Home Service Client. 15 days. $3,196 spent. Roofing, gutters, and solar in one of the toughest markets right now.",
  },
  {
    slug: "roofing-marketing-agency-546k-revenue",
    file: "Screenshot 2026-08-17 at 5.57.01 PM.png",
    cardTitle: "$546K won for a roofing agency in 67 days",
    title: "$546,000 in Won Revenue in 67 Days for a Roofing Marketing Agency",
    metaTitle: "$546K in 67 Days for a Roofing Marketing Agency",
    description:
      "A roofing marketing agency won 152 deals and $546.16K in revenue in 67 days, with 975 open opportunities and a 13.49% conversion rate.",
    primaryKeyword: "roofing marketing agency case study",
    industry: "Roofing marketing agency",
    client: "Roofing marketing agency",
    period: "March 1 – May 5, 2026 (67 days)",
    posted: "2026-05-07",
    headline: { value: "$546K", label: "Won revenue in 67 days" },
    stats: [
      { value: "$546.16K", label: "Won revenue" },
      { value: "152", label: "Deals won" },
      { value: "975", label: "Open opportunities" },
      { value: "13.49%", label: "Conversion rate" },
    ],
    summary:
      "Between March 1 and May 5, 2026, a roofing marketing agency we work with closed 152 deals worth $546.16K, with another 975 opportunities still open in its CRM. Its pipeline converted at 13.49%.",
    challenge: [
      "Lead volume alone does not pay the bills. Many agencies generate leads but lose them between the ad and the sale: slow follow-up, no tracking and no clear view of which campaigns produce revenue.",
      "This agency needed its ads, follow-up and CRM working as one system so it could see won revenue, not just leads.",
    ],
    setup: [
      "Every inquiry tracked in the agency's CRM as an opportunity.",
      "Opportunities followed from open to won, so the agency can see revenue per period, not just leads.",
      "Our system pairs Meta Ads with CRM tracking and instant follow-up, so new leads are contacted while they are still interested.",
    ],
    table: [
      ["Date range", "March 1 – May 5, 2026"],
      ["Total opportunities", "1.13K"],
      ["Open opportunities", "975"],
      ["Deals won", "152"],
      ["Conversion rate", "13.49%"],
      ["Won revenue", "$546.16K"],
      ["Average won deal (calculated)", "About $3,590"],
    ],
    insights: [
      "152 won deals worth $546.16K works out to an average of about $3,590 per deal.",
      "With 975 opportunities still open, the pipeline held far more potential revenue at the end of the period than had already been closed.",
      "A 13.49% conversion rate is measured on every opportunity in the pipeline, including those still being worked, so it understates what the closed cohort converted at.",
    ],
    takeaways: [
      "Track ads through to won revenue, not just leads.",
      "Fast, consistent follow-up is what turns a full pipeline into closed deals.",
      "An open pipeline is future revenue: keep nurturing it after the first contact.",
    ],
    faqs: [
      {
        q: "How much revenue did the agency generate?",
        a: "$546.16K in won revenue from 152 deals between March 1 and May 5, 2026, according to its CRM dashboard.",
      },
      {
        q: "What does the 13.49% conversion rate mean?",
        a: "152 won deals out of about 1,130 total opportunities in the CRM during the period. Many of the 975 open opportunities were still being worked.",
      },
      {
        q: "Do you set up the CRM and follow-up as well as the ads?",
        a: "Yes. We connect Meta Ads to the CRM with instant SMS and email follow-up so every lead is tracked from first contact to closed deal.",
      },
    ],
    quote: "$546,000 in 67 days. 152 deals for a Roofing Marketing Agency. 975 open conversations.",
  },
  {
    slug: "roofing-leads-154-in-15-days",
    file: "Screenshot 2026-08-17 at 5.57.38 PM.png",
    cardTitle: "154 roofing leads at $14.58",
    title: "154 Roofing Leads in 15 Days at $14.58 per Lead",
    metaTitle: "154 Roofing Leads at $14.58 in 15 Days | Case Study",
    description:
      "How a roofing campaign produced 154 Facebook lead-form leads in 15 days from $2,245 in ad spend, at $14.58 per lead instead of $80+.",
    primaryKeyword: "roofing leads facebook ads",
    industry: "Roofing",
    client: "Roofing company",
    period: "April 20 – May 4, 2026",
    posted: "2026-05-05",
    headline: { value: "154", label: "Roofing leads in 15 days" },
    stats: [
      { value: "154", label: "Form leads" },
      { value: "$14.58", label: "Cost per lead" },
      { value: "$2,245", label: "Ad spend" },
      { value: "823", label: "Link clicks" },
    ],
    summary:
      "From April 20 to May 4, 2026, this roofing campaign generated 154 lead-form leads from $2,245.11 in ad spend, an average of $14.58 per lead. Roofing owners we speak to are often paying $80 or more per lead elsewhere.",
    challenge: [
      "Many roofing business owners are paying $80 or more per lead, or getting no results from their ads at all.",
      "This company needed a consistent flow of homeowner leads at a cost that made every inspection profitable.",
    ],
    setup: [
      "Two ad sets with nine ads tested side by side.",
      "Instant lead forms on Facebook and Instagram.",
      "Budget weighted toward the ads that produced the most leads at the lowest cost.",
    ],
    table: [
      ["Date range", "April 20 – May 4, 2026"],
      ["Ad sets / ads", "2 ad sets, 9 ads"],
      ["Amount spent", "$2,245.11"],
      ["Leads (form)", "154"],
      ["Cost per lead", "$14.58"],
      ["Link clicks", "823"],
      ["Best-volume ad", "34 leads from $502.47 ($14.78 per lead)"],
      ["Lowest-cost ad", "8 leads at $7.83 per lead"],
    ],
    insights: [
      "About 19% of link clicks became leads (154 of 823), which is strong for an instant-form campaign aimed at homeowners.",
      "Every one of the nine ads produced leads, at between $7.83 and $20.43 each. No ad was a total loss, so the whole budget worked.",
      "The top three ads produced 87 of the 154 leads, giving clear direction for where to scale next.",
    ],
    takeaways: [
      "If you are paying $80+ per roofing lead, the offer and creative are usually the problem, not the platform.",
      "Testing nine ads at once finds winners quickly without big budgets.",
      "Scale the ads that combine volume with a low cost per lead.",
    ],
    faqs: [
      {
        q: "How much did each roofing lead cost?",
        a: "$14.58 on average: 154 leads from $2,245.11 in ad spend over 15 days.",
      },
      {
        q: "Why are some roofers paying $80+ per lead?",
        a: "Usually because of a weak offer, generic creative, or budget left on ads that do not convert. Testing several ads and moving budget to the winners brings the average down.",
      },
      {
        q: "Can I get the same results?",
        a: "Results depend on your market, offer and follow-up, so we cannot promise the same numbers. On a free strategy call we look at your market and tell you honestly what to expect.",
      },
    ],
    quote:
      "If you're a roofing business owner still paying $80+ per lead or getting zero results from your ads...",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function caseStudyByFile(file: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.file === file);
}

export const proofImageSrc = (file: string) =>
  `/workproof/${encodeURIComponent(file.replace(/\.png$/i, ".webp"))}`;
