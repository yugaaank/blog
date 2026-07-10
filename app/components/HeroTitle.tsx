"use client";

import ScrambledText from "./ScrambledText/ScrambledText";

export default function HeroTitle() {
  return (
    <h1 className="text-4xl max-[350px]:text-2xl font-bold whitespace-nowrap">
      <ScrambledText radius={150} duration={1} speed={0.5} scrambleChars=".:-">
        Yugank-Rathore
      </ScrambledText>
    </h1>
  );
}
