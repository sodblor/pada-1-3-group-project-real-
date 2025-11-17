"use client";

import { useState, useEffect } from "react";

export default function LanguageToggle({ onChange }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
      if (onChange) onChange(storedLang);
    }
  }, [onChange]);

  const toggleLang = () => {
    const newLang = lang === "en" ? "mn" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    if (onChange) onChange(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
    >
      {lang.toUpperCase()}
    </button>
  );
}
