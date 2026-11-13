import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Services | Meta Ads, Creatives, Funnels & CRM | Scale With Ads™",
  description:
    "Our core client acquisition services: Meta Ads management, ad creatives, VSL scripting, sales funnels, CRM setup, AI follow-up automations and lead qualification.",
  path: "/services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
