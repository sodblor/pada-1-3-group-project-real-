"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header
      className="
      absolute top-0 left-0 w-full px-12 py-4.5
      flex items-center justify-between z-50
       bg-stone-900/40 text-white
    "
    >
      <div className="text-2xl font-bold tracking-wide">TRAVELII</div>

      <nav className="flex gap-12 text-base font-medium">
        <Link href="/" className="hover:text-stone-300 transition-colors">
          Home
        </Link>
        <Link href="/blog" className="hover:text-stone-300 transition-colors">
          Blog
        </Link>
        <Link
          href="/travelresource"
          className="hover:text-stone-300 transition-colors"
        >
          Resources
        </Link>
        <Link
          href="/contact"
          className="hover:text-stone-300 transition-colors"
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="px-4 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
          Sign in
        </button>
        <button className="px-3 py-1 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
          Lang
        </button>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
