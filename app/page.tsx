"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Builds from "@/components/Builds";
import Instagram from "@/components/Instagram";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <main className={loading ? "overflow-hidden" : ""}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Builds />
        <Instagram />
        <Testimonials />
        <Contact />
        <FAQ />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
