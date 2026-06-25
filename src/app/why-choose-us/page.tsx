"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ThumbsUp, Clock, FileText, Anchor } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    { title: "Master Certified Installers", icon: Award, desc: "Our teams undergo rigorous factory training, ranking us in the top 1% of roofing contractors nationwide." },
    { title: "Uncompromising Quality", icon: ShieldCheck, desc: "We exclusively install premium-grade materials from industry-leading manufacturers with proven track records." },
    { title: "Transparent Pricing", icon: FileText, desc: "No hidden fees, no surprise upcharges. You receive a detailed, accurate estimate before any work begins." },
    { title: "Lifetime Warranties", icon: Anchor, desc: "We offer the most robust, non-prorated warranties available, covering both materials and labor." },
    { title: "100% Satisfaction Guarantee", icon: ThumbsUp, desc: "We don't consider a job complete until you are completely thrilled with the final result." },
    { title: "On-Time Completion", icon: Clock, desc: "We respect your time. Our advanced project management ensures we start and finish exactly when promised." }
  ];

  return (
    <div className="bg-luxury-warm min-h-screen">
      <section className="relative pt-40 pb-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           <Image unoptimized  src="https://loremflickr.com/1920/1080/roof,house?lock=60" alt="Premium Roofing" fill className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/90 to-luxury-dark/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold text-luxury-white mb-6 leading-tight">Why Choose <span className="text-luxury-gold">Arrowhead</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-luxury-stone font-light leading-relaxed mb-10">We don&apos;t just promise excellence; we guarantee it in writing. Discover why homeowners and property managers trust us with their most valuable assets.</motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link href="/contact" className="px-8 py-4 bg-luxury-gold text-white font-semibold rounded-sm tracking-wide hover:bg-luxury-brown transition-all">Get a Free Estimate</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.1 }} viewport={{ once: true }} className="bg-luxury-white p-10 border border-luxury-stone/20 shadow-xl hover:shadow-2xl transition-shadow rounded-sm">
                 <r.icon className="w-12 h-12 text-luxury-gold mb-6" />
                 <h3 className="text-2xl font-bold text-luxury-dark mb-4">{r.title}</h3>
                 <p className="text-luxury-brown/80 font-light leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-luxury-cream">
         <div className="container mx-auto px-6">
            <div className="bg-luxury-dark text-luxury-white rounded-sm p-12 lg:p-20 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                   <h2 className="text-4xl font-bold mb-6">The Arrowhead Quality Standard</h2>
                   <p className="text-luxury-stone/80 font-light leading-relaxed mb-8">While standard building codes define the absolute minimum allowable requirements, our internal quality standards far exceed them. We utilize proprietary installation techniques designed to weather the most extreme conditions.</p>
                   <ul className="space-y-4 mb-8">
                     <li className="flex items-center"><span className="w-2 h-2 bg-luxury-gold mr-4 rounded-full"></span> 6-nail per shingle protocol vs industry standard 4</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-luxury-gold mr-4 rounded-full"></span> Premium synthetic underlayment vs standard felt</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-luxury-gold mr-4 rounded-full"></span> Specialized ice & water shield at all critical valleys</li>
                   </ul>
                 </div>
                 <div className="relative h-80 lg:h-full min-h-[400px] rounded-sm overflow-hidden">
                    <Image unoptimized  src="https://loremflickr.com/1920/1080/roof,house?lock=61" alt="Quality Standard" fill className="object-cover" />
                 </div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}
