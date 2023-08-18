/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      lineHeight: {
        1: '0.25rem'
      },
      backgroundImage: {
        'gradient-indigo': '-webkit-linear-gradient(left, var(--blue-500), var(--indigo-600))'
      }
    }
  },
  plugins: [],
  prefix: 't-'
};
