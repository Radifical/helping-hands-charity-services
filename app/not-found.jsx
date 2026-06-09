import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This road doesn&apos;t lead anywhere.</h1>
        <p className={styles.body}>
          The page you&apos;re looking for may have moved. Let&apos;s get you back
          to a cause worth supporting.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn--primary">
            Back home
            <ArrowRight size={16} />
          </Link>
          <Link href="/blog" className="btn btn--ghost">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
