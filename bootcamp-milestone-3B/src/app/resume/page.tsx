import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Resume() {
  return (
    <main>
      <div className={styles.heroSection}>
        <h1 className={styles.resumeTitle}>
          <span className={styles.titleHighlight}>Joshua Panicker&apos;s Resume</span>
        </h1>
        <a
          href="/Joshua_Panicker_Resume.pdf"
          download
          className={styles.downloadResumeBtn}
        >
          Download Resume
        </a>
      </div>

      <div className={styles.resumeTabs}>
        <a href="#education" className={styles.tabBtn}>
          Education
        </a>
        <a href="#skills" className={styles.tabBtn}>
          Skills
        </a>
        <a href="#experience" className={styles.tabBtn}>
          Experience
        </a>
        <a href="#projects" className={styles.tabBtn}>
          Projects
        </a>
        <a href="#coursework" className={styles.tabBtn}>
          Coursework
        </a>
      </div>

      <div className={styles.resumeSection} id="education">
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>
            Bachelor of Science in Computer Science
          </h3>
          <p className={styles.cardSubtitle}>
            California Polytechnic State University, San Luis Obispo
          </p>
          <p className={styles.cardDate}>Expected Graduation May 2029</p>
        </div>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>High School Diploma</h3>
          <p className={styles.cardSubtitle}>
            Archbishop Mitty High School, San Jose
          </p>
          <p className={styles.cardDate}>Graduation May 2025</p>
        </div>
      </div>

      <div className={styles.resumeSection} id="skills">
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Programming Languages</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Java</span>
              <span className={styles.skillTag}>C++</span>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>HTML</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Design & Tools</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Figma</span>
              <span className={styles.skillTag}>Canva</span>
              <span className={styles.skillTag}>Framer</span>
              <span className={styles.skillTag}>WordPress</span>
              <span className={styles.skillTag}>Adobe Photoshop</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Development</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Git</span>
              <span className={styles.skillTag}>Web Development</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.resumeSection} id="experience">
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>Code Coach</h3>
          <p className={styles.cardSubtitle}>theCoderSchool, South Bay</p>
          <p className={styles.cardDate}>Sept 2024 - Jan 2025</p>
          <p className={styles.cardDescription}>
            Mentored and taught kids (7-11yrs) how to code using Scratch and
            Python
          </p>
        </div>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>Tutor</h3>
          <p className={styles.cardSubtitle}>Code For Fun Non-profit</p>
          <p className={styles.cardDate}>July 2024</p>
          <p className={styles.cardDescription}>
            Taught a summer-camp class of 10 students (5-12yrs) how to code with
            Scratch and Python. Created lesson plans, assisted with assignments,
            provided 1:1 debugging support, and helped create interactive coding
            projects per curriculum
          </p>
        </div>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>Volunteer</h3>
          <p className={styles.cardSubtitle}>Atria Senior Living Center</p>
          <p className={styles.cardDate}>Sept 2023 - Jan 2025</p>
          <p className={styles.cardDescription}>
            Founded a weekly tech class for seniors. Conducted surveys to tailor
            instruction. Assisted with troubleshooting electronic devices,
            demonstrated social media skills, and created comprehensive How-to
            guides
          </p>
        </div>
      </div>

      <div className={styles.resumeSection} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>Independent Programming Projects</h3>
          <p className={styles.cardDescription}>
            Different independent programming projects which can be accessed
            below
          </p>
          <a
            href="https://github.com/joshuapanicker"
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>Personal Website</h3>
          <p className={styles.cardDescription}>
            Designed and built a personal website using HTML
          </p>
          <Link href="/" className={styles.projectLink}>
            View Website
          </Link>
        </div>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>Virtual Tour Host Website</h3>
          <p className={styles.cardDescription}>
            Designed and built a website for Santa Clara University using
            WordPress. This website hosts the university&apos;s virtual tours
          </p>
          <a
            href="https://scutours.com/"
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </div>
        <div className={styles.resumeCard}>
          <h3 className={styles.cardTitle}>
            Uber Virtual Global Hackathon Project
          </h3>
          <p className={styles.cardDescription}>
            Product design for Uber which helps maximize accessibility for
            differently abled users. Applications Utilized: Figma, Canva
          </p>
          <a
            href="https://www.youtube.com/watch?v=O6xAWTcFRKA&t=1s"
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Video
          </a>
        </div>
      </div>

      <div className={styles.resumeSection} id="coursework">
        <h2 className={styles.sectionTitle}>Coursework</h2>
        <div className={styles.courseworkSection}>
          <h3 className={styles.categoryTitle}>
            Dual Enrollment College Coursework
          </h3>
          <div className={styles.courseList}>
            <div className={styles.courseItem}>
              Intro to Computer Programming Using JAVA - De Anza College
            </div>
            <div className={styles.courseItem}>
              Beginning Programming Methodologies in C++ - De Anza College
            </div>
            <div className={styles.courseItem}>
              Intermediate Problem Solving Java - De Anza College
            </div>
            <div className={styles.courseItem}>
              Python Programming - De Anza College
            </div>
            <div className={styles.courseItem}>
              Discrete Mathematics - Foothill College
            </div>
          </div>
        </div>
        <div className={styles.courseworkSection}>
          <h3 className={styles.categoryTitle}>
            Currently-Enrolled College Coursework
          </h3>
          <div className={styles.courseList}>
            <div className={styles.courseItem}>
              Data Structures - California Polytechnic University San Luis
              Obispo
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

