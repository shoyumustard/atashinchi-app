const subtitles = [
  {
    japanese: "（母）みかん さあ朝よ 早く起きなさい",
    furigana: "（はは）みかん さああさよ はやくおきなさい",
    english: "(Mom): Mikan, come on, it's morning. Wake up quickly.",
    start: 14.348,
    end: 17.268
  },
  {
    japanese: "みかん さあ朝よ 早く起きなさい",
    furigana: "みかん さああさよ はやくおきなさい",
    english: "Mikan, come on, it's morning. Wake up soon.",
    start: 17.81,
    end: 20.98
  },
  {
    japanese: "みかん さあ朝よ 早く起きなさい",
    furigana: "みかん さああさよ はやくおきなさい",
    english: "Mikan, it's morning now. Wake up quickly.",
    start: 21.355,
    end: 24.4
  },
  {
    japanese: "（みかん）ムニャムニャ",
    furigana: "（みかん）むにゃむにゃ",
    english: "(Mikan) Mumbling",
    start: 24.483,
    end: 25.443
  },
  {
    japanese: "（母）むっ！",
    furigana: "（はは）むっ！",
    english: "(Mother) Humph!",
    start: 25.526,
    end: 26.527
  },
  {
    japanese: "（みかん）い～や～っ！",
    furigana: "（みかん）い～や～っ！",
    english: "(Mandarin oranges) Yayyy!",
    start: 35.077,
    end: 37.163
  },
  {
    japanese: "（みかん）ハハハ… （母）みかん",
    furigana: "（みかん）ははは… （はは）みかん",
    english: "(Mikan) Hahaha... (Mother) Mikan",
    start: 37.246,
    end: 38.497
  },
  {
    japanese: "（みかん）わっ 分かった… （母）さあ朝よ…",
    furigana: "（みかん）わっ わかった… （はは）さああさよ…",
    english: "(Mikan) Oh, I see... (Mother) Come on, it's morning...",
    start: 38.581,
    end: 40.583
  },
  {
    japanese: "（みかん）起きるから… （母）さあ朝よ 起きなさい",
    furigana: "（みかん）おきるから… （はは）さああさよ おきなさい",
    english: "(Mikan) Because I'm waking up... (Mother) Come on, it's morning. Wake up.",
    start: 40.666,
    end: 43.586
  },
  {
    japanese: "みかん さあ…",
    furigana: "みかん さあ…",
    english: "Mikan, well...",
    start: 43.669,
    end: 45.421
  },
  {
    japanese: "（母）おはよう みかん",
    furigana: "（はは）おはよう みかん",
    english: "(Mother) Good morning, Mikan.",
    start: 46.38,
    end: 47.715
  },
  {
    japanese: "朝ごはん できてるわよ",
    furigana: "あさごはん できてるわよ",
    english: "Breakfast is ready.",
    start: 47.798,
    end: 49.508
  },
  {
    japanese: "ふあ～あ",
    furigana: "ふあ～あ",
    english: "Phew~",
    start: 49.592,
    end: 51.51
  },
  {
    japanese: "（みかん）西暦 2357年",
    furigana: "（みかん）せいれき 2357ねん",
    english: "(Mikan) The year 2357 AD",
    start: 51.886,
    end: 54.388
  },
  {
    japanese: "あたしたちの生活は",
    furigana: "あたしたちのせいかつは",
    english: "Our life is",
    start: 54.68,
    end: 56.265
  },
  {
    japanese: "ボタンをピッと押せば なんでもできるようになった",
    furigana: "ぼたんをぴっとおせば なんでもできるようになった",
    english: "With just a click of a button, we can now do anything.",
    start: 56.348,
    end: 59.643
  },
  {
    japanese: "例えば 面倒くさ～い朝のメイクも",
    furigana: "たとえば めんどうくさ～いあさのめいくも",
    english: "For example, even the bothersome morning makeup routine",
    start: 60.019,
    end: 62.938
  },
  {
    japanese: "指先１つでピッ",
    furigana: "ゆびさき１つでぴっ",
    english: "You can play it with just one fingertip.",
    start: 63.022,
    end: 64.44
  },
  {
    japanese: "（母）いつものにしなさい！",
    furigana: "（はは）いつものにしなさい！",
    english: "(Mother) Stick to the usual!",
    start: 64.857,
    end: 66.484
  },
  {
    japanese: "あっ！",
    furigana: "あっ！",
    english: "Oh!",
    start: 66.984,
    end: 67.818
  },
  {
    japanese: "トホホ…",
    furigana: "とほほ…",
    english: "Oh, dear...",
    start: 70.196,
    end: 71.322
  },
  {
    japanese: "（みかん）お父さんのひげそりも…",
    furigana: "（みかん）おとうさんのひげそりも…",
    english: "(The orange) Even dad's razor...",
    start: 71.697,
    end: 73.824
  },
  {
    japanese: "着替えだって…",
    furigana: "きがえだって…",
    english: "Even changing clothes...",
    start: 78.037,
    end: 79.205
  },
  {
    japanese: "ピッピッピ～で終了",
    furigana: "ぴっぴっぴ～でしゅうりょう",
    english: "Finished with a beep-beep-beep.",
    start: 81.832,
    end: 83.793
  },
  {
    japanese: "おはよう",
    furigana: "おはよう",
    english: "Good morning.",
    start: 85.336,
    end: 86.42
  },
  {
    japanese: "（みかん）こんなふうに あたしたちの暮らしは",
    furigana: "（みかん）こんなふうに あたしたちのくらしは",
    english: "(Mikan) Our life goes on like this.",
    start: 86.545,
    end: 88.506
  },
  {
    japanese: "とっても便利になったんだけど…",
    furigana: "とってもべんりになったんだけど…",
    english: "It's become really convenient, but...",
    start: 88.589,
    end: 90.549
  },
  {
    japanese: "（唾を飲み込む音）",
    furigana: "（つばをのみこむおと）",
    english: "(sound of swallowing saliva)",
    start: 92.76,
    end: 93.761
  },
  {
    japanese: "（爆発音） （３人）あ～っ！",
    furigana: "（ばくはつおん） （３にん）あ～っ！",
    english: "(Explosion sound) (3 people) Ahhh!",
    start: 100.81,
    end: 102.436
  },
  {
    japanese: "（父）なんだ なんだ？",
    furigana: "（ちち）なんだ なんだ？",
    english: "(Dad) What is it, what is it?",
    start: 103.27,
    end: 104.396
  },
  {
    japanese: "（ユズヒコ）いったい 何が爆発したんだよ！",
    furigana: "（ゆずひこ）いったい なにがばくはつしたんだよ！",
    english: "(Yuzuhiko) What on earth just exploded!?",
    start: 104.48,
    end: 106.774
  },
  {
    japanese: "（３人）のあ～っ！",
    furigana: "（３にん）のあ～っ！",
    english: "The \"Ah!\" of three people!",
    start: 107.483,
    end: 108.818
  },
  {
    japanese: "（みかん）ちょっとお母さん 大丈夫？",
    furigana: "（みかん）ちょっとおかあさん だいじょうぶ？",
    english: "(Mikan) Hey Mom, are you okay?",
    start: 108.901,
    end: 110.986
  },
  {
    japanese: "（みかん）うちのお母さんだけは",
    furigana: "（みかん）うちのおかあさんだけは",
    english: "(Regarding mandarins) Only my mother...",
    start: 112.404,
    end: 114.198
  },
  {
    japanese: "どうも この ボタン１つでピッピの機械と",
    furigana: "どうも この ぼたん１つでぴっぴのきかいと",
    english: "Thank you. With just this one button, you can control Pippi's machine.",
    start: 114.281,
    end: 117.576
  },
  {
    japanese: "相性が悪いらしく…",
    furigana: "あいしょうがわるいらしく…",
    english: "It seems we're not a good match...",
    start: 117.66,
    end: 119.286
  },
  {
    japanese: "（母）プハッ…",
    furigana: "（はは）ぷはっ…",
    english: "(Mother) Phew...",
    start: 119.37,
    end: 120.496
  },
  {
    japanese: "（みかん）掃除機のスイッチを 入れれば",
    furigana: "（みかん）そうじきのすいっちを いれれば",
    english: "(Orange) Once you switch on the vacuum cleaner,",
    start: 122.54,
    end: 124.959
  },
  {
    japanese: "（鼻歌）",
    furigana: "（はなうた）",
    english: "(Humming)",
    start: 125.501,
    end: 128.045
  },
  {
    japanese: "ああ～っ！",
    furigana: "ああ～っ！",
    english: "Ah!",
    start: 129.63,
    end: 130.923
  },
  {
    japanese: "えっ え… も～！",
    furigana: "えっ え… も～！",
    english: "Huh? What... Seriously?!",
    start: 131.048,
    end: 133.259
  },
  {
    japanese: "あ～っ！ 何でよ～っ",
    furigana: "あ～っ！ なんでよ～っ",
    english: "Ah! Why is this happening!?",
    start: 133.342,
    end: 137.012
  },
  {
    japanese: "（みかん）洗濯機の スイッチを入れれば…",
    furigana: "（みかん）せんたくきの すいっちをいれれば…",
    english: "(Orange) If you turn on the washing machine...",
    start: 137.847,
    end: 140.14
  },
  {
    japanese: "うわあ～っ",
    furigana: "うわあ～っ",
    english: "Wow!",
    start: 141.767,
    end: 143.102
  },
  {
    japanese: "（みかん）といった感じで いちいち大騒ぎ",
    furigana: "（みかん）といったかんじで いちいちおおさわぎ",
    english: "Making a big fuss over everything, like it's an orange (mikan).",
    start: 144.77,
    end: 147.565
  },
  {
    japanese: "結局 ボタンの苦手な母は…",
    furigana: "けっきょく ぼたんのにがてなははは…",
    english: "In the end, my mother who is not good with buttons...",
    start: 148.232,
    end: 150.651
  },
  {
    japanese: "昔 昔のやり方でしか 家のことができないという…",
    furigana: "むかし むかしのやりほうでしか いえのことができないという…",
    english: "Saying that household chores can only be done in the old-fashioned way...",
    start: 150.734,
    end: 154.363
  },
  {
    japanese: "今どき珍しいタイプの お母さんなのであった",
    furigana: "いまどきめずらしいたいぷの おかあさんなのであった",
    english: "She was a rare type of mother for this day and age.",
    start: 154.446,
    end: 157.616
  },
  {
    japanese: "（しみちゃん）ふ～ん だから みかんのお弁当って",
    furigana: "（しみちゃん）ふ～ん だから みかんのおべんとうって",
    english: "(Shimi-chan) Hmm, so that's why it's a mikan (orange) bento...",
    start: 164.415,
    end: 166.917
  },
  {
    japanese: "いつも お母さんの手作りなんだね",
    furigana: "いつも おかあさんのてづくりなんだね",
    english: "It's always homemade by your mom, isn't it?",
    start: 167.001,
    end: 169.211
  },
  {
    japanese: "そっ けさもクッキングマシンを 爆発させちゃってさ～",
    furigana: "そっ けさもくっきんぐましんを ばくはつさせちゃってさ～",
    english: "Oh man, I accidentally blew up the cooking machine this morning!",
    start: 169.295,
    end: 173.215
  },
  {
    japanese: "見て かろうじて 無事だったごはんを",
    furigana: "みて かろうじて ぶじだったごはんを",
    english: "Looking at it, the meal was barely unharmed.",
    start: 173.549,
    end: 176.176
  },
  {
    japanese: "（母）あちちっ",
    furigana: "（はは）あちちっ",
    english: "(Mother) Ouch!",
    start: 176.26,
    end: 176.969
  },
  {
    japanese: "（みかん）大慌てで 握っただけなんだから",
    furigana: "（みかん）だいあわてで にぎっただけなんだから",
    english: "(I just) grabbed the mandarin in a huge panic.",
    start: 177.052,
    end: 179.43
  },
  {
    japanese: "熱い～っ！",
    furigana: "あつい～っ！",
    english: "It's so hot!",
    start: 179.513,
    end: 180.764
  },
  {
    japanese: "今どき こんな お弁当食べてる高校生って",
    furigana: "いまどき こんな おべんとうたべてるこうこうせいって",
    english: "High school students eating these kinds of lunch boxes nowadays...",
    start: 181.432,
    end: 184.393
  },
  {
    japanese: "あたしだけだよね きっと",
    furigana: "あたしだけだよね きっと",
    english: "It's just me, isn't it? I'm sure.",
    start: 184.56,
    end: 186.437
  },
  {
    japanese: "ハハ…",
    furigana: "はは…",
    english: "Haha...",
    start: 186.52,
    end: 187.354
  },
  {
    japanese: "（ゆかりん）ねねっ それって おにぎりっていうんでしょ？",
    furigana: "（ゆかりん）ねねっ それって おにぎりっていうんでしょ？",
    english: "(Yukarin) Hey, isn't that called a rice ball?",
    start: 187.438,
    end: 190.274
  },
  {
    japanese: "すごいね～ みかんのお母さんって",
    furigana: "すごいね～ みかんのおかあさんって",
    english: "Wow~ So you're the mother of Mikan, huh?",
    start: 190.441,
    end: 192.985
  },
  {
    japanese: "すごい？ どこが？",
    furigana: "すごい？ どこが？",
    english: "Amazing? In what way?",
    start: 193.11,
    end: 195.07
  },
  {
    japanese: "すごいよ～！ だって そんな",
    furigana: "すごいよ～！ だって そんな",
    english: "Amazing, isn't it?! Because, like, you know...",
    start: 195.237,
    end: 197.573
  },
  {
    japanese: "歴史の教科書にしか 載ってないような料理を",
    furigana: "れきしのきょうかしょにしか のってないようなりょうりを",
    english: "Dishes that seem to only appear in history textbooks",
    start: 197.656,
    end: 200.284
  },
  {
    japanese: "パパ～って 朝の忙しい時間に 作っちゃうんでしょ？",
    furigana: "ぱぱ～って あさのいそがしいじかんに つくっちゃうんでしょ？",
    english: "Dad, you make it during the busy morning time, don't you?",
    start: 200.367,
    end: 203.537
  },
  {
    japanese: "うちのお母さんには とてもマネできないよ～",
    furigana: "うちのおかあさんには とてもまねできないよ～",
    english: "I just can't imitate my mom at all~",
    start: 204.038,
    end: 206.957
  },
  {
    japanese: "言えてる",
    furigana: "いえてる",
    english: "I can say it.",
    start: 207.041,
    end: 208.125
  },
  {
    japanese: "あたしらのこれなんて",
    furigana: "あたしらのこれなんて",
    english: "What do you think about ours?",
    start: 208.208,
    end: 209.46
  },
  {
    japanese: "ボタン１つ押すだけで 出てくるだけじゃん",
    furigana: "ぼたん１つおすだけで でてくるだけじゃん",
    english: "You just have to press a button and it comes out, doesn't it?",
    start: 209.543,
    end: 212.212
  },
  {
    japanese: "それに比べれば",
    furigana: "それにくらべれば",
    english: "Compared to that",
    start: 212.504,
    end: 213.714
  },
  {
    japanese: "みかんのお母さんって 本当 すごいと思うよ",
    furigana: "みかんのおかあさんって ほんとう すごいとおもうよ",
    english: "I truly think the mother of the mandarin orange is amazing.",
    start: 213.797,
    end: 216.508
  },
  {
    japanese: "そっ そうかな？",
    furigana: "そっ そうかな？",
    english: "Oh, is that so?",
    start: 217.051,
    end: 218.344
  },
  {
    japanese: "そんなことないと思うけど…",
    furigana: "そんなことないとおもうけど…",
    english: "I don't think that's the case, but...",
    start: 218.427,
    end: 220.554
  },
  {
    japanese: "（２人）ん？",
    furigana: "（２にん）ん？",
    english: "(Two people) Huh?",
    start: 220.638,
    end: 221.388
  },
  {
    japanese: "ねっ 中に入ってるそれ 何？",
    furigana: "ねっ なかにいっってるそれ なに？",
    english: "Hey, what's that inside?",
    start: 221.472,
    end: 223.933
  },
  {
    japanese: "（みかん）えっ？",
    furigana: "（みかん）えっ？",
    english: "(Mandarin) Huh?",
    start: 224.016,
    end: 224.642
  },
  {
    japanese: "ちくわ…",
    furigana: "ちくわ…",
    english: "Chikuwa...",
    start: 225.392,
    end: 226.602
  },
  {
    japanese: "（２人）ちくわ？",
    furigana: "（２にん）ちくわ？",
    english: "(Two people) Chikuwa?",
    start: 227.061,
    end: 228.228
  },
  {
    japanese: "（２人）ん？ （みかん）あ…",
    furigana: "（２にん）ん？ （みかん）あ…",
    english: "(Two people) Huh? (Mikan) Oh...",
    start: 228.687,
    end: 229.855
  },
  {
    japanese: "なぜか お母さんが 大好きなおかずなんだよね",
    furigana: "なぜか おかあさんが だいすきなおかずなんだよね",
    english: "For some reason, it's mom's favorite dish.",
    start: 230.105,
    end: 233.817
  },
  {
    japanese: "（アナウンス）いらっしゃいませ ロイヤルラーク…",
    furigana: "（あなうんす）いらっしゃいませ ろいやるらーく…",
    english: "(Announcement) Welcome to Royal Lark...",
    start: 241.825,
    end: 244.328
  },
  {
    japanese: "（戸山とやま）え～っと ２人とも",
    furigana: "（とやまとやま）え～っと ２にんとも",
    english: "(Umm, Hoyama) Well, both of you...",
    start: 246.08,
    end: 247.665
  },
  {
    japanese: "Ｂランチにドリンクバーで いいのよね？",
    furigana: "Ｂらんちにどりんくばーで いいのよね？",
    english: "It's okay to have a drink bar for B lunch, right?",
    start: 247.748,
    end: 250.084
  },
  {
    japanese: "（母たち）ええ",
    furigana: "（ははたち）ええ",
    english: "(Mothers) Yes.",
    start: 250.25,
    end: 251.251
  },
  {
    japanese: "（水島みずしま）あっ ドリンクの氷は少なめでね",
    furigana: "（みずしまみずしま）あっ どりんくのこおりはすくなめでね",
    english: "(Mizushima) Ah, please go easy on the ice in my drink.",
    start: 252.044,
    end: 254.463
  },
  {
    japanese: "はいは～い 氷は少なめと",
    furigana: "はいは～い こおりはすくなめと",
    english: "Yes, yes~ I'd like less ice, please.",
    start: 254.672,
    end: 256.715
  },
  {
    japanese: "（アナウンス）かしこまりました Ｂランチに…",
    furigana: "（あなうんす）かしこまりました Ｂらんちに…",
    english: "(Announcement) Understood...for B lunch...",
    start: 257.716,
    end: 259.802
  },
  {
    japanese: "わあっ すごいわ～ 戸山さん",
    furigana: "わあっ すごいわ～ とやまさん",
    english: "Wow, amazing! Mr./Ms. Toyama!",
    start: 265.557,
    end: 267.935
  },
  {
    japanese: "どうしたら そんなに鮮やかに",
    furigana: "どうしたら そんなにせんやかに",
    english: "How can it be so vivid?",
    start: 268.018,
    end: 269.728
  },
  {
    japanese: "ピッピッピ～ってできるの？",
    furigana: "ぴっぴっぴ～ってできるの？",
    english: "Can you make a \"pip pip pip\" sound?",
    start: 269.812,
    end: 271.605
  },
  {
    japanese: "いやあねえ タチバナさん",
    furigana: "いやあねえ たちばなさん",
    english: "Well, Mr. Tachibana.",
    start: 271.772,
    end: 273.44
  },
  {
    japanese: "こんなの 説明書どおりに押せば 誰でもできる…",
    furigana: "こんなの せつめいしょどおりにおせば だれでもできる…",
    english: "Anyone can do this if they just follow the instructions...",
    start: 273.524,
    end: 276.318
  },
  {
    japanese: "戸山さん ダメよ",
    furigana: "とやまさん だめよ",
    english: "Hoyama-san, that's not okay.",
    start: 276.402,
    end: 277.528
  },
  {
    japanese: "（戸山）あっ！",
    furigana: "（とやま）あっ！",
    english: "(Hoyama) Ah!",
    start: 277.611,
    end: 278.445
  },
  {
    japanese: "そうよね 誰でもできること…",
    furigana: "そうよね だれでもできること…",
    english: "Right, anyone can do it...",
    start: 280.322,
    end: 283.367
  },
  {
    japanese: "なのよね",
    furigana: "なのよね",
    english: "Isn't it?",
    start: 283.701,
    end: 284.827
  },
  {
    japanese: "（戸山･水島）あ…",
    furigana: "（とやま･みずしま）あ…",
    english: "(Toyama/Mizushima) Ah...",
    start: 284.952,
    end: 286.245
  },
  {
    japanese: "や～だ タチバナさん",
    furigana: "や～だ たちばなさん",
    english: "I don't want to, Mr. Tachibana.",
    start: 287.287,
    end: 288.914
  },
  {
    japanese: "ボタンを ちゃんと 押せないくらいのことで",
    furigana: "ぼたんを ちゃんと おせないくらいのことで",
    english: "Due to something as trivial as not being able to press the button properly.",
    start: 288.998,
    end: 290.833
  },
  {
    japanese: "落ち込まないでよ ねえ？",
    furigana: "おちこまないでよ ねえ？",
    english: "Don't feel down, okay?",
    start: 290.916,
    end: 292.71
  },
  {
    japanese: "そっ そうよ それに いまどき 炊事 掃除 洗濯",
    furigana: "そっ そうよ それに いまどき すいじ そうじ せんたく",
    english: "That's right. Besides, nowadays, cooking, cleaning, and laundry are common things.",
    start: 292.793,
    end: 296.088
  },
  {
    japanese: "ぜ～んぶ 自分の手を使って できる主婦なんて",
    furigana: "ぜ～んぶ じぶんのてをつかって できるしゅふなんて",
    english: "A housewife who can do everything using her own hands.",
    start: 296.171,
    end: 298.757
  },
  {
    japanese: "日本で… いいえ 世界中でも",
    furigana: "にっぽんで… いいえ せかいじゅうでも",
    english: "In Japan... no, all over the world.",
    start: 298.841,
    end: 301.01
  },
  {
    japanese: "タチバナさん以外 いないわよ きっと！",
    furigana: "たちばなさんいがい いないわよ きっと！",
    english: "There's definitely no one else but Mr. Tachibana!",
    start: 301.093,
    end: 303.971
  },
  {
    japanese: "すご～い かっこい～い",
    furigana: "すご～い かっこい～い",
    english: "Wow, so cool!",
    start: 304.43,
    end: 306.265
  },
  {
    japanese: "タチバナさん まるで 天然記念物ものよ～！",
    furigana: "たちばなさん まるで てんねんきねんぶつものよ～！",
    english: "Mr. Tachibana is just like a national treasure!",
    start: 306.348,
    end: 309.226
  },
  {
    japanese: "水島さん それを言うなら人間国宝",
    furigana: "みずしまさん それをいうならにんげんこくほう",
    english: "Mizushima-san, if you're going to say it like that, you're like a living national treasure.",
    start: 309.309,
    end: 312.938
  },
  {
    japanese: "（２人）はっ！",
    furigana: "（２にん）はっ！",
    english: "(Both) Huh!",
    start: 313.147,
    end: 314.189
  },
  {
    japanese: "天然… 記念物…",
    furigana: "てんねん… きねんぶつ…",
    english: "Natural... Monument...",
    start: 315.274,
    end: 317.443
  },
  {
    japanese: "そうね…",
    furigana: "そうね…",
    english: "Well...",
    start: 317.693,
    end: 318.694
  },
  {
    japanese: "私みたいな ボタン音痴の女は",
    furigana: "わたしみたいな ぼたんおんちのおんなは",
    english: "A woman like me who can't figure out buttons...",
    start: 319.153,
    end: 322.031
  },
  {
    japanese: "マンモスとか サーベルタイガーみたく…",
    furigana: "まんもすとか さーべるたいがーみたく…",
    english: "Like mammoths or saber-toothed tigers...",
    start: 322.114,
    end: 325.034
  },
  {
    japanese: "はかなく滅び行く",
    furigana: "はかなくほろびいく",
    english: "Fading away fleetingly.",
    start: 325.117,
    end: 326.493
  },
  {
    japanese: "時代遅れの女なのよね～ ああ…",
    furigana: "じだいおくれのおんななのよね～ ああ…",
    english: "She's such an old-fashioned woman, huh... Ah...",
    start: 326.577,
    end: 330.039
  },
  {
    japanese: "（母）うっ （戸山･水島）うわあ…",
    furigana: "（はは）うっ （とやま･みずしま）うわあ…",
    english: "(Mother) Uhh... (Toyama/Mizushima) Whoa...",
    start: 330.789,
    end: 332.082
  },
  {
    japanese: "（アナウンス）いらっしゃいませ ロイヤルラークへようこそ",
    furigana: "（あなうんす）いらっしゃいませ ろいやるらーくへようこそ",
    english: "(Announcement) Welcome to Royal Lark.",
    start: 333.5,
    end: 335.961
  },
  {
    japanese: "ようこそ ようこ… ようこそ",
    furigana: "ようこそ ようこ… ようこそ",
    english: "Welcome... welcome... welcome.",
    start: 336.17,
    end: 338.172
  },
  {
    japanese: "いら… いらっしゃいませ",
    furigana: "いら… いらっしゃいませ",
    english: "Welcome... Please come in.",
    start: 338.38,
    end: 339.381
  },
  {
    japanese: "（２人）タチバナさん！",
    furigana: "（２にん）たちばなさん！",
    english: "(Two people) Mr. Tachibana!",
    start: 339.465,
    end: 340.758
  },
  {
    japanese: "（アナウンス）ロイヤ… ロイヤルラークへ…",
    furigana: "（あなうんす）ろいや… ろいやるらーくへ…",
    english: "(Announcement) To the Royal... To the Royal Lark...",
    start: 340.841,
    end: 342.593
  },
  {
    japanese: "（２人）ひっ！ （アナウンス）ようこそ",
    furigana: "（２にん）ひっ！ （あなうんす）ようこそ",
    english: "(Two people) Gasp! (Announcement) Welcome!",
    start: 343.01,
    end: 344.303
  },
  {
    japanese: "よ よ よ よよよよ…",
    furigana: "よ よ よ よよよよ…",
    english: "Yo Yo Yo YoYoYoYo...",
    start: 344.72,
    end: 347.347
  },
  {
    japanese: "（戸山･水島）ギャ～っ！",
    furigana: "（とやま･みずしま）ぎゃ～っ！",
    english: "(Hotoyama/Mizushima) Ahhhh!",
    start: 347.431,
    end: 351.185
  },
  {
    japanese: "（母）ハア…",
    furigana: "（はは）はあ…",
    english: "(Mother) Sigh...",
    start: 356.982,
    end: 358.233
  },
  {
    japanese: "もしかしたら あたし…",
    furigana: "もしかしたら あたし…",
    english: "Maybe I...",
    start: 360.11,
    end: 361.945
  },
  {
    japanese: "生まれてくる時代を 間違えたのかしらねえ",
    furigana: "うまれてくるじだいを まちがえたのかしらねえ",
    english: "I wonder if I was born in the wrong era.",
    start: 363.322,
    end: 366.7
  },
  {
    japanese: "ただいま",
    furigana: "ただいま",
    english: "I'm home.",
    start: 370.871,
    end: 372.164
  },
  {
    japanese: "（みかん）お母さん 大変 大変",
    furigana: "（みかん）おかあさん たいへん たいへん",
    english: "(Mikan) Mom, it's really tough. It's really tough.",
    start: 375.167,
    end: 377.169
  },
  {
    japanese: "（母）ん？",
    furigana: "（はは）ん？",
    english: "(Mother) Hm?",
    start: 377.252,
    end: 377.878
  },
  {
    japanese: "お母さんがテレビで 大変なんだってば",
    furigana: "おかあさんがてれびで たいへんなんだってば",
    english: "Mom said it's really tough on TV.",
    start: 378.337,
    end: 380.964
  },
  {
    japanese: "え～ テレビ？",
    furigana: "え～ てれび？",
    english: "Huh? Television?",
    start: 381.048,
    end: 382.633
  },
  {
    japanese: "嫌だ ちょっと何？",
    furigana: "いやだ ちょっとなに？",
    english: "I don't like it. What the...?",
    start: 382.841,
    end: 385.052
  },
  {
    japanese: "（テレビの音声）",
    furigana: "（てれびのおんせい）",
    english: "(TV audio)",
    start: 385.135,
    end: 386.011
  },
  {
    japanese: "ちょっと なんなの？",
    furigana: "ちょっと なんなの？",
    english: "What's going on?",
    start: 386.095,
    end: 387.471
  },
  {
    japanese: "ほっ ほら テレビテレビ",
    furigana: "ほっ ほら てれびてれび",
    english: "Oh, look, the television!",
    start: 387.971,
    end: 389.598
  },
  {
    japanese: "もう テレビがなんなのよ？",
    furigana: "もう てれびがなんなのよ？",
    english: "What's the point of TV anymore?",
    start: 390.14,
    end: 392.351
  },
  {
    japanese: "え～っ！",
    furigana: "え～っ！",
    english: "What?!",
    start: 392.726,
    end: 394.144
  },
  {
    japanese: "なんで私が テレビに映ってるの～っ！",
    furigana: "なんでわたしが てれびにうつってるの～っ！",
    english: "Why am I on TV?",
    start: 394.603,
    end: 398.607
  },
  {
    japanese: "（アナウンサー）日本政府は",
    furigana: "（あなうんさー）にほんせいふは",
    english: "(Announcer) The Japanese government",
    start: 398.69,
    end: 399.858
  },
  {
    japanese: "東京シティのお住まいの主婦",
    furigana: "とうきょうしてぃのおすまいのしゅふ",
    english: "A housewife living in Tokyo City",
    start: 399.942,
    end: 401.902
  },
  {
    japanese: "タチバナさんちのお母さんを",
    furigana: "たちばなさんちのおかあさんを",
    english: "Mr. Tachibana's mother",
    start: 401.985,
    end: 403.779
  },
  {
    japanese: "主婦の中の主婦",
    furigana: "しゅふのなかのしゅふ",
    english: "A housewife among housewives",
    start: 403.862,
    end: 405.405
  },
  {
    japanese: "本年のお母さんオブ お母さんとして",
    furigana: "ほんねんのおかあさんおぶ おかあさんとして",
    english: "As this year's Mother of Mothers",
    start: 405.489,
    end: 408.2
  },
  {
    japanese: "表彰することを 決定しました",
    furigana: "ひょうしょうすることを けっていしました",
    english: "We have decided to give recognition.",
    start: 408.283,
    end: 410.119
  },
  {
    japanese: "この選定の理由は",
    furigana: "このせんていのりゆうは",
    english: "The reason for this selection is",
    start: 410.494,
    end: 411.954
  },
  {
    japanese: "ボタン１つで なんでも できてしまう現代にあって",
    furigana: "ぼたん１つで なんでも できてしまうげんだいにあって",
    english: "In a modern age where anything can be done with the push of a button,",
    start: 412.037,
    end: 415.124
  },
  {
    japanese: "数百年前と同じように",
    furigana: "すうひゃくねんまえとおなじように",
    english: "Just like hundreds of years ago",
    start: 415.582,
    end: 417.292
  },
  {
    japanese: "自分の手で",
    furigana: "じぶんのてで",
    english: "With my own hands",
    start: 417.376,
    end: 418.377
  },
  {
    japanese: "子どもたちや旦那さんのために",
    furigana: "こどもたちやだんなさんのために",
    english: "For the children and husband.",
    start: 418.46,
    end: 420.337
  },
  {
    japanese: "毎朝 手作り弁当を用意し",
    furigana: "まいあさ てづくりべんとうをよういし",
    english: "I prepare a homemade lunch box every morning.",
    start: 420.42,
    end: 422.464
  },
  {
    japanese: "洗濯や掃除まで 機械に頼らず",
    furigana: "せんたくやそうじまで きかいにたよらず",
    english: "Without relying on machines for laundry or cleaning",
    start: 423.048,
    end: 425.217
  },
  {
    japanese: "自分の手でするという",
    furigana: "じぶんのてでするという",
    english: "Doing it with your own hands.",
    start: 425.3,
    end: 426.76
  },
  {
    japanese: "その良妻賢母の 鏡のような生き方に",
    furigana: "そのりょうさいけんぼの かがみのようないきかたに",
    english: "Living life like a paragon of a good wife and wise mother.",
    start: 426.885,
    end: 429.805
  },
  {
    japanese: "総理大臣が 深く 感銘を受けたためです",
    furigana: "そうりだいじんが ふかく かんめいをうけたためです",
    english: "It's because the Prime Minister was deeply impressed.",
    start: 430.139,
    end: 432.683
  },
  {
    japanese: "ねえ ちょっと…",
    furigana: "ねえ ちょっと…",
    english: "Hey, can I have a moment...",
    start: 433.725,
    end: 435.144
  },
  {
    japanese: "お父さん どうしよう…",
    furigana: "おとうさん どうしよう…",
    english: "Dad, what should I do...",
    start: 436.061,
    end: 437.771
  },
  {
    japanese: "ねえ みかん",
    furigana: "ねえ みかん",
    english: "Hey, Mandarin orange.",
    start: 438.438,
    end: 439.69
  },
  {
    japanese: "ユーちゃん どうしよう～",
    furigana: "ゆーちゃん どうしよう～",
    english: "What should I do, Yu-chan~?",
    start: 439.94,
    end: 442.359
  },
  {
    japanese: "（父たち）あっ！",
    furigana: "（ちちたち）あっ！",
    english: "(Dads) Oh!",
    start: 442.484,
    end: 443.277
  },
  {
    japanese: "（父）おい こりゃ うちの前じゃないか",
    furigana: "（ちち）おい こりゃ うちのまえじゃないか",
    english: "(Dad) Hey, isn't this our front yard?",
    start: 443.36,
    end: 445.612
  },
  {
    japanese: "（アナウンサー） ここ タチバナ家前は",
    furigana: "（あなうんさー） ここ たちばないえまえは",
    english: "(Announcer) Here we are in front of the Tachibana's household.",
    start: 445.696,
    end: 447.239
  },
  {
    japanese: "お母さんの姿を",
    furigana: "おかあさんのすがたを",
    english: "The figure of my mother",
    start: 447.322,
    end: 448.407
  },
  {
    japanese: "ひと目見ようとする 人たちでいっぱいです",
    furigana: "ひとまみようとする にんたちでいっぱいです",
    english: "It is filled with people trying to catch a glimpse.",
    start: 448.49,
    end: 450.367
  },
  {
    japanese: "異様な熱気に包まれています",
    furigana: "いようなねっきにつつまれています",
    english: "I am enveloped in an unusual fervor.",
    start: 450.45,
    end: 452.161
  },
  {
    japanese: "（ユズヒコ）うおっ （父）えっ？",
    furigana: "（ゆずひこ）うおっ （ちち）えっ？",
    english: "(Yuzuhiko) Whoa! (Father) Huh?",
    start: 458.25,
    end: 459.626
  },
  {
    japanese: "なんか 外が とんでもないことになってるよ",
    furigana: "なんか そとが とんでもないことになってるよ",
    english: "Something crazy is happening outside.",
    start: 459.877,
    end: 463.005
  },
  {
    japanese: "（どよめき）",
    furigana: "（どよめき）",
    english: "(stir)",
    start: 466.091,
    end: 469.511
  },
  {
    japanese: "（一同）お母さん お母さん",
    furigana: "（いちどう）おかあさん おかあさん",
    english: "(All together) Mom, mom.",
    start: 470.304,
    end: 472.681
  },
  {
    japanese: "お母さん お母さん",
    furigana: "おかあさん おかあさん",
    english: "Mom, mom",
    start: 472.764,
    end: 475.142
  },
  {
    japanese: "お母さん お母さん",
    furigana: "おかあさん おかあさん",
    english: "Mom, Mom",
    start: 475.35,
    end: 477.561
  },
];

export default subtitles;