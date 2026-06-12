"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";
import { Menu, Close, Phone, ArrowUpRight } from "./icons";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Rendered into <body> via a portal so the menu is never inside the
  // backdrop-filtered header (which would otherwise become its containing
  // block and collapse it, letting page content show through on mobile).
  const panel = (
    <div className={`${styles.mobilePanel} ${open ? styles.panelOpen : ""}`}>
      <nav className={styles.mobileNav} aria-label="Mobile">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </nav>
      <div className={styles.mobileFooter}>
        <a href={`tel:${site.phoneHref}`} className={styles.mobilePhone}>
          <Phone /> {site.phone}
        </a>
        <Link href="/#donate" className="btn btn--primary" onClick={() => setOpen(false)}>
          Donate Now
        </Link>
      </div>
    </div>
  );

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        open ? styles.menuActive : ""
      }`}
    >
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href={`tel:${site.phoneHref}`}
            className={styles.phone}
            aria-label={`Call ${site.phone}`}
          >
            <Phone />
            <span>{site.phone}</span>
          </a>
          <Link href="/#donate" className={`btn btn--primary ${styles.cta}`}>
            Donate Now
            <span className="btn__arrow" aria-hidden="true">
              <ArrowUpRight size={13} />
            </span>
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {mounted ? createPortal(panel, document.body) : null}
    </header>
  );
}
