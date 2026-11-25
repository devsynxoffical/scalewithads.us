import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BarChart3, ClipboardList, Crosshair, FileSearch, Layers, Megaphone, MessageSquare, Pill, ShieldCheck } from "lucide-react";
import { LegalLeadPage, type LegalLeadPageConfig } from "@/components/leads/LegalLeadPage";
import { pageMeta } from "@/lib/seo";
import { LEGAL_PRICING } from "@/components/leads/LegalBlocks";

const PATH = "/mass-tort-leads";

export const metadata: Metadata = pageMeta({
  title: "Mass Tort Leads and Mass Tort Marketing",
  description:
    "Mass tort leads screened against your case criteria, with phone verification and fast intake follow-up. Learn what mass tort lead generation involves.",
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
  cardsLead: (
    <>
      <strong className="text-stone-950">What is a mass tort?</strong> A mass tort is a civil case where many people are harmed by the same product, drug or action, such as a defective medical device or a harmful chemical. Unlike a class action, each claimant keeps an individual case, so firms need to sign and manage many individual clients.
    </>
  ),
  cardsIntro: "Every mass tort has strict criteria: product, exposure dates, diagnosis and timing. We build the ad and the screening form around your exact criteria, so claimants who do not qualify are filtered out before they reach your intake team.",
  cards: [
    { icon: FileSearch, title: "Criteria first", text: "Product or exposure, dates, qualifying diagnoses and states, defined with your team before launch." },
    { icon: Pill, title: "Product & pharmaceutical torts", text: "Campaigns for product liability and drug cases, with messaging your firm approves." },
    { icon: Layers, title: "One campaign per tort", text: "Each tort runs separately, with its own budget, ads, page and reporting." },
    { icon: ClipboardList, title: "Intake-ready questionnaires", text: "Answers collected up front, so intake can move straight to documents." },
    { icon: ShieldCheck, title: "Your accounts, your data", text: "Ads, pages and claimant data stay in your firm's accounts." },
    { icon: BarChart3, title: "Signed-case reporting", text: "Track spend from ad click to signed retainer, by tort and by ad." },
  ],
  qualifyTitle: ["Claimants checked against", "your criteria"],
  qualifyIntro: (
    <>
      Each claimant answers questions about product use, dates, diagnosis and existing representation. Phone numbers are verified, and qualified claimants are sent to intake in real time. It is the same screening approach we use for <Link href="/personal-injury-lead-generation" className="font-bold text-purple-700 underline underline-offset-4">personal injury lead generation</Link> and <Link href="/workers-comp-leads" className="font-bold text-purple-700 underline underline-offset-4">workers comp leads</Link>.
    </>
  ),
  questions: [
    "Did you use or were you exposed to the product, and when?",
    "Were you diagnosed with a qualifying condition?",
    "When were you diagnosed?",
    "Which state do you live in?",
    "Have you already signed with another law firm?",
  ],
  showCalculator: true,
  answerQuestion: "What is a mass tort lead?",
  answer:
    "A mass tort lead is a person who may qualify for a specific mass tort, such as a defective product or drug case, and has asked to speak to a law firm. Good leads are screened against the case criteria before intake. We have not published mass tort results yet.",
  pricing: LEGAL_PRICING,
  calcIntro: (
    <>
      In mass tort, the real measure is cost per signed retainer. We report leads, qualified claimants and signed cases. Note: we do not publish mass tort results yet. We will add them once campaigns complete reporting. See how we run <Link href="/facebook-ads-for-lawyers" className="font-bold text-purple-700 underline underline-offset-4">Facebook ads for lawyers</Link>.
    </>
  ),
  steps: [
    { icon: FileSearch, title: "Criteria workshop", text: "We document your tort criteria, exclusions and target states." },
    { icon: Megaphone, title: "Ads & landing pages", text: "Tort-specific ads and pages, approved by your firm before launch." },
    { icon: BadgeCheck, title: "Screening", text: "A questionnaire checks every claimant against your criteria." },
    { icon: MessageSquare, title: "Instant follow-up", text: "Qualified claimants get an SMS and email in seconds and land in your CRM." },
    { icon: Crosshair, title: "Optimize on signed cases", text: "Budget moves toward the audiences and ads producing signed retainers." },
  ],
  compliance: "Your firm reviews and approves every ad, landing page and questionnaire before launch, so they can be checked against your state bar's advertising rules. We have not yet published mass tort case studies; our published legal results come from MVA and personal injury campaigns.",
  faqs: [
    { q: "What is a mass tort?", a: "A mass tort is a legal action where many people are injured by the same product, drug or event. Each person files an individual claim, which is different from a class action, where one case represents everyone." },
    { q: "What is a mass tort lead?", a: "A mass tort lead is a person who may qualify for a specific mass tort, such as a defective product or drug case, and has asked to speak to a law firm. A good lead has already been screened against the case criteria." },
    { q: "How does mass tort lead generation work?", a: "1. Define the case criteria with the firm. 2. Run ads to people who may qualify. 3. Screen each claimant on product use, dates, diagnosis and representation. 4. Verify the phone number. 5. Send qualified claimants to intake in real time." },
    { q: "What is mass tort lead generation?", a: "It is the process of finding people who may qualify for a specific mass tort and screening them against the case criteria before they reach a law firm's intake team." },
    { q: "Is mass tort the same as a class action?", a: "No. In a class action, one lawsuit represents the whole group. In a mass tort, each claimant has an individual case, although the cases are often handled together." },
    { q: "How are mass tort leads screened?", a: "Claimants answer questions on product use, exposure dates, diagnosis and representation. Only those who match your criteria are sent to intake." },
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
