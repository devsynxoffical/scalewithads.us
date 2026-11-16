import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Car,
  CheckCircle2,
  Crosshair,
  Filter,
  MessageSquare,
  Play,
  Scale,
  Sparkles,
  Truck,
  Users,
  XCircle,
} from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Faq } from "@/lib/faqs";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const PATH = "/personal-injury-lead-generation";

export const metadata: Metadata = pageMeta({
  title: "Personal Injury Lead Generation: Exclusive MVA Leads",
  description:
    "Exclusive personal injury and MVA leads from Facebook and Instagram ads we run in your own ad account, qualified and followed up before they reach intake.",
  path: PATH,
});

const caseTypes = [
  { icon: Car, label: "Car accidents" },
  { icon: Bike, label: "Motorcycle accidents" },
  { icon: Truck, label: "18-wheeler & truck accidents" },
  { icon: Users, label: "Rideshare accidents" },
  { icon: Scale, label: "Other personal injury cases" },
];

const steps = [
  {
    icon: Crosshair,
    title: "Sniper Method audience research",
    desc: "We map hidden Facebook audiences around each case type instead of bidding on the same legal and insurance interests every other firm targets.",
  },
  {
    icon: Play,
    title: "Ads and landing pages",
    desc: "Video and image ads plus case-specific landing pages that speak to one accident type at a time, reviewed with your firm before anything goes live.",
  },
  {
    icon: Filter,
    title: "Built-in qualification",
    desc: "Short qualifying questions, such as when the accident happened, whether there were injuries and whether the person already has a lawyer, filter out inquiries your intake team can't use.",
  },
  {
    icon: MessageSquare,
    title: "Instant follow-up",
    desc: "New inquiries get an immediate SMS and email response and land in your CRM, so speed-to-lead doesn't depend on someone watching the inbox.",
  },
  {
    icon: BadgeCheck,
    title: "Optimize on signed cases",
    desc: "We feed qualified and signed-case outcomes back into the campaigns, so budget moves toward the audiences and ads that produce real cases.",
  },
];

const faqs: Faq[] = [
  {
    q: "Are the personal injury leads exclusive?",
    a: "Yes. The campaigns run in your own ad account and send inquiries straight to your intake, so every lead is generated for your firm alone and is never resold to another firm.",
  },
  {
    q: "How is this different from buying MVA leads?",
    a: "Lead vendors often sell shared leads to several firms, and you don't control the ads, targeting or follow-up. With our system you own the ad account, creatives, landing pages and data, and you can see exactly where every inquiry came from.",
  },
  {
    q: "Which case types can you run campaigns for?",
    a: "We build separate campaigns for car accidents, motorcycle accidents, 18-wheeler and truck accidents, rideshare accidents and other personal injury case types, so each ad and landing page speaks to one situation.",
  },
  {
    q: "Do we own the ad account, creatives and data?",
    a: "Yes. Every asset we build, including ads, landing pages, CRM sequences and lead data, belongs 100% to your firm with no lock-in.",
  },
  {
    q: "How long does it take to launch?",
    a: "Onboarding and the system build typically take 14 to 21 days from the kickoff call to live campaigns.",
  },
  {
    q: "Do you work with agencies that run ads for attorneys?",
    a: "Yes. Agencies can work with us directly, or learn the audience research process in our Sniper Method mastermind for personal injury advertisers.",
  },
];

export default function PersonalInjuryLeadGenerationPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Personal Injury Lead Generation",
          serviceType: "Facebook and Instagram advertising for personal injury law firms",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United States" },
          audience: { "@type": "BusinessAudience", name: "Personal injury law firms and agencies that advertise for attorneys" },
          url: `${SITE_URL}${PATH}`,
          description:
            "Exclusive personal injury and motor vehicle accident (MVA) case inquiries from Meta Ads campaigns run in the firm's own ad account, with qualification, instant follow-up and CRM routing.",
        }}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([["Personal Injury Lead Generation", PATH]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 md:px-8 bg-white border-b border-stone-200 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase mb-5 shadow-sm">
            <Scale className="w-3.5 h-3.5 text-purple-700" />
            For personal injury law firms
          </span>
          <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-[52px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.1]">
            Personal Injury Lead Generation With{" "}
            <span className="animate-purple-gradient font-hero tracking-tight">Facebook & Instagram Ads</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg font-medium text-stone-700 max-w-3xl leading-relaxed">
            We build and run Meta Ads campaigns that bring your firm <strong className="text-stone-950">exclusive MVA and personal injury case inquiries</strong>, generated in your own ad account, qualified and followed up before they reach your intake team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-base uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 border-2 border-purple-500/40"
            >
              Book a free strategy call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/mvaleadgeneration"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-stone-950 bg-white hover:bg-purple-50 text-stone-950 font-black text-sm uppercase tracking-wider transition-colors"
            >
              <Play className="w-4 h-4" /> Watch the Sniper Method mastermind
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {caseTypes.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-950 bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-stone-900">
                <Icon className="w-3.5 h-3.5 text-purple-700" /> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive vs shared */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
              Exclusive Leads vs. <span className="animate-purple-gradient font-hero">Buying Shared MVA Leads</span>
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium">
              Many firms start by buying MVA leads. Here&apos;s what changes when the campaigns run for your firm alone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border-2 border-stone-300 bg-white p-7">
              <p className="text-sm font-black uppercase tracking-wider text-stone-500">Typical bought leads</p>
              <ul className="mt-4 space-y-3 text-stone-700 font-medium">
                {[
                  "Often shared with several firms competing for the same caller",
                  "No control over the ads, targeting or what was promised",
                  "Little visibility into where a lead came from",
                  "The data and the source stay with the vendor",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><XCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-stone-950 bg-white p-7 shadow-xl">
              <p className="text-sm font-black uppercase tracking-wider text-purple-700">Our campaigns for your firm</p>
              <ul className="mt-4 space-y-3 text-stone-800 font-medium">
                {[
                  "Exclusive inquiries generated only for your firm",
                  "You approve the ads, landing pages and messaging",
                  "Every inquiry tracked from ad to signed case",
                  "You own the ad account, creatives, CRM and data",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> How it works
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
              From Facebook Ad to <span className="animate-purple-gradient font-hero">Signed Case</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="rounded-3xl border-2 border-stone-950 bg-[#FDFBF7] p-7 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700"><Icon className="w-5 h-5" /></span>
                  <span className="font-mono text-xs font-black text-purple-700">STEP 0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-stone-950 tracking-tight">{title}</h3>
                <p className="mt-2 text-stone-600 text-sm font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
            <div className="rounded-3xl border-2 border-dashed border-purple-300 bg-purple-50 p-7 flex flex-col justify-center">
              <p className="text-stone-800 font-bold leading-relaxed">
                Want the audience research in depth? Read our guide to{" "}
                <Link href="/blog/find-hidden-facebook-interests" className="text-purple-700 underline underline-offset-4">finding hidden Facebook interests</Link>.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-stone-500 font-medium max-w-3xl mx-auto">
            Attorney advertising rules vary by state. Ads and landing pages are reviewed with your firm before launch so they fit your bar&apos;s requirements.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border-2 border-stone-950 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-black text-stone-950 tracking-tight">Personal injury law firms</h2>
            <p className="mt-3 text-stone-600 font-medium leading-relaxed">
              Firms that want a steady, predictable flow of car, truck, motorcycle and rideshare accident inquiries without relying on shared lead vendors.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-stone-950 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-black text-stone-950 tracking-tight">Agencies advertising for attorneys</h2>
            <p className="mt-3 text-stone-600 font-medium leading-relaxed">
              Agencies that run Facebook ads for PI firms and want fresher audiences. Start with the{" "}
              <Link href="/mvaleadgeneration" className="font-bold text-purple-700 underline underline-offset-4">Sniper Method mastermind</Link>, or partner with our team.
            </p>
          </div>
        </div>
        <p className="mt-10 text-center font-bold text-stone-700">
          See our verified client results on the <Link href="/work" className="text-purple-700 underline underline-offset-4">results page</Link>.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight text-center">
            Personal Injury Lead Generation <span className="animate-purple-gradient font-hero">FAQ</span>
          </h2>
          <div className="mt-12 space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border-2 border-stone-950 bg-[#FDFBF7] p-6 sm:p-7">
                <h3 className="text-lg sm:text-xl font-black text-stone-950 tracking-tight">{f.q}</h3>
                <p className="mt-2 text-stone-600 font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-base uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] border-2 border-purple-500/40"
            >
              Get exclusive PI leads for your firm <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
