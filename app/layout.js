import "./globals.css";
import Header from "./components/Header";

import { AuthProvider } from "./Providers/authProviders";
export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className=" flex-col w-full">
            <Header />
            <main className="flex-1">{children}</main>
            
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
