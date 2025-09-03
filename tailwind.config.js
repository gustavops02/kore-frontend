/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#00DF81',
        monochromatic: '#DF005E',
        custom_white: '#D9D9D9',
        dark_text_color: '#1D1D1D',
        placeholder_std: '#404040',
        btn_menu: '#F0F0F0'
      },
    },
  },
  plugins: [],
}