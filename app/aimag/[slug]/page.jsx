// app/aimag/[slug]/page.jsx
"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { getAimagBySlug } from "../../lib/aimagData";
import {
  AimagDestinationDetails,
  AimagHotelDetails,
} from "../../components/AimagDestinationDetails";

export default function AimagPage() {
  const params = useParams();
  const slug = params?.slug;
  const aimag = getAimagBySlug(slug);

  if (!aimag) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{aimag.name}</h1>
      {aimag.shortDescription && (
        <p className="mb-6">{aimag.shortDescription}</p>
      )}

      {aimag.attractions?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Main attractions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {aimag.attractions.map((attr, idx) => (
              <AimagDestinationDetails key={idx} attraction={attr} />
            ))}
          </div>
        </section>
      )}

      {aimag.hotels?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Hotels</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {aimag.hotels.map((hotel, idx) => (
              <AimagHotelDetails key={idx} hotel={hotel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
