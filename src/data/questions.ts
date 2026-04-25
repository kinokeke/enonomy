export interface Question {
  id: string;
  chapter: number;
  type: 'single' | 'judge';
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const chapters = [
  { id: 1, title: '第一章 需求、供给与均衡价格', description: '需求与供给理论' },
  { id: 2, title: '第二章 消费者行为', description: '效用理论与消费者均衡' },
  { id: 3, title: '第三章 生产与成本', description: '生产函数与成本分析' },
  { id: 4, title: '第四章 市场结构', description: '完全竞争与垄断市场' },
];

export const allQuestions: Question[] = [
  // 第一章 单选题
  {
    id: 'c1_s1',
    chapter: 1,
    type: 'single',
    question: '在影响需求的基本因素中，最关键的是该商品的( )。',
    options: ['A. 替代品的价格', 'B. 消费者偏好', 'C. 商品价格', 'D. 预期'],
    answer: 'C',
    explanation: '商品价格是影响需求的最基本、最直接的因素。'
  },
  {
    id: 'c1_s2',
    chapter: 1,
    type: 'single',
    question: '均衡价格的形成是( )。',
    options: ['A. 生产者生产的结果', 'B. 消费者消费的结果', 'C. 政府指令性下达的结果', 'D. 供求双方自发调节的结果'],
    answer: 'D',
    explanation: '均衡价格是市场供求关系自发调节的结果。'
  },
  {
    id: 'c1_s3',
    chapter: 1,
    type: 'single',
    question: '钢笔和圆珠笔互为( )。',
    options: ['A. 互补品', 'B. 替代品', 'C. 无关品', 'D. 正常品'],
    answer: 'B',
    explanation: '钢笔和圆珠笔可以相互替代满足书写需求。'
  },
  {
    id: 'c1_s4',
    chapter: 1,
    type: 'single',
    question: '在其他条件不变的情况下，酸奶的价格上涨，导致酸奶需求量减少，这属于( )。',
    options: ['A. 需求变动', 'B. 需求量变动', 'C. 供给变动', 'D. 供给量变动'],
    answer: 'B',
    explanation: '价格变化引起的需求量变化是需求量变动，表现为沿需求曲线移动。'
  },
  {
    id: 'c1_s5',
    chapter: 1,
    type: 'single',
    question: '消费者预期鸡蛋未来价格要下降，则对鸡蛋当前需求会( )。',
    options: ['A. 增加', 'B. 减少', 'C. 不变', 'D. 不确定'],
    answer: 'B',
    explanation: '预期未来价格下降，消费者会推迟购买，当前需求减少。'
  },
  {
    id: 'c1_s6',
    chapter: 1,
    type: 'single',
    question: '以下不属于影响供给的因素是( )。',
    options: ['A. 消费者偏好', 'B. 生产成本', 'C. 生产技术', 'D. 预期'],
    answer: 'A',
    explanation: '消费者偏好影响需求，不影响供给。'
  },
  {
    id: 'c1_s7',
    chapter: 1,
    type: 'single',
    question: '在其他条件不变的情况下，某种商品自身的价格与其供给的变动( )。',
    options: ['A. 没有直接联系', 'B. 呈正方向变化', 'C. 呈反方向变化', 'D. 先呈正方向变化，后呈反方向变化'],
    answer: 'B',
    explanation: '供给规律：价格与供给量呈同方向变动。'
  },
  {
    id: 'c1_s8',
    chapter: 1,
    type: 'single',
    question: '以下导致某种商品的供给曲线向左平移的情况是( )。',
    options: ['A. 该商品价格上升', 'B. 生产技术提高', 'C. 生产成本增加', 'D. 消费者偏好增强'],
    answer: 'C',
    explanation: '生产成本增加导致供给减少，供给曲线左移。'
  },
  {
    id: 'c1_s9',
    chapter: 1,
    type: 'single',
    question: '供给量沿其供给曲线运动，是因为( )。',
    options: ['A. 商品本身价格变化', 'B. 替代品价格变化', 'C. 互补品价格变化', 'D. 生产成本变化'],
    answer: 'A',
    explanation: '只有商品本身价格变化才会导致供给量沿供给曲线移动。'
  },
  {
    id: 'c1_s10',
    chapter: 1,
    type: 'single',
    question: '牛肉价格上升一般会引起( )。',
    options: ['A. 消费者多买牛肉', 'B. 消费者少买羊肉', 'C. 企业少生产牛肉', 'D. 企业多生产牛肉'],
    answer: 'D',
    explanation: '牛肉价格上升，企业会增加牛肉生产。'
  },
  {
    id: 'c1_s11',
    chapter: 1,
    type: 'single',
    question: '均衡价格是( )。',
    options: ['A. 固定不变的价格', 'B. 厂商期望的价格', 'C. 供给量和需求量相等时的价格', 'D. 消费者期望的价格'],
    answer: 'C',
    explanation: '均衡价格是市场供给量与需求量相等时的价格。'
  },
  {
    id: 'c1_s12',
    chapter: 1,
    type: 'single',
    question: '供给大于需求(供过于求)时，市场价格( )。',
    options: ['A. 在均衡价格之上', 'B. 在均衡价格之下', 'C. 等于均衡价格', 'D. 与均衡价格无关'],
    answer: 'B',
    explanation: '供过于求时，价格会下降到均衡价格以下。'
  },
  {
    id: 'c1_s13',
    chapter: 1,
    type: 'single',
    question: '如果供给不变，国货潮渐盛使国内某品牌服装需求大幅增加，则( )。',
    options: ['A. 均衡价格不变，均衡数量上升', 'B. 均衡价格上升，均衡数量不变', 'C. 均衡价格上升，均衡数量上升', 'D. 均衡价格上升，均衡数量下降'],
    answer: 'C',
    explanation: '需求增加，供给不变，均衡价格和均衡数量都上升。'
  },
  {
    id: 'c1_s14',
    chapter: 1,
    type: 'single',
    question: '限制价格是政府为了限制某商品价格上涨而对该产品规定的( )均衡价格的( )。',
    options: ['A. 高于，最高限价', 'B. 高于，最低限价', 'C. 低于，最高限价', 'D. 低于，最低限价'],
    answer: 'C',
    explanation: '限制价格（最高限价）低于均衡价格。'
  },
  {
    id: 'c1_s15',
    chapter: 1,
    type: 'single',
    question: '车价格上涨10%，使消费者需求减少1%，则该商品的需求价格弹性属于( )。',
    options: ['A. 富有弹性', 'B. 单位弹性', 'C. 缺乏弹性', 'D. 无弹性'],
    answer: 'C',
    explanation: '需求变动百分比小于价格变动百分比，属于缺乏弹性。'
  },
  {
    id: 'c1_s16',
    chapter: 1,
    type: 'single',
    question: '下列和需求收入弹性最大的商品是( )。',
    options: ['A. 笔记本电脑', 'B. 大米', 'C. 奶茶', 'D. 钻石'],
    answer: 'D',
    explanation: '奢侈品的需求收入弹性最大。'
  },
  {
    id: 'c1_s17',
    chapter: 1,
    type: 'single',
    question: '下列适用于"薄利多销"或"降价促销"定价策略的商品是( )。',
    options: ['A. 食盐', 'B. 手机', 'C. 大米', 'D. 小麦'],
    answer: 'B',
    explanation: '需求富有弹性的商品适合薄利多销。'
  },
  {
    id: 'c1_s18',
    chapter: 1,
    type: 'single',
    question: '当某商品的价格变动为1%时，其供给量的相对变动超过1%，这说明该商品的供给( )。',
    options: ['A. 富有弹性', 'B. 单位弹性', 'C. 缺乏弹性', 'D. 无弹性'],
    answer: 'A',
    explanation: '供给量变动百分比大于价格变动百分比，供给富有弹性。'
  },
  {
    id: 'c1_s19',
    chapter: 1,
    type: 'single',
    question: '影响供给价格弹性的因素不包括( )。',
    options: ['A. 时间', 'B. 生产者调整供给量的难易度', 'C. 生产者所使用的生产技术类型', 'D. 商品可替代的程度'],
    answer: 'D',
    explanation: '商品可替代程度影响需求价格弹性，不影响供给价格弹性。'
  },
  {
    id: 'c1_s20',
    chapter: 1,
    type: 'single',
    question: '不会使需求曲线移动的因素是( )。',
    options: ['A. 消费者偏好变化', 'B. 商品价格下降', 'C. 相关商品价格下降', 'D. 消费者收入变化'],
    answer: 'B',
    explanation: '商品价格下降导致需求量变动，不是需求变动。'
  },
  // 第一章 判断题
  {
    id: 'c1_j1',
    chapter: 1,
    type: 'judge',
    question: '市场需求是指在一定时间内、一定价格条件下和一定市场上，所有的消费者对某种商品或服务愿意而且能够购买的数量。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '市场需求的定义正确。'
  },
  {
    id: 'c1_j2',
    chapter: 1,
    type: 'judge',
    question: '如果羊排降价，对牛排的需求就会增加。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '羊排和牛排是替代品，羊排降价会使牛排需求减少。'
  },
  {
    id: 'c1_j3',
    chapter: 1,
    type: 'judge',
    question: '商品价格的上升使该商品的需求量下降，使其需求曲线向左移动。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '价格变化导致需求量变动，不是需求曲线移动。'
  },
  {
    id: 'c1_j4',
    chapter: 1,
    type: 'judge',
    question: '对所有商品来说，需求与价格的变动方向都相反。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '吉芬商品等例外情况存在。'
  },
  {
    id: 'c1_j5',
    chapter: 1,
    type: 'judge',
    question: '当收入减少会引起对某一种物品的需求量增加时，这种物品就被称为低档物品。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '低档物品的定义正确。'
  },
  {
    id: 'c1_j6',
    chapter: 1,
    type: 'judge',
    question: '铜铝价格下降了，可以预测冰箱供给曲线将向左移动。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '原材料价格下降，成本降低，供给曲线右移（供给增加）。'
  },
  {
    id: 'c1_j7',
    chapter: 1,
    type: 'judge',
    question: '如果旅游文创产品的生产者对未来旅游市场的热度持乐观估计，预期旅游文创产品价格将上涨，那么他会选择缩减生产。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '预期价格上涨会增加当前供给。'
  },
  {
    id: 'c1_j8',
    chapter: 1,
    type: 'judge',
    question: '不是所有商品的供给量都随价格的上升而增加。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '如劳动供给曲线可能向后弯曲。'
  },
  {
    id: 'c1_j9',
    chapter: 1,
    type: 'judge',
    question: '在商品价格不变的条件下，生产者的成本增加，利润相应减少，生产者就会减少供给量。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '成本增加导致供给减少。'
  },
  {
    id: 'c1_j10',
    chapter: 1,
    type: 'judge',
    question: '在其他条件不变的情况下，新能源汽车的价格上涨，会引起新能源汽车电池的供给减少。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '新能源汽车价格上涨，电池需求增加，电池供给增加。'
  },
  {
    id: 'c1_j11',
    chapter: 1,
    type: 'judge',
    question: '在需求不变的情况下，供给的增加将引起均衡价格上升和均衡数量减少。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '供给增加引起均衡价格下降，均衡数量增加。'
  },
  {
    id: 'c1_j12',
    chapter: 1,
    type: 'judge',
    question: '当商品供不应求时，消费者会愿意提高购买价格以获得需求满足。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '供不应求时价格上涨。'
  },
  {
    id: 'c1_j13',
    chapter: 1,
    type: 'judge',
    question: 'M国多个城市均出台对房租的限制政策，这种做法称为支持价格。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '限制房租是最高限价，不是支持价格。'
  },
  {
    id: 'c1_j14',
    chapter: 1,
    type: 'judge',
    question: '均衡价格和均衡数量由需求或供给单方面决定，两者共同作用不会产生新的均衡价格和数量。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '均衡价格和数量由供求共同决定。'
  },
  {
    id: 'c1_j15',
    chapter: 1,
    type: 'judge',
    question: '当苹果的价格为每千克5元时，消费者的购买量为500千克。若水果商愿意提供400千克苹果，则5元为苹果的均衡价格。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '需求量不等于供给量，不是均衡价格。'
  },
  {
    id: 'c1_j16',
    chapter: 1,
    type: 'judge',
    question: '需求完全有弹性是指商品价格的变化对需求量只有轻微影响。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '需求完全有弹性是指价格微小变化导致需求量无限变化。'
  },
  {
    id: 'c1_j17',
    chapter: 1,
    type: 'judge',
    question: '缺乏需求价格弹性的商品，其价格与生产者总收益呈同方向变动。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '缺乏弹性时，价格上升，总收益增加。'
  },
  {
    id: 'c1_j18',
    chapter: 1,
    type: 'judge',
    question: '生活必需品的需求收入弹性比较大。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '生活必需品的需求收入弹性较小。'
  },
  {
    id: 'c1_j19',
    chapter: 1,
    type: 'judge',
    question: '文物古董的供给表现为完全无弹性。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '文物古董数量固定，供给完全无弹性。'
  },
  {
    id: 'c1_j20',
    chapter: 1,
    type: 'judge',
    question: '对于需求富有弹性的商品适合采用"降价促销"的销售策略。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '需求富有弹性时，降价可以增加总收益。'
  },
  // 第二章 单选题
  {
    id: 'c2_s1',
    chapter: 2,
    type: 'single',
    question: '以下属于边际效用情况的是( )。',
    options: ['A. 小新喝了三杯咖啡后不想再喝了', 'B. 小新喝了两杯咖啡，共获得了25个效用单位的满足', 'C. 小新喝了第二杯咖啡，满足程度从10个效用单位增加到15个效用单位', 'D. 小新喝了两杯咖啡，平均每杯咖啡给他带来的满足感为12.5个效用单位'],
    answer: 'C',
    explanation: '边际效用是增加一单位消费带来的效用增量。'
  },
  {
    id: 'c2_s2',
    chapter: 2,
    type: 'single',
    question: '某消费者对商品A的偏好大于对商品B的，原因是( )。',
    options: ['A. 商品A的价格最低', 'B. 商品A对该消费者的效用最大', 'C. 商品A稀缺', 'D. 商品A有多种用途'],
    answer: 'B',
    explanation: '消费者偏好取决于商品带来的效用大小。'
  },
  {
    id: 'c2_s3',
    chapter: 2,
    type: 'single',
    question: '在某消费者消费两单位某物品之后，再消费第三单位该物品的边际效用为零，则此时( )。',
    options: ['A. 消费者获得的总效用最大', 'B. 消费者获得了最大平均效用', 'C. 消费者获得的总效用最小', 'D. 消费者所获得的总效用为负'],
    answer: 'A',
    explanation: '边际效用为零时，总效用达到最大。'
  },
  {
    id: 'c2_s4',
    chapter: 2,
    type: 'single',
    question: '无差异曲线的一般形状反映( )。',
    options: ['A. 消费者的收入', 'B. 消费者的偏好', 'C. 商品的价格', 'D. 所购商品的供求关系'],
    answer: 'B',
    explanation: '无差异曲线反映消费者的偏好。'
  },
  {
    id: 'c2_s5',
    chapter: 2,
    type: 'single',
    question: '同一条无差异曲线上的不同点表示( )。',
    options: ['A. 所消费的两种商品的数量组合相同，带来的效用水平也相同', 'B. 所消费的两种商品的数量组合相同，但带来的效用水平不相同', 'C. 所消费的两种商品的数量组合不同，但带来的效用水平相同', 'D. 所消费的两种商品的数量组合不同，带来的效用水平也不同'],
    answer: 'C',
    explanation: '同一条无差异曲线上效用水平相同，但商品组合不同。'
  },
  {
    id: 'c2_s6',
    chapter: 2,
    type: 'single',
    question: '人们常说"多多益善"，从经济学角度，这是指随着所消费的商品数量增多( )。',
    options: ['A. 总效用递增', 'B. 边际效用递增', 'C. 总效用递减', 'D. 边际效用递减'],
    answer: 'A',
    explanation: '"多多益善"指总效用随消费量增加而增加。'
  },
  {
    id: 'c2_s7',
    chapter: 2,
    type: 'single',
    question: '如果消费者消费15个面包获得的总效用是100个效用单位，消费16个面包获得的总效用是108个效用单位，则第16个面包的边际效用是( )。',
    options: ['A. 100个', 'B. 108个', 'C. 8个', 'D. 无法确定'],
    answer: 'C',
    explanation: '边际效用=108-100=8个效用单位。'
  },
  {
    id: 'c2_s8',
    chapter: 2,
    type: 'single',
    question: '下列关于消费者欲望错误的论述是( )。',
    options: ['A. 消费源于消费者的欲望，欲望源于人的内在生理和心理的本性', 'B. 欲望即"需要而没有"，指一个人想要但还没有得到某种东西的一种心理感觉', 'C. 一种欲望得到满足，更高层次的欲望也会随之产生', 'D. 随着对某一特定商品消费数量增多，人对该商品的欲望也会增加'],
    answer: 'D',
    explanation: '消费数量增多，欲望通常会减少（边际效用递减）。'
  },
  {
    id: 'c2_s9',
    chapter: 2,
    type: 'single',
    question: '以下不属于消费者偏好假设的是( )。',
    options: ['A. 饱和性', 'B. 多样性', 'C. 传递性', 'D. 次序性'],
    answer: 'A',
    explanation: '消费者偏好假设包括非饱和性、多样性、传递性、次序性。'
  },
  {
    id: 'c2_s10',
    chapter: 2,
    type: 'single',
    question: '当小红想要购买3份面条时，她必须放弃购买2个汉堡，则面条对汉堡的边际替代率为( )。',
    options: ['A. 3/2', 'B. 2/3', 'C. 2', 'D. 3'],
    answer: 'B',
    explanation: 'MRS=ΔY/ΔX=2/3。'
  },
  {
    id: 'c2_s11',
    chapter: 2,
    type: 'single',
    question: '消费者的预算约束线与坐标轴的截距和斜率由( )决定。',
    options: ['A. 消费者的偏好', 'B. 消费者的收入和商品的价格', 'C. 消费者的收入', 'D. 消费者的偏好、收入和商品的价格'],
    answer: 'B',
    explanation: '预算约束线由收入和商品价格决定。'
  },
  {
    id: 'c2_s12',
    chapter: 2,
    type: 'single',
    question: '消费者的收入不变，两种商品的价格同比例、同方向变动，消费预算线( )。',
    options: ['A. 平移', 'B. 绕着一点转动', 'C. 不变动', 'D. 不能确定'],
    answer: 'A',
    explanation: '价格同比例变动，预算线平移。'
  },
  {
    id: 'c2_s13',
    chapter: 2,
    type: 'single',
    question: '边际替代率也可以表示为两种商品的( )。',
    options: ['A. 总效用之比', 'B. 平均效用之比', 'C. 边际效用之比', 'D. 价格之比'],
    answer: 'C',
    explanation: '边际替代率等于边际效用之比。'
  },
  {
    id: 'c2_s14',
    chapter: 2,
    type: 'single',
    question: '若X商品对Y商品的边际替代率MRSxy=2，这意味着消费者愿意放弃( )单位X而获得一单位Y。',
    options: ['A. 1/2', 'B. 2', 'C. 1', 'D. 不确定'],
    answer: 'A',
    explanation: 'MRSxy=2表示愿意放弃2单位Y换取1单位X，或放弃1/2单位X换取1单位Y。'
  },
  {
    id: 'c2_s15',
    chapter: 2,
    type: 'single',
    question: '当某消费者对X商品的偏好高于Y商品，是因为( )。',
    options: ['A. 商品X的效用大', 'B. 商品X的价格低', 'C. 商品X稀缺', 'D. 商品X更满足精神需要'],
    answer: 'A',
    explanation: '偏好取决于商品带来的效用大小。'
  },
  {
    id: 'c2_s16',
    chapter: 2,
    type: 'single',
    question: '某消费者逐渐增加某种商品的消费量，直至达到了效用最大化，在这个过程中，该商品的( )。',
    options: ['A. 总效益和边际效用不断增加', 'B. 总效用不断增加，边际效用不断下降', 'C. 总效益和边际效用同时下降', 'D. 总效用不断下降，边际效用不断增加'],
    answer: 'B',
    explanation: '效用最大化过程中，总效用增加，边际效用递减。'
  },
  {
    id: 'c2_s17',
    chapter: 2,
    type: 'single',
    question: '边际替代率代表了( )。',
    options: ['A. 消费者花在两种商品上的货币总额', 'B. 消费两种商品的价格比率', 'C. 在保持消费者效用不变的情况下，增加一种商品消费时愿意放弃的另一种商品的数量', 'D. 为了提高效用，消费者增加一些商品时愿意放弃的另一种商品的数量'],
    answer: 'C',
    explanation: '边际替代率定义：效用不变时，增加一单位商品愿意放弃的另一商品数量。'
  },
  {
    id: 'c2_s18',
    chapter: 2,
    type: 'single',
    question: '根据序数效用理论，消费者均衡是( )。',
    options: ['A. 无差异曲线与预算约束线的切点', 'B. 无差异曲线与预算约束线的相交之点', 'C. 离原点最远的无差异曲线上的任何一点', 'D. 离原点最近的预算约束线上的任何一点'],
    answer: 'A',
    explanation: '消费者均衡是无差异曲线与预算约束线的切点。'
  },
  {
    id: 'c2_s19',
    chapter: 2,
    type: 'single',
    question: '若小王消费橙汁和红茶时的边际替代率MRS=1/4，则下列说法中正确的是( )。',
    options: ['A. 橙汁价格为4，红茶价格为1时，小王获得最大效用', 'B. 橙汁价格为2，红茶价格为8时，小王获得最大效用', 'C. 橙汁价格为4，红茶价格为1时，小王应增加红茶的消费', 'D. 橙汁价格为2，红茶价格为8时，小王应增加橙汁的消费'],
    answer: 'B',
    explanation: '均衡时MRS=Px/Py=1/4，即橙汁价格/红茶价格=1/4。'
  },
  {
    id: 'c2_s20',
    chapter: 2,
    type: 'single',
    question: '预算约束线上每一点代表的商品数量组合( )。',
    options: ['A. 相同', 'B. 在某些场合下相同', 'C. 不同', 'D. 以上都有可能'],
    answer: 'C',
    explanation: '预算约束线上每一点代表不同的商品组合。'
  },
  // 第二章 判断题
  {
    id: 'c2_j1',
    chapter: 2,
    type: 'judge',
    question: '效用是消费者的一种主观心理感受，有客观的、统一的衡量标准。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '效用是主观感受，没有客观统一标准。'
  },
  {
    id: 'c2_j2',
    chapter: 2,
    type: 'judge',
    question: '小红正在吃冰激凌，假设第一个冰激凌给小红带来的边际效用是10个单位，那么小红吃第三个冰激凌的边际效用可能是-5个单位。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际效用递减，可能为负。'
  },
  {
    id: 'c2_j3',
    chapter: 2,
    type: 'judge',
    question: '只要总效用是正数，边际效用就不可能是负数。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '总效用为正时，边际效用可能为负（过度消费）。'
  },
  {
    id: 'c2_j4',
    chapter: 2,
    type: 'judge',
    question: '在消费者的收入和商品的价格一定的条件下，预算约束线是一条确定的直线。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '收入和价格确定，预算约束线确定。'
  },
  {
    id: 'c2_j5',
    chapter: 2,
    type: 'judge',
    question: '互为完全互补品的无差异曲线是向右下方倾斜的直线。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '完全互补品的无差异曲线是直角形。'
  },
  {
    id: 'c2_j6',
    chapter: 2,
    type: 'judge',
    question: '在同等条件下，消费者认为不同商品的组合比只拥有一种商品要好，体现的是消费者偏好的非饱和性。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '体现的是多样性偏好。'
  },
  {
    id: 'c2_j7',
    chapter: 2,
    type: 'judge',
    question: '商品的边际替代率递减规律反映出了两种商品对消费者而言所缺程度的相对变动，同时也保证了无差异曲线凸向原点。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际替代率递减导致无差异曲线凸向原点。'
  },
  {
    id: 'c2_j8',
    chapter: 2,
    type: 'judge',
    question: '消费者对某个物品没有欲望，那么消费该物品就不会带来效用。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '效用是欲望的满足，无欲望则无效用。'
  },
  {
    id: 'c2_j9',
    chapter: 2,
    type: 'judge',
    question: '离原点越近的无差异曲线，消费者的偏好程度越高。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '离原点越远的无差异曲线，效用水平越高。'
  },
  {
    id: 'c2_j10',
    chapter: 2,
    type: 'judge',
    question: '无差异曲线一定是一条向右下方倾斜的直线。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '无差异曲线通常是凸向原点的曲线。'
  },
  {
    id: 'c2_j11',
    chapter: 2,
    type: 'judge',
    question: '同样一种商品的效用将因人、因地、因时的不同而不同。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '效用具有主观性。'
  },
  {
    id: 'c2_j12',
    chapter: 2,
    type: 'judge',
    question: '序数效用论认为，消费者对任意两个商品组合都能进行排序。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '序数效用论的基本假设。'
  },
  {
    id: 'c2_j13',
    chapter: 2,
    type: 'judge',
    question: '消费者剩余是消费者获得的净福利，意味着消费者实际收入的增加。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '消费者剩余是心理满足，不是实际收入增加。'
  },
  {
    id: 'c2_j14',
    chapter: 2,
    type: 'judge',
    question: '消费者根据自己的意愿对可供消费的商品或商品组合进行排序，这就是消费者的偏好。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '偏好的定义正确。'
  },
  {
    id: 'c2_j15',
    chapter: 2,
    type: 'judge',
    question: '一般来说，边际效用的大小与欲望的强弱成反比、与消费量的多少成正比。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '边际效用与欲望强弱成正比，与消费量成反比。'
  },
  {
    id: 'c2_j16',
    chapter: 2,
    type: 'judge',
    question: '在无差异曲线的平面坐标图中，有无数条无差异曲线。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '无差异曲线有无数条，代表不同效用水平。'
  },
  {
    id: 'c2_j17',
    chapter: 2,
    type: 'judge',
    question: '如果边际效用递减，则总效用相应下降。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '边际效用递减时，总效用仍可能增加（只要边际效用为正）。'
  },
  {
    id: 'c2_j18',
    chapter: 2,
    type: 'judge',
    question: '预算约束线表示在收入和商品价格既定的条件下，消费者用全部收入所能购买的产品或服务的最大组合数量。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '预算约束线的定义正确。'
  },
  {
    id: 'c2_j19',
    chapter: 2,
    type: 'judge',
    question: '效用是人的心理感受，它既不可以比较，也不可以度量。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '效用可以比较（序数效用）和度量（基数效用）。'
  },
  {
    id: 'c2_j20',
    chapter: 2,
    type: 'judge',
    question: '对理性人来说，当某物品的边际效用已降至零时，他不会再增加该物品的消费。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际效用为零时，总效用最大，理性人停止消费。'
  },
  // 第三章 单选题
  {
    id: 'c3_s1',
    chapter: 3,
    type: 'single',
    question: '属于企业法人、享有独立的法人财产权的企业组织形式是( )。',
    options: ['A. 个人独资企业', 'B. 合伙制企业', 'C. 公司制企业', 'D. 民营企业'],
    answer: 'C',
    explanation: '公司制企业具有法人资格。'
  },
  {
    id: 'c3_s2',
    chapter: 3,
    type: 'single',
    question: '当各种投入要素都可变时，一般是研究企业的( )。',
    options: ['A. 短期生产', 'B. 长期生产', 'C. 边际产量', 'D. 平均产量'],
    answer: 'B',
    explanation: '长期生产中所有要素都可变。'
  },
  {
    id: 'c3_s3',
    chapter: 3,
    type: 'single',
    question: '在生产的短期内，假定其他不变的情况，如果连续增加劳动的投入，当劳动的边际产量为0时，总产量( )。',
    options: ['A. 达到最小', 'B. 达到最大值', 'C. 为0', 'D. 出现负值'],
    answer: 'B',
    explanation: '边际产量为零时，总产量达到最大。'
  },
  {
    id: 'c3_s4',
    chapter: 3,
    type: 'single',
    question: '在其他投入保持不变的条件下，新增一单位的投入而多生产出来的产量或产出称为( )。',
    options: ['A. 总产量', 'B. 平均产量', 'C. 边际产量', 'D. 最大产量'],
    answer: 'C',
    explanation: '边际产量的定义。'
  },
  {
    id: 'c3_s5',
    chapter: 3,
    type: 'single',
    question: '假设只有一种生产要素投入可变、其他生产要素投入不变，关于边际产量和平均产量关系的说法中正确的是( )。',
    options: ['A. 只要边际产量大于平均产量，平均产量就是递增的', 'B. 只要边际产量等于平均产量，平均产量就是递增的', 'C. 只要边际产量小于平均产量，平均产量就是递增的', 'D. 只要边际产量大于平均产量，平均产量就是递减的'],
    answer: 'A',
    explanation: '边际产量大于平均产量时，平均产量递增。'
  },
  {
    id: 'c3_s6',
    chapter: 3,
    type: 'single',
    question: '在短期生产分析中，MPL、APL和TPL曲线中最先达到最高的是( )。',
    options: ['A. TPL', 'B. APL', 'C. MPL', 'D. 同时达到'],
    answer: 'C',
    explanation: '边际产量最先达到最高点。'
  },
  {
    id: 'c3_s7',
    chapter: 3,
    type: 'single',
    question: '当边际产量大于平均产量时，平均产量( )。',
    options: ['A. 不变', 'B. 递减', 'C. 递增', 'D. 先增后减'],
    answer: 'C',
    explanation: '边际产量大于平均产量时，平均产量递增。'
  },
  {
    id: 'c3_s8',
    chapter: 3,
    type: 'single',
    question: '边际报酬递减规律发生作用的前提条件是( )。',
    options: ['A. 连续地投入某种生产要素而保持其他生产要素不变', 'B. 生产技术不变', 'C. 按比例同时增加各种生产要素', 'D. 以上都是'],
    answer: 'B',
    explanation: '边际报酬递减规律的前提是技术水平不变。'
  },
  {
    id: 'c3_s9',
    chapter: 3,
    type: 'single',
    question: '等产量曲线( )。',
    options: ['A. 向右上方倾斜', 'B. 向右下方倾斜', 'C. 是一条水平线', 'D. 是一条垂直线'],
    answer: 'B',
    explanation: '等产量曲线向右下方倾斜。'
  },
  {
    id: 'c3_s10',
    chapter: 3,
    type: 'single',
    question: '等成本曲线平行向外移动表明( )。',
    options: ['A. 产量提高了', 'B. 成本增加了', 'C. 生产要素的价格按相同比例提高了', 'D. 生产要素的价格按不同比例提高了'],
    answer: 'B',
    explanation: '等成本曲线外移表示成本增加。'
  },
  {
    id: 'c3_s11',
    chapter: 3,
    type: 'single',
    question: '厂商生产的目的是( )。',
    options: ['A. 利润最大化', 'B. 产量最大化', 'C. 成本最小化', 'D. 收益最大化'],
    answer: 'A',
    explanation: '厂商以利润最大化为目标。'
  },
  {
    id: 'c3_s12',
    chapter: 3,
    type: 'single',
    question: '在短期中，当边际成本曲线位于平均成本曲线上方时，平均成本曲线( )。',
    options: ['A. 上升', 'B. 下降', 'C. 不变', 'D. 先降后升'],
    answer: 'A',
    explanation: '边际成本大于平均成本时，平均成本上升。'
  },
  {
    id: 'c3_s13',
    chapter: 3,
    type: 'single',
    question: '随着产量的增加，平均固定成本( )。',
    options: ['A. 先降后升', 'B. 先升后降', 'C. 一直趋于下降', 'D. 一直趋于上升'],
    answer: 'C',
    explanation: '平均固定成本随产量增加而递减。'
  },
  {
    id: 'c3_s14',
    chapter: 3,
    type: 'single',
    question: '边际成本曲线与平均成本曲线的交点是( )。',
    options: ['A. 平均成本曲线的最低点', 'B. 边际成本曲线的最低点', 'C. 平均成本曲线的最高点', 'D. 边际成本曲线的最高点'],
    answer: 'A',
    explanation: '边际成本曲线与平均成本曲线相交于平均成本最低点。'
  },
  {
    id: 'c3_s15',
    chapter: 3,
    type: 'single',
    question: '长期平均成本曲线呈U形的原因与( )有关。',
    options: ['A. 规模报酬', 'B. 边际报酬递减规律', 'C. 外部经济与不经济', 'D. 固定成本与可变成本所占比重'],
    answer: 'A',
    explanation: '长期平均成本曲线U形与规模报酬有关。'
  },
  {
    id: 'c3_s16',
    chapter: 3,
    type: 'single',
    question: '当某厂商以最小成本提供既定产量时，那么该厂商( )。',
    options: ['A. 一定获得最大利润', 'B. 一定未获得最大利润', 'C. 无法确定是否获得最大利润', 'D. 经济利润为零'],
    answer: 'C',
    explanation: '最小成本生产不一定获得最大利润，还需考虑收益。'
  },
  {
    id: 'c3_s17',
    chapter: 3,
    type: 'single',
    question: '机会成本的经济含义是( )。',
    options: ['A. 使用一种资源的机会成本是放弃这种资源另外一种用途的收入', 'B. 使用一种资源的机会成本是放弃这种资源在其他用途中所能得到的最高收入', 'C. 使用一种资源的机会成本是放弃这种资源用于次优用途的收入', 'D. 使用一种资源的机会成本是放弃这种资源继续使用而必须支付的费用'],
    answer: 'B',
    explanation: '机会成本是放弃的最高收入。'
  },
  {
    id: 'c3_s18',
    chapter: 3,
    type: 'single',
    question: '隐性成本是指( )。',
    options: ['A. 使用自有生产要素的机会成本', 'B. 使用借入资金的机会成本', 'C. 使用自有资金的利息', 'D. 使用自有厂房的租金'],
    answer: 'A',
    explanation: '隐性成本是使用自有要素的机会成本。'
  },
  {
    id: 'c3_s19',
    chapter: 3,
    type: 'single',
    question: '经济利润等于总收益减去( )。',
    options: ['A. 显性成本', 'B. 隐性成本', 'C. 会计成本', 'D. 经济成本'],
    answer: 'D',
    explanation: '经济利润=总收益-经济成本（显性+隐性成本）。'
  },
  {
    id: 'c3_s20',
    chapter: 3,
    type: 'single',
    question: '在边际产量与平均产量呈现先递增后递减的特征，边际产量递减时必定带来平均产量递减。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '边际产量递减时，平均产量可能仍在增加。'
  },
  // 第三章 判断题
  {
    id: 'c3_j1',
    chapter: 3,
    type: 'judge',
    question: '在生产的短期，所有生产要素都是可变的。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '短期中至少有一种要素固定。'
  },
  {
    id: 'c3_j2',
    chapter: 3,
    type: 'judge',
    question: '当边际产量为零时，总产量达到最大。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际产量为零时，总产量最大。'
  },
  {
    id: 'c3_j3',
    chapter: 3,
    type: 'judge',
    question: '边际报酬递减规律意味着边际产量最终将是递减的。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际报酬递减规律的核心内容。'
  },
  {
    id: 'c3_j4',
    chapter: 3,
    type: 'judge',
    question: '等产量曲线距离坐标原点越远，代表的产量水平越高。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '等产量曲线离原点越远，产量越高。'
  },
  {
    id: 'c3_j5',
    chapter: 3,
    type: 'judge',
    question: '等产量曲线与等成本曲线的切点表示生产者均衡。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '生产者均衡是等产量曲线与等成本曲线的切点。'
  },
  {
    id: 'c3_j6',
    chapter: 3,
    type: 'judge',
    question: '会计成本等于显性成本与隐性成本之和。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '会计成本只包括显性成本。'
  },
  {
    id: 'c3_j7',
    chapter: 3,
    type: 'judge',
    question: '经济成本包括显性成本和隐性成本。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '经济成本=显性成本+隐性成本。'
  },
  {
    id: 'c3_j8',
    chapter: 3,
    type: 'judge',
    question: '正常利润是经济利润的一部分。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '正常利润是隐性成本的一部分，不是经济利润。'
  },
  {
    id: 'c3_j9',
    chapter: 3,
    type: 'judge',
    question: '固定成本不随产量的变化而变化。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '固定成本的定义。'
  },
  {
    id: 'c3_j10',
    chapter: 3,
    type: 'judge',
    question: '平均可变成本曲线呈U形。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '平均可变成本曲线先降后升，呈U形。'
  },
  {
    id: 'c3_j11',
    chapter: 3,
    type: 'judge',
    question: '边际成本曲线与平均可变成本曲线相交于平均可变成本曲线的最低点。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际成本曲线与平均可变成本曲线相交于最低点。'
  },
  {
    id: 'c3_j12',
    chapter: 3,
    type: 'judge',
    question: '长期平均成本曲线是短期平均成本曲线的包络线。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '长期平均成本曲线是各短期平均成本曲线的包络线。'
  },
  {
    id: 'c3_j13',
    chapter: 3,
    type: 'judge',
    question: '规模报酬递增意味着长期平均成本递减。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '规模报酬递增时，长期平均成本递减。'
  },
  {
    id: 'c3_j14',
    chapter: 3,
    type: 'judge',
    question: '当产量为零时，总成本也为零。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '产量为零时，仍有固定成本。'
  },
  {
    id: 'c3_j15',
    chapter: 3,
    type: 'judge',
    question: '边际成本是增加一单位产量所增加的总成本。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际成本的定义。'
  },
  {
    id: 'c3_j16',
    chapter: 3,
    type: 'judge',
    question: '短期边际成本曲线与短期平均成本曲线相交于平均成本曲线的最低点。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '边际成本曲线与平均成本曲线相交于最低点。'
  },
  {
    id: 'c3_j17',
    chapter: 3,
    type: 'judge',
    question: '长期中所有成本都是可变的。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '长期中所有要素都可变，所有成本都可变。'
  },
  {
    id: 'c3_j18',
    chapter: 3,
    type: 'judge',
    question: '平均固定成本随产量增加而递减。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '平均固定成本随产量增加而递减。'
  },
  {
    id: 'c3_j19',
    chapter: 3,
    type: 'judge',
    question: '当边际产量递减时，平均产量必定递减。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '边际产量递减时，平均产量可能仍在增加。'
  },
  {
    id: 'c3_j20',
    chapter: 3,
    type: 'judge',
    question: '等产量曲线上各点代表的产量水平相同。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '等产量曲线的定义。'
  },
  // 第四章 单选题
  {
    id: 'c4_s1',
    chapter: 4,
    type: 'single',
    question: '市场结构指的是某一个行业中垄断与竞争的程度，可分为( )种类型。',
    options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
    answer: 'C',
    explanation: '市场结构分为完全竞争、垄断、垄断竞争、寡头垄断四种。'
  },
  {
    id: 'c4_s2',
    chapter: 4,
    type: 'single',
    question: '完全竞争市场的特征是( )。',
    options: ['A. 厂商众多，产品同质', 'B. 厂商众多，产品异质', 'C. 厂商很少，产品同质', 'D. 厂商很少，产品异质'],
    answer: 'A',
    explanation: '完全竞争市场厂商众多，产品同质。'
  },
  {
    id: 'c4_s3',
    chapter: 4,
    type: 'single',
    question: '在完全竞争市场上，厂商是价格的( )。',
    options: ['A. 制定者', 'B. 接受者', 'C. 影响者', 'D. 决定者'],
    answer: 'B',
    explanation: '完全竞争市场中厂商是价格接受者。'
  },
  {
    id: 'c4_s4',
    chapter: 4,
    type: 'single',
    question: '完全竞争厂商的短期供给曲线是( )。',
    options: ['A. 平均成本曲线', 'B. 边际成本曲线', 'C. 平均可变成本曲线以上的边际成本曲线', 'D. 平均固定成本曲线'],
    answer: 'C',
    explanation: '短期供给曲线是AVC以上的MC曲线。'
  },
  {
    id: 'c4_s5',
    chapter: 4,
    type: 'single',
    question: '在完全竞争市场上，厂商短期均衡的条件是( )。',
    options: ['A. MR=AR', 'B. MR=MC', 'C. AR=MC', 'D. MR=AC'],
    answer: 'B',
    explanation: '厂商均衡条件是MR=MC。'
  },
  {
    id: 'c4_s6',
    chapter: 4,
    type: 'single',
    question: '垄断市场的特征是( )。',
    options: ['A. 厂商众多，产品同质', 'B. 厂商唯一，产品无替代品', 'C. 厂商众多，产品异质', 'D. 厂商很少，相互依存'],
    answer: 'B',
    explanation: '垄断市场厂商唯一，产品无替代品。'
  },
  {
    id: 'c4_s7',
    chapter: 4,
    type: 'single',
    question: '垄断厂商的需求曲线是( )。',
    options: ['A. 水平的', 'B. 向右下方倾斜的', 'C. 向右上方倾斜的', 'D. 垂直的'],
    answer: 'B',
    explanation: '垄断厂商面临向右下方倾斜的需求曲线。'
  },
  {
    id: 'c4_s8',
    chapter: 4,
    type: 'single',
    question: '垄断厂商的利润最大化条件是( )。',
    options: ['A. MR=AR', 'B. MR=MC', 'C. P=MC', 'D. P=AC'],
    answer: 'B',
    explanation: '垄断厂商利润最大化条件也是MR=MC。'
  },
  {
    id: 'c4_s9',
    chapter: 4,
    type: 'single',
    question: '价格歧视是指( )。',
    options: ['A. 对不同消费者收取不同价格', 'B. 对同一商品向不同消费者收取不同价格', 'C. 对不同商品收取不同价格', 'D. 对不同时间收取不同价格'],
    answer: 'B',
    explanation: '价格歧视是对同一商品向不同消费者收取不同价格。'
  },
  {
    id: 'c4_s10',
    chapter: 4,
    type: 'single',
    question: '垄断竞争市场的特征是( )。',
    options: ['A. 厂商众多，产品同质', 'B. 厂商众多，产品异质', 'C. 厂商唯一，产品无替代品', 'D. 厂商很少，相互依存'],
    answer: 'B',
    explanation: '垄断竞争市场厂商众多，产品异质。'
  },
  {
    id: 'c4_s11',
    chapter: 4,
    type: 'single',
    question: '寡头垄断市场的特征是( )。',
    options: ['A. 厂商众多，产品同质', 'B. 厂商众多，产品异质', 'C. 厂商唯一，产品无替代品', 'D. 厂商很少，相互依存'],
    answer: 'D',
    explanation: '寡头垄断市场厂商很少，相互依存。'
  },
  {
    id: 'c4_s12',
    chapter: 4,
    type: 'single',
    question: '卡特尔是( )。',
    options: ['A. 完全竞争厂商的联盟', 'B. 垄断竞争厂商的联盟', 'C. 寡头垄断厂商的联盟', 'D. 垄断厂商的联盟'],
    answer: 'C',
    explanation: '卡特尔是寡头垄断厂商的联盟。'
  },
  {
    id: 'c4_s13',
    chapter: 4,
    type: 'single',
    question: '在完全竞争市场上，长期均衡时厂商( )。',
    options: ['A. 获得超额利润', 'B. 获得正常利润', 'C. 亏损', 'D. 利润不确定'],
    answer: 'B',
    explanation: '完全竞争市场长期均衡时厂商获得正常利润。'
  },
  {
    id: 'c4_s14',
    chapter: 4,
    type: 'single',
    question: '自然垄断产生的原因是( )。',
    options: ['A. 规模经济', 'B. 政府特许', 'C. 专利保护', 'D. 资源控制'],
    answer: 'A',
    explanation: '自然垄断源于规模经济。'
  },
  {
    id: 'c4_s15',
    chapter: 4,
    type: 'single',
    question: '完全竞争厂商的边际收益曲线是( )。',
    options: ['A. 向右下方倾斜的', 'B. 向右上方倾斜的', 'C. 水平的', 'D. 垂直的'],
    answer: 'C',
    explanation: '完全竞争厂商边际收益等于价格，是水平线。'
  },
  {
    id: 'c4_s16',
    chapter: 4,
    type: 'single',
    question: '垄断厂商的边际收益曲线( )。',
    options: ['A. 与需求曲线重合', 'B. 在需求曲线下方', 'C. 在需求曲线上方', 'D. 与需求曲线无关'],
    answer: 'B',
    explanation: '垄断厂商边际收益曲线在需求曲线下方。'
  },
  {
    id: 'c4_s17',
    chapter: 4,
    type: 'single',
    question: '在垄断竞争市场上，厂商长期均衡时( )。',
    options: ['A. 获得超额利润', 'B. 获得正常利润', 'C. 亏损', 'D. 利润不确定'],
    answer: 'B',
    explanation: '垄断竞争市场长期均衡时获得正常利润。'
  },
  {
    id: 'c4_s18',
    chapter: 4,
    type: 'single',
    question: '古诺模型描述的是( )。',
    options: ['A. 完全竞争市场', 'B. 垄断市场', 'C. 寡头垄断市场', 'D. 垄断竞争市场'],
    answer: 'C',
    explanation: '古诺模型描述寡头垄断市场。'
  },
  {
    id: 'c4_s19',
    chapter: 4,
    type: 'single',
    question: '斯威齐模型解释了寡头垄断市场的( )。',
    options: ['A. 价格刚性', 'B. 产量决定', 'C. 进入壁垒', 'D. 产品差异'],
    answer: 'A',
    explanation: '斯威齐模型解释价格刚性现象。'
  },
  {
    id: 'c4_s20',
    chapter: 4,
    type: 'single',
    question: '完全竞争市场的效率( )。',
    options: ['A. 最高', 'B. 最低', 'C. 中等', 'D. 不确定'],
    answer: 'A',
    explanation: '完全竞争市场资源配置效率最高。'
  },
  // 第四章 判断题
  {
    id: 'c4_j1',
    chapter: 4,
    type: 'judge',
    question: '完全竞争市场中，单个厂商的需求曲线是水平的。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '完全竞争厂商是价格接受者，需求曲线水平。'
  },
  {
    id: 'c4_j2',
    chapter: 4,
    type: 'judge',
    question: '垄断厂商可以任意定价。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '垄断厂商受需求曲线约束，不能任意定价。'
  },
  {
    id: 'c4_j3',
    chapter: 4,
    type: 'judge',
    question: '垄断竞争厂商的产品是有差异的。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '垄断竞争市场产品具有差异性。'
  },
  {
    id: 'c4_j4',
    chapter: 4,
    type: 'judge',
    question: '寡头垄断厂商之间存在相互依存关系。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '寡头垄断厂商决策相互影响。'
  },
  {
    id: 'c4_j5',
    chapter: 4,
    type: 'judge',
    question: '完全竞争市场长期均衡时，厂商获得超额利润。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '长期均衡时只获得正常利润。'
  },
  {
    id: 'c4_j6',
    chapter: 4,
    type: 'judge',
    question: '价格歧视一定会损害消费者利益。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '一级价格歧视可能提高效率。'
  },
  {
    id: 'c4_j7',
    chapter: 4,
    type: 'judge',
    question: '自然垄断是由于规模经济导致的。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '自然垄断源于规模经济。'
  },
  {
    id: 'c4_j8',
    chapter: 4,
    type: 'judge',
    question: '完全竞争厂商的短期供给曲线是边际成本曲线。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '是AVC以上的MC曲线。'
  },
  {
    id: 'c4_j9',
    chapter: 4,
    type: 'judge',
    question: '垄断厂商的边际收益等于价格。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '垄断厂商边际收益小于价格。'
  },
  {
    id: 'c4_j10',
    chapter: 4,
    type: 'judge',
    question: '卡特尔是不稳定的，因为成员有欺骗动机。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '卡特尔成员有偷偷增产的动机。'
  },
  {
    id: 'c4_j11',
    chapter: 4,
    type: 'judge',
    question: '垄断竞争厂商长期均衡时，价格等于平均成本。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '长期均衡时P=AC，经济利润为零。'
  },
  {
    id: 'c4_j12',
    chapter: 4,
    type: 'judge',
    question: '完全竞争市场的资源配置效率最高。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '完全竞争市场实现帕累托最优。'
  },
  {
    id: 'c4_j13',
    chapter: 4,
    type: 'judge',
    question: '寡头垄断市场的价格通常比完全竞争市场高。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '寡头垄断市场产量低、价格高。'
  },
  {
    id: 'c4_j14',
    chapter: 4,
    type: 'judge',
    question: '垄断厂商一定能够获得超额利润。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '垄断厂商也可能亏损。'
  },
  {
    id: 'c4_j15',
    chapter: 4,
    type: 'judge',
    question: '产品差异是垄断竞争市场的重要特征。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '产品差异是垄断竞争的核心特征。'
  },
  {
    id: 'c4_j16',
    chapter: 4,
    type: 'judge',
    question: '完全竞争厂商是价格的制定者。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B',
    explanation: '完全竞争厂商是价格接受者。'
  },
  {
    id: 'c4_j17',
    chapter: 4,
    type: 'judge',
    question: '进入壁垒是垄断市场形成的重要原因。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '进入壁垒阻止竞争者进入。'
  },
  {
    id: 'c4_j18',
    chapter: 4,
    type: 'judge',
    question: '古诺模型中，厂商同时决定产量。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '古诺模型假设厂商同时决策。'
  },
  {
    id: 'c4_j19',
    chapter: 4,
    type: 'judge',
    question: '垄断竞争厂商的需求曲线比完全垄断厂商的需求曲线更平坦。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '垄断竞争厂商面临的需求弹性更大。'
  },
  {
    id: 'c4_j20',
    chapter: 4,
    type: 'judge',
    question: '完全竞争厂商的边际收益曲线与平均收益曲线重合。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A',
    explanation: '完全竞争厂商MR=AR=P。'
  }
];

export function getQuestionsByChapter(chapterId: number): Question[] {
  return allQuestions.filter(q => q.chapter === chapterId);
}

export function generateExam(chapterId: number): Question[] {
  const chapterQuestions = getQuestionsByChapter(chapterId);
  const singleChoice = chapterQuestions.filter(q => q.type === 'single');
  const judgeQuestions = chapterQuestions.filter(q => q.type === 'judge');

  // 随机选择20道单选题和20道判断题
  const selectedSingle = shuffleArray(singleChoice).slice(0, 20);
  const selectedJudge = shuffleArray(judgeQuestions).slice(0, 20);

  // 合并并打乱顺序
  const examQuestions = [...selectedSingle, ...selectedJudge];

  // 随机打乱选项顺序（单选题）
  return examQuestions.map(q => {
    if (q.type === 'single') {
      const originalAnswer = q.answer;
      const shuffledOptions = shuffleArray([...q.options]);
      const newAnswer = shuffledOptions.find(opt => opt.startsWith(originalAnswer))?.charAt(0) || originalAnswer;
      return { ...q, options: shuffledOptions, answer: newAnswer };
    }
    return q;
  });
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
