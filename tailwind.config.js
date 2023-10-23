/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'black-back':"linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75),url('src/assets/bggg.jpg')",
      },
    },
  },
  plugins: [],
}