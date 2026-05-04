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
  { name: "Trail", image: "https://images.unsplash.com/photo-1544191696-102dbb1eaca5?auto=format&fit=crop&q=80", href: "/shop?category=Trail" },
  { name: "Enduro", image: "https://images.unsplash.com/photo-1565543730165-27a3d3c8736a?auto=format&fit=crop&q=80", href: "/shop?category=Enduro" },
  { name: "Downhill", image: "https://images.unsplash.com/photo-1571333148656-787622839257?auto=format&fit=crop&q=80", href: "/shop?category=Downhill" },
  { name: "E-MTB", image: "https://images.unsplash.com/photo-1576435728678-68ce0f6eb293?auto=format&fit=crop&q=80", href: "/shop?category=E-MTB" },
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
      {/* Giant-style Promo Bar */}
      <div className="promo-bar fixed top-0 left-0 right-0 z-[60]">
        <div className="container-custom">
          Free Click & Collect on all orders over £50 | 0% Finance Available
        </div>
      </div>

      <nav
        className={cn(
          "fixed top-8 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || activeMegaMenu || isMobileMenuOpen
            ? "bg-white shadow-sm border-b border-brand-border py-3"
            : "bg-white/90 backdrop-blur-md py-4"
        )}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="container-custom flex items-center justify-between relative">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo - Left Aligned */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tight text-brand-dark uppercase">
              RIDGELINE<span className="text-brand-accent">CYCLES</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu ? setActiveMegaMenu(link.name) : setActiveMegaMenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-[13px] font-semibold tracking-wide transition-colors py-4 px-2 block",
                    pathname === link.href || activeMegaMenu === link.name ? "text-brand-accent" : "text-brand-dark hover:text-brand-accent"
                  )}
                >
                  {link.name}
                </Link>
                {/* Active Indicator */}
                {(pathname === link.href || activeMegaMenu === link.name) && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Icons - Right Aligned */}
          <div className="flex items-center gap-5">
            {session && (
              <Link 
                href="/admin/dashboard" 
                className="hidden lg:flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-text-muted hover:text-brand-accent transition-all"
              >
                <ShieldCheck size={14} />
                Admin
              </Link>
            )}
            <button 
              className="relative text-brand-dark hover:text-brand-accent transition-colors flex items-center gap-2 group"
              onClick={() => setIsCartOpen(true)}
            >
              <div className="relative">
                <ShoppingBag size={22} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay - Clean White */}
        <AnimatePresence>
          {activeMegaMenu === "Shop" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-brand-border shadow-xl overflow-hidden z-10"
              onMouseEnter={() => setActiveMegaMenu("Shop")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div className="container-custom py-10 flex gap-12">
                <div className="w-1/3">
                  <h3 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-6">Mountain Bikes</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {categories.map((cat) => (
                      <Link 
                        key={cat.name}
                        href={cat.href}
                        className="group flex items-center justify-between text-base font-medium text-brand-dark hover:text-brand-accent transition-colors"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        {cat.name}
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-2/3 grid grid-cols-2 gap-6">
                  {categories.slice(0, 2).map((cat) => (
                    <Link 
                      key={cat.name}
                      href={cat.href}
                      className="group relative aspect-[16/9] overflow-hidden rounded-sm"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="tile-overlay" />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="text-white text-lg font-display font-bold uppercase tracking-tight">
                          Explore {cat.name}
                        </span>
                      </div>
                    </Link>
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
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-brand-border">
              <span className="text-xl font-display font-bold uppercase tracking-tight">
                  RIDGELINE<span className="text-brand-accent">CYCLES</span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-brand-dark">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-brand-dark hover:text-brand-accent transition-colors block py-2 border-b border-brand-border/50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
