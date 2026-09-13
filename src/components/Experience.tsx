"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";
import { useLocale } from "@/lib/i18n";

export default function Experience() {
  const { t } = useLocale();
  const rows = Math.ceil(experience.length / 2);

  return (
    <section
      id="experiencia"
      className="border-b border-muted/20 bg-surface/40 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
          icon={Briefcase}
        />

        <div className="relative mt-10">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent sm:block"
          />

          {Array.from({ length: rows }).map((_, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="absolute left-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-canvas shadow-lg shadow-black/20 ring-4 ring-surface/40 sm:flex"
              style={{ top: `${((i + 0.5) / rows) * 100}%` }}
            >
              <Briefcase aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
            </motion.span>
          ))}

          <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-6">
            {experience.map((item, index) => (
              <TimelineItem
                key={`${item.org}-${item.start}`}
                item={item}
                index={index}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
