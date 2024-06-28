# Ken HONDA Webpage

This is my personal web page for research, work and some activities.

### Setup

Web フレームワーク [Astro](https://astro.build/) で実装．テーマのテンプレートに [Astrofy](https://astro.build/themes/details/astrofy-personal-porfolio-website-template/) を採用．

- Install & Local Server
  - [Astrofy Repository](https://github.com/manuelernestog/astrofy) からプロジェクトをクローン
  - `pnpm install` でインストール
  - `pnpm run dev`　でローカルサーバの起動

## Project Structure

```php
├── src/
│   ├── components/
│   │   ├── TimeLine
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── HorizontalCard.astro
│   │   └── SideBar.astro
│   │   └── SideBarMenu.astro
│   │   └── SideBarFooter.astro
│   ├── content/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│   │   ├── blog/
│   │   │   ├── [...page].astro
│   │   │   ├── [slug].astro
│   │   └── cv.astro
│   │   └── index.astro
│   │   └── projects.astro
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   └── config.ts
├── public/
│   ├── favicon.svg
│   └── profile.webp
│   └── social_img.webp
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```

### コンテンツの編集

- サイト設定：`/src/config.ts`
- コンポーネント：`/src/components` の `.astro` ファイル
- コンテンツ：`src/pages/` の `.astro` ファイル

詳細は[リポジトリの README](https://github.com/manuelernestog/astrofy) を参照．

## Deploy

[公式ドキュメント](https://docs.astro.build/ja/guides/deploy/github/)を参考に GitHub Pages にデプロイ．

---
