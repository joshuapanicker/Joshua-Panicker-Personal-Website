"use client";

import React, { useState } from "react";
import type { IComment } from "@/database/blogSchema";
import Comment from "./Comment";
import styles from "./commentSection.module.css";

interface CommentSectionProps {
  slug: string;
  comments: IComment[];
}

export default function CommentSection({ slug, comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<IComment[]>(initialComments);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.trim() || !comment.trim()) {
      alert("Please fill in both fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/blogs/${slug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setUser("");
        setComment("");
        alert(data.message ?? "Thanks! Your comment has been submitted for moderation and will appear after review.");
      } else {
        alert(data.error ?? "Failed to submit comment");
      }
    } catch (err) {
      alert("Error submitting comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.commentSection}>
      <h2 className={styles.commentTitle}>Comments</h2>
      
      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <div className={styles.formGroup}>
          <label htmlFor="user" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="comment" className={styles.label}>
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={styles.textarea}
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? "Submitting..." : "Submit Comment"}
        </button>
      </form>

      <div className={styles.commentsList}>
        {comments.length === 0 ? (
          <p className={styles.noComments}>No comments yet. Comments are held for moderation—submit one and it will be emailed to the author for review.</p>
        ) : (
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}

