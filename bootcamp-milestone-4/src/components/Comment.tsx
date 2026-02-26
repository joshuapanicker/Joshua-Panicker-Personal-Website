import React from "react";
import type { IComment } from "@/database/blogSchema";
import styles from "./comment.module.css";

type CommentProps = {
  comment: IComment;
  variant?: "default" | "redesign";
};

function parseCommentTime(time: Date | string): string {
  const date = typeof time === 'string' ? new Date(time) : new Date(time);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;

  return `${month} ${day} ${year} ${hours}:${minutesStr}${ampm}`;
}

function Comment({ comment, variant = "default" }: CommentProps) {
  if (variant === "redesign") {
    return (
      <div className="p-5 bg-card/60 border border-border rounded-none border-l-4 border-l-primary">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h4 className="text-base font-semibold text-primary">{comment.user}</h4>
          <span className="text-xs font-mono text-gray-500">
            {parseCommentTime(comment.time)}
          </span>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{comment.comment}</p>
      </div>
    );
  }
  return (
    <div className={styles.comment}>
      <h4 className={styles.commentUser}>{comment.user}</h4>
      <p className={styles.commentText}>{comment.comment}</p>
      <span className={styles.commentTime}>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;


