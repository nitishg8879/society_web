import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  // Cursor tracking for the modern "glow" effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#fafafa] dark:bg-[#030712] pt-32 pb-24 overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Dynamic Cursor Glow Effect (Only visible in Dark Mode for that sleek look) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 hidden dark:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.08), transparent 40%)`
        }}
      />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-5 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Advanced Minimalist Header */}
        <div className="max-w-3xl mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-100 dark:border-indigo-500/20">
              <MessageSquare className="w-3 h-3" /> Get in touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-[1.1]">
              We'd love to hear <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                from your society.
              </span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-light">
              Whether you need a custom integration, a pricing plan for a massive township, or just want to say hi—drop us a line.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bento Grid Contact Info (Left Side - Takes 5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Bento Card 1: Email */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-colors overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-gray-400">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Support & Sales</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">hello@societyflow.com</p>
            </motion.div>

            {/* Bento Card 2: Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition-colors overflow-hidden"
            >
               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-gray-400">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Call our team</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">+91 98765 43210</p>
            </motion.div>

            {/* Bento Card 3: Location */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-colors overflow-hidden sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">HQ / Office</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white mb-2">Andheri East, Mumbai, Maharashtra 400069</p>
              <div className="w-full h-24 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400 text-sm">
                [ Map Interface Placeholder ]
              </div>
            </motion.div>

          </div>

          {/* Premium Glassmorphism Form (Right Side - Takes 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="lg:col-span-7 bg-white/70 dark:bg-[#0B0F19]/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-2xl relative"
          >
            {/* Subtle glow inside the form container */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Modern Floating Label Input */}
                <div className="relative group">
                  <input type="text" id="fname" className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-0 focus:border-indigo-500 peer transition-colors text-lg" placeholder=" " required />
                  <label htmlFor="fname" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin- peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                </div>

                <div className="relative group">
                  <input type="text" id="lname" className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-0 focus:border-indigo-500 peer transition-colors text-lg" placeholder=" " required />
                  <label htmlFor="lname" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin- peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                </div>
              </div>

              <div className="relative group">
                <input type="email" id="email" className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-0 focus:border-indigo-500 peer transition-colors text-lg" placeholder=" " required />
                <label htmlFor="email" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin- peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Work Email Address</label>
              </div>

              <div className="relative group">
                <input type="text" id="society" className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-0 focus:border-indigo-500 peer transition-colors text-lg" placeholder=" " required />
                <label htmlFor="society" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin- peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Society Name & Total Flats</label>
              </div>

              <div className="relative group pt-4">
                <textarea id="message" rows="3" className="block w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-0 focus:border-indigo-500 peer transition-colors text-lg resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin- peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">How can we help you?</label>
              </div>

              <div className="pt-6">
                <button type="submit" className="group relative w-full inline-flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/20 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Send Application <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  {/* Button Hover gradient effect */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  <span className="relative z-10 group-hover:text-white hidden group-hover:block transition-colors absolute">Send Application <Send className="w-5 h-5 inline ml-2" /></span>
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;