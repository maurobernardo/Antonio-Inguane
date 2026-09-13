"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";
import { useLocale } from "@/lib/i18n";

export default function SkillGrid() {
  const { t } = useLocale();

  return (
    <section
      id="especializacao"
      className="border-b border-muted/20 bg-surface/40 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
          icon={Target}
        />

        <ul className="mt-12 divide-y divide-muted/15 border-t border-muted/15">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.li
                key={skill.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (i % 6) * 0.05 }}
                className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex items-center gap-4 sm:w-72 sm:shrink-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-canvas">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-text">
                    {t(`skill.${skill.key}.title`)}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-[1.6] text-muted">
                  {t(`skill.${skill.key}.desc`)}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
