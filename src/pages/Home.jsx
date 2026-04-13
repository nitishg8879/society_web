import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Receipt, Users, CalendarCheck, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- (1) HERO SECTION ---
const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-[#0B0F19]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
          <span className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold border border-indigo-100 dark:border-indigo-500/20">
            <Zap className="w-4 h-4" /> The New Standard for Societies
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
            Society Flow. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Living, perfected.
            </span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-400 mb-10">
            Automate billing, track visitors, and manage amenities with a platform designed for modern residential complexes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link to="/demo" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
              Start Free Trial <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- (2) BENTO GRID FEATURES SECTION ---
const Features = () => {
  const features = [
    { title: "Automated Billing", desc: "Generate multi-account maintenance bills instantly.", icon: <Receipt className="w-6 h-6" />, colSpan: "md:col-span-2", bg: "bg-blue-50 dark:bg-blue-900/20", color: "text-blue-600 dark:text-blue-400" },
    { title: "Smart Routing", desc: "Direct bank settlement for each society.", icon: <Wallet className="w-6 h-6" />, colSpan: "md:col-span-1", bg: "bg-purple-50 dark:bg-purple-900/20", color: "text-purple-600 dark:text-purple-400" },
    { title: "Visitor Log", desc: "Approve guests digitally.", icon: <ShieldCheck className="w-6 h-6" />, colSpan: "md:col-span-1", bg: "bg-emerald-50 dark:bg-emerald-900/20", color: "text-emerald-600 dark:text-emerald-400" },
    { title: "Amenities & Helpdesk", desc: "Book pools and raise tickets in seconds.", icon: <CalendarCheck className="w-6 h-6" />, colSpan: "md:col-span-2", bg: "bg-orange-50 dark:bg-orange-900/20", color: "text-orange-600 dark:text-orange-400" },
  ];

  return (
    <div className="py-24 bg-gray-50 dark:bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Everything you need. <br/><span className="text-gray-500">Nothing you don't.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0F19] overflow-hidden hover:border-indigo-500/50 transition-colors ${feature.colSpan}`}
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-colors"></div>
              
              <div className={`inline-flex p-4 rounded-2xl ${feature.bg} ${feature.color} mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- (3) CTA / BOTTOM BANNER ---
const CTA = () => {
  return (
    <div className="relative py-24 overflow-hidden bg-indigo-600">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to upgrade your society?</h2>
        <p className="text-indigo-100 text-xl mb-10">Join the growing network of smart residential complexes today.</p>
        <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
          Get in Touch with Sales
        </button>
      </div>
    </div>
  );
};

// --- MAIN HOME COMPONENT ---
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
};

export default Home;