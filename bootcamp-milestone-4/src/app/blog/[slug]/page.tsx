import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import CommentSection from "@/components/CommentSection";
import RedesignFooter from "@/components/redesign/Footer";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlog(slug: string) {
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    const blogObj = blog.toObject();
    const serializedComments = (blogObj.comments || []).map((comment: { user: string; comment: string; time: Date }) => ({
      user: comment.user,
      comment: comment.comment,
      time: comment.time instanceof Date ? comment.time.toISOString() : comment.time,
    }));
    const heroPreview = "/portfolio-hero-preview.png";
    const image = slug === "my-portfolio-building-journey" ? heroPreview : blogObj.image;
    return {
      ...blogObj,
      image,
      comments: serializedComments,
    };
  } catch {
    return null;
  }
}

const helvetica = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="relative z-10 container mx-auto px-8 py-20 max-w-4xl">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-primary/80 hover:text-primary tracking-widest uppercase mb-10 transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Blog
          </Link>

          <article className="futuristic-card border border-border bg-card/40 overflow-hidden">
            <header className="p-8 md:p-12 border-b border-border">
              <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">
                Article
              </p>
              <h1
                className="text-4xl md:text-5xl font-sans font-black text-foreground leading-tight mb-4 tracking-[-0.02em]"
                style={helvetica}
              >
                {blog.title}
              </h1>
              <p className="text-base text-gray-400">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </header>

            <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-card">
              <Image
                src={blog.image}
                alt={blog.image_alt}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 896px"
                unoptimized
              />
            </div>

            <div
              className="p-8 md:p-12 prose prose-invert prose-lg max-w-none
                prose-headings:font-sans prose-headings:font-black prose-headings:text-foreground
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-li:text-gray-300"
              style={{ fontFamily: helvetica.fontFamily }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="border-t border-border p-8 md:p-12">
              <CommentSection slug={slug} comments={blog.comments || []} variant="redesign" />
            </div>
          </article>
        </div>
      </main>
      <RedesignFooter />
    </>
  );
}
