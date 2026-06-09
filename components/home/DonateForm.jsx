"use client";

import { useState } from "react";
import { partners } from "@/lib/partners";
import { Check, ArrowUpRight } from "@/components/icons";
import Reveal from "@/components/Reveal";
import styles from "./DonateForm.module.css";

const conditions = ["Runs and drives", "Runs, needs work", "Not running"];

/**
 * Donation form with two paths the donor chooses up front:
 *   - "reach-out": leave contact details, our team calls back
 *   - "full": complete every detail for a fully virtual donation
 * When `partner` is provided (nonprofit landing page), the cause is locked.
 */
export default function DonateForm({ partner = null }) {
  const [mode, setMode] = useState("full");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder handler: wire this to your donation backend / CRM.
    setSubmitted(true);
  }

  return (
    <section id="donate" className={`section ${styles.wrap}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 className={`h2 ${styles.title}`}>
            {partner ? "Donate your vehicle." : "Donate online in two minutes."}
          </h2>
          <p className={`lead ${styles.lead}`}>
            {partner
              ? `Your donation supports ${partner.name}. Choose how you'd like to start: leave your details for a callback, or complete everything now.`
              : "Choose how you'd like to start: leave your details for a callback, or complete the full donation online. No obligation, no cost to you."}
          </p>
          <ul className={styles.points}>
            <li>
              <span className={styles.tick} aria-hidden="true">
                <Check size={12} />
              </span>
              Free pickup scheduled around you
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true">
                <Check size={12} />
              </span>
              We quote your vehicle before you commit
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true">
                <Check size={12} />
              </span>
              Receipt and tax paperwork handled for you
            </li>
          </ul>
        </div>

        <Reveal className={styles.formCard}>
          {submitted ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon} aria-hidden="true">
                <Check size={26} />
              </span>
              <h3 className={styles.successTitle}>Thank you!</h3>
              <p className={styles.successBody}>
                Your request is in{partner ? ` for ${partner.name}` : ""}. A
                member of our team will reach out shortly with next steps.
              </p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => setSubmitted(false)}
              >
                Submit another vehicle
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* path chooser */}
              <div className={styles.modeRow} role="tablist" aria-label="How would you like to donate?">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === "reach-out"}
                  className={`${styles.mode} ${mode === "reach-out" ? styles.modeActive : ""}`}
                  onClick={() => setMode("reach-out")}
                >
                  <span className={styles.modeTitle}>Have us reach out</span>
                  <span className={styles.modeSub}>Leave your details, we call you</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === "full"}
                  className={`${styles.mode} ${mode === "full" ? styles.modeActive : ""}`}
                  onClick={() => setMode("full")}
                >
                  <span className={styles.modeTitle}>Donate online now</span>
                  <span className={styles.modeSub}>Complete it all yourself</span>
                </button>
              </div>

              {partner && (
                <p className={styles.partnerNote}>
                  Supporting <strong>{partner.name}</strong>
                </p>
              )}

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>First name</span>
                  <input className={styles.input} name="firstName" required autoComplete="given-name" />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Last name</span>
                  <input className={styles.input} name="lastName" required autoComplete="family-name" />
                </label>
              </div>

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

              {!partner && (
                <label className={styles.field}>
                  <span className={styles.label}>Choose your nonprofit</span>
                  <select className={styles.input} name="cause" defaultValue="">
                    <option value="" disabled>
                      Select a partner organization
                    </option>
                    {partners.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name}
                      </option>
                    ))}
                    <option value="undecided">I&apos;m not sure yet</option>
                  </select>
                </label>
              )}

              {/* full-donation fields */}
              <div className={`${styles.extra} ${mode === "full" ? styles.extraOpen : ""}`} aria-hidden={mode !== "full"}>
                <div className={styles.extraInner}>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span className={styles.label}>Vehicle year</span>
                      <input className={styles.input} name="year" inputMode="numeric" placeholder="e.g. 2012" tabIndex={mode === "full" ? 0 : -1} />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>ZIP code</span>
                      <input className={styles.input} name="zip" inputMode="numeric" autoComplete="postal-code" tabIndex={mode === "full" ? 0 : -1} />
                    </label>
                  </div>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span className={styles.label}>Make</span>
                      <input className={styles.input} name="make" placeholder="e.g. Toyota" tabIndex={mode === "full" ? 0 : -1} />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Model</span>
                      <input className={styles.input} name="model" placeholder="e.g. Camry" tabIndex={mode === "full" ? 0 : -1} />
                    </label>
                  </div>
                  <fieldset className={styles.conditions}>
                    <legend className={styles.label}>Vehicle condition</legend>
                    <div className={styles.chips}>
                      {conditions.map((c, i) => (
                        <label key={c} className={styles.chip}>
                          <input type="radio" name="condition" value={c} defaultChecked={i === 0} tabIndex={mode === "full" ? 0 : -1} />
                          <span>{c}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

              <button type="submit" className={`btn btn--primary ${styles.submit}`}>
                {mode === "full" ? "Get my best offer" : "Request a callback"}
                <span className="btn__arrow" aria-hidden="true">
                  <ArrowUpRight size={13} />
                </span>
              </button>
              <p className={styles.fineprint}>
                By submitting you agree to be contacted about your vehicle
                donation. No spam, ever.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
