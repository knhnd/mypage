// 研究プロジェクト（Projects ページ）
// featured: true のものはトップページの「最近のプロジェクト」にも表示されます

import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: {
      ja: "情報アクセスを支援する信憑性評価アーキテクチャの実装と応用",
      en: "An Implementation and Application of a Credibility Evaluation Architecture for Supporting Information Access",
    },
    period: "2026–2027",
    img: "vision.webp",
    url: "https://www.shigaku.go.jp/files/s_wakatejosei_saitaku2026.pdf",
    keywords: {
      ja: "デジタルソーシャルトラスト，データサイエンス，ソーシャルコンピューティング",
      en: "Digital Social Trust, Data Science, Social Computing",
    },
    featured: true,
  },
];
