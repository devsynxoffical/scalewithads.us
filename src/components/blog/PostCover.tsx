import { Clapperboard, Crosshair, Filter, Scale, type LucideIcon } from "lucide-react";

/** Visual identity per blog category: gradient, accent and icon. */
const THEMES: Record<string, { from: string; to: string; ring: string; icon: LucideIcon }> = {
  "Meta Ads Targeting": { from: "from-purple-700", to: "to-fuchsia-500", ring: "ring-fuchsia-300/40", icon: Crosshair },
  Funnels: { from: "from-stone-950", to: "to-purple-800", ring: "ring-purple-300/40", icon: Filter },
  Creative: { from: "from-indigo-700", to: "to-purple-500", ring: "ring-indigo-300/40", icon: Clapperboard },
  "Legal Marketing": { from: "from-stone-900", to: "to-indigo-700", ring: "ring-indigo-300/40", icon: Scale },
};

const FALLBACK = THEMES["Meta Ads Targeting"];

/**
 * Decorative cover for a blog post (pure CSS + icon, no image request).
 * `size="lg"` for the featured card, `"md"` for grid cards, `"sm"` for related links.
 */
export function PostCover({ category, size = "md" }: { category: string; size?: "sm" | "md" | "lg" }) {
  const t = THEMES[category] ?? FALLBACK;
  const Icon = t.icon;
  const height = size === "lg" ? "h-56 sm:h-full min-h-[14rem]" : size === "md" ? "h-44" : "h-28";
  const iconBox = size === "sm" ? "w-12 h-12" : "w-16 h-16 sm:w-20 sm:h-20";
  const iconSize = size === "sm" ? "w-6 h-6" : "w-8 h-8 sm:w-10 sm:h-10";

  return (
    <div aria-hidden className={`relative ${height} w-full overflow-hidden bg-gradient-to-br ${t.from} ${t.to}`}>
      {/* grid texture */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* glow orbs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-8 w-44 h-44 rounded-full bg-black/25 blur-2xl" />
      {/* icon badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`${iconBox} rounded-2xl bg-white/15 backdrop-blur-sm ring-4 ${t.ring} border border-white/30 flex items-center justify-center shadow-2xl`}>
          <Icon className={`${iconSize} text-white`} strokeWidth={2.2} />
        </span>
      </div>
      {size !== "sm" && (
        <span className="absolute left-4 bottom-4 rounded-full bg-black/35 backdrop-blur-md border border-white/20 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-white">
          {category}
        </span>
      )}
    </div>
  );
}
