import type { Metadata } from "next";
import { SmoothScroll } from "../components/providers/SmoothScroll";
import { ScrollToTop } from "../components/ScrollToTop";
import { WhatsAppButton } from "../components/redesign/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scale With Ads™ | Done-For-You Client Acquisition System",
  description:
    "We install our proprietary Scale With Ads™ Client Acquisition System into your business and double your revenue in 90 days, or we work at no management fee until we do. Backed by a written agreement. For $10K+/month businesses.",
  icons: {
    icon: [
      { url: "/icon-logo/favicon.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/icon-logo/favicon.jpeg",
    apple: "/icon-logo/favicon.jpeg",
  },
  openGraph: {
    title: "Scale With Ads™ | Double Your Revenue In 90 Days",
    description:
      "Complete done-for-you client acquisition system: Meta Ads, creatives, landing pages, CRM, AI automations, and qualification. Double revenue in 90 days, in writing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full antialiased font-sans bg-[#FDFBF7] text-stone-900" suppressHydrationWarning>
        <ScrollToTop />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
