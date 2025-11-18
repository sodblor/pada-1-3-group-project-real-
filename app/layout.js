import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "TRAVELII",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
