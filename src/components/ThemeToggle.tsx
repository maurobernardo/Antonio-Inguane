"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export default function ThemeToggle() {
  const { t } = useLocale();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem("theme");
    } catch {
      // localStorage unavailable; fall back to the dark default
    }
    if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable; theme still applies for this session
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
      aria-pressed={theme === "light"}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      )}
    </button>
  );
}
