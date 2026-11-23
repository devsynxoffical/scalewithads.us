import { BOOKING_PATH, OFFER } from "./offer";

export type FunnelConfig = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  videoLabel: string;
  videoSrc: string | null;
  videoCover: string;
  learnTitle: string;
  learnItems: string[];
  trackTitle: string;
  trackBody: string;
  ctaPrimary: string;
  ctaPrimarySub: string;
  ctaSecondary: string;
  ctaSecondarySub: string;
  bookingPath: string;
  stats?: { value: string; label: string }[];
};

export const LEADPILOT_FUNNEL: FunnelConfig = {
  slug: "leadpilot",
  metaTitle: "Lead Pilot: Done-For-You Meta Ads That Sell | Scale With Ads™",
  metaDescription:
    "Done-for-you Meta Ads for $10K+/month businesses in any industry, from a team with $50M+ in Meta spend. Double your revenue in 90 days, in writing.",
  eyebrow: "Lead Pilot · done-for-you ads that sell",
  title: "Sick of agencies that promise leads and deliver excuses?",
  titleAccent: "We run ads that sell",
  titleEnd: "across every industry.",
  subtitle:
    "Scale with Ads is specifically for ads, done-for-you media that sells. All industries. $10K minimum. We double your revenue in 90 days, and everything is written in the agreement.",
  videoLabel: "Watch this video closely",
  videoSrc:
    "https://assets.cdn.filesafe.space/W8B8H8FvOolLCrvxXzYp/media/69ef9443717d5dd4e170f445.mp4",
  videoCover: "/media/covers/cover-leadpilot.jpg",
  learnTitle: "What done-for-you ads looks like here",
  learnItems: [
    "Ads built to sell, not vanity traffic across countless verticals",
    "We write, target, and manage Meta campaigns that book revenue",
    "Proven with $50M+ Meta ads spend and 12 years in the game",
    "Same playbook used for brands, agencies, and operators worldwide",
    `${OFFER.minimum} · ${OFFER.promise} · ${OFFER.agreement}`,
  ],
  trackTitle: "Million-dollar funnels. Countless verticals.",
  trackBody:
    "Two Comma Club Winner. ClickFunnels Awards. Brands we work with show up in the logo wall below, because the system repeats across industries, not one niche.",
  ctaPrimary: "GET MY ADS SELLING THIS WEEK",
  ctaPrimarySub: "$10K minimum · double revenue in 90 days",
  ctaSecondary: "BOOK APPLICATION CALL",
  ctaSecondarySub: "Everything in the agreement",
  bookingPath: BOOKING_PATH,
  stats: [
    { value: "$50M+", label: "Meta ads spent" },
    { value: "12 YRS", label: "Experience" },
    { value: "$10K+", label: "Minimum" },
    { value: "90 DAYS", label: "Revenue target" },
  ],
};

export const MASTERMIND_FUNNEL: FunnelConfig = {
  slug: "privatemastermind",
  metaTitle:
    "Private Meta Ads Mastermind for Agencies | Scale With Ads™",
  metaDescription:
    "A 6-week Meta Ads mastermind for agencies: 12 live classes on targeting, AI ads, tracking, scaling and profitability, applied to your own campaigns.",
  eyebrow: "Private mastermind · media agencies + operators",
  title: "We train media agencies on how to",
  titleAccent: "get clients with ads",
  titleEnd: "that actually sell.",
  subtitle:
    "The Hidden Facebook Interest Framework behind high-ticket sales calls, built from $50M+ Meta spend, 12 years of experience, and million-dollar funnel results across countless verticals.",
  videoLabel: "Watch private 1:1 mastermind",
  videoSrc:
    "https://assets.cdn.filesafe.space/W8B8H8FvOolLCrvxXzYp/media/69ef9443717d5dd4e170f445.mp4",
  videoCover: "/media/covers/cover-mastermind.jpeg",
  learnTitle: "What agencies learn in this mastermind",
  learnItems: [
    "How to win clients by selling ads outcomes, not busywork",
    "Hidden Facebook interests that drop CPL and raise call volume",
    "How to position done-for-you ads across any industry",
    "Funnel + offer angles pulled from million-dollar testimonials",
    "The same standards behind Two Comma Club + ClickFunnels Awards work",
  ],
  trackTitle: "Built for agencies. Proven across verticals.",
  trackBody:
    "If you run a media agency, this recording shows how to get clients and keep them, with ads systems that sell in countless industries, not one template niche.",
  ctaPrimary: "BUILD MY CLIENT-GETTING MACHINE",
  ctaPrimarySub: "Book your free 1:1 call now",
  ctaSecondary: "TRAIN MY AGENCY",
  ctaSecondarySub: "$10K minimum · agreement in writing",
  bookingPath: BOOKING_PATH,
  stats: [
    { value: "$50M+", label: "Meta ads spent" },
    { value: "12 YRS", label: "Experience" },
    { value: "$10K+", label: "Monthly minimum" },
    { value: "90 DAYS", label: "Revenue target" },
  ],
};
