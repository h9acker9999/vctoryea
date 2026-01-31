
import React from 'react';
import { NOTICES } from '../constants';

const NoticeBoard: React.FC = () => {
  const getTagColor = (type: string) => {
    switch (type) {
      case 'Result': return 'bg-blue-100 text-blue-600';
      case 'Exam': return 'bg-blue-100 text-blue-600';
      case 'Holiday': return 'bg-blue-100 text-blue-600';
      case 'Urgent': return 'bg-red-100 text-red-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getDotColor = (type: string) => {
    switch (type) {
      case 'Urgent': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
      {/* Sidebar: Red Section */}
      <div className="bg-[#e32e26] text-white p-10 md:w-80 flex flex-col justify-center items-center text-center relative overflow-hidden shrink-0">
        {/* Decorative circle */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-black/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-90">Latest Updates</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">নোটিশ বোর্ড</h3>
          <p className="text-white/80 text-xs font-medium leading-relaxed max-w-[200px] mx-auto">
            কলেজের সর্বশেষ গুরুত্বপূর্ণ ঘোষণা ও রুটিনসমূহ।
          </p>
        </div>
      </div>
      
      {/* Content Area: Notice Grid */}
      <div className="flex-grow p-6 md:p-12 flex flex-col justify-between bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {NOTICES.map((notice) => (
            <div 
              key={notice.id} 
              className="flex items-center justify-between p-5 rounded-3xl bg-[#f8fafc] border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${getDotColor(notice.type)}`}></div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    {notice.date}
                  </span>
                  <h4 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                    {notice.title}
                  </h4>
                </div>
              </div>
              <span className={`text-[8px] font-black uppercase px-3 py-1 rounded-full shrink-0 ml-4 ${getTagColor(notice.type)}`}>
                {notice.type}
              </span>
            </div>
          ))}
        </div>
        
        {/* Bottom Button */}
        <div className="mt-10 flex justify-end">
          <button className="px-8 py-3.5 bg-[#141b2d] text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl active:scale-95 group">
            সবগুলো নোটিশ দেখুন
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" height="18" 
              viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
