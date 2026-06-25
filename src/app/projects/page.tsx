"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "The Wellington Estate", category: "Luxury Residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
    { title: "Downtown Corporate Center", category: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { title: "Oakridge Manor", category: "Premium Metal Roofing", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" },
    { title: "Lakeside Villa", category: "Architectural Shingle", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
    { title: "Tech Hub Tower", category: "TPO Flat Roof", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { title: "Highland Residence", category: "Storm Restoration", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-luxury-warm min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-dark mb-6">Our Portfolio</h1>
          <p className="text-xl text-luxury-brown/80 font-light max-w-2xl mx-auto">A showcase of uncompromising quality, precise engineering, and architectural excellence.</p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-16 overflow-x-auto pb-4">
          {["All Projects", "Residential", "Commercial", "Restoration", "Metal"].map((cat, i) => (
             <button key={i} className={\`px-6 py-2 rounded-full border \${i===0 ? 'bg-luxury-dark text-white border-luxury-dark' : 'border-luxury-stone text-luxury-brown hover:border-luxury-gold hover:text-luxury-gold'} transition-all whitespace-nowrap\`}>{cat}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.1 }} viewport={{ once: true }} className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-sm mb-6 shadow-xl">
                <Image src={proj.img} alt={proj.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
                  <span className="text-luxury-gold font-semibold uppercase tracking-widest text-sm">View Details</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-luxury-dark mb-2">{proj.title}</h3>
              <p className="text-luxury-brown/80 font-light">{proj.category}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-luxury-dark text-white p-16 text-center rounded-sm relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-1df6b62174c8?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
           <div className="relative z-10">
             <h2 className="text-4xl font-bold mb-6">Inspired by what you see?</h2>
             <p className="text-luxury-stone text-lg mb-8 max-w-2xl mx-auto font-light">Let's discuss how Arrowhead Digitech can bring the same level of luxury and protection to your property.</p>
             <Link href="/contact" className="inline-block px-10 py-5 bg-luxury-gold text-white font-semibold rounded-sm hover:bg-luxury-brown transition-all">Start Your Project</Link>
           </div>
        </div>
      </div>
    </div>
  );
}
