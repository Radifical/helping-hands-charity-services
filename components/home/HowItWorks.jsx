import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import JourneyCar from "@/components/home/JourneyCar";
import { steps, stats } from "@/lib/data";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <h2 className={`h2 ${styles.title}`}>
            Donating a car should be effortless for the donor and impactful for
            the nonprofit, so that&apos;s what we did.
          </h2>
        </Reveal>

        <div className={styles.stepsWrap}>
          {/* the journey: the car advances step by step with your scroll */}
          <JourneyCar />
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className={styles.step}>
                <span className={styles.num}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className={styles.stats}>
          {stats.map((st) => (
            <div key={st.label} className={styles.stat}>
              <span className={styles.statValue}>
                <CountUp value={st.value} />
              </span>
              <span className={styles.statLabel}>{st.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
