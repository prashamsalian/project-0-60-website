"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const headline = "Performance".split(" ");
const headline2 = "Starts Here.".split(" ");

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-transparent to-dark/40" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold line accents */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/3 left-0 w-24 h-px bg-gold-gradient origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-1/3 right-0 w-24 h-px bg-gold-gradient origin-right"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-medium">
            Cary / Raleigh, NC
          </span>
          <div className="h-px w-12 bg-primary" />
        </motion.div>

        {/* Main headline — staggered word reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-tight tracking-tight"
          >
            <div>
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block mr-[0.25em] text-white"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div>
              {headline2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + (headline.length + i) * 0.15, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block mr-[0.25em] gold-text"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="text-muted text-lg sm:text-xl md:text-2xl mt-6 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Performance upgrades · Exhaust systems · Suspension work · Diagnostics
          · Oil changes · Custom builds · Cosmetic mods · Wheels &amp; tires
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#contact")}
            className="group relative overflow-hidden bg-primary hover:bg-primary-light text-dark font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 min-w-48"
          >
            <span className="relative z-10">Book a Service</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>
          <button
            onClick={() => handleScroll("#builds")}
            className="group border border-primary text-primary hover:bg-primary hover:text-dark font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 min-w-48"
          >
            View Our Work
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors duration-300 group"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
