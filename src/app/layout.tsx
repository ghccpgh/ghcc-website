import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: 'swap'
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greater Hazlewood Community Collaborative",
  description: "ghcc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {children}
         <Footer />
      </body>
    </html>
  );
}
