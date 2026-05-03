"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Road", "Mountain", "Gravel", "E-Bike", "Kids"];
const brands = ["All", "Trek", "Specialized", "Cannondale", "Giant", "Whyte", "Orbea"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialBrand = searchParams.get("brand") || "All";

  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = category === "All" || p.category === category;
      const matchBrand = brand === "All" || p.brand === brand;
      return matchCategory && matchBrand;
    });
  }, [category, brand]);

  return (
    <div className="bg-brand-bg text-brand-text min-h-screen pt-24 pb-32">
      <div className="container-custom">
        
        {/* Header & Filter Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Collection</span>
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white">
              The Fleet
            </h1>
          </div>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-brand-dark transition-all"
          >
            {showFilters ? <X size={16} /> : <SlidersHorizontal size={16} />}
            {showFilters ? "Close Filters" : "Filter Fleet"}
          </button>
        </div>

        {/* Filters Area */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-[#0a0a0a] border border-white/5 p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Category Filter */}
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-2">
                    <Filter size={12} /> Category
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={cn(
                          "px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border",
                          category === c 
                            ? "bg-white text-brand-dark border-white" 
                            : "bg-transparent text-white/70 border-white/10 hover:border-brand-accent hover:text-brand-accent"
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-2">
                    <Filter size={12} /> Manufacturer
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((b) => (
                      <button
                        key={b}
                        onClick={() => setBrand(b)}
                        className={cn(
                          "px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border",
                          brand === b 
                            ? "bg-white text-brand-dark border-white" 
                            : "bg-transparent text-white/70 border-white/10 hover:border-brand-accent hover:text-brand-accent"
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
               <motion.div
                 key={product.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.05, duration: 0.5 }}
               >
                 <ProductCard product={product} />
               </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-white/5 bg-[#0a0a0a]">
            <h3 className="text-2xl font-display font-bold text-white mb-4">No bikes match your criteria</h3>
            <p className="text-white/50 text-sm font-sans mb-8">Try adjusting your filters to find what you're looking for.</p>
            <button 
              onClick={() => { setCategory("All"); setBrand("All"); }}
              className="bg-brand-accent text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <React.Suspense fallback={
      <div className="bg-brand-bg text-brand-text min-h-screen pt-24 pb-32 flex items-center justify-center">
        <div className="text-white/50 uppercase tracking-widest text-xs animate-pulse">Loading Collection...</div>
      </div>
    }>
      <ShopContent />
    </React.Suspense>
  );
}
