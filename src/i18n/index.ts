// 多言語化（日本語 / 英語）のヘルパー
// - 日本語がデフォルト: /mypage/about
// - 英語: /mypage/en/about

export const LANGS = ["ja", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "ja";

/** 言語ごとに書き分ける文字列。片方の言語だけで良いもの（論文名など）は string のまま書ける */
export type Localized = string | { ja: string; en: string };

/** Localized を指定言語の文字列にする */
export function t(value: Localized, lang: Lang): string;
export function t(value: Localized | undefined, lang: Lang): string | undefined;
export function t(value: Localized | undefined, lang: Lang) {
  if (value === undefined || typeof value === "string") return value;
  return value[lang];
}

/** getStaticPaths 用: ja は lang パラメータなし（/about）、en は /en/about */
export function langPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
    props: { lang },
  }));
}

/**
 * サイト内パスを言語付きで返す
 * @param slug 先頭スラッシュなし（例: "about"、トップは ""）
 */
export function localePath(lang: Lang, slug = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const prefix = lang === DEFAULT_LANG ? "" : `${lang}/`;
  return `${base}${prefix}${slug}`;
}

/** 現在の URL からページの slug（言語プレフィックスを除いたもの）を取り出す */
export function slugFromUrl(url: URL): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  let path = url.pathname.startsWith(base)
    ? url.pathname.slice(base.length)
    : url.pathname.replace(/^\//, "");
  for (const lang of LANGS) {
    if (lang === DEFAULT_LANG) continue;
    if (path === lang || path.startsWith(`${lang}/`)) {
      path = path.slice(lang.length).replace(/^\//, "");
    }
  }
  return path.replace(/\/$/, "");
}

// ---- 期間の表示 ----

const EN_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-04" や "2025-04-01" を言語に合わせて整形 */
export function formatYM(ym: string, lang: Lang): string {
  const [y, m] = ym.split("-").map(Number);
  if (!m) return String(y);
  return lang === "ja" ? `${y}年${m}月` : `${EN_MONTHS[m - 1]} ${y}`;
}

/**
 * 期間を整形
 * - end 省略: 単月（例: 2023年7月 / Jul 2023）
 * - end = "present": 現在まで（例: 2025年4月〜現在 / Apr 2025 – Present）
 */
export function formatPeriod(start: string, end: string | undefined, lang: Lang): string {
  const s = formatYM(start, lang);
  if (!end) return s;
  if (end === "present") return lang === "ja" ? `${s}〜現在` : `${s} – Present`;
  return lang === "ja" ? `${s}〜${formatYM(end, lang)}` : `${s} – ${formatYM(end, lang)}`;
}

// ---- 画面の固定文言 ----

export const ui = {
  ja: {
    siteTitle: "Ken HONDA WebPage",
    siteDescription: "本多賢の研究・仕事・活動を紹介する個人ページです。",
    "nav.home": "ホーム",
    "nav.about": "プロフィール",
    "nav.projects": "プロジェクト",
    "nav.publications": "業績",
    "nav.lectures": "担当授業",
    "nav.others": "その他",
    "nav.contact": "お問い合わせ",
    "home.researchThemes": "研究テーマ",
    "home.recentProjects": "最近のプロジェクト",
    "about.profile": "プロフィール",
    "about.experience": "職歴",
    "about.contributions": "学会活動",
    "about.education": "学歴",
    "projects.title": "プロジェクト（研究費）",
    "publications.title": "業績",
    "publications.journals": "論文誌",
    "publications.international": "国際会議",
    "publications.domestic": "国内学会発表",
    "lectures.title": "担当授業",
    "others.title": "その他",
    "others.links": "リンク",
    "lang.switch": "English",
    "lang.switchLabel": "Switch to English",
    "theme.toggle": "ライト/ダークモードを切り替える",
    "menu.open": "メニューを開く",
    "404.message": "お探しのページは見つかりませんでした。",
  },
  en: {
    siteTitle: "Ken HONDA WebPage",
    siteDescription: "This is my personal webpage for research, work and some activities.",
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.lectures": "Lectures",
    "nav.others": "Others",
    "nav.contact": "Contact",
    "home.researchThemes": "Research Themes",
    "home.recentProjects": "Recent Projects",
    "about.profile": "Profile",
    "about.experience": "Experience",
    "about.contributions": "Academic Contributions",
    "about.education": "Education",
    "projects.title": "Projects (Research Funding)",
    "publications.title": "Publications",
    "publications.journals": "Journal Papers",
    "publications.international": "International Conferences",
    "publications.domestic": "Domestic Conferences (in Japanese)",
    "lectures.title": "Lectures",
    "others.title": "Others",
    "others.links": "Links",
    "lang.switch": "日本語",
    "lang.switchLabel": "日本語に切り替える",
    "theme.toggle": "Toggle light/dark mode",
    "menu.open": "Open menu",
    "404.message": "The page you're looking for couldn't be found.",
  },
} as const;

export type UIKey = keyof (typeof ui)["ja"];

/** 画面の固定文言を取り出す関数を返す */
export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key];
}
