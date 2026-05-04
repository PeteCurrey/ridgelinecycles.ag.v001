"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

export default function Home() {
  const featuredBikes = products.filter(p => p.isFeatured).slice(0, 4);
  
  const categories = [
    { name: "Trail", image: "https://images.unsplash.com/photo-1544191696-102dbb1eaca5?auto=format&fit=crop&q=80", href: "/shop?category=Trail" },
    { name: "Enduro", image: "https://images.unsplash.com/photo-1565543730165-27a3d3c8736a?auto=format&fit=crop&q=80", href: "/shop?category=Enduro" },
    { name: "Downhill", image: "https://images.unsplash.com/photo-1571333148656-787622839257?auto=format&fit=crop&q=80", href: "/shop?category=Downhill" },
    { name: "E-MTB", image: "https://images.unsplash.com/photo-1576435728678-68ce0f6eb293?auto=format&fit=crop&q=80", href: "/shop?category=E-MTB" },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Giant-style Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558284594-8ceb1a1c9ee0?auto=format&fit=crop&w=2000&q=80" 
            alt="High Performance Mountain Bike" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container-custom relative h-full flex items-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight leading-[0.9] mb-6">
              Peak Performance <br /> Starts Here.
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-lg">
              Engineered for the technical trails of the Peak District. Discover the latest in mountain bike technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary">
                Explore Collection
              </Link>
              <Link href="/workshop" className="bg-white/10 backdrop-blur-md text-white border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-brand-dark transition-all rounded-sm">
                Book a Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tiles Section */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={cat.href} className="group relative aspect-square overflow-hidden rounded-sm block shadow-sm border border-brand-border">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="tile-overlay opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                    <span className="text-white text-lg md:text-xl font-display font-bold uppercase tracking-tight">{cat.name}</span>
                    <ChevronRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="section-pad bg-brand-bg-alt">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark uppercase tracking-tight">New Arrivals</h2>
              <p className="text-brand-text-muted mt-2">The latest rigs in stock and ready to ride.</p>
            </div>
            <Link href="/shop" className="hidden md:flex items-center gap-1 text-sm font-bold text-brand-accent hover:underline">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredBikes.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <Link href="/shop" className="md:hidden mt-8 btn-secondary w-full">
            View All Inventory
          </Link>
        </div>
      </section>

      {/* USP Banner Section */}
      <section className="section-pad-sm bg-white border-y border-brand-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center text-brand-accent mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2">Expert Tuning</h4>
              <p className="text-sm text-brand-text-muted">Every bike is hand-assembled and tuned by our Cytech master technicians.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center text-brand-accent mb-4">
                <Truck size={24} />
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2">Local Delivery</h4>
              <p className="text-sm text-brand-text-muted">Free personal delivery within 20 miles of Bakewell for all new bike orders.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center text-brand-accent mb-4">
                <Clock size={24} />
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2">0% Finance</h4>
              <p className="text-sm text-brand-text-muted">Spread the cost with flexible monthly payments on orders over £500.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565543730165-27a3d3c8736a?auto=format&fit=crop&q=80" 
            alt="MTB Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">Surgical Precision.</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Our state-of-the-art service lab specializes in high-performance mountain bike maintenance, suspension tuning, and custom wheel builds.
          </p>
          <Link href="/workshop" className="btn-primary px-10">
            Book Service Protocol
          </Link>
        </div>
      </section>

    </div>
  );
}
