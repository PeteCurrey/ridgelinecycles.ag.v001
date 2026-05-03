"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Wrench, Truck, RotateCcw, Camera } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

const categories = [
  { name: "Road", icon: "🚲", href: "/shop?category=Road" },
  { name: "Mountain", icon: "🚵", href: "/shop?category=Mountain" },
  { name: "Gravel", icon: "🏜️", href: "/shop?category=Gravel" },
  { name: "E-Bike", icon: "⚡", href: "/shop?category=E-Bike" },
  { name: "Kids", icon: "🧒", href: "/shop?category=Kids" },
];

const features = [
  { 
    title: "Expert Mechanics", 
    desc: "Cytech Level 3 qualified team with decades of Peak District experience.", 
    icon: <Wrench className="text-brand-accent" size={32} /> 
  },
  { 
    title: "Test Rides Welcome", 
    desc: "Try before you buy on our local Bakewell test loop.", 
    icon: <RotateCcw className="text-brand-accent" size={32} /> 
  },
  { 
    title: "Price Match Promise", 
    desc: "We'll match any genuine UK retailer price on current season bikes.", 
    icon: <Shield className="text-brand-accent" size={32} /> 
  },
  { 
    title: "Free Local Delivery", 
    desc: "Free personal delivery within 15 miles on all bikes over £500.", 
    icon: <Truck className="text-brand-accent" size={32} /> 
  },
];

const brands = ["Trek", "Specialized", "Cannondale", "Giant", "Whyte", "Orbea", "Shimano", "SRAM"];

export default function Home() {
  const featuredBikes = products.filter(p => p.isFeatured).slice(0, 4);
  const saleBikes = products.filter(p => p.salePrice).slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark">
        {/* Background Overlay / Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60" />
        </div>

        <div className="container-custom relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
              EST. 2009 • BAKEWELL, PEAK DISTRICT
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
              Ride More. <br />
              <span className="text-white/40">Worry Less.</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif text-white/80 mb-10 leading-relaxed">
              Peak District's independent bike specialists. Road, gravel, trail and everything in between.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary flex items-center gap-2 px-10">
                Shop Bikes <ArrowRight size={20} />
              </Link>
              <Link href="/workshop" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark px-10">
                Book a Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat, i) => (
              <Link 
                key={i} 
                href={cat.href}
                className="group flex flex-col items-center gap-3 px-6 py-4 transition-all hover:-translate-y-1"
              >
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all scale-100 group-hover:scale-125">
                  {cat.icon}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-text/60 group-hover:text-brand-accent">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="section-padding bg-brand-bg/30">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2 block">Our Picks</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">New Arrivals</h2>
            </div>
            <Link href="/shop" className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors">
              View All Bikes
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBikes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Ridgeline */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="mb-2">{f.icon}</div>
                <h3 className="text-xl font-display font-bold">{f.title}</h3>
                <p className="text-white/60 font-serif text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Rail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2 block">Clearance</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Now On Sale</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saleBikes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Wrench size={400} className="text-white" />
        </div>
        <div className="container-custom relative z-10 text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Your bike needs attention? So does your riding.</h2>
            <p className="text-xl font-serif text-white/80 mb-0">From basic safety checks to full custom builds, our workshop team has you covered.</p>
          </div>
          <Link href="/workshop" className="bg-white text-brand-accent px-12 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-dark hover:text-white transition-all shadow-xl shrink-0">
            Book a Service Now
          </Link>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="py-12 bg-white border-y">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {brands.map((brand) => (
              <span key={brand} className="text-xl font-display font-black uppercase tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Style Grid */}
      <section className="section-padding bg-brand-bg/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4 text-brand-accent">
              <Camera size={20} />
              <span className="font-bold uppercase tracking-[0.3em] text-xs">@ridgeline_cycles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Life in the Peak</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-square relative group overflow-hidden bg-brand-dark/5 border border-gray-100">
                <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-brand-dark/10 font-bold italic font-serif">
                   Peak Ride #{i}
                </div>
                {/* Image Placeholder Link to IG */}
                <Link href="#" className="absolute inset-0 z-20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
