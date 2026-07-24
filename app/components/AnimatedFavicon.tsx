// Minimal favicon component – injects a static SVG favicon.
// No runtime animation, respects reduced‑motion preferences.

import Head from "next/head";

export default function AnimatedFavicon() {
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
  );
}
