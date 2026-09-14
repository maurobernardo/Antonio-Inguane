import type { Locale } from "@/lib/i18n";

export type EducationItem = {
  institution: string;
  program: Record<Locale, string>;
  note?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Maastricht University (UNU-MERIT)",
    program: {
      en: "PhD Candidate, Governance and Policy Analysis",
      pt: "Doutoramento em curso, Governanca e Analise de Politicas",
    },
    note: "Exp. 2026",
  },
  {
    institution: "UC San Diego Extended Studies",
    program: {
      en: "Environment & Sustainability",
      pt: "Ambiente e Sustentabilidade",
    },
    note: "Grade A",
  },
  {
    institution: "Palomar College",
    program: { en: "GIS", pt: "SIG" },
  },
  {
    institution: "Australian National University",
    program: {
      en: "MSc, Environmental Management and Development",
      pt: "Mestrado em Gestao Ambiental e Desenvolvimento",
    },
    note: "2015",
  },
  {
    institution: "Eduardo Mondlane University",
    program: {
      en: "Forestry Engineering",
      pt: "Engenharia Florestal",
    },
  },
];
