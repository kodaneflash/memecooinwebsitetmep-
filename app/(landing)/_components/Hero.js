"use client";

import React from "react";
import { Telegram, X, Copy } from "../../../components/icons";

const Hero = () => {
  const handleCopyClick = () => {
    const contractAddress = "8J5r6kteet9Cm6waM2MWB2SNeu97CZ1jTKSDG76MoON";
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied to clipboard!");
  };

  return (
    <div className="min-h-dvh flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay - more transparent to show space background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/60 to-black/40"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-[85rem] mx-auto px-4 py-20 text-center">
        {/* Main CTA */}
        <h1 className="font-stopbuck text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-cosmic-pink via-cosmic-coral to-cosmic-cyan bg-clip-text text-transparent mb-10 leading-tight">
          Ready to join the jiggle-verse?
        </h1>
        
        {/* Subtitle */}
        <p className="font-mono text-lg sm:text-xl lg:text-2xl text-gray-200 tracking-widest max-w-4xl mx-auto mb-16 leading-relaxed">
          Join the jiggle revolution—intergalactic booty-powered economics
        </p>
        
        {/* Social icons - using existing styling */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <a href="https://t.me/jiatscommunity" target="_blank" rel="noopener noreferrer" className="group">
            <div className="aspect-square text-lg sm:text-2xl md:text-4xl bg-[#3d332b] border-4 border-duis w-fit rounded-full p-2 sm:p-4 text-center text-white flex flex-col gap-5 group-hover:bg-duis group-hover:border-[#3d332b] group-hover:scale-125">
              <div className="flex justify-center group-hover:text-[#3d332b]">
                <Telegram />
              </div>
            </div>
          </a>
          
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="group">
            <div className="aspect-square text-lg sm:text-2xl md:text-4xl bg-[#3d332b] border-4 border-duis w-fit rounded-full p-2 sm:p-4 text-center text-white flex flex-col gap-5 group-hover:bg-duis group-hover:border-[#3d332b] group-hover:scale-125">
              <div className="flex justify-center group-hover:text-[#3d332b]">
                <X />
              </div>
            </div>
          </a>
        </div>

        {/* Contract Address Section */}
        <div className="flex justify-center mb-8">
          <div className="bg-black rounded-2xl p-6 border-4 border-dashed border-cosmic-cyan max-w-md w-full">
            <h2 className="text-4xl font-bold text-cosmic-pink mb-4 font-stopbuck">
              CONTRACT ADDRESS
            </h2>
            <div className="bg-white rounded-lg p-4 font-mono text-lg text-black break-all flex items-center justify-between">
              <span>Coming Soon</span>
              <button 
                onClick={handleCopyClick}
                className="ml-3 text-cosmic-pink hover:text-cosmic-coral transition-colors duration-200 flex-shrink-0"
                aria-label="Copy contract address"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-400 font-mono max-w-lg mx-auto opacity-75">
          This website is still under heavy development. Everything is subject to change.
        </p>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-pink rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cosmic-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cosmic-coral rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cosmic-pink rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default Hero;
