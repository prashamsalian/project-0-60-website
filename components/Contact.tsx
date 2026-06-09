"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Send } from "lucide-react";

const services = [
  "Performance Upgrade",
  "Exhaust System",
  "Suspension Work",
  "Diagnostics",
  "Oil Change",
  "Custom Build",
  "Cosmetic Mods",
  "Wheels & Tires",
  "Other",
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xwvwaeqr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", phone: "", vehicle: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface2 border border-border-gold hover:border-primary/50 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted/50";

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
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
              Get in Touch
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Book a <span className="gold-text">Service</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Fill out the form and we&apos;ll get back to you within 24 hours
            with a quote. No BS, no pressure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form — left 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mb-6">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted">
                  We&apos;ll reach out within 24 hours with a quote for your
                  build. Check your email.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-primary text-sm tracking-widest uppercase hover:text-primary-light transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted mb-2 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(919) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted mb-2 block">
                      Vehicle *
                    </label>
                    <input
                      type="text"
                      name="vehicle"
                      value={formState.vehicle}
                      onChange={handleChange}
                      required
                      placeholder="Year Make Model"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-widest uppercase text-muted mb-2 block">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-widest uppercase text-muted mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your build goals, budget, or any specific questions..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Try emailing us directly at project0to60official@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary hover:bg-primary-light disabled:opacity-60 text-dark font-bold py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Schedule Service
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info — right 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                label: "Call / Text",
                value: "(919) 452-8195",
                href: "tel:9194528195",
              },
              {
                icon: Mail,
                label: "Email",
                value: "project0to60official@gmail.com",
                href: "mailto:project0to60official@gmail.com",
              },
              {
                icon: MapPin,
                label: "Service Area",
                value: "Cary / Raleigh, NC",
                href: "https://maps.google.com/?q=Cary,NC",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@project0to60",
                href: "https://instagram.com/project_0to60",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border-gold hover:border-primary/50 group transition-all duration-300"
                >
                  <div className="w-10 h-10 border border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase text-muted mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-white group-hover:text-primary transition-colors duration-300 text-sm font-medium">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Hours */}
            <div className="p-4 border border-border-gold">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-primary" />
                <span className="text-xs tracking-widest uppercase text-muted">
                  Hours
                </span>
              </div>
              {[
                { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                { day: "Sunday", hours: "By Appointment" },
              ].map((row) => (
                <div key={row.day} className="flex justify-between py-2 border-b border-border-gold last:border-0 text-sm">
                  <span className="text-muted">{row.day}</span>
                  <span className="text-white">{row.hours}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-video bg-surface2 border border-border-gold overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103476.38897428!2d-78.87609!3d35.79154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790dba6e90b!2sCary%2C%20NC!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Project 0-60 location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
