// researchmap から論文・発表を取得して src/data/researchmap/snapshot.json に保存する
// - `pnpm run build` の前に自動で実行される（package.json の prebuild）
// - 取得に失敗した場合や 0 件だった場合は、既存のスナップショットをそのまま使う（ビルドは止めない）
//
// 使い方: node scripts/fetch-researchmap.mjs

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PERMALINK = "kenh"; // https://researchmap.jp/kenh
const ENDPOINTS = ["published_papers", "presentations"];
const API = "https://api.researchmap.jp";
const OUT = fileURLToPath(new URL("../src/data/researchmap/snapshot.json", import.meta.url));
const PAGE = 100;
const TIMEOUT_MS = 30_000;
const RETRIES = 3; // 失敗時の試行回数（researchmap の応答が遅いことがあるため）

// 保存しない項目（内部 ID など）
const DROP = new Set(["@reverse", "rm:creator_id", "rm:creator_type", "rm:modifier_id", "rm:modifier_type", "rm:user_id"]);
const strip = (item) => Object.fromEntries(Object.entries(item).filter(([k]) => !DROP.has(k)));

async function fetchJson(url) {
  let lastError;
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
      return await res.json();
    } catch (err) {
      lastError = err;
      if (attempt < RETRIES) {
        console.warn(`[researchmap] 取得に失敗（${attempt}/${RETRIES}回目）、再試行します: ${err.message}`);
        await new Promise((r) => setTimeout(r, 3000 * attempt));
      }
    }
  }
  throw lastError;
}

async function fetchAll(endpoint) {
  const items = [];
  let total = Infinity;
  for (let start = 1; items.length < total; start += PAGE) {
    const json = await fetchJson(`${API}/${PERMALINK}/${endpoint}?limit=${PAGE}&start=${start}`);
    total = json.total_items ?? 0;
    const page = json.items ?? [];
    items.push(...page.map(strip));
    if (page.length === 0) break;
  }
  return { total_items: items.length, items };
}

async function main() {
  let previous = null;
  try {
    previous = JSON.parse(await readFile(OUT, "utf8"));
  } catch {
    // スナップショットがまだ無い
  }

  try {
    const result = {};
    for (const ep of ENDPOINTS) result[ep] = await fetchAll(ep);

    // 何かの不具合で空が返った場合に、既存の業績を消してしまわないようにする
    const count = ENDPOINTS.reduce((n, ep) => n + result[ep].items.length, 0);
    const prevCount = previous ? ENDPOINTS.reduce((n, ep) => n + (previous[ep]?.items?.length ?? 0), 0) : 0;
    if (count === 0 && prevCount > 0) {
      console.warn("[researchmap] 0 件が返ったため、既存のスナップショットを使用します");
      return;
    }

    await mkdir(dirname(OUT), { recursive: true });
    await writeFile(OUT, JSON.stringify(result, null, 2) + "\n");
    console.log(
      `[researchmap] 取得しました: ` + ENDPOINTS.map((ep) => `${ep}=${result[ep].items.length}`).join(", ")
    );
  } catch (err) {
    if (!previous) {
      console.error("[researchmap] 取得に失敗し、スナップショットもありません:", err.message);
      process.exit(1);
    }
    console.warn(`[researchmap] 取得に失敗したため、既存のスナップショットを使用します (${err.message})`);
  }
}

await main();
