import { partnerInitials } from "@/lib/partners";
import styles from "./PartnerMark.module.css";

/**
 * Partner logo if one has been dropped in /public/partners; otherwise a clean
 * monogram badge so a new partner page looks finished before its logo arrives.
 * variant: "lg" (landing hero) or "sm" (directory cards).
 */
export default function PartnerMark({ partner, variant = "lg" }) {
  const cls = variant === "sm" ? styles.sm : styles.lg;
  if (partner.logo) {
    return (
      <span className={`${styles.logoWrap} ${cls}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} src={partner.logo} alt={`${partner.name} logo`} />
      </span>
    );
  }
  return (
    <span className={`${styles.mono} ${cls}`} aria-hidden="true">
      {partnerInitials(partner.name).toUpperCase()}
    </span>
  );
}
