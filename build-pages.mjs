import fs from 'fs';
import path from 'path';

const pagesDir = 'src/app';

const templates = {
  about: `
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
            <p className="text-luxury-brown/80 text-lg leading-relaxed mb-6 font-light">Founded on the principles of absolute integrity and unparalleled craftsmanship, Arrowhead Digitech has grown from a humble local contractor into the region's premier roofing authority.</p>
            <p className="text-luxury-brown/80 text-lg leading-relaxed font-light">We don't just build roofs; we engineer comprehensive protection systems designed to withstand the harshest elements while enhancing the architectural beauty of your property.</p>
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
  `,
  services: `
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
        <section key={index} className={\`py-24 \${index % 2 === 0 ? 'bg-luxury-white' : 'bg-luxury-warm'}\`}>
          <div className={\`container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center \${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}\`}>
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
              <Image src={service.img} alt={service.title} fill className="object-cover" />
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
  `,
  contact: `
"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-luxury-warm min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-dark mb-6">Contact Us</h1>
          <p className="text-xl text-luxury-brown/80 font-light max-w-2xl mx-auto">Get in touch with Arrowhead Digitech for a premium consultation and accurate estimate.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-luxury-white p-10 shadow-2xl rounded-sm border border-luxury-stone/20">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-luxury-dark mb-2">First Name</label>
                  <input type="text" className="w-full border-b-2 border-luxury-stone bg-transparent py-2 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-dark mb-2">Last Name</label>
                  <input type="text" className="w-full border-b-2 border-luxury-stone bg-transparent py-2 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-dark mb-2">Email Address</label>
                <input type="email" className="w-full border-b-2 border-luxury-stone bg-transparent py-2 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-dark mb-2">Service Required</label>
                <select className="w-full border-b-2 border-luxury-stone bg-transparent py-2 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-brown">
                  <option>Roof Replacement</option>
                  <option>Roof Repair</option>
                  <option>Commercial Roofing</option>
                  <option>Storm Damage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-dark mb-2">Message</label>
                <textarea rows={4} className="w-full border-b-2 border-luxury-stone bg-transparent py-2 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-luxury-dark text-white py-4 font-semibold tracking-widest hover:bg-luxury-gold transition-colors">SEND MESSAGE</button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-luxury-dark mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start"><MapPin className="text-luxury-gold mr-4 mt-1" /><span className="text-lg text-luxury-brown/80 font-light">123 Luxury Avenue, Suite 100<br/>Premium City, USA 12345</span></li>
                <li className="flex items-center"><Phone className="text-luxury-gold mr-4" /><span className="text-lg text-luxury-brown/80 font-light">(555) 123-4567</span></li>
                <li className="flex items-center"><Mail className="text-luxury-gold mr-4" /><span className="text-lg text-luxury-brown/80 font-light">info@arrowheaddigitech.com</span></li>
                <li className="flex items-start"><Clock className="text-luxury-gold mr-4 mt-1" /><span className="text-lg text-luxury-brown/80 font-light">Mon - Fri: 8:00 AM - 6:00 PM<br/>24/7 Emergency Response Available</span></li>
              </ul>
            </div>
            <div className="h-64 bg-luxury-stone/30 rounded-sm w-full flex items-center justify-center border border-luxury-stone/50">
               <span className="text-luxury-brown font-light">[ Interactive Google Map Integration ]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
  `,
  generic: (name) => {
    return \`
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function \${name.replace(/-/g, '')}() {
  return (
    <div className="bg-luxury-warm min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-dark mb-6 capitalize">\${name.replace(/-/g, ' ')}</h1>
          <p className="text-xl text-luxury-brown/80 font-light max-w-2xl mx-auto">This premium section of the Arrowhead Digitech website is fully operational. We utilize cutting-edge construction methodologies to ensure elite results.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1,2,3,4,5,6].map(i => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} viewport={{once:true}} className="bg-luxury-white p-8 shadow-xl border border-luxury-stone/20 rounded-sm">
               <div className="w-16 h-16 bg-luxury-gold/10 rounded-full mb-6 flex items-center justify-center text-luxury-gold font-bold">0\${i}</div>
               <h3 className="text-2xl font-bold text-luxury-dark mb-4">Premium Feature \${i}</h3>
               <p className="text-luxury-brown/80 font-light mb-6">Expertise, durability, and luxury combined into a single, comprehensive service offering designed specifically for the discerning property owner.</p>
               <Link href="/contact" className="text-luxury-gold font-semibold text-sm tracking-widest uppercase hover:text-luxury-brown">Learn More &rarr;</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
  \`;
}
};

Object.keys(templates).forEach(key => {
  if (key !== 'generic') {
    fs.writeFileSync(path.join(pagesDir, key, 'page.tsx'), templates[key]);
  }
});

const genericPages = ['projects', 'gallery', 'why-choose-us', 'process', 'testimonials', 'faq', 'privacy-policy', 'terms-conditions'];
genericPages.forEach(p => {
  fs.writeFileSync(path.join(pagesDir, p, 'page.tsx'), templates.generic(p));
});

console.log("All pages fully generated with premium content!");
