import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = [
	...nextVitals,
	...nextTs,
	{
		ignores: [
			'.next/**',
			'node_modules/**',
			'out/**',
			'tailwind.config.js',
			'postcss.config.js',
			'next.config.js',
			'lint-staged.config.js',
		],
	},
];

export default eslintConfig;
