"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const images = [
    "https://images.unsplash.com/photo-1597434429739-2574d7e06807",
    "https://images.unsplash.com/photo-1680551294585-891c84bf6d43",
    "https://images.unsplash.com/photo-1664433451451-11337deef597",
  ];

  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  const handleSearch = () => {
    if (!search.trim()) return;
    router.push(`/map`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const warm =
    "bg-gradient-to-b from-stone-900/50 via-stone-800/30 to-stone-900/60";
  const cool =
    "bg-gradient-to-b from-neutral-800/45 via-neutral-700/25 to-neutral-900/65";
  const dark = "bg-gradient-to-b from-black/20 via-black/30 to-black/70";

  const img = images[index];
  const gradient =
    img.includes("snow") || img.includes("lake") || img.includes("blue")
      ? cool
      : img.includes("night") || img.includes("dark")
      ? dark
      : warm;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover brightness-[.92] contrast-[1.05]"
      />
      <div className={`absolute inset-0 ${gradient}`} />
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white/50 z-10">
        <p className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          Wander where the world feels endless
        </p>
        <p className="text-2xl md:text-3xl font-medium drop-shadow-lg animate-fade-in animation-delay-200">
          and your heart feels free.
        </p>
      </div>
      
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 bg-white p-3 rounded-full w-[400px]">
        <input
          className="flex-1 px-2 py-1 outline-none text-black"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="px-5 bg-gray-700 rounded-xl py-1 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
