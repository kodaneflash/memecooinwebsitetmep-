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
      <Exchanges />
      <Tokenomics />
      <HowToBuy />
      <Socials />
      <Roadmap />

      <Footer />
    </div>
  );
};

export default LandingPage;