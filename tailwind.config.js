/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkbg": '#152D40',
        "lightbg":"#225D8A",
        "fontcolor":"#F4FAFF"
      },animation: {
        'loading': 'loading 25s linear infinite',
      },
      keyframes: {
        loading: {
          '0%': { maxWidth: '0' }
        },
      },
    },
  },
  plugins: [],
}