// app/layout.js
"use client";
import { useEffect, useState } from 'react';
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add dark mode class to html element if in dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = localStorage.theme === 'dark' || 
                  (!('theme' in localStorage) && 
                   window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  if (!mounted) {
    return (
      <html suppressHydrationWarning>
        <body className="bg-background">
          <div className="flex items-center justify-center min-h-screen">
            Loading...
          </div>
        </body>
      </html>
    );
  }

  return (
    <html suppressHydrationWarning className="h-full" lang="en">
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}