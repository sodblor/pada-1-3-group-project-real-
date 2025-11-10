"use client";

import { SLUG_TO_AIMAG_ID, AIMAG_ID_TO_NAME } from "../../components/AimagData";
import { notFound } from "next/navigation";
import { use } from "react";
import data from "../../components/data";

export default function Page(props) {
  const mongoliaData = {
    MN073: {
      name: "Arkhangai",
      center: "Tsetserleg",
      population: 96000,
      area_km2: 55400,
      attractions: [
        "Khorgo Volcano",
        "Terkhiin Tsagaan Lake",
        "Mörön Monastery",
      ],
      economy: ["livestock", "tourism", "forestry"],
      images: ["/images/arkhangai/1.jpg", "/images/arkhangai/2.jpg"],
    },
    MN071: {
      name: "Bayan-Ölgii",
      center: "Ölgii",
      population: 100000,
      area_km2: 44900,
      attractions: ["Altai Mountains", "Kazakh Eagle Hunters Festival"],
      economy: ["livestock", "tourism", "camel breeding"],
      images: ["/images/bayan-olgii/1.jpg", "/images/bayan-olgii/2.jpg"],
    },
    MN069: {
      name: "Bayankhongor",
      center: "Bayankhongor",
      population: 100000,
      area_km2: 116000,
      attractions: ["Gobi Desert landscapes", "Baga Gazriin Chuluu"],
      economy: ["livestock", "mining", "agriculture"],
      images: ["/images/bayankhongor/1.jpg", "/images/bayankhongor/2.jpg"],
    },
    MN067: {
      name: "Bulgan",
      center: "Bulgan",
      population: 50000,
      area_km2: 48000,
      attractions: ["Kherlen River", "Orkhon Valley"],
      economy: ["livestock", "wheat farming"],
      images: ["/images/bulgan/1.jpg", "/images/bulgan/2.jpg"],
    },
    MN037: {
      name: "Darkhan-Uul",
      center: "Darkhan",
      population: 104000,
      area_km2: 2800,
      attractions: ["Darkhan City Park", "Local museums"],
      economy: ["industry", "livestock", "trade"],
      images: ["/images/darkhan-uul/1.jpg", "/images/darkhan-uul/2.jpg"],
    },
    MN061: {
      name: "Dornod",
      center: "Choibalsan",
      population: 87000,
      area_km2: 123600,
      attractions: ["Mongol Daguur Reserve", "Sükhbaatar monuments"],
      economy: ["livestock", "wheat farming", "mining"],
      images: ["/images/dornod/1.jpg", "/images/dornod/2.jpg"],
    },
    MN063: {
      name: "Dornogovi",
      center: "Sainshand",
      population: 74000,
      area_km2: 109000,
      attractions: ["Gobi desert", "Bayanzag (Dinosaur Bay)"],
      economy: ["mining", "livestock", "tourism"],
      images: ["/images/dornogovi/1.jpg", "/images/dornogovi/2.jpg"],
    },
    MN059: {
      name: "Dundgovi",
      center: "Mandalgovi",
      population: 44000,
      area_km2: 74400,
      attractions: ["Gobi landscapes", "local nomadic culture"],
      economy: ["livestock", "camel breeding"],
      images: ["/images/dundgovi/1.jpg", "/images/dundgovi/2.jpg"],
    },
    MN057: {
      name: "Zavkhan",
      center: "Uliastai",
      population: 62000,
      area_km2: 83900,
      attractions: ["Khar Us Nuur Lake", "Gurvan Saikhan Mountains"],
      economy: ["livestock", "tourism"],
      images: ["/images/zavkhan/1.jpg", "/images/zavkhan/2.jpg"],
    },
    MN065: {
      name: "Govi-Altai",
      center: "Altai",
      population: 58000,
      area_km2: 141000,
      attractions: ["Gobi-Altai Mountains", "Petroglyphs"],
      economy: ["livestock", "mining"],
      images: ["/images/govi-altai/1.jpg", "/images/govi-altai/2.jpg"],
    },
    MN064: {
      name: "Govisümber",
      center: "Choyr",
      population: 16000,
      area_km2: 4300,
      attractions: ["Choyr Monastery"],
      economy: ["industry", "livestock"],
      images: ["/images/govisumber/1.jpg", "/images/govisumber/2.jpg"],
    },
    MN039: {
      name: "Khentii",
      center: "Öndörkhaan",
      population: 74000,
      area_km2: 28500,
      attractions: ["Kherlen River", "Onon-Balj Reserve"],
      economy: ["livestock", "forestry"],
      images: ["/images/khentii/1.jpg", "/images/khentii/2.jpg"],
    },
    MN043: {
      name: "Khovd",
      center: "Khovd",
      population: 96000,
      area_km2: 78000,
      attractions: ["Altai Mountains", "Khar-Us Lake"],
      economy: ["livestock", "tourism", "mining"],
      images: ["/images/khovd/1.jpg", "/images/khovd/2.jpg"],
    },
    MN041: {
      name: "Khuvsgul",
      center: "Mörön",
      population: 130000,
      area_km2: 100900,
      attractions: ["Khuvsgul Lake", "Darkhad Valley"],
      economy: ["tourism", "livestock", "forestry"],
      images: ["/images/khuvsgul/1.jpg", "/images/khuvsgul/2.jpg"],
    },
    MN035: {
      name: "Orkhon",
      center: "Erdenet",
      population: 95000,
      area_km2: 8800,
      attractions: ["Erdenet Mining Town", "Orkhon River"],
      economy: ["mining", "industry"],
      images: ["/images/orkhon/1.jpg", "/images/orkhon/2.jpg"],
    },
    MN049: {
      name: "Selenge",
      center: "Sükhbaatar",
      population: 115000,
      area_km2: 41200,
      attractions: ["Orkhon River", "Terelj National Park (border)"],
      economy: ["livestock", "industry", "agriculture"],
      images: ["/images/selenge/1.jpg", "/images/selenge/2.jpg"],
    },
    MN051: {
      name: "Sukhbaatar",
      center: "Baruun-Urt",
      population: 60000,
      area_km2: 82000,
      attractions: ["Dornod Steppe", "Mongolian Nomadic Culture"],
      economy: ["livestock", "tourism"],
      images: ["/images/sukhbaatar/1.jpg", "/images/sukhbaatar/2.jpg"],
    },
    MN047: {
      name: "Tuv",
      center: "Zuunmod",
      population: 105000,
      area_km2: 7400,
      attractions: ["Bogd Khan Mountain", "Ulaanbaatar outskirts"],
      economy: ["agriculture", "industry"],
      images: ["/images/tuv/1.jpg", "/images/tuv/2.jpg"],
    },
    MN046: {
      name: "Uvs",
      center: "Uvs",
      population: 90000,
      area_km2: 69000,
      attractions: ["Uvs Lake", "Altai Mountains"],
      economy: ["livestock", "tourism"],
      images: ["/images/uvs/1.jpg", "/images/uvs/2.jpg"],
    },
    MN001: {
      name: "Ulaanbaatar",
      center: "Ulaanbaatar",
      population: 1550000,
      area_km2: 470,
      attractions: [
        "Gandan Monastery",
        "National Museum of Mongolia",
        "Zaisan Memorial",
      ],
      economy: ["government", "industry", "tourism", "services"],
      images: ["/images/ulaanbaatar/1.jpg", "/images/ulaanbaatar/2.jpg"],
    },
    MN053: {
      name: "Umnugovi",
      center: "Dalanzadgad",
      population: 65000,
      area_km2: 165000,
      attractions: ["Flaming Cliffs", "Gobi Desert landscapes"],
      economy: ["tourism", "mining", "livestock"],
      images: ["/images/umnugovi/1.jpg", "/images/umnugovi/2.jpg"],
    },
    MN055: {
      name: "Uvurkhangai",
      center: "Arvaikheer",
      population: 97000,
      area_km2: 81000,
      attractions: ["Kharkhorin Monastery", "Orkhon Valley UNESCO Site"],
      economy: ["livestock", "tourism", "agriculture"],
      images: ["/images/uvurkhangai/1.jpg", "/images/uvurkhangai/2.jpg"],
    },
  };

  const params = use(props.params);
  const { slug } = params;

  const aimagId = SLUG_TO_AIMAG_ID[slug];
  if (!aimagId) return notFound();

  const name = AIMAG_ID_TO_NAME[aimagId] || slug;

  const aimagData = data[aimagId];
  console.log(aimagData, 123);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen text-gray-800">
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
            {aimagData?.center}
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow">
              Vast horizons, nomadic culture, and timeless landscapes await.
            </p>
          </div>
        </section>

        <div className="rounded-lg border p-4">
          <p>Эндээс {name} аймагтай холбоотой контентээ filter-ээр харуулна.</p>

          {/* this shows your custom data */}
          {aimagData && (
            <div className="mt-4 text-sm text-gray-600">
              <p>Center: {aimagData.center}</p>
              <p>Population: {aimagData.humans}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
