"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { partners, partnerCategories } from "@/lib/partners";
import PartnerMark from "@/components/PartnerMark";
import { ArrowUpRight } from "@/components/icons";
import styles from "./NonprofitDirectory.module.css";

export default function NonprofitDirectory() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partners
      .filter((p) => (cat === "All" ? true : p.category === cat))
      .filter(
        (p) =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.mission.toLowerCase().includes(q)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, cat]);

  return (
    <>
      <div className={styles.controls}>
        <label className={styles.search}>
          <span className="sr-only">Search nonprofits</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.searchIcon}>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search by name, cause, or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <div className={styles.cats}>
          <button
            type="button"
            className={`${styles.cat} ${cat === "All" ? styles.catActive : ""}`}
            onClick={() => setCat("All")}
          >
            All
          </button>
          {partnerCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={`${styles.cat} ${cat === c ? styles.catActive : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className={styles.count}>
        {results.length} {results.length === 1 ? "nonprofit" : "nonprofits"}
      </p>

      {results.length === 0 ? (
        <p className={styles.empty}>
          No matches. Try a different search, or call us and we&apos;ll help you
          give to any nonprofit.
        </p>
      ) : (
        <ul className={styles.grid}>
          {results.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`} className={styles.card}>
                <PartnerMark partner={p} variant="sm" />
                <span className={styles.cardBody}>
                  <span className={styles.cardName}>{p.name}</span>
                  <span className={styles.cardCat}>{p.category}</span>
                  <span className={styles.cardMission}>{p.mission}</span>
                </span>
                <span className={styles.cardArrow} aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
