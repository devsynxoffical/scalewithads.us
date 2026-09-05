"use client";

import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { MarqueeTicker } from "@/components/redesign/MarqueeTicker";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Video,
  Layers,
  LineChart,
  GraduationCap,
  Crown,
  Zap,
  ShieldCheck,
  Check,
  Play,
  FileText,
  Target,
  Users,
  Settings,
} from "lucide-react";

export default function ServicesPage() {
  const serviceCards = [
    {
      id: "creatives",
      title: "Creatives Creation",
      tag: "Static & Motion Ads",
      icon: Video,
      desc: "High-converting direct-response ad copy, VSL storyboards, image creatives, and shortform video ads engineered to hook cold traffic.",
      features: [
        "30+ Ad Hooks Monthly",
        "VSL Scripting & Storyboards",
        "UGC & Motion Design",
        "Rapid Angle A/B Iterations",
      ],
      color: "bg-[#1D1435] text-white border-purple-900",
      textColor: "text-white",
      badgeColor: "bg-purple-900/60 text-purple-300 border-purple-700",
      iconColor: "text-purple-300 bg-purple-900/80",
    },
    {
      id: "funnels",
      title: "Funnels",
      tag: "Conversion Architecture",
      icon: Layers,
      desc: "High-converting landing pages, VSL booking funnels, and CRM qualification workflows designed to turn clicks into booked appointments.",
      features: [
        "High-Ticket VSL Funnels",
        "Lead Qualification Engines",
        "Automated CRM Pipelines",
        "100% Asset Ownership",
      ],
      color: "bg-amber-500/10 border-amber-300 text-stone-900",
      textColor: "text-stone-950",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      iconColor: "text-amber-700 bg-amber-100",
    },
    {
      id: "media-buying",
      title: "Media Buying",
      tag: "Meta & TikTok Ads",
      icon: LineChart,
      desc: "Daily campaign optimization, advantage+ scaling, and algorithmic audience targeting to reliably double your revenue.",
      features: [
        "Advantage+ Bidding",
        "Server-Side CAPI Telemetry",
        "Daily ROAS Optimization",
        "Written 90-Day Guarantee",
      ],
      color: "bg-purple-50 border-purple-300 text-stone-900",
      textColor: "text-stone-950",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      iconColor: "text-purple-700 bg-purple-100",
    },
    {
      id: "trainings",
      title: "Trainings",
      tag: "SOPs & Playbooks",
      icon: GraduationCap,
      desc: "Plug-and-play scaling frameworks, ad scripting SOPs, and system training videos to empower your internal growth team.",
      features: [
        "Hidden Interest Framework",
        "Shortform Brief Matrices",
        "Tracking & Pixel SOPs",
        "Continuous System Upgrades",
      ],
      color: "bg-emerald-50 border-emerald-300 text-stone-900",
      textColor: "text-stone-950",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      iconColor: "text-emerald-700 bg-emerald-100",
    },
    {
      id: "mastermind",
      title: "Mastermind",
      tag: "1:1 Private Operator Growth",
      icon: Crown,
      desc: "Private 1:1 mastermind coaching and direct advisory for agency owners, coaches, and founders scaling past $10k-$100k+/month.",
      features: [
        "Weekly Strategy Calls",
        "Direct Systems Audit",
        "Private Operator Network",
        "24/7 Slack Support",
      ],
      color: "bg-stone-950 text-white border-stone-800",
      textColor: "text-white",
      badgeColor: "bg-stone-800 text-amber-300 border-stone-700",
      iconColor: "text-amber-400 bg-stone-900",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <FloatingNavbar />

      {/* Services Hero */}
      <section className="pt-36 sm:pt-44 pb-16 px-4 md:px-8 bg-white border-b border-stone-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>CORE ACQUISITION SERVICES WE OFFER</span>
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight leading-tight uppercase font-hero">
            CORE <span className="font-serif italic lowercase animate-purple-gradient">services.</span>
          </h1>
          <p className="mt-4 text-stone-600 font-medium text-lg sm:text-xl max-w-3xl mx-auto font-sans">
            We build and manage the 5 essential pillars of your client acquisition engine: Creatives Creation, Funnels, Media Buying, Trainings, and Mastermind.
          </p>

          {/* Jump Navigation Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {serviceCards.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 rounded-full bg-stone-100 hover:bg-purple-700 hover:text-white text-stone-800 border border-stone-300 text-xs font-mono font-extrabold transition-all shadow-sm"
              >
                ✦ {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Core Overview Cards Grid */}
      <section className="py-20 px-4 md:px-8 bg-[#FDFBF7] border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl border-2 border-stone-950 shadow-xl ${card.color} flex flex-col justify-between hover:border-purple-600 transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-black uppercase tracking-wider px-3.5 py-1 rounded-full border ${card.badgeColor}`}>
                      {card.tag}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/20 ${card.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-black mt-2 mb-3 font-hero uppercase tracking-tight ${card.textColor}`}>
                    {card.title}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed mb-6 opacity-90">
                    {card.desc}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-8">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs font-extrabold tracking-tight">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`#${card.id}`}
                  className="w-full py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-center text-xs flex items-center justify-center gap-2 transition-colors shadow-lg uppercase tracking-wider active:scale-95"
                >
                  <span>Explore {card.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DETAILED SERVICE DEEP-DIVE SECTIONS */}
      {/* ========================================================================= */}

      {/* 1. CREATIVES CREATION DEEP-DIVE */}
      <section id="creatives" className="py-24 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                <Video className="w-3.5 h-3.5 text-purple-700" />
                <span>SERVICE PILLAR 01</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-stone-950 uppercase font-hero tracking-tight leading-tight">
                Creatives <span className="font-serif italic lowercase text-purple-700">creation.</span>
              </h2>
              <p className="mt-4 text-stone-600 font-medium text-base sm:text-lg leading-relaxed">
                High-converting direct-response ad copy, VSL storyboards, image creatives, and shortform video ads engineered to hook cold traffic and lower CPL.
              </p>

              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-xs">
                    30+
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-stone-950 uppercase font-hero">30+ Ad Hooks Monthly</h4>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">Continuous creative iteration preventing ad fatigue and maintaining stable ROAS.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-xs">
                    VSL
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-stone-950 uppercase font-hero">VSL Scripting & Storyboards</h4>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">Psychologically-driven longform video scripts crafted to build trust and authority.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-xs">
                    UGC
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-stone-950 uppercase font-hero">UGC & Motion Design</h4>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">Authentic user-generated video ads combined with high-end kinetic typography.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <span>Deploy Creatives Engine</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#1D1435] text-white border-2 border-purple-900 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-black uppercase text-amber-300 bg-purple-900/80 px-3 py-1 rounded-full border border-purple-700">
                    ★ CREATIVE WORKFLOW
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>

                <ul className="space-y-4 text-xs font-mono">
                  <li className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <span>1. Psychographic Angle Discovery</span>
                    <span className="text-amber-300 font-bold">COMPLETED</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <span>2. Direct-Response Hook Scripting</span>
                    <span className="text-amber-300 font-bold">COMPLETED</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <span>3. High-Ticket Graphic & Motion Edits</span>
                    <span className="text-amber-300 font-bold">COMPLETED</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                    <span>4. Weekly Creative Drop & Angle A/B Test</span>
                    <span className="text-emerald-400 font-bold">LIVE SCALING</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FUNNELS DEEP-DIVE */}
      <section id="funnels" className="py-24 px-4 md:px-8 bg-[#FDFBF7] border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-8 rounded-3xl bg-white border-2 border-stone-950 shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-black text-sm">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-stone-950 uppercase font-hero">High-Ticket VSL Landing Page</h4>
                    <p className="text-xs text-stone-600 font-medium">Fast-loading, mobile-optimized VSL page with video stream and booking trigger.</p>
                  </div>
                </div>

                <div className="w-full h-px bg-stone-200" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-black text-sm">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-stone-950 uppercase font-hero">Multi-Validation Lead Filtering</h4>
                    <p className="text-xs text-stone-600 font-medium">Multi-step qualification questionnaire filtering leads based on budget and intent.</p>
                  </div>
                </div>

                <div className="w-full h-px bg-stone-200" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-black text-sm">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-stone-950 uppercase font-hero">Direct Calendar & CRM Automation</h4>
                    <p className="text-xs text-stone-600 font-medium">Instant SMS, Email, and WhatsApp confirmation sequence to maximize show-up rate.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-black uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                <Layers className="w-3.5 h-3.5 text-amber-800" />
                <span>SERVICE PILLAR 02</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-stone-950 uppercase font-hero tracking-tight leading-tight">
                Conversion <span className="font-serif italic lowercase text-amber-700">architecture.</span>
              </h2>
              <p className="mt-4 text-stone-600 font-medium text-base sm:text-lg leading-relaxed">
                High-converting landing pages, VSL booking funnels, and CRM qualification workflows designed to turn cold clicks into high-intent booked appointments.
              </p>

              <ul className="mt-6 space-y-3 text-xs sm:text-sm font-extrabold">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-600 stroke-[3]" />
                  <span>High-Ticket VSL Booking Funnels</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-600 stroke-[3]" />
                  <span>Lead Qualification & Budget Filtering Engines</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-600 stroke-[3]" />
                  <span>Automated CRM Pipelines & Calendar Sync</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-600 stroke-[3]" />
                  <span>100% Asset Ownership — Zero Lock-In Contracts</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <span>Deploy Funnel Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MEDIA BUYING DEEP-DIVE */}
      <section id="media-buying" className="py-24 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                <LineChart className="w-3.5 h-3.5 text-purple-700" />
                <span>SERVICE PILLAR 03</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-stone-950 uppercase font-hero tracking-tight leading-tight">
                Media <span className="font-serif italic lowercase text-purple-700">buying.</span>
              </h2>
              <p className="mt-4 text-stone-600 font-medium text-base sm:text-lg leading-relaxed">
                Daily campaign optimization, Advantage+ bidding strategies, and server-side CAPI telemetry to scale your Meta & TikTok Ads reliably.
              </p>

              <div className="mt-8 space-y-4 text-xs sm:text-sm font-extrabold">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <span>Advantage+ Bidding Architecture</span>
                  <span className="text-purple-700 font-mono">AUTOMATED</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <span>Server-Side CAPI Telemetry & Pixel Setup</span>
                  <span className="text-purple-700 font-mono">VERIFIED</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <span>Daily ROAS & CPA Optimization</span>
                  <span className="text-purple-700 font-mono">24/7 ACTIVE</span>
                </div>
                <div className="p-4 rounded-2xl bg-purple-100 border border-purple-300 text-purple-950 flex items-center justify-between">
                  <span>Backed by Written 90-Day Written Guarantee</span>
                  <ShieldCheck className="w-5 h-5 text-purple-700" />
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <span>Scale Media Buying</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-purple-900 text-white border-2 border-purple-700 shadow-2xl">
                <h3 className="text-xl font-black font-hero uppercase tracking-tight mb-4">
                  Algorithmic Scale Engine
                </h3>
                <p className="text-xs font-medium leading-relaxed opacity-90 mb-6">
                  We don&apos;t guess with your ad budget. We run daily budget optimization (CBO/ABO), audience segmentation, and attribution tracking to maximize return on ad spend.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center font-mono">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                    <p className="text-2xl font-black text-amber-300">2.5x - 4.8x</p>
                    <p className="text-[10px] uppercase mt-1 opacity-80">Target ROAS</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                    <p className="text-2xl font-black text-emerald-300">90 Days</p>
                    <p className="text-[10px] uppercase mt-1 opacity-80">Written Guarantee</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TRAININGS DEEP-DIVE */}
      <section id="trainings" className="py-24 px-4 md:px-8 bg-[#FDFBF7] border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border-2 border-stone-950 shadow-md">
                  <span className="text-[10px] font-mono font-black text-purple-700 uppercase">SOP FRAMEWORK 01</span>
                  <h4 className="text-base font-extrabold text-stone-950 font-hero uppercase mt-1">Hidden Interest Framework</h4>
                  <p className="text-xs text-stone-600 font-medium mt-1">Uncovering uncompetitive Facebook audience pockets to generate 300–500 pre-qualified calls.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border-2 border-stone-950 shadow-md">
                  <span className="text-[10px] font-mono font-black text-purple-700 uppercase">SOP FRAMEWORK 02</span>
                  <h4 className="text-base font-extrabold text-stone-950 font-hero uppercase mt-1">Shortform Brief Matrices</h4>
                  <p className="text-xs text-stone-600 font-medium mt-1">Plug-and-play scripting templates for rapid UGC creative production.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border-2 border-stone-950 shadow-md">
                  <span className="text-[10px] font-mono font-black text-purple-700 uppercase">SOP FRAMEWORK 03</span>
                  <h4 className="text-base font-extrabold text-stone-950 font-hero uppercase mt-1">Tracking & Pixel SOPs</h4>
                  <p className="text-xs text-stone-600 font-medium mt-1">Step-by-step setup guides for CAPI, custom conversion events, and CRM webhooks.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-800" />
                <span>SERVICE PILLAR 04</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-stone-950 uppercase font-hero tracking-tight leading-tight">
                SOPs & <span className="font-serif italic lowercase text-emerald-700">trainings.</span>
              </h2>
              <p className="mt-4 text-stone-600 font-medium text-base sm:text-lg leading-relaxed">
                Plug-and-play scaling frameworks, ad scripting SOPs, and system training videos to empower your internal growth team.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <span>Access Training Vault</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CreativeCtaSection />
      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
