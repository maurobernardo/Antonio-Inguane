"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { location } from "@/data/social";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function LocationMap() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [117.3792, -33.1959, 0],
        scale: 1300,
      }}
      width={400}
      height={160}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                fill: "var(--color-muted)",
                fillOpacity: 0.45,
                stroke: "var(--color-gold)",
                strokeWidth: 0.6,
                strokeOpacity: 0.5,
                outline: "none",
              }}
            />
          ))
        }
      </Geographies>
      <Marker coordinates={location.coordinates}>
        <circle r={9} fill="var(--color-gold)" fillOpacity={0.2} />
        <circle r={4.5} fill="var(--color-gold)" stroke="var(--color-canvas)" strokeWidth={1.5} />
      </Marker>
    </ComposableMap>
  );
}
