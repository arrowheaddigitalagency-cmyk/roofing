"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Wrench, Droplets, HardHat } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Roof Replacement", icon: Shield, desc: "Complete tear-off and replacement with premium materials.", image: "https://images.unsplash.com/photo-1632759145355-66774f9d2732?q=80&w=2070&auto=format&fit=crop" },
    { title: "Roof Repair", icon: Wrench, desc: "Fast, reliable fixes for leaks, damage, and wear.", image: "https://images.unsplash.com/photo-1543884175-9c869910d6e8?q=80&w=1964&auto=format&fit=crop" },
    { title: "Storm Damage", icon: Droplets, desc: "Emergency response and comprehensive restoration.", image: "https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop" },
    { title: "Commercial Roofing", icon: HardHat, desc: "Scale solutions for business properties and warehouses.", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Roofing Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-blue/70"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Premium Roofing Solutions That Protect What Matters Most
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Professional residential and commercial roofing services designed with durability, craftsmanship, and long-term protection in mind.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/contact" className="px-8 py-4 bg-brand-red text-white rounded-full font-bold text-lg hover:bg-brand-orange transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
              Request Inspection
            </Link>
            <Link href="/services" className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto">
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-blue mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive roofing services delivered with uncompromising quality and attention to detail.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-blue/40 group-hover:bg-brand-blue/20 transition-colors"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="text-brand-orange w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-brand-blue">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-brand-red font-semibold group-hover:text-brand-orange transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
