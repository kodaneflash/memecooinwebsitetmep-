"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Card = ({ props: { img, title, desc } }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative block h-80 sm:h-96 max-w-80 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Enhanced Shadow with Neon Effect */}
      <span className="absolute inset-0 bg-cosmic-cyan rounded-cosmic border-2 border-dashed border-black/50 transition-all duration-300 group-hover:bg-cosmic-pink group-hover:shadow-neon-pink"></span>

      {/* Main Card with Glassmorphism */}
      <div className="relative h-full transform rounded-cosmic border-2 border-black glass-card transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:shadow-glass overflow-hidden">
        {/* Particle Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="particle absolute top-4 left-4"></div>
          <div className="particle absolute top-6 right-6" style={{ animationDelay: '0.5s' }}></div>
          <div className="particle absolute bottom-8 left-8" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="h-full transition-opacity grid grid-rows-4">
          {/* Enhanced Image Section */}
          <div className="row-span-3 flex justify-center items-center border-b-2 rounded-b-cosmic border-black/20 relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-gradient/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <Image
              src={`/${img}`}
              alt={title}
              width={500}
              height={500}
              unoptimized
              className="h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            
            {/* Shimmer overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          {/* Enhanced Content Section */}
          <div className="py-4 text-center font-stopbuck relative">
            {/* Dark background for text readability */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-b-cosmic"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-medium uppercase bg-cosmic-gradient bg-clip-text text-transparent transition-all duration-300 group-hover:neon-glow">
                {title}
              </h2>
              <p className="text-lg sm:text-xl font-thin text-white transition-all duration-300 group-hover:text-gray-200 mt-1">
                {desc}
              </p>
            </div>
            
            {/* Animated underline */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cosmic-gradient transition-all duration-500 group-hover:w-3/4"></div>
          </div>
        </div>

        {/* Corner glow effects */}
        <div className="absolute top-0 left-0 w-8 h-8 bg-cosmic-pink/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-cosmic-cyan/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default Card;
