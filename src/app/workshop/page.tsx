"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Settings, 
  Zap, 
  Calendar, 
  CheckCircle,
  Clock,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Trail Tune",
    price: 55,
    desc: "Essential maintenance for your daily rig. Ideal for keeping everything running smoothly.",
    features: ["Safety inspection", "Gear indexing & alignment", "Brake modulation check", "Pivot torque check", "Drivetrain lubrication"],
    icon: <Settings size={24} />
  },
  {
    name: "Enduro Overhaul",
    price: 95,
    desc: "Comprehensive technical calibration for aggressive riding and racing.",
    features: ["Trail Tune plus...", "Full drivetrain degrease", "Wheel trueing", "Bottom bracket service", "Lower leg fork service"],
    icon: <Zap size={24} />,
    popular: true
  },
  {
    name: "Championship Rebuild",
    price: 175,
    desc: "The ultimate strip and rebuild for total performance and reliability.",
    features: ["Enduro plus...", "Full strip to frame", "Pivot bearing replacement", "New internal cabling", "Custom suspension setup"],
    icon: <Wrench size={24} />
  }
];

export default function WorkshopPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Editorial Hero */}
      <section className="relative py-24 md:py-32 bg-brand-bg-alt overflow-hidden border-b border-brand-border">
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Professional Service Lab</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark uppercase tracking-tight leading-[0.9] mb-8">
              Precision <br /> Engineering.
            </h1>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-10 max-w-xl">
              Our Cytech Level 3 master technicians specialize in high-performance mountain bike maintenance. We don't just fix bikes; we optimize them for peak performance on the technical trails of the Peak District.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#packages" className="btn-primary">
                View Service Packages
              </a>
              <div className="flex items-center gap-3 text-brand-dark font-bold text-sm border-l-2 border-brand-accent pl-4">
                Shimano Service Center <br /> RockShox Master Lab
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border border-brand-border"
          >
            <img 
              src="/images/homepage/cat-trail.png" 
              alt="MTB Workshop" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="section-pad-sm bg-white border-b border-brand-border">
        <div className="container-custom flex flex-wrap justify-center md:justify-between gap-8 text-brand-text-muted font-bold uppercase tracking-widest text-[11px]">
           <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-accent" /> Cytech Level 3 Certified</div>
           <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-accent" /> Suspension Tuning Experts</div>
           <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-accent" /> Electronic Drivetrain Specialists</div>
           <div className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-accent" /> Genuine Spare Parts Only</div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="section-pad bg-brand-bg-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark uppercase tracking-tight mb-6">Service Protocol</h2>
            <p className="text-brand-text-muted text-lg">Transparent pricing and clear technical standards. Choose the level of maintenance your rig requires.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative p-10 bg-white border border-brand-border flex flex-col shadow-sm rounded-sm transition-all hover:shadow-md",
                  pkg.popular && "ring-2 ring-brand-accent"
                )}
              >
                {pkg.popular && (
                  <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold px-4 py-1 uppercase tracking-wider rounded-bl-sm">
                    Most Popular
                  </span>
                )}
                <div className="mb-6 text-brand-accent">{pkg.icon}</div>
                <h3 className="text-2xl font-display font-bold text-brand-dark uppercase mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-brand-dark mb-6">
                  £{pkg.price}
                </div>
                <p className="text-brand-text-muted text-sm mb-8 leading-relaxed flex-grow">
                  {pkg.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs font-medium text-brand-dark">
                      <CheckCircle size={14} className="text-brand-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "btn-primary w-full",
                  !pkg.popular && "btn-secondary"
                )}>
                  Book Service Slot
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/homepage/hero.png" 
            alt="Technical MTB Lab" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-6">Need a custom build or specific fix?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-base">
            From suspension servicing to custom wheel builds and invisiframe protection, we offer a range of specialized technical services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-10">
              Get Technical Quote
            </Link>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 border border-white/20 text-white font-bold text-sm flex items-center gap-2">
              <Clock size={16} /> Technical Support: 01629 812345
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
