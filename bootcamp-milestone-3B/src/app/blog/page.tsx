import React from "react";
import BlogPreview from "@/components/BlogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import styles from "./page.module.css";

async function getBlogs() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <main>
        <h1 className={styles.blogTitle}>Joshua Panicker&apos;s blog</h1>
        <p>No blogs found. Please check your database connection.</p>
      </main>
    );
  }

  return (
    <main>
      <h1 className={styles.blogTitle}>Joshua Panicker&apos;s blog</h1>
      <div className={styles.blogContainer}>
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={blog.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.image_alt}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}

