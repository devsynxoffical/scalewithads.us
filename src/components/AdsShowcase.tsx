import Image from "next/image";
import Link from "next/link";
import { allAdVideos } from "../lib/ads";
import { LibraryVideoTile } from "./LibraryVideoTile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const screenshots = [
  { src: "/media/ads/ad-roofing.jpg", label: "Roofing" },
  { src: "/media/ads/ad-hvac.jpg", label: "HVAC" },
  { src: "/media/ads/ad-solar.jpg", label: "Solar" },
  { src: "/media/ads/ad-windows.jpg", label: "Windows" },
  { src: "/media/ads/ad-heating.jpg", label: "Heating" },
  { src: "/media/ads/ad-mva.jpg", label: "MVA" },
  { src: "/media/ads/ad-car-accident.jpg", label: "Car Accident" },
  { src: "/media/ads/ad-fitness.jpg", label: "Fitness" },
  { src: "/media/ads/ad-finance.jpg", label: "Finance" },
  { src: "/media/ads/ad-uk-finance.jpg", label: "UK Finance" },
  { src: "/media/ads/ad-supplements.jpg", label: "Supplements" },
  { src: "/media/ads/ad-wellness.jpg", label: "Wellness" },
];

export function AdsShowcase() {
  return (
    <section
      id="ads"
      className="relative overflow-hidden border-b border-zinc-800 bg-transparent py-16 text-white md:py-24"
    >
      <div className="jobber-grid-dark pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(237,28,36,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          eyebrow="THE CREATIVE THAT CONVERTS"
          title={
            <>
              Real ads. Real industries.{" "}
              <span className="text-[var(--accent)]">One system.</span>
            </>
          }
          description="Press play — the same done-for-you creative engine behind million-dollar funnels, adapted to every vertical we work with."
        />

        {/* Video wall — every ad video plays on scroll */}
        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-5">
          {allAdVideos.map((video, i) => (
            <Reveal key={video.id} delay={(i % 4) * 60} className="break-inside-avoid">
              <LibraryVideoTile asset={video} />
            </Reveal>
          ))}
        </div>

        {/* Static screenshot strip — 12 industries */}
        <Reveal delay={80} className="mt-12">
          <p className="eyebrow-accent mb-4 text-center">Creative screenshots</p>
        </Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#09090b] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#09090b] to-transparent" />
          <div className="no-scrollbar -mx-5 flex snap-x gap-3.5 overflow-x-auto px-5 pb-1 md:-mx-8 md:px-8">
            {screenshots.map((ad) => (
              <div
                key={ad.src}
                className="group relative w-[96px] shrink-0 snap-start overflow-hidden rounded-xl border border-zinc-800 bg-white/5 backdrop-blur-md/70"
              >
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src={ad.src}
                    alt={`${ad.label} ad creative`}
                    fill
                    sizes="96px"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 truncate text-center text-[9px] font-bold uppercase tracking-[0.1em] text-white/80">
                    {ad.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/medialibrary"
            className="btn btn-outline-dark inline-flex px-8 py-4 text-sm font-semibold"
          >
            See every ad in the media library →
          </Link>
        </div>
      </div>
    </section>
  );
}
