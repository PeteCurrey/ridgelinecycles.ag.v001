"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Trail", "Enduro", "Downhill", "E-MTB", "Youth MTB"];
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
    <div className="bg-brand-bg-alt text-brand-text min-h-screen pt-24 pb-32">
      <div className="container-custom">
        
        {/* Giant-style Shop Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-10 border-b border-brand-border">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-brand-dark">
              Mountain Bikes
            </h1>
            <p className="text-brand-text-muted mt-2 max-w-xl">
              Explore our full range of high-performance mountain bikes. Filter by riding style or manufacturer to find your perfect rig.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-brand-text-muted uppercase tracking-widest">{filteredProducts.length} Results</span>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white border border-brand-border px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-dark hover:border-brand-accent transition-all shadow-sm"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
          </div>
        </div>

        {/* Filters Area - Clean White Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-10"
            >
              <div className="bg-white border border-brand-border p-8 grid grid-cols-1 md:grid-cols-2 gap-10 shadow-sm rounded-sm">
                
                {/* Category Filter */}
                <div className="flex flex-col">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-5 flex items-center gap-2">
                    <Filter size={12} /> Category
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={cn(
                          "px-4 py-2 text-xs font-medium transition-all border rounded-sm",
                          category === c 
                            ? "bg-brand-dark text-white border-brand-dark" 
                            : "bg-white text-brand-text-muted border-brand-border hover:border-brand-accent hover:text-brand-accent"
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="flex flex-col">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-5 flex items-center gap-2">
                    <Filter size={12} /> Manufacturer
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((b) => (
                      <button
                        key={b}
                        onClick={() => setBrand(b)}
                        className={cn(
                          "px-4 py-2 text-xs font-medium transition-all border rounded-sm",
                          brand === b 
                            ? "bg-brand-dark text-white border-brand-dark" 
                            : "bg-white text-brand-text-muted border-brand-border hover:border-brand-accent hover:text-brand-accent"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
          <div className="py-24 text-center border border-brand-border bg-white rounded-sm shadow-sm">
            <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">No rigs match your criteria</h3>
            <p className="text-brand-text-muted text-sm font-sans mb-8">Try adjusting your filters to find what you're looking for.</p>
            <button 
              onClick={() => { setCategory("All"); setBrand("All"); }}
              className="btn-primary px-8"
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
      <div className="bg-brand-bg-alt min-h-screen pt-24 pb-32 flex items-center justify-center">
        <div className="text-brand-text-muted uppercase tracking-[0.3em] text-xs animate-pulse font-bold">Synchronizing Fleet...</div>
      </div>
    }>
      <ShopContent />
    </React.Suspense>
  );
}
