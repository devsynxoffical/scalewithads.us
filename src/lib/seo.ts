import type { Metadata } from "next";
import type { Faq } from "./faqs";

/** Canonical origin of the live site (Vercel redirects scalewithads.us to www). Used by the sitemap, robots.txt, JSON-LD and metadataBase. */
export const SITE_URL = "https://www.scalewithads.us";
export const SITE_NAME = "Scale With Ads™";
/** Default 1200x630 share image (public/og-image.png). */
export const OG_IMAGE = "/og-image.png";

export const SITE_DESCRIPTION =
  "Scale With Ads™ is a done-for-you client acquisition agency. We install Meta Ads, ad creatives, funnels, CRM, AI follow-up and lead qualification into $10K+/month businesses, and put a 90-day double-revenue guarantee in writing.";

/**
 * Per-page metadata: title, description, canonical URL, Open Graph and Twitter card.
 * `path` is the page's own URL path, e.g. "/services".
 */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME}: Double Your Revenue In 90 Days` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

/** Organization + WebSite structured data, published on every page from the root layout. */
export const SITE_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Scale With Ads", "ScaleWithAds"],
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-logo/mainlogoswa.png`, width: 1600, height: 719 },
      image: `${SITE_URL}${OG_IMAGE}`,
      description: SITE_DESCRIPTION,
      founder: [
        { "@type": "Person", name: "Vaishali Kapoor", jobTitle: "Founder" },
        { "@type": "Person", name: "Gaurav Kapoor", jobTitle: "Co-Founder" },
      ],
      knowsAbout: [
        "Meta Ads",
        "Facebook advertising",
        "Client acquisition",
        "Lead generation",
        "Sales funnels",
        "Video sales letters",
        "CRM automation",
        "Personal injury lead generation",
      ],
      sameAs: ["https://www.facebook.com/groups/milliondollarmedia"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

/** Service structured data for the home page (the core done-for-you offer). */
export const HOME_SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "Done-For-You Client Acquisition System",
  serviceType: "Meta Ads management and client acquisition",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "Worldwide",
  audience: {
    "@type": "BusinessAudience",
    name: "Agency owners, coaches, consultants, high-ticket service providers and B2B founders generating $10,000+/month",
  },
  description:
    "We install a complete client acquisition system: offer positioning, Meta Ads management, ad creatives, sales funnels, CRM setup, AI follow-up automations, SMS/email sequences, lead qualification and calendar booking. Double your revenue in 90 days, or we keep working at no management fee until we do, backed by a written agreement.",
  url: SITE_URL,
};

/** FAQPage structured data built from on-page FAQ content (must match what the page shows). */
export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

type Route = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

/**
 * Public pages listed in sitemap.xml. Add new pages here.
 * /v2 is left out on purpose: it is the same page as the home page.
 */
export const SITEMAP_ROUTES: Route[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/work", changeFrequency: "weekly", priority: 0.8 },
  { path: "/medialibrary", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privatemastermind", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mvaleadgeneration", changeFrequency: "monthly", priority: 0.8 },
  { path: "/metalto", changeFrequency: "monthly", priority: 0.7 },
  { path: "/paidpilot", changeFrequency: "monthly", priority: 0.7 },
  { path: "/metads", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leadpilot", changeFrequency: "monthly", priority: 0.7 },
  { path: "/features", changeFrequency: "monthly", priority: 0.6 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privatemastermind/coaching", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.5 },
];
