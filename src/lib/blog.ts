/**
 * Blog articles. Body blocks are rendered by src/app/blog/[slug]/page.tsx.
 * Inline links use [text](/path). Only use figures that are published elsewhere
 * on this site (e.g. the /metalto case study); never invent statistics.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  /** Meta title (keep under ~60 characters). */
  metaTitle: string;
  description: string;
  category: string;
  datePublished: string; // ISO date
  dateModified: string;
  primaryKeyword: string;
  related: { label: string; href: string };
  /** Shown as a visible FAQ section and marked up as FAQPage. Answers must match the article. */
  faqs: { q: string; a: string }[];
  body: Block[];
};

export const BLOG_AUTHOR = "Scale With Ads™ Team";

export const POSTS: Post[] = [
  {
    slug: "find-hidden-facebook-interests",
    title: "How to Find Hidden Facebook Interests Your Competitors Aren't Targeting",
    metaTitle: "How to Find Hidden Facebook Interests (Step-by-Step)",
    description:
      "A practical workflow for finding hidden Facebook interests in Ads Manager, building tighter interest stacks and testing them without wasting budget.",
    category: "Meta Ads Targeting",
    datePublished: "2026-11-16",
    dateModified: "2026-11-26",
    primaryKeyword: "hidden facebook interests",
    related: { label: "Get exclusive MVA leads", href: "/exclusive-mva-leads" },
    faqs: [
      {
        q: "Can law firms use hidden Facebook interests in their ads?",
        a: "Yes. Law firms can use interest targeting like any advertiser, as long as the ads follow their state bar's advertising rules. Hidden interests help personal injury and MVA campaigns reach people who are not yet targeted by every other firm, and a short screening form keeps lead quality high.",
      },
      {
        q: "What are hidden Facebook interests?",
        a: "They are real, relevant interests in Meta's detailed targeting that sit one or two steps away from the obvious ones for your niche, such as publications, tools, job titles and life situations your buyers share. Fewer competitors target them, so they are often less contested.",
      },
      {
        q: "Is Facebook Audience Insights still available?",
        a: "No. Meta retired the standalone Audience Insights tool in 2021 and removed many sensitive detailed targeting options in 2022. Use the Suggestions and Browse features in Ads Manager instead, and confirm every interest still exists before you use it.",
      },
      {
        q: "How do you test Facebook interest stacks?",
        a: "Group interests into a few themed ad sets, run each with the same creative so the audience is the only variable, give each enough budget to exit the learning phase, and judge them on qualified leads and revenue rather than cost per click.",
      },
      {
        q: "Does Advantage+ audience ignore my interests?",
        a: "Meta treats your interests as suggestions when Advantage+ audience is on and may show ads beyond them. For a clean read on an interest stack, compare it against a test with that option turned off.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Most advertisers in a niche open Ads Manager, type the same obvious keyword into detailed targeting and pick the same handful of interests from the top of the list. That is why those audiences get expensive: everyone in the category is bidding on them. \"Hidden\" Facebook interests are simply the relevant interests that sit one or two steps away from the obvious ones, where fewer competitors are looking.",
      },
      {
        type: "p",
        text: "This guide walks through the workflow our team uses to find them, filter out the irrelevant ones and test them properly. It's the written companion to our [exclusive MVA leads](/exclusive-mva-leads) campaigns, which use the same process for personal injury cases.",
      },
      { type: "h2", text: "What counts as a hidden Facebook interest?" },
      {
        type: "p",
        text: "Meta does not publish a list of \"hidden\" interests. The term describes interests that are real, still available in detailed targeting, and relevant to your buyer, but that rarely show up when you search for your niche's main keyword. They usually fall into a few groups:",
      },
      {
        type: "ul",
        items: [
          "Publications, podcasts, creators and communities your buyers follow.",
          "Tools, software and brands your buyers use in their work or daily life.",
          "Job titles, industries and employers that line up with your customer profile.",
          "Life situations and adjacent hobbies that correlate with the need you solve.",
        ],
      },
      {
        type: "callout",
        title: "A note on what's no longer available",
        text: "Meta retired the standalone Audience Insights tool in 2021 and removed many sensitive detailed targeting options (for example, ones related to health, religion and political beliefs) in 2022. Targeting options also change over time, so treat any \"interest list\" you download as a starting point and confirm every interest still exists in Ads Manager.",
      },
      { type: "h2", text: "Step 1: Start from your buyer, not from your keyword" },
      {
        type: "p",
        text: "Before opening Ads Manager, write down who actually buys from you. What do they read, which brands and tools do they use, what jobs do they do, and what was happening in their life right before they needed you? Twenty minutes with your CRM, sales-call notes and best customers' public profiles gives you far better seed ideas than the search box does.",
      },
      { type: "h2", text: "Step 2: Mine Ads Manager's own suggestions" },
      {
        type: "ol",
        items: [
          "In an ad set, open Detailed targeting and type one seed idea from your list.",
          "Add a relevant interest, then open the Suggestions tab. Meta shows related interests based on what you've already added.",
          "Follow the chain: add a good suggestion, check the new suggestions it unlocks, and note anything that fits your buyer.",
          "Use Browse to explore the category tree around each interest. Related options are often grouped next to each other.",
          "Repeat for every seed on your list, and keep a spreadsheet of every interest with its estimated audience size.",
        ],
      },
      {
        type: "p",
        text: "Several third-party \"interest explorer\" tools speed this up by querying Meta's Marketing API for interest suggestions in bulk. They surface the same interests Meta makes available, just faster, so they're useful for volume but don't unlock anything secret.",
      },
      { type: "h2", text: "Step 3: Filter ruthlessly for relevance" },
      {
        type: "p",
        text: "A long list is easy; a useful list takes judgement. For each interest, ask whether someone with that interest is meaningfully more likely to need your offer than the average person. Remove anything ambiguous: interests that share a name with something unrelated, very broad entertainment categories, and anything that only loosely connects to your buyer. Interests with a tiny estimated audience are also hard to spend on, so group them rather than testing them alone.",
      },
      { type: "h2", text: "Step 4: Build themed interest stacks" },
      {
        type: "p",
        text: "Instead of one giant ad set with fifty interests, group interests into a few themes, for example \"industry publications\", \"tools they use\" and \"life situation\". Each theme becomes its own ad set. That way, when one performs, you know why, and you can expand that theme rather than guessing.",
      },
      {
        type: "ul",
        items: [
          "Keep each stack focused on one idea so results are readable.",
          "Exclude existing customers and recent leads so you're paying for new people.",
          "Watch audience overlap between stacks; heavy overlap makes the ad sets compete with each other.",
          "If you use Advantage+ audience, remember Meta treats your interests as suggestions and may go beyond them, so compare against a test with that option off when you need a clean read.",
        ],
      },
      { type: "h2", text: "Step 5: Test with the same creative and judge on lead quality" },
      {
        type: "p",
        text: "Run every stack with the same ads, so the only variable is the audience. Give each one enough budget to exit the learning phase before you decide. Then judge on what matters to the business, not just cost per click: cost per qualified lead, booked calls and closed revenue. A cheap audience that produces unqualified leads is not a win.",
      },
      { type: "h2", text: "Step 6: Expand winners and refresh the list" },
      {
        type: "p",
        text: "When a stack works, go back to Step 2 with its best interests as new seeds; the suggestions they unlock are often just as strong. Revisit your list every month or two, because Meta adds, merges and removes options, and competitors eventually find the same pockets you did.",
      },
      { type: "h2", text: "Example: personal injury campaigns" },
      {
        type: "p",
        text: "Personal injury is a crowded category on Meta, and most firms and agencies target the same legal and insurance interests. Our MVA campaigns apply the workflow above to accident case types, such as car, motorcycle, 18-wheeler and rideshare accidents, to find adjacent audiences that are more specific and less contested. If you work in that space, our [personal injury lead generation](/personal-injury-lead-generation) page explains how we run those campaigns for firms. Always check your state bar's attorney-advertising rules before launching. For car crashes specifically, see our [car accident leads](/car-accident-leads) page.",
      },
      { type: "h2", text: "Key takeaways" },
      {
        type: "ul",
        items: [
          "Hidden interests are relevant interests one or two steps away from the obvious ones.",
          "Start from a written buyer profile, then use Ads Manager's Suggestions and Browse to expand it.",
          "Filter for genuine relevance, group interests into themes and test each theme with identical creative.",
          "Judge audiences on qualified leads and revenue, not clicks, and refresh the list regularly.",
        ],
      },
    ],
  },
  {
    slug: "low-ticket-offer-funnel",
    title: "Low-Ticket Offer Funnel: How It Works, With an $847K Example",
    metaTitle: "Low-Ticket Offer Funnel: Structure & $847K Example",
    description:
      "How a low-ticket offer funnel works, from ad to order bump, upsell and high-ticket backend, plus the numbers from our $847K Meta Ads case study.",
    category: "Funnels",
    datePublished: "2026-11-16",
    dateModified: "2026-11-18",
    primaryKeyword: "low ticket offer funnel",
    related: { label: "Read the full $847K case study", href: "/low-ticket-funnel-case-study" },
    faqs: [
      {
        q: "What is a low-ticket offer funnel?",
        a: "A funnel that sells a small, inexpensive product to cold traffic first, then offers order bumps, upsells and a high-ticket backend to the people who buy. The front end turns ad spend into customers; the backend produces most of the profit.",
      },
      {
        q: "What are the steps of a low-ticket funnel?",
        a: "Ad, sales page or VSL, order bump, one-click upsell, and backend follow-up by email, SMS and calls that invites the best buyers to a high-ticket offer.",
      },
      {
        q: "Does a low-ticket funnel need to be profitable on the front end?",
        a: "Not necessarily. A front end that roughly pays back ad spend lets you scale traffic, and a front-end ROAS below break-even can still work if the backend converts.",
      },
      {
        q: "When is a low-ticket funnel the wrong choice?",
        a: "When you have no natural high-ticket backend, or when buyers need a consultation before they will spend anything. A lead-generation funnel that books calls directly is usually a better fit then.",
      },
    ],
    body: [
      {
        type: "p",
        text: "A low-ticket offer funnel sells a small, inexpensive product to cold traffic first, then offers more valuable products to the people who buy. The goal of the front end is not profit; it's to turn ad spend into paying customers as cheaply as possible, so the rest of the funnel can do the earning.",
      },
      { type: "h2", text: "What is a low-ticket offer?" },
      {
        type: "p",
        text: "A low-ticket offer (sometimes called an LTO or tripwire) is a product priced low enough that a stranger will buy it on impulse after one ad and one sales page. Common formats are short courses, templates, workshops, challenges and mini-trainings. The offer has to deliver real value on its own, because buyers who feel short-changed won't buy anything else.",
      },
      { type: "h2", text: "The structure of a low-ticket offer funnel" },
      {
        type: "ol",
        items: [
          "Ad: a hook-led video or image ad on Meta that speaks to one specific problem.",
          "Sales page or VSL: a short page or video that sells the low-ticket offer. (See our guide to [VSL script structure](/blog/vsl-script-structure), or have our team build one as part of our [done-for-you services](/services).)",
          "Order bump: a small add-on offered on the checkout page with one click.",
          "One-click upsell: a higher-priced, related offer shown right after purchase.",
          "Backend: follow-up by email, SMS and calls that invites the best buyers to a high-ticket program or done-for-you service.",
        ],
      },
      {
        type: "p",
        text: "Each step raises average order value (AOV). When the front end plus bumps and upsells roughly pays back the ad spend, you can scale traffic while the backend produces the profit.",
      },
      { type: "h2", text: "The numbers to track" },
      {
        type: "ul",
        items: [
          "Cost per purchase on the front-end offer.",
          "Order bump and upsell take rates.",
          "Average order value across the whole checkout flow.",
          "Front-end ROAS: revenue from the funnel divided by ad spend.",
          "Backend conversion: how many buyers book a call or buy the high-ticket offer.",
        ],
      },
      {
        type: "p",
        text: "Accurate tracking matters more than usual here, because you're optimizing for purchases rather than leads. Server-side tracking through Meta's Conversions API (CAPI) sends purchase events from your server, which helps when browser-based tracking misses conversions.",
      },
      { type: "h2", text: "A real example: $847K from a low-ticket funnel" },
      {
        type: "p",
        text: "In one of our client campaigns, a low-ticket funnel generated $847K in revenue from $255K in tracked Meta ad spend, a 3.32x average ROAS, with more than 13,630 offers sold. Here's how it came together over 90 days:",
      },
      {
        type: "ol",
        items: [
          "Days 1–15, creative and offer testing: 14 hook variations with a $27 front-end offer established a baseline 2.1x ROAS on cold traffic.",
          "Days 16–45, CAPI and funnel optimization: server-side Conversions API tracking and one-click upsells raised average order value by 64%.",
          "Days 46–75, audience scaling: daily spend went from $1,500 to $6,000 across untapped interest clusters while holding a 3.32x ROAS.",
          "Days 76–90, high-ticket backend: automated CRM SMS follow-ups booked more than 180 qualified high-ticket consultations from front-end buyers.",
        ],
      },
      {
        type: "p",
        text: "The full breakdown, including the playbooks behind each phase, is in the [$847K LTO funnel case study](/low-ticket-funnel-case-study).",
      },
      { type: "h2", text: "Common low-ticket funnel mistakes" },
      {
        type: "ul",
        items: [
          "Judging the front end alone. A front-end ROAS below break-even can still be a great funnel if the backend converts.",
          "Too many creatives with too little budget. Test a focused set of hooks and give each enough spend to produce a signal.",
          "Upsells that don't follow logically from the first purchase. The next offer should be the obvious next step.",
          "No backend follow-up. Buyers are your warmest audience; without email, SMS and calls, most of the funnel's value is lost.",
          "Scaling before tracking is reliable. If purchases aren't reported accurately, Meta optimizes on bad data.",
        ],
      },
      { type: "h2", text: "When a low-ticket funnel is the wrong choice" },
      {
        type: "p",
        text: "If you don't have a natural high-ticket backend, or your buyers need a consultation before they'll spend anything, a lead-generation funnel that books calls directly may be a better fit. That's the model behind our [done-for-you client acquisition system](/services).",
      },
    ],
  },
  {
    slug: "vsl-script-structure",
    title: "VSL Script Structure: An 8-Part Framework for High-Ticket Offers",
    metaTitle: "VSL Script Structure: 8-Part Framework & Template",
    description:
      "The 8-part VSL script structure we use for high-ticket offers, with a fill-in template and tips for shorter VSLs that run as Meta ads.",
    category: "Creative",
    datePublished: "2026-11-16",
    dateModified: "2026-11-18",
    primaryKeyword: "vsl script structure",
    related: { label: "See our creative and VSL services", href: "/services" },
    faqs: [
      {
        q: "What is a VSL?",
        a: "A video sales letter: a sales letter delivered as one continuous video that takes the viewer from interest to taking the next step, such as booking a call.",
      },
      {
        q: "What is the structure of a VSL script?",
        a: "Hook, problem, story and credibility, unique mechanism, proof, offer, risk reversal and call to action.",
      },
      {
        q: "How long should a VSL be?",
        a: "There is no single right length. Higher-priced offers usually need more explanation and proof, so test lengths. A practical approach is a long VSL on the landing page and shorter cut-downs running as ads.",
      },
      {
        q: "Can you use a VSL as a Meta ad?",
        a: "Yes. Cut several hooks, the mechanism and proof sections into short captioned ads, and send viewers to a page that continues the same argument.",
      },
    ],
    body: [
      {
        type: "p",
        text: "A video sales letter (VSL) is a sales letter delivered as a video: one continuous argument that takes a viewer from \"this is interesting\" to \"I want to talk to you\". Most weak VSLs aren't badly filmed; they're badly structured. This is the 8-part structure our team uses as a starting point for high-ticket offers.",
      },
      { type: "h2", text: "The 8-part VSL script structure" },
      { type: "h3", text: "1. Hook" },
      {
        type: "p",
        text: "The first seconds decide whether anyone watches. Call out who the video is for and the specific outcome or problem it addresses. A good hook is specific enough that the right viewer feels singled out and the wrong viewer leaves.",
      },
      { type: "h3", text: "2. Problem" },
      {
        type: "p",
        text: "Describe the problem the way your buyer would describe it, including what they've already tried. If they recognize their own situation, they'll trust that you understand the solution.",
      },
      { type: "h3", text: "3. Story and credibility" },
      {
        type: "p",
        text: "Explain briefly why you're worth listening to: your experience, how you discovered the approach and who you've helped. Keep it short and relevant to the viewer's problem.",
      },
      { type: "h3", text: "4. Unique mechanism" },
      {
        type: "p",
        text: "Name and explain the approach that makes your solution different. This answers \"why will this work when other things didn't?\" and stops the viewer comparing you only on price.",
      },
      { type: "h3", text: "5. Proof" },
      {
        type: "p",
        text: "Show evidence that the mechanism works: case studies, client results, screenshots and testimonials. Use only real, verifiable results, and include context so the numbers mean something.",
      },
      { type: "h3", text: "6. Offer" },
      {
        type: "p",
        text: "Spell out exactly what the viewer gets, how it works and what happens after they take the next step. Clarity sells better than hype.",
      },
      { type: "h3", text: "7. Risk reversal" },
      {
        type: "p",
        text: "Address the biggest reason someone would hesitate. That might be a guarantee, a trial or simply a clear explanation of what happens if it isn't a fit. Only promise what you'll put in writing.",
      },
      { type: "h3", text: "8. Call to action" },
      {
        type: "p",
        text: "Tell the viewer exactly what to do next, usually booking a call or applying, and why now is a good time. Any urgency should be real, such as limited onboarding capacity.",
      },
      { type: "h2", text: "Fill-in VSL script template" },
      {
        type: "ol",
        items: [
          "Hook: \"If you're a [who] trying to [outcome] without [pain], watch this.\"",
          "Problem: \"Most [who] try [common approach], but [why it fails].\"",
          "Credibility: \"We've spent [time] doing [relevant work] for [type of client].\"",
          "Mechanism: \"Instead of [old way], we use [named approach], which [how it works].\"",
          "Proof: \"[Client] used this to [specific, verifiable result].\"",
          "Offer: \"Here's exactly what we do: [deliverables and process].\"",
          "Risk reversal: \"If [condition], then [what you commit to].\"",
          "CTA: \"Click below to [next step]. On the call we'll [what they get].\"",
        ],
      },
      { type: "h2", text: "How long should a VSL be?" },
      {
        type: "p",
        text: "There's no single right length; it depends on price and how much the viewer needs to understand before acting. Higher-priced offers usually need more explanation and proof. Test lengths rather than following a rule. A practical approach is to keep the long VSL on the landing page and cut shorter versions of the hook, mechanism and proof sections to run as Meta ads that send viewers there.",
      },
      { type: "h2", text: "Turning a VSL into Meta ads" },
      {
        type: "ul",
        items: [
          "Cut several hooks from the same VSL and test them as separate ads.",
          "Add captions; many people watch with the sound off.",
          "Keep claims consistent with what the landing page and offer actually deliver.",
          "Send viewers to a page that continues the same argument instead of starting over.",
        ],
      },
      {
        type: "p",
        text: "VSL scripting, ad creative and landing pages are all part of our [done-for-you services](/services). For an example of a VSL-led funnel at scale, see the [$847K low-ticket funnel case study](/low-ticket-funnel-case-study), and for the funnel side, our guide to the [low-ticket offer funnel](/blog/low-ticket-offer-funnel).",
      },
    ],
  },
  {
    slug: "how-much-do-mva-leads-cost",
    title: "How Much Do MVA Leads Cost? Pricing Models and Real Campaign Numbers",
    metaTitle: "How Much Do MVA Leads Cost? Pricing & Real Numbers",
    description:
      "What MVA leads cost under each pricing model, what drives the price, our published Meta Ads cost per lead, and how to work out your real cost per signed case.",
    category: "Legal Marketing",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    primaryKeyword: "how much do mva leads cost",
    related: { label: "Get exclusive MVA leads", href: "/exclusive-mva-leads" },
    faqs: [
      {
        q: "How much do MVA leads cost?",
        a: "It depends on the pricing model, state, case type and how exclusive and verified the lead is. In our own published Meta Ads campaigns, MVA and personal injury leads cost $17.13 to $26.93 each. The number that matters more is your cost per signed case.",
      },
      {
        q: "Are cheaper MVA leads worse?",
        a: "Not always, but very cheap leads are often shared with several firms or loosely qualified, which lowers your sign rate. Compare offers on cost per signed case, not price per lead.",
      },
      {
        q: "How do I calculate cost per signed case?",
        a: "Divide what you spend on leads by the number of cases you sign. For example, 50 leads at $100 each that produce 3.5 signed cases cost about $1,429 per case. These are example numbers; use your own.",
      },
      {
        q: "Is it cheaper to generate MVA leads yourself?",
        a: "Running ads in your own account means you pay the ad platform directly and own the data, but it takes setup, creative, qualification and fast follow-up to work. Many firms use an agency to build and run it.",
      },
    ],
    body: [
      { type: "p", text: "MVA leads are inquiries from people injured in a motor vehicle accident who want to speak to a lawyer. What you pay for them depends less on a single market price and more on how they are generated, who else receives them and how well they are qualified." },
      { type: "h2", text: "The four ways firms pay for MVA leads" },
      { type: "ol", items: ["Shared pay-per-lead: you pay per lead, and the same person may be sold to several firms.", "Exclusive pay-per-lead: the vendor sells each lead to one firm only, usually at a higher price.", "Pay per signed case or retainer: you only pay when the client signs, at a much higher price per case.", "Generating your own: you run ads in your own account, pay the platform directly and own every lead and the data."] },
      { type: "h2", text: "What drives the price of an MVA lead" },
      { type: "ul", items: ["State and city: competitive legal markets cost more to advertise in.", "Case type: car, truck, motorcycle and rideshare cases are priced differently.", "Exclusivity: a lead no other firm is calling is worth more than a shared one.", "Qualification: leads screened for injury, fault and representation cost more but sign more often.", "Speed of follow-up: a lead called within minutes is worth more than one called the next day."] },
      { type: "h2", text: "Our published Meta Ads numbers" },
      { type: "p", text: "These come from client dashboards we have published, each with a date and screenshot on our [results page](/work):" },
      { type: "ul", items: ["76 MVA leads in 5 days at $17.13 per lead ($1,301.63 spent, Jul 27 to Jul 31, 2026).", "203 MVA leads in 21 days at $18.69 per lead across 5 campaigns ($3,793.86 spent, Jul 1 to Jul 21, 2026).", "530 leads in 7 days at $26.93 per lead for a Texas personal injury firm ($14,270 spent, Jun 1 to Jun 7, 2026)."] },
      { type: "callout", title: "Past results, not a quote", text: "These are lead costs from specific campaigns in specific markets. Your cost will depend on your state, case types, offer and how fast your intake team follows up." },
      { type: "h2", text: "Why cost per signed case matters more than cost per lead" },
      { type: "p", text: "A cheap lead that never signs is expensive. Divide your total lead spend by the cases you actually sign. As an example, 50 leads at $100 each with a 7% sign rate produce 3.5 cases, about $1,429 per signed case. If exclusive leads called instantly signed at 12% instead, the same spend would cost about $833 per case. You can try your own numbers with the calculator on our [exclusive MVA leads](/exclusive-mva-leads) page." },
      { type: "h2", text: "Questions to ask before you buy MVA leads" },
      { type: "ul", items: ["Is each lead sold to my firm only, or to several firms?", "How is each lead verified, and what questions does the form ask?", "How fast is the lead delivered, and in what format?", "Do I own the data and the ads if I stop?", "Can you show results with dates and dashboards, not just testimonials?"] },
      { type: "h2", text: "Key takeaways" },
      { type: "ul", items: ["MVA lead prices depend on the model, market, case type, exclusivity and qualification.", "Our published Meta Ads campaigns ran at $17.13 to $26.93 per lead.", "Judge every source on cost per signed case, not price per lead.", "Exclusive, qualified leads that your team calls within minutes usually sign at a higher rate. For car crash campaigns specifically, see [car accident leads](/car-accident-leads)."] },
    ],
  },
  {
    slug: "how-to-get-workers-comp-leads",
    title: "How to Get Workers' Comp Leads: A Practical Guide for Attorneys",
    metaTitle: "How to Get Workers' Comp Leads: Guide for Attorneys",
    description:
      "Where workers' compensation leads come from, how to reach injured workers with Meta Ads, the qualifying questions to ask and the mistakes that waste budget.",
    category: "Legal Marketing",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    primaryKeyword: "workers comp leads",
    related: { label: "Get workers comp leads", href: "/workers-comp-leads" },
    faqs: [
      {
        q: "What are workers' comp leads?",
        a: "Inquiries from people injured on the job who want help with a workers' compensation claim, often after a claim was denied, delayed or reduced.",
      },
      {
        q: "Can you target injured workers on Facebook?",
        a: "Meta removed many sensitive targeting options, including health-related ones, so you cannot target people by injury. Instead, campaigns reach workers by job, industry and location, and the ad and form do the qualifying.",
      },
      {
        q: "What questions should a workers' comp lead form ask?",
        a: "Whether the injury happened at work, whether it was reported to the employer, the status of the claim, whether the person is getting treatment and whether they already have a lawyer.",
      },
      {
        q: "Are workers' comp ads subject to bar rules?",
        a: "Yes. Attorney advertising is regulated by each state bar, so every ad and landing page should be reviewed against your state's rules before launch.",
      },
    ],
    body: [
      { type: "p", text: "Workers' compensation cases come from people who were hurt on the job and are now dealing with an employer's insurer. Many only look for a lawyer after a claim is denied, delayed or cut off. This guide covers where those leads come from and how to generate them yourself." },
      { type: "h2", text: "Where workers' comp leads come from" },
      { type: "ul", items: ["Referrals from past clients, doctors and other attorneys.", "Search: people searching for a workers' comp lawyer after a problem with their claim.", "Social ads: reaching workers in high-injury jobs before they search.", "Lead vendors: buying leads, often shared with other firms."] },
      { type: "h2", text: "Reaching injured workers with Meta Ads" },
      { type: "p", text: "You cannot target people by injury or medical condition on Meta, and you should not try. Instead, campaigns reach workers by the jobs and industries where injuries are common, such as construction, warehouses, delivery and healthcare, in the areas you practice. The ad speaks to a situation the worker recognizes, and the form confirms whether they actually have a claim." },
      { type: "h2", text: "The questions that qualify a workers' comp lead" },
      { type: "ol", items: ["Were you injured while working?", "Have you reported the injury to your employer?", "Has your claim been denied, delayed or reduced?", "Are you receiving medical treatment?", "Do you already have a lawyer?"] },
      { type: "p", text: "Short, specific questions keep form completion high while filtering out people your intake team cannot help." },
      { type: "h2", text: "Follow-up and tracking" },
      { type: "p", text: "Injured workers often contact more than one firm. An instant text and email, and a call within minutes, make a large difference. Track every lead from first contact to signed case, so budget moves toward the audiences and ads that produce cases, not just form fills." },
      { type: "h2", text: "Common mistakes" },
      { type: "ul", items: ["Running one generic ad for every industry instead of separate campaigns.", "Forms with no qualifying questions, which flood intake with unusable leads.", "Slow follow-up, so the worker signs with the firm that called first.", "Judging campaigns on cost per lead instead of cost per signed case.", "Skipping the state bar review of ads and landing pages."] },
      { type: "h2", text: "Key takeaways" },
      { type: "ul", items: ["Reach workers by job, industry and location, and let the form qualify the claim.", "Ask about the work injury, reporting, claim status, treatment and representation.", "Follow up within minutes and track every lead to a signed case.", "See how we run these campaigns on our [workers comp leads](/workers-comp-leads) page, and our approach to [mass tort leads](/mass-tort-leads)."] },
    ],
  },
  {
    slug: "how-to-choose-a-legal-lead-generation-company",
    title: "How to Choose a Legal Lead Generation Company: 8 Criteria",
    metaTitle: "How to Choose a Legal Lead Generation Company",
    description:
      "8 criteria for choosing a legal lead generation company for personal injury, MVA, mass tort or workers comp cases, plus the 4 lead source types compared.",
    category: "Legal Marketing",
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    primaryKeyword: "best personal injury lead generation companies",
    related: { label: "See our personal injury lead generation", href: "/personal-injury-lead-generation" },
    faqs: [
      {
        q: "What is the best legal lead generation company?",
        a: "There is no single best company for every firm. The right one sells leads to your firm only, screens every lead, delivers in real time, lets you own the data, reports cost per signed case and publishes dated results.",
      },
      {
        q: "Are exclusive legal leads worth the higher price?",
        a: "Usually, if your intake team calls fast. Exclusive leads are not being called by other firms at the same time, so contact and sign rates tend to be higher. Compare sources on cost per signed case, not price per lead.",
      },
      {
        q: "Should a law firm buy leads or run its own ads?",
        a: "Buying leads is faster to start, but the vendor owns the source and the data. Running ads in your own account takes setup and fast follow-up, but every lead is yours and your cost per case can improve over time.",
      },
      {
        q: "What questions should I ask a legal lead vendor?",
        a: "Ask whether leads are exclusive, how they are screened and verified, how fast they are delivered, who owns the data and the ads, how ads follow state bar rules and whether they can show dated results with dashboards.",
      },
      {
        q: "How do I compare the cost of legal lead sources?",
        a: "Divide what you spend on each source by the number of cases it produces. Cost per signed case shows the real cost, because cheap leads that never sign are expensive.",
      },
    ],
    body: [
      { type: "h2", text: "How do you choose a legal lead generation company?" },
      { type: "p", text: "Choose a company that sells each lead to your firm only, screens every lead before intake, delivers leads in real time, lets you own the ads and data, follows your state bar's advertising rules, reports cost per signed case and can show dated results. Judge every option on cost per signed case, not price per lead." },
      { type: "h2", text: "The 4 types of legal lead sources" },
      { type: "p", text: "Before comparing companies, know which model each one uses. The model decides who else gets the lead and who owns the source." },
      {
        type: "table",
        caption: "Legal lead sources compared",
        head: ["Source", "Exclusive to your firm?", "Who owns the ads and data?", "How you pay"],
        rows: [
          ["Shared lead vendor", "No, often sold to several firms", "The vendor", "Per lead"],
          ["Exclusive lead vendor", "Yes", "The vendor", "Per lead, usually higher"],
          ["Pay per signed case", "Usually", "The vendor", "Per signed case or retainer"],
          ["Ads in your own account (in-house or agency)", "Yes", "Your firm", "Ad spend to the platform, plus a fee if you use an agency"],
        ],
      },
      { type: "h2", text: "8 criteria for choosing a legal lead generation company" },
      {
        type: "ol",
        items: [
          "Exclusivity: each lead goes to your firm only and is never resold.",
          "Screening: every lead answers questions on incident date, injuries, treatment, fault and representation before it reaches intake.",
          "Verification: phone numbers are verified, for example with a one-time code.",
          "Speed: leads arrive in real time, with an automatic text to the claimant within minutes.",
          "Ownership: you own the ad account, creatives, forms and lead data if you stop.",
          "Compliance: ads and landing pages are reviewed against your state bar's advertising rules before launch.",
          "Reporting: you see cost per lead and cost per signed case, by case type.",
          "Proof: the company publishes results with dates and dashboards, not only testimonials.",
        ],
      },
      { type: "h2", text: "One campaign per case type" },
      { type: "p", text: "Car accidents, mass torts and workplace injuries need different ads and different screening questions. Ask whether the company runs a separate campaign for each case type, such as [exclusive MVA leads](/exclusive-mva-leads), [mass tort leads](/mass-tort-leads) and [workers comp leads](/workers-comp-leads)." },
      { type: "h2", text: "Red flags" },
      { type: "ul", items: ["No answer on whether leads are shared.", "No screening questions on the form.", "Results with no dates or dashboards.", "You cannot keep the data or the ads if you leave.", "No review of ads against state bar rules."] },
      { type: "callout", title: "Our published numbers", text: "Our own Meta Ads campaigns for law firms produced 76 MVA leads in 5 days, 203 MVA leads in 21 days and 530 leads in 7 days for a Texas personal injury firm, each shown with a dated dashboard on our [results page](/work)." },
      { type: "h2", text: "Key takeaways" },
      { type: "ul", items: ["Know the model first: shared, exclusive, pay per case or your own ads.", "Use the 8 criteria: exclusivity, screening, verification, speed, ownership, compliance, reporting and proof.", "Compare every source on cost per signed case. See [how much MVA leads cost](/blog/how-much-do-mva-leads-cost).", "See how we run [personal injury lead generation](/personal-injury-lead-generation) and [Facebook ads for lawyers](/facebook-ads-for-lawyers)."] },
    ],
  },
  {
    slug: "how-much-do-personal-injury-leads-cost",
    title: "How Much Do Personal Injury Leads Cost? Pricing Models Compared",
    metaTitle: "How Much Do Personal Injury Leads Cost?",
    description:
      "What personal injury leads cost under each pricing model, our published cost per lead, and how to work out cost per signed case for your firm.",
    category: "Legal Marketing",
    datePublished: "2026-11-25",
    dateModified: "2026-11-25",
    primaryKeyword: "how much do personal injury leads cost",
    related: { label: "See personal injury lead generation", href: "/personal-injury-lead-generation" },
    faqs: [
      {
        q: "How much do personal injury leads cost?",
        a: "It depends on the pricing model, state, case type and how exclusive and screened the lead is. In our own published Meta ads campaigns, personal injury and MVA leads cost $17.13 to $26.93 each. Cost per signed case is the number to compare.",
      },
      {
        q: "Why do personal injury lead prices vary so much?",
        a: "Prices change with the state and city, the case type, whether the lead is shared or exclusive, how well it is screened and how it is delivered. A cheap shared lead and an exclusive screened lead are different products.",
      },
      {
        q: "Is it cheaper to pay per signed case?",
        a: "You pay nothing for leads that do not sign, but the price per signed case is usually much higher than paying per lead or running your own ads. It suits firms that want no upfront risk.",
      },
      {
        q: "How do I calculate my cost per signed case?",
        a: "Add up everything you spend on a lead source in a period and divide it by the number of cases you signed from that source in the same period.",
      },
      {
        q: "What lowers the cost of personal injury leads?",
        a: "Exclusive leads, good screening questions, fast follow-up and one campaign per case type. These raise your sign rate, which lowers your cost per signed case even if the price per lead stays the same.",
      },
    ],
    body: [
      { type: "h2", text: "How much do personal injury leads cost?" },
      { type: "p", text: "There is no single market price. What you pay depends on the pricing model, your state, the case type and whether the lead is exclusive and screened. In our own published Meta ads campaigns, personal injury and MVA leads cost $17.13 to $26.93 each. The number that matters more is your cost per signed case." },
      { type: "h2", text: "Our published cost per lead" },
      { type: "p", text: "These figures come from client dashboards we have published, each with a date and a screenshot on our [results page](/work)." },
      {
        type: "table",
        caption: "Published personal injury and MVA campaign costs",
        head: ["Campaign", "Leads", "Cost per lead", "Ad spend", "Dates"],
        rows: [
          ["Texas personal injury firm", "530 in 7 days", "$26.93", "$14,270", "Jun 1 to Jun 7, 2026"],
          ["MVA campaign", "76 in 5 days", "$17.13", "$1,301.63", "Jul 27 to Jul 31, 2026"],
          ["MVA campaigns (5)", "203 in 21 days", "$18.69", "$3,793.86", "Jul 1 to Jul 21, 2026"],
        ],
      },
      { type: "callout", title: "Past results, not a quote", text: "These costs come from specific campaigns in specific markets. Your cost per lead will depend on your state, case types, offer and how fast your intake team follows up." },
      { type: "h2", text: "The 4 ways to pay for personal injury leads" },
      {
        type: "table",
        caption: "Personal injury lead pricing models",
        head: ["Model", "How you pay", "Shared with other firms?", "Who owns the source"],
        rows: [
          ["Shared leads", "Per lead", "Often", "The vendor"],
          ["Exclusive vendor leads", "Per lead, usually higher", "No", "The vendor"],
          ["Pay per signed case", "Per signed case or retainer", "Usually not", "The provider"],
          ["Your own campaigns", "Ad spend to the platform, plus a fee if you use an agency", "Never", "Your firm"],
        ],
      },
      { type: "h2", text: "What drives the price of a personal injury lead" },
      { type: "ul", items: ["Market: competitive states and cities cost more to advertise in.", "Case type: truck, motorcycle, workplace and product cases are priced differently from car accidents.", "Exclusivity: a lead no other firm is calling is worth more.", "Screening: leads checked for injury, treatment, fault and representation cost more but sign more often.", "Delivery speed: a lead delivered in real time is worth more than one delivered tomorrow."] },
      { type: "h2", text: "How to calculate cost per signed case" },
      { type: "ol", items: ["Add up everything you spent on one lead source in a period, including fees.", "Count the cases you signed from that source in the same period.", "Divide spend by signed cases.", "Repeat for each source and compare them side by side."] },
      { type: "p", text: "As an example with made-up numbers: if you spend $5,000 on a source and sign 4 cases from it, your cost per signed case is $1,250. A cheaper source that signs only 1 case for $3,000 costs $3,000 per signed case. Use your own numbers." },
      { type: "h2", text: "How to lower your cost per signed case" },
      { type: "ul", items: ["Use exclusive leads, so your team is not racing other firms.", "Ask screening questions before the call.", "Respond within minutes with an instant text and a call. See [legal intake](/legal-intake).", "Run one campaign per case type, so every lead matches what your firm takes."] },
      { type: "h2", text: "Key takeaways" },
      { type: "ul", items: ["Personal injury lead prices depend on the model, market, case type, exclusivity and screening.", "Our published Meta ads campaigns ran at $17.13 to $26.93 per lead.", "Compare every source on cost per signed case.", "See how we run [personal injury lead generation](/personal-injury-lead-generation), or compare [personal injury lead generation companies](/best-personal-injury-lead-generation-companies)."] },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function readingMinutes(post: Post): number {
  const words = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : "rows" in b ? b.rows.flat().join(" ") : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
