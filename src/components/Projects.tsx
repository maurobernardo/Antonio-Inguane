"use client";

import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import { useLocale } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLocale();

  return (
    <section
      id="projetos"
      className="border-b border-muted/20 bg-surface/40 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
          icon={Folder}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-muted/15 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/10 hover:ring-gold/30"
            >
              <div className="flex aspect-[16/10] items-center justify-center border-b border-dashed border-muted/25 bg-gold/5">
                <project.icon
                  aria-hidden="true"
                  className="h-9 w-9 text-gold/40"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-xs font-semibold tracking-[0.1em] text-gold uppercase">
                  {t("projects.placeholder.org")}
                </p>
                <h3 className="font-display text-lg font-bold text-text">
                  {t("projects.placeholder.title")}
                </h3>
                <p className="text-sm leading-[1.6] text-muted italic">
                  {t("projects.placeholder.desc")}
                </p>
                <span className="mt-2 inline-flex w-fit rounded-full border border-dashed border-muted/30 px-2.5 py-0.5 text-xs font-medium text-muted">
                  {t("projects.placeholder.tag")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
