import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Camera, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold tracking-tight">
                RIDGELINE<span className="text-brand-accent">CYCLES</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 font-sans leading-relaxed">
              Family-run since 2009. We live and breathe Peak District technical trails. Professional suspension lab, elite mountain bikes, and expert local trail knowledge.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <Camera size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <MessageCircle size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                <Share2 size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest text-brand-accent">Shop</h4>
            <ul className="flex flex-col gap-3 text-white/70">
              <li><Link href="/shop?category=Trail" className="hover:text-white transition-colors">Trail Bikes</Link></li>
              <li><Link href="/shop?category=Enduro" className="hover:text-white transition-colors">Enduro Bikes</Link></li>
              <li><Link href="/shop?category=Downhill" className="hover:text-white transition-colors">Downhill Rigs</Link></li>
              <li><Link href="/shop?category=E-MTB" className="hover:text-white transition-colors">E-MTB</Link></li>
              <li><Link href="/shop?category=Youth+MTB" className="hover:text-white transition-colors">Youth MTB</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest text-brand-accent">Visit Us</h4>
            <ul className="flex flex-col gap-4 text-white/70">
              <li className="flex gap-3 items-start">
                <MapPin size={20} className="text-brand-accent shrink-0" />
                <span>Bridge Street, Bakewell,<br />Peak District, DE45 1DS</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <span>01629 812345</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-brand-accent shrink-0" />
                <span>hello@ridgelinecycles.co.uk</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm font-bold text-white mb-2 uppercase">Opening Hours</p>
              <p className="text-white/60 text-sm">Mon - Sat: 9am - 6pm</p>
              <p className="text-white/60 text-sm">Sun: 10am - 4pm</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest text-brand-accent">Newsletter</h4>
            <p className="text-white/60 mb-6 text-sm font-sans">Join our community for ride guides, workshop tips, and new bike arrivals.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button className="bg-brand-accent text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 Ridgeline Cycles. Built by Avorria Cycle.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
