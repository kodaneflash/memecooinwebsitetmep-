"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Exchanges", href: "#exchanges" },
  { name: "Jigglenomics", href: "#tokenomics" },
  { name: "How to buy", href: "#buy" },
  // { name: "Wall of love", href: "#love" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Track active section
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleClickOutside = (event) => {
      // Close mobile menu when clicking outside
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      // Close mobile menu on Escape key
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      aria-label="Global"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "h-20 glass-card-dark backdrop-blur-glass shadow-glass border-b border-white/10" 
          : "h-28 bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-screen-xl h-full">
        {/* Enhanced Logo with Glow Effect */}
        <div className="flex lg:flex-1">
          <a 
            href="#" 
            className="-m-1.5 p-1.5 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-cosmic-gradient rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <Image
                src="https://placehold.co/500x500"
                width={500}
                height={500}
                className={`relative transition-all duration-300 ${
                  isScrolled ? "h-14 w-auto" : "h-20 w-auto"
                }`}
                alt="JIAT Logo"
              />
            </div>
          </a>
        </div>

        {/* Enhanced Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-8 cursor-pointer uppercase">
          {navigation.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative transition-all duration-300 text-white text-xl font-bold font-stopbuck tracking-wider hover:text-cosmic-cyan hover:scale-105 drop-shadow-lg group ${
                  isActive ? 'text-cosmic-cyan' : ''
                }`}
              >
                {/* Underline effect */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cosmic-cyan transform origin-left transition-transform duration-300 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
                
                {/* Glow effect on hover */}
                <span className="relative z-10">{item.name}</span>
                
                {/* Background glow */}
                <div className="absolute inset-0 bg-cosmic-cyan/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Buy Button */}
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://dexscreener.com"
            target="_blank"
            className="relative cosmic-button text-lg sm:text-xl font-stopbuck px-6 py-3 hover:scale-105 transition-all duration-300 group overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-cosmic-gradient-animated opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button text */}
            <span className="relative z-10">
              Buy $JIAT
            </span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="glass-button p-2 rounded-lg transition-transform duration-200 hover:scale-105"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 text-white transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-4'
      }`}>
        <div className="px-6 py-6 space-y-6">
          {/* Mobile Navigation Links */}
          {navigation.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left text-xl font-stopbuck font-bold tracking-wider transition-all duration-300 hover:text-cosmic-cyan hover:translate-x-2 ${
                  isActive ? 'text-cosmic-cyan' : 'text-white'
                }`}
              >
                <div className="relative">
                  <span className="block py-2">{item.name}</span>
                  <div className={`h-0.5 bg-cosmic-cyan transition-all duration-300 ${
                    isActive ? 'w-8' : 'w-0 hover:w-8'
                  }`}></div>
                </div>
              </button>
            );
          })}
          
          {/* Mobile Buy Button */}
          <div className="pt-4 border-t border-white/20">
            <a
              href="https://dexscreener.com"
              target="_blank"
              className="block w-full text-center cosmic-button text-lg font-stopbuck px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <span className="relative z-10">Buy $JIAT</span>
                <div className="absolute inset-0 bg-cosmic-gradient-animated opacity-80"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated border bottom */}
      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cosmic-pink via-cosmic-coral to-cosmic-cyan transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </nav>
  );
};

export default Nav;
