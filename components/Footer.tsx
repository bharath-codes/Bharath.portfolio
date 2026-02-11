
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 mt-32 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold tracking-tighter text-white">
            G.<span className="text-blue-500">BHARATH</span>
          </p>
          <p className="text-xs text-zinc-600 mt-2 uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Handcrafted by G. Bharath
          </p>
        </div>

        <div className="flex gap-8">
          {[
            { name: 'Instagram', url: 'https://instagram.com/bhaxathh' },
            { name: 'GitHub', url: '#' },
            { name: 'LinkedIn', url: '#' }
          ].map(social => (
            <a 
              key={social.name} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              {social.name}
            </a>
          ))}
        </div>
        
        <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
          Developed for excellence
        </div>
      </div>
    </footer>
  );
};
