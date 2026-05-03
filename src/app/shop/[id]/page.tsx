"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ShoppingBag, 
  Heart, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Star,
  CheckCircle2,
  Clock
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
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  // Set initial selections
  useState(() => {
    if (product.sizes.length > 0) setSelectedSize(product.sizes[0]);
    if (product.colors.length > 0) setSelectedColor(product.colors[0]);
  });

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const totalStock = Object.values(product.stock).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-brand-bg/30 py-4 border-b border-gray-100">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-text/40">
            <Link href="/" className="hover:text-brand-accent">Home</Link>
            <ChevronRight size={12} />
            <Link href="/shop" className="hover:text-brand-accent">Shop</Link>
            <ChevronRight size={12} />
            <Link href={`/shop?category=${product.category}`} className="hover:text-brand-accent">{product.category}</Link>
            <ChevronRight size={12} />
            <span className="text-brand-dark">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery Placeholder */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-brand-bg relative overflow-hidden group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center opacity-30 group-hover:opacity-10 transition-opacity">
                  <span className="text-6xl font-display font-black text-brand-dark/20 uppercase tracking-tighter mb-4">
                    {product.brand}
                  </span>
                  <span className="text-2xl font-serif text-brand-dark/40 italic">
                    {product.name}
                  </span>
                </div>
                {/* Main Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none" />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-brand-bg relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-brand-accent transition-all">
                     <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-brand-dark/20 uppercase text-center p-2">
                        View {i}
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <Link href={`/shop?brand=${product.brand}`} className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">
                  {product.brand}
                </Link>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex gap-3 items-center">
                    {product.salePrice ? (
                      <>
                        <span className="text-3xl font-bold text-brand-accent">£{product.salePrice}</span>
                        <span className="text-xl text-gray-400 line-through">£{product.price}</span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-brand-dark">£{product.price}</span>
                    )}
                  </div>
                  <div className="h-6 w-px bg-gray-200" />
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <span className="text-xs font-bold text-brand-text/60 ml-2 uppercase tracking-widest">(12 Reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-brand-text/60 font-serif italic mb-8">
                  <span>or from <span className="font-bold text-brand-dark">£{Math.round((product.salePrice || product.price) / 12)}/mo</span> with 0% Finance</span>
                </div>
              </div>

              {/* Selectors */}
              <div className="space-y-8 mb-10 pb-10 border-b border-gray-100">
                {/* Size Selector */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text">Select Size</h3>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-brand-accent border-b border-brand-accent">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "w-14 h-14 flex items-center justify-center text-sm font-bold transition-all border",
                          selectedSize === size 
                            ? "bg-brand-dark text-white border-brand-dark" 
                            : "bg-white text-brand-text border-gray-200 hover:border-brand-accent"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text mb-4">Select Colour: <span className="text-brand-text/50">{selectedColor}</span></h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all p-0.5",
                          selectedColor === color ? "border-brand-accent" : "border-transparent"
                        )}
                      >
                        <div className="w-full h-full rounded-full border border-gray-100" style={{ backgroundColor: color.toLowerCase().replace(' ', '') }} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-3 h-3 rounded-full",
                    totalStock > 5 ? "bg-green-500" : totalStock > 0 ? "bg-amber-500" : "bg-red-500"
                  )} />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {totalStock > 5 ? "In Stock" : totalStock > 0 ? `Low Stock: ${totalStock} left` : "Out of Stock"}
                  </span>
                  <span className="text-xs text-brand-text/40 font-serif">— Ready for collection or delivery</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 mb-10">
                <button 
                  onClick={() => addToCart(product, 1, selectedSize, selectedColor)}
                  className="w-full btn-primary py-5 text-lg font-bold flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={22} /> Add to Basket
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="btn-outline py-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <Heart size={16} /> Wishlist
                  </button>
                  <button className="btn-outline py-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <CheckCircle2 size={16} /> Test Ride
                  </button>
                </div>
              </div>

              {/* USP List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-brand-bg/50 border border-gray-100">
                <div className="flex gap-3">
                   <Truck className="text-brand-accent shrink-0" size={20} />
                   <div>
                     <p className="text-xs font-bold uppercase tracking-wider mb-1">Free Delivery</p>
                     <p className="text-[10px] text-brand-text/60 font-serif">On all bikes over £500</p>
                   </div>
                </div>
                <div className="flex gap-3">
                   <ShieldCheck className="text-brand-accent shrink-0" size={20} />
                   <div>
                     <p className="text-xs font-bold uppercase tracking-wider mb-1">Lifetime Support</p>
                     <p className="text-[10px] text-brand-text/60 font-serif">Free safety check every 6 months</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding bg-brand-bg/10 border-y border-gray-100">
        <div className="container-custom">
          <div className="flex gap-8 border-b border-gray-200 mb-12 overflow-x-auto no-scrollbar">
            {["Description", "Specification", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={cn(
                  "pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative whitespace-nowrap",
                  activeTab === tab.toLowerCase() 
                    ? "text-brand-dark" 
                    : "text-brand-text/40 hover:text-brand-accent"
                )}
              >
                {tab}
                {activeTab === tab.toLowerCase() && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent" />
                )}
              </button>
            ))}
          </div>

          <div className="max-w-4xl">
            {activeTab === "description" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-xl font-serif text-brand-text/80 leading-relaxed mb-8">
                  {product.description}
                </p>
                <p className="text-lg font-serif text-brand-text/80 leading-relaxed">
                  Every bike sold at Ridgeline Cycles comes fully built, safety checked, and tuned by our Cytech-qualified mechanics. We also offer a free 6-week first service to ensure everything is bedded in perfectly for your Peak District adventures.
                </p>
              </div>
            )}

            {activeTab === "specification" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 border-t border-gray-100">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-3 py-4 border-b border-gray-100 items-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-text/50">{key}</span>
                      <span className="col-span-2 text-sm font-medium text-brand-dark">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="pb-8 border-b border-gray-100 last:border-0">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-1 text-brand-accent">
                         {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                      <span className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest">May 12, 2026</span>
                    </div>
                    <h4 className="text-lg font-display font-bold mb-2">Incredible handling on Peak gravel</h4>
                    <p className="text-sm font-serif text-brand-text/70 mb-4">
                      "I've been riding this for 3 months now and it handles the rough limestone tracks around Bakewell like a dream. The service from Ridgeline was second to none—they even helped me swap the stem for a better fit."
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-dark">— James P., Verified Buyer</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold mb-12">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
