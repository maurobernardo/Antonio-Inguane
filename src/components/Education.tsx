"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import EducationCard from "./EducationCard";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";
import { useLocale } from "@/lib/i18n";

export default function Education() {
  const { t } = useLocale();

  return (
    <section
      id="formacao"
      className="border-b border-muted/20 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
        <SectionHeading
          eyebrow={t("education.eyebrow")}
          title={t("education.title")}
          subtitle={t("education.subtitle")}
          icon={GraduationCap}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {education.map((item) => (
            <EducationCard key={item.institution} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
