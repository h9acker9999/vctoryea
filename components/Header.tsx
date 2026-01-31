
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl transition-all shadow-xl group-hover:rotate-12 ${scrolled ? 'bg-red-600 text-white' : 'bg-white text-red-600'}`}>
              V
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-black leading-none tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>Victoria</h1>
              <p className={`text-[9px] font-black uppercase tracking-[0.3em] mt-1.5 ${scrolled ? 'text-blue-600' : 'text-red-400'}`}>International College</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            {['Home', 'Results', 'Teachers', 'Contact'].map((item) => (
              <a 
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-red-500 relative group/nav ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {item === 'Home' ? 'হোম' : item === 'Results' ? 'রেজাল্ট' : item === 'Teachers' ? 'শিক্ষক' : 'যোগাযোগ'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover/nav:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <button className={`px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl active:scale-95 ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-slate-900 hover:bg-slate-100'}`}>
               ভর্তি চলছে
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
