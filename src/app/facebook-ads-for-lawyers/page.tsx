import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BarChart3, Car, Crosshair, Gavel, HardHat, Megaphone, MessageSquare, Pill, Scale } from "lucide-react";
import { LegalLeadPage, type LegalLeadPageConfig } from "@/components/leads/LegalLeadPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/facebook-ads-for-lawyers";

export const metadata: Metadata = pageMeta({
  title: "Facebook Ads for Lawyers That Bring Signed Cases",
  description:
    "Facebook ads for lawyers and law firms: case-type campaigns, screened leads and fast intake. See real results like 530 leads in 7 days for a PI firm.",
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
  proofIntro: "Real campaigns, real numbers: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Click a result to see the Meta Ads dashboard it came from.",
  cardsEyebrow: "Practice areas",
  cardsTitle: ["Facebook ads for", "every case type"],
  cardsIntro: (
    <>
      Each case type gets its own ads, landing page and screening questions, from <Link href="/car-accident-leads" className="font-bold text-purple-700 underline underline-offset-4">car accident leads</Link> and <Link href="/exclusive-mva-leads" className="font-bold text-purple-700 underline underline-offset-4">exclusive MVA leads</Link> to <Link href="/workers-comp-leads" className="font-bold text-purple-700 underline underline-offset-4">workers comp leads</Link> and <Link href="/mass-tort-leads" className="font-bold text-purple-700 underline underline-offset-4">mass tort leads</Link>.
    </>
  ),
  cards: [
    { icon: Scale, title: "Personal injury", text: "Slip and fall, premises and other injury cases.", href: "/personal-injury-lead-generation" },
    { icon: Gavel, title: "Truck and MVA accidents", text: "Motor vehicle accident leads only your firm gets, screened fast.", href: "/exclusive-mva-leads" },
    { icon: Car, title: "Car accidents", text: "Recent-accident targeting with fast screening.", href: "/car-accident-leads" },
    { icon: HardHat, title: "Workers comp", text: "Injured workers screened on employment and injury date.", href: "/workers-comp-leads" },
    { icon: Pill, title: "Mass tort", text: "Claimants screened against your exact case criteria.", href: "/mass-tort-leads" },
    { icon: Crosshair, title: "Hidden audience research", text: "The targeting method behind our legal campaigns, taught in our mastermind.", href: "/mvaleadgeneration" },
  ],
  qualifyTitle: ["Every inquiry screened", "before intake"],
  qualifyIntro: "Each lead answers qualifying questions before it reaches your intake team: accident date, injuries, treatment, fault and whether they already have an attorney. Phone numbers can be verified with a one-time code, so your team spends time on real cases.",
  questions: [
    "What happened, and when?",
    "Were you injured or financially harmed?",
    "Which state did it happen in?",
    "Have you already hired a lawyer?",
    "What's the best time to call you?",
  ],
  showCalculator: true,
  calcIntro: (
    <>
      Cost per lead is only the first number. What matters is cost per signed case, which depends on screening, speed to contact and intake quality. We report both, so you can see exactly what each signed case costs. For{" "}
      <Link href="/personal-injury-lead-generation" className="font-bold text-purple-700 underline underline-offset-4">personal injury lead generation</Link>, enter your own numbers below.
    </>
  ),
  steps: [
    { icon: Crosshair, title: "Strategy call", text: "Strategy call on case types, areas and intake capacity." },
    { icon: Megaphone, title: "Ads & landing pages", text: "Ads and landing pages built for each case type." },
    { icon: BadgeCheck, title: "Screening forms", text: "Screening forms built for each case type." },
    { icon: MessageSquare, title: "Real-time delivery", text: "Leads delivered in real time with instant text follow-up." },
    { icon: BarChart3, title: "Optimize on signed cases", text: "Weekly optimization based on signed cases." },
  ],
  compliance: "Your firm reviews and approves every ad and landing page before launch, so they can be checked against your state bar's attorney advertising rules.",
  faqs: [
    { q: "Do Facebook ads work for lawyers?", a: "Yes. Facebook and Instagram reach people shortly after an accident or injury, often before they search for a lawyer. With strong screening and fast intake, they can produce signed cases at a predictable cost." },
    { q: "Can lawyers advertise on Facebook?", a: "Yes. Lawyers in the US can advertise on Facebook, but ads must follow their state bar's advertising rules, which can cover claims, testimonials and disclaimers. Campaigns should be reviewed with those rules in mind." },
    { q: "How do I run Facebook ads for a law firm?", a: "Choose a case type, build an ad and a landing page for it, add screening questions, connect leads to your intake team in real time and track which leads become signed cases." },
    { q: "How much do Facebook ads cost for lawyers?", a: "Costs vary by case type, market and competition. Personal injury and MVA campaigns usually have higher lead costs than general practice, but they also bring much higher case values." },
    { q: "What types of law firms benefit most from Facebook ads?", a: "Personal injury, motor vehicle accident, workers comp, mass tort, family law and immigration firms often see strong results because their clients make decisions quickly after an event." },
    { q: "Are Facebook leads exclusive to my firm?", a: "Yes. Campaigns run in your own ad account, so leads come only to you and are not resold." },
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
