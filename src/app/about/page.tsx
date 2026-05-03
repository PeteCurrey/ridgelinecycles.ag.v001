"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Heart, Coffee } from "lucide-react";

const team = [
  { name: "Dave Harrison", role: "Founder & Master Mechanic", bio: "Riding the Peak since 1992. Specialized in custom wheel builds and vintage restorations.", image: "👨‍🔧" },
  { name: "Sarah Harrison", role: "Shop Manager", bio: "Gravel enthusiast and route planning expert. Keeps the shop running like a well-oiled chain.", image: "👩‍💼" },
  { name: "Mark Wilson", role: "Senior Mechanic", bio: "Suspension specialist. If it's got air or oil, Mark can fix it. Usually found on a downhill bike.", image: "🛠️" },
  { name: "Emma Lou", role: "Sales & Community", bio: "Ex-pro road racer. Leads our Sunday social rides and knows every café in Derbyshire.", image: "🚴‍♀️" }
];

const timeline = [
  { year: "2009", title: "Founded", desc: "Dave opened Ridgeline in a small unit behind Bridge Street with just two workstands." },
  { year: "2012", title: "Expansion", desc: "Moved to our current showroom and expanded the workshop to 4 full-time mechanics." },
  { year: "2016", title: "Shimano Service Center", desc: "Became the first accredited Shimano Service Center in the Peak District." },
  { year: "2023", title: "Online Launch", desc: "Launched our full ecommerce platform to serve riders across the UK." }
];

export default function AboutPage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      {/* Hero */}
      <section className="bg-brand-bg py-32 md:py-48 flex flex-col items-center text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block">04 // OUR PROTOCOL</span>
            <h1 className="text-6xl md:text-[8rem] font-display font-black text-white mb-12 leading-[0.8] uppercase tracking-tighter skew-x-[-5deg]">
              Peak Performance. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent/50">Local Knowledge.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans text-white/60 leading-relaxed italic max-w-3xl mx-auto">
              "We didn't start Ridgeline to sell bikes. We started it to engineer a community of riders who live for the technical grit of the Peak District."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 border-y border-white/5 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-12 text-white uppercase tracking-tighter skew-x-[-2deg]">Engineered since 2009.</h2>
            <div className="space-y-8 text-white/50 font-sans text-lg md:text-xl leading-relaxed">
              <p>
                Based in the heart of Bakewell, Ridgeline Cycles was born from a simple observation: the Peak District is one of the best places in the world to ride a mountain bike, but it's exceptionally tough on equipment.
              </p>
              <p>
                Dave Harrison started the lab in 2009 with a focus on durability and raw performance. He wanted to calibrate bikes that didn't just look good on paper, but could handle the limestone mud and gritstone technical descents that our region is famous for.
              </p>
              <p>
                Today, we're still family-run and still obsessed with the technical details. We've grown from a single-stand repair shop to a premier technical dealer for some of the world's most aggressive mountain bike brands, but our mission remains the same: to help you dominate the dirt.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-gray-100 w-full justify-center">
               <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl md:text-6xl font-display font-black text-white skew-x-[-5deg]">15+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Years in Bakewell</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl md:text-6xl font-display font-black text-white skew-x-[-5deg]">25k+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Rigs Calibrated</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-black text-white text-center">
        <div className="container-custom">
          <h2 className="text-6xl md:text-[8rem] font-display font-black mb-24 uppercase tracking-tighter leading-[0.8]">Our <br/> Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {timeline.map((item, i) => (
              <div key={i} className="relative pt-10 border-t border-white/5 hover:border-brand-accent transition-colors duration-500 group flex flex-col items-center">
                <span className="text-6xl font-display font-black text-white/10 mb-6 block group-hover:text-brand-accent transition-colors skew-x-[-5deg]">
                  {item.year}
                </span>
                <h4 className="text-2xl font-display font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-white/40 font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-[#0a0a0a] text-white text-center">
        <div className="container-custom">
          <div className="flex flex-col items-center mb-24">
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">05 // THE TECHNICIANS</span>
            <h2 className="text-6xl md:text-[8rem] font-display font-black mb-6 uppercase tracking-tighter text-white skew-x-[-5deg]">The Lab <br/> Crew</h2>
            <p className="text-white/40 font-sans text-xl max-w-2xl mx-auto italic">Real engineers who calibrate the rigs they sell. Meet the technicians behind Ridgeline.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group flex flex-col items-center bg-black border border-white/5 p-8 transition-all hover:border-brand-accent/50">
                <div className="aspect-square w-full bg-white/5 mb-8 relative flex items-center justify-center text-7xl skew-x-[-2deg]">
                   {member.image}
                   <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-3xl font-display font-black mb-2 uppercase tracking-tight text-white">{member.name}</h3>
                <p className="text-brand-accent text-[9px] font-bold uppercase tracking-[0.4em] mb-6">{member.role}</p>
                <p className="text-white/40 font-sans text-sm leading-relaxed max-w-[280px]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / USP Grid */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center text-center gap-8 group">
                 <div className="w-24 h-24 bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:border-brand-accent group-hover:text-brand-accent transition-all skew-x-[-10deg]">
                    <Users size={36} className="skew-x-[10deg]" />
                 </div>
                 <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white">MTB Ride Groups</h3>
                 <p className="text-white/40 font-sans leading-relaxed">We lead weekly mountain bike and E-MTB trail sessions departing from the shop every Sunday at 9am. All skill levels welcome.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-8 group">
                 <div className="w-24 h-24 bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:border-brand-accent group-hover:text-brand-accent transition-all skew-x-[-10deg]">
                    <Heart size={36} className="skew-x-[10deg]" />
                 </div>
                 <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white">Trail Advocacy</h3>
                 <p className="text-white/40 font-sans leading-relaxed">Proud supporters of the Peak District National Park Foundation and local trail maintenance advocacy groups.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-8 group">
                 <div className="w-24 h-24 bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:border-brand-accent group-hover:text-brand-accent transition-all skew-x-[-10deg]">
                    <Coffee size={36} className="skew-x-[10deg]" />
                 </div>
                 <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white">The Basecamp</h3>
                 <p className="text-white/40 font-sans leading-relaxed">Our shop is a hub for riders. Drop in for an espresso and calibrate your next technical upgrade or local trail route.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
