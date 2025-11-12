"use client";

import { SLUG_TO_AIMAG_ID, AIMAG_ID_TO_NAME } from "../../components/AimagData";
import { notFound } from "next/navigation";
import { use } from "react";

export default function Page(props) {
  const params = use(props.params);
  const { slug } = params;

  const aimagId = SLUG_TO_AIMAG_ID[slug];
  if (!aimagId) return notFound();
  const name = AIMAG_ID_TO_NAME[aimagId] || slug;

  return (
        <div  className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen text-gray-800">  <br/> <br/> <br/>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="relative h-96 md:h-[560px] rounded-3xl overflow-hidden mb-16 shadow-xl">
          <img
            src={`https://source.unsplash.com/1600x900/?${name},mongolia`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div> 
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-md">
              Explore {name}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow">
              Vast horizons, nomadic culture, and timeless landscapes await.
            </p>
          </div>
        </section>
    
        <div className="rounded-lg border p-4">
          <p>Эндээс {name} аймагтай холбоотой контентээ filter-ээр харуулна.</p>
        </div>
      </main>
    </div>
)
}
