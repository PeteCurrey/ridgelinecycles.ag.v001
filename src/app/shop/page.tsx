"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Road", "Mountain", "Gravel", "E-Bike", "Kids"];
const brands = ["Trek", "Specialized", "Cannondale", "Giant", "Whyte", "Orbea"];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeBrand) {
      result = result.filter((p) => p.brand === activeBrand);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
    } else if (sortBy === "newest") {
      // For demo, just reverse or random
      result.reverse();
    }

    setFilteredProducts(result);
  }, [activeCategory, activeBrand, sortBy]);

  // Sync category param
  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam);
  }, [categoryParam]);

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveBrand(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-bg/50 py-16 border-b border-gray-100">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-4">
            {activeCategory ? `${activeCategory} Bikes` : "All Bikes"}
          </h1>
          <p className="text-brand-text/60 font-serif text-lg max-w-2xl">
            From the steepest Peak District climbs to the fastest forest trails. Our curated selection of {activeCategory?.toLowerCase() || "premium"} bikes is built for performance.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32">
              <div className="flex justify-between items-center mb-8 pb-4 border-b">
                <h2 className="text-lg font-bold uppercase tracking-widest">Filters</h2>
                {(activeCategory || activeBrand) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs font-bold text-brand-accent hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className={cn(
                      "text-left py-1 text-sm font-medium transition-colors hover:text-brand-accent",
                      !activeCategory ? "text-brand-accent font-bold" : "text-brand-text"
                    )}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "text-left py-1 text-sm font-medium transition-colors hover:text-brand-accent",
                        activeCategory === cat ? "text-brand-accent font-bold" : "text-brand-text"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-4">Brand</h3>
                <div className="flex flex-col gap-2">
                  {brands.map((brand) => (
                    <button 
                      key={brand}
                      onClick={() => setActiveBrand(activeBrand === brand ? null : brand)}
                      className={cn(
                        "text-left py-1 text-sm font-medium transition-colors hover:text-brand-accent flex justify-between items-center",
                        activeBrand === brand ? "text-brand-accent font-bold" : "text-brand-text"
                      )}
                    >
                      {brand}
                      {activeBrand === brand && <X size={14} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* In Stock Toggle - Dummy */}
              <div className="mb-10">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 border-2 border-gray-200 group-hover:border-brand-accent transition-colors flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-brand-accent scale-0 group-hover:scale-100 transition-transform" />
                  </div>
                  <span className="text-sm font-medium">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest"
                >
                  <SlidersHorizontal size={16} /> Filters
                </button>
                <p className="text-sm text-brand-text/60 font-serif">
                  Showing <span className="text-brand-dark font-bold">{filteredProducts.length}</span> bikes
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-text/40">Sort By:</span>
                <div className="relative group">
                   <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent pr-8 py-1 text-sm font-bold uppercase tracking-widest focus:outline-none cursor-pointer"
                   >
                     <option value="featured">Featured</option>
                     <option value="price-low">Price: Low to High</option>
                     <option value="price-high">Price: High to Low</option>
                     <option value="newest">Newest First</option>
                   </select>
                   <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-accent" />
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <h3 className="text-2xl font-display font-bold mb-4">No bikes found</h3>
                <p className="text-brand-text/60 font-serif mb-8">Try adjusting your filters or search terms.</p>
                <button onClick={clearFilters} className="btn-primary">Clear All Filters</button>
              </div>
            )}

            {/* Pagination Dummy */}
            <div className="mt-20 flex justify-center gap-2">
               {[1,2,3].map(n => (
                 <button 
                  key={n} 
                  className={cn(
                    "w-10 h-10 flex items-center justify-center font-bold text-xs transition-all",
                    n === 1 ? "bg-brand-accent text-white" : "bg-brand-bg text-brand-dark hover:bg-gray-200"
                  )}
                 >
                   {n}
                 </button>
               ))}
               <button className="px-6 bg-brand-bg text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">
                  Next Page
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white p-8 overflow-y-auto">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-display font-bold">Filters</h2>
               <button onClick={() => setShowFilters(false)}><X size={24} /></button>
             </div>
             {/* Repeat filters here or move to component */}
             <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-4">Category</h3>
                <div className="flex flex-col gap-4">
                  {categories.map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setShowFilters(false); }}
                      className={cn(
                        "text-left text-lg font-display",
                        activeCategory === cat ? "text-brand-accent font-bold" : "text-brand-text"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => { clearFilters(); setShowFilters(false); }}
                className="w-full btn-outline mt-8"
              >
                Clear All
              </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-bg flex items-center justify-center font-display text-2xl animate-pulse">Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}

