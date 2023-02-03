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
			night: 'rgba(21, 21, 21, 1)',
			white: '#ffffff',
			orange400: '#fb923c',
			emerald600: '#059669',
			teal700: '#0f766e',
			teal800: '#115e59',
			gray400: '#9ca3af',
			zinc400: '#a1a1aa',
			neutral400: '#a3a3a3',
			neutral500: '#737373',
			gray100: 'rgba(148, 148, 149, 1)',
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-nunito)', ...fontFamily.sans],
			},
		},
		variants: {
			width: ['responsive', 'hover', 'focus'],
		},
	},
	plugins: [],
};
