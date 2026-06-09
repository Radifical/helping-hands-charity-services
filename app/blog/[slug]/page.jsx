import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, formatDate } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import styles from "./post.module.css";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <header className={styles.header}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={`container ${styles.headInner}`}>
            <Link href="/blog" className={styles.back}>
              <span className={styles.backArrow} aria-hidden="true">
                <ArrowRight size={14} />
              </span>
              All posts
            </Link>
            <span className={styles.cat}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.meta}>
              {formatDate(post.date)} · {post.readingTime}
            </p>
          </div>
        </header>

        <div className={`container ${styles.bodyWrap}`}>
          <div className={styles.body}>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <aside className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready to donate a vehicle?</h2>
            <p className={styles.ctaBody}>
              Get your best offer in minutes: free pickup, more to your cause.
            </p>
            <Link href="/#donate" className="btn btn--accent">
              Start your donation
              <span className="btn__arrow" aria-hidden="true">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </aside>
        </div>
      </article>

      <section className={`section ${styles.more}`}>
        <div className="container">
          <h2 className={`h2 ${styles.moreTitle}`}>Keep reading</h2>
          <div className={styles.moreGrid}>
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.moreCard}>
                <span className={styles.cat}>{p.category}</span>
                <h3 className={styles.moreCardTitle}>{p.title}</h3>
                <span className={styles.moreMeta}>
                  {formatDate(p.date)} · {p.readingTime}
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
