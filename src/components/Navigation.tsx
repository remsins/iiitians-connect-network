'use client';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'JEE Counselling', href: '#jee-counselling' },
    { name: 'IIIT Placements', href: '#iiit-placements' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) {
        setIsScrolled(window.scrollY > 10);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsScrolled(heroBottom <= 80);
    };

    handleScroll(); // Run once on mount
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll when anchor link is clicked (even from other routes)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        setIsOpen(false);
      } else {
        window.location.href = `/${href}`; // fallback navigation
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md py-2 text-[#4F46E5]'
          : 'bg-[#4F46E5] py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={isScrolled ? 'IIITians-Network-Logo-Blue.png' : 'IIITians-Network-Logo-Light.png'}
            alt="IIITians Network Logo"
            className="w-14 md:w-16 h-auto object-contain"
          />
          <span className="text-lg font-semibold tracking-wide hidden sm:inline">
            IIITians Network
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-medium transition-colors duration-300 group ${
                isScrolled ? 'text-[#4F46E5] hover:text-[#1e1b4b]' : 'text-white hover:text-white'
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-[#4F46E5]' : 'bg-white'
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#4F46E5]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#4F46E5]' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4">
          <div className="space-y-2 rounded-xl bg-white shadow-md border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 text-[#4F46E5] font-medium hover:bg-gray-100 rounded-md transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
