"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Why Us", href: "/why-choose-us" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-luxury-white/90 backdrop-blur-xl shadow-sm py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-luxury-dark">
          Arrowhead <span className="text-luxury-gold font-light">Digitech</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-luxury-gold ${
                isScrolled ? "text-luxury-dark" : "text-luxury-dark md:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-luxury-gold text-white px-8 py-3 rounded-sm tracking-wider font-medium hover:bg-luxury-brown transition-all duration-300 hover:shadow-lg shadow-luxury-gold/20"
          >
            Get an Estimate
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-luxury-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-luxury-white shadow-2xl py-6 px-6 flex flex-col space-y-6 border-t border-luxury-stone"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-luxury-dark font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-luxury-gold text-white text-center px-6 py-4 rounded-sm font-medium tracking-wide shadow-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get an Estimate
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
