"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Menu, X, ChevronDown, Crown, Users, BookOpen, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", rotate: 0 },
    { label: "Shorts & Videos", href: "/medialibrary", rotate: -5, hasArcTop: true },
    { label: "Results", href: "/work", rotate: 0 },
    {
      label: "Mastermind",
      href: "/privatemastermind",
      rotate: -4,
      hasArcBottom: true,
      dropdown: [
        { label: "Private Mastermind", href: "/privatemastermind", icon: Crown, desc: "Private 1:1 Advisory & Media Systems" },
        { label: "$847K LTO Funnel", href: "/metalto", icon: BookOpen, desc: "$847K Meta Ads Funnel Case Study" },
        { label: "Paid Pilot Trial", href: "/paidpilot", icon: Zap, desc: "Guaranteed Revenue Paid Trial" },
      ],
    },
    { label: "Services", href: "/services", rotate: 3 },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: -40, opacity: 0, scale: 0.95, filter: "blur(6px)" }}
        animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="pointer-events-auto w-full max-w-5xl bg-white border-2 border-stone-950 shadow-2xl rounded-full px-6 py-2 flex items-center justify-between transition-all"
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group pl-1">
          <img
            src="/icon-logo/mainlogoswa.png"
            alt="ScaleWithAds"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/icon-logo/mainlogo.jpeg";
            }}
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Playful Tilted Nav Pills */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Arc Top accent */}
                {item.hasArcTop && !isActive && (
                  <svg
                    className="absolute -top-2 left-1.5 w-8 h-3 text-purple-400 pointer-events-none"
                    viewBox="0 0 40 12"
                    fill="none"
                  >
                    <path d="M 4 10 Q 20 1 36 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}

                {/* Arc Bottom accent */}
                {item.hasArcBottom && !isActive && (
                  <svg
                    className="absolute -bottom-2 left-2 w-8 h-3 text-purple-400 pointer-events-none"
                    viewBox="0 0 40 12"
                    fill="none"
                  >
                    <path d="M 4 2 Q 20 11 36 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}

                <motion.div
                  animate={{
                    rotate: isActive ? 0 : item.rotate,
                    scale: isActive ? 1.05 : 1,
                  }}
                  whileHover={{ rotate: 0, scale: 1.1, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 text-xs font-extrabold tracking-tight transition-colors ${isActive
                        ? "bg-[#A855F7] text-white border-stone-950 shadow-md"
                        : "bg-white text-stone-900 border-purple-300 hover:border-stone-950 hover:bg-purple-50"
                      }`}
                  >
                    {isActive && <span className="font-mono text-[10px]">°o</span>}
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown className="w-3 h-3 text-stone-500" />}
                  </Link>
                </motion.div>

                {/* Dropdown Menu Popup */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl border-2 border-stone-950 shadow-2xl p-2.5 z-50 overflow-hidden"
                    >
                      {item.dropdown.map((sub, sIdx) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                              <SubIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-extrabold text-stone-950 group-hover:text-purple-700 transition-colors font-hero">
                                {sub.label}
                              </p>
                              <p className="text-[10px] text-stone-500 font-medium leading-tight">
                                {sub.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-2 pr-1">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2 text-xs font-black uppercase tracking-wider text-purple-950 bg-[#EAE0FF] hover:bg-purple-900 hover:text-white border-2 border-stone-950 transition-all rounded-full shadow-md active:scale-95"
          >
            <span>Book Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center pr-1">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-stone-900 hover:text-purple-600 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-0 top-20 bg-stone-950/80 backdrop-blur-md z-40 md:hidden flex justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-3xl border-2 border-stone-950 p-6 shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-2xl bg-stone-100 border border-stone-200 text-stone-950 font-extrabold text-sm flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </Link>

                  {item.dropdown && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-xs font-bold text-purple-700 hover:underline"
                        >
                          → {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 rounded-2xl bg-purple-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Book Your Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
