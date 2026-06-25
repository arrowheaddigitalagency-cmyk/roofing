"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const allImages = [
  { id: 1, src: "https://loremflickr.com/1920/1080/roof,house?lock=5", category: "Residential" },
  { id: 2, src: "https://loremflickr.com/1920/1080/roof,house?lock=6", category: "Repair" },
  { id: 3, src: "https://loremflickr.com/1920/1080/roof,house?lock=7", category: "Commercial" },
  { id: 4, src: "https://loremflickr.com/1920/1080/roof,house?lock=8", category: "Residential" },
  { id: 5, src: "https://loremflickr.com/1920/1080/roof,house?lock=9", category: "Commercial" },
  { id: 6, src: "https://loremflickr.com/1920/1080/roof,house?lock=10", category: "Metal" },
  { id: 7, src: "https://loremflickr.com/1920/1080/roof,house?lock=11", category: "Repair" },
  { id: 8, src: "https://loremflickr.com/1920/1080/roof,house?lock=12", category: "Residential" },
  { id: 9, src: "https://loremflickr.com/1920/1080/roof,house?lock=13", category: "Commercial" },
  { id: 10, src: "https://loremflickr.com/1920/1080/roof,house?lock=14", category: "Construction" },
  { id: 11, src: "https://loremflickr.com/1920/1080/roof,house?lock=15", category: "Residential" },
  { id: 12, src: "https://loremflickr.com/1920/1080/roof,house?lock=16", category: "Construction" },
  { id: 13, src: "https://loremflickr.com/1920/1080/roof,house?lock=17", category: "Residential" },
  { id: 14, src: "https://loremflickr.com/1920/1080/roof,house?lock=18", category: "Commercial" },
  { id: 15, src: "https://loremflickr.com/1920/1080/roof,house?lock=19", category: "Residential" },
  { id: 16, src: "https://loremflickr.com/1920/1080/roof,house?lock=20", category: "Metal" },
  { id: 17, src: "https://loremflickr.com/1920/1080/roof,house?lock=21", category: "Commercial" },
  { id: 18, src: "https://loremflickr.com/1920/1080/roof,house?lock=22", category: "Residential" },
  { id: 19, src: "https://loremflickr.com/1920/1080/roof,house?lock=23", category: "Commercial" },
  { id: 20, src: "https://loremflickr.com/1920/1080/roof,house?lock=24", category: "Construction" },
  { id: 21, src: "https://loremflickr.com/1920/1080/roof,house?lock=25", category: "Residential" },
  { id: 22, src: "https://loremflickr.com/1920/1080/roof,house?lock=26", category: "Residential" },
  { id: 23, src: "https://loremflickr.com/1920/1080/roof,house?lock=27", category: "Residential" },
  { id: 24, src: "https://loremflickr.com/1920/1080/roof,house?lock=28", category: "Commercial" }
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
                   <Image unoptimized  
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
              <Image unoptimized  
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
