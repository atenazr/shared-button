/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FCA311',
        'secondary': '#14213D',
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': '#E5E5E5',
        'red': '#E6423B',
        'green': '#00B548',
      }
    },
  },
  plugins: [],
}

