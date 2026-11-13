/** Canonical origin of the live site. Used by the sitemap, robots.txt and metadataBase. */
export const SITE_URL = "https://scalewithads.us";

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
