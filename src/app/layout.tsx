//src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LMV Ride",
  description: "Association organisant des événements de VTT en Nouvelle-Calédonie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div>
          <Header />
        </div>
        <main>{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}