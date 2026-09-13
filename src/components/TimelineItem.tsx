"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, MapPin } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";
import { countries } from "@/data/countries";
import { useLocale } from "@/lib/i18n";

type TimelineItemProps = {
  item: ExperienceItem;
  index: number;
};

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const { t } = useLocale();
  const country = countries.find((c) => c.code === item.countryCode);
  const end = item.end ?? t("common.present");

  return (
    <motion.li
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 6) * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-muted/15 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/15 hover:ring-gold/40"
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold-hover transition-all duration-500 ease-out group-hover:w-full"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 -right-3 font-display text-7xl font-extrabold text-muted/[0.06] select-none"
      >
        {item.countryCode}
      </span>

      <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex items-center rounded-full bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold">
          {t("experience.badge")}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
          <Calendar aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
          {item.start} - {end}
        </span>
      </div>

      <h3 className="relative font-display text-lg font-bold text-text transition-colors duration-200 group-hover:text-gold">
        {item.role}
      </h3>

      <div className="relative flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Briefcase aria-hidden="true" className="h-3.5 w-3.5 text-gold" strokeWidth={1.75} />
          {item.org}
        </span>
        {country && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-gold" strokeWidth={1.75} />
            {t(country.key)}
          </span>
        )}
      </div>

      <p className="relative text-sm leading-[1.6] text-text/70 italic">
        {item.description ?? t("experience.addDescription")}
      </p>
    </motion.li>
  );
}
