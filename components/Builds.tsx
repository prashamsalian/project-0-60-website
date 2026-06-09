"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Builds() {
  return (
    <section id="builds" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

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
              Featured Work
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Our <span className="gold-text">Builds</span>
          </h2>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center py-24 border border-border-gold"
        >
          <div
            className="w-16 h-16 border-2 border-primary flex items-center justify-center mb-6"
            style={{ transform: "rotate(45deg)" }}
          >
            <span
              className="text-primary text-xl font-serif font-bold"
              style={{ transform: "rotate(-45deg)" }}
            >
              P
            </span>
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-widest uppercase">
            Coming Soon
          </h3>
          <p className="text-muted text-center max-w-md mb-8">
            We&apos;re just getting started. Check our Instagram for the latest
            builds and transformations as they happen.
          </p>
          <a
            href="https://instagram.com/project_0to60"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-dark font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <Instagram size={16} />
            Follow @project0to60
          </a>
        </motion.div>
      </div>
    </section>
  );
}
