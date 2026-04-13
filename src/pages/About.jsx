import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Zap, HeartHandshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Community First',
      description: 'We believe that a well-managed society brings people closer together and creates a peaceful living environment.',
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      color: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Absolute Transparency',
      description: 'Every transaction, every bill, and every complaint is tracked clearly. No hidden numbers, no confusion.',
      icon: <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />,
      color: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Lightning Fast',
      description: 'We designed SocietyFlow to save your time. What used to take days for admins, now takes just a few clicks.',
      icon: <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
      color: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      title: 'Dedicated Support',
      description: 'We are always here to help you set up and manage your daily operations smoothly.',
      icon: <HeartHandshake className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      color: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-16">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Building Better <span className="text-blue-600 dark:text-blue-400">Communities</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          SocietyFlow was built with a simple mission: to take the stress out of managing residential complexes. We empower admins with smart tools and give residents complete peace of mind.
        </motion.p>
      </section>

      {/* Image / Stats Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-around gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Digital Workflow</div>
          </div>
          <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          <div>
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">0</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Payment Gateway Fees</div>
          </div>
          <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          <div>
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">System Uptime</div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">The principles that drive everything we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex gap-6"
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${value.color}`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;