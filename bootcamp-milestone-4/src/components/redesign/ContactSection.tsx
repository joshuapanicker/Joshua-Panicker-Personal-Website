"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "../ScrollReveal";
import SubtleBackground from "../SubtleBackground";

const helvetica = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "joshua.panicker@gmail.com",
    href: "mailto:joshua.panicker@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/joshuapanicker",
    href: "https://linkedin.com/in/joshuapanicker",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/joshuapanicker",
    href: "https://github.com/joshuapanicker",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formStatusMessage, setFormStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus("error");
      setFormStatusMessage("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("error");
      setFormStatusMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");
    setFormStatusMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please set up your environment variables."
        );
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      setFormStatus("success");
      setFormStatusMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unknown error occurred";
      setFormStatus("error");
      setFormStatusMessage(`Failed to send message: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-background">
      <SubtleBackground />
      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-20">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">
              // GET IN TOUCH
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <ScrollReveal delay={0.08}>
              <h2
                className="text-6xl md:text-8xl font-sans font-normal text-foreground leading-none mb-6 uppercase tracking-[0.05em]"
                style={helvetica}
              >
                Get In Touch
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.18}>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-primary/50" />
              <p className="text-lg text-gray-400 max-w-2xl">
                Have a project in mind or just want to chat? Feel free to reach
                out!
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <Card className="futuristic-card p-8 bg-card border-border h-full">
              <h3 className="text-2xl font-sans font-black text-foreground mb-6 tracking-[-0.01em]">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-normal text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-normal text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-normal text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className="bg-background border-border text-foreground focus:border-primary focus:ring-primary resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {formStatus === "success" && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary">{formStatusMessage}</p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm text-destructive">
                      {formStatusMessage}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal py-6"
                >
                  <Send className="mr-2" size={20} strokeWidth={1.5} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.1}>
              <Card className="futuristic-card p-8 bg-card border-border">
                <h3 className="text-2xl font-sans font-black text-foreground mb-6 tracking-[-0.01em]">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-10% 0px" }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <link.icon
                          className="text-primary"
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <p className="text-base font-normal text-foreground mb-1">
                          {link.label}
                        </p>
                        <p className="text-sm text-gray-400 group-hover:text-primary transition-colors duration-300">
                          {link.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <Card className="p-8 bg-gradient-1 border-primary/50">
                <h3 className="text-xl font-sans font-black text-foreground mb-3 tracking-[-0.01em]">
                  Let&apos;s Work Together
                </h3>
                <p className="text-base text-gray-100" style={helvetica}>
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I&apos;ll try my best to get back to you!
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
