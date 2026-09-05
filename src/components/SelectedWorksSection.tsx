"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, X, CheckCircle, TrendingUp } from "lucide-react";

interface WorkProject {
  id: string;
  client: string;
  tagline: string;
  category: string;
  roas: string;
  revenue: string;
  image: string;
  description: string;
  deliverables: string[];
}

const projects: WorkProject[] = [
  {
    id: "lumene",
    client: "LUMENE BEAUTY",
    tagline: "Scaled Meta & TikTok Ad Spend 5x while maintaining 4.4x ROAS",
    category: "SKINCARE & ECOMMERCE",
    roas: "4.4x ROAS",
    revenue: "$2.4M ARR",
    image: "/media/covers/cover-leadpilot.jpg",
    description: "Built high-converting viral UGC hooks combined with automated retargeting funnels across Meta and TikTok Shop.",
    deliverables: ["120+ Direct Response Ads", "Omnichannel Ad Scaling", "CRO Funnel Redesign"],
  },
  {
    id: "bark",
    client: "BARK PETS",
    tagline: "Generated 14,000+ New Subscription Customers in 90 Days",
    category: "DIRECT-TO-CONSUMER",
    roas: "3.9x ROAS",
    revenue: "$1.8M ARR",
    image: "/media/covers/cover-mastermind.jpeg",
    description: "Architected a high-volume UGC creative engine producing 30 custom ad variations every week with predictive CPA modeling.",
    deliverables: ["Creator UGC Network", "Native TikTok Ads", "Retention Email System"],
  },
  {
    id: "passenger",
    client: "PASSENGER APPAREL",
    tagline: "Outdoors & Apparel Brand Scaled from $40k/mo to $350k/mo",
    category: "SUSTAINABLE FASHION",
    roas: "5.1x ROAS",
    revenue: "$4.2M ARR",
    image: "/media/covers/hero-bg.jpg",
    description: "Transformed cold paid traffic profitability through lifestyle cinematic video ads and high-converting collection landers.",
    deliverables: ["Cinematic Ad Shoots", "Seasonal Campaign Launch", "Google Performance Max"],
  },
  {
    id: "biooil",
    client: "BIO-OIL LABS",
    tagline: "Custom Paid Media & Influencer Matrix for Global Launch",
    category: "WELLNESS & CARE",
    roas: "4.2x ROAS",
    revenue: "$3.1M ARR",
    image: "/media/covers/masterclass-poster-2.png",
    description: "Deployed authentic creator reviews and educational video hooks that dominated high-intent search and social feeds.",
    deliverables: ["Influencer Licensing", "Meta Advantage+ Scaling", "Landing Page CRO"],
  },
  {
    id: "beyblade",
    client: "BEYBLADE GAMING",
    tagline: "National Campaign Reaching 18M+ Views on TikTok & Reels",
    category: "ENTERTAINMENT & GAMING",
    roas: "4.8x ROAS",
    revenue: "$5.0M ARR",
    image: "/media/clients/client-aref.jpg",
    description: "Viral event campaign integrating short-form organic video hooks with direct-response paid ad amplification.",
    deliverables: ["Short-form Viral Engine", "TikTok Challenge", "High-Volume Retargeting"],
  },
];

export function SelectedWorksSection() {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  return (
    <section className="relative z-10 w-full bg-transparent py-24 md:py-36 text-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>CASE STUDIES & RESULTS</span>
            </div>
            <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase">
              SELECTED WORKS
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/70 font-medium">
            Explore recent client campaigns scaled with our proprietary performance media frameworks, creative engines, and 90-day guarantees.
          </p>
        </div>

        {/* Featured Case Study Grid (Social Shepherd layout matching reference screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column Stack (BARK & PASSENGER) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {[projects[1], projects[2]].map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md/60 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#ed1c24]/50 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-black/40 backdrop-blur-md/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-[#ed1c24] px-3 py-1 text-[11px] font-extrabold text-white shadow-lg">
                      {project.roas}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-[#ed1c24] group-hover:border-[#ed1c24] group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="display text-2xl font-extrabold text-white group-hover:text-[#ed1c24] transition-colors">
                      {project.client} ↗
                    </h3>
                    <p className="text-xs text-white/70 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    {project.revenue}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Tall Feature Card (LUMENE) */}
          <div className="lg:col-span-5 flex">
            {(() => {
              const project = projects[0]; // LUMENE
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative flex flex-col justify-between w-full cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md/60 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#ed1c24]/50 hover:-translate-y-2"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.client}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-black/40 backdrop-blur-md/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {project.category}
                      </span>
                      <span className="rounded-full bg-[#ed1c24] px-3 py-1 text-[11px] font-extrabold text-white shadow-lg">
                        {project.roas}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-[#ed1c24] group-hover:border-[#ed1c24] group-hover:scale-110">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="display text-3xl font-extrabold text-white group-hover:text-[#ed1c24] transition-colors">
                        {project.client} ↗
                      </h3>
                      <p className="text-xs text-white/70 font-medium mt-1">
                        {project.tagline}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-400">
                      {project.revenue}
                    </span>
                  </div>
                </motion.div>
              );
            })()}
          </div>

          {/* Bottom Row (BIO-OIL & BEYBLADE) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {[projects[3], projects[4]].map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md/60 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#ed1c24]/50 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-black/40 backdrop-blur-md/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-[#ed1c24] px-3 py-1 text-[11px] font-extrabold text-white shadow-lg">
                      {project.roas}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-[#ed1c24] group-hover:border-[#ed1c24] group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="display text-2xl font-extrabold text-white group-hover:text-[#ed1c24] transition-colors">
                      {project.client} ↗
                    </h3>
                    <p className="text-xs text-white/70 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    {project.revenue}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-md/90 p-4 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-black/40 backdrop-blur-md p-6 md:p-8 shadow-2xl text-white"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.client}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-3 py-1 text-xs font-extrabold text-[#ed1c24]">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{selectedProject.roas}</span>
                  </div>

                  <h3 className="display text-3xl font-extrabold text-white">
                    {selectedProject.client}
                  </h3>

                  <p className="text-sm text-white/80 font-medium leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Deliverables & Scope
                    </p>
                    {selectedProject.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                        <CheckCircle className="h-4 w-4 text-[#ed1c24]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
