import type { Metadata } from "next";
import Link from "next/link";
import { CityPage, type CityPageConfig } from "@/components/leads/CityPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/law-firm-marketing/los-angeles-ca";
const A = "font-bold text-purple-700 underline underline-offset-4";
const RULES = "https://www.calbar.ca.gov/sites/default/files/portals/0/documents/rules/Rules-of-Professional-Conduct-7.pdf";

export const metadata: Metadata = pageMeta({
  title: "Law Firm Marketing in Los Angeles, CA | Scale With Ads",
  description:
    "Law firm marketing for Los Angeles personal injury firms: Meta ads, screened case leads and fast intake, built around California's lawyer advertising rules.",
  path: PATH,
});

const config: CityPageConfig = {
  path: PATH,
  place: "Los Angeles",
  placeType: "City",
  state: "California",
  crumbs: [["Law Firm Marketing", "/law-firm-marketing"], ["Los Angeles", PATH]],
  h1: ["", "Law Firm Marketing", "in Los Angeles"],
  intro: (
    <>
      Los Angeles is one of the most crowded legal advertising markets in the country, and personal injury firms compete for the same injured people on billboards, buses, TV and search. We help LA firms reach people earlier with Facebook and Instagram ads in <strong className="text-stone-950">your own ad account</strong>, screen every inquiry and get it to intake in minutes.
    </>
  ),
  answerQuestion: "How do Los Angeles law firms get personal injury cases from Meta ads?",
  answer:
    "Los Angeles firms run Facebook and Instagram campaigns for one case type at a time, send each click to a short screening form, follow up with an instant text and a call within minutes, and track every lead to a signed case. In our published campaigns, legal leads cost $17.13 to $26.93 each; LA costs depend on case type and competition.",
  rules: {
    source: "State Bar of California, Rules of Professional Conduct, Chapter 7",
    url: RULES,
    intro:
      "California's Rules of Professional Conduct set out what a lawyer may say in advertising and how they may contact prospective clients. These are the points that matter most for a Los Angeles personal injury campaign. This is a summary, not legal advice; your firm should review its own ads against the full rules.",
    points: [
      { rule: "Rule 7.1: no misleading claims", text: "A lawyer may not make a false or misleading communication about the lawyer or their services. The comments say an express guarantee of a result is misleading, and a \"no fee without recovery\" claim is misleading unless it also says whether the client is liable for costs." },
      { rule: "Rule 7.1, Comment [4]: past results", text: "Reports of results or testimonials may be misleading if they lead a reasonable person to expect the same result. An appropriate disclaimer or qualifying language often avoids creating unjustified expectations." },
      { rule: "Rule 7.2(c): who is responsible", text: "Every advertising communication must include the name and address of at least one lawyer or law firm responsible for its content." },
      { rule: "Rule 7.3(c): \"Advertisement\" label", text: "Targeted written, recorded or electronic solicitations to a person known to need legal help in a particular matter must include the word \"Advertisement\" or similar words, with stated exceptions." },
      { rule: "Rule 7.3(a) and (b): solicitation limits", text: "No live in-person, phone or real-time electronic solicitation for pecuniary gain, except to lawyers or people with a family, close personal or prior professional relationship. The comments say ads directed to the general public, such as websites and TV commercials, are not solicitations." },
      { rule: "Rule 7.4(a): specialist claims", text: "A lawyer may not claim to be a certified specialist unless currently certified by the Board of Legal Specialization or an accredited entity, which must be clearly identified." },
    ],
    note: "Rules 7.1 to 7.5 also reference further standards and statutes that we have not summarized here. Your firm approves every ad and landing page before launch.",
  },
  market: {
    intro: (
      <>
        Los Angeles County has a dense freeway network and heavy commuter, freight and rideshare traffic. That creates steady demand for car, truck, pedestrian and workplace injury representation, and fierce competition for it. Many LA firms already spend heavily on search and outdoor advertising, which is why reaching people on social media before they search can be a cheaper route to the same cases.
      </>
    ),
    facts: [],
    outro: (
      <>
        We only publish local statistics we can verify from an official source and link to it. When we work with an LA firm, campaign planning uses current California crash and workplace injury data for the areas you serve.
      </>
    ),
  },
  caseIntro: (
    <>
      In a market this size, a separate campaign for each case type keeps the message specific and the screening relevant. These are the case types we build for Los Angeles firms. For the bigger picture, see <Link href="/personal-injury-marketing" className={A}>personal injury marketing</Link>.
    </>
  ),
  caseTypes: [
    { title: "Car accident leads", text: "Freeway, intersection and rear-end crashes, screened for fault and injury.", href: "/car-accident-leads" },
    { title: "MVA leads", text: "Truck, motorcycle and rideshare crashes, each as its own campaign.", href: "/exclusive-mva-leads" },
    { title: "Workers comp leads", text: "Warehouse, construction and logistics workers hurt on the job.", href: "/workers-comp-leads" },
    { title: "Mass tort leads", text: "Claimants screened against your tort criteria before intake.", href: "/mass-tort-leads" },
  ],
  proofIntro:
    "None of these published results are from Los Angeles. They are national legal campaigns: 530 leads in 7 days for a Texas personal injury firm, 76 MVA leads in 5 days and 203 MVA leads in 21 days. Past results do not guarantee future results.",
  approach: {
    title: "How we run campaigns for LA firms",
    paras: [
      "We start with your case types, the parts of Los Angeles County you serve and how many new cases your intake team can handle each week. In a market where many firms are bidding on the same search terms, social ads let you reach injured people by area and situation, often before they type \"car accident lawyer\" into Google.",
      "Each campaign gets its own ad, landing page and screening form. Because California requires the responsible lawyer or firm to be named and restricts how prospects may be contacted, we build those requirements into the ads and follow-up from the start, and your firm approves everything before launch. Spanish-language creative can be added where your intake team handles Spanish-speaking clients.",
      <>Every lead receives an instant text and email, lands in your CRM and is tracked to a signed case. Read more about <Link href="/legal-intake" className={A}>legal intake</Link> and <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link>.</>,
    ],
  },
  nearby: {
    title: "Areas we serve around Los Angeles",
    intro: "Campaigns can target the whole county or the specific cities and neighborhoods your firm takes cases from, including:",
    places: ["Long Beach", "Pasadena", "Glendale", "Burbank", "Santa Monica", "Torrance", "Inglewood", "Pomona", "Santa Clarita", "Lancaster", "Orange County", "Ventura County", "the Inland Empire"],
  },
  links: [
    { label: "Law firm marketing (national)", href: "/law-firm-marketing" },
    { label: "Personal injury marketing", href: "/personal-injury-marketing" },
    { label: "Facebook ads for lawyers", href: "/facebook-ads-for-lawyers" },
    { label: "Car accident leads", href: "/car-accident-leads" },
    { label: "Exclusive MVA leads", href: "/exclusive-mva-leads" },
    { label: "Philadelphia law firm marketing", href: "/law-firm-marketing/philadelphia-pa" },
  ],
  faqs: [
    { q: "Can Los Angeles lawyers advertise on Facebook?", a: "Yes. California lawyers can advertise on Facebook, but ads must follow the California Rules of Professional Conduct, including the ban on false or misleading communications and the requirement to name at least one responsible lawyer or firm." },
    { q: "Can California law firms use client testimonials in ads?", a: "Testimonials and past results are not banned outright, but they may be misleading if they create an unjustified expectation of the same result. An appropriate disclaimer or qualifying language often helps, and your firm should review each one." },
    { q: "Do California solicitations need an \"Advertisement\" label?", a: "Targeted written, recorded or electronic solicitations to someone known to need legal help in a particular matter must include the word \"Advertisement\" or similar words, with some exceptions. General ads to the public, such as websites, are not solicitations." },
    { q: "How fast should a Los Angeles firm call back a car accident lead?", a: "Within minutes. Injured people in a competitive market like LA often contact several firms, so an instant text and a fast call give your firm the best chance to speak to them first." },
    { q: "Do you have results from Los Angeles firms?", a: "Not yet published. Our published legal results are national campaigns, including 530 leads in 7 days for a Texas personal injury firm. We only publish results we can show with real dashboards." },
    { q: "How much does law firm marketing cost in Los Angeles?", a: "You pay Meta directly for ad spend in your own account, plus our management fee. In our published campaigns, legal leads cost $17.13 to $26.93 each; competitive LA markets may cost more." },
  ],
};

export default function LosAngelesLawFirmMarketingPage() {
  return <CityPage c={config} />;
}
