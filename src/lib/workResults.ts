/**
 * Results shown on /work, grouped by industry.
 * Each item is a client result we published on Facebook; `file` is the screenshot
 * in /public/workproof and `quote` is the post caption as published. Only use
 * figures that are visible in the screenshot or its caption.
 */
export type WorkResult = {
  id: string;
  industry: Industry;
  stat: string;
  label: string;
  quote: string;
  author: "Vaishali Kapoor" | "Gaurav Kapoor";
  posted: string;
  file: string;
  href?: string;
  linkLabel?: string;
};

export const INDUSTRIES = [
  "Legal",
  "Roofing & home services",
  "Coaching & info products",
  "Webinars & events",
  "Mortgage & finance",
  "Agencies & B2B",
  "E-commerce",
  "Local services",
] as const;
export type Industry = (typeof INDUSTRIES)[number];

const RS = "https://www.roofingsystems.co/case-studies/";

export const WORK_RESULTS: WorkResult[] = [
  // Legal
  { id: "mva-76", industry: "Legal", stat: "76", label: "MVA leads in 5 days at $17.13 each", quote: "76 MVA Leads in Just 5 Days... While Most Law Firms Are Still Complaining That Meta Ads Don't Work.", author: "Gaurav Kapoor", posted: "1 Aug 2026", file: "Screenshot 2026-08-19 at 3.29.56 PM.png", href: "/exclusive-mva-leads", linkLabel: "Exclusive MVA leads" },
  { id: "texas-pi-530", industry: "Legal", stat: "530", label: "leads in 7 days for a Texas personal injury firm", quote: "Last week we pulled the numbers on a Texas personal injury law firm we run Meta ads for.", author: "Gaurav Kapoor", posted: "9 Jun 2026", file: "Screenshot 2026-08-19 at 3.32.59 PM.png", href: "/personal-injury-lead-generation", linkLabel: "PI lead generation" },
  { id: "mva-203", industry: "Legal", stat: "203", label: "MVA leads in 21 days across 5 campaigns", quote: "How many agencies can generate MVA leads...", author: "Gaurav Kapoor", posted: "22 Jul 2026", file: "Screenshot 2026-08-19 at 3.30.11 PM.png", href: "/facebook-ads-for-lawyers", linkLabel: "Facebook ads for lawyers" },

  // Roofing & home services
  { id: "dallas-127k", industry: "Roofing & home services", stat: "$127,500", label: "in roofing installs in 63 days (Dallas)", quote: "Right now, we're running ads for a roofing company in Dallas...", author: "Vaishali Kapoor", posted: "19 Feb 2026", file: "Screenshot 2026-08-17 at 6.00.34 PM.png" },
  { id: "florida-111k", industry: "Roofing & home services", stat: "$111,000", label: "generated in 31 days for a Florida roofer", quote: "We recently helped a Florida based roofing client generate $111,000 in 31 days Built From the Ground Up...", author: "Vaishali Kapoor", posted: "12 Feb 2026", file: "Screenshot 2026-08-17 at 6.02.58 PM.png" },
  { id: "roofing-agency-546k", industry: "Roofing & home services", stat: "$546K", label: "won in 67 days for a roofing marketing agency", quote: "$546,000 in 67 days. 152 deals for a Roofing Marketing Agency. 975 open conversations", author: "Vaishali Kapoor", posted: "7 May 2026", file: "Screenshot 2026-08-17 at 5.57.01 PM.png", href: RS + "roofing-agency-546k-67-days", linkLabel: "Case study" },
  { id: "florida-280", industry: "Roofing & home services", stat: "280", label: "roofing, gutter and solar leads in 15 days (Florida)", quote: "280 Qualified leads for This Florida Based Home Service Client. 15 days. $3,196 spent.", author: "Vaishali Kapoor", posted: "17 May 2026", file: "Screenshot 2026-08-17 at 5.56.26 PM.png", href: RS + "florida-home-services-280-leads-15-days", linkLabel: "Case study" },
  { id: "solar-76", industry: "Roofing & home services", stat: "76", label: "qualified solar leads in 7 days", quote: "76 Qualified Solar Leads in Just 7 Days.", author: "Gaurav Kapoor", posted: "6 Aug 2026", file: "Screenshot 2026-08-19 at 3.29.29 PM.png" },
  { id: "pressure-167", industry: "Roofing & home services", stat: "167", label: "pressure washing leads at $13.37 each in 30 days", quote: "How We Generated 167 Qualified Pressure Washing Leads at Just $13.37 Per Lead in 30 Days", author: "Gaurav Kapoor", posted: "6 Aug 2026", file: "Screenshot 2026-08-19 at 3.29.45 PM.png" },

  // Coaching & info products
  { id: "lto-77k", industry: "Coaching & info products", stat: "$77,460", label: "revenue in 20 days from 1,650 low-ticket offers", quote: "In the last 20 days alone, we scaled this client to $77,460 in revenue using meta ads and selling 1,650 low-ticket offers resulting in a 54.3% increase in conversions.", author: "Vaishali Kapoor", posted: "24 Feb 2026", file: "Screenshot 2026-08-19 at 3.24.48 PM.png", href: "/blog/low-ticket-offer-funnel", linkLabel: "Low-ticket funnel guide" },
  { id: "coaching-74k", industry: "Coaching & info products", stat: "$74,865", label: "in 20 days", quote: "$74,865 in 20 Days Here's Exactly How We Did It", author: "Vaishali Kapoor", posted: "21 Apr 2026", file: "Screenshot 2026-08-19 at 3.22.25 PM.png" },
  { id: "coaching-1850", industry: "Coaching & info products", stat: "$1,850", label: "cash collected from $2.10 in ad spend", quote: "$1,850 CASH collected $2.10 spent Yeah... that's a 880+ ROAS before breakfast. Crazy start to the day for one of our coaching clients", author: "Vaishali Kapoor", posted: "11 Apr 2026", file: "Screenshot 2026-08-19 at 3.22.55 PM.png" },

  // Webinars & events
  { id: "webinar-1018", industry: "Webinars & events", stat: "1,018", label: "webinar registrations in one month at $4.50 each", quote: "Just wrapped results for one of my clients. 1,018 webinar registrations in a single month. $4.50 a lead. In the agency space.", author: "Vaishali Kapoor", posted: "8 Jun 2026", file: "Screenshot 2026-08-19 at 3.19.55 PM.png" },
  { id: "webinar-800", industry: "Webinars & events", stat: "800", label: "webinar registrations in 23 days at $4.34 each", quote: "800 webinar registrations in 23 days at $4.34 per lead on a $27.84 CPM and we even charged $5 upfront... just to attend.", author: "Vaishali Kapoor", posted: "25 Mar 2026", file: "Screenshot 2026-08-19 at 3.23.19 PM.png" },

  // Mortgage & finance
  { id: "mortgage-266", industry: "Mortgage & finance", stat: "266", label: "mortgage leads at $13.63 each for a pay-per-lead agency", quote: "We generated 266 mortgage leads at $13.63 each for our PPL agency client.", author: "Vaishali Kapoor", posted: "13 May 2026", file: "Screenshot 2026-08-19 at 3.20.46 PM.png" },

  // Agencies & B2B
  { id: "agency-165k", industry: "Agencies & B2B", stat: "$165,760", label: "from 45 deals in 26 days", quote: "$165,760. 45 deals. 26 days. 90.91% growth.", author: "Vaishali Kapoor", posted: "27 Feb 2026", file: "Screenshot 2026-08-19 at 3.24.37 PM.png" },
  { id: "agency-4184", industry: "Agencies & B2B", stat: "7.17x", label: "ROAS in one day ($4,184)", quote: "$4,184. One day. 7.17 ROAS. One of our agency scaling clients just proved the model works on his own business.", author: "Vaishali Kapoor", posted: "23 Apr 2026", file: "Screenshot 2026-08-19 at 3.22.11 PM.png" },

  // E-commerce
  { id: "supplement-62k", industry: "E-commerce", stat: "$62,182", label: "in 7 days at a 4.50 ROAS (supplement brand)", quote: "$62,182 in 7 days. 4.50 ROAS. High ticket Supplement brand $145 average order.", author: "Gaurav Kapoor", posted: "8 Jun 2026", file: "Screenshot 2026-08-19 at 3.33.25 PM.png" },

  // Local services
  { id: "wedding-580", industry: "Local services", stat: "580", label: "qualified leads in 17 days for a wedding photographer", quote: "580 qualified leads in 17 days for a professional wedding photographer. $2,776 ad spend.", author: "Vaishali Kapoor", posted: "17 Feb 2026", file: "Screenshot 2026-08-19 at 3.25.17 PM.png" },
  { id: "chiro-44", industry: "Local services", stat: "44", label: "prepaid consultations and $6,153 revenue for a chiropractor", quote: "44 Prepaid Consultations & $6,153 in Revenue for Our U.S. Chiropractic Client", author: "Gaurav Kapoor", posted: "3 Jul 2026", file: "Screenshot 2026-08-19 at 3.31.40 PM.png" },
];

export const workProofSrc = (file: string) =>
  `/workproof/${encodeURIComponent(file.replace(/\.png$/i, ".webp"))}`;
