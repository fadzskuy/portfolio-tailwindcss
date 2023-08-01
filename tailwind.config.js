/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        yellow: '#fde047',
        gray: '#393646',
        secondary: '#64748b',
        purple: '#AA77FF',
        light: '#C9EEFF',
        primary: '#62CDFF',
        dark: '#0f172a',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

