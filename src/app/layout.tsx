import type { Metadata } from "next";
import "./globals.css";

import ConditionalLayout from "@/components/layout/ConditionalLayout";

import { Merriweather, Inter } from 'next/font/google'

const serif = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Greater Hazelwood Community Collaborative",
  description: "A coalition of residents, faith leaders, nonprofits, and businesses working to ensure that Hazelwood's renaissance is shaped by — and benefits — the people who call this Pittsburgh neighborhood home.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} style={{ overflowX: 'hidden' }}>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
