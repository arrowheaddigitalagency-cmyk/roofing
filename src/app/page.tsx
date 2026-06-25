"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Wrench, Droplets, Building2, CheckCircle, Star, Phone, Check, ChevronDown, Award } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    { title: "Roof Replacement", icon: ShieldCheck, desc: "Premium materials and uncompromising craftsmanship for your luxury home.", image: "https://images.unsplash.com/photo-1632759145355-66774f9d2732?q=80&w=2070&auto=format&fit=crop" },
    { title: "Roof Repair", icon: Wrench, desc: "Expert precision repairs restoring the integrity of your roof.", image: "https://images.unsplash.com/photo-1543884175-9c869910d6e8?q=80&w=1964&auto=format&fit=crop" },
    { title: "Storm Restoration", icon: Droplets, desc: "Comprehensive storm damage assessment and premium restoration.", image: "https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop" },
    { title: "Commercial", icon: Building2, desc: "Enterprise-grade roofing solutions for commercial properties.", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" }
  ];

  const faqs = [
    { q: "How long does a roof replacement typically take?", a: "Most residential roof replacements are completed in 1-2 days. Commercial projects vary based on scale and complexity." },
    { q: "Do you offer warranties on your roofing work?", a: "Yes, we provide industry-leading non-prorated warranties covering both materials and our workmanship for up to 50 years." },
    { q: "Will you help with my insurance claim for storm damage?", a: "Absolutely. We have specialists on staff who work directly with your insurance adjuster to ensure you get the coverage you deserve." }
  ];

  return (
    <div className="overflow-hidden bg-luxury-warm">
      
      {/* SECTION 1: Full Screen Premium Hero */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" alt="Luxury Home Roofing" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/80 via-luxury-dark/50 to-luxury-warm"></div>
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-6 text-center mt-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="text-5xl md:text-8xl font-bold text-luxury-white mb-6 tracking-tighter drop-shadow-2xl">
              Elevating the Standard <br className="hidden md:block"/> of <span className="text-luxury-gold">Craftsmanship</span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-xl md:text-2xl text-luxury-stone mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Arrowhead Digitech provides unparalleled residential and commercial roofing solutions, combining elite materials with masterful execution.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="/contact" className="px-10 py-5 bg-luxury-gold text-white rounded-sm font-semibold tracking-wide text-lg hover:bg-luxury-brown transition-all shadow-xl w-full sm:w-auto">
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Trust Badges / Certifications */}
      <section className="py-12 bg-luxury-dark relative z-20 border-b border-luxury-gold/20">
         <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
               {/* Using text representation for badges but keeping the premium feel */}
               <div className="flex items-center text-luxury-white text-xl font-bold tracking-widest uppercase"><ShieldCheck className="mr-3 text-luxury-gold"/> Master Elite</div>
               <div className="flex items-center text-luxury-white text-xl font-bold tracking-widest uppercase"><Award className="mr-3 text-luxury-gold"/> A+ BBB Rated</div>
               <div className="flex items-center text-luxury-white text-xl font-bold tracking-widest uppercase"><CheckCircle className="mr-3 text-luxury-gold"/> Fully Licensed</div>
               <div className="flex items-center text-luxury-white text-xl font-bold tracking-widest uppercase"><Star className="mr-3 text-luxury-gold"/> 5-Star Reviews</div>
            </div>
         </div>
      </section>

      {/* SECTION 3: Company Introduction */}
      <section className="py-32 bg-luxury-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark mb-6">Uncompromising Quality in Every Shingle</h2>
              <p className="text-lg text-luxury-brown/80 mb-6 font-light leading-relaxed">Arrowhead Digitech was founded on a simple principle: roofing done right. We understand that your roof is your property&apos;s first line of defense. That&apos;s why we refuse to cut corners, exclusively utilizing top-tier materials and highly trained, certified installation crews.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-luxury-brown font-medium"><Check className="text-luxury-gold mr-4" /> Over 20 Years of Industry Experience</li>
                <li className="flex items-center text-luxury-brown font-medium"><Check className="text-luxury-gold mr-4" /> Comprehensive Property Protection</li>
                <li className="flex items-center text-luxury-brown font-medium"><Check className="text-luxury-gold mr-4" /> Dedicated Project Management</li>
              </ul>
              <Link href="/about" className="inline-flex items-center text-luxury-gold font-bold uppercase tracking-widest hover:text-luxury-brown transition-colors">
                 Read Our Story <ArrowRight className="ml-3" />
              </Link>
           </motion.div>
           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2070&auto=format&fit=crop" alt="Roofing Crew" fill className="object-cover" />
           </motion.div>
        </div>
      </section>

      {/* SECTION 4: Roofing Services Grid */}
      <section className="py-32 bg-luxury-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-luxury-dark mb-6">Masterful Execution</h2>
            <p className="text-xl text-luxury-brown/80 max-w-2xl mx-auto font-light">Precision engineering and elite materials for every project we undertake.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group relative rounded-sm overflow-hidden bg-luxury-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-luxury-stone/20">
                <div className="relative h-64 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 bg-luxury-white/10 backdrop-blur-md p-3 rounded-sm border border-luxury-white/20">
                    <service.icon className="text-luxury-gold w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-luxury-dark">{service.title}</h3>
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

      {/* SECTION 5: Why Choose Arrowhead */}
      <section className="py-32 bg-luxury-dark text-luxury-white">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
               <Image src="https://images.unsplash.com/photo-1541888081622-1df6b62174c8?q=80&w=2070&auto=format&fit=crop" alt="Quality Roofing Materials" fill className="object-cover" />
            </div>
            <div>
               <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Arrowhead Digitech?</h2>
               <div className="space-y-6">
                 {[
                   { title: "Premium Materials", desc: "We source only the highest grade architectural shingles, metal, and TPO systems." },
                   { title: "Ironclad Warranties", desc: "Enjoy peace of mind with our extended manufacturer and workmanship warranties." },
                   { title: "Transparent Pricing", desc: "No hidden fees. We provide clear, accurate estimates before any work begins." }
                 ].map((item, i) => (
                   <div key={i} className="border border-luxury-stone/20 p-6 rounded-sm bg-white/5 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-luxury-gold mb-2">{item.title}</h3>
                      <p className="text-luxury-stone font-light">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 6: Residential Roofing Focus */}
      <section className="py-24 bg-luxury-white">
         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
               <h2 className="text-4xl font-bold text-luxury-dark mb-6">Luxury Residential Roofing</h2>
               <p className="text-lg text-luxury-brown/80 font-light mb-8">Your home deserves a roof that enhances its architectural beauty while providing impenetrable protection. We specialize in high-end asphalt, slate, and custom metal installations tailored to your estate.</p>
               <Link href="/services" className="text-luxury-gold font-bold uppercase tracking-widest border-b-2 border-luxury-gold pb-1 hover:text-luxury-brown hover:border-luxury-brown transition-colors">View Residential Services</Link>
            </div>
            <div className="flex-1 w-full relative h-[400px] rounded-sm overflow-hidden shadow-xl">
               <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="Luxury Residential Roof" fill className="object-cover" />
            </div>
         </div>
      </section>

      {/* SECTION 7: Commercial Roofing Focus */}
      <section className="py-24 bg-luxury-cream">
         <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1">
               <h2 className="text-4xl font-bold text-luxury-dark mb-6">Enterprise Commercial Systems</h2>
               <p className="text-lg text-luxury-brown/80 font-light mb-8">Minimize downtime and maximize energy efficiency. Our commercial division handles massive-scale flat roofs, TPO, EPDM, and preventative maintenance for business parks and corporate centers.</p>
               <Link href="/services" className="text-luxury-gold font-bold uppercase tracking-widest border-b-2 border-luxury-gold pb-1 hover:text-luxury-brown hover:border-luxury-brown transition-colors">View Commercial Services</Link>
            </div>
            <div className="flex-1 w-full relative h-[400px] rounded-sm overflow-hidden shadow-xl">
               <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Commercial Flat Roof" fill className="object-cover" />
            </div>
         </div>
      </section>

      {/* SECTION 8: Roof Repair & Maintenance */}
      <section className="py-24 bg-luxury-warm">
         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
               <h2 className="text-4xl font-bold text-luxury-dark mb-6">Expert Repair & Diagnostics</h2>
               <p className="text-lg text-luxury-brown/80 font-light mb-8">Not every roof needs a full replacement. Our diagnostic technicians pinpoint leaks, assess storm damage, and execute surgical repairs to extend the lifespan of your existing roofing system.</p>
               <Link href="/services" className="text-luxury-gold font-bold uppercase tracking-widest border-b-2 border-luxury-gold pb-1 hover:text-luxury-brown hover:border-luxury-brown transition-colors">Schedule an Inspection</Link>
            </div>
            <div className="flex-1 w-full relative h-[400px] rounded-sm overflow-hidden shadow-xl">
               <Image src="https://images.unsplash.com/photo-1543884175-9c869910d6e8?q=80&w=1964&auto=format&fit=crop" alt="Roof Inspection and Repair" fill className="object-cover" />
            </div>
         </div>
      </section>

      {/* SECTION 9: Before & After Projects */}
      <section className="py-32 bg-luxury-dark text-luxury-white text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16">The Arrowhead Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="relative h-96 rounded-sm overflow-hidden border border-white/20">
                  <Image src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" alt="Before Roof Replacement" fill className="object-cover opacity-80" />
                  <div className="absolute top-4 left-4 bg-black/70 px-4 py-2 font-bold tracking-widest uppercase text-sm">Before</div>
               </div>
               <div className="relative h-96 rounded-sm overflow-hidden border border-luxury-gold/50">
                  <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" alt="After Roof Replacement" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-luxury-gold text-luxury-dark px-4 py-2 font-bold tracking-widest uppercase text-sm">After</div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 10: Project Statistics */}
      <section className="py-20 bg-luxury-gold relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <Image src="https://images.unsplash.com/photo-1632759145355-66774f9d2732?q=80&w=2070&auto=format&fit=crop" alt="Texture" fill className="object-cover" />
         </div>
         <div className="container mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><h3 className="text-5xl font-bold text-white mb-2">2,500+</h3><p className="text-luxury-dark font-bold uppercase tracking-widest">Roofs Installed</p></div>
            <div><h3 className="text-5xl font-bold text-white mb-2">20+</h3><p className="text-luxury-dark font-bold uppercase tracking-widest">Years Experience</p></div>
            <div><h3 className="text-5xl font-bold text-white mb-2">50yr</h3><p className="text-luxury-dark font-bold uppercase tracking-widest">Warranties</p></div>
            <div><h3 className="text-5xl font-bold text-white mb-2">100%</h3><p className="text-luxury-dark font-bold uppercase tracking-widest">Satisfaction</p></div>
         </div>
      </section>

      {/* SECTION 11: Roofing Process Timeline */}
      <section className="py-32 bg-luxury-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-5xl font-bold text-luxury-dark mb-6">Our Proven Process</h2>
               <p className="text-xl text-luxury-brown/80 font-light">From initial contact to final inspection, our workflow is seamless.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-12">
               {[
                 { step: "01", title: "Comprehensive Inspection", desc: "We utilize advanced drone technology and physical assessments to evaluate your roof.", img: "https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop" },
                 { step: "02", title: "Detailed Proposal", desc: "You receive a transparent, line-item estimate detailing materials, labor, and timelines.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
                 { step: "03", title: "Precision Execution", desc: "Our certified crews tear off the old roof, repair the decking, and install the new system.", img: "https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2070&auto=format&fit=crop" },
                 { step: "04", title: "Final Walkthrough", desc: "We clean the property magnetically and conduct a rigorous final quality assurance check.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col md:flex-row items-center gap-8 bg-luxury-warm p-6 rounded-sm border border-luxury-stone/20 shadow-lg">
                    <div className="w-full md:w-1/3 h-48 relative rounded-sm overflow-hidden">
                       <Image src={item.img} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="w-full md:w-2/3">
                       <span className="text-luxury-gold font-bold text-2xl mb-2 block">{item.step}</span>
                       <h3 className="text-2xl font-bold text-luxury-dark mb-3">{item.title}</h3>
                       <p className="text-luxury-brown/80 font-light">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 12: Testimonials */}
      <section className="py-32 bg-luxury-dark relative overflow-hidden">
         <div className="absolute inset-0 opacity-20">
            <Image src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop" alt="Roofing Background" fill className="object-cover" />
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl font-bold text-luxury-white mb-16">Client Experiences</h2>
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-12 border border-white/20 rounded-sm">
               <div className="flex justify-center mb-6">
                 {[1,2,3,4,5].map(i => <Star key={i} className="text-luxury-gold w-6 h-6 fill-current" />)}
               </div>
               <p className="text-2xl text-luxury-stone italic mb-8 leading-relaxed">&quot;Arrowhead Digitech completely transformed our property. The crew was professional, the job site was immaculate, and the final roof looks absolutely stunning. The best contractor experience we&apos;ve ever had.&quot;</p>
               <h4 className="text-xl font-bold text-luxury-white uppercase tracking-widest">- James & Sarah M.</h4>
            </div>
         </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="py-32 bg-luxury-cream">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
               <h2 className="text-5xl font-bold text-luxury-dark mb-8">Frequently Asked Questions</h2>
               <div className="space-y-4">
                 {faqs.map((faq, i) => (
                   <div key={i} className="bg-luxury-white rounded-sm shadow-sm border border-luxury-stone/20 overflow-hidden cursor-pointer" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                      <div className="p-6 flex justify-between items-center">
                         <h4 className="font-bold text-luxury-dark text-lg">{faq.q}</h4>
                         <ChevronDown className={"text-luxury-gold transition-transform " + (activeFaq === i ? "rotate-180" : "")} />
                      </div>
                      {activeFaq === i && (
                         <div className="px-6 pb-6 text-luxury-brown/80 font-light border-t border-luxury-stone/10 pt-4">
                           {faq.a}
                         </div>
                      )}
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
               <Image src="https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop" alt="Drone Roof Inspection" fill className="object-cover" />
            </div>
         </div>
      </section>

      {/* SECTION 14: Contact CTA */}
      <section className="py-32 relative overflow-hidden text-center">
         <div className="absolute inset-0 z-0">
            <Image src="https://images.unsplash.com/photo-1541888081622-1df6b62174c8?q=80&w=2070&auto=format&fit=crop" alt="Roofing Construction Workers" fill className="object-cover" />
            <div className="absolute inset-0 bg-luxury-dark/90"></div>
         </div>
         <div className="container relative z-10 mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-bold text-luxury-white mb-6">Secure Your Property Today</h2>
            <p className="text-xl text-luxury-stone mb-10 max-w-2xl mx-auto font-light">Don&apos;t wait for a leak to reveal a failing roof. Contact Arrowhead Digitech for a comprehensive inspection and premium upgrade.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
               <Link href="/contact" className="px-12 py-5 bg-luxury-gold text-white font-bold tracking-widest uppercase rounded-sm hover:bg-luxury-brown transition-colors w-full sm:w-auto">Get Your Estimate</Link>
               <a href="tel:5551234567" className="flex items-center px-12 py-5 border border-luxury-gold text-luxury-gold font-bold tracking-widest uppercase rounded-sm hover:bg-luxury-gold hover:text-white transition-colors w-full sm:w-auto">
                 <Phone className="mr-3 w-5 h-5" /> (555) 123-4567
               </a>
            </div>
         </div>
      </section>

      {/* SECTION 15: Footer component handles this globally in layout */}
    </div>
  );
}
