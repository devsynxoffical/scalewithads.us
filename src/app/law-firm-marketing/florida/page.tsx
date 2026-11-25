import type { Metadata } from "next";
import Link from "next/link";
import { CityPage, type CityPageConfig } from "@/components/leads/CityPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/law-firm-marketing/florida";
const A = "font-bold text-purple-700 underline underline-offset-4";
const CHECKLIST = "https://www.floridabar.org/ethics/etad/checklist-direct-mail/";
const FAQ = "https://www.floridabar.org/ethics/etad/faqexpand/";
const FILING = "https://www.floridabar.org/ethics/etad/advertising-filing-requirements/";
const CRASH = "https://www.flhsmv.gov/pdf/crashreports/2024-Crash-Report.pdf";
const BAR_FAQ = "https://www.floridabar.org/about/faq/";

export const metadata: Metadata = pageMeta({
  title: "Law Firm Marketing in Florida | Scale With Ads",
  description:
    "Law firm marketing for Florida personal injury firms: Meta ads built around Florida Bar advertising rules, screened leads and fast intake follow-up.",
  path: PATH,
});

const config: CityPageConfig = {
  path: PATH,
  place: "Florida",
  placeType: "State",
  crumbs: [["Law Firm Marketing", "/law-firm-marketing"], ["Florida", PATH]],
  h1: ["", "Law Firm Marketing", "in Florida"],
  intro: (
    <>
      Florida&apos;s lawyer advertising rules include Bar filing and review for many ads, before they ever run. We help Florida personal injury firms run Facebook and Instagram campaigns in <strong className="text-stone-950">your own ad account</strong> that are planned around those rules from day one, with screening and fast follow-up on every lead.
    </>
  ),
  answerQuestion: "How do Florida law firms advertise on Facebook within the Bar rules?",
  answer:
    "Florida firms can advertise on Facebook, but internet ads other than law firm websites generally must be filed with The Florida Bar at least 20 days before first use, testimonials need a disclaimer, results cannot be predicted or guaranteed, and targeted social ads must start with the word \"advertisement\". We plan campaigns around these rules. In our published campaigns, legal leads cost $17.13 to $26.93 each.",
  rules: {
    source: "The Florida Bar, lawyer advertising (Rules 4-7.11 to 4-7.22)",
    url: "https://www.floridabar.org/ethics/etad/",
    intro:
      "The Florida Bar's advertising rules are Rules 4-7.11 through 4-7.22 of the Rules Regulating The Florida Bar. These are the points that shape every Florida campaign we build, as described on The Florida Bar's own guidance pages. This is a summary, not legal advice; your firm remains responsible for compliance.",
    points: [
      { rule: "Rule 4-7.13(a): misleading content", text: "An ad may not contain anything misleading or deceptive, material statements that are factually or legally inaccurate, or leave out information needed to keep it from misleading consumers.", url: CHECKLIST },
      { rule: "Rule 4-7.13(b)(1) and (b)(2): results", text: "Ads may not predict or guarantee success or specific results, and references to past results must be objectively verifiable and not misleading.", url: CHECKLIST },
      { rule: "Rule 4-7.13(b)(9): testimonials", text: "Testimonials are restricted, for example the person must be describing their own experience, must not be paid, and the ad needs a disclaimer that prospective clients may not receive the same or similar results.", url: CHECKLIST },
      { rule: "Rule 4-7.18(b)(2)(B): \"advertisement\" label", text: "For targeted social media ads and text messages, the first text in the ad must be the word \"advertisement\". Email subject lines must begin with it, and direct mail must show it on the envelope.", url: FAQ },
      { rule: "Rules 4-7.19 and 4-7.20: filing with the Bar", text: "Television, radio, print and internet ads, except law firm websites, must be filed for Bar review at least 20 days before first use, unless limited to presumptively valid content. The fee is $250 per ad filed on time and $750 if late.", url: FILING },
      { rule: "Rule 4-7.18(b)(1)(A): 30-day wait", text: "Direct solicitations about personal injury, wrongful death or an accident may not be sent until 30 days have passed since the injury, death, accident or disaster.", url: CHECKLIST },
    ],
    note: "Lawyer and law firm websites are exempt from filing, but every ad must still name at least one responsible lawyer or firm and the city, town or county of a bona fide office. We build Bar filing time into your launch plan.",
  },
  market: {
    intro: (
      <>
        The state&apos;s own crash report and The Florida Bar&apos;s membership figures show the scale of both the demand for injury representation and the competition for it.
      </>
    ),
    facts: [
      { label: "Crashes in Florida in 2024", value: "381,423", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Traffic fatalities in Florida in 2024", value: "3,098", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Incapacitating injuries in 2024", value: "14,026", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
      { label: "Florida Bar members eligible to practice", value: "98,623", source: "The Florida Bar, roster as of Oct 31, 2026", url: BAR_FAQ },
      { label: "Eligible members located in Florida", value: "82,392", source: "The Florida Bar, roster as of Oct 31, 2026", url: BAR_FAQ },
      { label: "Average crashes per day in 2024", value: "1,799", source: "FLHSMV 2024 Traffic Crash Facts", url: CRASH },
    ],
    outro: (
      <>
        FLHSMV notes that crash figures may change as late reports arrive after the report&apos;s closeout date. For Miami-Dade figures and a city-level plan, see <Link href="/law-firm-marketing/miami-fl" className={A}>law firm marketing in Miami</Link>.
      </>
    ),
  },
  caseIntro: (
    <>
      Florida&apos;s crash volume creates steady demand for injury representation across several case types. Each runs as its own campaign. See also <Link href="/personal-injury-marketing" className={A}>personal injury marketing</Link>.
    </>
  ),
  caseTypes: [
    { title: "Car accident leads", text: "Drivers and passengers hurt in collisions, screened for fault and injury.", href: "/car-accident-leads" },
    { title: "MVA leads", text: "Truck, motorcycle, rideshare and pedestrian crashes as separate campaigns.", href: "/exclusive-mva-leads" },
    { title: "Workers comp leads", text: "Injured workers screened for a work injury, reporting and claim status.", href: "/workers-comp-leads" },
    { title: "Mass tort leads", text: "Claimants screened against your tort criteria before intake.", href: "/mass-tort-leads" },
  ],
  proofIntro:
    "These published results are national, not from Florida: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Past results do not guarantee future results, and Florida ads that mention results must follow Rule 4-7.13.",
  approach: {
    title: "How we run campaigns for Florida firms",
    paras: [
      "Florida campaigns start earlier than most because of Bar filing. We agree your case types and areas, write the ads and landing pages, and build in time for your firm to file ads that need review at least 20 days before they run. Website landing pages are exempt from filing, but they still follow the content rules.",
      "Every targeted social ad opens with the word \"advertisement\", names the responsible lawyer or firm and the office location, and makes no prediction of results. We avoid testimonials unless they meet the Bar's conditions and carry the required disclaimer. Follow-up texts only go to people who asked to be contacted through your form.",
      <>Leads are screened, followed up in seconds and tracked to signed cases in your CRM. Read about <Link href="/legal-intake" className={A}>legal intake</Link> and how we run <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link>.</>,
    ],
  },
  nearby: {
    title: "Florida markets we serve",
    intro: "Campaigns can cover the whole state or focus on the metro areas where your firm takes cases, including:",
    places: ["Miami-Dade County", "Broward County", "Palm Beach County", "Orlando", "Tampa", "Jacksonville", "St. Petersburg", "Fort Myers", "Tallahassee", "Pensacola"],
  },
  links: [
    { label: "Miami law firm marketing", href: "/law-firm-marketing/miami-fl" },
    { label: "Law firm marketing (national)", href: "/law-firm-marketing" },
    { label: "Personal injury marketing", href: "/personal-injury-marketing" },
    { label: "Facebook ads for lawyers", href: "/facebook-ads-for-lawyers" },
    { label: "Car accident leads", href: "/car-accident-leads" },
    { label: "Workers comp leads", href: "/workers-comp-leads" },
  ],
  faqs: [
    { q: "Can Florida lawyers run Facebook ads?", a: "Yes. Florida lawyers can advertise on Facebook, but targeted social ads must begin with the word \"advertisement\", must not mislead or guarantee results, and internet ads other than law firm websites generally must be filed with The Florida Bar before they run." },
    { q: "Do Florida law firm ads need to be filed with the Bar?", a: "Television, radio, print and internet ads, except law firm websites, must be filed for review at least 20 days before first use unless limited to presumptively valid content. The fee is $250 per ad filed on time and $750 if late." },
    { q: "Can Florida lawyers use client testimonials in Facebook ads?", a: "Only under conditions, for example the testimonial must describe the person's real experience, they must not be paid for it, and the ad needs a disclaimer that prospective clients may not receive the same or similar results." },
    { q: "Is there a waiting period before contacting Florida accident victims?", a: "Yes. Direct solicitations about personal injury, wrongful death or an accident may not be sent until 30 days after the injury, death, accident or disaster. General social ads to the public are handled under the advertising rules." },
    { q: "How many crashes happen in Florida each year?", a: "The FLHSMV 2024 Traffic Crash Facts report lists 381,423 crashes and 3,098 fatalities in Florida in 2024, an average of 1,799 crashes per day." },
    { q: "Do you have results from Florida firms?", a: "Not yet published. Our published legal results are national campaigns, including 530 leads in 7 days for a Texas personal injury firm." },
  ],
};

export default function FloridaLawFirmMarketingPage() {
  return <CityPage c={config} />;
}
