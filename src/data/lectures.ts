// 担当授業（Lectures ページ）
// 機関ごとにまとめています。機関の並び順・授業の並び順がそのまま表示順になります
// 開講前の授業は planned: true にすると「YYYY年度開講予定」と表示されます

import type { LectureGroup, Localized } from "./types";

const KAISHI_DEPT: Localized = {
  ja: "情報デザイン学部",
  en: "Faculty of Information Design",
};
const KOMAZAWA_GMS: Localized = {
  ja: "グローバル・メディア・スタディーズ学部 グローバル・メディア学科",
  en: "Department of Global Media, Faculty of Global Media Studies",
};
const AOYAMA_GSC: Localized = {
  ja: "地球社会共生学部 地球社会共生学科",
  en: "Department of Global Studies and Collaboration, Faculty of Global Studies and Collaboration",
};

export const lectureGroups: LectureGroup[] = [
  {
    institution: { ja: "開志創造大学", en: "Kaishi Innovation University" },
    courses: [
      {
        title: { ja: "プログラミング基礎（Python）", en: "Fundamentals of Programming (Python)" },
        subtitle: KAISHI_DEPT,
        start: "2026-04",
        end: "present",
      },
      {
        title: { ja: "プログラミング発展（Python）", en: "Advanced Programming (Python)" },
        subtitle: KAISHI_DEPT,
        start: "2026-04",
        end: "present",
      },
      {
        title: { ja: "Linux入門", en: "Introduction to Linux" },
        subtitle: KAISHI_DEPT,
        start: "2026-04",
        end: "present",
      },
      {
        title: { ja: "Webデザイン", en: "Web Design" },
        subtitle: KAISHI_DEPT,
        start: "2027-04",
        planned: true,
      },
      {
        title: { ja: "データベース論", en: "Database Systems" },
        subtitle: KAISHI_DEPT,
        start: "2027-04",
        planned: true,
      },
    ],
  },
  {
    institution: { ja: "駒澤大学", en: "Komazawa University" },
    courses: [
      {
        title: { ja: "基礎セミナーa", en: "Basic Seminar a" },
        subtitle: KOMAZAWA_GMS,
        start: "2026-04",
        end: "present",
      },
      {
        title: { ja: "入門演習a", en: "Introductory Seminar a" },
        subtitle: KOMAZAWA_GMS,
        start: "2026-04",
        end: "present",
      },
      {
        title: { ja: "応用演習a", en: "Applied Seminar a" },
        subtitle: KOMAZAWA_GMS,
        start: "2026-04",
        end: "present",
      },
      {
        title: { ja: "情報学基礎", en: "Fundamentals of Informatics" },
        subtitle: KOMAZAWA_GMS,
        start: "2025-04",
        end: "present",
      },
      {
        title: { ja: "ICT基礎", en: "ICT Fundamentals" },
        subtitle: KOMAZAWA_GMS,
        start: "2025-04",
        end: "present",
      },
      {
        title: {
          ja: "データサイエンス入門講座 統計とデータ分析の基礎",
          en: "Introduction to Data Science: Fundamentals of Statistics and Data Analysis",
        },
        subtitle: {
          ja: "駒澤大学社会連携センター 公開講座",
          en: "Extension Course, Center for Social Collaboration, Komazawa University",
        },
        start: "2024-04",
        end: "2024-08",
      },
      {
        title: {
          ja: "グローバル・メディア・スタディーズ概論",
          en: "Introduction to Global Media Studies",
        },
        subtitle: KOMAZAWA_GMS,
        start: "2023-07",
      },
      {
        title: {
          ja: "教養特殊講義：情報学とデザイン",
          en: "Special Lecture in Liberal Arts: Informatics and Design",
        },
        subtitle: { ja: "全学部授業", en: "University-wide course" },
        start: "2022-01",
      },
    ],
  },
  {
    institution: { ja: "青山学院大学", en: "Aoyama Gakuin University" },
    courses: [
      {
        title: {
          ja: "Web入門と情報リテラシー",
          en: "Introduction to the Web and Information Literacy",
        },
        subtitle: AOYAMA_GSC,
        start: "2022-04",
        end: "2025-03",
        url: "https://gsc-course-web.netlify.app/",
        linkName: "🌐 Website",
      },
      {
        title: { ja: "Webコミュニケーション", en: "Web Communication" },
        subtitle: AOYAMA_GSC,
        start: "2021-09",
        end: "present",
        url: "https://gsc-course-web.netlify.app/",
        linkName: "🌐 Website",
      },
    ],
  },
  {
    institution: {
      ja: "東京国際工科専門職大学",
      en: "International Professional University of Technology",
    },
    courses: [
      {
        title: { ja: "機械学習", en: "Machine Learning" },
        subtitle: {
          ja: "工科学部 情報工学科 AIコース",
          en: "AI Course, Department of Information Technology, Faculty of Engineering",
        },
        start: "2024-09",
        end: "2025-03",
      },
    ],
  },
];
