import { Metadata } from "next";
import "./globals.css";

import ConditionalLayout from "@/components/layout/ConditionalLayout";

import { Merriweather, Inter, Montserrat, Bebas_Neue, Oswald, League_Gothic } from 'next/font/google'


const serif =  Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal'],
  variable: '--font-display',
  display: 'swap',
})



// League_Gothic ({
//   subsets: ['latin'],
//   weight: ['400'],
//   // variable: '--font-display'
// })




const sans = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

// const serif = Bebas_Neue({
//   weight: '400', // Bebas Neue only comes in a single heavy weight
//   subsets: ['latin'],
//   variable: '--font-display',
// })

export const metadata: Metadata = {
  title: "Greater Hazelwood Community Collaborative",
  description: "A coalition of residents, faith leaders, nonprofits, and businesses working to ensure that Hazelwood's renaissance is shaped by — and benefits — the people who call this Pittsburgh neighborhood home.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} `} style={{ overflowX: 'hidden' }}>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
