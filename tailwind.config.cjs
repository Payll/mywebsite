/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		screens: {
			sm: '768px',
			md: '1024px',
			lg: '1280px',
			xl: '1536px'
		}
	},
	plugins: [require('daisyui')]
};
