"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const posts = [
  { id: 1, image: "/gallery-1.png", caption: "Interior lighting install" },
  { id: 2, image: "/gallery-2.png", caption: "Audi A5 interior build" },
  { id: 3, image: "/gallery-3.png", caption: "Porsche Cayenne interior" },
  { id: 4, image: "/gallery-4.png", caption: "Infiniti Q50 exterior mods" },
  { id: 5, image: "/gallery-5.png", caption: "Interior lighting install" },
  { id: 6, image: "/gallery-6.png", caption: "Night shoot" },
  { id: 7, image: "/gallery-7.png", caption: "Interior ambient lighting" },
  { id: 8, image: "/gallery-8.png", caption: "Cars lined up" },
  { id: 9, image: "/gallery-9.png", caption: "Audi A5 night shoot" },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
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
              Follow Along
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Photo <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Follow{" "}
            <a
              href="https://instagram.com/project_0to60"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors"
            >
              @project0to60
            </a>{" "}
            for daily builds, installs, and behind-the-scenes transformations.
          </p>
        </motion.div>

        {/* Instagram grid */}
        {/*
          TO CONNECT YOUR REAL INSTAGRAM FEED:
          1. Sign up at behold.so (free plan available)
          2. Connect your @project0to60 Instagram account
          3. Copy the embed code and replace the grid below with it
          Alternatively, use Elfsight (elfsight.com) Instagram feed widget
        */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/project_0to60"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.4 }}
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={28} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/project_0to60"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-dark font-bold px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <Instagram size={18} />
            Follow @project0to60
          </a>
        </motion.div>
      </div>
    </section>
  );
}
