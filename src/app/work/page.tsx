import Link from "next/link";
import { ArrowRight, Award, Camera, CalendarDays, FileSearch, ShieldCheck } from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResultsByIndustry } from "@/components/work/ResultsByIndustry";
import { LeadForm } from "@/components/leads/LeadForm";
import { INDUSTRIES, WORK_RESULTS } from "@/lib/workResults";
import { breadcrumbJsonLd } from "@/lib/seo";

const VERIFY = [
  { icon: Camera, title: "Real dashboards", text: "Every result is a screenshot of the client's Meta Ads Manager or CRM dashboard, not a mock-up." },
  { icon: CalendarDays, title: "Published with a date", text: "Each one was posted publicly by Vaishali or Gaurav Kapoor, and the date is shown on every card." },
  { icon: FileSearch, title: "Quoted as published", text: "The numbers on each card are the ones in the screenshot or its original caption, nothing rounded up." },
  { icon: ShieldCheck, title: "Past results only", text: "Results depend on market, offer and follow-up. They show what's possible, not a guarantee." },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd data={breadcrumbJsonLd([["Results", "/work"]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-14 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-purple-700" /> Results & case studies
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
            Meta Ads results <span className="font-serif italic lowercase animate-purple-gradient">by industry.</span>
          </h1>
          <p className="mt-5 text-stone-600 font-medium text-lg sm:text-xl max-w-3xl mx-auto">
            {WORK_RESULTS.length} client results across {INDUSTRIES.length} industries, each shown with the dashboard screenshot it came from. Filter by industry and click any card to see the full dashboard.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              ["530", "PI leads in 7 days"],
              ["$127,500", "Roofing installs in 63 days"],
              ["1,018", "Webinar registrations in a month"],
              ["$165,760", "From 45 deals in 26 days"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border-2 border-stone-950 bg-white px-3 py-4 shadow-sm">
                <p className="text-2xl font-black text-stone-950 font-hero">{v}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results by industry */}
      <section className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <ResultsByIndustry />
        </div>
      </section>

      {/* How results are verified */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
            How we <span className="animate-purple-gradient font-hero">show results</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VERIFY.map((v) => (
              <div key={v.title} className="rounded-3xl border-2 border-stone-200 bg-[#FAF8F4] p-6">
                <v.icon className="w-6 h-6 text-purple-700" />
                <h3 className="mt-4 font-black text-stone-950">{v.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-stone-500">
            In-depth write-ups: the <Link href="/metalto" className="font-bold text-purple-700 underline underline-offset-4">$847K low-ticket funnel case study</Link> and our{" "}
            <Link href="/exclusive-mva-leads" className="font-bold text-purple-700 underline underline-offset-4">MVA lead campaigns</Link>.
          </p>
        </div>
      </section>

      <ClientTestimonialsSection />

      {/* Lead form */}
      <section className="relative overflow-hidden py-20 sm:py-24 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-purple-900 to-stone-950 text-white">
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">Want results like these?</h2>
            <p className="mt-5 text-[16px] sm:text-lg text-purple-100 leading-relaxed">Tell us your industry and goals. We&apos;ll reply within one business day with what a campaign could look like for you.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-stone-950 hover:bg-purple-100">
              Or book a call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <LeadForm industry="Results page" title="Get a plan for your business" submitLabel="Send my request" />
        </div>
      </section>

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
