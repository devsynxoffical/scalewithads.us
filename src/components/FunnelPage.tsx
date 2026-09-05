import Link from "next/link";
import type { FunnelConfig } from "../lib/funnels";
import { Footer } from "./Footer";
import { Reviews } from "./Reviews";
import { VideoPlayer } from "./VideoPlayer";

export function FunnelPage({ funnel }: { funnel: FunnelConfig }) {
  return (
    <main className="bg-[var(--bg)]">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-20 md:pt-24">
        <div className="studio-grid-dark absolute inset-0" />
        <div className="relative mx-auto max-w-[900px] px-5 py-16 text-center md:px-8 md:py-24">
          <p className="animate-rise eyebrow-bright">{funnel.eyebrow}</p>
          <h1 className="display animate-rise-d1 mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] text-white">
            {funnel.title}{" "}
            <span className="text-[var(--accent-bright)]">
              {funnel.titleAccent}
            </span>
            {funnel.titleEnd ? (
              <>
                <br />
                {funnel.titleEnd}
              </>
            ) : null}
          </h1>
          <p className="animate-rise-d2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {funnel.subtitle}
          </p>

          {funnel.stats && (
            <div className="animate-rise-d2 mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {funnel.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <p className="display text-2xl text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="animate-rise-d2 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={funnel.bookingPath}
              className="btn btn-accent min-w-[240px] px-7 py-4 text-base"
            >
              {funnel.ctaPrimary}
            </Link>
            <Link href={funnel.bookingPath} className="btn-line-white">
              {funnel.ctaSecondary} →
            </Link>
          </div>

          {funnel.slug === "metads" && funnel.videoSrc && (
            <div className="animate-rise-d2 mx-auto mt-12 max-w-[780px]">
              <VideoPlayer
                src={funnel.videoSrc}
                cover={funnel.videoCover}
                title={funnel.videoLabel}
                autoPlay
              />
            </div>
          )}
        </div>
      </section>

      {/* Inside */}
      <section className="section-shell bg-[var(--bg)]">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow-accent">Inside</p>
            <h2 className="display mt-3 text-[clamp(2rem,3.5vw,3rem)] text-[var(--ink)]">
              {funnel.learnTitle}
            </h2>
          </div>
          <ol className="space-y-0 border-t border-zinc-100">
            {funnel.learnItems.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[64px_1fr] gap-4 border-b border-zinc-100 py-5"
              >
                <span className="display text-2xl text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-base text-[var(--ink-soft)]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Track */}
      <section className="section-shell bg-[var(--band-2)]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow-bright">Track record</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3.2rem)] text-white">
            {funnel.trackTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
            {funnel.trackBody}
          </p>
          <Link
            href={funnel.bookingPath}
            className="btn btn-accent mt-9 min-w-[240px] px-7 py-4 text-base"
          >
            {funnel.ctaPrimary}
          </Link>
        </div>
      </section>

      <Reviews />

      {/* Final CTA */}
      <section className="section-shell bg-[var(--bg)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="panel-ink relative overflow-hidden rounded-3xl px-6 py-16 text-center md:py-20">
            <div className="pointer-events-none absolute inset-0 studio-grid opacity-60" />
            <div className="relative mx-auto max-w-[640px]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-bright)]">
                Next step
              </p>
              <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] text-white">
                Ready to scale with ads that sell?
              </h2>
              <p className="mt-4 text-white/80">
                $10K minimum. All industries. We double your revenue in 90 days,
                everything in the agreement.
              </p>
              <Link
                href={funnel.bookingPath}
                className="btn btn-accent mt-9 min-w-[240px] px-7 py-4 text-base"
              >
                Book application call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
