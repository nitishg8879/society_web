import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wallet, Activity, Smartphone } from 'lucide-react';

const Features = () => {
  const sections = [
    {
      title: "Split Payment Routing",
      subtitle: "Smart Settlements",
      desc: "Manage multiple societies from a single dashboard. When a resident pays, our intelligent routing system deposits the money directly into that specific society's bank account. No middleman, no tax compliance headaches.",
      icon: <Wallet className="w-8 h-8 text-indigo-500" />,
      reverse: false
    },
    {
      title: "Bank-Grade Security",
      subtitle: "Visitor Management",
      desc: "Approve guests, track daily help, and monitor cab entries right from your smartphone. Our cloud-based security logs ensure you always know who is inside the society premises.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      reverse: true
    },
    {
      title: "Automated Maintenance Bills",
      subtitle: "Finance on Autopilot",
      desc: "Generate hundreds of flat maintenance bills in one click. Send automated WhatsApp and email reminders to defaulters, and calculate late payment penalties automatically.",
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Powerful features.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Zero complexity.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-xl text-gray-600 dark:text-gray-400">
            We've built Society Flow from the ground up to solve the real problems faced by society admins and residents every single day.
          </motion.p>
        </div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-32">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-12 items-center ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-900 dark:text-white">
                  {section.icon} {section.subtitle}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.desc}
                </p>
                <ul className="space-y-3 pt-4">
                  {['Real-time sync', 'Cloud backups', 'Export to Excel'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> {item}
                     </li>
                  ))}
                </ul>
              </div>

              {/* Image/Abstract Graphic Side */}
              <div className="flex-1 w-full">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center group shadow-2xl">
                  {/* Glowing background blob */}
                  <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>
                  
                  {/* Abstract App UI Mockup Representation */}
                  <div className="relative z-10 w-3/4 h-3/4 bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700 shadow-xl flex flex-col p-6 group-hover:scale-105 transition-transform duration-500">
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
                      <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                      <div className="h-4 w-5/6 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                      <div className="h-24 w-full bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-500/30 mt-auto flex items-center justify-center">
                         <Smartphone className="w-8 h-8 text-indigo-400 opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;