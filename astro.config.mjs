import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/lichtung', // 如果部署到 user.github.io/lichtung
  build: { assets: 'assets' },
});
