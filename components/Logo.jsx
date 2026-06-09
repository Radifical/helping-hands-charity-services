import styles from "./Logo.module.css";
import { site } from "@/lib/site";

/**
 * Brand lockup: the navy/teal hands-heart-car mark (public/logo-mark.png,
 * extracted from the brand artwork) + text wordmark.
 * tone="light" renders a white mark + light wordmark for dark surfaces.
 */
export default function Logo({ compact = false, tone = "dark" }) {
  return (
    <span
      className={`${styles.logo} ${tone === "light" ? styles.light : ""}`}
      aria-label={site.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.mark}
        src="/logo-mark.png"
        alt=""
        width="427"
        height="366"
      />
      {!compact && (
        <span className={styles.words}>
          <span className={styles.line1}>Helping Hands</span>
          <span className={styles.line2}>Charity Services</span>
        </span>
      )}
    </span>
  );
}
