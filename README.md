# Ken Honda Web Site

This is my portfolio web site for research, work and some activities.

- URL : https://kenpage.netlify.app/
- Netlify MyPage : https://app.netlify.com/teams/knhnd/overview

## HUGO

[Go 言語](https://golang.org/)製の [Static Site Generator (SSG, 静的サイトジェネレータ)](https://jamstack.org/generators/) である **[HUGO](https://gohugo.io/)** を用いて実装．この README では主に HUGO を用いた開発方法について記述する．

### HUGO Setup

[HUGO Quick Start](https://gohugo.io/getting-started/quick-start/)に沿ってすすめる．

#### 1. HUGO のインストール

- `brew install hugo`
- `hugo version`
- バージョンが表示されれば成功

#### 2. プロジェクトの作成

HUGO はデフォルトで様々なテーマが用意されている．  
[themes.gohugo.io](https://themes.gohugo.io/) ですべての公式テーマを探すことができる．  
今回は研究者向けのポートフォリオ作成に適した [Academic](https://themes.gohugo.io/themes/starter-hugo-academic/) というテーマを採用．

Academic を利用したプロジェクトの作成は Academic 公式の [Git リポジトリ](https://github.com/wowchemy/starter-hugo-academic) をクローンして編集する．

- 任意のディレクトリで `git clone https://github.com/sourcethemes/academic-kickstart.git ProjectName`
- `cd ProjectName`
- `git submodule update --init --recursive` でテーマを initialize する

#### 3. サーバの起動

- `hugo server -D`

#### 4. 設定変更

- `config/_default` 以下の `yaml` ファイルを編集する
  - `config.yaml` : サイト全体の設定
  - `languages.yaml` : 言語関連の設定
  - `menus.yaml` : トップメニューの設定
  - `params.yaml` : その他の設定

## Edit

内容を編集する際の対応ファイル一覧

- Biography: `home > _index.md`
- Experience: `home > experience.md`
- Academic Contribution: `home > academic.md`
## Build

- プロジェクトルートで `hugo server -D` を実行
- プロジェクトルートに公開用の `public` フォルダが生成されれば OK
- 以降，更新時は必ず build を行う

## Deploy

基本的に，公式でサポートされている or 推奨されている方法で行うのがベストなため [Netlify](https://app.netlify.com) にデプロイしてホスティングする．

- [公式ドキュメント](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)参照
  - GitHub のリポジトリと紐付けておけば push と同時に自動でデプロイされる
  - Netlify 側の環境変数の設定で HUGO のバージョンを指定する
  - `Deploy Setting` から `Environment` へ
  - `HUGO_VERSION` に `v0.87.0`
- GitHub に push で [Netlify](https://app.netlify.com/teams/knhnd/overview) にデプロイ
- ドキュメントどおりにやると爆速でデプロイできる

## Links

- [Hugo](https://gohugo.io/)
- [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Hugo Themes](https://themes.gohugo.io/)
- [Hugo Themes Academic](https://themes.gohugo.io/themes/hugo-academic/)
- [Hugo Academic GitHub](https://github.com/wowchemy/wowchemy-hugo-themes)
- [Hugo Academic Demo](https://academic-demo.netlify.app/)
- [wochemy Document](https://wowchemy.com/)

---
