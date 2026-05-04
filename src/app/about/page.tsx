"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Heart, Coffee, ShieldCheck, Award } from "lucide-react";

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
    <div className="bg-white min-h-screen pt-20">
      
      {/* Editorial Hero */}
      <section className="relative py-24 md:py-32 bg-brand-bg-alt overflow-hidden border-b border-brand-border">
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark uppercase tracking-tight leading-[0.9] mb-8">
              Peak Performance. <br /> Local Knowledge.
            </h1>
            <p className="text-lg md:text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Ridgeline Cycles is an independent mountain bike specialist based in the heart of Bakewell. We are dedicated to providing the highest level of technical expertise and premium equipment for riders who demand more from their rig.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-brand-text-muted text-lg leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark uppercase tracking-tight mb-8">Engineering since 2009.</h2>
              <p>
                Founded in 2009 by Dave Harrison, Ridgeline Cycles was born from a passion for the technical trails of the Peak District. We understood early on that this region demands more from a mountain bike than almost anywhere else in the UK.
              </p>
              <p>
                Our mission has always been simple: to provide riders with the equipment and technical support they need to dominate the technical gritstone descents and limestone mud of our home trails.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <span className="text-4xl font-display font-bold text-brand-accent">15+</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Years in Bakewell</p>
                </div>
                <div>
                  <span className="text-4xl font-display font-bold text-brand-accent">25k+</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Bikes Serviced</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-brand-border">
              <img 
                src="/images/homepage/cat-enduro.png" 
                alt="Our Workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-pad bg-brand-bg-alt border-y border-brand-border">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark uppercase tracking-tight mb-6">The Lab Crew</h2>
            <p className="text-brand-text-muted text-lg">Meet the technical experts behind Ridgeline Cycles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white border border-brand-border p-8 rounded-sm shadow-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-bg-alt rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner border border-brand-border">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h3>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-sm text-brand-text-muted leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark uppercase tracking-tight mb-16 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-brand-accent">
                <span className="text-2xl font-display font-bold text-brand-accent mb-2 block">{item.year}</span>
                <h4 className="text-lg font-bold text-brand-dark mb-2 uppercase">{item.title}</h4>
                <p className="text-sm text-brand-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Grid */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center text-center gap-6">
                 <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-accent border border-white/20">
                    <Users size={28} />
                 </div>
                 <h3 className="text-xl font-display font-bold uppercase tracking-tight">MTB Ride Groups</h3>
                 <p className="text-white/60 text-sm leading-relaxed">Weekly mountain bike and E-MTB trail sessions departing from the shop every Sunday at 9am. Join our community.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6">
                 <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-accent border border-white/20">
                    <ShieldCheck size={28} />
                 </div>
                 <h3 className="text-xl font-display font-bold uppercase tracking-tight">Trail Advocacy</h3>
                 <p className="text-white/60 text-sm leading-relaxed">Proud supporters of the Peak District National Park Foundation and local trail maintenance advocacy groups.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6">
                 <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-accent border border-white/20">
                    <Coffee size={28} />
                 </div>
                 <h3 className="text-xl font-display font-bold uppercase tracking-tight">The Basecamp</h3>
                 <p className="text-white/60 text-sm leading-relaxed">Our shop is more than just a store. It's a hub for local riders to meet, share routes, and enjoy a professional espresso.</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
