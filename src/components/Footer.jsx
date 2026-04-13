import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, PlayCircle, Apple } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Section (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-xl text-gray-900 dark:text-white tracking-tight">
                SocietyFlow
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6">
              Smart society management simplified. We help residential complexes automate bills, track expenses, and resolve complaints effortlessly.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> support@societyflow.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 98765 43210
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Get the App</h3>
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

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} SocietyFlow. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️ for smart communities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;