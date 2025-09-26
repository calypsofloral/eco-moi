// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const basePath = process.env.BASE_PATH;

// https://astro.build/config
export default defineConfig({
	site: 'https://calypsofloral.github.io',
	//base: '/eco-moi',
	base: basePath ? basePath : '/',
	integrations: [mdx(), sitemap()],
});
