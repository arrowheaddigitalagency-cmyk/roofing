"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Wrench, Droplets, Building2 } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    { title: "Roof Replacement", icon: ShieldCheck, desc: "Premium materials and uncompromising craftsmanship for your luxury home.", image: "https://images.unsplash.com/photo-1632759145355-66774f9d2732?q=80&w=2070&auto=format&fit=crop" },
    { title: "Roof Repair", icon: Wrench, desc: "Expert precision repairs restoring the integrity of your roof.", image: "https://images.unsplash.com/photo-1543884175-9c869910d6e8?q=80&w=1964&auto=format&fit=crop" },
    { title: "Storm Restoration", icon: Droplets, desc: "Comprehensive storm damage assessment and premium restoration.", image: "https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop" },
    { title: "Commercial", icon: Building2, desc: "Enterprise-grade roofing solutions for commercial properties.", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" }
  ];

  return (
    <div className="overflow-hidden bg-luxury-warm">
      {/* Premium Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Luxury Home Roofing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/80 via-luxury-dark/50 to-luxury-warm"></div>
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-luxury-white mb-6 tracking-tighter drop-shadow-2xl">
              Elevating the Standard <br className="hidden md:block"/> of <span className="text-gradient">Craftsmanship</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-luxury-stone mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Arrowhead Digitech provides unparalleled residential and commercial roofing solutions, combining elite materials with masterful execution.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <Link href="/contact" className="px-10 py-5 bg-luxury-gold text-white rounded-sm font-semibold tracking-wide text-lg hover:bg-luxury-brown transition-all duration-500 shadow-xl shadow-luxury-gold/20 w-full sm:w-auto transform hover:-translate-y-1">
              Request a Consultation
            </Link>
            <Link href="/services" className="px-10 py-5 glass text-luxury-white rounded-sm font-semibold tracking-wide text-lg hover:bg-white/10 transition-all duration-500 w-full sm:w-auto border border-luxury-stone/30">
              Explore Our Expertise
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-20 bg-luxury-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-luxury-dark mb-6 tracking-tight"
            >
              Masterful Execution
            </motion.h2>
            <p className="text-xl text-luxury-brown/80 max-w-2xl mx-auto font-light">Precision engineering and elite materials for every project we undertake.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative rounded-sm overflow-hidden bg-luxury-white shadow-sm hover:shadow-2xl hover:shadow-luxury-gold/10 transition-all duration-700 transform hover:-translate-y-2 border border-luxury-stone/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-luxury-white/10 backdrop-blur-md p-3 rounded-sm border border-luxury-white/20">
                      <service.icon className="text-luxury-gold w-8 h-8" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-luxury-dark tracking-tight">{service.title}</h3>
                  <p className="text-luxury-brown/80 mb-6 font-light leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-luxury-gold font-medium uppercase tracking-widest text-sm group-hover:text-luxury-brown transition-colors">
                    Discover More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
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
