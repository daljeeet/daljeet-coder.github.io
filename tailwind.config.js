/** @type {import('tailwindcss').Config} */
const dark1 = {
  dark:"#44001A",
  light:"#770058",
  font:"white"
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradf":"#DF7373",
        "grads":"#576CA8",
        "macLight":"#8AB4D9",
        "darkbg":dark1.dark,
        "lightbg":dark1.light,
        "fontcolor":dark1.font,
      },
      animation: {
        loading: 'loading 10s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        width: 'width 1s ease-in-out',
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