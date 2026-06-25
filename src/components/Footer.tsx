import Link from "next/link";
import { Globe, MessageCircle, Share2, Users, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-dark text-luxury-warm pt-24 pb-12 border-t border-luxury-gold/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-luxury-white">
              Arrowhead <span className="text-luxury-gold font-light">Digitech</span>
            </h3>
            <p className="text-luxury-stone/80 mb-8 leading-relaxed font-light">
              Premium roofing solutions that protect what matters most. Professional residential and commercial roofing services built on uncompromising craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-12 h-12 rounded-full border border-luxury-stone/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
                <Globe size={20} className="text-luxury-white" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-luxury-stone/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
                <MessageCircle size={20} className="text-luxury-white" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-luxury-stone/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
                <Share2 size={20} className="text-luxury-white" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-luxury-stone/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
                <Users size={20} className="text-luxury-white" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-8 text-luxury-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-luxury-stone/80 font-light">
              <li><Link href="/" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Home</Link></li>
              <li><Link href="/about" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>About Us</Link></li>
              <li><Link href="/services" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Projects</Link></li>
              <li><Link href="/faq" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-8 text-luxury-white tracking-wide">Services</h4>
            <ul className="space-y-4 text-luxury-stone/80 font-light">
              <li><Link href="/services" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Roof Replacement</Link></li>
              <li><Link href="/services" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Roof Repair</Link></li>
              <li><Link href="/services" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Commercial Roofing</Link></li>
              <li><Link href="/services" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Residential Roofing</Link></li>
              <li><Link href="/services" className="hover:text-luxury-gold transition-colors flex items-center"><span className="w-2 h-px bg-luxury-gold mr-3"></span>Metal Roofing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-8 text-luxury-white tracking-wide">Contact Us</h4>
            <ul className="space-y-6 text-luxury-stone/80 font-light">
              <li className="flex items-start">
                <MapPin size={24} className="mr-4 text-luxury-gold shrink-0" />
                <span className="leading-relaxed">123 Luxury Avenue, Suite 100<br/>Premium City, USA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={24} className="mr-4 text-luxury-gold shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={24} className="mr-4 text-luxury-gold shrink-0" />
                <span>info@arrowheaddigitech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-luxury-stone/60 font-light">
          <p>&copy; {new Date().getFullYear()} Arrowhead Digitech. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-luxury-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
