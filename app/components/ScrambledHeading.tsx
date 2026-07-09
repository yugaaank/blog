"use client";

import type { ElementType, ReactNode } from "react";
import ScrambledText from "./ScrambledText/ScrambledText";

export default function ScrambledHeading({ as: Tag = "h1", className = "", children }: { as?: ElementType; className?: string; children: ReactNode }) {
  return (
    <Tag className={className}>
      <ScrambledText radius={150} duration={1} speed={0.5} scrambleChars=".:-">
        {children}
      </ScrambledText>
    </Tag>
  );
}
