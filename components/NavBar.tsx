"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";

const links = [
  { label: "how it works", href: "#how-it-works" },
  { label: "waitlist", href: "#waitlist" },
  { label: "community", href: "#community" },
  { label: "upcoming", href: "#upcoming" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          ink jam
        </a>

        <nav className={styles.links} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileLinks} aria-label="Primary mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
