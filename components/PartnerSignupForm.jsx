"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "@/components/icons";
import styles from "./PartnerSignupForm.module.css";

/**
 * Nonprofit partner application. Minimal by design: charity name, contact,
 * email, phone, and a 501(c)(3) certification. Wire handleSubmit to your CRM.
 */
export default function PartnerSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          <Check size={26} />
        </span>
        <h3 className={styles.successTitle}>Thanks for reaching out!</h3>
        <p className={styles.successBody}>
          We received your details and will be in touch shortly to set up your
          partnership and your nonprofit&apos;s donation page.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.field}>
        <span className={styles.label}>Charity name</span>
        <input className={styles.input} name="charity" required autoComplete="organization" />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Contact name</span>
        <input className={styles.input} name="contact" required autoComplete="name" />
      </label>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input className={styles.input} type="email" name="email" required autoComplete="email" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Phone</span>
          <input className={styles.input} type="tel" name="phone" required autoComplete="tel" />
        </label>
      </div>

      <label className={styles.checkRow}>
        <input className={styles.check} type="checkbox" name="is501c3" required />
        <span>I certify that our organization is a registered 501(c)(3) nonprofit.</span>
      </label>

      <button type="submit" className={`btn btn--primary ${styles.submit}`}>
        Apply to partner
        <span className="btn__arrow" aria-hidden="true">
          <ArrowUpRight size={13} />
        </span>
      </button>
    </form>
  );
}
