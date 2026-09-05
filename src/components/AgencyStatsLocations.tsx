"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck, Users, Clock } from "lucide-react";

interface CityLocation {
  name: string;
  timeZone: string;
  country: string;
}

const locations: CityLocation[] = [
  { name: "LONDON", timeZone: "Europe/London", country: "UK" },
  { name: "NEW YORK", timeZone: "America/New_York", country: "USA" },
  { name: "DUBAI", timeZone: "Asia/Dubai", country: "UAE" },
  { name: "LOS ANGELES", timeZone: "America/Los_Angeles", country: "USA" },
  { name: "MIAMI", timeZone: "America/New_York", country: "USA" },
];

export function AgencyStatsLocations() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      locations.forEach((loc) => {
        try {
          const formatted = new Intl.DateTimeFormat("en-US", {
            timeZone: loc.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(new Date());
          newTimes[loc.name] = formatted;
        } catch {
          newTimes[loc.name] = "12:00";
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 w-full bg-[#050507] py-24 md:py-36 text-white border-t border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(237,28,36,0.15),transparent_75%)]" />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Top Stats Grid (Social Shepherd style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative pt-6 md:pt-0 md:px-8 first:px-0 space-y-3"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:top-1/2 md:h-16 md:w-[3px] md:-translate-y-1/2 md:bg-gradient-to-b md:from-transparent md:via-[#ed1c24]/70 md:to-transparent" />
            <div className="flex items-center gap-2 text-[#ed1c24]">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">PROVEN RETENTION</span>
            </div>
            <h3 className="display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              92% OF BRANDS
            </h3>
            <p className="text-sm text-white/70 font-medium leading-relaxed max-w-xs">
              Stay with us long-term beyond their initial 90-day scale period.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative pt-6 md:pt-0 md:px-8 space-y-3"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:top-1/2 md:h-16 md:w-[3px] md:-translate-y-1/2 md:bg-gradient-to-b md:from-transparent md:via-[#ed1c24]/70 md:to-transparent" />
            <div className="flex items-center gap-2 text-[#ed1c24]">
              <Users className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">ACTIVE PARTNERSHIPS</span>
            </div>
            <h3 className="display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              200+ CLIENTS
            </h3>
            <p className="text-sm text-white/70 font-medium leading-relaxed max-w-xs">
              Scaled across high-ticket services, roofing, SaaS, and e-commerce.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative pt-6 md:pt-0 md:px-8 space-y-3"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:top-1/2 md:h-16 md:w-[3px] md:-translate-y-1/2 md:bg-gradient-to-b md:from-transparent md:via-[#ed1c24]/70 md:to-transparent" />
            <div className="flex items-center gap-2 text-[#ed1c24]">
              <Award className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">INDUSTRY RECOGNITION</span>
            </div>
            <h3 className="display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              AWARDED BEST LARGE GROWTH AGENCY
            </h3>
            <p className="text-sm text-white/70 font-medium leading-relaxed max-w-xs">
              Ranked #1 for client ROI and verified ad performance guarantees.
            </p>
          </motion.div>
        </div>

        {/* Global Hubs Typography Wall */}
        <div className="pt-12 border-t border-white/10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-10">
            <Globe className="h-4 w-4 text-[#ed1c24]" />
            <span>GLOBAL PRESENCE & AGENCY HUBS</span>
          </div>

          {/* Mega Typography Stack */}
          <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative inline-flex items-center gap-4 cursor-pointer select-none"
              >
                <h3 className="display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white/25 transition-all duration-500 group-hover:text-white group-hover:scale-105 group-hover:drop-shadow-[0_0_35px_rgba(237,28,36,0.8)]">
                  {loc.name}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono font-bold text-[#ed1c24] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Clock className="h-3 w-3" />
                  {times[loc.name] || "LIVE"} {loc.country}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
