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
      },
      screens: {
        'xs': '500px',
        '1xl': '1336px',
      },
      fontSize: {
        '2xs': '0.625rem',
      }
    },
    fontFamily: {
      'sans': ['var(--font-avenir)', 'sans-serif'],
      'book': ['var(--font-avenir-book)', 'sans-serif'],
      'display': ['var(--font-roc-grotesk)'],
      'brand': ['var(--font-marcellus)']
    },
  },
  plugins: [],
}
