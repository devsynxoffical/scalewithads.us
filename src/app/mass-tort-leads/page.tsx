import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BarChart3, ClipboardList, Crosshair, FileSearch, Layers, Megaphone, MessageSquare, Pill, ShieldCheck } from "lucide-react";
import { LegalLeadPage, type LegalLeadPageConfig } from "@/components/leads/LegalLeadPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/mass-tort-leads";

export const metadata: Metadata = pageMeta({
  title: "Mass Tort Leads From Facebook & Instagram Ads",
  description:
    "Exclusive mass tort leads for law firms from Facebook and Instagram ads in your own account, screened against your case criteria before intake.",
  path: PATH,
});

const config: LegalLeadPageConfig = {
  path: PATH,
  crumb: "Mass Tort Leads",
  chip: "For mass tort law firms",
  h1: ["Exclusive", "Mass Tort Leads", "Screened to Your Criteria"],
  intro: (
    <>
      Mass tort campaigns live or die on criteria. We run Facebook and Instagram ads in <strong className="text-stone-950">your own ad account</strong> and screen every claimant against your tort&apos;s requirements before they reach intake, using the same system behind our{" "}
      <Link href="/exclusive-mva-leads" className="font-bold text-purple-700 underline underline-offset-4">MVA campaigns</Link>.
    </>
  ),
  bullets: ["Exclusive to your firm", "Criteria-based screening", "You own the data"],
  industry: "Mass tort",
  formTitle: "Get mass tort leads",
  formSubmit: "Get my campaign plan",
  service: {
    name: "Mass tort leads for law firms",
    serviceType: "Mass tort lead generation",
    description: "Exclusive mass tort claimant inquiries from Meta Ads run in the law firm's own ad account, screened against case criteria.",
    audience: "Mass tort law firms",
  },
  showProof: false,
  cardsEyebrow: "How campaigns are built",
  cardsTitle: ["Built around", "your case criteria"],
  cardsIntro: "Every tort has its own product, exposure window and qualifying injuries. Campaigns are built from your criteria, not a generic template.",
  cards: [
    { icon: FileSearch, title: "Criteria first", text: "Product or exposure, dates, qualifying diagnoses and states, defined with your team before launch." },
    { icon: Pill, title: "Product & pharmaceutical torts", text: "Campaigns for product liability and drug cases, with messaging your firm approves." },
    { icon: Layers, title: "One campaign per tort", text: "Each tort runs separately, with its own budget, ads, page and reporting." },
    { icon: ClipboardList, title: "Intake-ready questionnaires", text: "Answers collected up front, so intake can move straight to documents." },
    { icon: ShieldCheck, title: "Your accounts, your data", text: "Ads, pages and claimant data stay in your firm's accounts." },
    { icon: BarChart3, title: "Signed-case reporting", text: "Track spend from ad click to signed retainer, by tort and by ad." },
  ],
  qualifyTitle: ["Claimants checked against", "your criteria"],
  qualifyIntro: "A step-by-step questionnaire asks the questions your docket needs. Claimants who don't meet the criteria are filtered out before anyone at your firm spends time on them.",
  questions: [
    "Did you use or were you exposed to the product, and when?",
    "Were you diagnosed with a qualifying condition?",
    "When were you diagnosed?",
    "Which state do you live in?",
    "Have you already signed with another law firm?",
  ],
  showCalculator: true,
  steps: [
    { icon: FileSearch, title: "Criteria workshop", text: "We document your tort criteria, exclusions and target states." },
    { icon: Megaphone, title: "Ads & landing pages", text: "Tort-specific ads and pages, approved by your firm before launch." },
    { icon: BadgeCheck, title: "Screening", text: "A questionnaire checks every claimant against your criteria." },
    { icon: MessageSquare, title: "Instant follow-up", text: "Qualified claimants get an SMS and email in seconds and land in your CRM." },
    { icon: Crosshair, title: "Optimize on signed cases", text: "Budget moves toward the audiences and ads producing signed retainers." },
  ],
  compliance: "Your firm reviews and approves every ad, landing page and questionnaire before launch, so they can be checked against your state bar's advertising rules. We have not yet published mass tort case studies; our published legal results come from MVA and personal injury campaigns.",
  faqs: [
    { q: "What are mass tort leads?", a: "Mass tort leads are inquiries from people who may qualify for a mass tort case, such as product liability or pharmaceutical litigation, and want to speak to a law firm." },
    { q: "How do you make sure claimants qualify?", a: "Every claimant completes a questionnaire built from your criteria: product or exposure, dates, diagnosis, state and whether they already have a lawyer. Those who don't qualify are filtered out." },
    { q: "Are the leads exclusive?", a: "Yes. The ads run in your firm's own ad account, so claimants go only to your firm and are never resold." },
    { q: "How much do mass tort leads cost?", a: "It varies widely by tort, criteria and state. You pay Meta directly for ad spend plus our fee. Use the calculator on this page to estimate cost per signed case with your own numbers." },
    { q: "Do you have mass tort results?", a: "Our published legal results come from MVA and personal injury campaigns, which use the same system. We will publish mass tort results once a campaign has enough data to share." },
    { q: "Can you run several torts at once?", a: "Yes. Each tort runs as its own campaign with separate budget and reporting." },
  ],
  faqTitle: "mass tort leads.",
  finalTitle: "Get mass tort claimants screened to your criteria",
  finalBullets: ["A campaign plan for your tort and target states", "A screening questionnaire built from your criteria", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Service", title: "Facebook ads for lawyers", text: "Meta Ads for personal injury, workers' comp and mass tort practices.", href: "/facebook-ads-for-lawyers" },
    { kind: "Service", title: "Workers comp leads", text: "Injured workers screened for work injury and claim status.", href: "/workers-comp-leads" },
    { kind: "Service", title: "Exclusive MVA leads", text: "See the published MVA results behind this system.", href: "/exclusive-mva-leads" },
  ],
};

export default function MassTortLeadsPage() {
  return <LegalLeadPage c={config} />;
}
