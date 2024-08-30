import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TryLiquidSalt from "@/components/TryLiquidSalt";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Swaad Anusar",
  description: "Swaad Anusar - India's first Alkaline liquid salt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="swaad anusar, swaad, anusar, liquid, salt, liquid salts, evocare, salt, tata salt, namak, sogeum"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} bg-white max-w-screen overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <TryLiquidSalt />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
