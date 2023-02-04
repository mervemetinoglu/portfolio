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
			amber50: '#fffbeb',
			amber100: '#fef3c7',
			gray400: '#9ca3af',
			gray600: '#4b5563',
			gray800: '#1f2937',
			zinc700: '#3f3f46',
			zinc50: '#fafafa',
			zinc400: '#a1a1aa',
			zinc800: '#27272a',
			zinc900: '#18181b',
			stone700: '#44403c',
			neutral400: '#a3a3a3',
			neutral500: '#737373',
			teal700: '#0f766e',
			teal800: '#115e59',
			cyan800: '#155e75',
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
