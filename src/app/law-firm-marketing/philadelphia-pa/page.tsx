import type { Metadata } from "next";
import Link from "next/link";
import { CityPage, type CityPageConfig } from "@/components/leads/CityPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/law-firm-marketing/philadelphia-pa";
const A = "font-bold text-purple-700 underline underline-offset-4";
const RULES = "https://www.padisciplinaryboard.org/for-attorneys/rules/rule/3/the-rules-of-professional-conduct";
const REPORT = "https://www.padisciplinaryboard.org/Storage/media/pdfs/20260319/145428-2025annualreport.pdf";

export const metadata: Metadata = pageMeta({
  title: "Law Firm Marketing in Philadelphia, PA | Scale With Ads",
  description:
    "Law firm marketing for Philadelphia personal injury firms: Meta ads, screened leads and fast intake, built around Pennsylvania's lawyer advertising rules.",
  path: PATH,
});

const config: CityPageConfig = {
  path: PATH,
  place: "Philadelphia",
  placeType: "City",
  state: "Pennsylvania",
  crumbs: [["Law Firm Marketing", "/law-firm-marketing"], ["Philadelphia", PATH]],
  h1: ["", "Law Firm Marketing", "in Philadelphia"],
  intro: (
    <>
      Philadelphia has more practicing lawyers than any other county in Pennsylvania, so standing out takes more than a bigger ad budget. We help Philadelphia personal injury firms reach injured people with Facebook and Instagram ads in <strong className="text-stone-950">your own ad account</strong>, written to Pennsylvania&apos;s advertising rules, screened before intake and followed up in minutes.
    </>
  ),
  answerQuestion: "How do Philadelphia law firms get more personal injury cases?",
  answer:
    "Philadelphia firms get more cases by reaching injured people early, screening every inquiry and calling back within minutes. Meta ads in the firm's own account, one campaign per case type, do the reaching; short forms and instant follow-up do the rest. In our published national campaigns, legal leads cost $17.13 to $26.93 each.",
  rules: {
    source: "Disciplinary Board of the Supreme Court of Pennsylvania, Rules of Professional Conduct",
    url: RULES,
    intro:
      "Pennsylvania's Rules of Professional Conduct are among the more detailed in the country on advertising content. These points shape every Philadelphia campaign we run. This is a summary, not legal advice; your firm should review its ads against the full rules.",
    points: [
      { rule: "Rule 7.1: no misleading claims", text: "A lawyer may not make a false or misleading communication about the lawyer or their services. Reports of past results may be misleading if they create an unjustified expectation, and a disclaimer or qualifying language may prevent that." },
      { rule: "Rule 7.2: endorsements and dramatizations", text: "Paid endorsements must disclose that the endorser is paid, celebrity or public figure endorsements are not allowed, and portrayals by non-clients or re-enactments must be disclosed as dramatizations." },
      { rule: "Rule 7.2: fee advertising", text: "An ad that says there is no fee without recovery must disclose that the client will be liable for certain expenses, if that is the case. An advertised specific fee must be honored for at least 90 days." },
      { rule: "Rule 7.2: office location and responsibility", text: "Ads must disclose the city or town of the office where the lawyers who will perform the services principally practice, and name at least one lawyer or firm responsible for the content." },
      { rule: "Rule 7.2: specialty claims", text: "A lawyer who is not certified but claims a specialty based on experience must include a disclaimer that they are not certified, and may not claim specialization in more than one field." },
      { rule: "Rule 7.3: solicitation", text: "No live person-to-person solicitation for pecuniary gain, and the comments say that includes text messages. Targeted direct mail is allowed, but not to people whose physical, emotional or mental state prevents reasonable judgment." },
    ],
    note: "Because Rule 7.3 treats text messages as live person-to-person contact, our follow-up texts only go to people who asked to be contacted through your form. Your firm approves every ad, page and message before launch.",
  },
  market: {
    intro: (
      <>
        Philadelphia County has the largest concentration of active attorneys in Pennsylvania, according to the Disciplinary Board of the Supreme Court of Pennsylvania. For a personal injury firm, that means many competitors chasing the same accident and injury cases across the city and its suburbs.
      </>
    ),
    facts: [
      { label: "Active attorneys in Philadelphia County", value: "13,617", source: "PA Disciplinary Board, 2025 Annual Report", url: REPORT },
      { label: "Active attorneys in Pennsylvania", value: "47,249", source: "PA Disciplinary Board, 2025 Annual Report", url: REPORT },
      { label: "Active attorneys licensed in PA, practicing out of state", value: "17,532", source: "PA Disciplinary Board, 2025 Annual Report", url: REPORT },
    ],
    outro: (
      <>
        With that much competition, generic ads and slow callbacks are expensive. The firms that win are specific about the case types they want and fast to respond.
      </>
    ),
  },
  caseIntro: (
    <>
      Each case type runs as its own campaign with its own message and screening. These are the case types we build for Philadelphia firms. For the national view, see <Link href="/law-firm-marketing" className={A}>law firm marketing</Link>.
    </>
  ),
  caseTypes: [
    { title: "Car accident leads", text: "City, highway and pedestrian crashes, screened for fault and injury.", href: "/car-accident-leads" },
    { title: "MVA leads", text: "Truck, motorcycle and rideshare crashes as separate campaigns.", href: "/exclusive-mva-leads" },
    { title: "Workers comp leads", text: "Healthcare, logistics and construction workers hurt on the job.", href: "/workers-comp-leads" },
    { title: "PI lead generation", text: "The full done-for-you lead system for personal injury firms.", href: "/personal-injury-lead-generation" },
  ],
  proofIntro:
    "These published results are national, not from Philadelphia: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Past results do not guarantee future results.",
  approach: {
    title: "How we run campaigns for Philadelphia firms",
    paras: [
      "We begin with your case types, the neighborhoods and suburbs you serve and your intake capacity. Then we write ads that follow Pennsylvania's content rules from the start: the responsible firm and office location are named, there are no celebrity endorsements, any dramatization is labeled and fee statements include the expense disclosure where it applies.",
      "Each click goes to a page for one case type with a short screening form. People who submit the form receive an instant text and email confirming their request, and your intake team gets the lead in real time with the answers attached. We do not send unsolicited texts to people who have not asked to be contacted.",
      <>Every lead is tracked to a signed case, so you can see your real cost per case by campaign. Read how this works in <Link href="/legal-intake" className={A}>legal intake</Link>, or see <Link href="/personal-injury-marketing" className={A}>personal injury marketing</Link> and <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link>.</>,
    ],
  },
  nearby: {
    title: "Areas we serve around Philadelphia",
    intro: "Campaigns can cover the city or focus on the parts of the region your firm serves, including:",
    places: ["Center City", "North Philadelphia", "South Philadelphia", "West Philadelphia", "Northeast Philadelphia", "Delaware County", "Montgomery County", "Bucks County", "Chester County", "Camden County, New Jersey"],
  },
  links: [
    { label: "Law firm marketing (national)", href: "/law-firm-marketing" },
    { label: "Personal injury marketing", href: "/personal-injury-marketing" },
    { label: "Facebook ads for lawyers", href: "/facebook-ads-for-lawyers" },
    { label: "Workers comp leads", href: "/workers-comp-leads" },
    { label: "Personal injury lead generation", href: "/personal-injury-lead-generation" },
    { label: "Los Angeles law firm marketing", href: "/law-firm-marketing/los-angeles-ca" },
  ],
  faqs: [
    { q: "Can Pennsylvania lawyers run Facebook ads?", a: "Yes. Pennsylvania lawyers can advertise on Facebook, but ads must follow Rules 7.1 to 7.3, including the ban on misleading claims and the requirement to disclose the office location and a responsible lawyer or firm." },
    { q: "Can Philadelphia law firms use client testimonials in ads?", a: "Past results and testimonials may be misleading if they create an unjustified expectation, and paid endorsements must be disclosed. Celebrity or public figure endorsements are not allowed. A disclaimer or qualifying language may help." },
    { q: "Can a Pennsylvania firm text a car accident lead?", a: "The comments to Rule 7.3 treat text messages as live person-to-person contact for solicitation. We only send follow-up texts to people who asked to be contacted through your form, and your firm approves the messages." },
    { q: "What must a Pennsylvania \"no fee unless we win\" ad say?", a: "Rule 7.2 requires it to disclose that the client will be liable for certain expenses in addition to the fee, if that is the case." },
    { q: "How competitive is law firm marketing in Philadelphia?", a: "Philadelphia County has 13,617 active attorneys, the most of any Pennsylvania county, according to the Disciplinary Board's 2025 Annual Report. Specific campaigns and fast follow-up matter more than budget alone." },
    { q: "Do you have results from Philadelphia firms?", a: "Not yet published. Our published legal results are national campaigns, including 530 leads in 7 days for a Texas personal injury firm." },
  ],
};

export default function PhiladelphiaLawFirmMarketingPage() {
  return <CityPage c={config} />;
}
