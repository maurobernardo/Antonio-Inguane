"use client";

import type { EducationItem } from "@/data/education";
import { useLocale } from "@/lib/i18n";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function EducationCard({ item }: { item: EducationItem }) {
  const { locale } = useLocale();

  return (
    <div className="flex items-start gap-5 border-b border-muted/15 py-6 first:pt-0 last:border-b-0">
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-base font-extrabold text-gold ring-1 ring-gold/20"
      >
        {initials(item.institution)}
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-base font-bold text-text sm:text-lg">
          {item.institution}
        </h3>
        <p className="mt-1 text-sm leading-[1.6] text-muted">{item.program[locale]}</p>
        {item.note && (
          <p className="mt-2 inline-flex rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-gold">
            {item.note}
          </p>
        )}
      </div>
    </div>
  );
}
