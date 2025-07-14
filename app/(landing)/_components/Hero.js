"use client";

import React, { useEffect, useState } from "react";
import { Telegram, X, Copy } from "../../../components/icons";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleCopyClick = () => {
    const contractAddress = "8J5r6kteet9Cm6waM2MWB2SNeu97CZ1jTKSDG76MoON";
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied to clipboard!");
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Generate random particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 6 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-dvh flex items-start justify-center relative overflow-hidden pt-32 sm:pt-48 lg:pt-56 xl:pt-64">
      {/* Enhanced Background with Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/60 to-black/40 cosmic-grid"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 cosmic-orb animate-float opacity-30"></div>
      <div className="absolute top-40 right-16 w-20 h-20 cosmic-orb animate-float opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 cosmic-orb animate-float opacity-25" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {/* Main content */}
      <div className={`relative z-10 max-w-[85rem] mx-auto px-4 py-8 sm:py-12 lg:py-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Enhanced Main CTA with Better Readability */}
        <h1 className="font-stopbuck text-5xl sm:text-6xl lg:text-7xl xl:text-8xl hero-text mb-8 sm:mb-10 leading-tight">
          Ready to join the jiggle-verse?
        </h1>
        
        {/* Enhanced Subtitle with Glass Effect */}
        <div className="glass-card rounded-cosmic p-6 mb-8 max-w-4xl mx-auto">
          <p className="font-mono text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 tracking-widest leading-relaxed shimmer-text">
            Join the jiggle revolution—intergalactic booty-powered economics
          </p>
        </div>
        
        {/* Enhanced Contract Address Section */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="glass-card-dark rounded-cosmic p-6 sm:p-8 neon-border max-w-md w-full transform hover:scale-103 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-stopbuck text-duis text-shadow text-center mb-4 sm:mb-6">
              CONTRACT ADDRESS
            </h2>
            <div className="bg-gradient-to-r from-white to-gray-100 rounded-lg p-4 sm:p-5 font-mono text-base sm:text-lg text-black break-all flex items-center justify-between shadow-cosmic">
              <span className="font-bold">Coming Soon</span>
              <button 
                onClick={handleCopyClick}
                className="ml-3 text-cosmic-pink hover:text-cosmic-coral transition-colors duration-200 flex-shrink-0 hover:scale-110 transform"
                aria-label="Copy contract address"
              >
                <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Social Icons with Glassmorphism */}
        <div className="flex justify-center items-center gap-8 sm:gap-10 mb-8 sm:mb-10">
          <a href="https://t.me/jiatscommunity" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative">
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 bg-cosmic-cyan rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main Button */}
              <div className="relative aspect-square text-base sm:text-lg md:text-2xl lg:text-4xl glass-card border-2 border-cosmic-cyan w-fit rounded-full p-3 sm:p-4 lg:p-5 text-center text-white flex flex-col gap-3 sm:gap-5 group-hover:bg-cosmic-cyan/20 group-hover:border-cosmic-cyan/80 group-hover:scale-110 transition-all duration-300 neon-border">
                <div className="flex justify-center group-hover:text-cosmic-cyan transition-colors duration-300">
                  <Telegram />
                </div>
              </div>
            </div>
          </a>
          
          <a href="https://x.com/jiatonsolana" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative">
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 bg-cosmic-pink rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main Button */}
              <div className="relative aspect-square text-base sm:text-lg md:text-2xl lg:text-4xl glass-card border-2 border-cosmic-pink w-fit rounded-full p-3 sm:p-4 lg:p-5 text-center text-white flex flex-col gap-3 sm:gap-5 group-hover:bg-cosmic-pink/20 group-hover:border-cosmic-pink/80 group-hover:scale-110 transition-all duration-300 neon-border">
                <div className="flex justify-center group-hover:text-cosmic-pink transition-colors duration-300">
                  <X />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Enhanced Call-to-Action Button */}
        <div className="mb-8">
          <button className="cosmic-button text-lg sm:text-xl lg:text-2xl px-8 py-4 font-stopbuck shadow-cosmic hover:shadow-neon-pink">
            🚀 Launch into the Jiggle-verse
          </button>
        </div>

        {/* Enhanced Disclaimer with Glass Effect */}
        <div className="glass-card rounded-cosmic p-4 max-w-lg mx-auto">
          <p className="text-xs sm:text-sm text-gray-300 font-mono opacity-75 leading-relaxed">
            This website is still under heavy development. Everything is subject to change.
          </p>
        </div>
      </div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cosmic-pink rounded-full animate-pulse shadow-neon-pink"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cosmic-cyan rounded-full animate-pulse shadow-neon-cyan" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-cosmic-coral rounded-full animate-pulse shadow-neon-coral" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cosmic-pink rounded-full animate-pulse shadow-neon-pink" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Morphing Shapes */}
        <div className="absolute top-10 right-10 w-16 h-16 morphing-blob opacity-20 animate-morphing-border"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 morphing-blob opacity-15 animate-morphing-border" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Hero;
