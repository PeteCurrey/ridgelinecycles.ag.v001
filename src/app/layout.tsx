import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ridgeline Cycles | Mountain Performance. Local Knowledge.",
  description: "Independent mountain bike specialist based in Bakewell, Peak District. Technical experts in Trail, Enduro, and E-MTB. Professional suspension lab on-site.",
  keywords: "MTB shop, Bakewell, Peak District, mountain bikes, Enduro bikes, E-MTB, suspension service, bike repair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased")}>
      <body className={`${barlowCondensed.variable} ${inter.variable} font-sans bg-brand-bg text-brand-text min-h-full flex flex-col`}>
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
