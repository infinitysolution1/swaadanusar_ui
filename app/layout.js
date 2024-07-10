import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TryLiquidSalt from "@/components/TryLiquidSalt";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Swaad Anusar",
  description: "Swaad Anusar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white max-w-screen overflow-x-visiblehidden`}
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
