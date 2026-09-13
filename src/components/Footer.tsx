"use client";

import Image from "next/image";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { LinkedInIcon, XIcon } from "./icons";
import { socialLinks } from "@/data/social";
import { useLocale } from "@/lib/i18n";

const links = [
  { href: "#sobre", key: "nav.sobre" },
  { href: "#experiencia", key: "nav.experiencia" },
  { href: "#formacao", key: "nav.formacao" },
  { href: "#especializacao", key: "nav.especializacao" },
  { href: "#atuacao", key: "nav.atuacao" },
  { href: "#contato", key: "nav.contato" },
];

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-muted/20 bg-surface px-6 pt-14 pb-8 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#inicio"
              className="flex items-center gap-3 font-display text-lg font-extrabold tracking-tight text-text"
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-muted/25">
                <Image
                  src="/perfil.jpg"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              Antonio Inguane
            </a>
            <p className="mt-4 max-w-xs text-sm leading-[1.6] text-muted">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-gold uppercase">
              {t("footer.nav")}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted transition-colors duration-150 hover:text-gold"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-gold uppercase">
              {t("footer.connect")}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-gold"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                  {socialLinks.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                {t("footer.location")}
              </li>
              <li className="flex items-center gap-2 pt-1">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href={socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted/30 text-text transition-colors duration-150 hover:border-gold hover:text-gold"
                >
                  <XIcon className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-muted/15 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted">
            &copy; {year} Antonio Inguane. {t("footer.rights")}
          </p>
          <a
            href="#inicio"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-muted/30 px-4 text-xs font-semibold text-text transition-colors duration-150 hover:border-gold hover:text-gold"
          >
            {t("footer.backToTop")}
            <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
