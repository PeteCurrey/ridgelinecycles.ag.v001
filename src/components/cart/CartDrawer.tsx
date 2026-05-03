"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    cartCount, 
    cartTotal, 
    updateQuantity, 
    removeFromCart 
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brand-bg/50">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-brand-dark" />
                <h2 className="text-xl font-display font-bold">Your Basket ({cartCount})</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-brand-dark/20" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Your basket is empty</h3>
                  <p className="text-brand-text/60 mb-8 font-serif">Looks like you haven't added any bikes yet.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="btn-primary"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4 group">
                      {/* Mini Image */}
                      <div className="w-24 h-24 bg-brand-bg shrink-0 relative overflow-hidden border border-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center p-2 text-[8px] text-center opacity-30 font-bold uppercase pointer-events-none">
                          {item.product.name}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-display font-bold text-brand-dark leading-tight">
                            {item.product.name}
                          </h4>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-300 hover:text-brand-accent transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-brand-accent font-bold uppercase tracking-wider mb-2">
                          {item.product.brand} {item.selectedSize && `• ${item.selectedSize}`}
                        </p>
                        
                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center border border-gray-200">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-bold">
                            £{(item.product.salePrice || item.product.price) * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-brand-bg/50 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-brand-text/60 font-serif">Subtotal</span>
                  <span className="text-xl font-display font-bold">£{cartTotal}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-brand-text/60 font-serif">Delivery</span>
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-widest">Free</span>
                </div>
                
                <Link 
                  href="/checkout" 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Checkout <ArrowRight size={18} />
                </Link>
                
                <p className="mt-6 text-center text-[10px] text-brand-text/40 uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> 
                  Secure Checkout • Free Returns
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
