import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Meta Ads Management, Creatives & Funnels | Scale With Ads™",
  description:
    "Done-for-you Meta Ads management, video ad creatives, VSL scripts, sales funnels, CRM setup and AI follow-up, built to turn ad spend into booked sales calls.",
  path: "/services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
