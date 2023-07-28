/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'gradient-stops': '#7c3aed, #0284c7',
      },
    },
  },
  plugins: [],
  prefix: 't-',
};