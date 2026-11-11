# CLAUDE.md

本多賢の個人ポートフォリオサイト（Astro + Astrofy テンプレート，GitHub Pages で公開）．

## 基本方針

- コンテンツ更新は **`src/data/*.ts` だけを編集する**．`.astro` ファイルにデータを直書きしない
- 新しい項目は各配列の **先頭** に追加する（配列順 = 表示順，新しい順）
- 既存の書式に合わせる
  - 英語の国際業績は `venue` 末尾を `, 年.` で終える
  - 国内発表は `会議名, 会場, 日付, 年.` の形式．`badge` は会議略称＋年（例: `DEIM2024`）
  - 授業・経歴の期間は `From YYYY-MM to present` / `From YYYY-MM to YYYY-MM` 形式
- 論文タイトルや固有名詞はユーザーから渡された表記を **そのまま** 使う（例:「ビル大学」は正式タイトルなので直さない）
- URL は推測で作らない．不明なら確認するか，公式ページを確認してから入れる

## 作業手順

1. `src/data/` の該当ファイルを編集
2. `pnpm run build` でビルドが通ることを確認
3. `main` に直接 commit & push（GitHub Actions で自動デプロイされる）
   - コミットメッセージは日本語で簡潔に（例: `学会発表を追加: DEIM2027`）

## 構成メモ

- 型定義: `src/data/types.ts`
- サイトは `/mypage/` 配下で配信される．内部リンク・画像には `import.meta.env.BASE_URL` を前置する
- パッケージマネージャは pnpm のみ（`package-lock.json` を作らない）
- Astro 5 + `@astrojs/tailwind`（Tailwind 3 / daisyUI 4）．`@astrojs/tailwind` は Astro 6 以降に非対応のため，Astro 6+ へ上げる場合は Tailwind 4（`@tailwindcss/vite`）+ daisyUI 5 への移行が必要
- `pnpm.overrides` は脆弱性対策．依存を更新したら `pnpm audit` で確認する
- About ページ（`sideBarActiveItemID="about"`）ではサイドバーにプロフィール写真が表示される（`SideBar.astro`）
- サイドバーのメニューは `src/components/SideBarMenu.astro`．各ページの `sideBarActiveItemID` とメニューの `id` を一致させる
