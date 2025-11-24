"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const images = [
    { src: "https://images.unsplash.com/photo-1597434429739-2574d7e06807", type: "warm" },
    { src: "https://images.unsplash.com/photo-1680551294585-891c84bf6d43", type: "cool" },
    { src: "https://images.unsplash.com/photo-1664433451451-11337deef597", type: "dark" },
  ];

  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const router = useRouter();


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const handleSearch = () => {
    const slug = search.trim().toLowerCase();
    if (!slug) return;
    router.push(`/${slug}`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const gradients = {
    warm: "bg-gradient-to-b from-stone-900/50 via-stone-800/30 to-stone-900/60",
    cool: "bg-gradient-to-b from-neutral-800/45 via-neutral-700/25 to-neutral-900/65",
    dark: "bg-gradient-to-b from-black/20 via-black/30 to-black/70",
  };

  const { src: img, type } = images[index];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={img}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-[.92] contrast-[1.05] transition-opacity duration-1000"
      />
      <div className={`absolute inset-0 ${gradients[type]}`} />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 w-[90%] max-w-md p-3 bg-white/90 rounded-full shadow-lg backdrop-blur-md">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
          className="flex-1 px-4 py-2 rounded-full outline-none text-black placeholder-gray-600 focus:ring-2 focus:ring-gray-500 transition"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}
