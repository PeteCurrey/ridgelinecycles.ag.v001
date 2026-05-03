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
    name: "Trail Tune",
    price: 55,
    desc: "Precision calibration for your daily trail rig. Optimized for Peak District grit.",
    features: ["50-point safety inspection", "Gear indexing & alignment", "Brake bleed & modulation", "Pivot bolt torque check", "Suspension pressure set"],
    icon: <Settings size={24} className="text-brand-accent" />
  },
  {
    name: "Enduro Overhaul",
    price: 95,
    desc: "Comprehensive deep-clean and technical calibration for aggressive riding.",
    features: ["Trail Tune plus...", "Full drivetrain degrease", "Wheel trueing & tension", "Bottom bracket service", "Lower leg fork service"],
    icon: <Zap size={24} className="text-brand-accent" />,
    popular: true
  },
  {
    name: "Championship Rebuild",
    price: 175,
    desc: "The ultimate race-ready strip and rebuild. No bolt left unturned.",
    features: ["Enduro plus...", "Full strip to frame", "Pivot bearing replacement", "New internal cabling", "Custom suspension tuning"],
    icon: <Wrench size={24} className="text-brand-accent" />
  },
  {
    name: "Custom Lab",
    price: "From 35",
    desc: "Specific technical fixes, custom wheel builds, or frame protection.",
    features: ["Suspension servicing", "Wheel building", "Invisiframe fitting", "E-MTB diagnostics", "Custom builds"],
    icon: <MessageSquare size={24} className="text-brand-accent" />
  }
];

export default function WorkshopPage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      {/* Hero */}
      <section className="relative py-32 md:py-48 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-brand-bg/90 z-10" />
           <img 
             src="https://images.unsplash.com/photo-1544191696-102dbb1eaca5?auto=format&fit=crop&q=80" 
             alt="Technical MTB Workshop" 
             className="w-full h-full object-cover scale-110 blur-[2px]" 
           />
        </div>
        
        <div className="container-custom relative z-20 max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.5em] text-xs mb-8 block">03 // SUSPENSION LAB</span>
            <h1 className="text-6xl md:text-[8rem] font-display font-black mb-10 leading-[0.85] uppercase tracking-tighter mix-blend-difference">
              Surgical <br /> Precision.
            </h1>
            <p className="text-xl md:text-2xl font-sans text-white/60 leading-relaxed mb-14 max-w-2xl mx-auto italic">
              "We don't just fix bikes. We optimize them for the most technical terrain in the UK."
            </p>
            <a href="#booking" className="bg-white text-brand-dark px-12 py-5 uppercase font-bold text-xs tracking-[0.3em] hover:bg-brand-accent hover:text-white transition-all duration-300">
               Request Service Slot
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-black/40 border-y border-white/5">
        <div className="container-custom flex flex-wrap justify-center gap-12 text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">
           <div className="flex items-center gap-3 hover:text-white transition-colors"><CheckCircle size={14} className="text-brand-accent" /> Cytech Level 3</div>
           <div className="flex items-center gap-3 hover:text-white transition-colors"><CheckCircle size={14} className="text-brand-accent" /> Suspension Tuning</div>
           <div className="flex items-center gap-3 hover:text-white transition-colors"><CheckCircle size={14} className="text-brand-accent" /> Shimano Service Center</div>
           <div className="flex items-center gap-3 hover:text-white transition-colors"><CheckCircle size={14} className="text-brand-accent" /> RockShox Master Lab</div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 bg-brand-bg relative">
        <div className="container-custom">
          <div className="text-center mb-24 flex flex-col items-center">
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block text-center">Service Packages</span>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white uppercase tracking-tighter">Elite Maintenance</h2>
            <p className="text-white/50 font-sans max-w-2xl mx-auto text-lg leading-relaxed">From pivot bearings to custom suspension tuning, our mechanics specialize in high-performance mountain bike calibration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative p-12 border border-white/5 flex flex-col items-center text-center transition-all duration-500 hover:border-brand-accent group",
                  pkg.popular ? "bg-[#0a0a0a] ring-1 ring-brand-accent/50 z-10 shadow-[0_0_50px_rgba(226,74,34,0.1)]" : "bg-transparent"
                )}
              >
                {pkg.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-[9px] font-bold px-8 py-2 uppercase tracking-[0.4em] z-20">
                    Master Class
                  </span>
                )}
                <div className="mb-10 text-white/40 group-hover:text-brand-accent transition-colors duration-500">{pkg.icon}</div>
                <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-tight text-white">{pkg.name}</h3>
                <div className="text-4xl font-sans font-black mb-8 text-white">
                  {typeof pkg.price === 'number' ? `£${pkg.price}` : pkg.price}
                </div>
                <p className={cn("text-sm font-sans mb-12 leading-relaxed min-h-[60px]", pkg.popular ? "text-white/60" : "text-white/40")}>
                  {pkg.desc}
                </p>
                <ul className="space-y-4 mb-16 flex-grow w-full">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 border-b border-white/5 pb-3 last:border-0">
                      <div className="w-1 h-1 rounded-full bg-brand-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300",
                  pkg.popular ? "bg-brand-accent text-white hover:bg-white hover:text-brand-dark" : "bg-white/5 text-white hover:bg-brand-accent"
                )}>
                  Select Configuration
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-black flex flex-col items-center">
        <div className="container-custom flex flex-col items-center text-center">
           <div className="max-w-4xl mb-32 flex flex-col items-center">
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">The Protocol</span>
              <h2 className="text-6xl md:text-[9rem] font-display font-black uppercase tracking-tighter mb-10 text-white leading-[0.8] mix-blend-difference">Precision <br /> Workflow</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full max-w-6xl">
              {[
                { step: "01", title: "Intake", desc: "Digital diagnosis and physical inspection of your MTB frame and components.", icon: <Calendar size={32} /> },
                { step: "02", title: "Execution", desc: "Surgical disassembly and calibration using pro-tier tools and genuine parts.", icon: <Clock size={32} /> },
                { step: "03", title: "Validation", desc: "Rigorous testing to ensure your rig is ready for the technical Peak District trails.", icon: <Award size={32} /> }
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="text-8xl font-display font-black text-white/5 mb-[-4rem] group-hover:text-brand-accent/10 transition-colors duration-700">{s.step}</div>
                  <div className="w-20 h-20 bg-white/5 flex items-center justify-center text-brand-accent mb-8 border border-white/5 group-hover:border-brand-accent/20 transition-all">
                    {s.icon}
                  </div>
                  <h4 className="text-2xl font-display font-black mb-4 uppercase tracking-tight text-white">{s.title}</h4>
                  <p className="text-white/40 font-sans leading-relaxed text-sm max-w-[250px]">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-40 bg-brand-bg border-t border-white/5 flex flex-col items-center">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto bg-[#050505] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-[#0a0a0a] text-white p-16 flex flex-col justify-between border-r border-white/5">
               <div>
                  <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">Booking Interface</span>
                  <h3 className="text-5xl font-display font-black mb-8 uppercase tracking-tighter leading-tight">Initialize <br /> Service</h3>
                  <p className="text-white/40 font-sans mb-12 leading-relaxed text-lg italic">
                    Secure your slot in the lab. Our team will contact you for a technical briefing prior to intake.
                  </p>
                  <div className="space-y-6">
                     <div className="flex gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                        <CheckCircle size={16} className="text-brand-accent" /> 24h Turnaround Available
                     </div>
                     <div className="flex gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                        <CheckCircle size={16} className="text-brand-accent" /> Genuine Technical Parts
                     </div>
                  </div>
               </div>
               <div className="pt-16 border-t border-white/5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-4 text-center">Technical Hotline</p>
                  <p className="text-3xl font-display font-black text-center">01629 812345</p>
               </div>
            </div>
            
            <div className="lg:col-span-3 p-16 bg-black/20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Client Name</label>
                    <input type="text" className="bg-white/5 border border-white/5 focus:border-brand-accent p-5 text-sm focus:outline-none transition-all text-white placeholder:text-white/10" placeholder="e.g. Alex Harrison" />
                 </div>
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Secure Email</label>
                    <input type="email" className="bg-white/5 border border-white/5 focus:border-brand-accent p-5 text-sm focus:outline-none transition-all text-white placeholder:text-white/10" placeholder="e.g. alex@example.com" />
                 </div>
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Rig Specification</label>
                    <input type="text" className="bg-white/5 border border-white/5 focus:border-brand-accent p-5 text-sm focus:outline-none transition-all text-white placeholder:text-white/10" placeholder="e.g. Trek Slash 8" />
                 </div>
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Service Protocol</label>
                    <select className="bg-white/5 border border-white/5 focus:border-brand-accent p-5 text-sm focus:outline-none transition-all text-white appearance-none">
                       <option className="bg-brand-bg">Trail Tune - £55</option>
                       <option className="bg-brand-bg">Enduro Overhaul - £95</option>
                       <option className="bg-brand-bg">Championship Rebuild - £175</option>
                       <option className="bg-brand-bg">Custom Lab / Repair</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Technical Notes</label>
                    <textarea rows={5} className="bg-white/5 border border-white/5 focus:border-brand-accent p-5 text-sm focus:outline-none transition-all resize-none text-white placeholder:text-white/10" placeholder="Specify any mechanical issues or custom requirements..."></textarea>
                 </div>
                 <div className="md:col-span-2 mt-6">
                    <button type="submit" className="w-full bg-brand-accent text-white py-6 font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-brand-dark transition-all duration-500">
                       Initialize Request
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
