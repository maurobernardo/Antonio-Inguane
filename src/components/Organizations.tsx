"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { organizations } from "@/data/organizations";
import { useLocale } from "@/lib/i18n";

export default function Organizations() {
  const { t } = useLocale();
  const track = [...organizations, ...organizations];

  return (
    <section className="border-b border-muted/20 py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-gold uppercase">
            <Handshake aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
            {t("organizations.title")}
          </span>
        </motion.div>
      </div>

      <div
        className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="list"
        aria-label={t("organizations.title")}
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-14 motion-reduce:animate-none">
          {track.map((org, i) => (
            <span
              key={`${org.name}-${i}`}
              role="listitem"
              aria-label={org.name}
              className="h-9 w-28 shrink-0 bg-gold opacity-70 transition-opacity duration-200 hover:opacity-100 sm:h-11 sm:w-32"
              style={{
                maskImage: `url(${org.logo})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url(${org.logo})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
