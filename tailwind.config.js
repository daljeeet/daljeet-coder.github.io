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
        loading: 'loading 25s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        wigle: 'wiggle 1s ease-in-out',
      },
      keyframes: {
        loading: {
          '0%': { maxWidth: '0' }
        },
        wiggle: {
          '100%': { height: '150px' },
          '0%': { height: '0px' },
        },
        wigle: {
          '0%': { height: '150px' },
          '100%': { height: '0px' },
        }
      },
    },borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}