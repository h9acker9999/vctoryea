
import React from 'react';
import { DEVELOPERS } from '../constants';

const DeveloperSection: React.FC = () => {
  return (
    <div className="py-12 border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            ডেভেলপার প্যানেল
          </h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            ভিক্টোরিয়া ইন্টারন্যাশনাল কলেজের ডিজিটাল প্ল্যাটফর্মটি তৈরি করা হয়েছে শিক্ষার্থীদের সহজ ও সুন্দর অভিজ্ঞতা প্রদানের জন্য। আমাদের টিম সর্বদা আপনার সাথে আছে।
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 relative z-10">
          {DEVELOPERS.map((dev, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform opacity-20"></div>
                <img 
                  src={dev.image} 
                  alt={dev.name} 
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-700 relative z-10 group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-tight">{dev.name}</h4>
                <p className="text-blue-400 text-sm font-bold uppercase tracking-wider">{dev.role}</p>
                {dev.link && (
                  <a 
                    href={dev.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1 mt-1"
                  >
                    Visit Website <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
