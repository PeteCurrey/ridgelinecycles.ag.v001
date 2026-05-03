"use client";

import React from "react";
import Link from "next/link";
import { Plus, Heart } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const totalStock = Object.values(product.stock).reduce((a, b) => a + b, 0);

  return (
    <div className="group flex flex-col bg-brand-bg relative overflow-hidden transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-gray/30 border border-white/5 group-hover:border-white/10 transition-colors">
        <Link href={`/shop/${product.id}`} className="block w-full h-full">
          {/* Main Image Overlay - Dark style */}
          <div className="w-full h-full flex items-center justify-center bg-transparent relative transition-transform duration-700 group-hover:scale-105">
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-40 group-hover:opacity-10 transition-opacity">
                <span className="text-4xl font-display font-black text-white/10 uppercase tracking-tighter leading-none mb-2">
                  {product.brand}
                </span>
                <span className="text-xl font-display text-white/30 italic">
                  {product.name}
                </span>
             </div>
             {/* Gradient for depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-brand-bg/20 pointer-events-none" />
          </div>
        </Link>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {product.salePrice && (
            <span className="bg-brand-accent text-white text-[8px] font-bold px-2 py-1 uppercase tracking-widest border border-brand-accent">
              Sale
            </span>
          )}
          {totalStock <= 2 && totalStock > 0 && (
            <span className="bg-white text-brand-dark text-[8px] font-bold px-2 py-1 uppercase tracking-widest">
              Last {totalStock}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md text-white/50 hover:text-brand-accent hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
          <Heart size={14} />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-brand-accent text-white py-3 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2"
          >
            Quick Add <Plus size={12} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-5 pb-2 flex flex-col items-center text-center flex-grow">
        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
            {product.brand}
          </span>
          <div className="flex gap-1 justify-center">
            {product.colors.slice(0, 3).map((color, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full border border-white/20" title={color} />
            ))}
          </div>
        </div>
        
        <Link href={`/shop/${product.id}`} className="block mb-2">
          <h3 className="text-sm font-display font-bold text-white group-hover:text-brand-accent transition-colors uppercase tracking-wide">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-center gap-3">
          {product.salePrice ? (
            <>
              <span className="text-sm font-sans font-bold text-brand-accent">£{product.salePrice.toLocaleString()}</span>
              <span className="text-[10px] font-sans text-white/30 line-through">£{product.price.toLocaleString()}</span>
            </>
          ) : (
            <span className="text-sm font-sans font-bold text-white/90">£{product.price.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
