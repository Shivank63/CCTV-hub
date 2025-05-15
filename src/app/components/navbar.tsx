"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Shield, Bell, Home, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(17, 24, 39, 0.8)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", href: "hero", icon: Home },
    { name: "Services", href: "services", icon: Shield },
    { name: "About Us", href: "about", icon: Bell },
    { name: "Contact", href: "contact", icon: ChevronDown },
  ];

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/logo.png" 
              alt="CCTV Hub Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-300 hover:to-purple-500 transition-all duration-300">
              CCTV Hub
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-white relative group transition-colors duration-300 flex items-center"
              >
                <link.icon className="h-4 w-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] border border-blue-400/30"
            >
              Get a Quote
            </Button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white py-2 transition-colors duration-300 flex items-center"
                >
                  <link.icon className="h-4 w-4 mr-2 text-blue-400" />
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full rounded-full transition-all duration-300 border border-blue-400/30"
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
