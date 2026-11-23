import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// This route's page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMeta({
  title: "Meta Ads Agency for Client Acquisition | Scale With Ads",
  description:
    "Meta ads agency for service businesses and law firms. Creatives, conversion funnels, media buying and VSL ads that book calls. See our services.",
  path: "/services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
