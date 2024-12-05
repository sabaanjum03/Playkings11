/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gold-glow': '0 0 10px rgba(255, 223, 0, 0.8), 0 0 20px rgba(255, 223, 0, 0.5)',
      },
      
      colors: {
        dark: '#0b0c10',
        lightDark: '#1f2833',
        accentGold: '#FFD700',
        primary: {
          light: '#8A2BE2',
          DEFAULT: '#4B0082',
        },
        accent: {
          gold: '#FFD700',
          green: '#39FF14',
          pink: '#FF1493',
        },
        dark: '#1A1A1D',
        lightDark: '#282828',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
