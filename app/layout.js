import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "TRAVELII",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <div className="flex flex-col w-full">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
