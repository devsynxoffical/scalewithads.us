import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Meta Ads Results & Client Case Studies | Scale With Ads™",
  description:
    "Real Meta Ads dashboards, ROAS, revenue and lead results from Scale With Ads™ client campaigns, plus video testimonials from the founders we work with.",
  path: "/work",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
