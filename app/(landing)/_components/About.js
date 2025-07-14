"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects - Made responsive to prevent overflow */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      <div className="absolute top-20 left-4 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 cosmic-orb opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 cosmic-orb opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div 
        ref={sectionRef}
        id="about" 
        className={`max-w-[85rem] px-4 py-10 sm:py-14 mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Enhanced Header */}
        <div className="my-7 text-center">
          <h2 className="font-stopbuck text-4xl sm:text-5xl lg:text-6xl holographic-text text-center mt-14 mb-4 animate-pulse-glow">
            About JIAT
          </h2>
          <div className="glass-card inline-block rounded-cosmic px-6 py-3 mb-8">
            <h3 className="font-stopbuck text-lg sm:text-xl lg:text-2xl italic text-cosmic-cyan shimmer-text">
              {`(Jiggly Intergalactic Ass Token)`}
            </h3>
          </div>
          
                     {/* Decorative elements */}
           <div className="flex justify-center items-center gap-4 mb-8">
             <div className="w-16 h-0.5 bg-cosmic-gradient"></div>
             <div className="w-16 h-0.5 bg-cosmic-gradient-reverse"></div>
           </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Image Section */}
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-cosmic-gradient rounded-cosmic blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main image container with glassmorphism */}
            <div className="relative glass-card rounded-cosmic p-4 transform group-hover:scale-102 transition-all duration-500">
              <Image
                className="h-full w-full object-cover rounded-cosmic shadow-cosmic"
                src="https://placehold.co/700x700"
                width={700}
                height={700}
                alt="JIAT Planet Jiggletron"
              />
              
              {/* Floating particles around image - Made mobile-safe */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-3 sm:w-4 h-3 sm:h-4 bg-cosmic-pink rounded-full animate-bounce opacity-70"></div>
              <div className="absolute -top-1 sm:-top-2 -right-3 sm:-right-6 w-2 sm:w-3 h-2 sm:h-3 bg-cosmic-cyan rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-3 sm:w-5 h-3 sm:h-5 bg-cosmic-coral rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-1 sm:-bottom-2 -left-3 sm:-left-6 w-2 h-2 bg-cosmic-pink rounded-full animate-bounce opacity-50" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Enhanced Text Content */}
          <div className="glass-card rounded-cosmic p-6 sm:p-8 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 cosmic-grid opacity-5 rounded-cosmic"></div>
            
            <div className="relative z-10">
              <div className="font-mono text-base sm:text-lg lg:text-xl text-gray-200 tracking-wide space-y-6">
                <p className="leading-relaxed text-justify">
                  <span className="inline-block w-8"></span>
                  In a distant corner of the galaxy, beyond the Milky Way, lies a secret cosmic phenomenon: 
                  <span className="inline-block mx-2 px-3 py-1 bg-cosmic-gradient rounded-lg text-white font-bold text-lg sm:text-xl neon-glow">
                    Planet Jiggletron
                  </span>
                                     . This whimsical planet pulsates rhythmically through space, powered entirely by the infinite jiggling energy of its intergalactic inhabitants&apos; rear ends.
                </p>
                
                <p className="leading-relaxed text-justify">
                  <span className="inline-block w-8"></span>
                  To harness this endless, cheek-driven force, the 
                  <span className="italic font-bold text-cosmic-coral text-lg neon-glow mx-1">
                    Jiggly Intergalactic Ass Token
                  </span> 
                  (
                  <span className="italic font-bold text-cosmic-cyan text-lg neon-glow mx-1">
                    JIAT
                  </span>
                  ) was born—bringing unstoppable energy, humor, and decentralized jiggle economics to the Solana galaxy.
                </p>
              </div>
              
                             {/* Enhanced call-to-action elements */}
               <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
                 <div className="glass-button px-4 py-2 rounded-lg text-cosmic-cyan font-semibold border border-cosmic-cyan/30 hover:border-cosmic-cyan/60">
                   Cosmic Energy
                 </div>
                 <div className="glass-button px-4 py-2 rounded-lg text-cosmic-coral font-semibold border border-cosmic-coral/30 hover:border-cosmic-coral/60">
                   Jiggle Power
                 </div>
                 <div className="glass-button px-4 py-2 rounded-lg text-cosmic-pink font-semibold border border-cosmic-pink/30 hover:border-cosmic-pink/60">
                   Decentralized
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 text-center">
          <div className="glass-card-dark rounded-cosmic p-8 sm:p-12 max-w-4xl mx-auto">
            {/* Particle effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="particle absolute top-4 left-4"></div>
              <div className="particle absolute top-8 right-8" style={{ animationDelay: '0.7s' }}></div>
              <div className="particle absolute bottom-6 left-1/3" style={{ animationDelay: '1.4s' }}></div>
            </div>
            
            <div className="relative z-10 font-mono text-lg sm:text-xl lg:text-2xl text-gray-200 tracking-wide">
              <p className="text-2xl sm:text-3xl lg:text-4xl mb-6 leading-relaxed">
                Now{" "}
                <span className="inline-block px-4 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold bg-cosmic-gradient rounded-lg text-white neon-glow animate-pulse-glow">
                  JIAT
                </span>{" "}
                brings cosmic jiggle power to{" "}
                <span className="text-3xl sm:text-4xl lg:text-5xl bg-cosmic-rainbow bg-clip-text text-transparent font-bold holographic-text">
                  Solana
                </span>{" "}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
