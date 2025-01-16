/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'nine00': '900px',
      'four00': '400px',
      'fourfifty': '450px',
      'five00': '500px',
      'eight00': '800px',
      'four50': 'maxheight: 500px',
      
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'blink': "blink 2s infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    }
  },
  plugins: [],
}

