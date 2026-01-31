
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-44 pb-72 bg-[#020617] text-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 animate-fade-in-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          অ্যাডমিশন ওপেন ২০২৫
        </div>

        <h1 className="text-5xl md:text-[120px] font-black mb-12 leading-[0.85] tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          ভিক্টোরিয়া <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-red-500 pb-2">ইন্টারন্যাশনাল</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 font-bold leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          একটি আধুনিক ও স্মার্ট শিক্ষা ব্যবস্থার মাধ্যমে আগামীর দক্ষ নেতৃত্ব গড়ে তোলাই আমাদের মূল লক্ষ্য।
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#results" className="group px-14 py-5 bg-[#e32e26] hover:bg-red-500 text-white rounded-2xl font-black text-xl transition-all shadow-2xl shadow-red-600/30 hover:-translate-y-2 active:scale-95 flex items-center gap-4">
            রেজাল্ট পোর্টাল
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="px-14 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-xl transition-all border border-white/10 shadow-2xl hover:-translate-y-2 active:scale-95">
            ভর্তি সংক্রান্ত
          </a>
        </div>
      </div>

      {/* Stats Overlay: Software Style */}
      <div className="absolute bottom-16 left-0 w-full px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-0 py-10 bg-[#1e293b]/60 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-black text-[#e32e26]">১০০%</span>
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mt-3">পাশের হার</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10">
            <span className="text-4xl md:text-6xl font-black text-blue-500">২৫+</span>
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mt-3">দক্ষ শিক্ষক</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-black text-slate-100">৫০০+</span>
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mt-3">শিক্ষার্থী</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
