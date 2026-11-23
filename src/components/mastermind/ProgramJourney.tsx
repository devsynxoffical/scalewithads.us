"use client";

import { useEffect, useState } from "react";
import { BarChart3, Bot, Crosshair, Repeat, Rocket, Wallet, type LucideIcon } from "lucide-react";

export type JourneyWeek = { week: string; theme: string; classes: { title: string }[] };

const ICONS: LucideIcon[] = [Crosshair, Bot, Rocket, BarChart3, Repeat, Wallet];
const STEPS = ["Research", "AI production", "Tracking & launch", "Scaling", "Retargeting", "Profitability"];

/** Clickable 6-week journey: pick a week to see its theme and classes. Auto-advances until the visitor interacts. */
export function ProgramJourney({ weeks }: { weeks: JourneyWeek[] }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive((a) => (a + 1) % weeks.length), 3500);
    return () => clearInterval(t);
  }, [auto, weeks.length]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };
  const w = weeks[active];
  const Icon = ICONS[active % ICONS.length];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-purple-300/40 via-fuchsia-200/20 to-transparent blur-2xl" />
      <div className="relative rounded-[28px] border-2 border-stone-950 bg-white p-5 sm:p-7 shadow-[0_25px_60px_rgba(147,51,234,0.2)]">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] font-black uppercase tracking-widest text-stone-500">Your 6-week journey</p>
          <p className="font-mono text-[11px] font-black text-purple-700">{active + 1} / {weeks.length}</p>
        </div>

        {/* Progress */}
        <div className="mt-3 h-1.5 rounded-full bg-stone-100 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 transition-all duration-500" style={{ width: `${((active + 1) / weeks.length) * 100}%` }} />
        </div>

        {/* Week tabs */}
        <div role="tablist" aria-label="Program weeks" className="mt-5 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {weeks.map((wk, i) => {
            const I = ICONS[i % ICONS.length];
            const on = i === active;
            const done = i < active;
            return (
              <button
                key={wk.week}
                role="tab"
                aria-selected={on}
                onClick={() => pick(i)}
                onMouseEnter={() => pick(i)}
                className={`group flex flex-col items-center gap-1.5 rounded-2xl border-2 px-2 py-3 transition-all duration-300 ${
                  on ? "border-stone-950 bg-stone-950 text-white -translate-y-1 shadow-lg" : done ? "border-purple-200 bg-purple-50 text-purple-800" : "border-stone-200 bg-white text-stone-600 hover:border-purple-400"
                }`}
              >
                <I className={`h-4 w-4 ${on ? "text-purple-300" : ""}`} />
                <span className="font-mono text-[10px] font-black uppercase tracking-wider">Wk {i + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Active week */}
        <div key={active} className="mt-6 animate-[fadeIn_.4s_ease]">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-700 text-white shadow-md"><Icon className="h-6 w-6" /></span>
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">{w.week} · {STEPS[active] ?? ""}</p>
              <h3 className="mt-1 text-xl sm:text-2xl font-black text-stone-950 font-hero tracking-tight leading-tight">{w.theme}</h3>
            </div>
          </div>
          <ol className="mt-5 space-y-2.5">
            {w.classes.map((c, ci) => (
              <li key={c.title} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-[#FAF8F4] px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-black text-purple-700">
                  {String(active * 2 + ci + 1).padStart(2, "0")}
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-stone-800 leading-snug">{c.title}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs font-bold text-stone-500">Applied to your own campaigns, live.</p>
        </div>

        <a href="#curriculum" className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-700 hover:text-stone-950">
          See every topic in the full curriculum ↓
        </a>
      </div>
    </div>
  );
}
