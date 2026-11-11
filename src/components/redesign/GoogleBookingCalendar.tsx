import React from "react";

export const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3MmTk94_MhSyjkpFQ6YvKT6tixEbjNfAdSslrScOGWjLTyee2aQlQxetfdPYxk-ZrOXFl_1Ln7?gv=true";

/** Google Calendar appointment scheduling embed, framed in the site's window-card style. */
export function GoogleBookingCalendar() {
  return (
    <div>
      <div className="rounded-[32px] border-4 border-stone-950 bg-white p-2 sm:p-4 shadow-[0_25px_70px_rgba(147,51,234,0.2)]">
        <div className="flex items-center justify-between px-2 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-black/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-black/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-black/15" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-100 px-2.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-purple-950">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-600" />
            Book a Strategy Call
          </span>
        </div>
        <iframe
          src={BOOKING_URL}
          title="Book an appointment"
          className="w-full h-[720px] sm:h-[640px] rounded-2xl border border-stone-200 bg-white"
          loading="lazy"
        />
      </div>
      <p className="mt-4 text-center text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
        Calendar not loading?{" "}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-purple-700 underline">
          Open it in a new tab
        </a>
      </p>
    </div>
  );
}
