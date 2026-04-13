import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
// import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Naya Privacy Policy yahan import hua hai

// Placeholder un pages ke liye jo abhi sach mein nahi bane hain (jaise Demo, Terms)
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0B0F19] pt-20">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Coming Soon</span>
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-4">This page is currently under construction.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white font-sans selection:bg-indigo-500/30">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow w-full">
          <Routes>
            {/* Primary Live Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/login" element={<Login />} /> */}
            
            {/* Newly Added Privacy Policy Route */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
            {/* Placeholder Routes (Naye Footer ke hisaab se) */}
            <Route path="/demo" element={<Placeholder title="Book a Demo" />} />
            <Route path="/terms" element={<Placeholder title="Terms of Service" />} />
            <Route path="/refund" element={<Placeholder title="Refund Policy" />} />
            
            {/* 404 Catch-All Page */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center pt-20 bg-gray-50 dark:bg-[#0B0F19]">
                <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">404</h1>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Page not found</p>
                <a href="/" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:scale-105">
                  Go back home
                </a>
              </div>
            } />
          </Routes>
        </main>

        {/* Premium Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;