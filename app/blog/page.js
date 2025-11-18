"use client";

import React, { useEffect, useState } from "react";

export default function Blog() {
  const [ready, setReady] = useState(false);

  const bgImage =
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1";

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
    
      <img
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover"
      />

  
      <div className="absolute inset-0 bg-black/40" />

     
      <div
        className={`relative max-w-3xl mx-auto pt-28 pb-16 px-6 text-white transition-all duration-700 ease-out ${
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-4xl font-bold mb-4">Travel Agency Blog</h1>
        <p className="text-lg mb-10 opacity-90">
          Welcome to our travel insights, tips, and destination highlights.
        </p>

        <div className="space-y-12">
        
          <article
            className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all duration-700 ease-out ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <h2 className="text-2xl font-semibold mb-2">
              Exploring Hidden Gems Around the World
            </h2>
            <p className="opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              justo risus. Vivamus suscipit urna sit amet ultricies placerat.
            </p>
          </article>

     
          <article
            className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all duration-700 ease-out ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <h2 className="text-2xl font-semibold mb-2">
              Top 10 Destinations for Adventure Lovers
            </h2>
            <p className="opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla lorem id feugiat ornare.
            </p>
          </article>

         
          <article
            className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all duration-700 ease-out ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <h2 className="text-2xl font-semibold mb-2">
              How to Travel Smart on a Budget
            </h2>
            <p className="opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              maximus turpis at mi efficitur.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
