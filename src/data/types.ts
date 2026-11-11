// サイトに表示するデータの型定義
// 各データファイル（publications.ts など）はこの型に沿って書く

/** 論文・発表 1件 */
export interface Publication {
  /** 著者（カンマ区切りの文字列） */
  authors: string;
  /** タイトル */
  title: string;
  /** 掲載誌・会議名・場所・日付など（カード下段に表示） */
  venue: string;
  /** バッジ表示（会議略称や DOI など） */
  badge?: string;
  /** リンク先 URL */
  url?: string;
}

/** タイムライン形式の項目（経歴・学歴・授業など） */
export interface TimelineItem {
  title: string;
  subtitle?: string;
  /** 期間（例: "From 2025-04 to present"） */
  date?: string;
  /** 関連リンク */
  url?: string;
  /** リンクの表示名（例: "🌐 Website"） */
  linkName?: string;
}

/** 担当授業（所属機関ごと） */
export interface LectureGroup {
  institution: string;
  courses: TimelineItem[];
}

/** 研究プロジェクト（研究費など） */
export interface Project {
  title: string;
  /** 英語タイトルや概要 */
  desc: string;
  /** public/ 以下の画像ファイル名（例: "vision.webp"） */
  img?: string;
  url?: string;
  badge?: string;
  /** トップページの Recent Projects に表示するか */
  featured?: boolean;
}

/** 外部リンク */
export interface LinkItem {
  label: string;
  url: string;
}
