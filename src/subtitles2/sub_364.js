const subtitles = [
  {
    japanese: "（鼻歌）",
    furigana: "（はなうた）",
    english: "(humming a song)",
    start: 0.543,
    end: 2.086
  },
  {
    japanese: "（母）ん？",
    furigana: "（はは）ん？",
    english: "(Mother) Hm?",
    start: 2.169,
    end: 3.129
  },
  {
    japanese: "“足やすめ 肩こり 腰痛”",
    furigana: "“あしやすめ かたこり ようつう”",
    english: "Foot rest, shoulder stiffness, lower back pain",
    start: 5.756,
    end: 8.968
  },
  {
    japanese: "“ピタッと解消”？",
    furigana: "“ぴたっとかいしょう”？",
    english: "\"Solve it instantly\"?",
    start: 9.593,
    end: 11.303
  },
  {
    japanese: "（水島みずしま）タチバナさ～ん",
    furigana: "（みずしまみずしま）たちばなさ～ん",
    english: "(Mizushima) Ms. Tachibana~",
    start: 21.105,
    end: 22.69
  },
  {
    japanese: "水島さん 久しぶりねえ",
    furigana: "みずしまさん ひさしぶりねえ",
    english: "Long time no see, Mr. Mizushima.",
    start: 23.149,
    end: 25.443
  },
  {
    japanese: "（水島）久しぶりって きのうも会ったじゃないの",
    furigana: "（みずしま）ひさしぶりって きのうもあったじゃないの",
    english: "(Mizushima) \"Long time no see\"? But didn't we meet just yesterday?",
    start: 25.526,
    end: 28.07
  },
  {
    japanese: "（笑い声）",
    furigana: "（わらいこえ）",
    english: "(laughing voice)",
    start: 28.154,
    end: 29.739
  },
  {
    japanese: "そうそう そういえば",
    furigana: "そうそう そういえば",
    english: "Oh yeah, speaking of which",
    start: 30.322,
    end: 31.741
  },
  {
    japanese: "近所に とうとう リフレクソロジーできたでしょ",
    furigana: "きんじょに とうとう りふれくそろじーできたでしょ",
    english: "A reflexology place finally opened up in our neighborhood, right?",
    start: 31.824,
    end: 34.702
  },
  {
    japanese: "し～っ",
    furigana: "し～っ",
    english: "Shh...",
    start: 35.119,
    end: 36.287
  },
  {
    japanese: "まずいんじゃない？ そういうの",
    furigana: "まずいんじゃない？ そういうの",
    english: "Isn't that bad? Things like that.",
    start: 36.37,
    end: 38.08
  },
  {
    japanese: "（水島）えっ？",
    furigana: "（みずしま）えっ？",
    english: "(Mizushima) Huh?",
    start: 38.164,
    end: 38.998
  },
  {
    japanese: "クソジジイなんて",
    furigana: "くそじじいなんて",
    english: "Damn old man",
    start: 39.081,
    end: 40.708
  },
  {
    japanese: "キャハハ…",
    furigana: "きゃはは…",
    english: "Hahaha...",
    start: 42.46,
    end: 43.878
  },
  {
    japanese: "クソジジイじゃないわよ",
    furigana: "くそじじいじゃないわよ",
    english: "I'm not an old geezer.",
    start: 43.961,
    end: 46.464
  },
  {
    japanese: "（母･水島）あっ…",
    furigana: "（はは･みずしま）あっ…",
    english: "(Mother/Mizushima) Ah...",
    start: 46.547,
    end: 47.548
  },
  {
    japanese: "リフレクソロジーよ",
    furigana: "りふれくそろじーよ",
    english: "Reflexology, isn't it?",
    start: 49.258,
    end: 51.051
  },
  {
    japanese: "リフレクソ… なんだっけ？",
    furigana: "りふれくそ… なんだっけ？",
    english: "Reflexo... What was it again?",
    start: 51.594,
    end: 55.014
  },
  {
    japanese: "ちょっと 変なとこで 切らないでよね",
    furigana: "ちょっと へんなとこで きらないでよね",
    english: "Don't cut me off at a weird point, okay?",
    start: 55.097,
    end: 57.349
  },
  {
    japanese: "これよ これこれ",
    furigana: "これよ これこれ",
    english: "This, this right here.",
    start: 57.683,
    end: 59.393
  },
  {
    japanese: "ああ 足もみね",
    furigana: "ああ あしもみね",
    english: "Ah, a foot massage.",
    start: 61.145,
    end: 63.063
  },
  {
    japanese: "そうそう",
    furigana: "そうそう",
    english: "That's right",
    start: 63.147,
    end: 64.356
  },
  {
    japanese: "あたしも さっき前 通ったわ",
    furigana: "あたしも さっきまえ かよったわ",
    english: "I just passed by there a while ago, too.",
    start: 64.565,
    end: 66.984
  },
  {
    japanese: "あらっ 興味なかった？",
    furigana: "あらっ きょうみなかった？",
    english: "Oh, weren't you interested?",
    start: 67.526,
    end: 69.278
  },
  {
    japanese: "っていうか 足もみ やったことないのよねえ",
    furigana: "っていうか あしもみ やったことないのよねえ",
    english: "Or rather, I've never had a foot massage before, you know.",
    start: 69.904,
    end: 73.783
  },
  {
    japanese: "くすぐったくない？",
    furigana: "くすぐったくない？",
    english: "Doesn't it tickle?",
    start: 74.617,
    end: 75.91
  },
  {
    japanese: "キャハハ…",
    furigana: "きゃはは…",
    english: "Hahaha...",
    start: 75.993,
    end: 77.536
  },
  {
    japanese: "くすぐったいわけないじゃない 痛いわよ むしろ",
    furigana: "くすぐったいわけないじゃない いたいわよ むしろ",
    english: "There's no way it's ticklish, it actually hurts.",
    start: 77.62,
    end: 81.207
  },
  {
    japanese: "痛いのも 苦手だなあ",
    furigana: "いたいのも にがてだなあ",
    english: "I really can't stand pain.",
    start: 81.29,
    end: 83.334
  },
  {
    japanese: "痛いけど 気持ちいいの",
    furigana: "いたいけど きもちいいの",
    english: "It hurts but it feels good.",
    start: 83.417,
    end: 85.336
  },
  {
    japanese: "痛 気持ちよくて眠っちゃうわよ",
    furigana: "つう きもちよくてねむっちゃうわよ",
    english: "It's so comfortable that it puts me to sleep.",
    start: 85.419,
    end: 87.922
  },
  {
    japanese: "痛いけど 気持ちがいい？",
    furigana: "いたいけど きもちがいい？",
    english: "It hurts but feels good?",
    start: 89.006,
    end: 91.717
  },
  {
    japanese: "もうタチバナさんったらあ",
    furigana: "もうたちばなさんったらあ",
    english: "Oh, that Tachibana-san again!",
    start: 92.301,
    end: 94.595
  },
  {
    japanese: "足の裏で体調が分かっちゃうのよ",
    furigana: "あしのうらでたいちょうがわかっちゃうのよ",
    english: "You can tell your health from the soles of your feet.",
    start: 94.678,
    end: 97.181
  },
  {
    japanese: "肩が凝ってますねえとか",
    furigana: "かたがこってますねえとか",
    english: "You seem to have stiff shoulders, right?",
    start: 97.264,
    end: 98.641
  },
  {
    japanese: "腎臓が疲れてますねえとか",
    furigana: "じんぞうがつかれてますねえとか",
    english: "It seems like your kidneys are tired.",
    start: 98.724,
    end: 101.101
  },
  {
    japanese: "しかも 今なら半額！",
    furigana: "しかも いまならはんがく！",
    english: "Moreover, it's half-price right now!",
    start: 101.435,
    end: 103.896
  },
  {
    japanese: "半額！ いい響きだわあ",
    furigana: "はんがく！ いいひびきだわあ",
    english: "Half price! That sounds great.",
    start: 103.979,
    end: 107.525
  },
  {
    japanese: "普通の主婦にとっては ダイヤより すてきな響きよねえ",
    furigana: "ふつうのしゅふにとっては だいやより すてきなひびきよねえ",
    english: "For an ordinary housewife, it sounds even better than a diamond, doesn't it?",
    start: 107.608,
    end: 111.612
  },
  {
    japanese: "あらっ ダイヤは好きよ",
    furigana: "あらっ だいやはすきよ",
    english: "Oh, I do like diamonds.",
    start: 111.695,
    end: 113.781
  },
  {
    japanese: "まっ 買ってもらったことはないけど",
    furigana: "まっ かってもらったことはないけど",
    english: "Well, I've never been bought anything.",
    start: 114.114,
    end: 116.617
  },
  {
    japanese: "（笑い声）",
    furigana: "（わらいこえ）",
    english: "(laughing)",
    start: 116.7,
    end: 119.495
  },
  {
    japanese: "（水島）じゃあさ 暇なとき電話するから",
    furigana: "（みずしま）じゃあさ ひまなときでんわするから",
    english: "(Mizushima) So, I'll call you when I'm free.",
    start: 119.578,
    end: 121.956
  },
  {
    japanese: "（母）そうしてもらえる？",
    furigana: "（はは）そうしてもらえる？",
    english: "(Mother) Can you do that for me?",
    start: 122.039,
    end: 123.332
  },
  {
    japanese: "急がないと 書道教室に 間に合わない",
    furigana: "いそがないと しょどうきょうしつに まにあわない",
    english: "If we don't hurry, we won't make it to the calligraphy class on time.",
    start: 128.712,
    end: 131.966
  },
  {
    japanese: "おおっ",
    furigana: "おおっ",
    english: "Oh!",
    start: 134.593,
    end: 135.344
  },
  {
    japanese: "そうだあ",
    furigana: "そうだあ",
    english: "That's right.",
    start: 137.221,
    end: 138.681
  },
  {
    japanese: "きょう休みだって この間 言われたんじゃない",
    furigana: "きょうやすみだって このかん いわれたんじゃない",
    english: "Didn't they tell you we have the day off today, just the other day?",
    start: 138.764,
    end: 141.934
  },
  {
    japanese: "あ～あ なんか急に暇になると 拍子抜けするわね",
    furigana: "あ～あ なんかきゅうにひまになると ひょうしぬけするわね",
    english: "Ah, it's kind of a letdown when I suddenly have free time, isn't it?",
    start: 142.852,
    end: 147.731
  },
  {
    japanese: "う～ん",
    furigana: "う～ん",
    english: "Hmm",
    start: 147.815,
    end: 148.941
  },
  {
    japanese: "（電話の着信音）",
    furigana: "（でんわのちゃくしんおと）",
    english: "(Incoming phone call sound)",
    start: 149.024,
    end: 150.484
  },
  {
    japanese: "はいはい 出ますよ",
    furigana: "はいはい でますよ",
    english: "Alright alright, I'm coming out.",
    start: 150.734,
    end: 152.278
  },
  {
    japanese: "はい タチバナです",
    furigana: "はい たちばなです",
    english: "Yes, this is Tachibana.",
    start: 152.862,
    end: 154.321
  },
  {
    japanese: "（水島）タチバナさん 水島ですけど",
    furigana: "（みずしま）たちばなさん みずしまですけど",
    english: "(Mizushima) Ms. Tachibana, it's Mizushima.",
    start: 154.572,
    end: 156.824
  },
  {
    japanese: "きょう暇？",
    furigana: "きょうひま？",
    english: "Are you free today?",
    start: 156.907,
    end: 157.95
  },
  {
    japanese: "あら水島さん ちょうどよかった 暇になったのよ",
    furigana: "あらみずしまさん ちょうどよかった ひまになったのよ",
    english: "Oh, Mr. Mizushima, perfect timing. I just became free.",
    start: 158.033,
    end: 161.829
  },
  {
    japanese: "（母）足もみ行かない？ （水島）リフレクソロジー行かない？",
    furigana: "（はは）あしもみいかない？ （みずしま）りふれくそろじーいかない？",
    english: "(Mother) Do you want to go get a foot massage? (Mizushima) You don't want to go to reflexology?",
    start: 162.371,
    end: 163.914
  },
  {
    japanese: "（２人）あっ！ アハハ…",
    furigana: "（２にん）あっ！ あはは…",
    english: "(Two people) Ah! Haha...",
    start: 163.998,
    end: 166.458
  },
  {
    japanese: "気が合うわね",
    furigana: "きがあうわね",
    english: "We get along well, don't we?",
    start: 166.542,
    end: 168.21
  },
  {
    japanese: "ここよ",
    furigana: "ここよ",
    english: "Right here.",
    start: 171.881,
    end: 172.923
  },
  {
    japanese: "（母）ふ～ん",
    furigana: "（はは）ふ～ん",
    english: "(Mother) Hmm...",
    start: 173.007,
    end: 174.008
  },
  {
    japanese: "（母）ああ！ （水島）どうしたの？",
    furigana: "（はは）ああ！ （みずしま）どうしたの？",
    english: "(Mother) Oh! (Mizushima) What's happened?",
    start: 175.551,
    end: 177.094
  },
  {
    japanese: "ダメよ きょうはダメ",
    furigana: "だめよ きょうはだめ",
    english: "No good, today's no good.",
    start: 178.262,
    end: 179.722
  },
  {
    japanese: "どうして？",
    furigana: "どうして？",
    english: "Why?",
    start: 180.264,
    end: 181.473
  },
  {
    japanese: "だって… 足 洗ってこなかったの",
    furigana: "だって… あし あらってこなかったの",
    english: "But... you didn't wash your feet.",
    start: 182.766,
    end: 185.603
  },
  {
    japanese: "アハハ…",
    furigana: "あはは…",
    english: "Haha...",
    start: 185.686,
    end: 187.396
  },
  {
    japanese: "もう心配いらないわよ 大丈夫 大丈夫",
    furigana: "もうしんぱいいらないわよ だいじょうぶ だいじょうぶ",
    english: "You don't need to worry anymore, it's okay, it's okay.",
    start: 187.479,
    end: 190.357
  },
  {
    japanese: "（母）え～ でも…",
    furigana: "（はは）え～ でも…",
    english: "(Mother) Well... but...",
    start: 190.441,
    end: 191.734
  },
  {
    japanese: "（スタッフ）こちらのハーブ湯に 足を入れてください",
    furigana: "（すたっふ）こちらのはーぶゆに あしをいれてください",
    english: "(Staff) Please put your feet in this herbal bath.",
    start: 192.318,
    end: 195.195
  },
  {
    japanese: "（母）ああ こういうことなのね",
    furigana: "（はは）ああ こういうことなのね",
    english: "(Mother) Oh, so that's what it is.",
    start: 195.279,
    end: 197.489
  },
  {
    japanese: "ねっ 大丈夫でしょ？",
    furigana: "ねっ だいじょうぶでしょ？",
    english: "Hey, you're okay, right?",
    start: 197.573,
    end: 199.491
  },
  {
    japanese: "この間よくしてもらったから お友達 連れてきちゃったわ",
    furigana: "このかんよくしてもらったから おともだち つれてきちゃったわ",
    english: "I brought my friends this time because you treated me so well last time.",
    start: 199.867,
    end: 203.621
  },
  {
    japanese: "（スタッフ）ありがとうございます",
    furigana: "（すたっふ）ありがとうございます",
    english: "(Staff) Thank you.",
    start: 203.871,
    end: 205.456
  },
  {
    japanese: "（母）う～ん",
    furigana: "（はは）う～ん",
    english: "(Mother) Hmm...",
    start: 206.04,
    end: 207.416
  },
  {
    japanese: "気持ちいいわあ ん？",
    furigana: "きもちいいわあ ん？",
    english: "This feels good, huh?",
    start: 208.417,
    end: 210.836
  },
  {
    japanese: "（においを嗅ぐ音）",
    furigana: "（においをかぐおと）",
    english: "(the sound of sniffing)",
    start: 211.629,
    end: 212.63
  },
  {
    japanese: "このお湯いいにおい",
    furigana: "このおゆいいにおい",
    english: "This hot water smells nice.",
    start: 213.464,
    end: 215.382
  },
  {
    japanese: "（スタッフ）ハーブですから",
    furigana: "（すたっふ）はーぶですから",
    english: "(Staff) It's because it's a herb.",
    start: 215.883,
    end: 217.051
  },
  {
    japanese: "ハーブか…",
    furigana: "はーぶか…",
    english: "Herbs, huh...",
    start: 217.468,
    end: 218.719
  },
  {
    japanese: "どこかで嗅いことがあるわ",
    furigana: "どこかできゅういことがあるわ",
    english: "I've smelled it somewhere before.",
    start: 219.428,
    end: 221.263
  },
  {
    japanese: "（においを嗅ぐ音）",
    furigana: "（においをかぐおと）",
    english: "(the sound of sniffing)",
    start: 221.347,
    end: 222.348
  },
  {
    japanese: "そ～よ こないだ買った トイレの芳香剤そっくり",
    furigana: "そ～よ こないだかった といれのほうこうざいそっくり",
    english: "Yeah, it looks just like the air freshener for the toilet that I bought the other day.",
    start: 223.599,
    end: 226.393
  },
  {
    japanese: "（スタッフたちの笑い声） （水島）タチバナさん",
    furigana: "（すたっふたちのわらいこえ） （みずしま）たちばなさん",
    english: "(Staff members laughing) (Mizushima) Mr. Tachibana",
    start: 226.477,
    end: 228.437
  },
  {
    japanese: "あっ！ ごめんなさい",
    furigana: "あっ！ ごめんなさい",
    english: "Ah! I'm sorry.",
    start: 228.52,
    end: 231.106
  },
  {
    japanese: "（スタッフ）失礼します",
    furigana: "（すたっふ）しつれいします",
    english: "(Staff) Excuse me.",
    start: 237.655,
    end: 238.864
  },
  {
    japanese: "オイルを お塗りしますね",
    furigana: "おいるを おぬりしますね",
    english: "I'll apply the oil for you.",
    start: 242.451,
    end: 244.203
  },
  {
    japanese: "（母）こそばゆい",
    furigana: "（はは）こそばゆい",
    english: "(Mother) Shy",
    start: 249.708,
    end: 251.085
  },
  {
    japanese: "（母）フフフ…",
    furigana: "（はは）ふふふ…",
    english: "(Mother) Hehehe...",
    start: 254.421,
    end: 256.84
  },
  {
    japanese: "では おもみします",
    furigana: "では おもみします",
    english: "Then, I will massage.",
    start: 257.466,
    end: 258.759
  },
  {
    japanese: "（母）ハア…",
    furigana: "（はは）はあ…",
    english: "(Mother) Sigh...",
    start: 258.842,
    end: 259.593
  },
  {
    japanese: "（笑い声） （母）ん？",
    furigana: "（わらいこえ） （はは）ん？",
    english: "(Laughter) (Mother) Hm?",
    start: 259.677,
    end: 261.22
  },
  {
    japanese: "ご… ごめんなさい ちょっと くすぐったかったの",
    furigana: "ご… ごめんなさい ちょっと くすぐったかったの",
    english: "Uh... I'm sorry, that tickled a bit.",
    start: 261.679,
    end: 264.431
  },
  {
    japanese: "申し訳ございません",
    furigana: "もうしわけございません",
    english: "I'm sorry.",
    start: 264.515,
    end: 265.891
  },
  {
    japanese: "あ… あなたのせいじゃないわ",
    furigana: "あ… あなたのせいじゃないわ",
    english: "Ah... It's not your fault.",
    start: 265.975,
    end: 268.185
  },
  {
    japanese: "ちょっと軽くもんでって言った あたしが いけなかったのよ",
    furigana: "ちょっとかるくもんでっていった あたしが いけなかったのよ",
    english: "I shouldn't have asked you to lightly massage me.",
    start: 268.268,
    end: 271.23
  },
  {
    japanese: "（スタッフ）じゃあ もうちょっと強くしますね",
    furigana: "（すたっふ）じゃあ もうちょっとつよくしますね",
    english: "(Staff) Okay, I will make it a bit stronger then.",
    start: 271.313,
    end: 273.482
  },
  {
    japanese: "（水島）そうしてもらえる？",
    furigana: "（みずしま）そうしてもらえる？",
    english: "(Mizushima) Can you do that for me?",
    start: 273.565,
    end: 274.775
  },
  {
    japanese: "（スタッフ）分かりました",
    furigana: "（すたっふ）わかりました",
    english: "(Staff) Understood.",
    start: 274.858,
    end: 275.859
  },
  {
    japanese: "（母）やっぱり くすぐったいんだわ",
    furigana: "（はは）やっぱり くすぐったいんだわ",
    english: "(Mother) As I thought, it really is ticklish.",
    start: 276.61,
    end: 279.071
  },
  {
    japanese: "（スタッフ）お客様 （母）あっ！",
    furigana: "（すたっふ）おきゃくさま （はは）あっ！",
    english: "(Staff): Dear customer, (Mother): Oh!",
    start: 279.863,
    end: 281.365
  },
  {
    japanese: "（スタッフ）強さのご希望は ございますか？",
    furigana: "（すたっふ）つよさのごきぼうは ございますか？",
    english: "(Staff) Do you have any preference for the strength?",
    start: 281.448,
    end: 283.784
  },
  {
    japanese: "じゃあ くすぐったくなく",
    furigana: "じゃあ くすぐったくなく",
    english: "Then, it's not ticklish.",
    start: 284.243,
    end: 286.537
  },
  {
    japanese: "かしこまりました では 失礼します",
    furigana: "かしこまりました では しつれいします",
    english: "Understood. Then, I'll take my leave.",
    start: 286.996,
    end: 289.415
  },
  {
    japanese: "（母）ぐっ ううっ…",
    furigana: "（はは）ぐっ ううっ…",
    english: "(Mother) Ugh...Oof...",
    start: 291.667,
    end: 293.627
  },
  {
    japanese: "（スタッフ）大丈夫？ （スタッフ）ううっ…",
    furigana: "（すたっふ）だいじょうぶ？ （すたっふ）ううっ…",
    english: "(Staff) Are you okay? (Staff) Ugh...",
    start: 295.129,
    end: 296.714
  },
  {
    japanese: "へ… 平気",
    furigana: "へ… へいき",
    english: "Hmm... I'm fine.",
    start: 296.797,
    end: 298.424
  },
  {
    japanese: "タ… タチバナさん",
    furigana: "た… たちばなさん",
    english: "T... Tachibana-san.",
    start: 298.507,
    end: 300.342
  },
  {
    japanese: "（母）い… い～",
    furigana: "（はは）い… い～",
    english: "(Mother) Umm... Uh...",
    start: 300.426,
    end: 303.137
  },
  {
    japanese: "お客様 大丈夫ですか？",
    furigana: "おきゃくさま だいじょうぶですか？",
    english: "Are you okay, customer?",
    start: 303.804,
    end: 306.056
  },
  {
    japanese: "（母）す… すみません",
    furigana: "（はは）す… すみません",
    english: "(Mother) I... I'm sorry.",
    start: 307.766,
    end: 309.685
  },
  {
    japanese: "いえ 大丈夫ですよ",
    furigana: "いえ だいじょうぶですよ",
    english: "No, it's okay.",
    start: 310.561,
    end: 312.354
  },
  {
    japanese: "ゆっくりお休みください",
    furigana: "ゆっくりおやすみください",
    english: "Please take a rest slowly.",
    start: 312.438,
    end: 313.939
  },
  {
    japanese: "（スタッフ）申し訳ございません 強すぎましたね",
    furigana: "（すたっふ）もうしわけございません つよすぎましたね",
    english: "(Staff) We apologize, that was too intense, wasn't it?",
    start: 314.023,
    end: 316.9
  },
  {
    japanese: "（母）い… いえ ちょっと 突然でびっくりしちゃって",
    furigana: "（はは）い… いえ ちょっと とつぜんでびっくりしちゃって",
    english: "(Mom) N... No, I was just a bit startled because it was so sudden.",
    start: 316.984,
    end: 320.404
  },
  {
    japanese: "力を少し弱くさせていただきます",
    furigana: "ちからをすこしよわくさせていただきます",
    english: "I will slightly reduce the power.",
    start: 320.487,
    end: 323.323
  },
  {
    japanese: "（唾を飲み込む音） （母）我慢 我慢…",
    furigana: "（つばをのみこむおと） （はは）がまん がまん…",
    english: "(Sound of swallowing saliva) (Mother) Be patient, be patient...",
    start: 324.158,
    end: 326.326
  },
  {
    japanese: "が～ ま～ んん…",
    furigana: "が～ ま～ んん…",
    english: "This text seems to be an onomatopoeic expression or a sound rather than a structured sentence. Thus, it doesn't translate directly into English. If you would like to translate an actual phrase or sentence, please provide more context.",
    start: 328.12,
    end: 330.956
  },
  {
    japanese: "お疲れですね 老廃物がたまってますよ",
    furigana: "おつかれですね ろうはいぶつがたまってますよ",
    english: "You must be tired. Your body seems to be accumulating waste products.",
    start: 331.04,
    end: 334.168
  },
  {
    japanese: "（母）ふごっ 痛っ うぎっ",
    furigana: "（はは）ふごっ いたっ うぎっ",
    english: "(Mother) Ow! That hurts! Ugh!",
    start: 334.251,
    end: 337.463
  },
  {
    japanese: "（スタッフ）ここら辺は 耳の反射区なんですよ",
    furigana: "（すたっふ）ここらへんは みみのはんしゃくなんですよ",
    english: "(Staff) This area here is the reflex zone of the ear.",
    start: 337.546,
    end: 340.883
  },
  {
    japanese: "（母）み… 耳が疲れてるって どういうこと？",
    furigana: "（はは）み… みみがつかれてるって どういうこと？",
    english: "(Mother) What does it mean when you say your ears are tired?",
    start: 341.3,
    end: 344.97
  },
  {
    japanese: "つまんないこと ばっかり…",
    furigana: "つまんないこと ばっかり…",
    english: "Nothing but boring stuff...",
    start: 345.054,
    end: 347.723
  },
  {
    japanese: "聞いてるって言いたいの？ この人は～",
    furigana: "きいてるっていいたいの？ このにんは～",
    english: "Do you want to say you're listening? This person is...",
    start: 347.806,
    end: 351.852
  },
  {
    japanese: "どうかしましたか？",
    furigana: "どうかしましたか？",
    english: "Is something wrong?",
    start: 351.935,
    end: 353.812
  },
  {
    japanese: "な… なんでもないの",
    furigana: "な… なんでもないの",
    english: "It's... it's nothing.",
    start: 353.896,
    end: 356.523
  },
  {
    japanese: "そうですか",
    furigana: "そうですか",
    english: "Is that so?",
    start: 356.857,
    end: 358.275
  },
  {
    japanese: "（母）あ… 悪魔～",
    furigana: "（はは）あ… あくま～",
    english: "(Mother) Ah... devil~",
    start: 359.777,
    end: 362.237
  },
  {
    japanese: "水島さん 助けてえ 水島…",
    furigana: "みずしまさん たすけてえ みずしま…",
    english: "Help me, Mizushima... Mizushima...",
    start: 362.571,
    end: 365.657
  },
  {
    japanese: "（水島）ああ…",
    furigana: "（みずしま）ああ…",
    english: "(Mizushima) Ah...",
    start: 365.741,
    end: 367.91
  },
  {
    japanese: "（母･水島）あ～！",
    furigana: "（はは･みずしま）あ～！",
    english: "(Mother/Mizushima) Ah!",
    start: 367.993,
    end: 369.119
  },
  {
    japanese: "ひい～ うお～",
    furigana: "ひい～ うお～",
    english: "Eek! Whoa!",
    start: 369.203,
    end: 373.082
  },
  {
    japanese: "おお～",
    furigana: "おお～",
    english: "Oh wow~",
    start: 373.165,
    end: 374.541
  },
  {
    japanese: "うう～",
    furigana: "うう～",
    english: "Ugh~",
    start: 376.96,
    end: 379.463
  },
  {
    japanese: "がが～",
    furigana: "がが～",
    english: "Gaga~",
    start: 380.089,
    end: 382.549
  },
  {
    japanese: "うお～ ああ～",
    furigana: "うお～ ああ～",
    english: "Whoa, oh...",
    start: 383.092,
    end: 386.303
  },
  {
    japanese: "いや～ ああ～",
    furigana: "いや～ ああ～",
    english: "Oh no~ Ah~",
    start: 388.347,
    end: 390.099
  },
  {
    japanese: "（母）い～ こんなに痛いのは",
    furigana: "（はは）い～ こんなにいたいのは",
    english: "(Mother) Oh~ This pain is unbearable.",
    start: 392.976,
    end: 397.022
  },
  {
    japanese: "ひぎ～",
    furigana: "ひぎ～",
    english: "This Japanese text is likely a typo or an informal expression, as it does not translate to any specific meaning in English.",
    start: 397.106,
    end: 398.19
  },
  {
    japanese: "ユーちゃんを産んで以来だわ～！",
    furigana: "ゆーちゃんをうんでいらいだわ～！",
    english: "It's been since I gave birth to Yu-chan!",
    start: 398.273,
    end: 403.362
  },
  {
    japanese: "お疲れですねえ",
    furigana: "おつかれですねえ",
    english: "You must be tired.",
    start: 403.487,
    end: 404.947
  },
  {
    japanese: "主婦の方は 毎日の家事労働 大変ですから",
    furigana: "しゅふのかたは まいにちのかじろうどう たいへんですから",
    english: "It's tough for housewives because they have to do household chores every day.",
    start: 405.03,
    end: 408.408
  },
  {
    japanese: "（母）ばあちゃんが言ってた",
    furigana: "（はは）ばあちゃんがいってた",
    english: "(Mother) Grandma used to say",
    start: 408.492,
    end: 410.035
  },
  {
    japanese: "障子の桟が見えるうちは まだ生まれないって",
    furigana: "しょうじのさんがみえるうちは まだうまれないって",
    english: "They say you won't be born as long as you can see the lattice of the shoji screen.",
    start: 410.41,
    end: 415.916
  },
  {
    japanese: "ここは胃の反射区なんですね",
    furigana: "ここはいのはんしゃくなんですね",
    english: "This is the reflex zone for the stomach, isn't it?",
    start: 415.999,
    end: 418.585
  },
  {
    japanese: "ここのグリグリがとれると 胃もすっきりしますよ",
    furigana: "ここのぐりぐりがとれると いもすっきりしますよ",
    english: "If you can get rid of the stiffness here, your stomach will feel much better too.",
    start: 418.669,
    end: 422.047
  },
  {
    japanese: "なので えっ…",
    furigana: "なので えっ…",
    english: "So um...",
    start: 422.131,
    end: 423.382
  },
  {
    japanese: "ヒッヒッフ～ ヒッヒッフ～",
    furigana: "ひっひっふ～ ひっひっふ～",
    english: "Hee-hee-hee, Hee-hee-hee.",
    start: 423.465,
    end: 427.01
  },
  {
    japanese: "ん？ もしかして タチバナさん",
    furigana: "ん？ もしかして たちばなさん",
    english: "Huh? Could it be Mr./Ms. Tachibana?",
    start: 427.928,
    end: 429.93
  },
  {
    japanese: "ラマーズ法で痛み逃してるの？",
    furigana: "らまーずほうでいたみのがしてるの？",
    english: "Are you using the Lamaze method to manage the pain?",
    start: 430.013,
    end: 432.224
  },
  {
    japanese: "出産じゃないんだから",
    furigana: "しゅっさんじゃないんだから",
    english: "This isn't childbirth, you know.",
    start: 432.641,
    end: 434.059
  },
  {
    japanese: "ヒッヒッフ～ ヒッヒッフ～",
    furigana: "ひっひっふ～ ひっひっふ～",
    english: "Hee Hee Hoo~ Hee Hee Hoo~",
    start: 434.143,
    end: 436.436
  },
  {
    japanese: "（スタッフたち）ククッ…",
    furigana: "（すたっふたち）くくっ…",
    english: "(Staff) Hehe...",
    start: 436.937,
    end: 438.689
  },
  {
    japanese: "ヒッヒッフ～ ヒッヒッフ～",
    furigana: "ひっひっふ～ ひっひっふ～",
    english: "This seems like a representation of a sound or a laugh rather than actual text, and is often represented in English as \"Hee Hee Hee~\"",
    start: 438.772,
    end: 441.233
  },
  {
    japanese: "痛かったけど 確かに気持ちいいわ",
    furigana: "いたかったけど たしかにきもちいいわ",
    english: "It hurt, but it definitely felt good.",
    start: 447.447,
    end: 450.617
  },
  {
    japanese: "胃もすっきりしたし 頑張ろう！ って感じ",
    furigana: "いもすっきりしたし がんばろう！ ってかんじ",
    english: "I feel like my stomach is refreshed and I'm ready to give it my all!",
    start: 450.701,
    end: 453.787
  },
  {
    japanese: "でも 伝説のお客さんに なっちゃったわねえ",
    furigana: "でも でんせつのおきゃくさんに なっちゃったわねえ",
    english: "But you've become a legendary customer, haven't you?",
    start: 453.871,
    end: 457.541
  },
  {
    japanese: "えっ どうして？",
    furigana: "えっ どうして？",
    english: "Huh, why?",
    start: 457.624,
    end: 459.376
  },
  {
    japanese: "あっ 分かった",
    furigana: "あっ わかった",
    english: "Oh, I got it.",
    start: 459.459,
    end: 460.919
  },
  {
    japanese: "初めてなのに ちゃんと 痛いの我慢できたから",
    furigana: "はじめてなのに ちゃんと いたいのがまんできたから",
    english: "Even though it was my first time, I was able to manage the pain.",
    start: 461.003,
    end: 463.964
  },
  {
    japanese: "違う 違うのよ",
    furigana: "ちがう ちがうのよ",
    english: "That's not right, it's not.",
    start: 464.298,
    end: 466.884
  },
  {
    japanese: "とにかく 顔は 覚えてもらったわよ 確実に",
    furigana: "とにかく かおは おぼえてもらったわよ かくじつに",
    english: "Anyway, I made sure you remember my face.",
    start: 467.259,
    end: 471.305
  },
  {
    japanese: "そりゃそうね 私たち美人だから",
    furigana: "そりゃそうね わたしたちびじんだから",
    english: "Well, of course, we are beautiful.",
    start: 471.43,
    end: 474.308
  },
  {
    japanese: "（母）アハハ… （水島）えっ",
    furigana: "（はは）あはは… （みずしま）えっ",
    english: "(Mother) Ahaha... (Mizushima) Eh?",
    start: 474.391,
    end: 475.559
  },
  {
    japanese: "（笑い声）",
    furigana: "（わらいこえ）",
    english: "(laughing)",
    start: 476.101,
    end: 479.813
  },
];

export default subtitles;