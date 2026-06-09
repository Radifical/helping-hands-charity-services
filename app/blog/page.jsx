import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts, formatDate } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowUpRight } from "@/components/icons";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog",
  description:
    "Guides and answers on car donation: how much actually reaches the charity, title questions, tax deductions, and the causes your vehicle can fund.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog · ${site.name}`,
    description: "Guides and answers on getting the most from your car donation.",
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className={styles.intro}>
        <div className={styles.glow} aria-hidden="true" />
        <div className="container">
          <h1 className={styles.h1}>Donate smarter.</h1>
          <p className={`lead ${styles.lead}`}>
            Practical guides on car donation and the causes your vehicle can move
            forward.
          </p>
        </div>
      </section>

      <section className={`section ${styles.list}`}>
        <div className="container">
          <Reveal as="article" className={styles.featured}>
            <Link href={`/blog/${featured.slug}`} className={styles.featuredLink}>
              <div className={styles.featuredBody}>
                <span className={styles.cat}>{featured.category}</span>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <span className={styles.meta}>
                  {formatDate(featured.date)} · {featured.readingTime}
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className={styles.featuredArt} aria-hidden="true">
                <span>{featured.category}</span>
              </div>
            </Link>
          </Reveal>

          <div className={styles.grid}>
            {rest.map((post, i) => (
              <Reveal
                as="article"
                key={post.slug}
                delay={i * 80}
                className={styles.card}
              >
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  <span className={styles.cat}>{post.category}</span>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.meta}>
                    {formatDate(post.date)} · {post.readingTime}
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
