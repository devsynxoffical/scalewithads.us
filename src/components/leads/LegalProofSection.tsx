"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { LEGAL_PROOF, legalProofSrc } from "@/lib/legalProof";

/** Interactive gallery of real legal (MVA / personal injury) Meta Ads results. */
export function LegalProofSection({
  title = "Real legal campaign results",
  subtitle = "Click a result to see the Meta Ads dashboard it came from.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState(0);
  const p = LEGAL_PROOF[active];
  return (
    <section className="py-20 sm:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified results
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">{title}</h2>
          <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <figure className="overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-[0_25px_60px_rgba(147,51,234,0.2)]">
            <div className="flex items-center gap-1.5 border-b border-stone-200 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-auto font-mono text-[10px] font-bold uppercase tracking-widest text-stone-400">Meta Ads dashboard · {p.period}</span>
            </div>
            <img src={legalProofSrc(p.file)} alt={`${p.title}: Meta Ads dashboard`} width={1300} height={1200} loading="lazy" className="w-full h-auto" />
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t-2 border-stone-950">
              {p.stats.map((s) => (
                <div key={s.label} className="border-r border-stone-200 last:border-r-0 p-4 text-center">
                  <p className="text-xl font-black text-stone-950 font-hero">{s.value}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">{s.label}</p>
                </div>
              ))}
            </div>
            <figcaption className="border-t border-stone-200 p-4 text-sm text-stone-600 italic">
              &ldquo;{p.quote}&rdquo; Gaurav Kapoor, Co-Founder
            </figcaption>
          </figure>

          <div className="grid gap-3 content-start" role="tablist" aria-label="Legal campaign results">
            {LEGAL_PROOF.map((x, i) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all ${
                  i === active ? "border-purple-600 bg-purple-50 shadow-md" : "border-stone-200 bg-white hover:border-stone-400"
                }`}
              >
                <span className="min-w-0">
                  <span className="block text-2xl font-black text-stone-950 leading-none font-hero">{x.stats[0].value}</span>
                  <span className="mt-1.5 block text-sm font-bold text-stone-700">{x.title}</span>
                  <span className="mt-0.5 block text-xs font-semibold text-stone-500">{x.stats[1].value} per lead · {x.period}</span>
                </span>
                {i === active && <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-purple-700" />}
              </button>
            ))}
            <p className="text-xs text-stone-500 leading-relaxed px-1">Past results from published client dashboards. Results vary by state, case type and offer; they are not a guarantee.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
