/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          lightGray: '#F6F7F8',
          aqua: '#01F0D0',
          paleAqua: '#D8FCF7',
          white: '#FFFFFF',
          lightBlue: '#E0F3FA',
          lightPink: '#FFE6E9',
          lavender: '#F4F0FE',
          pink: '#E66FD2',
          purple: '#8C6FE6',
          black: '#000000',
        }
      }
    },
  },
  plugins: [],
}