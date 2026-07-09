"use client";

import type React from "react";
import { cn } from "@/lib/utils";

type DotPatternProps = React.ComponentProps<"div"> & {
  color?: string;
  backgroundColor?: string;
  spacing?: number;
  dotSize?: number;
};

export function DotPattern({
  color = "var(--color-border)",
  backgroundColor = "var(--background)",
  spacing = 32,
  dotSize = 1.5,
  className,
  absolute = false,
}: DotPatternProps) {
  return (
    <div
      className={cn(absolute ? "absolute inset-0" : "fixed inset-0 -z-10", className)}
      style={{
        backgroundColor,
        backgroundImage: `radial-gradient(${dotSize}px ${dotSize}px at center, ${color}, transparent)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    />
  );
}