import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.copy}>
        <h1 className={styles.headline}>Where writers grow</h1>

        <p className={styles.body}>
          Join weekly fast-paced writing jams, build your portfolio, and
          compete for top community spots. Connect with fellow authors, swap
          real feedback, and turn your craft into a habit &mdash; built for
          student writers who want to write more and grow together.
        </p>

        <a href="#waitlist" className={styles.cta}>
          Join the waitlist
        </a>
      </div>

      <div className={styles.blotWrap} aria-hidden="true">
        <div className={styles.blot} />
        <span className={`${styles.speck} ${styles.speck1}`} />
        <span className={`${styles.speck} ${styles.speck2}`} />
        <span className={`${styles.speck} ${styles.speck3}`} />
      </div>
    </section>
  );
}
