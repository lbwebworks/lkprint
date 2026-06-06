// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set this to your GitHub Pages URL once deployed.
  // Example project page URL: 'https://yourusername.github.io/lkprint'
  site: 'https://lkprint.github.io',

  // If this is hosted as a GitHub Pages project site, enable the repo base path.
  // Use base path only for production builds; local dev uses '/'
  base: process.env.NODE_ENV === 'production' ? '/lkprint' : '/',

  output: 'static',

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});