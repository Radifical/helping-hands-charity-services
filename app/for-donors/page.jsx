import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import { donorFaqGroups } from "@/lib/faqs";
import { site } from "@/lib/site";
import { Check, ArrowUpRight, ArrowRight } from "@/components/icons";
import shell from "../page-shell.module.css";
import styles from "./for-donors.module.css";

export const metadata = {
  title: "For Donors",
  description:
    "Everything you need to donate a car to charity: how it works, free pickup, title and DMV questions, and tax deductions. Answers from Helping Hands Charity Services.",
  alternates: { canonical: "/for-donors" },
  openGraph: {
    title: `For Donors · ${site.name}`,
    description: "How vehicle donation works, free pickup, and tax deductions.",
    url: `${site.url}/for-donors`,
  },
};

const benefits = [
  "Donating is easy and the pickup is always free.",
  "Skip the cost and hassle of advertising, repairs, and insurance to sell.",
  "Free up space and stop paying for extra parking or registration.",
  "It beats a low trade-in offer.",
  "Vehicle donations are tax-deductible when you itemize.",
  "Your gift makes a real difference for a cause you choose.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: donorFaqGroups.flatMap((g) =>
    g.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    }))
  ),
};

export default function ForDonorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className={shell.intro}>
        <div className={shell.glow} aria-hidden="true" />
        <div className={`container ${shell.introInner}`}>
          <p className={shell.kicker}>For donors</p>
          <h1 className={shell.h1}>Donating a car, made simple.</h1>
          <p className={`lead ${shell.lead}`}>
            Pick a nonprofit, tell us about your vehicle, and we handle the rest:
            free pickup, the sale, the proceeds, and your tax paperwork. Here is
            everything you might want to know.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/nonprofits" className="btn btn--primary">
              Choose a nonprofit
              <span className="btn__arrow" aria-hidden="true">
                <ArrowUpRight size={13} />
              </span>
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn btn--glass">
              Or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className={`section ${styles.benefitsWrap}`}>
        <div className={`container ${styles.benefitsLayout}`}>
          <div>
            <Reveal>
              <h2 className={`h2 ${styles.benefitsTitle}`}>
                Why donate your vehicle?
              </h2>
            </Reveal>
            <ul className={styles.benefits}>
              {benefits.map((b, i) => (
                <Reveal as="li" key={b} delay={(i % 3) * 80} className={styles.benefit}>
                  <span className={styles.tick} aria-hidden="true">
                    <Check size={14} />
                  </span>
                  {b}
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className={styles.benefitsPhoto} delay={120}>
            <Image
              src="/people/adopt-dog.jpg"
              alt="A rescue dog meeting a visitor at an animal shelter"
              fill
              quality={90}
              sizes="(max-width: 900px) 100vw, 480px"
              className={styles.benefitsPhotoImg}
            />
          </Reveal>
        </div>
      </section>

      <section id="faqs" className={`section ${styles.faqWrap}`}>
        <div className={`container ${styles.faqInner}`}>
          <Reveal className={styles.faqHead}>
            <h2 className="h2">Donor FAQs.</h2>
            <p className={`lead ${styles.faqLead}`}>
              Still have a question? Call us at{" "}
              <a className={styles.inlineLink} href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>{" "}
              any day of the week.
            </p>
          </Reveal>
          <FAQAccordion groups={donorFaqGroups} />
        </div>
      </section>

      <section className={`section ${styles.storyWrap}`}>
        <div className={`container ${styles.story}`}>
          <div>
            <h2 className={`h2 ${styles.storyTitle}`}>Donated before?</h2>
            <p className={styles.storyBody}>
              We would love to hear how it went. Share your story and help the
              next donor give with confidence.
            </p>
          </div>
          <Link href="/share-your-story" className="btn btn--accent">
            Share your story with HHCS
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
