
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter hover:text-blue-500 transition-colors uppercase">
          BHARATH<span className="text-blue-500">.DEV</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                activeSection === item.id ? 'text-blue-500' : 'text-zinc-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-zinc-400"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-zinc-950/95 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium py-2 transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-500' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

