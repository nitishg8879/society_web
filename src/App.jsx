import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
// 1️⃣ YAHAN NAYE PAGES IMPORT KIYE HAIN
import About from './pages/About';
import Contact from './pages/Contact';
// import Login from './pages/Login'; 
// import PrivacyPolicy from './pages/PrivacyPolicy'; // (Note: Agar tune ye file abhi nahi banayi hai, toh isko comment hi rehne dena warna error aayega)

// Placeholder un pages ke liye jo abhi sach mein nahi bane hain (jaise Demo)
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0B0F19] pt-20">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title} <span className="text-indigo-600">Coming Soon</span>
      </h1>
      <p className="text-gray-500 dark:text-gray-400">This page is under construction.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0B0F19] text-gray-900 dark:text-white font-sans selection:bg-indigo-500/30">
        
        <Navbar />

        <main className="flex-grow w-full">
          <Routes>
            {/* Primary Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* 2️⃣ YAHAN PLACEHOLDER HATA KAR ACTUAL PAGES DAAL DIYE */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/login" element={<Login />} /> */}
            
            {/* Ye abhi bhi Placeholder rahenge jab tak tu inki files nahi banata */}
            <Route path="/demo" element={<Placeholder title="Book a Demo" />} />
            <Route path="/privacy-policy" element={<Placeholder title="Privacy Policy" />} /> 
            {/* Jab PrivacyPolicy.jsx bana lega, toh upar line 16 ka comment hatana aur isko <Route path="/privacy-policy" element={<PrivacyPolicy />} /> kar dena */}
            
            {/* 404 Page */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center pt-20">
                <h1 className="text-6xl font-black text-indigo-600 mb-4">404</h1>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Page not found</p>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;