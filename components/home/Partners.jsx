import Link from "next/link";
import Reveal from "@/components/Reveal";
import { partners } from "@/lib/partners";
import { ArrowRight } from "@/components/icons";
import styles from "./Partners.module.css";

// Real nonprofit partners that have a logo, for the trust carousel.
const logoPartners = partners.filter((p) => p.logo);

export default function Partners() {
  return (
    <section id="partners" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <h2 className={`h2 ${styles.title}`}>
            Every car fuels a cause worth fighting for.
          </h2>
          <p className={`lead ${styles.intro}`}>
            Choose from a growing network of partner organizations across animal
            welfare, climate, health, housing, and youth. Your vehicle, your
            cause.
          </p>
        </Reveal>
      </div>

      <Reveal className={styles.marqueeWrap} delay={100}>
        <div className={styles.marquee}>
          {[...logoPartners, ...logoPartners].map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              href={`/${p.slug}`}
              className={`${styles.tile} ${p.logoDark ? styles.tileDark : ""}`}
              aria-hidden={i >= logoPartners.length}
              tabIndex={i >= logoPartners.length ? -1 : 0}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.logo}
                src={p.logo}
                alt={i < logoPartners.length ? p.name : ""}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </Reveal>

      <div className={`container ${styles.ctaRow}`}>
        <Reveal className={styles.cta} delay={160}>
          <Link href="/nonprofits" className="btn btn--ink">
            Find your nonprofit
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
