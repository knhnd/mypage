# CLAUDE.md

本多賢の個人ポートフォリオサイト（Astro + Astrofy テンプレート，GitHub Pages で公開）．日英2言語（日本語がデフォルト）．

## 基本方針

- コンテンツ更新は **`src/data/*.ts` だけを編集する**．`.astro` ファイルにデータを直書きしない
- 新しい項目は各配列の **先頭** に追加する（配列順 = 表示順，新しい順）
- **業績（論文・発表）は researchmap（https://researchmap.jp/kenh）が正**．mypage に直書きしない
  - ビルド時（`pnpm run build`）に `scripts/fetch-researchmap.mjs` が API から公開業績を取得し `src/data/researchmap/snapshot.json` を更新，`src/data/publications.ts` が表示用に変換する
  - 業績の追加・修正の依頼が来たら，researchmap 側で登録・修正するようユーザーに案内する（mypage 側のコードやスナップショットを手で書き換えない）
  - researchmap 更新後の反映: GitHub の Actions →「Deploy to GitHub Pages」→「Run workflow」，または main への push．定期実行は入れない（ユーザーの方針）
  - 取得に失敗・0 件のときはコミット済みのスナップショットでビルドする（ローカル環境は API に繋がらないことがある．`pnpm run build:offline` でスナップショットのみでビルド）
  - バッジ（会議略称）は `src/data/badges.ts` に researchmap の業績 ID をキーにして手動で追加．指定が無ければ論文は DOI，発表はバッジなし
  - 区分: 論文誌 / 国際会議論文 / その他の論文 / 国際発表 / 国内発表．0 件の区分は非表示．国際・国内は researchmap の「国際・国内」欄（`is_international_presentation`）が設定されていればそれに従い，未設定なら会議名に日本語を含まないものを国際とみなす
  - researchmap の会議名には会議名だけを入れてもらう（日付・会場は mypage 側で開催日から自動表示するため，会議名に含めると二重になる）
- 既存の書式に合わせる
  - 授業・経歴の期間は `start` / `end` に `"YYYY-MM"`（または `"YYYY-MM-DD"`）で書く．現在までなら `end: "present"`，単月なら `end` を省略，開始前なら `planned: true`．表示は言語ごとに自動整形される
- 日英対応（`src/i18n/index.ts`）
  - 言語で書き分ける項目は `{ ja: "...", en: "..." }`（型 `Localized`）．日英共通で良いものは文字列のまま
  - 業績は researchmap の日本語・英語の登録をそれぞれのページで使う（片方しか無ければもう片方）
  - 新しい項目を追加するときは **ja と en の両方** を書く．英訳がユーザーから与えられていない場合は下訳を作り，下訳であることをユーザーに伝えて確認してもらう
  - 見出し・メニューなどの固定文言は `src/i18n/index.ts` の `ui`．サイドバーのメニュー名とページ内の見出しはデザイン上，日本語版も英語表記（本文・項目は日本語）
- 論文タイトルや固有名詞はユーザーから渡された表記を **そのまま** 使う（例:「ビル大学」は正式タイトルなので直さない）
- URL は推測で作らない．不明なら確認するか，公式ページを確認してから入れる

## 作業手順

1. `src/data/` の該当ファイルを編集
2. `pnpm run build` でビルドが通ることを確認
3. `main` に直接 commit & push（GitHub Actions で自動デプロイされる）
   - コミットメッセージは日本語で簡潔に（例: `学会発表を追加: DEIM2027`）

## 構成メモ

- 型定義: `src/data/types.ts`
- ページは `src/pages/[...lang]/*.astro` の1ファイルから日本語（`/mypage/about`）と英語（`/mypage/en/about`）を生成（`getStaticPaths = langPaths`）．新しいページもこの形で作り，サイト内リンクは `localePath(lang, "slug")` を使う
- 言語切り替えは `LangToggle.astro`（PC はサイドバー右上，スマホはヘッダー右で `EN`/`JA` 表示）
- サイトは `/mypage/` 配下で配信される．内部リンク・画像には `import.meta.env.BASE_URL` を前置する
- パッケージマネージャは pnpm のみ（`package-lock.json` を作らない）
- Astro 7（Node 22.23.4 以上）+ Tailwind CSS 4（`@tailwindcss/vite`）+ daisyUI 5（lofi テーマ）
  - Tailwind / daisyUI の設定は `src/styles/global.css`（`tailwind.config` は無い）
  - Astro 7 の Rust コンパイラは閉じタグ漏れをエラーにする．`.astro` のタグは必ず閉じる
- 依存を更新したら `pnpm audit` で確認する
- CSS は `build.inlineStylesheets: 'always'` で各ページの HTML に埋め込んでいる（GitHub Pages の HTML キャッシュ（最大10分）で，デプロイ直後に古い HTML が削除済みの CSS を参照して表示が崩れるのを防ぐため）．外さないこと
- ダークモード: ライト=lofi / ダーク=black（daisyUI テーマ）
  - black は真っ黒すぎるため，`global.css` の `@plugin "daisyui/theme"` でダークグレー（本文 #1f1f1f，サイドバー #262626）に上書きしている．色を変えるときはここを編集
  - 初期化・切り替え・ページ遷移後の再適用は `ThemeScript.astro`（`<head>` 内インライン），ボタンは `ThemeToggle.astro`（PC はサイドバー右上，スマホはヘッダー右）
  - ダーク時だけのスタイルは `dark:` バリアント（`global.css` で `data-theme=black` に連動）
  - 色は `bg-base-*` / `text-base-content` などテーマ変数を使い，白黒の直指定は避ける
- 見た目に影響する変更は，ブランチで作業し移行前後のスクリーンショットを比較してから main に入れる
- プライバシーのため，顔写真は載せない（サイドバーのアイコンは全ページ猫の `icon.webp`）．学歴・プロフィール文（出身地など）も載せない
- サイドバーのメニューは `src/components/SideBarMenu.astro`．各ページの `sideBarActiveItemID` とメニューの `id` を一致させる
