import React from 'react';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How it works</h2>

        {/* SVG Curved Flow Arrows */}
        <svg
          className={styles.connectorsSvg}
          viewBox="0 0 1000 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrowhead"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1a1a1a" />
            </marker>
          </defs>

          {/* Curve 1: the jam drops -> start writing */}
          <path
            d="M 120 160 C 120 200, 215 220, 215 280"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Curve 2: start writing -> submit & compete */}
          <path
            d="M 250 310 C 250 380, 395 390, 395 440"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* Curve 3: submit & compete <- get feedback */}
          <path
            d="M 415 440 C 415 390, 565 380, 565 310"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Curve 4: get feedback -> win recognition */}
          <path
            d="M 585 310 C 585 380, 835 390, 835 440"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        {/* Floating Tilted Cards */}
        <div className={`${styles.card} ${styles.cardTopLeft}`} aria-hidden="true" />
        <div className={`${styles.card} ${styles.cardBottomLeft}`} aria-hidden="true" />
        <div className={`${styles.card} ${styles.cardTopRight}`} aria-hidden="true" />

        {/* Step Labels */}
        <div className={styles.flowContainer}>
          <div className={`${styles.step} ${styles.step1}`}>
            <span className={styles.label}>the jam drops</span>
          </div>

          <div className={`${styles.step} ${styles.step2}`}>
            <span className={styles.label}>start writing</span>
          </div>

          <div className={`${styles.step} ${styles.step3}`}>
            <span className={styles.label}>submit &amp; compete</span>
          </div>

          <div className={`${styles.step} ${styles.step4}`}>
            <span className={styles.label}>get feedback</span>
          </div>

          <div className={`${styles.step} ${styles.step5}`}>
            <span className={styles.label}>win recognition</span>
          </div>
        </div>
      </div>
    </section>
  );
}