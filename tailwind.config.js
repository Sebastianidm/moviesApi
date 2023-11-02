/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHome': "url('./src/assets/img/moviesBg.jpg')",
      }
    },
  },
  plugins: [
    
  ],
}

