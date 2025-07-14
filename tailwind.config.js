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
        "cosmic-teal": "#00bfff",
        "cosmic-indigo": "#4B0082",
        "glass-white": "rgba(255, 255, 255, 0.05)",
        "glass-dark": "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        stopbuck: ["Stopbuck", "sans-serif"],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #FB2AA3 0%, #FE6040 100%)',
        'cosmic-gradient-vertical': 'linear-gradient(180deg, #FB2AA3 0%, #FE6040 100%)',
        'cosmic-gradient-reverse': 'linear-gradient(135deg, #FE6040 0%, #FB2AA3 100%)',
        'cosmic-cyan-gradient': 'linear-gradient(135deg, #06E3F5 0%, #00bfff 100%)',
        'cosmic-rainbow': 'linear-gradient(45deg, #FB2AA3, #FE6040, #06E3F5, #9d4edd)',
        'cosmic-radial': 'radial-gradient(circle at 30% 30%, rgba(251, 42, 163, 0.8), rgba(254, 96, 64, 0.6), rgba(6, 227, 245, 0.4))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'morphing-border': 'morphing-border 8s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'scale-in': 'scale-in 0.6s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 42, 163, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(251, 42, 163, 0.8), 0 0 60px rgba(251, 42, 163, 0.4)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        'morphing-border': {
          '0%, 100%': { borderRadius: '50% 20% 80% 30%' },
          '25%': { borderRadius: '30% 70% 60% 40%' },
          '50%': { borderRadius: '80% 30% 50% 70%' },
          '75%': { borderRadius: '40% 60% 30% 80%' },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(251, 42, 163, 0.4), 0 0 40px rgba(251, 42, 163, 0.2)',
        'neon-cyan': '0 0 20px rgba(6, 227, 245, 0.4), 0 0 40px rgba(6, 227, 245, 0.2)',
        'neon-coral': '0 0 20px rgba(254, 96, 64, 0.4), 0 0 40px rgba(254, 96, 64, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-inset': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
        'cosmic': '0 25px 50px -12px rgba(251, 42, 163, 0.25)',
      },
      borderRadius: {
        'cosmic': '20px',
        'blob': '50% 20% 80% 30%',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      blur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
