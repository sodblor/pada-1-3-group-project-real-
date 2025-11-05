"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/travelresource">TRAVEL RESOURCES</Link>
      <Link href="/contact">CONTACT</Link>
      <Link href="/history">HISTORY</Link>
    </nav>
  );
}
