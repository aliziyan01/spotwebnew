// tailwind.config.js

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        D_primary: "#0734ce",
        L_primary: "#0734ce"
      },
      animation: {
        'drop-in': 'drop-in 1s ease 200ms backwards',
        'drop-in-delayed': 'drop-in 1s ease 2000ms backwards', // New animation with 2-second delay
      },
      keyframes: {
        'drop-in': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.animate-drop-in': {
          animation: 'drop-in 1s ease 200ms backwards',
        },
        '.animate-drop-in-delayed': {
          animation: 'drop-in-delayed 1s ease 200ms backwards',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};