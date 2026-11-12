import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Outreach | DevSynx",
  robots: { index: false, follow: false },
};

export default function OutreachLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-stone-50 text-stone-900 text-[14px]">{children}</div>;
}
