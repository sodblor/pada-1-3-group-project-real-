"use client";
import React, { useMemo, useState } from "react";
import { ShieldCheck, Globe, Plane, Map, HeartPulse, ExternalLink } from "lucide-react";

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
    category: "Transportation",
    name: "MIAT Mongolian Airlines",
    description:
      "National airline of Mongolia for flights to and from Ulaanbaatar.",
    link: "https://www.miat.com/",
  },
  {
    category: "Travel Tools & Planning",
    name: "Maps.me",
    description: "Offline maps for Mongolia, useful for rural travel.",
    link: "https://maps.me/",
  },
];

const groupByCategory = (resources = []) => {
  return resources.reduce((acc, resource) => {
    if (!acc[resource.category]) acc[resource.category] = [];
    acc[resource.category].push(resource);
    return acc;
  }, {});
};

export default function TravelResourcesPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const categories = useMemo(() => [
    "All",
    ...Array.from(new Set(travelResources.map(r => r.category)))
  ], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return travelResources.filter(r => {
      const okCat = active === "All" || r.category === active;
      if (!q) return okCat;
      const text = `${r.name} ${r.description} ${r.category}`.toLowerCase();
      return okCat && text.includes(q);
    });
  }, [query, active]);

  const groupedFiltered = useMemo(() => groupByCategory(filtered), [filtered]);

  const iconFor = (category) => {
    if (category.includes("Visa")) return Globe;
    if (category.includes("Healthcare")) return HeartPulse;
    if (category.includes("Transport")) return Plane;
    if (category.includes("Tools")) return Map;
    return ShieldCheck;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Travel Resources</h1>
          <p className="mt-2 text-slate-600">Essential links and tools for planning your trip to Mongolia.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 rounded-full border text-sm transition-all ${active === c ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative max-w-md w-full">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Хайх: visa, insurance, maps..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="space-y-10">
          {Object.entries(groupedFiltered).map(([category, resources]) => {
            const Icon = iconFor(category);
            return (
              <section key={category}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700"><Icon size={18} /></div>
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{category}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {resources.map((r, i) => (
                    <article
                      key={`${r.name}-${i}`}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-950">{r.name}</h3>
                      <p className="mt-1.5 text-sm text-slate-600 min-h-[48px]">{r.description}</p>
                      {r.link !== "#" && (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800"
                        >
                          Visit <ExternalLink size={16} />
                        </a>
                      )}
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
