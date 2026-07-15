"use client";

import { useEffect } from "react";

const frames = [
  ">_",
  "> ",
  ">_",
  "> ",
];

export default function AnimatedFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d")!;

    let frame = 0;
    const interval = setInterval(() => {
      ctx.clearRect(0, 0, 32, 32);
      ctx.fillStyle = "#121316";
      ctx.fillRect(0, 0, 32, 32);
      ctx.font = "bold 16px monospace";
      ctx.fillStyle = "#bd93f9";
      ctx.fillText(frames[frame], 4, 22);

      const link = document.querySelector("link[rel='icon']") as HTMLLinkElement || document.createElement("link");
      link.rel = "icon";
      link.href = canvas.toDataURL();
      if (!link.parentNode) document.head.appendChild(link);

      frame = (frame + 1) % frames.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
