/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      lineHeight: {
        1: '0.25rem'
      }
    },
  },
  plugins: [],
  prefix: 't-',
};