import {
  Sprout,
  FileCheck,
  Workflow,
  Network,
  MapPinned,
  ShieldCheck,
  Satellite,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Project = {
  id: string;
  icon: LucideIcon;
  org: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tag: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    id: "palm-oil-tome-acu",
    icon: Sprout,
    org: "Cadasta Foundation",
    title: {
      en: "Geo-Economic and Landscape Survey, Tome-Acu, Brazil",
      pt: "Levantamento Geoeconomico e Paisagistico, Tome-Acu, Brasil",
    },
    description: {
      en: "Established a framework to assess historical land use change, mapped corridors of palm oil production and assessed the status of property rights for smallholder farmers in the palm oil supply chain.",
      pt: "Criou um quadro para avaliar mudancas historicas no uso da terra, mapeou corredores de producao de oleo de palma e avaliou a situacao dos direitos de propriedade de pequenos agricultores na cadeia de abastecimento.",
    },
    tag: { en: "Land use and supply chains", pt: "Uso da terra e cadeias de abastecimento" },
  },
  {
    id: "bonito-land-documentation",
    icon: FileCheck,
    org: "Cadasta Foundation",
    title: {
      en: "Land Documentation and Property Registration, Pernambuco, Brazil",
      pt: "Documentacao de Terra e Registo de Propriedade, Pernambuco, Brasil",
    },
    description: {
      en: "Focal point for designing the cadastral surveying framework that streamlined data collection for the regularization of individual properties across Bonito Municipality under the federal housing program.",
      pt: "Ponto focal no desenho do quadro de levantamento cadastral que agilizou a recolha de dados para a regularizacao de propriedades individuais no municipio de Bonito, no ambito do programa federal de habitacao.",
    },
    tag: { en: "Land tenure", pt: "Direitos fundiarios" },
  },
  {
    id: "agri-value-chain-tome-acu",
    icon: Workflow,
    org: "Cadasta Foundation",
    title: {
      en: "Location-Based Data in the Agriculture Value Chain, Para, Brazil",
      pt: "Dados Georreferenciados na Cadeia de Valor Agricola, Para, Brasil",
    },
    description: {
      en: "Coordinated the design of a workflow integrating the Brazil Rural Environmental Cadaster framework with tenure security information for smallholder farmers.",
      pt: "Coordenou o desenho de um fluxo de trabalho que integra o Cadastro Ambiental Rural do Brasil com informacao de seguranca de posse para pequenos agricultores.",
    },
    tag: { en: "GIS and data systems", pt: "SIG e sistemas de dados" },
  },
  {
    id: "sigit-mozambique",
    icon: Network,
    org: "Cadasta Foundation",
    title: {
      en: "Community Land Value Chain, National Land Information System, Mozambique",
      pt: "Cadeia de Valor de Terra Comunitaria, Sistema Nacional de Informacao de Terra, Mocambique",
    },
    description: {
      en: "Supported the integration of civil society and private-sector land titling initiatives within Mozambique's National Land Information System (SIGIT).",
      pt: "Apoiou a integracao de iniciativas de titulacao de terra da sociedade civil e do setor privado no Sistema Nacional de Informacao de Terra de Mocambique (SIGIT).",
    },
    tag: { en: "Land administration", pt: "Administracao de terras" },
  },
  {
    id: "systematic-land-inventory-madagascar",
    icon: MapPinned,
    org: "Cadasta Foundation / Transparency International",
    title: {
      en: "Systematic Land Inventory, Madagascar",
      pt: "Inventario Sistematico de Terra, Madagascar",
    },
    description: {
      en: "Developed a field data collection approach to systematically map, document and assess land ownership previously held by former French settlers.",
      pt: "Desenvolveu uma abordagem de recolha de dados no terreno para mapear, documentar e avaliar sistematicamente a propriedade de terras anteriormente detidas por antigos colonos franceses.",
    },
    tag: { en: "Land inventory", pt: "Inventario de terra" },
  },
  {
    id: "community-governance-mozambique",
    icon: ShieldCheck,
    org: "Cadasta Foundation",
    title: {
      en: "Community-Based Governance System, Mozambique",
      pt: "Sistema de Governanca Comunitaria, Mocambique",
    },
    description: {
      en: "Supported the creation of an integrated system covering land tenure, resource economy, governance and disaster reduction, providing real-time resource management information at the community level.",
      pt: "Apoiou a criacao de um sistema integrado cobrindo direitos de terra, economia de recursos, governanca e reducao de desastres, fornecendo informacao de gestao de recursos em tempo real ao nivel comunitario.",
    },
    tag: { en: "Governance", pt: "Governanca" },
  },
  {
    id: "asset-mapping-gambia",
    icon: Satellite,
    org: "Cadasta Foundation",
    title: {
      en: "Asset Mapping, Tallinding, The Gambia",
      pt: "Mapeamento de Infraestruturas, Tallinding, Gambia",
    },
    description: {
      en: "Used drone mapping and remote sensing to collect and display infrastructure assets, producing a topographic map and investigating flooding, tree cover and floor area ratio.",
      pt: "Usou mapeamento por drone e deteccao remota para recolher e apresentar infraestruturas, produzindo um mapa topografico e investigando inundacoes, cobertura arborea e indice de ocupacao do solo.",
    },
    tag: { en: "Remote sensing", pt: "Deteccao remota" },
  },
];
