/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#661AE6',

          'secondary': '#D926AA',

          'accent': '#1FB2A5',

          'neutral': '#191D24',

          'base-100': '#2A303C',

          'info': '#3ABFF8',

          'success': '#36D399',

          'warning': '#FBBD23',

          'error': '#F87272',
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
