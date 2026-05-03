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
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">OUR STORY</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-10 leading-tight">
              Peak performance. <br />
              <span className="text-brand-accent italic">Local knowledge.</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif text-brand-text/70 leading-relaxed italic">
              "We didn't start Ridgeline to sell bikes. We started it to build a community of people who love riding as much as we do."
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-display font-bold mb-8">Family-run since 2009.</h2>
              <div className="space-y-6 text-brand-text/70 font-serif text-lg leading-relaxed">
                <p>
                  Based in the heart of Bakewell, Ridgeline Cycles was born from a simple observation: the Peak District is one of the best places in the world to ride a bike, but it's tough on equipment.
                </p>
                <p>
                  Dave Harrison started the shop in 2009 with a focus on durability and performance. He wanted to sell bikes that didn't just look good in the showroom, but could handle the limestone mud and gritstone technical climbs that our region is famous for.
                </p>
                <p>
                  Today, we're still family-run and still obsessed with the details. We've grown from a one-man repair shop to a premier independent dealer for some of the world's best brands, but our mission remains the same: to help you get the most out of every mile.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100">
                 <div className="flex flex-col gap-2">
                    <span className="text-4xl font-display font-bold text-brand-accent">15+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-text/50">Years in Bakewell</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-4xl font-display font-bold text-brand-accent">25k+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-text/50">Services Completed</span>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] bg-brand-dark relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80')] bg-cover bg-center" />
               <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold mb-20 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative pt-8 border-t border-white/20 hover:border-brand-accent transition-colors group">
                <span className="text-4xl font-display font-black text-brand-accent opacity-40 mb-4 block group-hover:opacity-100 transition-opacity">
                  {item.year}
                </span>
                <h4 className="text-xl font-display font-bold mb-4">{item.title}</h4>
                <p className="text-white/60 font-serif text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">The Team</h2>
            <p className="text-brand-text/60 font-serif max-w-2xl mx-auto">Real people who ride the trails they sell bikes for. Meet the experts behind Ridgeline.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-brand-bg mb-6 relative overflow-hidden flex items-center justify-center text-6xl">
                   {member.image}
                   <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-1">{member.name}</h3>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-brand-text/60 font-serif text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / USP Grid */}
      <section className="py-24 bg-brand-bg/40">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center gap-6">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-brand-accent">
                    <Users size={32} />
                 </div>
                 <h3 className="text-2xl font-display font-bold">Local Ride Groups</h3>
                 <p className="text-brand-text/60 font-serif leading-relaxed">We lead weekly road and gravel rides departing from the shop every Sunday at 9am. All abilities welcome.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-brand-accent">
                    <Heart size={32} />
                 </div>
                 <h3 className="text-2xl font-display font-bold">Charity Partners</h3>
                 <p className="text-brand-text/60 font-serif leading-relaxed">Proud supporters of the Peak District National Park Foundation and local trail maintenance groups.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-brand-accent">
                    <Coffee size={32} />
                 </div>
                 <h3 className="text-2xl font-display font-bold">The Workshop Hub</h3>
                 <p className="text-brand-text/60 font-serif leading-relaxed">Our shop is a hub for cyclists. Drop in for a coffee and chat about your next route or component upgrade.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
