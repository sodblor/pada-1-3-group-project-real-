"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { messages } from "../messages";
import {
  Globe,
  HeartPulse,
  Plane,
  Map,
  ShieldCheck,
  ExternalLink,
  Sun,
  CloudSnow,
  CloudRain,
  CloudSun,
} from "lucide-react";

const getTravelResources = (t) => [
  {
    categoryKey: "visaEntry",
    nameKey: "mongoliaVisaInfo",
    descriptionKey: "mongoliaVisaInfoDesc",
    link: "https://www.mfa.gov.mn/en/travel-to-mongolia",
  },
  {
    categoryKey: "visaEntry",
    nameKey: "mongoliaEVisa",
    descriptionKey: "mongoliaEVisaDesc",
    link: "https://evisa.mn/",
  },
  {
    categoryKey: "visaEntry",
    nameKey: "consularVisaPortal",
    descriptionKey: "consularVisaPortalDesc",
    link: "https://en.consul.mn/visa/c/82",
  },
  {
    categoryKey: "healthcare",
    nameKey: "cdcTravelersHealth",
    descriptionKey: "cdcTravelersHealthDesc",
    link: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/mongolia",
  },
  {
    categoryKey: "healthcare",
    nameKey: "travelInsurance",
    descriptionKey: "travelInsuranceDesc",
    link: "https://www.worldnomads.com/",
  },
  {
    categoryKey: "healthcare",
    nameKey: "healthcareTips",
    descriptionKey: "healthcareTipsDesc",
    link: "https://www.gov.uk/foreign-travel-advice/mongolia/health",
  },
  {
    categoryKey: "transportation",
    nameKey: "miatAirlines",
    descriptionKey: "miatAirlinesDesc",
    link: "https://www.miat.com/",
  },
  {
    categoryKey: "transportation",
    nameKey: "busTrainInfo",
    descriptionKey: "busTrainInfoDesc",
    link: "https://eticket.transdep.mn/?language=en",
  },
  {
    categoryKey: "transportation",
    nameKey: "carRentals",
    descriptionKey: "carRentalsDesc",
    link: "https://www.discovermongolia.mn/car-rental",
  },
  {
    categoryKey: "travelTools",
    nameKey: "mapsMe",
    descriptionKey: "mapsMeDesc",
    link: "https://maps.me/",
  },
  {
    categoryKey: "travelTools",
    nameKey: "tripPlanner",
    descriptionKey: "tripPlannerDesc",
    link: "https://visitmongolia.com/",
  },
  {
    categoryKey: "travelTools",
    nameKey: "currencyConverter",
    descriptionKey: "currencyConverterDesc",
    link: "https://www.mongolbank.mn/en/currency-rates",
  },
].map(resource => ({
  category: t.resourceCategories?.[resource.categoryKey] || resource.categoryKey,
  name: t.resourceNames?.[resource.nameKey] || resource.nameKey,
  description: t.resourceDescriptions?.[resource.descriptionKey] || resource.descriptionKey,
  link: resource.link,
  categoryKey: resource.categoryKey,
  nameKey: resource.nameKey,
}));

const iconFor = (category) => {
  if (category.includes("Visa")) return Globe;
  if (category.includes("Healthcare")) return HeartPulse;
  if (category.includes("Transport")) return Plane;
  if (category.includes("Tools")) return Map;
  return ShieldCheck;
};

export default function TravelResourcesPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const { lang } = useLanguage();
  const t = messages[lang] || messages.en;

  const travelResources = getTravelResources(t);

  const weatherData = [
    {
      season: t.seasons?.winter || "Winter",
      months: t.weatherData?.[0]?.months || "Dec – Feb",
      temp: t.weatherData?.[0]?.temp || "-30 °C to -10 °C",
      description: t.weatherData?.[0]?.description || "Frozen lakes, snowy steppes, Blue Pearl Ice Festival and Thousand Camel Festival.",
      Icon: CloudSnow,
    },
    {
      season: t.seasons?.spring || "Spring",
      months: t.weatherData?.[1]?.months || "Mar – May",
      temp: t.weatherData?.[1]?.temp || "-5 °C to 15 °C",
      description: t.weatherData?.[1]?.description || "Blossoming valleys, Tsagaan Sar, Spring Golden Eagle Festival.",
      Icon: Sun,
    },
    {
      season: t.seasons?.summer || "Summer",
      months: t.weatherData?.[2]?.months || "Jun – Aug",
      temp: t.weatherData?.[2]?.temp || "15 °C to 30 °C",
      description: t.weatherData?.[2]?.description || "Naadam Festival, Yak Festival, Danshig Religious Festival, Tsaatan Reindeer Festival.",
      Icon: CloudSun,
    },
    {
      season: t.seasons?.autumn || "Autumn",
      months: t.weatherData?.[3]?.months || "Sep – Nov",
      temp: t.weatherData?.[3]?.temp || "0 °C to 15 °C",
      description: t.weatherData?.[3]?.description || "Steppe turns golden, Golden Eagle Festival, fewer crowds.",
      Icon: CloudRain,
    },
  ];

  const filtered =
    active === "All"
      ? travelResources.filter((r) =>
          `${r.name} ${r.description}`.toLowerCase().includes(query.toLowerCase())
        )
      : travelResources.filter(
          (r) =>
            r.category === active &&
            `${r.name} ${r.description}`.toLowerCase().includes(query.toLowerCase())
        );

  const categories = [...new Set(travelResources.map((r) => r.category))];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/oneinfo.jpg"
            alt={t.heroTitle}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-xl text-center px-4">
              {t.heroTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 -mt-20 z-10">
        {/* Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl">
            <p className="font-bold text-lg text-gray-900 dark:text-gray-100">{t.infoCards.capitalCity}</p>
            <p className="text-gray-700 dark:text-gray-300">{t.infoCards.ulaanbaatar}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl">
            <p className="font-bold text-lg text-gray-900 dark:text-gray-100">{t.infoCards.writingSystem}</p>
            <p className="text-gray-700 dark:text-gray-300">{t.infoCards.mongolianCyrillic}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl">
            <p className="font-bold text-lg text-gray-900 dark:text-gray-100">{t.infoCards.demographics}</p>
            <p className="text-gray-700 dark:text-gray-300">{t.infoCards.mongolKazakh}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl">
            <p className="font-bold text-lg text-gray-900 dark:text-gray-100">{t.infoCards.religion}</p>
            <p className="text-gray-700 dark:text-gray-300">{t.infoCards.buddhismIslam}</p>
          </div>
        </div>

        {/* Ulaanbaatar Weather Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {t.currentWeather}
          </h2>

          <div className="rounded-xl overflow-hidden">
            <a
              className="weatherwidget-io block w-full"
              href="https://forecast7.com/en/47d89106d91/ulaanbaatar/"
              data-label_1="ULAANBAATAR"
              data-label_2="WEATHER"
              data-theme="sky"
            >
              ULAANBAATAR WEATHER
            </a>
          </div>

          <script>
            {`
              !function(d,s,id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if(!d.getElementById(id)){
                  js = d.createElement(s);
                  js.id = id;
                  js.src = 'https://weatherwidget.io/js/widget.min.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }
              }(document,'script','weatherwidget-io-js');
            `}
          </script>
        </div>

        {/* Seasons Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {t.seasonsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherData.map(({ season, months, temp, description, Icon }) => (
              <div
                key={season}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="text-blue-500 dark:text-yellow-400" size={24} />
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{season}</h3>
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{months}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{temp}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Currency & Payment */}
        <section className="space-y-12 mt-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8">
            {/* Left: bank image */}
            <img
              src="bank2.jpeg"
              alt="Bank"
              className="w-full lg:w-1/2 h-auto object-cover rounded-xl shadow-lg"
            />

            {/* Right: currency container */}
            <div className="flex-1 flex flex-col">
              {/* Section Title */}
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                {t.currencySectionTitle}
              </h2>

              {/* Currency Info Card */}
              <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
                <p className="text-gray-900 dark:text-gray-200">
                  <strong>{t.currency.officialCurrency}</strong>
                </p>
                <p className="text-gray-900 dark:text-gray-200">
                  <strong>{t.currency.taxFree.split(":")[0]}:</strong> {t.currency.taxFree.split(":")[1]}{" "}
                  <a
                    href="https://en.ulaanbaatar-airport.mn/tax-refund"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    {t.currency.learnMore}
                  </a>
                </p>
                <p className="text-gray-900 dark:text-gray-200">
                  <strong>{t.currency.paymentMethods.split(":")[0]}:</strong> {t.currency.paymentMethods.split(":")[1]}
                </p>
                <p className="text-gray-900 dark:text-gray-200">
                  <strong>{t.currency.tippingCulture.split(":")[0]}:</strong> {t.currency.tippingCulture.split(":")[1]}
                </p>
              </div>

              {/* Decorative image */}
              <img
                src="banks.png"
                alt=""
                className="w-full md:w-60 h-auto object-contain rounded-xl mt-6 self-start"
              />
            </div>
          </div>
        </section>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 z-10 relative mt-16">
          <button
            onClick={() => setActive("All")}
            className={`px-4 py-2 rounded-full font-medium border transition-colors duration-500 ${
              active === "All"
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {t.allCategory}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors duration-500 ${
                active === c
                  ? "bg-purple-500 text-white border-purple-500"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Travel Resources Bento Grid */}
        <div className="space-y-12 relative z-10 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            {filtered.map((r, i) => {
              const Icon = iconFor(r.category);

              const rowSpanMap = {
                travelInsurance: 3,
                consularVisaPortal: 3,
                carRentals: 3,
              };
              const rowSpan = rowSpanMap[r.nameKey] || 2;

              const imageMap = {
                mongoliaVisaInfo: "/visa.jpeg",
                mongoliaEVisa: "/evisa2.jpeg",
                consularVisaPortal: "/visa3.jpeg",
                cdcTravelersHealth: "/cdc.png",
                healthcareTips: "/healthcare.png",
                travelInsurance: "/insurance.jpg",
                miatAirlines: "/miat.jpeg",
                busTrainInfo: "/bus.jpg",
                mapsMe: "/map.jpg",
                tripPlanner: "/travelplan.jpg",
                currencyConverter: "/USD-MNT.jpg",
                carRentals: "/rental.jpg",
              };
              const imgSrc = imageMap[r.nameKey] || "/placeholder.png";

              return (
                <a
                  key={i}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
                  style={{ gridRowEnd: `span ${rowSpan}` }}
                >
                  {/* Image */}
                  <div
                    className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 text-sm relative overflow-hidden"
                    style={{
                      height: rowSpan === 3 ? "420px" : "360px",
                    }}
                  >
                    <img src={imgSrc} alt={r.name} className="w-full h-full object-cover" />

                    {/* Category badge */}
                    <div className="absolute top-2 left-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-2 py-1 text-xs flex items-center gap-1">
                      <Icon size={14} /> {r.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{r.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{r.description}</p>
                    <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {t.visitLink} <ExternalLink size={16} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}