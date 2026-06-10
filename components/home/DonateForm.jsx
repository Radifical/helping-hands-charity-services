"use client";

import { useState } from "react";
import { partners } from "@/lib/partners";
import { submitForm } from "@/lib/forms";
import { Check, ArrowUpRight } from "@/components/icons";
import Reveal from "@/components/Reveal";
import styles from "./DonateForm.module.css";

const damageOptions = [
  "No Known Damage",
  "Dents",
  "Scratches",
  "Broken Glass",
  "Engine Problems",
  "Transmission Problems",
  "Electrical Issues",
  "Interior Damage",
  "Flood/Water Damage",
  "Collision/Accident Damage",
  "Missing Parts",
];

// Reusable Yes/No segmented control (radio inputs, so the value is submitted).
function YesNo({ name }) {
  return (
    <div className={styles.yesno} role="radiogroup">
      <label className={styles.yn}>
        <input type="radio" name={name} value="Yes" />
        <span>Yes</span>
      </label>
      <label className={styles.yn}>
        <input type="radio" name={name} value="No" />
        <span>No</span>
      </label>
    </div>
  );
}

export default function DonateForm({ partner = null }) {
  const [mode, setMode] = useState("full");
  const [notListed, setNotListed] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("sending");
    try {
      await submitForm("donation", formEl);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const full = mode === "full";

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
              <span className={styles.tick} aria-hidden="true"><Check size={12} /></span>
              Free pickup scheduled around you
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true"><Check size={12} /></span>
              We quote your vehicle before you commit
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true"><Check size={12} /></span>
              Receipt and tax paperwork handled for you
            </li>
          </ul>
        </div>

        <Reveal className={styles.formCard}>
          {status === "done" ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon} aria-hidden="true"><Check size={26} /></span>
              <h3 className={styles.successTitle}>Thank you!</h3>
              <p className={styles.successBody}>
                Your request is in{partner ? ` for ${partner.name}` : ""}. A
                member of our team will reach out shortly with next steps.
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setStatus("idle")}>
                Submit another vehicle
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* honeypot + metadata for Formspree */}
              <input type="text" name="_gotcha" className={styles.hp} tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="hidden" name="_subject" value={`New vehicle donation${partner ? ` — ${partner.name}` : ""}`} readOnly />
              <input type="hidden" name="formType" value={full ? "Full donation" : "Callback request"} readOnly />

              {/* path chooser */}
              <div className={styles.modeRow} role="tablist" aria-label="How would you like to donate?">
                <button type="button" role="tab" aria-selected={mode === "reach-out"} className={`${styles.mode} ${!full ? styles.modeActive : ""}`} onClick={() => setMode("reach-out")}>
                  <span className={styles.modeTitle}>Have us reach out</span>
                  <span className={styles.modeSub}>Leave your details, we call you</span>
                </button>
                <button type="button" role="tab" aria-selected={full} className={`${styles.mode} ${full ? styles.modeActive : ""}`} onClick={() => setMode("full")}>
                  <span className={styles.modeTitle}>Donate online now</span>
                  <span className={styles.modeSub}>Complete it all yourself</span>
                </button>
              </div>

              {/* nonprofit selection */}
              {partner ? (
                <>
                  <input type="hidden" name="nonprofit" value={partner.name} readOnly />
                  <p className={styles.partnerNote}>
                    Supporting <strong>{partner.name}</strong>
                  </p>
                </>
              ) : (
                <label className={styles.field}>
                  <span className={styles.label}>Choose your nonprofit</span>
                  <select
                    className={styles.input}
                    name="nonprofit"
                    defaultValue=""
                    onChange={(e) => setNotListed(e.target.value === "__other")}
                  >
                    <option value="" disabled>Select a partner organization</option>
                    {partners.map((p) => (
                      <option key={p.slug} value={p.name}>{p.name}</option>
                    ))}
                    <option value="__other">My nonprofit isn&apos;t listed</option>
                  </select>
                </label>
              )}

              {!partner && notListed && (
                <label className={styles.field}>
                  <span className={styles.label}>Nonprofit name</span>
                  <input className={styles.input} name="nonprofitOther" placeholder="Type the nonprofit you'd like to support" />
                </label>
              )}

              {/* Donor information */}
              <p className={styles.groupLabel}>Your details</p>
              <label className={styles.field}>
                <span className={styles.label}>Full name</span>
                <input className={styles.input} name="name" required autoComplete="name" />
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

              {/* Full-donation fields */}
              <div className={`${styles.extra} ${full ? styles.extraOpen : ""}`} aria-hidden={!full}>
                <div className={styles.extraInner}>
                  <label className={styles.field}>
                    <span className={styles.label}>Name on title</span>
                    <input className={styles.input} name="nameOnTitle" tabIndex={full ? 0 : -1} />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>Mailing address</span>
                    <input className={styles.input} name="address" autoComplete="street-address" tabIndex={full ? 0 : -1} />
                  </label>

                  <p className={styles.groupLabel}>Vehicle information</p>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span className={styles.label}>Year</span>
                      <input className={styles.input} name="year" inputMode="numeric" placeholder="e.g. 2012" tabIndex={full ? 0 : -1} />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Make</span>
                      <input className={styles.input} name="make" placeholder="e.g. Toyota" tabIndex={full ? 0 : -1} />
                    </label>
                  </div>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span className={styles.label}>Model</span>
                      <input className={styles.input} name="model" placeholder="e.g. Camry" tabIndex={full ? 0 : -1} />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Color</span>
                      <input className={styles.input} name="color" tabIndex={full ? 0 : -1} />
                    </label>
                  </div>
                  <div className={styles.row}>
                    <label className={styles.field}>
                      <span className={styles.label}>VIN</span>
                      <input className={styles.input} name="vin" tabIndex={full ? 0 : -1} />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>Mileage</span>
                      <input className={styles.input} name="mileage" inputMode="numeric" tabIndex={full ? 0 : -1} />
                    </label>
                  </div>
                  <div className={styles.qRow}>
                    <span className={styles.qLabel}>Title available?</span>
                    <YesNo name="titleAvailable" />
                  </div>
                  <div className={styles.qRow}>
                    <span className={styles.qLabel}>Is it a salvage title?</span>
                    <YesNo name="salvageTitle" />
                  </div>

                  <p className={styles.groupLabel}>Vehicle condition</p>
                  <div className={styles.qRow}>
                    <span className={styles.qLabel}>Does the vehicle start?</span>
                    <YesNo name="starts" />
                  </div>
                  <div className={styles.qRow}>
                    <span className={styles.qLabel}>Is it safe to drive?</span>
                    <YesNo name="safeToDrive" />
                  </div>
                  <div className={styles.qRow}>
                    <span className={styles.qLabel}>Any warning lights on? (e.g. engine light)</span>
                    <YesNo name="warningLights" />
                  </div>

                  <fieldset className={styles.damage}>
                    <legend className={styles.groupLabel}>Damage (check all that apply)</legend>
                    <div className={styles.damageGrid}>
                      {damageOptions.map((d) => (
                        <label key={d} className={styles.checkRow}>
                          <input type="checkbox" name="damage" value={d} tabIndex={full ? 0 : -1} />
                          <span>{d}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <label className={styles.field}>
                    <span className={styles.label}>Damage details (optional)</span>
                    <textarea className={`${styles.input} ${styles.textarea}`} name="damageDetails" rows={3} tabIndex={full ? 0 : -1} />
                  </label>
                  <div className={styles.qRow}>
                    <span className={styles.qLabel}>Can you provide photos if needed?</span>
                    <YesNo name="canProvidePhotos" />
                  </div>

                  <p className={styles.groupLabel}>Pickup location</p>
                  <label className={styles.field}>
                    <span className={styles.label}>Pickup address</span>
                    <input className={styles.input} name="pickupAddress" autoComplete="street-address" tabIndex={full ? 0 : -1} />
                  </label>
                </div>
              </div>

              {status === "error" && (
                <p className={styles.errorMsg} role="alert">
                  Something went wrong. Please try again or call us.
                </p>
              )}

              <button type="submit" className={`btn btn--primary ${styles.submit}`} disabled={status === "sending"}>
                {status === "sending"
                  ? "Sending…"
                  : full
                  ? "Get my best offer"
                  : "Request a callback"}
                <span className="btn__arrow" aria-hidden="true"><ArrowUpRight size={13} /></span>
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
