import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Database, Eye, Gavel, Handshake, Megaphone, Share2, ShieldCheck, Timer } from "lucide-react";
import { PillarPage, type PillarPageConfig } from "@/components/leads/PillarPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/best-personal-injury-lead-generation-companies";
const A = "font-bold text-purple-700 underline underline-offset-4";

export const metadata: Metadata = pageMeta({
  title: "Best Personal Injury Lead Generation Companies",
  description:
    "How to compare personal injury lead generation companies: the 4 provider types, 8 criteria, red flags and a fair comparison table. We are one of the options.",
  path: PATH,
});

const config: PillarPageConfig = {
  path: PATH,
  crumb: "PI Lead Generation Companies",
  chip: "A fair comparison",
  h1: ["The Best", "Personal Injury Lead Generation", "Companies: How to Compare"],
  intro: (
    <>
      There is no single best personal injury lead generation company for every firm. The right choice depends on your budget, your intake team and whether you want to rent leads or own the source. This page compares the <strong className="text-stone-950">types of legal lead generation companies</strong> fairly. Scale With Ads is one of the options, and we say where other models may suit you better.
    </>
  ),
  answerQuestion: "What makes a good personal injury lead generation company?",
  answer:
    "A good personal injury lead generation company sends each lead to your firm only, screens leads before delivery, verifies contact details, delivers in real time, is clear about who owns the data, follows state bar advertising rules and publishes dated results. Compare providers on cost per signed case, not on price per lead alone.",
  bullets: ["4 provider types", "8 criteria", "Honest trade-offs"],
  industry: "PI lead generation comparison",
  formTitle: "Talk through your options",
  service: {
    name: "Personal injury lead generation",
    serviceType: "Personal injury lead generation company comparison",
    description: "A fair comparison of personal injury and legal lead generation company types, with criteria for law firms choosing a provider.",
  },
  proofTitle: "Our own published results",
  proofIntro:
    "As one of the options on this page, here are our published legal campaign results: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days, each with a dated dashboard.",
  sections: [
    {
      id: "types",
      eyebrow: "Provider types",
      title: ["4 types of legal lead", "generation companies"],
      paras: [
        "Most personal injury lead generation companies fit one of four models. Each model has real advantages. The right one depends on how fast you need cases, how much control you want and how strong your intake team is.",
      ],
      table: {
        caption: "Personal injury lead generation company types compared",
        head: ["Type", "Best for", "Trade-off", "Who owns the source"],
        rows: [
          ["Shared lead networks", "Firms that want low-cost volume and can call instantly", "The same person may be sold to several firms", "The network"],
          ["Exclusive lead vendors", "Firms that want leads now without building anything", "Higher price per lead, and volume stops when you stop paying", "The vendor"],
          ["Pay per signed case providers", "Firms that only want to pay for results", "Highest price per case, less control over marketing", "The provider"],
          ["Agencies running ads in your own account (our model)", "Firms that want to own the source and data long term", "Takes setup time and needs a fast intake team", "Your firm"],
        ],
      },
    },
    {
      id: "criteria",
      eyebrow: "The criteria",
      title: ["8 criteria for choosing a", "PI lead generation company"],
      paras: [
        <>Score every provider, including us, on the same 8 points. The full checklist is in our guide on <Link href="/blog/how-to-choose-a-legal-lead-generation-company" className={A}>how to choose a legal lead generation company</Link>.</>,
      ],
      cards: [
        { icon: Share2, title: "1. Exclusivity", text: "Is each lead sent to your firm only, or to several firms at once?" },
        { icon: BadgeCheck, title: "2. Screening", text: "Does every lead answer questions on the incident, injuries, treatment and representation?" },
        { icon: ShieldCheck, title: "3. Verification", text: "Are phone numbers verified before delivery?" },
        { icon: Timer, title: "4. Speed", text: "Are leads delivered in real time, with automatic follow-up?" },
        { icon: Database, title: "5. Ownership", text: "Who keeps the ads, pages and data if you stop?" },
        { icon: Gavel, title: "6. Compliance", text: "Are ads reviewed against your state bar's advertising rules?" },
        { icon: Eye, title: "7. Reporting", text: "Can you see cost per lead and cost per signed case by case type?" },
        { icon: Megaphone, title: "8. Proof", text: "Are results published with dates and dashboards, not only testimonials?" },
      ],
    },
    {
      id: "when-not-us",
      eyebrow: "Honest trade-offs",
      title: ["When another model", "may suit you better"],
      paras: [
        "Running campaigns in your own account is not right for every firm. A different provider type may be a better fit if:",
      ],
      list: [
        "You need leads this week and cannot wait 14 to 21 days for a build",
        "Your firm has no one available to call leads within minutes",
        "You only want to pay when a case signs, whatever the price per case",
        "You want a small test before committing to any ad budget",
        "You prefer not to approve ads and landing pages yourself",
        "You only take a handful of cases a month and do not need a system",
      ],
    },
    {
      id: "red-flags",
      eyebrow: "Red flags",
      title: ["Red flags when buying", "personal injury leads"],
      paras: [
        <>These warning signs apply to every type of provider. For pricing, see <Link href="/blog/how-much-do-mva-leads-cost" className={A}>how much MVA leads cost</Link>.</>,
      ],
      steps: [
        { title: "Vague exclusivity", text: "The provider will not say in writing whether leads are shared." },
        { title: "No screening", text: "Forms ask only for a name and phone number." },
        { title: "Undated results", text: "Big numbers with no dates, dashboards or context." },
        { title: "No data ownership", text: "You lose the source, history and data the day you stop." },
        { title: "Outcome promises", text: "Ads or sales pitches that guarantee case results or settlements." },
        { title: "No compliance review", text: "Nobody checks ads against your state bar's rules." },
      ],
    },
    {
      id: "our-approach",
      eyebrow: "Where we fit",
      title: ["Where Scale With Ads", "fits"],
      paras: [
        <>We are the fourth type: an agency that runs Facebook and Instagram campaigns in your own ad account, screens every lead and follows up instantly. If that model fits your firm, see <Link href="/personal-injury-lead-generation" className={A}>personal injury lead generation</Link> and <Link href="/exclusive-mva-leads" className={A}>exclusive MVA leads</Link>. If it does not, use the criteria above to choose another provider with confidence.</>,
      ],
      cards: [
        { icon: Handshake, title: "Your account", text: "Ads run in your firm's own ad account, so every lead is yours alone." },
        { icon: BadgeCheck, title: "Screened leads", text: "Every lead answers qualifying questions before it reaches intake." },
        { icon: Eye, title: "Published proof", text: "Our legal results are shown with dated dashboards on our results page." },
      ],
    },
  ],
  pricing: [
    "Our model: you pay Meta directly for ad spend in your own account, plus a management fee scoped on the strategy call.",
    "Other models charge per lead, per signed case or a monthly retainer. Ask each provider for the full cost and compare cost per signed case.",
    "In our published campaigns, legal leads cost $17.13 to $26.93 each. Prices from other providers vary by model, state and case type.",
    "No long-term lock-in: the ads, pages and lead data stay with your firm.",
  ],
  faqs: [
    { q: "Who are the best personal injury lead generation companies?", a: "The best one depends on your firm. Compare providers by type (shared, exclusive vendor, pay per signed case or ads in your own account) and score each on exclusivity, screening, verification, speed, ownership, compliance, reporting and proof." },
    { q: "Are shared personal injury leads worth it?", a: "They can work for firms that call instantly and want low-cost volume, but the same person may be sold to several firms. Compare them with exclusive leads on cost per signed case." },
    { q: "What is the difference between a lead vendor and a marketing agency?", a: "A lead vendor runs its own ads and sells you the leads. An agency like ours runs ads in your firm's account, so you own the source, the data and the history." },
    { q: "How much do personal injury leads cost?", a: "It depends on the model, state and case type. In our own published Meta ads campaigns, legal leads cost $17.13 to $26.93 each. Ask every provider for cost per signed case." },
    { q: "Is Scale With Ads included in this comparison?", a: "Yes. We are one of the four provider types, an agency running ads in your own account, and we say on this page when another model may suit your firm better." },
    { q: "What questions should I ask before signing with a lead provider?", a: "Ask whether leads are exclusive, how they are screened and verified, how fast they arrive, who owns the data, how ads follow state bar rules and whether results are published with dates." },
  ],
  faqTitle: "PI lead generation companies.",
  finalTitle: "Not sure which model fits your firm?",
  finalBullets: ["An honest view of which provider type suits you", "What a campaign in your own account would look like", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Guide", title: "How to choose a legal lead generation company", text: "The full 8-point checklist.", href: "/blog/how-to-choose-a-legal-lead-generation-company" },
    { kind: "Service", title: "Legal lead generation", text: "Exclusive attorney leads from your own campaigns.", href: "/legal-lead-generation" },
    { kind: "Service", title: "Personal injury lead generation", text: "Our done-for-you system for PI firms.", href: "/personal-injury-lead-generation" },
  ],
};

export default function BestPiLeadGenCompaniesPage() {
  return <PillarPage c={config} />;
}
