
import React from 'react';
import { TEACHERS } from '../constants';

const TeachersSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">আমাদের গর্ব</span>
        <h2 className="text-4xl font-black text-slate-900 mt-6 mb-4">দক্ষ শিক্ষকমণ্ডলী</h2>
        <p className="text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
          ভিক্টোরিয়া ইন্টারন্যাশনাল কলেজের শ্রেষ্ঠত্বের মূলে রয়েছেন আমাদের নিবেদিতপ্রাণ শিক্ষকবৃন্দ।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {TEACHERS.map((teacher) => (
          <div key={teacher.id} className="group relative bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-3 transition-all duration-500 overflow-hidden text-center">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative mb-8 mx-auto inline-block">
              <div className="w-28 h-28 rounded-[2rem] overflow-hidden border-4 border-slate-50 group-hover:border-blue-100 group-hover:rotate-6 transition-all duration-500 mx-auto shadow-xl">
                <img 
                  src={teacher.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${teacher.id}&gender=${teacher.gender === 'male' ? 'male' : 'female'}&backgroundColor=b6e3f4,c0aede,d1d4f9`} 
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 z-10 ${teacher.gender === 'male' ? 'bg-blue-600' : 'bg-pink-500'}`}>
                 {teacher.gender === 'male' ? '👨‍🏫' : '👩‍🏫'}
              </div>
            </div>
            
            <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{teacher.name}</h3>
            <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.15em] mb-4 bg-blue-50 inline-block px-3 py-1 rounded-lg">{teacher.subject}</p>
            
            <div className="pt-4 border-t border-slate-50 flex items-center justify-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{teacher.grade} শ্রেণী</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersSection;
