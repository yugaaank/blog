"use client";

import ScrambledText from "./ScrambledText/ScrambledText";

export default function HeroTitle() {
  return (
    <h1 className="text-4xl font-bold">
      <ScrambledText radius={150} duration={1} speed={0.5} scrambleChars=".:-">
        Yugank-Rathore
      </ScrambledText>
    </h1>
  );
}
