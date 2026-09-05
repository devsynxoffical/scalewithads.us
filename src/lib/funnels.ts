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
  metaTitle: "Lead Pilot | Done-For-You Ads That Sell | Scale with Ads",
  metaDescription:
    "Done-for-you Meta ads across all industries. $10K minimum. We double your revenue in 90 days, everything in the agreement. $50M+ Meta spend. 12 years experience.",
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
    "Private Mastermind | Train Media Agencies to Get Clients | Scale with Ads",
  metaDescription:
    "Private mastermind for media agencies and operators, how to get clients with Meta ads across all industries. Hidden Facebook Interest framework.",
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

export const METADS_FUNNEL: FunnelConfig = {
  slug: "metads",
  metaTitle:
    "LTO Meta Ads VSL | Ads That Sell Across Industries | Scale with Ads",
  metaDescription:
    "LTO Meta Ads training from a team with $50M+ Meta spend and 12 years experience. Double revenue in 90 days. $10K minimum. Everything in the agreement.",
  eyebrow: "LTO Meta Ads VSL · ads that sell",
  title: "Turn Meta Ads into a",
  titleAccent: "cash cow machine",
  titleEnd: "for any industry.",
  subtitle:
    "If your Meta ads aren’t converting at scale, it’s not the offer. It’s how you’re selling it. We teach the ads system behind million-dollar funnels across countless verticals.",
  videoLabel: "Show me the training",
  videoSrc: "/media/videos/metads.mp4",
  videoCover: "/media/covers/cover-mastermind.jpeg",
  learnTitle: "What this Meta training unlocks",
  learnItems: [
    "How to sell offers on Meta without burning budget",
    "Creative + offer angles that drive ROAS across industries",
    "How media agencies package ads that sell to win clients",
    "Frameworks from $50M+ Meta spend and 12 years of installs",
    `${OFFER.minimum} · ${OFFER.promise} · ${OFFER.agreement}`,
  ],
  trackTitle: "Real Meta scale. Real awards. Real brands.",
  trackBody:
    "Two Comma Club Winner. ClickFunnels Awards. Client proof like $847K revenue on $255K tracked spend at 3.32 ROAS, and 13,630 LTO offers sold. This is ads that sell.",
  ctaPrimary: "SHOW ME THE TRAINING",
  ctaPrimarySub: "Apply · $10K minimum",
  ctaSecondary: "BOOK A STRATEGY CALL",
  ctaSecondarySub: "Double revenue in 90 days",
  bookingPath: BOOKING_PATH,
  stats: [
    { value: "$847K", label: "Client revenue" },
    { value: "3.32x", label: "ROAS" },
    { value: "$50M+", label: "Meta spend (us)" },
    { value: "12 YRS", label: "Experience" },
  ],
};
