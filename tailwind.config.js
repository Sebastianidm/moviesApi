/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHome': "url('./src/assets/img/moviesBg.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

