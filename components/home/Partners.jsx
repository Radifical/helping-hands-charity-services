import Link from "next/link";
import Reveal from "@/components/Reveal";
import { partners } from "@/lib/data";
import { ArrowRight } from "@/components/icons";
import styles from "./Partners.module.css";

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
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className={styles.tile} aria-hidden={i >= partners.length}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.logo}
                src={p.src}
                alt={i < partners.length ? p.name : ""}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Reveal>

      <div className={`container ${styles.ctaRow}`}>
        <Reveal className={styles.cta} delay={160}>
          <Link href="#donate" className="btn btn--ink">
            Find your nonprofit
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
