/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner': "url('/src/assets/bg-shadow.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

