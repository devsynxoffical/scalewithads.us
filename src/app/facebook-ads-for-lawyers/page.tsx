import type { Metadata } from "next";
import { BadgeCheck, BarChart3, Car, Crosshair, Gavel, HardHat, Megaphone, MessageSquare, Pill, Scale } from "lucide-react";
import { LegalLeadPage, type LegalLeadPageConfig } from "@/components/leads/LegalLeadPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/facebook-ads-for-lawyers";

export const metadata: Metadata = pageMeta({
  title: "Facebook Ads for Lawyers & Law Firms | Scale With Ads™",
  description:
    "Facebook ads for lawyers and law firms: done-for-you Meta Ads that bring exclusive case inquiries, with real results like 530 PI leads in 7 days.",
  path: PATH,
});

const config: LegalLeadPageConfig = {
  path: PATH,
  crumb: "Facebook Ads for Lawyers",
  chip: "For law firms",
  h1: ["", "Facebook Ads for Lawyers", "That Bring Signed Cases"],
  intro: (
    <>
      Done-for-you Facebook and Instagram ads for law firms, run in <strong className="text-stone-950">your own ad account</strong>. We build the ads, landing pages, qualification and follow-up, so your intake team talks to people with real cases, not tire-kickers.
    </>
  ),
  bullets: ["Exclusive case inquiries", "Ads your firm approves", "Live in 14–21 days"],
  industry: "Law firm (Facebook ads)",
  formTitle: "Get a plan for your firm",
  formSubmit: "Get my campaign plan",
  service: {
    name: "Facebook ads for lawyers and law firms",
    serviceType: "Law firm Facebook advertising",
    description: "Done-for-you Meta Ads for law firms, including personal injury, motor vehicle accident, workers' compensation and mass tort practices.",
    audience: "Law firms",
  },
  showProof: true,
  proofTitle: "Real law firm campaigns",
  cardsEyebrow: "Practice areas",
  cardsTitle: ["Facebook ads for", "every case type"],
  cardsIntro: "Each practice area gets its own campaigns, landing pages and qualifying questions. Pick a practice area to see how we run it.",
  cards: [
    { icon: Scale, title: "Personal injury", text: "Done-for-you Meta Ads for PI firms, from research to CRM.", href: "/personal-injury-lead-generation" },
    { icon: Gavel, title: "MVA leads", text: "Car, motorcycle and truck accident leads only your firm gets.", href: "/exclusive-mva-leads" },
    { icon: Car, title: "Car accident leads", text: "Campaigns built around crash type, fault and injury.", href: "/car-accident-leads" },
    { icon: HardHat, title: "Workers' compensation", text: "Injured workers screened for work injury and claim status.", href: "/workers-comp-leads" },
    { icon: Pill, title: "Mass tort", text: "Claimants screened against your tort criteria.", href: "/mass-tort-leads" },
    { icon: Crosshair, title: "Hidden audience research", text: "The targeting method behind our legal campaigns, taught in our mastermind.", href: "/mvaleadgeneration" },
  ],
  qualifyTitle: ["Every inquiry screened", "before intake"],
  qualifyIntro: "Law firm ads attract curious clicks as well as real cases. Short qualifying questions, set with your firm, filter inquiries before your team spends time on them.",
  questions: [
    "What happened, and when?",
    "Were you injured or financially harmed?",
    "Which state did it happen in?",
    "Have you already hired a lawyer?",
    "What's the best time to call you?",
  ],
  showCalculator: true,
  steps: [
    { icon: Crosshair, title: "Research", text: "Audiences and messaging mapped for each practice area and state." },
    { icon: Megaphone, title: "Ads & landing pages", text: "Video and image ads plus practice-area pages, approved by your firm." },
    { icon: BadgeCheck, title: "Qualification", text: "Practice-specific questions on every form." },
    { icon: MessageSquare, title: "Instant follow-up", text: "SMS and email in seconds, and the inquiry lands in your CRM." },
    { icon: BarChart3, title: "Optimize on signed cases", text: "Budget moves toward what produces signed cases, not just clicks." },
  ],
  compliance: "Your firm reviews and approves every ad and landing page before launch, so they can be checked against your state bar's attorney advertising rules.",
  faqs: [
    { q: "Do Facebook ads work for lawyers?", a: "They can, when the offer, qualification and follow-up work together. Our published law firm campaigns include 530 leads in 7 days for a Texas personal injury firm and 76 MVA leads in 5 days. Results vary by state, practice area and intake speed." },
    { q: "Are law firms allowed to advertise on Facebook?", a: "Yes, law firms can advertise on Facebook, but attorney advertising is regulated by each state bar. Your firm approves every ad and landing page before launch so they can be checked against your state's rules." },
    { q: "How much do Facebook ads for law firms cost?", a: "You pay Meta directly for ad spend plus our fee. In our published legal campaigns, cost per lead ranged from $17.13 to $26.93. Cost per signed case depends on your sign rate, which you can model with the calculator on this page." },
    { q: "Which practice areas do you run ads for?", a: "Personal injury, motor vehicle accidents, car accidents, workers' compensation and mass tort. Each practice area runs as its own campaign." },
    { q: "Who owns the ad account and leads?", a: "Your firm. Everything runs in your accounts, and the ads, pages and data stay with you if we ever part ways." },
    { q: "How long until we get leads?", a: "Campaigns typically go live 14 to 21 days after the kickoff call, and leads start once the ads are approved and running." },
  ],
  faqTitle: "Facebook ads for lawyers.",
  finalTitle: "Get a Facebook ads plan for your firm",
  finalBullets: ["Practice areas and states with the best opportunity", "What a realistic cost per lead looks like for your firm", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Service", title: "Exclusive MVA leads", text: "Car, motorcycle and truck accident leads only your firm gets.", href: "/exclusive-mva-leads" },
    { kind: "Service", title: "Personal injury lead generation", text: "The full done-for-you lead system for PI firms.", href: "/personal-injury-lead-generation" },
    { kind: "Guide", title: "How to find hidden Facebook interests", text: "The targeting workflow behind our legal campaigns.", href: "/blog/find-hidden-facebook-interests" },
  ],
};

export default function FacebookAdsForLawyersPage() {
  return <LegalLeadPage c={config} />;
}
