"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { INDUSTRIES, WORK_RESULTS, workProofSrc, type Industry, type WorkResult } from "@/lib/workResults";

/** Filterable grid of published client results with a full-size screenshot viewer. */
export function ResultsByIndustry() {
  const [filter, setFilter] = useState<Industry | "All">("All");
  const [open, setOpen] = useState<WorkResult | null>(null);
  const items = filter === "All" ? WORK_RESULTS : WORK_RESULTS.filter((r) => r.industry === filter);
  const count = (i: Industry) => WORK_RESULTS.filter((r) => r.industry === i).length;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div>
      <div role="tablist" aria-label="Filter results by industry" className="flex flex-wrap justify-center gap-2">
        {(["All", ...INDUSTRIES] as const).map((i) => (
          <button
            key={i}
            role="tab"
            aria-selected={filter === i}
            onClick={() => setFilter(i)}
            className={`rounded-full border-2 px-4 py-2 text-xs sm:text-sm font-black transition-colors ${
              filter === i ? "border-stone-950 bg-stone-950 text-white" : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
            }`}
          >
            {i} <span className={filter === i ? "text-purple-300" : "text-stone-400"}>{i === "All" ? WORK_RESULTS.length : count(i)}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <article key={r.id} className="group flex flex-col overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-lg hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300">
            <button onClick={() => setOpen(r)} className="relative block h-48 overflow-hidden border-b-2 border-stone-950 bg-stone-100 text-left" aria-label={`View dashboard: ${r.stat} ${r.label}`}>
              <img src={workProofSrc(r.file)} alt={`${r.stat} ${r.label}: client dashboard`} loading="lazy" width={1360} height={1000} className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute left-3 top-3 rounded-full bg-stone-950/85 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-white">{r.industry}</span>
              <span className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-purple-700 shadow"><Maximize2 className="h-4 w-4" /></span>
            </button>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-3xl font-black text-stone-950 font-hero tracking-tight">{r.stat}</p>
              <p className="mt-1 text-sm font-bold text-stone-700">{r.label}</p>
              <p className="mt-3 flex-1 text-sm italic text-stone-500 leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-stone-100 pt-3">
                <span className="text-[11px] font-bold text-stone-400">{r.author} · {r.posted}</span>
                {r.href && (
                  <a href={r.href} {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})} className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-purple-700 hover:text-stone-950">
                    {r.linkLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={`${open.stat} ${open.label}`} className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/85 p-4" onClick={() => setOpen(null)}>
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-stone-950 text-white"><X className="h-4 w-4" /></button>
            <img src={workProofSrc(open.file)} alt={`${open.stat} ${open.label}: client dashboard`} className="w-full h-auto" />
            <p className="p-4 text-sm font-bold text-stone-700">{open.stat} {open.label} · posted by {open.author}, {open.posted}</p>
          </div>
        </div>
      )}
    </div>
  );
}
