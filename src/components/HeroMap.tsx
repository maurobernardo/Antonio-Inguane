"use client";

import { ComposableMap, Geographies, Geography, Graticule, Marker } from "react-simple-maps";
import { countries } from "@/data/countries";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const highlighted = new Set(countries.map((c) => c.mapName));

export default function HeroMap() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.26]"
      style={{
        maskImage:
          "radial-gradient(ellipse 85% 85% at 50% 40%, black 55%, transparent 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 85% at 50% 40%, black 55%, transparent 95%)",
      }}
    >
      <ComposableMap
        projectionConfig={{ scale: 165 }}
        width={980}
        height={500}
        style={{ width: "130%", height: "auto" }}
      >
        <Graticule stroke="var(--color-gold)" strokeWidth={0.3} strokeOpacity={0.5} />
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = (geo.properties?.name as string) ?? "";
              const isActive = highlighted.has(name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    fill: isActive ? "var(--color-gold)" : "var(--color-muted)",
                    fillOpacity: isActive ? 0.75 : 0.32,
                    stroke: "var(--color-gold)",
                    strokeWidth: 0.5,
                    strokeOpacity: 0.5,
                    outline: "none",
                  }}
                />
              );
            })
          }
        </Geographies>
        {countries.map((country) => (
          <Marker key={country.code} coordinates={country.coordinates}>
            <circle r={2.5} fill="var(--color-gold)" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
