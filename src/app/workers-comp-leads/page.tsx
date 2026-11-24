import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Building2, Crosshair, HardHat, HeartPulse, Megaphone, MessageSquare, Package, Repeat, Truck, BarChart3 } from "lucide-react";
import { LegalLeadPage, type LegalLeadPageConfig } from "@/components/leads/LegalLeadPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/workers-comp-leads";

export const metadata: Metadata = pageMeta({
  title: "Workers Comp Leads for Attorneys From Facebook Ads",
  description:
    "Exclusive workers' compensation leads for attorneys from Facebook and Instagram ads in your own account, screened for work injury, reporting and representation.",
  path: PATH,
});

const config: LegalLeadPageConfig = {
  path: PATH,
  crumb: "Workers Comp Leads",
  chip: "For workers' compensation attorneys",
  h1: ["Exclusive", "Workers Comp Leads", "for Attorneys"],
  intro: (
    <>
      Injured workers who need a workers&apos; compensation lawyer, reached with Facebook and Instagram ads in <strong className="text-stone-950">your own ad account</strong> and screened before they reach intake. It&apos;s the same lead system behind our{" "}
      <Link href="/exclusive-mva-leads" className="font-bold text-purple-700 underline underline-offset-4">MVA campaigns</Link>, built around work injuries.
    </>
  ),
  bullets: ["Exclusive to your firm", "Screened for work injury", "Live in 14–21 days"],
  industry: "Workers' compensation",
  formTitle: "Get workers comp leads",
  formSubmit: "Get my lead plan",
  service: {
    name: "Workers' compensation leads for attorneys",
    serviceType: "Workers' compensation lead generation",
    description: "Exclusive workers' compensation case inquiries from Meta Ads run in the law firm's own ad account, qualified before intake.",
    audience: "Workers' compensation law firms",
  },
  showProof: false,
  cardsEyebrow: "Who the ads reach",
  cardsTitle: ["Campaigns for the", "industries injuries happen in"],
  cardsIntro: "Workers in different jobs get hurt in different ways and respond to different messages. Each group gets its own ads and landing page.",
  cards: [
    { icon: HardHat, title: "Construction workers", text: "Falls, equipment and site injuries, in English and Spanish where needed." },
    { icon: Package, title: "Warehouse & logistics", text: "Lifting, forklift and repetitive injuries in warehouses and distribution centers." },
    { icon: Truck, title: "Drivers & delivery", text: "Truck drivers, couriers and delivery workers hurt on the job." },
    { icon: HeartPulse, title: "Healthcare workers", text: "Nurses, aides and caregivers with lifting and patient-handling injuries." },
    { icon: Repeat, title: "Repetitive strain", text: "Carpal tunnel, back and shoulder injuries that develop over time." },
    { icon: Building2, title: "Denied or delayed claims", text: "Workers whose claim was denied, delayed or cut off by the employer's insurer." },
  ],
  qualifyTitle: ["Screen every claim", "before intake"],
  qualifyIntro: (
    <>
      Every lead is screened before intake: a short form confirms the injury happened at work, that it was reported and whether the worker already has a lawyer. Your intake team only speaks to people you can help. For the full process, read{" "}
      <Link href="/blog/how-to-get-workers-comp-leads" className="font-bold text-purple-700 underline underline-offset-4">how to get workers&apos; comp leads</Link>.
    </>
  ),
  questions: [
    "Were you injured while working?",
    "Have you reported the injury to your employer?",
    "Has your claim been denied, delayed or reduced?",
    "Are you receiving medical treatment?",
    "Do you already have a lawyer?",
  ],
  showCalculator: true,
  steps: [
    { icon: Crosshair, title: "Audience research", text: "Industries, job types and areas mapped for the states you practice in." },
    { icon: Megaphone, title: "Ads & landing pages", text: "Work-injury ads and pages, approved by your firm before launch." },
    { icon: BadgeCheck, title: "Qualification", text: "Work-injury, reporting, claim-status and representation questions." },
    { icon: MessageSquare, title: "Instant follow-up", text: "An SMS and email in seconds, and the lead lands in your CRM." },
    { icon: BarChart3, title: "Optimize on signed cases", text: "Budget moves toward the audiences and ads that produce signed cases." },
  ],
  compliance: "Your firm reviews and approves every ad and landing page before launch, so they can be checked against your state bar's attorney advertising rules. We have not yet published workers' comp case studies; our published legal results come from MVA and personal injury campaigns.",
  faqs: [
    { q: "What are workers comp leads?", a: "Workers' comp leads are inquiries from people injured at work who want help with a workers' compensation claim, often after a claim was denied, delayed or reduced." },
    { q: "How do lawyers find workers comp leads?", a: "Most firms rely on referrals, search ads, lead vendors or social media ads. Facebook and Instagram ads in the firm's own ad account reach injured workers directly, and every lead is screened for a work injury, a reported claim and existing representation before it reaches intake." },
    { q: "Are these workers' comp leads exclusive?", a: "Yes. The ads run in your firm's own ad account and every inquiry goes only to your intake team." },
    { q: "How are leads qualified?", a: "Every form asks whether the injury happened at work, whether it was reported, the status of the claim, treatment and whether the person already has a lawyer. Your firm sets the final questions." },
    { q: "How much do workers' comp leads cost?", a: "It depends on your state, audience and offer. You pay Meta directly for ad spend plus our fee, and you can estimate your cost per signed case with the calculator on this page." },
    { q: "Do you have workers' comp results?", a: "Our published legal results are from MVA and personal injury campaigns, which use the same system. We will publish workers' comp results once a campaign has enough data to share." },
    { q: "Can workers' comp run alongside our PI campaigns?", a: "Yes. Each practice area runs as its own campaign with its own budget and reporting." },
  ],
  faqTitle: "workers comp leads.",
  finalTitle: "Get workers' comp leads only your firm receives",
  finalBullets: ["A campaign plan for your state and industries", "Qualifying questions built with your intake team", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Service", title: "Facebook ads for lawyers", text: "Meta Ads for personal injury, workers' comp and mass tort practices.", href: "/facebook-ads-for-lawyers" },
    { kind: "Service", title: "Exclusive MVA leads", text: "See the published MVA results behind this system.", href: "/exclusive-mva-leads" },
    { kind: "Service", title: "Mass tort leads", text: "Criteria-based campaigns for mass tort dockets.", href: "/mass-tort-leads" },
  ],
};

export default function WorkersCompLeadsPage() {
  return <LegalLeadPage c={config} />;
}
