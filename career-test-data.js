export const careerStyles = [
  {
    id: "content",
    title: "内容表达型",
    summary: "你更适合把想法、经验、信息整理成别人愿意看的内容。",
    detail:
      "你对表达、呈现和别人是否看懂比较敏感。比起只做重复流程，你更需要一点表达空间，让自己的想法被看见。",
    unsuitable: [
      "每天只重复填表，很少需要表达想法",
      "做了很多事，但完全看不到别人有没有反应",
      "只能照固定话术做，不能调整表达方式",
    ],
    closing:
      "你不是一定要做自媒体，而是可以优先找那些需要整理信息、写清楚内容、让别人看懂的工作。",
  },
  {
    id: "analysis",
    title: "分析研究型",
    summary: "你更适合从一堆信息里找规律，帮别人看清问题。",
    detail:
      "你需要先理解问题，再开始行动。能让你看资料、比选择、找原因的工作，会比一直临时救火更容易进入状态。",
    unsuitable: [
      "每天都在临时救火，没有时间想清楚问题",
      "只要求马上执行，不允许你提问题",
      "工作要求一直变，但没人解释为什么变",
    ],
    closing:
      "你现在迷茫，不代表你没有方向感。你可能只是需要先把问题拆清楚，再去选择工作。",
  },
  {
    id: "communication",
    title: "沟通影响型",
    summary: "你更适合和人打交道，理解别人想要什么，再把话说清楚。",
    detail:
      "你在对话和连接里更容易找到状态。理解别人、解释清楚、推动别人愿意配合，是你更值得优先探索的工作方式。",
    unsuitable: [
      "长期独自处理材料，很少和人交流",
      "只按流程回复，不能真正理解对方问题",
      "每天沟通很多，但没有明确边界和支持",
    ],
    closing:
      "你不一定要变成特别外向的人。你更重要的能力，是把人和信息连接起来。",
  },
  {
    id: "execution",
    title: "组织推进型",
    summary: "你更适合把混乱的事情分成几步，然后一步步做完。",
    detail:
      "你看见混乱时，会想把事情排清楚。任务、时间、顺序和提醒机制清楚时，你更容易做出稳定结果。",
    unsuitable: [
      "目标一直变，没人说清楚要求",
      "所有事都靠临时催促，没有计划",
      "你要负责很多细节，却没有决定权",
    ],
    closing:
      "你不是只能做杂事。你适合先探索那些需要把事情理顺、排步骤、盯进度的工作。",
  },
  {
    id: "product",
    title: "产品策划型",
    summary: "你更适合观察别人哪里用得不顺，然后想办法改得更好。",
    detail:
      "你会关注一件事为什么不好用、别人真正卡在哪里。能让你观察、比较、提出改法的工作，会更容易让你投入。",
    unsuitable: [
      "只让你机械执行，不需要想为什么",
      "没有机会接触真实使用者或反馈",
      "想法提出来以后完全没有被讨论的空间",
    ],
    closing:
      "你不一定一开始就做产品经理，但可以先找需要观察问题、设计办法、改善体验的工作。",
  },
  {
    id: "support",
    title: "服务支持型",
    summary: "你更适合耐心处理细节，让别人觉得被帮助、被回应。",
    detail:
      "你对别人的具体困难比较敏感，也愿意把细节处理好。清楚、稳定、有回应的工作，会比高压冲刺更适合你。",
    unsuitable: [
      "每天都要强势推销，不管对方是否需要",
      "问题很多但没有流程支持，只能自己硬扛",
      "只看速度和数量，不在意服务质量",
    ],
    closing:
      "你的价值不只是温和，而是能把别人的问题认真接住，并且处理到位。",
  },
  {
    id: "sales",
    title: "销售增长型",
    summary: "你更适合面对明确目标，比如让别人愿意咨询、报名、购买或合作。",
    detail:
      "你对结果和反馈比较敏感。目标清楚、能看到数字变化、能通过沟通推动决定的工作，可能更能激发你。",
    unsuitable: [
      "目标很模糊，看不出努力有没有效果",
      "长期没有反馈，也没有明确奖励",
      "只做后台支持，不能接触真实客户或结果",
    ],
    closing:
      "你适合先探索那些目标清楚、反馈快、能看到变化的工作，但也要注意选择健康的工作环境。",
  },
  {
    id: "skill",
    title: "专业技能型",
    summary: "你更适合靠一项具体技能做出东西。",
    detail:
      "你更容易从作品和技能进步里获得成就感。设计、剪辑、代码、数据处理这类能看见成果的任务，值得优先验证。",
    unsuitable: [
      "每天只沟通协调，很少有具体产出",
      "要求很宽泛，但不给你练技能的时间",
      "只看资历和关系，不看实际作品",
    ],
    closing:
      "如果你现在还没有对应技能，可以先做一个小作品验证兴趣，不要急着把它当成马上能投的岗位。",
  },
];

export const workDirections = [
  direction("content-news", "新媒体内容", "围绕小红书、公众号、抖音等平台，想选题、写内容、看数据。", ["新媒体运营", "内容运营", "账号运营"], [["content", 1], ["sales", 0.25]]),
  direction("brand-copy", "品牌文案", "把产品、活动或观点写成别人能看懂、愿意行动的文字。", ["文案策划", "品牌文案", "品牌内容"], [["content", 1], ["product", 0.25]]),
  direction("short-video", "短视频策划", "想视频主题、脚本和拍摄思路，让内容更容易被看见。", ["短视频策划", "编导助理", "内容策划"], [["content", 0.85], ["skill", 0.35]]),
  direction("editorial", "编辑/内容整理", "整理资料、改稿、排版，让信息更清楚、更好读。", ["编辑助理", "内容编辑", "文案编辑"], [["content", 0.8], ["analysis", 0.3]]),
  direction("knowledge-content", "课程/知识内容", "把知识、经验或方法整理成课程、资料或学习内容。", ["课程内容", "知识运营", "教研助理"], [["content", 0.65], ["support", 0.35]]),

  direction("data-analysis", "数据分析", "整理数据、做表格和图表，帮团队看清哪里变好了、哪里有问题。", ["数据分析助理", "运营分析", "数据专员"], [["analysis", 1], ["skill", 0.25]]),
  direction("user-research", "市场/用户研究", "了解用户为什么买、为什么不买、真正需要什么。", ["用户研究助理", "市场研究", "调研助理"], [["analysis", 0.85], ["communication", 0.35]]),
  direction("industry-research", "行业研究", "研究一个行业的发展、公司、机会和风险，并整理成报告。", ["行业研究助理", "研究员助理", "咨询助理"], [["analysis", 0.9], ["content", 0.25]]),
  direction("business-analysis", "商业分析", "看业务数据和市场信息，帮团队判断下一步怎么做更合理。", ["商业分析助理", "经营分析", "战略分析助理"], [["analysis", 0.85], ["product", 0.25]]),
  direction("ops-analysis", "运营分析", "看活动、内容或店铺数据，找出哪里值得继续优化。", ["运营分析", "数据运营", "策略运营助理"], [["analysis", 0.75], ["execution", 0.3]]),

  direction("user-ops", "用户沟通运营", "和用户保持联系，了解他们的问题，让他们更愿意继续使用或关注。", ["用户运营", "社群运营", "会员运营"], [["communication", 1], ["support", 0.25]]),
  direction("customer-success", "客户成功", "帮助已经购买或使用产品的客户，把问题解决好，让他们愿意继续用。", ["客户成功", "客户运营", "客户顾问"], [["communication", 0.8], ["support", 0.4]]),
  direction("hr-recruiting", "HR 招聘", "了解岗位需要什么人，筛简历、约面试，帮助团队找到合适的人。", ["招聘专员", "HR 助理", "人力资源助理"], [["communication", 0.75], ["execution", 0.25]]),
  direction("education-advisor", "教育/课程顾问", "了解学习者需求，介绍课程或服务，帮助对方做选择。", ["课程顾问", "教育顾问", "学习规划师"], [["communication", 0.7], ["sales", 0.45]]),
  direction("business-comms", "商务沟通", "和合作方沟通需求、价格、资源和合作方式。", ["商务助理", "BD 助理", "合作运营"], [["communication", 0.7], ["sales", 0.5]]),

  direction("project-assistant", "项目助理", "把任务、时间和进度理清楚，提醒大家按时把事情做完。", ["项目助理", "项目专员", "PMO 助理"], [["execution", 1], ["communication", 0.2]]),
  direction("event-execution", "活动执行", "准备活动物料、流程和现场细节，确保活动顺利进行。", ["活动执行", "活动运营", "会务执行"], [["execution", 0.85], ["communication", 0.25]]),
  direction("admin-ops", "行政运营", "处理办公室、流程、物品和日常安排，让团队运转更顺。", ["行政专员", "行政助理", "运营助理"], [["execution", 0.75], ["support", 0.35]]),
  direction("ecommerce-store", "电商店铺运营", "维护商品、活动、订单和店铺数据，让店铺稳定运转。", ["电商运营助理", "店铺运营", "商品运营助理"], [["execution", 0.7], ["sales", 0.35]]),
  direction("process-coordination", "供应/流程协调", "跟进材料、订单、供应和流程，让每一步能接上。", ["供应链助理", "流程专员", "订单协调"], [["execution", 0.8], ["analysis", 0.2]]),

  direction("product-assistant", "产品助理", "观察用户怎么用产品，整理问题，帮团队想怎么改得更好。", ["产品助理", "产品经理助理", "产品专员"], [["product", 1], ["analysis", 0.35]]),
  direction("product-ops", "产品运营", "让更多人理解和使用产品，并根据反馈持续调整。", ["产品运营", "用户运营", "产品推广"], [["product", 0.75], ["communication", 0.35]]),
  direction("ux", "用户体验", "观察别人哪里用得不顺，整理问题，让流程更好理解。", ["用户体验助理", "UX 助理", "体验研究助理"], [["product", 0.85], ["analysis", 0.35]]),
  direction("campaign-planning", "活动策划", "想活动主题、玩法和流程，让更多人愿意参加。", ["活动策划", "活动运营", "营销策划助理"], [["product", 0.7], ["content", 0.35]]),
  direction("growth-campaign", "增长活动", "通过活动、内容或投放，让更多人注册、咨询或购买。", ["增长运营助理", "用户增长", "增长活动运营"], [["product", 0.65], ["sales", 0.45]]),

  direction("customer-support", "客户支持", "回复用户问题，帮他们解决使用或购买后的具体麻烦。", ["客服专员", "客户支持", "在线客服"], [["support", 1], ["communication", 0.25]]),
  direction("academic-service", "教务服务", "安排课程、提醒学习进度，帮助学生顺利完成学习。", ["教务专员", "班主任", "学习顾问"], [["support", 0.85], ["execution", 0.3]]),
  direction("hr-admin-support", "人事行政支持", "处理入职、资料、考勤和日常事务，让团队少出错。", ["人事助理", "行政人事", "人事行政专员"], [["support", 0.75], ["execution", 0.35]]),
  direction("after-sales", "订单/售后处理", "跟进订单、退款、物流和售后问题，减少用户的不安。", ["售后专员", "订单专员", "客服运营"], [["support", 0.8], ["execution", 0.25]]),
  direction("internal-ops", "内部运营支持", "整理资料、对接流程、维护表格，帮助团队更顺地工作。", ["运营支持", "部门助理", "运营助理"], [["support", 0.7], ["analysis", 0.25]]),

  direction("sales-advisor", "销售顾问", "了解对方需求，介绍合适产品或服务，推动对方购买。", ["销售顾问", "销售代表", "咨询销售"], [["sales", 1], ["communication", 0.3]]),
  direction("bd", "商务拓展", "寻找合作机会，联系外部资源，推动双方达成合作。", ["商务拓展", "BD", "商务专员"], [["sales", 0.85], ["communication", 0.4]]),
  direction("channel", "渠道合作", "维护合作渠道，让更多客户通过渠道了解产品或服务。", ["渠道专员", "渠道运营", "合作运营"], [["sales", 0.75], ["execution", 0.25]]),
  direction("ad-optimization", "投放/广告优化", "看广告数据，调整素材和预算，让花出去的钱更有效。", ["投放助理", "广告优化师", "信息流优化"], [["sales", 0.75], ["analysis", 0.35]]),
  direction("live-ecommerce", "直播/电商转化", "围绕直播或店铺活动，让更多人下单、咨询或复购。", ["直播运营", "电商运营", "转化运营"], [["sales", 0.8], ["content", 0.25]]),

  direction("visual-design", "视觉设计", "做海报、页面或图片，让信息看起来清楚、有吸引力。", ["设计助理", "视觉设计", "平面设计"], [["skill", 1], ["content", 0.25]]),
  direction("video-editing", "视频剪辑", "把素材剪成完整视频，控制节奏、字幕、画面和声音。", ["剪辑", "视频剪辑", "后期助理"], [["skill", 0.9], ["content", 0.3]]),
  direction("photo-retouch", "摄影修图", "拍摄或处理图片，让产品、人物或场景更好看。", ["摄影助理", "修图师", "图片后期"], [["skill", 0.85], ["content", 0.2]]),
  direction("frontend", "前端开发", "把网页或小程序界面做出来，让用户能点击和使用。", ["前端开发助理", "前端实习生", "网页开发"], [["skill", 0.9], ["product", 0.25]]),
  direction("data-automation", "数据处理/自动化", "用表格、脚本或工具处理重复数据，让工作更省时间。", ["数据处理", "数据专员", "自动化助理"], [["skill", 0.8], ["analysis", 0.35]]),
];

export const actionPlan = [
  {
    title: "第 1 天：把方向看清楚",
    body: "打开招聘软件，把上面 5 个工作方向都搜一遍。每个方向看 3-5 个岗位，把你“不排斥、愿意多看两眼”的岗位收藏下来。",
  },
  {
    title: "第 2 天：找出你真正不反感的工作内容",
    body: "回看你收藏的岗位，重点看“工作内容”，先别只盯薪资和公司名。圈出你不排斥的内容，比如写内容、做表格、和人沟通、整理资料、看数据、做活动。",
  },
  {
    title: "第 3 天：做一个很小的验证动作",
    body: "从最不排斥的方向里选一个，做一个小动作：写一篇内容、整理一张表、拆一个账号、问一个从业者、投 1 个岗位。目标不是马上成功，而是看这个方向会不会让你更清楚。",
  },
];

export const questions = [
  question("q1", "接到没做过的任务，你会先做什么？", [
    option("q1a", "先找资料和案例，看别人怎么做", [["analysis", 2], ["product", 1]]),
    option("q1b", "先问清楚对方到底想要什么", [["communication", 2], ["product", 1]]),
    option("q1c", "先列步骤，避免漏掉重要事情", [["execution", 2], ["support", 1]]),
    option("q1d", "先想最后怎么讲清楚、呈现出来", [["content", 2], ["skill", 1]]),
  ]),
  question("q2", "目标很模糊时，你最想先弄清什么？", [
    option("q2a", "问题到底卡在哪里", [["analysis", 2], ["product", 1]]),
    option("q2b", "这件事最后给谁看、谁会用", [["product", 2], ["communication", 1]]),
    option("q2c", "什么时候交、先做哪一步", [["execution", 2], ["support", 1]]),
    option("q2d", "怎样说出来更容易让人理解", [["content", 2], ["communication", 1]]),
  ]),
  question("q3", "时间不多、任务很多时，你会怎么安排？", [
    option("q3a", "先判断哪些任务最影响结果", [["analysis", 2], ["execution", 1]]),
    option("q3b", "先和相关的人确认优先级", [["communication", 2], ["execution", 1]]),
    option("q3c", "先列清单，一件一件往前做", [["execution", 2], ["support", 1]]),
    option("q3d", "先做最能看见成果的部分", [["skill", 2], ["sales", 1]]),
  ]),
  question("q4", "要展示一个结果时，你最在意什么？", [
    option("q4a", "结论有没有证据支撑", [["analysis", 2], ["product", 1]]),
    option("q4b", "别人能不能听懂、愿不愿意接受", [["communication", 2], ["content", 1]]),
    option("q4c", "过程和细节有没有交代清楚", [["execution", 2], ["support", 1]]),
    option("q4d", "表达有没有吸引力、重点够不够亮", [["content", 2], ["skill", 1]]),
  ]),
  question("q5", "团队意见不统一时，你通常会做什么？", [
    option("q5a", "把不同意见整理出来，看差异在哪", [["analysis", 2], ["execution", 1]]),
    option("q5b", "分别听大家怎么想，找能接受的说法", [["communication", 2], ["support", 1]]),
    option("q5c", "推动大家先定一个能执行的方案", [["execution", 2], ["sales", 1]]),
    option("q5d", "从使用者角度看哪个方案更顺", [["product", 2], ["analysis", 1]]),
  ]),
  question("q6", "别人说不清需求时，你会怎么处理？", [
    option("q6a", "问几个具体例子，再整理共同点", [["analysis", 2], ["communication", 1]]),
    option("q6b", "耐心追问，让对方慢慢说清楚", [["communication", 2], ["support", 1]]),
    option("q6c", "先写一个版本，让对方看着改", [["content", 2], ["product", 1]]),
    option("q6d", "把能确定的事先推进起来", [["execution", 2], ["sales", 1]]),
  ]),
  question("q7", "大家都拖着不动时，你更可能怎么做？", [
    option("q7a", "先找出为什么没人动", [["analysis", 2], ["product", 1]]),
    option("q7b", "主动问大家卡在哪里", [["communication", 2], ["support", 1]]),
    option("q7c", "把任务拆小，提醒大家先做一步", [["execution", 2], ["support", 1]]),
    option("q7d", "用目标或奖励推动大家行动", [["sales", 2], ["communication", 1]]),
  ]),
  question("q8", "你在团队里最容易被需要的是？", [
    option("q8a", "帮大家把问题想清楚", [["analysis", 2], ["product", 1]]),
    option("q8b", "帮大家把话说开、关系理顺", [["communication", 2], ["support", 1]]),
    option("q8c", "帮大家把事情排好、按时做完", [["execution", 2], ["support", 1]]),
    option("q8d", "帮大家把内容或作品做出来", [["content", 2], ["skill", 1]]),
  ]),
  question("q9", "事情突然变多、节奏乱了，你会先做什么？", [
    option("q9a", "先判断真正重要的是什么", [["analysis", 2], ["execution", 1]]),
    option("q9b", "先找人确认哪些可以延后", [["communication", 2], ["execution", 1]]),
    option("q9c", "先把所有事列出来重新排序", [["execution", 2], ["support", 1]]),
    option("q9d", "先处理最能马上出结果的事", [["sales", 2], ["skill", 1]]),
  ]),
  question("q10", "别人临时改要求，你最难受的是？", [
    option("q10a", "没有解释为什么要改", [["analysis", 2], ["product", 1]]),
    option("q10b", "沟通来回很多，还说不清楚", [["communication", 2], ["support", 1]]),
    option("q10c", "计划全乱了，很多细节要重来", [["execution", 2], ["support", 1]]),
    option("q10d", "做好的内容或作品被全部推翻", [["content", 2], ["skill", 1]]),
  ]),
  question("q11", "一份工作让你很消耗，通常是因为？", [
    option("q11a", "每天都很急，但没人讲清原因", [["analysis", 2], ["product", 1]]),
    option("q11b", "要处理很多情绪，却没有边界", [["support", 2], ["communication", 1]]),
    option("q11c", "事情很碎，永远做不完", [["execution", 2], ["support", 1]]),
    option("q11d", "看不到成果，也没有明确反馈", [["sales", 2], ["skill", 1]]),
  ]),
  question("q12", "做一件事没有反馈时，你会怎样？", [
    option("q12a", "想知道数据或结果到底怎么样", [["analysis", 2], ["sales", 1]]),
    option("q12b", "想问问别人真实感受", [["communication", 2], ["support", 1]]),
    option("q12c", "会继续按计划把它做完", [["execution", 2], ["support", 1]]),
    option("q12d", "会想改表达方式再试一次", [["content", 2], ["product", 1]]),
  ]),
  question("q13", "看到一个东西不好用，你先想到什么？", [
    option("q13a", "问题可能出在哪个环节", [["analysis", 2], ["product", 1]]),
    option("q13b", "使用的人当时会怎么想", [["product", 2], ["communication", 1]]),
    option("q13c", "能不能换一种更简单的流程", [["execution", 2], ["product", 1]]),
    option("q13d", "界面或内容是不是不够清楚", [["content", 2], ["skill", 1]]),
  ]),
  question("q14", "看到账号内容表现不好，你先看什么？", [
    option("q14a", "数据变化和哪类内容更有效", [["analysis", 2], ["sales", 1]]),
    option("q14b", "读者真正关心什么问题", [["communication", 2], ["content", 1]]),
    option("q14c", "发布频率和执行有没有跟上", [["execution", 2], ["content", 1]]),
    option("q14d", "标题、封面和表达有没有吸引力", [["content", 2], ["skill", 1]]),
  ]),
  question("q15", "看到一堆信息，你更想做什么？", [
    option("q15a", "分类整理，找出规律和结论", [["analysis", 2], ["content", 1]]),
    option("q15b", "问问相关的人怎么理解", [["communication", 2], ["analysis", 1]]),
    option("q15c", "变成清单，方便一步步处理", [["execution", 2], ["support", 1]]),
    option("q15d", "做成表格、图或作品", [["skill", 2], ["content", 1]]),
  ]),
  question("q16", "看到别人遇到困难，你更自然的反应是？", [
    option("q16a", "先帮他分析问题出在哪里", [["analysis", 2], ["support", 1]]),
    option("q16b", "先听他说完，让他感觉被理解", [["support", 2], ["communication", 1]]),
    option("q16c", "帮他列出接下来能做的几步", [["execution", 2], ["support", 1]]),
    option("q16d", "帮他把话组织好，讲给别人听", [["content", 2], ["communication", 1]]),
  ]),
  question("q17", "哪种反馈最让你有成就感？", [
    option("q17a", "别人说你的判断很清楚", [["analysis", 2], ["product", 1]]),
    option("q17b", "别人说你沟通后事情顺了", [["communication", 2], ["support", 1]]),
    option("q17c", "事情按时完成，没有出错", [["execution", 2], ["support", 1]]),
    option("q17d", "数字变好了，更多人咨询或购买", [["sales", 2], ["content", 1]]),
  ]),
  question("q18", "哪种状态让你觉得还能继续做？", [
    option("q18a", "能慢慢把问题想清楚", [["analysis", 2], ["product", 1]]),
    option("q18b", "能和人互动，并看到回应", [["communication", 2], ["sales", 1]]),
    option("q18c", "每天有清楚任务，可以稳步完成", [["execution", 2], ["support", 1]]),
    option("q18d", "能练出作品或技能", [["skill", 2], ["content", 1]]),
  ]),
  question("q19", "学一项新技能，你更容易因为什么坚持？", [
    option("q19a", "理解原理后越来越有掌控感", [["analysis", 2], ["skill", 1]]),
    option("q19b", "有人一起练，能互相反馈", [["communication", 2], ["support", 1]]),
    option("q19c", "每天有小任务，可以打勾完成", [["execution", 2], ["support", 1]]),
    option("q19d", "能很快做出一个作品", [["skill", 2], ["content", 1]]),
  ]),
  question("q20", "一份没那么痛苦的工作，最应该满足什么？", [
    option("q20a", "能让我理解问题，不只是盲目忙", [["analysis", 2], ["product", 1]]),
    option("q20b", "能和人产生真实连接", [["communication", 2], ["support", 1]]),
    option("q20c", "任务清楚，努力能看见进度", [["execution", 2], ["support", 1]]),
    option("q20d", "能让我做出看得见的东西", [["skill", 2], ["content", 1]]),
  ]),
];

function direction(id, title, summary, searchRoles, weights) {
  return {
    id,
    title,
    summary,
    searchRoles,
    weights: weights.map(([style, weight]) => ({ style, weight })),
  };
}

function question(id, title, options) {
  return { id, title, options };
}

function option(id, label, scores) {
  return {
    id,
    label,
    scores: scores.map(([style, points]) => ({ style, points })),
  };
}
