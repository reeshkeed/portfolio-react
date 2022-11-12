/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#3e445e',
          200: '#292f4c',
          300: '#252a44',
          400: '#21263d',
          500: '#1d2135',
          600: '#191c2e',
          700: '#151826',
          800: '#10131e',
          900: '#0c0e17',
        },
        light: {
          100: '#ffffff',
          200: '#eaeaed',
          300: '#d4d5db',
          400: '#bfc1c9',
          500: '#a9acb7',
          600: '#9497a6',
          700: '#7f8294',
          800: '#696d82',
          900: '#545970',
        },
      },
    },
  },
  plugins: [],
};
