import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, FolderKanban, MapPin, Briefcase } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import Spline from '@splinetool/react-spline';
import Lightfall from './reactbits/Lightfall';

const words = ["Python Developer", "AI Project Builder", "Algorithm Enthusiast", "B.Tech Student"];

function TypewriterEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timer: number;
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 30 : 60;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (isDeleting) {
          setWordIndex(prev => (prev + 1) % words.length);
        }
      }
    };

    if (!isDeleting && charIndex === currentWord.length) {
      timer = window.setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      timer = window.setTimeout(() => setIsDeleting(false), 500);
    } else {
      timer = window.setTimeout(handleTyping, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pr-1">
      {displayedText}
      <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const splineWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!splineWrapperRef.current) return;
      const canvas = splineWrapperRef.current.querySelector('canvas');
      if (canvas && e.target !== canvas) {
        const clone = new PointerEvent(e.type, e);
        canvas.dispatchEvent(clone);
      }
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('pointermove', handlePointerMove);
      return () => section.removeEventListener('pointermove', handlePointerMove);
    }
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Motion container definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Lightfall
          colors={['#06b6d4', '#3b82f6', '#0ea5e9']}
          backgroundColor="#07070a"
          density={0.5}
          speed={0.3}
          mouseInteraction={false}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* 3D Spline Model (Increased Size, No Clipping) */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 pointer-events-none relative h-[350px] md:h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[850px] lg:h-[850px] max-w-none"
          >
            <div ref={splineWrapperRef} className="absolute inset-0 pointer-events-auto">
              <Spline
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Text Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left mt-12 lg:mt-0"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">B.Tech Student & Python Enthusiast</span>
          </motion.div>

          {/* Heading with Serif Title */}
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">Uday</span>
          </motion.h1>

          {/* Typing Terminal-style Line */}
          <motion.div variants={itemVariants} className="h-10 md:h-12 flex items-center mb-6">
            <span className="text-xl md:text-2xl lg:text-3xl font-mono tracking-tight font-medium">
              <TypewriterEffect />
            </span>
          </motion.div>

          {/* Intro Paragraph */}
          <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
            I focus on <strong className="text-white font-semibold">Python programming</strong> and <strong className="text-white font-semibold">AI-related projects</strong>, building functional applications that bridge mathematical logic and clean web UI.
          </motion.p>

          {/* Location & Status details */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400 font-medium mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Available for Collaborations</span>
            </div>
          </motion.div>

          {/* Action Callouts */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn-premium px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 text-sm shadow-xl shadow-white/5 cursor-pointer hover:bg-slate-100 pointer-events-auto"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
            <button
              onClick={() => handleScrollTo('project')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-full flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-lg cursor-pointer pointer-events-auto"
            >
              <FolderKanban className="w-4 h-4" />
              View Projects
            </button>
          </motion.div>

          {/* Follow Section */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 border-t border-white/5 pt-6 pointer-events-auto">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Follow me:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/AlwaysUday006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/uday-deore-5949bb32a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:udaydeore006@gmail.com"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
