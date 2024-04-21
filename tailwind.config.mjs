import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				primary: '#4B0CDF'
			},
			fontFamily: {
				sans: ['Nunito Variable', 'Space Grotesk Variable', ...defaultTheme.fontFamily.sans]
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			},
			screens: {
				xxs: '386px',
				xs: '474px',
				lxl: '1455px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
}
