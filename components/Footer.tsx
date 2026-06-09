"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Builds", href: "#builds" },
  { label: "Gallery", href: "#instagram" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark border-t border-border-gold">
      {/* CTA bar */}
      <div className="bg-primary py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-dark font-serif font-bold text-2xl md:text-3xl">
              Ready to Build Something Unique?
            </h3>
            <p className="text-dark/70 mt-1">
              Get a free quote, no commitment required.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-dark text-primary font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-surface transition-colors duration-300 flex-shrink-0"
          >
            Book a Service
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img src="/logo.png" alt="Project 0-60" className="w-full h-full object-cover scale-[0.88]" />
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Premium automotive modifications, performance upgrades, exhaust
              systems, suspension work, and custom builds in Cary / Raleigh, NC.
              Built for speed. Engineered for excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/project_0to60"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border-gold hover:border-primary text-muted hover:text-primary flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:9194528195"
                className="w-10 h-10 border border-border-gold hover:border-primary text-muted hover:text-primary flex items-center justify-center transition-all duration-300"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:project0to60official@gmail.com"
                className="w-10 h-10 border border-border-gold hover:border-primary text-muted hover:text-primary flex items-center justify-center transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-serif font-bold text-lg mb-6">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-muted hover:text-primary text-sm transition-colors duration-300 hover-gold-border pb-0.5 w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-serif font-bold text-lg mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: "(919) 452-8195",
                  href: "tel:9194528195",
                },
                {
                  icon: Mail,
                  text: "project0to60official@gmail.com",
                  href: "mailto:project0to60official@gmail.com",
                },
                {
                  icon: MapPin,
                  text: "Cary / Raleigh, NC",
                  href: "#",
                },
                {
                  icon: Instagram,
                  text: "@project0to60",
                  href: "https://instagram.com/project_0to60",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.text}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted hover:text-primary transition-colors duration-300 group text-sm"
                  >
                    <Icon size={15} className="text-primary flex-shrink-0" />
                    {item.text}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-gold py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} Project 0-60. All rights reserved.</span>
          <span>Cary / Raleigh, NC · Built for Enthusiasts</span>
        </div>
      </div>
    </footer>
  );
}
