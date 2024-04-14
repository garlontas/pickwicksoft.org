import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#4B0CDF',
			},
			fontFamily: {
				sans: ['Nunito Variable', 'Space Grotesk Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
