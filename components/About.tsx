"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const values = [
  "Passionate car enthusiasts, not just mechanics",
  "Premium OEM & aftermarket parts only",
  "Transparent pricing, no hidden fees",
  "Every build treated like it's our own car",
];

function StatCounter({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCounter(value, 1800, active);
  return (
    <div className="text-center p-6 border border-border-gold hover:border-primary/50 transition-colors duration-300">
      <div className="text-4xl font-serif font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="text-muted text-sm tracking-widest uppercase mt-2">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  useInView(ref, { once: true });

  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
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
              Our Story
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Built by Enthusiasts,{" "}
            <span className="gold-text">For Enthusiasts</span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text + values */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted text-lg leading-relaxed mb-6">
              Project 0-60 started with a simple obsession with cars. What began
              as friends wrenching in a driveway in Cary, NC has grown into a
              trusted business serving the Raleigh area. We believe every build
              should be done right, not fast.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-10">
              We bring the same level of precision and passion to every job. Our
              mission is to inspire the next generation of car culture, one
              modification at a time.
            </p>

            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-primary flex-shrink-0" />
                  <span className="text-white/80">{v}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                alt="Project 0-60 garage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-primary pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-primary pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 glass p-4">
              <div className="text-primary text-xs tracking-widest uppercase mb-1">
                Est. 2022
              </div>
              <div className="text-white font-serif font-bold text-lg">
                Cary / Raleigh, NC
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
