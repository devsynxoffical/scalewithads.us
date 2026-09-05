"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PillItem {
  id: string;
  label: string;
  href: string;
  initialRotate: number;
  hasArcTop?: boolean;
  hasArcBottom?: boolean;
}

export function PlayfulCategoryPills() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("home");

  const pills: PillItem[] = [
    {
      id: "home",
      label: "Home",
      href: "/",
      initialRotate: 0,
    },
    {
      id: "about",
      label: "About",
      href: "/about",
      initialRotate: -8,
      hasArcTop: true,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      href: "/work",
      initialRotate: 0,
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      initialRotate: -6,
      hasArcBottom: true,
    },
    {
      id: "blogs",
      label: "Blogs",
      href: "/blog",
      initialRotate: 5,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-4 select-none">
      {pills.map((pill) => {
        const isActive = activeId === pill.id || (pathname === pill.href && pill.href !== "/") || (pathname === "/" && pill.id === "home");

        return (
          <div key={pill.id} className="relative inline-block">
            
            {/* Top Curve Arc Stroke Accent (Matches 'About' pill screenshot arc) */}
            {pill.hasArcTop && !isActive && (
              <svg
                className="absolute -top-3 left-2 w-12 h-4 text-purple-400 pointer-events-none"
                viewBox="0 0 50 15"
                fill="none"
              >
                <path
                  d="M 5 12 Q 25 2 45 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {/* Bottom Curve Arc Stroke Accent (Matches 'Services' pill screenshot arc) */}
            {pill.hasArcBottom && !isActive && (
              <svg
                className="absolute -bottom-3 left-4 w-12 h-4 text-purple-400 pointer-events-none"
                viewBox="0 0 50 15"
                fill="none"
              >
                <path
                  d="M 5 3 Q 25 13 45 3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {/* Main Interactive Pill Button */}
            <motion.div
              animate={{
                rotate: isActive ? 0 : pill.initialRotate,
                scale: isActive ? 1.05 : 1,
              }}
              whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Link
                href={pill.href}
                onClick={() => setActiveId(pill.id)}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 text-sm sm:text-base font-extrabold tracking-tight transition-colors shadow-md ${
                  isActive
                    ? "bg-[#A855F7] text-white border-stone-950 shadow-purple-950/20"
                    : "bg-white text-stone-900 border-purple-400/90 hover:border-stone-950 hover:bg-purple-50"
                }`}
              >
                {/* Active Double Circle Badge (°o) */}
                {isActive && (
                  <span className="inline-flex items-center text-xs font-mono tracking-tighter opacity-90 pr-0.5">
                    °o
                  </span>
                )}
                <span>{pill.label}</span>
              </Link>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
