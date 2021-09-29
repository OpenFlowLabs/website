const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
    },
    extend: {
      colors: {},
      spacing: {
        96: '24rem',
      },
      margin: {
        '-96': '-24rem',
      },
    },
  },
  plugins: [],
};
