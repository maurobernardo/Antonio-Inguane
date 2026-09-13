export type Country = {
  code: string;
  key: string;
  mapName: string;
  coordinates: [number, number];
};

export const countries: Country[] = [
  { code: "MZ", key: "country.mz", mapName: "Mozambique", coordinates: [32.5732, -25.9692] },
  {
    code: "US",
    key: "country.us",
    mapName: "United States of America",
    coordinates: [-77.0369, 38.9072],
  },
  { code: "ZW", key: "country.zw", mapName: "Zimbabwe", coordinates: [31.0492, -17.8292] },
  { code: "AO", key: "country.ao", mapName: "Angola", coordinates: [13.2343, -8.8383] },
  { code: "MG", key: "country.mg", mapName: "Madagascar", coordinates: [47.5079, -18.8792] },
  { code: "AU", key: "country.au", mapName: "Australia", coordinates: [149.13, -35.2809] },
  { code: "ZA", key: "country.za", mapName: "South Africa", coordinates: [28.1871, -25.7461] },
  { code: "ZM", key: "country.zm", mapName: "Zambia", coordinates: [28.2871, -15.4167] },
  { code: "GM", key: "country.gm", mapName: "Gambia", coordinates: [-16.579, 13.4549] },
  { code: "MW", key: "country.mw", mapName: "Malawi", coordinates: [33.7741, -13.9626] },
  { code: "CM", key: "country.cm", mapName: "Cameroon", coordinates: [11.5021, 3.848] },
  { code: "BR", key: "country.br", mapName: "Brazil", coordinates: [-47.8825, -15.7942] },
];
