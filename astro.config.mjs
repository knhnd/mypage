import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://knhnd.github.io/mypage/',
  base: '/mypage/',
  integrations: [
    sitemap({
      // 日英ページの対応関係（hreflang）を sitemap にも出力
      i18n: { defaultLocale: 'ja', locales: { ja: 'ja-JP', en: 'en-US' } },
    }),
  ],
  build: {
    // CSS を各ページの HTML に埋め込む。
    // GitHub Pages は HTML を最大10分キャッシュするため、別ファイルにすると
    // デプロイ直後に「古い HTML が消えた CSS を参照して表示が崩れる」ことがある
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
