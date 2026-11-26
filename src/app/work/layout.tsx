import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Meta Ads Results and Client Case Studies | Scale With Ads",
  description:
    "Meta Ads results by industry: legal, roofing, coaching, webinars, mortgage, agencies and more, each shown with the client dashboard screenshot it came from.",
  path: "/work",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
