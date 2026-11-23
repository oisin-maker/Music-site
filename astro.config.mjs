import { defineConfig } from 'astro/config';

// Set SITE_URL in your hosting settings once you have a domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
});
