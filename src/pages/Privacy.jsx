import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Server } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: '1. Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, and payment method.'
    },
    {
      icon: <Server className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: '2. How We Use Your Information',
      content: 'We may use the information we collect about you to provide, maintain, and improve our services, including facilitating payments, sending receipts, providing products and services you request (and send related information), developing new features, providing customer support to Users and Admins, and authenticating users.'
    },
    {
      icon: <Lock className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
      title: '3. Data Security',
      content: 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. SocietyFlow uses industry-standard encryption to protect your data both in transit and at rest.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: '4. Sharing of Information',
      content: 'We do not share your personal information with third parties except as described in this privacy policy. We may share your information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, strictly under confidentiality agreements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: April 2026
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your privacy is critically important to us. At SocietyFlow, we have a few fundamental principles when it comes to your personal data.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-2 md:pl-16">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Have questions about your data?</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Contact our Data Protection Officer at <a href="mailto:privacy@societyflow.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@societyflow.com</a>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Privacy;