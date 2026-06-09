"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
      >
        {/* Background grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative flex flex-col items-center gap-6">
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/logo.png" alt="Project 0-60" className="w-full h-full object-cover scale-[0.88]" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted text-xs tracking-[0.5em] uppercase">
              Performance & Precision
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-48 h-px bg-surface2 overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              className="h-full w-1/2 bg-gold-gradient"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
