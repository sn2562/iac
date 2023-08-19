const charactor = {
  STR: {
    3: "箸より重いものが持てない",
    4: "箸より重いものが持てない",
    5: "貧弱",
    6: "貧弱",
    7: "運動嫌い",
    8: "運動嫌い",
    9: "普通",
    10: "普通",
    11: "普通",
    12: "普通",
    13: "運動好き",
    14: "運動好き",
    15: "アスリート",
    16: "アスリート",
    17: "見てわかるマッチョ",
    18: "見てわかるマッチョ",
    D: "3D6",
  },
  CON: {
    3: "一日の大半寝てる",
    4: "一日の大半寝てる",
    5: "病弱",
    6: "病弱",
    7: "すぐへばる",
    8: "すぐへばる",
    9: "普通",
    10: "普通",
    11: "普通",
    12: "普通",
    13: "丈夫",
    14: "丈夫",
    15: "病気したことない",
    16: "病気したことない",
    17: "不眠不休で働けます",
    18: "不眠不休で働けます",
    D: "3D6",
  },
  POW: {
    3: "精神を病んでいる",
    4: "過去に大きなトラウマがある",
    5: "すぐパニックになる",
    6: "すぐパニックになる",
    7: "打たれ弱い",
    8: "打たれ弱い",
    9: "普通",
    10: "普通",
    11: "普通",
    12: "普通",
    13: "打たれ強い",
    14: "打たれ強い",
    15: "強靭な精神の持ち主",
    16: "強靭な精神の持ち主",
    17: "その筋の修業をしている人",
    18: "聖人",
    D: "3D6",

  },
  DEX: {
    3: "触れるもの皆傷付ける",
    4: "触れるもの皆傷付ける",
    5: "料理屋片付けが苦手",
    6: "料理屋片付けが苦手",
    7: "美術や技術が苦手",
    8: "美術や技術が苦手",
    9: "普通",
    10: "普通",
    11: "普通",
    12: "普通",
    13: "美術や技術が得意",
    14: "美術や技術が得意",
    15: "技術職",
    16: "技術職",
    17: "ゴッドハンド",
    18: "ゴッドハンド",
    D: "3D6",
  },
  APP: {
    3: "目を背けられる",
    4: "目を背けられる",
    5: "ブス",
    6: "ブス",
    7: "チョイブス",
    8: "チョイブス",
    9: "普通",
    10: "普通",
    11: "普通",
    12: "普通",
    13: "チョイモテ",
    14: "チョイモテ",
    15: "同性にも好かれる",
    16: "同性にも好かれる",
    17: "誰もが振り返る",
    18: "誰もが振り返る",
    D: "3D6",
  },
  SIZ: {
    3: "120～125",
    4: "125～130",
    5: "130～135",
    6: "135～140",
    7: "140～145",
    8: "145～150",
    9: "150～155",
    10: "155～160",
    11: "160～165",
    12: "165～170",
    13: "170～175",
    14: "175～180",
    15: "180～185",
    16: "185～190",
    17: "190～195",
    18: "195～200",
    D: "2D6+6",
  },
  INT: {
    8: "物覚えが悪い",
    9: "物覚えが悪い",
    10: "頭が固い",
    11: "頭が固い",
    12: "普通",
    13: "普通",
    14: "柔軟な発想ができる",
    15: "柔軟な発想ができる",
    16: "キレ者",
    17: "キレ者",
    18: "アインシュタイン",
    D: "2D6+6",
  },
  EDU: {
    6: "中１",
    7: "中２",
    8: "中３",
    9: "高1／中卒10年以内",
    10: "高2／中卒20年〃",
    11: "高3／中卒30年〃",
    12: "大1／高卒10年〃",
    13: "大2／高卒20年〃",
    14: "大3／高卒30年〃",
    15: "大4／高卒40年〃",
    16: "院1／大卒10年〃",
    17: "院2／大卒20年〃",
    18: "院3／大卒30年〃",
    19: "院4／大卒40年〃",
    20: "院5／院卒10年〃",
    21: "院6／院卒20年〃",
    D: "3D6+3",
  }
};

// 特定の select 要素の選択肢テキストを書き換える
function modifySelectOptions() {
  // 対象の要素のリスト
  const selectElements = document.querySelectorAll("select.select");

  console.log(charactor);

  selectElements.forEach(select => {
    // 要素を取り出す
    const options = select.options;
    const title_td = select.closest("tr").querySelector("td");

    const key = select.closest("tr").querySelector("td").textContent;
    if (["STR", "CON", "POW", "DEX", "APP", "SIZ", "INT", "EDU"].includes(key)) {
      console.log(title_td.textContent);
      for (let i = 0; i < options.length; i++) {
        console.log(options[i].textContent);
        options[i].textContent = options[i].textContent + " (" + charactor[key][i] + ") " + charactor[key]["D"];
      }
    }
  });
}

modifySelectOptions();
