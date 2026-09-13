"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, MapPin, MessageCircle } from "lucide-react";
import { LinkedInIcon, XIcon } from "./icons";
import { socialLinks } from "@/data/social";
import SectionHeading from "./SectionHeading";
import { useLocale } from "@/lib/i18n";

type FieldName = "name" | "email" | "message";

type FormState = Record<FieldName, string>;
type ErrorState = Partial<Record<FieldName, string>>;

const initialState: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const { t } = useLocale();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function validateField(name: FieldName, value: string): string | undefined {
    if (name === "name") {
      if (!value.trim()) return t("contact.error.name");
    }
    if (name === "email") {
      if (!value.trim()) return t("contact.error.email");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) return t("contact.error.emailInvalid");
    }
    if (name === "message") {
      if (!value.trim()) return t("contact.error.message");
      if (value.trim().length < 10) return t("contact.error.messageShort");
    }
    return undefined;
  }

  function handleBlur(name: FieldName) {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((e) => ({ ...e, [name]: validateField(name, form[name]) }));
  }

  function handleChange(name: FieldName, value: string) {
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      setErrors((e) => ({ ...e, [name]: validateField(name, value) }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fields: FieldName[] = ["name", "email", "message"];
    const nextErrors: ErrorState = {};
    fields.forEach((f) => {
      const err = validateField(f, form[f]);
      if (err) nextErrors[f] = err;
    });
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  }

  return (
    <section id="contato" className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[color:var(--contact-bg)] px-6 py-12 ring-1 ring-[color:var(--contact-form-border)] sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--contact-glow-1)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[color:var(--contact-glow-2)] blur-3xl"
        />

        <div className="relative grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t("contact.eyebrow")}
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
              tone="contact"
              icon={MessageCircle}
            />

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl px-3 -ml-3 text-sm font-medium text-[color:var(--contact-text)] transition-colors duration-150 hover:bg-[color:var(--contact-accent)]/10"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--contact-accent)]/15 text-[color:var(--contact-accent)]">
                  <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                </span>
                {socialLinks.email}
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl px-3 -ml-3 text-sm font-medium text-[color:var(--contact-text)] transition-colors duration-150 hover:bg-[color:var(--contact-accent)]/10"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--contact-accent)]/15 text-[color:var(--contact-accent)]">
                  <LinkedInIcon className="h-4 w-4" />
                </span>
                LinkedIn
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl px-3 -ml-3 text-sm font-medium text-[color:var(--contact-text)] transition-colors duration-150 hover:bg-[color:var(--contact-accent)]/10"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--contact-accent)]/15 text-[color:var(--contact-accent)]">
                  <XIcon className="h-4 w-4" />
                </span>
                X (Twitter)
              </a>
              <div className="inline-flex min-h-[44px] items-center gap-3 px-3 -ml-3 text-sm font-medium text-[color:var(--contact-text)]">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--contact-accent)]/15 text-[color:var(--contact-accent)]">
                  <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                </span>
                {t("contact.location")}
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 rounded-2xl border border-[color:var(--contact-form-border)] bg-[color:var(--contact-form-bg)] p-6 shadow-xl shadow-black/10 backdrop-blur-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[color:var(--contact-text)]"
              >
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="mt-2 w-full min-h-[44px] rounded-xl border border-[color:var(--contact-input-border)] bg-[color:var(--contact-input-bg)] px-4 py-2 text-base text-[color:var(--contact-text)] outline-none focus-visible:border-[color:var(--contact-accent)]"
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1.5 text-xs font-medium text-[color:var(--contact-accent-hover)]"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[color:var(--contact-text)]"
              >
                {t("contact.form.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="mt-2 w-full min-h-[44px] rounded-xl border border-[color:var(--contact-input-border)] bg-[color:var(--contact-input-bg)] px-4 py-2 text-base text-[color:var(--contact-text)] outline-none focus-visible:border-[color:var(--contact-accent)]"
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1.5 text-xs font-medium text-[color:var(--contact-accent-hover)]"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[color:var(--contact-text)]"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="mt-2 w-full min-h-[120px] rounded-xl border border-[color:var(--contact-input-border)] bg-[color:var(--contact-input-bg)] px-4 py-2 text-base text-[color:var(--contact-text)] outline-none focus-visible:border-[color:var(--contact-accent)]"
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1.5 text-xs font-medium text-[color:var(--contact-accent-hover)]"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[color:var(--contact-accent)] px-7 text-sm font-semibold tracking-wide text-canvas transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--contact-accent-hover)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" && (
                <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              )}
              {status === "sent"
                ? t("contact.form.sent")
                : status === "submitting"
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
            </button>

            <div aria-live="polite" className="sr-only">
              {status === "sent" && t("contact.form.sentAria")}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
