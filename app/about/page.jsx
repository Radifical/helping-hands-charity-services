import Link from "next/link";
import Reveal from "@/components/Reveal";
import { team, values, posts, formatDate } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Meet the team behind Helping Hands Charity Services and the principles that drive a fairer kind of vehicle donation: more proceeds to causes, less hassle for everyone.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us · ${site.name}`,
    description:
      "Meet the team and the principles behind a fairer kind of vehicle donation.",
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  const recent = posts.slice(0, 3);

  return (
    <>
      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introGlow} aria-hidden="true" />
        <div className="container">
          <h1 className={styles.h1}>
            We built a car donation program that puts causes first.
          </h1>
          <p className={`lead ${styles.introLead}`}>
            Too many vehicle donation programs keep the lion&apos;s share of what
            a car is worth. We started Helping Hands Charity Services to flip
            that, returning the largest possible share to the organizations doing
            the work while making the whole thing painless for donors.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <Reveal>
            <h2 className={`h2 ${styles.storyTitle}`}>
              A simple idea: more of the car, to more of the cause.
            </h2>
          </Reveal>
          <Reveal className={styles.storyBody} delay={80}>
            <p>
              Helping Hands Charity Services connects donors with causes and
              fundraises for organizations by working with their supporters:
              picking up vehicles, selling them for the best possible price, and
              sending the proceeds onward.
            </p>
            <p>
              What sets us apart is how we price. Before we collect a vehicle,
              our network of vendors competes on price. We bring the donor the
              highest bid first, then ask whether they&apos;d like to move
              forward. No guesswork, no lowball surprises.
            </p>
            <p>
              The result is a program that fundraisers love and donors trust,
              built on transparency from the very first call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values: typeset list, not cards */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <Reveal className={styles.valuesHead}>
            <h2 className={`h2 ${styles.valuesTitle}`}>HHCS core values.</h2>
          </Reveal>
          <dl className={styles.valuesList}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className={styles.valueRow}>
                <dt className={styles.valueTitle}>{v.title}</dt>
                <dd className={styles.valueBody}>{v.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Team */}
      <section id="team" className={`section ${styles.team}`}>
        <div className="container">
          <Reveal className={styles.teamHead}>
            <h2 className={`h2 ${styles.teamTitle}`}>Leadership.</h2>
            <p className={`lead ${styles.teamIntro}`}>
              A family business focused on delivering a superior donor experience
              and the best results for its nonprofits.
            </p>
          </Reveal>

          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 80} className={styles.member}>
                <div className={styles.avatar} aria-hidden="true">
                  {m.initials}
                </div>
                <h3 className={styles.memberName}>{m.name}</h3>
                <p className={styles.memberRole}>{m.role}</p>
                <p className={styles.memberBio}>{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className={`section ${styles.blogPreview}`}>
        <div className="container">
          <Reveal className={styles.blogHead}>
            <h2 className={`h2 ${styles.blogTitle}`}>
              Guides, answers, and impact.
            </h2>
            <Link href="/blog" className="btn btn--ghost">
              Read all posts
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className={styles.blogGrid}>
            {recent.map((post, i) => (
              <Reveal
                as="article"
                key={post.slug}
                delay={i * 90}
                className={styles.postCard}
              >
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  <span className={styles.postCat}>{post.category}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <span className={styles.postMeta}>
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
