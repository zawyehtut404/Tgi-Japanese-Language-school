import React, { Suspense, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // useLocation ကို import လုပ်ပါ
import { AnimatePresence } from 'framer-motion'; // AnimatePresence ကို import လုပ်ပါ

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingChatButton from './components/FloatingChatButton';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import BackToTopButton from './components/BackToTopButton';
import PageTransition from './components/PageTransition'; // <-- Component အသစ်ကို import လုပ်ပါ
import { SpeedInsights } from '@vercel/speed-insights/react';

// Page Components (Lazy Loaded)
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const TourDetailPage = React.lazy(() => import('./pages/TourDetailPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Main App component needs to be separate to use useLocation hook
function AppContent() {
  const location = useLocation();
  const mainRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop mainRef={mainRef} />
      <Sidebar isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      
      <div className="flex flex-col min-h-screen">
        <Navbar openMenu={() => setIsMenuOpen(true)} />
        
        <main ref={mainRef} id="main-content" className="flex-grow overflow-y-auto">
          <Suspense fallback={<div className="w-full h-screen flex justify-center items-center"><Loading /></div>}>
            {/* Routes တွေကို AnimatePresence နဲ့ အုပ်ပါ */}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
                <Route path="/services/:slug" element={<PageTransition><TourDetailPage /></PageTransition>} />
                <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        
        <Footer />
      </div>
      
      <BackToTopButton />
      <FloatingChatButton />
    </>
  );
}

// Main App component wraps everything in BrowserRouter
function App() {
  return (
    <BrowserRouter>
    <div></div><SpeedInsights />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;