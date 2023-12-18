import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#085852',

					secondary: '#00ad9c',

					accent: '#00d6bc',

					neutral: '#383838',

					'base-100': '#FFFFFF',

					info: '#5CA3E6',

					success: '#00d6bc',

					warning: '#F2DB69',

					error: '#FA3F19'
				},
				dark: {
					primary: '#085852',

					secondary: '#00ad9c',

					accent: '#00d6bc',

					neutral: '#ffffff',

					'base-100': '#323232',

					info: '#5CA3E6',

					success: '#00d6bc',

					warning: '#F2DB69',

					error: '#FA3F19'
				}
			}
		]
	}
} satisfies Config;
