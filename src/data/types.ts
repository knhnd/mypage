// サイトに表示するデータの型定義
// 各データファイル（publications.ts など）はこの型に沿って書く
//
// Localized: 言語ごとに書き分ける文字列
//   - 日英で同じで良いもの（論文名など）→ "そのまま文字列"
//   - 書き分けるもの → { ja: "日本語", en: "English" }

import type { Localized } from "../i18n";
export type { Localized };

/** 論文・発表 1件（researchmap から自動生成。publications.ts を参照） */
export interface Publication {
  /** researchmap の業績 ID */
  id: string;
  /** 著者（カンマ区切り） */
  authors: Localized;
  title: Localized;
  /** 掲載誌・会議名・巻号・ページ・日付など（カード下段に表示） */
  venue: Localized;
  /** バッジ表示（badges.ts の指定、無ければ論文は DOI） */
  badge?: string;
  /** リンク先 URL */
  url: string;
  /** 並び替え用の日付（YYYY-MM-DD など） */
  date?: string;
}

/**
 * タイムライン形式の項目（経歴・学会活動・学歴・授業）
 * 期間は start / end に "YYYY-MM"（または "YYYY-MM-DD"）で書くと、言語ごとに自動で整形される
 *   - end なし → 単月（2023年7月 / Jul 2023）
 *   - end: "present" → 現在まで（2025年4月〜現在 / Apr 2025 – Present）
 */
export interface TimelineItem {
  /** 先頭に付ける絵文字（例: "🎓"） */
  icon?: string;
  title: Localized;
  subtitle?: Localized;
  start?: string;
  end?: string;
  /** 場所（例: { ja: "東京", en: "Tokyo, Japan" }） */
  place?: Localized;
  /** 開講・着任前の予定（期間の代わりに「YYYY年度開始予定」と表示） */
  planned?: boolean;
  /** 関連リンク */
  url?: string;
  /** リンクの表示名（例: "🌐 Website"） */
  linkName?: Localized;
}

/** 担当授業（所属機関ごと） */
export interface LectureGroup {
  institution: Localized;
  courses: TimelineItem[];
}

/** 研究プロジェクト（研究費など） */
export interface Project {
  title: Localized;
  /** 実施期間（例: "2026–2027"） */
  period?: string;
  /** public/ 以下の画像ファイル名（例: "vision.webp"） */
  img?: string;
  url?: string;
  /** キーワード（バッジ表示） */
  keywords?: Localized;
  /** トップページの「最近のプロジェクト」に表示するか */
  featured?: boolean;
}

/** 外部リンク */
export interface LinkItem {
  label: Localized;
  url: string;
}
