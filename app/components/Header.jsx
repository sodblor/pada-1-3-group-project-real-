"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import LanguageToggle from "./LanguageToggle";
import { messages } from "../messages";

export default function Header() {
  // const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLang(storedLang);
  }, []);

  const t = messages[lang];

  return (
    <header className="absolute top-0 left-0 w-full px-12 py-4.5 flex items-center justify-between z-50 bg-stone-900/40 text-white">
      <div className="text-2xl font-bold tracking-wide">TRAVELII</div>

      <nav className="flex gap-12 text-base font-medium">
        <Link href="/">{t.home}</Link>
        <Link href="/blog">{t.blog}</Link>
        <Link href="/travelresource">{t.resources}</Link>
        <Link href="/contact">{t.contact}</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="px-4 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
          {t.signin}
        </button>

        <LanguageToggle onChange={setLang} />
{/* 
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button> */}
      </div>
    </header>
  );
}
