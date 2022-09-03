/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          100: '#FFD6DC',
          200: '#FFA3AF',
          300: '#FF7083',
          400: '#FF3D57',
          500: '#FF0A2A',
          600: '#D6001C',
          700: '#B20017',
          800: '#8F0013',
          900: '#6B000E',
        },
      },
    },
  },
  plugins: [],
}