
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onAdmissionsClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdmissionsClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Student Life', href: '#student-life' },
    { label: 'News & Events', href: '#news-events' },
    { label: 'Videos', href: '#videos' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center rotate-12">
            <Rocket className="w-6 h-6 text-white -rotate-12" />
          </div>
          <span className="text-2xl font-playfair font-bold tracking-tight">AIT <span className="text-blue-400">& AIPS</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <div 
              key={item.label} 
              className="relative py-2"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => {
                setActiveMenu(null);
                setActiveSubMenu(null);
              }}
            >
              <a 
                href={item.href}
                className={`flex items-center gap-1 text-sm font-space font-medium transition-colors uppercase tracking-widest ${
                  activeMenu === item.label ? 'text-white' : 'text-slate-400'
                }`}
              >
                {item.label}
                {item.subItems && <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />}
              </a>

              <AnimatePresence>
                {activeMenu === item.label && item.subItems && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 z-[9999]"
                  >
                    <div className="w-72 bg-[#2D3284] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                      {item.subItems.map(sub => (
                        <div 
                          key={sub.label} 
                          className="relative"
                          onMouseEnter={() => setActiveSubMenu(sub.label)}
                          onMouseLeave={() => setActiveSubMenu(null)}
                        >
                          <a
                            href={sub.href}
                            className="flex items-center justify-between px-6 py-4 text-[13px] font-space font-medium text-white hover:bg-white/10 transition-all border-b border-white/5 last:border-0"
                          >
                            {sub.label}
                            {sub.hasSub && <ChevronRight className="w-4 h-4 opacity-50" />}
                          </a>
                          
                          <AnimatePresence>
                            {activeSubMenu === sub.label && sub.nestedItems && (
                              <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full top-0 pl-1 z-[10000]"
                              >
                                <div className="w-64 bg-[#2D3284] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                                  {sub.nestedItems.map(nested => (
                                    <a
                                      key={nested.label}
                                      href={nested.href}
                                      className="flex items-center px-6 py-4 text-[13px] font-space font-medium text-white hover:bg-white/10 transition-all border-b border-white/5 last:border-0"
                                    >
                                      {nested.label}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button 
            onClick={onContactClick}
            className="text-sm font-space font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
          >
            Contact Us
          </button>
          <button 
            onClick={onAdmissionsClick}
            className="px-6 py-2.5 bg-white text-slate-950 rounded-full font-space font-bold text-sm hover:bg-blue-500 hover:text-white transition-all"
          >
            Admissions Open
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-8 md:hidden animate-in slide-in-from-top duration-300 shadow-2xl max-h-[80vh] overflow-y-auto">
           <nav className="flex flex-col gap-6">
            {navItems.map(item => (
              <div key={item.label} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <a 
                    href={item.href}
                    className="text-xl font-space font-bold text-slate-200 uppercase tracking-tighter"
                    onClick={() => !item.subItems && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <button className="p-2 text-slate-400">
                      <ChevronDown className="w-6 h-6" />
                    </button>
                  )}
                </div>
                
                {item.subItems && (
                  <div className="flex flex-col gap-2 pl-4 py-2 bg-[#2D3284]/50 rounded-lg border-l-2 border-blue-500">
                    {item.subItems.map(sub => (
                      <div key={sub.label} className="flex flex-col gap-2">
                        <a
                          href={sub.href}
                          className="px-4 py-3 text-sm font-space font-bold text-slate-200 uppercase tracking-widest hover:text-white flex items-center justify-between"
                          onClick={() => !sub.nestedItems && setMobileMenuOpen(false)}
                        >
                          {sub.label}
                          {sub.hasSub && <ChevronRight className="w-4 h-4 opacity-50" />}
                        </a>
                        
                        {sub.nestedItems && (
                          <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
                            {sub.nestedItems.map(nested => (
                              <a
                                key={nested.label}
                                href={nested.href}
                                className="px-4 py-2 text-xs font-space font-bold text-slate-400 uppercase tracking-widest hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {nested.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="text-xl font-space font-bold text-slate-200 uppercase tracking-tighter text-left"
            >
              Contact Us
            </button>
            <button 
              onClick={() => {
                onAdmissionsClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-space font-bold uppercase tracking-widest"
            >
              Join the Elite
            </button>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
