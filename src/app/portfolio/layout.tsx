import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Portfolio | Ad Creatives & Funnels | Scale With Ads™",
  description:
    "The Scale With Ads™ portfolio: video ad creatives, landing pages and funnels built for clients across roofing, legal, coaching, B2B and more.",
  path: "/portfolio",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
