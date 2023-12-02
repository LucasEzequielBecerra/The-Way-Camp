/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#FFC1AC',
        'light-orange': '#FB8C21',
        orange: '#FF5500',
        green: '#014921',
        white: '#FFEFDF',
        brown: '#3C2B2B'
      }
    }
  },
  plugins: []
}
