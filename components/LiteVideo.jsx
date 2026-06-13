"use client";

import { useState } from "react";
import styles from "./LiteVideo.module.css";

/**
 * Lazy "facade" video embed. Until the visitor clicks play, NO third-party
 * iframe or script loads, so it costs nothing on first paint or for SEO.
 * On click it swaps in the provider iframe with autoplay.
 *
 * provider: "youtube" | "vimeo"
 */
export default function LiteVideo({ provider, id, hash, title = "Watch the video" }) {
  const [active, setActive] = useState(false);

  const src =
    provider === "vimeo"
      ? `https://player.vimeo.com/video/${id}?autoplay=1${hash ? `&h=${hash}` : ""}`
      : `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

  // YouTube thumbnails are predictable; Vimeo needs an API call, so we use a
  // branded gradient poster there (still zero network until click).
  const poster =
    provider === "youtube"
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : null;

  if (active) {
    return (
      <div className={styles.frame}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.facade} ${poster ? "" : styles.noPoster}`}
      onClick={() => setActive(true)}
      aria-label={title}
    >
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className={styles.poster} loading="lazy" />
      )}
      <span className={styles.scrim} aria-hidden="true" />
      <span className={styles.play} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
        </svg>
      </span>
      <span className={styles.label}>{title}</span>
    </button>
  );
}
