# Ken HONDA Webpage

This is my personal web page for research, work and some activities.

- URL: `https://knhnd.github.io/mypage/`

## Astro

Web フレームワーク [Astro](https://astro.build/) で実装．テンプレートテーマに [Astrofy](https://astro.build/themes/details/astrofy-personal-porfolio-website-template/) を採用．

- Astro 7 + Tailwind CSS 4（`@tailwindcss/vite`）+ daisyUI 5（テーマ: lofi）
- Node.js 22.23.4 以上
- ダークモード対応（OS 設定に自動追従＋手動切り替え．選択はブラウザに保存）
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
| 名前・職位・専門・研究テーマ・プロフィール文 | `src/data/profile.ts` | `name` ほか |
| 論文誌 | `src/data/publications.ts` | `journals` |
| 国際会議 | `src/data/publications.ts` | `internationalConferences` |
| 国内学会発表 | `src/data/publications.ts` | `domesticPresentations` |
| 職歴 | `src/data/career.ts` | `experience` |
| 学会活動 | `src/data/career.ts` | `academicContributions` |
| 担当授業 | `src/data/lectures.ts` | `lectureGroups` |
| 研究プロジェクト | `src/data/projects.ts` | `projects` |
| 外部リンク | `src/data/links.ts` | `links` |
| 連絡先メール（サイドバー Contact） | `src/data/links.ts` | `contactEmail` |

- 配列の並び順がそのまま表示順．**新しいものは配列の先頭に追加**する
- 日英で書き分ける項目は `{ ja: "日本語", en: "English" }`，共通で良いもの（論文名など）は文字列のまま
- 期間は `start: "2025-04", end: "present"` のように書くと「2025年4月〜現在 / Apr 2025 – Present」と自動整形される（開始前の授業は `planned: true`）
- 型は `src/data/types.ts` に定義（エディタで補完・型チェックが効く）
- `projects.ts` で `featured: true` にしたものはトップページの「最近のプロジェクト」にも表示される
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
│   │   ├── profile.ts         # 名前・職位・研究テーマ・プロフィール文
│   │   ├── publications.ts    # 業績
│   │   ├── career.ts          # 経歴・学会活動
│   │   ├── lectures.ts        # 担当授業
│   │   ├── projects.ts        # 研究プロジェクト
│   │   └── links.ts           # 外部リンク
│   ├── i18n/index.ts          # 日英対応（UI 文言・パス・期間の整形）
│   ├── components/            # UI 部品（TimeLine, HorizontalCard, PublicationSection など）
│   ├── layouts/               # BaseLayout
│   ├── pages/
│   │   ├── [...lang]/         # 1ファイルから日本語（/）と英語（/en/）の両方を生成
│   │   │   ├── index.astro    # Home
│   │   │   ├── about.astro    # About Me（CV）
│   │   │   ├── projects.astro
│   │   │   ├── publications.astro
│   │   │   ├── lectures.astro
│   │   │   └── others.astro
│   │   └── 404.astro
│   ├── styles/global.css      # Tailwind / daisyUI の読み込みと設定
│   └── config.ts              # ページ遷移アニメーションの設定
├── public/                    # 画像・favicon
├── astro.config.mjs           # site / base（/mypage/）設定，Tailwind の Vite プラグイン
└── .github/workflows/deploy.yml
```

### ページ追加

- `src/pages/[...lang]/` に `.astro` を追加（既存ページと同じく `export const getStaticPaths = langPaths;`）
- `src/components/SideBarMenu.astro` の `items` にメニュー項目を追記し，`src/i18n/index.ts` の `ui` にラベルを日英で追加

## Deploy

[公式ドキュメント](https://docs.astro.build/ja/guides/deploy/github/)を参考に GitHub Pages へのデプロイ設定．

- `main` に `git push` すると GitHub Actions で自動デプロイ

### Trouble Shooting

- GitHub Pages にデプロイするとページと画像の PATH がおかしくなる
  - `astro.config.mjs` の `base` 設定と `const basePath = import.meta.env.BASE_URL;` の記述で解決
  - サイト内リンク・画像パスは必ず `basePath` を前置する
