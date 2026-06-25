import Link from "next/link";
import { Globe, MessageCircle, Share2, Users, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Arrowhead Digitech</h3>
            <p className="text-brand-gray/80 mb-6 leading-relaxed">
              Premium roofing solutions that protect what matters most. Professional residential and commercial roofing services built on trust and craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Globe size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <MessageCircle size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Share2 size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Users size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-gray/80">
              <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-brand-orange transition-colors">Projects</Link></li>
              <li><Link href="/faq" className="hover:text-brand-orange transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-brand-gray/80">
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Roof Replacement</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Roof Repair</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Commercial Roofing</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Residential Roofing</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Metal Roofing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-brand-gray/80">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-brand-orange shrink-0 mt-1" />
                <span>123 Roofing Avenue, Suite 100<br/>Premium City, USA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-brand-orange shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-brand-orange shrink-0" />
                <span>info@arrowheaddigitech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray/60">
          <p>&copy; {new Date().getFullYear()} Arrowhead Digitech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-brand-orange transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
