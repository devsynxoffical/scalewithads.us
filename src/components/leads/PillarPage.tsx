import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, RelatedResources, type RelatedItem } from "@/components/seo/RelatedResources";
import { LeadForm } from "@/components/leads/LeadForm";
import { LegalProofSection } from "@/components/leads/LegalProofSection";
import { LEGAL_FORM_NOTE } from "@/components/leads/LegalLeadPage";
import type { Faq } from "@/lib/faqs";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export type PillarCard = { icon: LucideIcon; title: string; text: string; href?: string };

export type PillarSection = {
  id: string;
  eyebrow: string;
  title: [string, string];
  paras?: ReactNode[];
  cards?: PillarCard[];
  steps?: { title: string; text: string }[];
  table?: { caption: string; head: string[]; rows: string[][] };
  list?: string[];
};

export type PillarPageConfig = {
  path: string;
  crumb: string;
  chip: string;
  h1: [string, string, string?];
  intro: ReactNode;
  answerQuestion: string;
  answer: string;
  bullets: string[];
  industry: string;
  formTitle: string;
  service: { name: string; serviceType: string; description: string };
  proofTitle: string;
  proofIntro: string;
  sections: PillarSection[];
  pricing: string[];
  faqs: Faq[];
  faqTitle: string;
  finalTitle: string;
  finalBullets: string[];
  related: RelatedItem[];
};

const H2 = "text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]";
const CHIP = "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase";
const P = "mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed";

function Section({ s, alt }: { s: PillarSection; alt: boolean }) {
  return (
    <section id={s.id} className={`scroll-mt-24 py-20 sm:py-24 px-4 md:px-8 ${alt ? "bg-white border-y border-stone-200" : ""}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className={CHIP}>{s.eyebrow}</span>
          <h2 className={`mt-5 ${H2}`}>{s.title[0]} <span className="animate-purple-gradient font-hero">{s.title[1]}</span></h2>
          {s.paras?.map((p, i) => <p key={i} className={P}>{p}</p>)}
        </div>
        {s.list && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-4xl">
            {s.list.map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl border border-stone-200 bg-[#FAF8F4] px-4 py-3 text-[15px] font-semibold text-stone-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />{t}
              </li>
            ))}
          </ul>
        )}
        {s.cards && (
          <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${s.cards.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {s.cards.map((c) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors"><c.icon className="w-5 h-5" /></span>
                  <h3 className="mt-4 font-black text-stone-950">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{c.text}</p>
                  {c.href && <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-purple-700">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>}
                </>
              );
              const cls = "group block rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300";
              return c.href ? <Link key={c.title} href={c.href} className={cls}>{inner}</Link> : <div key={c.title} className={cls}>{inner}</div>;
            })}
          </div>
        )}
        {s.steps && (
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.steps.map((st, i) => (
              <li key={st.title} className="relative rounded-3xl border-2 border-stone-200 bg-[#FAF8F4] p-6">
                <span className="font-hero text-4xl font-black text-purple-200">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-black text-stone-950">{st.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{st.text}</p>
              </li>
            ))}
          </ol>
        )}
        {s.table && (
          <div className="mt-10 overflow-x-auto rounded-2xl border-2 border-stone-950 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">{s.table.caption}</caption>
              <thead className="bg-stone-950 text-white">
                <tr>{s.table.head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-black">{h}</th>)}</tr>
              </thead>
              <tbody>
                {s.table.rows.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-[#FAF8F4]" : "bg-white"}>
                    {r.map((c, j) => (j === 0
                      ? <th key={j} scope="row" className="px-4 py-3 font-black text-stone-950">{c}</th>
                      : <td key={j} className="px-4 py-3 text-stone-700">{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

/** Long-form pillar page for legal marketing topics: answer block, content sections, proof, pricing model, FAQ and lead forms. */
export function PillarPage({ c }: { c: PillarPageConfig }) {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: c.service.name,
          serviceType: c.service.serviceType,
          description: c.service.description,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United States" },
          audience: { "@type": "BusinessAudience", audienceType: "Law firms" },
          url: `${SITE_URL}${c.path}`,
        }}
      />
      <JsonLd data={faqJsonLd(c.faqs)} />
      <JsonLd data={breadcrumbJsonLd([[c.crumb, c.path]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <Breadcrumbs items={[["Home", "/"], [c.crumb]]} className="mb-5 flex justify-center lg:justify-start" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase shadow-sm">
              <Scale className="w-3.5 h-3.5 text-purple-700" /> {c.chip}
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[54px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
              {c.h1[0]} <span className="animate-purple-gradient font-hero tracking-tight">{c.h1[1]}</span>
              {c.h1[2] ? <> {c.h1[2]}</> : null}
            </h1>
            <p className="mt-6 text-[16px] sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">{c.intro}</p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-3 max-w-2xl mx-auto lg:mx-0">
              {c.bullets.map((t) => (
                <li key={t} className="flex items-center justify-center lg:justify-start gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm font-bold text-stone-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-purple-700" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm industry={c.industry} title={c.formTitle} companyLabel="Law firm" submitLabel="Get my campaign plan"
            subtitle={`Tell us about your firm. We'll reply within one business day with a campaign plan for your market. ${LEGAL_FORM_NOTE}`} />
        </div>
      </section>

      <TrustBarSection />

      {/* Answer block */}
      <section className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto rounded-[28px] border-2 border-stone-950 bg-white p-6 sm:p-10 shadow-[0_25px_60px_rgba(147,51,234,0.15)]">
          <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">In short</p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-stone-950 tracking-tight font-hero leading-tight">{c.answerQuestion}</h2>
          <p className="mt-4 text-[16px] sm:text-lg text-stone-700 leading-relaxed">{c.answer}</p>
        </div>
      </section>

      {c.sections.slice(0, 2).map((s, i) => <Section key={s.id} s={s} alt={i % 2 === 0} />)}

      <LegalProofSection title={c.proofTitle} subtitle={c.proofIntro} />

      {c.sections.slice(2).map((s, i) => <Section key={s.id} s={s} alt={i % 2 === 0} />)}

      {/* Pricing model + compliance */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-20 sm:py-24 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/25 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-purple-200 font-mono font-black text-[11px] tracking-widest uppercase">Pricing model</span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">How you <span className="text-purple-300">pay</span></h2>
            <ul className="mt-6 space-y-3">
              {c.pricing.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] sm:text-[16px] text-stone-200 leading-relaxed"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-purple-300" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 self-start">
            <ShieldCheck className="w-8 h-8 text-purple-300" />
            <h2 className="mt-4 text-2xl font-black uppercase font-hero tracking-tight">Attorney advertising rules</h2>
            <p className="mt-3 text-sm sm:text-[16px] text-stone-300 leading-relaxed">
              {LEGAL_FORM_NOTE} Rules on testimonials, disclaimers, filing requirements and solicitation differ from state to state, so your firm reviews and approves every ad and landing page before launch. We never promise case outcomes in ads, and past results do not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={c.faqs} eyebrow={`${c.crumb} FAQ`} title={<>Questions about <span className="font-serif italic animate-purple-gradient">{c.faqTitle}</span></>} />

      {/* Final form */}
      <section id="get-leads" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-28 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-purple-900 to-stone-950 text-white">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-400/25 blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <ShieldCheck className="w-10 h-10 text-purple-300" />
            <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">{c.finalTitle}</h2>
            <ul className="mt-7 space-y-3">
              {c.finalBullets.map((t) => (
                <li key={t} className="flex gap-3 text-[16px] sm:text-lg text-purple-50"><CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-purple-300" />{t}</li>
              ))}
            </ul>
          </div>
          <LeadForm industry={c.industry} title="Request your campaign plan" companyLabel="Law firm" submitLabel="Send my request"
            subtitle={`Tell us about your firm. We reply within one business day with a plan for your market. ${LEGAL_FORM_NOTE}`} />
        </div>
      </section>

      <RelatedResources items={c.related} />
      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
