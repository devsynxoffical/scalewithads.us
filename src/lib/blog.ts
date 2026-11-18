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
  | { type: "callout"; title: string; text: string };

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
    dateModified: "2026-11-18",
    primaryKeyword: "hidden facebook interests",
    related: { label: "Watch the MVA Lead Generation mastermind", href: "/mvaleadgeneration" },
    faqs: [
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
        text: "This guide walks through the workflow our team uses to find them, filter out the irrelevant ones and test them properly. It's the written companion to our [MVA Lead Generation mastermind](/mvaleadgeneration), which applies the same process to personal injury campaigns.",
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
        text: "Personal injury is a crowded category on Meta, and most firms and agencies target the same legal and insurance interests. Our MVA campaigns apply the workflow above to accident case types, such as car, motorcycle, 18-wheeler and rideshare accidents, to find adjacent audiences that are more specific and less contested. If you work in that space, our [personal injury lead generation](/personal-injury-lead-generation) page explains how we run those campaigns for firms. Always check your state bar's attorney-advertising rules before launching. The same approach works for home services: see how we use it in [Facebook ads for roofing companies](/facebook-ads-for-roofing-companies).",
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
    related: { label: "Read the full $847K case study", href: "/metalto" },
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
          "Sales page or VSL: a short page or video that sells the low-ticket offer. (See our guide to [VSL script structure](/blog/vsl-script-structure), or have us build one with our [Meta Ads VSL funnels](/metads).)",
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
        text: "The full breakdown, including the playbooks behind each phase, is in the [$847K LTO funnel case study](/metalto).",
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
        text: "VSL scripting and ad creative production are part of our [done-for-you services](/services), and our [Meta Ads VSL funnels](/metads) package covers the script, ads and landing page together. For an example of a VSL-led funnel at scale, see the [$847K low-ticket funnel case study](/metalto), and for the funnel side, our guide to the [low-ticket offer funnel](/blog/low-ticket-offer-funnel).",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function readingMinutes(post: Post): number {
  const words = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
