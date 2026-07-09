"use client";

import type React from "react";
import { cn } from "@/lib/utils";

type DotPatternProps = React.ComponentProps<"div"> & {
  color?: string;
  backgroundColor?: string;
  spacing?: number;
  dotSize?: number;
  absolute?: boolean;
  pulse?: boolean;
  staggered?: boolean;
  layers?: number;
};

export function DotPattern({
  color = "var(--color-border)",
  backgroundColor = "var(--background)",
  spacing = 32,
  dotSize = 1.5,
  className,
  absolute = false,
  pulse = false,
  staggered = false,
  layers = 3,
}: DotPatternProps) {
  if (!staggered) {
    return (
      <div
        className={cn(absolute ? "absolute inset-0" : "fixed inset-0 -z-10", pulse && "animate-dot-pulse", className)}
        style={{
          backgroundColor,
          backgroundImage: `radial-gradient(${dotSize}px ${dotSize}px at center, ${color}, transparent)`,
          backgroundSize: `${spacing}px ${spacing}px`,
        }}
      />
    );
  }

  return (
    <div className={cn(absolute ? "absolute inset-0" : "fixed inset-0 -z-10", className)}>
      {Array.from({ length: layers }, (_, i) => (
        <div
          key={i}
          className="absolute inset-0 animate-dot-pulse"
          style={{
            backgroundColor: i === 0 ? backgroundColor : "transparent",
            backgroundImage: `radial-gradient(${dotSize}px ${dotSize}px at center, ${color}, transparent)`,
            backgroundSize: `${spacing}px ${spacing}px`,
            animationDelay: `${(i * 300)}ms`,
            opacity: i === 0 ? 1 : 0.6,
          }}
        />
      ))}
    </div>
  );
}