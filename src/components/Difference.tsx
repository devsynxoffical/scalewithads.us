"use client";

import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackground } from "./ui/SectionBackground";
import { TiltCard } from "./ui/TiltCard";
import { ArrowRight, Magnet, UserCheck, MessagesSquare, CalendarCheck } from "lucide-react";

const journey = [
  {
    title: "Attracting",
    text: "the right prospects with high-converting ads",
    icon: Magnet,
  },
  {
    title: "Qualifying",
    text: "them with multi-stage verification",
    icon: UserCheck,
  },
  {
    title: "Nurturing",
    text: "them automatically via CRM & AI follow-up",
    icon: MessagesSquare,
  },
  {
    title: "Booking",
    text: "them onto your sales team's calendar ready to close",
    icon: CalendarCheck,
  },
];

export function Difference() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden border-b border-zinc-200 bg-[#fafafa] py-20 text-zinc-950 md:py-28"
    >
      <SectionBackground variant="light" grid />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          light
          eyebrow="THE SCALE WITH ADS™ ADVANTAGE"
          title={
            <>
              We Don&apos;t Just Generate Clicks...{" "}
              <span className="text-[#ed1c24]">
                We Build An Acquisition Ecosystem
              </span>
            </>
          }
          description="Unlike traditional marketing agencies that stop at raw leads, we build and manage the entire client pipeline."
        />

        <div className="relative mt-16">
          {/* Journey connector line with red progress (desktop only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[8%] top-10 hidden lg:block"
          >
            <div className="relative h-0.5 rounded-full bg-zinc-200">
              <span className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#ed1c24]/30 via-[#ed1c24] to-[#7a3cff] shadow-[0_0_12px_rgba(237,28,36,0.6)]" />
              <span className="absolute left-[25%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#ed1c24] shadow-[0_0_10px_rgba(237,28,36,0.8)]" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 90} className="h-full">
                  <TiltCard maxTilt={8} className="h-full">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#ed1c24]/50 hover:shadow-[0_24px_50px_-18px_rgba(237,28,36,0.3)]">
                      {/* Corner accent */}
                      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Number + icon row */}
                      <div className="flex items-start justify-between">
                        <span className="display text-gradient-red text-4xl font-extrabold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-900 bg-red-950 text-[#ed1c24] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ed1c24]/30 group-hover:bg-[#ed1c24] group-hover:text-white group-hover:shadow-[0_0_18px_rgba(237,28,36,0.45)]">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-600">
                        {item.text}
                      </p>

                      {/* Step index indicator */}
                      <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-[#ed1c24]">
                          Step {i + 1} / 4
                        </span>
                        <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={150} className="mt-14 text-center">
          <Link
            href={BOOKING_PATH}
            className="btn btn-accent btn-shine inline-flex items-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-wider shadow-[0_10px_30px_-10px_rgba(237,28,36,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(237,28,36,0.65)]"
          >
            <span>BOOK FREE STRATEGY CALL</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
