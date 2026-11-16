import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Video Ad Creatives & UGC Examples | Scale With Ads™",
  description:
    "Watch short-form video ads, UGC creatives and VSLs we produced for client campaigns in roofing, legal, coaching, B2B and more, sorted by industry.",
  path: "/medialibrary",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
