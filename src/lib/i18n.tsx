"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "pt";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.sobre": "About",
  "nav.experiencia": "Experience",
  "nav.formacao": "Education",
  "nav.especializacao": "Expertise",
  "nav.atuacao": "Map",
  "nav.galeria": "Gallery",
  "nav.contato": "Contact",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "theme.light": "Switch to light mode",
  "theme.dark": "Switch to dark mode",
  "lang.switch": "Switch to Portuguese",

  "hero.eyebrow": "Field notebook; 19+ years, 12 countries",
  "hero.role": "Co-Founder & Advisor @ Data4Moz | Data4Angola; Managing Director, Mozambique Flying Labs",
  "hero.summary":
    "International Development specialist focused on public policy, natural resource management, land tenure and environment; field work across Africa, the Americas and Oceania.",
  "hero.cta.primary": "View experience",
  "hero.cta.secondary": "Contact",
  "hero.cta.cv": "Download CV",
  "hero.stat.years": "years in the field",
  "hero.stat.countries": "countries",
  "hero.stat.languages": "working languages",
  "hero.scrollDown": "Scroll to the About section",

  "about.eyebrow": "Who I am",
  "about.title": "About",
  "about.subtitle":
    "19+ years turning land and environmental policy into results on the ground.",
  "about.lead.intro": "Antonio (Paulo) Inguane is an International Development specialist with more than 19 years dedicated to",
  "about.lead.p1": "public policy",
  "about.lead.p2": "natural resource management",
  "about.lead.p3": "land tenure",
  "about.lead.p4": "and environment",
  "about.p1":
    "Currently Co-Founder and Advisor at Data4Moz and Data4Angola, and Managing Director of Mozambique Flying Labs. Throughout his career, he has conducted field work in Mozambique, the United States, Zimbabwe, Angola, Madagascar, Australia, South Africa, Zambia, Gambia, Malawi, Cameroon and Brazil.",
  "about.p2":
    "He has built a practice grounded in land policy, environmental governance and community and stakeholder engagement across very different contexts; always focused on concrete results for communities and institutions.",
  "about.fact.years": "19+ years of experience",
  "about.fact.countries": "12 countries of field work",
  "about.fact.languages": "Native PT; fluent ES",
  "about.fact.focus": "Land, environment and data",

  "approach.eyebrow": "Way of working",
  "approach.title": "How I work",
  "approach.subtitle": "Four principles that guide every project, from diagnosis to delivery.",
  "approach.step1.title": "Diagnosis on the ground",
  "approach.step1.desc":
    "Understanding the local context, the actors and the tensions over land before designing any policy or intervention.",
  "approach.step2.title": "Data and geospatial",
  "approach.step2.desc":
    "Translating GIS data and empirical evidence into concrete decisions about land and natural resource management.",
  "approach.step3.title": "Stakeholder engagement",
  "approach.step3.desc":
    "Building consensus among communities, governments, donors and implementing partners.",
  "approach.step4.title": "Sustainable outcomes",
  "approach.step4.desc":
    "Designing institutional solutions that keep working after project funding ends.",

  "experience.eyebrow": "Professional path",
  "experience.title": "Experience",
  "experience.subtitle":
    "Nearly two decades of projects in public policy, land and environment; each role stamped with the country where the work happened.",
  "experience.badge": "Experience",
  "experience.showMore": "Show {count} more roles",
  "experience.showLess": "Show less",

  "organizations.title": "Organizations and partners",
  "organizations.subtitle": "Public, multilateral and private-sector organizations worked with over the years.",

  "education.eyebrow": "Academic background",
  "education.title": "Education",
  "education.subtitle":
    "Foundations in governance, environment and geographic information systems, built across four countries.",

  "skills.eyebrow": "Where I can help",
  "skills.title": "Areas of expertise",
  "skills.subtitle": "Six areas that intersect in almost every project I lead.",

  "map.eyebrow": "Global presence",
  "map.title": "Where I've worked",
  "map.subtitle":
    "Twelve countries of field work across four continents. Click a country to see the work done there.",
  "map.selected": "Selected country",
  "map.fallback": "Field work in {country}. [ADD DESCRIPTION]",
  "map.list": "Country list",
  "map.years": "{years}+ years active",
  "map.legend.active": "Field work",
  "map.legend.inactive": "Not visited",
  "map.legend.route": "Career path",
  "map.zoomIn": "Zoom in",
  "map.zoomOut": "Zoom out",
  "map.resetZoom": "Reset view",

  "contact.eyebrow": "Let's talk",
  "contact.title": "Contact",
  "contact.subtitle": "For collaborations, consulting work, or conversations about land, environment and data.",
  "contact.location": "Oceanside, California, United States",
  "contact.whatsapp.message": "Hi Antonio, I found your portfolio and would like to talk.",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.message": "Message",
  "contact.form.submit": "Send message",
  "contact.form.submitting": "Sending...",
  "contact.form.sent": "Message sent",
  "contact.form.sentAria": "Message sent successfully.",
  "contact.error.name": "Please enter your name.",
  "contact.error.email": "Please enter your email.",
  "contact.error.emailInvalid": "Please enter a valid email.",
  "contact.error.message": "Please write a message.",
  "contact.error.messageShort": "Your message needs at least 10 characters.",

  "footer.tagline": "Public policy, land and environment; 19+ years in the field",
  "footer.nav": "Navigation",
  "footer.connect": "Connect",
  "footer.location": "Oceanside, California, United States",
  "footer.rights": "All rights reserved.",
  "footer.backToTop": "Back to top",

  "common.present": "Present",
  "experience.addDescription": "[ADD DESCRIPTION]",

  "country.mz": "Mozambique",
  "country.us": "United States",
  "country.zw": "Zimbabwe",
  "country.ao": "Angola",
  "country.mg": "Madagascar",
  "country.au": "Australia",
  "country.za": "South Africa",
  "country.zm": "Zambia",
  "country.gm": "Gambia",
  "country.mw": "Malawi",
  "country.cm": "Cameroon",
  "country.br": "Brazil",

  "skill.politicas.title": "Public Policy",
  "skill.politicas.desc":
    "Design and evaluation of development policy, from concept to on-the-ground implementation.",
  "skill.recursos.title": "Natural Resource Management",
  "skill.recursos.desc":
    "Planning and governance of natural resources shared between communities, state and private sector.",
  "skill.land.title": "Land Tenure",
  "skill.land.desc":
    "Formalization and protection of communal and individual land rights under pressure on land.",
  "skill.gis.title": "GIS",
  "skill.gis.desc":
    "Mapping and geospatial analysis applied to land, environment and territorial planning decisions.",
  "skill.ambiente.title": "Environment",
  "skill.ambiente.desc":
    "Environmental assessment and safeguard design for development and infrastructure projects.",
  "skill.stakeholders.title": "Stakeholder Engagement",
  "skill.stakeholders.desc":
    "Building consensus among communities, governments, donors and implementing partners.",

  "projects.eyebrow": "Selected work",
  "projects.title": "Featured Projects",
  "projects.subtitle":
    "Land documentation, GIS and community governance initiatives across three continents.",

  "gallery.eyebrow": "In the field",
  "gallery.title": "Gallery",
  "gallery.subtitle":
    "Conferences, awards and fieldwork moments; photos coming soon.",
  "gallery.filter.all": "All",
  "gallery.filter.conferences": "Conferences",
  "gallery.filter.awards": "Awards",
  "gallery.filter.fieldwork": "Fieldwork",
  "gallery.empty": "Photos coming soon",
};

const pt: Dict = {
  "nav.sobre": "Sobre",
  "nav.experiencia": "Experiencia",
  "nav.formacao": "Formacao",
  "nav.especializacao": "Especializacao",
  "nav.atuacao": "Mapa",
  "nav.galeria": "Galeria",
  "nav.contato": "Contacto",
  "nav.openMenu": "Abrir menu",
  "nav.closeMenu": "Fechar menu",
  "theme.light": "Ativar modo claro",
  "theme.dark": "Ativar modo escuro",
  "lang.switch": "Mudar para ingles",

  "hero.eyebrow": "Caderno de campo; 19+ anos, 12 paises",
  "hero.role": "Co-Founder & Advisor @ Data4Moz | Data4Angola; Managing Director, Mozambique Flying Labs",
  "hero.summary":
    "Especialista em Desenvolvimento Internacional com foco em politicas publicas, gestao de recursos naturais, direitos fundiarios e ambiente; trabalho de campo em Africa, nas Americas e na Oceania.",
  "hero.cta.primary": "Ver experiencia",
  "hero.cta.secondary": "Contacto",
  "hero.cta.cv": "Descarregar CV",
  "hero.stat.years": "anos de campo",
  "hero.stat.countries": "paises",
  "hero.stat.languages": "linguas de trabalho",
  "hero.scrollDown": "Descer para a seccao Sobre",

  "about.eyebrow": "Quem sou",
  "about.title": "Sobre",
  "about.subtitle":
    "19+ anos a transformar politicas de terra e ambiente em resultados concretos no terreno.",
  "about.lead.intro": "Antonio (Paulo) Inguane e especialista em Desenvolvimento Internacional com mais de 19 anos dedicados a",
  "about.lead.p1": "politicas publicas",
  "about.lead.p2": "gestao de recursos naturais",
  "about.lead.p3": "direitos fundiarios",
  "about.lead.p4": "e ambiente",
  "about.p1":
    "Atualmente e Co-Founder e Advisor na Data4Moz e na Data4Angola, e Managing Director da Mozambique Flying Labs. Ao longo da carreira, conduziu trabalho de campo em Mocambique, Estados Unidos, Zimbabue, Angola, Madagascar, Australia, Africa do Sul, Zambia, Gambia, Malawi, Camaroes e Brasil.",
  "about.p2":
    "Construiu uma pratica assente em politicas de terra, governanca ambiental e envolvimento de comunidades e stakeholders em contextos muito distintos; sempre com foco em resultados concretos para comunidades e instituicoes.",
  "about.fact.years": "19+ anos de experiencia",
  "about.fact.countries": "12 paises de campo",
  "about.fact.languages": "PT nativo; ES fluente",
  "about.fact.focus": "Terra, ambiente e dados",

  "approach.eyebrow": "Metodo de trabalho",
  "approach.title": "Como trabalho",
  "approach.subtitle": "Quatro principios que guiam cada projeto, do diagnostico a entrega.",
  "approach.step1.title": "Diagnostico no terreno",
  "approach.step1.desc":
    "Compreender o contexto local, os atores e as tensoes sobre a terra antes de desenhar qualquer politica ou intervencao.",
  "approach.step2.title": "Dados e geoespacial",
  "approach.step2.desc":
    "Traduzir dados de GIS e evidencia empirica em decisoes concretas de gestao de terra e recursos naturais.",
  "approach.step3.title": "Envolvimento de stakeholders",
  "approach.step3.desc":
    "Construir consenso entre comunidades, governos, doadores e parceiros de implementacao.",
  "approach.step4.title": "Resultados sustentaveis",
  "approach.step4.desc":
    "Desenhar solucoes institucionais que continuam a funcionar depois do fim do financiamento do projeto.",

  "experience.eyebrow": "Percurso profissional",
  "experience.title": "Experiencia",
  "experience.subtitle":
    "Quase duas decadas de projetos em politicas publicas, terra e ambiente; cada cargo carimbado com o pais onde o trabalho aconteceu.",
  "experience.badge": "Experiencia",
  "experience.showMore": "Ver mais {count} cargos",
  "experience.showLess": "Ver menos",

  "organizations.title": "Organizacoes e parceiros",
  "organizations.subtitle": "Organizacoes publicas, multilaterais e do setor privado com quem ja trabalhei.",

  "education.eyebrow": "Formacao academica",
  "education.title": "Formacao",
  "education.subtitle":
    "Bases em governanca, ambiente e sistemas de informacao geografica, construidas em quatro paises.",

  "skills.eyebrow": "Onde posso ajudar",
  "skills.title": "Areas de especializacao",
  "skills.subtitle": "Seis frentes que se cruzam em praticamente todos os projetos que lidero.",

  "map.eyebrow": "Presenca global",
  "map.title": "Onde ja trabalhei",
  "map.subtitle":
    "Doze paises de trabalho de campo, em quatro continentes. Clique num pais para ver o trabalho realizado.",
  "map.selected": "Pais selecionado",
  "map.fallback": "Trabalho de campo em {country}. [ADICIONAR DESCRICAO]",
  "map.list": "Lista de paises",
  "map.years": "{years}+ anos de atividade",
  "map.legend.active": "Trabalho de campo",
  "map.legend.inactive": "Nao visitado",
  "map.legend.route": "Percurso profissional",
  "map.zoomIn": "Aumentar zoom",
  "map.zoomOut": "Diminuir zoom",
  "map.resetZoom": "Repor vista",

  "contact.eyebrow": "Vamos conversar",
  "contact.title": "Contacto",
  "contact.subtitle": "Para colaboracoes, consultorias ou conversas sobre terra, ambiente e dados.",
  "contact.location": "Oceanside, California, Estados Unidos",
  "contact.whatsapp.message": "Ola Antonio, encontrei o seu portfolio e gostaria de conversar.",
  "contact.form.name": "Nome",
  "contact.form.email": "E-mail",
  "contact.form.message": "Mensagem",
  "contact.form.submit": "Enviar mensagem",
  "contact.form.submitting": "A enviar...",
  "contact.form.sent": "Mensagem enviada",
  "contact.form.sentAria": "Mensagem enviada com sucesso.",
  "contact.error.name": "Indique o seu nome.",
  "contact.error.email": "Indique o seu e-mail.",
  "contact.error.emailInvalid": "Escreva um e-mail valido.",
  "contact.error.message": "Escreva uma mensagem.",
  "contact.error.messageShort": "A mensagem precisa de pelo menos 10 caracteres.",

  "footer.tagline": "Politicas publicas, terra e ambiente; 19+ anos de campo",
  "footer.nav": "Navegacao",
  "footer.connect": "Ligacoes",
  "footer.location": "Oceanside, California, Estados Unidos",
  "footer.rights": "Todos os direitos reservados.",
  "footer.backToTop": "Voltar ao topo",

  "common.present": "Presente",
  "experience.addDescription": "[ADICIONAR DESCRICAO]",

  "country.mz": "Mocambique",
  "country.us": "EUA",
  "country.zw": "Zimbabue",
  "country.ao": "Angola",
  "country.mg": "Madagascar",
  "country.au": "Australia",
  "country.za": "Africa do Sul",
  "country.zm": "Zambia",
  "country.gm": "Gambia",
  "country.mw": "Malawi",
  "country.cm": "Camaroes",
  "country.br": "Brasil",

  "skill.politicas.title": "Politicas Publicas",
  "skill.politicas.desc":
    "Desenho e avaliacao de politicas de desenvolvimento, da concepcao a implementacao no terreno.",
  "skill.recursos.title": "Gestao de Recursos Naturais",
  "skill.recursos.desc":
    "Planeamento e governanca de recursos naturais partilhados entre comunidades, estado e setor privado.",
  "skill.land.title": "Direitos Fundiarios",
  "skill.land.desc":
    "Formalizacao e protecao de direitos fundiarios comunitarios e individuais em contextos de pressao sobre a terra.",
  "skill.gis.title": "SIG",
  "skill.gis.desc":
    "Mapeamento e analise geoespacial aplicados a decisoes de terra, ambiente e planeamento territorial.",
  "skill.ambiente.title": "Ambiente",
  "skill.ambiente.desc":
    "Avaliacao ambiental e desenho de salvaguardas para projetos de desenvolvimento e infraestrutura.",
  "skill.stakeholders.title": "Envolvimento de Stakeholders",
  "skill.stakeholders.desc":
    "Construcao de consenso entre comunidades, governos, doadores e parceiros de implementacao.",

  "projects.eyebrow": "Trabalho selecionado",
  "projects.title": "Projetos em Destaque",
  "projects.subtitle":
    "Documentacao de terra, SIG e iniciativas de governanca comunitaria em tres continentes.",

  "gallery.eyebrow": "No terreno",
  "gallery.title": "Galeria",
  "gallery.subtitle":
    "Conferencias, premios e momentos de campo; fotos em breve.",
  "gallery.filter.all": "Todos",
  "gallery.filter.conferences": "Conferencias",
  "gallery.filter.awards": "Premios",
  "gallery.filter.fieldwork": "Terreno",
  "gallery.empty": "Fotos em breve",
};

const dictionaries: Record<Locale, Dict> = { en, pt };

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string>) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("locale");
      if (stored === "pt" || stored === "en") {
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable; keep the English default
    }
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    try {
      window.localStorage.setItem("locale", next);
    } catch {
      // localStorage unavailable; locale still applies for this session
    }
  }

  function t(key: string, vars?: Record<string, string>) {
    let text = dictionaries[locale][key] ?? key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
      });
    }
    return text;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
