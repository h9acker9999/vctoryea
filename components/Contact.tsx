
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative border border-slate-800">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">যোগাযোগ</span>
          <h2 className="text-4xl md:text-6xl font-black mt-8 mb-8 leading-[1.1]">যেকোনো প্রয়োজনে <br/> <span className="text-red-500">আমরা</span> আছি পাশে</h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-md">
            ভর্তি সংক্রান্ত তথ্য, রেজাল্ট অথবা অন্য যেকোনো জিজ্ঞাসায় আমাদের সাথে যোগাযোগ করুন সরাসরি।
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ফোন করুন</p>
                <p className="text-2xl font-black group-hover:text-blue-400 transition-colors">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-red-600/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">অবস্থান</p>
                <p className="text-2xl font-black group-hover:text-red-400 transition-colors">কুমিল্লা সদর, বাংলাদেশ</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl text-slate-900 relative border-8 border-slate-800">
          <h3 className="text-3xl font-black mb-10">মেসেজ পাঠান</h3>
          
          {isSubmitted && (
            <div className="absolute inset-x-8 top-28 z-20 animate-fade-in-up">
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-6 rounded-[2rem] flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">✓</div>
                <div>
                  <p className="font-black text-lg">ধন্যবাদ!</p>
                  <p className="text-sm font-bold opacity-80">আপনার মেসেজটি সফলভাবে পৌঁছেছে।</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${isSubmitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">আপনার নাম</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 font-bold transition-all" 
                placeholder="পুরো নাম" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">ফোন নম্বর</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 font-bold transition-all" 
                placeholder="01XXXXXXXXX" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">বার্তা</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 font-bold transition-all resize-none" 
                placeholder="আপনার জিজ্ঞাসা এখানে লিখুন..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-blue-600 transition-all active:scale-95 mt-4"
            >
              বার্তা পাঠান
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
