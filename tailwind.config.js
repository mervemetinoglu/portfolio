/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './containers/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      night100: '#121111',
      white: '#ffffff',
      zinc50: '#fafafa',
      zinc400: '#a1a1aa',
      neutral400: '#a3a3a3',
      neutral500: '#737373',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', ...fontFamily.sans],
      },
    },
    variants: {
      width: ['responsive', 'hover'],
    },
  },
};
