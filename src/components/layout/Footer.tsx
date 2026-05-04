import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Camera, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-alt text-brand-dark pt-20 pb-10 border-t border-brand-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold tracking-tight uppercase">
                RIDGELINE<span className="text-brand-accent">CYCLES</span>
              </span>
            </Link>
            <p className="text-brand-text-muted mb-6 text-sm leading-relaxed">
              Based in Bakewell, Peak District. Ridgeline Cycles is an independent mountain bike specialist dedicated to performance rigs and master-level maintenance.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-brand-dark hover:text-brand-accent transition-colors">
                <Camera size={20} />
              </Link>
              <Link href="#" className="text-brand-dark hover:text-brand-accent transition-colors">
                <MessageCircle size={20} />
              </Link>
              <Link href="#" className="text-brand-dark hover:text-brand-accent transition-colors">
                <Share2 size={20} />
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2 inline-block">Support</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-text-muted">
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-brand-accent transition-colors">FAQs</Link></li>
              <li><Link href="/workshop" className="hover:text-brand-accent transition-colors">Service Protocol</Link></li>
              <li><Link href="/shipping" className="hover:text-brand-accent transition-colors">Collection & Delivery</Link></li>
              <li><Link href="/returns" className="hover:text-brand-accent transition-colors">Returns & Warranty</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2 inline-block">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-text-muted">
              <li><Link href="/shop" className="hover:text-brand-accent transition-colors">Browse Bikes</Link></li>
              <li><Link href="/guides" className="hover:text-brand-accent transition-colors">Ride Guides</Link></li>
              <li><Link href="/finance" className="hover:text-brand-accent transition-colors">0% Finance</Link></li>
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Giant</Link></li>
              <li><Link href="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-brand-dark border-b border-brand-border pb-2 inline-block">Visit Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-brand-text-muted">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-brand-accent shrink-0" />
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
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-brand-text-muted text-[11px] font-medium">
          <p>© 2026 Ridgeline Cycles. Inspired by Giant Bicycles.</p>
          <div className="flex gap-6 uppercase tracking-wider">
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link>
            <Link href="/cookie" className="hover:text-brand-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
