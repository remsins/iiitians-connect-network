
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'JEE Counselling', href: '#jee-counselling' },
    { name: 'IIIT Placements', href: '#iiit-placements' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 text-sm"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-100"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-2 min-w-48">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
