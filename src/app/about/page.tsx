"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Shield, Target } from "lucide-react";

export default function About() {
  return (
    <div className="overflow-hidden bg-luxury-warm min-h-screen">
      <section className="relative pt-40 pb-24 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1541888081622-1df6b62174c8?q=80&w=2070&auto=format&fit=crop" alt="Arrowhead Digitech Team" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-luxury-dark/80 backdrop-blur-sm"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-bold text-luxury-white mb-6">Our Legacy of Excellence</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-xl text-luxury-stone max-w-3xl mx-auto font-light leading-relaxed">Building trust, protecting homes, and elevating the American standard of commercial and residential roofing.</motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-luxury-dark mb-6">The Arrowhead Story</h2>
            <p className="text-luxury-brown/80 text-lg leading-relaxed mb-6 font-light">Founded on the principles of absolute integrity and unparalleled craftsmanship, Arrowhead Digitech has grown from a humble local contractor into the region&apos;s premier roofing authority.</p>
            <p className="text-luxury-brown/80 text-lg leading-relaxed font-light">We don&apos;t just build roofs; we engineer comprehensive protection systems designed to withstand the harshest elements while enhancing the architectural beauty of your property.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative h-96 rounded-sm overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2070&auto=format&fit=crop" alt="Roofing Construction" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-luxury-dark mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "Uncompromising Quality", desc: "We utilize only the highest grade materials from industry-leading manufacturers." },
              { icon: Target, title: "Precision Engineering", desc: "Every installation is calculated and executed with flawless attention to detail." },
              { icon: Users, title: "Client Partnership", desc: "We believe in transparent communication and building relationships that outlast our roofs." }
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.1 }} viewport={{ once: true }} className="bg-luxury-white p-10 rounded-sm shadow-xl border border-luxury-stone/20">
                <v.icon className="w-12 h-12 text-luxury-gold mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-luxury-dark mb-4">{v.title}</h3>
                <p className="text-luxury-brown/80 font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-luxury-dark text-luxury-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Ready to Experience the Arrowhead Difference?</h2>
          <Link href="/contact" className="inline-block px-10 py-5 bg-luxury-gold text-white rounded-sm font-semibold tracking-wide hover:bg-luxury-brown transition-all duration-300">Schedule Your Consultation</Link>
        </div>
      </section>
    </div>
  );
}
