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
    <div className="relative min-h-screen bg-gradient-to-b from-[#DDE6ED] to-[#9DB2BF]">
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] overflow-hidden">
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
            <h1 className="text-5xl font-bold text-white drop-shadow-lg relative z-10">
              {t.heroTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 z-10">
        {/* Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 relative z-10 mt-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[#9DB2BF]/30">
            <p className="font-bold text-lg text-[#27374D] mb-2">{t.infoCards.capitalCity}</p>
            <p className="text-[#526D82]">{t.infoCards.ulaanbaatar}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[#9DB2BF]/30">
            <p className="font-bold text-lg text-[#27374D] mb-2">{t.infoCards.writingSystem}</p>
            <p className="text-[#526D82]">{t.infoCards.mongolianCyrillic}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[#9DB2BF]/30">
            <p className="font-bold text-lg text-[#27374D] mb-2">{t.infoCards.demographics}</p>
            <p className="text-[#526D82]">{t.infoCards.mongolKazakh}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[#9DB2BF]/30">
            <p className="font-bold text-lg text-[#27374D] mb-2">{t.infoCards.religion}</p>
            <p className="text-[#526D82]">{t.infoCards.buddhismIslam}</p>
          </div>
        </div>

        {/* Seasons Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
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
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="bank2.jpeg"
                alt="Bank"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right: currency container */}
            <div className="flex-1 flex flex-col">
              {/* Section Title */}
              <h2 className="text-3xl font-bold text-[#27374D] mb-6">
                {t.currencySectionTitle}
              </h2>

              {/* Currency Info Card */}
              <div className="bg-gradient-to-br from-[#DDE6ED] to-white rounded-2xl shadow-xl p-6 md:p-8 space-y-5 border border-[#9DB2BF]/30">
                <div className="p-4 bg-white/60 rounded-xl">
                  <p className="text-[#27374D] text-lg">
                    <strong className="text-[#27374D]">{t.currency.officialCurrency}</strong>
                  </p>
                </div>
                <div className="p-4 bg-white/60 rounded-xl">
                  <p className="text-[#27374D]">
                    <strong>{t.currency.taxFree.split(":")[0]}:</strong> {t.currency.taxFree.split(":")[1]}{" "}
                    <a
                      href="https://en.ulaanbaatar-airport.mn/tax-refund"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#526D82] underline hover:text-[#27374D] font-medium transition-colors"
                    >
                      {t.currency.learnMore}
                    </a>
                  </p>
                </div>
                <div className="p-4 bg-white/60 rounded-xl">
                  <p className="text-[#27374D]">
                    <strong>{t.currency.paymentMethods.split(":")[0]}:</strong> {t.currency.paymentMethods.split(":")[1]}
                  </p>
                </div>
                <div className="p-4 bg-white/60 rounded-xl">
                  <p className="text-[#27374D]">
                    <strong>{t.currency.tippingCulture.split(":")[0]}:</strong> {t.currency.tippingCulture.split(":")[1]}
                  </p>
                </div>
              </div>

              {/* Decorative image */}
              <div className="mt-6 self-start rounded-xl overflow-hidden shadow-lg">
                <img
                  src="banks.png"
                  alt=""
                  className="w-full md:w-60 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 z-10 relative mt-16 mb-8">
          <button
            onClick={() => setActive("All")}
            className={`px-5 py-2.5 rounded-full font-semibold border-2 transition-all duration-300 shadow-sm ${
              active === "All"
                ? "bg-[#27374D] text-white border-[#27374D] shadow-md scale-105"
                : "bg-white text-[#526D82] border-[#9DB2BF] hover:bg-[#DDE6ED] hover:border-[#526D82] hover:shadow-md"
            }`}
          >
            {t.allCategory}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full font-semibold border-2 transition-all duration-300 shadow-sm ${
                active === c
                  ? "bg-[#27374D] text-white border-[#27374D] shadow-md scale-105"
                  : "bg-white text-[#526D82] border-[#9DB2BF] hover:bg-[#DDE6ED] hover:border-[#526D82] hover:shadow-md"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Travel Resources Grid */}
        <div className="space-y-12 relative z-10 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => {
              const Icon = iconFor(r.category);

              const imageMap = {
                mongoliaVisaInfo: "https://cdn.greensoft.mn/uploads/site/602/block/new_b98600dc0473267c959d56f40aab96d0db9c1ac5.jpg",
                mongoliaEVisa: "https://cdn.passporthealthusa.com/wp-content/uploads/2018/02/e-visa.jpg?x88681",
                consularVisaPortal: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mongolia_Passport_2023.svg/847px-Mongolia_Passport_2023.svg.png",
                cdcTravelersHealth: "https://static.vecteezy.com/system/resources/previews/024/637/507/large_2x/medical-equipment-healthcare-ai-generative-free-photo.jpg",
                healthcareTips: "https://static.vecteezy.com/system/resources/previews/040/192/771/non_2x/logo-spiritual-health-care-psychology-meditation-person-and-nature-logo-vintage-calm-aesthetic-and-modern-editable-color-vector.jpg",
                travelInsurance: "https://wwwnc.cdc.gov/travel/images/claim-form.jpg",
                miatAirlines: "https://montsame.mn/uploads/content/fbb4b520237a13adae6cb9d84f7ee550.png",
                busTrainInfo: "https://montsame.mn/files/65a4b130408b2.jpeg",
                mapsMe: "https://www.livelikeitstheweekend.com/wp-content/uploads/2019/02/Google-Maps-Trip-Planner-16.png",
                tripPlanner: "https://media.istockphoto.com/id/489525460/photo/couple-planning-honeymoon.jpg?s=612x612&w=0&k=20&c=7xgMS9mUlXri53V1t4QMEuIngc6nMe3_fWX1he157IY=",
                currencyConverter: "https://cdn.corporatefinanceinstitute.com/assets/currency-1024x682.jpeg",
                carRentals: "/rental.jpg",
              };
              const imgSrc = imageMap[r.nameKey] || "/placeholder.png";

              return (
                <a
                  key={i}
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#9DB2BF]/30 transform hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 50}ms forwards`,
                    opacity: 0
                  }}
                >
                  {/* Image */}
                  <div className="relative bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] overflow-hidden h-56">
                    <img
                      src={imgSrc}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#27374D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#27374D] rounded-xl px-4 py-2 text-xs font-semibold flex items-center gap-2 shadow-xl border border-[#9DB2BF]/30">
                      <Icon size={16} className="text-[#526D82]" />
                      <span>{r.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#27374D] mb-3 group-hover:text-[#526D82] transition-colors duration-300 line-clamp-2">
                      {r.name}
                    </h3>
                    <p className="text-[#526D82] text-sm mb-4 line-clamp-3 leading-relaxed">
                      {r.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#DDE6ED]">
                      <span className="inline-flex items-center gap-2 text-[#526D82] text-sm font-medium group-hover:text-[#27374D] transition-colors duration-300">
                        {t.visitLink} <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#9DB2BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}