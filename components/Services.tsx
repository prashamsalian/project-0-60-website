"use client";

import { motion } from "framer-motion";
import {
  Wind,
  Settings,
  Search,
  Droplets,
  Hammer,
  Palette,
  Circle,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    name: "Cosmetic Mods",
    desc: "Interior lighting, splitters, diffusers, spoilers, lip kits, carbon fiber accents, and OEM+ enhancements.",
  },
  {
    icon: TrendingUp,
    name: "Performance Upgrades",
    desc: "Unlock your car's true potential with bolt-on performance upgrades tailored to your build goals.",
  },
  {
    icon: Wind,
    name: "Exhaust Systems",
    desc: "Cat-back and axle-back exhaust installs. We get your car sounding exactly how you want it.",
  },
  {
    icon: Settings,
    name: "Suspension Work",
    desc: "Coilovers, springs, and sway bars. We dial in your handling and stance for the street or track.",
  },
  {
    icon: Search,
    name: "Diagnostics",
    desc: "Full OBD scan and multi-point inspection to find out exactly what's going on with your car.",
  },
  {
    icon: Droplets,
    name: "Oil Changes",
    desc: "Synthetic and conventional oil services using premium fluids matched to your engine's requirements.",
  },
  {
    icon: Hammer,
    name: "Custom Builds",
    desc: "Full ground-up builds and one-off projects. Tell us your vision and we'll build it.",
  },
  {
    icon: Circle,
    name: "Wheels & Tires",
    desc: "Custom wheel fitment and high-performance tire installs. We'll get the right setup on your car.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs tracking-[0.4em] uppercase">
              What We Do
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From bolt-on mods to full custom builds, every job gets the same
            level of precision and care.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                className="group relative bg-dark border border-border-gold hover:border-primary/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                {/* Gold corner on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-500" />

                <div className="mb-4">
                  <Icon
                    size={28}
                    className="text-primary group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary text-xs tracking-widest uppercase font-medium hover:text-primary-light transition-colors duration-300 flex items-center gap-1 group/btn"
                >
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted mb-6">
            Don&apos;t see what you need? We handle custom work too.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary hover:bg-primary-light text-dark font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Get a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
