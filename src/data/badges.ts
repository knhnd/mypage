// 業績のバッジ（会議略称など）
// researchmap には略称の欄がないため、ここで手動で付ける
//
// キー: researchmap の業績 ID（業績ページ URL の末尾の数字）
//   例) https://researchmap.jp/kenh/presentations/54517041 → "54517041"
// 値: バッジに表示する文字列
//
// 指定が無い場合: 論文は DOI を表示、発表はバッジなし

export const badges: Record<string, string> = {
  // 論文
  "49528745": "IMCOM2025",
  "39797496": "ADBIS2016",

  // 発表
  "54769891": "HIS2026",
  "54769868": "HIS2026",
  "54769860": "HIS2026",
  "54516997": "FIT2025",
  "52100935": "IMCOM2025",
  "54517041": "HIS2024",
};
