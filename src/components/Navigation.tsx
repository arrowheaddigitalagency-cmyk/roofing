"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Why Choose Us", href: "/why-choose-us" },
  ];

  // Force dark navbar on pages that don't have a dark hero
  const forceDark = ["/about", "/services", "/projects", "/gallery", "/why-choose-us", "/contact"].includes(pathname);

  const navBackgroundClass = isScrolled || forceDark || mobileMenuOpen
    ? "bg-luxury-dark/95 backdrop-blur-md shadow-lg py-4 border-b border-luxury-stone/10"
    : "bg-transparent py-6";

  return (
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${navBackgroundClass}\`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-widest text-luxury-white flex items-center group">
            ARROWHEAD <span className="text-luxury-gold ml-2 group-hover:text-luxury-brown transition-colors">DIGITECH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={\`text-sm font-medium uppercase tracking-widest transition-colors hover:text-luxury-gold \${pathname === link.href ? 'text-luxury-gold border-b border-luxury-gold' : 'text-luxury-white'}\`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="ml-4 px-6 py-3 bg-luxury-gold text-luxury-white text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-luxury-brown transition-colors shadow-lg flex items-center group">
              Get Free Estimate <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-luxury-white focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8 text-luxury-gold" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-luxury-dark/98 backdrop-blur-xl border-b border-luxury-stone/20 shadow-2xl">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={\`text-lg font-medium tracking-widest transition-colors \${pathname === link.href ? 'text-luxury-gold' : 'text-luxury-white'}\`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 bg-luxury-gold text-luxury-white text-center font-bold tracking-widest uppercase rounded-sm hover:bg-luxury-brown transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
