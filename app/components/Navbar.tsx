"use client";

import Link from "next/link";
import ScrambledText from "./ScrambledText/ScrambledText";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-bg px-8 py-4">
      <Link href="/" className="text-lg font-bold text-accent">
        <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">
          {"-ygnk-"}
        </ScrambledText>
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/blog" className="hover:text-accent">
          <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">blog</ScrambledText>
        </Link>
        <Link href="/projects" className="hover:text-accent">
          <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">projects</ScrambledText>
        </Link>
        <a
          href="https://yugank.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          <ScrambledText radius={50} duration={0.8} speed={0.4} scrambleChars=".:-">portfolio</ScrambledText>
        </a>
      </div>
    </nav>
  );
}
