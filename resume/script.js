const metrics = [
  { value: "#1", label: "Product Hunt 月榜", note: "Happycapy AI · 2026 年 2 月", accent: "amber" },
  { value: "99,999+", label: "Skills 供给规模", note: "主导 Skill Store 质量体系从 0 到 1", accent: "blue" },
  { value: "24h", label: "PoC 交付速度", note: "Vibe Coding · 痛点到可演示原型", accent: "violet" },
  { value: "7×24", label: "无人值守 Agent", note: "Happycapy Guide 自动化内容工厂", accent: "green" },
  { value: "5+", label: "AI Side Projects", note: "上线运行 / GitHub 活跃产出", accent: "blue" },
  { value: "3+", label: "开源架构拆解", note: "Claude Code · OpenClaw · Hermes", accent: "red" },
];

const capabilities = [
  {
    icon: "A",
    title: "AI Agent 全链路",
    text: "意图识别、上下文管理、Skill 调用、模型评测、Trace 排查；熟悉 LangGraph、Smolagents、Claude Code、OpenClaw、Hermes 等架构。",
  },
  {
    icon: "V",
    title: "Vibe Coding & 低代码 PoC",
    text: "Claude Code / Codex / Cursor 重度日用；Python（PyTorch、scikit-learn）+ SQL + Linux CLI；24 小时内从需求到可演示 PoC。",
  },
  {
    icon: "P",
    title: "AI Native 产品化",
    text: "用户旅程设计、验收标准定义、A/B Test、Badcase 归因、数据驱动决策；把传统流程重构成 Agent-native 体验。",
  },
  {
    icon: "G",
    title: "增长 & 对外宣发",
    text: "Product Hunt 冲榜（月榜 #1）、海外竞品拆解、Discord 社区运营、香港线下 AI Creator 活动端到端执行。",
  },
];

const socialProof = [
  { name: "GitHub", value: "TIANGE2211123", href: "https://github.com/TIANGE2211123" },
  { name: "Live Demo", value: "Happycapy Guide", href: "#timeline" },
  { name: "Tech Notes", value: "开源 Agent 架构", href: "#papers" },
  { name: "Email", value: "tiangezha@gmail.com", href: "mailto:tiangezha@gmail.com" },
];

const workflowSteps = [
  { step: "01", title: "Problem", tool: "行业痛点扫描", desc: "SEO/GEO 竞品分析 + Discord 社区反馈，把碎片化信号回写产品需求池。", mark: "P" },
  { step: "02", title: "Architecture", tool: "Agent 系统设计", desc: "用户旅程：提交 → 自动审查 → 人工复核 → 上架/拒绝/回退，状态机可量化。", mark: "A" },
  { step: "03", title: "Vibe Coding", tool: "Claude Code + Codex + Cursor", desc: "跳过 PRD 直接出可交互原型，单日落地 skills-json-auditor 内部工具。", mark: "V" },
  { step: "04", title: "Evaluation", tool: "数据回收 & A/B Test", desc: "把分析数据接回生成环节，模板变体基于真实 SEO 表现做 A/B 测试。", mark: "E" },
  { step: "05", title: "Iteration", tool: "周报 + 竞品差距", desc: "每周输出关键指标 + 竞品差距报告，把信号转化为可执行的产品输入。", mark: "R" },
];

const projects = [
  {
    icon: "HC",
    title: "Happycapy AI · Skill 审核平台",
    metric: "PH #1",
    desc: "主导 Skill Store 质量体系从 0 到 1：定义数据标注 SOP（来源核查、代码红旗、权限评估、风险分级），把质量与安全抽象为可量化指标。",
    proof: "Agent-native 用户旅程：提交 → 自动审查 → 人工复核 → 上架/拒绝/回退；跨研发、设计、运营推动落地。",
    tags: ["Agent Platform", "Skill Audit", "User Journey"],
    href: "#timeline",
  },
  {
    icon: "HG",
    title: "Happycapy Guide · 自动化 Agent 内容工厂",
    metric: "7×24 Live",
    desc: "Agent as Workforce 的个人 PoC：完全无人值守、7×24 自动化运转的内容站，每天替我完成一份原本需要人力的工作。",
    proof: "多阶段 Agent 流水线：信号采集 → 主题聚类 → 草稿生成 → 编辑校验 → 自动发布；长尾内容在 Google 长期稳定出现。",
    tags: ["Multi-Agent", "Workflow", "SEO"],
    href: "#timeline",
  },
  {
    icon: "PS",
    title: "pSEO · 程序化 SEO 引擎",
    metric: "A/B Test",
    desc: "按关键词模板批量生成与管理落地页，用 Claude Code 搭建关键词输入 → 页面模板 → 渲染 → 发布全链路。",
    proof: "把分析数据接回生成环节，模板变体基于真实 SEO 表现做 A/B 测试，形成生成 ↔ 度量完整闭环。",
    tags: ["pSEO", "Growth", "Data Loop"],
    href: "https://github.com/TIANGE2211123",
  },
  {
    icon: "SJ",
    title: "skills-json-auditor · 内部审查工具",
    metric: "1 Day MVP",
    desc: "纯 Vibe Coding 自研的内部工具：单日 Claude Code 出原型，迭代到 URL 健康检查 + 风险等级自动判定。",
    proof: "把人工审查产品化，显著降低漏检率与人力成本，已在 Happycapy 内部上线使用。",
    tags: ["Internal Tool", "Audit", "Vibe Coding"],
    href: "#timeline",
  },
];

const typeConfig = {
  全部: { color: "#2457d6" },
  工作: { color: "#2457d6" },
  项目: { color: "#0f8f6b" },
  开源: { color: "#b56a10" },
  研究: { color: "#7357c8" },
  荣誉: { color: "#c54646" },
  影响力: { color: "#167c91" },
};

const nodes = [
  {
    id: "happycapy-agent-platform",
    type: "工作",
    date: "2026.01 – 2026.04",
    status: "AI Agent 产品 & 增长实习生",
    title: "Happycapy AI · Agent 平台核心模块从 0 到 1",
    org: "Happycapy AI · 远程 · Product Hunt 月榜 #1 · 99,999+ skills",
    oneLiner: "主导 Skill Store 质量体系建设，把传统 Skill 审核重构成 Agent-native 用户旅程。",
    metrics: [
      ["#1", "PH 月榜"],
      ["99,999+", "Skill 规模"],
      ["1 Day", "MVP 速度"],
    ],
    keywords: ["Agent Platform", "Skill Audit", "User Journey", "Vibe Coding"],
    images: [
      {
        src: "./assets/placeholders/project.svg",
        full: "./assets/placeholders/project.svg",
        type: "产品截图",
        caption: "Happycapy AI Skill Store · Agent-native 用户旅程",
      },
    ],
    detail: {
      background: "Happycapy 是 Agent-native 的 AI 工作空间，Skill 数量已达 99,999+。传统 Skill 审核流程粗糙、漏检率高、人工成本不可持续。",
      task: "负责 Skill 平台核心模块从 0 到 1：把审核流程产品化、可量化，并跨研发、设计、运营推动落地。",
      action: [
        "定义数据标注 SOP（来源核查、代码红旗检测、权限评估、风险分级），把质量与安全抽象为可量化指标，作为 Agent 平台供给侧核心验收口径。",
        "设计 Skill 审核全链路用户旅程：开发者提交 → 自动审查 → 人工复核 → 上架 / 拒绝 / 回退，输出产品流程图与状态机。",
        "纯 Vibe Coding 自研并部署内部审查工具 skills-json-auditor：单日 Claude Code 出原型，迭代到 URL 健康检查 + 风险等级自动判定。",
        "主导 SEO/GEO 竞品分析（对标 Manus、Lovable、Figma、Cursor），沉淀 use case 生产方法论与可批量复用的内容/产品模板。",
      ],
      result: "Product Hunt 月榜 #1（2026 年 2 月）；内部审查工具产品化降低漏检率与人力成本；每周关键指标 + 竞品差距报告直接服务产品策略。",
      talk: "可以展开：审核状态机的失败路径设计、Vibe Coding 单日落地策略、Agent 供给侧验收指标、海外 AI Native 产品的 use case 抽象方法论。",
    },
    links: [
      ["GitHub", "https://github.com/TIANGE2211123"],
    ],
  },
  {
    id: "ph-launch",
    type: "影响力",
    date: "2026.02",
    status: "Product Hunt 月榜 #1",
    title: "Happycapy AI Product Hunt 冲榜 · 月榜 #1",
    org: "Happycapy AI · 跨职能执行 & 对外宣发",
    oneLiner: "主导 PH 冲榜全流程：搭建实时数据追踪面板，监控投票与流量来源，按节奏调整传播策略。",
    metrics: [
      ["#1", "月榜排名"],
      ["Real-time", "数据面板"],
      ["跨职能", "协同推动"],
    ],
    keywords: ["Product Hunt", "Growth", "Marketing", "Cross-functional"],
    images: [
      {
        src: "./assets/placeholders/dashboard.svg",
        full: "./assets/placeholders/dashboard.svg",
        type: "数据看板",
        caption: "Product Hunt 实时数据追踪面板",
      },
    ],
    detail: {
      background: "Happycapy AI 作为 Agent-native 工作空间需要在海外社区获得早期 awareness，PH 是关键 launch channel。",
      task: "端到端主导 PH 冲榜：从前置预热、launch day 节奏到流量回收，全链路负责。",
      action: [
        "搭建实时数据追踪面板，分小时监控投票与流量来源。",
        "按节奏调整传播策略：Discord 社区动员、海外 AI Builder 圈层投放、内容素材迭代。",
        "端到端策划并执行香港线下 AI Creator 活动：场地、嘉宾、宣发、现场运营全链路落地。",
      ],
      result: "拿下 2026 年 2 月 Product Hunt 月榜 #1；建立海外 AI Builder 社区可持续触达通路。",
      talk: "可以展开：PH 流量结构拆解、海外 KOL 投放策略、跨时区 launch 节奏控制、线下活动 ROI 评估。",
    },
  },
  {
    id: "happycapy-guide",
    type: "项目",
    date: "持续运行",
    status: "Live · 7×24 自动化",
    title: "Happycapy Guide · 自动化 Agent 内容工厂",
    org: "AI Side Project · Agent as Workforce 个人 PoC",
    oneLiner: "完全无人值守、7×24 自动化运转的内容站，每天替我完成一份原本需要人力的工作。",
    metrics: [
      ["7×24", "无人值守"],
      ["Long-tail", "Google SERP"],
      ["即插即用", "模块化"],
    ],
    keywords: ["Multi-Agent", "Workflow", "SEO", "Long Context"],
    images: [
      {
        src: "./assets/placeholders/tutorial.svg",
        full: "./assets/placeholders/tutorial.svg",
        type: "项目截图",
        caption: "Happycapy Guide · 多阶段 Agent 流水线",
      },
    ],
    detail: {
      background: "我相信 Agent as Workforce 不应只是 Demo，而应该真实接管一份工作。Happycapy Guide 是这个信念的 PoC。",
      task: "构建一个完全无人值守、可独立替换模块的多阶段 Agent 系统，验证 Agent 系统设计 + 长上下文写作 + SEO 产品 sense 的 ROI。",
      action: [
        "信号采集 → 主题聚类 → 草稿生成 → 编辑校验 → 自动发布的多阶段 Agent 流水线。",
        "各阶段模块可独立替换，遵循即插即用的 Agentic Workflow 实践。",
        "长尾内容在 Google 搜索结果中长期稳定出现，验证系统的真实 ROI。",
      ],
      result: "完全无人值守持续运转；长尾内容稳定出现在 Google SERP；验证 Agent + 长上下文 + SEO 三者结合的可行性。",
      talk: "可以展开：模块解耦设计、长上下文写作 prompt 工程、信号采集与主题聚类的 trade-off、生产环境失败模式排查。",
    },
    links: [
      ["GitHub", "https://github.com/TIANGE2211123"],
    ],
  },
  {
    id: "pseo",
    type: "项目",
    date: "持续迭代",
    title: "pSEO · 程序化 SEO 引擎",
    org: "AI Side Project · GitHub",
    oneLiner: "按关键词模板批量生成与管理落地页，支撑增长实验，形成生成 ↔ 度量闭环。",
    metrics: [
      ["A/B", "模板实验"],
      ["Click+Rank", "数据回流"],
      ["End-to-end", "全链路"],
    ],
    keywords: ["pSEO", "Growth", "Data Loop", "Programmatic"],
    images: [
      {
        src: "./assets/placeholders/dashboard.svg",
        full: "./assets/placeholders/dashboard.svg",
        type: "项目截图",
        caption: "pSEO 程序化生成与度量看板",
      },
    ],
    detail: {
      background: "传统 SEO 内容生产难以规模化，且生产与度量割裂，无法基于真实数据迭代模板。",
      task: "构建程序化内容流水线，让模板变体能够基于真实 SEO 表现做 A/B 测试。",
      action: [
        "用 Claude Code 作为主要 co-pilot 搭建关键词输入 → 页面模板 → 渲染 → 发布的全链路。",
        "把分析数据接回生成环节，根据点击与排名数据迭代页面结构。",
        "模板变体基于真实 SEO 表现做 A/B 测试。",
      ],
      result: "形成生成 ↔ 度量完整闭环；可直接迁移到 2C 产品的埋点反推迭代场景。",
      talk: "可以展开：模板变体抽象、SEO 信号回流到生成环节的工程实现、A/B 实验显著性判定。",
    },
    links: [
      ["GitHub", "https://github.com/TIANGE2211123"],
    ],
  },
  {
    id: "skills-data",
    type: "开源",
    date: "持续维护",
    title: "Happycapy Skills Data · 开源数据 + 工具链",
    org: "GitHub · TIANGE2211123",
    oneLiner: "维护 Happycapy skills 数据集与处理脚本，支撑审核、分析与供给侧优化工作流。",
    metrics: [
      ["JSON Schema", "结构化"],
      ["LLM-ready", "下游适配"],
      ["可复现", "数据流水线"],
    ],
    keywords: ["Open Source", "Data Pipeline", "Function Calling", "Eval"],
    images: [
      {
        src: "./assets/placeholders/open-source.svg",
        full: "./assets/placeholders/open-source.svg",
        type: "开源截图",
        caption: "Happycapy Skills Data · GitHub 仓库",
      },
    ],
    detail: {
      background: "Skill 数据散落在多个 notebook 和零散脚本中，无法版本管理也不可复现。",
      task: "把 skills 数据集与处理脚本沉淀为可复用、可版本管理的开源项目。",
      action: [
        "定义 JSON Schema 与校验规则，面向下游 LLM 使用场景（function calling、检索、eval）做结构化设计。",
        "全程 vibe coding：Claude Code + Codex 双驾驶推进。",
        "把零散 notebook 重构为可版本管理、可复现的数据流水线。",
      ],
      result: "支撑审核、分析与供给侧优化工作流；下游 LLM 场景可直接消费。",
      talk: "可以展开：JSON Schema 设计取舍、LLM 友好的数据结构化模式、双 AI 驾驶下的代码 review 流程。",
    },
    links: [
      ["GitHub", "https://github.com/TIANGE2211123"],
    ],
  },
  {
    id: "agent-arch-research",
    type: "研究",
    date: "持续跟踪",
    status: "技术沉淀",
    title: "开源 Agent 架构系统拆解 · 一页式技术笔记",
    org: "Research / Tech Writing",
    oneLiner: "系统拆解 Claude Code、OpenClaw、Hermes 三个项目，提炼架构、扩展点与可借鉴的设计模式。",
    abstract: "围绕 Agentic Workflow 前沿，跟踪并撰写 Claude Code、LangGraph、Smolagents、Deer-Flow、nanoGPT 等开源项目的设计取舍。",
    contribution: [
      "对 Claude Code、OpenClaw、Hermes 三个项目输出一页式技术笔记，提炼可借鉴的设计模式。",
      "持续跟踪 Agentic Workflow 前沿（LangGraph、Smolagents、Deer-Flow、nanoGPT），保持技术同步。",
    ],
    metrics: [
      ["3+", "深度拆解项目"],
      ["5+", "持续跟踪框架"],
      ["1-pager", "高密度笔记"],
    ],
    keywords: ["Agentic Workflow", "Architecture", "Multi-Agent", "RAG"],
    images: [
      {
        src: "./assets/placeholders/research.svg",
        full: "./assets/placeholders/research.svg",
        type: "技术笔记",
        caption: "开源 Agent 架构对比与扩展点提炼",
      },
    ],
    detail: {
      background: "Agentic Workflow 是 Agent 工程的下一个 frontier，但开源项目设计取舍各异，缺少结构化的横向对比。",
      task: "通过深度阅读源码提炼每个项目的核心抽象、扩展点和设计取舍。",
      action: [
        "深度阅读 Claude Code、OpenClaw、Hermes 源码，输出一页式技术笔记。",
        "持续跟踪 LangGraph、Smolagents、Deer-Flow、nanoGPT 等开源项目。",
        "把碎片化阅读结构化为可检索、可类比的设计模式库。",
      ],
      result: "形成可直接复用的 Agent 架构模式库；在 Happycapy 实际工作中应用拆解结论指导设计决策。",
      talk: "可以展开：Claude Code 的 tool runtime 设计、Multi-Agent 编排的状态管理、长上下文 + RAG 的取舍。",
    },
  },
  {
    id: "usc-master",
    type: "荣誉",
    date: "2026.09 – 2028",
    status: "AI 方向硕士（28 届）",
    title: "University of Southern California · AI Master",
    org: "USC · 2026 秋入学",
    oneLiner: "AI 相关方向硕士，2026 秋入学，预计 2028 年毕业。",
    metrics: [
      ["AI 方向", "Master"],
      ["28 届", "Class"],
      ["USC", "TOP 25"],
    ],
    keywords: ["Education", "AI Master", "USC"],
    images: [
      {
        src: "./assets/placeholders/profile.svg",
        full: "./assets/placeholders/profile.svg",
        type: "教育背景",
        caption: "University of Southern California",
      },
    ],
    detail: {
      background: "希望在 AI 工程与产品交叉地带深耕，需要更系统的研究训练与全球化视野。",
      task: "在硕士阶段强化 Agent 系统、RAG、长上下文与 Multi-Agent 编排的研究深度。",
      action: [
        "已确认 2026 秋入学 USC AI 方向。",
        "硕士前继续在工业界做 Agent 项目积累一手经验。",
      ],
      result: "在 Agent + Vibe Coding 工程能力的基础上，叠加 USC 的研究训练和全球网络。",
      talk: "可以展开：硕士选课规划、希望深入的研究方向、与工业 Agent 项目的结合。",
    },
  },
  {
    id: "nankai-bachelor",
    type: "荣誉",
    date: "2022.09 – 2026.06",
    status: "本科 · GPA 87.18",
    title: "南开大学 · 计算机科学与技术",
    org: "南开大学 · 计算机本科",
    oneLiner: "GPA 87.18 / 100；2024 创新科研奖学金；2025 学业进步奖学金；Mitacs Globalink 加拿大维多利亚大学。",
    metrics: [
      ["87.18", "GPA"],
      ["IELTS 7.0", "英文流利"],
      ["Mitacs", "加拿大科研"],
    ],
    keywords: ["Computer Science", "Scholarship", "Research", "Globalink"],
    images: [
      {
        src: "./assets/placeholders/research.svg",
        full: "./assets/placeholders/research.svg",
        type: "教育背景",
        caption: "南开大学 · 计算机科学与技术",
      },
    ],
    detail: {
      background: "南开 CS 本科为 AI 工程与系统设计打下扎实基础。",
      task: "在本科阶段平衡学业 + 科研 + AI Side Project + 海外科研经历。",
      action: [
        "保持 GPA 87.18 / 100，获 2024 创新科研奖学金、2025 学业进步奖学金。",
        "2025 Mitacs Globalink Research Internship，前往加拿大维多利亚大学。",
        "持续投入 AI Side Project，覆盖 Agent、RAG、pSEO 等方向。",
      ],
      result: "形成学术 + 工业 + 海外科研的三角能力结构；中文母语 + IELTS 7.0 英文异步沟通无障碍。",
      talk: "可以展开：Mitacs 加拿大科研课题、本科 AI 自学路径、英文社区运营经验。",
    },
  },
];

const metricContainer = document.querySelector("#hero-metrics");
const capabilityContainer = document.querySelector("#capability-grid");
const socialProofContainer = document.querySelector("#social-proof");
const workflowContainer = document.querySelector("#workflow-grid");
const projectContainer = document.querySelector("#project-grid");
const paperContainer = document.querySelector("#paper-grid");
const filtersContainer = document.querySelector("#filters");
const timelineContainer = document.querySelector("#timeline-list");
const timelineProgressBar = document.querySelector("#timeline-progress-bar");
const modal = document.querySelector("#detail-modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector("#modal-close");

let activeType = "全部";
let timelineObserver;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMetrics() {
  metricContainer.innerHTML = metrics
    .map(
      (item) => `
        <div class="metric-card metric-card--${escapeHtml(item.accent || "blue")}">
          <p class="metric-value">${escapeHtml(item.value)}</p>
          <p class="metric-label">${escapeHtml(item.label)}</p>
          <p class="metric-note">${escapeHtml(item.note)}</p>
        </div>
      `,
    )
    .join("");
}

function renderSocialProof() {
  socialProofContainer.innerHTML = socialProof
    .map(
      (item) => `
        <a href="${escapeHtml(item.href)}" ${item.href.startsWith("#") || item.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.name)}</span>
        </a>
      `,
    )
    .join("");
}

function renderWorkflow() {
  workflowContainer.innerHTML = workflowSteps
    .map(
      (item) => `
        <article class="workflow-card">
          <p>${escapeHtml(item.step)}</p>
          <div class="workflow-mark">${escapeHtml(item.mark)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <strong>${escapeHtml(item.tool)}</strong>
          <span>${escapeHtml(item.desc)}</span>
        </article>
      `,
    )
    .join("");
}

function renderCapabilities() {
  capabilityContainer.innerHTML = capabilities
    .map(
      (item) => `
        <article class="capability-card">
          <span class="capability-icon">${escapeHtml(item.icon)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  projectContainer.innerHTML = projects
    .map(
      (item) => `
        <a class="project-card" href="${escapeHtml(item.href)}" ${item.href.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>
          <div class="project-topline">
            <span class="project-icon">${escapeHtml(item.icon)}</span>
            <span class="project-metric">${escapeHtml(item.metric)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.desc)}</p>
          <blockquote>${escapeHtml(item.proof)}</blockquote>
          <div class="tag-row">
            ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
        </a>
      `,
    )
    .join("");
}

function renderPapers() {
  const paperNodes = nodes.filter((node) => node.type === "研究");
  paperContainer.innerHTML = paperNodes
    .map((node) => {
      const image = node.images?.[0];
      const color = typeConfig[node.type].color;
      const metricsHtml = node.metrics
        .slice(0, 3)
        .map(([value, label]) => `<span class="mini-metric"><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`)
        .join("");
      return `
        <button class="paper-card" type="button" style="--node-color: ${color}" data-id="${escapeHtml(node.id)}">
          <figure>
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption || node.title)}" decoding="async" />
          </figure>
          <div class="paper-card-body">
            <span class="tag type-tag">${escapeHtml(node.status || node.org)}</span>
            <h3>${escapeHtml(node.title)}</h3>
            <p>${escapeHtml(node.oneLiner)}</p>
            <div class="metric-row">${metricsHtml}</div>
          </div>
        </button>
      `;
    })
    .join("");

  paperContainer.querySelectorAll(".paper-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

function renderFilters() {
  const types = ["全部", ...Object.keys(typeConfig).filter((type) => type !== "全部")];
  filtersContainer.innerHTML = types
    .map(
      (type) => `
        <button
          class="filter-button ${activeType === type ? "active" : ""}"
          type="button"
          role="tab"
          aria-selected="${activeType === type}"
          data-type="${escapeHtml(type)}"
        >
          ${escapeHtml(type)}
        </button>
      `,
    )
    .join("");

  filtersContainer.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.type;
      renderFilters();
      renderTimeline();
      updateTimelineProgress();
    });
  });
}

function updateTimelineProgress() {
  if (!timelineProgressBar || !timelineContainer) return;
  const shell = timelineContainer.closest(".timeline-shell") || timelineContainer;
  const rect = shell.getBoundingClientRect();
  const viewportAnchor = window.innerHeight * 0.7;
  const start = viewportAnchor - rect.top;
  const total = rect.height;
  const progress = Math.min(1, Math.max(0.04, start / Math.max(total, 1)));
  timelineProgressBar.style.transform = `translateX(-50%) scaleY(${progress})`;

  timelineContainer.querySelectorAll(".timeline-card").forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.top + cardRect.height / 2;
    card.classList.toggle("is-active", Math.abs(cardCenter - window.innerHeight * 0.52) < cardRect.height * 0.62);
  });
}

function setupTimelineMotion() {
  if (!timelineContainer) return;

  timelineObserver?.disconnect();
  timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -12% 0px",
    },
  );

  timelineContainer.querySelectorAll(".timeline-card").forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 46, 320)}ms`;
    timelineObserver.observe(card);
  });

  updateTimelineProgress();
}

function renderTimeline() {
  const filtered = activeType === "全部" ? nodes : nodes.filter((node) => node.type === activeType);

  timelineContainer.innerHTML = filtered
    .map((node) => {
      const color = typeConfig[node.type].color;
      const metricsHtml = node.metrics
        .map(([value, label]) => `<span class="mini-metric"><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`)
        .join("");
      const tagsHtml = node.keywords.map((keyword) => `<span class="tag">${escapeHtml(keyword)}</span>`).join("");
      const image = node.images?.[0];
      return `
        <button class="timeline-card" type="button" style="--node-color: ${color}" data-id="${escapeHtml(node.id)}">
          <div class="timeline-pin" aria-hidden="true"></div>
          <div class="timeline-inner ${image ? "has-thumb" : ""}">
            <div class="timeline-content">
              <div class="timeline-date">${escapeHtml(node.date)}</div>
              <div class="timeline-title-row">
                <span class="tag type-tag">${escapeHtml(node.status || node.type)}</span>
                <h3>${escapeHtml(node.title)}</h3>
              </div>
              <p>${escapeHtml(node.org)}</p>
              <p>${escapeHtml(node.oneLiner)}</p>
              <div class="metric-row">${metricsHtml}</div>
              <div class="tag-row" style="margin-top: 12px">${tagsHtml}</div>
            </div>
            ${
              image
                ? `<figure class="timeline-thumb"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption || node.title)}" decoding="async" /></figure>`
                : ""
            }
          </div>
        </button>
      `;
    })
    .join("");

  timelineContainer.querySelectorAll(".timeline-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });

  setupTimelineMotion();
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderNodeImages(node) {
  if (!node.images?.length) return "";
  return `
    <div class="modal-images">
      ${node.images
        .map(
          (image) => `
            <figure>
              <a href="${escapeHtml(image.full || image.src)}" target="_blank" rel="noreferrer">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption || node.title)}" decoding="async" />
              </a>
              <figcaption>
                <span>${escapeHtml(image.type || "图片")}</span>
                ${escapeHtml(image.caption || node.title)}
              </figcaption>
            </figure>
          `,
        )
        .join("")}
    </div>
  `;
}

function openModal(id) {
  const node = nodes.find((item) => item.id === id);
  if (!node) return;

  const color = typeConfig[node.type].color;
  const metricsHtml = node.metrics
    .map(([value, label]) => `<span class="mini-metric"><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`)
    .join("");
  const keywordsHtml = node.keywords.map((keyword) => `<span class="tag">${escapeHtml(keyword)}</span>`).join("");
  const linksHtml = node.links
    ? node.links.map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")
    : "";

  modalContent.innerHTML = `
    <article class="modal-body" style="--node-color: ${color}">
      <div class="modal-meta">
        <span class="tag type-tag">${escapeHtml(node.status || node.type)}</span>
        <span class="tag">${escapeHtml(node.date)}</span>
        <span class="tag">${escapeHtml(node.org)}</span>
      </div>
      <h2 id="modal-title">${escapeHtml(node.title)}</h2>
      <p class="modal-lede">${escapeHtml(node.abstract || node.oneLiner)}</p>

      ${renderNodeImages(node)}

      <div class="metric-row">${metricsHtml}</div>
      <div class="tag-row" style="margin-top: 12px">${keywordsHtml}</div>

      ${
        node.contribution?.length
          ? `<section class="modal-section"><h3>研究贡献</h3>${renderList(node.contribution)}</section>`
          : ""
      }

      <div class="detail-grid">
        <section class="detail-box">
          <h3>背景</h3>
          <p>${escapeHtml(node.detail.background)}</p>
        </section>
        <section class="detail-box">
          <h3>任务</h3>
          <p>${escapeHtml(node.detail.task)}</p>
        </section>
        <section class="detail-box">
          <h3>行动</h3>
          ${renderList(node.detail.action)}
        </section>
        <section class="detail-box">
          <h3>结果</h3>
          <p>${escapeHtml(node.detail.result)}</p>
        </section>
      </div>

      <section class="modal-section">
        <h3>展开来看</h3>
        <p class="modal-lede">${escapeHtml(node.detail.talk)}</p>
      </section>

      ${
        linksHtml
          ? `<section class="modal-section"><h3>相关链接</h3><div class="link-row">${linksHtml}</div></section>`
          : ""
      }
    </article>
  `;

  modal.hidden = false;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

renderMetrics();
renderSocialProof();
renderWorkflow();
renderProjects();
renderCapabilities();
renderPapers();
renderFilters();
renderTimeline();
window.addEventListener("scroll", updateTimelineProgress, { passive: true });
