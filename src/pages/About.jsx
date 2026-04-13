import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Cursor Glow Logic (Consistent with Contact Page)
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

// Parallax Scroll Logic (Fixed with Number Values)
  const { scrollYProgress } = useScroll();
const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]); 
const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#fafafa] dark:bg-[#030712] overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Dynamic Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 hidden dark:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.06), transparent 40%)`
        }}
      />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-5 pointer-events-none"></div>

      {/* 1. ULTRA-MODERN HERO SECTION WITH PARALLAX */}
      <div className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-8 border border-indigo-100 dark:border-indigo-500/20">
              <Sparkles className="w-3 h-3" /> Our Story
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[1.05]">
              Rewiring the way <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400">
                communities live.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-light leading-relaxed">
              We started Society Flow because managing a residential complex felt like it was stuck in 2010. Piles of registers, messy WhatsApp groups, and delayed payments. <strong className="font-semibold text-gray-900 dark:text-white">We fixed it.</strong>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats Bar (Glassmorphism) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-32"
      >
        <div className="bg-white/60 dark:bg-[#0B0F19]/60 backdrop-blur-2xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
            <div className="pt-4 md:pt-0">
              <div className="text-5xl font-black text-gray-900 dark:text-white mb-2">10+</div>
              <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Premium Societies</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-black text-gray-900 dark:text-white mb-2">5k+</div>
              <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Active Residents</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
              <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Automated Splits</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. APPLE-STYLE STICKY SCROLL SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Sticky Abstract Image/UI Mockup */}
          <div className="hidden lg:block sticky top-32 h-[600px] rounded-[2rem] bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
            <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 flex items-center justify-center">
               {/* Abstract App Representation */}
               <div className="w-3/4 h-3/4 bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md rounded-2xl border border-white/40 dark:border-gray-700 shadow-2xl p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50"></div>
                    <div className="w-24 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50"></div>
                  </div>
                  <div className="w-full h-32 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"></div>
                  <div className="w-full h-16 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"></div>
                  <div className="w-3/4 h-16 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"></div>
               </div>
            </motion.div>
          </div>

          {/* Right Side: Scrolling Text */}
          <div className="space-y-24 py-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Built for Admins. <br/><span className="text-gray-500">Loved by Residents.</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Society management is a thankless job. We realized that admins spend hours reconciling bank statements, while residents get frustrated with clunky apps. We bridged that gap by designing a system that does the heavy lifting financially, while keeping the interface as simple as a social media app.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">The Multi-Bank Routing Innovation.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Unlike generic payment gateways, we built our architecture around the concept of <strong>Smart Settlements</strong>. Money flows directly from the resident's UPI to the specific society's bank account. No middleman holding periods. No compliance nightmares for us. Pure efficiency.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. CORE VALUES BENTO GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 border-t border-gray-200 dark:border-gray-800">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Our Core Values.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Spans 2 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-2 group relative p-8 md:p-10 rounded-3xl bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-colors duration-500"></div>
            <ShieldCheck className="w-10 h-10 text-indigo-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Absolute Transparency</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
              From open ledgers to crystal-clear privacy policies, we believe every resident has the right to know where their maintenance money is going and how their data is used.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition-colors overflow-hidden"
          >
            <Zap className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Speed is a Feature</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Nobody wants to spend 10 minutes booking a badminton court. We optimize every flow to take 3 clicks or less.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 transition-colors overflow-hidden"
          >
            <Users className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Built for Everyone</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Designed to be as intuitive for a 20-year-old techie as it is for a 60-year-old retired admin. Accessibility matters.
            </p>
          </motion.div>

          {/* Card 4: CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.3 }}
            className="md:col-span-2 group relative p-8 md:p-10 rounded-3xl bg-indigo-600 overflow-hidden"
          >
             {/* Background Pattern inside CTA */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
               <div>
                 <h3 className="text-3xl font-bold text-white mb-2">Be part of our journey.</h3>
                 <p className="text-indigo-100 text-lg">We are onboarding new societies every week.</p>
               </div>
               <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl shrink-0">
                 Contact Sales <ArrowRight className="w-5 h-5" />
               </Link>
             </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default About;