
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { StudentResult } from '../types';

interface Props {
  results: StudentResult[];
}

const ResultBoard: React.FC<Props> = ({ results }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredResults = results.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.roll.includes(searchTerm)
  );

  const topThree = results.slice(0, 3);
  const chartData = results.slice(0, 8).map(r => ({
    name: r.name.split(' ')[0],
    gpa: r.gpa
  }));

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-black text-slate-900">মেরিট বোর্ড</h2>
          <p className="text-slate-500 font-medium">১০ম শ্রেণীর মেধা তালিকা - ২০২৫</p>
        </div>
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="নাম বা রোল দিয়ে খুঁজুন..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 font-medium text-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
      </div>

      {/* Podium Visualization */}
      {!searchTerm && (
        <div className="flex justify-center items-end gap-3 md:gap-10 mb-20 h-64 border-b border-slate-100 pb-2">
          {/* 2nd Place */}
          {topThree[1] && (
            <div className="flex flex-col items-center w-24 md:w-36 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 font-black mb-3 border-2 border-white shadow-lg">2</div>
              <div className="bg-slate-50 w-full h-32 rounded-t-3xl flex flex-col items-center justify-end pb-6 border-x border-t border-slate-100 group hover:h-36 transition-all duration-500">
                <span className="text-slate-800 font-bold text-[10px] md:text-xs px-2 text-center truncate w-full mb-1">{topThree[1].name}</span>
                <span className="text-slate-900 font-black text-xl">{topThree[1].gpa.toFixed(2)}</span>
              </div>
            </div>
          )}
          
          {/* 1st Place */}
          {topThree[0] && (
            <div className="flex flex-col items-center w-28 md:w-44 animate-fade-in-up">
              <div className="relative mb-3">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl animate-bounce">👑</div>
                <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center text-white font-black text-2xl border-4 border-amber-200 shadow-xl shadow-amber-500/20">1</div>
              </div>
              <div className="bg-amber-50 w-full h-44 rounded-t-3xl flex flex-col items-center justify-end pb-8 border-x border-t border-amber-100 shadow-lg shadow-amber-500/5 group hover:h-48 transition-all duration-500">
                <span className="text-amber-900 font-black text-xs md:text-sm px-2 text-center truncate w-full mb-1">{topThree[0].name}</span>
                <span className="text-amber-950 font-black text-3xl">{topThree[0].gpa.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {topThree[2] && (
            <div className="flex flex-col items-center w-24 md:w-36 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 font-black mb-3 border-2 border-white shadow-lg">3</div>
              <div className="bg-orange-50/50 w-full h-24 rounded-t-3xl flex flex-col items-center justify-end pb-6 border-x border-t border-orange-100 group hover:h-28 transition-all duration-500">
                <span className="text-orange-800 font-bold text-[10px] md:text-xs px-2 text-center truncate w-full mb-1">{topThree[2].name}</span>
                <span className="text-orange-900 font-black text-xl">{topThree[2].gpa.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Analytics Visual */}
      <div className="h-64 w-full mb-16 bg-slate-50 rounded-3xl p-6 border border-slate-100">
        <h3 className="text-center text-[10px] font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">টপ পারফর্মার এনালিটিক্স</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
            <YAxis hide domain={[0, 5]} />
            <Tooltip 
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', padding: '12px' }}
            />
            <Bar dataKey="gpa" radius={[10, 10, 0, 0]} barSize={32}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#fbbf24' : '#3b82f6'} fillOpacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
          <span>শিক্ষার্থী</span>
          <div className="flex gap-12">
            <span className="w-12 text-center">গ্রেড</span>
            <span className="w-12 text-center">জিপিএ</span>
          </div>
        </div>
        {filteredResults.map((student, index) => (
          <div key={student.id} className="group flex items-center justify-between p-5 bg-white hover:bg-slate-50 rounded-[1.5rem] transition-all border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="flex items-center gap-5">
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl font-black text-sm shadow-sm border transition-all ${index === 0 ? 'bg-amber-100 text-amber-600 border-amber-200' : 'bg-slate-100 text-slate-400 border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600'}`}>
                {index + 1}
              </div>
              <div>
                <h4 className="font-black text-slate-800 group-hover:text-blue-600 transition-colors text-lg leading-tight">{student.name}</h4>
                <p className="text-xs text-slate-400 font-bold tracking-widest mt-0.5 uppercase">রোল: {student.roll}</p>
              </div>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className={`w-12 text-center px-2 py-1.5 rounded-lg text-xs font-black uppercase transition-all ${student.grade === 'A+' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                {student.grade}
              </div>
              <div className="w-12 text-center text-2xl font-black text-slate-900 tabular-nums">
                {student.gpa.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
        {filteredResults.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
             <div className="text-4xl mb-4 opacity-30">🔍</div>
             <p className="font-bold text-slate-400">দুঃখিত, কোনো তথ্য পাওয়া যায়নি!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultBoard;
