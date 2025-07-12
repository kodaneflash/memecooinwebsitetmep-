/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        duis: "#06E3F5", // Changed to cosmic cyan for better contrast
        "cosmic-pink": "#FB2AA3",
        "cosmic-coral": "#FE6040", 
        "cosmic-cyan": "#06E3F5",
        "cosmic-purple": "#9d4edd",
        "cosmic-magenta": "#FF1493",
      },
      fontFamily: {
        stopbuck: ["Stopbuck", "sans-serif"],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #FB2AA3 0%, #FE6040 100%)',
        'cosmic-gradient-vertical': 'linear-gradient(180deg, #FB2AA3 0%, #FE6040 100%)',
        'cosmic-gradient-reverse': 'linear-gradient(135deg, #FE6040 0%, #FB2AA3 100%)',
        'cosmic-cyan-gradient': 'linear-gradient(135deg, #06E3F5 0%, #00bfff 100%)',
      },
    },
  },
  plugins: [],
};
