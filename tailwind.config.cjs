/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fdtbw: '#f5d147',
        primary: '#F9D802',
        secondary: '#A0D9F6',
      },
      fontFamily: {
        'wayfinding': ['Atkinson Hyperlegible', 'PT Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
