import { CSSProperties, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowStyles = {
  blue: "before:bg-[radial-gradient(circle_at_top,rgba(123,189,228,0.30),transparent_68%)]",
  purple: "before:bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.24),transparent_68%)]",
  green: "before:bg-[radial-gradient(circle_at_top,rgba(110,231,183,0.24),transparent_68%)]",
  red: "before:bg-[radial-gradient(circle_at_top,rgba(252,165,165,0.24),transparent_68%)]",
  orange: "before:bg-[radial-gradient(circle_at_top,rgba(253,186,116,0.24),transparent_68%)]",
} as const;

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

export function GlowCard({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const style: CSSProperties = {};

  if (width !== undefined) {
    style.width = typeof width === "number" ? `${width}px` : width;
  }

  if (height !== undefined) {
    style.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <div
      style={style}
      className={[
        customSize ? "" : `${sizeMap[size]} aspect-[3/4]`,
        "relative grid grid-rows-[1fr_auto] gap-4 overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white/82 p-4 shadow-[0_16px_38px_rgba(75,156,211,0.08)] backdrop-blur-[6px]",
        "before:absolute before:inset-0 before:pointer-events-none before:opacity-100",
        glowStyles[glowColor],
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]" />
      {children}
    </div>
  );
}
