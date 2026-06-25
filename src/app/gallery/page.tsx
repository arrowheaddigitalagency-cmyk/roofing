"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1632759145355-66774f9d2732?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543884175-9c869910d6e8?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <div className="bg-luxury-warm min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-dark mb-6">Gallery</h1>
          <p className="text-xl text-luxury-brown/80 font-light max-w-2xl mx-auto">Explore our visual archive of completed residential and commercial roofing projects.</p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
             <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative break-inside-avoid rounded-sm overflow-hidden group cursor-pointer shadow-lg border border-luxury-stone/20">
               <Image src={src} alt="Roofing Gallery" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-luxury-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-sm bg-white/10 backdrop-blur-sm">Enlarge</span>
               </div>
             </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
           <Link href="/contact" className="inline-block px-10 py-5 glass text-luxury-dark font-semibold tracking-wide border border-luxury-stone/50 hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all duration-300">Contact Us for a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
