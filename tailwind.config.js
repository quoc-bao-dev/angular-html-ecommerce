/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          0: 'rgb(22,24,128)',
        },
        background: {
          0: 'rgb(241 243 247)',
          1: 'hsl(0, 0%, 96%)'
        },
        gray: {
          0: 'rgba(17, 17, 17, 0.75)'
        },
      }
    },
  },
  plugins: [],
}

