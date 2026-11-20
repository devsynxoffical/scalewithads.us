"use client";

import { useState } from "react";
import { Bell, ClipboardList, Megaphone, MessageSquare, UserCheck } from "lucide-react";

const FLOW = [
  {
    icon: Megaphone,
    tab: "1. The ad",
    title: "An ad for one accident type",
    text: "Someone who was in a car accident sees a short video ad that speaks to their situation, in your service area, on Facebook or Instagram.",
    mock: (
      <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-purple-200" />
          <div>
            <p className="text-xs font-black text-stone-900">Your Law Firm</p>
            <p className="text-[10px] text-stone-400">Sponsored</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-stone-700">Hurt in a car accident that wasn&apos;t your fault? Find out what your case may be worth. Free consultation.</p>
        <div className="mt-3 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-stone-800 to-purple-900 text-xs font-bold uppercase tracking-widest text-white/70">Video ad</div>
        <span className="mt-3 inline-block rounded-lg bg-stone-100 px-3 py-1.5 text-xs font-black text-stone-800">Get a free case review</span>
      </div>
    ),
  },
  {
    icon: ClipboardList,
    tab: "2. Qualify",
    title: "Three questions filter the inquiry",
    text: "A short form asks when the accident happened, whether there were injuries and whether they already have a lawyer, before anyone reaches intake.",
    mock: (
      <div className="space-y-2.5 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        {["When did the accident happen?", "Were you or a passenger injured?", "Do you already have a lawyer?"].map((q, i) => (
          <div key={q} className="rounded-xl border border-stone-200 px-3 py-2.5">
            <p className="text-xs font-bold text-stone-500">Question {i + 1}</p>
            <p className="text-sm font-black text-stone-900">{q}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MessageSquare,
    tab: "3. Instant reply",
    title: "An SMS and email in seconds",
    text: "The person gets an immediate text and email, so they hear from your firm before they fill in a form for anyone else.",
    mock: (
      <div className="space-y-2.5 rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm">
        <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-purple-700 px-3.5 py-2 text-sm text-white">Hi Sarah, thanks for reaching out. An intake specialist will call you shortly. Is now a good time?</p>
        <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2 text-sm text-stone-800 shadow-sm">Yes, I&apos;m free now.</p>
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-stone-400">Sent automatically</p>
      </div>
    ),
  },
  {
    icon: UserCheck,
    tab: "4. Your intake",
    title: "Lands in your CRM, tagged and ready",
    text: "The inquiry arrives in your CRM with the case type and answers attached, so intake can call while the person is still interested.",
    mock: (
      <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-wider text-stone-500">New inquiry</p>
          <Bell className="h-4 w-4 text-purple-700" />
        </div>
        <p className="mt-2 text-sm font-black text-stone-900">Sarah M. · Car accident</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Injured: yes", "Last 30 days", "No lawyer"].map((t) => (
            <span key={t} className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{t}</span>
          ))}
        </div>
        <p className="mt-3 rounded-lg bg-purple-50 px-3 py-2 text-xs font-bold text-purple-800">Exclusive to your firm</p>
      </div>
    ),
  },
];

/** MVA page: tabbed walkthrough of how an inquiry is created. Illustrative example, not client data. */
export function InquiryFlowTabs() {
  const [active, setActive] = useState(0);
  const step = FLOW[active];
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
      <div>
        <div role="tablist" aria-label="How an inquiry is created" className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
          {FLOW.map((f, i) => (
            <button
              key={f.tab}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-2xl border-2 px-4 py-3 text-left text-sm font-black transition-colors ${
                i === active ? "border-purple-400 bg-purple-600 text-white" : "border-white/10 bg-white/5 text-stone-200 hover:border-white/30"
              }`}
            >
              <f.icon className="h-4 w-4 shrink-0" /> {f.tab}
            </button>
          ))}
        </div>
        <h3 className="mt-8 text-2xl sm:text-3xl font-black text-white font-hero tracking-tight">{step.title}</h3>
        <p className="mt-3 text-[16px] sm:text-lg text-stone-300 leading-relaxed">{step.text}</p>
        <p className="mt-4 text-xs text-stone-500">Illustration of the process; names are examples.</p>
      </div>
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-sm" role="tabpanel">{step.mock}</div>
      </div>
    </div>
  );
}
