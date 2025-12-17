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
    excerpt:
      t.blogPosts?.[post.excerptKey] || "Discover amazing travel stories",
    tags: post.tags.map((tag) => t.tags?.[tag] || tag),
  }));

  const allTags = Array.from(new Set(translatedPosts.flatMap((p) => p.tags)));

  const filteredPosts = activeTag
    ? translatedPosts.filter((p) => p.tags.includes(activeTag))
    : translatedPosts;

  return (
    <div className="min-h-screen bg-[#DDE6ED]">
      {/* Hero Section */}
      <div className="relative h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/travelbg.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#27374D]/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg relative z-10">
            {t.blogHero || "Travel Blog"}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Tags */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTag("")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                !activeTag
                  ? "bg-[#27374D] text-white"
                  : "bg-white text-[#526D82] hover:bg-[#9DB2BF] hover:text-white"
              }`}
            >
              {t.all || "All"}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-[#27374D] text-white"
                    : "bg-white text-[#526D82] hover:bg-[#9DB2BF] hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Clean Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 50}ms forwards`,
                opacity: 0
              }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-lg font-bold mb-2 text-[#27374D] line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[#526D82] text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex items-center justify-between pt-3 border-t border-[#DDE6ED]">
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={`${tag}-${idx}`}
                        className="text-xs px-2.5 py-1 bg-[#DDE6ED] text-[#526D82] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
