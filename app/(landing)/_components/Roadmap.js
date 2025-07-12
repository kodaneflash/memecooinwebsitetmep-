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
    <div className="max-w-[85rem] mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="font-stopbuck text-6xl text-cosmic-pink text-shadow mb-4">
          Booty Map
        </h2>
        <p className="text-xl text-cosmic-cyan">
          Our galactic journey through the cosmos of jiggling excellence
        </p>
      </div>

      <div className="relative">
        {/* Winding path background */}
        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-2 h-full">
            {/* Curved path using CSS */}
            <div className="absolute w-full h-full bg-gradient-to-b from-cosmic-pink via-cosmic-coral to-cosmic-cyan rounded-full opacity-30"></div>
            
            {/* Animated sparkles along the path */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-cosmic-pink rounded-full animate-pulse opacity-50"></div>
            <div className="absolute top-1/2 -right-4 w-6 h-6 bg-cosmic-cyan rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
            <div className="absolute top-3/4 -left-6 w-4 h-4 bg-cosmic-coral rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
          </div>
        </div>

        {/* Roadmap events */}
        <div className="relative z-10 space-y-16">
          {roadmapEvents.map((event, idx) => (
            <div
              key={idx}
              className={`flex items-center ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } gap-8`}
            >
              {/* Content card */}
              <div
                className={`w-1/2 ${
                  idx % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div
                  className={`inline-block p-6 rounded-2xl border-2 transform transition-all duration-300 hover:scale-105 ${
                    event.completed
                      ? "bg-cosmic-pink/20 border-cosmic-pink shadow-lg shadow-cosmic-pink/20"
                      : "bg-cosmic-cyan/10 border-cosmic-cyan/30 shadow-lg shadow-cosmic-cyan/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{event.emoji}</span>
                    <div>
                      <h3 className={`font-stopbuck text-2xl font-bold ${
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
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {event.description}
                  </p>
                  {event.completed && (
                    <div className="mt-3 flex items-center gap-2 text-cosmic-cyan font-semibold">
                      <span>✓</span>
                      <span>Completed</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Central node */}
              <div className="relative flex-shrink-0">
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

              {/* Spacer for alignment */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-cosmic-pink/20 to-cosmic-cyan/20 rounded-full border border-cosmic-coral/30">
            <span className="text-2xl">🌟</span>
            <span className="text-cosmic-coral font-semibold">
              The journey continues...
            </span>
            <span className="text-2xl">🌟</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap; 