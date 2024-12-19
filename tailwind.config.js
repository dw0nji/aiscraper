/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color:{
          1: '#ffdebc',
          2: '#5B3A29'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

