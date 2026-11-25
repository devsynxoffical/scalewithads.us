import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Car, ClipboardCheck, HardHat, Megaphone, Pill, Scale, Timer, Truck } from "lucide-react";
import { PillarPage, type PillarPageConfig } from "@/components/leads/PillarPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/personal-injury-marketing";
const A = "font-bold text-purple-700 underline underline-offset-4";

export const metadata: Metadata = pageMeta({
  title: "Personal Injury Marketing for Law Firms | Scale With Ads",
  description:
    "Personal injury marketing for law firms: Meta ads, screened case leads, fast intake follow-up and reporting on signed cases, with real PI campaign results.",
  path: PATH,
});

const config: PillarPageConfig = {
  path: PATH,
  crumb: "Personal Injury Marketing",
  chip: "For personal injury law firms",
  h1: ["", "Personal Injury Marketing", "That Brings Signed Cases"],
  intro: (
    <>
      Personal injury lawyer marketing is not about clicks or followers. It is about how many injured people call your firm, how many of them qualify and how many sign. We run Facebook and Instagram advertising for PI firms in <strong className="text-stone-950">your own ad account</strong>, screen every inquiry and get it to your intake team in minutes.
    </>
  ),
  answerQuestion: "What is personal injury marketing?",
  answer:
    "Personal injury marketing is how a law firm attracts people who were recently injured and turns them into signed cases. It combines advertising, screening, fast intake follow-up and tracking from first contact to signed retainer. The best personal injury law firm marketing is judged on cost per signed case, not on clicks or impressions.",
  bullets: ["Exclusive to your firm", "Screened before intake", "Live in 14–21 days"],
  industry: "Personal injury marketing",
  formTitle: "Get a PI marketing plan",
  service: {
    name: "Personal injury marketing for law firms",
    serviceType: "Personal injury law firm marketing",
    description: "Meta ads, lead screening, intake follow-up and signed-case reporting for personal injury law firms, run in the firm's own ad account.",
  },
  proofTitle: "Real personal injury campaigns",
  proofIntro:
    "Published results from our legal campaigns: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Click a result to see the Meta Ads dashboard.",
  sections: [
    {
      id: "system",
      eyebrow: "The system",
      title: ["The 4 parts of", "personal injury marketing"],
      paras: [
        "Most firms that are unhappy with their marketing are not short of traffic. They lose cases between the click and the signature. A personal injury marketing system has four parts, and a weak link in any one of them raises your cost per signed case.",
      ],
      cards: [
        { icon: Megaphone, title: "Advertising", text: "Ads that reach people shortly after an accident or injury, with one message per case type and creatives your firm approves." },
        { icon: ClipboardCheck, title: "Screening", text: "Short forms that ask about the incident date, injuries, treatment, fault and representation before anyone at your firm picks up the phone." },
        { icon: Timer, title: "Intake speed", text: "An instant text and email to every new inquiry, and a call from your intake team within minutes, before another firm reaches them." },
        { icon: BarChart3, title: "Reporting", text: "Every inquiry tracked from first contact to signed case, so budget moves toward the ads and audiences that produce cases." },
      ],
    },
    {
      id: "channels",
      eyebrow: "Channels compared",
      title: ["Personal injury advertising", "channels"],
      paras: [
        "There is no single best channel for personal injury advertising. Each one reaches people at a different moment and has a different speed and cost of ownership. Most firms combine a slow, compounding channel with a fast one.",
        <>Social ads are the fastest way to reach injured people before they start searching, which is why we focus on them. See how we run <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link>.</>,
      ],
      table: {
        caption: "Personal injury marketing channels compared",
        head: ["Channel", "Who it reaches", "Speed to first cases", "Who owns the source"],
        rows: [
          ["Facebook and Instagram ads", "People shortly after an accident, often before they search", "Days to weeks", "Your firm, when ads run in your own account"],
          ["Google search ads", "People actively searching for a lawyer right now", "Days to weeks", "Your firm"],
          ["SEO and content", "People researching their situation over time", "Months", "Your firm"],
          ["TV, radio and billboards", "Broad local audiences, brand recall", "Weeks to months", "Your firm"],
          ["Referrals", "People who trust a past client or another lawyer", "Unpredictable", "Your firm's relationships"],
          ["Lead vendors", "Whoever the vendor's own ads reach", "Fast", "The vendor"],
        ],
      },
    },
    {
      id: "case-types",
      eyebrow: "Case types",
      title: ["One campaign per", "case type"],
      paras: [
        "A car crash victim, an injured warehouse worker and a claimant in a product case respond to different messages and need different screening questions. We build a separate campaign for each case type, with its own ads, landing page, questions and reporting.",
      ],
      cards: [
        { icon: Car, title: "Car accident leads", text: "Drivers and passengers hurt in everyday collisions, screened for fault and injury.", href: "/car-accident-leads" },
        { icon: Truck, title: "MVA leads", text: "Car, truck, motorcycle and rideshare accident inquiries only your firm receives.", href: "/exclusive-mva-leads" },
        { icon: HardHat, title: "Workers comp leads", text: "Injured workers screened for a work injury, reporting and claim status.", href: "/workers-comp-leads" },
        { icon: Pill, title: "Mass tort leads", text: "Claimants checked against your tort criteria before they reach intake.", href: "/mass-tort-leads" },
        { icon: Scale, title: "PI lead generation", text: "The full done-for-you lead system for personal injury firms.", href: "/personal-injury-lead-generation" },
        { icon: Megaphone, title: "Facebook ads for lawyers", text: "How we run Meta ads for every practice area, step by step.", href: "/facebook-ads-for-lawyers" },
      ],
    },
    {
      id: "process",
      eyebrow: "How we work",
      title: ["How we run", "personal injury marketing"],
      paras: [
        "As a personal injury marketing agency, our job is to make your intake team busier with the right people. Here is the process, from the first call to weekly optimization.",
      ],
      steps: [
        { title: "Strategy call", text: "We map your case types, target areas, intake capacity and what a signed case is worth to your firm." },
        { title: "Audience research", text: "We find the audiences and interests that reach injured people in your market, not only the obvious legal interests." },
        { title: "Ads and landing pages", text: "Video and image ads plus a landing page for each case type, reviewed and approved by your firm before launch." },
        { title: "Screening and follow-up", text: "Qualifying questions on every form, phone verification, and an instant text and email to each inquiry." },
        { title: "Launch", text: "Campaigns typically go live 14 to 21 days after the kickoff call, in your own ad account." },
        { title: "Optimize on signed cases", text: "Each week, budget moves toward the ads and audiences that produce signed cases, not just form fills." },
      ],
    },
    {
      id: "who",
      eyebrow: "Who it is for",
      title: ["Built for", "personal injury firms"],
      paras: [
        <>This works best for firms that can call a new inquiry within minutes and want a steady flow of cases they control. If you would rather understand the cost side first, read <Link href="/blog/how-much-do-mva-leads-cost" className={A}>how much MVA leads cost</Link> or our guide on <Link href="/blog/how-to-choose-a-legal-lead-generation-company" className={A}>how to choose a legal lead generation company</Link>.</>,
      ],
      list: [
        "Personal injury firms that want cases they do not share with other firms",
        "MVA practices that want more car, truck and motorcycle cases",
        "Firms adding workers comp or mass tort as a new practice area",
        "Firms with an intake team ready to call leads fast",
        "Firms tired of renting leads from vendors",
        "Agencies that run advertising for personal injury attorneys",
      ],
    },
  ],
  pricing: [
    "Two costs: your ad spend, paid directly to Meta from your own ad account, and our management fee.",
    "Our fee is scoped on your strategy call, based on your case types, markets and budget.",
    "You own the ad account, creatives, landing pages, forms and lead data, with no long-term lock-in.",
    "We report cost per lead and cost per signed case, so you can compare us with every other source.",
  ],
  faqs: [
    { q: "What is personal injury marketing?", a: "It is how a law firm attracts recently injured people and turns them into signed cases, combining advertising, screening, fast intake follow-up and tracking from first contact to signed retainer." },
    { q: "What is the best marketing for personal injury lawyers?", a: "The best channel depends on your market and intake capacity. Many firms combine search and SEO with social ads, which reach injured people before they start searching. Judge every channel on cost per signed case." },
    { q: "Do Facebook ads work for personal injury lawyers?", a: "Yes, when the ads, screening and follow-up work together. Our published legal campaigns include 530 leads in 7 days for a Texas personal injury firm and 76 MVA leads in 5 days." },
    { q: "How much does personal injury marketing cost?", a: "You pay the ad platform directly for ad spend, plus a management fee. In our published Meta ads campaigns, legal leads cost $17.13 to $26.93 each. Your cost depends on your state, case types and intake speed." },
    { q: "How long does it take to get cases?", a: "Campaigns typically go live 14 to 21 days after the kickoff call. Leads start once the ads are approved and running, and signed cases depend on how fast your team follows up." },
    { q: "Is personal injury advertising regulated?", a: "Yes. Each state bar sets its own lawyer advertising rules on claims, testimonials, disclaimers and solicitation. Your firm reviews and approves every ad and landing page before launch, and ads never promise case outcomes." },
  ],
  faqTitle: "PI marketing.",
  finalTitle: "Get a personal injury marketing plan",
  finalBullets: ["Which case types and areas to start with", "What a realistic cost per lead looks like for your firm", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Service", title: "Personal injury lead generation", text: "Exclusive PI case inquiries from campaigns in your own account.", href: "/personal-injury-lead-generation" },
    { kind: "Service", title: "Law firm marketing", text: "Meta ads, intake and follow-up for law firms across the US.", href: "/law-firm-marketing" },
    { kind: "Service", title: "Legal lead generation", text: "Lawyer and attorney leads screened before they reach intake.", href: "/legal-lead-generation" },
  ],
};

export default function PersonalInjuryMarketingPage() {
  return <PillarPage c={config} />;
}
