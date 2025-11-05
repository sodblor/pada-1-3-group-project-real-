"use client";
import React from "react";

// Travel resources data
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

// Group resources by category
const groupByCategory = (resources = []) => {
  return resources.reduce((acc, resource) => {
    if (!acc[resource.category]) acc[resource.category] = [];
    acc[resource.category].push(resource);
    return acc;
  }, {});
};

export default function TravelResourcesPage() {
  const groupedResources = groupByCategory(travelResources);

  return (
    <div className="p-6 space-y-8">
      {Object.entries(groupedResources).map(([category, resources]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold mb-2">{resource.name}</h3>
                <p className="text-gray-600 mb-2">{resource.description}</p>
                {resource.link !== "#" && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
