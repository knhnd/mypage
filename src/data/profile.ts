// トップページのプロフィール

import type { Localized } from "./types";

export const name: Localized = { ja: "本多 賢", en: "Ken Honda" };

export const degree: Localized = {
  ja: "博士（メディア学）",
  en: "Ph.D. (Media Studies)",
};

/** 現在の所属・職位 */
export const position: Localized = {
  ja: "開志創造大学 情報デザイン学部 助教",
  en: "Assistant Professor at Faculty of Information Design, Kaishi Innovation University",
};

export const specialty: Localized = {
  ja: "専門：メディア情報学，データベース，HCI",
  en: "Specialty: Media Informatics, Database Systems, Human Computer Interaction",
};

/** 研究テーマ（トップページ） */
export const researchThemes: Localized[] = [
  { ja: "メディア情報処理", en: "Media Information Processing" },
  { ja: "ソーシャルコンピューティング", en: "Social Computing" },
  { ja: "デジタルソーシャルトラスト", en: "Digital Social Trust" },
];
