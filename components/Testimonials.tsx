"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun P.",
    car: "Audi A5",
    stars: 5,
    text: "Project 0-60 brought my vision to life. The attention to detail and service were great.",
    avatar: "A",
  },
  {
    name: "Lucky K.",
    car: "Porsche Cayenne",
    stars: 5,
    text: "Project 0-60 transformed my interior. Fast turnaround, clean work, and the upgrade feels amazing.",
    avatar: "L",
  },
  {
    name: "D.M.",
    car: "",
    stars: 5,
    text: "Lighting looks great and they did a great job of responding to any of my requests and needs in a timely matter.",
    avatar: "D",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-primary fill-primary" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
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
              Reviews
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass border border-border-gold p-8 md:p-12 text-center"
              >
                {/* Quote mark */}
                <div className="text-primary text-6xl font-serif leading-none mb-4 opacity-40">
                  &ldquo;
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-8 italic">
                  {testimonials[current].text}
                </p>

                <StarRating count={testimonials[current].stars} />

                <div className="mt-6 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center font-serif font-bold text-dark text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">
                      {testimonials[current].name}
                    </div>
                    {testimonials[current].car && (
                      <div className="text-primary text-sm">
                        {testimonials[current].car}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 border border-border-gold hover:border-primary text-muted hover:text-primary flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 border border-border-gold hover:border-primary text-muted hover:text-primary flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-8 h-1.5 bg-primary"
                  : "w-4 h-1.5 bg-border-gold hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
