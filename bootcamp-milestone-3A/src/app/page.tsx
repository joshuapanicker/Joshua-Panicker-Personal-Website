import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroCard}>
              <h1 className={styles.heroGreeting}>Hi, I am</h1>
              <h2 className={styles.heroName}>Joshua Panicker</h2>
              <h3 className={styles.heroTitle}>Computer Science Student</h3>
              <p className={styles.heroDescription}>
                First year computer science major at Cal Poly San Luis Obispo.
              </p>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <Image
                src="/isthatme.PNG"
                alt="Joshua Panicker"
                fill
                className={styles.profileImage}
                priority
                unoptimized
                style={{ objectFit: "cover", objectPosition: "center 50%" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.scrollButtons}>
          <a href="#scroll-target" className={styles.scrollBtn}>
            <div className={styles.scrollArrow}>
              <div className={styles.scrollArrowLine}></div>
              <div className={styles.scrollArrowHead}></div>
            </div>
            <span>Let&apos;s Connect</span>
          </a>
          <a href="#about" className={styles.scrollBtn}>
            <div className={styles.scrollArrow}>
              <div className={styles.scrollArrowLine}></div>
              <div className={styles.scrollArrowHead}></div>
            </div>
            <span>About Me</span>
          </a>
        </div>
      </section>

      <div id="scroll-target"></div>

      <div className={styles.connectCard}>
        <h3 className={styles.cardTitle}>Let&apos;s Connect</h3>
        <p className={styles.cardDescription}>
          Explore my work and get in touch with me!
        </p>
        <div className={styles.heroButtons}>
          <Link href="/portfolio" className={styles.btnPrimary}>
            View My Work
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Get In Touch
          </Link>
        </div>
      </div>

      <div className={styles.spacerSection}></div>

      <section className={styles.aboutSection} id="about">
        <div className={styles.container}>
          <div className={styles.aboutCard}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  Hey, my name is Joshua Panicker but I also go by Josh! I am
                  originally from San Jose, California. I am a first year
                  computer science major at Cal Poly San Luis Obispo.
                </p>
                <p>
                  I&apos;m passionate about technology and always eager to learn
                  new things. You can check out my blog, portfolio, and resume
                  to learn more about me!
                </p>
                <div className={styles.aboutLinks}>
                  <Link href="/blog" className={styles.aboutLink}>
                    Read My Blog
                  </Link>
                  <Link href="/resume" className={styles.aboutLink}>
                    View Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
