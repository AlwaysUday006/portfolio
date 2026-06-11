import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function InitialLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // 2-second delay to ensure Spline and layout have time to initialize and render behind the scenes
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07070a]"
      exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-2 border-white/5 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-cyan-400 rounded-full animate-[spin_1.5s_linear_infinite]" />
          <div className="absolute inset-0 border-2 border-transparent border-b-blue-500 rounded-full animate-[spin_2s_linear_infinite_reverse]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          </div>
        </div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="text-white font-serif tracking-[0.4em] uppercase text-xs sm:text-sm font-medium"
        >
          AlwaysUday
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#07070a] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Initial Launch Screen */}
      <AnimatePresence>
        {!isLoaded && <InitialLoader onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {/* Main App Content - Fades in smoothly once the loader is done */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {/* Floating Header */}
        <Navbar />

        {/* Landing Sections */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* High-end Footer */}
        <Footer />
      </motion.div>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glassmorphism text-slate-300 hover:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl border border-white/10 hover:border-cyan-500/30 cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
