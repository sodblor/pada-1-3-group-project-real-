"use client";

import { useState } from "react";
import { ThemeProvider } from "next-themes";
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

const travelResources = [
  {
    category: "Visa & Entry",
    name: "Mongolia Visa Info",
    description:
      "Official site for visa requirements and travel information for Mongolia.",
    link: "https://www.mfa.gov.mn/en/travel-to-mongolia",
  },
  {
    category: "Visa & Entry",
    name: "Mongolia E-Visa",
    description:
      "Apply for an electronic visa (eVisa) online for eligible countries.",
    link: "https://evisa.mn/",
  },
  {
    category: "Visa & Entry",
    name: "Consular Visa Portal",
    description:
      "General Visa information for tourists, including requirements and applications.",
    link: "https://en.consul.mn/visa/c/82",
  },
  {
    category: "Healthcare & Safety",
    name: "CDC Travelers’ Health – Mongolia",
    description:
      "Vaccination and health recommendations for travelers to Mongolia.",
    link: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/mongolia",
  },
  {
    category: "Healthcare & Safety",
    name: "Travel Insurance",
    description:
      "World Nomads, Allianz, or local providers to cover medical emergencies.",
    link: "https://www.worldnomads.com/",
  },
  {
    category: "Healthcare & Safety",
    name: "Healthcare Tips",
    description:
      "Official healthcare tips from the Embassy of the United Kingdom.",
    link: "https://www.gov.uk/foreign-travel-advice/mongolia/health",
  },
  {
    category: "Transportation",
    name: "MIAT Mongolian Airlines",
    description:
      "National airline of Mongolia for flights to and from Ulaanbaatar.",
    link: "https://www.miat.com/",
  },
  {
    category: "Transportation",
    name: "Bus & Train Info",
    description: "National online ticketing system for easy use.",
    link: "https://eticket.transdep.mn/?language=en",
  },
  {
    category: "Transportation",
    name: "Car Rentals",
    description:
      "Reliable cars and experienced drivers are essential for your Mongolian adventure.",
    link: "https://www.discovermongolia.mn/car-rental",
  },
  {
    category: "Travel Tools & Planning",
    name: "Maps.me",
    description: "Offline maps for Mongolia, useful for rural travel.",
    link: "https://maps.me/",
  },
  {
    category: "Travel Tools & Planning",
    name: "Trip Planner",
    description: "A travel planning website specialized for Mongolia.",
    link: "https://visitmongolia.com/",
  },
  {
    category: "Travel Tools & Planning",
    name: "Currency Converter",
    description:
      "Official daily foreign exchange rates tracker maintained by Mongolbank.",
    link: "https://www.mongolbank.mn/en/currency-rates",
  },
];

const iconFor = (category) => {
  if (category.includes("Visa")) return Globe;
  if (category.includes("Healthcare")) return HeartPulse;
  if (category.includes("Transport")) return Plane;
  if (category.includes("Tools")) return Map;
  return ShieldCheck;
};

const weatherData = [
  {
    season: "Winter",
    months: "Dec – Feb",
    temp: "-30 °C to -10 °C",
    description:
      "Frozen lakes, snowy steppes, Blue Pearl Ice Festival and Thousand Camel Festival.",
    Icon: CloudSnow,
  },
  {
    season: "Spring",
    months: "Mar – May",
    temp: "-5 °C to 15 °C",
    description:
      "Blossoming valleys, Tsagaan Sar, Spring Golden Eagle Festival.",
    Icon: Sun,
  },
  {
    season: "Summer",
    months: "Jun – Aug",
    temp: "15 °C to 30 °C",
    description:
      "Naadam Festival, Yak Festival, Danshig Religious Festival, Tsaatan Reindeer Festival.",
    Icon: CloudSun,
  },
  {
    season: "Autumn",
    months: "Sep – Nov",
    temp: "0 °C to 15 °C",
    description: "Steppe turns golden, Golden Eagle Festival, fewer crowds.",
    Icon: CloudRain,
  },
];

export default function TravelResourcesPage() {
  const [active, setActive] = useState(""); // no default "All"
  const [query, setQuery] = useState("");

  const filtered = travelResources.filter((r) => {
    const matchCategory = !active || r.category === active;
    const matchQuery = `${r.name} ${r.description}`
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });

  const categories = [...new Set(travelResources.map((r) => r.category))];

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div
        className="w-full min-h-screen bg-cover bg-center relative transition-colors duration-500"
        style={{ backgroundImage: "url('/resourcebg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 transition-colors duration-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 space-y-20 z-10">
          {/* Hero Image */}
          <div className="flex justify-center relative z-10">
            <img
              src="/oneinfo.jpg"
              alt="Mongolia info"
              className="rounded-2xl shadow-2xl max-w-full h-auto border-4 border-white dark:border-gray-200"
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 -mt-20 relative z-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl transition-colors duration-500">
              <p className="font-bold text-lg">Capital City</p>
              <p>Ulaanbaatar</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl transition-colors duration-500">
              <p className="font-bold text-lg">Writing System</p>
              <p>Mongolian Cyrillic</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl transition-colors duration-500">
              <p className="font-bold text-lg">Demographics</p>
              <p>Mongol, Kazakh, Other</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl transition-colors duration-500">
              <p className="font-bold text-lg">Religion</p>
              <p>Buddhism, Islam, Shamanism</p>
            </div>
          </div>

          {/* Weather Section */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-6 transition-colors duration-500">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Weather and Holidays
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {weatherData.map(
                ({ season, months, temp, description, Icon }) => (
                  <div
                    key={season}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="text-blue-500 dark:text-yellow-400"
                        size={24}
                      />
                      <h3 className="font-bold text-lg">{season}</h3>
                    </div>
                    <p className="text-sm font-semibold">{months}</p>
                    <p className="text-sm">{temp}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
            <p className="italic text-gray-600 dark:text-gray-300 mt-4">
              Mongolia’s weather is full of surprises. Warm days, chilly nights
              — layer up to stay comfortable so you can enjoy the many festivals
              offered.
            </p>
          </section>

          {/* Currency & Payment */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-4 transition-colors duration-500">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Currency & Payment
            </h2>
            <p>
              <strong>Official Currency:</strong> Mongolian Tögrög (MNT)
            </p>
            <p>
              <strong>Tax-Free Shopping:</strong> Foreign visitors can enjoy
              tax-free shopping under Mongolia’s VAT refund system.{" "}
              <a
                href="https://en.ulaanbaatar-airport.mn/tax-refund"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Learn more
              </a>
            </p>
            <p>
              <strong>Payment Methods:</strong> Credit cards are widely accepted
              in Ulaanbaatar, but cash is needed in remote areas. Apple Pay
              works; other mobile payments may be limited.
            </p>
            <p>
              <strong>Tipping Culture:</strong> Tipping isn’t expected but
              appreciated. Small gifts like food or souvenirs are thoughtful in
              rural areas.
            </p>
          </section>

          {/* Category Buttons (no active highlight) */}
          <div className="flex flex-wrap justify-center gap-3 z-10 relative">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="px-4 py-2 rounded-full font-medium border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-500"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Travel Resources Grid */}
          <div className="space-y-12 relative z-10">
            {categories
              .filter((c) => filtered.some((r) => r.category === c))
              .map((category) => {
                const list = filtered.filter((r) => r.category === category);
                const Icon = iconFor(category);

                return (
                  <section key={category} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Icon size={20} />
                      </div>
                      <h2 className="text-2xl font-semibold text-white">
                        {category}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {list.map((r, i) => (
                        <a
                          key={i}
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            {r.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {r.description}
                          </p>
                          <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm">
                            Visit <ExternalLink size={16} />
                          </span>
                        </a>
                      ))}
                    </div>
                  </section>
                );
              })}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
