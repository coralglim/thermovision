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
          500: '#4B6EB5',
          600: '#00b7e0',
          800: '#006c83'
        },
        thermoTeal: {
          500: '#09C2EB'
        },
        thermoPurple: {
          500: '#8676ff',
          700: '#6b4bc9'
        },
        thermoOrange: {
          500: '#ff6a2a'
        },
        gray: {
          75: '#fcfcfc'
        }
      },
      dropShadow: {
        'btn': '0 10px 12px rgba(0, 0, 0, 0.20)'
      },
      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '3rem'
      }
    },
  },
  plugins: [],
}
