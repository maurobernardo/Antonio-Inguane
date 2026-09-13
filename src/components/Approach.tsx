"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { approachSteps } from "@/data/approach";
import { useLocale } from "@/lib/i18n";

export default function Approach() {
  const { t } = useLocale();

  return (
    <section className="border-b border-muted/20 px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("approach.eyebrow")}
          title={t("approach.title")}
          subtitle={t("approach.subtitle")}
          icon={Compass}
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
                className="relative"
              >
                {i < approachSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-6 left-full hidden h-px w-8 bg-gradient-to-r from-muted/30 to-transparent lg:block"
                  />
                )}

                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-extrabold text-muted/15 select-none"
                >
                  {step.number}
                </span>

                <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>

                <h3 className="mt-4 font-display text-lg font-bold text-text">
                  {t(`approach.${step.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-[1.6] text-muted">
                  {t(`approach.${step.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
