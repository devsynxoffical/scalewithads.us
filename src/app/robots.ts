import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// AI search and assistant crawlers, explicitly welcomed so the site can be cited
// in ChatGPT, Claude, Perplexity, Gemini and Copilot answers (GEO / AEO).
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    // Everything is crawlable. /v2 stays out of results through its own
    // noindex tag (blocking it here would hide that tag from Google).
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
