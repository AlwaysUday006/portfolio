import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, ExternalLink, X, ShieldCheck } from 'lucide-react';
import GlareCard from './reactbits/GlareCard';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    title: 'C++ Bootcamp',
    issuer: 'LetsUpgrade (NSDC)',
    date: 'April 4, 2025',
    description: 'Intensive Bootcamp covering object-oriented programming concepts in C++, data structures, and runtime efficiency analyses.',
    imageUrl: 'https://ik.imagekit.io/alwaysuday/C++%20Bootcamp%20by%20LU_page-0001.jpg',
    credentialUrl: 'https://drive.google.com/file/d/161vkOHNOyHoT42yaZ73wea5IFWrpoBSt/view?usp=sharing'
  },
  {
    title: 'Generative AI Mastermind',
    issuer: 'Outskill (GrowthSchool)',
    date: 'April 2025',
    description: 'Mastery in building custom AI-powered utilities, crafting advanced system prompts, and optimizing LLM agents for code generation.',
    imageUrl: 'https://ik.imagekit.io/alwaysuday/Generative%20AI%20Mastermind%20by%20Outskill_page-0001.jpg',
    credentialUrl: 'https://drive.google.com/file/d/1r0iUJ7tCABNZ6khRPUL8iNqqOUgqpKmp/view?usp=sharing'
  },
  {
    title: 'Programming in C',
    issuer: 'Infosys | Springboard',
    date: 'June 12, 2025',
    description: 'Comprehensive certification covering core C programming syntax, memory management, pointers, and computational algorithms.',
    imageUrl: 'https://ik.imagekit.io/alwaysuday/Programming_in_C_Uday_Deore_page-0001.jpg?updatedAt=1760869951203',
    credentialUrl: 'https://drive.google.com/file/d/1JdJEtRkMWYGpx726pPpZYuC95dFfJG4y/view?usp=sharing'
  }
  ,
  {
    title: 'Scientific Computing with Python',
    issuer: 'FreeCodeCamp',
    date: 'January 7, 2026',
    description: 'Scientific Computing with Python covering data structures, loops, and algorithm scripting.',
    imageUrl: 'https://ik.imagekit.io/ixgqjgcut/Scientific%20Computing%20with%20Python.png',
    credentialUrl: 'https://drive.google.com/file/d/1WkXAZIa75Sg6Qz_n1Ua_Jz49JmnU0f4x/view?usp=sharing'
  }
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section id="certs" className="py-24 px-6 lg:px-12 relative border-t border-white/5 bg-[#08080c]">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">Certifications</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none mb-4">
            My <span className="italic text-gradient">Credentials</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed">
            Professional milestones validating programming proficiencies, algorithm frameworks, and artificial intelligence design methodologies.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <GlareCard className="glassmorphism rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-500 group shadow-xl bg-[#0a0a0f]">
                {/* Image Frame */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900 border-b border-white/5">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Visual Eye Hover Overlay */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(cert.imageUrl); }}
                    className="absolute inset-0 bg-[#07070a]/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
                    aria-label={`Enlarge ${cert.title} image`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 pointer-events-auto">
                      <Eye className="w-5 h-5" />
                    </div>
                  </button>
                </div>

                {/* Text Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 mb-4 font-light">
                      {cert.date}
                    </p>
                    
                    <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {/* Verification Link */}
                  <div className="mt-auto">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-4 rounded-xl text-xs text-slate-300 hover:text-white border border-white/10 hover:border-white/30 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 transition-all duration-300 w-full font-medium cursor-pointer relative z-20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verify Credential
                    </a>
                  </div>
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 border border-white/15 focus-visible:outline-2 focus-visible:outline-cyan-500 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged Certificate Credential"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
