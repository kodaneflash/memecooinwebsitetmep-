import React from "react";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Exchanges from "./_components/Exchanges";
import Tokenomics from "./_components/Tokenomics";
import HowToBuy from "./_components/HowToBuy";
import WallOfLove from "./_components/WallOfLove";
import Footer from "./_components/Footer";
import Socials from "./_components/Socials";
import Roadmap from "./_components/Roadmap";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />

      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:py-14 flex items-center">
        <span className="h-[3px] flex-1 bg-cosmic-pink"></span>
        <span className="px-6 text-4xl">🎯</span>
        <span className="h-[3px] flex-1 bg-cosmic-coral"></span>
      </div>

      <Exchanges />

      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:py-14 flex items-center">
        <span className="h-[3px] flex-1 bg-cosmic-coral"></span>
        <span className="px-6 text-4xl">🔥</span>
        <span className="h-[3px] flex-1 bg-cosmic-cyan"></span>
      </div>

      <Tokenomics />

      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:py-14 flex items-center">
        <span className="h-[3px] flex-1 bg-cosmic-cyan"></span>
        <span className="px-6 text-4xl">🚀</span>
        <span className="h-[3px] flex-1 bg-cosmic-pink"></span>
      </div>

      <HowToBuy />

      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:py-14 flex items-center">
        <span className="h-[3px] flex-1 bg-cosmic-pink"></span>
        <span className="px-6 text-4xl">⭐</span>
        <span className="h-[3px] flex-1 bg-cosmic-coral"></span>
      </div>

      <Socials />

      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:py-14 flex items-center">
        <span className="h-[3px] flex-1 bg-cosmic-coral"></span>
        <span className="px-6 text-4xl">🍑</span>
        <span className="h-[3px] flex-1 bg-cosmic-cyan"></span>
      </div>

      <Roadmap />

      <Footer />
    </div>
  );
};

export default LandingPage;