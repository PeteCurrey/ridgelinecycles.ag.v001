"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Shop", href: "/shop", hasMegaMenu: true },
  { name: "Workshop", href: "/workshop" },
  { name: "About", href: "/about" },
];

const categories = [
  { name: "Road", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80", href: "/shop?category=Road" },
  { name: "Mountain", image: "https://images.unsplash.com/photo-1565543730165-27a3d3c8736a?auto=format&fit=crop&q=80", href: "/shop?category=Mountain" },
  { name: "Gravel", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80", href: "/shop?category=Gravel" },
  { name: "E-Bike", image: "https://images.unsplash.com/photo-1576435728678-68ce0f6eb293?auto=format&fit=crop&q=80", href: "/shop?category=E-Bike" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
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
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || activeMegaMenu || isMobileMenuOpen
            ? "bg-brand-bg/80 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-6 border-transparent"
        )}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="container-custom flex items-center justify-between relative z-20">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-xl md:text-3xl font-display font-black tracking-tighter text-white uppercase">
              RIDGELINE<span className="text-brand-accent">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-brand-muted group-hover:text-white transition-colors">
              Peak Performance
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu ? setActiveMegaMenu(link.name) : setActiveMegaMenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs font-bold tracking-[0.2em] uppercase transition-colors relative py-4",
                    pathname === link.href || activeMegaMenu === link.name ? "text-brand-accent" : "text-white hover:text-white/80"
                  )}
                >
                  {link.name}
                </Link>
                {/* Active Indicator */}
                {(pathname === link.href || activeMegaMenu === link.name) && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            {session && (
              <Link 
                href="/admin/dashboard" 
                className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-brand-accent transition-all"
              >
                <ShieldCheck size={16} />
                Admin
              </Link>
            )}
            <button 
              className="relative text-white hover:text-brand-accent transition-colors flex items-center gap-2 group"
              onClick={() => setIsCartOpen(true)}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">Cart</span>
              <div className="relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-lg shadow-brand-accent/50">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <AnimatePresence>
          {activeMegaMenu === "Shop" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-brand-bg/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden z-10"
              onMouseEnter={() => setActiveMegaMenu("Shop")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div className="container-custom py-12">
                <div className="flex items-end justify-between mb-8">
                  <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Collections</h3>
                  <Link href="/shop" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent hover:text-white transition-colors flex items-center gap-1">
                    View All Bikes <ChevronRight size={12} />
                  </Link>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {categories.map((cat, i) => (
                    <motion.div 
                      key={cat.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <Link 
                        href={cat.href}
                        className="group block relative aspect-[4/3] overflow-hidden rounded-sm"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                        <img 
                          src={cat.image} 
                          alt={cat.name} 
                          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                          <span className="text-white text-xl font-display font-bold uppercase tracking-wide group-hover:text-brand-accent transition-colors flex items-center gap-2">
                            {cat.name}
                            <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-bg z-[60] flex flex-col p-6 text-white md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-display font-black tracking-tighter uppercase">
                  RIDGELINE<span className="text-brand-accent">.</span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-2xl font-display font-bold uppercase tracking-wide">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-brand-accent transition-colors block py-2 border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {session && (
                <Link 
                  href="/admin/dashboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brand-accent py-2"
                >
                  Admin Area
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
