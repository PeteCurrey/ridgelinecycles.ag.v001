"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col bg-white overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f0f0f0]">
        <Link href={`/shop/${product.id}`} className="block w-full h-full">
          {/* Placeholder/Actual Image */}
          <div className="w-full h-full flex items-center justify-center bg-brand-bg relative transition-transform duration-700 group-hover:scale-110">
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-40 group-hover:opacity-20 transition-opacity">
                <span className="text-4xl font-display font-black text-brand-dark/20 uppercase tracking-tighter leading-none mb-2">
                  {product.brand}
                </span>
                <span className="text-xl font-serif text-brand-dark/40 italic">
                  {product.name}
                </span>
             </div>
             {/* If real image exists, use it. For now, we use a nice styled placeholder */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none" />
          </div>
        </Link>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.salePrice && (
            <span className="bg-brand-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              Sale
            </span>
          )}
          {product.stock <= 2 && product.stock > 0 && (
            <span className="bg-amber-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              Last {product.stock} left
            </span>
          )}
        </div>

        {/* Action Buttons (Overlay) */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white text-brand-dark flex items-center justify-center rounded-full hover:bg-brand-accent hover:text-white transition-colors shadow-md">
            <Heart size={18} />
          </button>
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 bg-brand-dark text-white flex items-center justify-center rounded-full hover:bg-brand-accent transition-colors shadow-md"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
            {product.brand}
          </span>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full border border-gray-200" title={color} />
            ))}
          </div>
        </div>
        
        <Link href={`/shop/${product.id}`} className="block mb-4">
          <h3 className="text-lg font-display font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex justify-between items-center">
          <div className="flex gap-3 items-center">
            {product.salePrice ? (
              <>
                <span className="text-lg font-bold text-brand-accent">£{product.salePrice}</span>
                <span className="text-sm text-gray-400 line-through">£{product.price}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-brand-dark">£{product.price}</span>
            )}
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="text-[10px] font-bold uppercase tracking-widest text-brand-dark border-b-2 border-brand-accent pb-0.5 hover:text-brand-accent transition-colors"
          >
            Quick Add +
          </button>
        </div>
      </div>
    </div>
  );
}
