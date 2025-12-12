"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // EmailJS configuration
      // These values should be set in environment variables for production
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      console.log("EmailJS Config:", {
        serviceId: serviceId ? "✓ Set" : "✗ Missing",
        templateId: templateId ? "✓ Set" : "✗ Missing",
        publicKey: publicKey ? "✓ Set" : "✗ Missing",
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please set up your environment variables."
        );
      }

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      console.log("EmailJS Response:", result);

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      const errorMessage = error?.text || error?.message || "Unknown error occurred";
      setSubmitStatus({
        type: "error",
        message: `Failed to send message: ${errorMessage}. Please check the browser console for details.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <h1 className={styles.contactTitle}>Joshua Panicker&apos;s contact</h1>
      <form
        id="contact-form"
        className={styles.contactForm}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          rows={6}
        ></textarea>

        {submitStatus.type && (
          <div
            className={
              submitStatus.type === "success"
                ? styles.successMessage
                : styles.errorMessage
            }
          >
            {submitStatus.message}
          </div>
        )}

        <input
          type="submit"
          value={isSubmitting ? "Sending..." : "Submit"}
          disabled={isSubmitting}
        />
      </form>
    </main>
  );
}
