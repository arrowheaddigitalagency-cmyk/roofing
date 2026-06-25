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
