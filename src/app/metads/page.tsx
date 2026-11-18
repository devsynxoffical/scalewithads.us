import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { FunnelPage } from "../../components/FunnelPage";
import { METADS_FUNNEL } from "../../lib/funnels";
import { RelatedResources } from "@/components/seo/RelatedResources";

export const metadata: Metadata = pageMeta({
  title: METADS_FUNNEL.metaTitle,
  description:
    METADS_FUNNEL.metaDescription,
  path: "/metads",
});

export default function MetadsPage() {
  return (
    <FunnelPage funnel={METADS_FUNNEL}>
      <RelatedResources
        items={[
          {
            kind: "Guide",
            title: "VSL script structure: 8-part framework",
            text: "The script structure we start every VSL from, with a fill-in template you can use today.",
            href: "/blog/vsl-script-structure",
          },
          {
            kind: "Case study",
            title: "$847K low-ticket funnel",
            text: "A VSL-led Meta Ads funnel that produced $847K at a 3.32x average ROAS.",
            href: "/metalto",
          },
          {
            kind: "Guide",
            title: "Low-ticket offer funnel",
            text: "How front-end offers, bumps and upsells fund your ad spend.",
            href: "/blog/low-ticket-offer-funnel",
          },
        ]}
      />
    </FunnelPage>
  );
}
