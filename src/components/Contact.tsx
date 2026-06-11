import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, Check, Copy } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Contact() {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('udaydeore006@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('message', formState.message);
    formData.append('_replyto', 'udaydeore006@gmail.com');
    formData.append('_subject', 'Portfolio Contact Form Submission');

    try {
      const response = await fetch('https://formspree.io/f/xojaegno', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative border-t border-white/5 bg-[#07070a]">
      {/* Subtle backdrop mesh */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-none mb-4">
            Get in <span className="italic text-gradient">Touch</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed">
            Have an interesting project proposal or questions about my Python builds? Drop a message below!
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="lg:col-span-5 flex flex-col justify-between text-left"
          >
            <div>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
                I'm always open to discuss internship opportunities, custom scripts, algorithmic designs, or system integrations. Let's build something exceptional!
              </p>

              {/* Contact Information Blocks */}
              <div className="space-y-4 mb-8">
                
                {/* Email Block with Copy utility */}
                <div className="glassmorphism p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Email Address</p>
                      <p className="text-sm font-semibold text-white">udaydeore006@gmail.com</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-slate-400 hover:text-white transition-all duration-300 relative cursor-pointer"
                    aria-label="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400 animate-[scale-up_0.2s_ease]" /> : <Copy className="w-4 h-4" />}
                    
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: -28, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          className="absolute -top-1 right-0 bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Location Block */}
                <div className="glassmorphism p-4 rounded-xl flex items-center border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Location</p>
                      <p className="text-sm font-semibold text-white">Maharashtra, India</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Accounts Row */}
            <div className="border-t border-white/5 pt-6">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Or connect via socials:</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/AlwaysUday006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 hover:border-white/30 text-xs text-slate-300 hover:text-white font-medium bg-white/5 hover:bg-white/10 transition-all duration-350"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/uday-deore-5949bb32a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 hover:border-white/30 text-xs text-slate-300 hover:text-white font-medium bg-white/5 hover:bg-white/10 transition-all duration-355"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="lg:col-span-7"
          >
            <div className="glassmorphism p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl shadow-black/30">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-500 resize-none"
                  />
                </div>

                {/* Status Indicator Messages */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs text-left"
                    >
                      Thank you! Your message has been submitted successfully. I will get back to you shortly.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-xs text-left"
                    >
                      There was a network transmission error. Please email me directly at udaydeore006@gmail.com.
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-premium w-full py-3.5 bg-white disabled:bg-slate-350 text-black font-semibold rounded-xl flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer hover:bg-slate-100 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
