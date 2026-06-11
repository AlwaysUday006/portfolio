import { motion } from 'framer-motion';
import { User, Terminal, GraduationCap, FolderCode, Target } from 'lucide-react';
import heroImg from '../assets/hero.png';

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    title: 'Focus Area',
    description: 'Python, C, Streamlit, Algorithms, Data Analysis'
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
    title: 'Education',
    description: 'B.Tech Data Science (2nd Year)'
  },
  {
    icon: <FolderCode className="w-5 h-5 text-cyan-400" />,
    title: 'Projects Built',
    description: 'Completed 8+ practical programs & tools'
  }
];

export default function About() {
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative border-t border-white/5 bg-[#08080c]">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={scrollRevealVariants}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <User className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none">
            Building Meaningful <span className="italic text-gradient">Digital Experiences</span>
          </h2>
        </motion.div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Text descriptions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollRevealVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-normal">
              I'm <strong className="text-white font-semibold">Uday Deore</strong>, a B.Tech Data Science student currently in my second year. I have a strong interest in Python programming, learning Java, and AI-driven workflows. I enjoy learning by doing—building practical utilities like cryptographic tools, expense trackers, and interactive algorithm visualizers.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
              My core objective is to master Python ecosystem capabilities, exploring data science, machine learning algorithms, and system automation. I believe in continuous optimization, open-source principles, and showcasing projects to exchange knowledge with the developer community.
            </p>

            {/* Target Area Subhead */}
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Target className="w-5 h-5 text-cyan-400" />
                <h3 className="font-serif text-2xl">Core Focus & Education</h3>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="glassmorphism p-5 rounded-2xl text-left hover:border-cyan-500/20 hover:bg-white/5 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Secondary Profile Image Container */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollRevealVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Blur Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-70 group-hover:opacity-100 blur transition-all duration-500" />
              
              {/* Image Border */}
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 bg-[#0e0e14]">
                <img
                  src="https://stalwart-baklava-8ed433.netlify.app/images/img.jpg"
                  alt="Uday Deore working"
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = heroImg;
                  }}
                />
                <div className="absolute inset-0 bg-cyan-950/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
