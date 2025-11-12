import "./globals.css";
import Header from "./components/Header";
<<<<<<< HEAD

=======
import Footer from "./components/Footer";
>>>>>>> 75afcf83623e144af377c7a1c40b7b16e7e006c5
export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <Header />
        {children}
=======
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
>>>>>>> 75afcf83623e144af377c7a1c40b7b16e7e006c5
      </body>
    </html>
  );
}
