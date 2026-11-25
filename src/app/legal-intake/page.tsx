import type { Metadata } from "next";
import Link from "next/link";
import { BellRing, CalendarCheck, FileText, Hourglass, PhoneCall, Route, UserX } from "lucide-react";
import { PillarPage, type PillarPageConfig } from "@/components/leads/PillarPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/legal-intake";
const A = "font-bold text-purple-700 underline underline-offset-4";

export const metadata: Metadata = pageMeta({
  title: "Legal Intake System for Law Firms | Scale With Ads",
  description:
    "Legal intake for law firms: instant follow-up, screening questions, CRM routing and signed-case tracking, built into every Meta ads lead campaign.",
  path: PATH,
});

const config: PillarPageConfig = {
  path: PATH,
  crumb: "Legal Intake",
  chip: "Law firm intake",
  h1: ["A", "Legal Intake", "System That Signs More Cases"],
  intro: (
    <>
      Intake is where marketing money turns into cases, or quietly disappears. We build the intake side of every campaign: screening before the call, an <strong className="text-stone-950">instant text and email</strong> to each new inquiry, routing into your CRM and tracking until the case is signed.
    </>
  ),
  answerQuestion: "What is legal intake?",
  answer:
    "Legal intake is the process a law firm uses to respond to a potential client, collect the facts of their matter, check whether the firm can take it and move them to a signed agreement. A strong intake process is fast, consistent and tracked, so no inquiry waits hours for a call and every outcome is recorded.",
  bullets: ["Instant first response", "Screening before the call", "Tracked to signed case"],
  industry: "Legal intake",
  formTitle: "Fix your intake process",
  service: {
    name: "Legal intake system for law firms",
    serviceType: "Law firm intake and lead follow-up",
    description: "Screening forms, instant SMS and email follow-up, CRM routing and signed-case tracking for law firm lead campaigns.",
  },
  proofTitle: "Lead volume that needs fast intake",
  proofIntro:
    "Campaigns like these only pay off when intake keeps up: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Click a result to see the dashboard.",
  sections: [
    {
      id: "leaks",
      eyebrow: "Where intake breaks",
      title: ["Why law firms lose", "good cases at intake"],
      paras: [
        "Most firms do not have a lead problem as much as a response problem. An injured person who fills in a form often contacts more than one firm. The firm that responds first, asks the right questions and makes the next step easy usually gets the consultation.",
        "These are the four leaks we see most often. Each one raises your cost per signed case, even when your ads are working.",
      ],
      cards: [
        { icon: Hourglass, title: "Slow first response", text: "Inquiries wait in an inbox or voicemail for hours, while another firm calls within minutes." },
        { icon: UserX, title: "No screening", text: "Intake staff spend time on people the firm cannot help, and miss the ones it can." },
        { icon: Route, title: "No routing", text: "Leads arrive by email, phone and forms with no single place that shows who called whom." },
        { icon: FileText, title: "No outcome tracking", text: "Nobody can say which ad, case type or source produced the cases that actually signed." },
      ],
    },
    {
      id: "steps",
      eyebrow: "The intake process",
      title: ["A law firm intake process", "step by step"],
      paras: [
        "This is the intake flow we build behind every lead campaign. Your team stays in control of the conversation and the decision to take a case. The system makes sure nothing is missed between the ad and the call.",
      ],
      steps: [
        { title: "Screening form", text: "The prospect answers short questions about what happened, when, injuries, treatment and whether they already have a lawyer." },
        { title: "Phone verification", text: "The number is verified, for example with a one-time code, so intake is not calling fake or mistyped numbers." },
        { title: "Instant response", text: "An automatic text and email go out within seconds, confirming the inquiry and setting expectations for the call." },
        { title: "Routing", text: "The lead lands in your CRM, tagged by case type, and your intake team is alerted right away." },
        { title: "First call", text: "Your team calls with the screening answers in front of them, so the first conversation starts in the middle, not at the beginning." },
        { title: "Follow-up and tracking", text: "Unreached leads get a follow-up sequence, and every lead is marked as signed, declined or lost, with the reason." },
      ],
    },
    {
      id: "speed",
      eyebrow: "Speed to lead",
      title: ["Why speed matters in", "legal intake"],
      paras: [
        "When someone has just been in an accident or hurt at work, they are often comparing firms the same day. A text that arrives within seconds tells them the firm is responsive. A call within minutes, while they still remember filling in the form, is far more likely to connect than a call the next morning.",
        <>That is why we build follow-up into every campaign instead of handing over a spreadsheet of leads. See how it fits into <Link href="/legal-lead-generation" className={A}>legal lead generation</Link> and our <Link href="/exclusive-mva-leads" className={A}>exclusive MVA leads</Link> campaigns.</>,
      ],
      cards: [
        { icon: BellRing, title: "Instant text and email", text: "Sent automatically the moment the form is submitted, day or night." },
        { icon: PhoneCall, title: "Call alerts", text: "Your intake team is notified immediately so the first call happens fast." },
        { icon: CalendarCheck, title: "Booked consultations", text: "Qualified prospects can be moved straight to a consultation time." },
      ],
    },
    {
      id: "software",
      eyebrow: "Intake software",
      title: ["Law firm intake", "software and CRM"],
      paras: [
        "Many firms already use legal practice management or intake software. We do not replace it. Leads from your campaigns are sent into the CRM or intake tool your firm uses, tagged by case type and source, so your existing workflow stays the same and reporting improves.",
        "If your firm has no CRM yet, we set up a simple pipeline so every lead has a status, an owner and a next step from day one.",
      ],
      list: [
        "Leads tagged by case type and campaign",
        "Screening answers attached to every lead",
        "A status for every lead: new, contacted, consultation, signed, declined",
        "Reasons recorded for declined and lost leads",
        "Cost per signed case reported by campaign",
        "No change to how your team decides which cases to take",
      ],
    },
    {
      id: "measure",
      eyebrow: "What to measure",
      title: ["Intake metrics that", "matter"],
      paras: [
        <>Track a few numbers every week and you will see exactly where cases are lost. To compare lead sources on the same basis, read <Link href="/blog/how-to-choose-a-legal-lead-generation-company" className={A}>how to choose a legal lead generation company</Link>.</>,
      ],
      table: {
        caption: "Legal intake metrics",
        head: ["Metric", "What it tells you"],
        rows: [
          ["Time to first contact", "How fast your firm responds after a form or call"],
          ["Contact rate", "How many leads your team actually speaks to"],
          ["Qualified rate", "How many leads match the cases your firm takes"],
          ["Sign rate", "How many qualified leads become signed clients"],
          ["Cost per signed case", "What each new client really costs, by source and campaign"],
        ],
      },
    },
  ],
  pricing: [
    "Intake setup is part of every lead campaign, not a separate software subscription.",
    "You pay Meta directly for ad spend in your own ad account, plus our management fee, scoped on the strategy call.",
    "Leads go into the CRM or intake tool your firm already uses, or a simple pipeline we set up for you.",
    "You own the forms, sequences and lead data, with no long-term lock-in.",
  ],
  faqs: [
    { q: "What is legal intake?", a: "It is the process a law firm uses to respond to a potential client, collect the facts of their matter, decide whether to take it and move them to a signed agreement." },
    { q: "How fast should a law firm respond to a new lead?", a: "As fast as possible. An automatic text and email within seconds, and a call within minutes, give your firm the best chance to speak to the person before another firm does." },
    { q: "Do you replace our intake software?", a: "No. We send leads into the CRM or intake tool your firm already uses, tagged by case type and source. If you have none, we set up a simple pipeline." },
    { q: "Who makes the call on whether to take a case?", a: "Your firm. Screening questions filter out obvious mismatches, but your intake team and attorneys decide which matters to accept." },
    { q: "What should a law firm intake form ask?", a: "What happened and when, where it happened, injuries and treatment, whether the person already has a lawyer and the best time to call. Your firm sets the final questions." },
    { q: "How do we know if intake is working?", a: "Track time to first contact, contact rate, qualified rate, sign rate and cost per signed case every week, by campaign." },
  ],
  faqTitle: "legal intake.",
  finalTitle: "Turn more inquiries into signed cases",
  finalBullets: ["A review of how your firm handles new inquiries today", "The screening questions and follow-up we would set up", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Service", title: "Legal lead generation", text: "Exclusive attorney leads screened before intake.", href: "/legal-lead-generation" },
    { kind: "Service", title: "Personal injury marketing", text: "The full marketing system for PI firms.", href: "/personal-injury-marketing" },
    { kind: "Service", title: "Law firm marketing", text: "Meta ads, intake and follow-up for law firms.", href: "/law-firm-marketing" },
  ],
};

export default function LegalIntakePage() {
  return <PillarPage c={config} />;
}
