"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { messages } from "../messages";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/blog", key: "blog" },
  { href: "/travelresource", key: "resources" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const t = messages[lang];
  const isMongolian = lang === "mn";

  return (
    <header 
      className="fixed top-0 left-0 w-full px-4 sm:px-6 lg:px-12 py-4 z-50 bg-stone-900/80 backdrop-blur-sm text-white"
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity"
          aria-label="TRAVELII Home"
        >
          TRAVELII
        </Link>
        
        <nav 
          className="flex flex-wrap justify-center gap-6 text-base font-medium"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, key }) => (
            <Link 
              key={key}
              href={href}
              className={`relative px-2 py-1 transition-colors hover:text-amber-400 ${
                pathname === href ? 'text-amber-400 font-semibold' : 'text-white/90'
              }`}
            >
              {t[key]}
              {pathname === href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button 
            className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors font-medium"
            aria-label="Sign in"
          >
            {t.signin}
          </button>
          
          <button
            onClick={toggleLang}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            aria-label={`Switch to ${isMongolian ? 'English' : 'Монгол'}`}
            title={isMongolian ? 'Switch to English' : 'Монгол хэлрүү шилжих'}
          >
            {isMongolian ? 'EN' : 'MN'}
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            <Sun className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}