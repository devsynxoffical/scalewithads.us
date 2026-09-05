"use client";

import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { Search, Target, PenTool, Layout, BarChart, Bot, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Market Research & Customer Analysis",
    desc: "We identify exactly who your ideal high-ticket clients are and what triggers them to buy.",
    icon: Search,
  },
  {
    title: "Offer Positioning",
    desc: "We package and position your offer so it dominates competitors in your market.",
    icon: Target,
  },
  {
    title: "Messaging & Creative Development",
    desc: "We craft ad copy, short-form scripts, and visual creatives that convert cold traffic into buyers.",
    icon: PenTool,
  },
  {
    title: "Landing Pages & Sales Funnel",
    desc: "We build custom, lightning-fast landing pages engineered to book qualified calls.",
    icon: Layout,
  },
  {
    title: "Meta Ads Management",
    desc: "We launch, manage, test, and optimize your Meta campaigns daily with proprietary interest stacks.",
    icon: BarChart,
  },
  {
    title: "CRM & AI Automations",
    desc: "Leads enter your CRM automatically with instant email, SMS, and intelligent AI nurture sequences.",
    icon: Bot,
  },
  {
    title: "Lead Qualification",
    desc: "Our multi-stage validation process screens out tire-kickers before they reach your calendar.",
    icon: ShieldCheck,
  },
  {
    title: "Close Premium Clients",
    desc: "Your sales team simply shows up to pre-qualified calls and closes high-ticket deals.",
    icon: CheckCircle2,
  },
];

export function Steps() {
  return (
    <section
      id="system"
      className="relative overflow-hidden border-b border-zinc-800 bg-transparent py-20 text-white md:py-28"
    >
      <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 100%, rgba(237,28,36,0.12), transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          eyebrow="THE 8-STEP CLIENT ACQUISITION PROCESS"
          title={
            <>
              One Connected Ecosystem From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed1c24] via-[#ed1c24] to-[#ff8f93]">
                First Click To Closed Revenue
              </span>
            </>
          }
          description="Everything engineered, built, and managed end-to-end under one roof."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 60} className="h-full">
                <TiltCard maxTilt={8} className="h-full">
                  <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24] hover:shadow-[0_20px_40px_-15px_rgba(237,28,36,0.35)]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24] border border-[#ed1c24]/20 transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="display text-2xl font-extrabold text-zinc-600 transition group-hover:text-[#ed1c24]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-extrabold leading-snug tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      {step.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160} className="mt-14 text-center">
          <Link
            href={BOOKING_PATH}
            className="btn btn-accent inline-flex items-center gap-2 px-8 py-4 text-sm font-extrabold uppercase tracking-wider shadow-[0_0_35px_rgba(237,28,36,0.5)]"
          >
            <span>INSTALL THE 8-STEP SYSTEM</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
