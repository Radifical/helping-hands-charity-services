"use client";

import { useState } from "react";
import { submitForm } from "@/lib/forms";
import { Check, ArrowUpRight } from "@/components/icons";
import styles from "./ShareStoryForm.module.css";

function Stars({ value, onChange }) {
  return (
    <div className={styles.stars} role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          type="button"
          key={n}
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          className={`${styles.star} ${n <= value ? styles.starOn : ""}`}
          onClick={() => onChange(n)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.9 6.2 21l1.1-6.5L2.6 9.9l6.5-.9L12 2.6z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function ShareStoryForm() {
  const [role, setRole] = useState("donor");
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("sending");
    try {
      await submitForm("story", formEl);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          <Check size={26} />
        </span>
        <h3 className={styles.successTitle}>Thank you for sharing!</h3>
        <p className={styles.successBody}>
          We received your story. Our team reviews each submission before it goes
          live on the site.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <input type="text" name="_gotcha" className={styles.hp} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New story / review submission" readOnly />
      <input type="hidden" name="role" value={role} readOnly />

      <div className={styles.roleRow} role="tablist" aria-label="I am a">
        <button
          type="button"
          role="tab"
          aria-selected={role === "donor"}
          className={`${styles.role} ${role === "donor" ? styles.roleActive : ""}`}
          onClick={() => setRole("donor")}
        >
          I&apos;m a donor
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={role === "nonprofit"}
          className={`${styles.role} ${role === "nonprofit" ? styles.roleActive : ""}`}
          onClick={() => setRole("nonprofit")}
        >
          I&apos;m a nonprofit
        </button>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>
            {role === "nonprofit" ? "Organization / your name" : "Your name"}
          </span>
          <input className={styles.input} name="name" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Location</span>
          <input className={styles.input} name="location" placeholder="City, State" />
        </label>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Your rating</span>
        <Stars value={rating} onChange={setRating} />
        <input type="hidden" name="rating" value={rating} />
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Your story</span>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="story"
          rows={5}
          required
          placeholder={
            role === "nonprofit"
              ? "Tell us how partnering with HHCS has helped your organization."
              : "Tell us about your donation experience with HHCS."
          }
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Email (kept private)</span>
        <input className={styles.input} type="email" name="email" required autoComplete="email" />
      </label>

      {status === "error" && (
        <p className={styles.errorMsg} role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <button type="submit" className={`btn btn--primary ${styles.submit}`} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit"}
        <span className="btn__arrow" aria-hidden="true">
          <ArrowUpRight size={13} />
        </span>
      </button>
      <p className={styles.fineprint}>
        Stories are reviewed before they appear on the site. We never publish
        your email.
      </p>
    </form>
  );
}
