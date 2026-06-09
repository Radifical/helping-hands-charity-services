import styles from "./LegalPage.module.css";

export default function LegalPage({ title, updated, sections }) {
  return (
    <article className={styles.wrap}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updated}>Last updated {updated}</p>
        </div>
      </header>
      <div className={`container ${styles.body}`}>
        {sections.map((s) => (
          <section key={s.heading} className={styles.section}>
            <h2 className={styles.heading}>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
