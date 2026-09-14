"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, ArrowDown, Download } from "lucide-react";
import StampIcon from "./StampIcon";
import { LinkedInIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from "./icons";
import { socialLinks } from "@/data/social";
import { useLocale } from "@/lib/i18n";

const HeroMap = dynamic(() => import("./HeroMap"), { ssr: false });

export default function Hero() {
  const { t } = useLocale();

  const stats = [
    { value: "19+", label: t("hero.stat.years") },
    { value: "12", label: t("hero.stat.countries") },
    { value: "PT/ES", label: t("hero.stat.languages") },
  ];

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden px-6 pt-10 pb-10 sm:px-10 sm:pt-14 sm:pb-14 lg:px-16"
    >
      <HeroMap />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-muted) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          opacity: 0.08,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-gold/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold"
          >
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="font-display text-[2.75rem] leading-[1.04] font-extrabold tracking-tight text-text sm:text-[3.25rem] md:text-[3.75rem]"
          >
            Antonio (Paulo){" "}
            <span className="relative inline-block">
              Inguane
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9.5C40 2.5 160 2.5 198 9.5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            className="mt-5 text-lg font-medium text-text/90"
          >
            {t("hero.role")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-[1.65] text-muted"
          >
            {t("hero.summary")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#experiencia"
              className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold tracking-wide text-canvas transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-gold-hover active:translate-y-0"
            >
              {t("hero.cta.primary")}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-muted/30 px-6 text-sm font-semibold tracking-wide text-text transition-colors duration-150 hover:border-gold hover:text-gold"
            >
              {t("hero.cta.secondary")}
            </a>
            <a
              href="/cv-antonio-inguane.pdf"
              download
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-muted/30 px-6 text-sm font-semibold tracking-wide text-text transition-colors duration-150 hover:border-gold hover:text-gold"
            >
              <Download aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
              {t("hero.cta.cv")}
            </a>

            <div className="ml-1 flex items-center gap-2">
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
              >
                <Mail aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`https://wa.me/${socialLinks.whatsappNumber}?text=${encodeURIComponent(t("contact.whatsapp.message"))}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-muted/20 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="whitespace-nowrap font-display text-xl font-extrabold text-text sm:text-2xl">
                  {stat.value}
                </dd>
                <dd className="mt-0.5 text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 lg:py-0"
        >
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full text-gold/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="200"
              cy="200"
              r="192"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="1 11"
              strokeLinecap="round"
            />
          </motion.svg>

          <div className="relative aspect-square w-[88%] overflow-hidden rounded-full border-4 border-surface shadow-2xl shadow-black/25 ring-1 ring-muted/15">
            <Image
              src="/perfil.jpg"
              alt="Portrait of Antonio (Paulo) Inguane"
              fill
              sizes="(min-width: 1024px) 420px, 85vw"
              className="object-cover"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
            className="absolute bottom-2 left-2 rounded-2xl bg-surface p-2 shadow-xl shadow-black/25 ring-1 ring-muted/20 sm:bottom-4 sm:left-4"
          >
            <StampIcon code="MZ" label={t("country.mz")} size={76} />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label={t("hero.scrollDown")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mx-auto mt-14 hidden h-11 w-11 items-center justify-center rounded-full border border-muted/25 text-muted transition-colors duration-150 hover:border-gold hover:text-gold sm:flex"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
        </motion.span>
      </motion.a>
    </section>
  );
}
