import type { Metadata } from "next";
import Link from "next/link";
import { Ban, Crosshair, FileSearch, Layers, MapPin, MousePointerClick, PhoneCall, Search, SplitSquareHorizontal } from "lucide-react";
import { PillarPage, type PillarPageConfig } from "@/components/leads/PillarPage";
import { pageMeta } from "@/lib/seo";

const PATH = "/google-ads-for-lawyers";
const A = "font-bold text-purple-700 underline underline-offset-4";

export const metadata: Metadata = pageMeta({
  title: "Google Ads for Lawyers and PI Firms | Scale With Ads",
  description:
    "Google Ads and PPC for lawyers: search campaigns for personal injury firms, built around intent keywords, screening, fast intake and cost per signed case.",
  path: PATH,
});

const config: PillarPageConfig = {
  path: PATH,
  crumb: "Google Ads for Lawyers",
  chip: "PPC for law firms",
  h1: ["", "Google Ads for Lawyers", "Built Around Signed Cases"],
  intro: (
    <>
      Search ads reach people at the moment they type &quot;lawyer&quot; into Google. Personal injury PPC is competitive, so every click needs to land on the right page, get screened and get a fast response. We run Google Ads for law firms in <strong className="text-stone-950">your own Google Ads account</strong>, alongside or instead of social campaigns.
    </>
  ),
  answerQuestion: "How do Google Ads work for lawyers?",
  answer:
    "Google Ads for lawyers are search ads that appear when someone searches for legal help, such as a car accident lawyer near them. The firm pays per click. Results depend on choosing high-intent keywords, excluding wasted searches, sending clicks to a page for that case type and calling every lead fast. Success is measured by cost per signed case.",
  bullets: ["Your own Google Ads account", "High-intent keywords", "Cost per signed case"],
  industry: "Google Ads for lawyers",
  formTitle: "Get a Google Ads plan",
  service: {
    name: "Google Ads for lawyers",
    serviceType: "PPC for law firms",
    description: "Google search ads for law firms and personal injury practices, run in the firm's own account, with landing pages, screening and intake follow-up.",
  },
  proofTitle: "Our published legal results",
  proofIntro:
    "These published results come from our Meta ads campaigns for law firms, not from Google Ads. We have not published Google Ads results yet. Click a result to see the dashboard.",
  sections: [
    {
      id: "search-vs-social",
      eyebrow: "Search vs social",
      title: ["Google Ads or", "Facebook ads for lawyers?"],
      paras: [
        "They reach people at different moments. Google Ads catch people who already know they need a lawyer and are searching right now. Facebook and Instagram ads reach people earlier, often before they search, which can mean less competition per lead. Many personal injury firms use both and compare them on cost per signed case.",
        <>If you are deciding where to start, see how we run <Link href="/facebook-ads-for-lawyers" className={A}>Facebook ads for lawyers</Link> and compare the two side by side.</>,
      ],
      table: {
        caption: "Google Ads vs Facebook ads for law firms",
        head: ["", "Google Ads", "Facebook and Instagram ads"],
        rows: [
          ["Who it reaches", "People actively searching for a lawyer", "People who match an audience, often before they search"],
          ["Intent", "High, the person is already looking", "Lower at first, built with screening questions"],
          ["How you pay", "Per click", "Per impression or result"],
          ["Main risk", "Expensive clicks on broad or irrelevant searches", "Unqualified leads without screening"],
          ["What makes it work", "Tight keywords, negatives and case-type landing pages", "Audience research, creative and fast follow-up"],
        ],
      },
    },
    {
      id: "structure",
      eyebrow: "Campaign structure",
      title: ["How we structure", "PPC for law firms"],
      paras: [
        "Legal search terms are some of the most competitive in advertising, so structure matters more than budget. We split campaigns by case type and location and spend most of the effort on what not to pay for.",
      ],
      cards: [
        { icon: Layers, title: "One campaign per case type", text: "Car accident, truck accident, workers comp and other case types each get their own campaign, keywords and budget." },
        { icon: Search, title: "High-intent keywords", text: "Searches that show someone needs a lawyer now, not people researching a topic or looking for a job." },
        { icon: Ban, title: "Negative keywords", text: "Free, jobs, school, forms and other searches that waste budget are excluded from day one." },
        { icon: MapPin, title: "Location targeting", text: "Ads shown only in the areas your firm serves and can take cases from." },
        { icon: FileSearch, title: "Case-type landing pages", text: "Each click lands on a page about that case type, with a short screening form." },
        { icon: PhoneCall, title: "Call tracking", text: "Calls and form leads are tracked to the keyword and campaign that produced them." },
      ],
    },
    {
      id: "pi-ppc",
      eyebrow: "Personal injury PPC",
      title: ["Personal injury PPC", "done carefully"],
      paras: [
        "Personal injury PPC can burn budget fast when it is run on broad keywords and sent to a generic home page. We start narrow: a small set of high-intent searches in the areas you serve, a landing page for each case type, and screening questions on every form. We widen only what produces qualified leads.",
        <>Every lead is followed up with an instant text and email, as described on our <Link href="/legal-intake" className={A}>legal intake</Link> page, and tracked through to a signed case.</>,
      ],
      steps: [
        { title: "Keyword research", text: "We map the searches for your case types and areas, and the ones to exclude." },
        { title: "Account build", text: "Campaigns, ad groups, ads and extensions set up in your own Google Ads account." },
        { title: "Landing pages", text: "A page and a screening form for each case type, approved by your firm." },
        { title: "Tracking", text: "Form and call conversions tracked, and leads sent into your CRM." },
        { title: "Launch", text: "Campaigns go live with tight targeting and a budget your intake team can handle." },
        { title: "Weekly optimization", text: "Search terms reviewed, waste cut and budget moved toward keywords that sign cases." },
      ],
    },
    {
      id: "waste",
      eyebrow: "Wasted spend",
      title: ["Common Google Ads", "mistakes law firms make"],
      paras: [
        "Most wasted spend in legal PPC comes from a few avoidable mistakes. Check your own account against this list:",
      ],
      list: [
        "Broad match keywords with no negative keyword list",
        "Sending every click to the home page instead of a case-type page",
        "No call tracking, so phone leads are never tied to keywords",
        "Ads running in areas the firm does not serve",
        "Judging campaigns on clicks or cost per lead instead of signed cases",
        "Slow follow-up on form leads that arrive after hours",
      ],
    },
    {
      id: "account",
      eyebrow: "Ownership",
      title: ["Your account,", "your data"],
      paras: [
        "Your firm owns the Google Ads account, the keyword history, the landing pages and the leads. If we ever stop working together, everything stays with you and the account history keeps its value.",
        <>For the bigger picture of how search fits with social ads and intake, see <Link href="/law-firm-marketing" className={A}>law firm marketing</Link> and <Link href="/personal-injury-marketing" className={A}>personal injury marketing</Link>.</>,
      ],
      cards: [
        { icon: MousePointerClick, title: "Your ad spend", text: "Paid directly to Google from your own account, with no markup on clicks." },
        { icon: Crosshair, title: "Your keyword data", text: "Search term history that keeps improving your campaigns over time." },
        { icon: SplitSquareHorizontal, title: "Your choice of channels", text: "Run search alone, social alone, or both, compared on cost per signed case." },
      ],
    },
  ],
  pricing: [
    "Your ad spend is paid directly to Google from your firm's own Google Ads account.",
    "Our management fee is scoped on the strategy call, based on your case types, areas and budget.",
    "Landing pages, screening and intake follow-up are included in the build.",
    "No long-term lock-in: the account, data and pages stay with your firm.",
  ],
  faqs: [
    { q: "Do Google Ads work for lawyers?", a: "They can, because they reach people actively searching for legal help. Legal clicks are expensive, so results depend on tight keywords, negative keywords, case-type landing pages and fast follow-up." },
    { q: "What is PPC for lawyers?", a: "Pay-per-click advertising, where a law firm's ad appears in search results and the firm pays each time someone clicks. Google Ads is the most common PPC platform for law firms." },
    { q: "Is Google Ads or Facebook ads better for personal injury lawyers?", a: "They do different jobs. Google Ads reach people searching right now, while Facebook ads reach people earlier. Many firms use both and compare them on cost per signed case." },
    { q: "Do you have Google Ads results for law firms?", a: "Our published legal results come from Meta ads campaigns. We have not published Google Ads results yet, and we will only publish results we can show with real dashboards." },
    { q: "Who owns the Google Ads account?", a: "Your firm. Campaigns run in your own Google Ads account, and the account, data and landing pages stay with you." },
    { q: "Do Google Ads for lawyers follow state bar rules?", a: "Ads and landing pages must follow your state bar's advertising rules. Your firm reviews and approves them before launch, and ads never promise case outcomes." },
  ],
  faqTitle: "Google Ads for lawyers.",
  finalTitle: "Get a Google Ads plan for your firm",
  finalBullets: ["The keywords and areas worth bidding on", "How search and social ads could work together for your firm", "No obligation, no long-term lock-in"],
  related: [
    { kind: "Service", title: "Facebook ads for lawyers", text: "How we run Meta ads for law firms, with published results.", href: "/facebook-ads-for-lawyers" },
    { kind: "Service", title: "Legal intake", text: "Fast follow-up and screening behind every campaign.", href: "/legal-intake" },
    { kind: "Service", title: "Personal injury marketing", text: "The full marketing system for PI firms.", href: "/personal-injury-marketing" },
  ],
};

export default function GoogleAdsForLawyersPage() {
  return <PillarPage c={config} />;
}
