"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { messages } from "../messages";
import { useLanguage } from "../context/LanguageContext";

const blogData = [
  {
    id: 1,
    titleKey: "post1Title",
    excerptKey: "post1Excerpt",
    image: "https://picsum.photos/seed/1/600/400",
    tags: ["Adventure", "Nature"],
  },
  {
    id: 2,
    titleKey: "post2Title",
    excerptKey: "post2Excerpt",
    image: "https://picsum.photos/seed/2/600/400",
    tags: ["City", "Travel"],
  },
  {
    id: 3,
    titleKey: "post3Title",
    excerptKey: "post3Excerpt",
    image: "https://picsum.photos/seed/3/600/400",
    tags: ["Beach", "Nature"],
  },
  {
    id: 4,
    titleKey: "post4Title",
    excerptKey: "post4Excerpt",
    image: "https://picsum.photos/seed/4/600/400",
    tags: ["Food", "City"],
  },
  {
    id: 5,
    titleKey: "post5Title",
    excerptKey: "post5Excerpt",
    image: "https://picsum.photos/seed/5/600/400",
    tags: ["Adventure", "Travel"],
  },
  {
    id: 6,
    titleKey: "post6Title",
    excerptKey: "post6Excerpt",
    image: "https://picsum.photos/seed/6/600/400",
    tags: ["Nature", "Beach"],
  },
  {
    id: 7,
    titleKey: "post7Title",
    excerptKey: "post7Excerpt",
    image: "https://picsum.photos/seed/7/600/400",
    tags: ["City", "Food"],
  },
  {
    id: 8,
    titleKey: "post8Title",
    excerptKey: "post8Excerpt",
    image: "https://picsum.photos/seed/8/600/400",
    tags: ["Adventure", "Nature"],
  },
  {
    id: 9,
    titleKey: "post9Title",
    excerptKey: "post9Excerpt",
    image: "https://picsum.photos/seed/9/600/400",
    tags: ["Beach", "Travel"],
  },
  {
    id: 10,
    titleKey: "post10Title",
    excerptKey: "post10Excerpt",
    image: "https://picsum.photos/seed/10/600/400",
    tags: ["Food", "City"],
  },
  {
    id: 11,
    titleKey: "post11Title",
    excerptKey: "post11Excerpt",
    image: "https://picsum.photos/seed/11/600/400",
    tags: ["Adventure", "Beach"],
  },
  {
    id: 12,
    titleKey: "post12Title",
    excerptKey: "post12Excerpt",
    image: "https://picsum.photos/seed/12/600/400",
    tags: ["Nature", "Travel"],
  },
  {
    id: 13,
    titleKey: "post13Title",
    excerptKey: "post13Excerpt",
    image: "https://picsum.photos/seed/13/600/400",
    tags: ["City", "Adventure"],
  },
  {
    id: 14,
    titleKey: "post14Title",
    excerptKey: "post14Excerpt",
    image: "https://picsum.photos/seed/14/600/400",
    tags: ["Food", "Travel"],
  },
  {
    id: 15,
    titleKey: "post15Title",
    excerptKey: "post15Excerpt",
    image: "https://picsum.photos/seed/15/600/400",
    tags: ["Beach", "Nature"],
  },
];

export default function Blog() {
  const { lang } = useLanguage();
  const [ready, setReady] = useState(false);
  const [activeTag, setActiveTag] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;

  const t = messages[lang] || messages.en;

  const translatedPosts = blogData.map((post) => ({
    ...post,
    title: t.blogPosts?.[post.titleKey] || `Blog Post #${post.id}`,
    excerpt: t.blogPosts?.[post.excerptKey] || "Discover amazing travel stories",
    tags: post.tags.map((tag) => t.tags?.[tag] || tag),
  }));

  const allTags = Array.from(new Set(translatedPosts.flatMap((p) => p.tags)));

  const filteredPosts = activeTag
    ? translatedPosts.filter((p) => p.tags.includes(activeTag))
    : translatedPosts;

  return (
    <div className="min-h-screen">
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/travelbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-5xl font-bold text-white drop-shadow-lg relative z-10">
          {t.blogHero || "Travel Blog"}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTag("")}
          className={`px-4 py-2 rounded-full font-medium border ${
            !activeTag
              ? "bg-purple-500 text-white border-purple-500"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
          }`}
        >
          {t.all || "All"}
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full font-medium border ${
              activeTag === tag
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer bg-white dark:bg-gray-800"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag, idx) => (
                  <span
                    key={`${tag}-${idx}`}
                    className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="absolute inset-0 rounded-2xl ring-1 ring-purple-400/20 pointer-events-none"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}