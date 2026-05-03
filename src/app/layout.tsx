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
