"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BarChart2,
  TrendingUp,
  Star,
  Sparkles,
  Maximize2,
  X,
} from "lucide-react";
import type { FunnelConfig } from "../lib/funnels";
import { VideoPlayer } from "./VideoPlayer";
import { Footer } from "./Footer";
import { TiltCard } from "./ui/TiltCard";
import { Reveal } from "./Reveal";

const proofImages = [
  { src: "/proof-695d97e2.png", alt: "Campaign dashboard showing $847K revenue" },
  { src: "/proof-695d9820.png", alt: "Meta Ads results dashboard with 3.32x ROAS" },
];

const metrics = [
  { value: "$847K", label: "Revenue tracked", icon: TrendingUp },
  { value: "3.32x", label: "Average ROAS", icon: BarChart2 },
  { value: "13,630+", label: "LTO offers sold", icon: CheckCircle2 },
  { value: "90 days", label: "Revenue target", icon: ShieldCheck },
];

const testimonials = [
  {
    name: "Jason R.",
    role: "Agency Owner, 7-Figure",
    body: "Completely changed how I run ads. Booked 18 calls in the first 3 weeks after implementing the framework.",
    stars: 5,
  },
  {
    name: "Maria T.",
    role: "Health Coach, 6-Figure",
    body: "The CRM automations alone saved us 20 hours a week. Our close rate went from 18% to 41% in 60 days.",
    stars: 5,
  },
  {
    name: "Devon K.",
    role: "SaaS Founder",
    body: "I've worked with 4 agencies before Scale With Ads. Nobody comes close to the level of system they install.",
    stars: 5,
  },
];

interface Props {
  funnel: FunnelConfig;
}

export function MastermindFunnelPage({ funnel }: Props) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const vslSrc =
    funnel.videoSrc ||
    "https://assets.cdn.filesafe.space/W8B8H8FvOolLCrvxXzYp/media/69ef9443717d5dd4e170f445.mp4";

  return (
    <main className="bg-transparent text-white">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] overflow-hidden bg-transparent pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Grid overlay */}
        <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-40" />

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(237,28,36,0.3), transparent 70%), radial-gradient(circle 600px at 80% 80%, rgba(237,28,36,0.07), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[900px] px-5 text-center md:px-8">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#ed1c24]" />
            {funnel.eyebrow}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="display mt-7 text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold leading-[1.1] tracking-tight text-white"
          >
            {funnel.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed1c24] via-[#ed1c24] to-[#ff8f93]">
              {funnel.titleAccent}
            </span>
            {funnel.titleEnd && (
              <>
                <br />
                {funnel.titleEnd}
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
          >
            {funnel.subtitle}
          </motion.p>

          {/* Stats row */}
          {funnel.stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4"
            >
              {funnel.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm transition-all hover:border-[#ed1c24]/40 hover:bg-white/[0.08]"
                >
                  <p className="display text-2xl font-extrabold text-white group-hover:text-[#ed1c24] transition-colors">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={funnel.bookingPath}
              className="btn btn-accent group inline-flex items-center gap-2.5 min-w-[260px] px-8 py-4 text-sm font-extrabold shadow-[0_12px_40px_-10px_rgba(237,28,36,0.6)] transition-all hover:scale-[1.02]"
            >
              <span>{funnel.ctaPrimary}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-zinc-500">{funnel.ctaPrimarySub}</p>
          </motion.div>

          {/* Proof tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.46, duration: 0.5 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-500"
          >
            <ShieldCheck className="h-4 w-4 text-[#ed1c24]" />
            <span>100% Asset Ownership · Written Agreement · No Lock-ins</span>
          </motion.div>
        </div>
      </section>

      {/* ─── VSL SECTION ──────────────────────────────────── */}
      <section id="vsl" className="relative overflow-hidden bg-black/40 backdrop-blur-md py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(237,28,36,0.1), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[860px] px-5 md:px-8">
          <Reveal>
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ed1c24]/15 border border-[#ed1c24]/30 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#ed1c24]">
                <Play className="h-3 w-3 fill-current" />
                {funnel.videoLabel}
              </span>
              <h2 className="display mt-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Watch This Before You Book a Call
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Understand exactly what we install, how it works, and why it doubles revenue.
              </p>
            </div>

            <TiltCard maxTilt={5} className="w-full">
              <div className="overflow-hidden rounded-3xl border border-white/15 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] bg-white/5 backdrop-blur-md">
                <VideoPlayer
                  src={vslSrc}
                  cover={funnel.videoCover}
                  title={funnel.videoLabel}
                />
              </div>
            </TiltCard>

            <div className="mt-8 flex justify-center">
              <Link
                href={funnel.bookingPath}
                className="btn btn-accent inline-flex items-center gap-2 px-8 py-4 text-sm font-extrabold shadow-[0_10px_35px_-10px_rgba(237,28,36,0.55)] transition-all hover:scale-[1.02]"
              >
                <span>{funnel.ctaSecondary}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHAT'S INSIDE ────────────────────────────────── */}
      <section id="inside" className="relative overflow-hidden border-t border-zinc-800/60 bg-transparent py-20 md:py-28">
        <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-zinc-300">
                Inside This System
              </span>
              <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
                {funnel.learnTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {funnel.learnItems.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <TiltCard maxTilt={6} className="h-full">
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24]/50 hover:shadow-[0_16px_48px_-16px_rgba(237,28,36,0.3)]">
                    <span className="display flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]/15 text-sm font-extrabold text-[#ed1c24] border border-[#ed1c24]/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1.5 text-sm leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS / PROOF ──────────────────────────────── */}
      <section id="results" className="relative overflow-hidden border-t border-zinc-800/60 bg-black/40 backdrop-blur-md py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(237,28,36,0.1), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          {/* Heading */}
          <Reveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ed1c24]/15 border border-[#ed1c24]/30 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#ed1c24]">
              <BarChart2 className="h-3.5 w-3.5" />
              Real Campaigns. Real Numbers.
            </span>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
              Campaign Results & Proof
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
              Every number you see is pulled directly from live ad accounts and CRM dashboards.
            </p>
          </Reveal>

          {/* Metrics row */}
          <Reveal>
            <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm transition-all hover:border-[#ed1c24]/40 hover:bg-white/[0.07]"
                >
                  <Icon className="mx-auto mb-2 h-5 w-5 text-[#ed1c24] group-hover:scale-110 transition-transform" />
                  <p className="display text-2xl font-extrabold text-white">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Proof dashboard screenshots */}
          <div className="grid gap-6 md:grid-cols-2">
            {proofImages.map(({ src, alt }, i) => (
              <Reveal key={src} delay={i * 120}>
                <TiltCard maxTilt={5}>
                  <div
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl cursor-zoom-in transition-all duration-300 hover:border-[#ed1c24]/50"
                    onClick={() => setLightboxImg(src)}
                  >
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md/70 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/80">
                      {alt}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Track record text */}
          <Reveal delay={200} className="mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-sm">
              <h3 className="display text-xl font-extrabold text-white">{funnel.trackTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{funnel.trackBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-zinc-800/60 bg-transparent py-20 md:py-24">
        <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-zinc-300">
              <Star className="h-3.5 w-3.5 text-[#ed1c24] fill-[#ed1c24]" />
              What Operators Say
            </span>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TiltCard maxTilt={6} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md/80 p-6 backdrop-blur-md transition-all hover:border-[#ed1c24]/40">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-[#ed1c24] text-[#ed1c24]" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-300 flex-1 italic">
                      &ldquo;{t.body}&rdquo;
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <p className="text-sm font-extrabold text-white">{t.name}</p>
                      <p className="text-xs text-zinc-500">{t.role}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-zinc-800/60 bg-black/40 backdrop-blur-md py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(237,28,36,0.15), transparent 75%)",
          }}
        />
        <div className="jobber-grid-dark pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-[720px] px-5 text-center md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ed1c24]/15 border border-[#ed1c24]/30 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#ed1c24] mb-6">
              <ShieldCheck className="h-3.5 w-3.5" />
              Backed by a Written Agreement
            </span>

            <h2 className="display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              Ready to Double Your Revenue{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed1c24] via-[#ed1c24] to-[#ff8f93]">
                in 90 Days?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-300 md:text-lg">
              Or we keep working for free until we do. Every promise is in writing before you spend a cent.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={funnel.bookingPath}
                className="btn btn-accent group inline-flex items-center gap-2.5 min-w-[260px] px-8 py-4.5 text-base font-extrabold shadow-[0_16px_48px_-10px_rgba(237,28,36,0.7)] transition-all hover:scale-[1.02]"
              >
                <span>{funnel.ctaPrimary}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-[#ed1c24]" />
              <span>$10K+ monthly revenue minimum · All industries welcome</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* ─── LIGHTBOX ──────────────────────────────────────── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[400] flex items-center justify-center bg-black/40 backdrop-blur-md/95 p-4 backdrop-blur-xl"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImg}
              alt="Proof screenshot"
              width={1400}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
