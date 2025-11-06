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
    const destination = search.trim().toLowerCase();
    router.push(`/destination/${destination}`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={images[index]}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 bg-white p-3 rounded-full w-[400px]">
        <input
          className="flex-1 outline-none"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="px-5 bg-gray-700 rounded-xl py-1"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
