/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {},
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
