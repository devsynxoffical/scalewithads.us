import type { Metadata } from "next";
import Link from "next/link";
import { CityPage, type CityPageConfig } from "@/components/leads/CityPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/law-firm-marketing/chicago-il";
const A = "font-bold text-purple-700 underline underline-offset-4";
const R71 = "https://www.illinoiscourts.gov/resources/4ebe98db-481b-40d2-9846-c7986e2abe72/file";
const R72 = "https://www.illinoiscourts.gov/resources/39c73f58-b094-4603-84a9-a590a1f17b97/file";
const R73 = "https://www.illinoiscourts.gov/resources/f043b2de-4071-42b8-b0e9-5d2064cb5202/file";
const CRASH = "https://idot.illinois.gov/content/dam/soi/en/web/idot/documents/transportation-system/resources/safety/crash-reports/crash-facts/2024-crash-facts.pdf";
const TRENDS = "https://idot.illinois.gov/content/dam/soi/en/web/idot/documents/transportation-system/resources/safety/crash-reports/trends/trends-2020-2024.pdf";
const ARDC = "https://www.iardc.org/Files/AnnualReports/AnnualReport2025Highlights.pdf";

export const metadata: Metadata = pageMeta({
  title: "Law Firm Marketing in Chicago, IL | Scale With Ads",
  description:
    "Law firm marketing for Chicago personal injury firms: Meta ads, screened leads and fast intake, planned around Illinois lawyer advertising rules.",
  path: PATH,
});

const config: CityPageConfig = {
  path: PATH,
  place: "Chicago",
  placeType: "City",
  state: "Illinois",
  crumbs: [["Law Firm Marketing", "/law-firm-marketing"], ["Chicago", PATH]],
  h1: ["", "Law Firm Marketing", "in Chicago"],
  intro: (
    <>
      Cook County had 164,559 traffic crashes in 2024 and is home to 47,089 registered lawyers, according to IDOT and the ARDC. That is a lot of demand and a lot of competition. We help Chicago personal injury firms reach injured people with Facebook and Instagram ads in <strong className="text-stone-950">your own ad account</strong>, screened and followed up within minutes.
    </>
  ),
  answerQuestion: "How do Chicago personal injury firms get cases from Facebook ads?",
  answer:
    "Chicago firms run a separate Meta ads campaign for each case type across the neighborhoods and suburbs they serve, send clicks to short screening forms, reply instantly and call within minutes, and track every lead to a signed case. Ads name the responsible firm and office, as Illinois requires. Our published national campaigns ran at $17.13 to $26.93 per lead.",
  rules: {
    source: "Illinois Supreme Court, Rules of Professional Conduct, Article VIII",
    url: "https://www.illinoiscourts.gov/rules/supreme-court-rules?a=viii",
    intro:
      "The Illinois Rules of Professional Conduct govern how Chicago lawyers advertise and contact prospective clients. Rule 7.2 was amended effective July 1, 2025, including new language on lead generators. This is a summary, not legal advice; your firm should review its ads against the full rules.",
    points: [
      { rule: "Rule 7.1: false or misleading claims", text: "A lawyer shall not make a false or misleading communication about the lawyer or their services, including leaving out a fact needed to keep a statement from being materially misleading.", url: R71 },
      { rule: "Rule 7.1, Comment [3]: past results", text: "Truthful reports of results may still be misleading if they create an unjustified expectation that other clients will get the same result. A disclaimer may prevent that.", url: R71 },
      { rule: "Rule 7.2(a): identify who is responsible", text: "Every advertisement must include the name and office address of at least one lawyer or law firm responsible for its content.", url: R72 },
      { rule: "Rule 7.2(b) and (c): lead generators", text: "A lawyer may pay the usual charges of an intermediary connecting service, which the comments say includes a lead generator, but must disclose that relationship and its fees to the client. Except for bar and legal aid services, those fees may not depend on the outcome or be a percentage of the lawyer's fees.", url: R72 },
      { rule: "Rule 7.3(c): \"Advertising Material\"", text: "Targeted solicitations to someone known to need legal help in a particular matter must say \"Advertising Material\" on the outside envelope, or at the beginning and end of a recorded or electronic message.", url: R73 },
      { rule: "Rule 7.3(a) and (b): solicitation limits", text: "No in-person, live phone or real-time electronic solicitation for pecuniary gain, except to lawyers or people with a family, close personal or prior professional relationship, and none at all to someone who has said they do not want it.", url: R73 },
    ],
    note: "Our model is advertising in your firm's own ad account, and your firm decides which cases to take. Ask any provider how its fees are structured under Rule 7.2. Your firm approves every ad and landing page before launch.",
  },
  market: {
    intro: (
      <>
        Cook County dominates Illinois crash statistics. IDOT&apos;s 2024 figures show that more than half of all crashes in the state happened in Cook County, and the ARDC&apos;s 2025 report shows the county also holds the largest share of the state&apos;s lawyers.
      </>
    ),
    facts: [
      { label: "Crashes in Cook County, 2024", value: "164,559", source: "IDOT 2024 Illinois Crash Facts", url: CRASH },
      { label: "Injuries in Cook County, 2024", value: "44,295", source: "IDOT Trends 2020 to 2024", url: TRENDS },
      { label: "Traffic fatalities in Cook County, 2024", value: "362", source: "IDOT Trends 2020 to 2024", url: TRENDS },
      { label: "Crashes in Illinois, 2024", value: "303,913", source: "IDOT 2024 Illinois Crash Facts", url: CRASH },
      { label: "Registered lawyers in Cook County", value: "47,089", source: "ARDC 2025 Annual Report highlights", url: ARDC },
      { label: "Registered lawyers in Illinois", value: "96,997", source: "ARDC 2025 Annual Report highlights", url: ARDC },
    ],
    outro: (
      <>
        With that concentration of both crashes and lawyers, a Chicago firm wins cases on speed and specificity: reaching the right people in the right neighborhoods, and calling them before a competitor does.
      </>
    ),
  },
  caseIntro: (
    <>
      These are the campaigns we build most for Chicago firms, each with its own ads and screening. For the full system, see <Link href="/personal-injury-marketing" className={A}>personal injury marketing</Link>.
    </>
  ),
  caseTypes: [
    { title: "Car accident leads", text: "Expressway, intersection and city-street crashes, screened for fault and injury.", href: "/car-accident-leads" },
    { title: "MVA leads", text: "Truck, rideshare, bicycle and pedestrian crashes as their own campaigns.", href: "/exclusive-mva-leads" },
    { title: "Workers comp leads", text: "Workers hurt on the job, screened for reporting and claim status.", href: "/workers-comp-leads" },
    { title: "Mass tort leads", text: "Claimants screened against your tort criteria before intake.", href: "/mass-tort-leads" },
  ],
  proofIntro:
    "These published results are national, not from Chicago: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Past results do not guarantee future results.",
  approach: {
    title: "How we run campaigns for Chicago firms",
    paras: [
      "Chicago firms often serve very different areas, from the Loop and North Side to the south and west suburbs. We map your case types to the parts of Cook County and the collar counties you actually take cases from, so budget is not wasted on areas your firm does not serve.",
      "Illinois requires every ad to include the name and office address of a responsible lawyer or firm, so that is built into each ad and landing page. Since the July 2025 amendment to Rule 7.2 addresses lead generators directly, we keep our role simple: we run advertising in your own ad account, and your firm decides which cases to take.",
      <>Each inquiry is screened, gets an instant reply and is tracked to a signed case. See how <Link href="/legal-intake" className={A}>legal intake</Link> fits in, or how we run <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link>.</>,
    ],
  },
  nearby: {
    title: "Areas we serve around Chicago",
    intro: "Campaigns can cover the city, Cook County or the surrounding counties your firm serves, including:",
    places: ["the Loop", "North Side", "South Side", "West Side", "Evanston", "Oak Park", "Cicero", "Naperville", "Aurora", "Joliet", "DuPage County", "Lake County", "Will County"],
  },
  links: [
    { label: "Law firm marketing (national)", href: "/law-firm-marketing" },
    { label: "Personal injury marketing", href: "/personal-injury-marketing" },
    { label: "Facebook ads for lawyers", href: "/facebook-ads-for-lawyers" },
    { label: "Car accident leads", href: "/car-accident-leads" },
    { label: "Workers comp leads", href: "/workers-comp-leads" },
    { label: "Philadelphia law firm marketing", href: "/law-firm-marketing/philadelphia-pa" },
  ],
  faqs: [
    { q: "Can Chicago lawyers advertise on Facebook?", a: "Yes. Illinois lawyers can advertise on Facebook, but ads must not be false or misleading and must include the name and office address of at least one responsible lawyer or law firm." },
    { q: "Can Illinois law firms work with lead generators?", a: "Rule 7.2, amended effective July 1, 2025, allows paying the usual charges of an intermediary connecting service such as a lead generator, with disclosure to the client, and bars fees tied to the outcome or a percentage of legal fees, except for bar and legal aid services." },
    { q: "Do Illinois solicitations need an advertising label?", a: "Targeted solicitations to someone known to need legal help in a particular matter must say \"Advertising Material\" on the envelope, or at the start and end of a recorded or electronic message." },
    { q: "How many crashes happen in Cook County?", a: "IDOT's 2024 Illinois Crash Facts report lists 164,559 crashes in Cook County in 2024, and IDOT's 2020 to 2024 trends report lists 362 fatalities and 44,295 injuries in the county." },
    { q: "How fast should a Chicago firm call back an accident lead?", a: "Within minutes. In a market with this many firms, an instant text and a fast call give you the best chance to speak to the person before a competitor does." },
    { q: "Do you have results from Chicago firms?", a: "Not yet published. Our published legal results are national campaigns, including 530 leads in 7 days for a Texas personal injury firm." },
  ],
};

export default function ChicagoLawFirmMarketingPage() {
  return <CityPage c={config} />;
}
