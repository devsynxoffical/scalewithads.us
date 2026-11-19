"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * GA4 + lead-intent events.
 *
 * GA4 loads only when NEXT_PUBLIC_GA_ID is set (e.g. "G-XXXXXXX" in Vercel env vars).
 * Events are always pushed to window.dataLayer, so Google Tag Manager can use them too.
 *
 * Events (mark book_call_click and booking_calendar_interact as key events in GA4):
 * - book_call_click            click on any link to the booking page (/contact)
 * - whatsapp_click             click on a wa.me link
 * - booking_calendar_interact  visitor clicks into the Google booking calendar iframe
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type DL = { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

function track(event: string, params: Record<string, string>) {
  const w = window as unknown as DL;
  w.dataLayer = w.dataLayer || [];
  if (w.gtag) w.gtag("event", event, params);
  else w.dataLayer.push({ event, ...params });
}

export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const params = {
        page_path: window.location.pathname,
        link_text: (a.textContent || a.getAttribute("aria-label") || "").trim().slice(0, 80),
        link_url: href,
      };
      if (/^\/contact(\b|[?#]|$)/.test(href) || /scalewithads\.us\/contact/.test(href)) track("book_call_click", params);
      else if (/wa\.me\//.test(href)) track("whatsapp_click", params);
    };

    // Clicking into a cross-origin iframe blurs the window and focuses the iframe.
    let sent = false;
    const onBlur = () => {
      const el = document.activeElement;
      if (!sent && el instanceof HTMLIFrameElement && /calendar\.google\.com/.test(el.src)) {
        sent = true;
        track("booking_calendar_interact", { page_path: window.location.pathname });
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("blur", onBlur);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
