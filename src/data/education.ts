import type { Locale } from "@/lib/i18n";

export type EducationItem = {
  institution: string;
  program: Record<Locale, string>;
  note?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Maastricht University",
    program: {
      en: "Governance and Policy Analysis",
      pt: "Governanca e Analise de Politicas",
    },
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
      en: "Master, Environmental Management and Development",
      pt: "Mestrado em Gestao Ambiental e Desenvolvimento",
    },
  },
  {
    institution: "Eduardo Mondlane University",
    program: {
      en: "Forestry Engineering",
      pt: "Engenharia Florestal",
    },
  },
];
