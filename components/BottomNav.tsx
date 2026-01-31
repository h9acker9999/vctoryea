
import React from 'react';

const BottomNav: React.FC = () => {
  const items = [
    { icon: '🏠', label: 'হোম', link: '#' },
    { icon: '🏆', label: 'রেজাল্ট', link: '#results' },
    { icon: '👨‍🏫', label: 'শিক্ষক', link: '#teachers' },
    { icon: '📞', label: 'যোগাযোগ', link: '#contact' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl mobile-app-shadow border-t border-slate-200 px-6 py-3 z-[100] flex justify-between items-center rounded-t-3xl">
      {items.map((item, i) => (
        <a key={i} href={item.link} className="flex flex-col items-center gap-1 group">
          <span className="text-xl group-active:scale-125 transition-transform">{item.icon}</span>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
