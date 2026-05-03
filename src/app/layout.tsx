import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Ridgeline Cycles | Peak Performance. Local Knowledge.",
  description: "Independent bike shop based in Bakewell, Peak District. Specialists in road, gravel and trail bikes. Professional workshop on-site.",
  keywords: "bike shop, Bakewell, Peak District, cycling, road bikes, gravel bikes, MTB, workshop, bike repair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased")}>
      <body className={`${playfair.variable} ${dmSans.variable} ${lora.variable} font-sans bg-brand-bg text-brand-text min-h-full flex flex-col`}>
        <NextAuthProvider>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            <Toaster position="top-right" richColors />
          </CartProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
