"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Lock, Eye } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const offsetTop = servicesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="hero"
      ref={scrollRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background Only */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/security-poster.png"
      >
        <source src="/security-vedio-bg.mp4" type="video/mp4" />
      </video>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              <Shield className="h-12 w-12 text-blue-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 drop-shadow-[0_0_25px_rgba(96,165,250,0.3)]">
              Surveillance Redefined
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-10"
          >
            Securing 5,000+ Homes & Offices with Next-Generation CCTV Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/40 border border-blue-400/30 flex items-center gap-2"
            >
              <Lock className="h-5 w-5" /> Get Your Free Quote
            </Button>

            <Button
              onClick={scrollToNextSection}
              variant="outline"
              size="lg"
              className="bg-transparent border border-blue-500/30 text-white hover:bg-blue-600/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] flex items-center gap-2"
            >
              <Eye className="h-5 w-5" /> Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.5,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToNextSection}
      >
        <div className="p-2 rounded-full bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 hover:shadow-[0_0_10px_rgba(96,165,250,0.5)]">
          <ChevronDown className="h-8 w-8 text-blue-400" />
        </div>
      </motion.div>
    </div>
  );
}
