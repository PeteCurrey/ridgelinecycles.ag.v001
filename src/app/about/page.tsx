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
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-bg py-32 md:py-48 flex flex-col items-center text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs mb-8 block">OUR STORY</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-brand-dark mb-12 leading-[0.9] uppercase tracking-tighter">
              Peak performance. <br />
              <span className="text-brand-accent italic">Local knowledge.</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif text-brand-text/70 leading-relaxed italic max-w-3xl mx-auto">
              "We didn't start Ridgeline to sell bikes. We started it to build a community of riders who live for the grit and technical terrain of the Peak District."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 text-brand-dark uppercase tracking-tighter">Family-run since 2009.</h2>
            <div className="space-y-8 text-brand-text/70 font-serif text-lg md:text-xl leading-relaxed">
              <p>
                Based in the heart of Bakewell, Ridgeline Cycles was born from a simple observation: the Peak District is one of the best places in the world to ride a mountain bike, but it's exceptionally tough on equipment.
              </p>
              <p>
                Dave Harrison started the shop in 2009 with a focus on durability and raw performance. He wanted to sell bikes that didn't just look good in the showroom, but could handle the limestone mud and gritstone technical descents that our region is famous for.
              </p>
              <p>
                Today, we're still family-run and still obsessed with the details. We've grown from a one-man repair shop to a premier independent dealer for some of the world's best mountain bike brands, but our mission remains the same: to help you dominate the dirt.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-gray-100 w-full justify-center">
               <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl md:text-6xl font-display font-bold text-brand-accent">15+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-text/50">Years in Bakewell</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl md:text-6xl font-display font-bold text-brand-accent">25k+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-text/50">Services Completed</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-custom">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-24 uppercase tracking-tighter">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative pt-10 border-t border-white/10 hover:border-brand-accent transition-colors group flex flex-col items-center">
                <span className="text-5xl font-display font-black text-brand-accent opacity-30 mb-6 block group-hover:opacity-100 transition-opacity">
                  {item.year}
                </span>
                <h4 className="text-xl font-display font-bold mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-white/50 font-serif text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <div className="flex flex-col items-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter text-brand-dark">The Crew</h2>
            <p className="text-brand-text/50 font-serif text-xl max-w-2xl mx-auto">Real people who ride the trails they sell bikes for. Meet the experts behind Ridgeline.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="aspect-[3/4] w-full bg-brand-bg mb-8 relative overflow-hidden flex items-center justify-center text-7xl shadow-inner">
                   {member.image}
                   <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 uppercase tracking-tight">{member.name}</h3>
                <p className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6">{member.role}</p>
                <p className="text-brand-text/60 font-serif text-sm leading-relaxed max-w-[280px]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / USP Grid */}
      <section className="py-32 bg-brand-bg/40 border-t border-gray-100">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center text-center gap-8">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-brand-accent border border-gray-100">
                    <Users size={36} />
                 </div>
                 <h3 className="text-2xl font-display font-bold uppercase tracking-tight">MTB Ride Groups</h3>
                 <p className="text-brand-text/60 font-serif leading-relaxed">We lead weekly mountain bike and E-MTB trail sessions departing from the shop every Sunday at 9am. All skill levels welcome.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-8">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-brand-accent border border-gray-100">
                    <Heart size={36} />
                 </div>
                 <h3 className="text-2xl font-display font-bold uppercase tracking-tight">Charity Partners</h3>
                 <p className="text-brand-text/60 font-serif leading-relaxed">Proud supporters of the Peak District National Park Foundation and local trail maintenance advocacy groups.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-8">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-brand-accent border border-gray-100">
                    <Coffee size={36} />
                 </div>
                 <h3 className="text-2xl font-display font-bold uppercase tracking-tight">The Trail Hub</h3>
                 <p className="text-brand-text/60 font-serif leading-relaxed">Our shop is a hub for riders. Drop in for a coffee and chat about your next technical upgrade or local trail conditions.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
