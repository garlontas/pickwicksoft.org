import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './remark-reading-time.mjs'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.pickwicksoft.org',
	integrations: [
		mdx(),
		sitemap(),
		tailwind(),
		icon(),
		(await import('@playform/compress')).default()
	],
	markdown: {
		remarkPlugins: [remarkReadingTime]
	}
})
