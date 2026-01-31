
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.4em] bg-red-50 px-6 py-2.5 rounded-full border border-red-100">Our Pride</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-10 leading-tight">আমাদের বিশেষত্বসমূহ</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-slate-50 border-2 border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-4 transition-all duration-500">
              <div className={`text-5xl mb-8 w-20 h-20 flex items-center justify-center rounded-3xl shadow-xl group-hover:scale-110 transition-transform bg-white border-2 ${f.color === 'red' ? 'border-red-50' : 'border-blue-50'}`}>
                {f.icon}
              </div>
              <h3 className={`text-2xl font-black mb-4 transition-colors ${f.color === 'red' ? 'group-hover:text-red-600' : 'group-hover:text-blue-600'}`}>{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">View Details</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${f.color === 'red' ? 'bg-red-500' : 'bg-blue-500'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
