# Ken HONDA Webpage

This is my personal web page for research, work and some activities.

- URL: `https://knhnd.github.io/mypage/`

## Astro

Web フレームワーク [Astro](https://astro.build/) で実装．テンプレートテーマに [Astrofy](https://astro.build/themes/details/astrofy-personal-porfolio-website-template/) を採用．

- package manager: [`pnpm`](https://pnpm.io/ja/)
- Install & Local Server
  - [Astrofy Repository](https://github.com/manuelernestog/astrofy) からプロジェクトを clone
  - プロジェクトルートで `pnpm install` でパッケージインストール
  - `pnpm run dev`　でローカルサーバの起動

### Project Structure

Astrofy のプロジェクト構成は以下のとおり（デフォルトからは少しだけ変えている）．

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

### ページ追加

- `src/pages` に `.astro` の新規ファイルを追加
- `/src/components` の `SideBarMenu.astro` に追記

## Deploy

[公式ドキュメント](https://docs.astro.build/ja/guides/deploy/github/)を参考に GitHub Pages にデプロイ．

- `push` すれば自動デプロイ

### Trouble Shooting

- GitHub Pages にデプロイするとページと画像の PATH がおかしくなる
  - `astro.config.mjs` の設定と `const basePath = import.meta.env.BASE_URL;` の記述で解決

---
