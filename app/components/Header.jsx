// app/components/Header.js
"use client";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { messages } from "../messages";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { lang, toggleLang } = useLanguage(); // Get from context
  const t = messages[lang]; // translations for current language

  return (
    <header className="absolute top-0 left-0 w-full px-12 py-4.5 flex items-center justify-between z-50 bg-stone-900/40 text-white">
      <div className="text-2xl font-bold tracking-wide">TRAVELII</div>
      <nav className="flex gap-12 text-base font-medium">
        <Link href="/">{t.home}</Link>
        <Link href="/blog">{t.blog}</Link>
        <Link href="/travelresource">{t.resources}</Link>
  <Link href="/contact">{t.contactLabel}</Link> {/* use string only */}
      </nav>
      <div className="flex items-center gap-4">
        <button className="px-4 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
          {t.signin}
        </button>
        <button
          onClick={toggleLang}
          className="px-4 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
        >
          {lang === "en" ? "MN" : "EN"}
        </button>
        {/* Optional theme toggle */}
        {/* <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button> */}
      </div>
    </header>
  );
}