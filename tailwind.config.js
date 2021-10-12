const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        fontFamily: {
            chivo: ['Chivo', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            backgroundImage: {
                openflowlabs: "url('/images/bg.webp')",
            },
            colors: {
                green: '#78AD2D',
            },
        },
    },
    plugins: [],
};
