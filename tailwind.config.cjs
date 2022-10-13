/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4c4',
        100: '#e1e1e6'
      },
      cyan: {
        500: '#81d8f7',
        300: '#9ee5ff'
      },
      red: {
        100: '#ff7d8c'
      },
      transparent: 'transparent',
      black: '#000000',
      white: '#fff'
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 17,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
}
