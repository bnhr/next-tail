const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...fontFamily.sans],
				mono: [...fontFamily.mono],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					md: '3rem',
					lg: '14rem',
					xl: '20rem',
					'2xl': '24rem',
				},
			},
		},
	},
	plugins: [],
}
