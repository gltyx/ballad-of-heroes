/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Adventurer": "冒险家",
    "log": "日志",
    "Lv Up!": "升级了！",
    "menu": "菜单",
    "pause": "暂停",
    "Upper Coast": "上海岸",
    "Up to 30 minutes of away time is automated. After that, up to 8 hours is banked and allows you to run the game at double speed.": "长达 30 分钟的离开时间是自动化的。 之后，最多可存储 8 小时，并允许您以双倍速度运行游戏。",
    "Water Serpent": "水蛇",
    "AGI": "敏捷",
    "Auto Progress": "自动进度",
    "Ballad of a Champion": "冠军之歌",
    "Ballads": "歌谣",
    "'s attack hits": "的攻击命中",
    "attacks": "攻击",
    "Ballad of Heroes": "英雄之歌",
    "Critical hit!": "暴击！",
    "patreon": "赞助",
    "The enemy party has been defeated.": "敌方已被击败。",
    "uses Quick Hit on": "使用快速攻击",
    "uses Thousand Cuts.": "使用千刃斩。",
    "Your party gains": "你的队伍获得了",
    "Agility:": "敏捷：",
    "Average": "平均",
    "Coins:": "金币：",
    "Auto Attack": "自动攻击",
    "Attack Speed:": "攻击速度：",
    "Attack:": "攻击：",
    "Crustacean": "甲壳动物",
    "damage after each auto attack or ability. 60 second cooldown.": "每次自动攻击或技能后造成的伤害。 60 秒冷却时间。",
    "damage and increase Agility by": "伤害并增加敏捷",
    "Deal": "造成",
    "Defense:": "防御：",
    "Luck:": "幸运：",
    "Max HP:": "生命上限：",
    "No abilities.": "没有能力。",
    "No loot.": "没有战利品。",
    "Quick Hit": "快速攻击",
    "Resistance:": "抵抗：",
    "Right click to toggle between Manual and Auto mode. Left click or press": "右键点击可在手动和自动模式之间切换。 左键单击或按下",
    "seconds, deal an additional": "秒，造成一个额外的",
    "seconds.": "秒。",
    "seconds. 18 second cooldown.": "秒。18秒冷却时间。",
    "Thousand Cuts": "千刃斩",
    "Throwing Stone": "飞石",
    "to use ability in Manual mode.": "在手动模式下使用能力。",
    "uses Overdrive: Smash.": "使用超频：粉碎。",
    "XP:": "经验：",
    "You move to": "你移动到了",
    "Jump to..": "跳转到..",
    "Ballad of the Gorgon": "蛇发女妖之歌",
    "General": "常规",
    "Latest Town": "最新城镇",
    "View Followers": "查看追随者",
    "damage.": "伤害。",
    "damage. Heal for": "伤害。造成",
    "Divine Strike": "神圣一击",
    "Holy": "神圣",
    "'s overdrive ends.": "的超频结束。",
    "activate": "激活",
    "Achievement Unlocked": "成就解锁",
    "battle": "战斗",
    "As you proceed on your journey, you will have access to different altars to honor the gods. Select the Altar on the right and pray to Athena to gain a party-wide buff and affinity EXP for Athena.": "当您继续您的旅程时，您将可以访问不同的祭坛来纪念众神。 选择右边的祭坛，向雅典娜祈祷，可以获得全队BUFF和雅典娜亲和力经验。",
    "Thief": "窃贼",
    "Highwayman": "拦路强盗",
    "attains level": "达到等级",
    "Bandit": "土匪",
    "Battle Rewards": "战斗奖励",
    "Battle State Updates": "战斗状态更新",
    "Buy": "购买",
    "Character Level Up": "角色升级",
    "Delphi Outskirts": "德尔福郊区",
    "Each follower provides a 2% chance per minute to pray to a random god's Small Altar and receive a boon for the party. This does not require an altar to be activated. You cannot receive the same exact boon more than once at a time.": "每个追随者每分钟有 2% 的机会向随机神灵的小祭坛祈祷并为队伍获得恩赐。 这不需要激活祭坛。 您不能一次多次获得完全相同的恩赐。",
    "Each follower provides a 25% chance per minute to activate any Small Altar among your three available altars that have met their necessary activation conditions.": "每个追随者每分钟有 25% 的机会激活您三个满足必要激活条件的可用祭坛中的任何一个小祭坛。",
    "Enemy Ability Use": "敌人技能使用",
    "Enemy Auto Attacks": "敌人自动攻击",
    "Enemy Status Effect Updates": "敌人状态效果更新",
    "Equipment Effect Updates": "装备效果更新",
    "Follower Prayer": "追随者祈祷",
    "Follower Search": "追随者搜索",
    "for a new follower.": "对于一个新的追随者。",
    "Found Treasure Chest": "发现宝箱",
    "gains": "收益",
    "Game Log Editor": "游戏日志编辑器",
    "God Level Up": "上帝升级",
    "Heal a party member for 50 HP.": "治疗一名队员 50 生命值。",
    "Healing Herb": "药草",
    "misc": "杂项",
    "new followers": "新的追随者",
    "No followers are currently praying.": "目前没有追随者在祈祷。",
    "No followers are currently searching.": "当前没有追随者正在搜索。",
    "Overview": "概览",
    "Party Ability Use": "队伍能力使用",
    "Party Auto Attacks": "队伍自动攻击",
    "Party Overdrives": "队伍超频",
    "Party Status Effect Updates": "队伍状态效果更新",
    "pray": "祈祷",
    "Pray To Altar": "祈祷祭坛",
    "prayer": "祈祷者",
    "Prayer": "祈祷者",
    "Purchase": "购买",
    "search": "搜索",
    "Search": "搜索",
    "Small Altars": "小祭坛",
    "The story of your accomplishments has spread all throughout Greece. Some people have taken to follow you and are able to assist you in various ways.": "您的成就传遍了整个希腊。 有些人已经开始追随你，并能够以各种方式帮助你。",
    "Unassign All": "全部取消分配",
    "Use Battle Item": "使用战斗道具",
    "uses Divine Strike on": "对",
    "v0.42 beta": "v0.42 测试版",
    "while searching Aigosthena.": "在寻找 Aigosthena 的时候。",
    "You can assign a follower to any zone that you have cleared. Gaining achievements in a zone will increase the level of that zone, increasing the yield your followers may find.": "您可以将追随者分配到您已清除的任何区域。 在某个区域获得成就会提高该区域的等级，从而增加您的追随者可能获得的收益。",
    "You can assign a follower to pray to the gods for your success.": "您可以指派一名追随者为您的成功向众神祈祷。",
    "You gain": "你获得",
    "You receive": "你收到",
    "Your followers found": "找到您的追随者",
    "Your party has been defeated. You hurry back to the safety of town.": "你的队伍被打败了。 你赶紧回到安全的城镇。",
    "All": "全部",
    "All Items": "所有物品",
    "Armor": "盔甲",
    "Battle Items": "战斗物品",
    "Equipment": "装备",
    "Equippable Healing Item": "可装备治疗物品",
    "Iron Armor": "铁甲",
    "Iron Hammer": "铁锤",
    "Iron Shield": "铁盾",
    "Iron Sword": "铁剑",
    "Linen Armor": "亚麻盔甲",
    "New Items": "新物品",
    "Shield": "盾牌",
    "Short Bow": "短弓",
    "Show:": "显示：",
    "Unequipped": "未装备",
    "Bow": "弓",
    "Hammer": "锤子",
    "Sword": "剑",
    "Countryside": "乡村",
    "on his journey to defeat the monstrous Medusa. As you cross the countryside between Locris and Aetolia, you get the feeling you are being followed. You've battled numerous bandits on your path and before this one can get the jump on you, you go on the offensive.": "在他击败可怕的美杜莎的旅程中。 当您穿过 洛克里斯 和 埃托利亚 之间的乡村时，您会感到自己被跟踪了。 你在路上与无数强盗作战，在这个强盗抢到你之前，你继续进攻。",
    " Heal for": "治愈",
    ", the triumph and fall of": ", 的胜利与陨落",
    ", the winding journey of": ", 曲折的旅程",
    ". Could you truly be in the same conversations as these heroes?": ". 你真的能和这些英雄进行同样的对话吗？",
    ". Could you walk the path of champions? You know all of the stories by heart -- the trials of": ". 能否走上冠军之路？ 你对所有的故事都了如指掌——",
    ". View passive ability description by hovering your god's name.": ". 将鼠标悬停在你神的名字上，查看被动能力描述。",
    "1 follower is  searching Aigosthena for 3 Light Leathers.": "1 位追随者搜索 Aigosthena 时找到了 3 轻型皮革。",
    "Click or press": "单击或按下",
    "Coastal Roads of Locris": "洛克里斯 的沿海道路",
    "gains 3 HP from Second Wind.": "从复苏之风中获得 3 点生命值。",
    "Heracles": "赫拉克勒斯",
    "Increase Agility by 25%.": "敏捷提高 25%。",
    "Jason": "杰森",
    "learns a new  passive  ability:": "学习一个新的被动技能：",
    "Odysseus": "奥德修斯",
    "Perseus": "英仙座",
    "Coastal Roads of Locris": "洛克里斯 的沿海道路",
    "Countryside": "乡村",
    "Second Wind": "复苏之风",
    "See a brief overview of important resources and quick links to important locations.": "查看重要资源的简要概述和重要位置的快速链接。",
    "to toggle targeting mode. After activating, click an enemy to target all auto attacks and abilities from this character on that enemy.": "切换定位模式。 激活后，单击一个敌人可以将该角色的所有自动攻击和技能都瞄准该敌人。",
    "uses Healing Herb, gaining 50 HP.": "使用治疗草药，获得 50 生命值。",
    "You find your way out of Delphi while processing your meeting with": "您在处理与 德尔福 的会议时找到了离开 德尔福 的方法",
    "Your feet unconsciously make their way northwest towards Dodona, following the path of": "你的脚不自觉地向西北走向多多纳，沿着",
    "Archer": "弓箭手",
    "Red-Feathered Harpy": "红羽鹰身女妖",
    ", but you feel this Archer matches you in the same way. As your fight comes to a stalemate, you raise your hands in surrender.": "，但你觉得这个弓箭手和你一样匹配。 当你的战斗陷入僵局时，你举起双手投降。",
    ". The goddess": ". 女神",
    "“I didn't mean to startle you.”": "“我不是故意吓到你的。”",
    "“I thought you were trying to mug me, but you fight harder than an ordinary bandit. Why are you following me?”": "“我还以为你是来抢劫我的呢，没想到你比普通的强盗还厉害。 你为什么跟着我？”",
    "“I was leaving Delphi at the same time as you, and couldn't help notice you cutting down the outlaws running these roads. Following you made it easier to travel.. and I was curious what you were after.”": "“我和你同时离开德尔福，不禁注意到你砍掉了这些道路上的不法分子。 跟着你让旅行变得更容易……我很好奇你在追求什么。”",
    "“If you want a challenge, then walk with me to Dodona.": "“如果你想要挑战，那就和我一起去多多纳。",
    "“My name is": "“我的名字是",
    "“Sorry about that.”": "“对于那个很抱歉。”",
    "1 to all other primary stats": "1 到所有其他主要属性数据",
    "Air": "空气",
    "and": "和",
    "Archer": "射手",
    "Artemis": "阿尔忒弥斯",
    "ATK": "攻击",
    "Blue-Feathered Harpy": "蓝羽鹰身女妖",
    "Coyote": "土狼",
    "guides my arrows. She tasked me with hunting the strongest enemies I can find to prove myself worthy of defending Olympus. I almost added you to that list.”": "指引我的箭。 她指派我去猎杀我能找到的最强大的敌人，以证明我有资格保卫奥林匹斯山。 我差点把你加入那个名单。”",
    "guides my path as": "指引我的道路",
    "guides yours. Keep your distance if you choose, but we have the same goal. We can prove ourselves together.”": "指导你的。 如果你选择保持距离，但我们有相同的目标。 我们可以一起证明自己。”",
    "learns a new  ability:": "学习一项新能力：",
    "Road to Dodona - Mountain Opening": "通往多多纳的道路 - 开放的山口",
    "Sure Shot": "必杀技",
    "takes 3 damage from Sure Shot's effect.": "受到 必杀技 效果的 3 点伤害。",
    "takes 5 damage from Claw's effect.": "受到爪击效果的 5 点伤害。",
    "takes 5 damage from Sure Shot's effect.": "受到 必杀技 效果的 5 点伤害。",
    "The gods seem to each have their own favorites.": "诸神似乎各有各的喜好。",
    "Throwing Stones": "投掷石块",
    "uses Claw on": "使用爪",
    "uses Enrage.": "使用激怒。",
    "uses Sure Shot on": "使用 必杀技",
    "uses Wounding Arrow on": "使用致伤箭",
    "You find a treasure chest containing": "你找到一个宝箱，里面有",
    "You reply with a grin.": "你笑着回答。",
    "Your opponent says, cautiously lowering her bow.": "你的对手说，小心地放下她的弓。",
    "Your power has grown significantly since you were chosen by": "自从被选为",
    "Zosime": "佐西美",
    "Heart of the Woods": "树林之心",
    "Divine Strike Upgrade 1": "神圣打击升级 1",
    "Second Wind Upgrade 1": "第二次风升级 1",
    "True Shot Upgrade 1": "真枪实弹升级 1",
    "Wounding Arrow Upgrade 1": "致伤箭升级 1",
    ". Passive.": ". 被动的。",
    "(Can obtain 10 more times)": "(可再获得10次)",
    "+1 Large Charm of Air Protection": "+1 大空气防护符咒",
    "+1 Large Charm of Determination": "+1 大决心护符",
    "+1 Large Charm of Holy Destruction": "+1 大型神圣毁灭符咒",
    "+1 Large Charm of Lightning Destruction": "+1 大号闪电毁灭符咒",
    "+1 Small Charm of Air Destruction": "+1 空气毁灭小符咒",
    "+1 Small Charm of Air Protection": "+1 小护身符",
    "+1 Small Charm of Earth Destruction": "+1 小地球毁灭符咒",
    "+1 Small Charm of Earth Protection": "+1 大地保护小符咒",
    "+1 Small Charm of Holy Destruction": "+1 神圣毁灭小符咒",
    "+1 Small Charm of Lightning Destruction": "+1 闪电毁灭小符咒",
    "+1 Small Charm of Rejuvenation": "+1 小护身符",
    "+1 Small Charm of Vulnerability": "+1 脆弱护符",
    "+1 Small Charm of Water Destruction": "+1 小型水毁符咒",
    "+1 Small Charm of Water Protection": "+1 小型防水护身符",
    "Abilities": "能力",
    "Affinity": "亲和力",
    "After using an ability, your next auto attack heals for": "使用技能后，你的下一次自动攻击会治疗",
    "Aigosthena - Heart of the Woods": "Aigosthena - 森林之心",
    "Aigosthena - Lower Coast": "Aigosthena - 下海岸",
    "Aigosthena - Western Woodlands": "Aigosthena - 西部林地",
    "Armor:": "盔甲：",
    "Artemis, Goddess of the Hunt, focuses on critical hits and debilitating enemies. Her abilities and upgrades can weaken enemies through status effects and increase damage dealt from critical attacks.": "狩猎女神阿尔忒弥斯专注于重击和削弱敌人。 她的能力和升级可以通过状态效果削弱敌人，并增加关键攻击造成的伤害。",
    "Athena, Goddess of Wisdom and Warfare, focuses on combat and self-reliance. Her abilities and upgrades give the user the ability to heal themselves based on damage dealt and reduce incoming damage to themselves.": "智慧和战争女神雅典娜专注于战斗和自力更生。 她的能力和升级使用户能够根据造成的伤害来治愈自己，并减少对自己造成的伤害。",
    "auto attack hits all additional enemies for": "自动攻击击中所有额外的敌人",
    "Ballad:": "歌谣：",
    "Barrage": "火力网",
    "Boon of Olympus:": "奥林匹斯的恩赐：",
    "Can be found at:": "可以在以下位置找到：",
    "Change": "改变",
    "Change Equipment": "换装备",
    "Change Gods": "更换神明",
    "Change Overdrive": "改变超频",
    "Character Abilities": "角色能力",
    "Charms": "护身符",
    "Classes": "职业",
    "Click for details on God.": "点击查看大神详情。",
    "coins": "金币",
    "Critical Damage Bonus:": "暴击伤害加成：",
    "Currently assigned to:": "目前分配给：",
    "damage to a target and reduce their attack by": "对目标造成伤害并减少他们的攻击",
    "Equipped God Abilities": "装备神能力",
    "Every": "每一个",
    "For 20 seconds, your auto attacks deal 25% increased damage.": "在 20 秒内，你的自动攻击造成的伤害提高 25%。",
    "Gods": "神明",
    "Healing Herbs:": "治疗草药：",
    "Heavenly Shield (Ability 2)": "圣盾（二技能）",
    "HP Regen:": "生命恢复：",
    "HP. Passive.": "生命值。 被动的。",
    "Increase all characters' Holy damage by": "增加所有角色的神圣伤害",
    "Increase all characters' HP Regen by": "增加所有角色的 HP Regen",
    "Increase Base Prayer Duration by 50%": "基础祈祷持续时间增加 50%",
    "Increase experience gained by all gods.": "增加所有神获得的经验。",
    "Iron Sword:": "铁剑：",
    "Leathers:": "皮革：",
    "Light Leathers:": "轻皮：",
    "Mark": "标记",
    "Necklace:": "项链：",
    "Next Reward:": "下一个奖励：",
    "No God Assigned": "没有上帝指派",
    "of the damage dealt every 3 seconds for": "每 3 秒造成的伤害",
    "of the damage dealt. Passive.": "造成的伤害。 被动的。",
    "Olives:": "橄榄：",
    "Overdrives": "超频",
    "Page:": "页：",
    "Paralyzing Volley (Ability 2)": "麻痹齐射（二技能）",
    "Patriarch": "族长",
    "per page": "每页",
    "Primary Stat Bonuses": "主要属性加成",
    "Primary Stats": "主要属性数据",
    "Progression": "进展",
    "Resources": "资源",
    "Resources & Crafting Materials": "资源和工艺材料",
    "Ring:": "戒指：",
    "Secondary Stat Bonuses": "次要属性加成",
    "Secondary Stats": "次要统计",
    "Select": "选择",
    "Sell": "出售",
    "Set New Overdrive": "设置新的超频",
    "Shield:": "护盾：",
    "Show Uncompleted Only": "仅显示未完成",
    "Small Charm of Rejuvenation:": "回春小符咒：",
    "Smash": "粉碎",
    "Smash (Overdrive)": "粉碎（超频）",
    "Subzone:": "子区域：",
    "Swap": "互换",
    "Throwing Stones:": "投掷石块：",
    "Total Overdrive Points Required: 80": "所需的总超频点数：80",
    "tracking": "追踪",
    "True Shot (Passive Ability)": "真实射击（被动能力）",
    "Unlock: Deal 250,000 elemental damage.": "解锁：造成 250,000 元素伤害。",
    "Unlock: Reach character level 20.": "解锁：达到角色等级 20。",
    "Unlock: Take 100,000 damage.": "解锁：受到100,000点伤害。",
    "Upcoming Level Rewards": "即将到来的等级奖励",
    "Use to trade with merchants.": "用于与商人交易。",
    "Used for crafting.": "用于制作。",
    "Waxes:": "蜡：",
    "Weapon:": "武器：",
    "When an enemy has a status effect that you have applied, they also have Mark. Mark increases damage taken by": "当敌人有你应用的状态效果时，他们也会有标记。 标记增加受到的伤害",
    "Wounding Arrow": "致伤箭",
    "Zone:": "区域：",
    "LCK": "幸运",
    "uses Empower.": "使用 赋能。",
    "Empower": "赋能",
    "True Shot": "必杀技",
    "Damage Per Second is calculated over a 120 second period and is reset upon changing sub zones.": "每秒伤害是在 120 秒的时间内计算的，并在更改子区域时重置。",
    "If your target has a negative status effect, increase critical strike chance by": "如果你的目标有负面状态效果，增加致命一击几率",
    "See available altars to pray for boons.": "查看可用的祭坛以祈求恩赐。",
    "Thales is assigned to the Adventurer class. Click for details on class.": "泰利斯被分配到冒险者职业。 点击了解职业详情。",
    "when attacking. Passive.": "攻击的时候。 被动的。",
    "Zosime is assigned to the Archer class. Click for details on class.": "佐西美 被分配到 弓箭手 职业。 点击了解课程详情。",
    "uses Ravage on": "使用毁灭在",
    "4th": "第4",
    "Poison Fangs:": "毒牙：",
    "Code Redemption": "代码兑换",
    "Code:": "代码：",
    "Dark": "深色",
    "Enter": "确认",
    "Export to File": "导出为文件",
    "Fast": "快",
    "Import from File": "从文件导入",
    "Light": "浅色",
    "Medium": "中",
    "Pause": "暂停",
    "Save/Load": "保存/加载",
    "Show Enemy HP As Percent": "以百分比显示敌人生命值",
    "Show Party HP As Percent": "以百分比显示队伍生命值",
    "Skip": "跳过",
    "Slow": "慢",
    "story speed": "故事速度",
    "tooltip color theme": "工具提示颜色主题",
    "Update Keybinds": "更新快捷键",
    "Update Quick View Options": "更新快速查看选项",
    ". It is modest compared to the one in Athens, but it is the largest most people in your village will ever see. From generation to generation, the story has held that the first person to reach the temple on the day of the Festival will be graced with the presence of": ". 与雅典的相比，它的规模不大，但它是你们村里大多数人见过的最大的。 世代相传，节日当天第一个到达寺庙的人将受到",
    "Click the arrow button to the right to skip to the next page": "点击右边的箭头按钮跳到下一页",
    "damage to a single target 1.000 time every": "伤害对单个目标造成 1.000 次每次",
    "Every year, you and many others set out inland to the Temple of": "每年，你和许多其他人都会前往内陆前往圣殿",
    "herself.": "她自己。",
    "in their own way. You race simply because every year you have tried, and every year you have failed. You have always yearned for greatness, but could never quite reach it. This year was going to be different.": "以他们自己的方式。 你参加比赛只是因为每一年你都尝试过，每一年你都失败了。 你一直渴望伟大，但永远无法实现。 今年会有所不同。",
    "of Aigosthena, are racing.": "Aigosthena，正在赛车。",
    "Some believe the stories and race to prove their piety. Others race to prove their skill and honor": "有些人相信这些故事并竞相证明他们的虔诚。 其他人竞相证明自己的技能和荣誉",
    "Thales": "泰雷兹",
    "Today is the Festival of Gods in your small village in Greece. Musicians are performing, children are playing, men and women are eating and drinking.": "今天是希腊小村庄的众神节。 音乐家在表演，孩子们在玩耍，男人和女人在吃喝。",
    "You automatically attack opponents over time. Hover over the sword by your character's name for more details.": "随着时间的推移，你会自动攻击对手。 将鼠标悬停在您角色名称旁边的剑上以获取更多详细信息。",
    "You": "你",
    "You received your first battle item. Click the plus sign on the bottom left to add an item to your item belt and click the item again to use it. Some items require you to click an ally or enemy to use. Hover over an item to see its effect.": "你收到了你的第一个战斗物品。 单击左下角的加号将一个项目添加到您的项目腰带，然后再次单击该项目以使用它。 有些物品需要你点击一个盟友或敌人才能使用。 将鼠标悬停在项目上以查看其效果。",
    "You've won enough battles here to move to the next area. On the right side of the screen, select 'Bay' to move to the next subzone within the 'Aigosthena' zone. If you wish, you can select 'Auto Progress' at the top of the page to automatically move to the next subzone when possible.": "你在这里赢得了足够多的战斗，可以移动到下一个区域。 在屏幕右侧，选择“海岸”以移动到“Aigosthena”区域内的下一个子区域。 如果您愿意，您可以选择页面顶部的“自动进度”，以便在可能的情况下自动移动到下一个子区域。",
    "Date Received": "接收日期",
    "Every year, you and many others set out inland to the Temple of": "每年，你和许多其他人都会前往内陆前往圣殿",
    "herself.": "她自己。",
    "in their own way. You race simply because every year you have tried, and every year you have failed. You have always yearned for greatness, but could never quite reach it. This year was going to be different.": "以他们自己的方式。 你参加比赛只是因为每一年你都尝试过，每一年你都失败了。 你一直渴望伟大，但永远无法实现。 今年会有所不同。",
    "Info": "信息",
    "Loot": "抢劫",
    "of Aigosthena, are racing.": "Aigosthena，正在赛车。",
    "Some believe the stories and race to prove their piety. Others race to prove their skill and honor": "有些人相信这些故事并竞相证明他们的虔诚。 其他人竞相证明自己的技能和荣誉",
    "Story": "故事",
    "Thales": "泰雷兹",
    "Today is the Festival of Gods in your small village in Greece. Musicians are performing, children are playing, men and women are eating and drinking.": "今天是希腊小村庄的众神节。 音乐家在表演，孩子们在玩耍，男人和女人在吃喝。",
    "Tutorials": "教程",
    "You automatically attack opponents over time. Hover over the sword by your character's name for more details.": "随着时间的推移，你会自动攻击对手。 将鼠标悬停在您角色名称旁边的剑上以获取更多详细信息。",
    "You received 15 Throwing Stone.": "你收到了 15 个投掷石。",
    "You,": "你，",
    "uses Constrict.": "使用 挤压。",
    "Constrict": "挤压",
    "Crafter": "工匠",
    "uses Gaze.": "使用凝视。",
    "Fortified Bronze Armor": "强化青铜盔甲",
    "Fortified Bronze Hammer": "强化青铜锤子",
    "Fortified Bronze Sword": "强化青铜剑",
    "Gaze": "凝视",
    "Venomstrike": "毒液打击",
    "Wax": "蜡",
    "uses Ethereal.": "使用空灵。",
    "Ethereal": "空灵",
    "'s attack misses!": "的攻击未命中！",
    " Hearts:": "之心：",
    "Aegis": "宙斯盾",
    "Aegis:": "宙斯盾：",
    "Always Active:": "始终活跃：",
    "play": "继续",
    "The amount of banked time you've gained while away from the game. While this is available, the game will run at 2x the speed. Click to toggle on or off.": "您离开游戏时获得的累积时间。 虽然这是可用的，但游戏将以 2 倍的速度运行。 单击以打开或关闭。",
    "The game is paused. Click or press the": "游戏已暂停。 点击或按",
    "The game is playing. Click or press the": "游戏已恢复。 点击或按",
    "key to pause.": "键去暂停游戏。",
    "key to unpause.": "键去恢复游戏。",
    "for a boon.": "恩赐。",
    "See all tracked resources. To track a specific resource, go to the 'Resources' tab in the menu and click an item.": "查看所有跟踪的资源。 要跟踪特定资源，请转到菜单中的“资源”选项卡并单击一个项目。",
    "Small Altar": "小祭坛",
    "to": "去",
    "to pray at a": "去祈祷在",
    "When the condition is met, click or press": "当满足条件时，点击或按下",
    "'s Thorns effect.": "的荆棘效果。",
    "Thorns": "荆棘",
    "Avoid all auto attacks.": "躲避所有自动攻击。",
    "damage from": "伤害从",
    "Dealing damage back to auto attackers.": "将伤害返还给自动攻击者。",
    "Resolves Upon Effect Condition": "根据效果条件解决",
    "takes": "受到",
    "'s ability": "的能力",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Isle of Libya": "利比亚岛",
    "Arta (Town)": "阿尔塔（城镇）",
    "Arta": "阿尔塔",
    "Sybaris": "西巴瑞斯",
    "Mountain Opening": "开放的山口",
    "Delphi": "德尔福",
    "Delphi Outskirts": "德尔斐郊区",
    "Road to Dodona": "通往多多纳的道路",
    "Delphi (Town)": "德尔福（镇）",
    "Delphi": "",
    "Athena": "雅典娜",
    "Bay": "海岸",
    "Aigosthena - Bay": "Aigosthena - 海岸",
    "Aigosthena": "艾格斯特纳",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "X": "X",
    "B": "B",
    "A": "A",
    "for": "",
    "For": "",
    "|": "|",
    "★": "★",
    "⇅": "⇅",
    "↪": "↪",
    "→": "→",
    "»": "»",
    "!": "!",
    "-": "-",
    "T": "T",
    "???": "???",
    "P": "P",
    "Z": "Z",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Water Serpent ": "水蛇 ",
    "Upper Coast (": "上海岸（",
    "Bay (": "海湾（",
    "Delphi Outskirts (": "德尔福郊外 (",
    "Average per hour: ": "平均每小时：",
    "damage.": "伤害。",
    "Assigned Followers: ": "分配的追随者：",
    "Coastal Roads of Locris (": "洛克里斯 的沿海道路 (",
    "Highwayman ": "拦路强盗 ",
    "Thief ": "窃贼 ",
    "Weapon - ": "武器 - ",
    "Countryside (": "乡村 (",
    "Bandit ": "土匪 ",
    "Coyote ": "土狼 ",
    "Mountain Opening (": "开放的山口（",
    "Incoming DPS: ": "受到的DPS：",
    "Party DPS: ": "队伍DPS：",
    "Red-Feathered Harpy ": "红羽鹰身女妖 ",
    "Blue-Feathered Harpy ": "蓝羽鹰身女妖 ",
    "Heart of the Woods ": "树林之心 ",
    "SHIFT + ": "SHIFT + ",
    "Selling ": "出售 ",
    "Starving Mongrel": "饥饿的混血儿",
    "Lower Coast": "下海岸",
    "Western Woodlands": "西部林地",
    "- ": "- ",
    "Lamia": "女妖",
    "Road to Dodona - ": "通往多多纳的道路 - ",
    "Fledgling Lamia": "初级女妖",
    "Lake Trichonida": "特里科尼达湖",
    "Mountain Pass ": "山口",
    "Ambracian Gulf": "安布拉西亚湾",
    "Damage against this target is increased by ": "对该目标的伤害增加 ",
    "Decrease Agility by ": "敏捷降低 ",
    "Increase Luck by ": "增加幸运 ",
    "Increase Attack by ": "增加攻击 ",
    "Large Octopus": "大型章鱼",
    "Chance on Auto Attack ": "自动攻击几率 ",
    "Gorgon": "蛇发女妖",
    "Green-Feathered Harpy": "绿羽鹰身女妖",
    "Isle of Libya - ": "利比亚岛 - ",
    "You found a chest containing ": "你找到了一个宝箱装有 ",
    "Beach": "海滩",
    "Unsettling Shade": "令人不安的影子",
    "Rocky Outcrops": "露头岩石",
    "has upgraded to level ": "已升级到等级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " wins)": " 获胜)",
    " win)": " 获胜)",
    "% of Attack": "% 攻击",
    " XP to": " 经验到",
    "Apply a damage over time effect that deals an additional": "施加一个持续伤害效果，造成额外",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\(([\d\.]+):([\d\.]+):([\d\.]+)\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^造成(.+)$/,
    /^等级(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\(([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^\/ ([\d\.,]+)$/,
    /^ \/ ([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Reach (.+) victories$/, '达到 $1 次胜利'],
    [/^\(Lv (.+) \- Ach (.+) Complete\)$/, '(等级 $1 - 成就完成 $2)'],
    [/^Deal (.+) damage to a target.$/, '对1个目标造成 $1 伤害。'],
    [/^gains (.+) HP from Divine Strike.$/, '从神圣打击中获得 $1 生命值。'],
    [/^damage to a single target (.+) times every$/, '对单个目标造成 $1 次伤害'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^Poison your target, dealing ([\d\.]+) damage every ([\d\.]+) seconds for ([\d\.]+) seconds.$/, '使你的目标中毒，每 $2 秒造成 $1 点伤害，持续 $3 秒。'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) \/ ([\d\.,]+) XP to Level ([\d\.,]+)$/, '$1 \/ $2 经验到等级 $3'],
    [/^([\d\.]+) HP \/ ([\d\.,]+) seconds$/, '$1 生命值 \/ $2 秒'],
    [/^\+([\d\.,]+) Max HP$/, '\+$1 生命值上限'],
    [/^\+([\d\.,]+) Attack$/, '\+$1 攻击'],
    [/^\+([\d\.,]+) Coin$/, '\+$1 金币'],
    [/^\+([\d\.,]+) Olive$/, '\+$1 橄榄'],
    [/^\+([\d\.,]+) Resistance$/, '\+$1 抵抗'],
    [/^\+([\d\.,]+) Boon of Olympus$/, '\+$1 奥林匹斯的恩赐'],
    [/^\+([\d\.,]+) Light Leather$/, '\+$1 轻型皮革'],
    [/^\+([\d\.,]+) Throwing Stone$/, '\+$1 飞石'],
    [/^\+([\d\.,]+) Healing Herb$/, '\+$1 药草'],
    [/^\+([\d\.,]+) Agility$/, '\+$1 敏捷'],
    [/^\+([\d\.,]+) Luck$/, '\+$1 幸运'],
    [/^\+([\d\.,]+) Defense$/, '\+$1 防御'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Petrified Bark$/, '$1 石化树皮'],
    [/^([\d\.,]+) Wax$/, '$1 蜡'],
    [/^([\d\.,]+) XP$/, '$1 经验'],
    [/^([\d\.,]+) Olive$/, '$1 橄榄'],
    [/^([\d\.,]+) Throwing Stone$/, '$1 飞石'],
    [/^([\d\.,]+) Bronze Armor$/, '$1 青铜盔甲'],
    [/^([\d\.,]+) Bronze Hammer$/, '$1 青铜锤子'],
    [/^([\d\.,]+) Bronze Sword$/, '$1 青铜剑'],
    [/^([\d\.,]+) Coin$/, '$1 金币'],
    [/^([\d\.,]+) Lamia Heart$/, '$1 女妖之心'],
    [/^([\d\.,]+) Defense$/, '$1 防御'],
    [/^([\d\.,]+) Leather$/, '$1 皮革'],
    [/^([\d\.,]+) Attack$/, '$1 攻击'],
    [/^([\d\.,]+) Agility$/, '$1 敏捷'],
    [/^([\d\.,]+) Resistance$/, '$1 抵抗'],
    [/^([\d\.,]+) Defense Permanently$/, '$1 永久防御'],
    [/^\+([\d\.,]+)\% Boon of Olympus$/, '$1\% 奥林匹斯的恩赐'],
    [/^\+([\d\.,]+) Small Charm of Ingenuity$/, '\+$1 独创的小魅力'],
    [/^\+([\d\.,]+) Poison Extract Potion Recipe$/, '\+$1 毒液提取物配方'],
    [/^\+([\d\.,]+) Poison Fang$/, '\+$1 毒牙'],
    [/^\+([\d\.,]+) Luck Permanently$/, '\+$1 永久幸运'],
    [/^\+([\d\.,]+) Defense Permanently$/, '\+$1 永久防御'],
    [/^([\d\.,]+) Coins$/, '$1 金币'],
    [/^([\d\.,]+) Light Leathers$/, '$1 轻型皮革'],
    [/^([\d\.,]+) Light Leather$/, '$1 轻型皮革'],
    [/^([\d\.,]+) Max HP$/, '$1 生命上限'],
    [/^([\d\.,]+) more achievements needed$/, '还需要 $1 成就'],
    [/^\(([\d\.,]+) owned\)$/, '（拥有 $1）'],
    [/^seconds. ([\d\.,]+) second cooldown.$/, '秒。 $1 秒冷却时间。'],
    [/^of the damage dealt. ([\d\.,]+) second cooldown.$/, '造成的伤害。 $1 秒冷却时间。'],
    [/^Remaining Duration: ([\d\.,]+) seconds$/, '剩余时长：$1 秒'],
    [/^Taking ([\d\.,]+) damage every ([\d\.,]+) seconds.$/, '每 $2 秒受到 $1 点伤害。'],
    [/^takes ([\d\.,]+) damage from Claw\'s effect.$/, '受到爪击效果的 $1 点伤害。'],
    [/^Deal ([\d\.,]+) damage to those who auto attack you.$/, '对自动攻击你的人造成 $1 点伤害。'],
    [/^for ([\d\.,]+) damage.$/, '造成了 $1 伤害。'],
    [/^gains ([\d\.,]+) XP and ([\d\.,]+) Affinity XP.$/, '获得 $1 经验 和 $2 亲和力 经验。'],
    [/^for ([\d\.,]+) damage as well.$/, '以及造成了 $1 伤害。'],
    [/^for ([\d\.,]+)$/, ' $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^level ([\d\.,]+)$/, '等级 $1'],
    [/^Lv ([\d\.,]+)$/, '等级 $1'],
    [/^takes ([\d\.,]+) damage from Sure Shot\'s effect.$/, '受到 必杀技 效果的 $1 点伤害。'],
    [/^Clear in ([\d\.,]+) seconds$/, '$1 秒内清除'],
    [/^Affinity Level ([\d\.,]+)$/, '亲和力等级 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Condition: (.+) Victories$/, '条件：$1 胜利'],
    [/^Condition: (.+) Ability Uses$/, '条件：$1 能力使用'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);