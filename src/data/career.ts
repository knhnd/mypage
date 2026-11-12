// 経歴・学会活動（About ページ）
// 新しいものを各配列の「先頭」に追加してください（上から順に表示されます）
// プロフィール文は profile.ts にあります

import type { Localized, TimelineItem } from "./types";

const TOKYO: Localized = { ja: "東京", en: "Tokyo, Japan" };
const KANAGAWA: Localized = { ja: "神奈川", en: "Kanagawa, Japan" };

/** 職歴 */
export const experience: TimelineItem[] = [
  {
    icon: "🎓",
    title: {
      ja: "開志創造大学 情報デザイン学部 助教",
      en: "Assistant Professor at Faculty of Information Design, Kaishi Innovation University",
    },
    start: "2025-04-01",
    end: "present",
    place: { ja: "新潟（オンライン）", en: "Niigata, Japan (online)" },
  },
  {
    icon: "🎓",
    title: {
      ja: "駒澤大学 グローバル・メディア・スタディーズ学部 非常勤講師",
      en: "Part-time Lecturer at Faculty of Global Media Studies, Komazawa University",
    },
    start: "2021-04-01",
    end: "present",
    place: TOKYO,
  },
  {
    icon: "🎓",
    title: {
      ja: "青山学院大学 地球社会共生学部 非常勤講師",
      en: "Part-time Lecturer at Faculty of Global Studies and Collaboration, Aoyama Gakuin University",
    },
    start: "2021-09-01",
    end: "present",
    place: KANAGAWA,
  },
  {
    icon: "🎓",
    title: {
      ja: "東京国際工科専門職大学 工科学部 助手",
      en: "Full-time Assistant at Faculty of Engineering, International Professional University of Technology",
    },
    start: "2024-04-01",
    end: "2025-03-31",
    place: TOKYO,
  },
  {
    icon: "🎓",
    title: {
      ja: "駒澤大学 グローバル・メディア・スタディーズ学部 助手",
      en: "Full-time Assistant at Faculty of Global Media Studies, Komazawa University",
    },
    start: "2021-04-01",
    end: "2024-03-31",
    place: TOKYO,
  },
  {
    icon: "💻",
    title: {
      ja: "株式会社ビットキー ソフトウェアエンジニア",
      en: "Software Engineer at Bitkey Inc.",
    },
    start: "2019-09-01",
    end: "2021-03-31",
    place: TOKYO,
  },
  {
    icon: "💻",
    title: {
      ja: "株式会社オレンジテクラボ 研究員",
      en: "Researcher at OrangeTechLab Inc.",
    },
    start: "2018-06-01",
    end: "2020-03-31",
    place: TOKYO,
  },
  {
    icon: "💻",
    title: {
      ja: "株式会社LITALICO 非常勤講師",
      en: "Part-time Instructor at LITALICO Inc.",
    },
    start: "2015-04-01",
    end: "2020-03-31",
    place: TOKYO,
  },
];

/** 学会活動 */
export const academicContributions: TimelineItem[] = [
  {
    icon: "📚",
    title: {
      ja: "電子情報通信学会 データ工学研究会 幹事",
      en: "Secretary, IEICE Technical Committee on Data Engineering",
    },
    start: "2023-04-01",
    end: "2024-03-25",
  },
  {
    icon: "📚",
    title: {
      ja: "FIT2023 プログラム委員",
      en: "Program Committee Member, FIT2023",
    },
    start: "2022-10-01",
    end: "2023-09-30",
  },
  {
    icon: "📚",
    title: {
      ja: "FIT2022 研究会担当委員",
      en: "Technical Committee Liaison, FIT2022",
    },
    start: "2021-10-01",
    end: "2022-09-30",
  },
  {
    icon: "📚",
    title: {
      ja: "FIT2021 研究会担当委員",
      en: "Technical Committee Liaison, FIT2021",
    },
    start: "2020-10-01",
    end: "2021-09-30",
  },
  {
    icon: "📚",
    title: {
      ja: "電子情報通信学会 データ工学研究会 幹事補佐",
      en: "Assistant Secretary, IEICE Technical Committee on Data Engineering",
    },
    start: "2020-04-01",
    end: "2023-03-31",
  },
];
