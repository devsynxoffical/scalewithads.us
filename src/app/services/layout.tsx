import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Meta Ads Agency for Lead Generation | Scale With Ads™",
  description:
    "A done-for-you Meta Ads agency and paid ads agency: ads management, creatives, landing pages, CRM and AI follow-up that turn ad spend into booked calls.",
  path: "/services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
