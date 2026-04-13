import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for small independent societies.",
      priceMonthly: "₹999",
      priceAnnual: "₹799",
      features: ["Up to 50 Flats", "Basic Maintenance Billing", "Visitor Entry Log", "Email Support"],
      notIncluded: ["Automated Split Payments", "Amenities Booking", "Dedicated Manager"],
      isPopular: false
    },
    {
      name: "Professional",
      desc: "Everything a growing modern society needs.",
      priceMonthly: "₹2,499",
      priceAnnual: "₹1,999",
      features: ["Up to 200 Flats", "Automated Split Payments", "Smart Visitor & Cab Tracking", "Amenities Booking", "Complaint Helpdesk", "Priority WhatsApp Support"],
      notIncluded: ["Custom API Integrations"],
      isPopular: true
    },
    {
      name: "Enterprise",
      desc: "For large townships and multi-complex builders.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      features: ["Unlimited Flats", "Custom API & ERP Integrations", "Advanced Financial Analytics", "Multiple Bank Account Routing", "Dedicated Account Manager", "White-label Options"],
      notIncluded: [],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0F19] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">pricing.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-xl text-gray-600 dark:text-gray-400">
            No hidden fees. No surprise charges. Choose the perfect plan for your society's needs.
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-8 w-14 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none"
          >
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>Annually</span>
            <span className="px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold">Save 20%</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (idx * 0.1) }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.isPopular 
                  ? 'bg-white dark:bg-[#121826] border-indigo-500 dark:border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105 z-10' 
                  : 'bg-white dark:bg-[#0B0F19] border-gray-200 dark:border-gray-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 h-10">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                  {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                </span>
                {plan.priceMonthly !== "Custom" && <span className="text-gray-500 dark:text-gray-400">/mo</span>}
              </div>

              <button className={`w-full py-3.5 rounded-xl font-bold transition-all mb-8 ${
                plan.isPopular 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}>
                {plan.priceMonthly === "Custom" ? "Contact Sales" : "Get Started"}
              </button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-50">
                    <X className="w-5 h-5 text-gray-400 shrink-0" />
                    <span className="text-gray-500 line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;