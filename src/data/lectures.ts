// 担当授業（Lectures ページ）
// 機関ごとにまとめています。機関の並び順・授業の並び順がそのまま表示順になります

import type { LectureGroup } from "./types";

export const lectureGroups: LectureGroup[] = [
  {
    institution: "開志創造大学",
    courses: [
      {
        title: "プログラミング基礎（Python）",
        subtitle: "情報デザイン学部",
        date: "From 2026-04 to present",
      },
      {
        title: "プログラミング発展（Python）",
        subtitle: "情報デザイン学部",
        date: "From 2026-04 to present",
      },
      {
        title: "Linux入門",
        subtitle: "情報デザイン学部",
        date: "From 2026-04 to present",
      },
      // 2027年度開講予定の授業
      {
        title: "Webデザイン",
        subtitle: "情報デザイン学部",
        date: "From 2027-04 to present",
      },
      {
        title: "データベース論",
        subtitle: "情報デザイン学部",
        date: "From 2027-04 to present",
      },
    ],
  },
  {
    institution: "駒澤大学",
    courses: [
      {
        title: "基礎セミナーa",
        subtitle: "グローバル・メディア・スタディーズ学部グローバルメディア学科",
        date: "From 2026-04 to present",
      },
      {
        title: "入門演習a",
        subtitle: "グローバル・メディア・スタディーズ学部グローバルメディア学科",
        date: "From 2026-04 to present",
      },
      {
        title: "応用演習a",
        subtitle: "グローバル・メディア・スタディーズ学部グローバルメディア学科",
        date: "From 2026-04 to present",
      },
      {
        title: "情報学基礎",
        subtitle: "グローバル・メディア・スタディーズ学部グローバルメディア学科",
        date: "From 2025-04 to present",
      },
      {
        title: "ICT基礎",
        subtitle: "グローバル・メディア・スタディーズ学部グローバルメディア学科",
        date: "From 2025-04 to present",
      },
      {
        title: "データサイエンス入門講座 統計とデータ分析の基礎",
        subtitle: "駒澤大学社会連携センター 公開講座",
        date: "From 2024-04 to 2024-08",
      },
      {
        title: "グローバル・メディア・スタディーズ概論",
        subtitle: "グローバル・メディア・スタディーズ学部グローバルメディア学科",
        date: "2023-07",
      },
      {
        title: "教養特殊講義：情報学とデザイン",
        subtitle: "全学部授業",
        date: "2022-01",
      },
    ],
  },
  {
    institution: "青山学院大学",
    courses: [
      {
        title: "Web入門と情報リテラシー",
        subtitle: "地球社会共生学部 地球社会共生学科",
        date: "From 2022-04 to 2025-03",
        url: "https://gsc-course-web.netlify.app/",
        linkName: "🌐 Website",
      },
      {
        title: "Webコミュニケーション",
        subtitle: "地球社会共生学部 地球社会共生学科",
        date: "From 2021-09 to present",
        url: "https://gsc-course-web.netlify.app/",
        linkName: "🌐 Website",
      },
    ],
  },
  {
    institution: "東京国際工科専門職大学",
    courses: [
      {
        title: "機械学習",
        subtitle: "東京国際工科専門職大学 工科学部 情報工学科 AIコース",
        date: "From 2024-09 to 2025-03",
      },
    ],
  },
];
