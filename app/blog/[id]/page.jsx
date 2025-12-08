
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { messages } from "../../messages";
import { useLanguage } from "../../context/LanguageContext";

export default function BlogDetail() {
  const { lang } = useLanguage(); 
  const pathname = usePathname(); 
  const id = pathname.split("/").pop(); 
  const t = messages[lang] || messages.en; 

  return (
    <div className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <Link href="/blog" className="text-purple-500 hover:underline text-sm">
        {t.blogDetail.backToBlog}
      </Link>
      <h1 className="text-4xl font-bold mt-6 mb-4">Blog Post #{id}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {t.blogDetail.writtenBy}: John Doe • {t.blogDetail.publishedOn}: Jan 1, 2025
      </p>
      <img
        src={`https://picsum.photos/seed/${id}/1000/600`}
        className="rounded-xl shadow mb-8"
        alt={`Blog ${id}`}
      />
      <p className="leading-relaxed text-lg mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t.blogDetail.relatedPosts}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <Link
            key={n}
            href={`/blog/${(parseInt(id) % 15) + n}`}
            className="block rounded-xl overflow-hidden shadow hover:shadow-lg bg-white dark:bg-gray-800 transition"
          >
            <img
              src={`https://picsum.photos/seed/${parseInt(id) + n}/400/250`}
              className="w-full h-40 object-cover"
              alt={`Related ${n}`}
            />
            <div className="p-4">
              <p className="font-semibold">Blog Post #{parseInt(id) + n}</p>
              <p className="text-sm text-purple-500">{t.blogDetail.readMore} →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}