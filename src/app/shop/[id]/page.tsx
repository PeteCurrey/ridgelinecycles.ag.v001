"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ShoppingBag, 
  Heart, 
  Truck, 
  ShieldCheck, 
  Star,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { products, Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/shop/ProductCard";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  useState(() => {
    if (product.sizes.length > 0) setSelectedSize(product.sizes[0]);
    if (product.colors.length > 0) setSelectedColor(product.colors[0]);
  });

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const totalStock = Object.values(product.stock).reduce((a, b) => a + b, 0);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="bg-brand-bg text-brand-text min-h-screen">
      {/* Sticky Header Nav */}
      <div className="sticky top-0 z-40 bg-brand-bg/80 backdrop-blur-xl border-b border-white/10 hidden md:block mt-20">
        <div className="container-custom py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-sm font-display font-bold uppercase tracking-widest text-white">{product.name}</span>
            <span className="text-brand-accent text-sm font-sans font-bold">£{product.salePrice || product.price}</span>
          </div>
          <button 
            onClick={() => addToCart(product, 1, selectedSize, selectedColor)}
            className="bg-brand-accent text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-colors flex items-center gap-2"
          >
            Add to Cart <ShoppingBag size={14} />
          </button>
        </div>
      </div>

      <div className="container-custom pt-8 md:pt-12 pb-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8 md:mb-16">
          <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link href="/shop" className="hover:text-brand-accent transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <Link href={`/shop?category=${product.category}`} className="hover:text-brand-accent transition-colors">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Image View */}
            <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/5] bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center opacity-20 transition-opacity">
                <span className="text-6xl md:text-8xl font-display font-black text-white/10 uppercase tracking-tighter mb-4">
                  {product.brand}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
              {/* If we had real images, they would map here. Using a high-quality placeholder styling */}
              <div className="absolute bottom-6 right-6 text-[8px] font-bold uppercase tracking-widest text-white/30 z-10 border border-white/10 px-2 py-1">
                View 1
              </div>
            </div>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[2, 3, 4, 5].map((i) => (
                <div key={i} className="aspect-square bg-[#0a0a0a] border border-white/5 relative overflow-hidden cursor-pointer hover:border-brand-accent transition-colors">
                   <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white/20 uppercase tracking-widest text-center p-2">
                      Angle {i}
                   </div>
                </div>
              ))}
            </div>
            
            {/* Engineering Highlights (Only visible on desktop in gallery col) */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#0a0a0a] border border-white/5 p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Truck className="text-brand-accent mb-4" size={24} strokeWidth={1.5} />
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 relative z-10">Free Delivery</h4>
                <p className="text-[10px] text-white/50 leading-relaxed relative z-10">Fully built and tuned. Dispatched within 48 hours for all UK mainland orders.</p>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <ShieldCheck className="text-brand-accent mb-4" size={24} strokeWidth={1.5} />
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 relative z-10">Lifetime Support</h4>
                <p className="text-[10px] text-white/50 leading-relaxed relative z-10">Complimentary 6-week service and priority workshop booking for the lifetime of the bike.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Product Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
            <div className="mb-8">
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.3em] mb-4 block">
                {product.brand}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 leading-[0.9] uppercase tracking-tighter">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex gap-3 items-center">
                  {product.salePrice ? (
                    <>
                      <span className="text-3xl font-sans font-bold text-brand-accent">£{product.salePrice.toLocaleString()}</span>
                      <span className="text-lg font-sans text-white/30 line-through">£{product.price.toLocaleString()}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-sans font-bold text-white">£{product.price.toLocaleString()}</span>
                  )}
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div className="flex items-center gap-1 text-white">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" className="text-white/20" />
                  <span className="text-[10px] font-bold text-white/40 ml-2 uppercase tracking-widest">(4.8 / 12)</span>
                </div>
              </div>

              <p className="text-sm text-white/60 font-sans leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-8 mb-8 pb-8 border-b border-white/10">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Frame Size</h3>
                  <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent hover:text-white transition-colors border-b border-transparent hover:border-white">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => {
                    const isAvailable = product.stock[size] > 0;
                    return (
                      <button
                        key={size}
                        disabled={!isAvailable}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "py-3 flex flex-col items-center justify-center transition-all border",
                          selectedSize === size 
                            ? "bg-white text-brand-dark border-white" 
                            : isAvailable 
                              ? "bg-transparent text-white border-white/20 hover:border-brand-accent" 
                              : "bg-transparent text-white/20 border-white/5 cursor-not-allowed"
                        )}
                      >
                        <span className="text-sm font-display font-bold uppercase tracking-wider">{size}</span>
                        {!isAvailable && <span className="text-[8px] uppercase tracking-widest mt-1">Sold Out</span>}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Color Selector */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-4">
                  Colorway: <span className="text-white/50">{selectedColor}</span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-12 h-12 rounded-sm border-2 transition-all p-1",
                        selectedColor === color ? "border-brand-accent" : "border-transparent hover:border-white/20"
                      )}
                    >
                      <div className="w-full h-full rounded-sm border border-white/10" style={{ backgroundColor: color.toLowerCase().replace(' ', '') }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  totalStock > 5 ? "bg-brand-accent" : totalStock > 0 ? "bg-amber-500" : "bg-red-500"
                )} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  {totalStock > 5 ? "Available to Dispatch" : totalStock > 0 ? `Limited Allocation: ${totalStock} left` : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-10">
              <button 
                onClick={() => addToCart(product, 1, selectedSize, selectedColor)}
                disabled={totalStock === 0}
                className={cn(
                  "w-full py-5 text-[12px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-colors",
                  totalStock > 0 
                    ? "bg-brand-accent text-white hover:bg-white hover:text-brand-dark" 
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                )}
              >
                {totalStock > 0 ? <><ShoppingBag size={16} /> Add to Basket</> : "Out of Stock"}
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button className="border border-white/20 bg-transparent text-white py-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
                  <Heart size={14} /> Wishlist
                </button>
                <button className="border border-white/20 bg-transparent text-white py-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
                  <CheckCircle2 size={14} /> Test Ride
                </button>
              </div>
            </div>

            {/* Expandable Info (Accordion) */}
            <div className="border-t border-white/10">
              {/* Spec Accordion */}
              <div className="border-b border-white/10">
                <button 
                  onClick={() => toggleAccordion("specs")}
                  className="w-full py-6 flex justify-between items-center group"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-accent transition-colors">Technical Specifications</span>
                  <ChevronDown size={16} className={cn("text-white/50 transition-transform duration-300", openAccordion === "specs" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openAccordion === "specs" && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <div className="grid grid-cols-1 border-t border-white/5">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="grid grid-cols-3 py-3 border-b border-white/5 items-start">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 pt-1">{key}</span>
                              <span className="col-span-2 text-sm font-sans text-white/90">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Geometry / Sizing Accordion */}
              <div className="border-b border-white/10">
                <button 
                  onClick={() => toggleAccordion("geo")}
                  className="w-full py-6 flex justify-between items-center group"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-accent transition-colors">Geometry & Sizing</span>
                  <ChevronDown size={16} className={cn("text-white/50 transition-transform duration-300", openAccordion === "geo" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openAccordion === "geo" && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-sm text-white/50 font-sans leading-relaxed">
                        Refer to our comprehensive sizing guide to ensure the perfect fit. Our team is available for custom bike fits in our Bakewell lab.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Series Collection</span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-white">More like this</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
