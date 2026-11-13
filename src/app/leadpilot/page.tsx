import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { MastermindFunnelPage } from "../../components/MastermindFunnelPage";
import { LEADPILOT_FUNNEL } from "../../lib/funnels";

export const metadata: Metadata = pageMeta({
  title: LEADPILOT_FUNNEL.metaTitle,
  description:
    LEADPILOT_FUNNEL.metaDescription,
  path: "/leadpilot",
});

export default function LeadPilotPage() {
  return <MastermindFunnelPage funnel={LEADPILOT_FUNNEL} />;
}
