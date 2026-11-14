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
| 名前・学位・職位・専門・研究テーマ | `src/data/profile.ts` | `name` ほか |
| 論文・発表 | **researchmap** で登録（下記） | — |
| 業績のバッジ（会議略称） | `src/data/badges.ts` | `badges` |
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

### 業績（論文・発表）の更新は researchmap で

業績は [researchmap](https://researchmap.jp/kenh) を正として，ビルド時に API から自動取得している．

1. researchmap で論文・発表を登録・修正（**公開** 設定にする）
2. GitHub の **Actions → Deploy to GitHub Pages → Run workflow** を実行（または main に push）
3. 数分でサイトに反映

- 取得処理: `scripts/fetch-researchmap.mjs`（`pnpm run build` の最初に実行）
- 取得結果: `src/data/researchmap/snapshot.json`（取得失敗時はこのスナップショットでビルド）
- 表示用の変換: `src/data/publications.ts`
- バッジ（会議略称）: `src/data/badges.ts` に `"業績ID": "DEIM2027"` の形で追加（業績 ID は researchmap の業績ページ URL 末尾の数字）
- API に繋がらない環境では `pnpm run build:offline` でスナップショットのみからビルドできる

## Project Structure

```
├── src/
│   ├── data/                  # ← コンテンツはここ
│   │   ├── types.ts           # データの型定義
│   │   ├── profile.ts         # 名前・学位・職位・研究テーマ
│   │   ├── publications.ts    # 業績（researchmap のデータを変換）
│   │   ├── badges.ts          # 業績のバッジ
│   │   ├── researchmap/snapshot.json  # researchmap から取得したデータ
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
├── scripts/fetch-researchmap.mjs  # researchmap API から業績を取得
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
