"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const totalStock = Object.values(product.stock).reduce((a, b) => a + b, 0);

  return (
    <div className="product-card group flex flex-col h-full bg-white">
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-[#f9f9f9] flex items-center justify-center p-6 overflow-hidden">
        <Link href={`/shop/${product.id}`} className="block w-full h-full">
           {/* In a real app, this would be product.image */}
           <div className="w-full h-full flex flex-col items-center justify-center text-center opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="text-3xl font-display font-bold text-brand-dark uppercase tracking-tighter">
                {product.brand}
              </span>
              <span className="text-sm font-medium text-brand-dark italic">
                {product.name}
              </span>
           </div>
           
           {/* Badges */}
           <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
             {product.salePrice && (
               <span className="bg-brand-accent text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider shadow-sm">
                 Sale
               </span>
             )}
             {totalStock <= 2 && totalStock > 0 && (
               <span className="bg-brand-dark text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider shadow-sm">
                 Limited Stock
               </span>
             )}
           </div>
        </Link>

        {/* Quick Add Button - Appears on Hover */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-brand-dark text-white py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center gap-2 hover:bg-brand-accent"
        >
          Add to Cart <ShoppingBag size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-text-muted">
            {product.brand}
          </span>
        </div>
        
        <Link href={`/shop/${product.id}`} className="block mb-3">
          <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-accent transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="text-lg font-bold text-brand-accent">£{product.salePrice.toLocaleString()}</span>
                <span className="text-sm text-brand-text-muted line-through">£{product.price.toLocaleString()}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-brand-dark">£{product.price.toLocaleString()}</span>
            )}
          </div>
          <ChevronRight size={18} className="text-brand-gray group-hover:text-brand-accent transition-colors translate-x-0 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
