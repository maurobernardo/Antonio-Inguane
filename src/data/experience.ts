export type ExperienceItem = {
  role: string;
  org: string;
  start: string;
  end: string | null;
  countryCode: string;
  description: string | null;
};

export const experience: ExperienceItem[] = [
  {
    role: "Managing Director",
    org: "Mozambique Flying Labs",
    start: "2025",
    end: null,
    countryCode: "MZ",
    description: null,
  },
  {
    role: "Senior Strategic Advisor",
    org: "Data4Angola",
    start: "2024",
    end: null,
    countryCode: "AO",
    description: null,
  },
  {
    role: "Co-Founder",
    org: "data4MOZ",
    start: "2020",
    end: null,
    countryCode: "MZ",
    description: null,
  },
  {
    role: "Consultant",
    org: "IFC: STC Indirect Jobs Estimation",
    start: "2023",
    end: "2023",
    countryCode: "MZ",
    description: null,
  },
  {
    role: "Consultant / Programs Specialist",
    org: "Cadasta Foundation",
    start: "2019",
    end: "2023",
    countryCode: "US",
    description: null,
  },
  {
    role: "Food Systems Assessment Consultant",
    org: "FAO",
    start: "2021",
    end: "2021",
    countryCode: "MZ",
    description: null,
  },
  {
    role: "Technical Assessment Panel Member",
    org: "Palladium / Australia Awards",
    start: "2018",
    end: "2019",
    countryCode: "AU",
    description: null,
  },
  {
    role: "Land Economist Consultant",
    org: "Social Impact",
    start: "2018",
    end: "2019",
    countryCode: "ZM",
    description: null,
  },
  {
    role: "Methodology Expert / Community Outreach Advisor",
    org: "iTC Foundation",
    start: "2016",
    end: "2018",
    countryCode: "MZ",
    description: null,
  },
  {
    role: "National Stakeholder Engagement Expert",
    org: "UNDP",
    start: "2016",
    end: "2016",
    countryCode: "MZ",
    description: null,
  },
  {
    role: "Community Expert / Senior Advisor",
    org: "AMBERO Consulting GmbH",
    start: "2009",
    end: "2011",
    countryCode: "MW",
    description: null,
  },
];
