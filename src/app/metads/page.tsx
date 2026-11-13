import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { FunnelPage } from "../../components/FunnelPage";
import { METADS_FUNNEL } from "../../lib/funnels";

export const metadata: Metadata = pageMeta({
  title: METADS_FUNNEL.metaTitle,
  description:
    METADS_FUNNEL.metaDescription,
  path: "/metads",
});

export default function MetadsPage() {
  return <FunnelPage funnel={METADS_FUNNEL} />;
}
