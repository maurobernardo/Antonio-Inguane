import type { Locale } from "@/lib/i18n";

export type ExperienceItem = {
  role: Record<Locale, string>;
  org: string;
  start: string;
  end: string | null;
  countryCode: string;
  description: Record<Locale, string> | null;
};

export const experience: ExperienceItem[] = [
  {
    role: { en: "Managing Director", pt: "Managing Director" },
    org: "Mozambique Flying Labs",
    start: "2025",
    end: null,
    countryCode: "MZ",
    description: {
      en: "Leading the Mozambique chapter of the Flying Labs global network, building local capacity in drone mapping, remote sensing and geospatial data for humanitarian and development work.",
      pt: "Lidera o capitulo mocambicano da rede global Flying Labs, construindo capacidade local em mapeamento por drone, deteccao remota e dados geoespaciais para trabalho humanitario e de desenvolvimento.",
    },
  },
  {
    role: { en: "Partner and Co-Founder", pt: "Socio e Co-Fundador" },
    org: "Data4MOZ",
    start: "2022",
    end: null,
    countryCode: "MZ",
    description: {
      en: "Leading a data and geospatial platform for decision-making in natural resource management across Southern Africa, overseeing partnerships in land administration, agriculture, forestry, urban planning and climate change.",
      pt: "Lidera uma plataforma de dados e geoespacial para apoio a decisao na gestao de recursos naturais na Africa Austral, supervisionando parcerias em administracao de terras, agricultura, florestas, planeamento urbano e mudancas climaticas.",
    },
  },
  {
    role: { en: "Partner and Co-Founder", pt: "Socio e Co-Fundador" },
    org: "Data4Angola",
    start: "2022",
    end: null,
    countryCode: "AO",
    description: {
      en: "Extending the Data4MOZ data and geospatial platform to Angola, curating partnerships in land administration, agriculture, forestry, urban planning and climate change.",
      pt: "Estende a plataforma de dados e geoespacial da Data4MOZ a Angola, gerindo parcerias em administracao de terras, agricultura, florestas, planeamento urbano e mudancas climaticas.",
    },
  },
  {
    role: { en: "Recovery Specialist, PDNA Methodology", pt: "Especialista de Recuperacao, Metodologia PDNA" },
    org: "UNDP",
    start: "2025",
    end: "2025",
    countryCode: "MZ",
    description: {
      en: "Lead National Consultant supporting development of the Post-Disaster Needs Assessment (PDNA) Methodology Guidelines for the agriculture, transport, housing and education sectors.",
      pt: "Consultor Nacional Principal no apoio ao desenvolvimento das Diretrizes Metodologicas de Avaliacao de Necessidades Pos-Desastre (PDNA) para os setores de agricultura, transportes, habitacao e educacao.",
    },
  },
  {
    role: { en: "Lead Consultant, Loss and Damage Stocktaking", pt: "Consultor Principal, Levantamento de Perdas e Danos" },
    org: "UNDP",
    start: "2025",
    end: "2025",
    countryCode: "MZ",
    description: {
      en: "Lead National Consultant evaluating losses and damages from extreme and slow-developing weather events, assessing existing policies, institutions and financial mechanisms to inform Mozambique's NDC 3.0.",
      pt: "Consultor Nacional Principal na avaliacao de perdas e danos causados por eventos climaticos extremos e de evolucao lenta, analisando politicas, instituicoes e mecanismos financeiros existentes para informar a NDC 3.0 de Mocambique.",
    },
  },
  {
    role: { en: "Lead Consultant, GEF PPG TRANSFORM Project", pt: "Consultor Principal, Projeto GEF PPG TRANSFORM" },
    org: "UNDP",
    start: "2024",
    end: "2025",
    countryCode: "MZ",
    description: {
      en: "Lead National Consultant on a USD 15 million GEF-8 Project Preparation Grant across two conservation landscapes, coordinating implementation for the EBD Global and Data4Moz consortium.",
      pt: "Consultor Nacional Principal num Fundo de Preparacao de Projeto (PPG) GEF-8 de USD 15 milhoes em duas paisagens de conservacao, coordenando a implementacao em nome do consorcio EBD Global e Data4Moz.",
    },
  },
  {
    role: { en: "PPG Design Co-Leader, GBFF Protected Areas System", pt: "Co-Lider de Desenho PPG, Sistema de Areas Protegidas GBFF" },
    org: "UNDP",
    start: "2024",
    end: "2025",
    countryCode: "AO",
    description: {
      en: "Co-leader and socioeconomic and resources governance specialist for the design of a $3 million GBFF-financed protected areas project.",
      pt: "Co-lider e especialista em governanca socioeconomica e de recursos no desenho de um projeto de areas protegidas de $3 milhoes financiado pelo GBFF.",
    },
  },
  {
    role: { en: "Terminal Evaluation, SUNRED Project II", pt: "Avaliacao Final, Projeto SUNRED II" },
    org: "UNDP",
    start: "2024",
    end: "2024",
    countryCode: "MZ",
    description: {
      en: "Lead consultant for the terminal evaluation, designing and running the full evaluation process, including stakeholder engagement, data collection and reporting.",
      pt: "Consultor principal na avaliacao final, desenhando e conduzindo todo o processo de avaliacao, incluindo envolvimento de stakeholders, recolha de dados e elaboracao de relatorios.",
    },
  },
  {
    role: { en: "Terminal Evaluation, BIOSFAC Project", pt: "Avaliacao Final, Projeto BIOSFAC" },
    org: "UNDP",
    start: "2023",
    end: "2023",
    countryCode: "MZ",
    description: {
      en: "Lead consultant for the terminal evaluation, designing and running the full evaluation process, including stakeholder engagement, data collection and reporting.",
      pt: "Consultor principal na avaliacao final, desenhando e conduzindo todo o processo de avaliacao, incluindo envolvimento de stakeholders, recolha de dados e elaboracao de relatorios.",
    },
  },
  {
    role: { en: "Feasibility Study and Value Chain Mapping", pt: "Estudo de Viabilidade e Mapeamento de Cadeia de Valor" },
    org: "Gorongosa Restoration Project",
    start: "2022",
    end: "2022",
    countryCode: "MZ",
    description: {
      en: "Lead consultant for a value chain mapping and feasibility study for a community-led business in Djutchenje Community, from questionnaire design through field data collection to final reporting.",
      pt: "Consultor principal num mapeamento de cadeia de valor e estudo de viabilidade para um negocio liderado pela comunidade de Djutchenje, desde o desenho do questionario ate a recolha de dados no terreno e relatorio final.",
    },
  },
  {
    role: { en: "Direct Job Creation Assessment", pt: "Avaliacao de Criacao Direta de Emprego" },
    org: "IFC Corporation",
    start: "2022",
    end: "2022",
    countryCode: "MZ",
    description: {
      en: "Coordinated data collection and stakeholder consultation assessing direct job creation from private investment in cash crops in Manica province.",
      pt: "Coordenou a recolha de dados e consulta de stakeholders na avaliacao da criacao direta de emprego resultante de investimento privado em culturas de rendimento na provincia de Manica.",
    },
  },
  {
    role: { en: "Global Digital Solution and Impact Measurement Consultant", pt: "Consultor de Solucao Digital Global e Medicao de Impacto" },
    org: "Earthworm Foundation",
    start: "2021",
    end: null,
    countryCode: "US",
    description: {
      en: "Consulting for Cadasta Foundation on global solutions and impact measurement for resilient, regenerative supply chains across Asia, South America and Africa; design of data frameworks and survey instruments used across countries.",
      pt: "Consultoria para a Cadasta Foundation em solucoes globais e medicao de impacto para cadeias de abastecimento resilientes e regenerativas na Asia, America do Sul e Africa; desenho de estruturas de dados e instrumentos de inquerito usados em varios paises.",
    },
  },
  {
    role: { en: "Food Systems Assessment Consultant", pt: "Consultor de Avaliacao de Sistemas Alimentares" },
    org: "FAO",
    start: "2021",
    end: "2021",
    countryCode: "MZ",
    description: {
      en: "Team member of the Global Food Systems Assessment commissioned by FAO/EU/CIRAD; provided an evidence-based assessment of biophysical, environmental and territorial challenges in Mozambique's food systems.",
      pt: "Membro da equipa da Avaliacao Global de Sistemas Alimentares encomendada pela FAO/UE/CIRAD; forneceu uma avaliacao baseada em evidencias dos desafios biofisicos, ambientais e territoriais dos sistemas alimentares de Mocambique.",
    },
  },
  {
    role: { en: "Programs Specialist", pt: "Especialista de Programas" },
    org: "Cadasta Foundation",
    start: "2019",
    end: "2021",
    countryCode: "US",
    description: {
      en: "Primary technical point of contact for partner engagement and training, implementing land and property rights documentation with fit-for-purpose GIS solutions for marginalized groups across Southern Africa and Brazil.",
      pt: "Ponto focal tecnico para envolvimento de parceiros e formacao, implementando documentacao de direitos de terra e propriedade com solucoes de SIG adequadas para grupos marginalizados na Africa Austral e no Brasil.",
    },
  },
  {
    role: { en: "Programs Specialist", pt: "Especialista de Programas" },
    org: "Cadasta Foundation",
    start: "2019",
    end: "2021",
    countryCode: "BR",
    description: {
      en: "Led a geo-economic and landscape survey for palm oil supply chain expansion in Tome-Acu, and supported the cadastral surveying framework for property regularization in Bonito Municipality, Pernambuco.",
      pt: "Liderou um levantamento geoeconomico e paisagistico para a expansao da cadeia de abastecimento de oleo de palma em Tome-Acu, e apoiou o quadro de levantamento cadastral para regularizacao de propriedades no municipio de Bonito, Pernambuco.",
    },
  },
  {
    role: { en: "Programs Specialist", pt: "Especialista de Programas" },
    org: "Cadasta Foundation",
    start: "2019",
    end: "2021",
    countryCode: "MG",
    description: {
      en: "Worked with Transparency International on a field data collection approach to systematically map, document and assess land ownership previously held by former French settlers.",
      pt: "Trabalhou com a Transparency International numa abordagem de recolha de dados no terreno para mapear, documentar e avaliar sistematicamente a propriedade de terras anteriormente detidas por antigos colonos franceses.",
    },
  },
  {
    role: { en: "Programs Specialist", pt: "Especialista de Programas" },
    org: "Cadasta Foundation",
    start: "2019",
    end: "2021",
    countryCode: "GM",
    description: {
      en: "Used remote sensing and drone mapping to create topographic and cadastral maps of infrastructure assets in Tallinding, assessing flooding risk, tree cover and floor area ratio.",
      pt: "Usou deteccao remota e mapeamento por drone para criar mapas topograficos e cadastrais de infraestruturas em Tallinding, avaliando o risco de inundacao, cobertura arborea e indice de ocupacao do solo.",
    },
  },
  {
    role: { en: "Impact Evaluation Consultant", pt: "Consultor de Avaliacao de Impacto" },
    org: "Social Impact",
    start: "2017",
    end: "2018",
    countryCode: "MZ",
    description: {
      en: "Team member on the impact evaluation of the MCC-funded Land Project; organized stakeholder and community consultations and assessed institutional capacity at cadastral services in northern Mozambique.",
      pt: "Membro da equipa na avaliacao de impacto do Projeto de Terra financiado pelo MCC; organizou consultas com stakeholders e comunidades e avaliou a capacidade institucional dos servicos cadastrais no norte de Mocambique.",
    },
  },
  {
    role: { en: "National Outreach Advisor", pt: "Conselheiro Nacional de Divulgacao" },
    org: "iTC Foundation",
    start: "2016",
    end: "2018",
    countryCode: "MZ",
    description: {
      en: "Designed the organization's engagement and partnership strategy on land and natural resources policy; focal point for the National Land Forum under the Terra Segura Program.",
      pt: "Desenhou a estrategia de envolvimento e parcerias da organizacao em politica de terra e recursos naturais; ponto focal do Forum Nacional de Terra no ambito do Programa Terra Segura.",
    },
  },
  {
    role: { en: "National Stakeholder Engagement Expert", pt: "Especialista Nacional de Envolvimento de Stakeholders" },
    org: "UNDP",
    start: "2016",
    end: "2016",
    countryCode: "MZ",
    description: {
      en: "Team member on a $15.7 million project strengthening conservation of globally threatened species around Gorongosa National Park and Niassa Reserve; focal point for community and stakeholder consultation.",
      pt: "Membro da equipa de um projeto de $15,7 milhoes para reforcar a conservacao de especies globalmente ameacadas em torno do Parque Nacional da Gorongosa e da Reserva do Niassa; ponto focal para consulta de comunidades e stakeholders.",
    },
  },
  {
    role: { en: "Environmental Analyst", pt: "Analista Ambiental" },
    org: "Energy Institute, Australian National University",
    start: "2014",
    end: "2018",
    countryCode: "AU",
    description: {
      en: "Assessed the environmental and economic impacts of the ASEAN Power Grid Project, coordinating data collection on the socio-economic and environmental impacts of a transcontinental power grid.",
      pt: "Avaliou os impactos ambientais e economicos do Projeto de Rede Eletrica da ASEAN, coordenando a recolha de dados sobre os impactos socioeconomicos e ambientais de uma rede eletrica transcontinental.",
    },
  },
  {
    role: { en: "Senior Advisor", pt: "Conselheiro Senior" },
    org: "AMBERO Consulting GmbH",
    start: "2010",
    end: "2011",
    countryCode: "MZ",
    description: {
      en: "Provided natural resource management advisory support to the Zimbabwe-Mozambique-Zambia Transfrontier Park (ZIMOZA) under a World Bank/GEF-funded project, strengthening community land rights and building a grant mechanism for community-based natural resource projects.",
      pt: "Prestou apoio de aconselhamento em gestao de recursos naturais ao Parque Transfronteirico Zimbabue-Mocambique-Zambia (ZIMOZA), num projeto financiado pelo Banco Mundial/GEF, reforcando direitos comunitarios sobre a terra e criando um mecanismo de financiamento para projetos comunitarios de recursos naturais.",
    },
  },
  {
    role: { en: "Senior Advisor", pt: "Conselheiro Senior" },
    org: "AMBERO Consulting GmbH",
    start: "2010",
    end: "2011",
    countryCode: "ZW",
    description: {
      en: "Provided natural resource management advisory support to the Zimbabwe-Mozambique-Zambia Transfrontier Park (ZIMOZA) under a World Bank/GEF-funded project, strengthening community land rights and building a grant mechanism for community-based natural resource projects.",
      pt: "Prestou apoio de aconselhamento em gestao de recursos naturais ao Parque Transfronteirico Zimbabue-Mocambique-Zambia (ZIMOZA), num projeto financiado pelo Banco Mundial/GEF, reforcando direitos comunitarios sobre a terra e criando um mecanismo de financiamento para projetos comunitarios de recursos naturais.",
    },
  },
  {
    role: { en: "Senior Advisor", pt: "Conselheiro Senior" },
    org: "AMBERO Consulting GmbH",
    start: "2010",
    end: "2011",
    countryCode: "ZM",
    description: {
      en: "Provided natural resource management advisory support to the Zimbabwe-Mozambique-Zambia Transfrontier Park (ZIMOZA) under a World Bank/GEF-funded project, strengthening community land rights and building a grant mechanism for community-based natural resource projects.",
      pt: "Prestou apoio de aconselhamento em gestao de recursos naturais ao Parque Transfronteirico Zimbabue-Mocambique-Zambia (ZIMOZA), num projeto financiado pelo Banco Mundial/GEF, reforcando direitos comunitarios sobre a terra e criando um mecanismo de financiamento para projetos comunitarios de recursos naturais.",
    },
  },
  {
    role: { en: "Socio-Economic Consultant", pt: "Consultor Socioeconomico" },
    org: "WWF / USAID",
    start: "2011",
    end: "2011",
    countryCode: "MZ",
    description: {
      en: "Team member on the Southern Africa regional stocktaking exercise for a $250 million USAID community-based natural resource management program; stakeholder engagement and investment assessment.",
      pt: "Membro da equipa no exercicio regional de balanco da Africa Austral de um programa de gestao comunitaria de recursos naturais da USAID de $250 milhoes; envolvimento de stakeholders e avaliacao de investimentos.",
    },
  },
  {
    role: { en: "Climate Change and Vulnerability Assessment", pt: "Avaliacao de Mudancas Climaticas e Vulnerabilidade" },
    org: "FAO",
    start: "2008",
    end: "2009",
    countryCode: "MZ",
    description: {
      en: "Designed and implemented a climate vulnerability assessment for the Limpopo and Mapai corridor in Gaza province, including community and stakeholder engagement.",
      pt: "Desenhou e implementou uma avaliacao de vulnerabilidade climatica para o corredor do Limpopo e Mapai na provincia de Gaza, incluindo envolvimento de comunidades e stakeholders.",
    },
  },
];
