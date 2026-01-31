
import React, { useState } from 'react';

interface Props {
  onSubmit: (result: { name: string; roll: string; gpa: number }) => void;
}

const ResultForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', roll: '', gpa: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.roll || !formData.gpa) return;
    
    onSubmit({
      name: formData.name,
      roll: formData.roll,
      gpa: parseFloat(formData.gpa)
    });
    setFormData({ name: '', roll: '', gpa: '' });
  };

  return (
    <div className="card-glass rounded-3xl p-8 shadow-xl border border-slate-200/50 sticky top-24">
      <div className="mb-8">
        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">রেজাল্ট জমা দিন</h2>
        <p className="text-slate-500 text-sm">আপনার এসএসসি ফলাফল বোর্ড এ যুক্ত করুন</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">শিক্ষার্থীর নাম</label>
          <input 
            type="text" 
            placeholder="পুরো নাম লিখুন"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">রোল নম্বর</label>
            <input 
              type="text" 
              placeholder="704XXX"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
              value={formData.roll}
              onChange={e => setFormData({...formData, roll: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">জিপিএ</label>
            <input 
              type="number" 
              step="0.01" 
              placeholder="৫.০০"
              max="5"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-blue-600"
              value={formData.gpa}
              onChange={e => setFormData({...formData, gpa: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2 mt-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          যুক্ত করুন
        </button>
      </form>

      <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
        <p className="text-xs text-blue-600 font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
          সঠিক তথ্য দিন, এটি সবার জন্য উন্মুক্ত।
        </p>
      </div>
    </div>
  );
};

export default ResultForm;
