# Ken HONDA Webpage

This is my personal web page for research, work and some activities.

- URL: `https://knhnd.github.io/mypage/`

## Astro

Web フレームワーク [Astro](https://astro.build/) で実装．テンプレートテーマに [Astrofy](https://astro.build/themes/details/astrofy-personal-porfolio-website-template/) を採用．

- package manager: [`pnpm`](https://pnpm.io/ja/)（`package-lock.json` は置かない）
- Install & Local Server
  - プロジェクトルートで `pnpm install` でパッケージインストール
  - `pnpm run dev` でローカルサーバの起動（`http://localhost:4321/mypage/`）
  - `pnpm run build` でビルド確認

## コンテンツの更新（ここだけ触れば OK）

ページの中身はすべて `src/data/` のデータファイルにまとまっている．
`.astro` ファイルを触らずに，データを 1 件追加するだけで更新できる．

| 更新したいもの | 編集するファイル | 変数 |
| --- | --- | --- |
| 論文誌 | `src/data/publications.ts` | `journals` |
| 国際会議 | `src/data/publications.ts` | `internationalConferences` |
| 国内学会発表 | `src/data/publications.ts` | `domesticPresentations` |
| 職歴 | `src/data/career.ts` | `experience` |
| 学会活動 | `src/data/career.ts` | `academicContributions` |
| 学歴 | `src/data/career.ts` | `education` |
| プロフィール文 | `src/data/career.ts` | `profileText` |
| 担当授業 | `src/data/lectures.ts` | `lectureGroups` |
| 研究プロジェクト | `src/data/projects.ts` | `projects` |
| 外部リンク | `src/data/links.ts` | `links` |
| 連絡先メール（サイドバー Contact） | `src/data/links.ts` | `contactEmail` |

- 配列の並び順がそのまま表示順．**新しいものは配列の先頭に追加**する
- 型は `src/data/types.ts` に定義（エディタで補完・型チェックが効く）
- `projects.ts` で `featured: true` にしたものはトップページの Recent Projects にも表示される
- 画像は `public/` に置き，`img: "ファイル名.webp"` で指定

### 例：国内学会発表を追加する

```ts
// src/data/publications.ts
export const domesticPresentations: Publication[] = [
  {
    authors: "本多賢, 共著者",
    title: "発表タイトル",
    venue: "研究会名, 会場, 日付, 2026.",
    badge: "略称2026",
    url: "https://example.com/",
  },
  // ...既存の項目
];
```

## Project Structure

```
├── src/
│   ├── data/                  # ← コンテンツはここ
│   │   ├── types.ts           # データの型定義
│   │   ├── publications.ts    # 業績
│   │   ├── career.ts          # 経歴・学会活動・学歴
│   │   ├── lectures.ts        # 担当授業
│   │   ├── projects.ts        # 研究プロジェクト
│   │   └── links.ts           # 外部リンク
│   ├── components/            # UI 部品（TimeLine, HorizontalCard, PublicationSection など）
│   ├── layouts/               # BaseLayout ほか
│   ├── pages/                 # 各ページ（data を読み込んで表示するだけ）
│   │   ├── index.astro        # Home
│   │   ├── about.astro        # About Me（CV）
│   │   ├── projects.astro
│   │   ├── publications.astro
│   │   ├── lectures.astro
│   │   └── others.astro
│   ├── styles/global.css
│   └── config.ts              # サイトタイトル等
├── public/                    # 画像・favicon
├── astro.config.mjs           # site / base（/mypage/）設定
└── .github/workflows/deploy.yml
```

### ページ追加

- `src/pages` に `.astro` の新規ファイルを追加
- `src/components/SideBarMenu.astro` にメニュー項目を追記（`id` と各ページの `sideBarActiveItemID` を一致させる）

## Deploy

[公式ドキュメント](https://docs.astro.build/ja/guides/deploy/github/)を参考に GitHub Pages へのデプロイ設定．

- `main` に `git push` すると GitHub Actions で自動デプロイ

### Trouble Shooting

- GitHub Pages にデプロイするとページと画像の PATH がおかしくなる
  - `astro.config.mjs` の `base` 設定と `const basePath = import.meta.env.BASE_URL;` の記述で解決
  - サイト内リンク・画像パスは必ず `basePath` を前置する
