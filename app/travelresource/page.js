"use client";

import { useMemo, useState, useEffect } from "react";
import {
  ShieldCheck,
  Globe,
  Plane,
  Map,
  HeartPulse,
  ExternalLink,
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

const groupByCategory = (resources = []) => {
  return resources.reduce((acc, r) => {
    if (!acc[r.category]) acc[r.category] = [];
    acc[r.category].push(r);
    return acc;
  }, {});
};

export default function TravelResourcesPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(travelResources.map((r) => r.category))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return travelResources.filter((r) => {
      const validCategory = active === "All" || r.category === active;
      if (!q) return validCategory;
      const text = `${r.name} ${r.description} ${r.category}`.toLowerCase();
      return validCategory && text.includes(q);
    });
  }, [query, active]);

  const grouped = useMemo(() => groupByCategory(filtered), [filtered]);

  const iconFor = (category) => {
    if (category.includes("Visa")) return Globe;
    if (category.includes("Healthcare")) return HeartPulse;
    if (category.includes("Transport")) return Plane;
    if (category.includes("Tools")) return Map;
    return ShieldCheck;
  };

  return (
    <div
      className="relative min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/service1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* PAGE FADE-IN */}
      <div
        className={`relative max-w-6xl mx-auto pt-28 pb-16 px-4 md:px-6 transition-all duration-700 ease-out ${
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Travel Resources
        </h1>
        <p className="text-white text-center mb-10">
          Essential links and tools for planning your trip to Mongolia.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 rounded-full border text-sm ${
                  active === c
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Хайх: visa, insurance, maps..."
            className="w-full md:max-w-md px-4 py-2.5 bg-white border rounded-xl text-sm outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="space-y-12">
          {Object.entries(grouped).map(([category, list], idx) => {
            const Icon = iconFor(category);

            return (
              <section
                key={category}
                className={`transition-all duration-700 ease-out ${
                  ready
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${150 + idx * 150}ms` }} // stagger section
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    {category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((r, i) => (
                    <article
                      key={i}
                      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-700 ease-out ${
                        ready
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                      style={{ transitionDelay: `${250 + i * 100}ms` }} // stagger cards
                    >
                      <h3 className="text-lg font-semibold text-black">
                        {r.name}
                      </h3>

                      <p className="text-sm text-slate-600 mt-2 min-h-[48px]">
                        {r.description}
                      </p>

                      <a
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-black hover:text-blue-800"
                      >
                        Visit <ExternalLink size={16} />
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
