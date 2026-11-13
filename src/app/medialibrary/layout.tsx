import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Shorts & Video Library | Ad Creatives | Scale With Ads™",
  description:
    "Browse the Scale With Ads™ library of short-form video ads, UGC creatives and VSLs produced for client campaigns.",
  path: "/medialibrary",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
