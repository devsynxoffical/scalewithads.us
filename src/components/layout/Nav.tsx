"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown, Play } from "lucide-react";
import { nav, navCta, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { lockScroll } from "@/lib/scroll";

const ANNOUNCEMENT_KEY = "swa-announcement-dismissed";

const mastermindLinks = [
  {
    label: "Meta Ads Mastery",
    sub: "Done-for-you ads system for reliable lead flow",
    href: "/metads",
  },
  {
    label: "LeadPilot",
    sub: "The full client acquisition system, installed",
    href: "/leadpilot",
  },
  {
    label: "Private Mastermind",
    sub: "The playbook behind $50M+ in Meta Ads",
    href: "/privatemastermind",
  },
];

function scrollToId(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.2 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <Link href="/" className="group flex items-center" aria-label="Scale With Ads home">
      <span className="flex items-center transition-opacity duration-300 group-hover:opacity-90">
        <Image
          src="/logo-alt.png"
          alt="Scale With Ads"
          width={2000}
          height={1538}
          priority
          className="h-9 w-auto object-contain sm:h-11"
        />
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);
  const [dd, setDd] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      setBarDismissed(!!localStorage.getItem(ANNOUNCEMENT_KEY));
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    setOpen(false);
    setDd(false);
  }, [pathname]);

  useEffect(() => {
    lockScroll(open);
    return () => {
      lockScroll(false);
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      scrollToId(href);
    } else if (href.startsWith("/#")) {
      if (pathname === "/") {
        e.preventDefault();
        setOpen(false);
        scrollToId(href.slice(1));
      } else {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 z-[60] transition-all duration-500",
          barDismissed ? "top-0" : "top-10"
        )}
      >
        <nav
          className={cn(
            "container-x flex h-16 items-center justify-between transition-all duration-500",
            scrolled && "border-b border-line bg-ink/70 backdrop-blur-xl"
          )}
          aria-label="Main navigation"
        >
          <Logo />
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-mist transition-colors hover:text-fog"
                >
                  {item.label}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
            <li
              className="group relative"
              onMouseEnter={() => setDd(true)}
              onMouseLeave={() => setDd(false)}
            >
              <button
                type="button"
                onClick={() => setDd((v) => !v)}
                aria-expanded={dd}
                aria-haspopup="true"
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  dd ? "text-fog" : "text-mist hover:text-fog"
                )}
              >
                Masterminds
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform duration-300", dd && "rotate-180")}
                />
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 transition-all duration-300",
                  dd ? "visible opacity-100" : "invisible opacity-0"
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-line bg-panel p-2 shadow-soft">
                  {mastermindLinks.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      onClick={() => {
                        setDd(false);
                        setOpen(false);
                      }}
                      className="group/item flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-lime/10"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime/10 text-lime">
                        <Play className="h-3.5 w-3.5 fill-current" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-fog transition-colors group-hover/item:text-lime">
                          {m.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-dim">{m.sub}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--color-lime)] sm:inline-flex"
              data-cursor="book"
            >
              {navCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-fog lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-ink/95 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="mt-24 flex flex-1 flex-col justify-between px-6 pb-10">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={cn(
                    "block border-b border-line py-4 text-4xl font-semibold tracking-tight text-fog transition-all duration-700 hover:text-lime",
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="overflow-hidden border-b border-line">
              <p
                className={cn(
                  "pt-4 text-xs font-bold uppercase tracking-[0.25em] text-dim transition-all duration-700",
                  open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{
                  transitionDelay: open ? `${100 + nav.length * 60}ms` : "0ms",
                }}
              >
                Masterminds
              </p>
              {mastermindLinks.map((m, j) => (
                <Link
                  key={m.href}
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 py-3 text-xl font-semibold tracking-tight text-fog transition-all duration-700 hover:text-lime",
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{
                    transitionDelay: open
                      ? `${100 + (nav.length + 1 + j) * 60}ms`
                      : "0ms",
                  }}
                >
                  <Play className="h-4 w-4 shrink-0 fill-current text-lime" />
                  {m.label}
                </Link>
              ))}
            </li>
          </ul>
          <div
            className={cn(
              "flex flex-col gap-4 transition-all delay-500 duration-700",
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-[1rem] font-bold text-white"
              data-cursor="book"
            >
              {navCta.label}
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <p className="text-center text-xs text-dim">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
