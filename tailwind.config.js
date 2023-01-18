/** @type {import('tailwindcss').Config} */
const thm = {
  dark:"black",
  light:"",
  font:"#38bcf6",
  gardient1:"#000428",
  gardient2:"#004e92",
  mac:"#325781"
} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradf":thm.gardient1,
        "grads":thm.gardient2,
        "macLight":thm.mac,
        "darkbg":thm.dark,
        "lightbg":thm.light,
        "fontcolor":thm.font,
      },
      animation: {
        loading: 'loading 10s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        width: 'width 5s ease-in-out',
      },
      keyframes: {
        loading: {
          '0%': { maxWidth: '0' }
        },
        wiggle: {
          '0%': { height: "12rem" },
          '100%': { height: '0rem' },
        },
        width:{
          "0%":{width:"0"},
          "100%":{width:"100"}
        }
      },
    },
    screens: {
      'xsm':'300px',
      
      'sm': '480px',

      'md': '780px',

      'lg': '1000px',
    },
  },
  plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}