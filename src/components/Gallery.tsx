"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Images,
  LayoutGrid,
  Mic2,
  Award,
  Camera,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { useLocale } from "@/lib/i18n";

const SectionMap = dynamic(() => import("./SectionMap"), { ssr: false });

type Filter = "all" | GalleryCategory;

const categoryIcons: Record<GalleryCategory, LucideIcon> = {
  conferences: Mic2,
  awards: Award,
  fieldwork: Camera,
};

export default function Gallery() {
  const { t, locale } = useLocale();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; icon: LucideIcon }[] = [
    { key: "all", icon: LayoutGrid },
    ...galleryCategories.map((c) => ({ key: c as Filter, icon: categoryIcons[c] })),
  ];

  const visibleItems =
    filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  const placeholderCount = 6;

  return (
    <section
      id="galeria"
      className="relative overflow-hidden border-b border-muted/20 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <SectionMap highlightCode="GM" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("gallery.eyebrow")}
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
          icon={Images}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map(({ key, icon: Icon }) => {
            const isActive = filter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={isActive}
                className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
                  isActive
                    ? "bg-gold text-canvas"
                    : "bg-surface text-muted ring-1 ring-muted/15 hover:text-gold hover:ring-gold/30"
                }`}
              >
                <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                {key === "all" ? t("gallery.filter.all") : t(`gallery.filter.${key}`)}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {visibleItems.length > 0
              ? visibleItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative aspect-square overflow-hidden rounded-2xl bg-surface ring-1 ring-muted/15"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.caption[locale]}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))
              : Array.from({ length: placeholderCount }).map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-muted/25 bg-surface/60 text-muted"
                  >
                    <Images aria-hidden="true" className="h-6 w-6 text-muted/40" strokeWidth={1.5} />
                    <span className="px-3 text-center text-xs">{t("gallery.empty")}</span>
                  </div>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
