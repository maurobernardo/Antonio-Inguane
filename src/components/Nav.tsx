"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  User,
  Briefcase,
  GraduationCap,
  Target,
  Map,
  Images,
  Mail,
  Menu,
  X,
  Languages,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useLocale } from "@/lib/i18n";

const links = [
  { href: "#sobre", key: "nav.sobre", icon: User },
  { href: "#experiencia", key: "nav.experiencia", icon: Briefcase },
  { href: "#formacao", key: "nav.formacao", icon: GraduationCap },
  { href: "#especializacao", key: "nav.especializacao", icon: Target },
  { href: "#atuacao", key: "nav.atuacao", icon: Map },
  { href: "#galeria", key: "nav.galeria", icon: Images },
  { href: "#contato", key: "nav.contato", icon: Mail },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-muted/20 bg-canvas/90 px-6 backdrop-blur-sm sm:px-10 lg:px-16">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 py-3 sm:py-3.5"
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2.5 font-display font-extrabold tracking-tight text-gold"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-muted/25">
            <Image
              src="/perfil.jpg"
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="flex h-10 items-center truncate text-sm leading-none sm:text-base">
            Antonio Inguane
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ul className="mr-6 hidden gap-1 md:flex">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeId === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors duration-150 hover:bg-surface hover:text-gold-hover ${
                      isActive ? "bg-surface text-gold-hover" : "text-gold"
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                    {t(link.key)}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "pt" : "en")}
            aria-label={t("lang.switch")}
            className="hidden h-11 min-w-[44px] items-center justify-center gap-1 rounded-full border border-muted/30 px-2.5 text-xs font-bold tracking-wide text-text transition-colors duration-150 hover:border-gold hover:text-gold md:inline-flex"
          >
            <Languages aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            {locale.toUpperCase()}
          </button>
          <span className="hidden md:inline-flex">
            <ThemeToggle />
          </span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold md:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-muted/20 py-3 md:hidden">
          <div className="mb-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "pt" : "en")}
              aria-label={t("lang.switch")}
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-muted/30 text-sm font-bold tracking-wide text-text transition-colors duration-150 hover:border-gold hover:text-gold"
            >
              <Languages aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
              {locale === "en" ? "English" : "Portugues"}
            </button>
            <ThemeToggle />
          </div>
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeId === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors duration-150 hover:bg-surface hover:text-gold ${
                    isActive ? "bg-surface text-gold" : "text-text"
                  }`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                  {t(link.key)}
                </a>
              </li>
            );
          })}
          </ul>
        </div>
      )}
    </header>
  );
}
