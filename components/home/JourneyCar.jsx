"use client";

import { useEffect, useRef } from "react";
import CarGlyph from "@/components/CarGlyph";
import styles from "./HowItWorks.module.css";

// five evenly spaced stops, one per step (01 through 05)
const STOPS = [0, 0.25, 0.5, 0.75, 1];

/**
 * The journey car. Tracks scroll position and glides to the step that
 * matches how far the reader has scrolled through the section; scrolling
 * back up drives it back. Desktop only; hidden on mobile and for
 * reduced-motion users (CSS handles both, this skips the JS work too).
 */
export default function JourneyCar() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const wide = window.matchMedia("(min-width: 1040px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let active = false;

    const update = () => {
      raf = 0;
      const track = el.parentElement;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;

      // 0 when the section enters near the bottom of the viewport,
      // 1 by the time its top approaches the top. Fully reversible.
      const total = vh * 0.85;
      const p = Math.min(1, Math.max(0, (total - rect.top) / total));

      // snap to the nearest step stop; CSS transition glides between them
      const idx = Math.min(STOPS.length - 1, Math.floor(p * STOPS.length));
      const max = track.clientWidth - el.offsetWidth;
      el.style.setProperty("--car-x", `${Math.round(STOPS[idx] * max)}px`);
      el.style.setProperty("--car-o", p <= 0 ? "0" : "1");
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const start = () => {
      if (active || !wide.matches || reduced.matches) return;
      active = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      update();
    };

    const stop = () => {
      if (!active) return;
      active = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };

    const evaluate = () => (wide.matches && !reduced.matches ? start() : stop());
    evaluate();
    wide.addEventListener("change", evaluate);
    reduced.addEventListener("change", evaluate);

    return () => {
      stop();
      wide.removeEventListener("change", evaluate);
      reduced.removeEventListener("change", evaluate);
    };
  }, []);

  return (
    <div ref={ref} className={styles.roadCar} aria-hidden="true">
      <CarGlyph width={54} />
    </div>
  );
}
