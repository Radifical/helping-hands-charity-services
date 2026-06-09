import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Check } from "@/components/icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Full-bleed photographic background, blended into the page */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className={styles.bgImg}
          quality={82}
        />
        <div className={styles.scrim} />
        <div className={styles.fade} />
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow glass ${styles.eyebrow}`}>
          Vehicle donation, done right
        </p>

        <h1 className={styles.headline}>
          <span className={styles.line}>Donate a car,</span>
          <span className={styles.line}>
            change the{" "}
            <span className={`accent-word ${styles.accent}`}>
              world.
              <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
                <path d="M5 11C60 3 180 4 235 9" />
              </svg>
            </span>
          </span>
        </h1>

        <p className={`lead ${styles.sub}`}>
          We turn unwanted vehicles into real funding for the nonprofits that
          make the world a better place: free pickup, transparent pricing, a
          personalized donor experience, and an industry-leading share of
          proceeds sent straight to your chosen organization.
        </p>

        <div className={styles.ctas}>
          <Link href="#donate" className="btn btn--primary">
            Donate Now
            <span className="btn__arrow" aria-hidden="true">
              <ArrowUpRight size={13} />
            </span>
          </Link>
          <Link href="#how-it-works" className="btn btn--glass">
            See how it works
            <ArrowRight size={16} />
          </Link>
        </div>

        <ul className={styles.assurances}>
          <li className={`glass ${styles.chip}`}>
            <span className={styles.tick} aria-hidden="true">
              <Check size={13} />
            </span>
            Free pickup, running or not
          </li>
          <li className={`glass ${styles.chip}`}>
            <span className={styles.tick} aria-hidden="true">
              <Check size={13} />
            </span>
            Price quoted before you commit
          </li>
          <li className={`glass ${styles.chip}`}>
            <span className={styles.tick} aria-hidden="true">
              <Check size={13} />
            </span>
            Tax-deductible donation
          </li>
        </ul>
      </div>
    </section>
  );
}
