import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl bg-cosmic-gradient bg-clip-text text-transparent text-center mt-14">
            About JIAT
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-cosmic-cyan">
            {`(Jiggly Intergalactic Ass Token)`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="https://placehold.co/700x700"
              width={700}
              height={700}
              alt="Placeholder Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-gray-200 tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                In a distant corner of the galaxy, beyond the Milky Way, lies a secret cosmic phenomenon: <span className="text-3xl font-bold text-cosmic-pink">Planet Jiggletron</span>. This whimsical planet pulsates rhythmically through space, powered entirely by the infinite jiggling energy of its intergalactic inhabitants' rear ends.
              </p>
              <p className="indent-12 mt-3">
                To harness this endless, cheek-driven force, the <span className="italic font-bold text-cosmic-coral">Jiggly Intergalactic Ass Token</span> (<span className="italic font-bold text-cosmic-cyan">JIAT</span>) was born—bringing unstoppable energy, humor, and decentralized jiggle economics to the Solana galaxy.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-gray-200 tracking-widest text-center">
          <p className="text-4xl p-10">
            Now{" "}
            <span className="text-5xl font-bold underline decoration-cosmic-coral">
              JIAT
            </span>{" "}
            brings cosmic jiggle power to{" "}
            <span className="text-5xl bg-cosmic-gradient inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
