"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MoveRight, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

export default function Home() {
  const featuredBikes = products.filter(p => p.isFeatured).slice(0, 4);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-brand-bg text-brand-text overflow-hidden">
      
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-brand-bg z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1558284594-8ceb1a1c9ee0?auto=format&fit=crop&w=2000&q=80" 
            alt="Technical Mountain Bike Detail" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container-custom relative z-20 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-accent font-sans font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-8 block text-center">
              Engineered for the Peak District
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-[9rem] font-display font-black leading-[0.85] tracking-tighter uppercase text-white mb-8 mix-blend-difference text-center">
              Dominate <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">The Dirt.</span>
            </h1>
            <p className="max-w-xl mx-auto text-sm sm:text-base font-sans tracking-wide text-white/70 mb-12 leading-relaxed text-center">
              Precision engineering meets raw power. Explore the ultimate collection of high-performance mountain bikes.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link href="/shop" className="group flex items-center justify-center gap-4 bg-white text-brand-dark px-8 py-4 uppercase font-bold text-[10px] tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-colors duration-300">
                Explore Collection
                <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40 rotate-90 mb-4">Scroll</span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-brand-accent absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Engineering / Precision Section (Car Commercial Style) */}
      <section className="py-32 relative bg-brand-bg border-b border-white/5">
        <div className="container-custom flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl mb-16"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">01 // The Technology</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-tight mb-8 text-white">
              Zero Compromise. <br /> Maximum Velocity.
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed mb-10 max-w-lg font-sans">
              Every frame is meticulously sourced and inspected. We deal exclusively in top-tier carbon and alloy, offering unparalleled stiffness-to-weight ratios for uncompromising power transfer on the roughest trails.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center w-full justify-center">
              {[
                { title: "Aerospace Grade Carbon", value: "900g Frame" },
                { title: "Kinematic Suspension", value: "150mm Travel" },
                { title: "Electronic Shifting", value: "Wireless Precision" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center pb-4 border-b md:border-b-0 md:border-r border-white/10 last:border-0 md:px-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{stat.title}</span>
                  <span className="text-sm font-display font-bold text-brand-accent tracking-wider">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] bg-[#0a0a0a] rounded-sm overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=2000&q=80" 
              alt="Bicycle Drivetrain Details" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 group-hover:scale-105"
            />
            {/* Tech Callouts */}
            <div className="absolute top-1/3 left-1/4 z-20 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse relative">
                <div className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-50" />
              </div>
              <div className="bg-black/80 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-[0.2em] font-bold text-white border border-white/10">
                Carbon Layup
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 z-20 flex items-center gap-3">
              <div className="bg-black/80 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-[0.2em] font-bold text-white border border-white/10">
                Wireless AXS
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse relative">
                <div className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Fleet (Horizontal Scroll feel) */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="container-custom mb-16 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">02 // The Fleet</span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-white">
              Latest Arrivals
            </h2>
          </div>
          <Link href="/shop" className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-brand-accent transition-colors">
            View All Inventory <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBikes.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Workshop (Dark Moody) */}
      <section className="relative py-40 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-bg/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80" 
            alt="Bike Workshop" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center flex flex-col items-center"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">03 // Service Lab</span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8 text-white">
              Surgical Precision.
            </h2>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-12 font-sans max-w-2xl mx-auto">
              Our Cytech Level 3 certified technicians operate in a state-of-the-art service lab. We don't just fix bikes; we optimize them for peak performance. From custom wheel building to electronic drivetrain diagnostics.
            </p>
            <Link href="/workshop" className="inline-flex items-center justify-center gap-4 border border-white/20 bg-transparent text-white px-10 py-4 uppercase font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300">
              Book Diagnostics
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
