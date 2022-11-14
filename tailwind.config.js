/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#f1f1f1',
        'royale': '#000911'
      }
    },
    fontFamily: {
      'sans': ['Avenir', 'sans-serif'],
      'book': ['AvenirBook', 'sans-serif'],
      'display': ['RocGrotesk'],
      'brand': ['Marcellus']
    },
  },
  plugins: [],
}
