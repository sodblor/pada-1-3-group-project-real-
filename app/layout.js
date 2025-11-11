import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
