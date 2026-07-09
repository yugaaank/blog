"use client";

import Link from "next/link";
import ScrambledText from "./ScrambledText/ScrambledText";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-bg px-8">
      <Link href="/" className="text-lg font-bold text-accent py-4">
        <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">
          {"-ygnk-"}
        </ScrambledText>
      </Link>
      <div className="flex items-stretch text-sm h-full">
        <Link href="/blog" className="flex items-center px-4 hover:text-accent">
          <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">blog</ScrambledText>
        </Link>
        <div className="w-px bg-border" />
        <Link href="/projects" className="flex items-center px-4 hover:text-accent">
          <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">projects</ScrambledText>
        </Link>
        <div className="w-px bg-border" />
        <a
          href="https://yugank.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 hover:text-accent"
        >
          <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">portfolio</ScrambledText>
        </a>
      </div>
    </nav>
  );
}
