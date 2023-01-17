/** @type {import('tailwindcss').Config} */
const thm = {
  dark:"#022140",
  light:"#27558B",
  font:"#F8FFF4",
  gardient1:"#47A8BD",
  gardient2:"#9C3848",
  mac:"#2B6E6F"
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