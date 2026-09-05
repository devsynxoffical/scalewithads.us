export const site = {
  name: "Scale With Ads™",
  legalName: "Million Dollar Media",
  url: "https://scalewithads.com",
  bookCallUrl: "/contact",
  email: "hello@scalewithads.com",
  phone: "+1 (800) 555-0148",
  founded: 2013,
  location: {
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  description:
    "Scale With Ads™ installs a done-for-you client acquisition system for businesses already generating $10K+/month — offer positioning, Meta Ads, short-form creatives, landing pages, CRM, AI follow-up and qualification. Double your revenue in 90 days, backed in writing.",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
} as const;

export const nav = [
  { label: "Systems", href: "/services" },
  { label: "Operators", href: "/#clients" },
  { label: "Shorts", href: "/#shorts" },
  { label: "Results", href: "/#results" },
  { label: "Media Library", href: "/medialibrary" },
] as const;

export const navCta = {
  label: "Book Free Strategy Call",
  href: site.bookCallUrl,
} as const;
