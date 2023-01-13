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
        "macLight":"#8AB4D9",
        "darkbg":"#152D40",
        "lightbg":"#225D8A",
        "fontcolor":"#F4FAFf"
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
    }
  },
  plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}