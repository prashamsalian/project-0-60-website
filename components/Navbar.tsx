"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Builds", href: "#builds" },
  { label: "Gallery", href: "#instagram" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-border-gold shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center group"
            >
              <div className="h-12 w-12 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Project 0-60"
                  className="w-full h-full object-cover scale-[0.88]"
                />
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted hover:text-primary text-sm tracking-widest uppercase font-medium transition-colors duration-300 hover-gold-border pb-1"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/project_0to60"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-light text-dark font-semibold text-sm px-5 py-2.5 tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                Book Now
              </button>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white hover:text-primary transition-colors duration-300 p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl flex flex-col pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between py-4 border-b border-border-gold text-left group"
                >
                  <span className="text-2xl font-serif text-white group-hover:text-primary transition-colors duration-300">
                    {link.label}
                  </span>
                  <ChevronRight
                    size={20}
                    className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex gap-4"
            >
              <button
                onClick={() => handleNavClick("#contact")}
                className="flex-1 bg-primary text-dark font-semibold py-4 tracking-widest uppercase text-sm"
              >
                Book a Service
              </button>
              <a
                href="https://instagram.com/project_0to60"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
