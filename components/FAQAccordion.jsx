"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

function Plus({ open }) {
  return (
    <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/**
 * Grouped FAQ accordion. Content visible by default (renders fully for SEO and
 * no-JS); JS only toggles the expanded state.
 */
export default function FAQAccordion({ groups }) {
  const [open, setOpen] = useState(() => new Set());

  const toggle = (key) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <div className={styles.wrap}>
      {groups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h3 className={styles.groupTitle}>{group.title}</h3>
          <ul className={styles.list}>
            {group.items.map((item, i) => {
              const key = `${group.id}-${i}`;
              const isOpen = open.has(key);
              return (
                <li key={key} className={styles.item}>
                  <button
                    type="button"
                    className={styles.q}
                    aria-expanded={isOpen}
                    onClick={() => toggle(key)}
                  >
                    <span>{item.q}</span>
                    <Plus open={isOpen} />
                  </button>
                  <div className={`${styles.aWrap} ${isOpen ? styles.aOpen : ""}`}>
                    <p className={styles.a}>{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
