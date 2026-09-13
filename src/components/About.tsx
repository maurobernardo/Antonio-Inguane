"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLocale } from "@/lib/i18n";

export default function About() {
  const { t } = useLocale();

  const facts = [
    t("about.fact.years"),
    t("about.fact.countries"),
    t("about.fact.languages"),
    t("about.fact.focus"),
  ];

  return (
    <section
      id="sobre"
      className="border-y border-muted/20 bg-surface px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
          icon={User}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <Quote
            aria-hidden="true"
            className="hidden h-16 w-16 shrink-0 text-gold/30 lg:block"
            strokeWidth={1.25}
          />

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-[62ch] font-display text-xl leading-[1.5] font-semibold text-text sm:text-2xl"
            >
              {t("about.lead.intro")}{" "}
              <span className="text-gold">{t("about.lead.p1")}</span>,{" "}
              <span className="text-gold">{t("about.lead.p2")}</span>,{" "}
              <span className="text-gold">{t("about.lead.p3")}</span>{" "}
              {t("about.lead.p4")}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              className="mt-6 max-w-[68ch] space-y-4 text-base leading-[1.7] text-muted"
            >
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-muted/20 pt-6"
            >
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-center gap-2 text-sm font-medium text-text"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
