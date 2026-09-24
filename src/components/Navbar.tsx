import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X, Shield, Activity, Database, ExternalLink, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80' 
        : 'py-3.5 sm:py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100'
    } text-slate-900`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo with adequate right spacing and no-shrink */}
          <Link to="/" className="flex items-center shrink-0 py-1 mr-2 sm:mr-4 lg:mr-6 group">
            <img 
              src="/bios_logo_clean.png" 
              alt="BIOS Medical - Restore Life" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 sm:gap-8 text-base lg:text-lg font-normal text-slate-800">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => `transition-colors py-1 ${
                isActive ? 'text-[#0284c7] font-medium' : 'hover:text-[#0284c7]'
              }`}
            >
              Home
            </NavLink>

            <a 
              href="/#hipbeacon" 
              onClick={() => handleNavClick('hipbeacon')}
              className="hover:text-[#0284c7] transition-colors py-1 cursor-pointer"
            >
              HIPbeacon
            </a>

            <a 
              href="/#hip-fracture" 
              onClick={() => handleNavClick('hip-fracture')}
              className="hover:text-[#0284c7] transition-colors py-1 cursor-pointer"
            >
              Hip Fracture
            </a>

            <NavLink 
              to="/about" 
              className={({ isActive }) => `transition-colors py-1 ${
                isActive ? 'text-[#0284c7] font-medium' : 'hover:text-[#0284c7]'
              }`}
            >
              About
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => `transition-colors py-1 ${
                isActive ? 'text-[#0284c7] font-medium' : 'hover:text-[#0284c7]'
              }`}
            >
              Contact
            </NavLink>

            <span className="text-slate-300 font-light select-none">|</span>

            <a
              href="https://bios.mdeg.cloud/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0284c7] transition-colors py-1 cursor-pointer text-slate-800 font-normal"
            >
              BIOS-Cloud
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://bios.mdeg.cloud/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold rounded-full text-slate-700 border border-slate-200 bg-white"
            >
              BIOS-Cloud
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-bold text-slate-900 hover:bg-slate-50"
          >
            Home
          </Link>
          <a
            href="/#hipbeacon"
            onClick={() => handleNavClick('hipbeacon')}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50"
          >
            HIPbeacon
          </a>
          <a
            href="/#hip-fracture"
            onClick={() => handleNavClick('hip-fracture')}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50"
          >
            Hip Fracture
          </a>
          <a
            href="/#mobility"
            onClick={() => handleNavClick('mobility')}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50"
          >
            Mobility
          </a>
          <a
            href="/#mobility-data"
            onClick={() => handleNavClick('mobility-data')}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50"
          >
            Mobility Data
          </a>
          <Link
            to="/evidence"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50"
          >
            Evidence
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://bios.mdeg.cloud/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-bold rounded-xl text-slate-700 border border-slate-200 bg-slate-50"
            >
              BIOS-Cloud Patient Ingest
            </a>
            <a
              href="/#hipbeacon"
              onClick={() => handleNavClick('hipbeacon')}
              className="w-full py-3 text-center text-sm font-bold rounded-xl bg-[#0b3856] text-white"
            >
              Experience the HIPbeacon
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
