import type { MouseEvent } from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050508] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Name */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="font-serif text-lg text-white tracking-widest hover:opacity-80 transition-opacity font-semibold"
        >
          AlwaysUday
        </a>

        {/* Footer Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, 'home')}
            className="hover:text-white transition-colors duration-250"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="hover:text-white transition-colors duration-250"
          >
            About
          </a>
          <a
            href="#project"
            onClick={(e) => handleScrollTo(e, 'project')}
            className="hover:text-white transition-colors duration-250"
          >
            Projects
          </a>
          <a
            href="#certs"
            onClick={(e) => handleScrollTo(e, 'certs')}
            className="hover:text-white transition-colors duration-250"
          >
            Certifications
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="hover:text-white transition-colors duration-250"
          >
            Contact
          </a>
        </nav>

        {/* Right side social links + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AlwaysUday006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/uday-deore-5949bb32a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:udaydeore006@gmail.com"
              className="text-slate-500 hover:text-white transition-colors duration-300"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-[10px] text-slate-600 font-light tracking-wide">
            © {currentYear} Uday Deore. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
