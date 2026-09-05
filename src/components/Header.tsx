"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOKING_PATH } from "../lib/offer";

const links = [
  { href: "/#system", label: "System" },
  { href: "/#results", label: "Results" },
  { href: "/#reviews", label: "Videos" },
  { href: "/#comparison", label: "Why Us" },
  { href: "/medialibrary", label: "Media Library" },
];

const mastermindLinks = [
  { href: "/privatemastermind", label: "Private Mastermind" },
  { href: "/metads", label: "Meta Ads Training" },
  { href: "/leadpilot", label: "Lead Pilot" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mastermindOpen, setMastermindOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setMastermindOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-transparent/95 backdrop-blur-xl transition-all duration-200">
      {pathname === "/" && (
        <div className="flex h-9 items-center justify-center gap-2 bg-[var(--accent)] px-4 text-center text-[10px] font-bold tracking-wide text-white md:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span>
            Only for agency owners, coaches, high-ticket service providers
            &amp; B2B founders already generating $10,000+/month.
          </span>
          <span className="hidden text-white/80 md:inline">
            · Below $10K/month? This system isn&apos;t the right fit.
          </span>
        </div>
      )}

      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-5 md:h-18 md:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/icon-logo/mainlogo.jpeg"
            alt="Scale with Ads"
            width={2000}
            height={1538}
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-zinc-800 bg-white/5 backdrop-blur-md/90 p-1 backdrop-blur-md lg:flex"
          onMouseLeave={() => setMastermindOpen(false)}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-[13px] font-semibold text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMastermindOpen(true)}
          >
            <button
              type="button"
              aria-expanded={mastermindOpen}
              onClick={() => setMastermindOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13px] font-semibold text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              Masterminds
              <svg
                viewBox="0 0 12 12"
                className={`h-3 w-3 transition-transform ${mastermindOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mastermindOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-zinc-800 bg-white/5 backdrop-blur-md p-1.5 shadow-2xl shadow-black/50">
                {mastermindLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMastermindOpen(false)}
                    className="block rounded-lg px-3.5 py-2.5 text-[13px] font-semibold text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={BOOKING_PATH}
            className="btn btn-accent text-[13px] font-bold px-5 py-2 sm:inline-flex shadow-sm hover:shadow-md"
          >
            Apply Now
          </Link>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-current transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-transparent lg:hidden">
          <nav className="mx-auto flex max-w-[1240px] flex-col px-5 py-4 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              aria-expanded={mastermindOpen}
              onClick={() => setMastermindOpen((v) => !v)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              <span>Masterminds</span>
              <svg
                viewBox="0 0 12 12"
                className={`h-3 w-3 transition-transform ${mastermindOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mastermindOpen && (
              <div className="flex flex-col gap-1">
                {mastermindLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            <Link
              href={BOOKING_PATH}
              onClick={() => setOpen(false)}
              className="btn btn-accent mt-3 w-full justify-center"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
