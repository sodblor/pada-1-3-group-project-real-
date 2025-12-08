// app/lib/aimagData.jsx

export const AIMAG_LIST = [
  {
    slug: "ulaanbaatar",
    name: "Улаанбаатар",
    shortDescription: "The bustling capital of Mongolia.",
    attractions: [
      // { name: "Gandan Monastery", note: "Historic Buddhist monastery", image: "/images/gandan.jpg" },
    ],
    hotels: [
      // { name: "Blue Sky Hotel", address: "Peace Ave 10", link: "https://bluesky.mn" },
    ],
    restaurants: [
      // { name: "Modern Nomads", address: "Peace Ave 5", link: "https://modernnomads.mn" },
    ],
    transportOptions: [
      // { mode: "Bus", note: "City bus network" },
      // { mode: "Taxi", note: "Easily available" },
    ],
    tips: [
      // "Carry cash for smaller shops",
      // "Best time to visit: June-August"
    ],
  },

  {
    slug: "arkhangai",
    name: "Архангай",
    shortDescription: "Mountainous province with lakes and nomadic culture.",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "bayan-ulgii",
    name: "Баян-Өлгий",
    shortDescription: "Home of Kazakh culture and Altai mountains.",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "bayankhongor",
    name: "Баянхонгор",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "bulgan",
    name: "Булган",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "govi-altai",
    name: "Говь-Алтай",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "govisumber",
    name: "Говьсүмбэр",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "darkhan-uul",
    name: "Дархан-Уул",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "dornod",
    name: "Дорнод",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "dornogovi",
    name: "Дорноговь",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "dundgovi",
    name: "Дундговь",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "zavkhan",
    name: "Завхан",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "orkhon",
    name: "Орхон",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "uvurkhangai",
    name: "Өвөрхангай",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "umnugovi",
    name: "Өмнөговь",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "sukhbaatar",
    name: "Сүхбаатар",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "selenge",
    name: "Сэлэнгэ",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "tuv",
    name: "Төв",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "uvs",
    name: "Увс",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "khovd",
    name: "Ховд",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "khuvsgul",
    name: "Хөвсгөл",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },

  {
    slug: "khentii",
    name: "Хэнтий",
    shortDescription: "",
    attractions: [],
    hotels: [],
    restaurants: [],
    transportOptions: [],
    tips: [],
  },
];

// helper function
export const getAimagBySlug = (slug) => AIMAG_LIST.find((a) => a.slug === slug);
