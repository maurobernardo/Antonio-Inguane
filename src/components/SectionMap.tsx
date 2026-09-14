"use client";

import { ComposableMap, Geographies, Geography, Graticule, Marker } from "react-simple-maps";
import { countries } from "@/data/countries";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type SectionMapProps = {
  highlightCode?: string;
  coordinates?: [number, number];
  opacity?: number;
};

export default function SectionMap({ highlightCode, coordinates, opacity = 0.24 }: SectionMapProps) {
  const target = countries.find((c) => c.code === highlightCode);
  const markerCoordinates = coordinates ?? target?.coordinates;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      style={{
        opacity,
        maskImage:
          "radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 96%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 96%)",
      }}
    >
      <ComposableMap
        projectionConfig={{ scale: 165 }}
        width={980}
        height={500}
        style={{ width: "140%", height: "auto" }}
      >
        <Graticule stroke="var(--color-gold)" strokeWidth={0.3} strokeOpacity={0.5} />
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = (geo.properties?.name as string) ?? "";
              const isTarget = target ? name === target.mapName : false;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    fill: isTarget ? "var(--color-gold)" : "var(--color-muted)",
                    fillOpacity: isTarget ? 0.85 : 0.32,
                    stroke: "var(--color-gold)",
                    strokeWidth: 0.5,
                    strokeOpacity: 0.55,
                    outline: "none",
                  }}
                />
              );
            })
          }
        </Geographies>
        {markerCoordinates && (
          <Marker coordinates={markerCoordinates}>
            <circle r={3} fill="var(--color-gold)" />
          </Marker>
        )}
      </ComposableMap>
    </div>
  );
}
