const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        thermoBlue: {
          500: '#00C6F0',
          600: '#00b7e0'
        }
      },
      dropShadow: {
        'btn': '0 10px 12px rgba(0, 0, 0, 0.20)'
      }
    },
  },
  plugins: [],
}
