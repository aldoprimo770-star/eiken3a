/* ============================================
   英検3級モンスター単語クイズ A〜L  script.js
   ============================================ */

// ---------- 単語データ（約500語 A〜L）----------
const words = [
  // ===== A =====
  { word: "accept", meaning: "受け入れる" },
  { word: "accident", meaning: "事故" },
  { word: "achieve", meaning: "達成する" },
  { word: "across", meaning: "横切って" },
  { word: "act", meaning: "行動する" },
  { word: "action", meaning: "行動" },
  { word: "active", meaning: "活発な" },
  { word: "activity", meaning: "活動" },
  { word: "actually", meaning: "実際に" },
  { word: "add", meaning: "加える" },
  { word: "address", meaning: "住所" },
  { word: "adult", meaning: "大人" },
  { word: "advantage", meaning: "利点" },
  { word: "adventure", meaning: "冒険" },
  { word: "advice", meaning: "助言" },
  { word: "affect", meaning: "影響を与える" },
  { word: "afraid", meaning: "恐れて" },
  { word: "against", meaning: "〜に反対して" },
  { word: "age", meaning: "年齢" },
  { word: "agree", meaning: "同意する" },
  { word: "ahead", meaning: "前方に" },
  { word: "aim", meaning: "目標" },
  { word: "air", meaning: "空気" },
  { word: "airport", meaning: "空港" },
  { word: "alive", meaning: "生きている" },
  { word: "allow", meaning: "許す" },
  { word: "almost", meaning: "ほとんど" },
  { word: "alone", meaning: "ひとりで" },
  { word: "along", meaning: "〜に沿って" },
  { word: "already", meaning: "すでに" },
  { word: "also", meaning: "〜もまた" },
  { word: "although", meaning: "〜だけれども" },
  { word: "always", meaning: "いつも" },
  { word: "among", meaning: "〜の間で" },
  { word: "amount", meaning: "量" },
  { word: "ancient", meaning: "古代の" },
  { word: "angry", meaning: "怒った" },
  { word: "animal", meaning: "動物" },
  { word: "announce", meaning: "発表する" },
  { word: "another", meaning: "もう一つの" },
  { word: "answer", meaning: "答える" },
  { word: "anyway", meaning: "とにかく" },
  { word: "apartment", meaning: "アパート" },
  { word: "appear", meaning: "現れる" },
  { word: "area", meaning: "地域" },
  { word: "argue", meaning: "議論する" },
  { word: "army", meaning: "軍隊" },
  { word: "around", meaning: "〜のまわりに" },
  { word: "arrange", meaning: "手配する" },
  { word: "arrive", meaning: "到着する" },
  { word: "article", meaning: "記事" },
  { word: "attention", meaning: "注意" },
  { word: "audience", meaning: "観客" },
  { word: "autumn", meaning: "秋" },
  { word: "available", meaning: "利用できる" },
  { word: "avoid", meaning: "避ける" },
  { word: "awake", meaning: "目が覚めて" },
  { word: "away", meaning: "離れて" },
  { word: "abroad", meaning: "海外に" },
  { word: "absent", meaning: "欠席の" },
  { word: "apologize", meaning: "謝る" },
  { word: "apply", meaning: "応募する" },
  { word: "appreciate", meaning: "感謝する" },

  // ===== B =====
  { word: "basic", meaning: "基本的な" },
  { word: "battle", meaning: "戦い" },
  { word: "beat", meaning: "打つ" },
  { word: "beautiful", meaning: "美しい" },
  { word: "become", meaning: "〜になる" },
  { word: "before", meaning: "〜の前に" },
  { word: "begin", meaning: "始める" },
  { word: "behind", meaning: "〜の後ろに" },
  { word: "believe", meaning: "信じる" },
  { word: "belong", meaning: "属する" },
  { word: "below", meaning: "〜の下に" },
  { word: "beside", meaning: "〜のそばに" },
  { word: "between", meaning: "〜の間に" },
  { word: "beyond", meaning: "〜の向こうに" },
  { word: "billion", meaning: "10億" },
  { word: "bite", meaning: "かむ" },
  { word: "blank", meaning: "空白の" },
  { word: "blind", meaning: "目の見えない" },
  { word: "blow", meaning: "吹く" },
  { word: "board", meaning: "板" },
  { word: "bomb", meaning: "爆弾" },
  { word: "bone", meaning: "骨" },
  { word: "born", meaning: "生まれた" },
  { word: "borrow", meaning: "借りる" },
  { word: "boss", meaning: "上司" },
  { word: "both", meaning: "両方の" },
  { word: "bottom", meaning: "底" },
  { word: "brain", meaning: "脳" },
  { word: "brave", meaning: "勇敢な" },
  { word: "break", meaning: "壊す" },
  { word: "breath", meaning: "息" },
  { word: "bridge", meaning: "橋" },
  { word: "bright", meaning: "明るい" },
  { word: "bring", meaning: "持ってくる" },
  { word: "broad", meaning: "広い" },
  { word: "brush", meaning: "ブラシ" },
  { word: "build", meaning: "建てる" },
  { word: "burn", meaning: "燃える" },
  { word: "burst", meaning: "破裂する" },
  { word: "bury", meaning: "埋める" },
  { word: "business", meaning: "商売" },
  { word: "busy", meaning: "忙しい" },
  { word: "butter", meaning: "バター" },
  { word: "bedroom", meaning: "寝室" },
  { word: "behavior", meaning: "行動" },
  { word: "benefit", meaning: "利益" },

  // ===== C =====
  { word: "call", meaning: "呼ぶ" },
  { word: "calm", meaning: "穏やかな" },
  { word: "cancel", meaning: "取り消す" },
  { word: "captain", meaning: "キャプテン" },
  { word: "care", meaning: "気にする" },
  { word: "career", meaning: "職業" },
  { word: "careful", meaning: "注意深い" },
  { word: "carry", meaning: "運ぶ" },
  { word: "case", meaning: "場合" },
  { word: "catch", meaning: "捕まえる" },
  { word: "cause", meaning: "原因" },
  { word: "celebrate", meaning: "祝う" },
  { word: "center", meaning: "中心" },
  { word: "central", meaning: "中央の" },
  { word: "century", meaning: "世紀" },
  { word: "certain", meaning: "確かな" },
  { word: "challenge", meaning: "挑戦" },
  { word: "chance", meaning: "機会" },
  { word: "change", meaning: "変える" },
  { word: "character", meaning: "性格" },
  { word: "charge", meaning: "料金" },
  { word: "cheap", meaning: "安い" },
  { word: "check", meaning: "確認する" },
  { word: "cheer", meaning: "応援する" },
  { word: "choice", meaning: "選択" },
  { word: "choose", meaning: "選ぶ" },
  { word: "circle", meaning: "円" },
  { word: "citizen", meaning: "市民" },
  { word: "claim", meaning: "主張する" },
  { word: "climb", meaning: "登る" },
  { word: "close", meaning: "閉じる" },
  { word: "cloth", meaning: "布" },
  { word: "collect", meaning: "集める" },
  { word: "college", meaning: "大学" },
  { word: "comfortable", meaning: "快適な" },
  { word: "common", meaning: "共通の" },
  { word: "communicate", meaning: "伝える" },
  { word: "community", meaning: "地域社会" },
  { word: "company", meaning: "会社" },
  { word: "compare", meaning: "比較する" },
  { word: "compete", meaning: "競争する" },
  { word: "complete", meaning: "完了する" },
  { word: "condition", meaning: "状態" },
  { word: "connect", meaning: "つなぐ" },
  { word: "consider", meaning: "考える" },
  { word: "contact", meaning: "連絡する" },
  { word: "contain", meaning: "含む" },
  { word: "continue", meaning: "続ける" },
  { word: "control", meaning: "支配する" },
  { word: "conversation", meaning: "会話" },
  { word: "cook", meaning: "料理する" },
  { word: "copy", meaning: "写す" },
  { word: "correct", meaning: "正しい" },
  { word: "cost", meaning: "費用" },
  { word: "count", meaning: "数える" },
  { word: "country", meaning: "国" },
  { word: "couple", meaning: "2つの" },
  { word: "courage", meaning: "勇気" },
  { word: "cover", meaning: "覆う" },
  { word: "create", meaning: "作り出す" },
  { word: "cross", meaning: "渡る" },
  { word: "crowd", meaning: "群衆" },
  { word: "culture", meaning: "文化" },
  { word: "custom", meaning: "習慣" },
  { word: "customer", meaning: "客" },
  { word: "cute", meaning: "かわいい" },

  // ===== D =====
  { word: "damage", meaning: "損害" },
  { word: "danger", meaning: "危険" },
  { word: "dangerous", meaning: "危険な" },
  { word: "dare", meaning: "あえて〜する" },
  { word: "dark", meaning: "暗い" },
  { word: "deal", meaning: "扱う" },
  { word: "death", meaning: "死" },
  { word: "decide", meaning: "決める" },
  { word: "deep", meaning: "深い" },
  { word: "degree", meaning: "度" },
  { word: "deliver", meaning: "届ける" },
  { word: "demand", meaning: "要求する" },
  { word: "department", meaning: "部門" },
  { word: "depend", meaning: "頼る" },
  { word: "describe", meaning: "描写する" },
  { word: "desert", meaning: "砂漠" },
  { word: "design", meaning: "設計する" },
  { word: "destroy", meaning: "破壊する" },
  { word: "detail", meaning: "詳細" },
  { word: "develop", meaning: "発展させる" },
  { word: "diary", meaning: "日記" },
  { word: "dictionary", meaning: "辞書" },
  { word: "die", meaning: "死ぬ" },
  { word: "difference", meaning: "違い" },
  { word: "different", meaning: "異なる" },
  { word: "difficult", meaning: "難しい" },
  { word: "direct", meaning: "直接の" },
  { word: "direction", meaning: "方向" },
  { word: "dirty", meaning: "汚い" },
  { word: "disappear", meaning: "消える" },
  { word: "discover", meaning: "発見する" },
  { word: "discuss", meaning: "話し合う" },
  { word: "disease", meaning: "病気" },
  { word: "dish", meaning: "皿" },
  { word: "distance", meaning: "距離" },
  { word: "divide", meaning: "分ける" },
  { word: "double", meaning: "2倍の" },
  { word: "doubt", meaning: "疑う" },
  { word: "draw", meaning: "描く" },
  { word: "dream", meaning: "夢" },
  { word: "dress", meaning: "服を着る" },
  { word: "drop", meaning: "落とす" },
  { word: "dry", meaning: "乾いた" },
  { word: "during", meaning: "〜の間に" },
  { word: "duty", meaning: "義務" },
  { word: "daughter", meaning: "娘" },
  { word: "dear", meaning: "親愛な" },
  { word: "delight", meaning: "喜び" },
  { word: "donate", meaning: "寄付する" },
  { word: "downtown", meaning: "繁華街" },

  // ===== E =====
  { word: "each", meaning: "それぞれの" },
  { word: "ear", meaning: "耳" },
  { word: "earn", meaning: "稼ぐ" },
  { word: "earth", meaning: "地球" },
  { word: "east", meaning: "東" },
  { word: "easy", meaning: "簡単な" },
  { word: "education", meaning: "教育" },
  { word: "effect", meaning: "効果" },
  { word: "effort", meaning: "努力" },
  { word: "either", meaning: "どちらかの" },
  { word: "else", meaning: "他に" },
  { word: "emotion", meaning: "感情" },
  { word: "empty", meaning: "空の" },
  { word: "encourage", meaning: "励ます" },
  { word: "end", meaning: "終わり" },
  { word: "enemy", meaning: "敵" },
  { word: "energy", meaning: "エネルギー" },
  { word: "engine", meaning: "エンジン" },
  { word: "enjoy", meaning: "楽しむ" },
  { word: "enough", meaning: "十分な" },
  { word: "enter", meaning: "入る" },
  { word: "environment", meaning: "環境" },
  { word: "equal", meaning: "等しい" },
  { word: "escape", meaning: "逃げる" },
  { word: "especially", meaning: "特に" },
  { word: "even", meaning: "〜でさえ" },
  { word: "event", meaning: "出来事" },
  { word: "ever", meaning: "今までに" },
  { word: "everybody", meaning: "みんな" },
  { word: "everything", meaning: "すべてのもの" },
  { word: "everywhere", meaning: "どこでも" },
  { word: "exactly", meaning: "正確に" },
  { word: "examine", meaning: "調べる" },
  { word: "example", meaning: "例" },
  { word: "excellent", meaning: "優秀な" },
  { word: "exchange", meaning: "交換する" },
  { word: "excite", meaning: "興奮させる" },
  { word: "excited", meaning: "興奮した" },
  { word: "excuse", meaning: "言い訳" },
  { word: "exercise", meaning: "運動" },
  { word: "exist", meaning: "存在する" },
  { word: "expect", meaning: "期待する" },
  { word: "expensive", meaning: "高価な" },
  { word: "experience", meaning: "経験" },
  { word: "explain", meaning: "説明する" },
  { word: "express", meaning: "表現する" },
  { word: "extra", meaning: "余分の" },
  { word: "eye", meaning: "目" },
  { word: "elderly", meaning: "年配の" },
  { word: "election", meaning: "選挙" },
  { word: "elevator", meaning: "エレベーター" },
  { word: "employ", meaning: "雇う" },

  // ===== F =====
  { word: "face", meaning: "顔" },
  { word: "fact", meaning: "事実" },
  { word: "factory", meaning: "工場" },
  { word: "fail", meaning: "失敗する" },
  { word: "fair", meaning: "公平な" },
  { word: "fall", meaning: "落ちる" },
  { word: "family", meaning: "家族" },
  { word: "famous", meaning: "有名な" },
  { word: "fan", meaning: "ファン" },
  { word: "far", meaning: "遠い" },
  { word: "farm", meaning: "農場" },
  { word: "fast", meaning: "速い" },
  { word: "fat", meaning: "太った" },
  { word: "fault", meaning: "欠点" },
  { word: "fear", meaning: "恐れ" },
  { word: "feed", meaning: "食べ物を与える" },
  { word: "feel", meaning: "感じる" },
  { word: "festival", meaning: "祭り" },
  { word: "fever", meaning: "熱" },
  { word: "few", meaning: "少しの" },
  { word: "field", meaning: "野原" },
  { word: "fight", meaning: "戦う" },
  { word: "fill", meaning: "満たす" },
  { word: "film", meaning: "映画" },
  { word: "final", meaning: "最後の" },
  { word: "finally", meaning: "ついに" },
  { word: "find", meaning: "見つける" },
  { word: "fine", meaning: "元気な" },
  { word: "finger", meaning: "指" },
  { word: "finish", meaning: "終える" },
  { word: "fire", meaning: "火" },
  { word: "fit", meaning: "合う" },
  { word: "fix", meaning: "修理する" },
  { word: "flat", meaning: "平らな" },
  { word: "flight", meaning: "飛行" },
  { word: "floor", meaning: "床" },
  { word: "flow", meaning: "流れる" },
  { word: "fly", meaning: "飛ぶ" },
  { word: "follow", meaning: "〜についていく" },
  { word: "fool", meaning: "ばか" },
  { word: "force", meaning: "力" },
  { word: "foreign", meaning: "外国の" },
  { word: "forest", meaning: "森" },
  { word: "forever", meaning: "永遠に" },
  { word: "forget", meaning: "忘れる" },
  { word: "form", meaning: "形" },
  { word: "forward", meaning: "前方へ" },
  { word: "free", meaning: "自由な" },
  { word: "fresh", meaning: "新鮮な" },
  { word: "friend", meaning: "友だち" },
  { word: "front", meaning: "前面" },
  { word: "fruit", meaning: "果物" },
  { word: "full", meaning: "いっぱいの" },
  { word: "fun", meaning: "楽しみ" },
  { word: "future", meaning: "未来" },

  // ===== G =====
  { word: "gain", meaning: "得る" },
  { word: "garden", meaning: "庭" },
  { word: "gas", meaning: "ガス" },
  { word: "gate", meaning: "門" },
  { word: "gather", meaning: "集まる" },
  { word: "general", meaning: "一般的な" },
  { word: "generation", meaning: "世代" },
  { word: "gentle", meaning: "優しい" },
  { word: "gift", meaning: "贈り物" },
  { word: "give", meaning: "与える" },
  { word: "glad", meaning: "うれしい" },
  { word: "global", meaning: "世界的な" },
  { word: "goal", meaning: "目標" },
  { word: "god", meaning: "神" },
  { word: "gold", meaning: "金" },
  { word: "grade", meaning: "学年" },
  { word: "grandfather", meaning: "祖父" },
  { word: "grandmother", meaning: "祖母" },
  { word: "grass", meaning: "草" },
  { word: "grateful", meaning: "感謝している" },
  { word: "gray", meaning: "灰色の" },
  { word: "great", meaning: "すばらしい" },
  { word: "ground", meaning: "地面" },
  { word: "group", meaning: "グループ" },
  { word: "grow", meaning: "成長する" },
  { word: "guard", meaning: "守る" },
  { word: "guess", meaning: "推測する" },
  { word: "guest", meaning: "客" },
  { word: "guide", meaning: "案内する" },
  { word: "gun", meaning: "銃" },
  { word: "guy", meaning: "男" },

  // ===== H =====
  { word: "habit", meaning: "習慣" },
  { word: "half", meaning: "半分" },
  { word: "hall", meaning: "ホール" },
  { word: "handle", meaning: "扱う" },
  { word: "hang", meaning: "掛ける" },
  { word: "happen", meaning: "起こる" },
  { word: "happy", meaning: "幸せな" },
  { word: "hard", meaning: "難しい" },
  { word: "harm", meaning: "害" },
  { word: "hate", meaning: "嫌う" },
  { word: "health", meaning: "健康" },
  { word: "heart", meaning: "心臓" },
  { word: "heat", meaning: "熱" },
  { word: "heavy", meaning: "重い" },
  { word: "height", meaning: "高さ" },
  { word: "help", meaning: "助ける" },
  { word: "hero", meaning: "英雄" },
  { word: "hide", meaning: "隠す" },
  { word: "high", meaning: "高い" },
  { word: "hill", meaning: "丘" },
  { word: "history", meaning: "歴史" },
  { word: "hit", meaning: "打つ" },
  { word: "hold", meaning: "持つ" },
  { word: "hole", meaning: "穴" },
  { word: "holiday", meaning: "休日" },
  { word: "honest", meaning: "正直な" },
  { word: "honor", meaning: "名誉" },
  { word: "hope", meaning: "望む" },
  { word: "host", meaning: "主人" },
  { word: "hotel", meaning: "ホテル" },
  { word: "hour", meaning: "時間" },
  { word: "huge", meaning: "巨大な" },
  { word: "human", meaning: "人間の" },
  { word: "humor", meaning: "ユーモア" },
  { word: "hundred", meaning: "百" },
  { word: "hungry", meaning: "空腹な" },
  { word: "hunt", meaning: "狩る" },
  { word: "hurry", meaning: "急ぐ" },
  { word: "hurt", meaning: "傷つける" },

  // ===== I =====
  { word: "idea", meaning: "考え" },
  { word: "imagine", meaning: "想像する" },
  { word: "immediately", meaning: "すぐに" },
  { word: "important", meaning: "重要な" },
  { word: "impossible", meaning: "不可能な" },
  { word: "improve", meaning: "改善する" },
  { word: "include", meaning: "含む" },
  { word: "increase", meaning: "増える" },
  { word: "indeed", meaning: "本当に" },
  { word: "independent", meaning: "独立した" },
  { word: "industry", meaning: "産業" },
  { word: "influence", meaning: "影響" },
  { word: "information", meaning: "情報" },
  { word: "injure", meaning: "傷つける" },
  { word: "inside", meaning: "内側に" },
  { word: "instead", meaning: "その代わりに" },
  { word: "interest", meaning: "興味" },
  { word: "international", meaning: "国際的な" },
  { word: "interview", meaning: "面接" },
  { word: "introduce", meaning: "紹介する" },
  { word: "invent", meaning: "発明する" },
  { word: "invite", meaning: "招待する" },
  { word: "island", meaning: "島" },
  { word: "issue", meaning: "問題" },
  { word: "item", meaning: "品物" },

  // ===== J =====
  { word: "jacket", meaning: "上着" },
  { word: "jail", meaning: "刑務所" },
  { word: "jam", meaning: "ジャム" },
  { word: "jewelry", meaning: "宝石" },
  { word: "job", meaning: "仕事" },
  { word: "join", meaning: "参加する" },
  { word: "joke", meaning: "冗談" },
  { word: "journey", meaning: "旅" },
  { word: "joy", meaning: "喜び" },
  { word: "judge", meaning: "判断する" },
  { word: "juice", meaning: "ジュース" },
  { word: "jump", meaning: "跳ぶ" },
  { word: "junior", meaning: "年下の" },
  { word: "just", meaning: "ちょうど" },
  { word: "justice", meaning: "正義" },

  // ===== K =====
  { word: "keep", meaning: "保つ" },
  { word: "key", meaning: "鍵" },
  { word: "kick", meaning: "蹴る" },
  { word: "kid", meaning: "子供" },
  { word: "kill", meaning: "殺す" },
  { word: "kind", meaning: "親切な" },
  { word: "king", meaning: "王" },
  { word: "kitchen", meaning: "台所" },
  { word: "knee", meaning: "ひざ" },
  { word: "knife", meaning: "ナイフ" },
  { word: "knock", meaning: "ノックする" },
  { word: "know", meaning: "知っている" },
  { word: "knowledge", meaning: "知識" },

  // ===== L =====
  { word: "lack", meaning: "不足" },
  { word: "lady", meaning: "女性" },
  { word: "land", meaning: "土地" },
  { word: "language", meaning: "言語" },
  { word: "large", meaning: "大きい" },
  { word: "last", meaning: "最後の" },
  { word: "late", meaning: "遅い" },
  { word: "lately", meaning: "最近" },
  { word: "laugh", meaning: "笑う" },
  { word: "law", meaning: "法律" },
  { word: "lay", meaning: "横たえる" },
  { word: "lead", meaning: "導く" },
  { word: "leader", meaning: "指導者" },
  { word: "learn", meaning: "学ぶ" },
  { word: "least", meaning: "最も少ない" },
  { word: "leave", meaning: "去る" },
  { word: "left", meaning: "左の" },
  { word: "lend", meaning: "貸す" },
  { word: "less", meaning: "より少ない" },
  { word: "lesson", meaning: "授業" },
  { word: "let", meaning: "〜させる" },
  { word: "letter", meaning: "手紙" },
  { word: "level", meaning: "水準" },
  { word: "library", meaning: "図書館" },
  { word: "lie", meaning: "うそをつく" },
  { word: "life", meaning: "生活" },
  { word: "lift", meaning: "持ち上げる" },
  { word: "light", meaning: "光" },
  { word: "likely", meaning: "ありそうな" },
  { word: "limit", meaning: "制限" },
  { word: "line", meaning: "線" },
  { word: "list", meaning: "リスト" },
  { word: "listen", meaning: "聞く" },
  { word: "live", meaning: "住む" },
  { word: "local", meaning: "地元の" },
  { word: "lonely", meaning: "寂しい" },
  { word: "long", meaning: "長い" },
  { word: "lose", meaning: "失う" },
  { word: "loud", meaning: "大声の" },
  { word: "love", meaning: "愛する" },
  { word: "low", meaning: "低い" },
  { word: "luck", meaning: "運" },
  { word: "lunch", meaning: "昼食" },
  { word: "lecture", meaning: "講義" },
  { word: "legal", meaning: "合法の" },
  { word: "location", meaning: "場所" },
  { word: "luggage", meaning: "荷物" },
  { word: "luxury", meaning: "贅沢" }
];

// ---------- モンスターカードデータ（3級オリジナル）----------
const monsterCards = [
  // ノーマルカード（10体）
  { name: "フレイムキャット", attr: "炎", desc: "炎をまとった元気なネコ。走ると火花が散る。", english: "The cat runs fast.", color1: "#e74c3c", color2: "#f39c12", shape: "flamecat", isRare: false },
  { name: "アクアドッグ", attr: "水", desc: "水の中を自由に泳ぐ忠実な犬。", english: "The dog swims well.", color1: "#3498db", color2: "#2980b9", shape: "aquadog", isRare: false },
  { name: "サンダーバード", attr: "雷", desc: "空を飛ぶたびに雷を落とす鳥。", english: "The bird flies high.", color1: "#f1c40f", color2: "#e67e22", shape: "thunderbird", isRare: false },
  { name: "リーフラビット", attr: "自然", desc: "葉っぱの耳を持つやさしいウサギ。", english: "The rabbit eats leaves.", color1: "#2ecc71", color2: "#27ae60", shape: "leafrabbit", isRare: false },
  { name: "ロックベア", attr: "岩", desc: "体が岩のように硬い力持ち。", english: "The bear is strong.", color1: "#95a5a6", color2: "#7f8c8d", shape: "rockbear", isRare: false },
  { name: "ウィンドフォックス", attr: "風", desc: "風のように素早く動くキツネ。", english: "The fox runs quickly.", color1: "#00cec9", color2: "#0984e3", shape: "windfox", isRare: false },
  { name: "シャドウバット", attr: "闇", desc: "夜にしか現れない静かなハンター。", english: "The bat flies at night.", color1: "#8e44ad", color2: "#6c3483", shape: "shadowbat", isRare: false },
  { name: "スノーウルフ", attr: "氷", desc: "雪の中に溶け込む白いオオカミ。", english: "The wolf lives in snow.", color1: "#74b9ff", color2: "#a29bfe", shape: "snowwolf", isRare: false },
  { name: "メタルタートル", attr: "鋼", desc: "甲羅が鉄でできているカメ。", english: "The turtle is slow.", color1: "#636e72", color2: "#b2bec3", shape: "metalturtle", isRare: false },
  { name: "ライトディア", attr: "光", desc: "森を照らす神秘的な鹿。", english: "The deer shines bright.", color1: "#fdcb6e", color2: "#f0932b", shape: "lightdeer", isRare: false },
  // レアカード（5体）
  { name: "ブレイズドラゴン", attr: "炎", desc: "強力な炎を吐く伝説の存在。", english: "The dragon breathes fire.", color1: "#d63031", color2: "#e17055", shape: "blazedragon", isRare: true },
  { name: "オーシャンレヴィア", attr: "水", desc: "海を支配する巨大なモンスター。", english: "It lives in the ocean.", color1: "#0652DD", color2: "#1289A7", shape: "oceanlevia", isRare: true },
  { name: "スカイフェニックス", attr: "光", desc: "何度でもよみがえる不死の鳥。", english: "It rises again.", color1: "#e67e22", color2: "#fdcb6e", shape: "skyphoenix", isRare: true },
  { name: "ナイトグリフォン", attr: "闇", desc: "夜空を支配する守護獣。", english: "It flies in the dark.", color1: "#2c3e50", color2: "#8e44ad", shape: "nightgriffon", isRare: true },
  { name: "クロノユニコーン", attr: "時", desc: "時間を操る神秘の存在。", english: "It controls time.", color1: "#a29bfe", color2: "#6c5ce7", shape: "chronounicorn", isRare: true }
];
const normalCardsList = monsterCards.filter(c => !c.isRare);
const rareCardsList = monsterCards.filter(c => c.isRare);

// ---------- 状態管理 ----------
let state = {
  totalCorrect: 0,
  totalCards: 0,
  totalRare: 0,
  soundOn: true,
  roundQuestions: [],
  roundIndex: 0,
  roundCorrect: 0,
  roundWrong: [],
  usedIndices: [],
  currentWord: null,
  nextCardAt: 50,
  isReview: false,
  reviewWords: [],
  reviewIndex: 0,
  collectedCards: [],
  collectedRare: [],
  completionShown: false
};

// ---------- DOM要素 ----------
const $ = id => document.getElementById(id);
const titleScreen = $('title-screen');
const quizScreen = $('quiz-screen');
const resultScreen = $('result-screen');
const reviewScreen = $('review-screen');
const collectionScreen = $('collection-screen');
const feedbackOverlay = $('feedback-overlay');
const cardOverlay = $('card-overlay');
const resetOverlay = $('reset-overlay');
const detailOverlay = $('detail-overlay');
const congratsOverlay = $('congrats-overlay');

// ---------- localStorage ----------
function saveState() {
  const saveData = {
    totalCorrect: state.totalCorrect,
    totalCards: state.totalCards,
    totalRare: state.totalRare,
    soundOn: state.soundOn,
    usedIndices: state.usedIndices,
    nextCardAt: state.nextCardAt,
    collectedCards: state.collectedCards,
    collectedRare: state.collectedRare,
    completionShown: state.completionShown
  };
  localStorage.setItem('eiken3_al_state', JSON.stringify(saveData));
}

function loadState() {
  const data = localStorage.getItem('eiken3_al_state');
  if (data) {
    const parsed = JSON.parse(data);
    state.totalCorrect = parsed.totalCorrect || 0;
    state.totalCards = parsed.totalCards || 0;
    state.totalRare = parsed.totalRare || 0;
    state.soundOn = parsed.soundOn !== undefined ? parsed.soundOn : true;
    state.usedIndices = parsed.usedIndices || [];
    state.nextCardAt = parsed.nextCardAt || 50;
    state.collectedCards = parsed.collectedCards || [];
    state.collectedRare = parsed.collectedRare || [];
    state.completionShown = parsed.completionShown || false;
  }
}

// ---------- 効果音（Web Audio API）----------
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playCorrectSound() {
  if (!state.soundOn) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523, ctx.currentTime);
    osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

function playWrongSound() {
  if (!state.soundOn) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.35);
  } catch (e) {}
}

function playCardSound() {
  if (!state.soundOn) return;
  try {
    const ctx = getAudioCtx();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.3);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.3);
    });
  } catch (e) {}
}

function playRareSound() {
  if (!state.soundOn) return;
  try {
    const ctx = getAudioCtx();
    const notes = [523, 659, 784, 1047, 1319, 1568];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.5);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.5);
    });
  } catch (e) {}
}

// ---------- 発音（speechSynthesis）----------
function speakWord(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
}

// ---------- シャッフル ----------
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- 画面遷移 ----------
function showScreen(screen) {
  [titleScreen, quizScreen, resultScreen, reviewScreen, collectionScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ---------- スコア更新 ----------
function updateScoreDisplay() {
  $('total-correct').textContent = state.totalCorrect;
  $('total-cards').textContent = state.totalCards;
  $('total-rare').textContent = state.totalRare;
  updateTitleStats();
}

function updateTitleStats() {
  $('title-correct').textContent = state.totalCorrect;
  const uniqueNormal = new Set(state.collectedCards).size;
  const uniqueRare = new Set(state.collectedRare).size;
  $('title-cards').textContent = uniqueNormal + '/' + normalCardsList.length;
  $('title-rare').textContent = uniqueRare + '/' + rareCardsList.length;
}

function updateSoundButtonText() {
  const text = state.soundOn ? '音をOFFにする' : '音をONにする';
  $('sound-toggle-title').textContent = text;
  $('sound-toggle-quiz').textContent = text;
}

// ---------- 10問分のランダム出題 ----------
function prepareRound() {
  state.roundQuestions = [];
  state.roundIndex = 0;
  state.roundCorrect = 0;
  state.roundWrong = [];

  let available = [];
  for (let i = 0; i < words.length; i++) {
    if (!state.usedIndices.includes(i)) available.push(i);
  }

  if (available.length < 10) {
    state.usedIndices = [];
    available = words.map((_, i) => i);
  }

  const selected = shuffle(available).slice(0, 10);
  state.roundQuestions = selected;
  selected.forEach(i => state.usedIndices.push(i));
}

// ---------- 選択肢生成 ----------
function generateChoices(correctIndex) {
  const correctMeaning = words[correctIndex].meaning;
  const wrongPool = words
    .filter((_, i) => i !== correctIndex)
    .map(w => w.meaning);
  const wrongChoices = shuffle(wrongPool).slice(0, 3);
  const allChoices = shuffle([correctMeaning, ...wrongChoices]);
  return allChoices;
}

// ---------- クイズ表示 ----------
function showQuestion() {
  const idx = state.roundQuestions[state.roundIndex];
  state.currentWord = idx;
  const wordObj = words[idx];

  $('english-word').textContent = wordObj.word;
  $('progress-fill').style.width = ((state.roundIndex) / 10 * 100) + '%';
  $('progress-text').textContent = (state.roundIndex + 1) + ' / 10';

  const choices = generateChoices(idx);
  const choicesEl = $('choices');
  choicesEl.innerHTML = '';

  choices.forEach(meaning => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = meaning;
    btn.addEventListener('click', () => handleAnswer(btn, meaning, wordObj.meaning));
    choicesEl.appendChild(btn);
  });
}

// ---------- 回答処理 ----------
function handleAnswer(btn, selected, correct) {
  const buttons = document.querySelectorAll('#choices .choice-btn');
  buttons.forEach(b => b.style.pointerEvents = 'none');

  const isCorrect = selected === correct;

  if (isCorrect) {
    btn.classList.add('correct');
    playCorrectSound();
    state.roundCorrect++;
    state.totalCorrect++;
    updateScoreDisplay();
    showFeedback(true, words[state.currentWord]);
  } else {
    btn.classList.add('wrong');
    buttons.forEach(b => {
      if (b.textContent === correct) b.classList.add('show-correct');
    });
    playWrongSound();
    state.roundWrong.push(state.currentWord);
    showFeedback(false, words[state.currentWord]);
  }

  saveState();

  state.pendingCard = false;
  if (state.totalCorrect >= state.nextCardAt && isCorrect) {
    state.nextCardAt += 50;
    state.pendingCard = true;
    saveState();
  }

  const nextBtn = $('next-question-btn');
  if (state.roundIndex >= 9) {
    nextBtn.textContent = state.pendingCard ? '次へ ▶' : '結果を見る ▶';
  } else {
    nextBtn.textContent = '次の問題に進む ▶';
  }
  setTimeout(() => nextBtn.classList.remove('hidden'), 600);
}

// ---------- フィードバック ----------
function showFeedback(isCorrect, wordObj) {
  feedbackOverlay.classList.remove('hidden');
  $('feedback-icon').textContent = isCorrect ? '⭕' : '❌';
  $('feedback-text').textContent = isCorrect ? 'せいかい！' : 'ざんねん…';
  $('feedback-answer').textContent = wordObj.word + ' = ' + wordObj.meaning;
}

function hideFeedback() {
  feedbackOverlay.classList.add('hidden');
  $('next-question-btn').classList.add('hidden');
}

// ---------- 結果画面 ----------
function showResult() {
  showScreen(resultScreen);
  const pct = Math.round((state.roundCorrect / 10) * 100);
  $('result-percent').textContent = pct + '%';
  $('result-detail').textContent = '10問中 ' + state.roundCorrect + '問 正解！';

  if (state.roundWrong.length > 0) {
    $('review-section').classList.remove('hidden');
  } else {
    $('review-section').classList.add('hidden');
  }
}

// ---------- 復習クイズ ----------
function startReview() {
  state.isReview = true;
  state.reviewWords = [...state.roundWrong];
  state.reviewIndex = 0;
  showScreen(reviewScreen);
  showReviewQuestion();
}

function showReviewQuestion() {
  if (state.reviewIndex >= state.reviewWords.length) {
    state.isReview = false;
    showScreen(resultScreen);
    $('review-section').classList.add('hidden');
    return;
  }

  const idx = state.reviewWords[state.reviewIndex];
  const wordObj = words[idx];
  $('review-word').textContent = wordObj.word;
  $('review-progress').textContent = (state.reviewIndex + 1) + '/' + state.reviewWords.length;

  const choices = generateChoices(idx);
  const choicesEl = $('review-choices');
  choicesEl.innerHTML = '';

  choices.forEach(meaning => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = meaning;
    btn.addEventListener('click', () => handleReviewAnswer(btn, meaning, wordObj.meaning));
    choicesEl.appendChild(btn);
  });
}

function handleReviewAnswer(btn, selected, correct) {
  const buttons = document.querySelectorAll('#review-choices .choice-btn');
  buttons.forEach(b => b.style.pointerEvents = 'none');

  if (selected === correct) {
    btn.classList.add('correct');
    playCorrectSound();
  } else {
    btn.classList.add('wrong');
    buttons.forEach(b => {
      if (b.textContent === correct) b.classList.add('show-correct');
    });
    playWrongSound();
  }

  setTimeout(() => {
    state.reviewIndex++;
    showReviewQuestion();
  }, 1200);
}

// ---------- モンスターカード ----------
function checkMonsterCard() {
  hideFeedback();
  const isRare = Math.random() < 0.05;
  let card;
  if (isRare) {
    card = rareCardsList[Math.floor(Math.random() * rareCardsList.length)];
  } else {
    card = normalCardsList[Math.floor(Math.random() * normalCardsList.length)];
  }

  state.totalCards++;
  if (isRare) {
    state.totalRare++;
    if (!state.collectedRare.includes(card.name)) {
      state.collectedRare.push(card.name);
    }
  } else {
    if (!state.collectedCards.includes(card.name)) {
      state.collectedCards.push(card.name);
    }
  }
  updateScoreDisplay();
  saveState();

  showCardModal(card, isRare);
}

function generateMonsterSVG(card, showAsRare) {
  const c1 = showAsRare ? '#FFD700' : card.color1;
  const c2 = showAsRare ? '#FFA500' : card.color2;
  const sparkles = showAsRare ? `
    <circle cx="20" cy="20" r="4" fill="#FFD700" opacity="0.8"><animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/></circle>
    <circle cx="140" cy="30" r="3" fill="#FFD700" opacity="0.6"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.3s" repeatCount="indefinite"/></circle>
    <circle cx="30" cy="130" r="3.5" fill="#FFD700" opacity="0.7"><animate attributeName="opacity" values="0;1;0" dur="1.4s" begin="0.6s" repeatCount="indefinite"/></circle>
    <circle cx="130" cy="140" r="3" fill="#FFD700" opacity="0.8"><animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="0.2s" repeatCount="indefinite"/></circle>` : '';

  const shapes = {
    flamecat: `<ellipse cx="80" cy="88" rx="36" ry="38" fill="${c1}"/>
      <polygon points="52,56 44,28 64,50" fill="${c1}"/><polygon points="108,56 116,28 96,50" fill="${c1}"/>
      <polygon points="54,54 48,34 62,50" fill="${c2}"/><polygon points="106,54 112,34 98,50" fill="${c2}"/>
      <circle cx="66" cy="82" r="8" fill="#fff"/><circle cx="94" cy="82" r="8" fill="#fff"/>
      <circle cx="68" cy="83" r="4.5" fill="#222"/><circle cx="96" cy="83" r="4.5" fill="#222"/>
      <circle cx="70" cy="81" r="1.5" fill="#fff"/><circle cx="98" cy="81" r="1.5" fill="#fff"/>
      <ellipse cx="80" cy="97" rx="4" ry="3" fill="#ffb8c6"/>
      <line x1="42" y1="92" x2="58" y2="90" stroke="#444" stroke-width="1"/>
      <line x1="42" y1="98" x2="58" y2="96" stroke="#444" stroke-width="1"/>
      <line x1="118" y1="92" x2="102" y2="90" stroke="#444" stroke-width="1"/>
      <line x1="118" y1="98" x2="102" y2="96" stroke="#444" stroke-width="1"/>
      <ellipse cx="65" cy="50" rx="7" ry="11" fill="${c2}" opacity="0.8"/>
      <ellipse cx="80" cy="46" rx="6" ry="13" fill="${c2}" opacity="0.9"/>
      <ellipse cx="95" cy="50" rx="7" ry="11" fill="${c2}" opacity="0.8"/>
      <rect x="54" y="120" width="14" height="12" rx="6" fill="${c1}"/>
      <rect x="92" y="120" width="14" height="12" rx="6" fill="${c1}"/>`,
    aquadog: `<ellipse cx="80" cy="88" rx="38" ry="40" fill="${c1}"/>
      <ellipse cx="50" cy="65" rx="14" ry="20" fill="${c1}" transform="rotate(-15 50 65)"/>
      <ellipse cx="110" cy="65" rx="14" ry="20" fill="${c1}" transform="rotate(15 110 65)"/>
      <circle cx="66" cy="82" r="9" fill="#fff"/><circle cx="94" cy="82" r="9" fill="#fff"/>
      <circle cx="68" cy="83" r="5" fill="#222"/><circle cx="96" cy="83" r="5" fill="#222"/>
      <circle cx="70" cy="81" r="2" fill="#fff"/><circle cx="98" cy="81" r="2" fill="#fff"/>
      <ellipse cx="80" cy="98" rx="6" ry="4" fill="#222"/>
      <path d="M74 106 Q80 112 86 106" fill="#e74c3c" opacity="0.7"/>
      <circle cx="42" cy="55" r="4" fill="#74b9ff" opacity="0.6"/>
      <circle cx="118" cy="60" r="3" fill="#74b9ff" opacity="0.5"/>
      <circle cx="35" cy="100" r="3.5" fill="#74b9ff" opacity="0.5"/>
      <rect x="54" y="122" width="14" height="12" rx="6" fill="${c2}"/>
      <rect x="92" y="122" width="14" height="12" rx="6" fill="${c2}"/>`,
    thunderbird: `<ellipse cx="80" cy="85" rx="30" ry="34" fill="${c1}"/>
      <path d="M50 78 Q30 55 20 75 Q30 65 42 80" fill="${c1}"/>
      <path d="M110 78 Q130 55 140 75 Q130 65 118 80" fill="${c1}"/>
      <circle cx="70" cy="78" r="7" fill="#fff"/><circle cx="90" cy="78" r="7" fill="#fff"/>
      <circle cx="71" cy="79" r="4" fill="#222"/><circle cx="91" cy="79" r="4" fill="#222"/>
      <polygon points="80,90 76,98 84,98" fill="${c2}"/>
      <polygon points="76,42 68,58 80,58 72,68 64,68 72,78 60,55" fill="${c2}" opacity="0.85"/>
      <rect x="66" y="116" width="10" height="8" rx="3" fill="${c2}"/>
      <rect x="84" y="116" width="10" height="8" rx="3" fill="${c2}"/>`,
    leafrabbit: `<ellipse cx="80" cy="92" rx="34" ry="36" fill="${c1}"/>
      <ellipse cx="62" cy="42" rx="10" ry="28" fill="${c1}"/>
      <ellipse cx="98" cy="42" rx="10" ry="28" fill="${c1}"/>
      <ellipse cx="62" cy="42" rx="6" ry="22" fill="${c2}"/>
      <ellipse cx="98" cy="42" rx="6" ry="22" fill="${c2}"/>
      <path d="M56 28 L62 40 L68 28" fill="${c2}" opacity="0.5"/>
      <path d="M92 28 L98 40 L104 28" fill="${c2}" opacity="0.5"/>
      <circle cx="68" cy="84" r="8" fill="#fff"/><circle cx="92" cy="84" r="8" fill="#fff"/>
      <circle cx="69" cy="85" r="4.5" fill="#222"/><circle cx="93" cy="85" r="4.5" fill="#222"/>
      <circle cx="71" cy="83" r="1.5" fill="#fff"/><circle cx="95" cy="83" r="1.5" fill="#fff"/>
      <ellipse cx="80" cy="100" rx="4" ry="3" fill="#ffb8c6"/>
      <rect x="58" y="122" width="14" height="10" rx="6" fill="${c1}"/>
      <rect x="88" y="122" width="14" height="10" rx="6" fill="${c1}"/>`,
    rockbear: `<rect x="44" y="52" rx="18" ry="18" width="72" height="76" fill="${c1}"/>
      <circle cx="56" cy="48" r="14" fill="${c1}"/><circle cx="104" cy="48" r="14" fill="${c1}"/>
      <circle cx="56" cy="48" r="8" fill="${c2}"/><circle cx="104" cy="48" r="8" fill="${c2}"/>
      <circle cx="66" cy="80" r="9" fill="#fff"/><circle cx="94" cy="80" r="9" fill="#fff"/>
      <circle cx="68" cy="81" r="5" fill="#222"/><circle cx="96" cy="81" r="5" fill="#222"/>
      <ellipse cx="80" cy="96" rx="5" ry="4" fill="#555"/>
      <path d="M72 104 Q80 110 88 104" stroke="#555" stroke-width="2" fill="none"/>
      <line x1="55" y1="70" x2="68" y2="68" stroke="${c2}" stroke-width="2.5" opacity="0.5"/>
      <line x1="92" y1="70" x2="105" y2="72" stroke="${c2}" stroke-width="2.5" opacity="0.5"/>
      <rect x="50" y="124" width="18" height="12" rx="6" fill="${c2}"/>
      <rect x="92" y="124" width="18" height="12" rx="6" fill="${c2}"/>`,
    windfox: `<ellipse cx="80" cy="88" rx="34" ry="38" fill="${c1}"/>
      <polygon points="52,58 42,28 68,52" fill="${c1}"/>
      <polygon points="108,58 118,28 92,52" fill="${c1}"/>
      <polygon points="54,56 48,36 64,52" fill="#fff"/>
      <polygon points="106,56 112,36 96,52" fill="#fff"/>
      <circle cx="66" cy="80" r="8" fill="#fff"/><circle cx="94" cy="80" r="8" fill="#fff"/>
      <circle cx="68" cy="81" r="4" fill="#222"/><circle cx="96" cy="81" r="4" fill="#222"/>
      <ellipse cx="80" cy="96" rx="4" ry="3" fill="#222"/>
      <ellipse cx="80" cy="130" rx="20" ry="10" fill="${c1}"/>
      <ellipse cx="80" cy="130" rx="12" ry="6" fill="#fff"/>
      <line x1="18" y1="70" x2="38" y2="75" stroke="${c2}" stroke-width="1.5" opacity="0.6"/>
      <line x1="15" y1="80" x2="35" y2="82" stroke="${c2}" stroke-width="1.5" opacity="0.5"/>
      <line x1="20" y1="90" x2="38" y2="89" stroke="${c2}" stroke-width="1.5" opacity="0.4"/>`,
    shadowbat: `<ellipse cx="80" cy="88" rx="28" ry="30" fill="${c1}"/>
      <path d="M52 78 Q40 50 20 65 Q35 60 40 72 Q35 55 25 50 Q40 55 52 72" fill="${c1}"/>
      <path d="M108 78 Q120 50 140 65 Q125 60 120 72 Q125 55 135 50 Q120 55 108 72" fill="${c1}"/>
      <circle cx="70" cy="82" r="8" fill="#fff"/><circle cx="90" cy="82" r="8" fill="#fff"/>
      <circle cx="71" cy="82" r="5" fill="#e74c3c"/><circle cx="91" cy="82" r="5" fill="#e74c3c"/>
      <circle cx="72" cy="81" r="1.5" fill="#fff"/><circle cx="92" cy="81" r="1.5" fill="#fff"/>
      <path d="M74 100 L77 96 L80 100 L83 96 L86 100" stroke="#fff" stroke-width="1.5" fill="none"/>
      <rect x="64" y="116" width="10" height="6" rx="3" fill="${c2}"/>
      <rect x="86" y="116" width="10" height="6" rx="3" fill="${c2}"/>`,
    snowwolf: `<ellipse cx="80" cy="88" rx="36" ry="40" fill="${c1}"/>
      <polygon points="52,58 42,28 68,52" fill="${c1}"/>
      <polygon points="108,58 118,28 92,52" fill="${c1}"/>
      <polygon points="54,56 48,36 64,52" fill="#fff" opacity="0.5"/>
      <polygon points="106,56 112,36 96,52" fill="#fff" opacity="0.5"/>
      <ellipse cx="80" cy="95" rx="20" ry="16" fill="#fff" opacity="0.3"/>
      <circle cx="66" cy="80" r="8" fill="#fff"/><circle cx="94" cy="80" r="8" fill="#fff"/>
      <circle cx="68" cy="80" r="4.5" fill="#4a69bd"/><circle cx="96" cy="80" r="4.5" fill="#4a69bd"/>
      <ellipse cx="80" cy="98" rx="5" ry="4" fill="#334"/>
      <path d="M65 108 L72 104 L80 108 L88 104 L95 108" stroke="#aaa" stroke-width="1.5" fill="none"/>
      <circle cx="40" cy="45" r="2.5" fill="#fff" opacity="0.7"/>
      <circle cx="125" cy="55" r="2" fill="#fff" opacity="0.6"/>
      <circle cx="32" cy="110" r="2" fill="#fff" opacity="0.5"/>
      <rect x="54" y="122" width="16" height="10" rx="5" fill="${c2}"/>
      <rect x="90" y="122" width="16" height="10" rx="5" fill="${c2}"/>`,
    metalturtle: `<ellipse cx="80" cy="85" rx="44" ry="36" fill="${c1}"/>
      <ellipse cx="80" cy="82" rx="38" ry="30" fill="${c2}"/>
      <line x1="60" y1="65" x2="60" y2="100" stroke="${c1}" stroke-width="1.5" opacity="0.5"/>
      <line x1="80" y1="58" x2="80" y2="105" stroke="${c1}" stroke-width="1.5" opacity="0.5"/>
      <line x1="100" y1="65" x2="100" y2="100" stroke="${c1}" stroke-width="1.5" opacity="0.5"/>
      <line x1="48" y1="82" x2="112" y2="82" stroke="${c1}" stroke-width="1.5" opacity="0.5"/>
      <ellipse cx="80" cy="48" rx="16" ry="14" fill="#7f8c8d"/>
      <circle cx="74" cy="46" r="4" fill="#fff"/><circle cx="86" cy="46" r="4" fill="#fff"/>
      <circle cx="75" cy="46" r="2.5" fill="#222"/><circle cx="87" cy="46" r="2.5" fill="#222"/>
      <path d="M77 54 Q80 57 83 54" stroke="#222" stroke-width="1.5" fill="none"/>
      <rect x="40" y="108" width="14" height="10" rx="5" fill="#7f8c8d"/>
      <rect x="106" y="108" width="14" height="10" rx="5" fill="#7f8c8d"/>
      <rect x="60" y="114" width="12" height="10" rx="5" fill="#7f8c8d"/>
      <rect x="88" y="114" width="12" height="10" rx="5" fill="#7f8c8d"/>`,
    lightdeer: `<ellipse cx="80" cy="92" rx="32" ry="36" fill="${c1}"/>
      <ellipse cx="80" cy="58" rx="18" ry="20" fill="${c1}"/>
      <path d="M68 45 L62 25 L58 32 L55 20 L65 35 L68 45" fill="${c2}" stroke="${c2}" stroke-width="1"/>
      <path d="M92 45 L98 25 L102 32 L105 20 L95 35 L92 45" fill="${c2}" stroke="${c2}" stroke-width="1"/>
      <circle cx="74" cy="56" r="6" fill="#fff"/><circle cx="86" cy="56" r="6" fill="#fff"/>
      <circle cx="75" cy="57" r="3.5" fill="#222"/><circle cx="87" cy="57" r="3.5" fill="#222"/>
      <circle cx="76" cy="55" r="1.2" fill="#fff"/><circle cx="88" cy="55" r="1.2" fill="#fff"/>
      <ellipse cx="80" cy="68" rx="3" ry="2.5" fill="#222"/>
      <circle cx="80" cy="80" r="28" fill="${c2}" opacity="0.12"/>
      <rect x="60" y="122" width="12" height="12" rx="4" fill="${c1}"/>
      <rect x="88" y="122" width="12" height="12" rx="4" fill="${c1}"/>`,
    blazedragon: `<ellipse cx="80" cy="88" rx="38" ry="42" fill="${c1}"/>
      <polygon points="56,52 48,24 70,48" fill="${c2}"/><polygon points="104,52 112,24 90,48" fill="${c2}"/>
      <path d="M46 75 Q28 60 22 80 Q32 70 42 78" fill="${c1}" opacity="0.8"/>
      <path d="M114 75 Q132 60 138 80 Q128 70 118 78" fill="${c1}" opacity="0.8"/>
      <circle cx="66" cy="78" r="10" fill="#fff"/><circle cx="94" cy="78" r="10" fill="#fff"/>
      <circle cx="68" cy="78" r="6" fill="#e74c3c"/><circle cx="96" cy="78" r="6" fill="#e74c3c"/>
      <circle cx="70" cy="76" r="2" fill="#fff"/><circle cx="98" cy="76" r="2" fill="#fff"/>
      <path d="M66 104 L73 98 L80 104 L87 98 L94 104" stroke="#222" stroke-width="2" fill="none"/>
      <ellipse cx="56" cy="92" rx="7" ry="4" fill="#ff7675" opacity="0.5"/>
      <ellipse cx="104" cy="92" rx="7" ry="4" fill="#ff7675" opacity="0.5"/>
      <path d="M25 100 Q20 95 28 92" fill="${c2}" opacity="0.8"/>
      <path d="M20 96 Q15 90 24 88" fill="${c2}" opacity="0.6"/>
      <rect x="52" y="124" width="16" height="12" rx="6" fill="${c1}"/>
      <rect x="92" y="124" width="16" height="12" rx="6" fill="${c1}"/>`,
    oceanlevia: `<ellipse cx="80" cy="82" rx="40" ry="30" fill="${c1}"/>
      <path d="M120 82 Q140 75 145 85 Q140 82 135 88 Q140 92 130 95 Q135 88 120 90" fill="${c1}"/>
      <path d="M80 52 Q85 42 90 52" fill="${c2}" opacity="0.7"/>
      <path d="M95 56 Q100 48 105 58" fill="${c2}" opacity="0.6"/>
      <ellipse cx="56" cy="58" rx="14" ry="18" fill="${c1}"/>
      <circle cx="50" cy="55" r="6" fill="#fff"/><circle cx="62" cy="55" r="6" fill="#fff"/>
      <circle cx="51" cy="55" r="3.5" fill="#0a3d62"/><circle cx="63" cy="55" r="3.5" fill="#0a3d62"/>
      <path d="M52 68 Q56 72 60 68" stroke="#fff" stroke-width="1.5" fill="none"/>
      <circle cx="30" cy="100" r="3" fill="#74b9ff" opacity="0.5"/>
      <circle cx="45" cy="110" r="2.5" fill="#74b9ff" opacity="0.4"/>
      <circle cx="100" cy="105" r="3" fill="#74b9ff" opacity="0.5"/>`,
    skyphoenix: `<ellipse cx="80" cy="82" rx="28" ry="32" fill="${c1}"/>
      <path d="M52 76 Q30 50 15 68 Q28 58 38 72 Q25 48 18 55 Q35 50 48 70" fill="${c1}"/>
      <path d="M108 76 Q130 50 145 68 Q132 58 122 72 Q135 48 142 55 Q125 50 112 70" fill="${c1}"/>
      <polygon points="80,50 76,40 72,48 80,34 88,48 84,40" fill="${c2}"/>
      <circle cx="70" cy="76" r="7" fill="#fff"/><circle cx="90" cy="76" r="7" fill="#fff"/>
      <circle cx="71" cy="76" r="4" fill="#222"/><circle cx="91" cy="76" r="4" fill="#222"/>
      <polygon points="80,88 76,96 84,96" fill="#e17055"/>
      <path d="M68 110 Q72 125 80 132 Q88 125 92 110" fill="${c2}" opacity="0.8"/>
      <path d="M72 112 Q76 128 80 134 Q84 128 88 112" fill="${c1}" opacity="0.6"/>`,
    nightgriffon: `<ellipse cx="80" cy="90" rx="38" ry="40" fill="${c1}"/>
      <path d="M42 80 Q25 55 15 72 Q28 62 38 76" fill="${c2}" opacity="0.8"/>
      <path d="M118 80 Q135 55 145 72 Q132 62 122 76" fill="${c2}" opacity="0.8"/>
      <polygon points="56,56 48,30 68,50" fill="${c1}"/><polygon points="104,56 112,30 92,50" fill="${c1}"/>
      <circle cx="66" cy="80" r="9" fill="#fff"/><circle cx="94" cy="80" r="9" fill="#fff"/>
      <circle cx="68" cy="80" r="5" fill="#e74c3c"/><circle cx="96" cy="80" r="5" fill="#e74c3c"/>
      <circle cx="69" cy="79" r="1.5" fill="#fff"/><circle cx="97" cy="79" r="1.5" fill="#fff"/>
      <polygon points="80,94 76,102 84,102" fill="#f1c40f"/>
      <rect x="54" y="124" width="16" height="12" rx="6" fill="${c2}"/>
      <rect x="90" y="124" width="16" height="12" rx="6" fill="${c2}"/>`,
    chronounicorn: `<ellipse cx="80" cy="90" rx="34" ry="38" fill="${c1}"/>
      <ellipse cx="80" cy="55" rx="20" ry="22" fill="${c1}"/>
      <polygon points="80,10 76,38 84,38" fill="${c2}"/>
      <circle cx="80" cy="10" r="4" fill="#FFD700"/>
      <path d="M58 48 Q50 35 42 48 Q50 42 58 48" fill="${c1}"/>
      <path d="M102 48 Q110 35 118 48 Q110 42 102 48" fill="${c1}"/>
      <circle cx="72" cy="52" r="7" fill="#fff"/><circle cx="88" cy="52" r="7" fill="#fff"/>
      <circle cx="73" cy="53" r="4" fill="#6c5ce7"/><circle cx="89" cy="53" r="4" fill="#6c5ce7"/>
      <circle cx="74" cy="51" r="1.5" fill="#fff"/><circle cx="90" cy="51" r="1.5" fill="#fff"/>
      <path d="M76 66 Q80 70 84 66" stroke="#222" stroke-width="1.5" fill="none"/>
      <path d="M55 50 Q48 42 40 55 Q48 48 55 55" fill="${c1}" opacity="0.5"/>
      <path d="M105 50 Q112 42 120 55 Q112 48 105 55" fill="${c1}" opacity="0.5"/>
      <circle cx="80" cy="90" r="12" fill="none" stroke="${c2}" stroke-width="1" opacity="0.3"/>
      <line x1="80" y1="80" x2="80" y2="90" stroke="${c2}" stroke-width="1" opacity="0.4"/>
      <line x1="80" y1="90" x2="86" y2="86" stroke="${c2}" stroke-width="1" opacity="0.4"/>
      <rect x="56" y="122" width="14" height="12" rx="5" fill="${c1}"/>
      <rect x="90" y="122" width="14" height="12" rx="5" fill="${c1}"/>`
  };

  const body = shapes[card.shape] || shapes.flamecat;

  return `<svg viewBox="0 0 160 160" width="160" height="160">
    <defs>
      <radialGradient id="cg" cx="40%" cy="30%">
        <stop offset="0%" stop-color="#fff" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="${c1}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    ${sparkles}
    ${body}
  </svg>`;
}

function showCardModal(card, isRare) {
  const modal = $('card-modal');
  modal.className = 'card-modal' + (isRare ? ' rare' : '');
  $('card-title').textContent = isRare ? '★ レアカード GET! ★' : 'モンスターカード GET!';
  $('card-display').innerHTML = generateMonsterSVG(card, isRare);
  $('card-name').textContent = card.name + (isRare ? ' ★レア★' : '');
  const attrEl = $('card-attr');
  attrEl.textContent = card.attr;
  attrEl.setAttribute('data-attr', card.attr);
  attrEl.className = 'card-attr detail-attr';
  $('card-desc').textContent = card.desc;

  if (isRare) {
    playRareSound();
  } else {
    playCardSound();
  }

  cardOverlay.classList.remove('hidden');
}

// ---------- イベントリスナー ----------
$('start-btn').addEventListener('click', () => {
  prepareRound();
  showScreen(quizScreen);
  updateScoreDisplay();
  showQuestion();
});

$('btn-speak').addEventListener('click', () => {
  speakWord($('english-word').textContent);
});

$('btn-speak-review').addEventListener('click', () => {
  speakWord($('review-word').textContent);
});

$('sound-toggle-title').addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  updateSoundButtonText();
  saveState();
  if (state.soundOn && !audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
});

$('sound-toggle-quiz').addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  updateSoundButtonText();
  saveState();
});

$('next-round-btn').addEventListener('click', () => {
  prepareRound();
  showScreen(quizScreen);
  showQuestion();
});

$('review-btn').addEventListener('click', () => {
  startReview();
});

$('card-close-btn').addEventListener('click', () => {
  cardOverlay.classList.add('hidden');
  if (state.collectedCards.length >= normalCardsList.length && !state.completionShown) {
    state.completionShown = true;
    saveState();
    showCongratulations();
    return;
  }
  advanceAfterCard();
});

function advanceAfterCard() {
  state.roundIndex++;
  if (state.roundIndex >= 10) {
    showResult();
  } else {
    showScreen(quizScreen);
    showQuestion();
  }
}

$('next-question-btn').addEventListener('click', () => {
  $('next-question-btn').classList.add('hidden');
  if (state.pendingCard) {
    state.pendingCard = false;
    checkMonsterCard();
  } else {
    hideFeedback();
    state.roundIndex++;
    if (state.roundIndex >= 10) {
      showResult();
    } else {
      showQuestion();
    }
  }
});

function backToTitle() {
  hideFeedback();
  cardOverlay.classList.add('hidden');
  updateTitleStats();
  updateSoundButtonText();
  showScreen(titleScreen);
}

$('back-to-title-quiz').addEventListener('click', backToTitle);
$('back-to-title-review').addEventListener('click', backToTitle);

// ---------- カードコレクション ----------
function showCollection() {
  showScreen(collectionScreen);
  const normalGrid = $('collection-grid-normal');
  const rareGrid = $('collection-grid-rare');
  normalGrid.innerHTML = '';
  rareGrid.innerHTML = '';

  const nCount = state.collectedCards.length;
  const rCount = state.collectedRare.length;
  $('collection-subtitle').textContent = 'ノーマル ' + nCount + '/' + normalCardsList.length + '　レア ' + rCount + '/' + rareCardsList.length;

  normalCardsList.forEach(card => {
    const unlocked = state.collectedCards.includes(card.name);
    const el = createCollectionCard(card, false, unlocked);
    normalGrid.appendChild(el);
  });

  rareCardsList.forEach(card => {
    const unlocked = state.collectedRare.includes(card.name);
    const el = createCollectionCard(card, true, unlocked);
    rareGrid.appendChild(el);
  });
}

function createCollectionCard(card, isRare, unlocked) {
  const div = document.createElement('div');
  div.className = 'collection-card' + (unlocked ? '' : ' locked') + (isRare && unlocked ? ' rare-card' : '');

  const imgDiv = document.createElement('div');
  imgDiv.className = 'collection-card-img';
  imgDiv.innerHTML = generateMonsterSVG(card, isRare && unlocked);

  const nameP = document.createElement('p');
  nameP.className = 'collection-card-name';
  nameP.textContent = unlocked ? card.name : '？？？';

  div.appendChild(imgDiv);
  div.appendChild(nameP);

  if (unlocked) {
    div.addEventListener('click', () => showCardDetail(card, isRare));
  }

  return div;
}

$('collection-btn').addEventListener('click', showCollection);
$('collection-close-btn').addEventListener('click', backToTitle);

// ---------- カード詳細 ----------
function showCardDetail(card, isRare) {
  const modal = $('detail-modal');
  modal.className = 'detail-modal' + (isRare ? ' rare' : '');
  $('detail-card-img').innerHTML = generateMonsterSVG(card, isRare);
  $('detail-name').textContent = card.name + (isRare ? ' ★レア★' : '');
  const attrEl = $('detail-attr');
  attrEl.textContent = card.attr;
  attrEl.setAttribute('data-attr', card.attr);
  $('detail-desc').textContent = card.desc;
  $('detail-english').textContent = card.english;
  detailOverlay.classList.remove('hidden');
}

$('detail-close-btn').addEventListener('click', () => {
  detailOverlay.classList.add('hidden');
});

// ---------- コンプリート機能 ----------
function showCongratulations() {
  congratsOverlay.classList.remove('hidden');
  playCelebrationSound();
  launchConfetti();
}

function playCelebrationSound() {
  if (!state.soundOn) return;
  try {
    const ctx = getAudioCtx();
    const melody = [523, 587, 659, 698, 784, 880, 988, 1047, 1175, 1319];
    melody.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.4);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.4);
    });
  } catch (e) {}
}

function launchConfetti() {
  const canvas = $('confetti-canvas');
  canvas.innerHTML = '';
  const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#e84393', '#FFD700', '#ff6b81', '#00cec9'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = '-10px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (6 + Math.random() * 8) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (2 + Math.random() * 3) + 's';
    piece.style.animationDelay = (Math.random() * 2) + 's';
    canvas.appendChild(piece);
  }
}

$('congrats-close-btn').addEventListener('click', () => {
  congratsOverlay.classList.add('hidden');
  $('confetti-canvas').innerHTML = '';
  advanceAfterCard();
});

// ---------- リセット ----------
$('reset-btn').addEventListener('click', () => {
  resetOverlay.classList.remove('hidden');
});

$('reset-no').addEventListener('click', () => {
  resetOverlay.classList.add('hidden');
});

$('reset-yes').addEventListener('click', () => {
  localStorage.removeItem('eiken3_al_state');
  state.totalCorrect = 0;
  state.totalCards = 0;
  state.totalRare = 0;
  state.usedIndices = [];
  state.nextCardAt = 50;
  state.collectedCards = [];
  state.collectedRare = [];
  state.completionShown = false;
  updateScoreDisplay();
  updateSoundButtonText();
  resetOverlay.classList.add('hidden');
});

// ---------- 初期化 ----------
loadState();
updateScoreDisplay();
updateSoundButtonText();
