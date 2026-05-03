"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, Lock, CreditCard, Truck, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-12 text-center shadow-2xl border border-gray-100">
           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
           </div>
           <h1 className="text-4xl font-display font-bold mb-4">Order Confirmed!</h1>
           <p className="text-brand-text/60 font-serif mb-10">
             Thank you for your order. We've sent a confirmation email to your inbox. Our team will contact you shortly regarding delivery or collection.
           </p>
           <Link href="/" className="btn-primary inline-block w-full">
             Return to Home
           </Link>
        </div>
      </div>
    );
  }

  if (cartCount === 0 && !isSuccess) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6">
        <div className="text-center">
           <h1 className="text-3xl font-display font-bold mb-4">Your basket is empty</h1>
           <Link href="/shop" className="text-brand-accent font-bold uppercase tracking-widest border-b-2 border-brand-accent pb-1">
             Go to Shop
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen py-20">
      <div className="container-custom">
        <Link href="/shop" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-text/40 hover:text-brand-accent mb-12 transition-colors">
          <ChevronLeft size={14} /> Back to Shop
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <section className="bg-white p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center text-sm font-sans">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Email Address</label>
                    <input required type="email" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Phone Number</label>
                    <input required type="tel" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="bg-white p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center text-sm font-sans">2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Full Name</label>
                    <input required type="text" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Address Line 1</label>
                    <input required type="text" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">City</label>
                    <input required type="text" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Postcode</label>
                    <input required type="text" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className="bg-white p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center text-sm font-sans">3</span>
                  Payment
                </h2>
                <div className="p-6 bg-brand-bg/50 border border-gray-100 rounded-lg mb-6 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <CreditCard className="text-brand-accent" />
                      <div>
                         <p className="text-sm font-bold">Credit / Debit Card</p>
                         <p className="text-xs text-brand-text/40 font-serif">Securely processed by Stripe</p>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-8 h-5 bg-gray-200 rounded" />
                      <div className="w-8 h-5 bg-gray-200 rounded" />
                   </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Expiry Date</label>
                    <input required type="text" placeholder="MM / YY" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">CVC</label>
                    <input required type="text" placeholder="123" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                  </div>
                </div>
              </section>

              <button type="submit" className="w-full btn-primary py-6 text-xl font-bold flex items-center justify-center gap-3 shadow-xl">
                 <Lock size={20} /> Place Order • £{cartTotal}
              </button>
              <p className="text-center text-[10px] text-brand-text/40 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-green-500" /> Fully Encrypted & Secure Checkout
              </p>
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 border border-gray-100 shadow-sm sticky top-32">
              <h3 className="text-xl font-display font-bold mb-8 border-b pb-4">Order Summary</h3>
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-brand-bg shrink-0 relative flex items-center justify-center text-[8px] font-bold uppercase p-2 text-center text-brand-text/20">
                      {item.product.name}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold leading-tight mb-1">{item.product.name}</h4>
                      <p className="text-xs text-brand-text/40 uppercase tracking-widest">{item.product.brand} • Qty {item.quantity}</p>
                      <p className="text-sm font-bold mt-1">£{(item.product.salePrice || item.product.price) * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/60 font-serif">Subtotal</span>
                  <span className="font-bold">£{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/60 font-serif">Shipping</span>
                  <span className="text-brand-accent font-bold uppercase tracking-widest text-[10px]">Free</span>
                </div>
                <div className="flex justify-between text-xl font-display font-bold pt-4 border-t border-gray-100">
                  <span>Total</span>
                  <span>£{cartTotal}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-brand-bg/50 border border-brand-accent/20 flex gap-3">
                 <Truck className="text-brand-accent" size={20} />
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest">Free Local Delivery</p>
                    <p className="text-[9px] text-brand-text/40 font-serif">Delivery within 3-5 working days to Bakewell & surrounding areas.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
