import type { Metadata } from "next";
import Link from "next/link";
import { CityPage, type CityPageConfig } from "@/components/leads/CityPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/law-firm-marketing/miami-fl";
const A = "font-bold text-purple-700 underline underline-offset-4";
const CHECKLIST = "https://www.floridabar.org/ethics/etad/checklist-direct-mail/";
const FAQ = "https://www.floridabar.org/ethics/etad/faqexpand/";
const FILING = "https://www.floridabar.org/ethics/etad/advertising-filing-requirements/";
const CRASH = "https://www.flhsmv.gov/pdf/crashreports/2024-Crash-Report.pdf";

export const metadata: Metadata = pageMeta({
  title: "Law Firm Marketing in Miami, FL | Scale With Ads",
  description:
    "Law firm marketing for Miami personal injury firms: Meta ads in English and Spanish, Florida Bar compliant creative, screened leads and fast intake.",
  path: PATH,
});

const config: CityPageConfig = {
  path: PATH,
  place: "Miami",
  placeType: "City",
  state: "Florida",
  crumbs: [["Law Firm Marketing", "/law-firm-marketing"], ["Florida", "/law-firm-marketing/florida"], ["Miami", PATH]],
  h1: ["", "Law Firm Marketing", "in Miami"],
  intro: (
    <>
      Miami-Dade recorded 60,000 crashes in 2024, according to the state&apos;s own crash report. For a Miami personal injury firm, the challenge is not demand but reaching those people first, in the right language, with ads that pass Florida Bar review. We run that system in <strong className="text-stone-950">your own ad account</strong>.
    </>
  ),
  answerQuestion: "How can a Miami personal injury firm get more cases from social ads?",
  answer:
    "A Miami firm gets more cases by running separate Facebook and Instagram campaigns for each case type, in English and Spanish where its intake team can serve both, filing ads with The Florida Bar before launch, screening every inquiry and calling back within minutes. In our published national campaigns, legal leads cost $17.13 to $26.93 each.",
  rules: {
    source: "The Florida Bar, ethics and advertising guidance",
    url: "https://www.floridabar.org/ethics/etad/",
    intro:
      "Miami firms follow the same Florida Bar advertising rules as the rest of the state. In practice, these are the requirements that change how a Miami social campaign is written and launched. This is a summary, not legal advice.",
    points: [
      { rule: "First word: \"advertisement\"", text: "Under Rule 4-7.18(b)(2)(B), a targeted social media ad or text message must open with the word \"advertisement\" as its first text. We write every Miami ad and follow-up text to that format.", url: FAQ },
      { rule: "Plan 20 days for Bar review", text: "Rules 4-7.19 and 4-7.20 require internet ads, other than the firm's own website, to be filed for review at least 20 days before first use unless they carry only presumptively valid content, so we schedule launches around it.", url: FILING },
      { rule: "No promises about outcomes", text: "Rule 4-7.13(b)(1) bars any prediction or guaranty of success, so Miami ads talk about how to get help, not about what a case is worth.", url: CHECKLIST },
      { rule: "Testimonials need a disclaimer", text: "If a testimonial is used at all, Rule 4-7.13(b)(9) requires a disclaimer that prospective clients may not receive the same or similar results, among other conditions.", url: CHECKLIST },
      { rule: "Name the firm and its office", text: "Every ad must name at least one responsible lawyer or firm and the city, town or county of a bona fide office, under Rule 4-7.12(a).", url: FILING },
      { rule: "No direct solicitation for 30 days", text: "Rule 4-7.18(b)(1)(A) blocks direct solicitations about an accident, injury or death until 30 days have passed, which is why we rely on general social ads that people respond to themselves.", url: CHECKLIST },
    ],
    note: "For the full statewide picture, see our Florida law firm marketing page. Your firm files and approves every ad before launch.",
  },
  market: {
    intro: (
      <>
        Miami-Dade County accounts for a large share of Florida&apos;s crashes. The Florida Department of Highway Safety and Motor Vehicles reports these 2024 figures for the county, alongside the statewide total for context.
      </>
    ),
    facts: [
      { label: "Crashes in Miami-Dade County, 2024", value: "60,000", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Injuries in Miami-Dade County, 2024", value: "29,359", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Traffic fatalities in Miami-Dade, 2024", value: "272", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Crashes in Miami-Dade County, 2023", value: "64,009", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Traffic fatalities in Miami-Dade, 2023", value: "325", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Crashes statewide in Florida, 2024", value: "381,423", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
    ],
    outro: (
      <>
        On these figures, Miami-Dade alone made up roughly one in six crashes in Florida in 2024. FLHSMV notes the numbers may change as late reports arrive.
      </>
    ),
  },
  caseIntro: (
    <>
      With tens of thousands of injuries a year in the county, Miami firms can be selective about the cases they chase. These are the campaigns we build most often for Miami firms. See also <Link href="/personal-injury-marketing" className={A}>personal injury marketing</Link>.
    </>
  ),
  caseTypes: [
    { title: "Car accident leads", text: "Collisions on Miami-Dade roads, screened for fault, injury and treatment.", href: "/car-accident-leads" },
    { title: "MVA leads", text: "Motorcycle, rideshare, truck and pedestrian cases as their own campaigns.", href: "/exclusive-mva-leads" },
    { title: "PI lead generation", text: "The complete done-for-you lead system for personal injury firms.", href: "/personal-injury-lead-generation" },
    { title: "Workers comp leads", text: "People hurt on the job, screened for reporting and claim status.", href: "/workers-comp-leads" },
  ],
  proofIntro:
    "None of these published results are from Miami. They are national campaigns: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Past results do not guarantee future results.",
  approach: {
    title: "How we run campaigns for Miami firms",
    paras: [
      "Miami is a bilingual market, so we ask first which languages your intake team can serve. Where they can handle both, we build matching English and Spanish ads, landing pages and screening forms, so a Spanish-speaking accident victim never lands on a page they cannot read.",
      "Because Florida requires Bar filing for internet ads, we work backward from your launch date: case types and areas first, then creative, then filing time, then launch. Each ad opens with \"advertisement\", names your firm and office, and avoids predictions about results.",
      <>Once live, every inquiry is screened, gets an instant reply and lands in your CRM, so your team can call within minutes. Read about <Link href="/legal-intake" className={A}>legal intake</Link> and <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link>.</>,
    ],
  },
  nearby: {
    title: "Areas we serve around Miami",
    intro: "Campaigns can cover Miami-Dade County or target the cities and neighborhoods your firm serves, including:",
    places: ["Hialeah", "Miami Beach", "Coral Gables", "Doral", "Homestead", "Kendall", "Miami Gardens", "North Miami", "Aventura", "Fort Lauderdale", "Broward County"],
  },
  links: [
    { label: "Florida law firm marketing", href: "/law-firm-marketing/florida" },
    { label: "Law firm marketing (national)", href: "/law-firm-marketing" },
    { label: "Personal injury marketing", href: "/personal-injury-marketing" },
    { label: "Facebook ads for lawyers", href: "/facebook-ads-for-lawyers" },
    { label: "Exclusive MVA leads", href: "/exclusive-mva-leads" },
    { label: "Los Angeles law firm marketing", href: "/law-firm-marketing/los-angeles-ca" },
  ],
  faqs: [
    { q: "Can Miami lawyers run Facebook ads in Spanish?", a: "Yes. Spanish-language ads follow the same Florida Bar rules as English ones, including starting with the word for advertisement, naming the responsible firm and avoiding predictions of results. Your firm files and approves each version." },
    { q: "How fast should a Miami firm call back a car accident lead?", a: "Within minutes. With 60,000 crashes in Miami-Dade in 2024, injured people often hear from several firms, so an instant text and a fast call give your firm the best chance." },
    { q: "Do Miami law firm ads need Florida Bar approval?", a: "Internet ads other than the firm's own website generally must be filed for Bar review at least 20 days before first use, unless they contain only presumptively valid content." },
    { q: "Can Miami firms contact accident victims directly?", a: "Direct solicitations about an accident, injury or death cannot be sent until 30 days have passed. Our campaigns use general social ads, and people contact your firm through the form themselves." },
    { q: "How many crashes happen in Miami-Dade?", a: "The FLHSMV 2024 Traffic Crash Facts report lists 60,000 crashes, 29,359 injuries and 272 fatalities in Miami-Dade County in 2024." },
    { q: "Do you have results from Miami firms?", a: "Not yet published. Our published legal results are national campaigns, including 530 leads in 7 days for a Texas personal injury firm." },
  ],
};

export default function MiamiLawFirmMarketingPage() {
  return <CityPage c={config} />;
}
