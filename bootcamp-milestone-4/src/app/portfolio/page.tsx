import React from "react";
import Image from "next/image";
import Link from "next/link";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import styles from "./page.module.css";

async function getProjects() {
  try {
    await connectDB();
    const projects = await Project.find().orFail();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  if (!projects) {
    return (
      <main>
        <div className={styles.heroSection}>
          <h1 className={styles.portfolioTitle}>
            <span className={styles.titleHighlight}>
              Joshua Panicker&apos;s Portfolio
            </span>
          </h1>
        </div>
        <p>No projects found. Please check your database connection.</p>
      </main>
    );
  }

  return (
    <main>
      <div className={styles.heroSection}>
        <h1 className={styles.portfolioTitle}>
          <span className={styles.titleHighlight}>
            Joshua Panicker&apos;s Portfolio
          </span>
        </h1>
        <p className={styles.portfolioSubtitle}></p>
      </div>

      <div className={styles.portfolioContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectCard} ${
              index === 0 ? styles.featured : ""
            }`}
          >
            <div className={styles.projectImageContainer}>
              <Image
                src={project.image}
                alt={project.image_alt}
                width={800}
                height={200}
                className={styles.projectImage}
                unoptimized
              />
            </div>
            <h2 className={styles.projectName}>{project.name}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech_stack.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              {project.link ? (
                project.link.startsWith("/") ? (
                  <Link
                    href={project.link}
                    className={`${styles.projectLink} ${styles.primary}`}
                  >
                    View Project
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    className={`${styles.projectLink} ${styles.primary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

