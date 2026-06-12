import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import styles from "./CutoutCta.module.css";

export default function CutoutCta() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.band}>
          <div className={styles.glowA} aria-hidden="true" />
          <div className={styles.glowB} aria-hidden="true" />

          <div className={styles.copy}>
            <h2 className={styles.title}>Your old car can change a life.</h2>
            <p className={styles.sub}>
              Free pickup, an industry-leading share to your cause, and paperwork
              handled for you. One vehicle, real impact.
            </p>
            <div className={styles.ctas}>
              <Link href="#donate" className="btn btn--primary">
                Donate Now
                <span className="btn__arrow" aria-hidden="true">
                  <ArrowUpRight size={13} />
                </span>
              </Link>
              <Link href="/nonprofits" className="btn btn--glass">
                Choose a nonprofit
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.figure} aria-hidden="true">
            <Image
              src="/people/cutout-heart.png"
              alt=""
              fill
              quality={92}
              sizes="(max-width: 880px) 70vw, 480px"
              className={styles.figureImg}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
