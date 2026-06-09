"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of cars do you work on?",
    a: "We work on any type of car. If it has an engine, we can work on it.",
  },
  {
    q: "Do you install customer-supplied parts?",
    a: "Yes, we do. We'll review the parts before committing to ensure they're compatible and quality-grade. Contact us first and we'll advise on the best approach.",
  },
  {
    q: "How long do modifications typically take?",
    a: "Simple jobs like exhaust installs or oil changes are often same-day. Larger jobs like suspension setups or full custom builds can take 1–5 days depending on parts and complexity. We'll always give you a realistic timeframe upfront.",
  },
  {
    q: "Can I get a custom quote for my build?",
    a: "Absolutely. Fill out the contact form with your vehicle info, what you're trying to achieve, and your budget range. We'll get back to you within 24 hours with a detailed breakdown. No obligation, no pressure.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border border-border-gold hover:border-primary/30 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className="font-serif font-semibold text-white group-hover:text-primary transition-colors duration-300 pr-4">
          {q}
        </span>
        <div className="flex-shrink-0 w-8 h-8 border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted leading-relaxed border-t border-border-gold pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs tracking-[0.4em] uppercase">
              FAQ
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Common <span className="gold-text">Questions</span>
          </h2>
          <p className="text-muted">
            Still have questions?{" "}
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:text-primary-light transition-colors"
            >
              Reach out directly →
            </button>
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
