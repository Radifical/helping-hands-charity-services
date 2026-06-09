"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/icons";
import styles from "./Testimonials.module.css";

function initials(name) {
  return name
    .replace(/^The\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.card}`);
    const amount = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="stories" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <h2 className={`h2 ${styles.title}`}>
            Stories from our cherished donors.
          </h2>
          <div className={styles.controls}>
            <a className={`btn btn--glass ${styles.review}`} href={`mailto:${site.email}?subject=My%20Helping%20Hands%20review`}>
              Leave a review
            </a>
            <div className={styles.arrows} aria-hidden="true">
              <button
                type="button"
                className={styles.arrow}
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Previous stories"
              >
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="More stories"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className={styles.track}
        tabIndex={0}
        role="region"
        aria-label="Donor stories, scrollable"
      >
        <div className={styles.rail}>
          {testimonials.map((t) => (
            <figure key={t.name + t.role} className={styles.card}>
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption className={styles.cite}>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(t.name)}
                </span>
                <span>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
