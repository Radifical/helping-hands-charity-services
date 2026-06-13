import Link from "next/link";
import { notFound } from "next/navigation";
import { partners, getPartner } from "@/lib/partners";
import { site } from "@/lib/site";
import { steps } from "@/lib/data";
import PartnerMark from "@/components/PartnerMark";
import DonateForm from "@/components/home/DonateForm";
import Reveal from "@/components/Reveal";
import LiteVideo from "@/components/LiteVideo";
import { ArrowUpRight, Check, ArrowRight } from "@/components/icons";
import styles from "./partner.module.css";

export const dynamicParams = false; // only known partner slugs render; others 404

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const partner = getPartner(params.slug);
  if (!partner) return {};
  const title = `Donate a Car to ${partner.name}`;
  return {
    title,
    description: `Donate your vehicle to support ${partner.name}. Free pickup, transparent pricing, and the largest share of proceeds sent straight to ${partner.name}.`,
    alternates: { canonical: `/${partner.slug}` },
    openGraph: {
      title: `${title} · ${site.name}`,
      description: `Free pickup and an industry-leading share of proceeds for ${partner.name}.`,
      url: `${site.url}/${partner.slug}`,
    },
  };
}

export default function PartnerPage({ params }) {
  const partner = getPartner(params.slug);
  if (!partner) notFound();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <Link href="/nonprofits" className={styles.back}>
            <span className={styles.backArrow} aria-hidden="true">
              <ArrowRight size={14} />
            </span>
            All nonprofits
          </Link>

          <div className={styles.lockup}>
            <PartnerMark partner={partner} variant="lg" />
            <div>
              <p className={styles.kicker}>{partner.category}</p>
              <h1 className={styles.title}>Donate a car to {partner.name}</h1>
            </div>
          </div>

          <p className={`lead ${styles.mission}`}>{partner.mission}</p>

          <div className={styles.ctas}>
            <Link href="#donate" className="btn btn--primary">
              Donate Now
              <span className="btn__arrow" aria-hidden="true">
                <ArrowUpRight size={13} />
              </span>
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn btn--glass">
              Or call {site.phone}
            </a>
          </div>

          <ul className={styles.assurances}>
            <li>
              <span className={styles.tick} aria-hidden="true"><Check size={13} /></span>
              Free pickup, running or not
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true"><Check size={13} /></span>
              Industry-leading share to {partner.name}
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true"><Check size={13} /></span>
              Tax-deductible, paperwork handled
            </li>
          </ul>
        </div>
      </section>

      {partner.video && (
        <section className={`section ${styles.videoWrap}`}>
          <div className={`container ${styles.videoInner}`}>
            <Reveal>
              <h2 className={`h2 ${styles.videoTitle}`}>
                See {partner.name} in action.
              </h2>
            </Reveal>
            <Reveal className={styles.video} delay={80}>
              <LiteVideo
                provider={partner.video.provider}
                id={partner.video.id}
                hash={partner.video.hash}
                title={`Watch the ${partner.name} story`}
              />
            </Reveal>
          </div>
        </section>
      )}

      <DonateForm partner={partner} />

      <section className={`section ${styles.how}`}>
        <div className="container">
          <Reveal>
            <h2 className={`h2 ${styles.howTitle}`}>How your donation helps.</h2>
          </Reveal>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 70} className={styles.step}>
                <span className={styles.num}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className={styles.faqLink}>
            <Link href="/for-donors" className="btn btn--ghost">
              Read donor FAQs
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
