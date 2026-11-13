import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Client Results & Verified Proof | Scale With Ads™",
  description:
    "Verified client results and live proof: real Meta Ads dashboards, ROAS, revenue and lead numbers from Scale With Ads™ campaigns.",
  path: "/work",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
