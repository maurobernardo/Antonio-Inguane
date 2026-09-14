"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Folder, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import { useLocale } from "@/lib/i18n";

const SectionMap = dynamic(() => import("./SectionMap"), { ssr: false });

export default function Projects() {
  const { t, locale } = useLocale();
  const [featured, ...rest] = projects;

  return (
    <section
      id="projetos"
      className="relative overflow-hidden border-b border-muted/20 bg-surface/40 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <SectionMap highlightCode="BR" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
          icon={Folder}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative col-span-1 flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-gold/15 via-surface to-surface ring-1 ring-gold/25 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/15 md:col-span-6 md:flex-row"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 -right-2 font-display text-[10rem] leading-none font-extrabold text-gold/[0.08] select-none"
            >
              01
            </span>

            <div className="relative flex w-full shrink-0 items-center justify-center border-b border-dashed border-gold/25 p-10 md:w-72 md:border-r md:border-b-0">
              <featured.icon
                aria-hidden="true"
                className="h-16 w-16 text-gold"
                strokeWidth={1.25}
              />
            </div>

            <div className="relative flex flex-1 flex-col justify-center gap-3 p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.1em] text-gold uppercase">
                {featured.org}
              </p>
              <h3 className="font-display text-xl font-extrabold text-text sm:text-2xl">
                {featured.title[locale]}
              </h3>
              <p className="max-w-2xl text-sm leading-[1.65] text-muted">
                {featured.description[locale]}
              </p>
              <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
                {featured.tag[locale]}
              </span>
            </div>
          </motion.div>

          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
              className={`group relative col-span-1 flex flex-col overflow-hidden rounded-2xl p-6 ring-1 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/10 md:col-span-3 lg:col-span-2 ${
                i % 2 === 0
                  ? "bg-surface ring-muted/15 hover:ring-gold/30"
                  : "bg-surface/60 ring-muted/15 hover:ring-gold/30"
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 -right-1 font-display text-6xl font-extrabold text-muted/[0.07] select-none"
              >
                {String(i + 2).padStart(2, "0")}
              </span>

              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                <project.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>

              <p className="relative mt-4 text-xs font-semibold tracking-[0.1em] text-gold uppercase">
                {project.org}
              </p>
              <h3 className="relative mt-1 font-display text-base font-bold text-text">
                {project.title[locale]}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-[1.6] text-muted">
                {project.description[locale]}
              </p>
              <span className="relative mt-4 inline-flex w-fit rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold">
                {project.tag[locale]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
