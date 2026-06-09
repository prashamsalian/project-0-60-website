"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Wrench,
  Star,
  Zap,
  Clock,
  Eye,
  Heart,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Honest Service",
    desc: "No upsells, no surprises. We tell you exactly what your car needs and why, then let you decide.",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    desc: "Every tech on our team is a genuine car enthusiast with hands-on experience across import and domestic platforms.",
  },
  {
    icon: Zap,
    title: "Performance Specialists",
    desc: "We don't just install parts. We test and validate every modification for real-world results.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "We respect your time. Most jobs are completed same-day or within 48 hours with zero compromise on quality.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    desc: "From torque specs to cable management, we treat every build like a show car. The details matter.",
  },
  {
    icon: Heart,
    title: "Passion for Cars",
    desc: "We're enthusiasts first. We work on your car the same way we'd work on our own, with full dedication.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-padding bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

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
              Why Project 0-60
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            The <span className="gold-text">Difference</span> You Can Feel
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Quality work and people who actually care about your build.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
                className={`glass border border-border-gold hover:border-primary/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 group ${
                  i === 6 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 border border-primary/30 group-hover:border-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/10">
                  <Icon
                    size={22}
                    className="text-primary group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
