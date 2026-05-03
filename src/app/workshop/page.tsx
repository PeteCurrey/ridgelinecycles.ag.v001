"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Settings, 
  Zap, 
  Calendar, 
  MessageSquare, 
  CheckCircle,
  Clock,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Bronze Service",
    price: 45,
    desc: "The essential safety check and tune-up. Perfect for regular commuters.",
    features: ["Safety check", "Adjust brakes & gears", "Chain lube", "Tyre pressure check", "Bolt torque check"],
    icon: <Settings size={24} className="text-brand-accent" />
  },
  {
    name: "Silver Service",
    price: 85,
    desc: "Comprehensive annual service to keep your ride smooth and reliable.",
    features: ["Bronze plus...", "Wheel trueing", "Drivetrain degrease & clean", "Bleed hydraulic brakes", "Full frame clean"],
    icon: <Zap size={24} className="text-brand-accent" />,
    popular: true
  },
  {
    name: "Gold Service",
    price: 145,
    desc: "The ultimate strip and rebuild. Restores your bike to showroom condition.",
    features: ["Silver plus...", "Full strip to frame", "Bearing check & regrease", "New inner cables included", "Free collection (10 miles)"],
    icon: <Wrench size={24} className="text-brand-accent" />
  },
  {
    name: "Custom / Repairs",
    price: "From 25",
    desc: "Specific fixes, wheel builds, or suspension tuning. Just ask.",
    features: ["Puncture repair", "Gear index", "Wheel building", "Suspension servicing", "Custom component fitting"],
    icon: <MessageSquare size={24} className="text-brand-accent" />
  }
];

export default function WorkshopPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-brand-dark/80 z-10" />
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="container-custom relative z-20 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">CYTECH LEVEL 3 MECHANICS</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">Professional servicing from people who ride</h1>
            <p className="text-xl font-serif text-white/70 leading-relaxed mb-10">
              Your bike is an investment in your freedom. We treat it like our own, ensuring every bolt is torqued and every gear is indexed to Peak District perfection.
            </p>
            <div className="flex justify-center">
               <a href="#booking" className="btn-primary px-12">Book Your Slot</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-brand-bg/50 border-b border-white/5">
        <div className="container-custom flex flex-wrap justify-center gap-12 text-brand-dark/60 font-bold uppercase tracking-widest text-[10px]">
           <div className="flex items-center gap-3"><CheckCircle size={16} className="text-brand-accent" /> Cytech Level 3</div>
           <div className="flex items-center gap-3"><CheckCircle size={16} className="text-brand-accent" /> Suspension Specialists</div>
           <div className="flex items-center gap-3"><CheckCircle size={16} className="text-brand-accent" /> Shimano Service Center</div>
           <div className="flex items-center gap-3"><CheckCircle size={16} className="text-brand-accent" /> SRAM / RockShox Certified</div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-brand-bg">
        <div className="container-custom">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark uppercase tracking-tighter">Service Lab Packages</h2>
            <p className="text-brand-text/60 font-serif max-w-2xl mx-auto text-lg leading-relaxed">Clear pricing, no hidden extras. We specialize in high-performance mountain bike maintenance, from bearing pivots to fork servicing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={cn(
                  "relative p-10 border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-2xl",
                  pkg.popular ? "bg-brand-dark text-white ring-4 ring-brand-accent scale-105 z-10 shadow-2xl" : "bg-white"
                )}
              >
                {pkg.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-[10px] font-bold px-6 py-2 uppercase tracking-[0.3em]">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">{pkg.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-6 text-brand-accent">
                  {typeof pkg.price === 'number' ? `£${pkg.price}` : pkg.price}
                </div>
                <p className={cn("text-sm font-serif mb-10 leading-relaxed", pkg.popular ? "text-white/60" : "text-brand-text/60")}>
                  {pkg.desc}
                </p>
                <ul className="space-y-4 mb-12 flex-grow w-full">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-widest border-b border-gray-100/10 pb-2 last:border-0">
                      <CheckCircle size={14} className="text-brand-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all",
                  pkg.popular ? "bg-brand-accent text-white hover:bg-white hover:text-brand-dark" : "bg-brand-bg text-brand-dark hover:bg-brand-accent hover:text-white"
                )}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom flex flex-col items-center text-center">
           <div className="max-w-4xl mb-20 flex flex-col items-center">
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8 text-brand-dark leading-[0.9]">What to expect</h2>
              <p className="text-brand-text/50 font-serif text-xl max-w-2xl">From the moment you arrive at our Bakewell lab, your bike is treated with surgical precision.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
              {[
                { step: "01", title: "Drop Off", desc: "Bring your mountain bike to our Bakewell workshop or arrange a local collection.", icon: <Calendar size={32} /> },
                { step: "02", title: "Diagnosis", desc: "Our mechanics perform a 50-point mountain bike check and call you with a fixed quote.", icon: <Clock size={32} /> },
                { step: "03", title: "Trail Ready", desc: "Collect your bike, tuned and ready for the Peak District singletrack.", icon: <Award size={32} /> }
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-6xl font-display font-black text-brand-accent opacity-10 mb-6">{s.step}</div>
                  <div className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center text-brand-accent mb-6">
                    {s.icon}
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{s.title}</h4>
                  <p className="text-brand-text/60 font-serif leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>>

      {/* Booking Form */}
      <section id="booking" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-brand-dark text-white p-12 flex flex-col justify-between">
               <div>
                  <h3 className="text-3xl font-display font-bold mb-6">Book your service</h3>
                  <p className="text-white/60 font-serif mb-8 leading-relaxed">
                    Once you submit the form, our team will contact you to confirm a drop-off time and discuss your requirements.
                  </p>
                  <div className="space-y-4">
                     <div className="flex gap-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
                        <CheckCircle size={16} /> Fast Turnaround
                     </div>
                     <div className="flex gap-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
                        <CheckCircle size={16} /> Genuine Parts Only
                     </div>
                  </div>
               </div>
               <div className="pt-12 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Need advice first?</p>
                  <p className="text-xl font-display">01629 812345</p>
               </div>
            </div>
            
            <div className="md:col-span-3 p-12">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Full Name</label>
                    <input type="text" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Email</label>
                    <input type="email" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Bike Make/Model</label>
                    <input type="text" className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Service Type</label>
                    <select className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all">
                       <option>Bronze Service - £45</option>
                       <option>Silver Service - £85</option>
                       <option>Gold Service - £145</option>
                       <option>Custom/Repair</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">Notes / Issues</label>
                    <textarea rows={4} className="bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white p-4 text-sm focus:outline-none transition-all resize-none"></textarea>
                 </div>
                 <div className="md:col-span-2 mt-4">
                    <button type="submit" className="w-full btn-primary py-5 font-bold text-lg uppercase tracking-widest">
                       Request Booking
                    </button>
                 </div>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
