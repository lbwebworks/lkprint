// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lbwebworks.github.io/lkprint',

  // If this is hosted as a GitHub Pages project site, enable the repo base path.
  // Use base path only for production builds; local dev uses '/'
  base: '/lkprint',
  output: 'static',

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});