"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const plans = [
    {
      id: "meta-ads",
      badge: "★ ADS SCALING",
      title: "Meta Ads Management",
      investment: "Custom investment",
      cadence: "Based on your market & goals",
      desc: "For clients who want us to produce high-converting ad creatives, write direct-response copy, and scale their Meta Ads daily.",
      features: [
        "Full Meta Ads Campaign Management",
        "Scroll-Stopping Ad Creative Creation",
        "Direct-Response Ad Copywriting",
        "Hyper-Targeted Market & Audience Segmentation",
        "Daily Creative Testing & Scaling",
        "Pixel & Custom Conversion Tracking (CAPI)",
        "Heatmap & ROAS Performance Optimization",
      ],
      popular: false,
      bgColor: "bg-white border-stone-950 text-stone-900 shadow-xl",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      btnColor: "bg-stone-950 hover:bg-purple-700 text-white",
      iconColor: "bg-purple-100 text-purple-700",
      accentGlow:
        "group-hover:border-purple-600 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.25)]",
    },
    {
      id: "full-service",
      badge: "★ MOST POPULAR",
      title: "Full-Service Growth",
      investment: "Custom investment",
      cadence: "Full acquisition system install",
      desc: "For clients who want us to build, launch, and scale the complete done-for-you client acquisition ecosystem.",
      features: [
        "Everything in Meta Ads Management",
        "Custom 3–5 Page High-Converting Funnel",
        "24/7 AI Automations & Follow-Up Workflows",
        "Automated Email & SMS Nurture Sequences",
        "40–50 Ad Creation & Variations",
        "Multi-Validation Lead Qualification System",
        "CRM Pipeline Integration & Direct Calendar Booking",
        "Continuous Conversion & ROAS Optimization",
      ],
      popular: true,
      bgColor: "bg-[#1D1435] border-purple-600 text-white shadow-2xl",
      badgeColor: "bg-purple-600 text-white font-extrabold border-purple-500",
      btnColor: "bg-purple-600 hover:bg-purple-500 text-white font-extrabold",
      iconColor: "bg-purple-600 text-white",
      accentGlow: "border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.35)]",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative select-none overflow-hidden border-b border-t border-stone-200 bg-[#FDFBF7] px-4 py-24 text-stone-900 md:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-xs font-black uppercase tracking-widest text-purple-700 shadow-sm font-mono">
            <Sparkles className="h-3.5 w-3.5 text-purple-700" />
            <span>ENGAGEMENT OPTIONS</span>
          </span>
          <h2 className="font-hero text-4xl font-black uppercase leading-tight tracking-tight text-stone-950 sm:text-6xl">
            Choose your{" "}
            <span className="animate-purple-gradient font-serif lowercase italic">
              growth path.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-stone-600 sm:text-lg">
            Pick the acquisition engine tailored for your business. Final
            investment is scoped on your application call — backed by our written
            90-day revenue growth agreement.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className={`group relative flex flex-col justify-between rounded-3xl border-3 p-8 transition-all duration-300 sm:p-10 ${plan.bgColor} ${plan.accentGlow}`}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3.5 py-1 text-xs font-black uppercase tracking-wider font-mono ${plan.badgeColor}`}
                  >
                    {plan.badge}
                  </span>
                  {plan.popular && (
                    <span className="flex items-center gap-1 text-xs font-extrabold text-purple-300 font-mono">
                      <ShieldCheck className="h-4 w-4 text-purple-300" />
                      Written Guarantee
                    </span>
                  )}
                </div>

                <h3 className="font-hero mb-3 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  {plan.title}
                </h3>

                <div className="my-4">
                  <p className="font-hero text-2xl font-black tracking-tight sm:text-3xl">
                    {plan.investment}
                  </p>
                  <p className="mt-1 text-sm font-bold opacity-80 font-mono">
                    {plan.cadence}
                  </p>
                </div>

                <p className="mb-8 text-sm font-medium leading-relaxed opacity-90 font-sans">
                  {plan.desc}
                </p>

                <div className="my-6 h-px w-full bg-stone-300/30" />

                <ul className="mb-10 space-y-3.5">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-xs font-extrabold leading-snug sm:text-sm"
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.iconColor}`}
                      >
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all active:scale-95 ${plan.btnColor}`}
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border-2 border-stone-950 bg-white p-6 text-center shadow-md sm:flex-row">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                100% ASSET OWNERSHIP
              </p>
              <p className="text-sm font-extrabold text-stone-950 font-sans">
                All funnels, copy, CRM pipelines & ad accounts belong to you. No
                lock-ins.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-stone-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-purple-700"
          >
            Claim Guaranteed Offer
          </Link>
        </div>
      </div>
    </section>
  );
}
