"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { GradientText } from "./ui/GradientText";
import { CountUp } from "./ui/CountUp";
import { SectionBackground } from "./ui/SectionBackground";
import { lockScroll } from "../lib/scroll";
import { Trophy, TrendingUp, DollarSign, Award, ChevronDown, Maximize2, ArrowRight } from "lucide-react";

const DASHBOARDS = [
  { file: "proof-695d97e2.png", label: "Campaign Dashboard #1 — Tracked Spend & Returns", rev: "$847,290", roas: "3.32x ROAS" },
  { file: "proof-695d9820.png", label: "Campaign Dashboard #2 — High-Ticket Acquisition", rev: "13,630 Leads", roas: "$255K Spend" },
];

const COLLAPSED_H = 420;
const EXPANDED_H = 1800;

export function Results() {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  /* Close lightbox on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock scroll when lightbox open */
  useEffect(() => {
    lockScroll(!!lightbox);
    return () => {
      lockScroll(false);
    };
  }, [lightbox]);

  const height = expanded ? EXPANDED_H : COLLAPSED_H;

  return (
    <section
      id="results"
      className="relative overflow-hidden border-b border-zinc-800 bg-transparent py-20 text-white md:py-28"
    >
      <SectionBackground variant="dark" grid />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          eyebrow="PROVEN CAMPAIGN RESULTS"
          title={
            <>
              Real Campaigns.{" "}
              <GradientText
                colors={["#ff8f93", "#ed1c24", "#ed1c24", "#ff5a24", "#ff8f93"]}
                animationSpeed={6}
              >
                Real Tracked Revenue.
              </GradientText>
            </>
          }
          description="Live dashboards from campaigns we manage — real spend, real qualified appointments, real revenue. No mock-ups, no projections."
        />

        {/* Top Metrics Cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 stagger-parent">
          {[
            { icon: DollarSign, to: 847000, prefix: "$", suffix: "+", label: "TRACKED REVENUE" },
            { icon: TrendingUp, to: 3.32, decimals: 2, suffix: "x ROAS", label: "AVERAGE RETURN" },
            { icon: Trophy, to: 13630, suffix: "+", label: "OFFERS CONVERTED" },
            { icon: Award, to: 50, prefix: "$", suffix: "M+", label: "META ADS MANAGED" },
          ].map((m, i) => (
            <div key={i} className="h-full">
              <TiltCard maxTilt={6} className="h-full">
                <div className="hover-lift-red rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md/80 p-5 text-center shadow-xl backdrop-blur-md">
                  <m.icon className="mx-auto h-7 w-7 text-[#ed1c24] mb-2" />
                  <p className="display text-3xl font-extrabold text-white sm:text-4xl">
                    <CountUp
                      to={m.to}
                      decimals={m.decimals ?? 0}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      duration={2.2}
                      separator={m.to >= 1000}
                    />
                  </p>
                  <p className="mt-2 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">
                    {m.label}
                  </p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Live Proof Dashboard Screenshot Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {DASHBOARDS.map((item, i) => (
            <div key={item.file} data-reveal data-reveal-delay={i * 130} className="h-full">
              <TiltCard maxTilt={4} className="h-full">
                <div className="hover-lift-red flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md/80 p-3 shadow-2xl backdrop-blur-md">
                  {/* Image Container with Expandable Height */}
                  <div
                    className="relative w-full overflow-hidden rounded-xl bg-black/40 backdrop-blur-md transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ height }}
                  >
                    <Image
                      src={`/${item.file}`}
                      alt={item.label}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Bottom Gradient Fade Overlay when collapsed */}
                    {!expanded && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
                    )}
                  </div>

                  {/* Dashboard Card Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-4">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#ed1c24]">
                        LIVE CAMPAIGN PROOF
                      </p>
                      <p className="display text-base font-extrabold text-white">
                        {item.label}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setLightbox(item.file)}
                      className="btn-shine group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-400 hover:border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white hover:shadow-[0_0_20px_rgba(237,28,36,0.5)]"
                    >
                      <span>VIEW FULL PROOF</span>
                      <Maximize2 className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* CENTER "See More Results" Button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#ed1c24]/50 bg-gradient-to-r from-[#ed1c24]/20 via-zinc-900 to-[#ed1c24]/20 px-10 py-5 text-sm font-extrabold uppercase tracking-widest text-white shadow-[0_0_40px_rgba(237,28,36,0.4)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#ed1c24] hover:shadow-[0_0_60px_rgba(237,28,36,0.7)]"
            data-cursor="hover"
          >
            <span className="relative z-10">
              {expanded ? "SHOW LESS DASHBOARDS" : "SEE MORE RESULTS"}
            </span>
            <ChevronDown
              className={`relative z-10 h-5 w-5 text-[#ed1c24] transition-transform duration-500 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-14 text-center" data-reveal data-reveal-dir="zoom">
          <Link
            href={BOOKING_PATH}
            className="btn btn-accent btn-shine inline-flex items-center gap-2 px-8 py-4 text-base font-extrabold uppercase tracking-wider shadow-[0_0_35px_rgba(237,28,36,0.6)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(237,28,36,0.8)]"
          >
            <span>BOOK YOUR FREE STRATEGY CALL</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="mt-3 text-xs font-semibold text-zinc-400">
            $10K minimum · Double revenue in 90 days · Agreement in writing
          </p>
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-md/90 p-4 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md/80 text-white backdrop-blur hover:bg-black/40 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div
            className="max-h-[92vh] w-auto max-w-[95vw] overflow-auto rounded-2xl bg-black/40 backdrop-blur-md p-2 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/${lightbox}`}
              alt="Full Campaign Dashboard Proof"
              width={1400}
              height={2800}
              className="h-auto max-h-[88vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
