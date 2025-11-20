"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LanguageToggle from "./LanguageToggle";
import { messages } from "../messages";

export default function Header() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLang(storedLang);
  }, []);

  const t = messages[lang];

  return (
    <header
      className="
      absolute top-0 left-0 w-full px-4 md:px-12 py-3 md:py-4.5
      flex items-center justify-between z-50
       bg-black text-white
    "
    >
      <div className="text-2xl font-bold tracking-wide">TRAVELII</div>

      <nav className="hidden md:flex gap-12 text-base font-medium">
        <Link href="/">{t.home}</Link>
        <Link href="/blog">{t.blog}</Link>
        <Link href="/travelresource">{t.resources}</Link>
        <Link href="/contact">{t.contact}</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <button className="px-4 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
          {t.signin}
        </button>

        <LanguageToggle onChange={setLang} />
      </div>

      <button
        aria-label="Open menu"
        className="md:hidden p-2 rounded border border-white/30"
        onClick={() => setOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white mt-1.5" />
        <span className="block w-6 h-0.5 bg-white mt-1.5" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 z-[70] h-full w-72 bg-black text-white p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xl font-bold">TRAVELII</div>
              <button
                aria-label="Close menu"
                className="p-2 rounded border border-white/30"
                onClick={() => setOpen(false)}
              >
                <span className="block w-4 h-0.5 bg-white rotate-45 translate-y-[2px]" />
                <span className="block w-4 h-0.5 bg-white -rotate-45 -translate-y-[2px]" />
              </button>
            </div>
            <nav className="flex flex-col gap-5 text-base font-medium">
              <Link href="/" onClick={() => setOpen(false)}>{t.home}</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>{t.blog}</Link>
              <Link href="/travelresource" onClick={() => setOpen(false)}>{t.resources}</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>{t.contact}</Link>
            </nav>
            <div className="mt-6 flex items-center gap-3">
              <button className="px-4 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
                {t.signin}
              </button>
              <LanguageToggle onChange={setLang} />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
