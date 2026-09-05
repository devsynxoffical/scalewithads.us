import type { Metadata } from "next";
import { FunnelPage } from "../../components/FunnelPage";
import { METADS_FUNNEL } from "../../lib/funnels";

export const metadata: Metadata = {
  title: METADS_FUNNEL.metaTitle,
  description: METADS_FUNNEL.metaDescription,
};

export default function MetadsPage() {
  return <FunnelPage funnel={METADS_FUNNEL} />;
}
