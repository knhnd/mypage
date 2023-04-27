# Ken Honda Web Site

This is my portfolio web site for research, work and some activities.

- URL : https://kenpage.netlify.app/
- Netlify MyPage : https://app.netlify.com/teams/knhnd/overview

## HUGO

[Go 言語](https://golang.org/)製の Static Site Generator (SSG, 静的サイトジェネレータ)である **[HUGO](https://gohugo.io/)** を用いて実装．この README では主に HUGO を用いた開発方法について記述する．

### HUGO Setup

[HUGO Quick Start](https://gohugo.io/getting-started/quick-start/)に沿ってすすめる．

#### 1. HUGO のインストール

- `brew install hugo`
- `hugo version`
  - バージョンが表示されれば成功

#### 2. プロジェクトの作成
  
[themes.gohugo.io](https://themes.gohugo.io/) で公式テーマを探すことができる．研究者向けのポートフォリオ作成に適した [Academic](https://themes.gohugo.io/themes/starter-hugo-academic/) というテーマを採用．Academic を利用したプロジェクトの作成は Academic 公式の [Git リポジトリ](https://github.com/wowchemy/starter-hugo-academic) をクローンして編集する．

- `git clone https://github.com/sourcethemes/academic-kickstart.git mypage`
  - プロジェクト名(mypage)は任意
- `cd mypage`
- `git submodule update --init --recursive` でテーマを initialize

#### 3. ローカルサーバの起動

- `hugo server -D`

## Config

設定の変更方法.

- `config/_default` 以下の `yaml` ファイルを編集
  - `config.yaml` : サイト全体の設定
  - `languages.yaml` : 言語関連の設定
  - `menus.yaml` : トップメニューの設定
  - `params.yaml` : その他の設定

## Edit

内容を編集する際の対応ファイル一覧．

- Biography: `content > authors > ken > _index.md`
- Publications: `content > publications > journal or paper`
- Experience: `content > home > experience.md`
- Academic Contribution: `content > home > academic.md`

## Build

- プロジェクトルートで `hugo -D` を実行
- プロジェクトルートに公開用の `public` フォルダが生成されれば OK
- 以降，更新時は必ず build

## Deploy

[公式ドキュメント](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)を参考に [Netlify](https://app.netlify.com) にデプロイ．


- GitHub のリポジトリと紐付けておけば push と同時に自動でデプロイされる
- Netlify 側の環境変数の設定で HUGO のバージョンを指定する
  - `Deploy Setting` から `Environment` へ
  - `HUGO_VERSION` に `v0.87.0`
- GitHub に push でデプロイ
  - ドキュメントどおりにやると爆速でデプロイできる

## Links

- [Hugo Themes](https://themes.gohugo.io/)
- [Hugo Academic GitHub](https://github.com/wowchemy/wowchemy-hugo-themes)

---
