// 業績リスト（researchmap から自動生成）
//
// ★ 業績の追加・修正は researchmap（https://researchmap.jp/kenh）で行う
//   - ビルド時に scripts/fetch-researchmap.mjs が最新データを取得し snapshot.json を更新する
//   - このファイルは researchmap のデータを表示用に変換するだけ。業績を直書きしない
//   - バッジ（会議略称）は badges.ts で手動指定

import snapshot from "./researchmap/snapshot.json";
import { badges } from "./badges";
import type { Localized, Publication } from "./types";

const PERMALINK = "kenh";

// ---- researchmap のデータ型（使う項目のみ） ----
type RMText = { ja?: string; en?: string };
type RMPeople = { ja?: { name: string }[]; en?: { name: string }[] };
interface RMItem {
  "rm:id": string;
  "@type": string;
  display?: string;
  publication_date?: string;
  see_also?: { "@id": string; label?: string }[];
  identifiers?: { doi?: string[] };
}
interface RMPaper extends RMItem {
  paper_title?: RMText;
  authors?: RMPeople;
  publication_name?: RMText;
  volume?: string;
  number?: string;
  starting_page?: string;
  ending_page?: string;
  published_paper_type?: string;
}
interface RMPresentation extends RMItem {
  presentation_title?: RMText;
  presenters?: RMPeople;
  event?: RMText;
  from_event_date?: string;
  to_event_date?: string;
  languages?: string[];
  /** researchmap の「国際・国内」（未設定の場合あり） */
  is_international_presentation?: boolean;
}

// ---- 変換ヘルパー ----

const clean = (s: string | undefined) => s?.replace(/\s+/g, " ").replace(/[\s,、]+$/, "").trim();

/** ja / en の片方しか無い場合はもう片方で補う */
function localize(v: RMText | undefined): Localized {
  const ja = clean(v?.ja) || clean(v?.en) || "";
  const en = clean(v?.en) || clean(v?.ja) || "";
  return ja === en ? ja : { ja, en };
}

/** 日本語の氏名は空白を詰める（「本多 賢」→「本多賢」）。英語名はそのまま */
const normalizeName = (name: string) => (hasJapanese(name) ? name.replace(/\s+/g, "") : name);

function people(v: RMPeople | undefined): Localized {
  const join = (list?: { name: string }[]) =>
    list?.map((p) => clean(p.name)).filter((n): n is string => !!n).map(normalizeName).join(", ");
  return localize({ ja: join(v?.ja), en: join(v?.en) });
}

/** Localized の各言語に同じ加工をする */
function mapL(v: Localized, fn: (s: string, lang: "ja" | "en") => string): Localized {
  if (typeof v === "string") {
    const ja = fn(v, "ja");
    const en = fn(v, "en");
    return ja === en ? ja : { ja, en };
  }
  return { ja: fn(v.ja, "ja"), en: fn(v.en, "en") };
}

const EN_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const parts = (d: string) => d.split("-").map(Number) as [number, number?, number?];

/** 日付（範囲）を言語に合わせて整形: 2026年9月16日〜18日 / Sep 16–18, 2026 */
function formatDateRange(from: string | undefined, to: string | undefined, lang: "ja" | "en"): string {
  if (!from) return "";
  // 終了日が開始日より粗い（例: 開始 "2018-06-04"・終了 "2018"）場合は開始日のみ表示
  if (to && to.split("-").length < from.split("-").length) to = undefined;
  const [y1, m1, d1] = parts(from);
  const [y2, m2, d2] = to ? parts(to) : [y1, m1, d1];
  if (lang === "ja") {
    const one = (y: number, m?: number, d?: number) => `${y}年` + (m ? `${m}月` : "") + (d ? `${d}日` : "");
    if (!to || to === from) return one(y1, m1, d1);
    if (y1 === y2 && m1 === m2) return `${one(y1, m1, d1)}〜${d2}日`;
    if (y1 === y2) return `${one(y1, m1, d1)}〜${m2}月${d2 ?? ""}${d2 ? "日" : ""}`;
    return `${one(y1, m1, d1)}〜${one(y2, m2, d2)}`;
  }
  const one = (y: number, m?: number, d?: number, withYear = true) =>
    [m ? EN_MONTHS[m - 1] : "", d ?? ""].filter(Boolean).join(" ") + (withYear ? (m ? `, ${y}` : `${y}`) : "");
  if (!to || to === from) return one(y1, m1, d1);
  if (y1 === y2 && m1 === m2) return `${EN_MONTHS[m1! - 1]} ${d1}–${d2}, ${y1}`;
  if (y1 === y2) return `${one(y1, m1, d1, false)} – ${one(y2, m2, d2)}`;
  return `${one(y1, m1, d1)} – ${one(y2, m2, d2)}`;
}

/** リンク先: DOI → 関連 URL → researchmap の業績ページ */
function linkOf(item: RMItem): string {
  const doi = item.identifiers?.doi?.[0];
  if (doi) return `https://doi.org/${doi}`;
  const seeAlso = item.see_also?.[0]?.["@id"];
  if (seeAlso) return seeAlso;
  return `https://researchmap.jp/${PERMALINK}/${item["@type"]}/${item["rm:id"]}`;
}

const isPublic = (item: RMItem) => !item.display || item.display === "disclosed";
const byDateDesc = (a: Publication, b: Publication) => (b.date ?? "").localeCompare(a.date ?? "");
const hasJapanese = (s?: string) => !!s && /[぀-ヿ㐀-鿿]/.test(s);

// ---- 論文 ----

function toPaper(p: RMPaper): Publication {
  const year = p.publication_date?.slice(0, 4);
  const pages = p.starting_page
    ? `pp.${p.starting_page}${p.ending_page ? `-${p.ending_page}` : ""}`
    : undefined;
  const venue = mapL(localize(p.publication_name), (name) =>
    [name, p.volume && !name.includes(p.volume) ? `Vol.${p.volume}` : undefined, p.number && `No.${p.number}`, pages, year]
      .filter(Boolean)
      .join(", ") + "."
  );
  const doi = p.identifiers?.doi?.[0];
  return {
    id: p["rm:id"],
    authors: people(p.authors),
    title: localize(p.paper_title),
    venue,
    badge: badges[p["rm:id"]] ?? (doi ? `DOI: ${doi}` : undefined),
    url: linkOf(p),
    date: p.publication_date,
  };
}

// ---- 発表 ----

function toPresentation(p: RMPresentation): Publication {
  const event = localize(p.event);
  const venue = mapL(event, (name, lang) =>
    [name, formatDateRange(p.from_event_date ?? p.publication_date, p.to_event_date, lang)].filter(Boolean).join(", ") +
    "."
  );
  return {
    id: p["rm:id"],
    authors: people(p.presenters),
    title: localize(p.presentation_title),
    venue,
    badge: badges[p["rm:id"]],
    url: linkOf(p),
    date: p.from_event_date ?? p.publication_date,
  };
}

const papers = (snapshot.published_papers.items as RMPaper[]).filter(isPublic);
const presentations = (snapshot.presentations.items as RMPresentation[]).filter(isPublic);

/** 論文誌 */
export const journals: Publication[] = papers
  .filter((p) => p.published_paper_type === "scientific_journal")
  .map(toPaper)
  .sort(byDateDesc);

/** 国際会議（プロシーディングス） */
export const conferencePapers: Publication[] = papers
  .filter((p) => p.published_paper_type === "international_conference_proceedings")
  .map(toPaper)
  .sort(byDateDesc);

/** その他の論文（上記以外の種別） */
export const otherPapers: Publication[] = papers
  .filter((p) => !["scientific_journal", "international_conference_proceedings"].includes(p.published_paper_type ?? ""))
  .map(toPaper)
  .sort(byDateDesc);

/**
 * 国際発表かどうか
 * researchmap の「国際・国内」が設定されていればそれに従い、
 * 未設定なら会議名に日本語を含まないものを国際とみなす
 */
const isInternational = (p: RMPresentation) =>
  p.is_international_presentation ?? !hasJapanese(p.event?.ja ?? p.event?.en);

/** 国際発表 */
export const internationalPresentations: Publication[] = presentations
  .filter(isInternational)
  .map(toPresentation)
  .sort(byDateDesc);

/** 国内発表 */
export const domesticPresentations: Publication[] = presentations
  .filter((p) => !isInternational(p))
  .map(toPresentation)
  .sort(byDateDesc);
