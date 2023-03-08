/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
      fontSize: {
        46: ['46px', '57.5px'],
        32: ['32px', '40px'],
        28: ['28px', '35px'],
      },
      boxShadow: {
        'green-3xl': '0px 10px 20px rgba(137, 229, 199, 0.503305), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)',
        'blue-3xl': '0px 10px 20px rgba(0, 0, 0, 0.0988035), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)',
      },
    },
  },
  plugins: [],
};
