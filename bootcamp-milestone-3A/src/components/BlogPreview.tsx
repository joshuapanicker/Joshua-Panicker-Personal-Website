import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/app/blogData";
import styles from "./blogPreview.module.css";

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <Link href={`/blog/${slug}`} className={styles.blogLink}>
      <div className={styles.blogPost}>
        <h1 className={styles.blogTitle}>{title}</h1>
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={200}
          className={styles.blogImage}
          unoptimized
        />
        <p className={styles.blogDescription}>{description}</p>
        <p className={styles.blogDate}>Posted on {date}</p>
      </div>
    </Link>
  );
}

