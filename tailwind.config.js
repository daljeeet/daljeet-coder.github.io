/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradf":"#005C97",
        "grads":"#363795",
        // "wave1":"#168ed2",
        // "wave2":"#152D40",
        // "wave3":"#152D40",
        // "wave4":"#152D40",
        // "wave5":"#152D40",
        // "wave6":"#152D40",
        "darkbg":"#152D40",
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