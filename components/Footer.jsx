import Link from "next/link";
import Logo from "./Logo";
import { site, footerNav } from "@/lib/site";
import { Instagram, Facebook, ArrowUpRight } from "./icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.cta}>
          <h2 className={`h2 ${styles.ctaTitle}`}>
            Turn a parked car into real impact.
          </h2>
          <Link href="/#donate" className={`btn btn--accent ${styles.ctaBtn}`}>
            Start your donation
            <span className="btn__arrow" aria-hidden="true">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Logo tone="light" />
            <p className={styles.blurb}>
              A vehicle donation program returning the largest possible share of
              proceeds to the causes you care about.
            </p>
            <div className={styles.socials}>
              <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
            </div>
          </div>

          <nav className={styles.linksCol} aria-label="Footer">
            <h3 className={styles.colTitle}>Explore</h3>
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.footLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Get in touch</h3>
            <a href={`tel:${site.phoneHref}`} className={styles.footLink}>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className={styles.footLink}>
              {site.email}
            </a>
            <address className={styles.address}>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
