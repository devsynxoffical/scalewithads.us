import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Car,
  CheckCircle2,
  Clapperboard,
  Database,
  Footprints,
  Gauge,
  KeyRound,
  LayoutTemplate,
  ListChecks,
  MessageSquare,
  Scale,
  ShieldCheck,
  Smartphone,
  Truck,
  XCircle,
  Zap,
} from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, RelatedResources } from "@/components/seo/RelatedResources";
import { LeadForm } from "@/components/leads/LeadForm";
import { CaseCostCalculator } from "@/components/leads/Calculators";
import { InquiryFlowTabs } from "@/components/leads/Interactive";
import type { Faq } from "@/lib/faqs";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const PATH = "/exclusive-mva-leads";

export const metadata: Metadata = pageMeta({
  title: "Exclusive MVA Leads for Personal Injury Attorneys",
  description:
    "Exclusive MVA leads for personal injury attorneys from Facebook and Instagram ads in your own account: qualified, contacted instantly, never shared or resold.",
  path: PATH,
});

const LEAD_TYPES = [
  {
    name: "Shared MVA leads",
    tag: "Typical lead vendor",
    good: ["Fast to start", "Pay per lead"],
    bad: ["Often sold to several firms", "You race other firms to call first", "No control over ads or targeting"],
  },
  {
    name: "Exclusive vendor leads",
    tag: "Premium lead vendor",
    good: ["Not shared with other firms", "Pay per lead or per retainer"],
    bad: ["Higher price per lead", "Vendor owns the ads and data", "Volume stops when you stop paying"],
  },
  {
    name: "Ads in your own account",
    tag: "How we work",
    featured: true,
    good: ["Every inquiry is yours alone", "You own ads, pages and data", "You see where each case came from", "Instant follow-up built in"],
    bad: ["Takes 14–21 days to build", "You pay Meta directly for ad spend"],
  },
];

const CASE_TYPES = [
  { icon: Car, title: "Car accidents", text: "Campaigns for drivers and passengers hurt in everyday collisions." },
  { icon: Bike, title: "Motorcycle accidents", text: "Audiences built around riding communities and interests." },
  { icon: Truck, title: "18-wheeler & truck", text: "Separate creative and pages for commercial vehicle cases." },
  { icon: Smartphone, title: "Rideshare accidents", text: "Messaging for passengers and drivers of rideshare trips." },
  { icon: Footprints, title: "Pedestrian & bicycle", text: "Campaigns for people hit while walking or cycling." },
];

const DELIVERABLES = [
  { icon: KeyRound, title: "Your own ad account", text: "Campaigns run in your Meta ad account. Leave any time and keep everything." },
  { icon: Clapperboard, title: "Video & image ads", text: "Creative for each case type, approved by your firm before launch." },
  { icon: LayoutTemplate, title: "Case-type landing pages", text: "Pages that speak to one accident type and collect the right details." },
  { icon: ListChecks, title: "Built-in qualification", text: "Questions on accident date, injuries and representation filter inquiries." },
  { icon: MessageSquare, title: "Instant SMS & email", text: "Every inquiry gets a reply in seconds, before they contact another firm." },
  { icon: Database, title: "CRM & reporting", text: "Inquiries tagged by case type, tracked from first contact to signed case." },
];

const faqs: Faq[] = [
  {
    q: "What are MVA leads?",
    a: "MVA leads are inquiries from people injured in a motor vehicle accident, such as a car, motorcycle, truck or rideshare crash, who want to talk to a personal injury lawyer. Firms either buy them from lead vendors or generate them with their own advertising.",
  },
  {
    q: "Are your MVA leads exclusive?",
    a: "Yes. We run the ads in your firm's own ad account and send every inquiry straight to your intake, so no lead is shared with or resold to another firm.",
  },
  {
    q: "How is this different from buying MVA leads for sale?",
    a: "When you buy leads, a vendor runs the ads and you pay per lead, often for leads that are also sold to other firms. With our system the campaigns are yours: you own the ads, landing pages and data, and you can see exactly where each case came from.",
  },
  {
    q: "How much do MVA leads cost?",
    a: "Vendor prices vary widely by state, case type and exclusivity. With your own campaigns you pay Meta for the ad spend plus our fee, and cost per lead depends on your market and offer. The more useful number is cost per signed case, which the calculator on this page helps you estimate with your own figures.",
  },
  {
    q: "Do the ads follow attorney advertising rules?",
    a: "Your firm reviews and approves every ad and landing page before launch, so they can be checked against your state bar's advertising rules. We do not publish anything without your approval.",
  },
  {
    q: "How fast can we start getting MVA leads?",
    a: "Onboarding and the build typically take 14 to 21 days from the kickoff call to live campaigns.",
  },
];

const H2 = "text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]";

export default function ExclusiveMvaLeadsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Exclusive MVA leads for personal injury attorneys",
          serviceType: "Motor vehicle accident lead generation",
          description:
            "Exclusive motor vehicle accident (MVA) case inquiries from Meta Ads campaigns run in the law firm's own ad account, with qualification and instant follow-up.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United States" },
          audience: { "@type": "BusinessAudience", audienceType: "Personal injury law firms" },
          url: `${SITE_URL}${PATH}`,
        }}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([["Services", "/services"], ["Exclusive MVA Leads", PATH]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <Breadcrumbs items={[["Home", "/"], ["Services", "/services"], ["Exclusive MVA Leads"]]} className="mb-5 flex justify-center lg:justify-start" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase shadow-sm">
              <Scale className="w-3.5 h-3.5 text-purple-700" /> For personal injury attorneys
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[56px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
              Exclusive <span className="animate-purple-gradient font-hero tracking-tight">MVA Leads</span> for Personal Injury Attorneys
            </h1>
            <p className="mt-6 text-[16px] sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop racing other firms for the same shared leads. We build and run Facebook and Instagram ads in <strong className="text-stone-950">your own ad account</strong>, so every car, truck and motorcycle accident inquiry goes to your firm only, qualified and followed up in seconds.
            </p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-3 max-w-2xl mx-auto lg:mx-0">
              {["Never shared or resold", "You own every asset", "Live in 14–21 days"].map((t) => (
                <li key={t} className="flex items-center justify-center lg:justify-start gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm font-bold text-stone-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-purple-700" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            industry="Personal injury (MVA)"
            title="Get exclusive MVA leads"
            subtitle="Tell us about your firm. We'll reply within one business day with a campaign plan for your market."
            companyLabel="Law firm"
            submitLabel="Get my MVA lead plan"
          />
        </div>
      </section>

      <TrustBarSection />

      {/* What are MVA leads + lead types */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">What are MVA leads?</span>
            <h2 className={`mt-5 ${H2}`}>
              Three ways to get <span className="animate-purple-gradient font-hero">MVA leads</span>
            </h2>
            <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">
              MVA leads are inquiries from people injured in a motor vehicle accident who want to speak to a lawyer. How you get them decides who else is calling them, and who owns the data.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {LEAD_TYPES.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-3xl border-2 p-7 ${
                  t.featured ? "border-stone-950 bg-white shadow-[0_25px_60px_rgba(147,51,234,0.22)] lg:-translate-y-3" : "border-stone-200 bg-[#FAF8F4]"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3.5 left-7 rounded-full bg-purple-700 px-3.5 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-white">Recommended</span>
                )}
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-stone-500">{t.tag}</p>
                <h3 className="mt-2 text-xl font-black text-stone-950">{t.name}</h3>
                <ul className="mt-5 space-y-2.5">
                  {t.good.map((g) => (
                    <li key={g} className="flex gap-2.5 text-[15px] text-stone-700"><CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />{g}</li>
                  ))}
                  {t.bad.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[15px] text-stone-500"><XCircle className="w-5 h-5 shrink-0 text-stone-400" />{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
              <Gauge className="w-3.5 h-3.5" /> Interactive calculator
            </span>
            <h2 className={`mt-5 ${H2}`}>
              What does a <span className="animate-purple-gradient font-hero">signed case</span> really cost?
            </h2>
            <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">
              Price per lead is only half the story. Enter your own numbers to see your cost per signed case, and how much a better sign rate changes it.
            </p>
          </div>
          <div className="mt-12"><CaseCostCalculator /></div>
        </div>
      </section>

      {/* Flow */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-24 sm:py-28 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/25 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-purple-200 font-mono font-black text-[11px] tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" /> How it works
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">
              From accident to <span className="text-purple-300">your intake</span> in minutes
            </h2>
          </div>
          <div className="mt-12"><InquiryFlowTabs /></div>
        </div>
      </section>

      {/* Case types */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-center ${H2}`}>
            One campaign per <span className="animate-purple-gradient font-hero">accident type</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CASE_TYPES.map((c) => (
              <div key={c.title} className="group rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <c.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-black text-stone-950">{c.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
              <BadgeCheck className="w-3.5 h-3.5" /> What you get
            </span>
            <h2 className={`mt-5 ${H2}`}>
              A lead system your firm <span className="animate-purple-gradient font-hero">owns</span>
            </h2>
            <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">
              Everything is built in your accounts. If we ever part ways, the ads, pages, data and follow-up stay with your firm.
            </p>
            <Link href="/personal-injury-lead-generation" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-700 hover:text-stone-950">
              See the full PI lead generation service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="rounded-3xl border-2 border-stone-200 bg-[#FAF8F4] p-6 hover:border-purple-400 transition-colors">
                <d.icon className="w-6 h-6 text-purple-700" />
                <h3 className="mt-4 font-black text-stone-950">{d.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientTestimonialsSection />

      <FaqSection faqs={faqs} eyebrow="MVA leads FAQ" title={<>Questions about <span className="font-serif italic animate-purple-gradient">MVA leads.</span></>} />

      {/* Final form */}
      <section id="get-leads" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-28 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-purple-900 to-stone-950 text-white">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-400/25 blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <ShieldCheck className="w-10 h-10 text-purple-300" />
            <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">Get MVA leads no other firm is calling</h2>
            <ul className="mt-7 space-y-3">
              {["A campaign plan for your state and case types", "What it would take to launch in 14–21 days", "No obligation, no long-term lock-in"].map((t) => (
                <li key={t} className="flex gap-3 text-[16px] sm:text-lg text-purple-50"><CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-purple-300" />{t}</li>
              ))}
            </ul>
          </div>
          <LeadForm industry="Personal injury (MVA)" title="Request your MVA lead plan" companyLabel="Law firm" submitLabel="Send my request" />
        </div>
      </section>

      <RelatedResources
        items={[
          { kind: "Service", title: "Personal injury lead generation", text: "The full done-for-you system: research, ads, landing pages, qualification and CRM.", href: "/personal-injury-lead-generation" },
          { kind: "Service", title: "MVA Lead Generation mastermind", text: "Watch the training that walks through our MVA campaign build step by step.", href: "/mvaleadgeneration" },
          { kind: "Guide", title: "How to find hidden Facebook interests", text: "The targeting workflow behind our accident campaigns.", href: "/blog/find-hidden-facebook-interests" },
        ]}
      />

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
