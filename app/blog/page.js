"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Generate 15 blogs (3 pages x 5 blogs)
const posts = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post #${i + 1}`,
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: `https://picsum.photos/seed/${i + 1}/600/400`,
  tags: ["Adventure", "Travel", "Food", "Nature", "City", "Beach"][
    Math.floor(Math.random() * 6)
  ].split(","),
}));

export default function Blog() {
  const [ready, setReady] = useState(false);
  const [activeTag, setActiveTag] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;

  // Collect all unique tags
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  // Filter posts by selected tag
  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/travelbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-5xl font-bold text-white drop-shadow-lg relative z-10">
          My Latest Blog
        </h1>
      </div>

      {/* Tag Filter */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTag("")}
          className={`px-4 py-2 rounded-full font-medium border ${
            !activeTag
              ? "bg-purple-500 text-white border-purple-500"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
          } hover:bg-purple-500 hover:text-white transition-colors`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full font-medium border ${
              activeTag === tag
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
            } hover:bg-purple-500 hover:text-white transition-colors`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer bg-white dark:bg-gray-800"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* MagicBento-style Glow */}
            <span className="absolute inset-0 rounded-2xl ring-1 ring-purple-400/20 dark:ring-purple-300/20 pointer-events-none"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
