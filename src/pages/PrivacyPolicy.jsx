import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030712] pt-32 pb-24 selection:bg-indigo-500/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100 dark:border-indigo-500/20">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Last updated: April 2026
          </p>
        </motion.div>

        {/* Content (Prose) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p>
              At SocietyFlow, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our society management application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for an account, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-indigo-500">
              <li>Name and contact data (email address, phone number)</li>
              <li>Society details and flat numbers</li>
              <li>Payment routing information for smart settlements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Data</h2>
            <p>
              Your data is exclusively used to provide and improve the SocietyFlow services. We do not sell your personal data to third parties. Our automated split payments require routing data to directly deposit funds into your society's registered bank account.
            </p>
          </section>

          <section className="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-500/20">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Have questions about your data?</h2>
            <p className="text-indigo-700 dark:text-indigo-400 text-base m-0">
              Reach out to our Data Protection Officer at <a href="mailto:privacy@societyflow.com" className="font-bold underline hover:text-indigo-600 transition-colors">privacy@societyflow.com</a>.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;