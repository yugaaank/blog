"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import "./ScrambledText.css";

gsap.registerPlugin(ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  tag: Tag = "span",
  children,
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const el = rootRef.current;
    const text = typeof children === "string" ? children : el.textContent;
    if (!text) return;

    el.textContent = "";
    const chars = [];

    for (const char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "char";
      span.dataset.content = char;
      el.appendChild(span);
      chars.push(span);
    }

    const handleMove = (e) => {
      chars.forEach((c) => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      gsap.killTweensOf(chars);
      el.textContent = text;
    };
  }, [children, radius, duration, speed, scrambleChars]);

  return (
    <Tag ref={rootRef} className={`scrambled-text-block ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default ScrambledText;
