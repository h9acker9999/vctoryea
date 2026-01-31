
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import NoticeBoard from './components/NoticeBoard';
import ResultBoard from './components/ResultBoard';
import ResultForm from './components/ResultForm';
import TeachersSection from './components/TeachersSection';
import DeveloperSection from './components/DeveloperSection';
import Contact from './components/Contact';
import BottomNav from './components/BottomNav';
import { INITIAL_RESULTS, CREDITS } from './constants';
import { StudentResult } from './types';

const App: React.FC = () => {
  const [results, setResults] = useState<StudentResult[]>(INITIAL_RESULTS);

  const handleAddResult = (newResult: Omit<StudentResult, 'id' | 'grade'>) => {
    const grade = newResult.gpa >= 5.0 ? 'A+' : newResult.gpa >= 4.0 ? 'A' : 'B';
    const resultWithMeta: StudentResult = {
      ...newResult,
      id: Math.random().toString(36).substr(2, 9),
      grade
    };
    setResults(prev => [resultWithMeta, ...prev].sort((a, b) => b.gpa - a.gpa));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-red-100 selection:text-red-700 pb-20 md:pb-0">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Notice Board Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-30">
          <NoticeBoard />
        </div>

        {/* Features / Statistics Section */}
        <div className="mt-12">
          <Features />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
          {/* Results System Section */}
          <div id="results" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <ResultForm onSubmit={handleAddResult} />
              </div>
            </div>
            <div className="lg:col-span-8">
              <ResultBoard results={results} />
            </div>
          </div>

          {/* Academic Staff Section */}
          <div id="teachers">
            <TeachersSection />
          </div>

          {/* Contact & Support Section */}
          <div id="contact">
            <Contact />
          </div>

          {/* Technical & Administration Credits */}
          <div id="developers">
            <DeveloperSection />
            
            {/* Simple Credit Section as requested */}
            <div className="mt-20 pt-16 border-t border-slate-200 text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
                <div className="group">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Created By</p>
                  <h4 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">Developer Ali Shah</h4>
                </div>
                <div className="hidden md:block w-px h-12 bg-slate-200"></div>
                <div className="group">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Supervised By</p>
                  <h4 className="text-3xl font-black text-slate-900 group-hover:text-red-600 transition-colors">Project Director {CREDITS.projectDirector}</h4>
                </div>
              </div>
              <div className="mt-12 flex justify-center items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Innovation Powered by Victoria</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center font-black text-3xl shadow-2xl shadow-red-500/20">V</div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight">Victoria</h2>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">International College</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                উন্নত শিক্ষার অঙ্গীকার এবং আধুনিক মননশীলতার সমন্বয়ে আমরা গড়ে তুলছি আগামীর দক্ষ নেতৃত্ব।
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-black mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
                ম্যনু
              </h3>
              <ul className="grid grid-cols-1 gap-5 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <li><a href="#results" className="hover:text-red-400 transition-colors">ফলাফল বোর্ড</a></li>
                <li><a href="#teachers" className="hover:text-red-400 transition-colors">শিক্ষক পরিচিতি</a></li>
                <li><a href="#contact" className="hover:text-red-400 transition-colors">যোগাযোগ</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">অনলাইন ভর্তি</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-black mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                সামাজিক প্ল্যাটফর্ম
              </h3>
              <div className="flex gap-5">
                {[
                  { icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', color: 'hover:bg-blue-600' },
                  { icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z M9.75 15.02 15.5 12 9.75 8.98', color: 'hover:bg-red-600' },
                  { icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z', color: 'hover:bg-blue-500' }
                ].map((item, i) => (
                  <a key={i} href="#" className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center transition-all text-white border border-white/5 ${item.color}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
            <p>© ২০২৬ ভিক্টোরিয়া ইন্টারন্যাশনাল কলেজ। ডিজাইন ও উন্নয়ন: আলি শাহ।</p>
            <div className="flex gap-10">
              <span className="cursor-pointer hover:text-white transition-colors">প্রাইভেসি</span>
              <span className="cursor-pointer hover:text-white transition-colors">শর্তাবলী</span>
            </div>
          </div>
        </div>
      </footer>
      
      <BottomNav />
    </div>
  );
};

export default App;
