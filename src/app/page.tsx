import React from "react";
import type { Metadata } from "next";
import RedesignPage from "./v2/page";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { HOME_SERVICE_JSONLD, faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Scale With Ads™ | Done-For-You Client Acquisition System",
  description:
    "Done-for-you Meta Ads, creatives, funnels, CRM and AI follow-up for $10K+/month businesses. Double your revenue in 90 days, guaranteed in writing.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={HOME_SERVICE_JSONLD} />
      <JsonLd data={faqJsonLd(HOME_FAQS)} />
      <RedesignPage />
    </>
  );
}
