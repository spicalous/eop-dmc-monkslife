// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* Reachable only by their URL: nothing links to them and each sets `noindex`. */
const UNLISTED = ['/iop-preview-7q4m2x/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://www.monkslife.org',
  integrations: [sitemap({ filter: (page) => !UNLISTED.some((path) => page.endsWith(path)) })]
});
