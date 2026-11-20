/**
 * Legal lead-generation results published by Gaurav Kapoor (Co-Founder) on Facebook.
 * Every figure is read from the dashboard screenshot in /public/workproof (`file`).
 * Do not add numbers that are not visible in the screenshot.
 */
export type LegalProof = {
  id: string;
  file: string;
  title: string;
  period: string;
  posted: string;
  quote: string;
  stats: { value: string; label: string }[];
};

export const LEGAL_PROOF: LegalProof[] = [
  {
    id: "mva-76-5-days",
    file: "Screenshot 2026-08-19 at 3.29.56 PM.png",
    title: "76 MVA leads in 5 days",
    period: "Jul 27 – Jul 31, 2026",
    posted: "2026-08-01",
    quote: "76 MVA Leads in Just 5 Days... While Most Law Firms Are Still Complaining That Meta Ads Don't Work.",
    stats: [
      { value: "76", label: "MVA leads" },
      { value: "$17.13", label: "Cost per lead" },
      { value: "$1,301.63", label: "Ad spend" },
      { value: "659", label: "Link clicks" },
    ],
  },
  {
    id: "texas-pi-530",
    file: "Screenshot 2026-08-19 at 3.32.59 PM.png",
    title: "530 leads in 7 days for a Texas personal injury firm",
    period: "Jun 1 – Jun 7, 2026",
    posted: "2026-06-09",
    quote: "Last week we pulled the numbers on a Texas personal injury law firm we run Meta ads for.",
    stats: [
      { value: "530", label: "Form leads" },
      { value: "$26.93", label: "Cost per lead" },
      { value: "$14,270", label: "Ad spend" },
      { value: "$1.80", label: "Cost per click" },
    ],
  },
  {
    id: "mva-203-agency",
    file: "Screenshot 2026-08-19 at 3.30.11 PM.png",
    title: "203 MVA leads in 21 days across 5 campaigns",
    period: "Jul 1 – Jul 21, 2026",
    posted: "2026-07-22",
    quote: "How many agencies can generate MVA leads...",
    stats: [
      { value: "203", label: "MVA leads" },
      { value: "$18.69", label: "Cost per lead" },
      { value: "$3,793.86", label: "Ad spend" },
      { value: "1,398", label: "Landing page views" },
    ],
  },
];

export const legalProofSrc = (file: string) =>
  `/workproof/${encodeURIComponent(file.replace(/\.png$/i, ".webp"))}`;
