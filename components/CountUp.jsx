"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a leading number up from 0 when it first scrolls into view.
 * Non-numeric values ("Free") render as-is. Respects reduced motion.
 */
export default function CountUp({ value, duration = 1300 }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef(null);
  const [display, setDisplay] = useState(target === null ? value : 0);

  useEffect(() => {
    if (target === null) return;
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(target);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(2, -10 * t); // ease-out-expo
          setDisplay(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target, duration]);

  if (target === null) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
