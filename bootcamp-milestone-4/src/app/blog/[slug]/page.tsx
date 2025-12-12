import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import styles from "./page.module.css";
import CommentSection from "@/components/CommentSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlog(slug: string) {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    // Convert Mongoose document to plain object for client component serialization
    const blogObj = blog.toObject();
    // Ensure comments are properly serialized
    const serializedComments = (blogObj.comments || []).map((comment: any) => ({
      user: comment.user,
      comment: comment.comment,
      time: comment.time instanceof Date ? comment.time.toISOString() : comment.time,
    }));
    return {
      ...blogObj,
      comments: serializedComments,
    };
  } catch (err) {
    return null;
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <div className={styles.blogPage}>
        <h1 className={styles.blogPageTitle}>{blog.title}</h1>
        <p className={styles.blogPageDate}>
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <Image
          src={blog.image}
          alt={blog.image_alt}
          width={800}
          height={300}
          className={styles.blogPageImage}
          unoptimized
        />
        <div
          className={styles.blogPageContent}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <CommentSection slug={slug} comments={blog.comments || []} />
      </div>
    </main>
  );
}

