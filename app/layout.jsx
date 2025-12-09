// app/layout.js
"use client";
import "./globals.css";
import "./theme.css"; // Add this line to import theme variables
import Header from "./components/Header";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}