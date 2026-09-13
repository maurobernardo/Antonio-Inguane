"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
  Marker,
  Line,
} from "react-simple-maps";
import { MapPin, Globe2, Plus, Minus, RotateCcw } from "lucide-react";
import SectionHeading from "./SectionHeading";
import StampIcon from "./StampIcon";
import { countries, type Country } from "@/data/countries";
import { experience } from "@/data/experience";
import { useLocale } from "@/lib/i18n";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MIN_ZOOM = 1;
const MAX_ZOOM = 6;

function yearsActive(code: string): number | null {
  const items = experience.filter((item) => item.countryCode === code);
  if (items.length === 0) return null;
  const starts = items.map((item) => parseInt(item.start, 10));
  const currentYear = new Date().getFullYear();
  const ends = items.map((item) => (item.end ? parseInt(item.end, 10) : currentYear));
  return Math.max(...ends) - Math.min(...starts) + 1;
}

function firstYear(code: string): number | null {
  const items = experience.filter((item) => item.countryCode === code);
  if (items.length === 0) return null;
  return Math.min(...items.map((item) => parseInt(item.start, 10)));
}

export default function CountryMap() {
  const { t } = useLocale();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Country>(countries[0]);
  const [position, setPosition] = useState({ coordinates: [12, 5] as [number, number], zoom: 1 });
  const chipRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const highlighted = new Set(countries.map((c) => c.mapName));

  const roles = experience.filter((item) => item.countryCode === selected.code);
  const selectedName = t(selected.key);
  const selectedYears = yearsActive(selected.code);

  const route = useMemo(() => {
    return countries
      .filter((c) => firstYear(c.code) !== null)
      .sort((a, b) => (firstYear(a.code) as number) - (firstYear(b.code) as number));
  }, []);

  function handleZoom(direction: "in" | "out" | "reset") {
    setPosition((pos) => {
      if (direction === "reset") return { coordinates: [12, 5], zoom: 1 };
      const nextZoom =
        direction === "in"
          ? Math.min(pos.zoom * 1.5, MAX_ZOOM)
          : Math.max(pos.zoom / 1.5, MIN_ZOOM);
      return { ...pos, zoom: nextZoom };
    });
  }

  function focusChip(nextIndex: number) {
    const el = chipRefs.current[(nextIndex + countries.length) % countries.length];
    el?.focus();
  }

  function handleChipKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusChip(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusChip(index - 1);
    }
  }

  return (
    <section
      id="atuacao"
      className="border-b border-muted/20 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("map.eyebrow")}
          title={t("map.title")}
          subtitle={t("map.subtitle")}
          icon={Globe2}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_20%,var(--color-surface)_0%,var(--color-canvas)_70%)] ring-1 ring-muted/15">
            <ComposableMap
              projectionConfig={{ scale: 148 }}
              width={980}
              height={500}
              style={{ width: "100%", height: "auto" }}
            >
              <ZoomableGroup
                center={position.coordinates}
                zoom={position.zoom}
                minZoom={MIN_ZOOM}
                maxZoom={MAX_ZOOM}
                onMoveEnd={(pos) =>
                  setPosition({
                    coordinates: pos.coordinates ?? position.coordinates,
                    zoom: pos.zoom ?? position.zoom,
                  })
                }
              >
                <Sphere
                  id="sphere"
                  fill="transparent"
                  stroke="var(--color-muted)"
                  strokeWidth={0.4}
                  strokeOpacity={0.15}
                />
                <Graticule stroke="var(--color-muted)" strokeWidth={0.3} strokeOpacity={0.08} />
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const name = (geo.properties?.name as string) ?? "";
                      const isActive = highlighted.has(name);
                      const isHovered = hovered === name;
                      const isSelected = selected.mapName === name;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => isActive && setHovered(name)}
                          onMouseLeave={() => setHovered(null)}
                          onClick={() => {
                            if (!isActive) return;
                            const match = countries.find((c) => c.mapName === name);
                            if (match) setSelected(match);
                          }}
                          tabIndex={isActive ? 0 : -1}
                          aria-label={isActive ? name : undefined}
                          style={{
                            cursor: isActive ? "pointer" : "default",
                            fill: isActive
                              ? isSelected
                                ? "var(--color-gold-hover)"
                                : "var(--color-gold)"
                              : "var(--color-surface-strong)",
                            fillOpacity: isActive ? (isHovered || isSelected ? 1 : 0.85) : 1,
                            stroke: "var(--color-canvas)",
                            strokeWidth: isSelected ? 1.25 : 0.5,
                            outline: "none",
                            transition: "fill-opacity 150ms ease-out",
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {route.map((country, i) => {
                  if (i === route.length - 1) return null;
                  const next = route[i + 1];
                  return (
                    <Line
                      key={`${country.code}-${next.code}`}
                      from={country.coordinates}
                      to={next.coordinates}
                      stroke="var(--color-gold)"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeDasharray="1 4"
                      strokeOpacity={0.6}
                    />
                  );
                })}

                {countries.map((country) => (
                  <Marker key={country.code} coordinates={country.coordinates}>
                    <circle
                      r={selected.code === country.code ? 3.5 : 2.5}
                      fill="var(--color-canvas)"
                      stroke="var(--color-gold)"
                      strokeWidth={1.25}
                    />
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>

            {hovered && hovered !== selected.mapName && (
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-text shadow-lg ring-1 ring-muted/20">
                {hovered}
              </div>
            )}

            <div className="absolute right-3 bottom-3 flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => handleZoom("in")}
                aria-label={t("map.zoomIn")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-text shadow-lg ring-1 ring-muted/20 transition-colors duration-150 hover:text-gold"
              >
                <Plus aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => handleZoom("out")}
                aria-label={t("map.zoomOut")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-text shadow-lg ring-1 ring-muted/20 transition-colors duration-150 hover:text-gold"
              >
                <Minus aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => handleZoom("reset")}
                aria-label={t("map.resetZoom")}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-text shadow-lg ring-1 ring-muted/20 transition-colors duration-150 hover:text-gold"
              >
                <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
              </button>
            </div>

            <div className="pointer-events-none absolute bottom-3 left-3 flex flex-col gap-1.5 rounded-xl bg-canvas/80 px-3 py-2 text-[11px] text-muted backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                {t("map.legend.active")}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-surface-strong)] ring-1 ring-muted/30" aria-hidden="true" />
                {t("map.legend.inactive")}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-px w-2.5 border-t border-dashed border-gold/70" aria-hidden="true" />
                {t("map.legend.route")}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.code}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-muted/15"
            >
              <div className="flex items-center gap-4">
                <StampIcon code={selected.code} label={selectedName} size={56} />
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                    {t("map.selected")}
                  </p>
                  <h3 className="font-display text-xl font-extrabold text-text">
                    {selectedName}
                  </h3>
                  {selectedYears !== null && (
                    <p className="mt-0.5 text-xs font-medium text-muted">
                      {t("map.years", { years: String(selectedYears) })}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 flex-1 space-y-4 border-t border-muted/15 pt-5">
                {roles.length > 0 ? (
                  roles.map((item) => (
                    <div key={`${item.org}-${item.start}`} className="flex gap-3">
                      <MapPin
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        strokeWidth={1.75}
                      />
                      <div>
                        <p className="text-sm font-bold text-text">{item.role}</p>
                        <p className="text-xs text-muted">
                          {item.org}; {item.start} - {item.end ?? t("common.present")}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm leading-[1.6] text-muted">
                    {t("map.fallback", { country: selectedName })}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={t("map.list")}>
          {countries.map((country, index) => {
            const isSelected = country.code === selected.code;
            return (
              <li key={country.code}>
                <button
                  ref={(el) => {
                    chipRefs.current[index] = el;
                  }}
                  type="button"
                  onClick={() => setSelected(country)}
                  onKeyDown={(e) => handleChipKeyDown(e, index)}
                  aria-pressed={isSelected}
                  className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-colors duration-150 ${
                    isSelected
                      ? "bg-gold text-canvas ring-gold"
                      : "bg-surface text-text ring-muted/15 hover:ring-gold/40"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isSelected ? "bg-canvas" : "bg-gold"}`}
                    aria-hidden="true"
                  />
                  {t(country.key)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
