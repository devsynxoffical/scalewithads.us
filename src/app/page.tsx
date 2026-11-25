import React from "react";
import type { Metadata } from "next";
import RedesignPage from "./v2/page";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { HOME_SERVICE_JSONLD, faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Facebook Ads Agency for Personal Injury Law Firms",
  description:
    "Facebook advertising agency for personal injury law firms: exclusive case leads from Meta ads, screened and followed up in minutes, with real legal results",
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
