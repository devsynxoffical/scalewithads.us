import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Building2, Gauge, LineChart, MessageSquare, Users } from "lucide-react";
import { PillarPage, type PillarPageConfig } from "@/components/leads/PillarPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/law-firm-marketing";
const A = "font-bold text-purple-700 underline underline-offset-4";

export const metadata: Metadata = pageMeta({
  title: "Law Firm Marketing Agency for PI Firms | Scale With Ads",
  description:
    "Law firm marketing built around signed cases: Meta ads, screened leads, intake follow-up and honest reporting for personal injury and other law firms.",
  path: PATH,
});

const config: PillarPageConfig = {
  path: PATH,
  crumb: "Law Firm Marketing",
  chip: "Law firm marketing agency",
  h1: ["", "Law Firm Marketing", "Built Around Signed Cases"],
  intro: (
    <>
      Lawyer marketing has one job: put more of the right clients in front of your intake team. We are a legal marketing agency focused on law firm advertising through Facebook and Instagram, run in <strong className="text-stone-950">your own ad account</strong>, with screening and follow-up built in.
    </>
  ),
  answerQuestion: "What is law firm marketing?",
  answer:
    "Law firm marketing is everything a firm does to attract, qualify and sign new clients: advertising, a website and landing pages, intake, follow-up and reputation. Good attorney marketing is measured by signed cases and cost per case. Rankings, likes and website visits only matter when they lead to retained clients.",
  bullets: ["Your own ad account", "Screened inquiries", "Cost per signed case"],
  industry: "Law firm marketing",
  formTitle: "Get a law firm marketing plan",
  service: {
    name: "Law firm marketing",
    serviceType: "Legal marketing agency",
    description: "Meta ads, lead screening, intake follow-up and signed-case reporting for law firms in the United States.",
  },
  proofTitle: "Real law firm results",
  proofIntro:
    "Every number on this site comes from a dated client dashboard: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. These are national results, not tied to one city.",
  sections: [
    {
      id: "funnel",
      eyebrow: "Where firms lose cases",
      title: ["The law firm marketing", "funnel"],
      paras: [
        "Most law firms track the top of the funnel, such as impressions, clicks and calls, and lose sight of what happens after. A potential client can be lost at any stage: the ad does not speak to their situation, the form asks nothing useful, nobody calls back for hours, or the call never turns into a consultation.",
        "We build the full path in one system, so you can see where cases are won and lost and fix the weakest stage first.",
      ],
      cards: [
        { icon: Users, title: "Attract", text: "Ads that reach people with a specific legal problem, written for one practice area at a time." },
        { icon: BadgeCheck, title: "Qualify", text: "Questions on every form that filter out inquiries your firm cannot take." },
        { icon: MessageSquare, title: "Follow up", text: "An instant text and email, then a call from intake within minutes." },
        { icon: LineChart, title: "Measure", text: "Reporting from first contact to signed case, by practice area and by ad." },
      ],
    },
    {
      id: "channels",
      eyebrow: "Channels",
      title: ["Law firm advertising", "options"],
      paras: [
        "Law firm advertising works best as a mix. Search and SEO catch people who are already looking for a lawyer. Social ads reach people earlier, often before they search, which is where many firms find less competition. Referrals and reviews build trust over years.",
        <>We specialize in the social side: Facebook and Instagram campaigns with screening and intake follow-up. See <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link> for how we run them, and <Link href="/legal-lead-generation" className={A}>legal lead generation</Link> for the lead side.</>,
      ],
      table: {
        caption: "Law firm marketing channels compared",
        head: ["Channel", "Best for", "What to watch"],
        rows: [
          ["Facebook and Instagram ads", "Reaching people early, before they search", "Screening and speed of follow-up"],
          ["Google search ads", "People searching for a lawyer right now", "Competitive keywords and cost per click"],
          ["SEO and content", "Long-term, compounding visibility", "Takes months to build"],
          ["Lead vendors", "Fast volume without building anything", "Shared leads and no ownership of the source"],
          ["Referrals and reviews", "Trust and repeat business", "Hard to scale on demand"],
        ],
      },
    },
    {
      id: "practice-areas",
      eyebrow: "Practice areas",
      title: ["Where we focus", "our law firm marketing"],
      paras: [
        <>Our published results come from personal injury and motor vehicle accident campaigns, so that is where we focus. Start with <Link href="/personal-injury-marketing" className={A}>personal injury marketing</Link>, or go straight to a case type:</>,
      ],
      cards: [
        { icon: Users, title: "Personal injury lead generation", text: "The complete lead system for PI firms, from research to CRM.", href: "/personal-injury-lead-generation" },
        { icon: Gauge, title: "Exclusive MVA leads", text: "Motor vehicle accident cases no other firm is calling.", href: "/exclusive-mva-leads" },
        { icon: LineChart, title: "Car accident leads", text: "Auto accident inquiries screened for fault and injury.", href: "/car-accident-leads" },
        { icon: Building2, title: "Workers comp leads", text: "Work-injury claimants screened for reporting and claim status.", href: "/workers-comp-leads" },
        { icon: BadgeCheck, title: "Mass tort leads", text: "Claimants checked against your tort criteria.", href: "/mass-tort-leads" },
        { icon: MessageSquare, title: "Facebook ads for law firms", text: "How we run Meta ads for each practice area.", href: "/facebook-ads-for-lawyers" },
      ],
    },
    {
      id: "choose",
      eyebrow: "Choosing an agency",
      title: ["How to choose a", "law firm marketing agency"],
      paras: [
        <>Ask every legal marketing agency the same questions, and compare the answers side by side. Our full checklist is in <Link href="/blog/how-to-choose-a-legal-lead-generation-company" className={A}>how to choose a legal lead generation company</Link>.</>,
      ],
      steps: [
        { title: "Ownership", text: "Do the ad account, creatives, pages and data belong to your firm if you leave?" },
        { title: "Exclusivity", text: "Are your leads ever shared with or resold to other firms?" },
        { title: "Screening", text: "What questions does each lead answer before it reaches intake?" },
        { title: "Speed", text: "How fast are leads delivered, and is follow-up automatic?" },
        { title: "Compliance", text: "Are ads reviewed against your state bar's advertising rules before launch?" },
        { title: "Proof", text: "Can the agency show dated results with dashboards, not only testimonials?" },
      ],
    },
    {
      id: "markets",
      eyebrow: "Markets we serve",
      title: ["Law firm marketing", "across the US"],
      paras: [
        "We work with firms across the United States. Lawyer advertising rules, crash patterns, workplace injury rates and competition all differ by state and city, so every campaign starts with your market: which case types are most common there, how competitive the ads are and what your state bar allows in an ad.",
        <>Local pages: <Link href="/law-firm-marketing/florida" className={A}>Florida</Link>, <Link href="/law-firm-marketing/miami-fl" className={A}>Miami</Link>, <Link href="/law-firm-marketing/chicago-il" className={A}>Chicago</Link>, <Link href="/law-firm-marketing/los-angeles-ca" className={A}>Los Angeles</Link> and <Link href="/law-firm-marketing/philadelphia-pa" className={A}>Philadelphia</Link>. Each covers that state&apos;s lawyer advertising rules, local crash and attorney data from official sources, and the case types we build there.</>,
      ],
      cards: [
        { icon: Building2, title: "Your market first", text: "Case types, competition and state bar rules are reviewed before any ad is written." },
        { icon: Gauge, title: "Your intake capacity", text: "Budgets are set to the number of cases your team can actually handle." },
        { icon: BadgeCheck, title: "Your approval", text: "Your firm signs off on every ad and landing page before launch." },
      ],
    },
  ],
  pricing: [
    "Your ad spend is paid directly to Meta from your firm's own ad account.",
    "Our management fee is scoped on the strategy call, based on your practice areas, markets and budget.",
    "No long-term lock-in: the ads, pages, forms and lead data stay with your firm.",
    "Reporting shows cost per lead and cost per signed case, by practice area.",
  ],
  faqs: [
    { q: "What does a law firm marketing agency do?", a: "It plans and runs the activities that bring a firm new clients, such as advertising, landing pages, lead screening, follow-up and reporting. We focus on Facebook and Instagram ads with screening and intake follow-up built in." },
    { q: "What is the best marketing for lawyers?", a: "There is no single best channel. Search and SEO catch people already looking for a lawyer, while social ads reach people earlier. Compare every channel on cost per signed case, not on clicks." },
    { q: "How much should a law firm spend on marketing?", a: "It depends on your practice area, market and how many new cases your team can handle. Start with a budget your intake team can follow up on fast, measure cost per signed case, then scale what works." },
    { q: "Do you work with law firms outside personal injury?", a: "Our published results come from personal injury and MVA campaigns, and that is our focus. We also run workers comp and mass tort campaigns, which have no published results yet." },
    { q: "Can law firms advertise on Facebook?", a: "Yes. US law firms can advertise on Facebook, but ads must follow their state bar's advertising rules. Your firm reviews and approves every ad and landing page before launch." },
    { q: "How long does law firm marketing take to work?", a: "Paid social campaigns typically go live 14 to 21 days after the kickoff call and can produce leads soon after. SEO and referrals take longer to build." },
  ],
  faqTitle: "law firm marketing.",
  finalTitle: "Get a law firm marketing plan",
  finalBullets: ["The practice areas and markets with the best opportunity", "A realistic cost per lead for your firm", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Service", title: "Personal injury marketing", text: "The full marketing system for PI firms.", href: "/personal-injury-marketing" },
    { kind: "Service", title: "Legal lead generation", text: "Lawyer and attorney leads screened before intake.", href: "/legal-lead-generation" },
    { kind: "Service", title: "Google Ads for lawyers", text: "Search campaigns for PI firms, in your own account.", href: "/google-ads-for-lawyers" },
    { kind: "Service", title: "Legal intake", text: "Fast follow-up and screening behind every campaign.", href: "/legal-intake" },
    { kind: "Guide", title: "PI lead generation companies compared", text: "4 provider types, 8 criteria and honest trade-offs.", href: "/best-personal-injury-lead-generation-companies" },
  ],
};

export default function LawFirmMarketingPage() {
  return <PillarPage c={config} />;
}
