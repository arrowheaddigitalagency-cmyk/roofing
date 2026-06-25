"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const allImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1632759145355-66774f9d2732?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 2, src: "https://images.unsplash.com/photo-1543884175-9c869910d6e8?q=80&w=1964&auto=format&fit=crop", category: "Repair" },
  { id: 3, src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop", category: "Commercial" },
  { id: 4, src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", category: "Residential" },
  { id: 5, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", category: "Commercial" },
  { id: 6, src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop", category: "Metal" },
  { id: 7, src: "https://images.unsplash.com/photo-1628189689452-f67fce533e55?q=80&w=2070&auto=format&fit=crop", category: "Repair" },
  { id: 8, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 9, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", category: "Commercial" },
  { id: 10, src: "https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2070&auto=format&fit=crop", category: "Construction" },
  { id: 11, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 12, src: "https://images.unsplash.com/photo-1541888081622-1df6b62174c8?q=80&w=2070&auto=format&fit=crop", category: "Construction" },
  { id: 13, src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 14, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop", category: "Commercial" },
  { id: 15, src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 16, src: "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?q=80&w=2070&auto=format&fit=crop", category: "Metal" },
  { id: 17, src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop", category: "Commercial" },
  { id: 18, src: "https://images.unsplash.com/photo-1622838320002-392da2287b38?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 19, src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop", category: "Commercial" },
  { id: 20, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", category: "Construction" },
  { id: 21, src: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 22, src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop", category: "Residential" },
  { id: 23, src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop", category: "Residential" },
  { id: 24, src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop", category: "Commercial" }
];

const categories = ["All", "Residential", "Commercial", "Metal", "Repair", "Construction"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredImages = filter === "All" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div className="bg-luxury-warm min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Gallery Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-dark mb-6">Master Portfolio</h1>
          <p className="text-xl text-luxury-brown/80 font-light max-w-2xl mx-auto">Explore our expansive visual archive showcasing hundreds of thousands of square feet of uncompromising roofing excellence.</p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={"px-8 py-3 rounded-full border text-sm font-bold uppercase tracking-widest transition-all duration-300 " + (filter === cat ? "bg-luxury-dark text-white border-luxury-dark shadow-xl" : "bg-white text-luxury-brown border-luxury-stone hover:border-luxury-gold hover:text-luxury-gold")}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
               <motion.div
                 layout
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.8 }}
                 transition={{ duration: 0.5 }}
                 key={img.id} 
                 className="relative break-inside-avoid rounded-sm overflow-hidden group cursor-pointer shadow-lg border border-luxury-stone/20"
                 onClick={() => setLightboxImg(img.src)}
               >
                 {/* Provide random natural heights to simulate true masonry varying heights */}
                 <div className={"relative w-full " + (img.id % 3 === 0 ? "h-96" : img.id % 2 === 0 ? "h-80" : "h-64")}>
                   <Image 
                     src={img.src} 
                     alt={"Roofing Project " + img.category} 
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <ZoomIn className="text-white w-8 h-8" />
                      </div>
                   </div>

                   <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10">
                      <span className="text-luxury-gold font-bold uppercase tracking-widest text-xs">{img.category}</span>
                   </div>
                 </div>
               </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImg(null);
              }}
            >
              <X className="w-12 h-12" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              className="relative w-full max-w-6xl max-h-[90vh] aspect-video rounded-sm overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={lightboxImg} 
                alt="Enlarged Roofing View" 
                fill 
                className="object-contain" 
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
