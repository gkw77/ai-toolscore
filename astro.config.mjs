import { defineConfig } from 'astro/config';

// https://astro.build/config
// site/base pinned for GitHub Pages (project pages sub-path). Local `astro dev` is unaffected.
export default defineConfig({
  site: 'https://gkw77.github.io',
  base: '/toolscore/',
});
