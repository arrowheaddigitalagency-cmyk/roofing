"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const servicesList = [
    { title: "Residential Roof Replacement", img: "https://images.unsplash.com/photo-1632759145355-66774f9d2732?q=80&w=2070&auto=format&fit=crop", desc: "A complete overhaul of your home's first line of defense. We strip down to the decking to ensure absolute structural integrity before applying premium architectural shingles or metal systems." },
    { title: "Commercial Flat Roofing", img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop", desc: "Enterprise-grade TPO, EPDM, and modified bitumen systems engineered for energy efficiency, extreme durability, and minimal business disruption during installation." },
    { title: "Storm Damage Restoration", img: "https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop", desc: "Rapid response mitigation and complete restoration. We work directly with your insurance provider to ensure you receive the full scope of coverage you are entitled to." },
    { title: "Preventative Maintenance", img: "https://images.unsplash.com/photo-1543884175-9c869910d6e8?q=80&w=1964&auto=format&fit=crop", desc: "Biannual comprehensive inspections, debris removal, and minor repairs designed to extend the lifespan of your roof by up to 30% and prevent catastrophic failures." }
  ];

  return (
    <div className="bg-luxury-warm min-h-screen">
      <section className="pt-40 pb-20 bg-luxury-dark text-center">
        <div className="container mx-auto px-6">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold text-luxury-white mb-6">Our Services</motion.h1>
          <p className="text-xl text-luxury-stone max-w-2xl mx-auto font-light">Comprehensive roofing solutions engineered for longevity, aesthetic brilliance, and ultimate protection.</p>
        </div>
      </section>

      {servicesList.map((service, index) => (
        <section key={index} className={"py-24 " + (index % 2 === 0 ? "bg-luxury-white" : "bg-luxury-warm")}>
          <div className={"container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center " + (index % 2 !== 0 ? "md:flex-row-reverse" : "")}>
            <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-luxury-dark mb-6">{service.title}</h2>
              <p className="text-lg text-luxury-brown/80 font-light leading-relaxed mb-8">{service.desc}</p>
              <ul className="space-y-3 mb-8">
                {["Industry-leading warranties", "Certified master installers", "Premium grade materials"].map((item, i) => (
                  <li key={i} className="flex items-center text-luxury-brown/80"><span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block px-8 py-4 bg-luxury-gold text-white font-semibold rounded-sm hover:bg-luxury-brown transition-all">Request an Estimate</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative h-[400px] shadow-2xl rounded-sm overflow-hidden">
              <Image unoptimized  src={service.img} alt={service.title} fill className="object-cover" />
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
