import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Bike,
  Building2,
  Car,
  CheckCircle2,
  Crosshair,
  Filter,
  Megaphone,
  MessageSquare,
  Play,
  Scale,
  Sparkles,
  Truck,
  Users,
  XCircle,
} from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, RelatedResources, type RelatedItem } from "@/components/seo/RelatedResources";
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
  { icon: Car, label: "Car accidents", desc: "Campaigns built around everyday drivers and commuters." },
  { icon: Bike, label: "Motorcycle accidents", desc: "Audiences shaped by riding communities and interests." },
  { icon: Truck, label: "18-wheeler & truck", desc: "Separate creative and pages for commercial vehicle cases." },
  { icon: Users, label: "Rideshare accidents", desc: "Messaging for passengers and drivers of rideshare trips." },
  { icon: Scale, label: "Other PI cases", desc: "Additional case types mapped to your firm's practice areas." },
];

const steps = [
  {
    icon: Crosshair,
    title: "Sniper Method audience research",
    desc: "We map hidden Facebook audiences around each case type instead of bidding on the same legal and insurance interests every other firm targets.",
  },
  {
    icon: Megaphone,
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

/** Hero illustration: how one inquiry moves through the system (no real data). */
function InquiryFlow() {
  const rows = [
    { icon: Megaphone, title: "Facebook / Instagram ad", sub: "Car accident campaign" },
    { icon: Filter, title: "3 qualifying questions", sub: "Accident date · injuries · represented?" },
    { icon: Bell, title: "Instant SMS + email reply", sub: "Sent the moment they submit" },
    { icon: Building2, title: "Lands in your CRM", sub: "Tagged by case type, ready for intake" },
  ];
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-purple-500/25 via-fuchsia-400/15 to-amber-300/10 rounded-[40px] blur-2xl" />
      <div className="relative rounded-[28px] border-2 border-stone-950 bg-white p-5 sm:p-6 shadow-2xl rotate-1">
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <span className="font-mono text-[10px] font-black uppercase tracking-widest text-stone-400">How an inquiry flows</span>
        </div>
        <ol className="mt-4 space-y-3">
          {rows.map(({ icon: Icon, title, sub }, i) => (
            <li key={title} className="relative flex items-center gap-3 rounded-2xl border border-stone-200 bg-[#FDFBF7] p-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 text-purple-700">
                <Icon className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-black text-stone-950">{title}</p>
                <p className="text-xs font-medium text-stone-500 truncate">{sub}</p>
              </div>
              <span className="ml-auto font-mono text-[10px] font-black text-purple-600">0{i + 1}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-stone-950 px-4 py-3 text-white">
          <span className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Qualified inquiry</span>
          <span className="rounded-full bg-emerald-400/15 border border-emerald-400/40 px-2.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-emerald-300">Exclusive to you</span>
        </div>
      </div>
    </div>
  );
}

const RELATED: RelatedItem[] = [
  {
    kind: "Guide",
    title: "How to find hidden Facebook interests",
    text: "The targeting workflow behind our accident campaigns, written up step by step.",
    href: "/blog/find-hidden-facebook-interests",
  },
  {
    kind: "Service",
    title: "MVA Lead Generation mastermind",
    text: "Watch the training that walks through the full MVA campaign build.",
    href: "/mvaleadgeneration",
  },
  {
    kind: "Service",
    title: "Facebook ads for roofing companies",
    text: "The same exclusive-lead system applied to roofing contractors and roofing agencies.",
    href: "/facebook-ads-for-roofing-companies",
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
      <JsonLd data={breadcrumbJsonLd([["Services", "/services"], ["Personal Injury Lead Generation", PATH]])} />
      <FloatingNavbar />

      {/* 1. Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Breadcrumbs items={[["Home", "/"], ["Services", "/services"], ["Personal Injury Lead Generation"]]} className="mb-5 flex justify-center lg:justify-start" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase shadow-sm">
              <Scale className="w-3.5 h-3.5 text-purple-700" /> For personal injury law firms
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[56px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
              Personal Injury Lead Generation With{" "}
              <span className="animate-purple-gradient font-hero tracking-tight">Facebook & Instagram Ads</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build and run Meta Ads campaigns that bring your firm <strong className="text-stone-950">exclusive MVA and personal injury case inquiries</strong>, generated in your own ad account, qualified and followed up before they reach your intake team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-sm sm:text-[16px] uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 border-2 border-purple-500/40"
              >
                Book a free strategy call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/mvaleadgeneration"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-stone-950 bg-white hover:bg-purple-50 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                <Play className="w-4 h-4" /> Watch the mastermind
              </Link>
            </div>
            <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto lg:mx-0">
              {["Exclusive to your firm", "You own every asset", "Live in 14–21 days"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white/80 px-3 py-2.5 text-sm font-bold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <InquiryFlow />
        </div>
      </section>

      {/* 2. Trust bar */}
      <TrustBarSection />

      {/* 3. Case types */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Case types
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
              One Campaign Per <span className="animate-purple-gradient font-hero">Case Type</span>
            </h2>
            <p className="mt-4 text-stone-600 text-[16px] sm:text-lg font-medium">
              Each accident type gets its own audiences, ads and landing page, so every message speaks to one situation. (Running a home-services business instead? See our{" "}
              <Link href="/facebook-ads-for-roofing-companies" className="font-bold text-purple-700 underline underline-offset-4">Facebook ads for roofing companies</Link>.)
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {caseTypes.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={`group rounded-3xl border-2 border-stone-950 bg-white p-5 sm:p-6 shadow-md hover:-translate-y-1.5 hover:border-purple-600 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300 ${i === caseTypes.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 border border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-black text-stone-950 tracking-tight leading-snug">{label}</h3>
                <p className="mt-2 text-sm font-medium text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Exclusive vs shared */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
              Exclusive Leads vs. <span className="animate-purple-gradient font-hero">Buying Shared MVA Leads</span>
            </h2>
            <p className="mt-4 text-stone-600 text-[16px] sm:text-lg font-medium">
              Many firms start by buying MVA leads. Here&apos;s what changes when the campaigns run for your firm alone.
            </p>
          </div>
          <div className="relative grid md:grid-cols-2 gap-6 md:gap-10">
            <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border-2 border-stone-950 bg-[#FDFBF7] font-hero text-lg font-black text-stone-950 shadow-lg">
              VS
            </span>
            <div className="rounded-3xl border-2 border-stone-300 bg-stone-50 p-7 sm:p-8">
              <p className="text-sm font-black uppercase tracking-wider text-stone-500">Typical bought leads</p>
              <ul className="mt-5 space-y-4 text-stone-600 font-medium">
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
            <div className="rounded-3xl border-2 border-stone-950 bg-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.18)]">
              <p className="text-sm font-black uppercase tracking-wider text-purple-700">Our campaigns for your firm</p>
              <ul className="mt-5 space-y-4 text-stone-800 font-semibold">
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

      {/* 5. How it works (dark band) */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-24 sm:py-28 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-purple-700/25 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-200 bg-purple-500/15 border border-purple-400/30 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" /> How it works
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-black font-hero tracking-tight uppercase leading-tight">
              From Facebook Ad to{" "}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">Signed Case</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 0
                    ? "bg-gradient-to-br from-purple-600 to-purple-900 border-purple-400/50 shadow-[0_20px_60px_rgba(147,51,234,0.35)]"
                    : "bg-white/[0.04] border-white/10 hover:border-purple-400/60 hover:bg-white/[0.07]"
                }`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 font-hero text-[110px] font-black leading-none text-transparent select-none"
                  style={{ WebkitTextStroke: i === 0 ? "1.5px rgba(255,255,255,0.22)" : "1.5px rgba(192,132,252,0.18)" }}
                >
                  0{i + 1}
                </span>
                <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${i === 0 ? "bg-white text-purple-700" : "bg-purple-500/15 border border-purple-400/30 text-purple-300"}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <p className={`relative mt-5 font-mono text-[11px] font-black uppercase tracking-widest ${i === 0 ? "text-purple-100" : "text-purple-300"}`}>Step 0{i + 1}</p>
                <h3 className="relative mt-2 text-xl font-black tracking-tight">{title}</h3>
                <p className={`relative mt-2 text-sm font-medium leading-relaxed ${i === 0 ? "text-purple-50" : "text-stone-300"}`}>{desc}</p>
              </div>
            ))}
            <div className="rounded-3xl border-2 border-dashed border-purple-400/40 bg-purple-500/10 p-7 flex flex-col justify-center">
              <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-300">Go deeper</p>
              <p className="mt-2 text-lg font-black leading-snug">How we find audiences other firms miss</p>
              <Link
                href="/blog/find-hidden-facebook-interests"
                className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-white text-stone-950 hover:bg-purple-100 px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-colors"
              >
                Read the guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <p className="mt-12 text-center text-sm text-stone-400 font-medium max-w-3xl mx-auto">
            Attorney advertising rules vary by state. Ads and landing pages are reviewed with your firm before launch so they fit your bar&apos;s requirements.
          </p>
        </div>
      </section>

      {/* 6. Who it's for */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
            Who It&apos;s <span className="animate-purple-gradient font-hero">For</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border-2 border-stone-950 bg-white p-8 shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white"><Scale className="w-6 h-6" /></span>
              <h3 className="mt-5 text-2xl font-black text-stone-950 tracking-tight">Personal injury law firms</h3>
              <p className="mt-3 text-stone-600 font-medium leading-relaxed">
                Firms that want a steady, predictable flow of car, truck, motorcycle and rideshare accident inquiries without relying on shared lead vendors.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-700 hover:text-stone-950">
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-3xl border-2 border-stone-950 bg-white p-8 shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-700 text-white"><Users className="w-6 h-6" /></span>
              <h3 className="mt-5 text-2xl font-black text-stone-950 tracking-tight">Agencies advertising for attorneys</h3>
              <p className="mt-3 text-stone-600 font-medium leading-relaxed">
                Agencies that run Facebook ads for PI firms and want fresher audiences. Learn the process in the mastermind, or partner with our team.
              </p>
              <Link href="/mvaleadgeneration" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-700 hover:text-stone-950">
                Watch the Sniper Method mastermind <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Proof */}
      <ResultsSection
        eyebrow="OUR RESULTS"
        title={
          <>
            Real Campaigns. <br />
            <span className="font-serif italic lowercase animate-purple-gradient">real, verified results.</span>
          </>
        }
        subtitle="Live dashboards and revenue screenshots from client campaigns across industries."
        hideFeaturedProof
      />
      <ClientTestimonialsSection />

      {/* 8. FAQ (accordion, same as the home page) */}
      <FaqSection
        faqs={faqs}
        eyebrow="PI lead generation FAQ"
        title={
          <>
            Questions From <span className="font-serif italic lowercase animate-purple-gradient">law firms.</span>
          </>
        }
      />

      <RelatedResources items={RELATED} />

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
