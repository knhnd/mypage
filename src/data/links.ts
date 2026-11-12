// 外部リンク（Others ページ）・連絡先
// label は日英共通なら文字列、書き分けるなら { ja, en }

import type { LinkItem } from "./types";

export const links: LinkItem[] = [
  { label: "🌐 OpenLab", url: "https://knhnd.github.io/openlab-web/" },
  { label: "🌐 researchmap", url: "https://researchmap.jp/kenh" },
];

/** サイドバーの Contact に表示する連絡先メールアドレス */
export const contactEmail = "honda.ken@kaishi.ac.jp";
