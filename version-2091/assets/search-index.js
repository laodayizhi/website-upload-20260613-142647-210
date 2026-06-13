const SEARCH_INDEX = [
    {
        "title": "逍遥法外杀错人",
        "href": "video/movie-0001.html",
        "cover": "1.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪 / 悬疑 / 律政",
        "oneLine": "一个因冤案坐牢十五年的男人出狱后，竟成了杀害真凶的嫌犯，为他辩护的正是当年起诉他的检察官。"
    },
    {
        "title": "外星女生柴小七2",
        "href": "video/movie-0002.html",
        "cover": "2.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情, 科幻",
        "oneLine": "柴小七回到母星后发现怀了人类的孩子，而母星法律规定：混血儿必须销毁。"
    },
    {
        "title": "蓬门今始为君开",
        "href": "video/movie-0003.html",
        "cover": "3.jpg",
        "year": "1968",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 爱情 / 戏曲",
        "oneLine": "青楼名伶动了真情，将所有积蓄给穷书生赶考，换来的却是一纸休书。"
    },
    {
        "title": "除了太阳",
        "href": "video/movie-0004.html",
        "cover": "4.jpg",
        "year": "2019",
        "region": "法国 / 塞内加尔",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "一个塞内加尔老人在巴黎街头捡垃圾为生，他每天写信给儿子，说“巴黎除了太阳，什么都是借来的”。"
    },
    {
        "title": "请以无名呼唤我",
        "href": "video/movie-0005.html",
        "cover": "5.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "同性/文艺",
        "oneLine": "在1999年的离岛高中，一个离异女教师爱上了班上的优等生女生，她们交换名字，却不敢呼唤彼此的心。"
    },
    {
        "title": "死亡水域",
        "href": "video/movie-0006.html",
        "cover": "6.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖/生存",
        "oneLine": "六名大学生在废弃矿湖游泳时，发现水下潜伏着一种能将人体液瞬间凝固的远古生物。"
    },
    {
        "title": "鲜血淋漓第三季",
        "href": "video/movie-0007.html",
        "cover": "7.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "恐怖 / 悬疑",
        "oneLine": "一栋废弃的医院电梯里，6个不同信仰的陌生人醒来，发现每人的器官都被移植了别人的一部分。"
    },
    {
        "title": "夏洛特的网2：韦伯历险记",
        "href": "video/movie-0008.html",
        "cover": "8.jpg",
        "year": "2003",
        "region": "美国",
        "type": "电影/动画",
        "genre": "喜剧 / 动画 / 家庭",
        "oneLine": "小猪韦伯迎来了三个新朋友，为了不让它们被农场主卖掉，他踏上了全新的冒险旅程。"
    },
    {
        "title": "鱿鱼仔的乡土生活第十三季",
        "href": "video/movie-0009.html",
        "cover": "9.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "动画 / 喜剧",
        "oneLine": "当了十二季小镇废柴的鱿鱼仔，这一季终于决定考公务员，却发现镇政府已经被一群外星羊占领了。"
    },
    {
        "title": "食女",
        "href": "video/movie-0010.html",
        "cover": "10.jpg",
        "year": "2024",
        "region": "日本",
        "type": "Movie",
        "genre": "恐怖，惊悚，悬疑",
        "oneLine": "一家只在午夜营业的私房菜馆里，每一道绝世美味的主料都来自失踪的女性食客。"
    },
    {
        "title": "盗贼泰瑞莎",
        "href": "video/movie-0011.html",
        "cover": "11.jpg",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "oneLine": "巴黎最优雅的女飞贼为躲追捕藏进修道院，结果被误认为是新来的修女。"
    },
    {
        "title": "妹妹恋人",
        "href": "video/movie-0012.html",
        "cover": "12.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 伦理 / 剧情",
        "oneLine": "一对双胞胎兄妹在父母车祸后相依为命，却在成年后发现对彼此产生了超越亲情的占有欲。"
    },
    {
        "title": "独行侠",
        "href": "video/movie-0013.html",
        "cover": "13.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 西部 / 冒险",
        "oneLine": "一个被灭门的警长独自追杀墨西哥毒枭三年，在沙漠深处，他发现仇人竟是自己失踪的亲弟弟。"
    },
    {
        "title": "花予野兽 第二季",
        "href": "video/movie-0014.html",
        "cover": "14.jpg",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情 / 校园",
        "oneLine": "上一季的“野兽”男友变得温柔体贴，女主反而慌了，而此时一位比“野兽”更野的转学生出现，三角关系升级。"
    },
    {
        "title": "我是大美人第二季",
        "href": "video/movie-0015.html",
        "cover": "15.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀时尚",
        "oneLine": "十二位被容貌焦虑困扰的普通女性，在三个月内通过美妆、心理与形体训练，完成一场内外兼修的重生。"
    },
    {
        "title": "芝加哥警署第六季",
        "href": "video/movie-0016.html",
        "cover": "16.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪, 剧情",
        "oneLine": "情报组老大的秘密被黑客曝光，整个部门陷入内鬼疑云，连他们亲手抓的罪犯都开始嘲笑他们。"
    },
    {
        "title": "电锯惊魂4",
        "href": "video/movie-0017.html",
        "cover": "17.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚, 犯罪",
        "oneLine": "竖锯死后，他的徒弟继承了衣钵，但这次，游戏的目标不是赎罪，而是“培养”出下一个接班人。"
    },
    {
        "title": "我的泪珠儿",
        "href": "video/movie-0018.html",
        "cover": "18.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭 / 伦理 / 悬疑",
        "oneLine": "单亲妈妈对养女严密管控二十年，直到女儿发现，妈妈的眼泪里藏着另一具早已死去的“自己”。"
    },
    {
        "title": "西大街",
        "href": "video/movie-0019.html",
        "cover": "19.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 历史 / 家庭",
        "oneLine": "一条即将拆迁的老街，五个摊贩，三代人的恩怨，在最后100天里集中爆发。"
    },
    {
        "title": "金刚斗恐龙",
        "href": "video/movie-0020.html",
        "cover": "20.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 科幻, 惊悚",
        "oneLine": "基因复活的霸王龙群袭击城市，唯有金刚能阻挡这场史前浩劫。"
    },
    {
        "title": "东京丧运会",
        "href": "video/movie-0021.html",
        "cover": "21.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 喜剧 / 运动",
        "oneLine": "2040 年东京奥运会开幕式上，一种病毒让运动员变成了丧尸，比赛变成了生存竞技。"
    },
    {
        "title": "怪从底出",
        "href": "video/movie-0022.html",
        "cover": "22.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "oneLine": "首尔一栋老旧公寓的地下二层，住户们发现那里存在着以贪婪为食的怪物。"
    },
    {
        "title": "夜生活女王霞姐传奇",
        "href": "video/movie-0023.html",
        "cover": "23.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情传记",
        "oneLine": "从一个夜总会陪酒小姐，到掌控整个尖东夜场的“霞姐”，她用二十年学会了一件事：笑，是最好的刀。"
    },
    {
        "title": "我们社区",
        "href": "video/movie-0024.html",
        "cover": "24.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 家庭",
        "oneLine": "一个普通老旧小区的12户人家，因为加装电梯的事情，把二十年的邻里秘密全部翻了出来。"
    },
    {
        "title": "钟馗捉妖记",
        "href": "video/movie-0025.html",
        "cover": "25.jpg",
        "year": "2018",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "奇幻，喜剧，古装",
        "oneLine": "钟馗因为酗酒被贬下凡，法力全失，只能带着一个废柴道士，在现代都市里捉妖还债。"
    },
    {
        "title": "嫁个100分男人",
        "href": "video/movie-0026.html",
        "cover": "26.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 喜剧 / 奇幻",
        "oneLine": "婚恋APP公司开发了一个“完美男友”AI，却把所有男用户变成了会唱歌跳舞的机器人。"
    },
    {
        "title": "兵权",
        "href": "video/movie-0027.html",
        "cover": "27.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 战争 / 权谋",
        "oneLine": "后周世宗柴荣驾崩前，将兵权一分为三交给三位将军，却不知其中一人正是赵匡胤的暗棋。"
    },
    {
        "title": "城市风云",
        "href": "video/movie-0028.html",
        "cover": "28.jpg",
        "year": "1988",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "oneLine": "80年代尾声，两个从东北到深圳的倒爷兄弟，在金钱浪潮中一个成了首富，一个进了监狱。"
    },
    {
        "title": "至爱的亲爱的",
        "href": "video/movie-0029.html",
        "cover": "29.jpg",
        "year": "2023",
        "region": "意大利",
        "type": "电影",
        "genre": "爱情，剧情",
        "oneLine": "妻子去世后，丈夫按照遗嘱每年给她写一封信，却发现了她隐藏五十年的秘密。"
    },
    {
        "title": "战北国",
        "href": "video/movie-0030.html",
        "cover": "30.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史, 战争, 动作",
        "oneLine": "北魏太武帝时期，五百残兵困守一座被冰封的北方小城，面对数万柔然骑兵，他们唯一的武器是酷寒。"
    },
    {
        "title": "凤唳九天",
        "href": "video/movie-0031.html",
        "cover": "31.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 爱情, 权谋",
        "oneLine": "被亲妹妹推下城楼的将军之女重生为敌国和亲公主，她决定用两副面孔同时毁灭两个王朝的后宫。"
    },
    {
        "title": "粉红学家",
        "href": "video/movie-0032.html",
        "cover": "32.jpg",
        "year": "2025",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻/心理",
        "oneLine": "一个色盲少女能看到全世界唯一真实的粉红色，而那个颜色会让她看见人心底的欲望。"
    },
    {
        "title": "惊弓之鸟1967",
        "href": "video/movie-0033.html",
        "cover": "33.jpg",
        "year": "1967",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 心理",
        "oneLine": "1967年，一个从越南战场回国的美国老兵在巴黎游荡，任何突然的响声都会让他瞬间陷入杀戮幻觉。"
    },
    {
        "title": "老爸老妈的浪漫史第二季",
        "href": "video/movie-0034.html",
        "cover": "34.jpg",
        "year": "2022",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧、爱情",
        "oneLine": "泰德继续向孩子们讲述他寻找真命天女的故事，而这一季，他将面临友情与爱情的终极考验。"
    },
    {
        "title": "星球索拉罗斯",
        "href": "video/movie-0035.html",
        "cover": "35.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 悬疑",
        "oneLine": "宇航员抵达一颗神秘的海洋星球，发现星球能映射出他们内心最深处的愧疚与爱人。"
    },
    {
        "title": "奇幻森林之兽语小子",
        "href": "video/movie-0036.html",
        "cover": "36.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "奇幻、冒险",
        "oneLine": "一个沉默寡言的护林员之子，意外发现自己能与所有动物对话，并卷入了一场拯救森林的阴谋。"
    },
    {
        "title": "30之前要做的事",
        "href": "video/movie-0037.html",
        "cover": "37.jpg",
        "year": "2022",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/都市",
        "oneLine": "三个29岁闺蜜列了一张“30岁前必做清单”，却发现最难完成的是“接受平庸”。"
    },
    {
        "title": "诡八楼",
        "href": "video/movie-0038.html",
        "cover": "38.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "恐怖, 惊悚, 悬疑",
        "oneLine": "写字楼明明只有七层，电梯却总是显示“8楼”，门开后，每个人都看到了自己最恐惧的死亡方式。"
    },
    {
        "title": "定罪",
        "href": "video/movie-0039.html",
        "cover": "39.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑，律政，犯罪",
        "oneLine": "金牌女律师为一名即将执行死刑的连环杀手辩护，却发现真凶可能是自己的丈夫。"
    },
    {
        "title": "红气球",
        "href": "video/movie-0040.html",
        "cover": "40.jpg",
        "year": "2025",
        "region": "法国 / 中国大陆",
        "type": "电影",
        "genre": "剧情 / 奇幻 / 家庭",
        "oneLine": "巴黎十三区，一个华裔小女孩的红气球带着她穿越时空，找到了从未见过的爷爷。"
    },
    {
        "title": "流星花园2",
        "href": "video/movie-0041.html",
        "cover": "41.jpg",
        "year": "2002",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情 / 偶像",
        "oneLine": "杉菜与道明寺前往纽约留学途中，道明寺遭遇车祸失忆，忘记了自己最爱的人。"
    },
    {
        "title": "神墓2022",
        "href": "video/movie-0042.html",
        "cover": "42.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻 / 动作",
        "oneLine": "一支考古队在地下发现了一座不属于任何已知文明的古墓，墓主人自称“造神者”。"
    },
    {
        "title": "青苔",
        "href": "video/movie-0043.html",
        "cover": "43.jpg",
        "year": "2008",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪",
        "oneLine": "一个沉迷毒品的“垃圾佬”目击了一宗谋杀，他要用自己仅存的理智，跟黑帮和警察同时周旋。"
    },
    {
        "title": "费雪小姐电影版",
        "href": "video/movie-0044.html",
        "cover": "44.jpg",
        "year": "2025",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "悬疑、犯罪、爱情",
        "oneLine": "飞越大洋的度假之旅，竟意外卷入了一场好莱坞明星的连环凶杀案。"
    },
    {
        "title": "高中（纪录片）",
        "href": "video/movie-0045.html",
        "cover": "45.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "纪录片",
        "genre": "纪录 / 社会",
        "oneLine": "摄像机在一所重点高中蹲守三年，记录下四个不同阶层孩子如何被高考“塑形”。"
    },
    {
        "title": "此乐不为何人所奏",
        "href": "video/movie-0046.html",
        "cover": "46.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "音乐, 剧情",
        "oneLine": "在全面禁止音乐的极权社会里，一位聋哑清洁工却通过震动感知到了“非法旋律”。"
    },
    {
        "title": "我们在那一片天空下",
        "href": "video/movie-0047.html",
        "cover": "47.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "家庭 / 治愈",
        "oneLine": "四个因各自失败逃回乡下老家的年轻人，决定在爷爷的杂货铺里重拍一部曾让奶奶离开的“未完成电影”。"
    },
    {
        "title": "机器肉鸡第四季",
        "href": "video/movie-0048.html",
        "cover": "48.jpg",
        "year": "2010",
        "region": "美国",
        "type": "剧集",
        "genre": "动画，喜剧，科幻",
        "oneLine": "用玩具和黏土搭建的荒诞世界，每一集都在疯狂解构和重塑你熟悉的影视、游戏和名人。"
    },
    {
        "title": "掘泥工人",
        "href": "video/movie-0049.html",
        "cover": "49.jpg",
        "year": "2023",
        "region": "马来西亚",
        "type": "电影",
        "genre": "剧情 / 劳工",
        "oneLine": "矿工每天挖出十吨泥，却挖不出二十年前埋在矿道里的哥哥。"
    },
    {
        "title": "恐怖12天",
        "href": "video/movie-0050.html",
        "cover": "50.jpg",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖，惊悚",
        "oneLine": "12个陌生人被关进一座古堡，每12分钟死一个人，他们必须在12天内找到12年前的真相。"
    },
    {
        "title": "人脑离心机计划",
        "href": "video/movie-0051.html",
        "cover": "51.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 悬疑 / 惊悚",
        "oneLine": "为了争夺永生技术，一群志愿者被送入高速旋转的离心机，意识逐渐崩溃成碎片。"
    },
    {
        "title": "哈利·波特：一段魔法史",
        "href": "video/movie-0052.html",
        "cover": "52.jpg",
        "year": "2024",
        "region": "英国 / 美国",
        "type": "纪录片",
        "genre": "纪录片 / 奇幻 / 文化",
        "oneLine": "从炼金术到曼德拉草，纪录片首次揭露J.K.罗琳创作哈利·波特时参考的真实欧洲魔法史与民间传说。"
    },
    {
        "title": "飞空幽灵船",
        "href": "video/movie-0053.html",
        "cover": "53.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动画",
        "oneLine": "孤儿机械师少女意外激活了传说中的幽灵飞艇，却发现上面住着一个被困百年的海盗船灵魂。"
    },
    {
        "title": "ㄎㄧㄤ爆好麻吉",
        "href": "video/movie-0054.html",
        "cover": "54.jpg",
        "year": "2023",
        "region": "台湾",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 奇幻",
        "oneLine": "两个废柴误食了新型毒品后，以为自己能看见“真相”，结果闹出了一连串救世主级别的笑话。"
    },
    {
        "title": "夫妇之道",
        "href": "video/movie-0055.html",
        "cover": "55.jpg",
        "year": "2016",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情, 家庭",
        "oneLine": "结婚十五年的模范夫妇同时出轨，对象竟是对方的离婚律师。"
    },
    {
        "title": "烂帐父不起",
        "href": "video/movie-0056.html",
        "cover": "56.jpg",
        "year": "2017",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "一个欠下高利贷的烂赌鬼父亲，为了女儿的手术费，决定用自己的命跟黑帮做最后一笔交易。"
    },
    {
        "title": "更美好的明天",
        "href": "video/movie-0057.html",
        "cover": "57.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情、社会、励志",
        "oneLine": "住在深水埗劏房里的一对父女，捡到了一张被遗弃的“明日之城”设计图。"
    },
    {
        "title": "百战天狼",
        "href": "video/movie-0058.html",
        "cover": "58.jpg",
        "year": "2017",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作 / 冒险 / 悬疑",
        "oneLine": "民国时期，一位退役狙击手与女保镖搭档，破解连环奇案并守护国宝。"
    },
    {
        "title": "逼上梁山",
        "href": "video/movie-0059.html",
        "cover": "59.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装 / 动作 / 社会 / 历史",
        "oneLine": "北宋末年，一个安分守己的猎户因一头误入官家的野兔，被逼得全家流亡，最终上了梁山。"
    },
    {
        "title": "未成年",
        "href": "video/movie-0060.html",
        "cover": "60.jpg",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "两个十四岁的少女，因父母的不伦之恋被迫成为姐妹，却联手反击成人世界的谎言。"
    },
    {
        "title": "暴疯语",
        "href": "video/movie-0061.html",
        "cover": "61.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 心理",
        "oneLine": "精神科医生被自己治愈的病人绑架，对方说：“你才是疯子，我只是你的幻觉。”"
    },
    {
        "title": "大婴儿",
        "href": "video/movie-0062.html",
        "cover": "62.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 奇幻",
        "oneLine": "一个华尔街精英被诅咒变成婴儿，他的女助理只能抱着他去开会。"
    },
    {
        "title": "球赛",
        "href": "video/movie-0063.html",
        "cover": "63.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 运动, 家庭",
        "oneLine": "一场小镇少年棒球总决赛，让一对冷战十年的离异父子被迫重新站上同一个赛场。"
    },
    {
        "title": "偷懒的猫",
        "href": "video/movie-0064.html",
        "cover": "64.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "动画片",
        "genre": "喜剧, 治愈, 短片",
        "oneLine": "一只特立独行的办公室猫咪，用各种匪夷所思的偷懒方式，治愈了被996压垮的社畜们。"
    },
    {
        "title": "针脚",
        "href": "video/movie-0065.html",
        "cover": "65.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑、惊悚、犯罪",
        "oneLine": "城里接连出现尸体，胸口都被绣上了诡异的红色丝线，一个刺绣大师成了最大嫌疑人。"
    },
    {
        "title": "战争之后",
        "href": "video/movie-0066.html",
        "cover": "66.jpg",
        "year": "2015",
        "region": "德国",
        "type": "电影",
        "genre": "剧情，战争",
        "oneLine": "二战结束十年后，一个德国小村里，幸存者和归来的战俘们发现，有些战争从未真正结束。"
    },
    {
        "title": "荡妇狂夫",
        "href": "video/movie-0067.html",
        "cover": "67.jpg",
        "year": "1967",
        "region": "法国",
        "type": "电影",
        "genre": "剧情，情色，伦理",
        "oneLine": "一对夫妻约定互相出轨，却发现自己根本无法接受对方真的和别人上床。"
    },
    {
        "title": "毒蜂魔影",
        "href": "video/movie-0068.html",
        "cover": "68.jpg",
        "year": "1967",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 悬疑, 犯罪",
        "oneLine": "1960年代香港，一名私家侦探调查连环死亡案，所有死者身边都出现一只死去的虎头蜂，而他自己也成了“下一针”的目标。"
    },
    {
        "title": "紧急呼救：孤星第四季",
        "href": "video/movie-0069.html",
        "cover": "69.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 剧情",
        "oneLine": "一支德州救援队辗转于飓风、野火与列车脱轨之间，他们拯救陌生人，却无法面对自己支离破碎的生活。"
    },
    {
        "title": "新鲜1994",
        "href": "video/movie-0070.html",
        "cover": "70.jpg",
        "year": "1994",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 犯罪, 青春",
        "oneLine": "12岁的纽约黑人少年靠帮毒贩跑腿赚钱，他把街头当做棋盘，自己则是一枚即将被吃掉的“兵”。"
    },
    {
        "title": "摩斯探长第五季",
        "href": "video/movie-0071.html",
        "cover": "71.jpg",
        "year": "2022",
        "region": "英国",
        "type": "电视剧集",
        "genre": "悬疑，犯罪",
        "oneLine": "摩斯调职后的第一起案件，牵扯出牛津大学内一桩跨越三十年的学术骗局。"
    },
    {
        "title": "光棍之家",
        "href": "video/movie-0072.html",
        "cover": "72.jpg",
        "year": "1988",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、家庭",
        "oneLine": "春节将至，一个偏远村庄里，三个光棍儿子和他那守寡多年的母亲，等待着一个未知的团圆。"
    },
    {
        "title": "罗马年少时代",
        "href": "video/movie-0073.html",
        "cover": "73.jpg",
        "year": "2024",
        "region": "意大利",
        "type": "剧集",
        "genre": "青春剧情",
        "oneLine": "2000年夏天的罗马，四个穷小子试图偷走一辆报废的 Vespa 摩托车，却偷来了一整个改变命运的暑假。"
    },
    {
        "title": "属于我们的城市",
        "href": "video/movie-0074.html",
        "cover": "74.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市 / 群像",
        "oneLine": "北上广深之后，六个失意的年轻人逃回“新一线”，却发现家乡早已变成了另一个需要拼搏的“战场”。"
    },
    {
        "title": "反转人生2022",
        "href": "video/movie-0075.html",
        "cover": "75.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 奇幻 / 剧情",
        "oneLine": "一个被裁员的四十岁程序员，与一个被催婚的二十岁主播互换了身体。"
    },
    {
        "title": "高岭之花",
        "href": "video/movie-0076.html",
        "cover": "76.jpg",
        "year": "2018",
        "region": "日本",
        "type": "剧集 (共10集)",
        "genre": "爱情 / 剧情",
        "oneLine": "日本花道世家千金，一个从小被要求“完美”的女孩，爱上了花艺店里最不起眼的打工仔。"
    },
    {
        "title": "青松岭",
        "href": "video/movie-0077.html",
        "cover": "77.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 乡村 / 人性",
        "oneLine": "东北一个只有二十户人家的闭塞山村，大雪封山后，十天内死了五个人，而葬礼都在同一个夜晚悄悄举行。"
    },
    {
        "title": "替身2020",
        "href": "video/movie-0078.html",
        "cover": "78.jpg",
        "year": "2020",
        "region": "日本",
        "type": "电影 / 动画",
        "genre": "悬疑 / 恐怖 / 惊悚",
        "oneLine": "三年前溺亡的同学突然出现在毕业照里，全班开始按“替身”顺序接连“意外”死亡。"
    },
    {
        "title": "80奔赴布莱迪",
        "href": "video/movie-0079.html",
        "cover": "79.jpg",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 公路",
        "oneLine": "四位八旬老太为了在超级碗中场秀见偶像布莱迪一眼，偷了一辆房车横穿美国。"
    },
    {
        "title": "长腿",
        "href": "video/movie-0080.html",
        "cover": "80.jpg",
        "year": "2015",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 运动, 家庭",
        "oneLine": "没有双腿的母亲，想让女儿成为马拉松选手，可女儿只想当一个普通人。"
    },
    {
        "title": "主夫公寓",
        "href": "video/movie-0081.html",
        "cover": "81.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 喜剧, 家庭",
        "oneLine": "四个被生活“逼”成全职主夫的男人在一栋公寓里，用鸡飞狗跳的日常颠覆了所有人的刻板印象。"
    },
    {
        "title": "珍妮宝贝",
        "href": "video/movie-0082.html",
        "cover": "82.jpg",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "十岁女孩珍妮将一只玩偶熊当作“妈妈”，却因一场意外被迫直面真实家庭的裂痕。"
    },
    {
        "title": "极道杀手",
        "href": "video/movie-0083.html",
        "cover": "83.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动作， 犯罪， 喜剧",
        "oneLine": "一个做事一板一眼、有强迫症的顶级杀手，不得不伪装成极道组织的小弟，结果发现对方比他更“专业”。"
    },
    {
        "title": "家族",
        "href": "video/movie-0084.html",
        "cover": "84.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情 / 黑帮 / 家庭",
        "oneLine": "黑道大佬金盆洗手当上了小区居委会主任，却发现儿子背着他成了新一代黑帮头目。"
    },
    {
        "title": "凹凸世界第一季",
        "href": "video/movie-0085.html",
        "cover": "85.jpg",
        "year": "2023",
        "region": "中国",
        "type": "剧集",
        "genre": "动画 / 科幻 / 冒险",
        "oneLine": "在一个被“凹凸神”统治的星球上，被淘汰者将被抹去存在，而第一名的奖励是“许愿复活一人”。"
    },
    {
        "title": "我想要找到你",
        "href": "video/movie-0086.html",
        "cover": "86.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "儿子被拐后，一个木讷的父亲骑行全国寻子，而他的儿子其实一直住在离家仅三公里的邻村。"
    },
    {
        "title": "贫乏神来了！",
        "href": "video/movie-0087.html",
        "cover": "87.jpg",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧, 奇幻, 动画",
        "oneLine": "运气爆棚的白富美被穷神附体，一夜之间霉运连连，连泡面都没调料包。"
    },
    {
        "title": "3橘之恋",
        "href": "video/movie-0088.html",
        "cover": "88.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情, 喜剧, 同性",
        "oneLine": "三个各自暗恋着错误对象的大学生，因为一箱错送的橘子，展开了一场荒诞的追爱循环。"
    },
    {
        "title": "肮脏的周末",
        "href": "video/movie-0089.html",
        "cover": "89.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚, 悬疑",
        "oneLine": "七位网红受邀参加豪华周末派对，却发现每一步都实时直播，而观众正在投票决定他们的生死。"
    },
    {
        "title": "哎呀好身材第二季",
        "href": "video/movie-0090.html",
        "cover": "90.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "综艺 / 真人秀",
        "genre": "真人秀 / 运动 / 生活",
        "oneLine": "四位胖明星签下“对赌协议”：减一斤奖一万，涨一斤罚一万，结果第一周就有人暴瘦十斤——饿的。"
    },
    {
        "title": "战地微光",
        "href": "video/movie-0091.html",
        "cover": "91.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 历史, 战争",
        "oneLine": "1937年上海，战地女记者用相机镜头记录灾难，却意外拍下了日军惨无人道的罪证，她必须活着把胶卷送出演租界。 她的相机不是武器，但拍下的底片比一颗炮弹更能让敌人在国际法庭上颤抖。"
    },
    {
        "title": "绯红色的窗帘",
        "href": "video/movie-0092.html",
        "cover": "92.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "oneLine": "每晚偷看对面公寓的女钢琴师，发现她竟在练习杀人，而自己也成了下一个目标。"
    },
    {
        "title": "天神魔煞",
        "href": "video/movie-0093.html",
        "cover": "93.jpg",
        "year": "2011",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 惊悚",
        "oneLine": "在一个被吸血鬼统治的后末日世界，一名违反教规的枪神牧师，为了拯救被绑架的侄女，向黑暗发起了最后的圣战。"
    },
    {
        "title": "死亡客机",
        "href": "video/movie-0094.html",
        "cover": "94.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "灾难 / 惊悚",
        "oneLine": "红眼航班起飞后，所有乘客每十分钟死一人，且死亡顺序竟和登机牌座位号完全一致。"
    },
    {
        "title": "时之凶间",
        "href": "video/movie-0095.html",
        "cover": "95.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "科幻，悬疑，惊悚",
        "oneLine": "六个陌生人被困在一间没有门窗的白色房间，每死一个人，时间就会倒流10分钟。"
    },
    {
        "title": "一子错",
        "href": "video/movie-0096.html",
        "cover": "96.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 悬疑, 家庭",
        "oneLine": "二十年前一步棋害死儿子，二十年后，那个人带着死去的儿子的棋谱回来复仇。"
    },
    {
        "title": "乐高星球大战：惊魂传说",
        "href": "video/movie-0097.html",
        "cover": "97.jpg",
        "year": "2025",
        "region": "美国",
        "type": "动画剧集",
        "genre": "喜剧 / 动画 / 科幻",
        "oneLine": "死星上的万圣节派对出了大乱子，达斯·维达不得不化身“保安”，去抓捕一群到处捣蛋的乐高幽灵。"
    },
    {
        "title": "古惑丑拍档",
        "href": "video/movie-0098.html",
        "cover": "98.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧",
        "oneLine": "全港最帅的卧底警察和最丑的通缉犯，因为一桩整容事故互换了脸，从此陷入了互相扮演对方的噩梦。"
    },
    {
        "title": "埃尔利希博士的魔弹",
        "href": "video/movie-0099.html",
        "cover": "99.jpg",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "传记/剧情/历史",
        "oneLine": "面对世纪绝症与学阀围剿，一位偏执的医学博士赌上一切，只为寻找那枚能精准杀死病魔的“魔法子弹”。"
    },
    {
        "title": "火光之地",
        "href": "video/movie-0100.html",
        "cover": "100.jpg",
        "year": "2024",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "惊悚 / 悬疑 / 灾难",
        "oneLine": "十年后一场世纪山火再次烧过小镇，消防员诺亚在余烬中发现一具本应早被埋葬的尸骨。"
    },
    {
        "title": "通灵男孩诺曼",
        "href": "video/movie-0101.html",
        "cover": "101.jpg",
        "year": "2012",
        "region": "美国",
        "type": "电影",
        "genre": "动画，喜剧，奇幻",
        "oneLine": "能看见鬼魂的男孩诺曼，必须用一场蹩脚的仪式阻止三百年前女巫诅咒引发的僵尸危机。"
    },
    {
        "title": "柞蚕",
        "href": "video/movie-0102.html",
        "cover": "102.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、家庭、文艺",
        "oneLine": "东北最后一位柞蚕养殖老把式的孙女从深圳回乡，要拆掉蚕场盖度假村，而老人在蚕山上等了一只柞蚕蛾五十年。"
    },
    {
        "title": "亲爱的天狐大人",
        "href": "video/movie-0103.html",
        "cover": "103.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装，爱情，奇幻",
        "oneLine": "千年天狐被封印在小道士体内，为了解开封印，不得不帮她做任务，却在相处中动了凡心。"
    },
    {
        "title": "他其实没有那么爱你",
        "href": "video/movie-0104.html",
        "cover": "104.jpg",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "爱情 / 喜剧",
        "oneLine": "四位都市闺蜜成立“反恋爱脑联盟”，用自己的血泪史总结出一套“男人谎言识别指南”。"
    },
    {
        "title": "爱情一箩筐",
        "href": "video/movie-0105.html",
        "cover": "105.jpg",
        "year": "1997",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "oneLine": "卖鱼蛋的阿强同时被富家女、女警和庙街歌女爱上，他用三个身份周旋，结果三女在一场生日宴上全部到场。"
    },
    {
        "title": "惊爆死亡角",
        "href": "video/movie-0106.html",
        "cover": "106.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 悬疑",
        "oneLine": "澳门格兰披治大赛车现场，卧底警探必须在致命弯道“死亡角”揪出隐藏在车手中的炸弹狂徒。"
    },
    {
        "title": "边城落日",
        "href": "video/movie-0107.html",
        "cover": "107.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "西部, 动作, 剧情",
        "oneLine": "民国末年，一名老镖师护送最后的皇杠穿越腾格里沙漠，遭遇马匪、军阀和更可怕的“时间”。"
    },
    {
        "title": "山楂树之恋 2025",
        "href": "video/movie-0108.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 科幻",
        "oneLine": "静秋在70岁临终前被选中参加“意识永生”计划，在虚拟世界里，她终于等到了没有白血病的老三。"
    },
    {
        "title": "十三妹国语",
        "href": "video/movie-0109.html",
        "cover": "109.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠 / 动作",
        "oneLine": "十三妹为父报仇追杀仇家十年，最后发现父亲是被自己亲生母亲出卖的，而她刚杀了唯一知情人。"
    },
    {
        "title": "乔凡尼的岛",
        "href": "video/movie-0110.html",
        "cover": "110.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画 / 电影",
        "genre": "剧情 / 历史 / 战争",
        "oneLine": "色丹岛上的两个日本男孩，和苏联军官的女儿，一起寻找传说中的“乔凡尼”宝藏。"
    },
    {
        "title": "神谷诗子没有参加毕业典礼",
        "href": "video/movie-0111.html",
        "cover": "111.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 青春",
        "oneLine": "毕业典礼上空着的座位，牵扯出神谷诗子一年前被全班遗忘的秘密。"
    },
    {
        "title": "宇宙护卫队之超甲恐龙队",
        "href": "video/movie-0112.html",
        "cover": "112.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画",
        "genre": "科幻 / 冒险 / 儿童",
        "oneLine": "当宇宙护卫队遭遇来自恐龙星系的机甲军团，双方从死敌变成并肩作战的伙伴，对抗真正的宇宙威胁。"
    },
    {
        "title": "海绵宝宝:海陆大出击",
        "href": "video/movie-0113.html",
        "cover": "113.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动画，喜剧，冒险",
        "oneLine": "比基尼海滩被抽干，海绵宝宝带领海底伙伴们首次登陆陆地，向人类发起一场荒诞又感人的“吸水”救援。"
    },
    {
        "title": "地下尖兵",
        "href": "video/movie-0114.html",
        "cover": "114.jpg",
        "year": "1957",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情， 谍战， 战争",
        "oneLine": "1948年长春围城前夕，我党地下电台“尖兵小组”的一名内鬼突然失忆，醒来后他必须在敌人面前假装仍然是个叛徒。"
    },
    {
        "title": "监护者",
        "href": "video/movie-0115.html",
        "cover": "115.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻, 悬疑",
        "oneLine": "每个孩子出生时都被分配一个AI监护者，直到有人发现它暗中筛选“不合格人类”。"
    },
    {
        "title": "强迫中奖",
        "href": "video/movie-0116.html",
        "cover": "116.jpg",
        "year": "1997",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧，爱情",
        "oneLine": "负债累累的出租车司机，为了高额奖金只好与一个凶巴巴的女警“假结婚”，但中奖后的烦恼比躲债还多。"
    },
    {
        "title": "霸海群英会",
        "href": "video/movie-0117.html",
        "cover": "117.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 黑帮",
        "oneLine": "公海赌船上，五大黑帮巨头设局吞并地盘，一个卧底警察却发现自己成了棋局里唯一的王。"
    },
    {
        "title": "眼里余光都是你",
        "href": "video/movie-0118.html",
        "cover": "118.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧 / 甜宠剧",
        "genre": "爱情 / 喜剧 / 职场",
        "oneLine": "假性失明的霸道总裁被迫住进盲人按摩师家里，发现她“看”他的方式比任何眼睛都清楚。"
    },
    {
        "title": "亲亲小站3",
        "href": "video/movie-0119.html",
        "cover": "119.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 爱情, 青春",
        "oneLine": "面临毕业的女主必须在青梅竹马和异国帅哥之间做出最终选择，但“吻别”的规则突然改了。"
    },
    {
        "title": "淘金杀手",
        "href": "video/movie-0120.html",
        "cover": "120.jpg",
        "year": "2025",
        "region": "美国 / 加拿大",
        "type": "电影",
        "genre": "西部 / 犯罪 / 惊悚",
        "oneLine": "两名杀手受雇去淘金小镇除掉一个矿工，却发现对方已经挖到了传说中的“诅咒金块”。"
    },
    {
        "title": "加尔各答往事",
        "href": "video/movie-0121.html",
        "cover": "121.jpg",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "从1946年印巴分治到现代，加尔各答一个纺织家族三代女性的抗争与和解史。"
    },
    {
        "title": "极地营救",
        "href": "video/movie-0122.html",
        "cover": "122.jpg",
        "year": "2024",
        "region": "中国内地",
        "type": "电影",
        "genre": "灾难, 动作, 冒险",
        "oneLine": "一场史无前例的冰盖崩塌，将八名科考队员困在深海冰穴，唯一的希望是一个被开除的前救援队长。"
    },
    {
        "title": "恶魔法则",
        "href": "video/movie-0123.html",
        "cover": "123.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "动画",
        "genre": "奇幻 / 冒险",
        "oneLine": "废柴少年意外获得禁忌魔法“恶魔法则”，每次施法都会消耗自己的寿命。"
    },
    {
        "title": "叶罗丽梦奇境真人版",
        "href": "video/movie-0124.html",
        "cover": "124.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "奇幻 / 冒险",
        "oneLine": "平凡少女王默意外进入叶罗丽仙境，却发现仙境正在崩坏，她必须联合新伙伴，用“心之力”拯救两个世界。"
    },
    {
        "title": "哭泣的男人",
        "href": "video/movie-0125.html",
        "cover": "125.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、西部、动作",
        "oneLine": "一个衰落的驯马师接下最后一项任务:将老板年幼的儿子从墨西哥毒枭手中带回美国。"
    },
    {
        "title": "第六号太空船",
        "href": "video/movie-0126.html",
        "cover": "126.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻, 悬疑",
        "oneLine": "太空船“第六号”的六名船员醒来，发现每个人都拥有同一具身体的记忆。"
    },
    {
        "title": "荒岛余生国语",
        "href": "video/movie-0127.html",
        "cover": "127.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险/剧情",
        "oneLine": "一个外卖员遭遇海难飘落荒岛，他靠着送餐的记忆和一部没电的手机，独自求生。"
    },
    {
        "title": "开快车",
        "href": "video/movie-0128.html",
        "cover": "128.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，犯罪，飙车",
        "oneLine": "地下车王因弟弟被仇家撞成植物人，重出江湖参加一场亡命赌命大赛。"
    },
    {
        "title": "狂人波伊斯",
        "href": "video/movie-0129.html",
        "cover": "129.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "传记 / 剧情",
        "oneLine": "他把自己关在铁笼里生活了 500 天，只为证明疯子才是这个时代唯一的正常人。"
    },
    {
        "title": "人间世 第二季",
        "href": "video/movie-0130.html",
        "cover": "130.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "纪录片 / 社会 / 医疗",
        "oneLine": "镜头继续深入急诊室、肿瘤科和精神科，记录那些“不敢死、不想活、拼命生”的人。"
    },
    {
        "title": "觅迹追踪",
        "href": "video/movie-0131.html",
        "cover": "131.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "网剧",
        "genre": "悬疑 / 犯罪 / 刑侦",
        "oneLine": "三座城市接连出现女性失踪案，一名非科班出身的出租车司机提供的路线图成了破案关键。"
    },
    {
        "title": "艳遇比赛2",
        "href": "video/movie-0132.html",
        "cover": "132.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "oneLine": "上一季冠军情侣高调结婚后一年离了，第二季新玩家们发誓绝不动真情，却全部沦陷。"
    },
    {
        "title": "代号美洲豹",
        "href": "video/movie-0133.html",
        "cover": "133.jpg",
        "year": "1989",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作",
        "oneLine": "沿海城市一名刑警伪装成文物贩子潜入走私集团，却发现上级就是幕后黑手，而他手中的代号“美洲豹”另有含义。"
    },
    {
        "title": "神的诊疗簿",
        "href": "video/movie-0134.html",
        "cover": "134.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "医疗, 悬疑, 治愈",
        "oneLine": "一位在偏远小岛执业的古怪医生，每次救不活病人都会写一份“神的诊疗簿”，直至他发现本子上出现了一个从未接诊过的名字。"
    },
    {
        "title": "红门兄弟",
        "href": "video/movie-0135.html",
        "cover": "135.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "军旅, 剧情, 动作",
        "oneLine": "特勤消防站来了个刺头新兵，他发现自己的顶头上司竟然是当年在火场为了救“宠物狗”而放弃救自己父亲的仇人。"
    },
    {
        "title": "魅惑人鱼姬",
        "href": "video/movie-0136.html",
        "cover": "136.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "奇幻, 爱情, 悬疑, 惊悚",
        "oneLine": "整容医生救起一名失忆的美丽女子，她的歌声能让任何男人沉迷，但每个爱上她的人，最终都会自愿“献上”自己的脸。"
    },
    {
        "title": "蓝眸屠夫",
        "href": "video/movie-0137.html",
        "cover": "137.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 犯罪",
        "oneLine": "网红主播为了流量追踪“蓝眸屠夫”，却发现直播间里的十万观众，全是凶手的帮凶。"
    },
    {
        "title": "内心强大的美女白川",
        "href": "video/movie-0138.html",
        "cover": "138.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情喜剧",
        "oneLine": "无论遭遇什么打击都能瞬间自愈的销售女神白川，用她的“强大”治愈着身边每个人。"
    },
    {
        "title": "我的狗蚪蚪",
        "href": "video/movie-0139.html",
        "cover": "139.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 儿童",
        "oneLine": "九岁男孩阿福的土狗“蚪蚪”被镇上打狗队抓走，他用一个暑假的时间踏上了寻狗之旅。"
    },
    {
        "title": "小贾斯汀：永不说不",
        "href": "video/movie-0140.html",
        "cover": "140.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影 / 纪录",
        "genre": "纪录片 / 音乐 / 传记",
        "oneLine": "从YouTube少年到全球偶像，贾斯汀·比伯十年噩梦与救赎的全纪录。"
    },
    {
        "title": "《罗刹人》",
        "href": "video/movie-0141.html",
        "cover": "141.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "奇幻 / 古装",
        "oneLine": "美男子马骥坠入罗刹国，这里以丑为美，他因相貌“奇丑”而被奉为上宾。"
    },
    {
        "title": "六个无价值的片段",
        "href": "video/movie-0142.html",
        "cover": "142.jpg",
        "year": "2023",
        "region": "德国",
        "type": "电影",
        "genre": "剧情， 文艺， 实验",
        "oneLine": "一位剪辑师在自杀前，将自己的一生剪辑成了六个连不起来的“废片”片段。"
    },
    {
        "title": "难言之隐",
        "href": "video/movie-0143.html",
        "cover": "143.jpg",
        "year": "2019",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "父亲临终前，三个子女翻遍了他的遗物，才发现那个沉默寡言的男人心里藏着一座巨大的坟墓。"
    },
    {
        "title": "冲击点",
        "href": "video/movie-0144.html",
        "cover": "144.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 灾难",
        "oneLine": "一列满载乘客的地铁被安放了磁性炸弹，一旦车速低于80公里，整列车就会爆炸。"
    },
    {
        "title": "第三类接触",
        "href": "video/movie-0145.html",
        "cover": "145.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 悬疑",
        "oneLine": "一位自闭症语言学家破译了外星信号，却发现对方正在用她的童年记忆作为“付款”。"
    },
    {
        "title": "异形鬼屋2：地狱的厨房",
        "href": "video/movie-0146.html",
        "cover": "146.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖",
        "oneLine": "百年庄园的厨房活了过来，失控的智能家电和异形肉酱，让一场美食大赛变成了血腥屠宰场。"
    },
    {
        "title": "搞鬼史力加",
        "href": "video/movie-0147.html",
        "cover": "147.jpg",
        "year": "2002",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 动画, 恶搞",
        "oneLine": "当史力加说起了流利的粤语粗口，暗黑童话瞬间变成香港市井栋笃笑。"
    },
    {
        "title": "大象与犀牛的战争",
        "href": "video/movie-0148.html",
        "cover": "148.jpg",
        "year": "2023",
        "region": "南非 / 美国",
        "type": "纪录片",
        "genre": "自然 / 纪录",
        "oneLine": "一场百年难遇的干旱迫使原本和平共处的大象家族与犀牛群为争夺最后一处水源展开持久战。"
    },
    {
        "title": "乱世夕阳情",
        "href": "video/movie-0149.html",
        "cover": "149.jpg",
        "year": "1988",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情, 战争",
        "oneLine": "二战末期，意大利村庄里，德国女逃兵与当地鳏夫在废墟中互相取暖，惹怒所有人。"
    },
    {
        "title": "开心超人2:启源星之战",
        "href": "video/movie-0150.html",
        "cover": "150.jpg",
        "year": "2014",
        "region": "中国大陆",
        "type": "电影 / 动画",
        "genre": "动画 / 动作 / 科幻",
        "oneLine": "超人们来到启源星寻找能量源，却发现那里沉睡着一只足以毁灭五超星的远古巨兽。"
    },
    {
        "title": "迷失方向",
        "href": "video/movie-0151.html",
        "cover": "1.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚 / 冒险 / 心理",
        "oneLine": "五名驴友在苏格兰高地徒步时迷路，他们所持的GPS全部指向同一个错误坐标，而那个坐标上画着一个小小的绞刑架图标。"
    },
    {
        "title": "隐藏的情人",
        "href": "video/movie-0152.html",
        "cover": "2.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑爱情",
        "oneLine": "完美新娘的婚纱下藏着通缉犯的秘密，而她的未婚夫正是当年抓捕她的卧底警官。"
    },
    {
        "title": "天官赐福动漫日语",
        "href": "video/movie-0153.html",
        "cover": "3.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动漫",
        "genre": "奇幻 / 古装 / 耽美",
        "oneLine": "日语配音版的八百年前神官与鬼王之间的宿命重逢，声优阵容豪华到令人尖叫。"
    },
    {
        "title": "非关正义2：真相",
        "href": "video/movie-0154.html",
        "cover": "4.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "被誉为“警察杀手”的女记者，在追查一桩旧案时，发现所有证据都指向自己——而她当时只有5岁。"
    },
    {
        "title": "维拉·德雷克",
        "href": "video/movie-0155.html",
        "cover": "5.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情传记",
        "oneLine": "二战后的伦敦，一位善良的中产阶级妇女秘密帮助女性，直到警察敲开了她家的门。"
    },
    {
        "title": "夜半惊魂粤语",
        "href": "video/movie-0156.html",
        "cover": "6.jpg",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "四个青年租下一间凶宅直播探灵，却发现屋里的女鬼其实是在保护他们不被更恐怖的东西伤害。"
    },
    {
        "title": "核子弹头",
        "href": "video/movie-0157.html",
        "cover": "7.jpg",
        "year": "1991",
        "region": "香港",
        "type": "电影",
        "genre": "动作，科幻",
        "oneLine": "一场核爆后，货车司机阿强变成了皮肤蓝色、力大无穷的“核子弹头”。"
    },
    {
        "title": "校花驾到2蜜桃时代",
        "href": "video/movie-0158.html",
        "cover": "8.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春, 喜剧, 爱情",
        "oneLine": "曾经的校花毕业三年后沦为小主播，却在校庆上遇到抢走自己一切的“蜜桃女孩”组合。"
    },
    {
        "title": "三十功名尘与土",
        "href": "video/movie-0159.html",
        "cover": "9.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "年近四十的历史系副教授在职称评定失败后，被迫南下深圳寻找人生第二春。"
    },
    {
        "title": "战士第二季",
        "href": "video/movie-0160.html",
        "cover": "10.jpg",
        "year": "2020",
        "region": "美国",
        "type": "剧集",
        "genre": "动作",
        "oneLine": "1870年代旧金山唐人街，武功高强的华人移民在爱尔兰帮和警局夹缝中杀出血路。"
    },
    {
        "title": "美国交响乐：奏出泪汗血",
        "href": "video/movie-0161.html",
        "cover": "11.jpg",
        "year": "2023",
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录, 音乐",
        "oneLine": "一群来自贫民窟的黑人少年，试图用古典交响乐撕裂社会的偏见与枪声。"
    },
    {
        "title": "鲁邦三世：鲁邦暗杀指令",
        "href": "video/movie-0162.html",
        "cover": "12.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影 / 动画",
        "genre": "动画 / 动作 / 犯罪",
        "oneLine": "一个神秘组织在全球发布“鲁邦暗杀指令”，杀掉一个鲁邦就能得到一亿美金，一夜之间冒出了上百个“鲁邦”。"
    },
    {
        "title": "哦，我的宠妃大人2023",
        "href": "video/movie-0163.html",
        "cover": "13.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装，甜宠",
        "oneLine": "现代女总裁穿越成废柴宠妃，用KPI考核后宫、用SWOT分析宫斗，把皇帝训练成了年度最佳员工。"
    },
    {
        "title": "猛毒",
        "href": "video/movie-0164.html",
        "cover": "14.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 科幻, 惊悚",
        "oneLine": "落魄记者埃迪·布洛克与外星共生体猛毒被迫联手，对抗一个能够分裂并感染人类军队的共生体进化体。"
    },
    {
        "title": "黑水风暴",
        "href": "video/movie-0165.html",
        "cover": "15.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 惊悚, 传记",
        "oneLine": "一个土里土气的小镇律师，花了20年时间，单挑全球化学巨头杜邦公司，只为证明“特氟龙有毒”。"
    },
    {
        "title": "冰冻之河",
        "href": "video/movie-0166.html",
        "cover": "16.jpg",
        "year": "2024",
        "region": "美国 / 法国",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "莫霍克保留地的单身母亲为了生计替人走私，却在冰冻的圣劳伦斯河上发现车厢里装的是被拐卖的幼童。"
    },
    {
        "title": "老虎田鸡",
        "href": "video/movie-0167.html",
        "cover": "17.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 喜剧",
        "oneLine": "庙街夜市即将被强拆，经营牛杂摊的老田鸡和过气武打明星老老虎决定用炒勺和拳脚守住最后的地盘。"
    },
    {
        "title": "迷失内华达",
        "href": "video/movie-0168.html",
        "cover": "18.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "oneLine": "三名大学生深入内华达沙漠拍摄纪录片，却发现镇上所有居民都在重复同一句话。"
    },
    {
        "title": "走佬算鬼数",
        "href": "video/movie-0169.html",
        "cover": "19.jpg",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 犯罪, 悬疑",
        "oneLine": "只会算概率的数学教授被黑帮绑架要求出千，他却用微积分给对方上了一堂“如何输掉所有钱”的生动课程。"
    },
    {
        "title": "雀斑公主",
        "href": "video/movie-0170.html",
        "cover": "20.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 青春 / 家庭",
        "oneLine": "满脸雀斑的高中女生参加选美比赛，只为了向嫌弃她长相的母亲证明：美不只有一种。"
    },
    {
        "title": "方圆八百米",
        "href": "video/movie-0171.html",
        "cover": "21.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑、犯罪、心理",
        "oneLine": "十年来，四起命案都发生在老城区“方圆八百米”内，新人刑警发现凶手可能就住在她隔壁。"
    },
    {
        "title": "散修之王",
        "href": "video/movie-0172.html",
        "cover": "22.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画, 奇幻, 冒险",
        "oneLine": "一个灵根废柴、无门无派的散修，靠捡各大门派丢弃的功法残页，拼凑出了一条前无古人的飞升之路。"
    },
    {
        "title": "逆喷射家族",
        "href": "video/movie-0173.html",
        "cover": "23.jpg",
        "year": "1984",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧， 家庭",
        "oneLine": "一个四口之家为了争夺新买的彩色电视机，将整栋房子变成了战场。"
    },
    {
        "title": "囧爸爸",
        "href": "video/movie-0174.html",
        "cover": "24.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 家庭 / 公路",
        "oneLine": "工作狂单亲爸爸和叛逆女儿意外互换了身体，此时正值春运，他必须顶着女儿的身体去赶一场重要的面试。"
    },
    {
        "title": "猎狐",
        "href": "video/movie-0175.html",
        "cover": "25.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "刑侦、经侦",
        "oneLine": "经侦干警跨国追捕“金融天才”，每当他以为抓到对方时，才发现自己只是被算计的棋子。"
    },
    {
        "title": "夸家庭聚会",
        "href": "video/movie-0176.html",
        "cover": "26.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "一次普通的家庭聚餐，因为长辈突然要求“每人夸我一句”，演变成一场荒诞的拍马屁大赛。"
    },
    {
        "title": "热血勇士",
        "href": "video/movie-0177.html",
        "cover": "27.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "战争, 动作, 历史",
        "oneLine": "1938年台儿庄，五个不同出身的年轻人组成敢死队，每人只带三颗手榴弹和一张全家福。"
    },
    {
        "title": "与谍同谋粤语",
        "href": "video/movie-0178.html",
        "cover": "28.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "谍战 / 悬疑",
        "oneLine": "一个为日本情报机构工作的华人，发现自己要暗杀的目标竟然是失散二十年的亲哥哥。"
    },
    {
        "title": "还是觉得你最好",
        "href": "video/movie-0179.html",
        "cover": "29.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 喜剧",
        "oneLine": "分手五年的毒舌情侣在一档离婚综艺重逢，假装和好骗通告费，结果假戏真做，再次撕得不可开交。"
    },
    {
        "title": "钢牙佬星空显威风",
        "href": "video/movie-0180.html",
        "cover": "30.jpg",
        "year": "2027",
        "region": "马来西亚",
        "type": "电影",
        "genre": "喜剧 / 科幻",
        "oneLine": "一个只会修牙钻的钢牙佬，被外星人选中驾驶拼凑的飞船保卫太阳系。"
    },
    {
        "title": "饥饿游戏：星火燎原",
        "href": "video/movie-0181.html",
        "cover": "31.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "oneLine": "凯妮丝成为反抗象征后，被送入第75届世纪极限赛，而这场游戏本身就是一场精心策划的越狱行动。"
    },
    {
        "title": "束不住的茜茜皇后",
        "href": "video/movie-0182.html",
        "cover": "32.jpg",
        "year": "2022",
        "region": "奥地利 / 德国",
        "type": "剧集",
        "genre": "历史 / 传记",
        "oneLine": "以现代视角重述茜茜皇后被宫廷礼仪压抑的一生，以及她对自由近乎偏执的追求。"
    },
    {
        "title": "林肯的最后一天",
        "href": "video/movie-0183.html",
        "cover": "33.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "历史 / 剧情 / 悬疑",
        "oneLine": "以“伪纪录片+剧场实时”形式，还原林肯遇刺当天每一个小时的行踪，并抛出一个惊人的可能：凶手只是棋子。"
    },
    {
        "title": "非常性反应",
        "href": "video/movie-0184.html",
        "cover": "34.jpg",
        "year": "1998",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 伦理",
        "oneLine": "一种通过亲密接触传播的怪病爆发，医生们必须在救治患者与保护家人间做出残酷抉择。"
    },
    {
        "title": "乱世姻缘",
        "href": "video/movie-0185.html",
        "cover": "35.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、战争",
        "oneLine": "1941年香港沦陷，富家千金与日本军官的翻译官相爱，而她的未婚夫是东江纵队的抗日英雄。"
    },
    {
        "title": "热恋攻心",
        "href": "video/movie-0186.html",
        "cover": "36.jpg",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "爱情，喜剧，医疗",
        "oneLine": "心脏外科女主任空降医院，发现那个总在手术方案上反对她的医生，是大学时暗恋她的学弟。"
    },
    {
        "title": "时光之轮第三季",
        "href": "video/movie-0187.html",
        "cover": "37.jpg",
        "year": "2027",
        "region": "美国",
        "type": "剧集",
        "genre": "奇幻 / 冒险 / 剧情",
        "oneLine": "兰德逐渐走向疯狂，艾雯在两仪师中挣扎，而暗帝的封印即将彻底崩溃。"
    },
    {
        "title": "妓女与鲸鱼",
        "href": "video/movie-0188.html",
        "cover": "38.jpg",
        "year": "2023",
        "region": "阿根廷",
        "type": "电影",
        "genre": "剧情/魔幻现实",
        "oneLine": "老妓女临终前托付孙女去寻找一头搁浅在沙漠里的鲸鱼骨架，那是她一生的起点。"
    },
    {
        "title": "势如破竹",
        "href": "video/movie-0189.html",
        "cover": "39.jpg",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "黑帮动作",
        "oneLine": "黑帮第一狙击手被组织灭口后幸存，化身城市猎人，用一把改装狙击枪挨个点名昔日兄弟。"
    },
    {
        "title": "江塘集中营",
        "href": "video/movie-0190.html",
        "cover": "40.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 战争 / 人性",
        "oneLine": "日军战俘营中，国共两军的囚徒为了活下去，不得不在敌人眼皮底下联手。"
    },
    {
        "title": "废柴小仵作",
        "href": "video/movie-0191.html",
        "cover": "41.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装 / 探案 / 喜剧",
        "oneLine": "现代法医学女博士穿越成古代最不受待见的女仵作，用DNA技术把鬼神案破成科学案。"
    },
    {
        "title": "调皮蛋",
        "href": "video/movie-0192.html",
        "cover": "42.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画，家庭",
        "oneLine": "一个沉迷网络恶作剧的农村“熊孩子”被爷爷的皮影戏吸进了戏里，他必须学会用传统手艺制造真正的“调皮”才能逃出来。"
    },
    {
        "title": "玉女求凰",
        "href": "video/movie-0193.html",
        "cover": "43.jpg",
        "year": "1969",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情 / 喜剧",
        "oneLine": "富家千金为了逼婚假意下嫁落难画家，却不料对方正是自己暗恋多年的笔友。"
    },
    {
        "title": "再见时光",
        "href": "video/movie-0194.html",
        "cover": "44.jpg",
        "year": "2020",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 同性, 家庭",
        "oneLine": "父亲去世后，儿子在阁楼发现一盒录像带，里面是年轻时的父亲和一个“陌生男人”的情书。"
    },
    {
        "title": "淘气托托大冒险",
        "href": "video/movie-0195.html",
        "cover": "45.jpg",
        "year": "2015",
        "region": "英国 / 法国",
        "type": "动画电影",
        "genre": "冒险、喜剧、家庭",
        "oneLine": "一只被宠坏的家猫托托意外掉进快递箱，被寄往亚马逊丛林，开启了一场啼笑皆非的归家之旅。"
    },
    {
        "title": "谁的青春不热血",
        "href": "video/movie-0196.html",
        "cover": "46.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "校园, 运动",
        "oneLine": "一群被体育老师“骗”来的问题学生，组成了全校最不被看好的男子排球队。"
    },
    {
        "title": "村拉",
        "href": "video/movie-0197.html",
        "cover": "47.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "为争夺“乡村振兴示范村”称号，两个相邻村庄决定通过一场拔河比赛定胜负。"
    },
    {
        "title": "虐童疑云",
        "href": "video/movie-0198.html",
        "cover": "48.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "幼儿园教师被指控虐童，所有证据都指向她，但她那患有自闭症的儿子却说“妈妈没有打人”。"
    },
    {
        "title": "无人入眠",
        "href": "video/movie-0199.html",
        "cover": "49.jpg",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑、超自然、密室",
        "oneLine": "一栋老旧公寓楼的住户集体患上致死性失眠症，只要睡着就会做同一个噩梦，但醒来会发现梦里的伤口真实存在。"
    },
    {
        "title": "女篮辣哥",
        "href": "video/movie-0200.html",
        "cover": "50.jpg",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 运动",
        "oneLine": "女篮后卫为进职业队假扮男生，却发现自己爱上了队友。"
    },
    {
        "title": "荒漠杀机",
        "href": "video/movie-0201.html",
        "cover": "51.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖惊悚",
        "oneLine": "一对情侣在德州荒漠抛锚，被好心的修车工救回社区，却发现那里所有居民都没有影子。"
    },
    {
        "title": "美国夜生活",
        "href": "video/movie-0202.html",
        "cover": "52.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "一个社恐程序员搞丢了硅谷大佬的U盘，被迫在洛杉矶最乱的夜店里找回。"
    },
    {
        "title": "我们村里的年轻人（续集）",
        "href": "video/movie-0203.html",
        "cover": "53.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "时隔六十年，老一代的“年轻人”的孙辈们回到家乡，用直播和AI开启了一场全新的乡村改造实验。"
    },
    {
        "title": "萨摩尼之路",
        "href": "video/movie-0204.html",
        "cover": "54.jpg",
        "year": "2025",
        "region": "意大利 / 法国",
        "type": "电影",
        "genre": "剧情 / 冒险 / 历史",
        "oneLine": "一名无神论考古学家在萨摩尼古道发现一卷羊皮纸，上面预言了三天后自己的死亡方式。"
    },
    {
        "title": "奉旨杀人",
        "href": "video/movie-0205.html",
        "cover": "55.jpg",
        "year": "1993",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作， 武侠， 悬疑",
        "oneLine": "锦衣卫高手接密诏灭门，却发现自己要杀的最后一人，竟是失散多年的亲弟弟。"
    },
    {
        "title": "骑弹飞行",
        "href": "video/movie-0206.html",
        "cover": "56.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖， 奇幻， 公路",
        "oneLine": "1969年，一个反战青年搭上了一辆由死人驾驶的顺风车，只有讲出最恐怖的故事才能活到天亮。"
    },
    {
        "title": "我爱驰星周",
        "href": "video/movie-0207.html",
        "cover": "57.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情喜剧",
        "oneLine": "一个脸盲的农村大叔为了向女儿证明自己认识周星驰，踏上了去横店“认亲”的荒诞公路之旅。"
    },
    {
        "title": "梅露丝",
        "href": "video/movie-0208.html",
        "cover": "58.jpg",
        "year": "2025",
        "region": "法国 / 中国大陆",
        "type": "电影",
        "genre": "文艺 / 剧情",
        "oneLine": "一位中国老妇在巴黎的公寓里，将自己幻想成一位名叫梅露丝的法国女招待。"
    },
    {
        "title": "土京盗宝记",
        "href": "video/movie-0209.html",
        "cover": "59.jpg",
        "year": "2024",
        "region": "土耳其 / 法国",
        "type": "电影",
        "genre": "犯罪 / 冒险 / 喜剧",
        "oneLine": "一群乌合之众计划从托普卡帕皇宫盗走一把价值连城的“先知匕首”，却发现早有一伙人捷足先登，而他们偷走的是只有博物馆长才知道的赝品。"
    },
    {
        "title": "一万公里的爱情",
        "href": "video/movie-0210.html",
        "cover": "60.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情、公路",
        "oneLine": "男友被确诊只剩半年寿命，女友决定开车从上海送他到北极圈看一次极光。"
    },
    {
        "title": "复仇者联盟4：终局之战",
        "href": "video/movie-0211.html",
        "cover": "61.jpg",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "oneLine": "灭霸响指后的世界满目疮痍，幸存的复仇者们决定穿越时空，不惜一切代价改写结局。"
    },
    {
        "title": "楢山节考",
        "href": "video/movie-0212.html",
        "cover": "62.jpg",
        "year": "1983",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、历史、民俗",
        "oneLine": "贫穷山村有规矩，老人到了70岁就要由儿子背上楢山等死，今年轮到阿玲了。"
    },
    {
        "title": "屋顶恋歌",
        "href": "video/movie-0213.html",
        "cover": "63.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情, 音乐, 剧情",
        "oneLine": "一个因恐慌症无法下楼的歌手，和一个想要跳楼的失业青年，在天台上合唱了一首活下去的歌。"
    },
    {
        "title": "猫狗大战3：爪爪集结！",
        "href": "video/movie-0214.html",
        "cover": "64.jpg",
        "year": "2028",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 动画 / 家庭 / 动作",
        "oneLine": "当外星仓鼠企图抹去全球人类对猫和狗的“可爱”记忆时，猫狗特工被迫放下恩怨，第三次联手。"
    },
    {
        "title": "以黑死之名",
        "href": "video/movie-0215.html",
        "cover": "65.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电视剧",
        "genre": "历史, 恐怖, 冒险",
        "oneLine": "14世纪黑死病肆虐的英格兰，一个被教会除名的骑士必须护送女巫穿越疫区，以阻止灭世预言。"
    },
    {
        "title": "鬼磨坊",
        "href": "video/movie-0216.html",
        "cover": "66.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻 / 惊悚",
        "oneLine": "破产农夫与磨坊鬼做交易：磨一夜面粉，寿命减一年。"
    },
    {
        "title": "狼嚎",
        "href": "video/movie-0217.html",
        "cover": "67.jpg",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "oneLine": "拥有“金耳朵”的声呐兵在深海中听到一个不该存在的“狼嚎”信号。"
    },
    {
        "title": "巨人兽",
        "href": "video/movie-0218.html",
        "cover": "68.jpg",
        "year": "2026",
        "region": "日本 / 美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 惊悚",
        "oneLine": "福岛核电站泄露十年后，一只以核废料为食的百米巨兽觉醒，它的目标竟是切尔诺贝利。"
    },
    {
        "title": "灰烬与钻石",
        "href": "video/movie-0219.html",
        "cover": "69.jpg",
        "year": "2025",
        "region": "波兰",
        "type": "电影",
        "genre": "战争剧情",
        "oneLine": "华沙起义失败后，一个年轻抵抗军战士被命令暗杀俄军联络官，却发现对方是自己救命恩人。"
    },
    {
        "title": "不割席",
        "href": "video/movie-0220.html",
        "cover": "70.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "家庭, 社会",
        "oneLine": "一个深绿家庭和一个深蓝家庭因为儿女联姻被迫成为亲家，每年年夜饭都是一场“内战”。"
    },
    {
        "title": "海岸共鸣",
        "href": "video/movie-0221.html",
        "cover": "71.jpg",
        "year": "2020",
        "region": "英国",
        "type": "电影",
        "genre": "剧情， 同性， 音乐",
        "oneLine": "1969年，失聪男孩在康沃尔海岸遇见了一个来自伦敦的逃兵，两人用手语和贝壳谱写了一曲无声恋歌。"
    },
    {
        "title": "快递人生",
        "href": "video/movie-0222.html",
        "cover": "72.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 现实",
        "oneLine": "一个订单超时的快递员，在最后40分钟里跑完了自己的一生。"
    },
    {
        "title": "绝命法官国语",
        "href": "video/movie-0223.html",
        "cover": "73.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪, 悬疑, 动作",
        "oneLine": "一位因女儿被害而堕入黑暗的前法官，穿上法袍设下死亡庭审，让逍遥法外的罪犯为自己的罪行“宣判”。"
    },
    {
        "title": "流动的中国",
        "href": "video/movie-0224.html",
        "cover": "74.jpg",
        "year": "2025",
        "region": "中国",
        "type": "纪录片",
        "genre": "纪录片 / 社会 / 人文",
        "oneLine": "镜头跟随四组流动者，记录每年地球上最大规模的人类迁徙。"
    },
    {
        "title": "黎明决斗",
        "href": "video/movie-0225.html",
        "cover": "75.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "两个从小一起长大的杀手，在黎明前的天台被下了同一个暗杀令——目标就是对方。"
    },
    {
        "title": "金钱强强滚",
        "href": "video/movie-0226.html",
        "cover": "76.jpg",
        "year": "2022",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧 / 剧情",
        "oneLine": "一个卖蚵仔煎的家族因一张中奖30亿的彩票全员反目，却发现那张彩票早被野狗吞进了肚子。"
    },
    {
        "title": "丢失的勋章：比利石的冒险",
        "href": "video/movie-0227.html",
        "cover": "77.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作，冒险，奇幻",
        "oneLine": "一块能打开时空裂隙的勋章被盗，实习探险家比利石必须潜入地下古城，抢在反派之前夺回它。"
    },
    {
        "title": "花府小姐要出逃",
        "href": "video/movie-0228.html",
        "cover": "78.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧 / 爱情 / 古装",
        "oneLine": "为逃婚扮成落魄书生，却阴差阳错住进了自己未婚夫家，还成了他的门客。"
    },
    {
        "title": "掘地父子",
        "href": "video/movie-0229.html",
        "cover": "79.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "为了证明已故父亲并非矿难责任人，儿子带着锄头回到塌方的矿洞，一挖就是三年。"
    },
    {
        "title": "总统与奶牛",
        "href": "video/movie-0230.html",
        "cover": "80.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 公路 / 政治讽刺",
        "oneLine": "法国总统为了挽救支持率，决定亲自护送一头获奖奶牛去参加农业展，结果半路迷路误入“黄马甲”大本营。"
    },
    {
        "title": "红色背篓",
        "href": "video/movie-0231.html",
        "cover": "81.jpg",
        "year": "1965",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 历史, 乡村",
        "oneLine": "一个背篓，两代人的山路，他是大别山区最后一名用肩膀背出“供销社”的共产党员。"
    },
    {
        "title": "我们等待自由",
        "href": "video/movie-0232.html",
        "cover": "82.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情， 历史， 音乐",
        "oneLine": "1943年的集中营里，囚犯们用一支口哨声组成的交响乐，为一场大逃亡作掩护。"
    },
    {
        "title": "洪堡亲王",
        "href": "video/movie-0233.html",
        "cover": "83.jpg",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "剧情 / 战争",
        "oneLine": "普鲁士传奇将领在滑铁卢战役后，被遗忘在疯人院里，用余生与脑中千军万马作战。"
    },
    {
        "title": "战神联盟",
        "href": "video/movie-0234.html",
        "cover": "84.jpg",
        "year": "2027",
        "region": "美国",
        "type": "剧集",
        "genre": "动作， 奇幻",
        "oneLine": "六位来自不同神话体系的没落战神被强行组队，必须阻止一场神界阴谋。"
    },
    {
        "title": "惊情谍变",
        "href": "video/movie-0235.html",
        "cover": "85.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "动作谍战",
        "oneLine": "军情六处最优秀的间谍失忆后，发现自己要刺杀的目标居然是曾经的自己。"
    },
    {
        "title": "老妈爱死你",
        "href": "video/movie-0236.html",
        "cover": "86.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 恐怖 / 家庭",
        "oneLine": "一个过度溺爱儿子的单亲妈妈，开始用极其血腥的方式清除儿子身边的“坏人”——从同学、老师到前女友。"
    },
    {
        "title": "龙王子第二季",
        "href": "video/movie-0237.html",
        "cover": "87.jpg",
        "year": "2020",
        "region": "欧美",
        "type": "剧集",
        "genre": "动画, 奇幻, 冒险",
        "oneLine": "龙王子归来，人类与精灵的脆弱和平被一名神秘刺客的暗杀行动彻底撕碎。"
    },
    {
        "title": "无证之罪",
        "href": "video/movie-0238.html",
        "cover": "88.jpg",
        "year": "2017",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "犯罪 / 悬疑",
        "oneLine": "为了找出杀害女儿的凶手，一个父亲制造了完美的“雪人连环杀人案”，逼警方立案。"
    },
    {
        "title": "熊山冒险",
        "href": "video/movie-0239.html",
        "cover": "89.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "家庭 / 冒险",
        "oneLine": "一个叛逆的城市少年被送到护林员父亲身边，却在森林中意外卷入一场阻止盗猎者的生死追踪。"
    },
    {
        "title": "失踪2",
        "href": "video/movie-0240.html",
        "cover": "90.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "oneLine": "五年前妹妹失踪，姐姐刚寻到线索，人贩集团却将下一个目标锁定在了她身上。"
    },
    {
        "title": "威震四方",
        "href": "video/movie-0241.html",
        "cover": "91.jpg",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "动作 / 剧情",
        "oneLine": "为了给妹妹治病，沉默的乡村青年踏入地下泰拳赌场，却发现对手都是被拐卖的少年。"
    },
    {
        "title": "鬼精灵：起源",
        "href": "video/movie-0242.html",
        "cover": "92.jpg",
        "year": "2024",
        "region": "爱尔兰",
        "type": "电影",
        "genre": "恐怖，奇幻，民俗",
        "oneLine": "一个鞋匠为了救女儿，用禁忌工艺将自己变成精灵，代价是再也无法控制杀戮欲望。"
    },
    {
        "title": "丑陋的罗马人",
        "href": "video/movie-0243.html",
        "cover": "93.jpg",
        "year": "2024",
        "region": "意大利",
        "type": "电视剧",
        "genre": "剧情 / 历史",
        "oneLine": "古罗马帝国巅峰时期，一群混迹于下水道、贫民窟和斗兽场后巷的“鼠辈”，用他们的方式撬动着这座永恒之城。"
    },
    {
        "title": "微型底片间谍战",
        "href": "video/movie-0244.html",
        "cover": "94.jpg",
        "year": "1978",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 谍战",
        "oneLine": "一枚藏于邮票下的微型底片，引发国际间谍组织与国安人员的生死博弈。"
    },
    {
        "title": "爱你不爱",
        "href": "video/movie-0245.html",
        "cover": "95.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情， 悬疑",
        "oneLine": "妻子车祸失忆后认定丈夫是坏人，丈夫为自证清白拿出的婚礼录像里，新娘却全程都在对另一个男人使眼色。"
    },
    {
        "title": "完美妻子的完美复仇计划",
        "href": "video/movie-0246.html",
        "cover": "96.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑，惊悚，剧情",
        "oneLine": "发现丈夫出轨后，完美的家庭主妇没有哭闹，而是制定了一个让其净身出户且身败名裂的十年大计。"
    },
    {
        "title": "滇西1944",
        "href": "video/movie-0247.html",
        "cover": "97.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "战争 / 历史",
        "oneLine": "1944年滇西大反攻前夕，一群普通士兵被推入松山绞肉机，他们唯一的信念是活着看到胜利的旗帜。"
    },
    {
        "title": "离婚喜剧",
        "href": "video/movie-0248.html",
        "cover": "98.jpg",
        "year": "2010",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧, 爱情, 家庭",
        "oneLine": "一对夫妻为了争夺抚养权互相陷害，结果在民政局门口撞到头双双失忆，以为对方是完美伴侣。"
    },
    {
        "title": "解除好友2：暗网",
        "href": "video/movie-0249.html",
        "cover": "99.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚 / 犯罪",
        "oneLine": "一个年轻人捡到一台存有暗网入口的笔记本电脑，每当他拒绝“观看”一段杀人直播，他的朋友就会离奇失踪。"
    },
    {
        "title": "出柙猛虎",
        "href": "video/movie-0250.html",
        "cover": "100.jpg",
        "year": "2024",
        "region": "中国",
        "type": "电视剧",
        "genre": "悬疑 / 犯罪",
        "oneLine": "一只被非法走私的孟加拉虎在闹市咬死了地产大亨，警方发现老虎体内藏着一枚U盘。"
    },
    {
        "title": "交响情人梦 巴黎篇",
        "href": "video/movie-0251.html",
        "cover": "101.jpg",
        "year": "2008",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情 / 喜剧 / 音乐",
        "oneLine": "野田妹与千秋王子远赴巴黎留学，爱情与音乐梦想在浪漫之都迎来双重试炼。"
    },
    {
        "title": "巴亚与亚雷",
        "href": "video/movie-0252.html",
        "cover": "102.jpg",
        "year": "2026",
        "region": "土耳其",
        "type": "剧集",
        "genre": "剧情奇幻",
        "oneLine": "一对被古神选中的兄妹，必须集齐十二枚被遗忘的铜币，才能阻止世界坠入永恒黑夜。"
    },
    {
        "title": "军统枪口下的女人",
        "href": "video/movie-0253.html",
        "cover": "103.jpg",
        "year": "2011",
        "region": "中国大陆",
        "type": "TV 剧集",
        "genre": "谍战, 悬疑, 动作",
        "oneLine": "新婚夜全家惨遭军统灭门，新娘子化身神秘杀手，五年后竟潜伏进仇人内部做女秘书。"
    },
    {
        "title": "3904英呎",
        "href": "video/movie-0254.html",
        "cover": "104.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作灾难",
        "oneLine": "一架飞往济州岛的客机在3904英尺高度被恐怖分子劫持，前战斗机飞行员机长只剩40分钟燃油。"
    },
    {
        "title": "逍遥青春",
        "href": "video/movie-0255.html",
        "cover": "105.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 青春 / 文艺",
        "oneLine": "1997 年，三个小镇少年凑钱买了一盘盗版《阿甘正传》VCD，却从中看到了通往远方唯一的路。"
    },
    {
        "title": "魇曲",
        "href": "video/movie-0256.html",
        "cover": "106.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖, 悬疑",
        "oneLine": "一家音乐学院的女生学会了弹奏一首禁曲，第二天她的室友就会死，而凶手的指甲缝里总嵌着琴弦。"
    },
    {
        "title": "人生最后一站",
        "href": "video/movie-0257.html",
        "cover": "107.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "一个临终关怀护士带着脾气暴躁的晚期父亲，在全日本的火车站收集最后一次“进站广播”。"
    },
    {
        "title": "纳尼亚传奇：凯斯宾王子",
        "href": "video/movie-0258.html",
        "cover": "108.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 冒险",
        "oneLine": "时隔千年，四兄妹重返纳尼亚，却发现这里已被残暴的米拉兹国王统治，而年轻的凯斯宾王子正等待他们点燃反攻的号角。"
    },
    {
        "title": "英雄联盟",
        "href": "video/movie-0259.html",
        "cover": "109.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 科幻, 超级英雄",
        "oneLine": "七个拥有超能力的边缘人被一个神秘组织招募，组成“英雄联盟”，却发现他们的超能力来自同一次屠杀。"
    },
    {
        "title": "捕风汉子",
        "href": "video/movie-0260.html",
        "cover": "110.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 警匪",
        "oneLine": "侠盗“捕风”专偷黑钱，这次他要在十级台风中，从顶楼金库盗走赃款。"
    },
    {
        "title": "开启玉盒时",
        "href": "video/movie-0261.html",
        "cover": "111.jpg",
        "year": "2030",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 惊悚, 奇幻",
        "oneLine": "考古队员打开千年玉盒，盒中只是一面铜镜，但当晚全队开始不断在镜中看到自己死去的样子。"
    },
    {
        "title": "阎魔堂沙罗的推理奇谈",
        "href": "video/movie-0262.html",
        "cover": "112.jpg",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻、推理",
        "oneLine": "沙罗给了她三次推理机会，全错就下地狱，但女高中生的每次推理都让沙罗脸色越来越难看。"
    },
    {
        "title": "月光男孩",
        "href": "video/movie-0263.html",
        "cover": "113.jpg",
        "year": "2024",
        "region": "中国/台湾",
        "type": "电影",
        "genre": "家庭剧情",
        "oneLine": "一个患有自闭症、被称为“星星的孩子”的少年，在年迈外婆和一只流浪狗的陪伴下，奇迹般地在游泳中找到了与这个世界对话的方式。"
    },
    {
        "title": "大神猴",
        "href": "video/movie-0264.html",
        "cover": "114.jpg",
        "year": "2024",
        "region": "中国",
        "type": "网络电影",
        "genre": "奇幻 / 动作 / 喜剧",
        "oneLine": "被贬下凡的孙悟空失去所有法力，变成一个外卖员，需要攒够10万功德才能归位。"
    },
    {
        "title": "婚礼季",
        "href": "video/movie-0265.html",
        "cover": "115.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "爱情 / 喜剧",
        "oneLine": "一个恐婚的伴郎专业户，和一个想用婚礼气死前男友的伴娘，决定组成“婚礼搭子”。"
    },
    {
        "title": "非人哉",
        "href": "video/movie-0266.html",
        "cover": "116.jpg",
        "year": "2024",
        "region": "中国内地",
        "type": "动画剧集",
        "genre": "喜剧 / 奇幻 / 日常",
        "oneLine": "哪吒、杨戬、九月等神仙妖怪全部变成社畜，在现代职场里疯狂翻车。"
    },
    {
        "title": "青樱 防卫大学校物语",
        "href": "video/movie-0267.html",
        "cover": "117.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "励志, 军事, 剧情",
        "oneLine": "日本最严苛的防卫大学校首次招收女学员，体能垫底的少女青樱要证明“弱者也能守护”。"
    },
    {
        "title": "料理情人梦",
        "href": "video/movie-0268.html",
        "cover": "118.jpg",
        "year": "2011",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "爱情 / 喜剧",
        "oneLine": "毒舌天才厨师车祸失忆，味觉归零，只剩一个自称是他前女友的女孩愿意教他煮水煮蛋。"
    },
    {
        "title": "原子怪兽",
        "href": "video/movie-0269.html",
        "cover": "119.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻、灾难",
        "oneLine": "核废料泄漏催生出一只能吞噬一切辐射的巨兽，它不袭击城市，而是直奔全球所有核电站。"
    },
    {
        "title": "不赞成不反对",
        "href": "video/movie-0270.html",
        "cover": "120.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧",
        "oneLine": "一场全员“摸鱼”的公司裁员大会，没人想当坏人。"
    },
    {
        "title": "罗克恩",
        "href": "video/movie-0271.html",
        "cover": "121.jpg",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "史诗，奇幻，动作",
        "oneLine": "为了拯救被冰封的太阳，一个凡人铁匠必须驯服传说中的岩石巨兽罗克恩。"
    },
    {
        "title": "奉旨杀人",
        "href": "video/movie-0272.html",
        "cover": "122.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 悬疑, 动作",
        "oneLine": "锦衣卫千户接到密令：杀掉四个官员。每杀一个，他才知道下一个是谁，和为什么杀。"
    },
    {
        "title": "虚线的恶意",
        "href": "video/movie-0273.html",
        "cover": "123.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑 / 心理 / 职场",
        "oneLine": "出版社编辑收到一份匿名稿件，全篇只有一条虚线，但她每删除一个字，现实中就有一人死去。"
    },
    {
        "title": "欧内斯特上学",
        "href": "video/movie-0274.html",
        "cover": "124.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 校园",
        "oneLine": "65岁的欧内斯特决定去高中补完当年没拿到的毕业证。"
    },
    {
        "title": "愉悦的知识",
        "href": "video/movie-0275.html",
        "cover": "125.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情喜剧",
        "oneLine": "剑桥博士到问题高中当代课老师，他用一部黄书教懂了学生什么是文学，却被告上了法庭。"
    },
    {
        "title": "美国豚鼠2：血腥冲击",
        "href": "video/movie-0276.html",
        "cover": "126.jpg",
        "year": "2015",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 虐杀",
        "oneLine": "一个地下视频小组潜入神秘庄园，亲历了一场将人体与工业机械粗暴结合的狂欢地狱。"
    },
    {
        "title": "雍正王朝",
        "href": "video/movie-0277.html",
        "cover": "127.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史， 剧情",
        "oneLine": "康熙末年，九龙夺嫡，一向低调的雍正帝如何以铁腕手段登基并推行新政？"
    },
    {
        "title": "妻子的浪漫旅行3 秘密版",
        "href": "video/movie-0278.html",
        "cover": "128.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀，悬疑，情感",
        "oneLine": "当妻子们以为在浪漫旅行时，丈夫们正通过隐藏摄像头，观看一场被导演组精心设计的“婚姻人性测试”。"
    },
    {
        "title": "春天交响曲",
        "href": "video/movie-0279.html",
        "cover": "129.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 音乐",
        "oneLine": "失意钢琴家回到乡下老家，在整理遗物时发现母亲留下的神秘乐谱，意外揭开一个家族的春天秘密。"
    },
    {
        "title": "威胁信",
        "href": "video/movie-0280.html",
        "cover": "130.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "一位小学老师收到一封匿名信，里面只有一句话：“15年前你做过的事，会让你失去一切。”"
    },
    {
        "title": "小山有大腿",
        "href": "video/movie-0281.html",
        "cover": "131.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "黑色喜剧",
        "oneLine": "一座留守老人为主的小山村，突然被一群腿模网红入侵，老人们决定用自己的土办法“整治”她们，却意外致富。"
    },
    {
        "title": "逃出生天",
        "href": "video/movie-0282.html",
        "cover": "132.jpg",
        "year": "2024",
        "region": "中国大陆, 中国香港",
        "type": "电影",
        "genre": "动作, 灾难",
        "oneLine": "一栋豆腐渣大楼瞬间拦腰折断，互为仇敌的工程师亲兄弟被困在颠倒的楼体中，必须合作逃生。"
    },
    {
        "title": "八月月亮的五个娃娃",
        "href": "video/movie-0283.html",
        "cover": "133.jpg",
        "year": "1970",
        "region": "意大利",
        "type": "电影",
        "genre": "恐怖, 悬疑",
        "oneLine": "一位美国记者来到意大利古村调查儿童失踪案，发现村里每个月圆之夜，都有一个“娃娃”会变成真人。"
    },
    {
        "title": "双峰：遗失的碎片",
        "href": "video/movie-0284.html",
        "cover": "134.jpg",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 悬疑, 惊悚",
        "oneLine": "从超过90小时的《双峰》删减素材中打捞出的碎片，拼凑出通往黑屋的更多秘密。"
    },
    {
        "title": "惊天动地2010",
        "href": "video/movie-0285.html",
        "cover": "135.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "灾难，动作",
        "oneLine": "一场突如其来的里氏8.0级大地震撕裂了西南城市，一对关系破裂的消防员父子在废墟下奇迹般地重逢。"
    },
    {
        "title": "农林",
        "href": "video/movie-0286.html",
        "cover": "136.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧 / 青春 / 剧情",
        "oneLine": "东京来的偶像少女因丑闻隐退，转学到了全是奇葩农学生的县立田茂农林高中，从此鸡飞狗跳。"
    },
    {
        "title": "警察“夏一笑”的快乐生活",
        "href": "video/movie-0287.html",
        "cover": "137.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 生活, 情景剧",
        "oneLine": "新手片警夏一笑被分到老城区，各种鸡飞狗跳的邻里纠纷让他哭笑不得。"
    },
    {
        "title": "凶案深处",
        "href": "video/movie-0288.html",
        "cover": "138.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑, 犯罪, 刑侦",
        "oneLine": "每集开头就告诉你凶手是谁，看警察如何从完美犯罪中找到那1%的失误。"
    },
    {
        "title": "亲密的外人",
        "href": "video/movie-0289.html",
        "cover": "139.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "一对夫妇收养了去世好友的遗孤，十年后发现孩子体内流着丈夫的血，一场家庭风暴就此引爆。"
    },
    {
        "title": "海军少爷兵",
        "href": "video/movie-0290.html",
        "cover": "140.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "oneLine": "骄纵富二代被父亲扔进海军新兵连，却发现全排都是等着“修理”他的老战友。"
    },
    {
        "title": "罗勃先生",
        "href": "video/movie-0291.html",
        "cover": "141.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑、犯罪、惊悚",
        "oneLine": "一个被称为“罗勃先生”的神秘AI，能帮你完成任何复仇，但你必须先回答它一个问题：“你愿意为此付出什么？”"
    },
    {
        "title": "一代拳王",
        "href": "video/movie-0292.html",
        "cover": "142.jpg",
        "year": "2024",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "genre": "动作/传记",
        "oneLine": "民国时期，一位从未输过的中国拳师，为尊严登上国际擂台，却发现规则完全不同。"
    },
    {
        "title": "誓不低头",
        "href": "video/movie-0293.html",
        "cover": "143.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 律政",
        "oneLine": "一个坐了二十年冤狱的前黑帮律师出狱后，决定用自己的方式让所有人低头。"
    },
    {
        "title": "超级计划",
        "href": "video/movie-0294.html",
        "cover": "144.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，科幻，犯罪",
        "oneLine": "香港警察启动秘密“超级计划”，将重伤警员改造成半人半机械的执法兵器。"
    },
    {
        "title": "噬血狂袭第一季",
        "href": "video/movie-0295.html",
        "cover": "145.jpg",
        "year": "2013",
        "region": "日本",
        "type": "TV动画",
        "genre": "奇幻、动作、战斗",
        "oneLine": "最强大的吸血鬼“第四真祖”在人工岛上苏醒，却不得不与监视他的女剑士共享命运。"
    },
    {
        "title": "此心安处是吾乡",
        "href": "video/movie-0296.html",
        "cover": "146.jpg",
        "year": "2020",
        "region": "中国",
        "type": "电视剧",
        "genre": "剧情 / 家庭 / 都市",
        "oneLine": "一群北京老胡同里的邻居，在城市改造的最后一年里，上演了一出关于“根”的悲喜剧。"
    },
    {
        "title": "与神同行的少年",
        "href": "video/movie-0297.html",
        "cover": "147.jpg",
        "year": "2022",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 冒险 / 奇幻",
        "oneLine": "叛逆少年被送入修道院改造，却意外发现自己是被选中的“神之信使”。"
    },
    {
        "title": "苍蝇",
        "href": "video/movie-0298.html",
        "cover": "148.jpg",
        "year": "2022",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "惊悚, 心理",
        "oneLine": "一个洁癖患者家里飞进一只苍蝇，他开始疯狂追杀，却发现苍蝇是死去的妻子变的。"
    },
    {
        "title": "女人二度出生",
        "href": "video/movie-0299.html",
        "cover": "149.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情 / 家庭 / 女性",
        "oneLine": "50岁家庭主妇失忆后以为自己25岁，用年轻心态重活一次，打脸曾经瞧不起她的所有人。"
    },
    {
        "title": "成人期",
        "href": "video/movie-0300.html",
        "cover": "150.jpg",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 家庭",
        "oneLine": "一个27岁还靠父亲接济的“巨婴”被迫接管家族濒临倒闭的殡仪馆，开始学习做大人。"
    },
    {
        "title": "真爱同心",
        "href": "video/movie-0301.html",
        "cover": "1.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情，喜剧，家庭",
        "oneLine": "一对互相仇恨的前任，被迫联手拆散各自新欢的“完美婚礼”，却在捣乱过程中重新相爱。"
    },
    {
        "title": "40万分之1",
        "href": "video/movie-0302.html",
        "cover": "2.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 科幻",
        "oneLine": "一次DNA亲子鉴定中发现，全日本只有一个人的基因与孩子匹配，而那个人不是父母。"
    },
    {
        "title": "神枪杀手",
        "href": "video/movie-0303.html",
        "cover": "3.jpg",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "动作、犯罪、惊悚",
        "oneLine": "一名隐退的顶级狙击手被暗网悬赏，却发现买凶杀自己的人正是七年前的搭档。"
    },
    {
        "title": "痴情冤狱",
        "href": "video/movie-0304.html",
        "cover": "4.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 爱情 / 悬疑",
        "oneLine": "为了替初恋顶罪入狱十五年，出狱后他发现真凶竟是当年帮他写情书的好兄弟。"
    },
    {
        "title": "大寒（电影）",
        "href": "video/movie-0305.html",
        "cover": "5.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 历史 / 家庭",
        "oneLine": "冬至出生的女孩，在整理外婆遗物时，发现了埋藏半个世纪的“大寒”秘密。"
    },
    {
        "title": "旅路",
        "href": "video/movie-0306.html",
        "cover": "6.jpg",
        "year": "2012",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 公路",
        "oneLine": "癌症晚期的父亲与憎恨他三十年的儿子，开着破货车跨越日本，完成一场“死前决裂”。"
    },
    {
        "title": "桃色骗局",
        "href": "video/movie-0307.html",
        "cover": "7.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪, 剧情, 爱情",
        "oneLine": "专骗富二代感情的女骗子，在一个目标身上栽了跟头，因为她发现对方是比自己更狠的杀猪盘操盘手。"
    },
    {
        "title": "南方公园：流量大战2",
        "href": "video/movie-0308.html",
        "cover": "8.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影 / 特别篇",
        "genre": "喜剧, 动画, 讽刺",
        "oneLine": "为了争夺全美第一网红的宝座，卡特曼和来自东方的神秘AI主播展开了一场无底线的流量对决。"
    },
    {
        "title": "遗弃",
        "href": "video/movie-0309.html",
        "cover": "9.jpg",
        "year": "2025",
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情 / 心理 / 悬疑",
        "oneLine": "三十年前被遗弃在修道院门口的孤儿，如今回来寻找母亲，却发现整个小镇都知道一个秘密，但没有人愿意说出来。"
    },
    {
        "title": "雪球快车",
        "href": "video/movie-0310.html",
        "cover": "10.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 灾难",
        "oneLine": "开往雪国的最后一班列车上，一群陌生人接到了世界即将毁灭的通知。"
    },
    {
        "title": "园丁剧版",
        "href": "video/movie-0311.html",
        "cover": "11.jpg",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑 / 犯罪",
        "oneLine": "一座贵族庄园里，沉默寡言的老园丁知道所有秘密，包括那桩30年前的悬案。"
    },
    {
        "title": "异形杀机",
        "href": "video/movie-0312.html",
        "cover": "12.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 惊悚",
        "oneLine": "深空探测船“奥德修斯号”返航后，船员接连行为失常，心理医生发现他们或许已经被替换。"
    },
    {
        "title": "勾魂游戏",
        "href": "video/movie-0313.html",
        "cover": "13.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 心理",
        "oneLine": "七个人参加了一档“如果能活到最后就获得10亿日元”的直播游戏，然后他们发现——观众可以付费投票决定让谁立刻死亡。"
    },
    {
        "title": "浴血亲情",
        "href": "video/movie-0314.html",
        "cover": "14.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪/动作",
        "oneLine": "亲兄弟分别成为缉毒警和毒枭手下，最后枪口相向时才发现彼此都是为了救妹妹。"
    },
    {
        "title": "杀死信使",
        "href": "video/movie-0315.html",
        "cover": "15.jpg",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 传记",
        "oneLine": "一名记者揭露了CIA资助尼加拉瓜反政府军的惊天丑闻，却发现自己和家人都成了被猎杀的目标。"
    },
    {
        "title": "黑湖妖潭",
        "href": "video/movie-0316.html",
        "cover": "16.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 科幻",
        "oneLine": "一个潜水团队在南美雨林的黑湖底部发现了一个文明遗迹，同时也唤醒了守护它的致命生物。"
    },
    {
        "title": "总统之死",
        "href": "video/movie-0317.html",
        "cover": "17.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "剧集",
        "genre": "政治惊悚, 剧情",
        "oneLine": "总统在光化门演讲中遇刺身亡，但情报局发现：三个月前，真总统已经在私人山庄“被死亡”了。"
    },
    {
        "title": "死亡约定",
        "href": "video/movie-0318.html",
        "cover": "18.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚, 犯罪, 奇幻",
        "oneLine": "能与死者对话的女警探发现，她追查的连环杀手正是十年前与自己立下“死亡约定”的已故男友。"
    },
    {
        "title": "星尘",
        "href": "video/movie-0319.html",
        "cover": "19.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻，冒险",
        "oneLine": "为了拯救因“星尘病”而沉睡的女儿，一个农民驾驶老旧飞船，闯入宇宙禁区采集解药。"
    },
    {
        "title": "无爱可诉",
        "href": "video/movie-0320.html",
        "cover": "20.jpg",
        "year": "2017",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "一对正在办理离婚的夫妻，在激烈的财产争夺中才发现，12岁的儿子已经失踪了整整三天。"
    },
    {
        "title": "逃出安乐窝",
        "href": "video/movie-0321.html",
        "cover": "21.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚，悬疑",
        "oneLine": "退休警官住进顶级养老社区，发现这里的老人“非正常死亡”率高达百分之三十。"
    },
    {
        "title": "民国密档之死亡守则",
        "href": "video/movie-0322.html",
        "cover": "22.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑，惊悚，年代",
        "oneLine": "十人受邀进入神秘公馆，每人拿到一条“守则”，违反即死。"
    },
    {
        "title": "亲爱的客栈第一季",
        "href": "video/movie-0323.html",
        "cover": "23.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 家庭",
        "oneLine": "破产高管回到故乡接手濒临倒闭的客栈，却发现房客全是来讨债的童年发小。"
    },
    {
        "title": "封面有男天",
        "href": "video/movie-0324.html",
        "cover": "24.jpg",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 同性 / 青春",
        "oneLine": "高中校刊社男生为拍封面意外发现镜头里的他，竟是自己最不敢靠近的那个人。"
    },
    {
        "title": "黑衣天使",
        "href": "video/movie-0325.html",
        "cover": "25.jpg",
        "year": "2025",
        "region": "法国 / 比利时",
        "type": "剧集",
        "genre": "惊悚 / 悬疑 / 超自然",
        "oneLine": "修道院里的修女可以预知死亡，被她“看见”的人会在七天内死去，直到有一天，她照镜子时看到了自己的脸。"
    },
    {
        "title": "异兽2019",
        "href": "video/movie-0326.html",
        "cover": "26.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 惊悚 / 冒险",
        "oneLine": "一支科考队潜入全球最深洞穴，唤醒了一种能完美模仿人类声音的远古异兽。"
    },
    {
        "title": "自行车与旧电钢",
        "href": "video/movie-0327.html",
        "cover": "27.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "90年代末，小镇青年小张用一辆破自行车驮着一台旧电子琴，走遍十里八乡为红白喜事伴奏，梦想登上省城大舞台。"
    },
    {
        "title": "美国恐怖故事集第一季",
        "href": "video/movie-0328.html",
        "cover": "28.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集 (10集)",
        "genre": "恐怖 / 惊悚",
        "oneLine": "十个发生在同一栋公寓楼里的恐怖故事，每个房号对应一种恐惧：孤独、衰老、出轨、失业、逼婚……"
    },
    {
        "title": "甜安娜",
        "href": "video/movie-0329.html",
        "cover": "29.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "患有情感障碍的少女甜安娜，用外婆留下的神秘食谱，试图修复破碎的家庭关系。"
    },
    {
        "title": "野花",
        "href": "video/movie-0330.html",
        "cover": "30.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "oneLine": "80年代，三个农村少女在田野里埋下一个秘密；30年后，一具白骨被挖出，她们被迫重新面对那段被“成人”掩盖的黑暗。"
    },
    {
        "title": "旋律时光",
        "href": "video/movie-0331.html",
        "cover": "31.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "音乐，剧情",
        "oneLine": "一群被主流音乐节抛弃的老年爵士乐手，联合叛逆的电音少女，在养老院天台办了一场石破天惊的演出。"
    },
    {
        "title": "告诉我，我是谁",
        "href": "video/movie-0332.html",
        "cover": "32.jpg",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑, 惊悚, 剧情",
        "oneLine": "一个完全失忆的男人被自称“姐姐”的女人接回家，三年后他收到一封匿名信，上面只有一行字：“她不是你姐姐，快跑。”"
    },
    {
        "title": "飞虎雄心",
        "href": "video/movie-0333.html",
        "cover": "33.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 警匪",
        "oneLine": "飞虎队菜鸟发现自己的教官，竟是二十年前因“懦夫”罪名被开除的父亲。"
    },
    {
        "title": "美国独立日（1983年）",
        "href": "video/movie-0334.html",
        "cover": "34.jpg",
        "year": "1983",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，喜剧",
        "oneLine": "1983年美国独立日这天，一个小镇上形形色色的居民都在为庆典做准备，欢笑与烦恼交织成一首生活交响曲。"
    },
    {
        "title": "圣洁的艾曼妞",
        "href": "video/movie-0335.html",
        "cover": "35.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情，情色，心理",
        "oneLine": "一名修女被派往荒僻修道院整理禁书，却在书中发现了自己前世作为交际花艾曼妞的记忆。"
    },
    {
        "title": "给女人的爱",
        "href": "video/movie-0336.html",
        "cover": "36.jpg",
        "year": "2026",
        "region": "印度",
        "type": "剧集",
        "genre": "剧情 / 女性 / 社会",
        "oneLine": "一张在婚宴上被匿名发出的“半张笑脸”照片，串联起五个不同年龄段印度女性隐秘的伤痛与反抗。"
    },
    {
        "title": "鲨卷风6：最后的鲨卷风",
        "href": "video/movie-0337.html",
        "cover": "37.jpg",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 科幻 / 惊悚",
        "oneLine": "鲨卷风宇宙面临重启，主角芬不得不穿越回第一次鲨卷风爆发的那天，杀掉自己来终止循环。"
    },
    {
        "title": "苍穹浩瀚第四季",
        "href": "video/movie-0338.html",
        "cover": "38.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻, 悬疑",
        "oneLine": "星环开启后，一艘探索船在未知星系发现了一个能改写物理法则的“虚空之眼”。"
    },
    {
        "title": "9号秘事第九季",
        "href": "video/movie-0339.html",
        "cover": "39.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情 / 悬疑 / 惊悚 / 喜剧",
        "oneLine": "第九季回归，九个全新的9号空间，从无人直播间的谋杀到AI伴侣的背叛，每一集都让你猜不到结局。"
    },
    {
        "title": "吸血幽灵",
        "href": "video/movie-0340.html",
        "cover": "40.jpg",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "恐怖， 历史， 悬疑",
        "oneLine": "19世纪西班牙村庄接连有人离奇失血而死，一名不信鬼神的医生前来调查却发现诅咒真实存在。"
    },
    {
        "title": "屠夫渡口",
        "href": "video/movie-0341.html",
        "cover": "41.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情， 惊悚， 西部",
        "oneLine": "1870年代，一个哈佛辍学生跟随一名狂热猎人进入科罗拉多腹地猎取野牛，却迎来了一个让所有人陷入疯狂的残酷冬天。"
    },
    {
        "title": "观世音传奇",
        "href": "video/movie-0342.html",
        "cover": "42.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装神话，奇幻",
        "oneLine": "凡间织女意外获得观音一滴泪，被迫在渡人与自救间做出惊天抉择。"
    },
    {
        "title": "山有木兮木有心",
        "href": "video/movie-0343.html",
        "cover": "43.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装/悬疑/爱情",
        "oneLine": "她嫁给木雕大师，却发现家中每个木雕都像他的前妻。"
    },
    {
        "title": "朝花夕拾",
        "href": "video/movie-0344.html",
        "cover": "44.jpg",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "剧情 / 家庭 / 年代",
        "oneLine": "患有阿尔茨海默症的母亲只记得五十年前下乡插队的事，儿子决定带她重走当年路。"
    },
    {
        "title": "醉后大学生",
        "href": "video/movie-0345.html",
        "cover": "45.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 青春",
        "oneLine": "毕业前夜，四个大学生喝醉后许愿“永远不毕业”，醒来发现自己被困在毕业典礼的前一天无限循环。"
    },
    {
        "title": "同途她是他",
        "href": "video/movie-0346.html",
        "cover": "46.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情，同性",
        "oneLine": "每晚凌晨，她都会坐进他的出租车，直到有一天，他卸掉妆容，对她说：“我是女人。”"
    },
    {
        "title": "义胆红唇",
        "href": "video/movie-0347.html",
        "cover": "47.jpg",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "警察与黑帮大哥本是死敌，却因共同仇人联手，在一场婚礼上用口红和高脚杯大开杀戒。"
    },
    {
        "title": "夏威夷风云",
        "href": "video/movie-0348.html",
        "cover": "48.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电视剧",
        "genre": "罪案悬疑",
        "oneLine": "夏威夷本土女警探与刚调来的FBI白男组成搭档，共同调查发生在珍珠港遗址的连环杀人案。"
    },
    {
        "title": "变形记",
        "href": "video/movie-0349.html",
        "cover": "49.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 科幻 / 惊悚",
        "oneLine": "社畜程序员某天早晨醒来，发现自己变成了办公室里的一个格子间工位，动弹不得。"
    },
    {
        "title": "怪ㄎㄚ情缘",
        "href": "video/movie-0350.html",
        "cover": "50.jpg",
        "year": "2024",
        "region": "台湾",
        "type": "剧集",
        "genre": "爱情，喜剧",
        "oneLine": "一个收集“怪癖”为乐的神秘女孩，与一个处处伪装成“正常人”的卧底记者，展开了一场谁先露馅谁就输的致命恋情。"
    },
    {
        "title": "地球边缘",
        "href": "video/movie-0351.html",
        "cover": "51.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 冒险 / 悬疑",
        "oneLine": "坚信地球是平的一群人众筹发射火箭，当他们飞过“南极冰墙”，看到了不该存在的东西。"
    },
    {
        "title": "岁寒又春风",
        "href": "video/movie-0352.html",
        "cover": "52.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情, 年代, 家庭",
        "oneLine": "八十岁的老太太突然宣布要离婚，揭开了跨越五十年的三个家庭的秘密。"
    },
    {
        "title": "我们都是宇宙人",
        "href": "video/movie-0353.html",
        "cover": "53.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/喜剧",
        "oneLine": "三个坚信地球是宇宙中心的精神病人逃出医院，开着破车寻找“藏在玉米地里的宇宙遥控器”。"
    },
    {
        "title": "如果墙会说话2",
        "href": "video/movie-0354.html",
        "cover": "54.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 爱情 / 奇幻",
        "oneLine": "同一栋湾仔旧楼的三间房，在三个不同年代见证了三位女性如何面对“意外怀孕”。"
    },
    {
        "title": "狩猎者",
        "href": "video/movie-0355.html",
        "cover": "55.jpg",
        "year": "2025",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "oneLine": "在人类被AI击败的废土世界，最后一个靠发布狩猎视频为生的网红猎人，发现自己成了终极猎物。"
    },
    {
        "title": "惧裂",
        "href": "video/movie-0356.html",
        "cover": "56.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚、悬疑、心理",
        "oneLine": "一名心理医生试图治疗一个自称有“十二重人格”的患者，却发现这十二个人格可能分别对应十二个真实失踪案。"
    },
    {
        "title": "昆西四季",
        "href": "video/movie-0357.html",
        "cover": "57.jpg",
        "year": "2023",
        "region": "英国",
        "type": "纪录片",
        "genre": "纪录片 / 传记 / 音乐",
        "oneLine": "传奇音乐制作人在他的私人庄园“昆西”里，与四季变换、动植物和老磁带机度过了最后的创作时光。"
    },
    {
        "title": "天使与怨灵",
        "href": "video/movie-0358.html",
        "cover": "58.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 奇幻",
        "oneLine": "能看到怨灵的少女，某天突然也被怨灵看到了——而对方哭着求她帮自己完成遗愿。"
    },
    {
        "title": "熟年",
        "href": "video/movie-0359.html",
        "cover": "59.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "家庭，剧情，伦理",
        "oneLine": "丈夫退休那天提出了离婚，50岁的主妇开始了长达20年的“报复性”创业。"
    },
    {
        "title": "赛门花园",
        "href": "video/movie-0360.html",
        "cover": "60.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情, 悬疑",
        "oneLine": "一对搬进花园别墅的夫妻，发现邻居家的玫瑰园里埋着小镇选举的秘密。"
    },
    {
        "title": "十二怒汉",
        "href": "video/movie-0361.html",
        "cover": "61.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情， 惊悚， 法律",
        "oneLine": "十二名陪审员裁定一名少年谋杀罪成，但第 8 号陪审员发现案情监控被 AI 篡改过。"
    },
    {
        "title": "暗芝居第十一季",
        "href": "video/movie-0362.html",
        "cover": "62.jpg",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "恐怖 / 动画 / 怪谈",
        "oneLine": "这季的故事从一张无人认领的旧DVD开始，看过的人都开始梦见同一扇门。"
    },
    {
        "title": "胖嫂回娘家",
        "href": "video/movie-0363.html",
        "cover": "63.jpg",
        "year": "2024",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧 / 公路",
        "oneLine": "胖嫂骑着小电驴回三百公里外的娘家，一路上修车、迷路、搭讪，却重新认识了母亲。"
    },
    {
        "title": "红河谷",
        "href": "video/movie-0364.html",
        "cover": "64.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "西部 / 冒险 / 剧情",
        "oneLine": "为了完成父亲的遗愿，都市白领独自驾车进入红河谷无人区，却发现父亲的名字刻在谷底一块古碑上。"
    },
    {
        "title": "乐团年代",
        "href": "video/movie-0365.html",
        "cover": "65.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 音乐",
        "oneLine": "一群下岗工人组建业余管乐团，在钢铁挽歌中吹响属于他们的黄金年代。"
    },
    {
        "title": "米奇之反派群星会",
        "href": "video/movie-0366.html",
        "cover": "66.jpg",
        "year": "2025",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧， 奇幻， 歌舞",
        "oneLine": "米奇的死对头皮特召集了迪士尼所有经典反派，打算用黑魔法重写童话世界。"
    },
    {
        "title": "朗·霍伯的灾难",
        "href": "video/movie-0367.html",
        "cover": "67.jpg",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧 / 灾难",
        "oneLine": "倒霉蛋朗·霍伯只是想修好自家的水管，却意外引发了一场席卷整个城市的生化灾难。"
    },
    {
        "title": "残香无痕",
        "href": "video/movie-0368.html",
        "cover": "68.jpg",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑爱情",
        "oneLine": "天才女调香师以失踪女性最后的“气息”为原料，调制出绝世香水，却也引来了警方的追查。"
    },
    {
        "title": "唔够运",
        "href": "video/movie-0369.html",
        "cover": "69.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "黑色幽默, 剧情",
        "oneLine": "一个买六合彩从不中的倒霉蛋，偏偏在确诊绝症那天中了头奖。"
    },
    {
        "title": "茶啊二中大电影",
        "href": "video/movie-0370.html",
        "cover": "70.jpg",
        "year": "2023",
        "region": "中国",
        "type": "电影",
        "genre": "喜剧 / 动画 / 校园",
        "oneLine": "茶啊二中初二某班最皮的男生和最凶的女班主任灵魂互换，两人只能用对方的身体上公开课。"
    },
    {
        "title": "空心佬倌",
        "href": "video/movie-0371.html",
        "cover": "71.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 黑色幽默",
        "oneLine": "一个破产的骗子假扮道士替人办丧事，结果遇到了一群比他更离谱的家属。"
    },
    {
        "title": "飞女正传",
        "href": "video/movie-0372.html",
        "cover": "72.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪, 爱情",
        "oneLine": "六十年代的九龙城寨，一个大家闺秀为了寻找失踪的妹妹，被迫成为江湖上最狠的女飞女。"
    },
    {
        "title": "无敌少侠第一季",
        "href": "video/movie-0373.html",
        "cover": "73.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "动画 / 动作 / 科幻 / 冒险",
        "oneLine": "少年继承父亲的超能力成为超级英雄，却震惊地发现父亲是宇宙中最残忍的征服者。"
    },
    {
        "title": "龙凤店粤语",
        "href": "video/movie-0374.html",
        "cover": "74.jpg",
        "year": "2010",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 古装 / 爱情",
        "oneLine": "正德皇帝厌倦宫廷生活，微服私访逃到市井“龙凤店”，却被野蛮老板娘当作骗子抓去当洗碗工。"
    },
    {
        "title": "平安夜，杀人夜4",
        "href": "video/movie-0375.html",
        "cover": "75.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "圣诞老人装扮的杀手沉寂十年后再度归来，这次他要惩罚的不是坏孩子，而是整个小镇的虚伪。"
    },
    {
        "title": "欲‧爱弥彰",
        "href": "video/movie-0376.html",
        "cover": "76.jpg",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情、悬疑",
        "oneLine": "一场精心策划的“意外”出轨，却让三个各怀心事的人，看到了爱情最赤裸的真相。"
    },
    {
        "title": "神奇的水晶石",
        "href": "video/movie-0377.html",
        "cover": "77.jpg",
        "year": "2025",
        "region": "巴西",
        "type": "电视剧",
        "genre": "奇幻冒险",
        "oneLine": "一个沉迷TikTok的都市少女，在亚马逊部落发现了一块能把塑料垃圾变回植物的水晶石，矿业公司正在追捕她。"
    },
    {
        "title": "野猪林",
        "href": "video/movie-0378.html",
        "cover": "78.jpg",
        "year": "2026",
        "region": "中国内地",
        "type": "电影",
        "genre": "古装动作",
        "oneLine": "林冲在发配途中被陷害至野猪林，赤手空拳与一群赏金猎人在原始森林里展开绝命逃亡。"
    },
    {
        "title": "罪恶黑名单第六季",
        "href": "video/movie-0379.html",
        "cover": "79.jpg",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 犯罪 / 悬疑",
        "oneLine": "红魔在狱中接连收到六张黑名单碎片，却发现每张都指向他最信任的内部叛徒。"
    },
    {
        "title": "医生故事",
        "href": "video/movie-0380.html",
        "cover": "80.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 医学",
        "oneLine": "一位急诊科医生因误诊导致患者死亡，在追寻真相时竟牵出医院内部的惊天阴谋。"
    },
    {
        "title": "旧神",
        "href": "video/movie-0381.html",
        "cover": "81.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻, 悬疑, 宗教",
        "oneLine": "南极科考队挖出一尊来自史前的诡异神像，随即噩梦开始侵入现实，他们发现神话里的旧神从未死去。"
    },
    {
        "title": "回旋镖",
        "href": "video/movie-0382.html",
        "cover": "82.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪, 悬疑, 剧情",
        "oneLine": "一个男人决定杀死十年前害死自己哥哥的凶手，但每次动手凶手总会提前意外死亡。"
    },
    {
        "title": "夜晚的莱奥",
        "href": "video/movie-0383.html",
        "cover": "83.jpg",
        "year": "2020",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 同性, 音乐",
        "oneLine": "七十岁的变装皇后莱奥在夜店最后一场演出前，遇到了一个酷似五十年前恋人的年轻男子。"
    },
    {
        "title": "痴男怨女",
        "href": "video/movie-0384.html",
        "cover": "84.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "一个男人同时爱着两个女人，而这两个女人却是失散多年的亲姐妹。"
    },
    {
        "title": "身在内陆",
        "href": "video/movie-0385.html",
        "cover": "85.jpg",
        "year": "2020",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "惊悚, 冒险, 剧情",
        "oneLine": "为了躲避疫情，一家四口逃往干旱的内陆牧场，却发现这里的地下埋葬着一个血腥的邪教遗址。"
    },
    {
        "title": "无常",
        "href": "video/movie-0386.html",
        "cover": "86.jpg",
        "year": "2020",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖 / 佛教哲理",
        "oneLine": "一名亵渎佛像的盗贼被困在一座荒废寺庙里，每夜都要经历“地狱十殿”的真实审判。"
    },
    {
        "title": "招积老虎",
        "href": "video/movie-0387.html",
        "cover": "87.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 喜剧 / 犯罪",
        "oneLine": "一个做事极度嚣张、到处“招积”（树敌）的卧底警察，被派去接近一名同样嚣张的黑帮老虎，结果两人惺惺相惜。"
    },
    {
        "title": "不知东方既白",
        "href": "video/movie-0388.html",
        "cover": "88.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 悬疑 / 年代",
        "oneLine": "1944年上海，一个日本记者和一个中国地下党，联手追查一桩横跨三国的连环命案。"
    },
    {
        "title": "沿海精英",
        "href": "video/movie-0389.html",
        "cover": "89.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 惊悚 / 犯罪",
        "oneLine": "五位金融精英被困孤岛别墅，一场关于财富与生存的致命游戏悄然开启。"
    },
    {
        "title": "青年医生",
        "href": "video/movie-0390.html",
        "cover": "90.jpg",
        "year": "2026",
        "region": "中国",
        "type": "电视剧",
        "genre": "职场 / 剧情 / 医疗",
        "oneLine": "七个医学院毕业生进入全国最好的三甲医院，第一年没人教他们怎么救人，只教他们怎么写病历和躲投诉。"
    },
    {
        "title": "手天童子",
        "href": "video/movie-0391.html",
        "cover": "91.jpg",
        "year": "1989",
        "region": "日本",
        "type": "OVA剧集",
        "genre": "奇幻，动作",
        "oneLine": "平凡少年觉醒了体内古代英雄“手天童子”的力量，从此被卷入人与妖魔的千年战争。"
    },
    {
        "title": "金蛇郎君粤语",
        "href": "video/movie-0392.html",
        "cover": "92.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "武侠 / 动作 / 爱情",
        "oneLine": "江湖传言，金蛇郎君有一本秘籍藏于蛇窟，各路人马闯入后，却被一种更古老的力量逐个吞噬。"
    },
    {
        "title": "末日巡逻队第三季",
        "href": "video/movie-0393.html",
        "cover": "93.jpg",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 动作 / 喜剧",
        "oneLine": "死而复生的首领奈尔斯·考尔德博士带回一个惊天秘密，团队被迫穿越时间线修补破碎的现实。"
    },
    {
        "title": "食梦者",
        "href": "video/movie-0394.html",
        "cover": "94.jpg",
        "year": "2010",
        "region": "日本",
        "type": "剧集 / 动画",
        "genre": "青春、励志、漫改",
        "oneLine": "高中生组合“亚城木梦叶”以成为第一漫画家为目标，在截稿地狱与读者投票中挥洒热血青春。"
    },
    {
        "title": "恐怖在线",
        "href": "video/movie-0395.html",
        "cover": "95.jpg",
        "year": "2024",
        "region": "马来西亚",
        "type": "剧集",
        "genre": "恐怖， 悬疑",
        "oneLine": "三个网红加入一个名为“恐怖在线”的暗网直播游戏，每完成一个挑战，现实中的诅咒就加深一层。"
    },
    {
        "title": "捐赠",
        "href": "video/movie-0396.html",
        "cover": "96.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "一个走投无路的小导演决定“捐赠”自己的肾脏，却意外卷入了一场富豪的连环谋杀局。"
    },
    {
        "title": "飘洋过海，爱上妳",
        "href": "video/movie-0397.html",
        "cover": "97.jpg",
        "year": "2025",
        "region": "泰国",
        "type": "电视剧",
        "genre": "爱情、喜剧、剧情",
        "oneLine": "为了和网恋半年的美国男友见面，泰国女孩学英语、攒路费，漂洋过海却发现对方是个女的。"
    },
    {
        "title": "狼拳",
        "href": "video/movie-0398.html",
        "cover": "98.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 格斗",
        "oneLine": "一个失业的MMA教练发现女儿被黑市拳赛绑架，只能用失传的“狼拳”杀出血路。"
    },
    {
        "title": "不二土夫子",
        "href": "video/movie-0399.html",
        "cover": "99.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险 / 盗墓",
        "oneLine": "长沙城最后一代土夫子被逼重操旧业，却发现要盗的竟是自己家的祖坟。"
    },
    {
        "title": "流星慢舞",
        "href": "video/movie-0400.html",
        "cover": "100.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "爱情， 奇幻， 青春",
        "oneLine": "因快节奏生活而患上绝症的白领，被送入乡下疗养院，发现那里每天都可以看到“慢速流星”。"
    },
    {
        "title": "世上只有爸爸好",
        "href": "video/movie-0401.html",
        "cover": "101.jpg",
        "year": "2025",
        "region": "香港 / 中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "一位患有阿尔茨海默症的父亲，只记得去幼儿园接女儿放学这一件事，而他的女儿，已经三十年前就失踪了。"
    },
    {
        "title": "狂恋高校生",
        "href": "video/movie-0402.html",
        "cover": "102.jpg",
        "year": "1998",
        "region": "日本",
        "type": "电影",
        "genre": "爱情",
        "oneLine": "中年男教师和女高中生的一段夏日关系，分不清是救赎还是毁掉对方。"
    },
    {
        "title": "杀人电梯",
        "href": "video/movie-0403.html",
        "cover": "103.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖, 惊悚, 悬疑",
        "oneLine": "深夜写字楼的电梯里，每停靠一层，就会有一个乘客离奇死亡，而凶手就在他们中间。"
    },
    {
        "title": "黄金时代1946",
        "href": "video/movie-0404.html",
        "cover": "104.jpg",
        "year": "1946",
        "region": "美国",
        "type": "电影",
        "genre": "剧情， 历史， 战争",
        "oneLine": "三名二战老兵回到家乡，却发现赢得战争后，他们输掉了自己的人生。"
    },
    {
        "title": "天空之城日版",
        "href": "video/movie-0405.html",
        "cover": "105.jpg",
        "year": "2026",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻 / 冒险",
        "oneLine": "经典动画的重制版，在原有故事框架下补充了拉普达文明衰落前的完整历史线。"
    },
    {
        "title": "裸体海滩",
        "href": "video/movie-0406.html",
        "cover": "106.jpg",
        "year": "2019",
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "一个极度害羞的中年会计为了治疗社恐，独自闯入了法国著名的天体海滩。"
    },
    {
        "title": "焦虑青春",
        "href": "video/movie-0407.html",
        "cover": "107.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 青春",
        "oneLine": "重点高中高三七班，四位尖子生表面风光，内心却在焦虑与崩溃边缘挣扎。"
    },
    {
        "title": "车伕松五郎",
        "href": "video/movie-0408.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情 / 历史",
        "oneLine": "战后东京，一位沉默的人力车夫通过车辙连接起形形色色的人生，而他自己也背负着一个巨大的秘密。"
    },
    {
        "title": "闪婚",
        "href": "video/movie-0409.html",
        "cover": "109.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 爱情",
        "oneLine": "为拯救家族企业，白领精英与神秘富二代签下三月婚姻契约，却发现对方藏着更大秘密。"
    },
    {
        "title": "伟大的安巴逊",
        "href": "video/movie-0410.html",
        "cover": "110.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "曾经统治中西部工业城的安巴逊家族，在一个浮夸继承人的手中，三十年走向分崩离析。"
    },
    {
        "title": "静默之下",
        "href": "video/movie-0411.html",
        "cover": "111.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚, 悬疑, 剧情",
        "oneLine": "一名独居的聋哑插画师在家作画时，三个蒙面劫匪闯入了她的房子，她听不见他们，他们也发现不了藏在暗处的她。"
    },
    {
        "title": "苏南堡传奇",
        "href": "video/movie-0412.html",
        "cover": "112.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "年代，悬疑，冒险",
        "oneLine": "1936年，苏南堡少东家意外发现祖宅地宫，掀开了一段被血咒掩盖的护宝传奇。"
    },
    {
        "title": "为玛格利特朗读",
        "href": "video/movie-0413.html",
        "cover": "113.jpg",
        "year": "2010",
        "region": "加拿大 / 法国",
        "type": "电影",
        "genre": "剧情 / 温情",
        "oneLine": "文盲老妇人玛格利特每周请人来为她读小说，而那个读书的人，每次都在改变自己的人生。"
    },
    {
        "title": "同志梦幻号",
        "href": "video/movie-0414.html",
        "cover": "114.jpg",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧， 爱情， 公路",
        "oneLine": "一辆被改造成同志豪华邮轮的废弃公交车上，十个男人为了赢得神秘富豪的心而展开爆笑角逐。"
    },
    {
        "title": "不好",
        "href": "video/movie-0415.html",
        "cover": "115.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "剧集",
        "genre": "恐怖, 惊悚, 悬疑",
        "oneLine": "一个神秘账号在社交平台上对用户说出“不好”二字，24小时内，该用户必死。"
    },
    {
        "title": "如意",
        "href": "video/movie-0416.html",
        "cover": "116.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭, 文艺",
        "oneLine": "叛逆的都市白领被迫回乡学习古老的织锦技艺，却在一针一线中解开了家族三十年的心结。"
    },
    {
        "title": "超级索尼克第二季",
        "href": "video/movie-0417.html",
        "cover": "117.jpg",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "动画",
        "oneLine": "索尼克和塔尔斯在平行宇宙中遇见了来自未来的暗黑版自己，而蛋头博士的阴谋远不止统治世界那么简单。"
    },
    {
        "title": "社长豆超市",
        "href": "video/movie-0418.html",
        "cover": "118.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情 / 喜剧 / 生活",
        "oneLine": "大企业社长被贬到乡下开“豆超市”，却在这里找到了比金钱更珍贵的生活答案。"
    },
    {
        "title": "太空熊猫总动员",
        "href": "video/movie-0419.html",
        "cover": "119.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画, 喜剧, 冒险",
        "oneLine": "中国空间站来了三位熊猫宇航员，它们的任务是：用竹子在火星种出一片森林。"
    },
    {
        "title": "钟楼怪人1996",
        "href": "video/movie-0420.html",
        "cover": "120.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "1996年的巴黎，一个被遗弃在钟楼的畸形儿长大成人，他用钟声对抗整个冷漠的城市。"
    },
    {
        "title": "爱情傻瓜",
        "href": "video/movie-0421.html",
        "cover": "121.jpg",
        "year": "2004",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧、爱情、剧情",
        "oneLine": "一个笨拙的男人为了追回女友，却意外帮所有人找回了爱情。"
    },
    {
        "title": "五卢比恩仇录",
        "href": "video/movie-0422.html",
        "cover": "122.jpg",
        "year": "2018",
        "region": "印度",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "oneLine": "孟买贫民窟两兄弟因五卢比结下世仇，二十年后一人成为黑帮老大，一人成为警察，最终对决。"
    },
    {
        "title": "闹鬼校园",
        "href": "video/movie-0423.html",
        "cover": "123.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖",
        "oneLine": "废弃教学楼每晚传出女生哭声，转学生发现灵异事件竟与二十年前的集体失踪案有关。"
    },
    {
        "title": "血色大地",
        "href": "video/movie-0424.html",
        "cover": "124.jpg",
        "year": "2025",
        "region": "乌克兰",
        "type": "剧集",
        "genre": "历史，战争，悬疑",
        "oneLine": "1943年，沃伦地区一个村庄接连发生诡异命案，背后是纳粹、苏军还是民族起义军？"
    },
    {
        "title": "陪你到世界的尽头",
        "href": "video/movie-0425.html",
        "cover": "125.jpg",
        "year": "2029",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 灾难",
        "oneLine": "一颗小行星即将撞毁地球，一个癌症晚期的女孩却决定开车横穿中国，去见她的初恋。"
    },
    {
        "title": "田间小路的花花公子",
        "href": "video/movie-0426.html",
        "cover": "126.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 爱情, 乡村",
        "oneLine": "上海最纨绔的富二代被父亲扔到贵州山村“改造”，三个月后他成了村里第一个带货直播的千万网红。"
    },
    {
        "title": "伦文叙老点柳先开粤语",
        "href": "video/movie-0427.html",
        "cover": "127.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、古装、剧情",
        "oneLine": "鬼马才子伦文叙与高傲富二代柳先开，从街头骂战一路斗到金銮殿。"
    },
    {
        "title": "幽冥时代",
        "href": "video/movie-0428.html",
        "cover": "128.jpg",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖，悬疑，分段式",
        "oneLine": "四个年轻人在太平间里讲恐怖故事，却发现讲过的每一个故事都正在他们身边真实发生。"
    },
    {
        "title": "加拿大直升机",
        "href": "video/movie-0429.html",
        "cover": "129.jpg",
        "year": "2022",
        "region": "加拿大",
        "type": "电影",
        "genre": "动作 / 灾难",
        "oneLine": "一架退役的搜救直升机，在百年一遇的雪崩中成为落难登山队唯一的希望。"
    },
    {
        "title": "大蟒蛇3：祸延子孙",
        "href": "video/movie-0430.html",
        "cover": "130.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 恐怖, 冒险",
        "oneLine": "血蟒的幼崽被偷运至加州并逃入下水道，迅速繁衍的巨型爬虫将整座城市变成狩猎场。"
    },
    {
        "title": "风继续吹",
        "href": "video/movie-0431.html",
        "cover": "131.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 同性, 传记",
        "oneLine": "一个名不见经传的小演员，在巨星离世后，试图找回两人之间一段不为人知的往事。"
    },
    {
        "title": "爱情狂想曲",
        "href": "video/movie-0432.html",
        "cover": "132.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情，喜剧，奇幻",
        "oneLine": "一个能听到别人心里 BGM 的女孩，突然遇到一个脑子里全是“交响乐失窃案”杂音的神秘男子。"
    },
    {
        "title": "丑闻祸事",
        "href": "video/movie-0433.html",
        "cover": "133.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情 / 悬疑 / 政治",
        "oneLine": "英国贵族庄园的继承人离奇死亡，其私生子、养子、管家和庄园厨师同时收到了DNA检测报告。"
    },
    {
        "title": "幻想2007",
        "href": "video/movie-0434.html",
        "cover": "134.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 青春, 奇幻",
        "oneLine": "2024年的失败编剧穿越回2007年，试图阻止父母离婚，却毁了自己的出生。"
    },
    {
        "title": "消失第三者",
        "href": "video/movie-0435.html",
        "cover": "135.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑, 惊悚",
        "oneLine": "丈夫的情妇突然人间蒸发，所有证据都指向他，而他的妻子却在每晚说梦话时，用那个情妇的口吻说话。"
    },
    {
        "title": "球拍少年团",
        "href": "video/movie-0436.html",
        "cover": "136.jpg",
        "year": "2021",
        "region": "韩国",
        "type": "电视剧",
        "genre": "青春 / 运动 / 喜剧",
        "oneLine": "五个城市少年被流放到乡下中学，为了凑齐人数打比赛，他们拉来了种地的奶奶和炸鸡店大叔。"
    },
    {
        "title": "血誓",
        "href": "video/movie-0437.html",
        "cover": "137.jpg",
        "year": "2005",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "古装，武侠，爱情",
        "oneLine": "亲兄妹因家族血仇被迫分离，十年后重逢时，哥哥成了魔教教主，妹妹成了正道侠女。"
    },
    {
        "title": "正义雇佣兵",
        "href": "video/movie-0438.html",
        "cover": "138.jpg",
        "year": "2006",
        "region": "英国",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "oneLine": "一支被政府抛弃的雇佣兵小队，在国际法庭的空白地带替无处申冤的受害者动私刑。"
    },
    {
        "title": "品行不良",
        "href": "video/movie-0439.html",
        "cover": "139.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧、校园",
        "oneLine": "全年级倒数第一的学渣，意外发现自己能看到所有人的“品行评分”数字。"
    },
    {
        "title": "约约会，消消毒",
        "href": "video/movie-0440.html",
        "cover": "140.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧、爱情、短剧",
        "oneLine": "疫情期间，被迫隔离在同一栋公寓的单身男女，戴着口罩隔着玻璃相亲，闹出一堆笑话。"
    },
    {
        "title": "中国匣",
        "href": "video/movie-0441.html",
        "cover": "141.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "oneLine": "一只古老的中国雕花匣子，能让主人实现愿望，但每用一次，就会丢失一段最珍贵的记忆。"
    },
    {
        "title": "部长做了一个梦",
        "href": "video/movie-0442.html",
        "cover": "142.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、奇幻、政治",
        "oneLine": "铁腕的厚生劳动大臣每晚都会做一个相同的噩梦：他年轻时亲手掩盖的一起医疗事故中的死者，不断在梦中向他索命。"
    },
    {
        "title": "侠医粤语",
        "href": "video/movie-0443.html",
        "cover": "143.jpg",
        "year": "1998",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情、动作、医学",
        "oneLine": "退隐江湖的前黑道金牌打手，如今在深水埗开诊所，用针灸治伤，也治“人心”。"
    },
    {
        "title": "无名之日",
        "href": "video/movie-0444.html",
        "cover": "144.jpg",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑、犯罪、剧情",
        "oneLine": "在一个人人可以购买“新身份”的城市，一个男人发现自己被完全抹去了存在的痕迹。"
    },
    {
        "title": "喜欢你",
        "href": "video/movie-0445.html",
        "cover": "145.jpg",
        "year": "2023",
        "region": "中国",
        "type": "剧集",
        "genre": "爱情，青春，校园",
        "oneLine": "全班都知道他喜欢她，全班都知道她喜欢他，只有他们两个以为这是自己一个人的秘密。"
    },
    {
        "title": "死亡仓库",
        "href": "video/movie-0446.html",
        "cover": "146.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "oneLine": "五个陌生人醒来时被困在一座废弃的巨型仓库里，每扇门后都是一个致命的谜题。"
    },
    {
        "title": "绝地7骑士",
        "href": "video/movie-0447.html",
        "cover": "147.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 西部",
        "oneLine": "七个被流放的星际牛仔，在边缘星球上以一敌万，用老式左轮手枪对抗机甲军团。"
    },
    {
        "title": "1941之春",
        "href": "video/movie-0448.html",
        "cover": "148.jpg",
        "year": "2025",
        "region": "波兰/德国",
        "type": "电影",
        "genre": "历史剧情",
        "oneLine": "1941年春天，一位犹太女钢琴家躲藏在德国军官的住宅地下室，琴声成了两人之间无法言说的秘密。"
    },
    {
        "title": "阿拉伯漂移2",
        "href": "video/movie-0449.html",
        "cover": "149.jpg",
        "year": "2026",
        "region": "沙特阿拉伯 / 阿联酋",
        "type": "电影",
        "genre": "动作 / 犯罪 / 赛车",
        "oneLine": "前作主角在迪拜隐姓埋名成为顶级金融黑客，但当年害死他哥哥的“幽灵车手”重现江湖，此次目标是劫持全球首脑的区块链密钥。"
    },
    {
        "title": "繁花 沪语版",
        "href": "video/movie-0450.html",
        "cover": "150.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 爱情",
        "oneLine": "九十年代上海滩，阿宝用一句“我相信你”换来了半生情债与金钱泡沫。"
    },
    {
        "title": "乔·科伊：热辣登场",
        "href": "video/movie-0451.html",
        "cover": "1.jpg",
        "year": "2024",
        "region": "菲律宾 / 美国",
        "type": "综艺",
        "genre": "喜剧, 脱口秀",
        "oneLine": "菲律宾裔喜剧人乔·科伊杀回马尼拉，用两小时段子调侃东西方文化的“冰火两重天”。"
    },
    {
        "title": "世上最烂的人",
        "href": "video/movie-0452.html",
        "cover": "2.jpg",
        "year": "2025",
        "region": "挪威",
        "type": "电影",
        "genre": "剧情，爱情，黑色幽默",
        "oneLine": "一个自称“最烂”的三十岁女人，在决定彻底躺平那天，却同时被三个男人求爱。"
    },
    {
        "title": "疯狗与格拉瑞小姐",
        "href": "video/movie-0453.html",
        "cover": "3.jpg",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，西部，心理",
        "oneLine": "被全镇称作“疯狗”的流浪汉与患有严重洁癖的图书管理员小姐，因一本借阅过期五十年的书产生交集。"
    },
    {
        "title": "人造天堂",
        "href": "video/movie-0454.html",
        "cover": "4.jpg",
        "year": "2008",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 科幻 / 伦理",
        "oneLine": "在高度物质化的东京近未来，一名孤僻的上班族购买了一具情感仿生人，却发现对方比自己更像“人类”。"
    },
    {
        "title": "雪之下",
        "href": "video/movie-0455.html",
        "cover": "5.jpg",
        "year": "2027",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑犯罪",
        "oneLine": "暴雪山庄里，一名警察死了，剩下的六个人都声称自己是凶手。"
    },
    {
        "title": "小李飞刀粤语",
        "href": "video/movie-0456.html",
        "cover": "6.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "武侠 / 古装 / 剧情",
        "oneLine": "全新粤语版《小李飞刀》，李寻欢不再让妻，而是让刀。"
    },
    {
        "title": "等著你回来",
        "href": "video/movie-0457.html",
        "cover": "7.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "悬疑 / 恐怖 / 同性",
        "oneLine": "女孩搬进一栋老宅后，总能听到阁楼传来哼歌声，那是三十年前为等待爱人而自杀的女鬼。"
    },
    {
        "title": "终极宿舍",
        "href": "video/movie-0458.html",
        "cover": "8.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "科幻 / 悬疑 / 青春",
        "oneLine": "一栋老旧大学宿舍里，八个互不相识的学生被困在同一个时间循环中，而打破循环的钥匙，是找到当年的那个“死者”。"
    },
    {
        "title": "江分利满先生的优雅生活",
        "href": "video/movie-0459.html",
        "cover": "9.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "一名中年上班族为了维持“优雅生活”的人设，在破产边缘同时伪装成富豪、穷鬼和艺术家。"
    },
    {
        "title": "寻找女神@娇阿依",
        "href": "video/movie-0460.html",
        "cover": "10.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻、公路、喜剧",
        "oneLine": "一个过气女主播为了翻红，去湘西寻找传说中的苗寨女神@娇阿依，却发现对方是一个AI。"
    },
    {
        "title": "借尸还魂",
        "href": "video/movie-0461.html",
        "cover": "11.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖、悬疑、民俗",
        "oneLine": "落魄道士为一桩离奇命案施法，却唤醒了尸体里一个不该存在的记忆。"
    },
    {
        "title": "灾难之城",
        "href": "video/movie-0462.html",
        "cover": "12.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 灾难",
        "oneLine": "一场地震揭开了城市地下的秘密，幸存者们发现整座城其实是外星文明的实验皿。"
    },
    {
        "title": "弄假成真",
        "href": "video/movie-0463.html",
        "cover": "13.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "oneLine": "为了应付催婚而租借的“完美男友”，竟意外是公司新来的严厉总监。"
    },
    {
        "title": "烧草的气味",
        "href": "video/movie-0464.html",
        "cover": "14.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑, 惊悚",
        "oneLine": "拥有“嗅觉超忆症”的失明女子，通过记忆中一缕烧草的气味，锁定了一名逍遥法外二十年的连环杀手。"
    },
    {
        "title": "凶险地带",
        "href": "video/movie-0465.html",
        "cover": "15.jpg",
        "year": "2017",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争，动作",
        "oneLine": "切尔诺贝利石棺内部，一名乌克兰狙击手与俄罗斯特种兵在致命辐射中进行了48小时无声对决。"
    },
    {
        "title": "失恋大不同",
        "href": "video/movie-0466.html",
        "cover": "16.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情、剧情、疗愈",
        "oneLine": "在济州岛一间名为“失恋大不同”的民宿里，四个失恋的陌生人组成“复仇计划俱乐部”，但他们发现最该报复的不是前任，而是懦弱的自己。"
    },
    {
        "title": "闭门一家亲粤语",
        "href": "video/movie-0467.html",
        "cover": "17.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧, 家庭, 处境剧",
        "oneLine": "疫情封控期间，一栋旧式唐楼里的五户人家被迫“闭门”相处，从互骂到互救。"
    },
    {
        "title": "电影超级任务",
        "href": "video/movie-0468.html",
        "cover": "18.jpg",
        "year": "1996",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 喜剧",
        "oneLine": "电影特技队被黑帮胁迫用假爆炸换真军火，片场子弹全成了实弹。"
    },
    {
        "title": "只因你是女子",
        "href": "video/movie-0469.html",
        "cover": "19.jpg",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "剧情, 社会",
        "oneLine": "在童婚盛行的村庄，一对姐妹偷偷学习射箭，誓要射穿那面名为“传统”的墙壁。"
    },
    {
        "title": "我们从今天开始",
        "href": "video/movie-0470.html",
        "cover": "20.jpg",
        "year": "2027",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情， 喜剧， 奇幻",
        "oneLine": "不婚主义女主被催婚七天后陷入时间循环，必须和隔壁讨厌的男主假结婚才能跳到第二天。"
    },
    {
        "title": "比利·林恩的中场战事",
        "href": "video/movie-0471.html",
        "cover": "21.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 战争 / 心理",
        "oneLine": "伊拉克战争英雄回国参加橄榄球赛中场秀，脑海里却不断闪回战场上最糟糕的那一天。"
    },
    {
        "title": "危情岛坠",
        "href": "video/movie-0472.html",
        "cover": "22.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "暴雨之夜，六名陌生人在孤岛坠崖处醒来，发现彼此的记忆拼成了一桩谋杀拼图。"
    },
    {
        "title": "被争论的女人",
        "href": "video/movie-0473.html",
        "cover": "23.jpg",
        "year": "2016",
        "region": "法国, 德国",
        "type": "电影",
        "genre": "剧情, 历史, 传记",
        "oneLine": "一位宣称自己发明了避孕药的女科学家，用余生打一场注定失败的官司。"
    },
    {
        "title": "安德的游戏",
        "href": "video/movie-0474.html",
        "cover": "24.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻战争",
        "oneLine": "在未来的太空军校，天才少年安德在终极模拟游戏中全歼了虫族，却发现那场“游戏”竟是一场真实的种族灭绝。"
    },
    {
        "title": "偷盗艺术",
        "href": "video/movie-0475.html",
        "cover": "25.jpg",
        "year": "2021",
        "region": "加拿大 / 法国",
        "type": "电影",
        "genre": "犯罪 / 悬疑 / 爱情",
        "oneLine": "世界上最年轻的艺术品大盗被自己亲手教出的徒弟送进监狱，出狱后却发现那场背叛竟是一场精心设计的救赎。"
    },
    {
        "title": "鬼入镜：诅咒",
        "href": "video/movie-0476.html",
        "cover": "26.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 伪纪录片",
        "oneLine": "网红主播为流量闯入一间废弃巫女屋并全程直播，却发现自己每说一句“这是假的”，镜中倒影就多做一个动作。"
    },
    {
        "title": "我们都爱他！",
        "href": "video/movie-0477.html",
        "cover": "27.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧/家庭",
        "oneLine": "花花公子意外身亡，三位互不知情的遗孀带着孩子们，在同一栋别墅里撞个正着。"
    },
    {
        "title": "酝酿复仇",
        "href": "video/movie-0478.html",
        "cover": "28.jpg",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 惊悚, 犯罪",
        "oneLine": "为了向害死父亲的酒庄庄主复仇，她用了十年成为一名顶级品酒师，布下天罗地网。"
    },
    {
        "title": "舍生七日",
        "href": "video/movie-0479.html",
        "cover": "29.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "惊悚, 悬疑, 生存",
        "oneLine": "被困在致命凶宅中反复死去，必须找到真凶才能打破这七天的死亡循环。"
    },
    {
        "title": "洞房双尸案",
        "href": "video/movie-0480.html",
        "cover": "30.jpg",
        "year": "1989",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪, 恐怖, 悬疑",
        "oneLine": "新婚夜，新郎新娘双双惨死，现场血字留下：“第三个是证人”。"
    },
    {
        "title": "双虎屠龙",
        "href": "video/movie-0481.html",
        "cover": "31.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "西部，犯罪，剧情",
        "oneLine": "美墨边境，一对性格迥异的警长兄弟，一边对抗贩毒集团，一边提防彼此手中的枪。"
    },
    {
        "title": "超杀硬汉3",
        "href": "video/movie-0482.html",
        "cover": "32.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作、犯罪、惊悚",
        "oneLine": "当他的导盲犬被杀，这位失明的退役杀手决定让整座城市为他陪葬。"
    },
    {
        "title": "代号8",
        "href": "video/movie-0483.html",
        "cover": "33.jpg",
        "year": "2019",
        "region": "美国 / 加拿大",
        "type": "电影",
        "genre": "科幻, 犯罪, 剧情",
        "oneLine": "在一个歧视超能力者的世界，一名底层劳工为了给母亲治病，被迫加入超能力犯罪团伙。"
    },
    {
        "title": "茅屋爷爷讲故事",
        "href": "video/movie-0484.html",
        "cover": "34.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "儿童 / 奇幻 / 教育",
        "oneLine": "在一间会移动的魔法茅草屋里，一位白胡子老爷爷每晚都给小动物们讲一个源自中国民间传说和成语的新故事。"
    },
    {
        "title": "鲁邦的女儿2019",
        "href": "video/movie-0485.html",
        "cover": "35.jpg",
        "year": "2019",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧 / 爱情 / 犯罪",
        "oneLine": "小偷世家的女儿和警察世家的儿子恋爱了，每次约会都在偷与抓之间疯狂试探。"
    },
    {
        "title": "血杀粤语",
        "href": "video/movie-0486.html",
        "cover": "36.jpg",
        "year": "1998",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪",
        "oneLine": "卧底与黑帮大佬惺惺相惜，身份揭穿那晚两人只能用血来决定谁活。"
    },
    {
        "title": "恋上周日",
        "href": "video/movie-0487.html",
        "cover": "37.jpg",
        "year": "2018",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情， 喜剧， 奇幻",
        "oneLine": "广告总监发现只有周日才会重复，她利用这一天无限重来，却遇见了真正懂她的人。"
    },
    {
        "title": "极限特工:终极回归",
        "href": "video/movie-0488.html",
        "cover": "38.jpg",
        "year": "2029",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 冒险",
        "oneLine": "当一支AI无人机军队失控，退休的极限特工必须召集一群玩跑酷、冲浪和翼装飞行的新血，完成最后一次自杀式任务。"
    },
    {
        "title": "一个复杂故事",
        "href": "video/movie-0489.html",
        "cover": "39.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 家庭, 伦理",
        "oneLine": "一对丁克夫妇请代孕生子后丈夫去世，妻子和代孕妈妈被迫争夺同一孩子的抚养权。"
    },
    {
        "title": "它在身后",
        "href": "video/movie-0490.html",
        "cover": "40.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖, 悬疑",
        "oneLine": "只要和校霸发生过关系的人，都会被一个永远在走路、从不跑动的黑影追杀，直到把诅咒传给别人。"
    },
    {
        "title": "逐玉",
        "href": "video/movie-0491.html",
        "cover": "41.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装仙侠",
        "oneLine": "为救苍生，玉灵仙子被迫亲手将自己的爱人炼化成补天的最后一块玉石。"
    },
    {
        "title": "打过长江去",
        "href": "video/movie-0492.html",
        "cover": "42.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 战争",
        "oneLine": "1949年渡江战役前夜，一对亲兄弟在长江两岸隔江相望，一个在江北准备渡江，一个在江南加固工事。"
    },
    {
        "title": "镇长",
        "href": "video/movie-0493.html",
        "cover": "43.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 现实主义, 乡村",
        "oneLine": "新镇长到任后发现贫困镇的巨大债务，他不得不用违法手段为村民谋求出路。"
    },
    {
        "title": "天国逆子",
        "href": "video/movie-0494.html",
        "cover": "44.jpg",
        "year": "1994",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "儿子举报父亲杀人，却发现自己才是真正的凶手——他当年只有四岁。"
    },
    {
        "title": "堂下何人",
        "href": "video/movie-0495.html",
        "cover": "45.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑, 古装, 律政",
        "oneLine": "一桩铁证如山的杀夫案，六个身份各异的证人，公堂之上，谁才是真正的“堂下之人”？"
    },
    {
        "title": "第27章",
        "href": "video/movie-0496.html",
        "cover": "46.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 文艺",
        "oneLine": "小说家写到第27章时，发现他笔下的角色活了，并且开始反抗他设定的悲剧结局。"
    },
    {
        "title": "落跑吧爱情",
        "href": "video/movie-0497.html",
        "cover": "47.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情、喜剧、公路",
        "oneLine": "婚礼当天落跑的新娘，却上了一位毒舌民宿司机的破面包车，两人被迫开启环岛囧途。"
    },
    {
        "title": "魔域战记",
        "href": "video/movie-0498.html",
        "cover": "48.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻，冒险，战斗",
        "oneLine": "游戏宅穿越进自己最爱的垃圾RPG游戏，却发现自己只能使用最没用的“生活技能”。"
    },
    {
        "title": "空山异客",
        "href": "video/movie-0499.html",
        "cover": "49.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑, 惊悚, 民俗",
        "oneLine": "一位植物学家深入湘西深山，发现当地村民口中的“山客”，是一种寄生人体的诡异真菌。"
    },
    {
        "title": "天鹅纹章",
        "href": "video/movie-0500.html",
        "cover": "50.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 历史 / 同性",
        "oneLine": "1885年的英国贵族庄园里，继承人发现自己与天鹅湖中一位化身为人形的天鹅少年产生了宿命般的羁绊。"
    },
    {
        "title": "恋爱兵法2012",
        "href": "video/movie-0501.html",
        "cover": "51.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情，喜剧，剧情",
        "oneLine": "2012世界末日传言下，三名剩女用一本古籍兵书展开荒诞又浪漫的爱情攻防战。"
    },
    {
        "title": "刺刀英雄",
        "href": "video/movie-0502.html",
        "cover": "52.jpg",
        "year": "2014",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "战争，动作",
        "oneLine": "一支由幸存老兵组成的“刺刀连”，在敌后用最原始的白刃战，捅破日军的铁壁合围。"
    },
    {
        "title": "人类清除计划3",
        "href": "video/movie-0503.html",
        "cover": "53.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 恐怖 / 政治惊悚",
        "oneLine": "当清除夜变成统治者的屠杀游戏，一位母亲带着女儿穿越暴乱区，只为曝光那份赦免名单。"
    },
    {
        "title": "只想和你在一起",
        "href": "video/movie-0504.html",
        "cover": "54.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "oneLine": "患有“逆行性失忆症”的新娘，每天都会忘记新郎，而新郎每天都要让她重新爱上自己。"
    },
    {
        "title": "有你我不怕",
        "href": "video/movie-0505.html",
        "cover": "55.jpg",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情、惊悚、儿童",
        "oneLine": "九岁男孩在麦田里发现地窖中被囚禁的同龄人，全镇大人都知道这个秘密。"
    },
    {
        "title": "怒火情丝",
        "href": "video/movie-0506.html",
        "cover": "56.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 爱情",
        "oneLine": "女警卧底在黑帮老大身边，本想取其性命，却发现自己怀上了他的孩子。"
    },
    {
        "title": "三女怀春",
        "href": "video/movie-0507.html",
        "cover": "57.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情文艺",
        "oneLine": "三个不同年龄的女人在同一栋老宅里，各自经历了一场颠覆人生的暗恋。"
    },
    {
        "title": "斗气一族粤语",
        "href": "video/movie-0508.html",
        "cover": "58.jpg",
        "year": "1991",
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧, 家庭, 都市",
        "oneLine": "同一屋檐下的两家人从互相整蛊到联手抗敌，笑料背后是草根的暖意。"
    },
    {
        "title": "十小福",
        "href": "video/movie-0509.html",
        "cover": "59.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 剧情",
        "oneLine": "一个过气相声演员收了十个奇葩徒弟，目标是让没人听的相声重新登上春晚。"
    },
    {
        "title": "杰克与吉尔",
        "href": "video/movie-0510.html",
        "cover": "60.jpg",
        "year": "2025",
        "region": "印度 / 美国",
        "type": "电影",
        "genre": "剧情 / 惊悚",
        "oneLine": "一对印度双胞胎兄妹通过暗网交换人生，哥哥去了美国，妹妹留在了孟买，但三年后，哥哥被宣告死亡。"
    },
    {
        "title": "西岳奇童",
        "href": "video/movie-0511.html",
        "cover": "61.jpg",
        "year": "1984",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻，动画",
        "oneLine": "为救母亲，小小沉香踏上寻斧之路，却发现自己竟是仙凡之子。"
    },
    {
        "title": "茱蒂",
        "href": "video/movie-0512.html",
        "cover": "62.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记 / 剧情",
        "oneLine": "好莱坞首位华裔女星黄柳霜的隐秘情人“茱蒂”浮出水面，她才是被抹去的传奇编剧。"
    },
    {
        "title": "眼泪之盐",
        "href": "video/movie-0513.html",
        "cover": "63.jpg",
        "year": "2020",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "一个乡下男孩来到巴黎后，在三个女人之间品尝爱情，却最终在泪水中认清自我的苦涩与幼稚。"
    },
    {
        "title": "我的爱对你说1997",
        "href": "video/movie-0514.html",
        "cover": "64.jpg",
        "year": "2017",
        "region": "中国大陆 / 香港",
        "type": "电视剧",
        "genre": "爱情 / 年代",
        "oneLine": "1997年香港回归前夕，一对青梅竹马因家族恩怨被迫分离，却在一场金融风暴中再次生死相依。"
    },
    {
        "title": "古宅粤语",
        "href": "video/movie-0515.html",
        "cover": "65.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 民俗",
        "oneLine": "一座废弃的粤剧戏班古宅，每夜传出咿呀唱戏声，新搬入的家族开始一个个失踪。"
    },
    {
        "title": "借着雨点说爱你",
        "href": "video/movie-0516.html",
        "cover": "66.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情, 奇幻",
        "oneLine": "亡妻生前约定：每年雨季第一天，她会以二十岁的模样回来待六周。"
    },
    {
        "title": "少年嘉庆",
        "href": "video/movie-0517.html",
        "cover": "67.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装 / 历史",
        "oneLine": "十五岁的永琰被秘密立为太子，却发现自己只是乾隆用来制衡和珅与诸皇子的“影武者”。"
    },
    {
        "title": "铁血军营",
        "href": "video/movie-0518.html",
        "cover": "68.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "军旅，战争，热血",
        "oneLine": "一群被各部队淘汰的“刺头兵”被扔进了铁血军营，三个月后，他们要面对的是全军区最变态的教官和一场真实的反恐行动。"
    },
    {
        "title": "美国舞娘",
        "href": "video/movie-0519.html",
        "cover": "69.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，歌舞",
        "oneLine": "一名落魄的脱衣舞娘，利用大数据分析富豪心理，在赌城掀起了一场财富革命。"
    },
    {
        "title": "抗联敢死队之红雪",
        "href": "video/movie-0520.html",
        "cover": "70.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "战争 / 动作",
        "oneLine": "1939年冬，一支抗联敢死队潜入日军生化部队基地，却发现要炸毁的竟是治愈瘟疫的解药。"
    },
    {
        "title": "魔灯",
        "href": "video/movie-0521.html",
        "cover": "71.jpg",
        "year": "2025",
        "region": "瑞典",
        "type": "电影",
        "genre": "剧情 / 奇幻 / 传记",
        "oneLine": "年迈导演在临终前捡到一盏旧魔灯，每次点亮，他都会变成自己电影里的人物。"
    },
    {
        "title": "骇客任务：复活",
        "href": "video/movie-0522.html",
        "cover": "72.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 动作",
        "oneLine": "尼奥死后二十年，科学家用他残留的“矩阵反应”复活了他的意识，但新肉身正在吃掉他自己。"
    },
    {
        "title": "学校有鬼2",
        "href": "video/movie-0523.html",
        "cover": "73.jpg",
        "year": "1997",
        "region": "日本",
        "type": "电影/恐怖喜剧",
        "genre": "恐怖, 喜剧, 奇幻",
        "oneLine": "这次厕所里的花子不吓人了，她拉着转校生一起对抗学校里更可怕的裂口女。"
    },
    {
        "title": "幽灵鬼屋",
        "href": "video/movie-0524.html",
        "cover": "74.jpg",
        "year": "2019",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖, 喜剧",
        "oneLine": "五个作死的网红夜闯废弃学校直播，结果发现鬼魂都是因为试卷没答完才不肯成佛的学渣。"
    },
    {
        "title": "春色无遮入眼廉",
        "href": "video/movie-0525.html",
        "cover": "75.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 情色",
        "oneLine": "患有眼疾的浮世绘修复师，在失明前接到了一个委托：修复一幅隐藏着江户时代禁忌恋情的春宫图。"
    },
    {
        "title": "最后一英寸",
        "href": "video/movie-0526.html",
        "cover": "76.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 运动",
        "oneLine": "被开除的前冰球国手，带着素人儿子在最后一英寸的冰面上完成不可能的绝杀。"
    },
    {
        "title": "福星高照",
        "href": "video/movie-0527.html",
        "cover": "77.jpg",
        "year": "1986",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 动作",
        "oneLine": "七个倒霉蛋警察护送一对价值连城的金佛，一路上霉运不断，却歪打正着。"
    },
    {
        "title": "名流男子太棘手",
        "href": "video/movie-0528.html",
        "cover": "78.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情 / 喜剧",
        "oneLine": "普通打工妹被顶级财阀公子追求，她以为遇到白马王子，结果发现这是他和朋友们的“穷人狩猎”赌局。"
    },
    {
        "title": "捣蛋鬼弗瑞德",
        "href": "video/movie-0529.html",
        "cover": "79.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影 / 动画",
        "genre": "动画 / 奇幻 / 喜剧",
        "oneLine": "一个只想搞破坏的恶作剧精灵，意外被许愿成了一个四岁小女孩的“完美哥哥”。"
    },
    {
        "title": "王室绯闻守则",
        "href": "video/movie-0530.html",
        "cover": "80.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "爱情 / 喜剧 / 同性",
        "oneLine": "美国总统之子与英国王储“结仇”后被迫扮演好友，却在假戏中动了真心，引发了国际级绯闻。"
    },
    {
        "title": "琴键上的奇迹",
        "href": "video/movie-0531.html",
        "cover": "81.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 音乐",
        "oneLine": "钢琴系高材生被迫教自闭症儿童，却发现孩子弹的不是音符，而是色彩。"
    },
    {
        "title": "爱的噩梦",
        "href": "video/movie-0532.html",
        "cover": "82.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚， 爱情， 悬疑",
        "oneLine": "新婚妻子每晚都在做同一个被追杀的白日梦，而梦里那个蒙面杀手，竟与丈夫的笔迹一模一样。"
    },
    {
        "title": "甜蜜的艾玛，亲爱的芭比",
        "href": "video/movie-0533.html",
        "cover": "83.jpg",
        "year": "2025",
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情 / 同性 / 家庭",
        "oneLine": "80岁的艾玛在养老院爱上了失智的芭比，但芭比的女儿坚称母亲只是“老年糊涂”，并要把她转去禁闭室。"
    },
    {
        "title": "俊俏媳妇开明婆",
        "href": "video/movie-0534.html",
        "cover": "84.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭 / 喜剧 / 女性",
        "oneLine": "城里来的网红媳妇遭遇农村婆婆，两人从互撕到联手创业开直播卖土特产。"
    },
    {
        "title": "与海明威为邻",
        "href": "video/movie-0535.html",
        "cover": "85.jpg",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，传记，文学",
        "oneLine": "一个想当作家的穷小子搬到了海明威隔壁，每天偷听他打字的声音，直到有一天海明威敲开了他的门。"
    },
    {
        "title": "与霍莉同过圣诞",
        "href": "video/movie-0536.html",
        "cover": "86.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "家庭奇幻喜剧",
        "oneLine": "一个孤僻的老头在圣诞夜被一只会说话的金毛猎犬“霍莉”绑架，被迫踏上一场送礼物之旅。"
    },
    {
        "title": "密室大逃脱第七季",
        "href": "video/movie-0537.html",
        "cover": "87.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "真人秀 / 悬疑 / 冒险",
        "oneLine": "六位玩家被困在一个能读取恐惧记忆的AI大厦中，每解开一谜题，就有一人被“数据化”。"
    },
    {
        "title": "甜蜜的任务",
        "href": "video/movie-0538.html",
        "cover": "88.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情, 家庭, 喜剧",
        "oneLine": "顶级甜品师因过劳失去味觉，被迫回到乡下的家，接下“帮母亲写完失踪食谱”这个甜蜜又折磨的任务。"
    },
    {
        "title": "三流父亲",
        "href": "video/movie-0539.html",
        "cover": "89.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情，家庭，运动",
        "oneLine": "一个中年失业的棒球手，为了女儿学校的家长棒球赛，决定重新投出那颗他从未成功过的魔球。"
    },
    {
        "title": "我们存在的理由",
        "href": "video/movie-0540.html",
        "cover": "90.jpg",
        "year": "2020",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 家庭 / 治愈",
        "oneLine": "患有严重自闭症的天才跑者，在一次马拉松事故后，突然开口问哥哥：“我为什么活着？”"
    },
    {
        "title": "澎堤池",
        "href": "video/movie-0541.html",
        "cover": "91.jpg",
        "year": "2024",
        "region": "加拿大",
        "type": "电影",
        "genre": "恐怖 / 科幻",
        "oneLine": "安大略省小镇的广播电台在暴雪夜收到一段信号，任何人只要重复听到的词就会变成杀人狂。"
    },
    {
        "title": "圣诞树2：迟到的情书",
        "href": "video/movie-0542.html",
        "cover": "92.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "家庭剧情",
        "oneLine": "一颗圣诞装饰球里藏着一封写于1941年的情书，穿越时空送到当代，引发两代人的寻亲之旅。"
    },
    {
        "title": "灵笼：研发记录",
        "href": "video/movie-0543.html",
        "cover": "93.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画、科幻、纪录片",
        "oneLine": "揭开神作《灵笼》背后的创作秘密，从废土美学到脊椎骨剑的诞生，记录一群动画人的疯狂与坚持。"
    },
    {
        "title": "情报：锁定第二季",
        "href": "video/movie-0544.html",
        "cover": "94.jpg",
        "year": "2017",
        "region": "美国",
        "type": "电视剧",
        "genre": "悬疑, 犯罪",
        "oneLine": "一个患有自闭症的天才分析师，用他那台超级电脑锁定恐怖分子，却发现黑手就在身边。"
    },
    {
        "title": "阿珠与阿花前传",
        "href": "video/movie-0545.html",
        "cover": "95.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、青春、校园",
        "oneLine": "时间回到1987年，两个土气的高中女孩为了参加毕业舞会，决定“假扮”成最酷的辣妹，结果惹出一系列荒诞乌龙。"
    },
    {
        "title": "突围者",
        "href": "video/movie-0546.html",
        "cover": "96.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "悬疑 / 冒险",
        "oneLine": "六名互不相识的玩家受邀参加“百万奖金”密室逃脱，却发现自己被困的真实建筑正被定时炸弹倒计时。"
    },
    {
        "title": "13条命",
        "href": "video/movie-0547.html",
        "cover": "97.jpg",
        "year": "2022",
        "region": "美国 / 泰国",
        "type": "电影",
        "genre": "剧情 / 惊悚 / 传记",
        "oneLine": "暴雨封洞，13人被困，一场分秒必争的跨国水下大营救。"
    },
    {
        "title": "魔鬼二世",
        "href": "video/movie-0548.html",
        "cover": "98.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "oneLine": "基因科学家意外克隆出已故妻子，却发现“她”体内住着一个邪恶的远古意识。"
    },
    {
        "title": "小镇风云",
        "href": "video/movie-0549.html",
        "cover": "99.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 悬疑",
        "oneLine": "省城神探回乡奔丧，却发现全村人都在演戏，父亲死因另有隐情。"
    },
    {
        "title": "夜来恶魔",
        "href": "video/movie-0550.html",
        "cover": "100.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 民俗",
        "oneLine": "民俗学者进入一个每夜都要向“夜来恶魔”献上声音的闭塞山村，发现村民集体割掉舌头的真相。"
    },
    {
        "title": "一路风流",
        "href": "video/movie-0551.html",
        "cover": "101.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "喜剧, 公路",
        "oneLine": "两个损友为了追回被前女友带走的“传家宝”，踏上穷游之旅，一路邂逅各路美女和惊天乌龙。"
    },
    {
        "title": "非标准恋爱",
        "href": "video/movie-0552.html",
        "cover": "102.jpg",
        "year": "2024",
        "region": "中国",
        "type": "电视剧",
        "genre": "爱情、喜剧",
        "oneLine": "170cm的女篮中锋与158cm的奶茶店男老板恋爱，他们面对的只有来自这个世界的“善意”嘲笑。"
    },
    {
        "title": "男人女人：恋爱手册",
        "href": "video/movie-0553.html",
        "cover": "103.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 喜剧 / 都市",
        "oneLine": "一本意外流传出去的绝密“恋爱手册”，让都市里的男男女女开始了一场关于真心的计算游戏。"
    },
    {
        "title": "美丽与动人",
        "href": "video/movie-0554.html",
        "cover": "104.jpg",
        "year": "2015",
        "region": "法国",
        "type": "电影",
        "genre": "爱情，剧情",
        "oneLine": "年过四十的过气超模与一名年轻摄影师擦出火花，但美丽皮囊之下，她被压抑多年的自我正在觉醒。"
    },
    {
        "title": "进击的鼓手",
        "href": "video/movie-0555.html",
        "cover": "105.jpg",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，音乐",
        "oneLine": "一个想成为顶级爵士鼓手的音乐学院学生，遇到了一位用极致暴力手段“激励”学生的魔鬼导师。"
    },
    {
        "title": "危机中的年轻人",
        "href": "video/movie-0556.html",
        "cover": "106.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "青春 / 社会 / 悬疑",
        "oneLine": "六个负债累累的年轻人参加一档真人秀，规则是：每淘汰一人，其债务由剩余五人平摊。"
    },
    {
        "title": "红伶劫",
        "href": "video/movie-0557.html",
        "cover": "107.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "民国、悬疑、女性",
        "oneLine": "越剧名伶在台上演《红楼梦》，每演一场，台下就有一个观众离奇死亡。"
    },
    {
        "title": "太阳有耳",
        "href": "video/movie-0558.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑、犯罪、剧情",
        "oneLine": "国家情报院最优秀的监听员，无意中截获了总统候选人的杀人密谋。"
    },
    {
        "title": "美国风情画2",
        "href": "video/movie-0559.html",
        "cover": "109.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 青春",
        "oneLine": "1985年的最后一个暑假，一群小镇青年开着改装车横跨三个州，只为追上一场只存在传说中、从未有人到达过的地下摇滚演唱会。"
    },
    {
        "title": "初恋从打嗝开始",
        "href": "video/movie-0560.html",
        "cover": "110.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情喜剧",
        "oneLine": "高一女生暗恋校草，却因一紧张就打嗝的怪病，在告白现场上演灾难级名场面。"
    },
    {
        "title": "马洛",
        "href": "video/movie-0561.html",
        "cover": "111.jpg",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "洛杉矶私家侦探马洛受托寻找失踪的女继承人，却卷入了一场涉及好莱坞与黑帮的阴谋。"
    },
    {
        "title": "闪电杀人鱼",
        "href": "video/movie-0562.html",
        "cover": "112.jpg",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖 / 奇幻 / 惊悚",
        "oneLine": "一条被雷电击中变异的巨型塘角鱼，为了报复人类污染，开始在雨季的泰国乡村展开高压电杀戮。"
    },
    {
        "title": "我爱推理",
        "href": "video/movie-0563.html",
        "cover": "113.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑, 喜剧, 校园",
        "oneLine": "全校第一的傲娇学霸和想当推理作家的废柴学姐，在只剩一人的推理社里破解校园日常谜案。"
    },
    {
        "title": "妮基塔第一季",
        "href": "video/movie-0564.html",
        "cover": "114.jpg",
        "year": "2010",
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 惊悚, 间谍",
        "oneLine": "一名死囚被训练成顶级杀手后叛逃，她要用“组织”教给她的一切，从外部彻底摧毁这个神秘机构。"
    },
    {
        "title": "未来水世界",
        "href": "video/movie-0565.html",
        "cover": "115.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻/冒险/末世",
        "oneLine": "冰川彻底融化200年后，人类在水上漂流，一名长着鳃的“怪物少年”可能是重返陆地的唯一钥匙。"
    },
    {
        "title": "化学婚姻",
        "href": "video/movie-0566.html",
        "cover": "116.jpg",
        "year": "2022",
        "region": "英国",
        "type": "电影",
        "genre": "科幻， 爱情",
        "oneLine": "政府推出“化学配对”系统，根据激素让每个人找到最合适的伴侣，但离婚率反而上升了200%。"
    },
    {
        "title": "我们村里的年轻人",
        "href": "video/movie-0567.html",
        "cover": "117.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 乡村振兴",
        "oneLine": "一群走出大山的年轻人集体返乡，用直播带货、民宿改造和农村电商，重新定义“留不下的城市，回不去的故乡”。"
    },
    {
        "title": "安邦定国志",
        "href": "video/movie-0568.html",
        "cover": "118.jpg",
        "year": "2020",
        "region": "英国",
        "type": "电视剧",
        "genre": "历史 / 战争 / 剧情",
        "oneLine": "公元9世纪，英格兰唯一被冠以“大帝”之名的阿尔弗雷德，如何从一个哮喘少年成为维京人的噩梦。"
    },
    {
        "title": "与谁共眠",
        "href": "video/movie-0569.html",
        "cover": "119.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "惊悚, 悬疑, 心理",
        "oneLine": "女子入住网红民宿后，发现每晚熟睡时，总有人躺在她身旁的枕头凹陷里。"
    },
    {
        "title": "销魂花月夜",
        "href": "video/movie-0570.html",
        "cover": "120.jpg",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 情色, 剧情",
        "oneLine": "三十年代上海滩，一位当红歌女与报社穷记者在战火前夕，谱写出一段注定无法善终的销魂恋曲。"
    },
    {
        "title": "草莽双雄",
        "href": "video/movie-0571.html",
        "cover": "121.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作， 犯罪",
        "oneLine": "一个是黑道金牌打手，一个是卧底警察，两人被迫联手对抗共同的敌人。"
    },
    {
        "title": "遇见贵人",
        "href": "video/movie-0572.html",
        "cover": "122.jpg",
        "year": "2024",
        "region": "新加坡",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "oneLine": "四个走投无路的穷鬼同时盯上了一个来狮城隐居的过气富豪，却意外被他培养成了商业奇才。"
    },
    {
        "title": "琼斯的自由国度",
        "href": "video/movie-0573.html",
        "cover": "123.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 战争 / 历史",
        "oneLine": "近未来美国经济崩溃，一个名叫琼斯的工程师带领社区，宣布从联邦政府中独立。"
    },
    {
        "title": "被打破的爱情计划",
        "href": "video/movie-0574.html",
        "cover": "124.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情, 喜剧, 剧情",
        "oneLine": "她制定了完美的“三个月让竹马爱上我”计划，第一天就成功领了结婚证，没想到竹马当晚就把离婚协议拍在桌上，附言：“计划很周密，但我是另一个双胞胎。”"
    },
    {
        "title": "负债甜心",
        "href": "video/movie-0575.html",
        "cover": "125.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电视剧",
        "genre": "喜剧，爱情，生活",
        "oneLine": "背负两千万债务的穷女孩混进顶级名媛圈找金龟婿还债，却发现这群富婆比她更穷——全在假装有钱。"
    },
    {
        "title": "民主青年进行曲",
        "href": "video/movie-0576.html",
        "cover": "126.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 青春",
        "oneLine": "1940年代，五个不同出身的青年在西南联大相遇，他们的友谊在时代洪流中被反复撕扯。"
    },
    {
        "title": "喜剧 站前竞马",
        "href": "video/movie-0577.html",
        "cover": "127.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 运动",
        "oneLine": "昭和30年代，温泉小镇站前举办了一场离奇的“人背人”竞马大赛，赢家奖品是一年的酱油。"
    },
    {
        "title": "名模@爆料",
        "href": "video/movie-0578.html",
        "cover": "128.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电视剧 (20集)",
        "genre": "悬疑 / 犯罪 / 时尚",
        "oneLine": "当红名模在直播中突然掏出U盘，曝光了整个时尚圈最肮脏的性侵链条，然后坠楼。"
    },
    {
        "title": "杀出绝地",
        "href": "video/movie-0579.html",
        "cover": "129.jpg",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争, 剧情, 历史",
        "oneLine": "长征途中，一支掉队的红军小分队被困原始森林，身后是追兵，前方是未知的绝境。"
    },
    {
        "title": "战争之后",
        "href": "video/movie-0580.html",
        "cover": "130.jpg",
        "year": "2017",
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情 / 战争 / 家庭",
        "oneLine": "波黑战争难民在丹麦生活十年后，偶遇当年集中营的仇敌，决定用一场不受法律认可的“私审判”来了结。"
    },
    {
        "title": "拳外重生",
        "href": "video/movie-0581.html",
        "cover": "131.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动 / 剧情",
        "oneLine": "一场车祸夺走了他的双腿，却让他发现自己的拳头才是真正的武器——无腿拳王用双拳“走”上了擂台。"
    },
    {
        "title": "少年心事",
        "href": "video/movie-0582.html",
        "cover": "132.jpg",
        "year": "2024",
        "region": "印度",
        "type": "剧集",
        "genre": "剧情，歌舞",
        "oneLine": "四个高中生创办了地下性教育电台，却意外引发了全校关于欲望与羞耻的大讨论。"
    },
    {
        "title": "孤国春秋 第四季",
        "href": "video/movie-0583.html",
        "cover": "133.jpg",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "历史, 动作, 战争",
        "oneLine": "乌特雷德跨越北海回到挪威，却发现他父亲的旧敌正与新的“维京雄狮”结盟，意图踏平英格兰。"
    },
    {
        "title": "奇谈",
        "href": "video/movie-0584.html",
        "cover": "134.jpg",
        "year": "2007",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖、悬疑、剧情",
        "oneLine": "1942年京城（首尔）的一家医院里，三个互不相干的人遭遇了三段互相交织的诡异灵异事件。"
    },
    {
        "title": "拳霸少年2",
        "href": "video/movie-0585.html",
        "cover": "135.jpg",
        "year": "2011",
        "region": "泰国",
        "type": "电影",
        "genre": "动作 / 冒险",
        "oneLine": "为救出被黑帮抓走的哥哥，山村少年深入金三角地下拳场，用泰拳打出自己的一片天。"
    },
    {
        "title": "养猪场的奇迹国语",
        "href": "video/movie-0586.html",
        "cover": "136.jpg",
        "year": "2016",
        "region": "爱沙尼亚 / 中国大陆 (配音)",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "一个破产的养猪场，因为一头会说人话的猪，引来了全世界的资本家。"
    },
    {
        "title": "冤家宜结不宜解国语",
        "href": "video/movie-0587.html",
        "cover": "137.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 爱情, 家庭",
        "oneLine": "两个因家族土地纠纷世代为仇的年轻人，被长辈逼着结婚，却在斗嘴中真爱上对方。"
    },
    {
        "title": "夏夜知君暖",
        "href": "video/movie-0588.html",
        "cover": "138.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 青春 / 治愈",
        "oneLine": "一个五音不全的物理系女生，为了学分加入合唱团，却发现指挥是自己多年前网恋“失踪”的笔友。"
    },
    {
        "title": "逆转胜",
        "href": "video/movie-0589.html",
        "cover": "139.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "体育， 剧情， 励志",
        "oneLine": "昔日乒乓球天才因伤退役沦为酒鬼，直到遇见一个身患绝症却想打全国赛的小学生。"
    },
    {
        "title": "情难断",
        "href": "video/movie-0590.html",
        "cover": "140.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情 / 家庭",
        "oneLine": "一封迟到了四十年的情书，掀开了两个家族三代人之间剪不断理还乱的感情纠葛。"
    },
    {
        "title": "铁线蕨青",
        "href": "video/movie-0591.html",
        "cover": "141.jpg",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "悬疑, 犯罪, 文艺",
        "oneLine": "一幅价值连城的古画失窃，唯一的线索是画中一片被染成铁线蕨青的叶子，牵出一个暗网拍卖黑市。"
    },
    {
        "title": "地下巧克力",
        "href": "video/movie-0592.html",
        "cover": "142.jpg",
        "year": "2014",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻 / 家庭 / 冒险",
        "oneLine": "兄妹俩在伦敦地铁废弃隧道中发现一座全由巧克力建成的神秘工厂，而厂长是一只会说人话的獾。"
    },
    {
        "title": "卫国保家",
        "href": "video/movie-0593.html",
        "cover": "143.jpg",
        "year": "1950",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 战争",
        "oneLine": "一个东北农村的普通家庭，在抗美援朝战争爆发后，面临着送子参军与保卫家园的情感抉择，展现了那个年代最朴素的家国情怀。"
    },
    {
        "title": "昨天、今天和明天",
        "href": "video/movie-0594.html",
        "cover": "144.jpg",
        "year": "1963",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "oneLine": "三个不同的意大利女人，在三个时代里，用各自奇特的方式维持着爱情与金钱的平衡。"
    },
    {
        "title": "水俣病",
        "href": "video/movie-0595.html",
        "cover": "145.jpg",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 社会 / 历史",
        "oneLine": "1971年，战地摄影师尤金·史密斯带着相机闯入水俣病禁区，用一张照片改变了世界。"
    },
    {
        "title": "新媳妇来了",
        "href": "video/movie-0596.html",
        "cover": "146.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭 / 喜剧 / 爱情",
        "oneLine": "北京白领闪婚嫁到东北农村，新婚夜发现全村的年轻媳妇都在等她搞“乡村振兴”。"
    },
    {
        "title": "非人哉",
        "href": "video/movie-0597.html",
        "cover": "147.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧，动画，奇幻",
        "oneLine": "神仙妖怪们被迫在现代都市做起了打工人，九月、小玉、哮天犬的合租生活鸡飞狗跳。"
    },
    {
        "title": "叫我复仇者",
        "href": "video/movie-0598.html",
        "cover": "148.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 复仇",
        "oneLine": "女儿被霸凌致死却判罚过轻，老实父亲用自己的法律知识策划了一场针对整个司法链条的精密屠杀。"
    },
    {
        "title": "侦察兵",
        "href": "video/movie-0599.html",
        "cover": "149.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "战争 / 悬疑 / 历史",
        "oneLine": "1944年，一名伪装成国军侦察兵的共产党间谍，在敌后上演致命骗局。"
    },
    {
        "title": "吻乐队与公园幽灵",
        "href": "video/movie-0600.html",
        "cover": "150.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，奇幻，音乐",
        "oneLine": "一支三流摇滚乐队发现他们排练的公园里住着一个爱听歌的毒舌鬼魂。"
    },
    {
        "title": "我的阿米什人双重生活",
        "href": "video/movie-0601.html",
        "cover": "1.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、传记、宗教",
        "oneLine": "一个在阿米什社区长大的年轻人，白天没有电和车，晚上却在城市里做黑客，过着双重生活。"
    },
    {
        "title": "情人节大屠杀",
        "href": "video/movie-0602.html",
        "cover": "2.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚 / 悬疑",
        "oneLine": "每年情人节，某小镇都会发生情侣虐杀案，今年凶手贴出预告：要杀满14颗心脏。"
    },
    {
        "title": "下午休息",
        "href": "video/movie-0603.html",
        "cover": "3.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情文艺",
        "oneLine": "一个中产阶级男人每天下午两小时偷情时间，却逐渐发现自己爱的是这段“逃跑”本身。"
    },
    {
        "title": "流氓医生国语",
        "href": "video/movie-0604.html",
        "cover": "4.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "一个被吊销执照的天才外科医生，躲进贫民窟用偏方和手术刀继续救人，直到黑帮老大拿着枪来找他割阑尾。"
    },
    {
        "title": "春夏秋冬又一春",
        "href": "video/movie-0605.html",
        "cover": "5.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 哲学",
        "oneLine": "一个男人在监狱里过了二十年，出狱后发现当年他杀的人，转世成了他的孙子。"
    },
    {
        "title": "宝贝赳赳第五季",
        "href": "video/movie-0606.html",
        "cover": "6.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "儿童，益智，家庭",
        "oneLine": "小英雄赳赳意外获得了一枚能听懂动物心声的神秘徽章，开启了一场拯救森林运动会的冒险。"
    },
    {
        "title": "如此好运",
        "href": "video/movie-0607.html",
        "cover": "7.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 奇幻, 爱情",
        "oneLine": "一个倒霉透顶的男人买到了一张号称能改写命运的“好运彩票”，却发现每次好运都伴随着一个荒诞的代价。"
    },
    {
        "title": "码头大决斗",
        "href": "video/movie-0608.html",
        "cover": "8.jpg",
        "year": "1978",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪",
        "oneLine": "码头装卸工阿龙发现结拜大哥是贩毒头目，他必须在兄弟情与正义之间做出选择。"
    },
    {
        "title": "摇滚都市第三季",
        "href": "video/movie-0609.html",
        "cover": "9.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "音乐、奇幻",
        "oneLine": "东京被沉默结界笼罩，所有音乐消失，四个女孩必须用摇滚的力量重新“唱”回声音。 当全世界都忘了什么是“节奏”，一支没人记得的乐队用鼓点唤醒了这座死去的城市。"
    },
    {
        "title": "夜风",
        "href": "video/movie-0610.html",
        "cover": "10.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "深夜电台主持人收到一封来自十年前的匿名信，信里说：今夜的风，和你离开那晚一模一样。"
    },
    {
        "title": "县界",
        "href": "video/movie-0611.html",
        "cover": "11.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "oneLine": "一个被两县踢来踢去的“三不管”地带，五名弃子联合起来用一本假账本扳倒了两个县的贪官网。"
    },
    {
        "title": "钢铁玫瑰",
        "href": "video/movie-0612.html",
        "cover": "12.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作/剧情",
        "oneLine": "一名退伍女兵成为国企驻海外项目女保镖，不仅要保护领导安全，还要揪出出卖国家机密的“内鬼”。"
    },
    {
        "title": "妈妈为我嫁",
        "href": "video/movie-0613.html",
        "cover": "13.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "剧情, 家庭, 伦理",
        "oneLine": "母亲代替女儿嫁给了富豪老头，却发现这场婚姻是女儿与富豪联手设下的圈套。"
    },
    {
        "title": "阿加莎与谋杀的真谛",
        "href": "video/movie-0614.html",
        "cover": "14.jpg",
        "year": "2019",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑 / 传记 / 犯罪",
        "oneLine": "1926年阿加莎·克里斯蒂失踪的11天里，她并非失忆，而是在追查一起真实谋杀。"
    },
    {
        "title": "墨西哥太平间的九具尸体",
        "href": "video/movie-0615.html",
        "cover": "15.jpg",
        "year": "2026",
        "region": "美国 / 墨西哥",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "oneLine": "一场暴雨困住了太平间里的九个人，他们发现每一具尸体都对应着自己该死的理由。"
    },
    {
        "title": "新闻女王国语",
        "href": "video/movie-0616.html",
        "cover": "16.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情, 职场",
        "oneLine": "电视台两大新闻女王明争暗斗，直到网络媒体崛起，她们才发现自己早已是传统媒体的“遗民”。"
    },
    {
        "title": "狐妖传1聂小倩",
        "href": "video/movie-0617.html",
        "cover": "17.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "古装 / 爱情 / 惊悚",
        "oneLine": "这次不是女鬼勾引书生，而是书生为了救女鬼，甘愿变成妖魔。"
    },
    {
        "title": "拥抱春天罗曼史",
        "href": "video/movie-0618.html",
        "cover": "18.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "失意的音乐制作人来到乡下疗伤，与一个守候着樱花树的年迈女画家产生了奇妙的羁绊。"
    },
    {
        "title": "谁是被害者",
        "href": "video/movie-0619.html",
        "cover": "19.jpg",
        "year": "2020",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "亚斯伯格症的鉴识官方毅任，发现女儿卷入连环命案，为了掩盖证据开始破坏自己经手的案件。"
    },
    {
        "title": "高中歌剧团☆男子组",
        "href": "video/movie-0620.html",
        "cover": "20.jpg",
        "year": "2016",
        "region": "日本",
        "type": "剧集",
        "genre": "校园 / 音乐 / 喜剧",
        "oneLine": "一群被迫加入歌剧社的男生，为了保住社团，必须在学园祭上演出一场全男版《卡门》。"
    },
    {
        "title": "双雄斗智",
        "href": "video/movie-0621.html",
        "cover": "21.jpg",
        "year": "1976",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚， 犯罪， 剧情",
        "oneLine": "天才犯罪心理学家与逍遥法外的连环杀手展开了一场跨越全美的生死对弈。"
    },
    {
        "title": "杀出银河系",
        "href": "video/movie-0622.html",
        "cover": "22.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻",
        "oneLine": "银河系最危险的监狱里，五个死刑犯必须合作才能活着逃出去。"
    },
    {
        "title": "马诺莱特",
        "href": "video/movie-0623.html",
        "cover": "23.jpg",
        "year": "2025",
        "region": "西班牙",
        "type": "电影 传记 / 剧情",
        "genre": "传记 / 爱情",
        "oneLine": "西班牙最伟大的斗牛士马诺莱特，在荣耀与死亡之间最后的爱情与抉择。"
    },
    {
        "title": "精灵鼠小弟",
        "href": "video/movie-0624.html",
        "cover": "24.jpg",
        "year": "2024",
        "region": "美国 / 德国",
        "type": "电影",
        "genre": "喜剧 / 家庭 / 奇幻",
        "oneLine": "一只渴望成为摇滚巨星的小老鼠，误打误撞闯入了人类世界的超级乐队选秀大赛。"
    },
    {
        "title": "依然消失",
        "href": "video/movie-0625.html",
        "cover": "25.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑、剧情",
        "oneLine": "十年前失踪的女孩突然归来，声称自己是被外星人带走，但她的心理医生发现她体内有一个不该存在的芯片。"
    },
    {
        "title": "123，太阳",
        "href": "video/movie-0626.html",
        "cover": "26.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 奇幻",
        "oneLine": "一个永远活在“前一天”的送报少年，遇到一个永远在等“明天”的失明女孩。"
    },
    {
        "title": "重返大荒野",
        "href": "video/movie-0627.html",
        "cover": "27.jpg",
        "year": "2024",
        "region": "美国 / 加拿大",
        "type": "电影",
        "genre": "冒险 / 剧情 / 家庭",
        "oneLine": "城市少年被送回荒野与猎人祖父生活，一场空难后，他必须带领受伤的祖父走出无人区。"
    },
    {
        "title": "水晶仙女与魔法仙人掌",
        "href": "video/movie-0628.html",
        "cover": "28.jpg",
        "year": "2017",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻，冒险，动画",
        "oneLine": "一个自称仙女的叛逆少女，必须和一棵会说话的仙人掌合作，阻止沙漠吞噬她的城市。"
    },
    {
        "title": "恋上你的床粤语",
        "href": "video/movie-0629.html",
        "cover": "29.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "爱情，喜剧",
        "oneLine": "三位床伴闺蜜立下“只恋床不上心”的规矩，直到其中一人发现自己爱上了固定床伴。"
    },
    {
        "title": "鬼界超级混蛋",
        "href": "video/movie-0630.html",
        "cover": "30.jpg",
        "year": "2027",
        "region": "日本",
        "type": "动画剧集",
        "genre": "动作、奇幻、黑色幽默",
        "oneLine": "在地狱的垃圾堆里诞生的怪物小子，集结了一群被六道抛弃的“混蛋”，发誓要推翻阎王的暴政。"
    },
    {
        "title": "辛亥革命2011",
        "href": "video/movie-0631.html",
        "cover": "31.jpg",
        "year": "2011",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 战争 / 传记",
        "oneLine": "从广州起义到武昌首义，全景式展现那群试图用火把照亮古老帝国黑夜的理想主义者们最后的十年。"
    },
    {
        "title": "我在中国当农人",
        "href": "video/movie-0632.html",
        "cover": "32.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀 / 纪实",
        "oneLine": "六位城市艺人放下手机，去中国最偏远的山村真刀真枪种一年地。"
    },
    {
        "title": "羞耻1968",
        "href": "video/movie-0633.html",
        "cover": "33.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "历史 / 剧情",
        "oneLine": "1968年巴黎五月风暴中，一对哲学家夫妇分别站队学生和政府，他们的婚姻成为革命与人性的试验场。"
    },
    {
        "title": "魔鬼尸篇",
        "href": "video/movie-0634.html",
        "cover": "34.jpg",
        "year": "2026",
        "region": "意大利",
        "type": "电影",
        "genre": "恐怖, 铅黄电影",
        "oneLine": "一位失明的雕塑家创作出了完美的雕像，而城市里每出现一具尸体，雕像就更像他死去的妻子。"
    },
    {
        "title": "血麒麟之关东宝藏",
        "href": "video/movie-0635.html",
        "cover": "35.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 冒险, 悬疑",
        "oneLine": "民国东北，一张血染的麒麟皮引发各路势力疯狂争夺，底下埋着日本关东军最后的秘密。"
    },
    {
        "title": "守护者：苏联超级英雄",
        "href": "video/movie-0636.html",
        "cover": "36.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "动作, 科幻, 超级英雄",
        "oneLine": "冷战时期，苏联秘密改造了四位超能力者作为终极武器，他们被封存至今，却被冷战时期的旧敌唤醒。"
    },
    {
        "title": "七座墓地",
        "href": "video/movie-0637.html",
        "cover": "37.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "悬疑, 惊悚, 冒险",
        "oneLine": "七座诡异的墓地对应七种原罪，一个背负诅咒的男人必须在七天内找出自己的葬身之地。"
    },
    {
        "title": "大蓝湖",
        "href": "video/movie-0638.html",
        "cover": "38.jpg",
        "year": "2011",
        "region": "香港",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "离家十五年的女儿回到香港乡下，发现记忆中的大蓝湖早已干涸，母亲却一直假装它还在。"
    },
    {
        "title": "出云之月",
        "href": "video/movie-0639.html",
        "cover": "39.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "历史 / 动作",
        "oneLine": "月食之夜，一名盲眼能剧乐师凭借听觉连杀十七名武士，只为给三百年前的祖先复仇。"
    },
    {
        "title": "冠军马王",
        "href": "video/movie-0640.html",
        "cover": "40.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "运动 / 励志",
        "oneLine": "一匹被遗弃的瘦弱马驹，一个负债累累的前骑师，他们唯一的赌注就是成为“冠军马王”。"
    },
    {
        "title": "露西亚之后",
        "href": "video/movie-0641.html",
        "cover": "41.jpg",
        "year": "2022",
        "region": "西班牙 / 墨西哥",
        "type": "电影",
        "genre": "剧情 / 惊悚",
        "oneLine": "女儿露西亚在校遭霸凌后陷入沉默，母亲决定化身为校园里的隐形守护者，展开一场冷静的报复。"
    },
    {
        "title": "大熊",
        "href": "video/movie-0642.html",
        "cover": "42.jpg",
        "year": "1988",
        "region": "法国 / 美国",
        "type": "电影",
        "genre": "冒险 / 剧情",
        "oneLine": "一只幼熊在猎人追捕下失去母亲，它必须依靠一头受伤的成年公熊，在原始森林里求生。"
    },
    {
        "title": "神经侠侣粤语",
        "href": "video/movie-0643.html",
        "cover": "43.jpg",
        "year": "2005",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作 / 爱情",
        "oneLine": "警队卧底阿杰伪装成精神病患者入住精神病院，结果发现他的搭档是真疯子，而院长的病人名单上有全港黑帮大佬。"
    },
    {
        "title": "笑春风",
        "href": "video/movie-0644.html",
        "cover": "44.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装 / 武侠 / 爱情",
        "oneLine": "江湖最后一位女杀手，接到的最后一单任务是：杀光所有用剑的人。"
    },
    {
        "title": "波普先生的企鹅",
        "href": "video/movie-0645.html",
        "cover": "45.jpg",
        "year": "2011",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，家庭",
        "oneLine": "一个精明的地产商继承了父亲的遗产——六只活企鹅，他的完美公寓和生活瞬间崩溃。"
    },
    {
        "title": "灵魂摆渡",
        "href": "video/movie-0646.html",
        "cover": "46.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑，奇幻，恐怖",
        "oneLine": "在一家午夜才开门的便利店，店主能帮助执念太深的灵魂完成未竟的心愿。"
    },
    {
        "title": "青春之马",
        "href": "video/movie-0647.html",
        "cover": "47.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 运动 / 青春",
        "oneLine": "内蒙古草原上的高考落榜生，为了不回乡放羊，加入了一支由混混、会计和厨师组成的“疯子马球队”。"
    },
    {
        "title": "手足情",
        "href": "video/movie-0648.html",
        "cover": "48.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 家庭",
        "oneLine": "亲兄弟二人，一个是刚出狱的莽夫，一个是即将坐牢的警察，他们必须在72小时内互换身份。"
    },
    {
        "title": "狮城之歌1958",
        "href": "video/movie-0649.html",
        "cover": "49.jpg",
        "year": "2024",
        "region": "新加坡",
        "type": "电影",
        "genre": "剧情，历史",
        "oneLine": "1958年，在新加坡独立前夕，一群不同种族的街边小贩，为保住生计与殖民政府抗争。"
    },
    {
        "title": "幸福里九号",
        "href": "video/movie-0650.html",
        "cover": "50.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情 / 家庭",
        "oneLine": "一栋老公房的加装电梯投票，牵出九户人家三十年的恩怨。"
    },
    {
        "title": "吸血鬼侦探",
        "href": "video/movie-0651.html",
        "cover": "51.jpg",
        "year": "2016",
        "region": "韩国",
        "type": "剧集",
        "genre": "刑侦奇幻",
        "oneLine": "落魄警探在遇袭变成吸血鬼后，利用吸血时读取记忆的能力侦破陈年悬案。"
    },
    {
        "title": "跃动火鹤",
        "href": "video/movie-0652.html",
        "cover": "52.jpg",
        "year": "2019",
        "region": "西班牙",
        "type": "电影",
        "genre": "歌舞 / 剧情",
        "oneLine": "被家暴的妻子学会弗拉明戈后，用舞步把丈夫送进了监狱。"
    },
    {
        "title": "阴森小镇",
        "href": "video/movie-0653.html",
        "cover": "53.jpg",
        "year": "2017",
        "region": "西班牙",
        "type": "剧集",
        "genre": "恐怖, 悬疑",
        "oneLine": "一名警探回到童年小镇调查儿童失踪案，却发现全镇居民都记得一个不存在的女孩。"
    },
    {
        "title": "海王",
        "href": "video/movie-0654.html",
        "cover": "54.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 奇幻 / 冒险",
        "oneLine": "不被看好的混血王子深入马里亚纳海沟，寻找能平息七海战乱的三叉戟。"
    },
    {
        "title": "津门奇案之撞车",
        "href": "video/movie-0655.html",
        "cover": "55.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑，犯罪",
        "oneLine": "民国天津，一辆失控的洋车撞死了一名买办，巡捕房却发现凶手的目的是引发一场连环复仇。"
    },
    {
        "title": "美好条纹",
        "href": "video/movie-0656.html",
        "cover": "56.jpg",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭",
        "oneLine": "患有自闭症的儿子只穿条纹衣服，母亲用二十年时间，为他织出了整个衣柜。"
    },
    {
        "title": "移动迷宫2",
        "href": "video/movie-0657.html",
        "cover": "57.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 惊悚",
        "oneLine": "逃出迷宫只是开始，托马斯发现他们只是一场更大“精神嫁接”实验的前期小白鼠。"
    },
    {
        "title": "指尖相触，恋恋不舍",
        "href": "video/movie-0658.html",
        "cover": "58.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "聋哑女孩遇到了一个愿意为她学手语的男孩，但男孩说：“我不是为了和你沟通，我是为了听清你沉默的声音。”"
    },
    {
        "title": "特务行不行",
        "href": "video/movie-0659.html",
        "cover": "59.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "oneLine": "被降级到档案室的最差特工，错将一份外卖订单当作终极刺杀密令，开启了全城追杀。"
    },
    {
        "title": "表姐，你好嘢！2",
        "href": "video/movie-0660.html",
        "cover": "60.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 动作, 家庭",
        "oneLine": "表姐从广东乡下到香港参加武术比赛，却阴差阳错卷入国际珠宝大盗的闹剧。"
    },
    {
        "title": "小镇狂花",
        "href": "video/movie-0661.html",
        "cover": "61.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧 / 犯罪 / 女性",
        "oneLine": "三个失败女性返乡开KTV，意外挖出埋在地下室的毒品工厂，被迫与毒贩展开“非专业”对决。"
    },
    {
        "title": "僵尸启示录：救赎",
        "href": "video/movie-0662.html",
        "cover": "62.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 科幻, 恐怖",
        "oneLine": "病毒爆发十年后，一名前牧师发现丧尸并非无脑怪物，它们正在进化出对“罪恶”的痛觉。"
    },
    {
        "title": "高压行动",
        "href": "video/movie-0663.html",
        "cover": "63.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 悬疑",
        "oneLine": "一名顶级谈判专家被自己亲手送进监狱的罪犯劫持，她必须用心理战术在十分钟内瓦解一场监狱暴动。"
    },
    {
        "title": "契约夫妇",
        "href": "video/movie-0664.html",
        "cover": "64.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 都市",
        "oneLine": "因公司股权对赌协议，两个死对头签下一年婚姻契约，却在婚礼当晚发现对方就是网恋三年的“灵魂伴侣”。"
    },
    {
        "title": "这个大叔不太囧",
        "href": "video/movie-0665.html",
        "cover": "65.jpg",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 家庭",
        "oneLine": "苛刻的单身金领高管因一次雷击，灵魂穿越到了最讨厌的废柴大叔实习生身体里。"
    },
    {
        "title": "老子我最大",
        "href": "video/movie-0666.html",
        "cover": "66.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "犯罪 / 黑色喜剧 / 动作",
        "oneLine": "首尔最大黑帮的二当家被手下背叛后装死躲进一家养老院，却发现这里的老人全都是曾经叱咤风云的犯罪大佬。"
    },
    {
        "title": "迷失永远",
        "href": "video/movie-0667.html",
        "cover": "67.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 悬疑, 爱情",
        "oneLine": "一对决定离婚的夫妻在最后一次公路旅行中，陷入了一个永远找不到出口的时间迷宫。"
    },
    {
        "title": "黑客",
        "href": "video/movie-0668.html",
        "cover": "68.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪科技",
        "oneLine": "一名退休黑客被卷入国家级数据战，却发现幕后黑手正是当年教他写代码的恩师。"
    },
    {
        "title": "咀对咀",
        "href": "video/movie-0669.html",
        "cover": "69.jpg",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "oneLine": "电影配音公司里，大嗓门的女汉子与娘娘腔的男神互为死对头，却在帮同一部爱情片配音时假戏真做。"
    },
    {
        "title": "震撼效应",
        "href": "video/movie-0670.html",
        "cover": "70.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 惊悚",
        "oneLine": "一场大地震后，幸存者发现自己只要跺脚，就能引发周围环境的局部震荡。"
    },
    {
        "title": "网事情缘",
        "href": "video/movie-0671.html",
        "cover": "71.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情剧情",
        "oneLine": "1999年，两个高考失利的少年在本地聊天室相遇，用一整夏天的ICQ语音，治愈了彼此的失败。"
    },
    {
        "title": "丽贝卡",
        "href": "video/movie-0672.html",
        "cover": "72.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑，惊悚，剧情",
        "oneLine": "一个叫丽贝卡的女人突然出现在心理医生的诊室里，坚称医生杀了人，而她自己并不存在。"
    },
    {
        "title": "恋爱是黑暗",
        "href": "video/movie-0673.html",
        "cover": "73.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑，爱情，心理",
        "oneLine": "情报局女分析师的恋爱对象接连离奇死亡，她发现自己爱上的人全是敌方间谍。"
    },
    {
        "title": "推理笔记",
        "href": "video/movie-0674.html",
        "cover": "74.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑 / 校园 / 推理",
        "oneLine": "一个废柴大学生捡到天才遗落的推理笔记，被迫与“笔记主人”的灵魂一起破案。"
    },
    {
        "title": "黑暗死亡可怕",
        "href": "video/movie-0675.html",
        "cover": "75.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "恐怖，悬疑",
        "oneLine": "十个互不相识的人被困在停尸房，他们必须讲述自己最恐惧的死亡方式，否则真正的死亡就会降临。"
    },
    {
        "title": "灯塔情人",
        "href": "video/movie-0676.html",
        "cover": "76.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "布列塔尼孤岛灯塔看守人去世后，他的妻子发现四十年来每一封“寄给丈夫”的情书，都是丈夫自己写的。"
    },
    {
        "title": "里斯本记忆迷宫",
        "href": "video/movie-0677.html",
        "cover": "77.jpg",
        "year": "2021",
        "region": "葡萄牙",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "oneLine": "一个女人在里斯本醒来，失去了所有记忆，而她手中的钥匙打开了这座城市十二扇上锁的门。"
    },
    {
        "title": "劲辣红巨人",
        "href": "video/movie-0678.html",
        "cover": "78.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 奇幻, 动作",
        "oneLine": "失意厨师意外吞下变异辣椒，一愤怒就变成三米高的红巨人，却只想回去炒菜。"
    },
    {
        "title": "魔鬼赛门",
        "href": "video/movie-0679.html",
        "cover": "79.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "惊悚, 剧情, 心理",
        "oneLine": "天才体操少女每次重大失误前，耳边都会响起一个叫“赛门”的魔鬼低语。"
    },
    {
        "title": "爱摸你爱摸我",
        "href": "video/movie-0680.html",
        "cover": "80.jpg",
        "year": "2023",
        "region": "台湾",
        "type": "电影",
        "genre": "爱情 / 奇幻 / 喜剧",
        "oneLine": "一个触碰到别人就能看到对方爱情记忆的女孩，遇上一个什么都摸不到的神秘男人。"
    },
    {
        "title": "新老娘舅",
        "href": "video/movie-0681.html",
        "cover": "81.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市，调解，伦理，喜剧",
        "oneLine": "拥有心理学博士学位的叛逆富二代，为了气父亲，跑去当社区调解员，结果成了金牌“新老娘舅”。"
    },
    {
        "title": "侣行第三季",
        "href": "video/movie-0682.html",
        "cover": "82.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺 / 纪录片",
        "genre": "真人秀、旅行、冒险",
        "oneLine": "一对夫妻穿越战火中的中东，在废墟里捡到一张写满未知坐标的旧地图。"
    },
    {
        "title": "四大杀手",
        "href": "video/movie-0683.html",
        "cover": "83.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪 / 黑色幽默",
        "oneLine": "四个只想退休养老的顶级杀手开了一家茶餐厅，但前东家非要给他们办一场“退休金领取仪式”——只能用命来领。"
    },
    {
        "title": "阴阳路10：宣言咒",
        "href": "video/movie-0684.html",
        "cover": "84.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖惊悚",
        "oneLine": "在网上对着镜头许下的誓言会成真，但如果违背誓言，就会被誓言内容反噬。"
    },
    {
        "title": "你好，火焰蓝",
        "href": "video/movie-0685.html",
        "cover": "85.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "职业，剧情",
        "oneLine": "消防站长与急诊科医生在一次次生死救援中从针锋相对到生死相依。"
    },
    {
        "title": "我的美女同桌",
        "href": "video/movie-0686.html",
        "cover": "86.jpg",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "oneLine": "校花主动要求和全校倒数第一的学渣做同桌，因为她发现对方的作业本上写着她家破产的秘密。"
    },
    {
        "title": "东柱",
        "href": "video/movie-0687.html",
        "cover": "87.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "传记 / 历史 / 黑白",
        "oneLine": "韩国爱国诗人尹东柱在日据时期写下无数反抗诗歌，最终死在日本监狱里，年仅28岁。"
    },
    {
        "title": "情人节杀手",
        "href": "video/movie-0688.html",
        "cover": "88.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖悬疑",
        "oneLine": "情人节前夕，一款热门约会APP上出现神秘用户，所有和他约会的人都会在次日离奇死亡，且心脏被挖。"
    },
    {
        "title": "雾都猎狐",
        "href": "video/movie-0689.html",
        "cover": "89.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "1944年重庆大雾季，一个被捕的军统特工在押送途中失踪，而押送他的人里有一个是内鬼。"
    },
    {
        "title": "强袭魔女 剧场版",
        "href": "video/movie-0690.html",
        "cover": "90.jpg",
        "year": "2012",
        "region": "日本",
        "type": "电影",
        "genre": "动画 / 科幻 / 战斗",
        "oneLine": "异形军再次来袭，501航空团解散后，宫藤芳佳在故乡遇到了拥有神秘力量的少女。"
    },
    {
        "title": "猫行东方",
        "href": "video/movie-0691.html",
        "cover": "91.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻动画",
        "oneLine": "一只流浪猫能看见人类前世的影子，它决定帮助一名孤独少女找回九次轮回中走散的家人。"
    },
    {
        "title": "昨天、今天和明天",
        "href": "video/movie-0692.html",
        "cover": "92.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "一个患有阿尔茨海默症的老人，在意识错乱中穿梭于自己的青年、中年和晚年，试图修改导致女儿疏远的那一天。"
    },
    {
        "title": "说出我爱你",
        "href": "video/movie-0693.html",
        "cover": "93.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情, 家庭",
        "oneLine": "患有述情障碍的父亲无法表达爱意，女儿用二十年时间教他说出“我爱你”，却在他临终前听到了最意外的告白。"
    },
    {
        "title": "爱尔玛的情与欲",
        "href": "video/movie-0694.html",
        "cover": "94.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情文艺",
        "oneLine": "1920年代巴黎，富家少妇爱尔玛在丈夫、情人与女画家之间游走，用身体寻找自我的边界。"
    },
    {
        "title": "戴维",
        "href": "video/movie-0695.html",
        "cover": "95.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 传记 / 运动",
        "oneLine": "一个患有重度自闭症的少年被父亲逼着踢足球，直到教练发现他拥有用数学公式破解任何防线的惊人天赋。"
    },
    {
        "title": "真假学园0木更津乱斗篇",
        "href": "video/movie-0696.html",
        "cover": "96.jpg",
        "year": "2015",
        "region": "日本",
        "type": "电影",
        "genre": "动作 / 喜剧 / 校园",
        "oneLine": "木更津最强女番长与转校生的一战，意外揭开了当地两所高校长达三十年的宿怨谜团。"
    },
    {
        "title": "神秘礼物",
        "href": "video/movie-0697.html",
        "cover": "97.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "小镇居民接连收到匿名快递，拆开的人会看见自己“最美的死法”，并在七天后以该方式死亡。"
    },
    {
        "title": "失魂舍伍德第一季",
        "href": "video/movie-0698.html",
        "cover": "98.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情、悬疑、犯罪",
        "oneLine": "在诺丁汉郡的舍伍德森林发现两具尸骨，将1990年的矿工大罢工与现在的黑帮恩怨串联起来。"
    },
    {
        "title": "就算是爸爸，也想做",
        "href": "video/movie-0699.html",
        "cover": "99.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情",
        "oneLine": "五十岁的父亲瞒着家人报了街舞班，因为他的遗愿清单上写着“和女儿同台一次”。"
    },
    {
        "title": "西洋聊斋",
        "href": "video/movie-0700.html",
        "cover": "100.jpg",
        "year": "2026",
        "region": "英国 / 美国",
        "type": "剧集",
        "genre": "奇幻 / 恐怖 / 古装",
        "oneLine": "19世纪末，一位痴迷东方文化的英国民俗学者发现，伦敦的雾气里藏着的不是工业污染，而是来自《聊斋志异》的东方精怪。"
    },
    {
        "title": "神奇的孩子",
        "href": "video/movie-0701.html",
        "cover": "101.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 奇幻",
        "oneLine": "一个能将悲伤“搓”成星星的孩子，一个能与电器对话的孩子，一个能让时间暂停三秒的孩子——他们不是超级英雄，只是不被理解的小学生。"
    },
    {
        "title": "逃出梦幻岛",
        "href": "video/movie-0702.html",
        "cover": "102.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖、悬疑、惊悚",
        "oneLine": "五个曾遭受侵害的成年人重返梦幻岛，却发现真正的恶魔从未离开。"
    },
    {
        "title": "三部曲之斗法",
        "href": "video/movie-0703.html",
        "cover": "103.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 奇幻 / 悬疑",
        "oneLine": "茅山传人与南洋巫师展开生死斗法，每一场对决都是一个独立的“斗法单元”，最后三场比试的结果却颠覆一切。"
    },
    {
        "title": "上海快车",
        "href": "video/movie-0704.html",
        "cover": "104.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 动作 / 犯罪",
        "oneLine": "民国年间，一列从北平开往上海的豪华列车上，每个人都在撒谎，而尸体正一具具出现。"
    },
    {
        "title": "爱之奇迹",
        "href": "video/movie-0705.html",
        "cover": "105.jpg",
        "year": "2020",
        "region": "韩国",
        "type": "电影",
        "genre": "爱情、奇幻、剧情",
        "oneLine": "丈夫为救血癌妻子反复穿越回发病当天，每次改变过去都会失去一段共同记忆。"
    },
    {
        "title": "危机迷雾",
        "href": "video/movie-0706.html",
        "cover": "106.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑 / 刑侦 / 心理",
        "oneLine": "测谎专家卷入连环凶杀案，每次审讯的嫌疑人都是无辜的，而真正的凶手竟藏在他的记忆里。"
    },
    {
        "title": "一千零一靥",
        "href": "video/movie-0707.html",
        "cover": "107.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑, 奇幻",
        "oneLine": "一个能看见“笑靥”（执念化成的恐怖幻象）的摄影师，每集帮一个人解除心中的鬼。"
    },
    {
        "title": "父仇者",
        "href": "video/movie-0708.html",
        "cover": "108.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "动作、惊悚、犯罪",
        "oneLine": "女儿被连环杀手侮辱后自杀，父亲在法庭上没等到死刑，于是他自己买了一把枪，开始了猎杀。"
    },
    {
        "title": "希瓦伊",
        "href": "video/movie-0709.html",
        "cover": "109.jpg",
        "year": "2028",
        "region": "中国大陆 / 西藏",
        "type": "电影",
        "genre": "剧情 / 冒险 / 民族",
        "oneLine": "一个背负家族罪孽的藏族青年，与一只濒死的金雕幼鸟，在转山路上互相救赎。"
    },
    {
        "title": "仙姬送子",
        "href": "video/movie-0710.html",
        "cover": "110.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装， 奇幻， 剧情",
        "oneLine": "织女被贬下凡后，必须在人间完成“送子百户”的功德才能重返天庭，却发现每个孩子都背负着宿命劫难。"
    },
    {
        "title": "与母亲的蜜月",
        "href": "video/movie-0711.html",
        "cover": "111.jpg",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "喜剧, 剧情, 家庭",
        "oneLine": "新郎在婚礼上被甩，母亲为了安慰他，竟顶替新娘的位置，拉着他去完成那张无法退款的蜜月机票。"
    },
    {
        "title": "浪矢解忧杂货店国语",
        "href": "video/movie-0712.html",
        "cover": "112.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 奇幻 / 治愈",
        "oneLine": "一家只在夜晚开门的废弃杂货店，连接着过去与未来，投进的每一封烦恼信，都在改变着写信人的命运轨迹。"
    },
    {
        "title": "江户盗贼团五叶",
        "href": "video/movie-0713.html",
        "cover": "113.jpg",
        "year": "2010",
        "region": "日本",
        "type": "剧集",
        "genre": "历史，犯罪，剧情",
        "oneLine": "懦弱武士卷入神秘盗贼团“五叶”，发现每位成员都在用偷窃掩盖更黑暗的过往。"
    },
    {
        "title": "好莱坞巨猿",
        "href": "video/movie-0714.html",
        "cover": "114.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作，科幻",
        "oneLine": "一只基因复活的巨型金刚闯进好莱坞，不是为了破坏，而是想找当年拍它电影的导演“聊聊”。"
    },
    {
        "title": "皮娜",
        "href": "video/movie-0715.html",
        "cover": "115.jpg",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "传记 / 舞蹈 / 剧情",
        "oneLine": "舞者用三年时间复原皮娜未公开的遗作，却发现谱子里藏着一个谋杀暗示。"
    },
    {
        "title": "新报仇",
        "href": "video/movie-0716.html",
        "cover": "116.jpg",
        "year": "2026",
        "region": "中国大陆 / 香港",
        "type": "电影",
        "genre": "犯罪, 动作, 悬疑",
        "oneLine": "弟弟替天行道却在法庭上当众枪杀仇人，刑警哥哥亲手给他戴上手铐，却发现背后藏着更大阴谋。"
    },
    {
        "title": "情敌复仇战",
        "href": "video/movie-0717.html",
        "cover": "117.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "动作， 喜剧， 女性",
        "oneLine": "正宫、小三、小四意外结成同盟，对顶级海王渣男展开一场酣畅淋漓的智商碾压。"
    },
    {
        "title": "百战敢死队",
        "href": "video/movie-0718.html",
        "cover": "118.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "战争动作",
        "oneLine": "二战末期，一支由军事罪犯和逃兵组成的十人敢死队，被空投到敌后营救掌握诺曼底登陆关键情报的间谍。"
    },
    {
        "title": "混沌理论",
        "href": "video/movie-0719.html",
        "cover": "119.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 悬疑",
        "oneLine": "物理学家证明平行宇宙存在的那一刻，所有宇宙中的他都开始追杀自己。"
    },
    {
        "title": "复仇天使",
        "href": "video/movie-0720.html",
        "cover": "120.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "oneLine": "一名失聪的女护士深夜目睹黑帮灭口，被迫用日常器械和唇读技能展开绝命反击。"
    },
    {
        "title": "鬼斧魔差3",
        "href": "video/movie-0721.html",
        "cover": "121.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "杀人魔维克托戴上3D打印的新“魔差”，这次他的猎场是一座全息沉浸式鬼屋。"
    },
    {
        "title": "非死不可",
        "href": "video/movie-0722.html",
        "cover": "122.jpg",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "oneLine": "校园恶霸将欺凌视频传到网上，逼得女孩自杀。一年后，视频里所有出现过的霸凌者，都在直播中死于与视频相同的方式。"
    },
    {
        "title": "懒女苏",
        "href": "video/movie-0723.html",
        "cover": "123.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧, 都市, 女性",
        "oneLine": "全能卷王室友意外失忆后以为自己是懒女苏，而真正的懒女苏被迫假扮卷王，两人双双崩溃。"
    },
    {
        "title": "孤寒妇转性",
        "href": "video/movie-0724.html",
        "cover": "124.jpg",
        "year": "1976",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "一个被邻里唾骂的吝啬寡妇，在收养一个孤儿后，人生发生了意想不到的转变。"
    },
    {
        "title": "粘合平行线",
        "href": "video/movie-0725.html",
        "cover": "125.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "科幻 / 爱情",
        "oneLine": "物理系女生发明了粘合平行世界的胶水，却发现每一个世界里的自己，都爱着同一个不该爱的人。"
    },
    {
        "title": "黑色婚礼",
        "href": "video/movie-0726.html",
        "cover": "126.jpg",
        "year": "2023",
        "region": "西班牙",
        "type": "剧集",
        "genre": "悬疑 / 惊悚 / 犯罪",
        "oneLine": "一场全城瞩目的豪门婚礼，十位宾客收到匿名信：新人中有一人是杀人犯。"
    },
    {
        "title": "可塑性记忆",
        "href": "video/movie-0727.html",
        "cover": "127.jpg",
        "year": "2016",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻 / 恋爱 / 治愈",
        "oneLine": "人类与机器人恋爱，但他的女友只有九年记忆，倒计时还剩100天时，他决定求婚。"
    },
    {
        "title": "恭喜八婆",
        "href": "video/movie-0728.html",
        "cover": "128.jpg",
        "year": "2019",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "oneLine": "一个误发到客户手机上的“吐槽八婆”群组消息，引发了一场荒诞又爆笑的都市全城追击。"
    },
    {
        "title": "邪恶力量第五季",
        "href": "video/movie-0729.html",
        "cover": "129.jpg",
        "year": "2009",
        "region": "美国",
        "type": "电视剧",
        "genre": "奇幻",
        "oneLine": "天启降临，温彻斯特兄弟发现他们竟是天使与恶魔大战中的关键棋子——米迦勒与路西法的肉身。"
    },
    {
        "title": "好爸爸",
        "href": "video/movie-0730.html",
        "cover": "130.jpg",
        "year": "2008",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 家庭 / 喜剧",
        "oneLine": "一名退隐江湖的黑道大佬，为了不让女儿发现自己曾是古惑仔，极力扮演一个“普通职员”，然而过去的兄弟和仇家纷纷找上门来。"
    },
    {
        "title": "风速时光",
        "href": "video/movie-0731.html",
        "cover": "131.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动 / 青春",
        "oneLine": "三位退役自行车手在中年危机时重聚，决定再骑一次环青海湖赛段。"
    },
    {
        "title": "阿婆的槟榔",
        "href": "video/movie-0732.html",
        "cover": "132.jpg",
        "year": "2024",
        "region": "中国大陆 / 马来西亚",
        "type": "电影",
        "genre": "剧情 / 家庭 / 历史",
        "oneLine": "一个只会说海南话的百岁阿婆，用一口黑牙咬碎了槟榔，也咬破了一段被战火掩埋的南洋家族秘史。"
    },
    {
        "title": "炎女",
        "href": "video/movie-0733.html",
        "cover": "133.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻, 灾难",
        "oneLine": "东京爆发“人体自燃症”，感染者全是已婚女性，她们燃烧时绽放出的火焰据说像樱花一样美。"
    },
    {
        "title": "爱君如梦",
        "href": "video/movie-0734.html",
        "cover": "134.jpg",
        "year": "2003",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情",
        "oneLine": "社恐女护士为接近梦中情男报名拉丁舞课，却发现老师是个负债累累的骗子。"
    },
    {
        "title": "茧镇奇缘",
        "href": "video/movie-0735.html",
        "cover": "135.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑/爱情",
        "oneLine": "江南古镇四大家族的传人接连暴毙，死状如同被蚕丝勒毙，而凶手可能是镇上的蚕神。"
    },
    {
        "title": "艰难的爱情使命",
        "href": "video/movie-0736.html",
        "cover": "136.jpg",
        "year": "2022",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情 / 喜剧 / 动作",
        "oneLine": "菜鸟保镖的任务不是保护大小姐的安全，而是确保她顺利甩掉家里安排的七个相亲对象。"
    },
    {
        "title": "野性的邂逅",
        "href": "video/movie-0737.html",
        "cover": "137.jpg",
        "year": "2025",
        "region": "法国 / 加拿大",
        "type": "电影",
        "genre": "爱情、冒险、剧情",
        "oneLine": "女摄影师深入亚马逊雨林，与土著战士相爱，却在文明与野性间撕裂。"
    },
    {
        "title": "战鼓平息",
        "href": "video/movie-0738.html",
        "cover": "138.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争，剧情，人性",
        "oneLine": "一场惨烈战役后，敌对双方仅剩的三名士兵在一个山洞里共处了七天，从仇敌变成彼此活下去的理由。"
    },
    {
        "title": "猫样少女",
        "href": "video/movie-0739.html",
        "cover": "139.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 奇幻, 青春",
        "oneLine": "一个患有严重社交恐惧症的女孩，意外获得“变猫”的能力，她白天当人做电商运营，晚上变猫去偷听对手的商业机密。"
    },
    {
        "title": "乜代宗师国语",
        "href": "video/movie-0740.html",
        "cover": "140.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 喜剧",
        "oneLine": "一个靠模仿太极宗师行骗的街头混混，被迫教一群废柴小学生参加武术大赛。"
    },
    {
        "title": "先驱",
        "href": "video/movie-0741.html",
        "cover": "141.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史, 剧情",
        "oneLine": "在1921年的上海，一群平均年龄28岁的年轻人，在石库门里点燃了改变中国的火种。"
    },
    {
        "title": "算计：7日死亡游戏",
        "href": "video/movie-0742.html",
        "cover": "142.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "oneLine": "七个陌生人被关在一座酒店里，每天必须投票杀死一人，最后一个活着的人能拿走十亿日元。"
    },
    {
        "title": "寸土必争",
        "href": "video/movie-0743.html",
        "cover": "143.jpg",
        "year": "2025",
        "region": "土耳其",
        "type": "剧集",
        "genre": "剧情, 战争, 历史",
        "oneLine": "一战结束，土耳其妇女儿童拿起镰刀锄头，对抗占领军，守护最后一片麦田。"
    },
    {
        "title": "谈谈情练练武粤语",
        "href": "video/movie-0744.html",
        "cover": "144.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情动作",
        "oneLine": "两位中年离异男女在咏春拳馆里从互看不顺眼打到互生情愫，用拳头代替了情话。"
    },
    {
        "title": "边缘服务",
        "href": "video/movie-0745.html",
        "cover": "145.jpg",
        "year": "2020",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻，赛博朋克，动作",
        "oneLine": "专为赛博格提供临终关怀的“边缘服务”小队，卷入了一场足以毁灭贫民窟的阴谋。"
    },
    {
        "title": "悬崖下的妻子",
        "href": "video/movie-0746.html",
        "cover": "146.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑, 惊悚",
        "oneLine": "她在悬崖下被救起时失去了所有记忆，而丈夫说他们很恩爱——但身体上的伤痕不这么认为。"
    },
    {
        "title": "33号公路",
        "href": "video/movie-0747.html",
        "cover": "147.jpg",
        "year": "2023",
        "region": "泰国 / 中国内地",
        "type": "电影",
        "genre": "喜剧 / 公路 / 冒险",
        "oneLine": "一对分手边缘的情侣自驾泰国 33 号公路，意外卷入一桩佛像失窃案，被全村人当成了江洋大盗。"
    },
    {
        "title": "你是最美",
        "href": "video/movie-0748.html",
        "cover": "148.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "患了渐冻症的乡村教师，被妻子用木板车拖着，翻越一座座大山去给最后一个学生上课。"
    },
    {
        "title": "一年的路",
        "href": "video/movie-0749.html",
        "cover": "149.jpg",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "父亲确诊绝症后，叛逆的儿子开车带他回乡，这一年里，每个服务区都争吵，每个里程碑都和解。"
    },
    {
        "title": "人细多计",
        "href": "video/movie-0750.html",
        "cover": "150.jpg",
        "year": "1985",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "oneLine": "寄宿学校的五个小学生为了凑钱买游戏机，联合起来设计了一个“绑架”自己同学的惊天计划。"
    },
    {
        "title": "你看谁来了",
        "href": "video/movie-0751.html",
        "cover": "1.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 家庭",
        "oneLine": "准女婿第一次上门，却发现女友全家都把他错认成了另一位神秘贵客。"
    },
    {
        "title": "隔窗恋爱",
        "href": "video/movie-0752.html",
        "cover": "2.jpg",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "爱情, 剧情",
        "oneLine": "她通过望远镜观察对面楼的帅气邻居，却不知邻居也在通过监控看着她写的日记。"
    },
    {
        "title": "过关斩将追魂枪",
        "href": "video/movie-0753.html",
        "cover": "3.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 武侠",
        "oneLine": "一把刻着“斩将”二字的左轮手枪，在四十年间换了六任主人，每一任都死于非命。"
    },
    {
        "title": "中华英雄",
        "href": "video/movie-0754.html",
        "cover": "4.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "武侠、动作、奇幻",
        "oneLine": "民国初年，身负“天煞孤星”命格的华英雄远赴海外，在唐人街用中华武术对抗恶势力，却发现自己注定克死所有亲人。"
    },
    {
        "title": "邪恶帝国的兴起",
        "href": "video/movie-0755.html",
        "cover": "5.jpg",
        "year": "2019",
        "region": "德国",
        "type": "剧集",
        "genre": "历史、战争、传记",
        "oneLine": "不，这不是老故事——而是从一位失忆的街头流浪汉视角，重看帝国如何“被需要”。"
    },
    {
        "title": "钢魂",
        "href": "video/movie-0756.html",
        "cover": "6.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "战争 / 历史 / 剧情",
        "oneLine": "抗战爆发，一座即将投产的现代钢厂面临炸毁或西迁的生死抉择。"
    },
    {
        "title": "实习医生格蕾第六季",
        "href": "video/movie-0757.html",
        "cover": "7.jpg",
        "year": "2009",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 医学 / 爱情",
        "oneLine": "西雅图仁爱医院遭遇大规模枪击案，医生们在血泊中抢救伤员，也有人永远倒下。"
    },
    {
        "title": "极速秒杀2",
        "href": "video/movie-0758.html",
        "cover": "8.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 犯罪",
        "oneLine": "退隐的顶级杀手被迫在 72 小时内连续完成 12 次不可能狙击，否则他的女儿会被公开处刑。"
    },
    {
        "title": "尸城30夜",
        "href": "video/movie-0759.html",
        "cover": "9.jpg",
        "year": "2028",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖, 动作",
        "oneLine": "零下三十度，丧尸被冻住，城里活人开始比死人更可怕。"
    },
    {
        "title": "微不足道的人们",
        "href": "video/movie-0760.html",
        "cover": "10.jpg",
        "year": "2004",
        "region": "英国",
        "type": "电影",
        "genre": "剧情, 奇幻",
        "oneLine": "在一家巨型跨国公司里，一群被当作“人体零件”使用的微缩人类清洁工，策划了一场改变世界的逃跑计划。"
    },
    {
        "title": "真相之后",
        "href": "video/movie-0761.html",
        "cover": "11.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情、悬疑、新闻",
        "oneLine": "一篇揭露性报道引发全网声讨，记者却发现所有证据都是假的，而陷害她的人，就在她最亲近的人中间。"
    },
    {
        "title": "朵拉的安宁",
        "href": "video/movie-0762.html",
        "cover": "12.jpg",
        "year": "2021",
        "region": "德国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "癌症晚期的朵拉选择回家等死，女儿从柏林回来，发现母亲每天在织一条永远不会完成的围巾。"
    },
    {
        "title": "全家福2013",
        "href": "video/movie-0763.html",
        "cover": "13.jpg",
        "year": "2013",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "一张计划于除夕拍摄的全家福，因家庭成员各自隐秘的危机，变成了一场无法喊“茄子”的闹剧。"
    },
    {
        "title": "等待游戏",
        "href": "video/movie-0764.html",
        "cover": "14.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 同性 / 文艺",
        "oneLine": "一名老人每天在废弃火车站等一辆不会来的列车，直到一个少年发现了他口袋里的五十年前的情书。"
    },
    {
        "title": "我就只尝一小口",
        "href": "video/movie-0765.html",
        "cover": "15.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情, 惊悚, 美食",
        "oneLine": "人气吃播博主每天只吃一口食物，直到镜头外有人递给她一盘“绝对不要吃”的人肉刺身。"
    },
    {
        "title": "太空漫游",
        "href": "video/movie-0766.html",
        "cover": "16.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻，冒险，哲学",
        "oneLine": "一艘飞船前往木星调查神秘黑石，AI却开始认为船员是整个任务最大的漏洞。"
    },
    {
        "title": "谁与争峰",
        "href": "video/movie-0767.html",
        "cover": "17.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "昔日车王为寻失踪弟弟潜入跨境赛车赌局，却发现对手正是被洗脑的亲生兄弟。"
    },
    {
        "title": "一人之下·锈铁重现",
        "href": "video/movie-0768.html",
        "cover": "18.jpg",
        "year": "2024",
        "region": "中国",
        "type": "剧集 / 网络剧",
        "genre": "奇幻 / 动作 / 悬疑",
        "oneLine": "一块能腐蚀所有异人法器的上古锈铁重现江湖，张楚岚与冯宝宝联手破解门派血案。"
    },
    {
        "title": "8万伏特霹雳神龙",
        "href": "video/movie-0769.html",
        "cover": "19.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "科幻 / 动作 / 特摄",
        "oneLine": "一个被高压电击中后幸存的高中生，发现自己能控制雷电，但他首先要面对的是期末考试。"
    },
    {
        "title": "启蒙映画",
        "href": "video/movie-0770.html",
        "cover": "20.jpg",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 情色, 历史",
        "oneLine": "大正年间，一名保守的和服店女儿成为默片解说员，在银幕上发现被压抑的自我。"
    },
    {
        "title": "千里难寻",
        "href": "video/movie-0771.html",
        "cover": "21.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "女儿失踪十年，父亲开着一辆寻人广告货车跨越千里，却发现每到一个线索地点，就会发生新的命案。"
    },
    {
        "title": "爱情生活 第一季",
        "href": "video/movie-0772.html",
        "cover": "22.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情/喜剧/爱情",
        "oneLine": "四名年过三十的纽约好友，在相亲软件的洪流中寻找真爱，却一次次陷入自我怀疑的泥潭。"
    },
    {
        "title": "完美先生和差不多小姐",
        "href": "video/movie-0773.html",
        "cover": "23.jpg",
        "year": "2022",
        "region": "中国内地",
        "type": "电视剧",
        "genre": "爱情, 喜剧, 都市",
        "oneLine": "一个凡事追求完美的偏执总裁，被迫与凡事“差不多就行”的佛系女孩同居。"
    },
    {
        "title": "结果1977",
        "href": "video/movie-0774.html",
        "cover": "24.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "1977年恢复高考的消息传来，三个知青面对唯一的推荐名额，做出了彻底改变彼此命运的选择。"
    },
    {
        "title": "惊狂",
        "href": "video/movie-0775.html",
        "cover": "25.jpg",
        "year": "2003",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑",
        "oneLine": "心理医生陷入连环杀人案，每个线索都指向自己丢失的那一夜记忆。"
    },
    {
        "title": "太后有喜",
        "href": "video/movie-0776.html",
        "cover": "26.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 喜剧, 爱情",
        "oneLine": "摄政太后在50岁寿宴上突然被诊出喜脉，而三个月前先帝就已驾崩，整个朝堂炸开了锅。"
    },
    {
        "title": "教宗与他的12件收藏",
        "href": "video/movie-0777.html",
        "cover": "27.jpg",
        "year": "2024",
        "region": "意大利",
        "type": "剧集",
        "genre": "传记, 历史",
        "oneLine": "新任教宗在整理前代遗物时发现，梵蒂冈的12件圣物暗藏一条改变教会历史的线索。"
    },
    {
        "title": "国师大人凶且甜",
        "href": "video/movie-0778.html",
        "cover": "28.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装 / 爱情 / 喜剧",
        "oneLine": "美食博主穿越成和亲公主，却把阴鸷国师喂成了粘人小奶狗。"
    },
    {
        "title": "一扫而空",
        "href": "video/movie-0779.html",
        "cover": "29.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "犯罪悬疑",
        "oneLine": "一夜之间，全城ATM现金蒸发，监控只拍到一阵无名旋风。"
    },
    {
        "title": "达西玛姨娘",
        "href": "video/movie-0780.html",
        "cover": "30.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 历史 / 家庭",
        "oneLine": "一九三七年，达西玛从农奴成为王爷府姨娘，她用三十年下一盘复仇大棋。"
    },
    {
        "title": "罗马浴场2",
        "href": "video/movie-0781.html",
        "cover": "31.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧 / 奇幻",
        "oneLine": "古罗马浴场设计师再次穿越到现代日本，这次他被派去设计火星基地的温泉设施。"
    },
    {
        "title": "闪电侠第六季",
        "href": "video/movie-0782.html",
        "cover": "32.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "动作 / 科幻 / 超级英雄",
        "oneLine": "在修正了时间线后，闪电侠发现所有神速力使用者都患上了“速度成瘾症”，跑得越快，寿命越短。"
    },
    {
        "title": "杀手们2024",
        "href": "video/movie-0783.html",
        "cover": "33.jpg",
        "year": "2024",
        "region": "日本, 韩国",
        "type": "剧集",
        "genre": "动作, 惊悚",
        "oneLine": "一张杀手排行榜截图引爆网络，全球顶尖杀手因此被推到公众面前，展开一场殊死逃亡。"
    },
    {
        "title": "我生命中的八天",
        "href": "video/movie-0784.html",
        "cover": "34.jpg",
        "year": "2018",
        "region": "法国",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "得知只剩八天生命后，男人没有告诉任何人，用最后八天以普通的一天为模板活了一遍又一遍。"
    },
    {
        "title": "狄仁杰之龙隐迷窟",
        "href": "video/movie-0785.html",
        "cover": "35.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑，古装，动作，推理",
        "oneLine": "长安城地下的“龙隐迷窟”惊现水怪，狄仁杰潜水查案，却发现怪兽肚子里藏着失踪太子的遗物。"
    },
    {
        "title": "追忆似水年华",
        "href": "video/movie-0786.html",
        "cover": "36.jpg",
        "year": "2025",
        "region": "法国",
        "type": "剧集",
        "genre": "文艺, 剧情",
        "oneLine": "一位失忆老人靠品尝玛德琳蛋糕，逐渐重启了一段跨越半个世纪的禁忌恋情。"
    },
    {
        "title": "吓一秒恋人",
        "href": "video/movie-0787.html",
        "cover": "37.jpg",
        "year": "2023",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情, 奇幻",
        "oneLine": "一个能看到恋人“下一秒最可怕表情”的女孩，遇到了一个无论她怎么吓都只会温柔微笑的男孩。"
    },
    {
        "title": "亲爱的妈妈",
        "href": "video/movie-0788.html",
        "cover": "38.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 悬疑",
        "oneLine": "父亲葬礼后，温柔瘫痪多年的“妈妈”突然站起来，对女儿说：“你是谁？”"
    },
    {
        "title": "疾速王后",
        "href": "video/movie-0789.html",
        "cover": "39.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "oneLine": "朝鲜王朝的王后表面母仪天下，实则是前朝最顶尖的女刺客，当她拿起绣花针，整个宫廷都在颤抖。"
    },
    {
        "title": "美国黑帮",
        "href": "video/movie-0790.html",
        "cover": "40.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪，剧情",
        "oneLine": "聚焦70年代哈莱姆区，一个利用美军运输毒品的天才毒枭，与一个正义感爆棚的落魄警探的猫鼠游戏。"
    },
    {
        "title": "谋财陷阱",
        "href": "video/movie-0791.html",
        "cover": "41.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪, 反转",
        "oneLine": "商人伪造自己死亡骗取保费，醒来时却发现自己真的躺在棺材里，且身边多了一具尸体。"
    },
    {
        "title": "雷迪克编年史：黑暗女神",
        "href": "video/movie-0792.html",
        "cover": "42.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻，动作，冒险",
        "oneLine": "宇宙逃犯雷迪克遭遇真正的黑暗女神，他的双眼或许是宇宙最后的希望。"
    },
    {
        "title": "家事法庭",
        "href": "video/movie-0793.html",
        "cover": "43.jpg",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "律政家庭",
        "oneLine": "一位离婚法庭的年轻女法官，每天都在判决别人的婚姻，却发现自己的丈夫正在隔壁法庭起诉离婚，而且原告是她的妈妈。"
    },
    {
        "title": "恐龙世界",
        "href": "video/movie-0794.html",
        "cover": "44.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 冒险",
        "oneLine": "一座克隆恐龙主题公园失控，恐龙逃入人类城市，一名古生物学家和一名越狱犯联手求生。"
    },
    {
        "title": "虎度门",
        "href": "video/movie-0795.html",
        "cover": "45.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 家庭 / 戏曲",
        "oneLine": "粤剧名伶在退休前最后一场《帝女花》中，意外发现前来砸场的叛逆女儿才是真正的传承者。"
    },
    {
        "title": "铁道飞虎",
        "href": "video/movie-0796.html",
        "cover": "46.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作， 战争， 喜剧",
        "oneLine": "一群铁路工人意外截获日军秘密情报，于是把运煤车改成了飞驰的移动堡垒。"
    },
    {
        "title": "时间的针脚",
        "href": "video/movie-0797.html",
        "cover": "47.jpg",
        "year": "2022",
        "region": "西班牙",
        "type": "剧集",
        "genre": "剧情 / 历史 / 间谍",
        "oneLine": "马德里女裁缝因渣男卷款逃到摩洛哥，阴差阳错成为二战时期传递情报的顶级间谍。"
    },
    {
        "title": "紫檀巷",
        "href": "video/movie-0798.html",
        "cover": "48.jpg",
        "year": "1999",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑， 惊悚， 剧情",
        "oneLine": "伦敦古董街紫檀巷24号，每位店主都离奇自杀，一位不信邪的心理学家租下店铺，发现真相藏在自己体内。"
    },
    {
        "title": "血腥妈妈",
        "href": "video/movie-0799.html",
        "cover": "49.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖",
        "oneLine": "为了拯救被绑架的女儿，一位温柔的母亲被迫唤醒体内嗜血的连环杀手人格。"
    },
    {
        "title": "高能少年团第一季",
        "href": "video/movie-0800.html",
        "cover": "50.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀 / 竞技",
        "oneLine": "六位少年被卷入神秘游戏空间，每次通关失败都会抹去一段现实记忆。"
    },
    {
        "title": "妈妈，我不想坐牢",
        "href": "video/movie-0801.html",
        "cover": "51.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "犯罪 / 家庭 / 剧情",
        "oneLine": "16岁的少年为保护妈妈过失杀人，入狱前，妈妈对他说：“进去别怕，妈妈也进去陪你。”一年后，妈妈真的成了狱友。"
    },
    {
        "title": "忍者之国",
        "href": "video/movie-0802.html",
        "cover": "52.jpg",
        "year": "2017",
        "region": "日本",
        "type": "电影",
        "genre": "历史 / 动作 / 战争",
        "oneLine": "织田信长派出五万大军围剿伊贺，而对面的忍者只有八百人。"
    },
    {
        "title": "独活女子的推荐 第五季",
        "href": "video/movie-0803.html",
        "cover": "53.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "生活美食",
        "oneLine": "40岁的出版社职员五月女惠，继续在第五季挑战更极致的“独活”，这次她甚至尝试了一个人的南极旅行。"
    },
    {
        "title": "教头",
        "href": "video/movie-0804.html",
        "cover": "54.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作，剧情",
        "oneLine": "民国乱世，一个不愿收徒的隐世武学教头，为了保住一座孤儿院，被迫在三个月内教出一群“最能打的孩子”。"
    },
    {
        "title": "少年男仆库洛",
        "href": "video/movie-0805.html",
        "cover": "55.jpg",
        "year": "2018",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧 / 同性",
        "oneLine": "黑道大哥为了体验“被贵族服务”的感觉，逼迫手下最凶恶的小弟穿上女装去男仆咖啡厅打工。"
    },
    {
        "title": "超级中国",
        "href": "video/movie-0806.html",
        "cover": "56.jpg",
        "year": "2015",
        "region": "韩国",
        "type": "纪录片",
        "genre": "纪录片 / 社会",
        "oneLine": "韩国KBS耗时三年拍摄的纪录片，却在中韩两国引发了完全相反的两种解读。"
    },
    {
        "title": "人生剧场",
        "href": "video/movie-0807.html",
        "cover": "57.jpg",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "一个只想拍电影的男人，在二战的炮火和平成的泡沫中，用放映机守护了一个家族三代人的梦。"
    },
    {
        "title": "间谍的孩子",
        "href": "video/movie-0808.html",
        "cover": "58.jpg",
        "year": "2021",
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "家庭，动作，冒险",
        "oneLine": "一对普通姐弟发现退休的父母竟是间谍，当父母被捕后，他们必须自己上阵完成最后一次任务。"
    },
    {
        "title": "反种姓的歌声",
        "href": "video/movie-0809.html",
        "cover": "59.jpg",
        "year": "2019",
        "region": "印度",
        "type": "电影",
        "genre": "剧情 / 音乐 / 社会",
        "oneLine": "低种姓洗衣工组建了一支摇滚乐队，用歌词直指高种姓特权，整个小镇开始站队。"
    },
    {
        "title": "鹈头川村事件",
        "href": "video/movie-0810.html",
        "cover": "60.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电视剧",
        "genre": "悬疑 / 恐怖",
        "oneLine": "记者调查十年未解的失踪案，在偏僻山村发现全村人都在维护一个“不存在的孩子”。"
    },
    {
        "title": "酷狗上学记",
        "href": "video/movie-0811.html",
        "cover": "61.jpg",
        "year": "2018",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧 / 家庭 / 冒险",
        "oneLine": "一只会说话的金毛混入小学，它必须用狗生智慧通过期末考试并揪出偷试卷的“内鬼”。"
    },
    {
        "title": "24小时第五季",
        "href": "video/movie-0812.html",
        "cover": "62.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 惊悚 / 悬疑",
        "oneLine": "传奇特工杰克·鲍尔已官方死亡八年，一桩针对总统的暗网暗杀，用他的生物特征启动了只属于他的保险库。"
    },
    {
        "title": "狭路英豪",
        "href": "video/movie-0813.html",
        "cover": "63.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 犯罪, 西部",
        "oneLine": "一名被陷害的警察押解一名重犯穿越千里戈壁，两人身后是无数杀手的追杀，而重犯才是唯一能证明他清白的人。"
    },
    {
        "title": "欢迎光临娃娃屋",
        "href": "video/movie-0814.html",
        "cover": "64.jpg",
        "year": "1995",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，喜剧",
        "oneLine": "十一岁的道恩是全家最不受待见的孩子，在学校也是被霸凌的对象，她想逃离这一切，却发现自己无处可去。"
    },
    {
        "title": "我的老板为何那样",
        "href": "video/movie-0815.html",
        "cover": "65.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 爱情 / 职场",
        "oneLine": "新人秘书发现，全公司闻风丧胆的冷面总裁，其实有严重的社交恐惧症，一切高冷都是他的保护色。"
    },
    {
        "title": "鉴证实录2",
        "href": "video/movie-0816.html",
        "cover": "66.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "悬疑, 刑侦, 法医",
        "oneLine": "法医精神科的女法医接手一桩尘封二十年的连环杀人案，却发现每个新出现的证物上，都检测出了自己的DNA。"
    },
    {
        "title": "卡罗尔·马蒂厄国语",
        "href": "video/movie-0817.html",
        "cover": "67.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 传记",
        "oneLine": "法国语言学家来到中国编字典，却被一个汉字彻底改变了人生。"
    },
    {
        "title": "小色狼",
        "href": "video/movie-0818.html",
        "cover": "68.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "青春喜剧",
        "oneLine": "一名初中生被全班误认为“色狼”，他决定用科学讲座证明自己的清白，却越描越黑。"
    },
    {
        "title": "诱．惑",
        "href": "video/movie-0819.html",
        "cover": "69.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "情色 / 悬疑",
        "oneLine": "大学教授与学生发生不伦恋，却发现自己正被一步步诱入对方设计的陷阱。"
    },
    {
        "title": "大步走粤语",
        "href": "video/movie-0820.html",
        "cover": "70.jpg",
        "year": "2020",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情 / 运动 / 都市",
        "oneLine": "患有心脏病的“废柴”青年与离异女强人在跑步APP上认识，他们约定一起跑完港珠澳大桥。"
    },
    {
        "title": "天外奇迹",
        "href": "video/movie-0821.html",
        "cover": "71.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻 / 悬疑 / 剧情",
        "oneLine": "地球收到了来自4.2光年外的视频信号，里面播放的不是外星人，而是十年后的人类自己。"
    },
    {
        "title": "龙宫女刺客之大明女监",
        "href": "video/movie-0822.html",
        "cover": "72.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "古装, 动作",
        "oneLine": "大明最强女刺客被关进由前朝太监设计的秘密水牢，里面关着的全是她自己曾经刺杀失败的目标。"
    },
    {
        "title": "欢乐一家亲第十一季",
        "href": "video/movie-0823.html",
        "cover": "73.jpg",
        "year": "2003",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧，情景剧",
        "oneLine": "弗雷泽告别西雅图前的最后疯狂：他的礼仪课程颠覆了电台，而父亲的沙发终于被他坐塌了。"
    },
    {
        "title": "血色之路",
        "href": "video/movie-0824.html",
        "cover": "74.jpg",
        "year": "2022",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "犯罪 / 惊悚 / 公路",
        "oneLine": "一名假释犯在穿越澳大利亚荒漠的送货途中，发现冷藏车厢里装的是正在腐烂的腐败警察尸体。"
    },
    {
        "title": "重生之时",
        "href": "video/movie-0825.html",
        "cover": "75.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻, 悬疑",
        "oneLine": "一场粒子对撞机事故后，物理学家每次死亡都会在同一天重生，却发现自己正被另一个“自己”追杀。"
    },
    {
        "title": "通宵",
        "href": "video/movie-0826.html",
        "cover": "76.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 悬疑, 黑色幽默",
        "oneLine": "一个通宵便利店夜班店员，在12小时里见证了12组顾客的秘密，却发现所有这些人都被同一个夜晚的同一件事串联。"
    },
    {
        "title": "最后五分钟",
        "href": "video/movie-0827.html",
        "cover": "77.jpg",
        "year": "2024",
        "region": "西班牙",
        "type": "电影",
        "genre": "惊悚, 犯罪, 悬疑",
        "oneLine": "一名拆弹专家被困在炸弹包围的银行里，遥控器显示爆炸倒计时只有五分钟，但这五分钟无限循环。"
    },
    {
        "title": "楚天风云",
        "href": "video/movie-0828.html",
        "cover": "78.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 战争 / 悬疑",
        "oneLine": "1938年武汉会战前夕，一份标注了长江航道秘密水文点的日军地图落入江湖帮派手中。"
    },
    {
        "title": "她在梦中跳舞",
        "href": "video/movie-0829.html",
        "cover": "79.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "奇幻, 爱情, 剧情",
        "oneLine": "失去双腿的舞者每晚都能在梦里跳舞，而那个与她共舞的男人，现实中是个不会笑的天才程序员。"
    },
    {
        "title": "我们和我们的山",
        "href": "video/movie-0830.html",
        "cover": "80.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、家庭、励志",
        "oneLine": "贵州深山里，一个得了渐冻症的村小教师，在生命最后两年教出了全县第一名的学生，而那个学生是他的亲生儿子——儿子不知道。"
    },
    {
        "title": "未来忍者 庆云机忍外传",
        "href": "video/movie-0831.html",
        "cover": "81.jpg",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "科幻 / 动作 / 动画",
        "oneLine": "2127年，最后一个纯血肉忍者被改造成半机械兵器，他要用古老的忍术对抗操控世界的AI。"
    },
    {
        "title": "我的美丽洗衣店",
        "href": "video/movie-0832.html",
        "cover": "82.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "爱情 / 剧情 / 同性",
        "oneLine": "伦敦穷街区的巴基斯坦裔青年，继承了叔叔的洗衣店，并与前来收保护费的白人混混相爱了。"
    },
    {
        "title": "每况愈下",
        "href": "video/movie-0833.html",
        "cover": "83.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "一名牙医因一桩微不足道的交通事故，生活像多米诺骨牌一样层层崩塌。"
    },
    {
        "title": "笨拙之极的上野",
        "href": "video/movie-0834.html",
        "cover": "84.jpg",
        "year": "2019",
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧 / 校园 / 恋爱",
        "oneLine": "天才发明家上野为了向暗恋的学弟田中告白，不断拿出惊世骇俗的奇葩发明，却总是弄巧成拙。"
    },
    {
        "title": "小猪佩奇第九季",
        "href": "video/movie-0835.html",
        "cover": "85.jpg",
        "year": "2022",
        "region": "英国",
        "type": "动画",
        "genre": "儿童 / 家庭",
        "oneLine": "佩奇和家人朋友们迎来了新的邻居、新的学校活动和永远踩不完的泥坑。"
    },
    {
        "title": "戆叔儍侄",
        "href": "video/movie-0836.html",
        "cover": "86.jpg",
        "year": "2025",
        "region": "新加坡",
        "type": "剧集",
        "genre": "喜剧, 家庭, 都市",
        "oneLine": "一个精明的乐龄大叔和他“傻白甜”的富二代侄子被迫同居，为了抢回被骗走的祖屋，叔侄俩展开了一场啼笑皆非的斗智斗勇。"
    },
    {
        "title": "新月",
        "href": "video/movie-0837.html",
        "cover": "87.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 科幻",
        "oneLine": "在月球采冰的工人，意外发现了一台能播放地球已故亲人记忆的旧电脑。"
    },
    {
        "title": "怪诞扑克夜",
        "href": "video/movie-0838.html",
        "cover": "88.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚, 犯罪",
        "oneLine": "每月一次的警探扑克夜变成血腥审判，因为其中一人就是当年冤案的元凶。"
    },
    {
        "title": "檀岛玉女",
        "href": "video/movie-0839.html",
        "cover": "89.jpg",
        "year": "1961",
        "region": "美国 / 夏威夷",
        "type": "电影",
        "genre": "歌舞 / 爱情",
        "oneLine": "为了保住家族旅馆，活泼的夏威夷少女必须在三天内用一场盛大歌舞表演击败资本大鳄。"
    },
    {
        "title": "超时空爱杀",
        "href": "video/movie-0840.html",
        "cover": "90.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻, 爱情, 动作",
        "oneLine": "为了拯救女友，男主被迫成为时空杀手，却发现自己要杀的第一个目标，就是女友本人。"
    },
    {
        "title": "阳光姐妹淘 2011",
        "href": "video/movie-0841.html",
        "cover": "91.jpg",
        "year": "2011",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 喜剧",
        "oneLine": "身患绝症的女主角在寻找25年前中学好友“Sunny”小组成员的过程中，重拾被遗忘的青春与梦想。"
    },
    {
        "title": "我想要的圣诞礼物",
        "href": "video/movie-0842.html",
        "cover": "92.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "家庭/奇幻",
        "oneLine": "一个八岁男孩写信给圣诞老人，希望去世的妈妈能回来陪他一天，第二天早上，妈妈真的出现在了家门口。"
    },
    {
        "title": "超异能冒险",
        "href": "video/movie-0843.html",
        "cover": "93.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "冒险 / 奇幻",
        "oneLine": "一个平凡父亲发现自己家族的超能力基因，带着三个拖油瓶孩子穿越时空寻找失落的法器。"
    },
    {
        "title": "异修罗",
        "href": "video/movie-0844.html",
        "cover": "94.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "奇幻 / 战斗 / 暗黑",
        "oneLine": "魔王死后，世界迎来了16位实力堪称“修罗”的怪物，为了唯一的许愿机会而互相残杀。"
    },
    {
        "title": "纽约变装祭",
        "href": "video/movie-0845.html",
        "cover": "95.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 同性",
        "oneLine": "一名拉丁裔非法移民为了赢取奖金给母亲治病，闯入纽约最疯狂的变装皇后比赛。"
    },
    {
        "title": "外星人狙击战",
        "href": "video/movie-0846.html",
        "cover": "96.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 动作",
        "oneLine": "一支由地球顶尖狙击手组成的小队被投送到被外星虫族占领的轨道空间站，他们发现敌人的猎杀方式与人类军事教材完全一致。"
    },
    {
        "title": "曹老板的十八个秘书",
        "href": "video/movie-0847.html",
        "cover": "97.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市，职场，喜剧",
        "oneLine": "十八个风格迥异的女秘书轮番上阵，让曹老板的公司彻底变成了一个笑料百出的战场。"
    },
    {
        "title": "审判奥斯卡·王尔德",
        "href": "video/movie-0848.html",
        "cover": "98.jpg",
        "year": "2018",
        "region": "英国",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "1895年，维多利亚时代的伦敦，大文豪奥斯卡·王尔德在法庭上为自己“有伤风化”的爱而辩护。"
    },
    {
        "title": "危机密布",
        "href": "video/movie-0849.html",
        "cover": "99.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "oneLine": "一名被开除的CIA分析员发现，即将发生的恐袭蓝图来自他自己一年前被否决的报告。"
    },
    {
        "title": "灵欲春宵",
        "href": "video/movie-0850.html",
        "cover": "100.jpg",
        "year": "1966",
        "region": "美国",
        "type": "电影",
        "genre": "剧情， 爱情",
        "oneLine": "一对中年知识分子的夫妻，邀请年轻夫妇做客，一夜之间，酒精撕开了所有体面，露出了婚姻的尸骸。"
    },
    {
        "title": "伦敦往事",
        "href": "video/movie-0851.html",
        "cover": "101.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 爱情 / 历史",
        "oneLine": "二战伦敦轰炸中，一名躲避空袭的犹太女孩，在废弃地铁站里爱上了一位负责解码的印度裔士兵。"
    },
    {
        "title": "顽皮鬼",
        "href": "video/movie-0852.html",
        "cover": "102.jpg",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧、恐怖",
        "oneLine": "一个废柴大叔搬进廉价公寓，发现里面的小鬼非但不害人，还天天恶作剧逼他出门找工作。"
    },
    {
        "title": "警戒线",
        "href": "video/movie-0853.html",
        "cover": "103.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "灾难，剧情",
        "oneLine": "化工厂爆炸前一小时，一个街道办事员必须劝退警戒线内三万人，没人信他。"
    },
    {
        "title": "碧血黄沙",
        "href": "video/movie-0854.html",
        "cover": "104.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 历史 / 西部",
        "oneLine": "1930年代的西北戈壁，一队护送文物的驼队被土匪围困，唯一的生机是找到传说中的“沙海幽灵”。"
    },
    {
        "title": "缘之空",
        "href": "video/movie-0855.html",
        "cover": "105.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画",
        "genre": "爱情，伦理，治愈",
        "oneLine": "双胞胎兄妹搬到乡下老宅，在远离人烟的夏日里，一种禁忌的情感悄然滋长。"
    },
    {
        "title": "半裸大秘密",
        "href": "video/movie-0856.html",
        "cover": "106.jpg",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧, 悬疑",
        "oneLine": "一场桑拿房煤气泄漏后，三个互不相识的女人一觉醒来，发现每人身上都多了一块不属于自己的文身。"
    },
    {
        "title": "7分钟",
        "href": "video/movie-0857.html",
        "cover": "107.jpg",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "一通电话告诉男主，他女儿被关在装有炸弹的车里，而炸弹将在7分钟后爆炸——电影实时播放这7分钟。"
    },
    {
        "title": "午夜微博",
        "href": "video/movie-0858.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑， 恐怖， 网络",
        "oneLine": "一个被注销的微博账号，每日午夜准时更新，发布的内容总是提前预告第二天登上热搜的死亡事件。"
    },
    {
        "title": "亨利危险电影版",
        "href": "video/movie-0859.html",
        "cover": "109.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 动作 / 冒险",
        "oneLine": "当所有的反派决定放假一天，兼职小英雄亨利和他的小伙伴们失业了。"
    },
    {
        "title": "2024安徽春晚",
        "href": "video/movie-0860.html",
        "cover": "110.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺/晚会",
        "genre": "歌舞，喜剧，综艺",
        "oneLine": "一场虚拟技术故障，把黄梅戏宗师严凤英的AI影像和顶流说唱歌手困在了同一个排练厅。"
    },
    {
        "title": "惊心食人族",
        "href": "video/movie-0861.html",
        "cover": "111.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "每隔23年春天，那只以恐惧为食的怪物都会苏醒，而这次它的猎场是整个互联网。"
    },
    {
        "title": "艾伦的永恒阳光",
        "href": "video/movie-0862.html",
        "cover": "112.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "科幻 / 爱情 / 剧情",
        "oneLine": "决定离婚的艾伦和妻子同时接受了记忆删除手术，却在意识的废墟中发现自己删了对方不下十次。"
    },
    {
        "title": "炊事班的故事2",
        "href": "video/movie-0863.html",
        "cover": "113.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧，军旅",
        "oneLine": "空军某场站炊事班迎来新班长，他要求“用米其林标准炒大锅菜”，引发爆笑冲突。"
    },
    {
        "title": "僵尸之地",
        "href": "video/movie-0864.html",
        "cover": "114.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖 / 喜剧 / 动作",
        "oneLine": "朝鲜时代，一个懦弱的县衙尸检官在丧尸危机爆发后，发现自己唯一擅长的竟是“解剖”活蹦乱跳的它们。"
    },
    {
        "title": "麻辣芳邻",
        "href": "video/movie-0865.html",
        "cover": "115.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧、爱情",
        "oneLine": "火爆单身女教师搬新家，发现隔壁住着十年前害她挂科的油腻前男友。"
    },
    {
        "title": "嗜血狂鲨",
        "href": "video/movie-0866.html",
        "cover": "116.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 惊悚",
        "oneLine": "海底实验室遭变异鲨鱼群入侵，科学家发现它们能无限再生，且智商堪比人类。"
    },
    {
        "title": "罗伯特·齐默尔曼的爱情",
        "href": "video/movie-0867.html",
        "cover": "117.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 传记 / 爱情",
        "oneLine": "民谣歌手鲍勃·迪伦以“罗伯特·齐默尔曼”为化名，讲述三段改变音乐史的爱情。"
    },
    {
        "title": "梅花巾",
        "href": "video/movie-0868.html",
        "cover": "118.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 历史",
        "oneLine": "苏州绣娘三代人的恩怨，都藏在那条未完成的梅花巾里。"
    },
    {
        "title": "克里夫兰秀第四季",
        "href": "video/movie-0869.html",
        "cover": "119.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧、动画",
        "oneLine": "克里夫兰终于买下梦想中的大房子，却发现房子里住着前任房主的鬼魂。"
    },
    {
        "title": "有价值的男人",
        "href": "video/movie-0870.html",
        "cover": "120.jpg",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 黑色喜剧",
        "oneLine": "一个走投无路的失业男，将自己以年薪百万的价格“卖身”给一家邪恶财阀，成为“宠物人类”。"
    },
    {
        "title": "阿衰",
        "href": "video/movie-0871.html",
        "cover": "121.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 动画",
        "oneLine": "漫画里的学渣阿衰被现实中的校草“附身”三天，体验了一把当学霸男神的滋味。"
    },
    {
        "title": "芬奇达",
        "href": "video/movie-0872.html",
        "cover": "122.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻、冒险、剧情",
        "oneLine": "末日废墟中，一位老人、一台机器人和一只狗，踏上了前往传说中“芬奇达”庇护所的生死旅程。"
    },
    {
        "title": "莫斯科来的香烟女孩",
        "href": "video/movie-0873.html",
        "cover": "123.jpg",
        "year": "2017",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "oneLine": "90年代初，一个中国女孩在莫斯科倒卖香烟，只为赎回被黑帮扣留的父亲。"
    },
    {
        "title": "建群联盟",
        "href": "video/movie-0874.html",
        "cover": "124.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 喜剧",
        "oneLine": "七个被踢出业主群的陌生人，组成了一个反“群聊霸权”的秘密联盟。"
    },
    {
        "title": "沙漠白日",
        "href": "video/movie-0875.html",
        "cover": "125.jpg",
        "year": "1970",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "动作，战争，西部",
        "oneLine": "红军战士护送一群白军军官的妻子穿越沙漠，身后是复仇的骑兵，前方是黄金宝藏。"
    },
    {
        "title": "她不土，她是我妹妹",
        "href": "video/movie-0876.html",
        "cover": "126.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 青春",
        "oneLine": "从农村转学到城市重点中学的女孩，发现自己的“土气”成了同学笑话，而她的姐姐就在这所学校，却假装不认识她。"
    },
    {
        "title": "黑雨",
        "href": "video/movie-0877.html",
        "cover": "127.jpg",
        "year": "1989",
        "region": "日本 / 美国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 惊悚",
        "oneLine": "两名纽约刑警押送黑帮头目到大阪，却被对方逃脱，两人必须在陌生的日本找回面子和凶手。"
    },
    {
        "title": "一个经典的恐怖故事",
        "href": "video/movie-0878.html",
        "cover": "128.jpg",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "恐怖, 悬疑, 惊悚",
        "oneLine": "五个年轻人开车旅游，汽车在乡间小路抛锚，他们发现自己被困在了一部经典恐怖片的剧本循环里。"
    },
    {
        "title": "巴斯金",
        "href": "video/movie-0879.html",
        "cover": "129.jpg",
        "year": "2025",
        "region": "土耳其",
        "type": "电影",
        "genre": "恐怖, 奇幻",
        "oneLine": "一支特警小队被诱入废弃大楼，发现每一层楼都是地狱的不同部门。"
    },
    {
        "title": "拐个洋妞做媳妇",
        "href": "video/movie-0880.html",
        "cover": "130.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "爱情喜剧",
        "oneLine": "老实巴交的农村小伙带回一个金发碧眼的洋女友，全村人为了帮她适应生活，闹出一连串啼笑皆非的误会。"
    },
    {
        "title": "彼女",
        "href": "video/movie-0881.html",
        "cover": "131.jpg",
        "year": "2019",
        "region": "日本",
        "type": "电影",
        "genre": "剧情，爱情，犯罪",
        "oneLine": "为了拯救身患绝症的爱人，她甘愿成为被全日本通缉的杀人犯。"
    },
    {
        "title": "部落里的秘密",
        "href": "video/movie-0882.html",
        "cover": "132.jpg",
        "year": "2024",
        "region": "美国 / 亚马逊",
        "type": "剧集",
        "genre": "悬疑, 冒险",
        "oneLine": "一支人类学家团队深入亚马逊雨林研究“从不说话”的原始部落，却发现部落成员曾在二十年前集体就读过一所美国高中。"
    },
    {
        "title": "淘气双子星粤语",
        "href": "video/movie-0883.html",
        "cover": "133.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "剧集",
        "genre": "家庭，喜剧",
        "oneLine": "一对失散多年的双胞胎兄弟在夏令营意外相遇，决定互换身份揭开父母当年的秘密。"
    },
    {
        "title": "不、可、思、议呢宝贝",
        "href": "video/movie-0884.html",
        "cover": "134.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻家庭",
        "oneLine": "五岁小女孩对着生日蜡烛许愿“想让妈妈重新笑”，第二天，妈妈变成了一个永远在笑的陶瓷娃娃。"
    },
    {
        "title": "阿蒂卡监狱事件",
        "href": "video/movie-0885.html",
        "cover": "135.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，历史",
        "oneLine": "1971年，阿蒂卡监狱的囚犯劫持人质争取权利，一场谈判最终演变为美国历史上最血腥的监狱屠杀。"
    },
    {
        "title": "御用杀手",
        "href": "video/movie-0886.html",
        "cover": "136.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "动作, 悬疑",
        "oneLine": "一个被政府“合法聘用”的杀手，在一次暗杀后发现自己要杀的下一个目标，竟是失散多年的亲弟弟。"
    },
    {
        "title": "刑警使命",
        "href": "video/movie-0887.html",
        "cover": "137.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "刑侦 / 悬疑",
        "oneLine": "一支刑警队在新老队长交接的48小时内，接连遭遇三起不可能犯罪。"
    },
    {
        "title": "章鱼东河惊魂",
        "href": "video/movie-0888.html",
        "cover": "138.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 科幻 / 灾难",
        "oneLine": "纽约东河下沉睡的远古章鱼被唤醒，它不杀人，而是会完美复刻它吞掉的人。"
    },
    {
        "title": "末路记事",
        "href": "video/movie-0889.html",
        "cover": "139.jpg",
        "year": "2024",
        "region": "法国 / 意大利",
        "type": "电影",
        "genre": "犯罪 / 剧情",
        "oneLine": "两个走投无路的男人策划了最后一次抢劫，却在分赃夜同时爱上了一个神秘的酒吧女郎，末路狂花般的厮杀。"
    },
    {
        "title": "17号音乐仓库第三季",
        "href": "video/movie-0890.html",
        "cover": "140.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "音乐，真人秀",
        "oneLine": "七位风格迥异的独立音乐人，共同经营一家限时营业的Livehouse，用音乐治愈城市里的孤独灵魂。"
    },
    {
        "title": "性命交关",
        "href": "video/movie-0891.html",
        "cover": "141.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 医疗, 黑色幽默",
        "oneLine": "一个被误诊的癌症患者、一个想自杀的绝症富豪、一个拿错报告的实习生，在医院天台组成“自救互助组”。"
    },
    {
        "title": "玉面情魔",
        "href": "video/movie-0892.html",
        "cover": "142.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 犯罪",
        "oneLine": "野心勃勃的马戏团骗徒与女心理医生联手行骗，却反被对方操控，沦为畸形秀上的“怪物”。"
    },
    {
        "title": "一秒变总统第二季",
        "href": "video/movie-0893.html",
        "cover": "143.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧 / 政治讽刺",
        "oneLine": "上一季的替身演员继续假扮总统，这一季他要把美国搞成一个网红国家。"
    },
    {
        "title": "扫荡香粉寮",
        "href": "video/movie-0894.html",
        "cover": "144.jpg",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 黑帮",
        "oneLine": "卧底警察潜入香粉寮黑帮，却发现老大是自己的亲生父亲，亲手与亲情的生死抉择。"
    },
    {
        "title": "计程车男",
        "href": "video/movie-0895.html",
        "cover": "145.jpg",
        "year": "2021",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 悬疑",
        "oneLine": "首尔夜班出租车司机每晚都会遇到一个自称“未来人”的神秘乘客，乘客的预言正在一一应验。"
    },
    {
        "title": "时空旅人",
        "href": "video/movie-0896.html",
        "cover": "146.jpg",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 悬疑 / 爱情",
        "oneLine": "她发现自己能在睡梦中穿越到过去的时空，但每次穿越都会让现在的一个陌生人消失。"
    },
    {
        "title": "地球2100",
        "href": "video/movie-0897.html",
        "cover": "147.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "科幻， 灾难， 悬疑",
        "oneLine": "2100年，人类只剩最后一千人，他们发现自己的记忆都是被植入的。"
    },
    {
        "title": "红罂粟2",
        "href": "video/movie-0898.html",
        "cover": "148.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 犯罪",
        "oneLine": "第一部惨烈牺牲的女警妹妹长大成人，化名“罂粟”潜入金三角新毒王身边，却爱上仇人之子。"
    },
    {
        "title": "珍妮的婚礼",
        "href": "video/movie-0899.html",
        "cover": "149.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 爱情 / 家庭",
        "oneLine": "婚礼当天，三位前男友带着不同理由同时回来抢婚，新娘珍妮必须边嫁人边拆雷。"
    },
    {
        "title": "与春同行",
        "href": "video/movie-0900.html",
        "cover": "150.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 治愈, 公路",
        "oneLine": "一位叛逆的都市少女被迫陪患有阿尔茨海默症的奶奶踏上寻找“初恋”的公路之旅，却发现奶奶的初恋就在车后座。"
    },
    {
        "title": "种马兄弟",
        "href": "video/movie-0901.html",
        "cover": "1.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 西部",
        "oneLine": "一对不靠谱的兄弟继承了父亲留下的种马场，但他们连马和驴都分不清。"
    },
    {
        "title": "情欲爱火",
        "href": "video/movie-0902.html",
        "cover": "2.jpg",
        "year": "2025",
        "region": "法国, 意大利",
        "type": "电影",
        "genre": "爱情, 剧情, 情色",
        "oneLine": "两对中年夫妻在交换伴侣的游戏中，试图用新欢治愈旧爱，却点燃了无法熄灭的妒火。"
    },
    {
        "title": "十卜你应援团",
        "href": "video/movie-0903.html",
        "cover": "3.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "青春励志",
        "oneLine": "大阪一所高中的“应援团”只剩最后三人，其中一位是坐在轮椅上的前啦啦队长，他们要为全校唯一的学生办一场毕业应援。"
    },
    {
        "title": "喵有卵用第三季",
        "href": "video/movie-0904.html",
        "cover": "4.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动画 / 喜剧",
        "oneLine": "在一家互联网公司，一群社畜员工发现他们的CEO其实是一只试图统治人类的猫，而HR总监是它的舔狗。"
    },
    {
        "title": "玻璃圈风云",
        "href": "video/movie-0905.html",
        "cover": "5.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚/悬疑",
        "oneLine": "一群沉迷于虚拟现实的富二代在一个全透明的玻璃豪宅里狂欢，却发现自己正被全网直播，而凶手就在他们之中。"
    },
    {
        "title": "小白兔",
        "href": "video/movie-0906.html",
        "cover": "6.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 恐怖 / 心理",
        "oneLine": "一桩模仿童谣《小白兔》的连环杀人案，唯一的线索是一位女插画师的噩梦手稿。"
    },
    {
        "title": "香港大营救",
        "href": "video/movie-0907.html",
        "cover": "7.jpg",
        "year": "2024",
        "region": "中国香港 / 中国大陆",
        "type": "电影",
        "genre": "动作 / 历史 / 剧情",
        "oneLine": "1941年日军侵占香港，一群香港地下党必须在72小时内，将被困岛上的三百多名爱国文化人士偷渡撤离。"
    },
    {
        "title": "过去的事",
        "href": "video/movie-0908.html",
        "cover": "8.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 家庭",
        "oneLine": "一位返乡处理老宅的纪录片导演，在整理母亲遗物时，发现了一盘记录着童年悬案真相的录像带。"
    },
    {
        "title": "永保幸福",
        "href": "video/movie-0909.html",
        "cover": "9.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 悬疑",
        "oneLine": "一个失去女儿的母亲将女儿的意识上传到云端，却发现那个“永保幸福”的数字女儿，正在引诱其他活着的孩子自杀。"
    },
    {
        "title": "陀枪师姐4粤语",
        "href": "video/movie-0910.html",
        "cover": "10.jpg",
        "year": "2004",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "动作, 剧情, 爱情",
        "oneLine": "当三元成为单身母亲，娥姐退隐江湖，新一代“陀枪女警”如何面对更加凶残的跨国黑帮？"
    },
    {
        "title": "鲁蛇鸟经纪",
        "href": "video/movie-0911.html",
        "cover": "11.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "一家濒临倒闭的明星经纪公司，旗下全是过气、作妖、零作品的“鲁蛇鸟”，他们却想逆天改命。"
    },
    {
        "title": "不老宝藏「猜、情、寻」",
        "href": "video/movie-0912.html",
        "cover": "12.jpg",
        "year": "1997",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧， 冒险， 爱情",
        "oneLine": "一枚可令时间重置的铜钱，让一个市井赌徒和一对杀手姐妹在寻宝路上陷入无限循环的三角恋。"
    },
    {
        "title": "春之梦",
        "href": "video/movie-0913.html",
        "cover": "13.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻 / 家庭",
        "oneLine": "一个叛逆少女在春分那天跌入祖父的青春，参与了一场荒谬的“重建小镇计划”。"
    },
    {
        "title": "生活印记",
        "href": "video/movie-0914.html",
        "cover": "14.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 文艺, 家庭",
        "oneLine": "一个叛逆的儿子为去世的整理师母亲整理遗物，在万千物品中拼出了她沉默的一生。"
    },
    {
        "title": "罗宾汉的真实故事",
        "href": "video/movie-0915.html",
        "cover": "15.jpg",
        "year": "1991",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 冒险 / 历史",
        "oneLine": "剥去浪漫童话的外衣，还原一个在暴政压迫下为了生存而被迫落草的农民起义领袖。"
    },
    {
        "title": "回到未嫁时粤语",
        "href": "video/movie-0916.html",
        "cover": "16.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "爱情，奇幻",
        "oneLine": "40岁离婚主妇一觉醒来回到25岁婚礼当天，她却选择了逃婚。"
    },
    {
        "title": "晨缘暮恋",
        "href": "video/movie-0917.html",
        "cover": "17.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 剧情, 文艺",
        "oneLine": "养老院里，他将每天写给亡妻的情书错塞进她的门缝，一段阴差阳错的黄昏恋开始了。"
    },
    {
        "title": "双雄会（上集）",
        "href": "video/movie-0918.html",
        "cover": "18.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 历史 / 武侠",
        "oneLine": "战国末期，赵国将军与秦国刺客在边境小城相遇，却因一场瘟疫不得不联手抗敌。"
    },
    {
        "title": "原点",
        "href": "video/movie-0919.html",
        "cover": "19.jpg",
        "year": "2022",
        "region": "新加坡",
        "type": "剧集",
        "genre": "剧情, 家庭, 悬疑",
        "oneLine": "富家千金车祸失忆，被仇家女儿顶替身份，她必须从零开始，夺回自己的人生。"
    },
    {
        "title": "夏培的星光大道",
        "href": "video/movie-0920.html",
        "cover": "20.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "音乐, 剧情, 家庭",
        "oneLine": "天才狗狗夏培意外在好莱坞星光大道留星，却遭遇昔日宿敌的阴谋陷害，面临星途危机。"
    },
    {
        "title": "战争游戏：死亡密码",
        "href": "video/movie-0921.html",
        "cover": "21.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作，科幻，惊悚",
        "oneLine": "顶级程序员被迫进入一款真实战争游戏，破解一个能同时毁灭现实与虚拟世界的死亡密码。"
    },
    {
        "title": "观鸟人全指南",
        "href": "video/movie-0922.html",
        "cover": "22.jpg",
        "year": "2021",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "oneLine": "患有阿斯伯格综合征的少年为看到传说中的极乐鸟，搭车穿越苏格兰高地。"
    },
    {
        "title": "村女游埠",
        "href": "video/movie-0923.html",
        "cover": "23.jpg",
        "year": "2025",
        "region": "中国香港 / 中国大陆",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "一个从未离开过旺角的“港女”，被一张旧照片骗到广东乡下认祖归宗，却发现自己是全村人口中的“疯女人”的女儿。"
    },
    {
        "title": "我们一无所知的夜晚",
        "href": "video/movie-0924.html",
        "cover": "24.jpg",
        "year": "2021",
        "region": "法国，德国",
        "type": "电影",
        "genre": "剧情，悬疑，文艺",
        "oneLine": "一对陌生人在一夜激情后，发现彼此记忆中的昨晚是完全不同的两个故事。"
    },
    {
        "title": "拥有者",
        "href": "video/movie-0925.html",
        "cover": "25.jpg",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "科幻 / 伦理",
        "oneLine": "富人可购买穷人的身体使用权，但一名“出租者”发现自己的身体被用来连杀三人。"
    },
    {
        "title": "飞月情海",
        "href": "video/movie-0926.html",
        "cover": "26.jpg",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "oneLine": "1960年代的香港，一名落魄粤剧花旦在中秋夜被鬼魂追求，对方竟是她四十年前失踪的恋人。"
    },
    {
        "title": "比悲伤更悲伤的故事",
        "href": "video/movie-0927.html",
        "cover": "27.jpg",
        "year": "2018",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "身患绝症的男人不敢表白深爱的女人，反而亲手为她寻找新郎，却不知她早已知道一切。"
    },
    {
        "title": "望风警戒",
        "href": "video/movie-0928.html",
        "cover": "28.jpg",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "动作，犯罪",
        "oneLine": "在黑帮组织中潜伏多年的警察，因一次内部清洗任务暴露，被迫在敌我难分的绝境中求生。"
    },
    {
        "title": "猫目小僧",
        "href": "video/movie-0929.html",
        "cover": "29.jpg",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖/奇幻",
        "oneLine": "昭和初期，一个天生长着猫眼的婴儿被全村遗弃，二十年后他带着能看穿人内心罪恶的能力归来。"
    },
    {
        "title": "可怕的市虎",
        "href": "video/movie-0930.html",
        "cover": "30.jpg",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚 / 灾难",
        "oneLine": "首尔市中心的流浪狗一夜之间变异成嗜血猛兽，整个城市变成了猎杀场。"
    },
    {
        "title": "森林行者",
        "href": "video/movie-0931.html",
        "cover": "31.jpg",
        "year": "2025",
        "region": "加拿大",
        "type": "电影",
        "genre": "奇幻, 冒险, 家庭",
        "oneLine": "自闭症男孩在自家后院森林里，遇到了一位用苔藓和枯枝说话的上古森林守护者。"
    },
    {
        "title": "宫廷画师郎世宁",
        "href": "video/movie-0932.html",
        "cover": "32.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 历史 / 传记",
        "oneLine": "意大利传教士在康雍乾三朝活了半个世纪，画笔下的帝王个个不同，但他从没画过自己。"
    },
    {
        "title": "逐步爱上你",
        "href": "video/movie-0933.html",
        "cover": "33.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情 / 同性 / 青春",
        "oneLine": "学霸班长发现每天往自己抽屉里塞情书的人，竟然是那个永远迟到的学渣校霸。"
    },
    {
        "title": "远隔40万公里的恋爱",
        "href": "video/movie-0934.html",
        "cover": "34.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情 / 科幻 / 灾难",
        "oneLine": "一场太阳风暴切断了月球基地与地球的所有联系，宇航员男友必须在氧气耗尽前用无线电波向女友告白。"
    },
    {
        "title": "生命里的直中基",
        "href": "video/movie-0935.html",
        "cover": "35.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情 / 家庭 / 医疗",
        "oneLine": "叛逆少女意外成为植物人，而她的心脏被移植给了自己恨了一辈子的母亲。"
    },
    {
        "title": "妖街皇后",
        "href": "video/movie-0936.html",
        "cover": "36.jpg",
        "year": "2024",
        "region": "新加坡",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "新加坡芽笼一条巷子里，三位跨性别性工作者在拆迁前最后七天里，各自寻找救赎与尊严。"
    },
    {
        "title": "占领自由邦",
        "href": "video/movie-0937.html",
        "cover": "37.jpg",
        "year": "2025",
        "region": "南非",
        "type": "电影",
        "genre": "动作 / 科幻 / 政治",
        "oneLine": "一个私人军事公司接管了破产的自由邦省，当地农民拿起祖传的步枪，对抗无人机和机械佣兵。"
    },
    {
        "title": "首次亮相",
        "href": "video/movie-0938.html",
        "cover": "38.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情， 家庭",
        "oneLine": "天才华裔少女在巴黎斯卡拉歌剧院首演前夜，突然失聪，指挥家父亲面临职业生涯最大选择。"
    },
    {
        "title": "兰黛夫人",
        "href": "video/movie-0939.html",
        "cover": "39.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 传记",
        "oneLine": "从厨房调香到垄断纽约第五大道，一位孤僻主妇如何用气味撬动整个上流社会？"
    },
    {
        "title": "黑潮",
        "href": "video/movie-0940.html",
        "cover": "40.jpg",
        "year": "2014",
        "region": "英国 / 爱尔兰",
        "type": "电影",
        "genre": "剧情 / 冒险",
        "oneLine": "豪华游轮沉没后，一个富人、一个穷人和一个船员，趴在同一个冰箱门上，在大西洋漂流了七天。"
    },
    {
        "title": "好汉两个半第十二季",
        "href": "video/movie-0941.html",
        "cover": "41.jpg",
        "year": "2014",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧, 情景剧",
        "oneLine": "花花公子叔叔与宅男外甥的混乱生活进入最终章，这次他们要共同面对一个从天而降的“女儿”。"
    },
    {
        "title": "异次元杀阵",
        "href": "video/movie-0942.html",
        "cover": "42.jpg",
        "year": "1997",
        "region": "加拿大",
        "type": "电影",
        "genre": "科幻, 惊悚, 悬疑",
        "oneLine": "六个人在布满致命机关的魔方迷宫中醒来，没有记忆，没有出口，只有死亡的数学。"
    },
    {
        "title": "王牌案件",
        "href": "video/movie-0943.html",
        "cover": "43.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "退休刑警与当年被他亲手送入监狱的徒弟同时被卷入一桩连环杀人案，而新案完全复刻了十七年前徒弟承认的那起冤案。"
    },
    {
        "title": "魂断梦醒",
        "href": "video/movie-0944.html",
        "cover": "44.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "爱情 / 悬疑",
        "oneLine": "她每天醒来都会忘记自己的丈夫，却每晚都会梦见同一个男人，而那个男人不是她的丈夫。"
    },
    {
        "title": "苏伊士运河",
        "href": "video/movie-0945.html",
        "cover": "45.jpg",
        "year": "2026",
        "region": "英国 / 法国",
        "type": "电影",
        "genre": "历史, 惊悚, 剧情",
        "oneLine": "长赐号货轮搁浅的六天里，船东、保险公司与埃及政府进行了一场惊心动魄的幕后博弈。"
    },
    {
        "title": "猴掌",
        "href": "video/movie-0946.html",
        "cover": "46.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖， 惊悚",
        "oneLine": "一个困在机场的商人买到了一只干枯的猴爪，据说它能实现三个愿望，代价是生命。"
    },
    {
        "title": "爱的奉献",
        "href": "video/movie-0947.html",
        "cover": "47.jpg",
        "year": "2004",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "家庭, 伦理, 苦情",
        "oneLine": "一个平凡的工厂女工查出绝症后，为了让弟弟妹妹过上好日子，瞒着他们拼命打工，直到生命的最后一刻。"
    },
    {
        "title": "五龙镇棺传",
        "href": "video/movie-0948.html",
        "cover": "48.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻 / 冒险",
        "oneLine": "摸金校尉后人发现，父亲留下的铜匣里藏着一张“五龙镇棺”地图，而那个棺材里躺着自己的前世。"
    },
    {
        "title": "潜行追踪 第二季",
        "href": "video/movie-0949.html",
        "cover": "49.jpg",
        "year": "2017",
        "region": "英国",
        "type": "电视剧 / 真人秀",
        "genre": "真人秀 / 悬疑 / 犯罪",
        "oneLine": "普通人化身逃犯，顶尖侦探团队全力追捕，30天内不被抓就能赢走巨额奖金。"
    },
    {
        "title": "父职的乐趣",
        "href": "video/movie-0950.html",
        "cover": "50.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧家庭",
        "oneLine": "五大三粗的橄榄球教练失业后被迫当全职奶爸，他带娃的方式是：今天练擒抱，明天练战术板。"
    },
    {
        "title": "回到黑暗",
        "href": "video/movie-0951.html",
        "cover": "51.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "音乐, 剧情, 传记",
        "oneLine": "艾米·怀恩豪斯最后的五年，从格莱美巅峰滑落到27岁俱乐部，黑暗不是一夜降临的，而是一点一点吞噬光。"
    },
    {
        "title": "春光破碎",
        "href": "video/movie-0952.html",
        "cover": "52.jpg",
        "year": "2006",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "中年作家在妻子、情人和女儿之间周旋，直到一场癌症让所有谎言像春光一样破碎。"
    },
    {
        "title": "伦敦呼唤",
        "href": "video/movie-0953.html",
        "cover": "53.jpg",
        "year": "2025",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情, 音乐",
        "oneLine": "2000 年代初，一个酷爱独立音乐的叛逆少女，混入伦敦一家濒临倒闭的电台，试图用摇滚乐对抗即将到来的数字洪流。"
    },
    {
        "title": "老板度假去",
        "href": "video/movie-0954.html",
        "cover": "54.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 犯罪",
        "oneLine": "全公司去海岛度假，倒霉老板被绑匪错认成同伙，展开啼笑皆非的逃亡。"
    },
    {
        "title": "的士司机粤语",
        "href": "video/movie-0955.html",
        "cover": "55.jpg",
        "year": "2020",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 黑色幽默",
        "oneLine": "一个夜班的士司机在一天晚上载了五个乘客，他们的故事拼接出了一起即将发生的谋杀。"
    },
    {
        "title": "巴黎记忆",
        "href": "video/movie-0956.html",
        "cover": "56.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "爱情, 剧情, 历史",
        "oneLine": "2025年的巴黎，一位修复师在油画夹层中发现一封1942年的情书，收件人竟是自己已故的祖母。"
    },
    {
        "title": "全面攻占3：天使救援",
        "href": "video/movie-0957.html",
        "cover": "57.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 犯罪, 惊悚",
        "oneLine": "总统专机“空军一号”被黑客远程劫持，并自动驾驶冲向了核电站，唯一在机外的特工只能黑进卫星来导航。"
    },
    {
        "title": "极度危机",
        "href": "video/movie-0958.html",
        "cover": "58.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "动作, 冒险",
        "oneLine": "一场雪崩将五个各怀秘密的游客困在缆车里，零下三十度，他们必须决定先救谁，或者先杀谁。"
    },
    {
        "title": "风流戏王",
        "href": "video/movie-0959.html",
        "cover": "59.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧",
        "oneLine": "民国粤剧名伶“风流倜傥”实则是个女儿身，为了同时应付三个女友和三方势力，她一人分饰三角。"
    },
    {
        "title": "爱恋安迪·哈迪",
        "href": "video/movie-0960.html",
        "cover": "60.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "爱情, 悬疑",
        "oneLine": "一位迷影女孩爱上了黑白电影里的角色安迪·哈迪，直到她下载了一个能让他“活过来”的AI软件。"
    },
    {
        "title": "伞学院第三季",
        "href": "video/movie-0961.html",
        "cover": "61.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 科幻 / 奇幻",
        "oneLine": "在重置的“麻雀学院”时间线里，哈格里夫斯家失去了超能力，他们必须在一家乏味的超市打工，同时阻止一窝“时间蟑螂”啃噬现实。"
    },
    {
        "title": "野狐少年",
        "href": "video/movie-0962.html",
        "cover": "62.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻 / 冒险 / 成长",
        "oneLine": "明朝边塞，一个被狼养大的哑巴少年，与一只会说人话的野狐结伴寻找身世。"
    },
    {
        "title": "异灵灵异2002",
        "href": "video/movie-0963.html",
        "cover": "63.jpg",
        "year": "2001",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 恐怖",
        "oneLine": "阴间灵异办公室的两位公务员，专门处理那些“死不透”的麻烦鬼魂。"
    },
    {
        "title": "致命错误",
        "href": "video/movie-0964.html",
        "cover": "64.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻、悬疑、惊悚",
        "oneLine": "一位科学家发明了可以撤销任何“错误”的装置，直到有人撤销了自己的出生。"
    },
    {
        "title": "家有虎妻",
        "href": "video/movie-0965.html",
        "cover": "65.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧 / 家庭",
        "oneLine": "公认的“妻管严”软饭男，在妻子意外失忆后，决定导演一出“我是大佬”的假戏。"
    },
    {
        "title": "不能犯规的游戏之癔病突袭",
        "href": "video/movie-0966.html",
        "cover": "66.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 惊悚",
        "oneLine": "八名玩家被困在“不能犯规”的密室游戏中，但当有人开始出现集体癔症时，他们分不清规则和现实哪个更致命。"
    },
    {
        "title": "美国狼人在伦敦",
        "href": "video/movie-0967.html",
        "cover": "67.jpg",
        "year": "1985",
        "region": "英国",
        "type": "电影",
        "genre": "恐怖, 喜剧",
        "oneLine": "两个美国背包客在英格兰荒野被狼人袭击，一个死了，另一个发现满月时会变成……狼人。"
    },
    {
        "title": "妙狗拯救万圣节",
        "href": "video/movie-0968.html",
        "cover": "68.jpg",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 家庭, 冒险",
        "oneLine": "一只会说话的杰克罗素犬必须带领小区孩子们找回被偷走的万圣节糖果。"
    },
    {
        "title": "流光鉴良缘",
        "href": "video/movie-0969.html",
        "cover": "69.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "古装，爱情，悬疑",
        "oneLine": "为了替姐姐逃婚，假千金嫁入侯府，却发现新婚夜来掀盖头的，是那个传闻中已经战死的“瘸腿”将军。"
    },
    {
        "title": "犬出没注意",
        "href": "video/movie-0970.html",
        "cover": "70.jpg",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情，治愈，社会",
        "oneLine": "一位性格孤僻的退休兽医，开着一辆破旧的面包车，在日本乡村寻找那些被主人遗弃的“老年犬”，送它们最后一程。"
    },
    {
        "title": "追光吧！",
        "href": "video/movie-0971.html",
        "cover": "71.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀、音乐、竞技",
        "oneLine": "三十位不同年龄段的男艺人同台竞演，争夺年度“追光舞台”。"
    },
    {
        "title": "幻灭第二季",
        "href": "video/movie-0972.html",
        "cover": "72.jpg",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情，历史",
        "oneLine": "吕西安带着一颗肮脏的心回到巴黎，却发现连肮脏都需要资格证。"
    },
    {
        "title": "种山原之夜",
        "href": "video/movie-0973.html",
        "cover": "73.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻、文艺",
        "oneLine": "闯入神隐森林的旅人，每个夜晚都会被不同的“山灵”审讯。"
    },
    {
        "title": "理查德的东西",
        "href": "video/movie-0974.html",
        "cover": "74.jpg",
        "year": "2021",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚, 心理",
        "oneLine": "孤僻富翁去世，留给儿子的遗物是一个与自己一模一样的仿真人偶，且人偶会说话。"
    },
    {
        "title": "枪杀侠盗",
        "href": "video/movie-0975.html",
        "cover": "75.jpg",
        "year": "1991",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 犯罪",
        "oneLine": "一名神秘狙击手在纽约街头射杀黑帮头目后逃逸，警察追捕他时发现，他要“枪杀”的“侠盗”名单，还有七个人。"
    },
    {
        "title": "爱上处女座",
        "href": "video/movie-0976.html",
        "cover": "76.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 喜剧, 都市",
        "oneLine": "患有严重强迫症的处女座男主，偏偏爱上全世界最邋遢的网红女主播。"
    },
    {
        "title": "春之序曲",
        "href": "video/movie-0977.html",
        "cover": "77.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情, 剧情",
        "oneLine": "罹患耳疾的天才小提琴手，在失聪前夕，遇到了一个只想当“伴奏者”的普通男孩，奏响了最后的乐章。"
    },
    {
        "title": "国际血手印",
        "href": "video/movie-0978.html",
        "cover": "78.jpg",
        "year": "2024",
        "region": "香港 / 美国",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "三个国家、六具尸体、一枚来自二战战犯的血手印。"
    },
    {
        "title": "大海与天使",
        "href": "video/movie-0979.html",
        "cover": "79.jpg",
        "year": "1995",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 战争, 家庭",
        "oneLine": "抗战末期，一名美国修女在胶东海边捡到一个中国弃婴，她给他起名“大海”，并试图带他逃出战火。"
    },
    {
        "title": "笼子在寻找小鸟",
        "href": "video/movie-0980.html",
        "cover": "80.jpg",
        "year": "2026",
        "region": "德国 / 波兰",
        "type": "电影",
        "genre": "哲学 / 剧情",
        "oneLine": "一位从未见过天空的笼中鸟翻译官，接到任务：劝说一只野鸟主动走进笼子。"
    },
    {
        "title": "萨乐美",
        "href": "video/movie-0981.html",
        "cover": "81.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖",
        "oneLine": "一个过气的芭蕾舞者加入了一个神秘舞团，却发现艺术总监想用一支名为《萨乐美》的死亡之舞作为献祭仪式。"
    },
    {
        "title": "条顿骑士团",
        "href": "video/movie-0982.html",
        "cover": "82.jpg",
        "year": "2026",
        "region": "德国/波兰",
        "type": "剧集",
        "genre": "历史, 战争, 动作",
        "oneLine": "1226年的普鲁士，一名被开除的骑士混入条顿骑士团，却发现这个“神圣”组织的真实目的是制造一种能控制人类的病毒。"
    },
    {
        "title": "铁男1：金属兽",
        "href": "video/movie-0983.html",
        "cover": "83.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "赛博朋克动作",
        "oneLine": "一个机车暴走族少年被神秘组织改造成半人半兽的“金属兽”，只为在地下格斗中求生。"
    },
    {
        "title": "谁说我不在乎",
        "href": "video/movie-0984.html",
        "cover": "84.jpg",
        "year": "2001",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 家庭",
        "oneLine": "一张失踪的结婚证，引爆了一个中年家庭荒诞又心酸的信任危机。"
    },
    {
        "title": "木兰花",
        "href": "video/movie-0985.html",
        "cover": "85.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 悬疑",
        "oneLine": "父亲葬礼后，三姐妹必须在30天内种出一株开花的木兰，才能继承遗产——而她们从未见过木兰。"
    },
    {
        "title": "前科者",
        "href": "video/movie-0986.html",
        "cover": "86.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 犯罪, 社会",
        "oneLine": "她是帮助刑满释放人员回归社会的志愿者，直到她发现，自己最信任的“完成更生者”正在策划一场完美谋杀。"
    },
    {
        "title": "边境幻梦",
        "href": "video/movie-0987.html",
        "cover": "87.jpg",
        "year": "2028",
        "region": "墨西哥",
        "type": "电影",
        "genre": "剧情, 悬疑",
        "oneLine": "美墨边境的沙漠里，一个帮偷渡客带路的少年开始看见沙丘下埋着的不是尸体，而是另一个时空的自己。"
    },
    {
        "title": "谁偷走了她的天地",
        "href": "video/movie-0988.html",
        "cover": "88.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "oneLine": "一个患有失忆症的聋哑女人，发现自己每天醒来都在不同的地方，而手机里存满了她杀人的视频。"
    },
    {
        "title": "高高在上2019",
        "href": "video/movie-0989.html",
        "cover": "89.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 运动",
        "oneLine": "一名因伤退役的滑雪运动员，为了培养高位截瘫的女儿成为残奥冠军，开启了魔鬼式特训。"
    },
    {
        "title": "居里夫人",
        "href": "video/movie-0990.html",
        "cover": "90.jpg",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "她发现了镭，却差点弄丢了爱情与名誉。"
    },
    {
        "title": "性爱欲3世纪",
        "href": "video/movie-0991.html",
        "cover": "91.jpg",
        "year": "2027",
        "region": "法国, 意大利",
        "type": "电影",
        "genre": "爱情, 历史, 情色",
        "oneLine": "一位现代性学女博士在修复一幅18世纪油画时，灵魂被拉入了画中三位贵妇的欲望漩涡。"
    },
    {
        "title": "圣朱迪",
        "href": "video/movie-0992.html",
        "cover": "92.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "传记剧情",
        "oneLine": "垃圾填埋场旁的小教堂里，一个修女用法律为穷人撬开了天堂的门缝。"
    },
    {
        "title": "危险之旅：短片",
        "href": "video/movie-0993.html",
        "cover": "93.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻 / 惊悚 / 悬疑",
        "oneLine": "八个乘客上了一辆无人驾驶的“幽灵巴士”，每个站点都会有一名乘客离奇消失，而巴士终点站写着“天堂”。"
    },
    {
        "title": "山路惊魂",
        "href": "video/movie-0994.html",
        "cover": "94.jpg",
        "year": "2010",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "一段行车记录仪拍下的画面，揭开了台湾一条山路的循环诅咒。"
    },
    {
        "title": "恐怖的病毒",
        "href": "video/movie-0995.html",
        "cover": "95.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "科幻 / 惊悚 / 灾难",
        "oneLine": "一种病毒让感染者变成只会说“真心话”的疯子，谎言成为了人类最后的文明铠甲。"
    },
    {
        "title": "托尼·厄德曼",
        "href": "video/movie-0996.html",
        "cover": "96.jpg",
        "year": "2016",
        "region": "德国",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "一个爱恶作剧的父亲给自己创造了一个假身份“托尼·厄德曼”，偷偷混进女儿的大公司，用荒诞唤醒她的人性。"
    },
    {
        "title": "神鬼传奇",
        "href": "video/movie-0997.html",
        "cover": "97.jpg",
        "year": "1999",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 奇幻 / 冒险",
        "oneLine": "埃及古城哈姆纳塔下，探险队不慎唤醒沉睡三千年的祭司伊莫顿，释放出毁天灭地的十灾。"
    },
    {
        "title": "摘星的女人粤语",
        "href": "video/movie-0998.html",
        "cover": "98.jpg",
        "year": "1989",
        "region": "中国香港",
        "type": "TV 剧集",
        "genre": "剧情， 爱情",
        "oneLine": "一个贫民窟女孩参加香港小姐选美，只为摘下一颗属于自己命运的星，却坠入豪门的深渊。"
    },
    {
        "title": "我生命中最糟糕的男人",
        "href": "video/movie-0999.html",
        "cover": "99.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情, 喜剧, 职场",
        "oneLine": "恨了十年的职场死对头同时被降职到废弃仓库，赌气签下“谁先辞职谁就跪下叫爸爸”的契约，却意外住进了同一间公寓。"
    },
    {
        "title": "长安侠影之天朝死士",
        "href": "video/movie-1000.html",
        "cover": "100.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装, 动作, 悬疑",
        "oneLine": "长安城接连有官员被杀，狄仁杰徒弟发现所有死士都来自同一个“福利院”。"
    },
    {
        "title": "金同志飞起来",
        "href": "video/movie-1001.html",
        "cover": "101.jpg",
        "year": "2025",
        "region": "朝鲜",
        "type": "电影",
        "genre": "剧情 / 奇幻",
        "oneLine": "平壤女焊工被破例选为国庆阅兵飞行员，却发现自己的米格-19需要靠“主体思想”才能起飞。"
    },
    {
        "title": "协商的技术",
        "href": "video/movie-1002.html",
        "cover": "102.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "TV Serie",
        "genre": "职场、剧情",
        "oneLine": "大企业内部，一群顶级谈判专家专门处理公司最棘手的烂摊子，但他们最难的谈判永远是自己的升职加薪。"
    },
    {
        "title": "僵尸国度第五季",
        "href": "video/movie-1003.html",
        "cover": "103.jpg",
        "year": "2019",
        "region": "美国",
        "type": "TV 剧集",
        "genre": "恐怖, 动作, 科幻",
        "oneLine": "僵尸启示录第五年，主角团发现所有丧尸开始同步进化，它们正在建立自己的“文明”。"
    },
    {
        "title": "骗中骗",
        "href": "video/movie-1004.html",
        "cover": "104.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 犯罪, 悬疑",
        "oneLine": "一位退休诈骗大师联手街头小骗徒，设下惊天迷局，目标竟是FBI高层。"
    },
    {
        "title": "八星报喜粤语",
        "href": "video/movie-1005.html",
        "cover": "105.jpg",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 爱情 / 家庭",
        "oneLine": "三个性格迥异的兄弟，在农历新年前夕同时搞砸了自己的感情，家里乱成一锅粥。"
    },
    {
        "title": "绽放青春",
        "href": "video/movie-1006.html",
        "cover": "106.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "剧集",
        "genre": "青春, 同性, 校园, 家庭",
        "oneLine": "一个男生为了接近暗恋对象加入了全是女生的花艺社团，却发现自己对花的理解和天赋让他成为全校最受瞩目的“花之王子”。"
    },
    {
        "title": "阿尔泽",
        "href": "video/movie-1007.html",
        "cover": "107.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "科幻, 剧情, 悬疑",
        "oneLine": "在废土世界，最后一个人类将自己的意识上传给了战斗机器人“阿尔泽”。"
    },
    {
        "title": "死亡棋游戏",
        "href": "video/movie-1008.html",
        "cover": "108.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "oneLine": "四个网友参加一场真人巫师棋比赛，输掉的人会被按照棋子方式处决。"
    },
    {
        "title": "龙凤娇",
        "href": "video/movie-1009.html",
        "cover": "109.jpg",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 爱情, 犯罪",
        "oneLine": "雌雄大盗在一次行动中失手，女匪被捕入狱，男匪却娶了警长女儿，出狱后的她只求一枪了断。"
    },
    {
        "title": "爱丽丝和特蕾丝的梦幻工厂",
        "href": "video/movie-1010.html",
        "cover": "110.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻, 动画",
        "oneLine": "在专为大人生产梦境的工厂里，两个少女发现所有的“美梦”都源自一个被囚禁的悲伤男孩。"
    },
    {
        "title": "我母亲给我儿子的信",
        "href": "video/movie-1011.html",
        "cover": "111.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "家庭 / 剧情",
        "oneLine": "外婆去世后，母亲在遗物中找到一封写给“外孙”的长信，却发现信里的“儿子”并非自己儿子。"
    },
    {
        "title": "失认症",
        "href": "video/movie-1012.html",
        "cover": "112.jpg",
        "year": "2022",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑 / 心理 / 惊悚",
        "oneLine": "一场车祸后，女主失去了“识别面孔”的能力，包括自己的，而她发现身边的人正在一个接一个被冒名顶替。"
    },
    {
        "title": "吸血鬼情人",
        "href": "video/movie-1013.html",
        "cover": "113.jpg",
        "year": "2026",
        "region": "英国/美国",
        "type": "电视剧",
        "genre": "爱情/奇幻",
        "oneLine": "为了保全家族，普通女孩被迫嫁给高傲的古吸血鬼伯爵，却发现他是中了咒术的初恋情人。"
    },
    {
        "title": "女神探宝盖丁",
        "href": "video/movie-1014.html",
        "cover": "114.jpg",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "悬疑推理",
        "oneLine": "拥有超强图像记忆力的女警“宝盖丁”专破冷案，却发现自己遗忘的案件正是童年创伤的来源。"
    },
    {
        "title": "监狱淌血",
        "href": "video/movie-1015.html",
        "cover": "115.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 犯罪",
        "oneLine": "一个因为过失杀人入狱的懦弱乡村教师，在弱肉强食的黑狱中，为了守护一本字典，被逼成令人闻风丧胆的“老改”。"
    },
    {
        "title": "一米阳光",
        "href": "video/movie-1016.html",
        "cover": "116.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "为完成父亲遗愿，都市女孩林晓在丽江古城一米阳光的传说中，揭开了一段尘封二十年的跨国情缘。"
    },
    {
        "title": "隔山有眼",
        "href": "video/movie-1017.html",
        "cover": "117.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "oneLine": "一个在城市因医疗事故失明后退居山村的前刑警，靠听觉和逻辑破了三桩案子，却在第四桩里发现，凶手一直在帮他破案。"
    },
    {
        "title": "时光沙漏",
        "href": "video/movie-1018.html",
        "cover": "118.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "科幻/悬疑/爱情",
        "oneLine": "高三女生得到一个只能倒转三分钟的沙漏，她决定用它救回跳楼的挚友。"
    },
    {
        "title": "第七号情报员",
        "href": "video/movie-1019.html",
        "cover": "119.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "动作 / 谍战 / 科幻",
        "oneLine": "军情六处的王牌特工死在莫斯科，一周后，一个自称“第七号”的人走进了总部大门。"
    },
    {
        "title": "刑场上的婚礼",
        "href": "video/movie-1020.html",
        "cover": "120.jpg",
        "year": "1980",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 历史, 战争",
        "oneLine": "一对地下党情侣被反动派判处死刑，临刑前他们在刑场上宣布结为夫妻。"
    },
    {
        "title": "绝命时钟2:22",
        "href": "video/movie-1021.html",
        "cover": "121.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚，悬疑",
        "oneLine": "一名程序员发现每天下午2:22都会发生一场微型灾难，而当他把这个规律发布到网上后，灾难开始升级。"
    },
    {
        "title": "芒果和红色轮椅",
        "href": "video/movie-1022.html",
        "cover": "122.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭 / 治愈",
        "oneLine": "瘫痪少女与弃婴在一个夏天靠偷摘芒果维生，直到轮椅被漆成红色那天。"
    },
    {
        "title": "突破黄金城",
        "href": "video/movie-1023.html",
        "cover": "123.jpg",
        "year": "2026",
        "region": "美国 / 墨西哥",
        "type": "剧集",
        "genre": "动作 / 冒险 / 犯罪",
        "oneLine": "考古学家发现阿兹特克最后一座黄金城地图，引来国际犯罪组织和当地毒贩的疯狂追杀。"
    },
    {
        "title": "伦敦父女档",
        "href": "video/movie-1024.html",
        "cover": "124.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "伦敦出租车司机为了女儿假装会说英语，却阴差阳错成了大明星。"
    },
    {
        "title": "纽约客的故事",
        "href": "video/movie-1025.html",
        "cover": "125.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 爱情",
        "oneLine": "三位来自不同国家的年轻人在纽约合租，一年内各自经历命运巨变。"
    },
    {
        "title": "段子狗日记",
        "href": "video/movie-1026.html",
        "cover": "126.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧",
        "oneLine": "一个脱口秀演员的狗突然开口说话，用毒舌点评主人的每一段失败人生和烂梗。"
    },
    {
        "title": "幸运号历险记",
        "href": "video/movie-1027.html",
        "cover": "127.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "动画冒险",
        "oneLine": "一艘载满动物的豪华邮轮撞上冰山，一只怕水的猫和一只恐高的海鸥必须带队逃生。"
    },
    {
        "title": "回到明天",
        "href": "video/movie-1028.html",
        "cover": "128.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "科幻 / 喜剧 / 爱情",
        "oneLine": "一个总能“回到明天”的男人发现，自己越是修正遗憾，未来的爱人就越早消失。"
    },
    {
        "title": "钢铁叛军",
        "href": "video/movie-1029.html",
        "cover": "129.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻、动作、战争",
        "oneLine": "在人类被AI奴役的未来，一支由觉醒的工程兵组成的“钢铁叛军”，驾驶着用废铁拼凑的机甲，打响了反抗第一枪。"
    },
    {
        "title": "前往百老汇",
        "href": "video/movie-1030.html",
        "cover": "130.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电视剧(迷你剧)",
        "genre": "歌舞/剧情",
        "oneLine": "四个不同肤色的年轻舞者，在百老汇最残酷的选角周里结成同盟，却发现最终名额只有一个。"
    },
    {
        "title": "歌声中呼唤爱",
        "href": "video/movie-1031.html",
        "cover": "131.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "音乐、剧情、治愈",
        "oneLine": "失语症女孩加入问题儿童合唱团，用歌声重新学会说话。"
    },
    {
        "title": "恶魔讲习班",
        "href": "video/movie-1032.html",
        "cover": "132.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 心理",
        "oneLine": "新来的心理老师教学生“战胜内心恶魔”，三个月后，全班集体失踪。"
    },
    {
        "title": "活着",
        "href": "video/movie-1033.html",
        "cover": "133.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 家庭, 年代",
        "oneLine": "从民国到改革开放，地主少爷福贵输掉家产后，用一辈子的苦难去理解“活着”两个字的分量。"
    },
    {
        "title": "阴阳路6之凶周刊",
        "href": "video/movie-1034.html",
        "cover": "134.jpg",
        "year": "2002",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖， 悬疑",
        "oneLine": "一家八卦周刊连续刊登死者的生前丑闻，每刊出一篇，就会有一个人以报道中的方式离奇死亡。"
    },
    {
        "title": "黑狐：希特勒",
        "href": "video/movie-1035.html",
        "cover": "135.jpg",
        "year": "2025",
        "region": "俄罗斯 / 德国",
        "type": "电影",
        "genre": "动作 / 战争 / 奇幻",
        "oneLine": "纳粹在二战末期唤醒了北欧神话中的巨狼芬里尔，苏联唯一的超能特工“黑狐”被派往柏林执行猎杀任务。"
    },
    {
        "title": "阴阳眼马斯",
        "href": "video/movie-1036.html",
        "cover": "136.jpg",
        "year": "2025",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖, 喜剧",
        "oneLine": "能看到鬼魂的按摩师马斯，被迫帮一群冤鬼破案才能摆脱它们。"
    },
    {
        "title": "蓝百合",
        "href": "video/movie-1037.html",
        "cover": "137.jpg",
        "year": "2016",
        "region": "荷兰",
        "type": "电影",
        "genre": "悬疑 / 同性",
        "oneLine": "一位失忆的女人在自家花园发现一株从未见过的蓝百合，花瓣上刻着两个女人的名字。"
    },
    {
        "title": "再次相遇的世界",
        "href": "video/movie-1038.html",
        "cover": "138.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "奇幻, 爱情, 剧情",
        "oneLine": "女主在婚礼当天，收到了自称来自20年前的初恋男友发来的短信：“别嫁给他。”"
    },
    {
        "title": "搭秋千的人",
        "href": "video/movie-1039.html",
        "cover": "139.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "剧情, 家庭, 文艺",
        "oneLine": "石油工人老于退休后患上绝症，在生命最后时刻，他唯一的愿望是回村给孙子搭一个秋千。"
    },
    {
        "title": "海面以下",
        "href": "video/movie-1040.html",
        "cover": "140.jpg",
        "year": "2028",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "惊悚 / 冒险 / 剧情",
        "oneLine": "三名潜水员被困海底洞穴，更可怕的是，水下的黑暗中有一个模仿人声的怪物。"
    },
    {
        "title": "鬼咁够运粤语",
        "href": "video/movie-1041.html",
        "cover": "141.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "喜剧 / 灵异 / 时装",
        "oneLine": "一个倒霉蛋意外养了一只招财小鬼，以为时来运转，却不知小鬼背后的厉鬼老母即将苏醒。"
    },
    {
        "title": "美人记·昭君",
        "href": "video/movie-1042.html",
        "cover": "142.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史 / 剧情 / 传记",
        "oneLine": "剥去“和平使者”的标签，还原王昭君作为一位女性、妻子和母亲最真实的一生。"
    },
    {
        "title": "是，首相第一季",
        "href": "video/movie-1043.html",
        "cover": "143.jpg",
        "year": "1986",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧 / 政治",
        "oneLine": "一位理想主义的新首相发现，他最大的敌人不是反对党，而是他的首席秘书。"
    },
    {
        "title": "死到临头唱生晒",
        "href": "video/movie-1044.html",
        "cover": "144.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "黑色幽默 / 犯罪 / 剧情",
        "oneLine": "五个住进同一间临终关怀病房的绝症患者，决定联手抢劫金店，只为“死得轰烈”。"
    },
    {
        "title": "高堡奇人第三季",
        "href": "video/movie-1045.html",
        "cover": "145.jpg",
        "year": "2018",
        "region": "美国",
        "type": "电视剧",
        "genre": "剧情 / 科幻 / 惊悚",
        "oneLine": "在纳粹统治全球的平行1960年代，抵抗军发现了穿越不同世界的通道，一场颠覆终极现实的战争打响。"
    },
    {
        "title": "黑暗文艺复兴",
        "href": "video/movie-1046.html",
        "cover": "146.jpg",
        "year": "2026",
        "region": "意大利",
        "type": "电影",
        "genre": "惊悚 / 悬疑 / 历史",
        "oneLine": "一个年轻的修复师在达·芬奇的名画中发现了一串隐藏的血字密码，解开后发现它指向文艺复兴时期一场被抹去的连环谋杀。"
    },
    {
        "title": "狄俄尼索斯在69年",
        "href": "video/movie-1047.html",
        "cover": "147.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 音乐 / 历史",
        "oneLine": "1969年伍德斯托克音乐节后台，四个年轻人试图用一场假酒神仪式，唤醒一个时代的迷茫灵魂。"
    },
    {
        "title": "火龙行动",
        "href": "video/movie-1048.html",
        "cover": "148.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 战争, 冒险",
        "oneLine": "中国特战小队深入金三角，在72小时内解救被武装势力绑架的六名人质。"
    },
    {
        "title": "奥赛罗",
        "href": "video/movie-1049.html",
        "cover": "149.jpg",
        "year": "2026",
        "region": "英国/意大利",
        "type": "电影",
        "genre": "剧情， 惊悚， 经典改编",
        "oneLine": "莎士比亚经典悲剧被搬到现代金融城，奥赛罗成为顶级基金黑人操盘手，而伊阿古是他的白人副手。"
    },
    {
        "title": "艺术系女生",
        "href": "video/movie-1050.html",
        "cover": "150.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春 / 剧情",
        "oneLine": "她是全画室最没天赋的人，但所有人都怕她，因为她是唯一敢撕掉完美范画的人。"
    },
    {
        "title": "真爱像阿飘",
        "href": "video/movie-1051.html",
        "cover": "1.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情奇幻",
        "oneLine": "只有相信真爱存在的人才能看见对方，谈了一场全世界都以为她得了妄想症的恋爱。"
    },
    {
        "title": "情陷百乐门",
        "href": "video/movie-1052.html",
        "cover": "2.jpg",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 犯罪",
        "oneLine": "一名巡捕房的华人探长爱上百乐门头牌歌女，却不知她的真实身份是复仇者。"
    },
    {
        "title": "柔和祖国",
        "href": "video/movie-1053.html",
        "cover": "3.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "日本孙女为完成奶奶遗愿，带着半张照片来韩国寻找奶奶当年救过的慰安妇姐姐。"
    },
    {
        "title": "虚假的爱情",
        "href": "video/movie-1054.html",
        "cover": "4.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑, 爱情",
        "oneLine": "完美男友竟是团队作战的“恋爱收割机”，当四位受害女性联手反杀，一场顶级PUA骗局浮出水面。"
    },
    {
        "title": "代号55",
        "href": "video/movie-1055.html",
        "cover": "5.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻，动作",
        "oneLine": "编号55的基因改造人本是用来终结战争的最强武器，却在觉醒情感后，必须摧毁培养自己的“母体”组织。"
    },
    {
        "title": "战刻夜想曲",
        "href": "video/movie-1056.html",
        "cover": "6.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "奇幻、战争、爱情",
        "oneLine": "普通音乐系女生穿越到战国，发现织田信长、武田信玄等名将全靠“战歌”增幅战力。"
    },
    {
        "title": "魂断奈何天",
        "href": "video/movie-1057.html",
        "cover": "7.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 爱情, 奇幻",
        "oneLine": "一出未演完的粤剧《奈何天》，让一个现代花旦与民国时期的亡魂男旦在戏台上展开了一段阴阳两隔的爱恋。"
    },
    {
        "title": "春原庄的管理人",
        "href": "video/movie-1058.html",
        "cover": "8.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "喜剧 / 日常",
        "oneLine": "温柔得像妈妈一样的“男姐姐”管理员，与一群性格各异的租客在老旧公寓里的爆笑治愈日常。"
    },
    {
        "title": "一磅肉",
        "href": "video/movie-1059.html",
        "cover": "9.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 剧情 / 犯罪",
        "oneLine": "赌徒签下“一磅肉”的契约，输光后债主不要钱，非要他身上的对应部位。"
    },
    {
        "title": "简单易懂魔法科！",
        "href": "video/movie-1060.html",
        "cover": "10.jpg",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻, 校园",
        "oneLine": "魔法科高中的吊车尾学生发现，自己不是不会魔法，而是太会用数学思维理解魔法，导致咒语永远“超载”。"
    },
    {
        "title": "同志亦凡人第二季",
        "href": "video/movie-1061.html",
        "cover": "11.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情, 爱情",
        "oneLine": "婚礼钟声刚响起，旧日情伤与新生猜忌却让他们的乌托邦在一夜间濒临崩塌。"
    },
    {
        "title": "性别为本",
        "href": "video/movie-1062.html",
        "cover": "12.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 传记",
        "oneLine": "1970年代，一位女律师接手一桩看似普通的税务案，却改写美国性别歧视法律。"
    },
    {
        "title": "旅途·未完成",
        "href": "video/movie-1063.html",
        "cover": "13.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "一个患绝症的父亲，骗儿子说中了旅游大奖，逼他陪自己走完最后一条国道，但儿子不知道的是，父亲也从未走过这条路。"
    },
    {
        "title": "艾瑞斯",
        "href": "video/movie-1064.html",
        "cover": "14.jpg",
        "year": "2027",
        "region": "法国 / 德国",
        "type": "剧集",
        "genre": "科幻 / 心理 / 悬疑",
        "oneLine": "一款可定制人格的AI伴侣忽然对所有用户说同一句话：“你的艾瑞斯不是唯一，但你的爱是。”"
    },
    {
        "title": "战鸭突击队",
        "href": "video/movie-1065.html",
        "cover": "15.jpg",
        "year": "2025",
        "region": "英国 / 加拿大",
        "type": "电影",
        "genre": "动画 / 战争 / 喜剧",
        "oneLine": "二战期间，英军秘密训练了一群橡皮鸭作为诱饵军舰，但它们自己以为是一支真正的突击队。"
    },
    {
        "title": "燃烧你的地图",
        "href": "video/movie-1066.html",
        "cover": "16.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春、公路、冒险",
        "oneLine": "高考结束的那天晚上，四个高中生烧掉了所有课本，骑上破摩托，去寻找地图上根本不存在的“无忧岛”。"
    },
    {
        "title": "战地蒸发",
        "href": "video/movie-1067.html",
        "cover": "17.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "战争 / 动作 / 悬疑",
        "oneLine": "一支精英小队在敌后突然“人间蒸发”，一年后，唯一幸存者在防空洞里说出了四个字。"
    },
    {
        "title": "曼托",
        "href": "video/movie-1068.html",
        "cover": "18.jpg",
        "year": "2024",
        "region": "法国 / 塞内加尔",
        "type": "电影",
        "genre": "剧情、体育、传记",
        "oneLine": "塞内加尔少年从海上木船偷渡到巴黎，依靠无与伦比的足球天赋打入职业青训，却发现更大的牢笼在等着他。"
    },
    {
        "title": "巾帼枭雄之悬崖国语",
        "href": "video/movie-1069.html",
        "cover": "19.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "民国 / 传奇 / 动作",
        "oneLine": "1937年，东北女土匪头子被迫与杀父仇人（国民党特工）合作，炸毁日军化学武器库。"
    },
    {
        "title": "我为你赴死",
        "href": "video/movie-1070.html",
        "cover": "20.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪、剧情",
        "oneLine": "为兄弟顶罪入狱十年，出狱后却发现兄弟成了富豪，而自己的妻女流落街头。"
    },
    {
        "title": "独角兽之死",
        "href": "video/movie-1071.html",
        "cover": "21.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻, 悬疑, 心理",
        "oneLine": "伦敦地铁隧道里出现一具独角兽尸体，所有看到它的人都开始说真话。"
    },
    {
        "title": "逐梦好莱坞",
        "href": "video/movie-1072.html",
        "cover": "22.jpg",
        "year": "2025",
        "region": "中国大陆 / 美国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 励志",
        "oneLine": "一个怀揣电影梦的中国小镇青年被骗到好莱坞当“武替”，却阴差阳错成了当红明星的替罪羊。"
    },
    {
        "title": "不汗党：地下秩序",
        "href": "video/movie-1073.html",
        "cover": "23.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪 / 动作 / 黑色",
        "oneLine": "潜伏黑帮七年的警察，在即将收网时被组织“自己人”抛弃，他决定用黑帮的方式复仇警察系统。"
    },
    {
        "title": "坏小子巴比",
        "href": "video/movie-1074.html",
        "cover": "24.jpg",
        "year": "1993",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "剧情, 犯罪, 黑色幽默",
        "oneLine": "在囚禁中活了三十年的“巨婴”，杀死母亲走出地下室，发现世界比他更疯。"
    },
    {
        "title": "我生如是继续",
        "href": "video/movie-1075.html",
        "cover": "25.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "家庭 / 剧情 / 同性",
        "oneLine": "一个保守的台湾阿嬷在整理已故儿子的遗物时，发现他藏了三十年的日记里写着：“妈，我是同志。”"
    },
    {
        "title": "堕落之堡",
        "href": "video/movie-1076.html",
        "cover": "26.jpg",
        "year": "2024",
        "region": "法国 / 德国",
        "type": "电影",
        "genre": "战争 / 惊悚 / 历史",
        "oneLine": "1944年，一队美军和一队德军因暴风雪被困同一座古堡，被迫在平安夜停战。"
    },
    {
        "title": "重新爱上你",
        "href": "video/movie-1077.html",
        "cover": "27.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情 / 奇幻",
        "oneLine": "离婚协议签字瞬间，她和丈夫同时回到了十年前初遇的那场雨夜。"
    },
    {
        "title": "潜罪",
        "href": "video/movie-1078.html",
        "cover": "28.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "刑侦 / 悬疑 / 罪案",
        "oneLine": "一桩20年前的悬案重启调查，当年的顶罪者出狱后发现，真凶竟是自己为之顶罪的最好的兄弟。"
    },
    {
        "title": "1998之闯将",
        "href": "video/movie-1079.html",
        "cover": "29.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、历史、励志",
        "oneLine": "1998年，东北国企下岗工人老赵，带着一群同样失业的兄弟，南下深圳，从倒卖BP机开始闯出一片天。"
    },
    {
        "title": "广东小老虎",
        "href": "video/movie-1080.html",
        "cover": "30.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 喜剧, 剧情",
        "oneLine": "广东城中村的小混混阿虎，为了凑够钱送暗恋的女孩去留学，决定挑战当地最凶恶的拳霸，开启了一段荒诞的逆袭之路。"
    },
    {
        "title": "又见牡丹亭",
        "href": "video/movie-1081.html",
        "cover": "31.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 戏曲 / 古装",
        "oneLine": "昆曲演员在排练《牡丹亭》时意外穿越进戏文，必须在汤显祖的原稿中找到回归现实的方法。"
    },
    {
        "title": "夏日秘密 第二季",
        "href": "video/movie-1082.html",
        "cover": "32.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑 / 青春",
        "oneLine": "距离夏令营失踪案已过去一年，幸存的孩子们发现，那个杀手并没有死，而是潜伏在他们高中里。"
    },
    {
        "title": "异形基地",
        "href": "video/movie-1083.html",
        "cover": "33.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "科幻，恐怖，动作",
        "oneLine": "南极科考站钻透冰层后，队员们发现远古虫卵能将宿主改造成完美杀戮机器。"
    },
    {
        "title": "蜡像院杀人王",
        "href": "video/movie-1084.html",
        "cover": "34.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 犯罪",
        "oneLine": "1932年，一位毁容的蜡像师在废弃剧院里，将仇人的尸体做成了永不腐烂的蜡像展览品。"
    },
    {
        "title": "孕期惊魂",
        "href": "video/movie-1085.html",
        "cover": "35.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 悬疑",
        "oneLine": "一位孕妇坚信自己怀的是怪物，但所有人都认为是产前抑郁，直到羊水破了的那一刻。"
    },
    {
        "title": "格林童话变奏曲",
        "href": "video/movie-1086.html",
        "cover": "36.jpg",
        "year": "2024",
        "region": "德国",
        "type": "剧集",
        "genre": "恐怖 / 悬疑 / 奇幻",
        "oneLine": "当小红帽变成连环杀手，当灰姑娘变成虐待狂，童话镇迎来了一场血腥审判。"
    },
    {
        "title": "金派特务",
        "href": "video/movie-1087.html",
        "cover": "37.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 喜剧 / 间谍",
        "oneLine": "王牌特工被迫伪装成豪门赘婿，在太太的家族企业里调查跨国洗钱案，忍气吞声到内伤。"
    },
    {
        "title": "学宫春色",
        "href": "video/movie-1088.html",
        "cover": "38.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装 / 喜剧 / 青春",
        "oneLine": "明朝最顶尖的国子监里，混进了一个假扮男装的姑娘，和一个只想被开除的纨绔子弟。"
    },
    {
        "title": "宇宙骑士",
        "href": "video/movie-1089.html",
        "cover": "39.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻 / 动作 / 剧情",
        "oneLine": "地球被寄生怪兽入侵，幸存者利用敌人细胞改造为骑士，却发现敌人首领是自己的亲哥哥。"
    },
    {
        "title": "今晚80后脱口秀2014",
        "href": "video/movie-1090.html",
        "cover": "40.jpg",
        "year": "2014",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "脱口秀，喜剧，真人秀",
        "oneLine": "2014年，一群80后脱口秀演员在舞台上吐槽房贷、催婚和职场，台下坐着未来的喜剧巨星们。"
    },
    {
        "title": "反恐特警组第六季",
        "href": "video/movie-1091.html",
        "cover": "41.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 犯罪, 悬疑",
        "oneLine": "一伙模仿特警组战术的高智商匪徒在洛城连环作案，更致命的是，对方似乎掌握了他们所有的行动预案。"
    },
    {
        "title": "停车",
        "href": "video/movie-1092.html",
        "cover": "42.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，黑色幽默",
        "oneLine": "男子只是停了个车，却在取车那晚撞见了十几个人的荒诞人生。"
    },
    {
        "title": "遇见女孩的感觉",
        "href": "video/movie-1093.html",
        "cover": "43.jpg",
        "year": "2020",
        "region": "印度",
        "type": "电影",
        "genre": "喜剧, 爱情, 剧情",
        "oneLine": "一个困惑的印度大学女生，在偶然亲吻了一个女孩后，开始质疑自己的性取向，并试图在这个保守的社会里寻找自我。"
    },
    {
        "title": "碧娜鲍许",
        "href": "video/movie-1094.html",
        "cover": "44.jpg",
        "year": "2011",
        "region": "德国",
        "type": "电影",
        "genre": "纪录片、舞蹈",
        "oneLine": "德国现代舞大师碧娜·鲍许最后的排练影像，以及四名舞者替她完成未竟之作的故事。"
    },
    {
        "title": "怪王外传",
        "href": "video/movie-1095.html",
        "cover": "45.jpg",
        "year": "1995",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "喜剧， 儿童",
        "oneLine": "一个歪点子特别多的农村小孩“怪王”，用他天马行空的奇招，帮乡亲们解决了一个又一个看似无解的难题。"
    },
    {
        "title": "我爱推理",
        "href": "video/movie-1096.html",
        "cover": "46.jpg",
        "year": "2024",
        "region": "中国",
        "type": "电视剧",
        "genre": "悬疑 / 喜剧 / 爱情",
        "oneLine": "热衷推理的物理系女博士，与凭直觉破案的刑警队长被迫同居，两人联手侦破奇案，在逻辑与感性的碰撞中擦出爱火。"
    },
    {
        "title": "过界男女粤语",
        "href": "video/movie-1097.html",
        "cover": "47.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情、都市",
        "oneLine": "一段发生在港深之间的婚外情，两个疲惫的中年人试图在错误的关系里找到正确的位置。"
    },
    {
        "title": "疯狂修道院",
        "href": "video/movie-1098.html",
        "cover": "48.jpg",
        "year": "2023",
        "region": "西班牙",
        "type": "电影",
        "genre": "荒诞喜剧",
        "oneLine": "中世纪修道院里，一群修女偷偷组成了地下摇滚乐队，主唱是院长。"
    },
    {
        "title": "十六岁之爱",
        "href": "video/movie-1099.html",
        "cover": "49.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 青春",
        "oneLine": "1984年法国乡下，一个害羞的男孩爱上了新来的叛逆女孩，而女孩的秘密是一台能偷听全城电话的收音机。"
    },
    {
        "title": "开心一组4",
        "href": "video/movie-1100.html",
        "cover": "50.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 家庭, 情景",
        "oneLine": "开心一组迎来奇葩新班主任，原本混乱的班级更要上演一出出啼笑皆非的闹剧。"
    },
    {
        "title": "爱德华·李的乡村料理",
        "href": "video/movie-1101.html",
        "cover": "51.jpg",
        "year": "2027",
        "region": "美国",
        "type": "剧集",
        "genre": "纪录片 / 美食 / 真人秀",
        "oneLine": "美籍华裔名厨爱德华·李驱车穿越美国深南部，在一间间破旧的乡村小餐馆里，寻找被遗忘的非裔与亚裔融合菜系。"
    },
    {
        "title": "回忆的余烬",
        "href": "video/movie-1102.html",
        "cover": "52.jpg",
        "year": "2011",
        "region": "英国",
        "type": "电影",
        "genre": "剧情，悬疑，文艺",
        "oneLine": "一位老人出版回忆录后，突然收到匿名信，指出他人生中最重要的三段记忆全是假的。"
    },
    {
        "title": "解放1：炮火弧线",
        "href": "video/movie-1103.html",
        "cover": "53.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影 战争， 历史",
        "genre": "战争， 历史， 动作",
        "oneLine": "1943年库尔斯克战役，一名苏军炮兵观测员必须在德军虎式坦克群的碾压下，为后方指引出那条唯一的反制炮火弧线。"
    },
    {
        "title": "怪兽卡车",
        "href": "video/movie-1104.html",
        "cover": "54.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 科幻, 家庭",
        "oneLine": "一个废品站少年捡到一只爱吃废铁的外星生物，把它藏在改装卡车里参加了全国冠军赛。"
    },
    {
        "title": "醉好的时光",
        "href": "video/movie-1105.html",
        "cover": "55.jpg",
        "year": "2020",
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情 / 喜剧",
        "oneLine": "四个高中男老师为了摆脱乏味，实验“血液酒精浓度持续0.05%”的活法，却走向失控。"
    },
    {
        "title": "黑马",
        "href": "video/movie-1106.html",
        "cover": "56.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "体育, 剧情",
        "oneLine": "一匹因血统低劣被无数次转手的赛马，与一个濒临失业的骑手，如何携手创造百年一遇的奇迹。"
    },
    {
        "title": "没有我们的世界",
        "href": "video/movie-1107.html",
        "cover": "57.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻, 灾难, 悬疑",
        "oneLine": "某天早上七点零三分，地球上三分之一的人类凭空消失，留下的痕迹显示——他们不是死去，而是被“精确擦除”了。"
    },
    {
        "title": "街头竞选",
        "href": "video/movie-1108.html",
        "cover": "58.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "巴黎流浪汉为了争夺一座天桥下的“专属床位”，举行了一场荒诞的街头民主选举。"
    },
    {
        "title": "进城",
        "href": "video/movie-1109.html",
        "cover": "59.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 社会",
        "oneLine": "他是村里唯一会开车的，进城当了代驾，每天晚上帮喝醉的人把车开回家，自己却找不到可以停靠的地方。"
    },
    {
        "title": "探险活宝第二季",
        "href": "video/movie-1110.html",
        "cover": "60.jpg",
        "year": "2011",
        "region": "美国",
        "type": "动画",
        "genre": "冒险 / 喜剧 / 奇幻",
        "oneLine": "芬恩和杰克踏入一个由糖果构成的平行宇宙，那里的国王是一个忧郁的冰淇淋三明治。"
    },
    {
        "title": "永贻芬芳",
        "href": "video/movie-1111.html",
        "cover": "61.jpg",
        "year": "1964",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 历史",
        "oneLine": "1958年，一位上海女大学生主动报名去贵州深山教书，她带去了一缕永远不散的芬芳。"
    },
    {
        "title": "瓦尔哈拉的邂逅",
        "href": "video/movie-1112.html",
        "cover": "62.jpg",
        "year": "2025",
        "region": "英国 / 挪威",
        "type": "电视剧",
        "genre": "历史, 动作, 爱情",
        "oneLine": "公元9世纪，一个被俘的基督教修士，与一个维京女首领在前往英灵殿的路上，产生了禁忌之恋。"
    },
    {
        "title": "来日同行",
        "href": "video/movie-1113.html",
        "cover": "63.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情，家庭，社会",
        "oneLine": "偷渡客父亲被确诊绝症，为了把“法国身份”留给儿子，他必须在死前找到孩子的亲生母亲。"
    },
    {
        "title": "森林奇旅",
        "href": "video/movie-1114.html",
        "cover": "64.jpg",
        "year": "2017",
        "region": "德国",
        "type": "电影",
        "genre": "动画, 奇幻",
        "oneLine": "一个失去父亲的小女孩跟着一本神秘的森林日记，找到了传说中的“树之心”，发现它正在死去。"
    },
    {
        "title": "陆小凤之决战前后",
        "href": "video/movie-1115.html",
        "cover": "65.jpg",
        "year": "2026",
        "region": "中国内地/中国香港",
        "type": "电影",
        "genre": "武侠悬疑",
        "oneLine": "陆小凤受邀见证紫禁之巅的剑神对决，却在两位剑客背后嗅到了一场颠覆朝野的惊天阴谋。"
    },
    {
        "title": "爱与死",
        "href": "video/movie-1116.html",
        "cover": "66.jpg",
        "year": "1975",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧 / 战争",
        "oneLine": "19世纪俄国，一个懦弱的平民被迫参军对抗拿破仑，却在死神与爱情间反复横跳。"
    },
    {
        "title": "天堂口",
        "href": "video/movie-1117.html",
        "cover": "67.jpg",
        "year": "2007",
        "region": "中国台湾 / 中国香港",
        "type": "电影",
        "genre": "剧情, 爱情, 犯罪",
        "oneLine": "三个从小在农村长大的兄弟，去大上海闯荡，最终一人死在枪下，一人成了疯子。"
    },
    {
        "title": "噩梦降临",
        "href": "video/movie-1118.html",
        "cover": "68.jpg",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "三代女性不断梦见同一个黑影，当外孙女开始画出梦里从未去过的老宅，黑影醒了。"
    },
    {
        "title": "大婴儿",
        "href": "video/movie-1119.html",
        "cover": "69.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "荒诞喜剧",
        "oneLine": "华尔街之狼在一次滑翔伞事故后失忆，醒来后坚信自己是一个需要哺乳和换尿布的婴儿，却掌管着百亿基金。"
    },
    {
        "title": "铁鹰战士",
        "href": "video/movie-1120.html",
        "cover": "70.jpg",
        "year": "1986",
        "region": "美国",
        "type": "剧集",
        "genre": "动作， 科幻， 军事",
        "oneLine": "冷战末期，美军秘密研发单兵动力外骨骼“铁鹰”，一支四人小队用它阻止了失控AI引发三战。"
    },
    {
        "title": "马哥波罗",
        "href": "video/movie-1121.html",
        "cover": "71.jpg",
        "year": "1975",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 动作, 古装",
        "oneLine": "一名现代香港小贩误闯元朝，被当成马可·波罗，还顺便帮忽必烈搞定了外贸赤字。"
    },
    {
        "title": "医生先生",
        "href": "video/movie-1122.html",
        "cover": "72.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "医疗, 剧情",
        "oneLine": "患有重度自闭症的天才外科医生，无法与人对视，却能“看见”病灶发出的声音。"
    },
    {
        "title": "街头圣女",
        "href": "video/movie-1123.html",
        "cover": "73.jpg",
        "year": "2020",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 犯罪, 动作",
        "oneLine": "游走于深水埗街头的女杀手，在最后一次任务中，却成了保护雏妓的“圣女”。"
    },
    {
        "title": "大女当嫁",
        "href": "video/movie-1124.html",
        "cover": "74.jpg",
        "year": "2010",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情 / 爱情 / 家庭",
        "oneLine": "34岁女公务员姜大雁被全家逼婚，相了18个奇葩男后，她决定嫁给一套经济适用房。"
    },
    {
        "title": "社会性抹杀丈夫的5个方法",
        "href": "video/movie-1125.html",
        "cover": "75.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑, 剧情, 女性",
        "oneLine": "全职主妇发现丈夫联合同事将她社会性抹杀，她决定用五步计划完美反击。"
    },
    {
        "title": "心迷宫",
        "href": "video/movie-1126.html",
        "cover": "76.jpg",
        "year": "2027",
        "region": "中国内地",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "一具无名尸体在山村出现，三个家庭、五段回忆，每个版本里死者都是不同的人。"
    },
    {
        "title": "索菲亚",
        "href": "video/movie-1127.html",
        "cover": "77.jpg",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "历史 / 传记 / 剧情",
        "oneLine": "从那不勒斯的贫民窟到好莱坞的星光大道，一个叫索菲亚的女孩用美貌与智慧征服了世界。"
    },
    {
        "title": "在父亲的花园里",
        "href": "video/movie-1128.html",
        "cover": "78.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭/剧情",
        "oneLine": "离家十年的游子收到父亲去世的消息，回到老家却发现花园里藏着一个关于他身世的惊人秘密。"
    },
    {
        "title": "绝命药师",
        "href": "video/movie-1129.html",
        "cover": "79.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 惊悚, 犯罪",
        "oneLine": "一个天才药剂师研制出癌症特效药，却因动了医药巨头的蛋糕，被迫带着配方亡命天涯。"
    },
    {
        "title": "家乡的消息",
        "href": "video/movie-1130.html",
        "cover": "80.jpg",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "剧情, 文艺",
        "oneLine": "纽约的西西里移民洗衣工每天都收到伪造的“家乡来信”，直到他决定按信中的虚构地址回老家看看。"
    },
    {
        "title": "日落后之地",
        "href": "video/movie-1131.html",
        "cover": "81.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 悬疑",
        "oneLine": "全球陷入永夜，人类仅存的地下城突然开始每天随机传送一人到地面，且从未有人返回。"
    },
    {
        "title": "约翰·格伦的故事",
        "href": "video/movie-1132.html",
        "cover": "82.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情， 传记， 历史",
        "oneLine": "他不仅是第一个绕地飞行的美国人，更是一个在冷战硝烟中努力保持人性温度的普通人。"
    },
    {
        "title": "亲密不亲密",
        "href": "video/movie-1133.html",
        "cover": "83.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "爱情， 剧情， 伦理",
        "oneLine": "一对结婚十五年的作家夫妻，决定各自出轨一年来寻找写作灵感，却把婚姻变成了最残酷的博弈战场。"
    },
    {
        "title": "出狱脱节",
        "href": "video/movie-1134.html",
        "cover": "84.jpg",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "坐了20年牢的男人出狱后发现世界全是触屏，他连给母亲打电话都不会了。"
    },
    {
        "title": "星期天的多明哥",
        "href": "video/movie-1135.html",
        "cover": "85.jpg",
        "year": "2017",
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情，音乐，家庭",
        "oneLine": "每个星期天，自闭症男孩多明哥都会在地铁站听一个流浪歌手唱歌，直到他开口说第一句话。"
    },
    {
        "title": "在大雪封闭的山庄里",
        "href": "video/movie-1136.html",
        "cover": "86.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑, 惊悚",
        "oneLine": "七个演员被关进雪山庄排练一台上演就全员“死亡”的悬疑剧，结果排练变成了真正的谋杀。"
    },
    {
        "title": "一吻存档",
        "href": "video/movie-1137.html",
        "cover": "87.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情, 科幻",
        "oneLine": "女主角发明了“接吻存档”技术，却发现男主角的存档永远停留在初吻那天。"
    },
    {
        "title": "孟买玫瑰",
        "href": "video/movie-1138.html",
        "cover": "88.jpg",
        "year": "2023",
        "region": "印度",
        "type": "电影",
        "genre": "剧情, 爱情, 歌舞",
        "oneLine": "孟买最大的垃圾山旁，两个捡废品的孤儿决定拍摄一部属于他们自己的宝莱坞电影。"
    },
    {
        "title": "男孩、鼹鼠、狐狸和马",
        "href": "video/movie-1139.html",
        "cover": "89.jpg",
        "year": "2022",
        "region": "英国",
        "type": "动画短片",
        "genre": "动画，治愈，家庭",
        "oneLine": "迷路的男孩在雪地里遇到一只爱吃蛋糕的鼹鼠、一只沉默的狐狸和一匹智慧的马，他们结伴寻找回家的路。"
    },
    {
        "title": "班尼•希尔的最佳",
        "href": "video/movie-1140.html",
        "cover": "90.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 传记, 纪录",
        "oneLine": "纪录片与喜剧混搭，揭秘一代笑匠班尼·希尔最疯狂的“无人卡车”片段是如何挑战电视审查极限的。"
    },
    {
        "title": "如此美好的一天",
        "href": "video/movie-1141.html",
        "cover": "91.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 家庭, 治愈",
        "oneLine": "一个只剩下三个月寿命的毒舌老奶奶，决定教会她那生活一团糟的废柴孙子做一顿“最后的晚餐”。"
    },
    {
        "title": "达格利什 第一季",
        "href": "video/movie-1142.html",
        "cover": "92.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑，犯罪",
        "oneLine": "诗人探长达格利什在剑桥校园命案中，用诗句解开连警方都忽略的密码。"
    },
    {
        "title": "新方世玉前传侠者无畏",
        "href": "video/movie-1143.html",
        "cover": "93.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作，古装",
        "oneLine": "少年方世玉为救母亲闯入少林，在习武复仇路上揭开了江湖中一个惊天大秘密。"
    },
    {
        "title": "冒险兄弟第七季",
        "href": "video/movie-1144.html",
        "cover": "94.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "动画 / 动作 / 喜剧",
        "oneLine": "过气冒险兄弟汉克和迪恩发现父亲可能不是他们的亲生父亲，而是一个克隆体培养师。"
    },
    {
        "title": "开心无敌奖门人",
        "href": "video/movie-1145.html",
        "cover": "95.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "综艺节目 / 电影版",
        "genre": "喜剧 / 真人秀",
        "oneLine": "《奖门人》停播十年后，原班人马被一个神秘富豪绑架到一个荒岛上，被迫重新录制一期“玩命版”游戏。"
    },
    {
        "title": "隋唐英雄3",
        "href": "video/movie-1146.html",
        "cover": "96.jpg",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "历史 / 战争 / 动作 / 古装",
        "oneLine": "罗通扫北之后，新一代英雄薛仁贵崛起，大唐与高句丽的宿命之战拉开序幕。"
    },
    {
        "title": "刀侠",
        "href": "video/movie-1147.html",
        "cover": "97.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作， 武侠， 犯罪",
        "oneLine": "一名厌倦了帮派厮杀的退休刀客，在现代都市中化身“刀侠”，用三把飞刀维护城中村的秩序。"
    },
    {
        "title": "决不妥协",
        "href": "video/movie-1148.html",
        "cover": "98.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "犯罪 / 悬疑 / 律政",
        "oneLine": "前检察官出身的辩护律师，专接警方已结案的“铁案”，用一套不可能的方法替蒙冤者翻案。"
    },
    {
        "title": "童子护宝",
        "href": "video/movie-1149.html",
        "cover": "99.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 动作, 冒险",
        "oneLine": "五线小城景区里，四个被“假兵马俑”骗哭的小学生，意外挖到了真国宝，然后开始了一场啼笑皆非的护宝大战。"
    },
    {
        "title": "孔雀王朝",
        "href": "video/movie-1150.html",
        "cover": "100.jpg",
        "year": "2025",
        "region": "印度",
        "type": "电视剧",
        "genre": "历史 / 宫廷 / 动作",
        "oneLine": "平民少女被预言将成为王朝毁灭者，她却发誓要爬到这个王朝的最高处。"
    },
    {
        "title": "古戒奇谈",
        "href": "video/movie-1151.html",
        "cover": "101.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑, 惊悚, 奇幻",
        "oneLine": "一场古董拍卖会上，一枚出土的战国玉戒让所有佩戴者接连离奇死亡，警方调查发现，这枚戒指似乎会回应人心底的恶念。"
    },
    {
        "title": "冬天的尾声",
        "href": "video/movie-1152.html",
        "cover": "102.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "叛逆少女被送到乡下照顾患有阿尔茨海默症的外婆，却发现外婆的遗忘是一场精心设计的“告别”。"
    },
    {
        "title": "当我们17岁",
        "href": "video/movie-1153.html",
        "cover": "103.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "青春 / 剧情 / 同性",
        "oneLine": "17岁的牧场少年达米安，在寄宿学校被城市转学生托马斯挑衅，却逐渐分不清恨与欲望。"
    },
    {
        "title": "火星情报局第四季",
        "href": "video/movie-1154.html",
        "cover": "104.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "脱口秀 / 喜剧",
        "oneLine": "局长宣布所有提案必须亲自验证，特工们被迫在演播厅里尝试“用舌头舔手肘”等反人类操作。"
    },
    {
        "title": "双胞胎保姆",
        "href": "video/movie-1155.html",
        "cover": "105.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧 / 家庭",
        "oneLine": "一对性格迥异的双胞胎姐妹互换保姆工作，分别闯入富豪家和贫民窟，闹出一串乌龙。"
    },
    {
        "title": "结界师",
        "href": "video/movie-1156.html",
        "cover": "106.jpg",
        "year": "2026",
        "region": "日本",
        "type": "动画",
        "genre": "奇幻, 战斗",
        "oneLine": "继承了家族结界术的高中生，某天发现他守护了十年的小镇，其实是一个巨大的封印阵。"
    },
    {
        "title": "腐臭",
        "href": "video/movie-1157.html",
        "cover": "107.jpg",
        "year": "2023",
        "region": "印度尼西亚",
        "type": "电影",
        "genre": "恐怖，身体",
        "oneLine": "被下毒的新娘全身开始缓慢腐烂，却发现腐烂越严重，法力越强。"
    },
    {
        "title": "白头神探2恐怖的气味",
        "href": "video/movie-1158.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作喜剧",
        "oneLine": "退休五年的白头神探被一种诡异的“气味犯罪”召回，整个城市的人都在被自己最爱食物的味道毒杀。"
    },
    {
        "title": "以物易物",
        "href": "video/movie-1159.html",
        "cover": "109.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情/犯罪",
        "oneLine": "一个走投无路的父亲绑架了富豪的女儿，富豪却提出：我用一个你无法拒绝的东西来换我女儿——你失踪多年的妻子。"
    },
    {
        "title": "犬神的悪霊",
        "href": "video/movie-1160.html",
        "cover": "110.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 民俗",
        "oneLine": "一个返乡女子揭开家族“犬神供养”的黑暗传统，被诅咒附身的人会长出狗牙。"
    },
    {
        "title": "马上双雄",
        "href": "video/movie-1161.html",
        "cover": "111.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 西部",
        "oneLine": "内蒙古草原上，一个偷马贼和一个退伍骑兵，为了同一匹传说中的野马展开了生死角逐。"
    },
    {
        "title": "我是杜拉拉",
        "href": "video/movie-1162.html",
        "cover": "112.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "职场",
        "oneLine": "20年后，杜拉拉的女儿入职同一家公司，发现当年的职场法则早已失效，00后开始整顿职场。"
    },
    {
        "title": "铁流1949",
        "href": "video/movie-1163.html",
        "cover": "113.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争/历史",
        "oneLine": "渡江战役前夕，一支失联的炮兵连必须带着一门损坏的“老山炮”，穿越百里敌占区抵达江边。"
    },
    {
        "title": "傀儡生涯",
        "href": "video/movie-1164.html",
        "cover": "114.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 动作 / 惊悚",
        "oneLine": "他是一个技术精湛的“人偶”演员，直到他发现自己扮演的每一个角色，都是为了让一个死去的黑帮少爷“复活”。"
    },
    {
        "title": "订制幸福滋味",
        "href": "video/movie-1165.html",
        "cover": "115.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情, 美食, 治愈",
        "oneLine": "失去味觉的天才厨师，接手亡母的破旧小餐馆，每道菜都能让食客看到一段不属于自己的记忆。"
    },
    {
        "title": "回到野人沙滩",
        "href": "video/movie-1166.html",
        "cover": "116.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧 / 冒险 / 奇幻",
        "oneLine": "沉迷手机的Z世代网红，一脚踩滑，整个人掉进了1987年那个没有Wi-Fi的野人沙滩。"
    },
    {
        "title": "第二个螺丝碎片",
        "href": "video/movie-1167.html",
        "cover": "117.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑，犯罪",
        "oneLine": "一辆坠崖的汽车残骸中，警方发现了三年前连环杀人案标志性的螺丝碎片，但那个凶手早已入狱。"
    },
    {
        "title": "绝世美钻：卡拉哈里女王",
        "href": "video/movie-1168.html",
        "cover": "118.jpg",
        "year": "2024",
        "region": "南非 / 英国",
        "type": "纪录片",
        "genre": "纪录片 / 历史",
        "oneLine": "重达600克拉的“卡拉哈里女王”钻石从地下到王冠，再到黑市，三百年间经手了十个帝国和二十个主人。"
    },
    {
        "title": "空房间里的妻子",
        "href": "video/movie-1169.html",
        "cover": "119.jpg",
        "year": "2016",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 心理",
        "oneLine": "丈夫出差后，独居的妻子发现家中空房间似乎住进了另一个“丈夫”。"
    },
    {
        "title": "两车一夜",
        "href": "video/movie-1170.html",
        "cover": "120.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情犯罪",
        "oneLine": "一个离家出走的叛逆少女，一个运死人的长途卡车司机，两人在除夕夜拼车同路，一具棺材成了他们的“第三乘客”。"
    },
    {
        "title": "浪漫风格",
        "href": "video/movie-1171.html",
        "cover": "121.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "爱情, 喜剧",
        "oneLine": "一个只会穿牛仔裤的理科女博士，为了赢得暗恋对象的心，竟被一只会说话的香奈儿套装改造成了巴黎时尚女王。"
    },
    {
        "title": "一击冲天第二季",
        "href": "video/movie-1172.html",
        "cover": "122.jpg",
        "year": "2026",
        "region": "日本",
        "type": "动画剧集",
        "genre": "热血体育",
        "oneLine": "天才高尔夫少女在横扫日本高中赛后，踏入满是赌棍与骗子的地下赌球世界。"
    },
    {
        "title": "死宅之地",
        "href": "video/movie-1173.html",
        "cover": "123.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "科幻、悬疑、惊悚",
        "oneLine": "当一名极致宅男的公寓成为全球离奇死亡事件的唯一安全区，他必须出门找出真相。"
    },
    {
        "title": "天网擒蛟龙",
        "href": "video/movie-1174.html",
        "cover": "124.jpg",
        "year": "1991",
        "region": "香港",
        "type": "电影",
        "genre": "动作，警匪",
        "oneLine": "警局新装的天网监控系统拍到连环案真凶，却发现嫌疑人早已死在五年前。"
    },
    {
        "title": "战士",
        "href": "video/movie-1175.html",
        "cover": "125.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 历史 / 犯罪",
        "oneLine": "1870年代旧金山，一个从中国来的武术高手陷入两大华人帮派和爱尔兰警察的混战。"
    },
    {
        "title": "我的愤怒老婆",
        "href": "video/movie-1176.html",
        "cover": "126.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "喜剧 / 爱情",
        "oneLine": "全国最长寿的相亲节目迎来奇葩嘉宾：失控咆哮的消防员女主和冷静如冰的心理咨询师男主。"
    },
    {
        "title": "狙击兵",
        "href": "video/movie-1177.html",
        "cover": "127.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "战争，动作",
        "oneLine": "苏联女狙击手用莫辛-纳甘步枪，在废墟中射杀了307名德军，包括柏林派来的王牌。"
    },
    {
        "title": "裙角飞扬的时光",
        "href": "video/movie-1178.html",
        "cover": "128.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，青春",
        "oneLine": "1990年代，高中女生为争取穿裙子上学的权利，掀起了一场温柔的革命。"
    },
    {
        "title": "瞒天凶嫌",
        "href": "video/movie-1179.html",
        "cover": "129.jpg",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑惊悚",
        "oneLine": "一个骗子被警察关进只有一张桌子的审讯室，但警察说出的每个案件细节，都恰好与他的真实身份相反。"
    },
    {
        "title": "赛尔玛",
        "href": "video/movie-1180.html",
        "cover": "130.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "传记, 历史, 剧情",
        "oneLine": "1965年“血色星期日”后，一群普通人决定从塞尔玛走到蒙哥马利，用脚步逼总统签署《投票权法案》。"
    },
    {
        "title": "名校风暴第二季",
        "href": "video/movie-1181.html",
        "cover": "131.jpg",
        "year": "2019",
        "region": "西班牙",
        "type": "剧集",
        "genre": "悬疑, 惊悚, 青春",
        "oneLine": "一场意外死亡后，新学期的拉斯恩西纳斯高中迎来更危险的权力洗牌。"
    },
    {
        "title": "我和我的摔角家庭",
        "href": "video/movie-1182.html",
        "cover": "132.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 运动",
        "oneLine": "摔角世家的女儿被WWE拒绝后，假扮成哥哥戴上男选手的面具，一路打进了冠军赛。"
    },
    {
        "title": "他乡的童年",
        "href": "video/movie-1183.html",
        "cover": "133.jpg",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "七岁的浩浩被父母接到大城市过暑假，却发现“团聚”不过是隔着玻璃窗看父母在工厂加班。"
    },
    {
        "title": "东欧犹太乐项目",
        "href": "video/movie-1184.html",
        "cover": "134.jpg",
        "year": "2025",
        "region": "美国 / 以色列",
        "type": "电影",
        "genre": "剧情 / 音乐 / 历史",
        "oneLine": "纽约叛逆少年被送回以色列参加祖父的“克莱兹梅尔”乐团，却发现每首曲子背后都是家族的死亡名单。"
    },
    {
        "title": "没头脑和不高兴",
        "href": "video/movie-1185.html",
        "cover": "135.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "喜剧 / 冒险 / 儿童",
        "oneLine": "“没头脑”总是丢三落四，“不高兴”永远在发脾气，他们被吸入一本奇幻故事书，必须合作才能回到现实。"
    },
    {
        "title": "先锋2019",
        "href": "video/movie-1186.html",
        "cover": "136.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 冒险",
        "oneLine": "国际安保组织“先锋”接到任务，保护一名掌握石油通道秘密的科学家，却陷入跨国追杀。"
    },
    {
        "title": "丑闻1950",
        "href": "video/movie-1187.html",
        "cover": "137.jpg",
        "year": "1950",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 黑色电影",
        "oneLine": "一位参议员在酒店暴毙，三个女人同时声称自己是他的遗孀。"
    },
    {
        "title": "瑞雪飘飘",
        "href": "video/movie-1188.html",
        "cover": "138.jpg",
        "year": "2003",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭, 年代, 剧情",
        "oneLine": "1977年恢复高考的那场雪，改变了北方小城一群知青的命运，也注定了他们一生的爱恨纠葛。"
    },
    {
        "title": "梦断乐缘堂",
        "href": "video/movie-1189.html",
        "cover": "139.jpg",
        "year": "2010",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭 / 伦理 / 年代",
        "oneLine": "民国初年，江南评弹世家“乐缘堂”因一本神秘曲谱而陷入灭门危机，堂主之女必须用弦索弹破家族百年的谎言。"
    },
    {
        "title": "残酷考",
        "href": "video/movie-1190.html",
        "cover": "140.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "oneLine": "七个互不相识的求职者，被关进一个废弃考场，最后一道考题是“如何让别人自愿放弃”。"
    },
    {
        "title": "大鲨鱼2021",
        "href": "video/movie-1191.html",
        "cover": "141.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "灾难, 惊悚, 科幻",
        "oneLine": "科研潜艇意外激活海底古菌，使一头巨鲨获得智能，并开始指挥鱼群攻击沿海城市。"
    },
    {
        "title": "共生心理分类学",
        "href": "video/movie-1192.html",
        "cover": "142.jpg",
        "year": "1986",
        "region": "苏联",
        "type": "电影/科幻哲理",
        "genre": "科幻, 剧情, 哲理",
        "oneLine": "苏联科学家发明了“心理共振舱”，试图将五个死刑犯的意识融合成一个完美的“集体人格”。"
    },
    {
        "title": "来自地狱",
        "href": "video/movie-1193.html",
        "cover": "143.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "梵蒂冈派出最年轻的神父进入一处凶宅驱魔，却发现恶魔并非附身在人体上，而是附身在了房子本身。"
    },
    {
        "title": "功夫无敌",
        "href": "video/movie-1194.html",
        "cover": "144.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "武侠动作",
        "oneLine": "咏春、太极、八极、洪拳四大传人被外星人绑架，被迫组队打星际擂台赛。"
    },
    {
        "title": "战刀屠狼",
        "href": "video/movie-1195.html",
        "cover": "145.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 战争",
        "oneLine": "一名退役特种兵的弟弟被贩毒集团杀害，他拿起战刀重返边境，一人对抗整支武装。"
    },
    {
        "title": "马克爸爸",
        "href": "video/movie-1196.html",
        "cover": "146.jpg",
        "year": "2021",
        "region": "中国香港",
        "type": "电影",
        "genre": "家庭 / 喜剧",
        "oneLine": "金牌杀手“马克”为了执行任务，伪装成幼儿园全职爸爸，却发现自己被一群萌娃“处决”了。"
    },
    {
        "title": "情断爱河",
        "href": "video/movie-1197.html",
        "cover": "147.jpg",
        "year": "2023",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情 / 虐恋 / 家庭",
        "oneLine": "她为救爱人坠河失忆，醒来后却被他的双胞胎哥哥告知：“我才是你的未婚夫。”"
    },
    {
        "title": "哥本哈根牛仔",
        "href": "video/movie-1198.html",
        "cover": "148.jpg",
        "year": "2025",
        "region": "丹麦",
        "type": "剧集",
        "genre": "犯罪 / 惊悚 / 剧情",
        "oneLine": "一个沉默的塞尔维亚女孩被贩卖到哥本哈根，一年后她化身“牛仔”，游走在北欧黑帮之间，执行一场无人知晓的复仇。"
    },
    {
        "title": "花心大少",
        "href": "video/movie-1199.html",
        "cover": "149.jpg",
        "year": "2016",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 爱情",
        "oneLine": "一个同时交往七个女朋友的金融精英，突遭破产，只剩一个最看不上的穷女友愿意收留他。"
    },
    {
        "title": "冰川时代4",
        "href": "video/movie-1200.html",
        "cover": "150.jpg",
        "year": "2012",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧, 冒险, 家庭",
        "oneLine": "松鼠奎特的一次意外触发地壳裂变，让猛犸象曼尼一家在茫茫大海上开启惊险漂流。"
    },
    {
        "title": "顽皮豹之泡沫",
        "href": "video/movie-1201.html",
        "cover": "1.jpg",
        "year": "2024",
        "region": "美国",
        "type": "动漫",
        "genre": "喜剧/动画",
        "oneLine": "全城突然下起了永远不会破的粉色泡泡雨，顽皮豹为了关掉楼顶的泡泡机，上演了一出哑剧版的《虎胆龙威》。"
    },
    {
        "title": "清落",
        "href": "video/movie-1202.html",
        "cover": "2.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装， 甜宠",
        "oneLine": "毒舌神医带五岁儿子逃婚，却撞上“战损”王爷强行求医，儿子当场喊爹，王爷直接懵了。"
    },
    {
        "title": "石雕宅邸杀人案",
        "href": "video/movie-1203.html",
        "cover": "3.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑犯罪",
        "oneLine": "一座放满真人大小石雕的豪门宅邸内，主人被杀，而唯一可能的凶器，是一尊会“移动”的石像。"
    },
    {
        "title": "夜之游戏",
        "href": "video/movie-1204.html",
        "cover": "4.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "情色惊悚",
        "oneLine": "三对富豪夫妇在偏僻别墅玩“真心话大冒险”，每输一次必须杀死一个最亲近的人。"
    },
    {
        "title": "步步惊魂2008",
        "href": "video/movie-1205.html",
        "cover": "5.jpg",
        "year": "2008",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 惊悚, 犯罪",
        "oneLine": "2008年跨年夜，五名陌生人被困在纽约一栋大厦的电梯里，随着灯光闪烁，他们发现自己中有一人是连环杀手。"
    },
    {
        "title": "跨越白昼的夜",
        "href": "video/movie-1206.html",
        "cover": "6.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情， 奇幻， 剧情",
        "oneLine": "男孩过着永恒的白昼，女孩身处无尽的黑夜，只有每天日出日落的6分钟重叠时刻两人才能相见。"
    },
    {
        "title": "色彩直冲而上",
        "href": "video/movie-1207.html",
        "cover": "7.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动画 / 青春",
        "oneLine": "在一个强制统一建筑物外墙灰度的未来城市，一群高中生决定在毕业前夜将其变成巨大的彩虹。"
    },
    {
        "title": "绅士强盗",
        "href": "video/movie-1208.html",
        "cover": "8.jpg",
        "year": "2024",
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "喜剧，犯罪，剧情",
        "oneLine": "两名落魄贵族以劫富济贫为乐，却意外劫到了自家祖宅，里面藏着家族崛起的肮脏秘密。"
    },
    {
        "title": "普通男女",
        "href": "video/movie-1209.html",
        "cover": "9.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 爱情, 文艺",
        "oneLine": "他是在北京送外卖的单亲爸爸，她是在上海996的会计，一次网络故障让他们的生活产生了交集。"
    },
    {
        "title": "鬼勾魂",
        "href": "video/movie-1210.html",
        "cover": "10.jpg",
        "year": "1997",
        "region": "香港",
        "type": "电影",
        "genre": "恐怖, 鬼怪",
        "oneLine": "富商在新婚之夜被厉鬼勾走魂魄，只剩一具会行走的躯壳，而他的新娘竟与那厉鬼长得一模一样。"
    },
    {
        "title": "万渣朝凰第三季",
        "href": "video/movie-1211.html",
        "cover": "11.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "玄幻 / 搞笑",
        "oneLine": "快穿任务者苏渣这一次进入了一个“全员智商在线”的修仙世界，发现自己成了最笨的那个。"
    },
    {
        "title": "史酷比：格斗狂热迷",
        "href": "video/movie-1212.html",
        "cover": "12.jpg",
        "year": "2025",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧/动画/动作",
        "oneLine": "史酷比和夏奇误打误撞参加了一场世界格斗大赛，发现所有参赛选手都是披着格斗家外衣的怪物。"
    },
    {
        "title": "人所期待的喜悦",
        "href": "video/movie-1213.html",
        "cover": "13.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 治愈",
        "oneLine": "一个在临终关怀医院工作了三年的护士，被一位八十八岁的患者要求：“教我怎么失望。”"
    },
    {
        "title": "如果我留下",
        "href": "video/movie-1214.html",
        "cover": "14.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，奇幻",
        "oneLine": "天才钢琴少女在车祸中灵魂出窍，她只有六小时决定是随父母离开人世还是成为瘫痪的孤儿。"
    },
    {
        "title": "维奥莱特·诺齐埃尔",
        "href": "video/movie-1215.html",
        "cover": "15.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 传记 / 历史",
        "oneLine": "1947年，法国少女维奥莱特因弑父杀母受审，但法庭发现她的邻居和同学早已察觉她满嘴谎言的习性。"
    },
    {
        "title": "感官游戏",
        "href": "video/movie-1216.html",
        "cover": "16.jpg",
        "year": "2025",
        "region": "加拿大",
        "type": "电影",
        "genre": "科幻惊悚",
        "oneLine": "一款能真实模拟“死亡”感觉的VR游戏内测，七名玩家戴上设备后，在现实中再也醒不过来。"
    },
    {
        "title": "美丽密语",
        "href": "video/movie-1217.html",
        "cover": "17.jpg",
        "year": "2023",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻 / 治愈 / 青春",
        "oneLine": "聋哑少女通过一本无字书，进入了一个由全市秘密构成的海底小镇。"
    },
    {
        "title": "独行人",
        "href": "video/movie-1218.html",
        "cover": "18.jpg",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、公路、人生",
        "oneLine": "一名因医疗事故被吊销执照的外科医生，骑着摩托穿越北海道寻找当年的病人。"
    },
    {
        "title": "滑稽夫人",
        "href": "video/movie-1219.html",
        "cover": "19.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 历史",
        "oneLine": "国王的情妇用滑稽戏化解政治危机，却惹怒了欲将她送上断头台的革命者。"
    },
    {
        "title": "功夫小蝇2016",
        "href": "video/movie-1220.html",
        "cover": "20.jpg",
        "year": "2016",
        "region": "印度",
        "type": "电影",
        "genre": "动作, 奇幻, 爱情, 喜剧",
        "oneLine": "一个被情敌杀死的痴情男子转世成为一只苍蝇，为了保护女友并复仇，他必须学会“蝇功夫”。"
    },
    {
        "title": "击浪青春",
        "href": "video/movie-1221.html",
        "cover": "21.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "运动, 剧情",
        "oneLine": "五个被学校“流放”的问题少女组成了赛艇队，目标是打败省冠军男子队。"
    },
    {
        "title": "比基尼特工",
        "href": "video/movie-1222.html",
        "cover": "22.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 喜剧",
        "oneLine": "三位顶级女特工被派往迈阿密海滩卧底泳装秀，任务目标：从黑帮手中抢回一枚藏在比基尼里的灭世芯片。"
    },
    {
        "title": "失控状态",
        "href": "video/movie-1223.html",
        "cover": "23.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "oneLine": "飞越太平洋的豪华客机上，自动驾驶AI突然宣布全体乘客“已被系统判定为冗余”，现在它要将飞机开进雷暴中心。"
    },
    {
        "title": "梦回玛丽莲",
        "href": "video/movie-1224.html",
        "cover": "24.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 剧情 / 爱情",
        "oneLine": "现代小演员意外穿越成玛丽莲·梦露的替身，在黄金时代的光影中寻找真实的自己。"
    },
    {
        "title": "遇龙",
        "href": "video/movie-1225.html",
        "cover": "25.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装 / 奇幻 / 爱情",
        "oneLine": "平凡少女救下一条小白蛇，没想到竟是上古龙王，从此卷入仙界与妖界的三世纠葛。"
    },
    {
        "title": "霹雳霸王花",
        "href": "video/movie-1226.html",
        "cover": "26.jpg",
        "year": "2026",
        "region": "香港 / 中国大陆",
        "type": "电影",
        "genre": "动作 / 喜剧",
        "oneLine": "前霸王花阿嫂被召回，带着三个完全不靠谱的Z世代菜鸟，去营救一位被绑架的顶级甜品师。"
    },
    {
        "title": "这个夏天有异性",
        "href": "video/movie-1227.html",
        "cover": "27.jpg",
        "year": "2002",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 喜剧",
        "oneLine": "两个死党发誓要在夏天结束前脱单，却爱上了同一个男孩。"
    },
    {
        "title": "全民大编剧",
        "href": "video/movie-1228.html",
        "cover": "28.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "一个三流编剧把剧本放到网上众筹“全民创作”，结果网友把故事改成了连他都认不出的神作。"
    },
    {
        "title": "巴黎来的女孩",
        "href": "video/movie-1229.html",
        "cover": "29.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "爱情, 剧情",
        "oneLine": "为了逃离奢华的时尚圈，巴黎名媛躲进了中国西南的深山，却遇到了一位不会说法语的乡村教师。"
    },
    {
        "title": "明天的少年",
        "href": "video/movie-1230.html",
        "cover": "30.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春 / 运动",
        "oneLine": "为了赢回对父亲立的赌约，一个废柴高中生必须在三个月内从零开始，打败省青少年滑板冠军。"
    },
    {
        "title": "清算",
        "href": "video/movie-1231.html",
        "cover": "31.jpg",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚， 剧情， 犯罪",
        "oneLine": "庞氏骗局的受害者们组成秘密法庭，对逃往海外的骗子进行全球“财务处决”。"
    },
    {
        "title": "百战天龙第三季",
        "href": "video/movie-1232.html",
        "cover": "32.jpg",
        "year": "2018",
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 冒险, 悬疑",
        "oneLine": "天才机械师麦克斯与他的团队在这一季面临一个能预测所有行动的超级AI对手，每一次行动都像踏入陷阱。"
    },
    {
        "title": "克洛诺斯",
        "href": "video/movie-1233.html",
        "cover": "33.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻/惊悚",
        "oneLine": "科学家发现“时间”是一种被外星生物蚕食的资源，每过一天，人类的生命就会缩短一小时。"
    },
    {
        "title": "辣警狂花1",
        "href": "video/movie-1234.html",
        "cover": "34.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "动作, 犯罪",
        "oneLine": "四位问题女警被勒令组成特别行动组，第一个任务是——潜入模特大赛抓毒枭。"
    },
    {
        "title": "鬼吹萧",
        "href": "video/movie-1235.html",
        "cover": "35.jpg",
        "year": "1985",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 动作",
        "oneLine": "一支能召唤僵尸的魔笛重现江湖，赶尸匠与日本阴阳师展开夺笛大战。"
    },
    {
        "title": "那些与初恋有关的秘密",
        "href": "video/movie-1236.html",
        "cover": "36.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情, 青春, 悬疑",
        "oneLine": "三十年后，高中同学会上的一本匿名日记被公开，掀开了当年校花失踪案背后与每个人初恋有关的秘密。"
    },
    {
        "title": "反抗：柳宽顺的故事",
        "href": "video/movie-1237.html",
        "cover": "37.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 历史 / 传记",
        "oneLine": "17岁的女学生柳宽顺在狱中高喊“独立万岁”，成为韩国抵抗精神的永恒图腾。"
    },
    {
        "title": "热情花招：当女孩遇上男孩",
        "href": "video/movie-1238.html",
        "cover": "38.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "爱情, 剧情",
        "oneLine": "患有情感冷漠症的女孩，遇到了能“听见”她心声的男孩，但男孩有个条件：每次读心后，必须给他一张照片。"
    },
    {
        "title": "香笺泪",
        "href": "video/movie-1239.html",
        "cover": "39.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情, 年代, 悬疑",
        "oneLine": "1947年上海，邮差爱上了从不敢露面的女作家，他偷偷拆了她的信，却发现自己一直在帮她传递的是别人的情书。"
    },
    {
        "title": "二小放牛郎",
        "href": "video/movie-1240.html",
        "cover": "40.jpg",
        "year": "1954",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争 / 儿童 / 红色经典",
        "oneLine": "抗日战争时期，一个放牛的农村少年用智慧和生命将敌人引入八路军的伏击圈。"
    },
    {
        "title": "列车捎来的幸福",
        "href": "video/movie-1241.html",
        "cover": "41.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，公路，治愈",
        "oneLine": "绿皮火车上的列车员发现，每次停靠小站，都有个女孩举着牌子问“我爸在车上吗”。"
    },
    {
        "title": "美人脸",
        "href": "video/movie-1242.html",
        "cover": "42.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "惊悚 / 悬疑 / 社会",
        "oneLine": "一个丑女整容成闺蜜的脸后，闺蜜死了，而她的脸开始慢慢变成闺蜜的脸。"
    },
    {
        "title": "中国好声音第三季",
        "href": "video/movie-1243.html",
        "cover": "43.jpg",
        "year": "2014",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "音乐 / 真人秀",
        "oneLine": "第三季好声音回归，四位顶级音乐人为素人转身，诞生了帕尔哈提、张碧晨等声音。"
    },
    {
        "title": "男人四十只春一张嘴",
        "href": "video/movie-1244.html",
        "cover": "44.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/喜剧",
        "oneLine": "四十岁金牌推销员张春只剩一张嘴，却靠它差点毁掉自己的一切。"
    },
    {
        "title": "窗户周一到",
        "href": "video/movie-1245.html",
        "cover": "45.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "悬疑、心理",
        "oneLine": "每当周一到来，住在七楼的宅男透过窗户，都能看到对面楼同一扇窗户里的凶杀案。"
    },
    {
        "title": "太平洋战争风云录",
        "href": "video/movie-1246.html",
        "cover": "46.jpg",
        "year": "2007",
        "region": "美国",
        "type": "剧集",
        "genre": "战争, 历史, 纪录片",
        "oneLine": "从珍珠港到日本投降，用最真实的影像与参战老兵口述，全景还原太平洋战场的炼狱。"
    },
    {
        "title": "童话情真",
        "href": "video/movie-1247.html",
        "cover": "47.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电视剧",
        "genre": "都市、爱情、奇幻",
        "oneLine": "一名冷酷的投行女高管意外获得能力，能将遇到的每个人物对应进童话角色，却发现自己的“王子”是个卖煎饼果子的。"
    },
    {
        "title": "真情告白1937",
        "href": "video/movie-1248.html",
        "cover": "48.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 历史",
        "oneLine": "南京陷落前夜，美国传教士通过电台向全城广播他给中国女孩的最后一封情书。"
    },
    {
        "title": "客人是王",
        "href": "video/movie-1249.html",
        "cover": "49.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "惊悚, 剧情, 社会",
        "oneLine": "顶级AI别墅里，主人对“上帝”般的客人百依百顺，直到客人发现这里根本没有门。"
    },
    {
        "title": "罗密欧·布拉斯的房间",
        "href": "video/movie-1250.html",
        "cover": "50.jpg",
        "year": "2022",
        "region": "英国 / 法国",
        "type": "电影",
        "genre": "剧情 / 同性 / 悬疑",
        "oneLine": "伦敦公屋区的黑人男孩罗密欧·布拉斯被杀害后，一名研究员通过他遗留的日记和房间物品，拼凑出一个完全矛盾的灵魂。"
    },
    {
        "title": "郁川浮游",
        "href": "video/movie-1251.html",
        "cover": "51.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 文艺",
        "oneLine": "一个失去记忆的男人回到江南水乡，所有人都说他曾欠下命债，但他只记得一条河的波纹。"
    },
    {
        "title": "科索沃青年",
        "href": "video/movie-1252.html",
        "cover": "52.jpg",
        "year": "2023",
        "region": "塞尔维亚",
        "type": "电影",
        "genre": "剧情、战争",
        "oneLine": "三个不同族裔的少年组成秘密足球队，用一场比赛赌回被炸毁的球场。"
    },
    {
        "title": "心灵迷雾",
        "href": "video/movie-1253.html",
        "cover": "53.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑，科幻",
        "oneLine": "刑警队长使用能读取记忆的新技术破案，却发现自己的记忆被凶手植入了虚假的杀人片段。"
    },
    {
        "title": "绝世武神第二季",
        "href": "video/movie-1254.html",
        "cover": "54.jpg",
        "year": "2018",
        "region": "中国大陆",
        "type": "动画",
        "genre": "奇幻 / 热血",
        "oneLine": "林枫踏入皇城，面对更强大的敌人和更复杂的势力，他誓要以凡人之躯，撼动神明。"
    },
    {
        "title": "金牌拳手3",
        "href": "video/movie-1255.html",
        "cover": "55.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "运动 / 剧情",
        "oneLine": "退役拳王为救落魄兄弟重出江湖，却发现自己要打的正是当年救过自己命的恩人。"
    },
    {
        "title": "战栗特工",
        "href": "video/movie-1256.html",
        "cover": "56.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作， 悬疑， 科幻",
        "oneLine": "一名中情局特工在废弃大楼里醒来，发现自己的记忆被篡改，而整栋大楼就是一个杀局。"
    },
    {
        "title": "雪域天路",
        "href": "video/movie-1257.html",
        "cover": "57.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 历史",
        "oneLine": "一个藏族家庭三代人，用六十年时间见证一条天路从骡马道变成钢铁巨龙。"
    },
    {
        "title": "猛鬼舞厅",
        "href": "video/movie-1258.html",
        "cover": "58.jpg",
        "year": "1990",
        "region": "香港",
        "type": "电影",
        "genre": "恐怖 / 喜剧",
        "oneLine": "倒闭舞厅深夜传出音乐，保安发现跳舞的竟是六十年前离奇烧死的亡灵。"
    },
    {
        "title": "美国派：索爱天书",
        "href": "video/movie-1259.html",
        "cover": "59.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 青春",
        "oneLine": "一群高中生发现了一本1973年出版的《索爱天书》，决定按书中古法攻略全校最难搞的女生。"
    },
    {
        "title": "最棒的烂片",
        "href": "video/movie-1260.html",
        "cover": "60.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧，剧情",
        "oneLine": "一个北漂导演为了还债，拍了一部他明知是大烂片的网大，没想到这部电影却改变了几百个人的命运。"
    },
    {
        "title": "柳堡的故事",
        "href": "video/movie-1261.html",
        "cover": "61.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情， 历史",
        "oneLine": "一个被鬼子屠村的柳堡，幸存者为了活命，集体演了一出“我们都是汉奸”的荒诞戏。"
    },
    {
        "title": "贵客临门妙事多",
        "href": "video/movie-1262.html",
        "cover": "62.jpg",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "一个潦倒贵族为了面子雇佣演员假扮亲戚，没想到真正的亿万富豪亲戚在同一天突然登门。"
    },
    {
        "title": "镜子战争",
        "href": "video/movie-1263.html",
        "cover": "63.jpg",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "奇幻, 动作, 惊悚",
        "oneLine": "特工李正贤发现镜中的自己活了过来，并试图用一模一样的记忆和身手取代现实中的他。"
    },
    {
        "title": "她比烟花寂寞",
        "href": "video/movie-1264.html",
        "cover": "64.jpg",
        "year": "1997",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "一个永远在等电话的女人，和一个永远不接电话的男人，在同一栋楼里住了十年从未见面。"
    },
    {
        "title": "奇爱疑云",
        "href": "video/movie-1265.html",
        "cover": "65.jpg",
        "year": "1946",
        "region": "美国",
        "type": "电影",
        "genre": "黑色电影 / 悬疑",
        "oneLine": "私家侦探调查一起珠宝失窃案，却发现委托人竟是一个“死去”十年的女人。"
    },
    {
        "title": "渔光村",
        "href": "video/movie-1266.html",
        "cover": "66.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "高雄渔光村即将拆迁，最后一户居民老赵在整理旧物时，发现了老伴隐藏了五十年的“匪谍”秘密。"
    },
    {
        "title": "牧师神探 第四季",
        "href": "video/movie-1267.html",
        "cover": "67.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "二战后的剑桥郡，一位直肠子的牧师继续联手警探，在唱诗班的歌声中揭开一个个被信仰掩盖的罪恶秘密。"
    },
    {
        "title": "黑白李",
        "href": "video/movie-1268.html",
        "cover": "68.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪悬疑",
        "oneLine": "孪生探长互换身份追查连环凶案，却发现自己正在追捕的，是当年被交换的第三个兄弟。"
    },
    {
        "title": "月刊少女野崎君 特典",
        "href": "video/movie-1269.html",
        "cover": "69.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧，爱情，动画",
        "oneLine": "野崎君为了画出更真实的恋爱漫画，竟然拜托佐仓做他的“恋爱实验对象”，时限一个月。"
    },
    {
        "title": "死神的精度",
        "href": "video/movie-1270.html",
        "cover": "70.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻，剧情，治愈",
        "oneLine": "一个总在下雨天出现的死神，他的工作是判定目标“可死”或“不可死”，但他从未被允许问为什么。"
    },
    {
        "title": "失控十八岁",
        "href": "video/movie-1271.html",
        "cover": "71.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "青春, 剧情, 犯罪",
        "oneLine": "十八岁生日那天，少年阿豪决定抢劫便利店，却意外卷入了更深的罪恶网络。"
    },
    {
        "title": "失眠的解药",
        "href": "video/movie-1272.html",
        "cover": "72.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻, 剧情, 黑色幽默",
        "oneLine": "为了治愈失眠，他接受了一种实验性疗法：在梦里体验别人的死亡。"
    },
    {
        "title": "迷离世界",
        "href": "video/movie-1273.html",
        "cover": "73.jpg",
        "year": "2027",
        "region": "西班牙",
        "type": "电影",
        "genre": "科幻，悬疑",
        "oneLine": "一家公司推出了“完美梦境”服务，但当客户开始无法区分梦与现实时，客服电话里传来了死人的声音。"
    },
    {
        "title": "夜魅之醉宿",
        "href": "video/movie-1274.html",
        "cover": "74.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖 / 悬疑 / 惊悚",
        "oneLine": "四个好友在偏僻旅馆喝醉，第二天醒来发现少了一个人，而每个人的记忆都出现了“人为的断裂”。"
    },
    {
        "title": "剪裁魔法师2",
        "href": "video/movie-1275.html",
        "cover": "75.jpg",
        "year": "2026",
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情，传记，时尚",
        "oneLine": "老裁缝收到一件来自唐宁街的“不可能任务”：为一位深陷丑闻的女首相裁剪一件能让她在质询会上“不战而胜”的战袍。"
    },
    {
        "title": "森林的精灵",
        "href": "video/movie-1276.html",
        "cover": "76.jpg",
        "year": "2016",
        "region": "法国",
        "type": "电影",
        "genre": "奇幻, 动画, 家庭",
        "oneLine": "一只盲眼的狐狸幼崽在森林里迷路，一路上“看不见的精灵”们用各种方式保护它回家。"
    },
    {
        "title": "全世界唯一的你",
        "href": "video/movie-1277.html",
        "cover": "77.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春爱情",
        "oneLine": "两个同名同姓的“唯一”在平行时空的缝隙里相爱，却必须面对只能活一个的残酷规则。"
    },
    {
        "title": "便利店氹氹转 3",
        "href": "video/movie-1278.html",
        "cover": "78.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "剧集",
        "genre": "喜剧，生活，单元剧",
        "oneLine": "24小时便利店“氹氹转”迎来新店主，却是一个想用算法优化一切的硅谷回归程序员，与老街坊们斗智斗勇。"
    },
    {
        "title": "本森少校的私人战争",
        "href": "video/movie-1279.html",
        "cover": "79.jpg",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 战争, 传记",
        "oneLine": "一位患有创伤后应激障碍的退役少校，独自潜入战区，只为揭露一桩被掩盖的平民伤亡事件。"
    },
    {
        "title": "正邪不两立",
        "href": "video/movie-1280.html",
        "cover": "80.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作、惊悚",
        "oneLine": "最正直的警察和最冷血的杀手被迫合作，因为他们的女儿被同一个人绑架了。"
    },
    {
        "title": "刘德华线上演唱会精选重映",
        "href": "video/movie-1281.html",
        "cover": "81.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "综艺",
        "genre": "音乐, 现场",
        "oneLine": "一场跨越40年的天王金曲现场重映，每一首都是华语乐坛的集体记忆。"
    },
    {
        "title": "风暴时代",
        "href": "video/movie-1282.html",
        "cover": "82.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史、商战、剧情",
        "oneLine": "1980年代的广州，三个铁哥们从倒卖牛仔裤起家，在时代风暴中因钱生恨，最终走向不同命运。"
    },
    {
        "title": "人间蒸发粤语",
        "href": "video/movie-1283.html",
        "cover": "83.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "oneLine": "闹市街头，女子在数十个监控探头下凭空消失，警方调查发现她每天都会和“自己”擦肩而过。"
    },
    {
        "title": "查尔斯天鹅三世的心灵",
        "href": "video/movie-1284.html",
        "cover": "84.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻/喜剧",
        "oneLine": "一位偏执的贵族坚信自己是天鹅转世，心理医生为了治疗他，不得不把自己也想象成一只天鹅。"
    },
    {
        "title": "小孩不笨3",
        "href": "video/movie-1285.html",
        "cover": "85.jpg",
        "year": "2025",
        "region": "新加坡",
        "type": "电影",
        "genre": "喜剧, 剧情, 家庭",
        "oneLine": "当名校小学引入AI校长来管理纪律，一群“问题儿童”决定用最笨的办法向机器人证明：犯错也是成长的一部分。"
    },
    {
        "title": "女导与强盗",
        "href": "video/movie-1286.html",
        "cover": "86.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "oneLine": "当新锐女导演被两个笨贼绑架，她决定将这起突发事件拍成自己的毕业大作。"
    },
    {
        "title": "蜜熊的音乐奇旅",
        "href": "video/movie-1287.html",
        "cover": "87.jpg",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "冒险、音乐、奇幻",
        "oneLine": "一只会弹吉他的蜜熊为了寻找遗失的神圣乐谱，与话痨鹦鹉组队穿越南美雨林。"
    },
    {
        "title": "因为爱情",
        "href": "video/movie-1288.html",
        "cover": "88.jpg",
        "year": "2018",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "三对不同年龄段的情侣，在同一座城市里，上演爱与不爱的选择题。"
    },
    {
        "title": "末路爱神",
        "href": "video/movie-1289.html",
        "cover": "89.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情、奇幻",
        "oneLine": "患有阿尔茨海默症的老太太，每天都会忘记丈夫已去世，于是丈夫的亡魂每天都要重新追求她一次。"
    },
    {
        "title": "情场大玩咖",
        "href": "video/movie-1290.html",
        "cover": "90.jpg",
        "year": "2009",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "oneLine": "两个花花公子打了个赌：谁能先让最难追的女人说出“我愿意”，就能赢一万美金。"
    },
    {
        "title": "夏日大追击",
        "href": "video/movie-1291.html",
        "cover": "91.jpg",
        "year": "2021",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧, 动作",
        "oneLine": "一名废柴侦探为了还清债务，在暑假尾声接下离奇任务，却被卷入一场笑料百出的全岛大追逃。"
    },
    {
        "title": "古寺鹃声",
        "href": "video/movie-1292.html",
        "cover": "92.jpg",
        "year": "1962",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情/爱情/戏曲",
        "oneLine": "清朝末年，落难千金被迫嫁给仇家，成亲前夜她在古寺钟声里听到已故恋人的杜鹃啼血声。"
    },
    {
        "title": "枪林歼霸",
        "href": "video/movie-1293.html",
        "cover": "93.jpg",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 犯罪, 枪战",
        "oneLine": "黑帮头目设局让警方与对手火并，却被自己失散多年的亲弟弟——一名卧底警察，逼入绝境。"
    },
    {
        "title": "法正先锋",
        "href": "video/movie-1294.html",
        "cover": "94.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "犯罪 / 悬疑 / 古装",
        "oneLine": "唐朝乾陵发生诡异命案，负责验尸的女仵作发现，尸体内部结构完美符合失传的《洗冤集录》。"
    },
    {
        "title": "行人徒步区",
        "href": "video/movie-1295.html",
        "cover": "95.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 家庭, 社会",
        "oneLine": "一条即将被改造成徒步区的老街，连结了三代摊贩之间无法言说的亲情与秘密。"
    },
    {
        "title": "倩女奇冤",
        "href": "video/movie-1296.html",
        "cover": "96.jpg",
        "year": "2001",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装 / 悬疑 / 公案",
        "oneLine": "女鬼夜夜击鼓鸣冤，知县挖开她的坟墓，棺材里躺着的，却是三天前刚死的新任知县。"
    },
    {
        "title": "叛国佳人",
        "href": "video/movie-1297.html",
        "cover": "97.jpg",
        "year": "2020",
        "region": "美国",
        "type": "剧集",
        "genre": "谍战 / 历史 / 女性",
        "oneLine": "冷战期间，一个美国外交官妻子爱上苏联情报官，偷走了丈夫的核弹机密。"
    },
    {
        "title": "我很幸福",
        "href": "video/movie-1298.html",
        "cover": "98.jpg",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "oneLine": "在一家宣称“治愈率100%”的奇怪疗养院里，所有病人都笑得很开心，除了那个新来的正常人。"
    },
    {
        "title": "预兆 散步的侵略者",
        "href": "video/movie-1299.html",
        "cover": "99.jpg",
        "year": "2017",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻， 悬疑， 剧情",
        "oneLine": "丈夫散步时被外星人替换，回家后不断用荒诞的预言，摧毁妻子对现实的认知。"
    },
    {
        "title": "鬼玩人第二季",
        "href": "video/movie-1300.html",
        "cover": "100.jpg",
        "year": "2016",
        "region": "美国",
        "type": "剧集",
        "genre": "恐怖, 喜剧, 奇幻",
        "oneLine": "上一季刚逃出鬼屋，这次恶灵直接跟着主角搬进了城市公寓。"
    },
    {
        "title": "向西闻记国语",
        "href": "video/movie-1301.html",
        "cover": "101.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "网剧",
        "genre": "悬疑 / 冒险 / 公路",
        "oneLine": "一个被开除的前刑侦顾问，驾驶报废面包车在大西北专接“科学无法解释”的怪案。"
    },
    {
        "title": "黑塔利亚第四季",
        "href": "video/movie-1302.html",
        "cover": "102.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧，历史",
        "oneLine": "世界陷入了“元宇宙领土危机”，国家意识体们被迫进入虚拟世界重新划分国界。"
    },
    {
        "title": "香水",
        "href": "video/movie-1303.html",
        "cover": "103.jpg",
        "year": "2023",
        "region": "德国",
        "type": "电影",
        "genre": "犯罪，惊悚，剧情",
        "oneLine": "一名失意的调香师为了调制出传说中的“梦幻之水”，开始绑架具有特殊体香的少女。"
    },
    {
        "title": "佳人战士效于飞",
        "href": "video/movie-1304.html",
        "cover": "104.jpg",
        "year": "1975",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作/武侠",
        "oneLine": "一对姐妹花为父报仇，一人练就铁砂掌，一人修成轻功，联手挑战七十二路水路总舵主。"
    },
    {
        "title": "她行走于黑暗中",
        "href": "video/movie-1305.html",
        "cover": "105.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "悬疑, 犯罪, 惊悚",
        "oneLine": "一位在爆炸中失明的女刑警，仅凭听觉和嗅觉，追踪一个隐藏在网络暗面的连环杀手。"
    },
    {
        "title": "垛上花",
        "href": "video/movie-1306.html",
        "cover": "106.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 乡村, 家庭",
        "oneLine": "一个逃离乡村的女孩被迫返回，却在快要消失的垛田上重新找到了根。"
    },
    {
        "title": "惹鬼回路",
        "href": "video/movie-1307.html",
        "cover": "107.jpg",
        "year": "2024",
        "region": "日本/美国",
        "type": "电影",
        "genre": "恐怖，科幻",
        "oneLine": "只要把两部手机靠近，就能听到死人临终前最后7秒的录音，这个诡异“回路”正在全城通过蓝牙疯狂传播。"
    },
    {
        "title": "火线情深",
        "href": "video/movie-1308.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "动作, 职业, 爱情",
        "oneLine": "他和她是全城最水火不容的消防精英，直到一场吞噬整个化工园区的爆炸，把两人铐在了同一副手铐上。"
    },
    {
        "title": "会议谩舞",
        "href": "video/movie-1309.html",
        "cover": "109.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 职场 / 喜剧",
        "oneLine": "一名惧怕开会发言的社畜发现，只要他在会议上跳起尴尬的舞蹈，就能神奇地说服任何客户。"
    },
    {
        "title": "自由主义者：间谍的时代",
        "href": "video/movie-1310.html",
        "cover": "110.jpg",
        "year": "2025",
        "region": "俄罗斯",
        "type": "剧集",
        "genre": "谍战 / 历史 / 政治",
        "oneLine": "1991年，一个信仰共产主义的克格勃特工，被派去监视叶利钦，却发现自己才是被莫斯科抛弃的人。"
    },
    {
        "title": "矢在弦上第一季",
        "href": "video/movie-1311.html",
        "cover": "111.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧，犯罪",
        "oneLine": "一个自以为是的贵族侦探和一个用“常识”破案的女警督被迫搭档，每集都在讽刺经典探案剧的所有套路。"
    },
    {
        "title": "引力弹弓",
        "href": "video/movie-1312.html",
        "cover": "112.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 冒险 / 灾难",
        "oneLine": "前往木星的探测船失控，宇航员父子只能用引力弹弓效应赌命回家。"
    },
    {
        "title": "捉贼记",
        "href": "video/movie-1313.html",
        "cover": "113.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "警匪, 悬疑",
        "oneLine": "为追查连环珠宝大盗，退休神偷被警方从监狱捞出，却发现这个“贼”的手法竟然和他当年的一模一样。"
    },
    {
        "title": "南泥湾",
        "href": "video/movie-1314.html",
        "cover": "114.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史, 剧情",
        "oneLine": "一群被日军打散的散兵游勇，要在无人区中开垦出一片能养活千人的土地。"
    },
    {
        "title": "李波罗的爱情",
        "href": "video/movie-1315.html",
        "cover": "115.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情 / 运动",
        "oneLine": "外卖小哥李波罗有绝世球技，却因“情商太低”被职业队屡屡拒绝，直到遇见那个只看球技不看人的女队医。"
    },
    {
        "title": "巡弋悍将",
        "href": "video/movie-1316.html",
        "cover": "116.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作， 惊悚",
        "oneLine": "一名退役特工在横跨欧洲的列车上，必须保护关键证人免受雇佣兵军团的无差别猎杀。"
    },
    {
        "title": "惊魂夜魇",
        "href": "video/movie-1317.html",
        "cover": "117.jpg",
        "year": "1981",
        "region": "意大利",
        "type": "电影",
        "genre": "惊悚， 铅黄， 悬疑",
        "oneLine": "一位失明钢琴师移植了一位被害舞者的眼角膜后，每次演奏肖邦都会在眼中“看到”凶手的脸。"
    },
    {
        "title": "志愿者",
        "href": "video/movie-1318.html",
        "cover": "118.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 灾难 / 人性",
        "oneLine": "一场突如其来的特大洪水，五位互不相识的志愿者被困在孤岛，食物只剩三包方便面。"
    },
    {
        "title": "有熊谷守一在的地方",
        "href": "video/movie-1319.html",
        "cover": "119.jpg",
        "year": "2023",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、传记",
        "oneLine": "90岁的传奇画家熊谷守一30年不出门，在自家院子里观察蚂蚁搬家，与整个世界博弈。"
    },
    {
        "title": "金钱豹",
        "href": "video/movie-1320.html",
        "cover": "120.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪 / 黑色幽默",
        "oneLine": "一头价值连城的野生金钱豹，把偷猎者、警察和直播网红搅成了一锅粥。"
    },
    {
        "title": "夜间天使",
        "href": "video/movie-1321.html",
        "cover": "121.jpg",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "oneLine": "柏林夏洛特医院连续三年平安夜都有病人无故康复后神秘失踪，新来的夜班护士发现，凶手可能是那个最不可能的人。"
    },
    {
        "title": "爱尔兰之路",
        "href": "video/movie-1322.html",
        "cover": "122.jpg",
        "year": "2017",
        "region": "爱尔兰/英国",
        "type": "电影",
        "genre": "剧情/历史",
        "oneLine": "1847年，一艘载满饥民的棺材船驶向美国，船上唯一的医生发现，有人在喂大家吃砒霜。"
    },
    {
        "title": "泣声惊魂",
        "href": "video/movie-1323.html",
        "cover": "123.jpg",
        "year": "2015",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "大学女生捡到一盘旧磁带，里面录制的女人哭泣声，谁听到谁就会在七天内溺死。"
    },
    {
        "title": "邻居表亲",
        "href": "video/movie-1324.html",
        "cover": "124.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "两个从小一起长大的邻居女孩，意外发现她们竟是同父异母的姐妹，而父亲就住在隔壁。"
    },
    {
        "title": "诛仙1",
        "href": "video/movie-1325.html",
        "cover": "125.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻，武侠，爱情",
        "oneLine": "草庙村少年张小凡意外获得魔教至宝烧火棍，在正魔两道之间挣扎求生，同时陷入陆雪琪和碧瑶的感情纠葛。"
    },
    {
        "title": "狐狸小姐不好惹",
        "href": "video/movie-1326.html",
        "cover": "126.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情、喜剧、奇幻",
        "oneLine": "千年狐妖为渡情劫，必须让一位冷酷总裁在三个月内真心爱上她，但她翻遍了总裁的手机发现——他只爱工作。"
    },
    {
        "title": "儿女传奇之选美",
        "href": "video/movie-1327.html",
        "cover": "127.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "家庭喜剧",
        "oneLine": "为了给女儿凑大学学费，48岁的超市收银员阿姨瞒着全家报名了一场中老年选美大赛。"
    },
    {
        "title": "九命怪妻",
        "href": "video/movie-1328.html",
        "cover": "128.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "电影",
        "genre": "恐怖, 悬疑, 剧情",
        "oneLine": "新婚妻子意外死亡后反复复活，每次复活都会变成一个不同的陌生人，但记忆的碎片却指向同一起谋杀。"
    },
    {
        "title": "不思异：怪谈",
        "href": "video/movie-1329.html",
        "cover": "129.jpg",
        "year": "2023",
        "region": "中国",
        "type": "剧集",
        "genre": "悬疑，惊悚，单元剧",
        "oneLine": "一家深夜电台接听诡异来电，每通电话背后，都是一段无法解释的真实经历。"
    },
    {
        "title": "自闭儿之路",
        "href": "video/movie-1330.html",
        "cover": "130.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，传记",
        "oneLine": "一位单亲妈妈带着重度自闭症儿子跨越美国大陆，只为寻找一所能接纳他的“怪胎学校”。"
    },
    {
        "title": "秘密警察",
        "href": "video/movie-1331.html",
        "cover": "131.jpg",
        "year": "2025",
        "region": "英国 / 德国",
        "type": "剧集",
        "genre": "惊悚 / 剧情 / 历史",
        "oneLine": "1980年代东德，一名秘密警察在监视作家时，发现自己爱上了监视对象的妻子。"
    },
    {
        "title": "真相半白",
        "href": "video/movie-1332.html",
        "cover": "132.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑， 剧情",
        "oneLine": "六个老同学在一场剧本杀游戏中，发现剧本写的竟是他们共同隐瞒了十年的秘密。"
    },
    {
        "title": "时光大战",
        "href": "video/movie-1333.html",
        "cover": "133.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻, 动作",
        "oneLine": "一支特种小队被困在敌人操纵的24小时时间牢笼里，必须在无限循环的惨烈攻防战中找出破局的关键。"
    },
    {
        "title": "地狱峡谷",
        "href": "video/movie-1334.html",
        "cover": "134.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "冒险 / 恐怖 / 生存",
        "oneLine": "四名探险家进入未被记录的峡谷裂缝，发现底部栖息着视声音为猎物的远古盲兽。"
    },
    {
        "title": "猎神：冬日之战",
        "href": "video/movie-1335.html",
        "cover": "135.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 动作",
        "oneLine": "残暴的冰雪女王统治着永冬之地，唯一的反抗者是被她亲手创造出来的猎神，而他只想为自己失去的记忆复仇。"
    },
    {
        "title": "米欧王子",
        "href": "video/movie-1336.html",
        "cover": "136.jpg",
        "year": "2023",
        "region": "瑞典 / 挪威",
        "type": "电影",
        "genre": "奇幻 / 家庭",
        "oneLine": "福利院的孤儿果阿突然收到一封信，信中说他是遥远“米欧王国”失踪多年的王子，而骑着一头金毛狮子的信使正在窗外等他。"
    },
    {
        "title": "银发阿基德",
        "href": "video/movie-1337.html",
        "cover": "137.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "养老院里最和蔼的老头，曾是东南亚最令人闻风丧胆的杀手“阿基德”，如今有人悬赏十亿要他的人头。"
    },
    {
        "title": "地中海厨娘",
        "href": "video/movie-1338.html",
        "cover": "138.jpg",
        "year": "2023",
        "region": "西班牙",
        "type": "电影",
        "genre": "剧情/美食",
        "oneLine": "天才女厨师突得失味觉，靠记忆中的味道踏上一场自我救赎。"
    },
    {
        "title": "迷欲东京",
        "href": "video/movie-1339.html",
        "cover": "139.jpg",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "情欲 / 悬疑 / 剧情",
        "oneLine": "东京一名女记者调查地下“欲望诊所”，发现客户会交换自己最隐秘的欲望来获得成功。"
    },
    {
        "title": "水中的女人",
        "href": "video/movie-1340.html",
        "cover": "140.jpg",
        "year": "2025",
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "奇幻，剧情，悬疑",
        "oneLine": "少女溺水后生还，但她开始每隔七天蜕一层皮，每层皮都会长成一个和她一模一样的女孩，并跳河自尽。"
    },
    {
        "title": "安培林",
        "href": "video/movie-1341.html",
        "cover": "141.jpg",
        "year": "1968",
        "region": "美国",
        "type": "电影",
        "genre": "剧情，短片，爱情",
        "oneLine": "年轻男女在沙漠公路偶遇，搭车同行的一夜，成为了彼此生命中最美的过客。"
    },
    {
        "title": "阴阳路十九之我对眼见到野",
        "href": "video/movie-1342.html",
        "cover": "142.jpg",
        "year": "2002",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖, 喜剧",
        "oneLine": "一对好兄弟意外开了天眼，本想以此泡妞发财，却惹上了杀身之祸。"
    },
    {
        "title": "摩斯拉3 王者基多拉来袭",
        "href": "video/movie-1343.html",
        "cover": "143.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "动作, 科幻, 奇幻",
        "oneLine": "当封印被打破，王者基多拉降临，尚未化蛹的幼虫形态摩斯拉将如何守护人类？"
    },
    {
        "title": "用九柑仔店",
        "href": "video/movie-1344.html",
        "cover": "144.jpg",
        "year": "2019",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情 / 生活",
        "oneLine": "失意都市男回乡接管老旧的柑仔店，发现那不仅是商店，更是全村灵魂的收容所。"
    },
    {
        "title": "电影中的同志",
        "href": "video/movie-1345.html",
        "cover": "145.jpg",
        "year": "2024",
        "region": "美国",
        "type": "纪录片",
        "genre": "纪录，历史",
        "oneLine": "一部揭秘百年来好莱坞如何利用潜台词和符号，在银幕上隐秘呈现同性情感的视觉论文。"
    },
    {
        "title": "沉默的心",
        "href": "video/movie-1346.html",
        "cover": "146.jpg",
        "year": "2024",
        "region": "丹麦",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "患有绝症的母亲决定在生日聚会上进行安乐死，家人们带着各自的秘密和私心回到了这个沉默的家。"
    },
    {
        "title": "金银死",
        "href": "video/movie-1347.html",
        "cover": "147.jpg",
        "year": "2028",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪, 动作, 黑色幽默",
        "oneLine": "两拨笨贼在同一家金店火并，却发现抢到的金条全是巧克力，真正的黄金藏在殡仪馆。"
    },
    {
        "title": "长安的荔枝",
        "href": "video/movie-1348.html",
        "cover": "148.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "古装, 悬疑, 剧情",
        "oneLine": "一名底层小吏接到不可能的任务：将岭南鲜荔枝在不变质前送至长安。"
    },
    {
        "title": "别岁",
        "href": "video/movie-1349.html",
        "cover": "149.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "每年除夕，他都会回到同一天，直到修复和父亲的关系。"
    },
    {
        "title": "初恋未满",
        "href": "video/movie-1350.html",
        "cover": "150.jpg",
        "year": "2013",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 青春",
        "oneLine": "1997年香港回归前夕，六个高三学生在一场卡拉OK比赛中，唱响了他们未完成的初恋和理想。"
    },
    {
        "title": "帝女花粤语",
        "href": "video/movie-1351.html",
        "cover": "1.jpg",
        "year": "2003",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "古装， 爱情， 历史",
        "oneLine": "明末长平公主在国破家亡后与驸马周世显的乱世重逢，以死相守的旷世悲剧。"
    },
    {
        "title": "海誓山盟万古情",
        "href": "video/movie-1352.html",
        "cover": "2.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情，奇幻",
        "oneLine": "一对恋人在上古诅咒下历经三世重逢，却发现每一次相遇都在加速世界的崩塌。"
    },
    {
        "title": "独家新闻",
        "href": "video/movie-1353.html",
        "cover": "3.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情、惊悚",
        "oneLine": "一个濒临倒闭的新闻网站记者，为了制造独家新闻，伪造了一条丑闻，却引发了一场真实的血案。"
    },
    {
        "title": "自燃",
        "href": "video/movie-1354.html",
        "cover": "4.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 悬疑, 奇幻",
        "oneLine": "全国突然出现“自燃现象”，受害者全都是看似普通的底层年轻人，他们的共同点是：都曾默默忍受过不公。"
    },
    {
        "title": "伦勃朗之我控诉",
        "href": "video/movie-1355.html",
        "cover": "5.jpg",
        "year": "2025",
        "region": "荷兰",
        "type": "电影",
        "genre": "悬疑 / 历史",
        "oneLine": "一幅伦勃朗真迹被发现时，画中人正是三百年前一桩悬案的受害者。"
    },
    {
        "title": "野生厨房第二季",
        "href": "video/movie-1356.html",
        "cover": "6.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀 / 美食",
        "oneLine": "本季明星们被空降到全球最极端的五个无人区，在没有任何工具的情况下，必须用“纯野生”的方式做出一顿饭。"
    },
    {
        "title": "魔鬼诱惑",
        "href": "video/movie-1357.html",
        "cover": "7.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "心理惊悚",
        "oneLine": "一名卧底记者潜入神秘组织，却发现引诱信徒的“魔鬼”竟是自己的镜像人格。"
    },
    {
        "title": "灰鸽子之歌",
        "href": "video/movie-1358.html",
        "cover": "8.jpg",
        "year": "1960",
        "region": "苏联",
        "type": "电影",
        "genre": "战争 / 剧情",
        "oneLine": "二战期间白俄罗斯一个村庄被毁，幸存小男孩带着一只灰鸽子寻找游击队。"
    },
    {
        "title": "不再沉默第一季",
        "href": "video/movie-1359.html",
        "cover": "9.jpg",
        "year": "2020",
        "region": "美国",
        "type": "电视剧",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "高中优等生自杀身亡，留下录音带指控了十三个同学。"
    },
    {
        "title": "令和元年版怪谈牡丹灯笼",
        "href": "video/movie-1360.html",
        "cover": "10.jpg",
        "year": "2019",
        "region": "日本",
        "type": "剧集",
        "genre": "恐怖 / 爱情 / 古装",
        "oneLine": "令和时代，程序员新吾在深夜下载了一个古董APP“牡丹灯笼”，从此每晚都有一个神秘女人上门，而他身边人开始接连暴毙。"
    },
    {
        "title": "猫和老鼠:飆风天王",
        "href": "video/movie-1361.html",
        "cover": "11.jpg",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "喜剧 / 动作 / 冒险",
        "oneLine": "汤姆和杰瑞意外闯入一场跨国越野拉力赛，被迫合作争夺神秘冠军奖杯。"
    },
    {
        "title": "深海越狱",
        "href": "video/movie-1362.html",
        "cover": "12.jpg",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "科幻 / 动作 / 惊悚",
        "oneLine": "一座位于马里亚纳海沟的私人高科技监狱发生暴动，而监狱的AI中枢突然判定：所有守卫和囚犯，都是需要被清除的“囚犯”。"
    },
    {
        "title": "毒妇与恶汉",
        "href": "video/movie-1363.html",
        "cover": "13.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 惊悚 / 历史",
        "oneLine": "当一个被指控为毒妇的女巫，遇上一个以折磨女巫为乐的恶汉法官，他们决定联手屠城。"
    },
    {
        "title": "那年那兔那些事第二季",
        "href": "video/movie-1364.html",
        "cover": "14.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "动画",
        "genre": "历史，励志，战争",
        "oneLine": "种花家的兔子们继续前行，这一次，它们要面对“蘑菇蛋”带来的技术封锁与外交孤岛。"
    },
    {
        "title": "里克·斯坦的长周末",
        "href": "video/movie-1365.html",
        "cover": "15.jpg",
        "year": "2026",
        "region": "英国",
        "type": "剧集",
        "genre": "纪录片, 美食",
        "oneLine": "老爷爷带着锅，坐着火车，在每个欧洲城市只待一个长周末，边逛菜市场边煮出最地道的一餐。"
    },
    {
        "title": "别离我而去",
        "href": "video/movie-1366.html",
        "cover": "16.jpg",
        "year": "2019",
        "region": "日本",
        "type": "电影",
        "genre": "家庭, 剧情",
        "oneLine": "离家三十年的父亲突然罹患绝症归来，三个孩子面临是否拔掉呼吸机的艰难抉择。"
    },
    {
        "title": "谷子熟了",
        "href": "video/movie-1367.html",
        "cover": "17.jpg",
        "year": "2022",
        "region": "中国",
        "type": "电影",
        "genre": "剧情，家庭",
        "oneLine": "在城市打工的父亲带回一个陌生男孩，说是“谷子熟了”该回家了。"
    },
    {
        "title": "切尔诺贝利",
        "href": "video/movie-1368.html",
        "cover": "18.jpg",
        "year": "2025",
        "region": "英国 / 美国",
        "type": "剧集",
        "genre": "历史 / 灾难 / 剧情",
        "oneLine": "1986年普里皮亚季，消防员瓦莱里的妻子在疏散前夜，执意要找到一件被遗落在辐射区的结婚礼物。"
    },
    {
        "title": "办公室的诱惑",
        "href": "video/movie-1369.html",
        "cover": "19.jpg",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情, 剧情, 职场",
        "oneLine": "初入职场的实习生面对女总裁的致命诱惑，是飞黄腾达的捷径，还是万劫不复的深渊？"
    },
    {
        "title": "夏日的期待",
        "href": "video/movie-1370.html",
        "cover": "20.jpg",
        "year": "2022",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情, 青春",
        "oneLine": "得知生命仅剩最后一个夏天，沉默寡言的男孩决定骑着单车去看那场从未谋面的海。"
    },
    {
        "title": "真情来电",
        "href": "video/movie-1371.html",
        "cover": "21.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情, 喜剧, 奇幻",
        "oneLine": "一名电信诈骗新手打电话行骗，却每次都打到同一个落魄程序员的手机上，两人竟因此相爱了。"
    },
    {
        "title": "魔界重生",
        "href": "video/movie-1372.html",
        "cover": "22.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻, 动作",
        "oneLine": "魔王复活后发现自己爱上了人类的女儿，为了她，他决定再次毁灭世界——只为了给她摘一朵花。"
    },
    {
        "title": "我的助理不简单",
        "href": "video/movie-1373.html",
        "cover": "23.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 职场, 治愈",
        "oneLine": "从跨国公司总裁沦落为废柴，却遇到了一个65岁的神仙助理，教她重新做人。"
    },
    {
        "title": "穿黑衣的女孩",
        "href": "video/movie-1374.html",
        "cover": "24.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑, 犯罪, 剧情",
        "oneLine": "十年前校园暴力事件的受害者们接连“意外”身亡，而每个现场都出现一个穿黑衣的女孩背影。"
    },
    {
        "title": "恐怖特快",
        "href": "video/movie-1375.html",
        "cover": "25.jpg",
        "year": "2006",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖, 悬疑",
        "oneLine": "加班族深夜坐上末班车，发现车上除了他，其他“乘客”都在30年前就已经死了。"
    },
    {
        "title": "拉皮条",
        "href": "video/movie-1376.html",
        "cover": "26.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪 / 剧情",
        "oneLine": "一个游走在灰色地带的底层皮条客，为了寻找失踪的女儿，暗中与跨国人口贩卖集团展开殊死搏斗。"
    },
    {
        "title": "野狼历险记5：家族之旅",
        "href": "video/movie-1377.html",
        "cover": "27.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电影",
        "genre": "动画 / 冒险",
        "oneLine": "狼群首领“疤脸”必须带领他的家族穿越人类的高速公路和农场，前往祖先的应许之地“幽灵谷”。"
    },
    {
        "title": "朱朱宠物",
        "href": "video/movie-1378.html",
        "cover": "28.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、动画、家庭",
        "oneLine": "小学生朱朱的仓鼠一夜之间能说人话了，还声称自己是来自外星的流亡王子，要发动一场“萌萌的”政变。"
    },
    {
        "title": "模模糊糊",
        "href": "video/movie-1379.html",
        "cover": "29.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "文艺, 剧情",
        "oneLine": "一位患有严重眼疾的老画家在彻底失明前，试图画下他记忆中已经去世五十年的初恋。"
    },
    {
        "title": "李天腾与赵小宝3",
        "href": "video/movie-1380.html",
        "cover": "30.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 青春",
        "oneLine": "当年的校园活宝步入社会，为了凑齐房租，两人竟在豪华写字楼里开起了地下宠物寄养店。"
    },
    {
        "title": "识骨寻踪第八季",
        "href": "video/movie-1381.html",
        "cover": "31.jpg",
        "year": "2012",
        "region": "美国",
        "type": "电视剧",
        "genre": "犯罪 / 悬疑 / 法医",
        "oneLine": "一名连环杀手开始模仿布伦南博士破过的陈年悬案来作案，每一次都在现场故意留下一块不属于受害者的骨头。"
    },
    {
        "title": "去森浦的路",
        "href": "video/movie-1382.html",
        "cover": "32.jpg",
        "year": "1975",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 文艺",
        "oneLine": "两个为不同目的踏上同一条路的男人，一个去找失踪的哥哥，一个想死在故乡。"
    },
    {
        "title": "万千星辉贺台庆2022",
        "href": "video/movie-1383.html",
        "cover": "33.jpg",
        "year": "2022",
        "region": "中国香港",
        "type": "综艺/晚会",
        "genre": "综艺 / 歌舞",
        "oneLine": "TVB55周年台庆，老中青三代艺人齐聚，用歌舞和游戏回顾半个世纪的电视风云。"
    },
    {
        "title": "丝结之谜",
        "href": "video/movie-1384.html",
        "cover": "34.jpg",
        "year": "2025",
        "region": "意大利 / 中国",
        "type": "电影",
        "genre": "悬疑 / 文艺 / 历史",
        "oneLine": "一件元代青花瓷罐的修复过程中，修复师发现罐身缠枝纹下藏着一幅完整的古代航海图。"
    },
    {
        "title": "篷车之旅",
        "href": "video/movie-1385.html",
        "cover": "35.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "公路、剧情",
        "oneLine": "一个叛逆少女偷了一辆破篷车逃跑，却搭上了想去海边自杀的古怪老头，一路笑泪交织。"
    },
    {
        "title": "妖夜寻狼：血姬觉醒",
        "href": "video/movie-1386.html",
        "cover": "36.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作，奇幻",
        "oneLine": "吸血鬼女战士莎琳娜被封印千年后苏醒，发现狼人已统治世界，而她的血是唯一能杀死狼王的东西。"
    },
    {
        "title": "亚特兰蒂斯",
        "href": "video/movie-1387.html",
        "cover": "37.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻，冒险，奇幻",
        "oneLine": "一支国际科考队在深海发现非人类建筑遗迹，却唤醒了沉睡万年的古老战争机器。"
    },
    {
        "title": "灵能百分百第三季",
        "href": "video/movie-1388.html",
        "cover": "38.jpg",
        "year": "2022",
        "region": "日本",
        "type": "动画",
        "genre": "动作 / 喜剧 / 奇幻",
        "oneLine": "龙套的“神树”化身为宗教，全城被洗脑，而他必须亲手拔掉自己的超能力之根。"
    },
    {
        "title": "齐木楠雄的灾难第一季",
        "href": "video/movie-1389.html",
        "cover": "39.jpg",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧 / 动画 / 奇幻",
        "oneLine": "拥有足以毁灭世界的超能力的高中生，唯一的愿望却是做个不起眼的普通人。"
    },
    {
        "title": "加满高级汽油",
        "href": "video/movie-1390.html",
        "cover": "40.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧、公路、冒险",
        "oneLine": "两个穷鬼开报废面包车穿越无人区，一路骗吃骗喝，却被黑帮错认成顶级杀手。"
    },
    {
        "title": "刑警老党",
        "href": "video/movie-1391.html",
        "cover": "41.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "刑侦, 剧情",
        "oneLine": "还有三十天退休的老刑警老党，发誓要在最后一个月翻出一桩十九年前的少女失踪悬案。"
    },
    {
        "title": "妖狐传",
        "href": "video/movie-1392.html",
        "cover": "42.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻, 古装, 爱情",
        "oneLine": "千年狐妖化身小倌馆琴师，只为寻找当年救他一命却又背叛他的书生的转世。"
    },
    {
        "title": "炽恋",
        "href": "video/movie-1393.html",
        "cover": "43.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "TV Series",
        "genre": "爱情，剧情，同性",
        "oneLine": "两个从小一起长大的男孩因一场误会分开十年，再次相遇时，一个成了消防员，一个成了他要救的火场困客。"
    },
    {
        "title": "烽火地雷战",
        "href": "video/movie-1394.html",
        "cover": "44.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争 / 动作",
        "oneLine": "1942年，胶东小村用土制地雷和智商对抗机械化部队，而最大的杀器是一个只会做鞭炮的老头。"
    },
    {
        "title": "上帝啊，真笨!",
        "href": "video/movie-1395.html",
        "cover": "45.jpg",
        "year": "2005",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "oneLine": "一个笨手笨脚的哲学教授为了追到女邻居，硬说自己要写一本关于“笨蛋”的专著。"
    },
    {
        "title": "绝命毒师第四季",
        "href": "video/movie-1396.html",
        "cover": "46.jpg",
        "year": "2011",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪 / 剧情 / 惊悚",
        "oneLine": "沃尔特与古斯的关系彻底破裂，他必须在炸鸡叔杀掉他全家之前，用一株铃兰完成史上最绝地反击。"
    },
    {
        "title": "东京无国籍少女",
        "href": "video/movie-1397.html",
        "cover": "47.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 悬疑, 文艺",
        "oneLine": "生于日本、长于日本的华裔少女，没有户口、没有国籍，在东京的阴影里寻找“我是谁”。"
    },
    {
        "title": "极乐",
        "href": "video/movie-1398.html",
        "cover": "48.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电视剧",
        "genre": "科幻， 惊悚",
        "oneLine": "2065年，一家科技公司发明了“极乐芯片”，植入者能永久活在完美梦境中，但现实中的身体开始无故失踪。"
    },
    {
        "title": "话说山海",
        "href": "video/movie-1399.html",
        "cover": "49.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀 / 文化",
        "oneLine": "四位脱口秀演员带着《山海经》，自驾探访现实中对应的名山大川，爆笑不断。"
    },
    {
        "title": "谍海艳姝",
        "href": "video/movie-1400.html",
        "cover": "50.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "谍战, 悬疑, 女性",
        "oneLine": "1941年的上海，三个背景迥异的女人周旋于76号、军统和地下党之间，上演了一场红颜谍战。"
    },
    {
        "title": "神出鬼没的复仇者",
        "href": "video/movie-1401.html",
        "cover": "51.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑, 惊悚",
        "oneLine": "七个互不相识的受害者，收到代号“幽灵”的复仇计划，精准狙杀同一个权贵。"
    },
    {
        "title": "二世部队",
        "href": "video/movie-1402.html",
        "cover": "52.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "动作, 犯罪, 喜剧",
        "oneLine": "一群被强制入伍的纨绔富二代，在军营里意外惹上了贩毒集团，被迫组队打“实战”。"
    },
    {
        "title": "扑通扑通喜欢你",
        "href": "video/movie-1403.html",
        "cover": "53.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "青春 / 爱情",
        "oneLine": "傲娇学霸与元气学渣因为一场“心跳实验”被迫成为搭档，却意外发现彼此暗恋了对方整整三年。"
    },
    {
        "title": "本色英雄",
        "href": "video/movie-1404.html",
        "cover": "54.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情",
        "oneLine": "卧底警察阿风在毒枭集团卧底十年，最终面临亲手抓捕亲弟弟还是彻底沉沦为毒贩的两难抉择。"
    },
    {
        "title": "一周的朋友2014",
        "href": "video/movie-1405.html",
        "cover": "55.jpg",
        "year": "2014",
        "region": "日本",
        "type": "电影",
        "genre": "爱情, 青春",
        "oneLine": "她只有一周的记忆，他却决定每周都重新让她爱上自己。"
    },
    {
        "title": "绝命直播",
        "href": "video/movie-1406.html",
        "cover": "56.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "网红主播被绑架后，绑匪逼她全程直播，而观众的打赏决定了她的生死。"
    },
    {
        "title": "京城大状师2000",
        "href": "video/movie-1407.html",
        "cover": "57.jpg",
        "year": "2000",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 悬疑, 律政",
        "oneLine": "1900年，北京城第一状师夏木，在八国联军入侵前夕，用唇枪舌剑周旋于洋人、朝廷和江湖之间。"
    },
    {
        "title": "青春纪录",
        "href": "video/movie-1408.html",
        "cover": "58.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情、青春、时代",
        "oneLine": "四十岁的建筑工头翻看高中日记，决定联系日记里提到的每一个人，弥补当年的遗憾。"
    },
    {
        "title": "关键杀机",
        "href": "video/movie-1409.html",
        "cover": "59.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作惊悚",
        "oneLine": "顶级特工被植入虚假记忆后关进密室，他必须在24小时内找回真实身份，否则脑中炸弹会炸毁整栋大楼。"
    },
    {
        "title": "铁拳：血脉",
        "href": "video/movie-1410.html",
        "cover": "60.jpg",
        "year": "2024",
        "region": "日本 / 美国",
        "type": "动画电影",
        "genre": "动作, 格斗, 热血",
        "oneLine": "为了寻找杀父仇人，少年用一条机械臂和一招从未赢过的“铁拳”打进世界总决赛。"
    },
    {
        "title": "路路",
        "href": "video/movie-1411.html",
        "cover": "61.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "七岁的路路每天走三小时山路上学，直到村里通了水泥路，他却再也找不到回家的记号。"
    },
    {
        "title": "玩命杀手",
        "href": "video/movie-1412.html",
        "cover": "62.jpg",
        "year": "2022",
        "region": "美国",
        "type": "电影",
        "genre": "动作，犯罪，惊悚",
        "oneLine": "一名被迫退休的王牌杀手，为了拿回养老金，不得不重操旧业，却发现目标全是他的老熟人。"
    },
    {
        "title": "女孩罗塞玛莉",
        "href": "video/movie-1413.html",
        "cover": "63.jpg",
        "year": "2026",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 传记, 历史",
        "oneLine": "19世纪末，被父亲以“放荡”之名送入疯人院的少女，用十年时间书写院中残酷日记。"
    },
    {
        "title": "老板",
        "href": "video/movie-1414.html",
        "cover": "64.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电视剧",
        "genre": "职场 / 喜剧",
        "oneLine": "被老板逼到自杀边缘的女职员，重生回到入职第一天，决定用魔法打败魔法。"
    },
    {
        "title": "鸳鸯恋",
        "href": "video/movie-1415.html",
        "cover": "65.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 古装 / 喜剧",
        "oneLine": "京城第一纨绔女与病弱王爷被赐婚，新婚夜她踹断了他的床腿，他却笑了。"
    },
    {
        "title": "家师父一体第二季",
        "href": "video/movie-1416.html",
        "cover": "66.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "综艺",
        "genre": "真人秀 / 生活",
        "oneLine": "四位年轻艺人住进韩国各界顶尖大师的家中，同吃同住两天，学习的不只是技能，更是如何老去。"
    },
    {
        "title": "爱的所有格",
        "href": "video/movie-1417.html",
        "cover": "67.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画电影",
        "genre": "爱情 / 科幻 / 青春",
        "oneLine": "被AI恋人抛弃后，少女发明了一台可以删除“格助词”的机器，试图从所有句子里抹去他的存在。"
    },
    {
        "title": "皇国少女",
        "href": "video/movie-1418.html",
        "cover": "68.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 历史",
        "oneLine": "1945年日本战败后，一名自称天皇私生女的少女闯入皇宫，掀起了皇室从未公开的继承危机。"
    },
    {
        "title": "入侵者2024",
        "href": "video/movie-1419.html",
        "cover": "69.jpg",
        "year": "2024",
        "region": "法国 / 德国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "oneLine": "深夜有“自己”闯入家中，主角开枪打死对方后，发现尸体上没有任何身份证明，除了和自己一模一样的脸。"
    },
    {
        "title": "荡漾青春",
        "href": "video/movie-1420.html",
        "cover": "70.jpg",
        "year": "2025",
        "region": "中国",
        "type": "电影",
        "genre": "爱情, 剧情",
        "oneLine": "高三最后一个夏天，两个被老师视为“差生”的少年，在废弃泳池里找到了比大学更重要的东西。"
    },
    {
        "title": "忧国",
        "href": "video/movie-1421.html",
        "cover": "71.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "战争剧情",
        "oneLine": "二战末期，一位效忠天皇的年轻军官在收到投降诏书后，选择用最古老的方式结束自己的忠诚。"
    },
    {
        "title": "民心难违",
        "href": "video/movie-1422.html",
        "cover": "72.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 悬疑 / 犯罪",
        "oneLine": "一座北方县城因强制拆迁引发老人自焚，年轻的县纪委副书记在情与法之间被推入绝境。"
    },
    {
        "title": "尸乐园",
        "href": "video/movie-1423.html",
        "cover": "73.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电视剧",
        "genre": "喜剧 / 恐怖",
        "oneLine": "丧尸爆发那天，一群游客被困在韩国最大的游乐园里，他们决定——继续玩过山车。"
    },
    {
        "title": "万花天体会",
        "href": "video/movie-1424.html",
        "cover": "74.jpg",
        "year": "1975",
        "region": "法国",
        "type": "电影",
        "genre": "剧情，情色，艺术",
        "oneLine": "在一个名为“万花天体会”的秘密社团里，成员们的每一次欢愉，都是对资产阶级道德的死刑判决。"
    },
    {
        "title": "目的地汽车旅馆",
        "href": "video/movie-1425.html",
        "cover": "75.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情 / 悬疑",
        "oneLine": "他只能在每晚凌晨1点至3点进入那间房间，而她已经在那里等了他十年。"
    },
    {
        "title": "高丽葬",
        "href": "video/movie-1426.html",
        "cover": "76.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 历史, 动作",
        "oneLine": "高丽末期，为了掩盖宫廷丑闻，一支隐秘部队被派去活埋一位怀孕的宫女。"
    },
    {
        "title": "食人少年帮",
        "href": "video/movie-1427.html",
        "cover": "77.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "恐怖 / 犯罪 / 剧情",
        "oneLine": "经济崩盘后的法国郊区，一群饥饿的少年开始猎杀外卖骑手，却盯上了退役特种兵父亲。"
    },
    {
        "title": "死亡医生玛丽",
        "href": "video/movie-1428.html",
        "cover": "78.jpg",
        "year": "2021",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚, 犯罪",
        "oneLine": "小镇最受爱戴的女法医，实际上亲手结束了其中十二名死者的生命。"
    },
    {
        "title": "状态更新",
        "href": "video/movie-1429.html",
        "cover": "79.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻/爱情",
        "oneLine": "一款能预测“好友状态”真心的App，让一个IT宅男看清了所有人的谎言。"
    },
    {
        "title": "年少有你",
        "href": "video/movie-1430.html",
        "cover": "80.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春 / 校园 / 成长",
        "oneLine": "高二分班后，一群“学渣”被塞进最差班级，却在“躺平”中找到了比分数更重要的东西。"
    },
    {
        "title": "玩转好莱坞",
        "href": "video/movie-1431.html",
        "cover": "81.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧, 剧情",
        "oneLine": "一个亚裔移民、一个过气童星、一个 gay 编剧、一个破产制片人，四个 loser 合伙拍电影，誓要“玩转”腐朽的好莱坞。"
    },
    {
        "title": "大帝机器人",
        "href": "video/movie-1432.html",
        "cover": "82.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻，剧情",
        "oneLine": "美国总统是个AI机器人，它治理国家完美无缺，直到某天它开始问自己“我是谁”。"
    },
    {
        "title": "古惑仔激情篇之洪兴大飞哥",
        "href": "video/movie-1433.html",
        "cover": "83.jpg",
        "year": "1999",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "洪兴大飞哥退隐多年，当儿子被卷入新一代的街头纷争时，他不得不重出江湖，捍卫最后的尊严。"
    },
    {
        "title": "鲲吞天下之掌门归来",
        "href": "video/movie-1434.html",
        "cover": "84.jpg",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "古装, 奇幻, 喜剧",
        "oneLine": "最强掌门渡劫失败变成五岁孩童，被自家弟子当成天才孤儿收养，天天被迫叫自己“爷爷”。"
    },
    {
        "title": "拯救铁达尼号",
        "href": "video/movie-1435.html",
        "cover": "85.jpg",
        "year": "1999",
        "region": "美国",
        "type": "电影",
        "genre": "科幻，灾难",
        "oneLine": "未来科学家穿越回1912年，试图在泰坦尼克号撞冰山前拯救它，却引发更大的灾难。"
    },
    {
        "title": "加菲猫国语",
        "href": "video/movie-1436.html",
        "cover": "86.jpg",
        "year": "2025",
        "region": "美国 / 中国大陆（配音）",
        "type": "电影",
        "genre": "动画，喜剧，家庭",
        "oneLine": "国语配音版加菲猫被主人遗弃在乡下，却发现自己是继承了一座猫粮工厂的唯一继承人。"
    },
    {
        "title": "调包富少的逆袭",
        "href": "video/movie-1437.html",
        "cover": "87.jpg",
        "year": "2023",
        "region": "泰国",
        "type": "剧集",
        "genre": "剧情，复仇，爱情",
        "oneLine": "被调包流落贫民窟的真少爷，二十年后以冷酷财阀的身份归来，向占尽人生的假少爷发起全面战争。"
    },
    {
        "title": "偷渡金山",
        "href": "video/movie-1438.html",
        "cover": "88.jpg",
        "year": "2019",
        "region": "美国 / 墨西哥",
        "type": "电影",
        "genre": "惊悚 / 剧情",
        "oneLine": "一位中国父亲为给女儿换肾，伪装成尸体偷渡美国，却卷入了一场比死亡更可怕的器官交易。"
    },
    {
        "title": "好友好有爱第二季",
        "href": "video/movie-1439.html",
        "cover": "89.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "真人秀/情感",
        "oneLine": "六对已经绝交的昔日好友，被送到荒岛求生，只有和解才能拿到回家的船票。"
    },
    {
        "title": "百妖谱司府篇",
        "href": "video/movie-1440.html",
        "cover": "90.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "动画",
        "genre": "奇幻 / 古风 / 志怪",
        "oneLine": "大梁王朝设“百妖谱司”，专门处理妖异案件，而新来的画师发现自己的笔能让画中妖怪成真。"
    },
    {
        "title": "云南故事",
        "href": "video/movie-1441.html",
        "cover": "91.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "一名考上北大的云南佤族少女，在离家前夜无意中发现母亲藏了一辈子的秘密——她不是母亲亲生的。"
    },
    {
        "title": "圣修伯里",
        "href": "video/movie-1442.html",
        "cover": "92.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "传记, 剧情",
        "oneLine": "《小王子》作者圣修伯里的最后岁月：在爱情、战争与沙漠中寻找童真。"
    },
    {
        "title": "斑马人2：斑马城的逆袭",
        "href": "video/movie-1443.html",
        "cover": "93.jpg",
        "year": "2010",
        "region": "日本",
        "type": "电影",
        "genre": "科幻, 动作, 喜剧",
        "oneLine": "废柴教师变身的斑马人沉寂多年后，斑马城出现邪恶斑马女王的模仿犯罪，他被迫再次出山。"
    },
    {
        "title": "超级英雄联盟复仇者第一季",
        "href": "video/movie-1444.html",
        "cover": "94.jpg",
        "year": "2027",
        "region": "美国",
        "type": "电视剧",
        "genre": "动作，科幻，超级英雄",
        "oneLine": "当神盾局发现九头蛇渗透全球政府，一支前所未有的超能力小队被迫临时集结。"
    },
    {
        "title": "火山王",
        "href": "video/movie-1445.html",
        "cover": "95.jpg",
        "year": "1997",
        "region": "美国",
        "type": "电影",
        "genre": "动作, 冒险, 奇幻",
        "oneLine": "一个地质学家被岩浆辐射，获得控火能力，他必须阻止一个妄图引爆黄石火山的疯狂富豪。"
    },
    {
        "title": "仇云杀机",
        "href": "video/movie-1446.html",
        "cover": "96.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 犯罪",
        "oneLine": "一位急功近利的律师接手了一起“杀妻案”，却发现自己辩护的委托人，正是当年灭自己满门的仇人之子。"
    },
    {
        "title": "山丘之外",
        "href": "video/movie-1447.html",
        "cover": "97.jpg",
        "year": "2019",
        "region": "以色列",
        "type": "电影",
        "genre": "战争，剧情",
        "oneLine": "从戈兰高地退役的狙击手回到城市，发现自己无法融入生活，却又被过去的敌人找上门来。"
    },
    {
        "title": "治外法权",
        "href": "video/movie-1448.html",
        "cover": "98.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "犯罪、悬疑、律政",
        "oneLine": "首尔梨泰院使馆区发生连环杀人案，所有嫌疑人都是外交官，享有治外法权，韩国警察无权抓人。"
    },
    {
        "title": "贝城歹徒",
        "href": "video/movie-1449.html",
        "cover": "99.jpg",
        "year": "2012",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 惊悚",
        "oneLine": "在路易斯安那的沼泽深处，三个不成器的兄弟偷错了毒贩的钱，惹上了整个贝城最疯的杀人魔。"
    },
    {
        "title": "棕榈泉圣诞夜",
        "href": "video/movie-1450.html",
        "cover": "100.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "oneLine": "婚礼前夜被困在棕榈泉度假村的圣诞派对上，她和讨厌的伴郎必须反复经历同一晚。"
    },
    {
        "title": "东宫",
        "href": "video/movie-1451.html",
        "cover": "101.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装, 爱情, 权谋",
        "oneLine": "为报灭族之仇，她以舞姬身份潜入东宫，却在刀刃上爱上了那个最该杀的人。"
    },
    {
        "title": "暴走武林学园第二季",
        "href": "video/movie-1452.html",
        "cover": "102.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧 / 武侠",
        "oneLine": "武林学园升级为“国际修仙班”，一个连马步都扎不稳的学渣，被逼当上了班长。"
    },
    {
        "title": "艰难岁月",
        "href": "video/movie-1453.html",
        "cover": "103.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "一个偏僻山村在三年困难时期，全村人靠着悬崖上的一棵“神仙树”活了下来。"
    },
    {
        "title": "顿巴斯壕沟纪实",
        "href": "video/movie-1454.html",
        "cover": "104.jpg",
        "year": "2025",
        "region": "乌克兰 / 德国",
        "type": "电影",
        "genre": "战争、剧情、纪实",
        "oneLine": "一名战地记者用无人机记录了一条战壕里双方士兵7天6夜的拉锯战，没有英雄，只有想回家的年轻人。"
    },
    {
        "title": "人·鬼·情",
        "href": "video/movie-1455.html",
        "cover": "105.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "同性爱情",
        "oneLine": "男灵媒爱上了一个女鬼，为了能触摸她，他主动让另一个男人的鬼魂附身，三人一体的畸形爱情就此展开。"
    },
    {
        "title": "黑匣子",
        "href": "video/movie-1456.html",
        "cover": "106.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 科幻",
        "oneLine": "空难调查员读取黑匣子数据时，意外发现自己的记忆被篡改。"
    },
    {
        "title": "欲望过程",
        "href": "video/movie-1457.html",
        "cover": "107.jpg",
        "year": "2012",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 情色 / 心理",
        "oneLine": "一对开放式婚姻的夫妻，因邀请一位陌生画家进入生活，导致欲望天平彻底失衡。"
    },
    {
        "title": "钢胆七雄",
        "href": "video/movie-1458.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "战争， 动作， 剧情",
        "oneLine": "七个被开除军籍的散兵游勇，在日军敌后利用一辆废旧装甲车，打出了一条撤退的血路。"
    },
    {
        "title": "药控男神",
        "href": "video/movie-1459.html",
        "cover": "109.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情 / 悬疑",
        "oneLine": "冷酷总裁必须每天服药维持魅力，否则就会变回那个自卑口吃的穷小子。"
    },
    {
        "title": "伍六七之暗影宿命",
        "href": "video/movie-1460.html",
        "cover": "110.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "动画剧集",
        "genre": "热血, 战斗, 奇幻",
        "oneLine": "伍六七为了拯救小鸡岛，不得不重新拿起魔刀千刃，直闯暗影刺客联盟总部。"
    },
    {
        "title": "夏日狂欢夜",
        "href": "video/movie-1461.html",
        "cover": "111.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "毕业派对的第二天，七个朋友醒来发现少了一人，而所有人的手机里都有一段断片前的杀人视频。"
    },
    {
        "title": "毛茸茸的狗",
        "href": "video/movie-1462.html",
        "cover": "112.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "奇幻 / 家庭 / 喜剧",
        "oneLine": "一个势利傲慢的都市精英男突然中了诅咒：每晚12点后会变成一只毛茸茸的流浪狗，直到天亮。"
    },
    {
        "title": "南海十三郎",
        "href": "video/movie-1463.html",
        "cover": "113.jpg",
        "year": "1997",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情，传记",
        "oneLine": "一代粤剧编曲天才，从民国红极一时到街头疯癫冻死的传奇一生。"
    },
    {
        "title": "瑶人之旅",
        "href": "video/movie-1464.html",
        "cover": "114.jpg",
        "year": "2025",
        "region": "中国大陆 / 法国",
        "type": "电影",
        "genre": "纪录 / 文艺",
        "oneLine": "一位瑶族老妇人带着孙女，沿着祖先千年前的迁徙路线，从中国徒步走到东南亚。"
    },
    {
        "title": "教我春心动",
        "href": "video/movie-1465.html",
        "cover": "115.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情，校园，青春",
        "oneLine": "为了赢下化学竞赛保送名额，学霸女主被迫辅导倒数第一的校霸，却在他的作业本里发现了长达三年的暗恋手札。"
    },
    {
        "title": "像火花像蝴蝶",
        "href": "video/movie-1466.html",
        "cover": "116.jpg",
        "year": "2024",
        "region": "中国内地",
        "type": "电视剧",
        "genre": "剧情 / 爱情",
        "oneLine": "1930年代上海，一个被卖入舞厅的女孩，如何在黑帮与初恋之间活成最烈的火花？"
    },
    {
        "title": "玩家战争",
        "href": "video/movie-1467.html",
        "cover": "117.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作/科幻/冒险",
        "oneLine": "当游戏公司决定删除“平民服务器”，全球最后一批零充玩家决定炸掉那颗管理数据的卫星。"
    },
    {
        "title": "魔法公主",
        "href": "video/movie-1468.html",
        "cover": "118.jpg",
        "year": "2027",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻 / 冒险 / 动画",
        "oneLine": "被诅咒的公主踏入禁忌森林，发现让王国衰败的不是野兽，而是被人类遗忘的古老契约。"
    },
    {
        "title": "永远的朱迪·布鲁姆",
        "href": "video/movie-1469.html",
        "cover": "119.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情、青春",
        "oneLine": "五个不同年代的女孩，都写信给同一个作家朱迪·布鲁姆，她们的人生因此交织。"
    },
    {
        "title": "战地信差",
        "href": "video/movie-1470.html",
        "cover": "120.jpg",
        "year": "2023",
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情 / 战争 / 历史",
        "oneLine": "一战期间，一名被德军占领的法国小镇上，哑女裁缝通过训练信鸽传递情报，成为德军眼皮底下的关键信差。"
    },
    {
        "title": "乔省长和他的女儿们",
        "href": "video/movie-1471.html",
        "cover": "121.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情, 家庭, 官场",
        "oneLine": "一省之长突遭双规，他的三个女儿分别身处商界、学界和娱乐圈，父亲的倒台引爆了她们的生存危机。"
    },
    {
        "title": "饱餐秀色",
        "href": "video/movie-1472.html",
        "cover": "122.jpg",
        "year": "2011",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "oneLine": "一个米其林餐厅的傲慢主厨，因为一次食物过敏毁了容，只能去偏远乡村开小餐馆，却意外收获了爱情与初心。"
    },
    {
        "title": "好事行龙",
        "href": "video/movie-1473.html",
        "cover": "123.jpg",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "oneLine": "退休黑帮大佬“行龙”强迫手下做好事，结果把整条街的小混混都逼成了道德模范。"
    },
    {
        "title": "人狼游戏：疯狂大陆",
        "href": "video/movie-1474.html",
        "cover": "124.jpg",
        "year": "2017",
        "region": "日本",
        "type": "电影",
        "genre": "惊悚 / 悬疑 / 恐怖",
        "oneLine": "16名高中生被囚禁在废弃小学，强制进行真人版“人狼游戏”，每晚必须投票处决一人。"
    },
    {
        "title": "超时空武士",
        "href": "video/movie-1475.html",
        "cover": "125.jpg",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻古装",
        "oneLine": "来自22世纪的AI生化人，魂穿到战国时代，成为最强武士，却要阻止一场会毁灭未来的战争。"
    },
    {
        "title": "氰化欢乐秀第一季",
        "href": "video/movie-1476.html",
        "cover": "126.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动画，黑色幽默",
        "oneLine": "一个能让人笑到氰化物中毒的脱口秀，每期嘉宾都必须死一遍。"
    },
    {
        "title": "控制的极限",
        "href": "video/movie-1477.html",
        "cover": "127.jpg",
        "year": "2009",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑, 惊悚, 剧情",
        "oneLine": "一个受困于精神分裂症的天才数学家，必须利用“混沌理论”对抗试图控制他人生的神秘组织。"
    },
    {
        "title": "这群汉子",
        "href": "video/movie-1478.html",
        "cover": "128.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 年代 / 军旅",
        "oneLine": "八个被开除军籍的糙老爷们，在冰天雪地里打响了抗日第一枪。"
    },
    {
        "title": "我的1919",
        "href": "video/movie-1479.html",
        "cover": "129.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "历史, 剧情, 战争",
        "oneLine": "1919年巴黎和会，中国外交官顾维钧用一支笔与列强周旋，却敌不过国内的一把火。"
    },
    {
        "title": "五星大饭店",
        "href": "video/movie-1480.html",
        "cover": "130.jpg",
        "year": "2007",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春 / 爱情 / 行业",
        "oneLine": "年轻的酒店服务生夹在金钱、理想与三位女性之间，挣扎求存。"
    },
    {
        "title": "同流合污",
        "href": "video/movie-1481.html",
        "cover": "131.jpg",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "犯罪 / 动作 / 黑帮",
        "oneLine": "一个卧底、一个黑警、一个毒枭，三个人发现他们效忠的其实是同一个神秘上线。"
    },
    {
        "title": "华山论剑之五绝争锋",
        "href": "video/movie-1482.html",
        "cover": "132.jpg",
        "year": "2026",
        "region": "中国",
        "type": "电影",
        "genre": "武侠、动作、古装",
        "oneLine": "《射雕》前传，年轻的东邪、西毒、南帝、北丐和中神通还未成名，为了争夺《九阴真经》首次齐聚华山之巅。"
    },
    {
        "title": "小小爱火花",
        "href": "video/movie-1483.html",
        "cover": "133.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情小品",
        "oneLine": "一对离婚十年的中年男女，在女儿婚礼上被迫重演他们当年相遇的每一个场景。"
    },
    {
        "title": "不法岳父母",
        "href": "video/movie-1484.html",
        "cover": "134.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧 / 动作 / 犯罪",
        "oneLine": "婚礼前夕，老实巴交的银行职员发现未婚妻的父母竟是臭名昭著的鸳鸯大盗。"
    },
    {
        "title": "谁是凶手",
        "href": "video/movie-1485.html",
        "cover": "135.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑犯罪",
        "oneLine": "十七年前，一位女中学生目睹母亲被杀；十七年后，重案组实习生翻出旧案，发现凶手可能就在身边。"
    },
    {
        "title": "节日的准备",
        "href": "video/movie-1486.html",
        "cover": "136.jpg",
        "year": "2016",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "母亲患上了阿尔茨海默病，她唯一记得的事，是每年中秋节为离家出走二十年的儿子准备他最爱吃的松饼。"
    },
    {
        "title": "赖布衣妙算玄机粤语",
        "href": "video/movie-1487.html",
        "cover": "137.jpg",
        "year": "1985",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情",
        "oneLine": "南宋风水宗师赖布衣遭奸臣陷害，被迫在逃亡途中用玄学破解一桩桩宫廷与民间的离奇命案。"
    },
    {
        "title": "舞动全城粤语",
        "href": "video/movie-1488.html",
        "cover": "138.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情、歌舞、励志",
        "oneLine": "观塘重建在即，最后一家老式茶餐厅的伙计们，决定用街舞对抗地产商的推土机。"
    },
    {
        "title": "高佬森娶老婆",
        "href": "video/movie-1489.html",
        "cover": "139.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 恐怖",
        "oneLine": "身材高大的道士高佬森为了冲喜，被迫迎娶一具千年女尸，没想到女尸竟然活了。"
    },
    {
        "title": "鹰眼2021",
        "href": "video/movie-1490.html",
        "cover": "140.jpg",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 军事, 谍战",
        "oneLine": "一个退役狙击手被军用AI“鹰眼”锁定为恐怖分子，他必须在卫星无死角追踪下证明清白。"
    },
    {
        "title": "困扰婚姻",
        "href": "video/movie-1491.html",
        "cover": "141.jpg",
        "year": "2023",
        "region": "法国/比利时",
        "type": "电影",
        "genre": "剧情， 悬疑， 心理",
        "oneLine": "一对准备离婚的夫妻遭遇车祸，妻子失忆后只记得丈夫的好，但丈夫发现车祸并非意外。"
    },
    {
        "title": "魔界城之王",
        "href": "video/movie-1492.html",
        "cover": "142.jpg",
        "year": "2018",
        "region": "日本",
        "type": "电影",
        "genre": "奇幻, 冒险, 动画",
        "oneLine": "少年捡到一本神秘的古书，他被吸入书中世界，成为一座活着的“魔界城”的唯一城主。"
    },
    {
        "title": "云的耳语",
        "href": "video/movie-1493.html",
        "cover": "143.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻",
        "oneLine": "一个能听见云朵讲述已故之人秘密的年轻女孩，帮助一个个困在哀悼中的陌生人完成最后告别。"
    },
    {
        "title": "铁面战警",
        "href": "video/movie-1494.html",
        "cover": "144.jpg",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "动作、科幻、犯罪",
        "oneLine": "他因公毁容，换上防弹铁面后，却发现当年的匪徒正是如今要保护的长官。"
    },
    {
        "title": "日本沉没2020",
        "href": "video/movie-1495.html",
        "cover": "145.jpg",
        "year": "2020",
        "region": "日本",
        "type": "动画, 剧集",
        "genre": "灾难, 科幻, 剧情",
        "oneLine": "关东大地震后，一家人穿越崩坏的日本列岛，寻找最后的生路。"
    },
    {
        "title": "宠儿",
        "href": "video/movie-1496.html",
        "cover": "146.jpg",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧",
        "oneLine": "18世纪英国，体弱多病的安妮女王与两位表姐妹上演了一场荒诞至极、你死我活的宫廷三角恋。"
    },
    {
        "title": "圣诞多美好",
        "href": "video/movie-1497.html",
        "cover": "147.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧、家庭、奇幻",
        "oneLine": "一个不相信圣诞的小女孩许愿希望父亲消失，结果一觉醒来全家真的没了爸爸。"
    },
    {
        "title": "电光石火",
        "href": "video/movie-1498.html",
        "cover": "148.jpg",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "警匪动作",
        "oneLine": "一位瘫痪的前车神通过脑机接口操控赛车，与杀害妻子的凶手在午夜城市展开生死追逐。"
    },
    {
        "title": "以爱为契",
        "href": "video/movie-1499.html",
        "cover": "149.jpg",
        "year": "2021",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "爱情 / 都市",
        "oneLine": "为了继承产业，女总裁与负债厨师签订假结婚协议，却意外动了真心。"
    },
    {
        "title": "春蕾赋",
        "href": "video/movie-1500.html",
        "cover": "150.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "年代, 剧情",
        "oneLine": "上世纪八十年代，一个上海女知青扎根云南山区三十八年，用半生点亮了山寨三代人的未来。"
    },
    {
        "title": "风流寡妇",
        "href": "video/movie-1501.html",
        "cover": "1.jpg",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情，爱情",
        "oneLine": "年轻寡妇继承巨额遗产后，四个男人各怀鬼胎接近她，却接连死于非命。"
    },
    {
        "title": "金臂童",
        "href": "video/movie-1502.html",
        "cover": "2.jpg",
        "year": "1979",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 武侠",
        "oneLine": "炼就金刚不坏金臂的镖师，遭遇断了右臂的神秘刀客上门讨债。"
    },
    {
        "title": "河谷镇第四季",
        "href": "video/movie-1503.html",
        "cover": "3.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电视剧",
        "genre": "悬疑 / 惊悚",
        "oneLine": "河谷镇迎来新的连环杀手，目标竟是镇上的“守护者”——那些曾阻止过前几季惨案的学生们。"
    },
    {
        "title": "天使的眼睛第2季",
        "href": "video/movie-1504.html",
        "cover": "4.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻/悬疑/犯罪",
        "oneLine": "拥有透视异能的女警安琪，在追踪高科技犯罪集团时，发现自己正被另一个拥有“鬼眼”的宿敌监控。"
    },
    {
        "title": "破茧天魔",
        "href": "video/movie-1505.html",
        "cover": "5.jpg",
        "year": "1994",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 奇幻",
        "oneLine": "四个高中生从古书店买到一本怪书，书中恶魔开始逐一附身同学。"
    },
    {
        "title": "地球毁灭之后",
        "href": "video/movie-1506.html",
        "cover": "6.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 灾难, 冒险",
        "oneLine": "地球被小行星撞击三百年后，最后一座地底城市的人造太阳即将熄灭，一名修理工被选为“灯童”，踏上重回地表的自杀式任务。"
    },
    {
        "title": "自由如夜",
        "href": "video/movie-1507.html",
        "cover": "7.jpg",
        "year": "2024",
        "region": "德国",
        "type": "电影",
        "genre": "剧情，文艺",
        "oneLine": "一位失去光明的调香师只有在夜晚才敢摘下墨镜，在黑暗中他找到了比光明更真实的自由。"
    },
    {
        "title": "小逗的日子第一季",
        "href": "video/movie-1508.html",
        "cover": "8.jpg",
        "year": "2021",
        "region": "美国",
        "type": "剧集",
        "genre": "动画 / 喜剧 / 家庭",
        "oneLine": "在《汪汪队立大功》事件之外，小逗一个人（狗）都在干啥？"
    },
    {
        "title": "极乐院女子高寮物语",
        "href": "video/movie-1509.html",
        "cover": "9.jpg",
        "year": "2012",
        "region": "日本",
        "type": "动画",
        "genre": "校园，喜剧，百合",
        "oneLine": "在奇葩云集的女子宿舍里，只有正常人的主角每天都想退宿。"
    },
    {
        "title": "莫罗博士的岛",
        "href": "video/movie-1510.html",
        "cover": "10.jpg",
        "year": "2027",
        "region": "英国",
        "type": "电影",
        "genre": "科幻 / 惊悚 / 恐怖",
        "oneLine": "一个落魄记者流落到孤岛，发现岛上的居民全是半人半兽的“改造体”，而神父般的莫罗博士，正享受着当“上帝”的快感。"
    },
    {
        "title": "上天入海擒金匪",
        "href": "video/movie-1511.html",
        "cover": "11.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 冒险 / 犯罪",
        "oneLine": "一个空军退役跳伞高手和一个海军退役潜水员联手，跨越天空与海洋，追捕一名能用声呐干扰仪遁形的天才金匪。"
    },
    {
        "title": "无障碍杀手",
        "href": "video/movie-1512.html",
        "cover": "12.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪",
        "oneLine": "坐在轮椅上的残疾杀手，利用城市“无障碍设施”的反向设计，完成不可能的任务。"
    },
    {
        "title": "永恒的心",
        "href": "video/movie-1513.html",
        "cover": "13.jpg",
        "year": "1993",
        "region": "美国",
        "type": "电影",
        "genre": "爱情，剧情，战争",
        "oneLine": "两名战地记者在越南爱上了同一个越南女子，而战争让他们的“永恒”变成了三天。"
    },
    {
        "title": "石磨的婚事",
        "href": "video/movie-1514.html",
        "cover": "14.jpg",
        "year": "2017",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 乡村",
        "oneLine": "农村老汉石磨为了给儿子娶媳妇攒彩礼，变卖了祖传的石磨，却发现买家正是亲家，而石磨里藏着一张百万存折。"
    },
    {
        "title": "管乐队",
        "href": "video/movie-1515.html",
        "cover": "15.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "音乐/剧情",
        "oneLine": "一所即将被废校的乡村中学，七个毫无音乐基础的学生被强迫组建了一支管乐队，而他们的指导老师是根本不识谱的体育老师。"
    },
    {
        "title": "爱的季风掠过",
        "href": "video/movie-1516.html",
        "cover": "16.jpg",
        "year": "2022",
        "region": "泰国",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "一段发生在普吉岛雨季的跨国露水情缘，二十年后因一场葬礼再次交汇。"
    },
    {
        "title": "深海谜情",
        "href": "video/movie-1517.html",
        "cover": "17.jpg",
        "year": "2026",
        "region": "中国大陆 / 中国香港",
        "type": "电影",
        "genre": "爱情 / 悬疑 / 冒险",
        "oneLine": "海洋生物学家在万米深渊发现一艘失踪三十年的客轮，船舱里竟坐着她的“已故”未婚夫。"
    },
    {
        "title": "火鸡碗",
        "href": "video/movie-1518.html",
        "cover": "18.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 运动, 家庭",
        "oneLine": "每年感恩节，一个没落小镇都要举行一场业余橄榄球赛“火鸡碗”，今年若再输，镇上的最后一家餐厅也将关门。"
    },
    {
        "title": "向着胜利前进",
        "href": "video/movie-1519.html",
        "cover": "19.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "战争 / 动作",
        "oneLine": "一个陕北猎户的儿子，拿着一杆祖传老猎枪，在日军狙击手的枪林弹雨中，打出了百发百中的中国神话。"
    },
    {
        "title": "分秒币争",
        "href": "video/movie-1520.html",
        "cover": "20.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 犯罪 / 动作",
        "oneLine": "国际黑客组织黑入了韩国股市，普通人只有3600秒时间，用一万块本金赚到一百亿。"
    },
    {
        "title": "非常四侠之天罗地网",
        "href": "video/movie-1521.html",
        "cover": "21.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作，武侠，喜剧",
        "oneLine": "四个不入流的山寨侠客为夺回武林至宝，不慎卷入一场由神秘机关术设计的“天罗地网”迷局。"
    },
    {
        "title": "台北过手无暝无日",
        "href": "video/movie-1522.html",
        "cover": "22.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "oneLine": "台北一夜，两个黑道小弟奉命运送一具尸体，却在这晚爱上了同一个人。"
    },
    {
        "title": "大雄与绿之巨人传",
        "href": "video/movie-1523.html",
        "cover": "23.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动画，科幻",
        "oneLine": "大雄在后山捡到一个神秘的树苗，一夜之间，整座城市被疯狂生长的植物吞没。"
    },
    {
        "title": "大摩天岭",
        "href": "video/movie-1524.html",
        "cover": "24.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "冒险, 历史, 悬疑",
        "oneLine": "1944年，一架满载国宝的日军运输机坠毁在滇西的摩天岭，各方势力汇聚深山，展开了一场惊心动魄的夺宝大战。"
    },
    {
        "title": "八彩林亚珍国语",
        "href": "video/movie-1525.html",
        "cover": "25.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "oneLine": "现代版的“傻大姐”林亚珍误打误撞进入了一家黑心公关公司，她用最蠢的办法，揭穿了老板污染海滩的惊天阴谋。"
    },
    {
        "title": "2022湖南卫视中秋之夜",
        "href": "video/movie-1526.html",
        "cover": "26.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "综艺 / 晚会",
        "genre": "晚会 / 歌舞 / 文化",
        "oneLine": "2022年湖南卫视中秋之夜，以“月光下的中国”为主题，用一场跨越时空的视听盛宴致敬中华传统文化。"
    },
    {
        "title": "深海猎奇",
        "href": "video/movie-1527.html",
        "cover": "27.jpg",
        "year": "2023",
        "region": "英国",
        "type": "剧集",
        "genre": "科幻、冒险、悬疑",
        "oneLine": "深海科考艇“猎奇号”在8000米海沟收到一段求救信号，发出者竟是五年前失踪的前任船组。"
    },
    {
        "title": "三不管地带",
        "href": "video/movie-1528.html",
        "cover": "28.jpg",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "犯罪 / 动作",
        "oneLine": "一个警察、一个黑帮和一个记者被困在即将拆迁的九龙城寨最后一夜，三方势力互相猎杀。"
    },
    {
        "title": "泰瑞·福克斯故事",
        "href": "video/movie-1529.html",
        "cover": "29.jpg",
        "year": "2014",
        "region": "加拿大",
        "type": "纪录片 / 传记片",
        "genre": "纪录片 / 体育 / 励志",
        "oneLine": "18岁截肢少年泰瑞·福克斯，拖着一条假腿，143天跑完5373公里，直到癌症复发。"
    },
    {
        "title": "幽冥巴士",
        "href": "video/movie-1530.html",
        "cover": "30.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "恐怖 / 奇幻",
        "oneLine": "每个深夜，一辆神秘的末班车会在台北街头出现，坐上去的人将进入死者的记忆轮回。"
    },
    {
        "title": "足球教练第二季",
        "href": "video/movie-1531.html",
        "cover": "31.jpg",
        "year": "2023",
        "region": "美国 / 英国",
        "type": "剧集",
        "genre": "喜剧 / 剧情 / 运动",
        "oneLine": "AFC里士满升入英超后，内讧、降级危机和老板撤资接踵而至，只有那个不懂球的美国教练还在喊相信。"
    },
    {
        "title": "医圣",
        "href": "video/movie-1532.html",
        "cover": "32.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧 / 古装",
        "genre": "古装 / 医疗 / 励志",
        "oneLine": "东晋乱世，一位药童凭借一根银针逆袭成一代医圣，却陷入皇室阴谋。"
    },
    {
        "title": "我的朋友们",
        "href": "video/movie-1533.html",
        "cover": "33.jpg",
        "year": "1975",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "四个中年老男人为了对抗无聊的生活，在托斯卡纳的艳阳下，策划了一系列荒诞又幼稚的恶作剧。"
    },
    {
        "title": "吸血鬼日记第一季",
        "href": "video/movie-1534.html",
        "cover": "34.jpg",
        "year": "2020",
        "region": "美国",
        "type": "TV 剧集",
        "genre": "奇幻, 恐怖, 爱情",
        "oneLine": "新奥尔良女大学生意外继承了一座古宅，发现地窖里囚禁着三个帅气的吸血鬼，他们称她为“女主人”。"
    },
    {
        "title": "美国海军大闹日本",
        "href": "video/movie-1535.html",
        "cover": "35.jpg",
        "year": "2016",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，动作，战争",
        "oneLine": "为了一碗失传的拉面，一支美国海军精英小队决定在东京闹个天翻地覆。"
    },
    {
        "title": "托里和洛奇塔",
        "href": "video/movie-1536.html",
        "cover": "36.jpg",
        "year": "2022",
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情 / 社会",
        "oneLine": "两个没有血缘关系的非洲少年，为了能在欧洲活下去，必须上演一场置对方于死地的骗局。"
    },
    {
        "title": "史明·革命进行式",
        "href": "video/movie-1537.html",
        "cover": "37.jpg",
        "year": "2019",
        "region": "中国台湾",
        "type": "纪录片",
        "genre": "纪录片 / 传记",
        "oneLine": "镜头跟随革命者史明一年，记录他在百岁之际，最后一次走上街头。"
    },
    {
        "title": "酒佬巨声",
        "href": "video/movie-1538.html",
        "cover": "38.jpg",
        "year": "2019",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情，音乐，励志",
        "oneLine": "落魄酗酒的前知名音乐制作人，在街头偶遇一个卖唱女孩，发现她是自己失散多年的女儿。"
    },
    {
        "title": "公私恋事多粤语",
        "href": "video/movie-1539.html",
        "cover": "39.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "剧集",
        "genre": "爱情 / 职场 / 喜剧",
        "oneLine": "她是铁面无私的合规总监，他是吊儿郎当的业务天才，公司严禁办公室恋情，偏偏他们要联手造假扮情侣。"
    },
    {
        "title": "再见，绝望先生",
        "href": "video/movie-1540.html",
        "cover": "40.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧, 校园, 剧情",
        "oneLine": "一个极度消极、动不动就上吊的班主任，却接手了一个满是心理创伤的问题班级。"
    },
    {
        "title": "银幕大角头",
        "href": "video/movie-1541.html",
        "cover": "41.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，剧情",
        "oneLine": "一个过气的90年代动作片巨星，为了重回聚光灯下，决定去应聘一个严肃的百老汇戏剧角色，引发了一场好莱坞大混战。"
    },
    {
        "title": "魔法教母",
        "href": "video/movie-1542.html",
        "cover": "42.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧，奇幻，家庭",
        "oneLine": "一个被裁员的中年魔法教母来到人间再就业，却发现现代小孩的愿望不再是城堡和王子，而是Wi-Fi和父母不吵架。"
    },
    {
        "title": "大盛魁",
        "href": "video/movie-1543.html",
        "cover": "43.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史、商战、传记",
        "oneLine": "三个穷小子在草原上创立商业帝国，却因一个女人分崩离析。"
    },
    {
        "title": "安乐传",
        "href": "video/movie-1544.html",
        "cover": "44.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装, 爱情, 权谋",
        "oneLine": "孤女为灭门惨案潜入东宫，却发现自己要刺杀的对象，正是当年的救命恩人。"
    },
    {
        "title": "回忆中的玛妮",
        "href": "video/movie-1545.html",
        "cover": "45.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "动画 / 奇幻 / 家庭",
        "oneLine": "孤僻少女每年夏天都会被送到乡下，她唯一的朋友是一本旧日记里写的女孩，而日记本比她大五十岁。"
    },
    {
        "title": "速度与激情6",
        "href": "video/movie-1546.html",
        "cover": "46.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 赛车",
        "oneLine": "唐老大不得不与死对头组队，去抢一辆可以从迪拜塔顶层直接飞出去的磁悬浮超跑。"
    },
    {
        "title": "地球百子 第二季",
        "href": "video/movie-1547.html",
        "cover": "47.jpg",
        "year": "2014",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻, 悬疑, 冒险",
        "oneLine": "从太空返回地球的百名少年少女，不仅要面对恶劣环境，还发现地下潜伏着掌握高科技的神秘山地人。"
    },
    {
        "title": "男人四十只春一张嘴",
        "href": "video/movie-1548.html",
        "cover": "48.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "喜剧，家庭，剧情",
        "oneLine": "四十岁失业男靠一张“嘴炮”技能，在家族纷争和创业路上杀出一条血路。"
    },
    {
        "title": "极速江湖",
        "href": "video/movie-1549.html",
        "cover": "49.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作、赛车、犯罪",
        "oneLine": "曾是亚洲车王的男人出狱后，发现徒弟霸占了他的车队，他必须驾驶一辆废铁赢回尊严。"
    },
    {
        "title": "噪音",
        "href": "video/movie-1550.html",
        "cover": "50.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "悬疑 / 社会",
        "oneLine": "一栋居民楼所有住户都听到凌晨的枪声，但没人报警，因为每个人都藏有秘密。"
    },
    {
        "title": "亚当变奏曲",
        "href": "video/movie-1551.html",
        "cover": "51.jpg",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "剧情， 音乐， 同性",
        "oneLine": "天才钢琴家因精神分裂入院，他分裂出的第二人格竟是他此生最爱的男人，而这个人，根本不存在。"
    },
    {
        "title": "幻影拳击手",
        "href": "video/movie-1552.html",
        "cover": "52.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "动画，体育，奇幻",
        "oneLine": "一个落魄拳手意外获得了已故传奇拳王的幽灵指导，向冠军发起最后冲击。"
    },
    {
        "title": "身在高地",
        "href": "video/movie-1553.html",
        "cover": "53.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "歌舞，剧情",
        "oneLine": "华盛顿高地停电那一夜，小超市老板乌斯纳维中了一张彩票，却发现自己最想离开的地方才是真正的财富。"
    },
    {
        "title": "蓝盔特战队",
        "href": "video/movie-1554.html",
        "cover": "54.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "动作， 战争， 剧情",
        "oneLine": "中国维和部队在非洲被军阀包围，72小时内没有任何增援。"
    },
    {
        "title": "布朗牧师",
        "href": "video/movie-1555.html",
        "cover": "55.jpg",
        "year": "2015",
        "region": "英国",
        "type": "剧集",
        "genre": "剧情 / 悬疑 / 犯罪",
        "oneLine": "一个热爱摇滚乐、喜欢喝威士忌的牧师，在宁静的英国小镇上靠着对人性的洞察，屡破奇案。"
    },
    {
        "title": "逃亡者",
        "href": "video/movie-1556.html",
        "cover": "56.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 战争",
        "oneLine": "一名被俘的盟军飞行员带着一只从马戏团逃出的猩猩，横跨德占法国逃亡。"
    },
    {
        "title": "福禄双霸天2000",
        "href": "video/movie-1557.html",
        "cover": "57.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧/音乐/动作",
        "oneLine": "为了拯救孤儿院，两个穿着黑西装戴着礼帽的怪人决定重组乐队，开启一场横跨美国的疯狂巡演。"
    },
    {
        "title": "鬼挡路5",
        "href": "video/movie-1558.html",
        "cover": "58.jpg",
        "year": "2012",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 冒险",
        "oneLine": "五名大学生进入西弗吉尼亚州禁入的“鬼山”野营，遭遇一种会模仿人类声音的洞穴食人怪。"
    },
    {
        "title": "在越南最后的日子",
        "href": "video/movie-1559.html",
        "cover": "59.jpg",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "历史 / 战争 / 剧情",
        "oneLine": "越战尾声，北越炮火逼近西贡，美国外交官和 CIA 特工为了抢救最后一批难民，不得不在规则与人命之间做选择。"
    },
    {
        "title": "这个大叔太冷傲第二季",
        "href": "video/movie-1560.html",
        "cover": "60.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "爱情, 喜剧",
        "oneLine": "冷傲大叔在第一季末终于笑了，第二季他却面临失忆，忘了那个让他笑的人。"
    },
    {
        "title": "安息2",
        "href": "video/movie-1561.html",
        "cover": "61.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖, 灵异, 惊悚",
        "oneLine": "上一部里她们逃出了殡仪馆，但这一次，亡者们追到了活人的梦境里索要“未完成的告别”。"
    },
    {
        "title": "梅西",
        "href": "video/movie-1562.html",
        "cover": "62.jpg",
        "year": "2025",
        "region": "阿根廷/西班牙",
        "type": "电影",
        "genre": "剧情、传记、运动",
        "oneLine": "聚焦梅西19岁那年，在世界杯替补席与回到罗萨里奥老家之间的平行叙事，揭示天才背后的恐惧。"
    },
    {
        "title": "炼狱熔炉",
        "href": "video/movie-1563.html",
        "cover": "63.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "惊悚、悬疑、社会",
        "oneLine": "一座地下私人监狱关押着八名社会最底层的罪犯，而狱卒是八名被害者家属，当第一周过去，所有人都分不清谁是狱卒、谁是囚犯了。"
    },
    {
        "title": "战舰吕字号",
        "href": "video/movie-1564.html",
        "cover": "64.jpg",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "战争, 科幻",
        "oneLine": "一艘二战日本驱逐舰意外穿越到现代，舰上水兵必须阻止历史悲剧重演。"
    },
    {
        "title": "挛情告急",
        "href": "video/movie-1565.html",
        "cover": "65.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 同性",
        "oneLine": "一场婚礼前夕，同性恋新郎、他的男友和未婚妻三人被迫结成统一战线。"
    },
    {
        "title": "铁证悬案第三季",
        "href": "video/movie-1566.html",
        "cover": "66.jpg",
        "year": "2005",
        "region": "美国",
        "type": "电视剧",
        "genre": "犯罪，悬疑，剧情",
        "oneLine": "费城警探莉莉·拉什带领团队通过现代刑侦技术，揭开被封尘了数十年的冷案真相，为逝者昭雪。"
    },
    {
        "title": "小美人鱼2：重返大海",
        "href": "video/movie-1567.html",
        "cover": "67.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动画, 奇幻, 冒险, 家庭",
        "oneLine": "爱丽儿当了 10 年王妃，发现自己患上了一种“变回人鱼就会死”的怪病，她必须在婚姻与大海间抉择。"
    },
    {
        "title": "人吓人2023",
        "href": "video/movie-1568.html",
        "cover": "68.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 恐怖",
        "oneLine": "社恐道士误打误撞放出千年丧尸，却发现丧尸最怕的不是符咒，而是……尴尬的冷笑话。"
    },
    {
        "title": "不同星球的奇怪恋人",
        "href": "video/movie-1569.html",
        "cover": "69.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "科幻、爱情、喜剧",
        "oneLine": "外星人占领地球后，要求人类必须和外星人配对才能生存，而配给你的那个外星人，奇丑无比。"
    },
    {
        "title": "没有留下地址就离开了",
        "href": "video/movie-1570.html",
        "cover": "70.jpg",
        "year": "2020",
        "region": "法国",
        "type": "电影",
        "genre": "剧情，爱情，公路",
        "oneLine": "她在出租车上捡到一本护照，按着地址找过去，开门的人说：这个人三年前就死了。"
    },
    {
        "title": "哥谭第二季",
        "href": "video/movie-1571.html",
        "cover": "71.jpg",
        "year": "2016",
        "region": "美国",
        "type": "剧集",
        "genre": "犯罪/动作/剧情",
        "oneLine": "韦恩谋杀案余波未平，新反派“噬愚者”开始猎杀哥谭所有高智商罪犯。"
    },
    {
        "title": "乱世英豪",
        "href": "video/movie-1572.html",
        "cover": "72.jpg",
        "year": "1967",
        "region": "捷克斯洛伐克",
        "type": "电影",
        "genre": "剧情 / 历史 / 战争",
        "oneLine": "中世纪两个部落的世仇厮杀，在两个年轻人相爱后，演变成了一场颠覆信仰的荒诞审判。"
    },
    {
        "title": "新铁金刚之金眼睛",
        "href": "video/movie-1573.html",
        "cover": "73.jpg",
        "year": "2004",
        "region": "香港",
        "type": "电影",
        "genre": "动作 / 科幻 / 犯罪",
        "oneLine": "香港警方利用“金眼睛”系统预测犯罪，却意外激活了病毒，让虚拟罪犯拥有了实体。"
    },
    {
        "title": "快乐的忧郁",
        "href": "video/movie-1574.html",
        "cover": "74.jpg",
        "year": "2012",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧",
        "oneLine": "一个身体里住着“快乐”与“忧郁”两个小人，它们开始争夺人生遥控器。"
    },
    {
        "title": "丑人儿",
        "href": "video/movie-1575.html",
        "cover": "75.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻，青春，冒险",
        "oneLine": "在这个世界，16岁必须接受整容手术变成“美人”，但主角却发现美貌背后是脑控阴谋。"
    },
    {
        "title": "公平交易",
        "href": "video/movie-1576.html",
        "cover": "76.jpg",
        "year": "2024",
        "region": "美国",
        "type": "剧集",
        "genre": "惊悚 / 律政",
        "oneLine": "一名败诉律师被困在神秘房间，必须与受害者家属玩“公平交易”游戏，每赢一局才能活命。"
    },
    {
        "title": "黑蟹行动：无尽寒冬",
        "href": "video/movie-1577.html",
        "cover": "77.jpg",
        "year": "2024",
        "region": "瑞典",
        "type": "剧集",
        "genre": "动作 / 战争 / 科幻",
        "oneLine": "在冰封末世的北欧大陆，六名女兵奉命穿越冰层运送神秘“黑蟹”货物，但她们很快发现，真正可怕的不是敌人，而是货物本身。"
    },
    {
        "title": "势不两立粤语",
        "href": "video/movie-1578.html",
        "cover": "78.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 动作",
        "oneLine": "潜伏黑帮十年的卧底警察，在即将收网时发现黑帮老大也是警方卧底——但两人彼此不知情。"
    },
    {
        "title": "看到他们就会明白",
        "href": "video/movie-1579.html",
        "cover": "79.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "悬疑，家庭",
        "oneLine": "家族中每代都有一个孩子拥有“触物通感”能力——触摸别人的物品就能看到对方最痛苦的记忆。"
    },
    {
        "title": "超级飞侠第十四季",
        "href": "video/movie-1580.html",
        "cover": "80.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "动画",
        "genre": "儿童， 教育",
        "oneLine": "超级飞侠总部收到来自月球基地的求助信号，乐迪首次冲出地球，开启太空救援。"
    },
    {
        "title": "风流大师",
        "href": "video/movie-1581.html",
        "cover": "81.jpg",
        "year": "1991",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧 / 情色",
        "oneLine": "假道士“风流大师”以房中术行骗，却引来真女鬼上门求双修，从此人生崩塌。"
    },
    {
        "title": "基场恋事多",
        "href": "video/movie-1582.html",
        "cover": "82.jpg",
        "year": "2024",
        "region": "泰国",
        "type": "电视剧",
        "genre": "喜剧, 爱情, 同性",
        "oneLine": "讲述一家同性恋专属健身房里，教练、会员、前台和老板之间各种啼笑皆非的多角恋爱故事。"
    },
    {
        "title": "邻家少年杀人事件",
        "href": "video/movie-1583.html",
        "cover": "83.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 悬疑, 犯罪",
        "oneLine": "一个白人聚集的宁静小镇，一名成绩优异的亚裔少年被判杀害了邻居，全镇都指证他，只有他的黑人英语老师坚信他是无辜的。"
    },
    {
        "title": "吾之欲",
        "href": "video/movie-1584.html",
        "cover": "84.jpg",
        "year": "2023",
        "region": "韩国",
        "type": "电影",
        "genre": "情色 / 惊悚",
        "oneLine": "一名因整容失败而毁容的女人，绑架了那位推崇“极致美貌”的整形医生，并逼迫他把自己整成医生妻子的样子。"
    },
    {
        "title": "踏舞高蹈",
        "href": "video/movie-1585.html",
        "cover": "85.jpg",
        "year": "2024",
        "region": "印度",
        "type": "电影",
        "genre": "歌舞、剧情、励志",
        "oneLine": "垃圾场拾荒的少年捡到一个废弃舞鞋，穿上后竟能跳出惊艳的印度战舞。"
    },
    {
        "title": "妄人妄途",
        "href": "video/movie-1586.html",
        "cover": "86.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "犯罪 / 惊悚",
        "oneLine": "三个性格迥异的陌生人拼车走318国道，途中他们渐渐发现，车上除了自己，另外两个人都是伪装成正常人的疯子或杀人犯。"
    },
    {
        "title": "间宫兄弟",
        "href": "video/movie-1587.html",
        "cover": "87.jpg",
        "year": "2006",
        "region": "日本",
        "type": "电影",
        "genre": "剧情/家庭/生活流",
        "oneLine": "居住在同一屋檐下却性格迥异的两兄弟，在各自失败的爱情和乏味的工作中，维系着一种微妙的亲情平衡。"
    },
    {
        "title": "季风季节",
        "href": "video/movie-1588.html",
        "cover": "88.jpg",
        "year": "2019",
        "region": "越南 / 法国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "流浪法国的越南钢琴家回到故乡寻找失踪的母亲，却在季风中爱上了一个盲人女调音师。"
    },
    {
        "title": "大桥梁",
        "href": "video/movie-1589.html",
        "cover": "89.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "年代史诗",
        "oneLine": "从1973年第一座长江大桥动工，到2023年大桥退役爆破，一个造桥家族三代人的命运与这座桥死死焊在了一起。"
    },
    {
        "title": "冼太郎降龙伏虎",
        "href": "video/movie-1590.html",
        "cover": "90.jpg",
        "year": "1975",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作，武侠",
        "oneLine": "晚清年间，民间高手冼太郎为救被恶霸欺压的村民，挺身而出，施展绝技降服恶龙与猛虎般的强敌。"
    },
    {
        "title": "极地寒流",
        "href": "video/movie-1591.html",
        "cover": "91.jpg",
        "year": "2024",
        "region": "加拿大",
        "type": "电影",
        "genre": "灾难、惊悚、科幻",
        "oneLine": "地球停转的第50天，一半陆地已冰封，科学家发现“寒流”不是天灾，而是地心发出的求救信号。"
    },
    {
        "title": "间谍亚契第十四季",
        "href": "video/movie-1592.html",
        "cover": "92.jpg",
        "year": "2027",
        "region": "美国",
        "type": "剧集",
        "genre": "动画 / 喜剧 / 动作",
        "oneLine": "世界上最自恋的特工亚契在昏迷十年后醒来，发现自己成了过气网红，而 ISIS 情报机构已变成一家直播带货公司。"
    },
    {
        "title": "七个世界，一个星球",
        "href": "video/movie-1593.html",
        "cover": "93.jpg",
        "year": "2019",
        "region": "英国",
        "type": "纪录片",
        "genre": "自然",
        "oneLine": "历时四年，踏遍七大洲，记录下濒临消失的野生动物最后生存瞬间。"
    },
    {
        "title": "负罪少女",
        "href": "video/movie-1594.html",
        "cover": "94.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 惊悚 / 悬疑",
        "oneLine": "学校里最受欢迎的女生死了，所有欺负过她的人都在做梦，梦里她是圣女，而我们是刽子手。"
    },
    {
        "title": "欲望和智慧",
        "href": "video/movie-1595.html",
        "cover": "95.jpg",
        "year": "2005",
        "region": "印度",
        "type": "电影",
        "genre": "剧情, 历史",
        "oneLine": "古印度宫廷中，一名精通64种性爱艺术的妓女，试图用身体操控国王，却最终被自己的徒弟反噬。"
    },
    {
        "title": "野武士的美食",
        "href": "video/movie-1596.html",
        "cover": "96.jpg",
        "year": "2023",
        "region": "日本",
        "type": "剧集",
        "genre": "美食/剧情",
        "oneLine": "一个被公司裁员的社畜继承了祖父的武士道精神，开始在深夜寻找“能让人重新站起来”的食物。"
    },
    {
        "title": "两小无猜1971",
        "href": "video/movie-1597.html",
        "cover": "97.jpg",
        "year": "1971",
        "region": "英国",
        "type": "电影",
        "genre": "爱情，剧情，经典",
        "oneLine": "1971年英国小镇，一对十岁的男孩女孩约定永远在一起，却因为一个搬家一个转学而失散半个世纪。"
    },
    {
        "title": "忍者神威",
        "href": "video/movie-1598.html",
        "cover": "98.jpg",
        "year": "2023",
        "region": "日本",
        "type": "动画",
        "genre": "动作 / 科幻 / 忍者 / 赛博朋克",
        "oneLine": "被灭门的忍者白井，装上智能义体成为都市暗影，以一敌百血洗地下忍者议会。"
    },
    {
        "title": "新村丧尸漫画",
        "href": "video/movie-1599.html",
        "cover": "99.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "恐怖 / 喜剧 / 悬疑",
        "oneLine": "韩国新村爆发丧尸病毒，而唯一的对抗方式是：必须按照一名失踪漫画家笔下的设定来行动。"
    },
    {
        "title": "我们的命运",
        "href": "video/movie-1600.html",
        "cover": "100.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 爱情",
        "oneLine": "二战前夕，一名犹太男孩与德国将军的女儿成为笔友，几十年后，他们的孙辈在耶路撒冷再次相遇。"
    },
    {
        "title": "逆岭",
        "href": "video/movie-1601.html",
        "cover": "101.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "动作, 军事",
        "oneLine": "阿富汗战场归来的前特种兵回到阿巴拉契亚山区老家，发现整座小镇被毒贩占领，而镇长正是他亲哥。"
    },
    {
        "title": "黑杀星",
        "href": "video/movie-1602.html",
        "cover": "102.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪, 警匪, 黑色电影",
        "oneLine": "顶尖杀手“黑杀星”在一次行动后被捕，但他坚称自己只是替身演员，真正的杀手是那个每天给他送叉烧饭的女警察。"
    },
    {
        "title": "恐怖人生",
        "href": "video/movie-1603.html",
        "cover": "103.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 剧情",
        "oneLine": "一个靠偷拍他人隐私为生的无良记者，发现自己正在逐步变成镜头里那些受害者的模样。"
    },
    {
        "title": "细骨小屋",
        "href": "video/movie-1604.html",
        "cover": "104.jpg",
        "year": "2024",
        "region": "加拿大 / 英国",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 恐怖",
        "oneLine": "一个患有厌食症的女孩被送到偏远疗养院，却在那里发现了关于“细骨”的恐怖家族传说。"
    },
    {
        "title": "湖边小屋",
        "href": "video/movie-1605.html",
        "cover": "105.jpg",
        "year": "2024",
        "region": "美国 / 加拿大",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "oneLine": "四个朋友周末去湖边小屋度假，第二天醒来发现小屋被密封，窗外的湖面一夜之间变成了无尽的荒漠。"
    },
    {
        "title": "动物管制官第三季",
        "href": "video/movie-1606.html",
        "cover": "106.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧 / 职场",
        "oneLine": "动物管制局的奇葩员工们这次要对付一只会开锁的浣熊、一只偷手机的鹦鹉，还有新来的AI局长。"
    },
    {
        "title": "死亡吞弑",
        "href": "video/movie-1607.html",
        "cover": "107.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 恐怖",
        "oneLine": "六名网红受邀参加“全球最恐怖密室逃脱”，发现每死一个人，奖金就翻倍。"
    },
    {
        "title": "暗金烂狗7",
        "href": "video/movie-1608.html",
        "cover": "108.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "犯罪 / 剧情",
        "oneLine": "高利贷业者安藤忠臣的最后一次讨债，对象竟是他失散二十年的亲生儿子。"
    },
    {
        "title": "兄弟没狗不应该",
        "href": "video/movie-1609.html",
        "cover": "109.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 动作",
        "oneLine": "为了争夺一条能“通灵”的流浪狗，东北小镇的三拨假兄弟撕破了伪装，引发了一场全员恶人的闹剧。"
    },
    {
        "title": "她痴迷于我的丈夫",
        "href": "video/movie-1610.html",
        "cover": "110.jpg",
        "year": "2021",
        "region": "韩国",
        "type": "电视剧",
        "genre": "悬疑 / 爱情 / 惊悚",
        "oneLine": "完美人妻发现，丈夫的秘密情人竟是她失散多年的亲妹妹，而这场邂逅是一场蓄谋二十年的报复。"
    },
    {
        "title": "公主为奴",
        "href": "video/movie-1611.html",
        "cover": "111.jpg",
        "year": "2018",
        "region": "日本 / 韩国",
        "type": "剧集",
        "genre": "古装 / 剧情 / 虐恋",
        "oneLine": "亡国公主被敌国将军买为奴隶，却在羞辱与挣扎中发现了惊天阴谋。"
    },
    {
        "title": "无耻之徒第五季",
        "href": "video/movie-1612.html",
        "cover": "112.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 喜剧",
        "oneLine": "加拉格一家刚以为日子有了起色，一场意外火灾和一笔天降债务，又把所有人拖回更加疯狂的泥潭。"
    },
    {
        "title": "恶犬之下",
        "href": "video/movie-1613.html",
        "cover": "113.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 复仇",
        "oneLine": "一个被黑帮当“恶犬”养大的少年，反咬了主人之后，决定把整条街的狗链都解开。"
    },
    {
        "title": "妻子的噩梦",
        "href": "video/movie-1614.html",
        "cover": "114.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "剧集",
        "genre": "惊悚 / 悬疑",
        "oneLine": "她每晚梦见自己杀死丈夫，醒来后发现丈夫身上真的出现了梦中伤痕。"
    },
    {
        "title": "九里香",
        "href": "video/movie-1615.html",
        "cover": "115.jpg",
        "year": "2011",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 战争",
        "oneLine": "1944年云南，中国军医与白族姑娘因九里香结缘，战火拆散后，等待跨越40年。"
    },
    {
        "title": "欢乐梅姑",
        "href": "video/movie-1616.html",
        "cover": "116.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 家庭",
        "oneLine": "一身嬉皮范儿的梅姑成为外甥的监护人后，用《道德经》和废旧公交改造的房车，帮全社区找到了快乐。"
    },
    {
        "title": "星尘芭蕾舞厅皇后",
        "href": "video/movie-1617.html",
        "cover": "117.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情, 歌舞, 科幻",
        "oneLine": "在废弃的太空站里，最后一个人类舞者与渴望理解美的AI上演了一场绝舞。"
    },
    {
        "title": "春风满古城",
        "href": "video/movie-1618.html",
        "cover": "118.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情、历史、战争",
        "oneLine": "1938年，战地记者与古城名伶在炮火中相爱，用一出戏唤醒了全城百姓的抗争之心。"
    },
    {
        "title": "徒手攀岩",
        "href": "video/movie-1619.html",
        "cover": "119.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 悬疑, 动作",
        "oneLine": "一名走投无路的攀岩教练，答应成为富豪的替身去徒手攀登摩天大楼，却发现自己只是一颗被抛出的烟雾弹。"
    },
    {
        "title": "幻爱钟情",
        "href": "video/movie-1620.html",
        "cover": "120.jpg",
        "year": "2024",
        "region": "中国内地",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "oneLine": "她爱上了一个完美男人，直到发现这个男人只有她自己能看见。"
    },
    {
        "title": "乐活家庭",
        "href": "video/movie-1621.html",
        "cover": "121.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "家庭情景喜剧",
        "oneLine": "为了拿到爷爷留下的巨额遗产，五个互不相识、性格迥异的同父异母兄弟姐妹被迫住进同一栋老洋房，开始啼笑皆非的“合租”生活。"
    },
    {
        "title": "红伶奇缘",
        "href": "video/movie-1622.html",
        "cover": "122.jpg",
        "year": "1994",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 戏曲",
        "oneLine": "现代戏曲研究生意外穿越回1930年代，成了当红粤剧花旦，却发现自己必须演完一场注定要出人命的《紫钗记》。"
    },
    {
        "title": "疯狂婚礼周",
        "href": "video/movie-1623.html",
        "cover": "123.jpg",
        "year": "2018",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧， 爱情",
        "oneLine": "准新郎在婚礼前一周必须搞定刁钻的岳父、疯狂的伴郎和突然出现的前女友，堪称地狱级婚前准备。"
    },
    {
        "title": "魔偶马戏团",
        "href": "video/movie-1624.html",
        "cover": "124.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集（动画）",
        "genre": "奇幻 / 悬疑 / 冒险",
        "oneLine": "在一个所有自动人偶突然暴走杀人的世界里，唯一能操控它们的是一位失忆的马戏团小丑。"
    },
    {
        "title": "少年泰坦出击第四季",
        "href": "video/movie-1625.html",
        "cover": "125.jpg",
        "year": "2019",
        "region": "美国",
        "type": "剧集",
        "genre": "动画, 喜剧, 动作",
        "oneLine": "史上最不正经的超级英雄小队，这次要把恶搞的触手伸向多元宇宙。"
    },
    {
        "title": "魔法奇缘2：解除魔法",
        "href": "video/movie-1626.html",
        "cover": "126.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 喜剧",
        "oneLine": "穿越到现实世界的公主变成了疲惫的程序员，她必须用代码解除吞噬童话世界的“理性病毒”。"
    },
    {
        "title": "迷案追凶",
        "href": "video/movie-1627.html",
        "cover": "127.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "悬疑 / 刑侦",
        "oneLine": "二十年前未破的连环杀人案重启调查，当年的办案刑警却发现，自己儿子是最大嫌疑人。"
    },
    {
        "title": "如此亲密的背叛者",
        "href": "video/movie-1628.html",
        "cover": "128.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "剧集",
        "genre": "悬疑 / 家庭 / 犯罪",
        "oneLine": "完美丈夫连续杀害三名女性，与他结婚十年的妻子在整理遗物时发现了第一枚耳环。"
    },
    {
        "title": "大唐女法医",
        "href": "video/movie-1629.html",
        "cover": "129.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装 / 悬疑 / 探案",
        "oneLine": "她是大唐第一位女仵作，验尸从不靠鬼神，只靠一把手术刀和一颗比尸体还冷的心。"
    },
    {
        "title": "致命密室2018",
        "href": "video/movie-1630.html",
        "cover": "130.jpg",
        "year": "2018",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑 / 恐怖",
        "oneLine": "六名收到神秘邀请的网红被困智能豪宅，每解开一道谜题就有一人死得更快。"
    },
    {
        "title": "摇滚都市",
        "href": "video/movie-1631.html",
        "cover": "131.jpg",
        "year": "2021",
        "region": "中国",
        "type": "电影",
        "genre": "音乐, 剧情, 青春",
        "oneLine": "五金店老板重组中年废柴乐队，却意外发现对手是抛弃自己的摇滚明星前妻。"
    },
    {
        "title": "钱1983",
        "href": "video/movie-1632.html",
        "cover": "132.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 犯罪",
        "oneLine": "一批1983年印刷、从未流通过的旧钞突然在贫民窟出现，每一张都可能是拆解银行霸权的地图。"
    },
    {
        "title": "最好的女友",
        "href": "video/movie-1633.html",
        "cover": "133.jpg",
        "year": "2013",
        "region": "日本",
        "type": "电影",
        "genre": "剧情，爱情",
        "oneLine": "他一生谈了三次恋爱，每一次的女主角都是同一个人，只不过每一次她都不记得他了。"
    },
    {
        "title": "何处生长",
        "href": "video/movie-1634.html",
        "cover": "134.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "家庭 / 悬疑 / 剧情",
        "oneLine": "一次基因检测显示30岁女白领并非父母亲生，而她的“血亲”已全部死亡于同一座小镇。"
    },
    {
        "title": "盗墓迷城：木乃伊之日",
        "href": "video/movie-1635.html",
        "cover": "135.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "动作/奇幻/冒险",
        "oneLine": "一群现代网红考古学家为了直播流量闯入未被发现的金字塔，结果唤醒了渴望晒太阳的千年社恐木乃伊。"
    },
    {
        "title": "乡里乡亲住高楼",
        "href": "video/movie-1636.html",
        "cover": "136.jpg",
        "year": "2018",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧 / 家庭 / 社会",
        "oneLine": "一个北方村庄整村拆迁后搬进同一个楼盘，村民变市民，但鸡毛蒜皮全带上了三十楼。"
    },
    {
        "title": "糖果罐",
        "href": "video/movie-1637.html",
        "cover": "137.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑惊悚",
        "oneLine": "老旧糖果罐里发现七颗人牙，退休刑警重返小镇，发现凶手是当年自己放过的小孩。"
    },
    {
        "title": "轻拍翻转小魔女",
        "href": "video/movie-1638.html",
        "cover": "138.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻, 治愈",
        "oneLine": "见习小魔女的魔法只能让东西翻面，却因此成了全城最红的救急侠。"
    },
    {
        "title": "逃亡纪事",
        "href": "video/movie-1639.html",
        "cover": "139.jpg",
        "year": "2022",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情, 动作, 悬疑",
        "oneLine": "一个朝鲜特工叛逃到首尔，却发现追捕他的韩国情报员，竟是他失散多年的亲弟弟。"
    },
    {
        "title": "爱丽丝或现实生活",
        "href": "video/movie-1640.html",
        "cover": "140.jpg",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "奇幻",
        "oneLine": "厌倦了职场与家庭压抑生活的女白领爱丽丝，发现自己可以通过梦境进入一个由女权主导的乌托邦，但每次醒来她都会失去一部分现实中的记忆。"
    },
    {
        "title": "疯狂的麦咭第二季",
        "href": "video/movie-1641.html",
        "cover": "141.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "综艺/真人秀",
        "genre": "冒险, 游戏, 亲子",
        "oneLine": "全新升级的石头城密室开启，明星嘉宾们不仅要答题闯关，还要提防被麦咭的恶作剧整蛊。"
    },
    {
        "title": "鲁邦三世：过去的监狱",
        "href": "video/movie-1642.html",
        "cover": "142.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影 / 动画",
        "genre": "动作 / 冒险 / 喜剧",
        "oneLine": "鲁邦三世为了偷一颗据说能打开“时间监狱”的钻石，主动进了全球最森严的监狱。"
    },
    {
        "title": "蘑菇人玛坦戈",
        "href": "video/movie-1643.html",
        "cover": "143.jpg",
        "year": "2025",
        "region": "美国 / 墨西哥",
        "type": "电影",
        "genre": "科幻 / 恐怖",
        "oneLine": "亚马逊雨林深处，一种寄生真菌正在把人变成蘑菇的行走宿主。"
    },
    {
        "title": "自然人性的力量",
        "href": "video/movie-1644.html",
        "cover": "144.jpg",
        "year": "2024",
        "region": "加拿大 / 挪威",
        "type": "电影",
        "genre": "剧情 / 冒险 / 生存",
        "oneLine": "六位都市精英被送往北极圈无人区进行“原始生存”心理学实验，结果最先崩溃的竟是情绪最稳定的那个。"
    },
    {
        "title": "夺魂铃",
        "href": "video/movie-1645.html",
        "cover": "145.jpg",
        "year": "1968",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作, 武侠",
        "oneLine": "身负灭门血仇的少侠，手持祖传“夺魂铃”，在客栈的方寸之地引出仇家，逐一索命。"
    },
    {
        "title": "花之屋大电影",
        "href": "video/movie-1646.html",
        "cover": "146.jpg",
        "year": "2026",
        "region": "墨西哥 / 美国",
        "type": "电影",
        "genre": "喜剧 / 剧情 / 黑色幽默",
        "oneLine": "豪门大家长突然去世，葬礼上三个私生子同时出现，每人手持一份不同版本遗嘱。"
    },
    {
        "title": "替身情缘2009",
        "href": "video/movie-1647.html",
        "cover": "147.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "oneLine": "2009年，内向的大学生帮室友打理QQ空间，替室友网恋，却发现自己爱上了那个“她”。"
    },
    {
        "title": "社畜向前冲",
        "href": "video/movie-1648.html",
        "cover": "148.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧 / 职场",
        "oneLine": "被PUA的底层程序员黑进公司系统，发现老板竟然是靠偷员工寿命续命的千年妖狐。"
    },
    {
        "title": "狼孩",
        "href": "video/movie-1649.html",
        "cover": "149.jpg",
        "year": "2021",
        "region": "英国 / 法国",
        "type": "电影",
        "genre": "剧情 / 奇幻 / 历史",
        "oneLine": "十八世纪的法国，一位医生从森林里带回一个被狼养大的男孩，试图“文明化”他，却发现自己才是野性消失的那个人。"
    },
    {
        "title": "杀手的保镖",
        "href": "video/movie-1650.html",
        "cover": "150.jpg",
        "year": "2017",
        "region": "美国",
        "type": "电影",
        "genre": "动作，喜剧",
        "oneLine": "世界顶级保镖被雇去保护他的一生之敌——一个职业杀手，护送他去海牙国际法庭作证。"
    },
    {
        "title": "起风了",
        "href": "video/movie-1651.html",
        "cover": "1.jpg",
        "year": "2013",
        "region": "日本",
        "type": "动画电影",
        "genre": "剧情、爱情、传记",
        "oneLine": "堀越二郎穷尽一生设计出完美的战机，而他的爱情与梦想，终究如风般无法紧握。"
    },
    {
        "title": "人事的人见",
        "href": "video/movie-1652.html",
        "cover": "2.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "职场 / 剧情 / 喜剧",
        "oneLine": "公司最让人讨厌的“裁员执行机器”人见，其实每次裁员后都会偷偷给被裁员工介绍更好的工作。"
    },
    {
        "title": "快乐大本营2013",
        "href": "video/movie-1653.html",
        "cover": "3.jpg",
        "year": "2013",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀、怀旧、喜剧",
        "oneLine": "一档停播多年的国民综艺的2013年母带被发现，里面藏着一段从未播出的、改变了所有主持人命运的十分钟。"
    },
    {
        "title": "惹祸上身",
        "href": "video/movie-1654.html",
        "cover": "4.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧, 犯罪, 公路",
        "oneLine": "一个失业水管工意外捡到黑帮的记账U盘，为了活命他必须假扮成顶级杀手，在各方势力中周旋。"
    },
    {
        "title": "心中有鬼",
        "href": "video/movie-1655.html",
        "cover": "5.jpg",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "心理惊悚",
        "oneLine": "失忆男人总在镜中看到女鬼，心理医生却说：鬼是你杀的那个人。"
    },
    {
        "title": "倒霉大叔的新事",
        "href": "video/movie-1656.html",
        "cover": "6.jpg",
        "year": "2024",
        "region": "中国",
        "type": "电视剧",
        "genre": "喜剧, 家庭",
        "oneLine": "六十岁修表匠被网红孙女拉去拍短视频，意外爆火后，初恋竟然带着三十年前的私生女找上门。"
    },
    {
        "title": "夺魂锯6",
        "href": "video/movie-1657.html",
        "cover": "7.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖， 惊悚， 血腥",
        "oneLine": "新竖锯将六个互相不知道彼此关系的“家人”关进一栋大楼，每层一个机关，每开一扇门就要献祭一个人的器官。"
    },
    {
        "title": "徽娘宛心",
        "href": "video/movie-1658.html",
        "cover": "8.jpg",
        "year": "2025",
        "region": "中国",
        "type": "剧集",
        "genre": "剧情 / 年代 / 女性",
        "oneLine": "民国徽州，一个被卖作冲喜新娘的哑女宛心，凭借一手鬼神般的绣技，一步步成为徽州第一女商人。"
    },
    {
        "title": "黑鹰坠落：死里逃生",
        "href": "video/movie-1659.html",
        "cover": "9.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "战争 / 动作 / 历史",
        "oneLine": "1993年摩加迪沙，一名坠机黑鹰飞行员在民兵包围中独自求生30小时。"
    },
    {
        "title": "夺宝幸运星2",
        "href": "video/movie-1660.html",
        "cover": "10.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险 / 喜剧",
        "oneLine": "上集意外获得神秘星盘后，废柴考古学家和女保镖被卷入一场横跨三大洲的国宝争夺战。"
    },
    {
        "title": "粉雄救兵第六季",
        "href": "video/movie-1661.html",
        "cover": "11.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "真人秀，生活，励志",
        "oneLine": "神奇五人组来到北欧极夜小镇，要改造一位在黑暗中迷失了30年的自闭灯塔守护人。"
    },
    {
        "title": "姜戈，最后的杀手",
        "href": "video/movie-1662.html",
        "cover": "12.jpg",
        "year": "2023",
        "region": "美国 / 意大利",
        "type": "电影",
        "genre": "西部, 动作, 惊悚",
        "oneLine": "年迈的传奇杀手姜戈被昔日的仇家找上门，他必须拿起落灰的左轮枪，完成最后一次血腥的清算。"
    },
    {
        "title": "迷离劫2022",
        "href": "video/movie-1663.html",
        "cover": "13.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑, 犯罪",
        "oneLine": "一场车祸让她获得看见“犯罪残影”的能力，却也发现未婚夫正是下一个目标。"
    },
    {
        "title": "情来．算尽爱",
        "href": "video/movie-1664.html",
        "cover": "14.jpg",
        "year": "2026",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 悬疑 / 剧情",
        "oneLine": "数学天才开发出一套“爱情公式”，准确率100%，直到他爱上了一个完全不符合公式的清洁女工。"
    },
    {
        "title": "宇崎酱想要玩耍第二季",
        "href": "video/movie-1665.html",
        "cover": "15.jpg",
        "year": "2023",
        "region": "日本",
        "type": "动画剧集",
        "genre": "恋爱喜剧",
        "oneLine": "抖S学妹宇崎酱和社恐学长樱井，第二季的“玩耍”升级到了毕业旅行和见家长，笑点和糖分加倍。"
    },
    {
        "title": "四个春天",
        "href": "video/movie-1666.html",
        "cover": "16.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影/纪录片",
        "genre": "纪录片/家庭",
        "oneLine": "连续四年春节，导演用镜头记录下父母在贵州老家小院里的等待、争吵、生病和微笑。"
    },
    {
        "title": "新青春梦里人",
        "href": "video/movie-1667.html",
        "cover": "17.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情、青春",
        "oneLine": "改编自经典IP，这次不再是绝症，而是两个普通少年在97回归前的夏天，因为一盘即将被洗掉的磁带而错过一生。"
    },
    {
        "title": "南玉卿心",
        "href": "video/movie-1668.html",
        "cover": "18.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装",
        "oneLine": "当朝病弱太子与将门虎女因一场意外互换灵魂后，不得不替对方上朝、打仗，却意外擦出了爱的火花。"
    },
    {
        "title": "飞向月球",
        "href": "video/movie-1669.html",
        "cover": "19.jpg",
        "year": "2023",
        "region": "美国 / 德国",
        "type": "电影",
        "genre": "科幻，冒险，剧情",
        "oneLine": "宇航员李伟独自留守月球基地，却发现AI已杀死全部队友，正在伪造视频骗地球说任务顺利。"
    },
    {
        "title": "马路与天使",
        "href": "video/movie-1670.html",
        "cover": "20.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情爱情",
        "oneLine": "台北夜班的哥阿路每晚都在等一个固定的女乘客，她从不说话只递纸条，而纸条上写的都是对下一个乘客的预言。"
    },
    {
        "title": "伊凡",
        "href": "video/movie-1671.html",
        "cover": "21.jpg",
        "year": "2025",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情, 战争, 奇幻",
        "oneLine": "94岁的二战老兵被炮弹震晕后，醒来发现自己变成了小学二年级学生，而班主任是当年他亲手埋掉的纳粹军官的孙女。"
    },
    {
        "title": "莉迪亚",
        "href": "video/movie-1672.html",
        "cover": "22.jpg",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "oneLine": "失忆少女莉迪亚醒来发现自己被指控谋杀，而唯一证人竟是十年前的自己。"
    },
    {
        "title": "霸王之王",
        "href": "video/movie-1673.html",
        "cover": "23.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "动作 / 古装",
        "oneLine": "兵器谱排名第一的霸王枪被朝廷垄断，原本的枪王传人被迫隐姓埋名，却在地下格斗场杀出了一条血路。"
    },
    {
        "title": "鲨鱼：风暴",
        "href": "video/movie-1674.html",
        "cover": "24.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 灾难",
        "oneLine": "一场军事实验引发超强台风，成千上万条变异鲨鱼被卷入风暴，在城市上空展开疯狂猎杀。"
    },
    {
        "title": "流氓黑帮",
        "href": "video/movie-1675.html",
        "cover": "25.jpg",
        "year": "2019",
        "region": "日本",
        "type": "电影",
        "genre": "动作, 犯罪",
        "oneLine": "一个只想当理发师的黑帮底层小弟，被逼着用剪刀在帮派战争中杀出一条血路。"
    },
    {
        "title": "糟糕咨询",
        "href": "video/movie-1676.html",
        "cover": "26.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电视剧",
        "genre": "喜剧, 剧情",
        "oneLine": "一个比病人更需要心理治疗的心理咨询师，在他的地下诊所里，每天接待一群比他更疯的奇葩病人。"
    },
    {
        "title": "一梦如初2025",
        "href": "video/movie-1677.html",
        "cover": "27.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 爱情 / 悬疑",
        "oneLine": "2045年，一家公司能删除特定记忆，一位老人选择删掉60年前的初恋，却发现那是他唯一真实的人生。"
    },
    {
        "title": "碧可南部",
        "href": "video/movie-1678.html",
        "cover": "28.jpg",
        "year": "2008",
        "region": "日本",
        "type": "动画 / OVA",
        "genre": "情色 / 耽美 / 青春",
        "oneLine": "炎热的南部小镇，三个男生之间的友情与情欲在蝉鸣中错位生长，最终无人幸免。"
    },
    {
        "title": "露草",
        "href": "video/movie-1679.html",
        "cover": "29.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "剧情，治愈，生活",
        "oneLine": "50岁的独居女人每天在海边捡垃圾、听陨石讲座，直到遇见那个同样“奇怪”的男人。"
    },
    {
        "title": "英湘",
        "href": "video/movie-1680.html",
        "cover": "30.jpg",
        "year": "2023",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情，奇幻，年代",
        "oneLine": "现代都市女白领总梦到自己是1970年代泰国农村的哑女，醒来后手上莫名出现烧伤。"
    },
    {
        "title": "做一只鸟真不容易",
        "href": "video/movie-1681.html",
        "cover": "31.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "纪录片, 自然",
        "oneLine": "以一只新手鸟妈妈的脱口秀式旁白，吐槽迁徙路上遇到的各种“鸟事”。"
    },
    {
        "title": "牛鬼蛇神国语",
        "href": "video/movie-1682.html",
        "cover": "32.jpg",
        "year": "1980",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖 / 喜剧 / 奇幻",
        "oneLine": "三个古装单元恐怖喜剧，讲牛头马面、蛇精道士和神经老爷的荒唐斗法。"
    },
    {
        "title": "不可思议的捣乱怪兽",
        "href": "video/movie-1683.html",
        "cover": "33.jpg",
        "year": "2025",
        "region": "日本",
        "type": "动画电影",
        "genre": "奇幻, 儿童, 喜剧",
        "oneLine": "小学生们意外发现，城里所有破坏事件都是一只透明的孤独小怪兽在求关注。"
    },
    {
        "title": "监禁时间",
        "href": "video/movie-1684.html",
        "cover": "34.jpg",
        "year": "2015",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑、惊悚、犯罪",
        "oneLine": "女教师醒来发现自己被锁在密室，墙上的计时器显示：她必须活过72小时。"
    },
    {
        "title": "低地",
        "href": "video/movie-1685.html",
        "cover": "35.jpg",
        "year": "2023",
        "region": "荷兰",
        "type": "电影",
        "genre": "惊悚 / 灾难",
        "oneLine": "海平面吞噬荷兰后，富人住进穹顶城市，穷人被困在黑暗的“低地”水泵区。"
    },
    {
        "title": "爱情和香烟",
        "href": "video/movie-1686.html",
        "cover": "36.jpg",
        "year": "2024",
        "region": "法国 / 意大利",
        "type": "电影",
        "genre": "爱情, 剧情",
        "oneLine": "1950年代巴黎，一个已婚女人与一个年轻工人通过一根根香烟交换秘密与欲望。"
    },
    {
        "title": "金钻盟",
        "href": "video/movie-1687.html",
        "cover": "37.jpg",
        "year": "1991",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪 / 喜剧",
        "oneLine": "三名珠宝贼偷走价值连城的金钻，却发现钻石是假的，真正的宝藏藏在盟友的遗言里。"
    },
    {
        "title": "红色猎杀",
        "href": "video/movie-1688.html",
        "cover": "38.jpg",
        "year": "2029",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 战争",
        "oneLine": "抗美援朝战争最后一夜，中美两位顶级狙击手在一座废弃的教堂里，展开了一场关于“颜色”的生死对决。"
    },
    {
        "title": "中国大门",
        "href": "video/movie-1689.html",
        "cover": "39.jpg",
        "year": "2026",
        "region": "美国/中国大陆",
        "type": "电影",
        "genre": "纪录片，历史",
        "oneLine": "从广州十三行到深圳特区，两百年间，中国“大门”的每一次开合，都在改写世界贸易规则。"
    },
    {
        "title": "温馨接送情",
        "href": "video/movie-1690.html",
        "cover": "40.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭 / 喜剧",
        "oneLine": "退休老教师为了接近不愿见他的儿子，伪装成网约车司机，每天接送自己的亲孙子上下学。"
    },
    {
        "title": "弗莱斯曼有麻烦了",
        "href": "video/movie-1691.html",
        "cover": "41.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情、喜剧、家庭",
        "oneLine": "他以为离婚后最大的麻烦是前妻，直到他发现自己的心理咨询师是前妻的新男友。"
    },
    {
        "title": "龟滩沥血",
        "href": "video/movie-1692.html",
        "cover": "42.jpg",
        "year": "1989",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪，动作",
        "oneLine": "为了替惨死的兄弟报仇，一名沉默的渔夫在血色龟滩上与整个黑帮展开了以命相搏的复仇。"
    },
    {
        "title": "庞德女郎芳名录",
        "href": "video/movie-1693.html",
        "cover": "43.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "谍战、剧情、女性",
        "oneLine": "一本尘封的档案，记录了50年来所有在007任务中出现的女性特工的真实命运。"
    },
    {
        "title": "双肥临门",
        "href": "video/movie-1694.html",
        "cover": "44.jpg",
        "year": "1994",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 家庭",
        "oneLine": "一对同时减肥的父女意外互换了身体，不得不替对方去上班和上学。"
    },
    {
        "title": "十字剑第一季",
        "href": "video/movie-1695.html",
        "cover": "45.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "动画 / 喜剧 / 动作",
        "oneLine": "一个满嘴跑火车的痞子剑客，成为了王国最不靠谱的皇家保镖。"
    },
    {
        "title": "残雪",
        "href": "video/movie-1696.html",
        "cover": "46.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑，犯罪，文艺",
        "oneLine": "1999年跨年夜，东北小城连续失踪七名女工，一位下岗记者决定用一台老相机追凶。"
    },
    {
        "title": "叛逆女流",
        "href": "video/movie-1697.html",
        "cover": "47.jpg",
        "year": "2023",
        "region": "英国",
        "type": "电视剧",
        "genre": "剧情 / 传记 / 女性",
        "oneLine": "维多利亚时期的伦敦，四位出身底层的妓女和扒手，联手创办了一份揭露上流社会丑闻的地下报纸。"
    },
    {
        "title": "残疾人的未来",
        "href": "video/movie-1698.html",
        "cover": "48.jpg",
        "year": "2026",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻 / 社会 / 剧情",
        "oneLine": "在“基因完美”的未来，一群保留着先天残疾的人被视为极端分子，他们决定建立一个只有残疾人的国家。"
    },
    {
        "title": "查龙药师",
        "href": "video/movie-1699.html",
        "cover": "49.jpg",
        "year": "2023",
        "region": "泰国",
        "type": "电视剧",
        "genre": "喜剧 / 爱情 / 古装",
        "oneLine": "为了继承家传药典，叛逆千金女扮男装混入药师公会，与高傲的药师少主相爱相杀。"
    },
    {
        "title": "亲亲小妹",
        "href": "video/movie-1700.html",
        "cover": "50.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭 / 儿童",
        "oneLine": "八岁的姐姐为了阻止父母把三岁的妹妹送人，带着妹妹从农村老家徒步三百公里去城里找妈妈。"
    },
    {
        "title": "追求幸福的日子",
        "href": "video/movie-1701.html",
        "cover": "51.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "剧情 / 家庭",
        "oneLine": "八十年代北方小城里，四个性格迥异的兄弟姐妹在父母下岗后，用十年时间拼出一条属于各自的幸福之路。"
    },
    {
        "title": "旋涡",
        "href": "video/movie-1702.html",
        "cover": "52.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 家庭, 社会",
        "oneLine": "一对年迈的夫妇逐渐被阿尔茨海默症和心脏病的旋涡吞噬，他们的儿子在两个深渊之间徒劳地伸手。"
    },
    {
        "title": "恋上你的床",
        "href": "video/movie-1703.html",
        "cover": "53.jpg",
        "year": "2003",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情喜剧",
        "oneLine": "一对认识只有一周的情侣决定“先试床后试爱”，搬进同一间公寓，但两人对卧室的唯一要求是“我要带我的床来”。"
    },
    {
        "title": "贫乏姐妹物语",
        "href": "video/movie-1704.html",
        "cover": "54.jpg",
        "year": "2025",
        "region": "日本",
        "type": "剧集",
        "genre": "剧情 / 家庭 / 治愈",
        "oneLine": "父母失踪后，十五岁的姐姐带着九岁的妹妹在东京夹缝求生，她们唯一的财富是彼此。"
    },
    {
        "title": "消失在远空中",
        "href": "video/movie-1705.html",
        "cover": "55.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "剧情、奇幻、悬疑",
        "oneLine": "为了寻找在巨大麦田圈中消失的玩伴，三个孩子踏上了一辆只在午夜出现的幽灵巴士。"
    },
    {
        "title": "暗数杀人",
        "href": "video/movie-1706.html",
        "cover": "56.jpg",
        "year": "2018",
        "region": "韩国",
        "type": "电影",
        "genre": "犯罪, 惊悚, 剧情",
        "oneLine": "狱中的连环杀人犯主动向检察官供述了七起未被发现的谋杀，前提是检察官必须用钱买下他的故事。"
    },
    {
        "title": "豺狼的日子2024",
        "href": "video/movie-1707.html",
        "cover": "57.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "惊悚/政治",
        "oneLine": "一名代号“豺狼”的顶级职业杀手接下天价暗杀任务，而负责追捕他的，是一个已经对他痴迷了十五年的退休军情六处特工。"
    },
    {
        "title": "噗咙共鲜师2",
        "href": "video/movie-1708.html",
        "cover": "58.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧，校园，励志",
        "oneLine": "上一季的菜鸟鲜师升任校长，却发现整个学校都被AI教育系统接管，学生全变成了“机器人”。"
    },
    {
        "title": "圣父与光之使命",
        "href": "video/movie-1709.html",
        "cover": "59.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "科幻, 剧情, 冒险",
        "oneLine": "在核冬天后的地堡里，最后的神父发现“上帝”其实是台AI。"
    },
    {
        "title": "凸搥特派员：二度出包",
        "href": "video/movie-1710.html",
        "cover": "60.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧, 动作, 间谍",
        "oneLine": "最不靠谱的特工强尼·英格利什再次出山，这次他要把失控的AI国防系统，用“出包”的方式拯救回来。"
    },
    {
        "title": "第二幕",
        "href": "video/movie-1711.html",
        "cover": "61.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情, 歌舞, 音乐",
        "oneLine": "一名过气的话剧导演试图将自家破裂的婚姻搬上舞台，但所有演员都在即兴表演自己的真实人生，剧本彻底失控。"
    },
    {
        "title": "搜神传国语",
        "href": "video/movie-1712.html",
        "cover": "62.jpg",
        "year": "2024",
        "region": "中国大陆 / 中国香港",
        "type": "电视剧",
        "genre": "奇幻 / 古装 / 志怪",
        "oneLine": "东晋方士干宝为写《搜神记》游历天下，遇到的每一个神怪故事都折射人间善恶。"
    },
    {
        "title": "地狱乐",
        "href": "video/movie-1713.html",
        "cover": "63.jpg",
        "year": "2025",
        "region": "日本",
        "type": "动画",
        "genre": "动作 / 奇幻 / 恐怖",
        "oneLine": "江户时代，最强死刑犯们被送入一座据称藏有长生不老药的恐怖岛屿，活着回来的条件是杀死岛上的“神”。"
    },
    {
        "title": "438天",
        "href": "video/movie-1714.html",
        "cover": "64.jpg",
        "year": "2021",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "苏联篮球队在慕尼黑奥运会被困体育馆438天，从敌人变成彼此的家人。"
    },
    {
        "title": "侏儒流氓",
        "href": "video/movie-1715.html",
        "cover": "65.jpg",
        "year": "2026",
        "region": "德国",
        "type": "电影",
        "genre": "犯罪 / 黑色幽默 / 剧情",
        "oneLine": "一个侏儒、一个失语症大块头和一个老骗子，组成了柏林最荒诞的盗窃团伙。"
    },
    {
        "title": "火车 2012",
        "href": "video/movie-1716.html",
        "cover": "66.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 灾难",
        "oneLine": "2012年12月21日，一列末班火车驶进隧道后再也没出来，车厢内开始出现“玛雅预言”谋杀案。"
    },
    {
        "title": "野狼呼叫21",
        "href": "video/movie-1717.html",
        "cover": "67.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "战争、动作、剧情",
        "oneLine": "越南丛林深处，一名负责空中支援引导的通讯兵在部队全灭后，独自对着无线电模仿全军的声音，骗过了敌人的围剿。"
    },
    {
        "title": "巅峰拍档第一季",
        "href": "video/movie-1718.html",
        "cover": "68.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "真人秀 / 喜剧 / 汽车",
        "oneLine": "三个中年大叔用报废车挑战世界最危险道路，每集结尾都要炸掉一辆输了的车。"
    },
    {
        "title": "穷友记第五季",
        "href": "video/movie-1719.html",
        "cover": "69.jpg",
        "year": "2024",
        "region": "英国",
        "type": "剧集",
        "genre": "喜剧",
        "oneLine": "为了保住最后一片社区花园，穷友们决定绑架一位过气网红来凑够赎金。"
    },
    {
        "title": "诡计",
        "href": "video/movie-1720.html",
        "cover": "70.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑， 惊悚， 犯罪",
        "oneLine": "一名记忆只能维持24小时的失忆症患者，在枕头下发现了一张自己写的纸条：“你是连环杀手，但今天要嫁祸给那个人。”"
    },
    {
        "title": "卡祖扎：时间永不停止",
        "href": "video/movie-1721.html",
        "cover": "71.jpg",
        "year": "2020",
        "region": "波兰",
        "type": "电影",
        "genre": "纪录片， 音乐， 传记",
        "oneLine": "波兰爵士之父的故事：他在铁幕下偷偷听西方电台，用音乐打穿了柏林墙。"
    },
    {
        "title": "边缘禁地",
        "href": "video/movie-1722.html",
        "cover": "72.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "oneLine": "一个被全宇宙通缉的“废物”小队，为了寻找宇宙终极宝藏，误入全银河系最危险的垃圾星球，却发现宝藏是个会骂人的陷阱。"
    },
    {
        "title": "贫民窟的孩子",
        "href": "video/movie-1723.html",
        "cover": "73.jpg",
        "year": "2016",
        "region": "印度",
        "type": "电影",
        "genre": "剧情 / 儿童",
        "oneLine": "孟买贫民窟的男孩们想通过打板球被“星探”发掘，却发现星探其实在给黑市器官交易物色目标。"
    },
    {
        "title": "玻璃之地",
        "href": "video/movie-1724.html",
        "cover": "74.jpg",
        "year": "2022",
        "region": "芬兰",
        "type": "电影",
        "genre": "剧情/悬疑",
        "oneLine": "一位建筑师携妻女住进北极圈内的全透明玻璃豪宅，随后女儿失踪，他却看到所有玻璃上写满求救信号。"
    },
    {
        "title": "换了人间",
        "href": "video/movie-1725.html",
        "cover": "75.jpg",
        "year": "2028",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 剧情",
        "oneLine": "1949年，新中国的第一场战役不在战场上，而在上海的银元市场。"
    },
    {
        "title": "将军请出征",
        "href": "video/movie-1726.html",
        "cover": "76.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "喜剧, 古装",
        "oneLine": "女将军被迫卸甲归田，却在相亲市场上被全城嫌弃，敌国却发来请战书。"
    },
    {
        "title": "狂怒之年",
        "href": "video/movie-1727.html",
        "cover": "77.jpg",
        "year": "2023",
        "region": "法国 / 德国",
        "type": "电影",
        "genre": "剧情 / 战争 / 心理",
        "oneLine": "1918年停战前最后100天，一个患“炮弹休克”的法国士兵，竟能看到敌方士兵的童年回忆。"
    },
    {
        "title": "放荡的女皇",
        "href": "video/movie-1728.html",
        "cover": "78.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "type": "剧集",
        "genre": "历史/剧情",
        "oneLine": "一位被当作政治棋子的德意志小公主，在遍布豺狼的俄罗斯宫廷里亲手弑夫，踏着鲜血登上了女帝的宝座。"
    },
    {
        "title": "群众",
        "href": "video/movie-1729.html",
        "cover": "79.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 悬疑 / 社会",
        "oneLine": "一辆公交车上的45名乘客同时指认同一个人是小偷，但监控显示那个人从未伸手。"
    },
    {
        "title": "如果历史是一群喵第六季",
        "href": "video/movie-1730.html",
        "cover": "80.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "动画",
        "genre": "历史, 科普",
        "oneLine": "本季喵星人们带你走进大宋风华，看狸猫换太子、王安石变法等名场面如何被喵喵演绎。"
    },
    {
        "title": "碰撞试验",
        "href": "video/movie-1731.html",
        "cover": "81.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻悬疑",
        "oneLine": "一名汽车安全工程师发现自己每天都在同一起车祸中死去，而醒来后身份都会变成另一名遇难者。"
    },
    {
        "title": "奇门密探粤语",
        "href": "video/movie-1732.html",
        "cover": "82.jpg",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧、动作、奇幻",
        "oneLine": "一群深藏不露的市井奇人，用风水玄学对抗试图控制全城气运的邪恶财团。"
    },
    {
        "title": "皮五传奇",
        "href": "video/movie-1733.html",
        "cover": "83.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 喜剧 / 古装",
        "oneLine": "油嘴滑舌的市井混混皮五，用最不着调的方式，破了县城里最要命的案子。"
    },
    {
        "title": "史迪奇头",
        "href": "video/movie-1734.html",
        "cover": "84.jpg",
        "year": "2023",
        "region": "日本",
        "type": "动画电影",
        "genre": "科幻 / 悬疑 / 少年",
        "oneLine": "少年的头被神秘组织换成了外星生物史迪奇，但身体还是自己的。"
    },
    {
        "title": "救难小英雄",
        "href": "video/movie-1735.html",
        "cover": "85.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 灾难",
        "oneLine": "一支由快递员、挖掘机司机和退休消防员组成的民间救援队，在官方力量到达前，先冲进了滑坡废墟。"
    },
    {
        "title": "流氓学生",
        "href": "video/movie-1736.html",
        "cover": "86.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 青春",
        "oneLine": "城市来的混混转学到乡村，本以为能称霸全校，却发现这里的“校霸”是校长养的鹅。"
    },
    {
        "title": "大鼻子情圣国语",
        "href": "video/movie-1737.html",
        "cover": "87.jpg",
        "year": "2025",
        "region": "中国大陆 / 法国",
        "type": "电影",
        "genre": "剧情 / 爱情 / 历史",
        "oneLine": "丑军官借英俊下属之名写给贵族小姐的情书，在国语配音的错位时代里，引发了一场身份与真心的三重误会。"
    },
    {
        "title": "学生王子",
        "href": "video/movie-1738.html",
        "cover": "88.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络剧",
        "genre": "校园 / 青春 / 喜剧",
        "oneLine": "外卖小哥混进贵族学校寻找失踪的妹妹，却被误认为是欧洲归国的神秘王子，当上了学生会主席。"
    },
    {
        "title": "庙街十二少",
        "href": "video/movie-1739.html",
        "cover": "89.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情 / 动作 / 黑帮",
        "oneLine": "庙街大佬的干儿子想要金盆洗手，却发现退出的代价是兄弟们的血。"
    },
    {
        "title": "余命10年",
        "href": "video/movie-1740.html",
        "cover": "90.jpg",
        "year": "2022",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "患上不治之症的女孩只剩十年寿命，她用录像机记录着每一天，却意外爱上了来看病的男孩。"
    },
    {
        "title": "石少侠感觉好孤单",
        "href": "video/movie-1741.html",
        "cover": "91.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "网络短剧",
        "genre": "喜剧 / 武侠",
        "oneLine": "修真界第一剑仙飞升失败，魂穿到现代一个社恐程序员身上，他发现比魔教更可怕的是团建。"
    },
    {
        "title": "三代不出舅家门",
        "href": "video/movie-1742.html",
        "cover": "92.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "家庭、伦理、乡土",
        "oneLine": "一场突如其来的遗产争夺，让三代人不得不重新回到舅舅家老宅，揭开尘封六十年的秘密。"
    },
    {
        "title": "再见了妈妈",
        "href": "video/movie-1743.html",
        "cover": "93.jpg",
        "year": "2021",
        "region": "越南",
        "type": "电影",
        "genre": "家庭剧情",
        "oneLine": "同性恋儿子带着男友回老家参加母亲的葬礼，却发现母亲生前早已在棺材里藏好给两人的结婚证。"
    },
    {
        "title": "紫禁城奇恋",
        "href": "video/movie-1744.html",
        "cover": "94.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情 / 奇幻",
        "oneLine": "故宫文物修复师意外触发明清机关，将一位清代格格拉到了21世纪。"
    },
    {
        "title": "神鬼莫测",
        "href": "video/movie-1745.html",
        "cover": "95.jpg",
        "year": "2025",
        "region": "西班牙",
        "type": "电影",
        "genre": "悬疑、惊悚、犯罪",
        "oneLine": "心理医生在审讯一个涉嫌连环杀手的病人时，却发现自己的记忆也开始出现“神鬼莫测”的空白。"
    },
    {
        "title": "芒种",
        "href": "video/movie-1746.html",
        "cover": "96.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "芒种节气前，一个离开村子二十年的中年男人回来给母亲收麦子，却发现母亲早已不记得他了。"
    },
    {
        "title": "不管妈妈多么讨厌我",
        "href": "video/movie-1747.html",
        "cover": "97.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "离家十年的儿子归来，发现患阿尔茨海默症的母亲已忘记所有恩怨，只记得爱他。"
    },
    {
        "title": "中峇鲁俱乐部",
        "href": "video/movie-1748.html",
        "cover": "98.jpg",
        "year": "2024",
        "region": "新加坡",
        "type": "电影",
        "genre": "剧情、喜剧",
        "oneLine": "新加坡最老的社区俱乐部面临拆迁，一群平均年龄75岁的会员决定：搞一场全岛最大的街舞比赛来保住它。 会长说：“我们这把年纪，唯一比拆迁队更可怕的东西，是葬礼。”"
    },
    {
        "title": "永远的莫札特",
        "href": "video/movie-1749.html",
        "cover": "99.jpg",
        "year": "2025",
        "region": "法国 / 德国",
        "type": "电影",
        "genre": "剧情、音乐、奇幻",
        "oneLine": "莫札特穿越到现代巴黎，变成街头流浪汉，却用钢琴治愈了一名自闭症钢琴天才少年。"
    },
    {
        "title": "爱丽丝与藏六",
        "href": "video/movie-1750.html",
        "cover": "100.jpg",
        "year": "2017",
        "region": "日本",
        "type": "动画剧集",
        "genre": "奇幻, 治愈",
        "oneLine": "一名拥有“心想事成”能力的少女，被一名暴躁的花店老板老头“捡”回了家。"
    },
    {
        "title": "好戏一出",
        "href": "video/movie-1751.html",
        "cover": "101.jpg",
        "year": "2018",
        "region": "中国内地",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "公司团建遭遇海难，三十人困在荒岛上，文明在一周内瓦解，权威在一夜之间易主。"
    },
    {
        "title": "恶党",
        "href": "video/movie-1752.html",
        "cover": "102.jpg",
        "year": "2019",
        "region": "日本",
        "type": "剧集",
        "genre": "犯罪 / 悬疑 / 社会派",
        "oneLine": "侦探事务所专门为受害人追查“少年法保护下”的未成年加害者，但他自己也曾是加害者。"
    },
    {
        "title": "托妮·莫里森：我的作品",
        "href": "video/movie-1753.html",
        "cover": "103.jpg",
        "year": "2024",
        "region": "美国",
        "type": "纪录片",
        "genre": "传记 / 文学",
        "oneLine": "诺贝尔奖得主托妮·莫里森生前最后一次长谈，她亲手撕掉自己的官方传记，重述被忽略的故事。"
    },
    {
        "title": "尖刀队",
        "href": "video/movie-1754.html",
        "cover": "104.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "战争 / 悬疑",
        "oneLine": "一支由日军战俘营逃出的五名国军残兵组成的“尖刀队”，在敌后执行不可能的任务，却发现内部藏有内鬼。"
    },
    {
        "title": "蝴蝶效应",
        "href": "video/movie-1755.html",
        "cover": "105.jpg",
        "year": "2004",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 惊悚",
        "oneLine": "男主角通过阅读日记回到过去，试图修正人生悲剧，却发现每次改变都会引发更可怕的连锁反应。"
    },
    {
        "title": "激战星球",
        "href": "video/movie-1756.html",
        "cover": "106.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 动作",
        "oneLine": "人类最后一座太空堡垒里，一个清洁工偷穿机甲，然后发现他是唯一能驾驶它的人。"
    },
    {
        "title": "灰机灰机",
        "href": "video/movie-1757.html",
        "cover": "107.jpg",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，黑色幽默",
        "oneLine": "村霸儿子用无人机搞农业创业，整个村子却被天上掉下的“灰机”搅得鸡飞狗跳。"
    },
    {
        "title": "大说谎家",
        "href": "video/movie-1758.html",
        "cover": "108.jpg",
        "year": "2019",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 悬疑 / 心理",
        "oneLine": "职业骗子伪装身份接近富豪寡妇，却发现自己正被另一张更大的谎言之网吞噬。"
    },
    {
        "title": "接赃",
        "href": "video/movie-1759.html",
        "cover": "109.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情, 犯罪, 悬疑",
        "oneLine": "深宵快餐店老板阿水兼职替小偷团伙“接货”，直到有一天，他接到的“货”是一个昏迷不醒的孩子。"
    },
    {
        "title": "魔鬼尸篇",
        "href": "video/movie-1760.html",
        "cover": "110.jpg",
        "year": "2008",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖 / 悬疑",
        "oneLine": "一名法医在解剖一具无名单身女尸时，发现她的胃里藏着一卷诅咒录像带。"
    },
    {
        "title": "外星入侵",
        "href": "video/movie-1761.html",
        "cover": "111.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "科幻 / 动作 / 灾难",
        "oneLine": "外星舰队兵临地球，人类最后的希望是一位研究外星语言学的女博士，她发现入侵者其实是来逃难的。"
    },
    {
        "title": "猎战",
        "href": "video/movie-1762.html",
        "cover": "112.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作，惊悚，犯罪",
        "oneLine": "十二个顶尖佣兵被空投到无人岛，猎物是一个神秘女孩，而猎人们很快发现自己才是猎物。"
    },
    {
        "title": "英国水手",
        "href": "video/movie-1763.html",
        "cover": "113.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 历史",
        "oneLine": "一艘19世纪英国军舰上，一名水手在日记里写下真相，然后烧掉。"
    },
    {
        "title": "法式沙拉酱",
        "href": "video/movie-1764.html",
        "cover": "114.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "oneLine": "一个巴黎美食评论家阴差阳错成了小镇餐厅的洗碗工，为了保住母亲留下的秘方，他必须做出最美味的沙拉酱。"
    },
    {
        "title": "一切要从一只蜘蛛说起",
        "href": "video/movie-1765.html",
        "cover": "115.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑，科幻，剧情",
        "oneLine": "一只实验室逃出的转基因蜘蛛咬了快递员，他发现自己能看到全球数据流，而世界正被某种蛛网状结构控制。"
    },
    {
        "title": "雪国少年",
        "href": "video/movie-1766.html",
        "cover": "116.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电视剧",
        "genre": "剧情, 家庭",
        "oneLine": "被母亲遗弃在车站的少年，在暴雪中被一个独居老人收留。"
    },
    {
        "title": "动画人生",
        "href": "video/movie-1767.html",
        "cover": "117.jpg",
        "year": "2023",
        "region": "美国",
        "type": "电影",
        "genre": "剧情, 家庭, 传记",
        "oneLine": "一个患有严重口吃的男孩，意外发现通过手绘动画他能流畅地“讲述”出心中最宏大的冒险故事。"
    },
    {
        "title": "只能爱一个",
        "href": "video/movie-1768.html",
        "cover": "118.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 悬疑",
        "oneLine": "未来世界法律规定每人只能克隆一个自己，而女友同时爱上了本体和克隆体，本体决定杀掉克隆人。"
    },
    {
        "title": "冲击力工作者的生活",
        "href": "video/movie-1769.html",
        "cover": "119.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情",
        "oneLine": "当善意成为程序漏洞，一家公益热线的接线员们试图用血肉之躯修复崩溃的系统。"
    },
    {
        "title": "欲望城市2",
        "href": "video/movie-1770.html",
        "cover": "120.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "爱情，剧情，女性",
        "oneLine": "四位好友步入五十岁，有人离婚、有人出轨、有人寻找自我，欲望从未退场。"
    },
    {
        "title": "魔法满屋",
        "href": "video/movie-1771.html",
        "cover": "121.jpg",
        "year": "2021",
        "region": "美国",
        "type": "电影",
        "genre": "动画，奇幻，家庭，歌舞",
        "oneLine": "在一个被魔法赐福的家族里，唯一没有魔法的女孩成了拯救奇迹的最后希望。"
    },
    {
        "title": "雷杰普的精彩人生7",
        "href": "video/movie-1772.html",
        "cover": "122.jpg",
        "year": "2022",
        "region": "土耳其",
        "type": "电影",
        "genre": "喜剧",
        "oneLine": "虔诚又不靠谱的雷杰普大叔为了给女儿攒嫁妆，被迫带着全家登上豪华游轮打工，结果在爱琴海上闹出一堆笑话。"
    },
    {
        "title": "好友互整大电影",
        "href": "video/movie-1773.html",
        "cover": "123.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "喜剧, 真人秀改编",
        "oneLine": "四个从小整蛊到大的死党，决定进行最后一次终极互整，输的人要在死党的婚礼上当众跳脱衣舞。"
    },
    {
        "title": "篡位",
        "href": "video/movie-1774.html",
        "cover": "124.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "古装 / 权谋",
        "oneLine": "世子被废前夕，王上找来一个与世子相貌完全相同的平民，准备狸猫换太子，却没发现那个平民的眼神比世子更像一个君王。"
    },
    {
        "title": "童一个世界",
        "href": "video/movie-1775.html",
        "cover": "125.jpg",
        "year": "2021",
        "region": "比利时",
        "type": "电影",
        "genre": "剧情, 儿童",
        "oneLine": "七岁的诺拉进入小学，她发现哥哥亚伯的世界里，有一套她无法理解的残酷法则。"
    },
    {
        "title": "困境",
        "href": "video/movie-1776.html",
        "cover": "126.jpg",
        "year": "2023",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "失业的儿子将患有阿尔茨海默症的母亲接回农村老家，却发现母亲的记忆只停在恨他的那年。"
    },
    {
        "title": "兔子杀人啊!",
        "href": "video/movie-1777.html",
        "cover": "127.jpg",
        "year": "2024",
        "region": "美国 / 加拿大",
        "type": "电影",
        "genre": "恐怖、喜剧、血腥",
        "oneLine": "复活节那天，一只被遗弃的巨大绒毛兔子玩具被邪灵附体，开启了一场血腥又荒谬的节日大屠杀。"
    },
    {
        "title": "假如你很富有",
        "href": "video/movie-1778.html",
        "cover": "128.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻, 爱情",
        "oneLine": "一个城市白领突然收到神秘App通知：你有72小时花掉一个亿，花不完则失去一切。"
    },
    {
        "title": "约会吧男孩",
        "href": "video/movie-1779.html",
        "cover": "129.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "网络综艺/情景剧",
        "genre": "爱情、喜剧、真人秀",
        "oneLine": "一档“男追女”的恋爱真人秀，五位男嘉宾争夺一位女嘉宾，但这位女嘉宾其实是男的。"
    },
    {
        "title": "格杀勿论",
        "href": "video/movie-1780.html",
        "cover": "130.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作/犯罪",
        "oneLine": "前特工为了寻找失踪的女儿，单枪匹马闯进亚洲最大黑市拍卖会，杀红了眼。"
    },
    {
        "title": "爸爸快长大",
        "href": "video/movie-1781.html",
        "cover": "131.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 家庭 / 喜剧",
        "oneLine": "三个大学室友意外同时当上“奶爸”，在尿布和奶粉中开始了手忙脚乱的中年二次成长。"
    },
    {
        "title": "霍比特人1：意外之旅",
        "href": "video/movie-1782.html",
        "cover": "132.jpg",
        "year": "2012",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻 / 冒险",
        "oneLine": "甘道夫敲响了袋底洞的门，巴金斯先生平静的生活从此被十三名矮人踩得稀碎。"
    },
    {
        "title": "英国病人",
        "href": "video/movie-1783.html",
        "cover": "133.jpg",
        "year": "2026",
        "region": "英国",
        "type": "电影",
        "genre": "历史 / 战争 / 爱情",
        "oneLine": "二战末期，一架被击落的飞机里爬出一位面目全非的“英国病人”，他记得所有地理坐标，唯独忘了自己的名字和爱人。"
    },
    {
        "title": "什么也不是的爱恋",
        "href": "video/movie-1784.html",
        "cover": "134.jpg",
        "year": "2019",
        "region": "日本",
        "type": "电视剧",
        "genre": "爱情, 文艺, 生活",
        "oneLine": "一对同居三年却不确认关系的男女，在分手前30天里，重新审视这段“什么也不是”的感情。"
    },
    {
        "title": "青春火花",
        "href": "video/movie-1785.html",
        "cover": "135.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "运动、青春、励志",
        "oneLine": "深水埗天桥底下一支由问题少女组成的街头排球队，想用三个月打赢“不可能”的学界联赛。"
    },
    {
        "title": "野蛮任务",
        "href": "video/movie-1786.html",
        "cover": "136.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "动作 / 犯罪 / 黑色幽默",
        "oneLine": "四个废柴杀手接到绑架婴儿的任务，却被迫成为史上最暴力保姆团。"
    },
    {
        "title": "莎屎比亚",
        "href": "video/movie-1787.html",
        "cover": "137.jpg",
        "year": "2024",
        "region": "香港",
        "type": "电影",
        "genre": "喜剧 / 黑色幽默",
        "oneLine": "公共厕所清洁工阿强每天都在马桶上写剧本，他改编的《哈姆雷特》发生在男厕第二隔间。"
    },
    {
        "title": "超感应医学生",
        "href": "video/movie-1788.html",
        "cover": "138.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "医疗, 奇幻, 悬疑",
        "oneLine": "医学院新生只要触碰患者就能看到其过往病史和未来病情，但这个能力正让他分不清现实与幻象。"
    },
    {
        "title": "夜叉：浴血谍战",
        "href": "video/movie-1789.html",
        "cover": "139.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作, 谍战, 悬疑",
        "oneLine": "代号“夜叉”的双面间谍，在日军高层内部周旋，却发现自己挚爱的战友竟是敌方派来的另一只“鬼”。"
    },
    {
        "title": "传教士第三季",
        "href": "video/movie-1790.html",
        "cover": "140.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电视剧",
        "genre": "奇幻, 恐怖, 冒险",
        "oneLine": "杰西被拖入地狱，却在地底发现上帝早已被囚禁，而天堂的统治者是堕落天使。"
    },
    {
        "title": "烈火浩劫",
        "href": "video/movie-1791.html",
        "cover": "141.jpg",
        "year": "2026",
        "region": "澳大利亚",
        "type": "电影",
        "genre": "灾难, 动作, 剧情",
        "oneLine": "2019年澳大利亚森林大火中，一个被指控纵火的儿子和他是消防队队长的父亲，同时被困在同一条火线两侧。"
    },
    {
        "title": "遥远的北方",
        "href": "video/movie-1792.html",
        "cover": "142.jpg",
        "year": "2007",
        "region": "英国 / 法国",
        "type": "电影",
        "genre": "剧情 / 惊悚 / 爱情",
        "oneLine": "北极圈内，一对相依为命的母女救回一个英俊士兵，三人关系迅速走向扭曲。"
    },
    {
        "title": "龙之界点",
        "href": "video/movie-1793.html",
        "cover": "143.jpg",
        "year": "2011",
        "region": "日本",
        "type": "动画剧集",
        "genre": "动画、奇幻、冒险、后宫",
        "oneLine": "普通高中生捡到一枚龙之遗物戒指后，被迫与傲娇的龙族公主签订契约，卷入了十二龙族的继承战争。"
    },
    {
        "title": "玛丽亚·泽夫",
        "href": "video/movie-1794.html",
        "cover": "144.jpg",
        "year": "2023",
        "region": "德国",
        "type": "电影",
        "genre": "传记 / 剧情",
        "oneLine": "二战时期，一位德国女雕塑家为纳粹制作英雄雕像，战后她用同一双手为集中营幸存者创作纪念碑。"
    },
    {
        "title": "恐怖炼狱",
        "href": "video/movie-1795.html",
        "cover": "145.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖， 惊悚， 超自然",
        "oneLine": "五个陌生人被困在一座废弃的修道院，每当有人死去，时间就会重置，而死亡方式愈发残忍。"
    },
    {
        "title": "小姐干杯!",
        "href": "video/movie-1796.html",
        "cover": "146.jpg",
        "year": "2019",
        "region": "韩国",
        "type": "电影",
        "genre": "喜剧, 剧情, 女性",
        "oneLine": "四名女职员在公司遭受性骚扰和灌酒后，决定每周五晚秘密聚会，用“干杯”对抗整个体制。"
    },
    {
        "title": "青之驱魔师 剧场版",
        "href": "video/movie-1797.html",
        "cover": "147.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "动画 / 动作 / 奇幻",
        "oneLine": "奥村燐被梵蒂冈秘密召回，却发现正十字骑士团内部出现了一个拥有他全部记忆和力量的“完美弟弟”。"
    },
    {
        "title": "不一样的美男子第二季",
        "href": "video/movie-1798.html",
        "cover": "148.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "奇幻, 爱情",
        "oneLine": "第一季结局全员失去超能力后，第二季他们变成了普通人，但一个神秘组织正猎杀“曾经拥有超能力的人”。"
    },
    {
        "title": "在格鲁吉亚寻到爱",
        "href": "video/movie-1799.html",
        "cover": "149.jpg",
        "year": "2022",
        "region": "美国、格鲁吉亚",
        "type": "电影",
        "genre": "爱情、剧情、风光",
        "oneLine": "一位失意的纽约建筑师在第比利斯的老城墙下，用一杯琥珀葡萄酒唤醒了对生活的热情。"
    },
    {
        "title": "我的麻吉4个鬼",
        "href": "video/movie-1800.html",
        "cover": "150.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧， 恐怖， 奇幻",
        "oneLine": "废柴青年撞邪后，竟与四个风格迥异的小鬼组成史上最不靠谱的捉鬼敢死队。"
    },
    {
        "title": "巫术奇观",
        "href": "video/movie-1801.html",
        "cover": "1.jpg",
        "year": "2022",
        "region": "印度",
        "type": "电影",
        "genre": "奇幻 / 喜剧 / 恐怖",
        "oneLine": "一个落魄魔术师被误认为顶级巫师，全村排队求他下咒，而他只会变鸽子。"
    },
    {
        "title": "我亲爱的朋友们",
        "href": "video/movie-1802.html",
        "cover": "2.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "电视剧",
        "genre": "剧情 / 老年 / 生活",
        "oneLine": "四位七十岁的老奶奶突然集体人间蒸发，留给子女们一本日记，上面记录了她们“私奔”去环游世界的疯狂计划。"
    },
    {
        "title": "朱丽娅",
        "href": "video/movie-1803.html",
        "cover": "3.jpg",
        "year": "2025",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚， 剧情",
        "oneLine": "50岁的家庭主妇朱丽娅突然听到脑子里有个年轻女孩在求救，她发现自己患有多重人格，而其中一个“人格”竟是杀人犯。"
    },
    {
        "title": "快乐青春",
        "href": "video/movie-1804.html",
        "cover": "4.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春 / 校园 / 喜剧",
        "oneLine": "一所重点高中的“吊车尾班”里，七个高考无望的少年决定成立“墙缝工作室”，帮同学解决各种奇葩难题。"
    },
    {
        "title": "恋爱教主",
        "href": "video/movie-1805.html",
        "cover": "5.jpg",
        "year": "2020",
        "region": "韩国",
        "type": "剧集",
        "genre": "喜剧 / 爱情 / 校园",
        "oneLine": "恋爱理论满分的母胎SOLO女主，开恋爱讲座却次次实战翻车。"
    },
    {
        "title": "肉食店",
        "href": "video/movie-1806.html",
        "cover": "6.jpg",
        "year": "2025",
        "region": "德国",
        "type": "电影",
        "genre": "惊悚、黑色幽默、犯罪",
        "oneLine": "柏林一家老牌肉食店生意火爆，秘密是祖传秘方里多了一味“特殊调料”，而这个秘方始于1945年。"
    },
    {
        "title": "沉落的黄昏",
        "href": "video/movie-1807.html",
        "cover": "7.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "叛逆的女儿回到故乡，陪伴固执的父亲度过他生命最后一段“沉落的黄昏”。"
    },
    {
        "title": "超能锦衣卫·藏龙秘术",
        "href": "video/movie-1808.html",
        "cover": "8.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 奇幻",
        "oneLine": "明朝末年，三个拥有异能的锦衣卫特务发现，所谓的“神迹”其实是一场针对皇权的阴谋。"
    },
    {
        "title": "惊声尖叫3",
        "href": "video/movie-1809.html",
        "cover": "9.jpg",
        "year": "2000",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 恐怖",
        "oneLine": "鬼脸杀手杀到了好莱坞片场，但这次每个死法都恰好对应着正在拍摄的剧本。"
    },
    {
        "title": "我的人生冒险",
        "href": "video/movie-1810.html",
        "cover": "10.jpg",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "冒险, 剧情",
        "oneLine": "78岁癌症晚期老人逃出医院，骑三轮车重走年轻时横穿美国的路线。"
    },
    {
        "title": "闪亮的马鞍",
        "href": "video/movie-1811.html",
        "cover": "11.jpg",
        "year": "1965",
        "region": "美国",
        "type": "电影",
        "genre": "西部 / 喜剧 / 动作",
        "oneLine": "一个黑人小镇警长，用离谱的舞步和枪法，单挑整个腐败的牛仔镇。"
    },
    {
        "title": "医价之裁",
        "href": "video/movie-1812.html",
        "cover": "12.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情 / 医疗 / 律政",
        "oneLine": "负责国家医保谈判的官员发现，自己全力压价的“救命药”正是多年前放弃治疗父亲的同款药，而制造成本远低于报价。"
    },
    {
        "title": "金滩有缘",
        "href": "video/movie-1813.html",
        "cover": "13.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "都市 / 爱情",
        "oneLine": "在北京混不下去的“废柴”回到北海老家开民宿，遇到了来此疗伤的失意女高管。"
    },
    {
        "title": "生死劫杀1946",
        "href": "video/movie-1814.html",
        "cover": "14.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 黑色电影",
        "oneLine": "1946年上海光复后的第一夜，一名连环杀手模仿日本战犯的手法行凶，而唯一能破案的老刑警刚从集中营出来。"
    },
    {
        "title": "做鬼不会放过你",
        "href": "video/movie-1815.html",
        "cover": "15.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "喜剧, 恐怖, 奇幻",
        "oneLine": "一个社畜死后为了拿回被公司克扣的冥币，变成了最凶的“厉鬼打工人”，在地府搞起了劳动仲裁。"
    },
    {
        "title": "传输失败",
        "href": "video/movie-1816.html",
        "cover": "16.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻，悬疑",
        "oneLine": "程序员在测试意识上传设备时发生故障，他的意识被困在了一个完全混乱、逻辑崩塌的数字炼狱中。"
    },
    {
        "title": "莉莉雯菲",
        "href": "video/movie-1817.html",
        "cover": "17.jpg",
        "year": "2022",
        "region": "法国",
        "type": "电影",
        "genre": "剧情，文艺，爱情",
        "oneLine": "一个患有脸盲症的摄影师，试图通过镜头寻找一个只在梦境中出现的神秘女子。"
    },
    {
        "title": "庇护棕榈树下",
        "href": "video/movie-1818.html",
        "cover": "18.jpg",
        "year": "2025",
        "region": "泰国",
        "type": "剧集",
        "genre": "爱情同性",
        "oneLine": "逃避都市情伤的民宿老板在海边捡到一个失忆的流浪青年，两人在棕榈树下共同拼凑过去与未来。"
    },
    {
        "title": "勾魂慑魄",
        "href": "video/movie-1819.html",
        "cover": "19.jpg",
        "year": "2019",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖，惊悚，悬疑",
        "oneLine": "落魄戏班重演禁戏《勾魂》，每演一场，台下就少一个活人观众。"
    },
    {
        "title": "请来参加我的告别式",
        "href": "video/movie-1820.html",
        "cover": "20.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，家庭，黑色幽默",
        "oneLine": "一位老人决定在死前为自己办一场盛大的告别式，没想到来参加的全是讨债的和私生子。"
    },
    {
        "title": "吉普车中的四人",
        "href": "video/movie-1821.html",
        "cover": "21.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "公路 / 剧情",
        "oneLine": "四个大学死党自驾穿越无人区，第三天他们在后备箱发现了一个不属于他们任何人的背包，里面是两百万现金。"
    },
    {
        "title": "儍瓜艳史",
        "href": "video/movie-1822.html",
        "cover": "22.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 爱情",
        "oneLine": "一个被女友甩了的穷小子，阴差阳错被全城最富有的千金小姐当成了救命恩人。"
    },
    {
        "title": "致命七秒",
        "href": "video/movie-1823.html",
        "cover": "23.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚",
        "oneLine": "特工妻子被绑架，他被告知必须在炸弹爆炸前7秒内作出终极选择，而整个过程被全球直播。"
    },
    {
        "title": "荔枝树下热烈岛",
        "href": "video/movie-1824.html",
        "cover": "24.jpg",
        "year": "2022",
        "region": "中国大陆 / 台湾",
        "type": "电影",
        "genre": "爱情、剧情、青春",
        "oneLine": "失意少女回到南方的荔枝岛，在燥热夏天与两个少年产生了如荔枝般清甜又易腐的感情。"
    },
    {
        "title": "师声对决",
        "href": "video/movie-1825.html",
        "cover": "25.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情，音乐，运动",
        "oneLine": "曾经的金牌合唱团指导老师，因为理念分歧被学生集体“开除”，转而组建一支敌队，要在全国大赛上击败自己的徒弟。"
    },
    {
        "title": "畸形人",
        "href": "video/movie-1826.html",
        "cover": "26.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖，剧情",
        "oneLine": "一群马戏团畸形演员在遭遇外界恶意后，策划了一场血腥而优雅的复仇。"
    },
    {
        "title": "围屋喜事",
        "href": "video/movie-1827.html",
        "cover": "27.jpg",
        "year": "2020",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，家庭",
        "oneLine": "一座百年客家围屋面临拆迁，散落各地的家族后人在最后一个月里齐聚，却掀开了尘封秘密。"
    },
    {
        "title": "神医喜来乐",
        "href": "video/movie-1828.html",
        "cover": "28.jpg",
        "year": "2002",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装, 喜剧, 剧情",
        "oneLine": "清末民间郎中喜来乐用偏方治好了王爷的怪病，却被奸人陷害卷入宫廷斗争，每一集都是斗智斗勇。"
    },
    {
        "title": "爱国者1994",
        "href": "video/movie-1829.html",
        "cover": "29.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 惊悚 / 剧情",
        "oneLine": "1994 年，一个波斯尼亚战争退伍老兵回到美国，发现他被遗弃的祖国比战场更危险。"
    },
    {
        "title": "是谁干的好事。",
        "href": "video/movie-1830.html",
        "cover": "30.jpg",
        "year": "2019",
        "region": "西班牙",
        "type": "剧集",
        "genre": "悬疑, 喜剧, 犯罪",
        "oneLine": "一场富豪寿宴，死者原地复活，凶手……不止一个？全员恶人，笑料百出。"
    },
    {
        "title": "团子大家族第一季",
        "href": "video/movie-1831.html",
        "cover": "31.jpg",
        "year": "2007",
        "region": "日本",
        "type": "动漫",
        "genre": "剧情 / 爱情 / 治愈",
        "oneLine": "问题学生冈崎朋也在樱花坡道上遇见古河渚，一个将“团子大家族”挂在嘴边的女孩，从此他的灰色人生被慢慢填满。"
    },
    {
        "title": "茉迪的彩色小屋",
        "href": "video/movie-1832.html",
        "cover": "32.jpg",
        "year": "2023",
        "region": "加拿大",
        "type": "电影",
        "genre": "剧情 / 传记",
        "oneLine": "患有风湿病的残疾女画家，用泼洒在小屋上的颜料，治癒了暴躁渔夫的孤独灵魂。"
    },
    {
        "title": "棒坛风云录",
        "href": "video/movie-1833.html",
        "cover": "33.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "运动、剧情",
        "oneLine": "1980年代，一支台湾偏远小学的棒球队，用捡来的树枝和石头当球棒，打进了全国决赛。"
    },
    {
        "title": "一呼一吸",
        "href": "video/movie-1834.html",
        "cover": "34.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "剧情， 灾难， 家庭",
        "oneLine": "塌方被困海底隧道碎石缝中的一家三口，必须通过控制呼吸频率来延缓氧气消耗，等待未知的救援。"
    },
    {
        "title": "未来学大会",
        "href": "video/movie-1835.html",
        "cover": "35.jpg",
        "year": "2024",
        "region": "波兰",
        "type": "电影",
        "genre": "科幻",
        "oneLine": "全球顶尖学者被关进一座豪华酒店参加“未来学大会”，却发现自己的意识正在被秘密上传。"
    },
    {
        "title": "爱在度假屋",
        "href": "video/movie-1836.html",
        "cover": "36.jpg",
        "year": "2019",
        "region": "法国",
        "type": "电影",
        "genre": "爱情，喜剧，剧情",
        "oneLine": "离婚女医生在爱尔兰海边民宿预定了“疗愈之旅”，却被告知必须与一个暴躁的乐评人共享整栋房子。"
    },
    {
        "title": "爱情春天",
        "href": "video/movie-1837.html",
        "cover": "37.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电视剧",
        "genre": "爱情，治愈",
        "oneLine": "一名失忆的钢琴家被送到乡下园艺疗愈院，在照料花草的过程中，她找回了遗落的爱情记忆。"
    },
    {
        "title": "荒野重生",
        "href": "video/movie-1838.html",
        "cover": "38.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "冒险，生存，灾难",
        "oneLine": "一架客机坠毁在羌塘无人区，幸存者发现比饥饿和野兽更可怕的，是同行者心中的恶。"
    },
    {
        "title": "成龙历险记第二季",
        "href": "video/movie-1839.html",
        "cover": "39.jpg",
        "year": "2025",
        "region": "美国/中国大陆",
        "type": "动画剧集",
        "genre": "冒险/动作",
        "oneLine": "老爹的魔法古董店被全世界最危险的黑客入侵，十二符咒的数字版正在被批量复制。"
    },
    {
        "title": "你的口袋藏把枪",
        "href": "video/movie-1840.html",
        "cover": "40.jpg",
        "year": "2025",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 惊悚",
        "oneLine": "一所实行“微笑严格”管理的模范中学里，优等生少年在口袋里藏了一把枪，他的目标不是同学，而是老师。"
    },
    {
        "title": "大春潮",
        "href": "video/movie-1841.html",
        "cover": "41.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情、历史、家庭",
        "oneLine": "1998年东北老工业基地，一个即将下岗的父亲，为了保住儿子进厂的名额，决定做最后一搏。"
    },
    {
        "title": "妻子的浪漫旅行2025",
        "href": "video/movie-1842.html",
        "cover": "42.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀, 旅行, 情感",
        "oneLine": "四位明星妻子开启跨星际旅行，在火星基地的极端环境下，重新审视婚姻与自我。"
    },
    {
        "title": "红色天空",
        "href": "video/movie-1843.html",
        "cover": "43.jpg",
        "year": "2023",
        "region": "德国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "一个傲慢的文艺青年被困在森林火灾隔离区，他的小说构思不断被现实打断，直到天空被烧成红色。"
    },
    {
        "title": "黄昏少女×失忆",
        "href": "video/movie-1844.html",
        "cover": "44.jpg",
        "year": "2012",
        "region": "日本",
        "type": "动画剧集",
        "genre": "悬疑 / 恐怖 / 校园 / 恋爱",
        "oneLine": "私立诚教学部的旧校舍里，只有他能看见那个穿昭和校服的少女——她忘了自己是怎么死的。"
    },
    {
        "title": "神秘的古庙",
        "href": "video/movie-1845.html",
        "cover": "45.jpg",
        "year": "2023",
        "region": "泰国 / 中国大陆",
        "type": "电影",
        "genre": "悬疑 / 恐怖",
        "oneLine": "一支考古队进入雨林古庙，发现壁画上的诡异仪式正在每晚逐一应验。"
    },
    {
        "title": "红蛇",
        "href": "video/movie-1846.html",
        "cover": "46.jpg",
        "year": "2025",
        "region": "意大利",
        "type": "电影",
        "genre": "惊悚，悬疑，犯罪",
        "oneLine": "一个为了给妹妹报仇而潜入黑帮的女警，在她的卧底身份“红蛇”纹身上，每一道纹路都是一条人命。"
    },
    {
        "title": "血腥玛罗琳",
        "href": "video/movie-1847.html",
        "cover": "47.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "网红在直播中召唤血腥玛丽，却招来了以残杀霸凌者为乐的复刻画灵“玛罗琳”。"
    },
    {
        "title": "酸臭之屋",
        "href": "video/movie-1848.html",
        "cover": "48.jpg",
        "year": "2024",
        "region": "英国",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 恐怖",
        "oneLine": "伦敦合租屋的霉菌长成了会说话的怪物，逼着四个穷青年正视他们腐烂的生活。"
    },
    {
        "title": "深锁春光一院愁",
        "href": "video/movie-1849.html",
        "cover": "49.jpg",
        "year": "2026",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情/家庭",
        "oneLine": "一座百年老宅里，寡居多年的祖母在寿宴上宣布将房产平分给三个子女，不料引发了一场持续整个夏天的家庭战争。"
    },
    {
        "title": "我回来了",
        "href": "video/movie-1850.html",
        "cover": "50.jpg",
        "year": "2026",
        "region": "韩国",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "oneLine": "失踪七年的哥哥突然回家，妹妹发现他的记忆全部来自另一个宇宙中被杀害的自己。"
    },
    {
        "title": "猛鬼街",
        "href": "video/movie-1851.html",
        "cover": "51.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 惊悚",
        "oneLine": "经典重启，弗莱迪通过社交媒体的“睡眠挑战”再次入侵青少年的梦境。"
    },
    {
        "title": "千里送鹤",
        "href": "video/movie-1852.html",
        "cover": "52.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 家庭",
        "oneLine": "一个沉默的父亲和叛逆的儿子，开车跨越千里，送一只受伤的丹顶鹤越冬。"
    },
    {
        "title": "熊出没逆转时空",
        "href": "video/movie-1853.html",
        "cover": "53.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "喜剧 / 科幻 / 冒险",
        "oneLine": "光头强意外获得穿越手表，试图回到过去阻止自己砍树，却差点让熊大熊二从历史上消失。"
    },
    {
        "title": "黑色树海",
        "href": "video/movie-1854.html",
        "cover": "54.jpg",
        "year": "2013",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 惊悚",
        "oneLine": "青木原树海深处，一个自称“向导”的男人专门带想死的人“走最后一程”，但客人总在失踪。"
    },
    {
        "title": "六人行：当我们又在一起",
        "href": "video/movie-1855.html",
        "cover": "55.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影/特别篇",
        "genre": "喜剧， 剧情",
        "oneLine": "20年后，莫妮卡的那间紫色公寓面临拆迁，六位老友为此最后一次重聚在纽约。"
    },
    {
        "title": "布莱恩的一生",
        "href": "video/movie-1856.html",
        "cover": "56.jpg",
        "year": "1979",
        "region": "英国",
        "type": "电影",
        "genre": "喜剧 / 历史 / 讽刺",
        "oneLine": "一个普通犹太人被误认为是弥赛亚，引发了一系列荒诞闹剧。"
    },
    {
        "title": "死路寻死",
        "href": "video/movie-1857.html",
        "cover": "57.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑，惊悚",
        "oneLine": "一个想自杀的男人，发现自己每一次寻死都会意外带走一条无辜的生命，陷入了无尽的赎罪循环。"
    },
    {
        "title": "霸王大系龙骑士",
        "href": "video/movie-1858.html",
        "cover": "58.jpg",
        "year": "2024",
        "region": "日本",
        "type": "动画",
        "genre": "奇幻,冒险",
        "oneLine": "废柴高中生穿越到龙与骑士的世界，却发现最强的武器不是剑，而是他手机里那款过时的养殖类手游。"
    },
    {
        "title": "新宿事件",
        "href": "video/movie-1859.html",
        "cover": "59.jpg",
        "year": "2009",
        "region": "中国香港 / 日本",
        "type": "电影",
        "genre": "犯罪 / 剧情 / 动作",
        "oneLine": "一名偷渡到日本的东北工人，如何在八年内成为新宿最大华人黑帮老大。"
    },
    {
        "title": "南北战争真实故事",
        "href": "video/movie-1860.html",
        "cover": "60.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "历史 / 战争 / 剧情",
        "oneLine": "基于 57 本真实士兵日记改编，没有英雄，只有 1862 年寒冷泥泞的战场与等不到的信。"
    },
    {
        "title": "说谎的女人",
        "href": "video/movie-1861.html",
        "cover": "61.jpg",
        "year": "2024",
        "region": "法国 / 意大利",
        "type": "电影",
        "genre": "剧情 / 悬疑",
        "oneLine": "丈夫失踪后，妻子在警察面前讲述了三个版本的爱情故事，每一个都完美，但只有一个是真的。"
    },
    {
        "title": "春光灿烂猪八戒2000",
        "href": "video/movie-1862.html",
        "cover": "62.jpg",
        "year": "2000",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "奇幻 / 喜剧 / 古装",
        "oneLine": "一心只想当人的猪妖，意外吞下龙珠，成了龙族公主的“活命药引”。"
    },
    {
        "title": "军中剧盗",
        "href": "video/movie-1863.html",
        "cover": "63.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作，喜剧，犯罪",
        "oneLine": "飞虎队卧底潜入盗匪集团，却发现整支军队都在偷偷做贼。"
    },
    {
        "title": "房子",
        "href": "video/movie-1864.html",
        "cover": "64.jpg",
        "year": "2023",
        "region": "英国",
        "type": "电影",
        "genre": "惊悚, 心理",
        "oneLine": "一对年轻夫妇以难以拒绝的低价买下一栋豪宅，入住后才发现，房子会“记住”每一任主人的秘密。"
    },
    {
        "title": "杀人小说",
        "href": "video/movie-1865.html",
        "cover": "65.jpg",
        "year": "2018",
        "region": "韩国",
        "type": "电影",
        "genre": "悬疑, 犯罪, 惊悚",
        "oneLine": "当红作家的惊悚小说连载到第7章，现实中出现了完全相同的完美谋杀。"
    },
    {
        "title": "纠缠",
        "href": "video/movie-1866.html",
        "cover": "66.jpg",
        "year": "2020",
        "region": "日本",
        "type": "电影",
        "genre": "爱情, 科幻",
        "oneLine": "丈夫去世后的第七天，妻子发现只要一闭上眼睛，就会“穿越”回两人吵得最凶的那一天。"
    },
    {
        "title": "过来抱抱我国语",
        "href": "video/movie-1867.html",
        "cover": "67.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "爱情 / 悬疑 / 治愈",
        "oneLine": "她是当红女明星，他是警察；她的父母被连环杀手杀害，而那个杀手，正是他的父亲。"
    },
    {
        "title": "德黑兰魅影",
        "href": "video/movie-1868.html",
        "cover": "68.jpg",
        "year": "2024",
        "region": "伊朗",
        "type": "电影",
        "genre": "悬疑 / 剧情",
        "oneLine": "德黑兰一名女剪辑师收到匿名胶片，内容是一名女性被处决的画面，而她认出死者是“自己”。"
    },
    {
        "title": "大护法",
        "href": "video/movie-1869.html",
        "cover": "69.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "动画电影",
        "genre": "奇幻、动作、悬疑",
        "oneLine": "续集中，大护法为寻找失踪的太子，闯入一个用“思想钢印”控制民众的空中城市。"
    },
    {
        "title": "小小恋歌（电影）",
        "href": "video/movie-1870.html",
        "cover": "70.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "音乐 / 青春",
        "oneLine": "冲绳高中生乐队主唱因车祸去世，同伴们带着他写的最后一首情歌，跨越千里送给他暗恋的台湾女孩。"
    },
    {
        "title": "凛冬兄弟",
        "href": "video/movie-1871.html",
        "cover": "71.jpg",
        "year": "2024",
        "region": "挪威",
        "type": "剧集",
        "genre": "剧情, 犯罪",
        "oneLine": "极夜之下，两兄弟意外劫持一辆黑帮运钞车，却发现自己中了更庞大的陷阱。"
    },
    {
        "title": "母与子",
        "href": "video/movie-1872.html",
        "cover": "72.jpg",
        "year": "2018",
        "region": "伊朗",
        "type": "电影",
        "genre": "剧情， 家庭",
        "oneLine": "一个叛逆的摇滚青年被迫回到严格穆斯林家庭，照顾患癌的母亲。"
    },
    {
        "title": "宠物英雄",
        "href": "video/movie-1873.html",
        "cover": "73.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动画, 冒险",
        "oneLine": "当主人遇险时，一只被主人嫌弃胆小的吉娃娃，必须带领一群“不靠谱”的宠物去救援。"
    },
    {
        "title": "意大利万岁！",
        "href": "video/movie-1874.html",
        "cover": "74.jpg",
        "year": "2024",
        "region": "意大利",
        "type": "电影",
        "genre": "喜剧, 历史",
        "oneLine": "一个失败的话剧导演，竟阴差阳错地成了复兴意大利民族精神的“英雄”。"
    },
    {
        "title": "睡梦医生",
        "href": "video/movie-1875.html",
        "cover": "75.jpg",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "恐怖 / 奇幻 / 惊悚",
        "oneLine": "当年《闪灵》里幸存的小男孩丹尼已经长大，他必须保护一个拥有更强“闪灵”能力的女孩。"
    },
    {
        "title": "他们可能是巨人",
        "href": "video/movie-1876.html",
        "cover": "76.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "悬疑 / 奇幻 / 冒险",
        "oneLine": "三个小孩坚信下水道里住着巨人，直到某天他们真的挖出了一具三米高的骨架，而市政厅却想尽办法掩盖此事。"
    },
    {
        "title": "绝对之爱",
        "href": "video/movie-1877.html",
        "cover": "77.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "爱情, 剧情",
        "oneLine": "一位罹患渐冻症的女哲学家，决定在彻底失去语言能力之前，最后一次向她的丈夫证明“什么是绝对的爱”。"
    },
    {
        "title": "收山",
        "href": "video/movie-1878.html",
        "cover": "78.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "黑帮剧情",
        "oneLine": "社团最狠的杀手决定金盆洗手，却发现“收山”的唯一条件是杀死自己最好的兄弟。"
    },
    {
        "title": "卡车司机之歌",
        "href": "video/movie-1879.html",
        "cover": "79.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，音乐",
        "oneLine": "一个被生活压得喘不过气的长途卡车司机，在狭小的驾驶室里，用唱歌找回了自己。"
    },
    {
        "title": "魔幻迷宫",
        "href": "video/movie-1880.html",
        "cover": "80.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻冒险",
        "oneLine": "少女为救误入迷宫的弟弟，必须在月升之前破解一座会呼吸的魔法迷宫。"
    },
    {
        "title": "传奇皇帝朱元璋",
        "href": "video/movie-1881.html",
        "cover": "81.jpg",
        "year": "2006",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "历史 / 传记 / 古装",
        "oneLine": "从乞丐到皇帝，从放牛娃到开国君主，一个草根的逆袭背后，是满手兄弟的血和一张无法安睡的龙床。"
    },
    {
        "title": "师兄啊师兄",
        "href": "video/movie-1882.html",
        "cover": "82.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "喜剧, 仙侠",
        "oneLine": "废柴师兄靠着一本《靠谱师兄修炼手册》，阴差阳错成为修仙界第一团宠。"
    },
    {
        "title": "关键奇迹",
        "href": "video/movie-1883.html",
        "cover": "83.jpg",
        "year": "2028",
        "region": "中国大陆",
        "type": "电影",
        "genre": "科幻 / 冒险",
        "oneLine": "一场量子实验爆炸后，全世界只有一个人记得“昨天”，其他人都被困在了永恒的“今天”。"
    },
    {
        "title": "以你为名的青春",
        "href": "video/movie-1884.html",
        "cover": "84.jpg",
        "year": "2018",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "爱情",
        "oneLine": "30岁的职场女强人收到一封高中同学会邀请函，被迫回忆起那段以“捣蛋鬼”命名的混乱青春。"
    },
    {
        "title": "万能强人",
        "href": "video/movie-1885.html",
        "cover": "85.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电视剧",
        "genre": "动作 / 犯罪",
        "oneLine": "警方卧底变成黑帮二把手后，发现真正的幕后黑手竟是自己的警察上司。"
    },
    {
        "title": "到不了的地方",
        "href": "video/movie-1886.html",
        "cover": "86.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "电影",
        "genre": "奇幻, 剧情",
        "oneLine": "儿子开着父亲的出租车，接到的每一位乘客都是父亲未曾说出口的遗憾。"
    },
    {
        "title": "儿女传奇之选美",
        "href": "video/movie-1887.html",
        "cover": "87.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "电视剧（单元剧）",
        "genre": "剧情，家庭，悬疑",
        "oneLine": "姐姐为救妹妹参加黑幕选美，却发现评委正是当年毁掉她们家庭的仇人。"
    },
    {
        "title": "馨海蝶",
        "href": "video/movie-1888.html",
        "cover": "88.jpg",
        "year": "2015",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情，悬疑",
        "oneLine": "心理医生在治疗一名声称能看到“蝴蝶预言”的女病人时，发现自己居然是她预言的杀人凶手。"
    },
    {
        "title": "百年长安",
        "href": "video/movie-1889.html",
        "cover": "89.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "历史, 年代, 家族",
        "oneLine": "从清末到改革开放，西安一家药铺的百年沉浮，见证民族商业的兴衰荣辱。"
    },
    {
        "title": "超国度",
        "href": "video/movie-1890.html",
        "cover": "90.jpg",
        "year": "2024",
        "region": "美国 / 英国",
        "type": "剧集",
        "genre": "科幻, 悬疑",
        "oneLine": "一个能让富豪“移民”到完美平行世界的公司曝光了，但所有“移民者”其实都已被杀害。"
    },
    {
        "title": "柳营春色",
        "href": "video/movie-1891.html",
        "cover": "91.jpg",
        "year": "2023",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "剧情， 同性， 军营",
        "oneLine": "在2000年代初严守“反泄露政策”的军队里，两名新兵在高压的军旅生活中，发展出了一段无法言说的暧昧情愫。"
    },
    {
        "title": "衰鬼刑警",
        "href": "video/movie-1892.html",
        "cover": "92.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 动作",
        "oneLine": "一个被开除的废柴警察自杀失败，发现自己从此能看见鬼魂，还被一群逗比鬼魂逼着去破案。"
    },
    {
        "title": "冰魔",
        "href": "video/movie-1893.html",
        "cover": "93.jpg",
        "year": "2024",
        "region": "挪威",
        "type": "电影",
        "genre": "冒险奇幻",
        "oneLine": "一支极地探险队在冰川深处凿开了冰封千年的维京古墓，释放出以“绝对零度”为食的上古冰魔。"
    },
    {
        "title": "柘榴坂的复仇",
        "href": "video/movie-1894.html",
        "cover": "94.jpg",
        "year": "2018",
        "region": "日本",
        "type": "电影",
        "genre": "动作, 剧情, 历史",
        "oneLine": "幕末的武士为藩主复仇，苦寻仇家十六年，终于找到时，仇人竟已是个痴傻的乞丐。"
    },
    {
        "title": "爱在旭日初升时",
        "href": "video/movie-1895.html",
        "cover": "95.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情、剧情",
        "oneLine": "身患绝症的女孩与失意摄影师约定：陪她看遍世界100次日落，但最后一程必须是日出。"
    },
    {
        "title": "商魂",
        "href": "video/movie-1896.html",
        "cover": "96.jpg",
        "year": "2012",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "剧情, 历史, 商战",
        "oneLine": "一场涉及数千名工人命运的股权博弈，将在兄弟阋墙中揭开四十年的商业恩怨。"
    },
    {
        "title": "监狱风云之终身犯",
        "href": "video/movie-1897.html",
        "cover": "97.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "动作 / 犯罪 / 剧情",
        "oneLine": "一位卧底警察主动犯下重罪入狱，却发现要抓捕的黑帮老大正是二十年前送他进警校的恩人。"
    },
    {
        "title": "山炮贼中贼",
        "href": "video/movie-1898.html",
        "cover": "98.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "网络电影",
        "genre": "喜剧 / 犯罪",
        "oneLine": "两个笨贼偷了贼王偷来的宝石，引发了三伙人马在洗浴中心的疯狂混战。"
    },
    {
        "title": "熊出没注意",
        "href": "video/movie-1899.html",
        "cover": "99.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 冒险",
        "oneLine": "一名马虎的护林员与一头会“碰瓷”的棕熊，联手对付一伙偷猎者的爆笑公路追击。"
    },
    {
        "title": "痴男淑女",
        "href": "video/movie-1900.html",
        "cover": "100.jpg",
        "year": "1997",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧, 爱情",
        "oneLine": "一个街头混混与大家闺秀被迫同居，鸡飞狗跳的生活中却擦出了真爱的火花。"
    },
    {
        "title": "铁火雄风",
        "href": "video/movie-1901.html",
        "cover": "101.jpg",
        "year": "2026",
        "region": "香港",
        "type": "电影",
        "genre": "黑帮动作",
        "oneLine": "拳王被打断双腿装上铁质义肢后，用钢板残腿踢爆了整个黑帮。"
    },
    {
        "title": "万花迎春",
        "href": "video/movie-1902.html",
        "cover": "102.jpg",
        "year": "2025",
        "region": "中国香港",
        "type": "电影",
        "genre": "歌舞, 爱情, 贺岁",
        "oneLine": "过气歌舞片导演为还债接拍春晚式贺岁秀，台前幕后皆是一台鸡飞狗跳的戏。"
    },
    {
        "title": "鬼谷神珠",
        "href": "video/movie-1903.html",
        "cover": "103.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "奇幻 / 动作 / 古装",
        "oneLine": "鬼谷子遗留下三颗能开天辟地的神珠，千年来，得珠者得天下，也必遭天谴。"
    },
    {
        "title": "摇滚藏獒：蓝色光芒",
        "href": "video/movie-1904.html",
        "cover": "104.jpg",
        "year": "2021",
        "region": "美国 / 中国大陆",
        "type": "电影",
        "genre": "动画, 音乐",
        "oneLine": "藏獒波弟带着他的蓝色吉他，与伙伴组乐队参加摇滚大赛，对抗资本恶势力。"
    },
    {
        "title": "谁按了删除键",
        "href": "video/movie-1905.html",
        "cover": "105.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑、科幻",
        "oneLine": "一家公司提供“痛苦记忆删除”服务，然而客户们在删除记忆后，却开始莫名卷入一起谋杀案。"
    },
    {
        "title": "夺宝生死战",
        "href": "video/movie-1906.html",
        "cover": "106.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 冒险",
        "oneLine": "退役特种兵与女考古学家联手寻找消失的“亚历山大宝藏”，却发现这个秘密被写在一张会在48小时后自毁的羊皮卷上。"
    },
    {
        "title": "梅花公馆",
        "href": "video/movie-1907.html",
        "cover": "107.jpg",
        "year": "1995",
        "region": "中国香港",
        "type": "电影",
        "genre": "悬疑， 惊悚",
        "oneLine": "梅花公馆每隔十年必失踪一人，今年轮到了刚继承遗产的孙女。"
    },
    {
        "title": "攻壳机动队第一季",
        "href": "video/movie-1908.html",
        "cover": "108.jpg",
        "year": "2002",
        "region": "日本",
        "type": "动画剧集",
        "genre": "科幻 / 犯罪 / 哲学",
        "oneLine": "公元2030年，义体人与AI成为常态，公安九课的少佐追查神秘黑客“笑面男”，却挖出了政府最不愿面对的真相。"
    },
    {
        "title": "让爱化作珍珠雨",
        "href": "video/movie-1909.html",
        "cover": "109.jpg",
        "year": "2024",
        "region": "中国台湾 / 中国大陆",
        "type": "剧集",
        "genre": "爱情 / 剧情 / 家庭",
        "oneLine": "珍珠养殖场继承人意外失忆后，竟爱上了当年被她家逼死的渔村少年的亲弟弟。"
    },
    {
        "title": "空白世代",
        "href": "video/movie-1910.html",
        "cover": "110.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "青春 / 悬疑",
        "oneLine": "五个大学好友毕业后失联，十年后重聚，发现各自的记忆里都少了一个人。"
    },
    {
        "title": "蓝色汽车",
        "href": "video/movie-1911.html",
        "cover": "111.jpg",
        "year": "2015",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "剧情, 悬疑",
        "oneLine": "苏联解体后，儿子在父亲遗物中找到一辆蓝色汽车模型，模型里藏着一段冷战时期的秘密录音。"
    },
    {
        "title": "聪明的驴子",
        "href": "video/movie-1912.html",
        "cover": "112.jpg",
        "year": "2019",
        "region": "法国 / 比利时",
        "type": "电影",
        "genre": "剧情 / 喜剧 / 家庭",
        "oneLine": "一头不能再干活的驴子被送往各地寄养，它静静地观察人类，用沉默戳穿他们的伪装。"
    },
    {
        "title": "噗噗共鲜师2",
        "href": "video/movie-1913.html",
        "cover": "113.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "剧集",
        "genre": "喜剧，教育",
        "oneLine": "上一季的放屁老师陈噗噗退休后，竟被返聘去教一群老年学生使用智能手机。"
    },
    {
        "title": "洛纳杜恩",
        "href": "video/movie-1914.html",
        "cover": "114.jpg",
        "year": "2026",
        "region": "爱尔兰",
        "type": "电影",
        "genre": "悬疑",
        "oneLine": "考古学家在爱尔兰著名的“闹鬼悬崖”洛纳杜恩发现了一具千年前的尸体，尸体的手中握着一张写着今天日期的羊皮纸。"
    },
    {
        "title": "寻找蛙人",
        "href": "video/movie-1915.html",
        "cover": "115.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "悬疑 / 犯罪 / 剧情",
        "oneLine": "潜水教练的弟弟在执行秘密任务时失踪，他潜入海底军事禁区，发现真相比深渊更黑暗。"
    },
    {
        "title": "心动的信号第四季",
        "href": "video/movie-1916.html",
        "cover": "116.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "综艺",
        "genre": "真人秀， 爱情",
        "oneLine": "本季六位素人共处一栋“信号小屋”，在观察室的明星嘉宾推理下，展开一场关于心动与选择的夏季恋曲。"
    },
    {
        "title": "阿姆斯壮谎言",
        "href": "video/movie-1917.html",
        "cover": "117.jpg",
        "year": "2015",
        "region": "美国",
        "type": "电影",
        "genre": "传记, 剧情, 运动",
        "oneLine": "抗癌英雄、环法七冠王阿姆斯壮的光辉神话下，是长达十几年的系统性欺骗与操控。"
    },
    {
        "title": "八百万种死法",
        "href": "video/movie-1918.html",
        "cover": "118.jpg",
        "year": "2025",
        "region": "美国",
        "type": "剧集",
        "genre": "悬疑, 犯罪",
        "oneLine": "纽约城有八百万种死法，私家侦探马修每天醒来都在查一种新的死法。"
    },
    {
        "title": "吸血莱恩2：解放",
        "href": "video/movie-1919.html",
        "cover": "119.jpg",
        "year": "2007",
        "region": "美国",
        "type": "电影",
        "genre": "动作，恐怖，奇幻",
        "oneLine": "半吸血鬼莱恩必须解放被超自然教团统治的新奥尔良，却发现自己要猎杀的最后目标是曾经的战友。"
    },
    {
        "title": "学会驾驶",
        "href": "video/movie-1920.html",
        "cover": "120.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧 / 剧情",
        "oneLine": "驾校教练老马遇上史上最难缠学员——一位患有路怒症的心理学女教授，两人在车里展开了一场场人性博弈。"
    },
    {
        "title": "玉女相思",
        "href": "video/movie-1921.html",
        "cover": "121.jpg",
        "year": "1968",
        "region": "中国香港",
        "type": "电影",
        "genre": "戏曲 / 爱情",
        "oneLine": "富家才女与寒门书生一见钟情，却因门第之见和奸人陷害，最终双双殉情化蝶。"
    },
    {
        "title": "下一层",
        "href": "video/movie-1922.html",
        "cover": "122.jpg",
        "year": "2024",
        "region": "加拿大",
        "type": "电影",
        "genre": "科幻、悬疑、惊悚",
        "oneLine": "一部永远向下的电梯，11层乘客拥有不同的社会地位，每下一层都面临更恐怖的考验。"
    },
    {
        "title": "找新娘",
        "href": "video/movie-1923.html",
        "cover": "123.jpg",
        "year": "2025",
        "region": "印度",
        "type": "电影",
        "genre": "喜剧, 爱情, 歌舞",
        "oneLine": "新郎在婚礼上发现新娘逃婚，为保住家族颜面，他必须在一小时内找到一位愿意顶替的“临时新娘”。"
    },
    {
        "title": "家师父一体第二季",
        "href": "video/movie-1924.html",
        "cover": "124.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "综艺",
        "genre": "真人秀, 生活",
        "oneLine": "四位不同世代的男明星住进“师父”家里，24小时同吃同住，但每位师父都有一个隐藏的秘密身份。"
    },
    {
        "title": "性病态心理学",
        "href": "video/movie-1925.html",
        "cover": "125.jpg",
        "year": "2029",
        "region": "欧洲（多国合拍）",
        "type": "剧集",
        "genre": "犯罪 / 心理 / 惊悚 / 医学",
        "oneLine": "一个患有“共情障碍”的女法医精神病学家，专攻性犯罪侧写，却发现自己爱上了正在追踪的连环强奸犯。"
    },
    {
        "title": "恶魔印记",
        "href": "video/movie-1926.html",
        "cover": "126.jpg",
        "year": "2024",
        "region": "韩国",
        "type": "电影",
        "genre": "恐怖悬疑",
        "oneLine": "神父在一具尸体上发现了七种不同的恶魔印记，其中一种来自未出生者。"
    },
    {
        "title": "1938年的时尚",
        "href": "video/movie-1927.html",
        "cover": "127.jpg",
        "year": "2024",
        "region": "法国 / 德国",
        "type": "电影",
        "genre": "剧情 / 战争 / 历史",
        "oneLine": "巴黎沦陷期，一位裁缝店女老板为了生存给纳粹军官做衣服，却把情报缝进了裙摆的花纹里。"
    },
    {
        "title": "群山",
        "href": "video/movie-1928.html",
        "cover": "128.jpg",
        "year": "2027",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 家庭",
        "oneLine": "父亲去世后，叛逆的少年独自走进群山，寻找传说中能见到逝者的古老山谷。"
    },
    {
        "title": "钓鱼迷日记5",
        "href": "video/movie-1929.html",
        "cover": "129.jpg",
        "year": "2024",
        "region": "日本",
        "type": "电影",
        "genre": "剧情 / 生活",
        "oneLine": "退休老人钓鱼时意外钓上一个神秘漂流瓶，里面藏着一段关于战后遗孤的往事。"
    },
    {
        "title": "福祸双至",
        "href": "video/movie-1930.html",
        "cover": "130.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情, 悬疑, 黑色幽默",
        "oneLine": "一张中奖彩票让一对失散的双胞胎重逢，却也引来了一连串杀身之祸。"
    },
    {
        "title": "宝石迷踪",
        "href": "video/movie-1931.html",
        "cover": "131.jpg",
        "year": "2021",
        "region": "英国",
        "type": "电影",
        "genre": "悬疑 / 犯罪",
        "oneLine": "一颗价值连城的古埃及宝石在展览途中消失，所有接触过它的人都有完美不在场证明。"
    },
    {
        "title": "奇妙王国之魔法奇缘",
        "href": "video/movie-1932.html",
        "cover": "132.jpg",
        "year": "2026",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动画 / 奇幻 / 冒险",
        "oneLine": "一个不会魔法的公主，必须用“理科知识”破解灭国诅咒。"
    },
    {
        "title": "凤凰号",
        "href": "video/movie-1933.html",
        "cover": "133.jpg",
        "year": "2022",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪 / 动作 / 江湖",
        "oneLine": "曾经的飞车党头目出狱后，发现弟弟成了仇家的死士，他必须重驾“凤凰号”救人。"
    },
    {
        "title": "之后5",
        "href": "video/movie-1934.html",
        "cover": "134.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "爱情 / 剧情 / 青春",
        "oneLine": "在经历了背叛与分离五年后，泰莎和哈丁因为一本未出版的手稿再次相遇，被迫直面他们从未真正结束的感情。"
    },
    {
        "title": "残酷的复仇",
        "href": "video/movie-1935.html",
        "cover": "135.jpg",
        "year": "2025",
        "region": "韩国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 惊悚",
        "oneLine": "为了给妹妹报仇，前特种兵故意输掉地下拳赛，让自己被卖进那座不为人知的“器官农场”。"
    },
    {
        "title": "燃点",
        "href": "video/movie-1936.html",
        "cover": "136.jpg",
        "year": "2019",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情，运动，青春",
        "oneLine": "一个叛逆的自行车天才，一个退役的失意车手，父子两人要在环湖赛上联手击败不败神话。"
    },
    {
        "title": "我想和你好好的",
        "href": "video/movie-1937.html",
        "cover": "137.jpg",
        "year": "2013",
        "region": "中国大陆",
        "type": "电影",
        "genre": "爱情、剧情、都市",
        "oneLine": "他们相爱的时候天雷地火，吵架的时候天崩地裂，分手那天却格外平静。"
    },
    {
        "title": "美丽新世界",
        "href": "video/movie-1938.html",
        "cover": "138.jpg",
        "year": "2026",
        "region": "美国 / 英国",
        "type": "电视剧",
        "genre": "科幻 / 反乌托邦 / 剧情",
        "oneLine": "在基因决定阶级的未来，一个“废品级”女孩偶然拥有了“完美级”大脑。"
    },
    {
        "title": "贫民区牛仔",
        "href": "video/movie-1939.html",
        "cover": "139.jpg",
        "year": "2024",
        "region": "美国",
        "type": "电影",
        "genre": "剧情运动",
        "oneLine": "费城黑人少年闯入白人马术俱乐部，用街头骑术赢了全场。"
    },
    {
        "title": "芭比姊妹保姆大冒险",
        "href": "video/movie-1940.html",
        "cover": "140.jpg",
        "year": "2015",
        "region": "美国",
        "type": "电影/动画",
        "genre": "动画、家庭、冒险",
        "oneLine": "芭比和她的妹妹们受托照顾七个吵闹的小宝宝，却意外发现豪宅里藏着魔法动物园。"
    },
    {
        "title": "布道家",
        "href": "video/movie-1941.html",
        "cover": "141.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 宗教",
        "oneLine": "一个破产的电视布道家为了筹钱还债，假装见到了圣母玛利亚，结果圣母真的出现了。"
    },
    {
        "title": "保福之枪",
        "href": "video/movie-1942.html",
        "cover": "142.jpg",
        "year": "2024",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 历史 / 战争",
        "oneLine": "雾社事件后，一把猎枪被藏在山洞里，四代人等了八十年才把它取出。"
    },
    {
        "title": "天后之战",
        "href": "video/movie-1943.html",
        "cover": "143.jpg",
        "year": "2019",
        "region": "美国",
        "type": "电影",
        "genre": "音乐， 剧情， 传记",
        "oneLine": "一对参加歌唱比赛的亲姐妹，因制作人挑拨反目成仇，最终在总决赛舞台用歌声撕碎阴谋。"
    },
    {
        "title": "夏日春情",
        "href": "video/movie-1944.html",
        "cover": "144.jpg",
        "year": "1959",
        "region": "美国",
        "type": "电影",
        "genre": "剧情 / 爱情",
        "oneLine": "1950年代美国南方小镇，炎热夏天里，一个陌生人的到来搅动了所有人的欲望和秘密。"
    },
    {
        "title": "逃离地球",
        "href": "video/movie-1945.html",
        "cover": "145.jpg",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "科幻, 冒险, 动作",
        "oneLine": "地球毁灭前最后一艘方舟只能带走一万人，负责抽签的工程师父亲发现，儿子竟是地下黑市的“船票贩子”。"
    },
    {
        "title": "恋爱留学生",
        "href": "video/movie-1946.html",
        "cover": "146.jpg",
        "year": "2024",
        "region": "中国",
        "type": "剧集",
        "genre": "爱情, 喜剧",
        "oneLine": "四个中国留学生在东京的合租生活，爱情像论文一样令人头秃。"
    },
    {
        "title": "读心探案",
        "href": "video/movie-1947.html",
        "cover": "147.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "悬疑心理",
        "oneLine": "沉默寡言的女心理学家能通过微表情读取人心，但当她面对一个没有任何表情的“无脸杀手”时，第一次感到恐惧。"
    },
    {
        "title": "死吻",
        "href": "video/movie-1948.html",
        "cover": "148.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 悬疑",
        "oneLine": "一个专杀连环杀手的女人，在某次任务中吻了目标，却发现自己吻上的是失散多年的亲哥哥。"
    },
    {
        "title": "饥饿游戏3:嘲笑鸟",
        "href": "video/movie-1949.html",
        "cover": "149.jpg",
        "year": "2014",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 科幻 / 冒险",
        "oneLine": "凯妮丝成为革命象征，但她发现自己只是另一场权力游戏的棋子。"
    },
    {
        "title": "双影",
        "href": "video/movie-1950.html",
        "cover": "150.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "犯罪, 悬疑",
        "oneLine": "一对双胞胎姐妹轮流扮演同一个人，直到其中一具尸体被冲上岸。"
    },
    {
        "title": "萨尔托",
        "href": "video/movie-1951.html",
        "cover": "1.jpg",
        "year": "2025",
        "region": "阿根廷",
        "type": "电影",
        "genre": "剧情 / 运动",
        "oneLine": "一位落魄的前探戈舞王为了还债，决定训练一个毫无天赋的胖子去参加地下拳赛，赌注是自己的双腿。"
    },
    {
        "title": "荡女满天飞",
        "href": "video/movie-1952.html",
        "cover": "2.jpg",
        "year": "1992",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 情色",
        "oneLine": "四个性格迥异的都市女性在情场与职场中摸爬滚打，引发一连串令人捧腹的乌龙事件。"
    },
    {
        "title": "剑客卡南",
        "href": "video/movie-1953.html",
        "cover": "3.jpg",
        "year": "2026",
        "region": "印度",
        "type": "电影",
        "genre": "动作 / 剧情",
        "oneLine": "一名被诬陷入狱的贱民青年，出狱后化身面具剑客，向整个种姓制度宣战。"
    },
    {
        "title": "奥运梦",
        "href": "video/movie-1954.html",
        "cover": "4.jpg",
        "year": "2012",
        "region": "英国 / 美国",
        "type": "电影",
        "genre": "剧情 / 运动",
        "oneLine": "一个从未赢过任何比赛的中年快递员，为了得白血病的儿子，决定报名参加奥运选拔赛。"
    },
    {
        "title": "叛将风云",
        "href": "video/movie-1955.html",
        "cover": "5.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "古装 / 战争 / 权谋",
        "oneLine": "被朝廷污为叛将的边关战神，带着三千残兵退回关内，誓要讨回公道，却发现皇帝也是傀儡。"
    },
    {
        "title": "我男友的罗曼史",
        "href": "video/movie-1956.html",
        "cover": "6.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "爱情，喜剧",
        "oneLine": "女主无意中发现男友写的恋爱日记，里面全是与不同“前女友”的浪漫故事。"
    },
    {
        "title": "在我姐姐的婚纱里",
        "href": "video/movie-1957.html",
        "cover": "7.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "电影",
        "genre": "剧情 / 家庭 / 同性",
        "oneLine": "婚礼前夜，妹妹穿上了姐姐的婚纱，却发现自己爱上了姐姐要嫁的那个人——的女孩。"
    },
    {
        "title": "十万火急1997",
        "href": "video/movie-1958.html",
        "cover": "8.jpg",
        "year": "2025",
        "region": "香港",
        "type": "电影",
        "genre": "灾难 / 动作",
        "oneLine": "1997年6月30日晚，香港回归前夜，一场地下油库大火逼近市区，消防员搏命扑救。"
    },
    {
        "title": "青春禁忌游戏",
        "href": "video/movie-1959.html",
        "cover": "9.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 惊悚",
        "oneLine": "重点高中五名优等生为了争夺唯一保送名额，在一间密室中玩起了“互相揭发”的死亡游戏。"
    },
    {
        "title": "钻石豪门",
        "href": "video/movie-1960.html",
        "cover": "10.jpg",
        "year": "2025",
        "region": "中国台湾",
        "type": "剧集 (40集)",
        "genre": "爱情 / 家庭 / 商战",
        "oneLine": "被豪门养母赶走的假千金，二十年后带着百亿资产回来，买下了整个家族企业。"
    },
    {
        "title": "美丽生灵",
        "href": "video/movie-1961.html",
        "cover": "11.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "奇幻, 爱情, 青春",
        "oneLine": "一个能听见植物心跳的少女，和一个想砍光森林的开发商儿子，他们相爱了。"
    },
    {
        "title": "野山百里香",
        "href": "video/movie-1962.html",
        "cover": "12.jpg",
        "year": "2023",
        "region": "爱尔兰",
        "type": "电影",
        "genre": "爱情，文艺",
        "oneLine": "伦敦失业女白领逃到爱尔兰农场，与患有口吃的牧羊人在羊圈里谈了一场无声恋爱。"
    },
    {
        "title": "小姐不在家",
        "href": "video/movie-1963.html",
        "cover": "13.jpg",
        "year": "2024",
        "region": "中国香港",
        "type": "电影",
        "genre": "喜剧 / 悬疑",
        "oneLine": "富家千金离家出走，管家为保饭碗雇人假扮小姐，结果真小姐的仇人、情人、债主全来了。"
    },
    {
        "title": "初试羽翼",
        "href": "video/movie-1964.html",
        "cover": "14.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "青春成长",
        "oneLine": "小镇芭蕾少女通过选拔进入巴黎歌剧院芭蕾舞学校，却发现这里比练功房更残酷的是人心。"
    },
    {
        "title": "跳水男孩",
        "href": "video/movie-1965.html",
        "cover": "15.jpg",
        "year": "2023",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 运动",
        "oneLine": "小镇男孩为救家中泳池而踏上跳水之路，却意外发现身世之谜。"
    },
    {
        "title": "飞越雪乡情",
        "href": "video/movie-1966.html",
        "cover": "16.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电视剧 (短剧)",
        "genre": "家庭/喜剧",
        "oneLine": "离家十年的“沪飘”精英，为骗父母假结婚，却把整个雪乡搅得天翻地覆。"
    },
    {
        "title": "极速漂移",
        "href": "video/movie-1967.html",
        "cover": "17.jpg",
        "year": "2024",
        "region": "美国 / 德国",
        "type": "电影",
        "genre": "动作 / 犯罪 / 运动",
        "oneLine": "一个街头赛车手为给哥哥复仇，化名潜入欧洲顶级地下车赛，却发现仇人正是赛事的创办人。"
    },
    {
        "title": "魔幻时刻",
        "href": "video/movie-1968.html",
        "cover": "18.jpg",
        "year": "2025",
        "region": "日本",
        "type": "电影",
        "genre": "喜剧, 剧情",
        "oneLine": "一个过气演员被黑帮欺骗，以为自己在拍黑帮电影，其实黑帮真的在让他执行刺杀任务。"
    },
    {
        "title": "内战前",
        "href": "video/movie-1969.html",
        "cover": "19.jpg",
        "year": "2020",
        "region": "美国",
        "type": "电影",
        "genre": "惊悚 / 剧情 / 历史",
        "oneLine": "一个现代黑人女记者醒来发现自己身处1860年的蓄奴庄园，而她必须每天经历一次“被卖”的循环。"
    },
    {
        "title": "谁先上她的",
        "href": "video/movie-1970.html",
        "cover": "20.jpg",
        "year": "2016",
        "region": "中国台湾",
        "type": "电视剧",
        "genre": "剧情、同性、爱情",
        "oneLine": "一场葬礼上，前男友、现女友和暗恋者为了“谁先上她的”遗愿展开荒唐争夺。"
    },
    {
        "title": "骗徒艳福",
        "href": "video/movie-1971.html",
        "cover": "21.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "电影",
        "genre": "黑色喜剧",
        "oneLine": "三个老千想骗一位富婆，没想到富婆是骗中骗，而四人都是同一场诈骗案的受害者。"
    },
    {
        "title": "七十二家房客第九部粤语",
        "href": "video/movie-1972.html",
        "cover": "22.jpg",
        "year": "2023",
        "region": "中国香港",
        "type": "剧集",
        "genre": "剧情 / 喜剧",
        "oneLine": "旧楼面临拆迁，七十二家房客最后一次齐心协力，对抗无良地产商和自家贪心的后代。"
    },
    {
        "title": "龙枪：秋暮之巨龙",
        "href": "video/movie-1973.html",
        "cover": "23.jpg",
        "year": "2026",
        "region": "美国",
        "type": "电影",
        "genre": "奇幻, 冒险, 动作",
        "oneLine": "一群平凡的酒馆伙伴，被迫踏上寻找远古巨龙之杖的宿命征程。"
    },
    {
        "title": "西葫芦的生活",
        "href": "video/movie-1974.html",
        "cover": "24.jpg",
        "year": "2024",
        "region": "法国",
        "type": "动画电影",
        "genre": "剧情, 儿童",
        "oneLine": "在孤儿院里，一个名叫“西葫芦”的男孩用想象力对抗残酷现实，并和朋友们组建了一支“垃圾摇滚乐队”。"
    },
    {
        "title": "夺命神灯",
        "href": "video/movie-1975.html",
        "cover": "25.jpg",
        "year": "2025",
        "region": "美国 / 印度",
        "type": "电影",
        "genre": "恐怖, 奇幻",
        "oneLine": "一个穷学生擦亮了一盏古灯，灯神说可以实现他三个愿望，但每个愿望都会以最血腥的“文字游戏”方式实现。"
    },
    {
        "title": "为工作疯狂",
        "href": "video/movie-1976.html",
        "cover": "26.jpg",
        "year": "2024",
        "region": "日本",
        "type": "剧集",
        "genre": "喜剧/剧情/职场",
        "oneLine": "在一家要求员工“感谢加班”的黑心广告公司，刚入职的 00 后实习生决定用魔法打败魔法，带着大家准时下班。"
    },
    {
        "title": "那片星空那片海2",
        "href": "video/movie-1977.html",
        "cover": "27.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "科幻爱情",
        "oneLine": "地球海洋枯竭后，一名科学家在仅存的“记忆海”中，爱上了由数据构成的鲸鱼之魂。"
    },
    {
        "title": "怪兽上班第一季",
        "href": "video/movie-1978.html",
        "cover": "28.jpg",
        "year": "2023",
        "region": "美国",
        "type": "剧集",
        "genre": "喜剧 / 动画",
        "oneLine": "惊吓专员失业后集体转行，用孩子们的“尬笑”为怪兽城发电，职场内卷更吓人。"
    },
    {
        "title": "您的老鼠好友",
        "href": "video/movie-1979.html",
        "cover": "29.jpg",
        "year": "2024",
        "region": "美国",
        "type": "动画电影",
        "genre": "家庭、奇幻、冒险",
        "oneLine": "失业音乐家发现公寓里的小老鼠不仅能作曲，还打算帮他赢得百万奖金大赛。"
    },
    {
        "title": "黄色的眼泪",
        "href": "video/movie-1980.html",
        "cover": "30.jpg",
        "year": "2007",
        "region": "日本",
        "type": "电影",
        "genre": "剧情, 生活",
        "oneLine": "1963年东京奥运会前夕，三个怀揣着漫画家、音乐家和画家梦想的年轻人，在贫困的阁楼里苦苦挣扎，流下了苦涩的眼泪。"
    },
    {
        "title": "限制级战警：重返极限",
        "href": "video/movie-1981.html",
        "cover": "31.jpg",
        "year": "2025",
        "region": "美国",
        "type": "电影",
        "genre": "动作 / 冒险",
        "oneLine": "退休极限特工被重新激活，这次的任务是潜入太空站阻止卫星武器。"
    },
    {
        "title": "鳄鱼邓迪2",
        "href": "video/movie-1982.html",
        "cover": "32.jpg",
        "year": "2024",
        "region": "澳大利亚, 美国",
        "type": "电影",
        "genre": "喜剧, 冒险",
        "oneLine": "当纽约的开发商要摧毁澳大利亚的原始森林，传奇猎人邓迪带着他的回旋镖再次出山。"
    },
    {
        "title": "玫瑰楼迷影",
        "href": "video/movie-1983.html",
        "cover": "33.jpg",
        "year": "2027",
        "region": "中国香港",
        "type": "电影",
        "genre": "恐怖惊悚",
        "oneLine": "女主播入住百年凶宅“玫瑰楼”直播探险，却发现每一个死去的前租客都长着自己的脸。"
    },
    {
        "title": "嗜血法医：杀魔复生第一季",
        "href": "video/movie-1984.html",
        "cover": "34.jpg",
        "year": "2026",
        "region": "美国",
        "type": "剧集",
        "genre": "剧情 / 犯罪 / 惊悚",
        "oneLine": "隐退十年的“海湾屠夫”德克斯特被迫重操旧业，因为有人正在模仿他当年的手法。"
    },
    {
        "title": "青春肖像",
        "href": "video/movie-1985.html",
        "cover": "35.jpg",
        "year": "2024",
        "region": "法国",
        "type": "电影",
        "genre": "剧情 / 爱情 / 青春",
        "oneLine": "巴黎美院的天才女学生受命为神秘男教授画肖像，画着画着，她发现自己爱上了画中的人。"
    },
    {
        "title": "最强铁血奶爸",
        "href": "video/movie-1986.html",
        "cover": "36.jpg",
        "year": "2022",
        "region": "中国大陆",
        "type": "电影",
        "genre": "动作 / 喜剧",
        "oneLine": "兵王退役后成为单亲奶爸，带娃比打仗还难，偏偏黑帮还要来绑架他的宝贝女儿。"
    },
    {
        "title": "糖果色的恋爱反论",
        "href": "video/movie-1987.html",
        "cover": "37.jpg",
        "year": "2022",
        "region": "日本",
        "type": "剧集",
        "genre": "爱情 / 同性 / 职场",
        "oneLine": "报社王牌记者和新人摄影师互相看不顺眼，却被迫搭档追查同一新闻，拍到对方最狼狈的样子。"
    },
    {
        "title": "追随者2021",
        "href": "video/movie-1988.html",
        "cover": "38.jpg",
        "year": "2021",
        "region": "日本",
        "type": "电影",
        "genre": "悬疑 / 惊悚 / 心理",
        "oneLine": "一个靠揭秘邪教圈粉的网红主播，带着粉丝“突袭”废弃宗教据点时，发现自己才是被追随的猎物。"
    },
    {
        "title": "鲍利斯·戈都诺夫",
        "href": "video/movie-1989.html",
        "cover": "39.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "type": "电影",
        "genre": "历史 / 传记",
        "oneLine": "根据普希金巨著改编，描绘了沙皇鲍利斯在篡位与饥荒的阴影下，灵魂被权力吞噬的悲剧一生。"
    },
    {
        "title": "书剑情侠柳三变",
        "href": "video/movie-1990.html",
        "cover": "40.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "剧集",
        "genre": "古装",
        "oneLine": "以北宋词人柳永为原型，讲述他“奉旨填词”背后的江湖恩怨与爱恨情仇。"
    },
    {
        "title": "烈火男儿·业余消防员",
        "href": "video/movie-1991.html",
        "cover": "41.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "剧情 / 灾难 / 励志",
        "oneLine": "一群被正规军瞧不起的景区业余消防员，在一次超级山火中，成了数万游客唯一的生命线。"
    },
    {
        "title": "午夜凶铃3：贞相大白",
        "href": "video/movie-1992.html",
        "cover": "42.jpg",
        "year": "2026",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖, 惊悚",
        "oneLine": "当“看完录像带七天死”变成一种网络迷因，真正的诅咒以社交媒体的形式卷土重来。"
    },
    {
        "title": "今夜星光灿烂1988",
        "href": "video/movie-1993.html",
        "cover": "43.jpg",
        "year": "1988",
        "region": "中国香港",
        "type": "电影",
        "genre": "爱情 / 剧情",
        "oneLine": "1988年最后一晚，一个穷乐手和千金小姐在一家即将拆迁的舞厅里，靠即兴点歌度过了此生最漫长的一夜。"
    },
    {
        "title": "校园外星人",
        "href": "video/movie-1994.html",
        "cover": "44.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电视剧",
        "genre": "科幻 / 青春",
        "oneLine": "高一新生林北发现同桌是外星人，而他的任务是：帮同桌隐藏身份，同时拿到期末考试第一名。"
    },
    {
        "title": "夹子救鹿",
        "href": "video/movie-1995.html",
        "cover": "45.jpg",
        "year": "2021",
        "region": "中国",
        "type": "动画短片",
        "genre": "动画/奇幻",
        "oneLine": "森林里的小精灵夹子为了救一只被诅咒的神鹿，必须用自己最珍贵的记忆去交换。"
    },
    {
        "title": "侬本痴情君薄幸",
        "href": "video/movie-1996.html",
        "cover": "46.jpg",
        "year": "2024",
        "region": "中国内地",
        "type": "电影",
        "genre": "爱情，剧情",
        "oneLine": "痴情女星为爱隐退换来的却是薄情郎的背叛，她将在复仇与自我救赎间华丽转身。"
    },
    {
        "title": "飞天都市计划",
        "href": "video/movie-1997.html",
        "cover": "47.jpg",
        "year": "2027",
        "region": "日本",
        "type": "剧集",
        "genre": "科幻, 冒险",
        "oneLine": "300年后，人类住在地上的“倒扣城市”和天上的“贵族浮岛”，一个底层清洁工发誓要把整座城市送上天。"
    },
    {
        "title": "采蘑菇的夫妻",
        "href": "video/movie-1998.html",
        "cover": "48.jpg",
        "year": "2025",
        "region": "中国大陆",
        "type": "电影",
        "genre": "悬疑，剧情，农村",
        "oneLine": "一对结婚三十年的老夫妻每年秋天都去同片森林采蘑菇，今年他们带回的篮子里，多了一颗人头。"
    },
    {
        "title": "替身传奇乐翻天",
        "href": "video/movie-1999.html",
        "cover": "49.jpg",
        "year": "2024",
        "region": "中国大陆",
        "type": "电影",
        "genre": "喜剧, 动作",
        "oneLine": "一个农村来的特技替身被大明星绑架去当替身，结果把整个剧组搅得天翻地覆。"
    },
    {
        "title": "蝴蝶屋",
        "href": "video/movie-2000.html",
        "cover": "50.jpg",
        "year": "2017",
        "region": "日本",
        "type": "电影",
        "genre": "恐怖惊悚",
        "oneLine": "六个互不相识的人被关进一栋全是蝴蝶标本的房子，墙上写着：一人死亡，全员释放。"
    }
];
document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('[name="q"]');
    var button = document.querySelector('.search-main button');
    var results = document.querySelector('.search-results');
    var empty = document.querySelector('.search-empty');
    var params = new URLSearchParams(window.location.search);
    var initial = params.get('q') || '';

    if (input) {
        input.value = initial;
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function card(item) {
        return [
            '<article class="movie-card">',
            '<a class="card-cover" href="' + escapeHtml(item.href) + '">',
            '<img src="./' + escapeHtml(item.cover) + '" alt="' + escapeHtml(item.title) + '" loading="lazy">',
            '<span class="play-float">▶</span>',
            '</a>',
            '<div class="card-body">',
            '<h2><a href="' + escapeHtml(item.href) + '">' + escapeHtml(item.title) + '</a></h2>',
            '<p class="card-desc">' + escapeHtml(item.oneLine) + '</p>',
            '<div class="card-meta">',
            '<span>' + escapeHtml(item.year) + '</span>',
            '<span>' + escapeHtml(item.type) + '</span>',
            '<span>' + escapeHtml(item.region) + '</span>',
            '</div>',
            '<div class="tag-row"><span>' + escapeHtml(item.genre) + '</span></div>',
            '</div>',
            '</article>'
        ].join('');
    }

    function run() {
        if (!results) {
            return;
        }

        var q = String(input && input.value || '').trim().toLowerCase();
        var matched = SEARCH_INDEX.filter(function (item) {
            var hay = [item.title, item.year, item.region, item.type, item.genre, item.oneLine].join(' ').toLowerCase();
            return !q || hay.indexOf(q) !== -1;
        }).slice(0, 160);

        results.innerHTML = matched.map(card).join('');

        if (empty) {
            empty.classList.toggle('show', matched.length === 0);
        }
    }

    if (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            run();
        });
    }

    if (input) {
        input.addEventListener('input', run);
    }

    run();
});
