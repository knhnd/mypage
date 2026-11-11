// 経歴・学会活動・学歴（About Me ページ）
// 新しいものを各配列の「先頭」に追加してください（上から順に表示されます）

import type { TimelineItem } from "./types";

/** プロフィール文 */
export const profileText =
  "I was born in Nishi-tokyo city, Tokyo, Japan. My research interests are related to Media Informatics, Database Systems and Human Computer Interaction.";

/** 職歴（Experience） */
export const experience: TimelineItem[] = [
  {
    title:
      "🎓 Assistant Professor at Faculty of Information Design, Kaishi Innovation University",
    subtitle: "開志創造大学 情報デザイン学部 助教",
    date: "From 2025-04-01 to present, Niigata, Japan (online)",
  },
  {
    title:
      "🎓 Part-time Lecturer at Faculty of Global Media Studies, Komazawa University",
    subtitle: "駒澤大学 グローバル・メディア・スタディーズ学部 非常勤講師",
    date: "From 2021-04-01 to present, Tokyo, Japan",
  },
  {
    title:
      "🎓 Part-time Lecturer at Faculty of Global Studies and Collaboration, Aoyama Gakuin University",
    subtitle: "青山学院大学 地球社会共生学部 非常勤講師",
    date: "From 2021-09-01 to present, Kanagawa, Japan",
  },
  {
    title:
      "🎓 Full-time Assistant at Faculty of Engineering, International Professional University of Technology",
    subtitle: "東京国際工科専門職大学 工科学部 助手",
    date: "From 2024-04-01 to 2025-03-31, Tokyo, Japan",
  },
  {
    title:
      "🎓 Full-time Assistant at Faculty of Global Media Studies, Komazawa University",
    subtitle: "駒澤大学 グローバル・メディア・スタディーズ学部 助手",
    date: "From 2021-04-01 to 2024-03-31, Tokyo, Japan",
  },
  {
    title: "💻 Software Engineer at Bitkey Inc.",
    subtitle: "株式会社ビットキー ソフトウェアエンジニア",
    date: "From 2019-09-01 to 2021-03-31, Tokyo, Japan",
  },
  {
    title: "💻 Researcher at OrangeTechLab Inc.",
    subtitle: "株式会社オレンジテクラボ 研究員",
    date: "From 2018-06-01 to 2020-03-31, Tokyo, Japan",
  },
  {
    title: "💻 Part-time Instructor at LITALICO Inc.",
    subtitle: "株式会社LITALICO 非常勤講師",
    date: "From 2015-04-01 to 2020-03-31, Tokyo, Japan",
  },
];

/** 学会活動（Academic Contributions） */
export const academicContributions: TimelineItem[] = [
  {
    title: "📚 電子情報通信学会データ工学研究会 幹事",
    subtitle: "2023-04-01 to 2024-03-25",
  },
  {
    title: "📚 FIT2023 プログラム委員",
    subtitle: "2022-10-01 to 2023-09-30",
  },
  {
    title: "📚 FIT2022 研究会担当委員",
    subtitle: "2021-10-01 to 2022-09-30",
  },
  {
    title: "📚 FIT2021 研究会担当委員",
    subtitle: "2020-10-01 to 2021-09-30",
  },
  {
    title: "📚 電子情報通信学会データ工学研究会 幹事補佐",
    subtitle: "2020-04-01 to 2023-03-31",
  },
];

/** 学歴（Education） */
export const education: TimelineItem[] = [
  {
    title:
      "🎓 Received a Ph.D. degree in Media from Graduate School of Global Media, Komazawa University",
    subtitle:
      "駒澤大学大学院グローバル・メディア研究科グローバル・メディア専攻 博士後期課程 修了（博士（メディア学））",
    date: "2020-03, Tokyo, Japan.",
  },
  {
    title:
      "🎓 Received a M.A. degree in Media from Graduate School of Global Media, Komazawa University",
    subtitle:
      "駒澤大学大学院グローバル・メディア研究科グローバル・メディア専攻 修士課程 修了（修士（メディア学））",
    date: "2017-03, Tokyo, Japan.",
  },
  {
    title:
      "🎓 Received a B.A. degree in Media from Faculty of Global Media Studies, Komazawa University",
    subtitle:
      "駒澤大学グローバル・メディアスタディーズ学部グローバル・メディア学科 卒業",
    date: "2015-03, Tokyo, Japan.",
  },
];
