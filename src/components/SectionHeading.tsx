"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "text" | "contact";
  icon?: LucideIcon;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "text",
  icon: Icon,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isContact = tone === "contact";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold tracking-[0.15em] uppercase ${
          isContact
            ? "border-[color:var(--contact-accent)]/30 bg-[color:var(--contact-accent)]/10 text-[color:var(--contact-accent)]"
            : "border-gold/25 bg-gold/10 text-gold"
        } ${isCenter ? "justify-center" : ""}`}
      >
        {Icon && <Icon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />}
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl ${
          isContact ? "text-[color:var(--contact-text)]" : "text-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base leading-[1.6] ${
            isContact ? "text-[color:var(--contact-text)]/85" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
