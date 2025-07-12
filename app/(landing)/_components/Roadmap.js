import React from "react";

const roadmapEvents = [
  {
    phase: "Q1 2025",
    title: "The Great Awakening",
    description: "First Galactic Ass-Clap achieved!",
    emoji: "🍑",
    completed: true,
  },
  {
    phase: "Q2 2025",
    title: "Booty Bounce Protocol",
    description: "Jiggle mechanics implemented across the multiverse",
    emoji: "✨",
    completed: true,
  },
  {
    phase: "Q3 2025",
    title: "Twerk-to-Earn Launch",
    description: "Revolutionary staking rewards for premium jigglers",
    emoji: "💎",
    completed: false,
  },
  {
    phase: "Q4 2025",
    title: "Galactic Expansion",
    description: "Cross-dimensional booty trading goes live",
    emoji: "🚀",
    completed: false,
  },
  {
    phase: "Q1 2026",
    title: "The Ultimate Jiggle",
    description: "Achieve perfect cosmic harmony through synchronized twerking",
    emoji: "🌌",
    completed: false,
  },
  {
    phase: "Q2 2026",
    title: "Booty Singularity",
    description: "When all universes converge into one magnificent jiggle",
    emoji: "🌟",
    completed: false,
  },
];

const Roadmap = () => {
  return (
    <div className="w-full max-w-[85rem] mx-auto px-4 py-16 overflow-x-hidden">
      <div className="text-center mb-16">
        <h2 className="font-stopbuck text-4xl sm:text-6xl text-cosmic-pink text-shadow mb-4">
          Booty Map
        </h2>
        <p className="text-lg sm:text-xl text-cosmic-cyan">
          Our galactic journey through the cosmos of jiggling excellence
        </p>
      </div>

      <div className="relative w-full">
        {/* Winding path background - hidden on mobile for cleaner look */}
        <div className="absolute inset-0 justify-center hidden sm:flex">
          <div className="relative w-2 h-full">
            {/* Curved path using CSS */}
            <div className="absolute w-full h-full bg-gradient-to-b from-cosmic-pink via-cosmic-coral to-cosmic-cyan rounded-full opacity-30"></div>
            
            {/* Animated sparkles along the path - contained within bounds */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cosmic-pink rounded-full animate-pulse opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cosmic-cyan rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cosmic-coral rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
          </div>
        </div>

        {/* Roadmap events */}
        <div className="relative z-10 space-y-8 sm:space-y-16">
          {roadmapEvents.map((event, idx) => (
            <div
              key={idx}
              className={`flex items-center w-full ${
                idx % 2 === 0 ? "sm:flex-row flex-col" : "sm:flex-row-reverse flex-col"
              } gap-4 sm:gap-8`}
            >
              {/* Content card */}
              <div
                className={`w-full sm:w-1/2 ${
                  idx % 2 === 0 ? "sm:text-right sm:pr-4" : "sm:text-left sm:pl-4"
                } text-center sm:text-left`}
              >
                <div
                  className={`inline-block p-4 sm:p-6 rounded-2xl border-2 transform transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto ${
                    event.completed
                      ? "bg-cosmic-pink/20 border-cosmic-pink shadow-lg shadow-cosmic-pink/20"
                      : "bg-cosmic-cyan/10 border-cosmic-cyan/30 shadow-lg shadow-cosmic-cyan/10"
                  }`}
                >
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                    <span className="text-2xl sm:text-3xl">{event.emoji}</span>
                    <div className="text-center sm:text-left">
                      <h3 className={`font-stopbuck text-xl sm:text-2xl font-bold ${
                        event.completed 
                          ? "text-white" 
                          : "text-white"
                      }`}>
                        {event.title}
                      </h3>
                      <p className={`text-sm font-semibold ${
                        event.completed 
                          ? "text-cosmic-cyan" 
                          : "text-cosmic-cyan"
                      }`}>
                        {event.phase}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                    {event.description}
                  </p>
                  {event.completed && (
                    <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 text-cosmic-cyan font-semibold">
                      <span>✓</span>
                      <span>Completed</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Central node - only show on desktop */}
              <div className="relative flex-shrink-0 hidden sm:block">
                <div
                  className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                    event.completed
                      ? "bg-cosmic-pink border-cosmic-pink shadow-lg shadow-cosmic-pink/50"
                      : "bg-cosmic-cyan/20 border-cosmic-cyan shadow-lg shadow-cosmic-cyan/50"
                  }`}
                ></div>
                
                {/* Pulsing effect */}
                <div
                  className={`absolute inset-0 w-8 h-8 rounded-full animate-ping opacity-20 ${
                    event.completed ? "bg-cosmic-pink" : "bg-cosmic-cyan"
                  }`}
                ></div>
              </div>

              {/* Spacer for alignment - only on desktop */}
              <div className="w-1/2 hidden sm:block"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 sm:mt-16 text-center w-full">
          <div className="inline-flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-cosmic-pink/20 to-cosmic-cyan/20 rounded-full border border-cosmic-coral/30 max-w-xs sm:max-w-none mx-auto">
            <span className="text-xl sm:text-2xl">🌟</span>
            <span className="text-cosmic-coral font-semibold text-sm sm:text-base">
              The journey continues...
            </span>
            <span className="text-xl sm:text-2xl">🌟</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap; 