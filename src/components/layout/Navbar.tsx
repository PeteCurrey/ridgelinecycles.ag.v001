"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Workshop", href: "/workshop" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-3 border-gray-200" 
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-brand-dark">
            RIDGELINE<span className="text-brand-accent">CYCLES</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-brand-text/70 group-hover:text-brand-accent transition-colors">
            Bakewell • Peak District
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-accent",
                pathname === link.href ? "text-brand-accent" : "text-brand-text"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {session && (
            <Link 
              href="/admin/dashboard" 
              className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:opacity-80 transition-all"
            >
              <ShieldCheck size={18} />
              Admin
            </Link>
          )}
          <button 
            className="relative p-2 text-brand-dark hover:text-brand-accent transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark z-[60] flex flex-col p-6 text-white md:hidden">
          <div className="flex justify-between items-center mb-12">
             <span className="text-xl font-display font-bold tracking-tight">
                RIDGELINE<span className="text-brand-accent">CYCLES</span>
              </span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-3xl font-display">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {session && (
              <Link 
                href="/admin/dashboard" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-accent"
              >
                Admin Panel
              </Link>
            )}
          </div>
          <div className="mt-auto pb-12 border-t border-white/10 pt-8">
            <p className="text-sm text-white/50 mb-4 font-sans">BAKEWELL, PEAK DISTRICT</p>
            <p className="text-lg font-serif">Mon - Sat: 9am - 6pm</p>
            <p className="text-lg font-serif">Sun: 10am - 4pm</p>
          </div>
        </div>
      )}
    </nav>
  );
}
