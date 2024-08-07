import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://knhnd.github.io/mypage/',
  base: '/mypage/',
  integrations: [mdx(), sitemap(), tailwind()],
});
