import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderCode, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

const initialProjects: ProjectItem[] = [
  {
    title: '🔐 Vigenère Cipher Tool',
    description: 'A Python-based cryptographic tool utilizing the Vigenère cipher for interactive text encoding and decoding.',
    tags: ['Python', 'Streamlit', 'Cryptography'],
    githubUrl: 'https://github.com/AlwaysUday006/cipher_project',
    demoUrl: 'https://alwaysuday006-cipher-project-app-uqhd8o.streamlit.app/',
    imageUrl: '/projects/vigenere_cipher.png'
  },
  {
    title: '💳 Luhn Validator',
    description: 'An interactive validator script that implements the Luhn algorithm to check credit card and identification numbers.',
    tags: ['Python', 'Streamlit', 'Validation'],
    githubUrl: 'https://github.com/AlwaysUday006/luhn_validator_project',
    demoUrl: 'https://alwaysuday006-luhn-algorithm-app-056.streamlit.app/',
    imageUrl: '/projects/luhn_validator.png'
  },
  {
    title: '💰 Expense Tracker',
    description: 'A modern tracking application enabling users to log, tag, and analyze daily expenses via an interactive dashboard.',
    tags: ['Python', 'Streamlit', 'Data Logs'],
    githubUrl: 'https://github.com/AlwaysUday006/expense_tracker',
    demoUrl: 'https://alwaysuday006-expense-tracker-app-hxkusf.streamlit.app/',
    imageUrl: '/projects/expense_tracker.png'
  },
  {
    title: '📝 Case Converter Utility',
    description: 'A utility that parses and converts PascalCase or camelCase formatted strings into clean PEP 8 compliant snake_case.',
    tags: ['Python', 'Streamlit', 'Strings'],
    githubUrl: 'https://github.com/AlwaysUday006/PascalCase-to-snake_case-Converter.git',
    demoUrl: 'https://alwaysuday006-pascalcase-to-snake-case-converter-app-zyccqn.streamlit.app/',
    imageUrl: '/projects/case_converter.png'
  },
  {
    title: '🧮 Square Root Finder',
    description: 'An educational algorithm visualizer calculating numerical square roots to custom decimal positions using the Bisection Method.',
    tags: ['Python', 'Streamlit', 'Algorithms'],
    githubUrl: 'https://github.com/AlwaysUday006/sqrt_by_bisection.git',
    demoUrl: 'https://alwaysuday006-sqrt-by-bisection-app-o4nyqa.streamlit.app/',
    imageUrl: '/projects/square_root_finder.png'
  },
  {
    title: '🧮 Arithmetic Formatter',
    description: 'Neatly reformats multi-line math problems side-by-side with vertical alignment structures and togglable answers.',
    tags: ['Python', 'Streamlit', 'Mathematics'],
    githubUrl: 'https://github.com/AlwaysUday006/arithmetic_formatter.git',
    demoUrl: 'https://alwaysuday006-arithmetic-formatter-app-y3tbrj.streamlit.app/',
    imageUrl: '/projects/arithmetic_formatter.png'
  },
  {
    title: '🔐 Password Generator',
    description: 'A randomized key utility that generates customizable, cryptographically strong passwords based on rules.',
    tags: ['Python', 'Streamlit', 'Security'],
    githubUrl: 'https://github.com/AlwaysUday006/password_generator.git',
    demoUrl: 'https://alwaysuday006-password-generator-app-uj6mmb.streamlit.app/',
    imageUrl: '/projects/password_generator.png'
  },
  {
    title: '🧭 Dijkstra Path Finder',
    description: 'An interactive graphs visualizer that builds node path flows and calculates shortest distance solutions using Dijkstra\'s algorithm.',
    tags: ['Python', 'Streamlit', 'Graph Theory', 'Dijkstra'],
    githubUrl: 'https://github.com/AlwaysUday006/shortest_path_algorithm.git',
    demoUrl: 'https://alwaysuday006-shortest-path-algorithm-app-xf0tpb.streamlit.app/',
    imageUrl: '/projects/dijkstra_path.png'
  }
];

export default function Projects() {
  const [cards, setCards] = useState(initialProjects);

  const moveToEnd = () => {
    setCards((prev) => {
      const newArr = [...prev];
      const topCard = newArr.shift();
      if (topCard) newArr.push(topCard);
      return newArr;
    });
  };

  return (
    <section id="project" className="py-24 px-6 lg:px-12 relative border-t border-white/5 bg-[#07070a] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Section Heading (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="flex items-center gap-2 mb-3">
            <FolderCode className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">Projects</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none mb-4">
            Featured <span className="italic text-gradient">Work</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed mb-6">
            A showcase of Python-based utilities, mathematics utilities, and interactive Streamlit applications demonstrating algorithmic problem solving.
          </p>
          <p className="text-xs text-cyan-400/80 font-medium tracking-widest uppercase animate-pulse mb-8 lg:mb-0">
            ← Drag top card to swap →
          </p>
        </motion.div>

        {/* Drag to Swap Card Stack (Right Column) */}
        <div className="relative w-full h-[540px] md:h-[580px] flex items-center justify-center perspective-[1000px]">
          <AnimatePresence>
            {cards.map((project, i) => {
              const isTop = i === 0;
              const originalIndex = initialProjects.findIndex(p => p.title === project.title);
              const hue = (originalIndex * 137.508) % 360;
              
              return (
                <motion.div
                  key={project.title}
                  className="absolute w-[340px] md:w-[400px] h-[500px] md:h-[540px] glassmorphism rounded-2xl overflow-hidden flex flex-col justify-between transition-colors shadow-xl border bg-[#0a0a0f] cursor-grab active:cursor-grabbing"
                  style={{ 
                    borderColor: `hsla(${hue}, 80%, 40%, 0.3)`,
                    zIndex: cards.length - i,
                  }}
                  initial={{ scale: 0.8, y: 100, opacity: 0 }}
                  animate={{
                    scale: 1 - i * 0.05,
                    y: i * 35,
                    opacity: 1 - i * 0.15,
                  }}
                  exit={{ y: -300, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -100 || info.offset.x > 100) {
                      moveToEnd();
                    }
                  }}
                  whileHover={isTop ? { y: -5 } : {}}
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/5 pointer-events-none">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between pointer-events-none">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-snug">{project.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded bg-white/5 text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed font-light mb-6 line-clamp-3">{project.description}</p>
                    </div>
                  </div>

                  {/* Verification Link */}
                  <div className="p-6 pt-0 mt-auto flex items-center gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-3 rounded-xl border border-white/10 hover:border-white/30 text-xs text-slate-300 hover:text-white font-medium flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 transition-all duration-300" onClick={(ev) => { if (!isTop) ev.preventDefault(); ev.stopPropagation(); }}>
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-3 rounded-xl text-xs text-black font-semibold bg-white hover:bg-slate-100 flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md shadow-white/5" onClick={(ev) => { if (!isTop) ev.preventDefault(); ev.stopPropagation(); }}>
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
