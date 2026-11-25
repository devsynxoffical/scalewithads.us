import { CheckCircle2, Wallet } from "lucide-react";
import { LEGAL_PROOF } from "@/lib/legalProof";

const UPDATED = "Updated November 2026";

/** "In short" answer block: an H2 that repeats the question and a 40 to 60 word direct answer. */
export function AnswerBlock({ question, answer }: { question: string; answer: string }) {
  return (
    <section className="py-14 sm:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto rounded-[28px] border-2 border-stone-950 bg-white p-6 sm:p-10 shadow-[0_25px_60px_rgba(147,51,234,0.15)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">In short</p>
          <p className="font-mono text-[11px] font-bold text-stone-500">{UPDATED}</p>
        </div>
        <h2 className="mt-3 text-2xl sm:text-4xl font-black text-stone-950 tracking-tight font-hero leading-tight">{question}</h2>
        <p className="mt-4 text-[16px] sm:text-lg text-stone-700 leading-relaxed">{answer}</p>
      </div>
    </section>
  );
}

/** Pricing model block shared by the legal lead pages. */
export function PricingBlock({ items, showCostTable }: { items: string[]; showCostTable?: boolean }) {
  return (
    <section className="py-20 sm:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
            <Wallet className="w-3.5 h-3.5" /> Pricing model
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
            How you <span className="animate-purple-gradient font-hero">pay</span>
          </h2>
          <ul className="mt-6 space-y-3">
            {items.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] sm:text-[16px] text-stone-700 leading-relaxed"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-purple-700" />{t}</li>
            ))}
          </ul>
        </div>
        {showCostTable && (
          <div>
            <p className="font-mono text-[11px] font-black uppercase tracking-widest text-stone-500">Cost per lead from our published campaigns</p>
            <div className="mt-3 overflow-x-auto rounded-2xl border-2 border-stone-950 bg-white">
              <table className="w-full min-w-[480px] text-left text-sm">
                <caption className="sr-only">Cost per lead from published legal campaigns</caption>
                <thead className="bg-stone-950 text-white">
                  <tr>{["Campaign", "Cost per lead", "Ad spend", "Dates"].map((h) => <th key={h} scope="col" className="px-4 py-3 font-black">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {LEGAL_PROOF.map((p, i) => {
                    const v = (label: string) => p.stats.find((s) => s.label === label)?.value ?? "";
                    return (
                      <tr key={p.id} className={i % 2 ? "bg-[#FAF8F4]" : "bg-white"}>
                        <th scope="row" className="px-4 py-3 font-black text-stone-950">{p.title}</th>
                        <td className="px-4 py-3 text-stone-700">{v("Cost per lead")}</td>
                        <td className="px-4 py-3 text-stone-700">{v("Ad spend")}</td>
                        <td className="px-4 py-3 text-stone-700">{p.period}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-stone-500 leading-relaxed">Past results from published client dashboards. Costs depend on state, case type, offer and intake speed; they are not a quote or a guarantee.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/** Pricing model shared by the legal lead pages. */
export const LEGAL_PRICING = [
  "No per-lead price: you pay Meta directly for ad spend in your firm's own ad account.",
  "Plus our management fee, scoped on the strategy call based on your case types, states and budget.",
  "Leads are never shared or resold, and your firm owns the ads, pages and lead data.",
  "We report cost per lead and cost per signed case, so you can compare us with any other source.",
];

/** Lead qualification checklist. */
export function ChecklistBlock({ title, intro, items }: { title: [string, string]; intro: string; items: string[] }) {
  return (
    <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">Qualification checklist</span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
            {title[0]} <span className="animate-purple-gradient font-hero">{title[1]}</span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">{intro}</p>
        </div>
        <ul className="space-y-3">
          {items.map((t) => (
            <li key={t} className="flex gap-3 rounded-2xl border border-stone-200 bg-[#FAF8F4] px-4 py-3 text-[15px] font-semibold text-stone-800">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />{t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
