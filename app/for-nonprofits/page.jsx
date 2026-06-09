import Link from "next/link";
import Reveal from "@/components/Reveal";
import PartnerSignupForm from "@/components/PartnerSignupForm";
import { site } from "@/lib/site";
import { Check, ArrowRight } from "@/components/icons";
import shell from "../page-shell.module.css";
import styles from "./for-nonprofits.module.css";

export const metadata = {
  title: "For Non-Profits",
  description:
    "Partner with Helping Hands Charity Services. We run a turnkey vehicle donation program plus digital advertising, website creation, SEO, and marketing materials, returning an industry-leading share of proceeds to your nonprofit.",
  alternates: { canonical: "/for-nonprofits" },
  openGraph: {
    title: `For Non-Profits · ${site.name}`,
    description: "A turnkey vehicle donation program built for nonprofits.",
    url: `${site.url}/for-nonprofits`,
  },
};

const highlights = [
  "A donor experience that cannot be beaten.",
  "An industry-leading share of proceeds returned to your nonprofit.",
  "Help modernizing and running your digital advertising strategy.",
  "Website creation, refresh, and SEO support.",
  "Physical marketing materials to support your campaigns.",
];

const services = [
  {
    title: "Car Donations",
    body: "A turnkey vehicle donation program. We take the calls, price competitively across a nationwide network of buyers, arrange free pickup, handle the sale and IRS paperwork, and send your nonprofit the largest possible share of the proceeds.",
  },
  {
    title: "Online Ads",
    body: "We help our partners modernize and run their digital advertising, from search to social, so the right donors find your cause and your vehicle donation program grows.",
  },
  {
    title: "Website Creation & SEO",
    body: "Need a new site, a refresh, or better search rankings? We help partners build and improve their websites and SEO, and we create physical marketing materials to round out your outreach.",
  },
];

export default function ForNonprofitsPage() {
  return (
    <>
      <section className={shell.intro}>
        <div className={shell.glow} aria-hidden="true" />
        <div className={shell.glowLeft} aria-hidden="true" />
        <div className={`container ${shell.introInner}`}>
          <p className={shell.kicker}>For non-profits</p>
          <h1 className={shell.h1}>A partner, not just a program.</h1>
          <p className={`lead ${shell.lead}`}>
            We run your vehicle donation program end to end, and we help you grow
            with advertising, websites, SEO, and marketing materials. More
            proceeds, less work, a better donor experience.
          </p>
          <div className={styles.heroCtas}>
            <Link href="#apply" className="btn btn--primary">
              Become a partner
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className={`section ${styles.highlightsWrap}`}>
        <div className="container">
          <Reveal>
            <h2 className={`h2 ${styles.sectionTitle}`}>
              What partnering with HHCS means.
            </h2>
          </Reveal>
          <ul className={styles.highlights}>
            {highlights.map((h, i) => (
              <Reveal as="li" key={h} delay={(i % 3) * 80} className={styles.highlight}>
                <span className={styles.tick} aria-hidden="true">
                  <Check size={14} />
                </span>
                {h}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.servicesWrap}`}>
        <div className="container">
          <Reveal>
            <h2 className={`h2 ${styles.sectionTitle}`}>How we help.</h2>
          </Reveal>
          <div className={styles.services}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className={styles.service}>
                <span className={styles.serviceNum}>{`0${i + 1}`}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceBody}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className={`section ${styles.applyWrap}`}>
        <div className={`container ${styles.apply}`}>
          <div className={styles.applyCopy}>
            <h2 className={`h2 ${styles.applyTitle}`}>Apply to partner.</h2>
            <p className={styles.applyBody}>
              Tell us a little about your organization and we will take it from
              there, including setting up your dedicated donation page. You will
              need to certify that you are a registered 501(c)(3).
            </p>
            <p className={styles.applyBody}>
              Questions first? Call {site.phone} or email{" "}
              <a className={styles.inlineLink} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <Link href="/share-your-story" className={styles.storyLink}>
              Already a partner? Share your story with HHCS
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className={styles.applyCard}>
            <PartnerSignupForm />
          </div>
        </div>
      </section>
    </>
  );
}
