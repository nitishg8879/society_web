import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, PlayCircle, Apple, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#030712] border-t border-gray-100 dark:border-gray-800/50 pt-20 pb-10 overflow-hidden">
      
      {/* Subtle Glow Effect in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Newsletter & Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 pb-16 border-b border-gray-100 dark:border-gray-800/50">
          
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-indigo-600 p-2 rounded-xl group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-black text-2xl text-gray-900 dark:text-white tracking-tight">
                Society<span className="font-light opacity-80">Flow</span>
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              The modern operating system for residential complexes. Automate bills, track expenses, and resolve complaints effortlessly.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
              <a href="mailto:support@societyflow.com" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit">
                <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg"><Mail className="h-4 w-4" /></div> support@societyflow.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit">
                <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg"><Phone className="h-4 w-4" /></div> +91 98765 43210
              </a>
            </div>
          </div>

          {/* Newsletter Subscribe */}
          <div className="w-full lg:w-auto lg:min-w-[400px]">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Stay updated</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Get the latest features and society management tips.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links & Apps */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</Link></li>
              <li><Link to="/demo" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Sales</Link></li>
              <li><Link to="/login" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Download App Section - YOUR PREFERRED DESIGN */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Get the App</h3>
            <div className="space-y-3">
              
              {/* Working Google Play Store Button */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.societyflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2.5 rounded-xl hover:scale-105 transition-transform w-full max-w-[200px] shadow-sm"
              >
                <PlayCircle className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>

              {/* iOS App Store - Coming Soon Button */}
              <div 
                className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 cursor-not-allowed w-full max-w-[200px]"
                title="iOS version is under development"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight">COMING SOON ON</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-100 dark:border-gray-800/50">
          <p className="text-sm text-gray-400 font-medium">
            © {currentYear} SocietyFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-400 font-medium">
            Designed with <span className="text-red-500 animate-pulse">❤️</span> for modern living
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;