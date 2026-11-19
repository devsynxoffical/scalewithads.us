import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CloudLightning,
  Droplets,
  Gauge,
  Hammer,
  Home,
  ImageIcon,
  MessageSquare,
  ShieldCheck,
  Sun,
  Target,
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
import { RoofingLeadEstimator } from "@/components/leads/Calculators";
import { RoofingProofGallery } from "@/components/leads/Interactive";
import type { Faq } from "@/lib/faqs";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const PATH = "/roofing-leads";

export const metadata: Metadata = pageMeta({
  title: "Exclusive Roofing Leads From Facebook & Instagram Ads",
  description:
    "Exclusive roofing leads from ads in your own account, not shared pay-per-lead lists. Published results from $3.75 to $14.58 per lead. Get a plan for your area.",
  path: PATH,
});

const COMPARE = [
  { label: "Who else gets the lead", shared: "Often shared with other roofers", ours: "Only your company" },
  { label: "Who owns the ads and data", shared: "The lead vendor", ours: "You" },
  { label: "Control over area and service", shared: "Limited", ours: "Full: zip codes, services, offers" },
  { label: "Speed to first contact", shared: "Whoever calls first", ours: "Instant SMS and email" },
  { label: "When you stop paying", shared: "Leads stop, nothing left", ours: "You keep ads, pages and data" },
];

const SERVICES = [
  { icon: CloudLightning, title: "Storm & hail damage", text: "Offers and ads timed around weather events in your service area." },
  { icon: Home, title: "Roof replacement", text: "Campaigns aimed at homeowners with older roofs ready to replace." },
  { icon: Hammer, title: "Roof repair", text: "Fast-response campaigns for leaks and urgent repairs." },
  { icon: Droplets, title: "Gutters", text: "Add-on campaigns for gutters, guards and cleaning." },
  { icon: Sun, title: "Solar", text: "Solar campaigns run alongside roofing for the same homeowners." },
];

const STEPS = [
  { icon: Target, title: "Offer for your area", text: "An offer built around what homeowners in your zip codes respond to." },
  { icon: ImageIcon, title: "Video ads", text: "Short roofing video and image ads tested side by side on small budgets." },
  { icon: CheckCircle2, title: "Qualify", text: "Questions on homeownership, roof condition and timeline filter out renters." },
  { icon: MessageSquare, title: "Instant follow-up", text: "Every lead gets an SMS and email in seconds and lands in your CRM." },
  { icon: BarChart3, title: "Optimize on jobs", text: "Budget moves toward the ads producing booked inspections and closed jobs." },
];

const faqs: Faq[] = [
  {
    q: "How much do roofing leads cost?",
    a: "It depends on your market, offer and season. Our published roofing campaigns ranged from $3.75 to $14.58 per lead, with one Florida campaign at $11.42 in a high-cost market. Those are past results, not a guarantee; use the estimator on this page with your own numbers.",
  },
  {
    q: "Are these roofing leads exclusive?",
    a: "Yes. The ads run in your own ad account and every inquiry goes only to your company. Nothing is shared with or resold to other roofers.",
  },
  {
    q: "Is this pay per lead?",
    a: "No. Instead of paying a vendor per lead, you pay Meta directly for ad spend plus our fee to build and run the system. You own the ads, landing pages and lead data.",
  },
  {
    q: "Which services can you generate leads for?",
    a: "Roof replacement, repair, storm and hail damage, plus related services such as gutters and solar. One of our Florida clients ran roofing, gutters and solar together.",
  },
  {
    q: "How fast can we get roofing leads?",
    a: "Campaigns typically go live 14 to 21 days after the kickoff call. Leads start as soon as the ads are approved and running.",
  },
  {
    q: "Do you work with roofing marketing agencies?",
    a: "Yes. We run campaigns for agencies that sell marketing to roofers, including one that produced 664 leads in 8 days and another that closed $546K in 67 days.",
  },
];

const H2 = "text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]";

export default function RoofingLeadsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Exclusive roofing leads",
          serviceType: "Roofing lead generation",
          description:
            "Exclusive roofing leads from Facebook and Instagram ads run in the roofing company's own ad account, with qualification and instant follow-up.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United States" },
          audience: { "@type": "BusinessAudience", audienceType: "Roofing companies" },
          url: `${SITE_URL}${PATH}`,
        }}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([["Services", "/services"], ["Roofing Leads", PATH]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/20 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <Breadcrumbs items={[["Home", "/"], ["Services", "/services"], ["Roofing Leads"]]} className="mb-5 flex justify-center lg:justify-start" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase shadow-sm">
              <Home className="w-3.5 h-3.5 text-purple-700" /> For roofing companies
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[56px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
              Exclusive <span className="animate-purple-gradient font-hero tracking-tight">Roofing Leads</span> That Only You Get
            </h1>
            <p className="mt-6 text-[16px] sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop buying shared pay-per-lead lists. We run Facebook and Instagram ads in <strong className="text-stone-950">your own account</strong> that bring homeowners in your area straight to your team, qualified and followed up in seconds.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
              {[
                ["$3.75", "Lowest published CPL"],
                ["664", "Leads in 8 days"],
                ["$546K", "Won in 67 days"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl border-2 border-stone-950 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-xl sm:text-2xl font-black text-stone-950 font-hero">{v}</p>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-stone-500">From our published client case studies. Past results, not a guarantee.</p>
          </div>
          <LeadForm
            industry="Roofing"
            title="Get exclusive roofing leads"
            subtitle="Tell us your service area. We'll reply within one business day with a lead plan for your market."
            companyLabel="Roofing company"
            submitLabel="Get my roofing lead plan"
          />
        </div>
      </section>

      <TrustBarSection />

      {/* Proof gallery */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" /> Real roofing results
            </span>
            <h2 className={`mt-5 ${H2}`}>
              See the <span className="animate-purple-gradient font-hero">dashboards</span>
            </h2>
            <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">Click any result to see the client dashboard it came from.</p>
          </div>
          <div className="mt-12"><RoofingProofGallery /></div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-center ${H2}`}>
            Shared leads vs. <span className="animate-purple-gradient font-hero">your own leads</span>
          </h2>
          <div className="mt-12 overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-xl">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-stone-950 text-white text-xs sm:text-sm font-black uppercase tracking-wider">
              <div className="p-4" />
              <div className="p-4 text-stone-300">Pay-per-lead vendor</div>
              <div className="p-4 bg-purple-700">Ads in your account</div>
            </div>
            {COMPARE.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-[1.1fr_1fr_1fr] text-[14px] sm:text-[15px] ${i % 2 ? "bg-stone-50" : "bg-white"}`}>
                <div className="p-4 font-bold text-stone-700">{r.label}</div>
                <div className="p-4 text-stone-500 flex gap-2"><XCircle className="w-4 h-4 mt-0.5 shrink-0 text-stone-400" />{r.shared}</div>
                <div className="p-4 font-bold text-stone-950 flex gap-2 bg-purple-50/60"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-purple-700" />{r.ours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
              <Gauge className="w-3.5 h-3.5" /> Interactive estimator
            </span>
            <h2 className={`mt-5 ${H2}`}>
              How many <span className="animate-purple-gradient font-hero">inspections</span> could your budget book?
            </h2>
          </div>
          <div className="mt-12"><RoofingLeadEstimator /></div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-center ${H2}`}>
            Leads for every <span className="animate-purple-gradient font-hero">roofing service</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <s.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-black text-stone-950">{s.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-24 sm:py-28 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/25 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">
            From ad to <span className="text-purple-300">booked inspection</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-purple-400/50 transition-colors">
                <span className="absolute right-5 top-4 font-hero text-5xl font-black text-white/5">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/30 border border-purple-400/30 text-purple-200"><s.icon className="w-5 h-5" /></span>
                <p className="mt-5 font-mono text-[11px] font-black uppercase tracking-widest text-purple-300">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1.5 text-lg font-black">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-300 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/facebook-ads-for-roofing-companies" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-200 hover:text-white">
              How we run Facebook ads for roofers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ClientTestimonialsSection />

      <FaqSection faqs={faqs} eyebrow="Roofing leads FAQ" title={<>Questions about <span className="font-serif italic lowercase animate-purple-gradient">roofing leads.</span></>} />

      {/* Final form */}
      <section id="get-leads" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-28 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-purple-900 to-stone-950 text-white">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-400/25 blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <Zap className="w-10 h-10 text-purple-300" />
            <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">Get roofing leads no other roofer is calling</h2>
            <ul className="mt-7 space-y-3">
              {["A lead plan for your service area and services", "What a realistic cost per lead looks like in your market", "No obligation, no long-term lock-in"].map((t) => (
                <li key={t} className="flex gap-3 text-[16px] sm:text-lg text-purple-50"><CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-purple-300" />{t}</li>
              ))}
            </ul>
          </div>
          <LeadForm industry="Roofing" title="Request your roofing lead plan" companyLabel="Roofing company" submitLabel="Send my request" />
        </div>
      </section>

      <RelatedResources
        items={[
          { kind: "Service", title: "Facebook ads for roofing companies", text: "How we build and run roofing campaigns: offers, video ads, qualification and follow-up.", href: "/facebook-ads-for-roofing-companies" },
          { kind: "Case study", title: "280 Florida roofing, gutter & solar leads", text: "$11.42 per lead in 15 days in one of the toughest markets.", href: "/case-studies/florida-roofing-solar-280-leads" },
          { kind: "Case study", title: "227 roofing leads at $14 CPL", text: "How moving budget to the best ads kept the cost per lead down.", href: "/case-studies/227-roofing-leads-14-cpl" },
        ]}
      />

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
