"use client";

import dynamic from "next/dynamic";

// Disabled on the server: react-simple-maps' projection math produces
// floating-point output that differs by a fraction of a pixel between
// SSR and the client, which React flags as a hydration mismatch.
const CountryMap = dynamic(() => import("@/components/CountryMap"), {
  ssr: false,
  loading: () => (
    <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
      <div className="mx-auto h-[520px] max-w-6xl animate-pulse rounded-2xl bg-surface" />
    </div>
  ),
});

export default CountryMap;
