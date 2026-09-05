import { cn } from "@/lib/utils";

type SectionBackgroundProps = {
  variant?: "dark" | "light";
  grid?: boolean;
  className?: string;
};

/**
 * Reusable ambient section background: optional tech grid plus slowly
 * drifting radial glows in the brand red. Drop it as the first child of a
 * `relative overflow-hidden` section and keep content above it.
 */
export function SectionBackground({
  variant = "dark",
  grid = true,
  className,
}: SectionBackgroundProps) {
  const isDark = variant === "dark";
  const accent = "rgba(237,28,36,";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {grid && (
        <div
          className={cn(
            "absolute inset-0",
            isDark ? "jobber-grid-dark opacity-50" : "jobber-grid-light opacity-60"
          )}
        />
      )}

      {/* Drifting red glows */}
      <div
        className="absolute -top-[18%] -left-[12%] h-[42vw] w-[42vw] rounded-full blur-[90px]"
        style={{
          background: `radial-gradient(circle, ${accent}${isDark ? "0.16" : "0.10"}), transparent 65%)`,
          animation: "glow-drift 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-[22%] -right-[14%] h-[46vw] w-[46vw] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${accent}${isDark ? "0.12" : "0.08"}), transparent 65%)`,
          animation: "glow-drift 22s ease-in-out infinite reverse",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute top-[32%] right-[8%] h-[26vw] w-[26vw] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, ${accent}${isDark ? "0.08" : "0.06"}), transparent 60%)`,
          animation: "glow-pulse 12s ease-in-out infinite",
          animationDelay: "-4s",
        }}
      />
    </div>
  );
}
