import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, ClipboardCheck, Gauge, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, RelatedResources, type RelatedItem } from "@/components/seo/RelatedResources";
import { LeadForm } from "@/components/leads/LeadForm";
import { CaseCostCalculator } from "@/components/leads/Calculators";
import { LegalProofSection } from "@/components/leads/LegalProofSection";
import { AnswerBlock, PricingBlock } from "@/components/leads/LegalBlocks";
import type { Faq } from "@/lib/faqs";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

type Card = { icon: LucideIcon; title: string; text: string; href?: string };

export type LegalLeadPageConfig = {
  path: string;
  crumb: string;
  chip: string;
  h1: [string, string, string?];
  intro: ReactNode;
  bullets: string[];
  industry: string;
  formTitle: string;
  formSubmit: string;
  service: { name: string; serviceType: string; description: string; audience: string };
  showProof: boolean;
  proofTitle?: string;
  proofIntro?: string;
  cardsEyebrow: string;
  cardsTitle: [string, string];
  cardsIntro: ReactNode;
  cardsLead?: ReactNode;
  cards: Card[];
  qualifyTitle: [string, string];
  qualifyIntro: ReactNode;
  questions: string[];
  showCalculator: boolean;
  answerQuestion?: string;
  answer?: string;
  pricing?: string[];
  showCostTable?: boolean;
  calcIntro?: ReactNode;
  steps: Card[];
  compliance: string;
  faqs: Faq[];
  faqTitle: string;
  finalTitle: string;
  finalBullets: string[];
  related: RelatedItem[];
};

/** Attorney advertising note shown with every lead form on the legal pages. */
export const LEGAL_FORM_NOTE = "Advertising rules for attorneys vary by state. All campaigns are built to follow your state bar's advertising rules.";

const H2 = "text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]";
const CHIP = "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase";

export function LegalLeadPage({ c }: { c: LegalLeadPageConfig }) {
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
          audience: { "@type": "BusinessAudience", audienceType: c.service.audience },
          url: `${SITE_URL}${c.path}`,
        }}
      />
      <JsonLd data={faqJsonLd(c.faqs)} />
      <JsonLd data={breadcrumbJsonLd([["Services", "/services"], [c.crumb, c.path]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <Breadcrumbs items={[["Home", "/"], ["Services", "/services"], [c.crumb]]} className="mb-5 flex justify-center lg:justify-start" />
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
          <LeadForm industry={c.industry} title={c.formTitle} companyLabel="Law firm" submitLabel={c.formSubmit}
            subtitle={`Tell us about your firm. We'll reply within one business day with a campaign plan for your market. ${LEGAL_FORM_NOTE}`} />
        </div>
      </section>

      <TrustBarSection />

      {c.answerQuestion && c.answer && <AnswerBlock question={c.answerQuestion} answer={c.answer} />}

      {c.showProof && <LegalProofSection title={c.proofTitle} subtitle={c.proofIntro} />}

      {/* Cards */}
      <section className={`py-20 sm:py-24 px-4 md:px-8 ${c.showProof ? "bg-white border-y border-stone-200" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className={CHIP}>{c.cardsEyebrow}</span>
            <h2 className={`mt-5 ${H2}`}>{c.cardsTitle[0]} <span className="animate-purple-gradient font-hero">{c.cardsTitle[1]}</span></h2>
            {c.cardsLead && <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">{c.cardsLead}</p>}
            <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">{c.cardsIntro}</p>
          </div>
          <div className={`mt-12 grid gap-4 sm:grid-cols-2 ${c.cards.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {c.cards.map((card) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    <card.icon className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 font-black text-stone-950">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{card.text}</p>
                  {card.href && <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-purple-700">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>}
                </>
              );
              const cls = "group block rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300";
              return card.href ? <Link key={card.title} href={card.href} className={cls}>{inner}</Link> : <div key={card.title} className={cls}>{inner}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="overflow-hidden py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className={CHIP}><ClipboardCheck className="w-3.5 h-3.5" /> Built-in qualification</span>
            <h2 className={`mt-5 ${H2}`}>{c.qualifyTitle[0]} <span className="animate-purple-gradient font-hero">{c.qualifyTitle[1]}</span></h2>
            <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">{c.qualifyIntro}</p>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-purple-200/50 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border-2 border-stone-950 bg-white p-6 sm:p-8 shadow-[0_25px_60px_rgba(147,51,234,0.2)]">
              <p className="font-mono text-[11px] font-black uppercase tracking-widest text-stone-500">Example qualifying form</p>
              <ol className="mt-4 space-y-3">
                {c.questions.map((q, i) => (
                  <li key={q} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-[#FAF8F4] px-4 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-black text-purple-700">{i + 1}</span>
                    <span className="text-[15px] font-bold text-stone-800">{q}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-stone-500">Questions are set with your firm before launch.</p>
            </div>
          </div>
        </div>
      </section>

      {c.showCalculator && (
        <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className={CHIP}><Gauge className="w-3.5 h-3.5" /> Interactive calculator</span>
              <h2 className={`mt-5 ${H2}`}>What does a <span className="animate-purple-gradient font-hero">signed case</span> really cost?</h2>
              <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">{c.calcIntro ?? "Enter your own numbers to see your cost per signed case, and how much a better sign rate changes it."}</p>
            </div>
            <div className="mt-12"><CaseCostCalculator /></div>
          </div>
        </section>
      )}

      {c.pricing && <PricingBlock items={c.pricing} showCostTable={c.showCostTable} />}

      {/* Process */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-24 sm:py-28 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/25 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">
            How it <span className="text-purple-300">works</span>
          </h2>
          <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${c.steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
            {c.steps.map((s, i) => (
              <div key={s.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-purple-400/50 transition-colors">
                <span className="absolute right-5 top-4 font-hero text-5xl font-black text-white/5">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/30 border border-purple-400/30 text-purple-200"><s.icon className="w-5 h-5" /></span>
                <p className="mt-5 font-mono text-[11px] font-black uppercase tracking-widest text-purple-300">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1.5 text-lg font-black">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-300 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 mx-auto max-w-3xl flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-stone-300 leading-relaxed">
            <ShieldCheck className="w-5 h-5 shrink-0 text-purple-300" /> {c.compliance}
          </div>
        </div>
      </section>

      <ClientTestimonialsSection />

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
