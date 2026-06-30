// ════════════════════════════════════════════════════════
//  images_config.js  ─  キャラクター画像リスト
//  GitHubにアップロードした画像のURLをここで管理します
//  このファイルを編集してキャラを追加・変更してください
// ════════════════════════════════════════════════════════
//
//  【使い方】
//  1. GitHubリポジトリに画像をアップロードする
//  2. 各画像の raw URL を取得する
//     例: https://raw.githubusercontent.com/ユーザー名/リポジトリ名/main/images/char1_egg.png
//  3. 下の CHAR_IMAGES 配列にエントリを追加する
//
//  【画像の種類（images のキー）】
//  egg     : たまご段階の画像
//  baby    : あかちゃん段階の画像
//  base    : きほん段階の画像（変身なし）
//  special : とくしゅ変身後の画像
//  maid    : めいど変身後の画像
//  animal  : どうぶつ変身後の画像
//
//  【キャラの追加方法】
//  下の配列に { id, name, images } を追加するだけ！
//  id は一意の文字列（半角英数字推奨）
//  name はゲーム内の選択リストに表示される名前
//  images は必要な段階だけ設定すればOK（未設定はフォールバック）
//
// ════════════════════════════════════════════════════════

const CHAR_IMAGES = [

  // ── サンプル（実際のURLに差し替えてください） ──
  // {
  //   id: "mychar1",
  //   name: "ちびこ",
  //   images: {
  //     egg:     "https://raw.githubusercontent.com/あなた/リポジトリ/main/images/chibi_egg.png",
  //     baby:    "https://raw.githubusercontent.com/あなた/リポジトリ/main/images/chibi_baby.png",
  //     base:    "https://raw.githubusercontent.com/あなた/リポジトリ/main/images/chibi_base.png",
  //     special: "https://raw.githubusercontent.com/あなた/リポジトリ/main/images/chibi_special.png",
  //     maid:    "https://raw.githubusercontent.com/あなた/リポジトリ/main/images/chibi_maid.png",
  //     animal:  "https://raw.githubusercontent.com/あなた/リポジトリ/main/images/chibi_animal.png",
  //   }
  // },

  // ── ここにキャラを追加 ──

];

// ════════════════════════════════════════════════════════
//  【後で変身タイプを追加したい場合】
//  chibi-raising-game-v29.html の EVOLUTION_TYPES 配列に
//  新しいエントリを追加してください:
//
//  { key:'ninja', label:'にんじゃ', icon:'🥷', desc:'忍者に変身した姿' },
//
//  そして images_config.js の images にも同じキーで画像を追加:
//  ninja: "https://raw.githubusercontent.com/..."
// ════════════════════════════════════════════════════════
