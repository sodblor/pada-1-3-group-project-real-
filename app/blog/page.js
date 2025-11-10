"use client";

import React, { useState } from "react";
export default function Blog() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`${
        dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen p-8`}
    >
      <button
        onClick={() => setDark(!dark)}
        className="mb-6 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>

      <h1 className="text-4xl font-bold mb-4">Travel Agency Blog</h1>
      <p className="text-lg mb-6">
        Welcome to our travel insights, tips, and destination highlights!
      </p>

      <div className="space-y-8">
        {/* Post 1 */}
        <article>
          <h2 className="text-2xl font-semibold mb-2">
            Exploring Hidden Gems Around the World
          </h2>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            justo risus. Vivamus suscipit, urna sit amet ultricies placerat,
            ipsum velit molestie arcu, ut facilisis libero odio nec nisi.
            Aliquam erat volutpat.
          </p>
        </article>

        {/* Post 2 */}
        <article>
          <h2 className="text-2xl font-semibold mb-2">
            Top 10 Destinations for Adventure Lovers
          </h2>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fringilla, lorem id feugiat ornare, turpis odio cursus mi, eu
            consequat eros justo non ligula. Suspendisse potenti.
          </p>
        </article>

        {/* Post 3 */}
        <article>
          <h2 className="text-2xl font-semibold mb-2">
            How to Travel Smart on a Budget
          </h2>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            maximus turpis at mi efficitur, vel sodales massa feugiat. Aenean
            euismod nulla et nisl porttitor, eget consequat purus luctus.
          </p>
        </article>
      </div>
    </div>
  );
}
