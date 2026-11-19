"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Info } from "lucide-react";

const usd = (n: number) => (isFinite(n) ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : "–");

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-sm font-bold text-stone-700">
        {label}
        <span className="rounded-lg bg-purple-100 px-2.5 py-1 font-mono text-sm font-black text-purple-800">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-purple-700 h-2 cursor-pointer"
        aria-label={label}
      />
    </label>
  );
}

function Result({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-5 ${highlight ? "bg-purple-700 text-white" : "bg-white/10 text-white"}`}>
      <p className={`text-xs font-bold uppercase tracking-wider ${highlight ? "text-purple-100" : "text-stone-300"}`}>{label}</p>
      <p className="mt-1.5 text-3xl font-black font-hero tracking-tight">{value}</p>
    </div>
  );
}

/** MVA page: what a signed case really costs, using the visitor's own numbers. */
export function CaseCostCalculator() {
  const [price, setPrice] = useState(100);
  const [leads, setLeads] = useState(50);
  const [rate, setRate] = useState(7);
  const [better, setBetter] = useState(12);

  const spend = price * leads;
  const cases = (leads * rate) / 100;
  const casesBetter = (leads * better) / 100;

  return (
    <div className="grid overflow-hidden rounded-3xl border-2 border-stone-950 lg:grid-cols-[1.1fr_0.9fr] shadow-[0_25px_60px_rgba(147,51,234,0.2)]">
      <div className="bg-white p-6 sm:p-8 space-y-7">
        <p className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-purple-700">
          <Calculator className="h-4 w-4" /> Your numbers
        </p>
        <Slider label="Price you pay per lead" value={price} min={20} max={500} step={5} onChange={setPrice} format={usd} />
        <Slider label="Leads per month" value={leads} min={5} max={300} step={5} onChange={setLeads} format={(v) => String(v)} />
        <Slider label="Share of leads that sign" value={rate} min={1} max={40} step={1} onChange={setRate} format={(v) => `${v}%`} />
        <Slider label="Sign rate if leads were exclusive and called instantly" value={better} min={1} max={50} step={1} onChange={setBetter} format={(v) => `${v}%`} />
        <p className="flex gap-2 text-xs text-stone-500 leading-relaxed">
          <Info className="h-4 w-4 shrink-0" /> Starting values are examples only. Move the sliders to match your firm&apos;s real numbers.
        </p>
      </div>
      <div className="bg-stone-950 p-6 sm:p-8 text-white">
        <p className="font-mono text-xs font-black uppercase tracking-widest text-purple-300">What it costs you</p>
        <div className="mt-5 grid gap-3">
          <Result label="Monthly lead spend" value={usd(spend)} />
          <Result label="Signed cases per month" value={cases.toFixed(1)} />
          <Result label="Cost per signed case today" value={usd(spend / cases)} highlight />
          <Result label={`Cost per signed case at ${better}% sign rate`} value={usd(spend / casesBetter)} />
        </div>
        <p className="mt-5 text-sm text-stone-300 leading-relaxed">
          Sign rate drives the cost of a case more than lead price. Exclusive leads that your intake team calls within minutes are the biggest lever.
        </p>
        <a href="#get-leads" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-stone-950 hover:bg-purple-100 transition-colors">
          Get a plan for your firm <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/** Roofing page: leads and inspections from a monthly budget. */
export function RoofingLeadEstimator() {
  const [budget, setBudget] = useState(3000);
  const [cpl, setCpl] = useState(15);
  const [booked, setBooked] = useState(30);
  const [close, setClose] = useState(25);

  const leads = budget / cpl;
  const inspections = (leads * booked) / 100;
  const jobs = (inspections * close) / 100;

  return (
    <div className="grid overflow-hidden rounded-3xl border-2 border-stone-950 lg:grid-cols-[1.1fr_0.9fr] shadow-[0_25px_60px_rgba(147,51,234,0.2)]">
      <div className="bg-white p-6 sm:p-8 space-y-7">
        <p className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-purple-700">
          <Calculator className="h-4 w-4" /> Your numbers
        </p>
        <Slider label="Monthly ad budget" value={budget} min={500} max={20000} step={250} onChange={setBudget} format={usd} />
        <Slider label="Cost per lead" value={cpl} min={3} max={80} step={1} onChange={setCpl} format={usd} />
        <Slider label="Leads that book an inspection" value={booked} min={5} max={80} step={1} onChange={setBooked} format={(v) => `${v}%`} />
        <Slider label="Inspections that become jobs" value={close} min={5} max={80} step={1} onChange={setClose} format={(v) => `${v}%`} />
        <p className="flex gap-2 text-xs text-stone-500 leading-relaxed">
          <Info className="h-4 w-4 shrink-0" />
          <span>
            Starting values are examples, not a quote. Our published roofing campaigns ranged from $3.75 to $14.58 per lead; see the{" "}
            <Link href="/case-studies/roofing-leads-154-in-15-days" className="font-bold text-purple-700 underline">case studies</Link>.
          </span>
        </p>
      </div>
      <div className="bg-stone-950 p-6 sm:p-8 text-white">
        <p className="font-mono text-xs font-black uppercase tracking-widest text-purple-300">Estimated each month</p>
        <div className="mt-5 grid gap-3">
          <Result label="Leads" value={Math.round(leads).toLocaleString("en-US")} />
          <Result label="Inspections booked" value={Math.round(inspections).toLocaleString("en-US")} highlight />
          <Result label="Jobs closed" value={jobs.toFixed(1)} />
          <Result label="Ad cost per closed job" value={usd(budget / jobs)} />
        </div>
        <a href="#get-leads" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-stone-950 hover:bg-purple-100 transition-colors">
          Get a plan for your area <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
