import React from "react";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main>
      <h1 className={styles.contactTitle}>Joshua Panicker&apos;s contact</h1>
      <form id="contact-form" className={styles.contactForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}

