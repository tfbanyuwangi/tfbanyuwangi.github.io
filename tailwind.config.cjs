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
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
