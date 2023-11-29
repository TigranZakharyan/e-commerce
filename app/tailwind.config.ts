import type { Config } from 'tailwindcss'

const config: Config = {
	mode: 'jit',
	content: [
		'./src/views/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/templates/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				banner: 'url("/img/bannerBg.png")'
			},
			colors: {
				primary: 'rgb(235, 64, 52)'
			},
			gridTemplateColumns: {
				'new5': 'repeat(5, 40px)'
			},
			gridTemplateRows: {
				'new2': 'repeat(2, 40px)'
			}
		},
	},
	safelist: [
		{
			pattern: /bg-\[\#[0-9a-fA-F]+\]/
		}
	],
	plugins: [],
}
export default config
