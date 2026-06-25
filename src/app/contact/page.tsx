"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-luxury-warm min-h-screen">
      
      {/* Contact Hero with Image */}
      <section className="relative pt-40 pb-24 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <Image src="https://images.unsplash.com/photo-1541888081622-1df6b62174c8?q=80&w=2070&auto=format&fit=crop" alt="Roofing Construction Workers" fill className="object-cover" />
            <div className="absolute inset-0 bg-luxury-dark/90"></div>
         </div>
         <div className="container relative z-10 mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
               <h1 className="text-5xl md:text-7xl font-bold text-luxury-white mb-6">Contact Us</h1>
               <p className="text-xl text-luxury-stone font-light max-w-2xl mx-auto">Get in touch with Arrowhead Digitech for a premium consultation and accurate estimate.</p>
            </motion.div>
         </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Functional Validated Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-luxury-white p-10 shadow-2xl rounded-sm border border-luxury-stone/20 relative">
            
            {isSuccess && (
               <div className="absolute inset-0 z-20 bg-luxury-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 rounded-sm">
                  <CheckCircle2 className="w-20 h-20 text-luxury-gold mb-6" />
                  <h3 className="text-3xl font-bold text-luxury-dark mb-4">Request Received</h3>
                  <p className="text-luxury-brown/80 font-light text-lg">Thank you for contacting Arrowhead Digitech. One of our premium roofing specialists will be in touch with you shortly.</p>
               </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-luxury-dark mb-2">First Name</label>
                  <input {...register("firstName")} type="text" className={"w-full border-b-2 bg-transparent py-2 focus:outline-none transition-colors " + (errors.firstName ? "border-red-500" : "border-luxury-stone focus:border-luxury-gold")} placeholder="John" />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> {errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-dark mb-2">Last Name</label>
                  <input {...register("lastName")} type="text" className={"w-full border-b-2 bg-transparent py-2 focus:outline-none transition-colors " + (errors.lastName ? "border-red-500" : "border-luxury-stone focus:border-luxury-gold")} placeholder="Doe" />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> {errors.lastName.message}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-luxury-dark mb-2">Email Address</label>
                   <input {...register("email")} type="email" className={"w-full border-b-2 bg-transparent py-2 focus:outline-none transition-colors " + (errors.email ? "border-red-500" : "border-luxury-stone focus:border-luxury-gold")} placeholder="john@example.com" />
                   {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> {errors.email.message}</p>}
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-luxury-dark mb-2">Phone Number</label>
                   <input {...register("phone")} type="tel" className={"w-full border-b-2 bg-transparent py-2 focus:outline-none transition-colors " + (errors.phone ? "border-red-500" : "border-luxury-stone focus:border-luxury-gold")} placeholder="(555) 123-4567" />
                   {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> {errors.phone.message}</p>}
                 </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-luxury-dark mb-2">Service Required</label>
                <select {...register("service")} className={"w-full border-b-2 bg-transparent py-2 focus:outline-none transition-colors text-luxury-brown " + (errors.service ? "border-red-500" : "border-luxury-stone focus:border-luxury-gold")}>
                  <option value="">Select a Service...</option>
                  <option value="Residential Roof Replacement">Residential Roof Replacement</option>
                  <option value="Commercial Roofing">Commercial Roofing</option>
                  <option value="Roof Repair">Roof Repair</option>
                  <option value="Storm Damage Inspection">Storm Damage Inspection</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> {errors.service.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-luxury-dark mb-2">Message</label>
                <textarea {...register("message")} rows={4} className={"w-full border-b-2 bg-transparent py-2 focus:outline-none transition-colors " + (errors.message ? "border-red-500" : "border-luxury-stone focus:border-luxury-gold")} placeholder="Tell us about your property and project requirements..."></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> {errors.message.message}</p>}
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-luxury-dark text-white py-4 font-semibold tracking-widest hover:bg-luxury-gold transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                 {isSubmitting ? "PROCESSING..." : "SUBMIT REQUEST"}
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map Image placeholder */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-10">
            <div className="bg-luxury-white p-10 shadow-xl border border-luxury-stone/10 rounded-sm">
               <h3 className="text-2xl font-bold text-luxury-dark mb-8">Corporate Headquarters</h3>
               <ul className="space-y-6">
                 <li className="flex items-start"><MapPin className="text-luxury-gold mr-4 mt-1" /><span className="text-lg text-luxury-brown/80 font-light">123 Luxury Avenue, Suite 100<br/>Premium City, USA 12345</span></li>
                 <li className="flex items-center"><Phone className="text-luxury-gold mr-4" /><span className="text-lg text-luxury-brown/80 font-light">(555) 123-4567</span></li>
                 <li className="flex items-center"><Mail className="text-luxury-gold mr-4" /><span className="text-lg text-luxury-brown/80 font-light">consultations@arrowheaddigitech.com</span></li>
                 <li className="flex items-start"><Clock className="text-luxury-gold mr-4 mt-1" /><span className="text-lg text-luxury-brown/80 font-light">Mon - Fri: 8:00 AM - 6:00 PM<br/><span className="text-luxury-gold font-medium mt-1 inline-block">24/7 Emergency Storm Response</span></span></li>
               </ul>
            </div>
            
            {/* Embedded Map Representation via Image */}
            <div className="h-64 relative rounded-sm w-full flex items-center justify-center border border-luxury-stone/30 overflow-hidden shadow-xl">
               <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Location Map" fill className="object-cover opacity-80" />
               <div className="absolute inset-0 bg-luxury-dark/40"></div>
               <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center shadow-lg cursor-pointer hover:bg-luxury-gold hover:text-white transition-colors">
                  <MapPin className="mr-2 w-5 h-5" />
                  <span className="font-semibold uppercase tracking-widest text-sm">View on Google Maps</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
