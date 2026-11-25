import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, ExternalLink, Gavel, MapPin, ShieldCheck } from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/RelatedResources";
import { LeadForm } from "@/components/leads/LeadForm";
import { LegalProofSection } from "@/components/leads/LegalProofSection";
import { LEGAL_FORM_NOTE } from "@/components/leads/LegalLeadPage";
import { AnswerBlock, LEGAL_PRICING, PricingBlock } from "@/components/leads/LegalBlocks";
import type { Faq } from "@/lib/faqs";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export type CityPageConfig = {
  path: string;
  /** Place name shown in headings, e.g. "Los Angeles" or "Texas". */
  place: string;
  /** Schema type for areaServed. */
  placeType: "City" | "State";
  /** State name for a city page; omitted on state pages. */
  state?: string;
  /** Breadcrumb trail after Home, e.g. [["Law Firm Marketing", "/law-firm-marketing"], ["Texas", "/law-firm-marketing/texas"], ["Dallas", path]]. */
  crumbs: [string, string][];
  h1: [string, string, string?];
  intro: ReactNode;
  answerQuestion: string;
  answer: string;
  rules: { source: string; url: string; intro: string; points: { rule: string; text: string; url?: string }[]; note: string };
  market: { intro: ReactNode; facts: { label: string; value: string; source: string; url: string }[]; outro?: ReactNode };
  caseTypes: { title: string; text: string; href: string }[];
  caseIntro: ReactNode;
  proofIntro: string;
  approach: { title: string; paras: ReactNode[] };
  nearby: { title: string; intro: string; places: string[] };
  links: { label: string; href: string }[];
  faqs: Faq[];
};

const H2 = "text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]";
const CHIP = "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase";
const P = "mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed";

/** Law firm marketing page for one state or city: answer, state bar rules, local market facts with sources, case types, proof, pricing and FAQ. */
export function CityPage({ c }: { c: CityPageConfig }) {
  const area = c.placeType === "City"
    ? { "@type": "City", name: c.place, containedInPlace: { "@type": "State", name: c.state } }
    : { "@type": "State", name: c.place };
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Law firm marketing in ${c.place}`,
          serviceType: "Law firm marketing and legal lead generation",
          description: `Meta ads, lead screening and intake follow-up for personal injury and other law firms in ${c.place}.`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: area,
          audience: { "@type": "BusinessAudience", audienceType: "Law firms" },
          url: `${SITE_URL}${c.path}`,
        }}
      />
      <JsonLd data={faqJsonLd(c.faqs)} />
      <JsonLd data={breadcrumbJsonLd(c.crumbs)} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <Breadcrumbs items={[["Home", "/"], ...c.crumbs.slice(0, -1), [c.crumbs[c.crumbs.length - 1][0]]]} className="mb-5 flex justify-center lg:justify-start" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-purple-700" /> {c.place}{c.state ? `, ${c.state}` : ""}
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[54px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
              {c.h1[0]} <span className="animate-purple-gradient font-hero tracking-tight">{c.h1[1]}</span>
              {c.h1[2] ? <> {c.h1[2]}</> : null}
            </h1>
            <p className="mt-6 text-[16px] sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">{c.intro}</p>
          </div>
          <LeadForm industry={`Law firm marketing (${c.place})`} title={`Get a plan for your ${c.place} firm`} companyLabel="Law firm" submitLabel="Get my campaign plan"
            subtitle={`Tell us about your firm. We'll reply within one business day with a campaign plan for your market. ${LEGAL_FORM_NOTE}`} />
        </div>
      </section>

      <TrustBarSection />

      <AnswerBlock question={c.answerQuestion} answer={c.answer} />

      {/* State bar rules */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className={CHIP}><Gavel className="w-3.5 h-3.5" /> Advertising rules</span>
            <h2 className={`mt-5 ${H2}`}>{c.state ?? c.place} lawyer <span className="animate-purple-gradient font-hero">advertising rules</span></h2>
            <p className={P}>{c.rules.intro}</p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {c.rules.points.map((r) => (
              <li key={r.rule} className="rounded-3xl border-2 border-stone-200 bg-[#FAF8F4] p-6">
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">{r.rule}</p>
                <p className="mt-2 text-[15px] text-stone-700 leading-relaxed">{r.text}</p>
                {r.url && (
                  <a href={r.url} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-stone-500 underline underline-offset-4 hover:text-purple-700">
                    Read the source <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-stone-600 leading-relaxed max-w-4xl">
            Source: <a href={c.rules.url} target="_blank" rel="noopener" className="font-bold text-purple-700 underline underline-offset-4 inline-flex items-center gap-1">{c.rules.source} <ExternalLink className="w-3.5 h-3.5" /></a>. {c.rules.note}
          </p>
        </div>
      </section>

      {/* Local market */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className={CHIP}><MapPin className="w-3.5 h-3.5" /> Local market</span>
            <h2 className={`mt-5 ${H2}`}>The {c.place} <span className="animate-purple-gradient font-hero">legal market</span></h2>
            <p className={P}>{c.market.intro}</p>
          </div>
          {c.market.facts.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.market.facts.map((f) => (
                <div key={f.label} className="rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg">
                  <p className="text-3xl font-black text-purple-700 font-hero">{f.value}</p>
                  <p className="mt-1 text-sm font-bold text-stone-800">{f.label}</p>
                  <a href={f.url} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-stone-500 underline underline-offset-4 hover:text-purple-700">
                    Source: {f.source} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          )}
          {c.market.outro && <p className={`${P} max-w-3xl`}>{c.market.outro}</p>}
        </div>
      </section>

      {/* Case types */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className={CHIP}>Case types</span>
            <h2 className={`mt-5 ${H2}`}>Case types that convert in <span className="animate-purple-gradient font-hero">{c.place}</span></h2>
            <p className={P}>{c.caseIntro}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.caseTypes.map((t) => (
              <Link key={t.href} href={t.href} className="group block rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300">
                <h3 className="font-black text-stone-950 group-hover:text-purple-700">{t.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{t.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-purple-700">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LegalProofSection title="Real legal campaign results (national)" subtitle={c.proofIntro} />

      {/* Approach */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <span className={CHIP}>How we work</span>
          <h2 className={`mt-5 ${H2}`}>{c.approach.title}</h2>
          {c.approach.paras.map((p, i) => <p key={i} className={P}>{p}</p>)}
        </div>
      </section>

      <PricingBlock items={LEGAL_PRICING} showCostTable />

      {/* Nearby */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight uppercase font-hero">{c.nearby.title}</h2>
            <p className="mt-3 text-stone-600 leading-relaxed">{c.nearby.intro}</p>
            <p className="mt-4 text-[15px] font-semibold text-stone-800 leading-relaxed">{c.nearby.places.join(", ")}.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight uppercase font-hero">Related pages</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-2 rounded-xl border border-stone-200 bg-[#FAF8F4] px-4 py-3 text-sm font-bold text-stone-800 hover:border-purple-400 hover:text-purple-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-700" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection faqs={c.faqs} eyebrow={`${c.place} law firm marketing FAQ`} title={<>Questions from <span className="font-serif italic animate-purple-gradient">{c.place} firms.</span></>} />

      {/* Final form */}
      <section id="get-leads" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-28 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-purple-900 to-stone-950 text-white">
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <ShieldCheck className="w-10 h-10 text-purple-300" />
            <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">Get a campaign plan for {c.place}</h2>
            <p className="mt-5 text-[16px] sm:text-lg text-purple-100 leading-relaxed">We review your case types, your market and what your state bar allows before we write a single ad. Past results do not guarantee future results.</p>
          </div>
          <LeadForm industry={`Law firm marketing (${c.place})`} title="Request your campaign plan" companyLabel="Law firm" submitLabel="Send my request"
            subtitle={`Tell us about your firm. We reply within one business day with a plan for your market. ${LEGAL_FORM_NOTE}`} />
        </div>
      </section>

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
