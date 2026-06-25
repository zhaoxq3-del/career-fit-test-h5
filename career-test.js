import {
  actionPlan,
  careerStyles,
  questions,
  workDirections,
} from "./career-test-data.js";
import { calculateCareerResult } from "./career-test-scoring.js";

const defaultData = {
  actionPlan,
  careerStyles,
  questions,
  workDirections,
};

const RESULT_PROCESSING_DURATION_MS = 3600;
const PROCESSING_STEP_DELAY_MS = 560;
const COMPLETED_RESULT_STORAGE_KEY = "career-fit-test:v1:completed-result";

const processingSteps = [
  "统计你的选择倾向",
  "匹配你的职业风格",
  "排序 5 个工作方向",
  "生成 3 天行动建议",
];

const optionIcons = [
  `
    <path d="M34 34a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
    <path d="M43 51l9 9"></path>
    <path d="M25 24h30"></path>
  `,
  `
    <path d="M22 31h31a9 9 0 0 1 0 18H39l-11 8v-8h-6a9 9 0 0 1 0-18z"></path>
    <path d="M31 40h22"></path>
  `,
  `
    <path d="M25 26h32"></path>
    <path d="M25 40h32"></path>
    <path d="M25 54h32"></path>
    <path d="M17 26l3 3 5-7"></path>
    <path d="M17 40l3 3 5-7"></path>
  `,
  `
    <path d="M40 18l4 14 14 4-14 4-4 14-4-14-14-4 14-4z"></path>
    <path d="M57 52l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"></path>
  `,
];

const sectionIcons = {
  directions: `
    <path d="M20 54h40"></path>
    <path d="M24 46l9-10 9 7 13-17"></path>
    <path d="M54 26h-9"></path>
    <path d="M54 26v9"></path>
  `,
  action: `
    <path d="M24 22h32v36H24z"></path>
    <path d="M31 18v8"></path>
    <path d="M49 18v8"></path>
    <path d="M31 37h18"></path>
    <path d="M31 48h12"></path>
  `,
  avoid: `
    <path d="M40 19l23 40H17z"></path>
    <path d="M40 33v12"></path>
    <path d="M40 53h.1"></path>
  `,
};

const careerStyleIcons = {
  analysis: `
    <path d="M23 54h34"></path>
    <path d="M28 49V37"></path>
    <path d="M40 49V29"></path>
    <path d="M52 49V23"></path>
    <path d="M24 31l10 7 9-10 13 8"></path>
  `,
  communication: `
    <path d="M24 31h25a9 9 0 0 1 0 18H37l-10 8v-8h-3a9 9 0 0 1 0-18z"></path>
    <path d="M35 29a10 10 0 0 1 10-7h7a8 8 0 0 1 0 16"></path>
    <path d="M32 39h20"></path>
  `,
  content: `
    <path d="M25 54l4-15 23-23 11 11-23 23z"></path>
    <path d="M45 23l11 11"></path>
    <path d="M28 50l8 8"></path>
  `,
  execution: `
    <path d="M25 25h30"></path>
    <path d="M25 40h30"></path>
    <path d="M25 55h30"></path>
    <path d="M18 25l3 3 5-7"></path>
    <path d="M18 40l3 3 5-7"></path>
    <path d="M18 55l3 3 5-7"></path>
  `,
  product: `
    <path d="M22 24h36v28H22z"></path>
    <path d="M22 33h36"></path>
    <path d="M34 58h12"></path>
    <path d="M40 52v6"></path>
    <path d="M31 43l8-5 8 5-8 5z"></path>
  `,
  sales: `
    <circle class="icon-fill" cx="40" cy="40" r="18"></circle>
    <circle cx="40" cy="40" r="8"></circle>
    <path d="M40 22V15"></path>
    <path d="M40 65v-7"></path>
    <path d="M58 40h7"></path>
    <path d="M15 40h7"></path>
  `,
  skill: `
    <path d="M27 53l26-26"></path>
    <path d="M45 19l16 16"></path>
    <path d="M20 56l8 8"></path>
    <path d="M51 20l9-5 5 5-5 9"></path>
    <path d="M25 28l6-6"></path>
  `,
  support: `
    <path d="M24 42c0 12 16 20 16 20s16-8 16-20a10 10 0 0 0-16-8 10 10 0 0 0-16 8z"></path>
    <path d="M21 28h38"></path>
    <path d="M28 22h24"></path>
  `,
};

const layoutDebugTargets = [
  {
    label: "标题",
    name: "title",
    y: "--intro-title-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -80,
    yMax: 120,
  },
  {
    label: "说明",
    name: "lead",
    y: "--intro-lead-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -60,
    yMax: 100,
  },
  {
    label: "打气句",
    name: "cheer",
    y: "--intro-cheer-offset",
    yDefault: 18,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -60,
    yMax: 100,
  },
  {
    label: "三个标签",
    name: "points",
    y: "--intro-points-offset",
    yDefault: 8,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -60,
    yMax: 120,
  },
  {
    label: "参考说明",
    name: "note",
    y: "--intro-note-offset",
    yDefault: 24,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -60,
    yMax: 120,
  },
  {
    label: "按钮",
    name: "button",
    y: "--intro-button-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -80,
    yMax: 160,
  },
];

const resultLayoutDebugTargets = [
  {
    label: "顶部结果",
    name: "hero",
    y: "--result-hero-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -160,
    yMax: 180,
  },
  {
    label: "工作方向",
    name: "directions",
    y: "--result-directions-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -160,
    yMax: 180,
  },
  {
    label: "行动建议",
    name: "action",
    y: "--result-action-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -160,
    yMax: 180,
  },
  {
    label: "不适合环境",
    name: "avoid",
    y: "--result-avoid-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -160,
    yMax: 180,
  },
  {
    label: "结尾鼓励",
    name: "closing",
    y: "--result-closing-offset",
    yDefault: 0,
    xDefault: 0,
    scaleDefault: 1,
    yMin: -160,
    yMax: 180,
  },
];

const layoutDebugControls = createLayoutDebugControls(layoutDebugTargets, "intro");
const resultLayoutDebugControls = createLayoutDebugControls(
  resultLayoutDebugTargets,
  "result",
);

function createLayoutDebugControls(targets, prefix) {
  return targets.flatMap((target) => [
  {
    defaultValue: target.yDefault,
    label: `${target.label}上下`,
    max: target.yMax,
    min: target.yMin,
    step: 1,
    unit: "px",
    variable: target.y,
  },
  {
    defaultValue: target.xDefault,
    label: `${target.label}左右`,
    max: 160,
    min: -160,
    step: 1,
    unit: "px",
    variable: `--${prefix}-${target.name}-x`,
  },
  {
    defaultValue: target.scaleDefault,
    label: `${target.label}大小`,
    max: 1.4,
    min: 0.7,
    step: 0.01,
    unit: "scale",
    variable: `--${prefix}-${target.name}-scale`,
  },
  ]);
}

export function renderCareerTest(root, data = defaultData) {
  const state = {
    answers: {},
    currentIndex: 0,
    data,
    root,
  };

  if (hasSampleResultMode(root)) {
    state.answers = Object.fromEntries(
      data.questions.map((question) => [question.id, question.options[0].id]),
    );
    renderResult(state);
    return;
  }

  const savedAnswers = readCompletedAnswers(root, data);
  if (savedAnswers) {
    state.answers = savedAnswers;
    renderResult(state);
    return;
  }

  renderIntro(state);
}

function renderIntro(state) {
  const shouldShowLayoutDebug = hasLayoutDebugMode(state.root);
  state.root.classList.toggle("has-layout-debug", shouldShowLayoutDebug);
  state.root.innerHTML = `
    <section class="intro-view" aria-labelledby="intro-title">
      ${renderIntroSymbol()}
      <div class="intro-copy">
        <h1 id="intro-title">职业适配方向自测</h1>
        <p class="intro-subtitle">看清你更适合的工作方向</p>
      </div>
      <p class="lead">20 道题，看清你的工作方向。</p>
      ${renderIntroDiagram()}
      <button class="primary-button" type="button" data-action="start">
        <span class="cta-shine-text">开始测试</span>
      </button>
      <p class="fine-print">结果仅供职业探索参考。</p>
    </section>
    ${
      shouldShowLayoutDebug
        ? renderLayoutDebugPanel({
            ariaLabel: "首页调试面板",
            controls: layoutDebugControls,
            description: "拖动滑块，直接看当前首页位置变化。",
            title: "首页调试",
          })
        : ""
    }
  `;

  state.root.querySelector("[data-action='start']").addEventListener("click", () => {
    renderQuestion(state);
  });

  if (shouldShowLayoutDebug) {
    setupLayoutDebugPanel(state.root);
  }
}

function renderQuestion(state) {
  const question = state.data.questions[state.currentIndex];
  const selectedId = state.answers[question.id];
  const progress = state.currentIndex + 1;
  const percent = Math.round((state.currentIndex / state.data.questions.length) * 100);

  state.root.innerHTML = `
    <section class="question-view" aria-labelledby="question-title">
      <div class="progress-row">
        <span>${progress} / ${state.data.questions.length}</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <span style="width: ${percent}%"></span>
      </div>
      <div class="question-card-visual" aria-hidden="true">
        <svg viewBox="0 0 120 40" focusable="false">
          <path d="M13 28c17-20 35-20 54-2 14 13 27 9 40-7"></path>
          <circle cx="16" cy="26" r="5"></circle>
          <circle cx="66" cy="26" r="5"></circle>
          <circle cx="106" cy="19" r="5"></circle>
        </svg>
      </div>
      <h1 id="question-title">${question.title}</h1>
      <div class="option-list" role="radiogroup" aria-label="选择你的反应">
        ${question.options
          .map(
            (option, index) => `
              <button
                class="option-card${option.id === selectedId ? " is-selected" : ""}"
                type="button"
                role="radio"
                aria-checked="${option.id === selectedId}"
                data-option-id="${option.id}"
                data-option-index="${index}"
              >
                ${renderOptionIcon(index)}
                <strong>${option.label}</strong>
              </button>
            `,
          )
          .join("")}
      </div>
      ${
        state.currentIndex > 0
          ? `<div class="question-actions">
              <button class="ghost-button" type="button" data-action="previous">上一题</button>
            </div>`
          : ""
      }
    </section>
  `;

  for (const optionButton of state.root.querySelectorAll("[data-option-id]")) {
    optionButton.addEventListener("click", () => {
      state.answers[question.id] = optionButton.dataset.optionId;
      if (state.currentIndex === state.data.questions.length - 1) {
        saveCompletedAnswers(state);
        renderProcessing(state);
        return;
      }
      state.currentIndex += 1;
      renderQuestion(state);
    });
  }

  state.root.querySelector("[data-action='previous']")?.addEventListener("click", () => {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    renderQuestion(state);
  });
}

function renderProcessing(state) {
  state.root.classList.remove("has-layout-debug");
  state.root.innerHTML = `
    <section class="processing-view" aria-labelledby="processing-title" aria-live="polite">
      <h1 id="processing-title">正在整理你的职业倾向</h1>
      <div class="processing-list" aria-label="结果整理进度">
        ${processingSteps
          .map(
            (step, index) => `
              <div class="processing-item" style="--delay: ${index * PROCESSING_STEP_DELAY_MS}ms">
                <span>${step}</span>
                <div class="processing-track" aria-hidden="true">
                  <i></i>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  const view = state.root.ownerDocument?.defaultView || window;
  view.setTimeout(() => {
    renderResult(state);
  }, RESULT_PROCESSING_DURATION_MS);
}

function renderResult(state) {
  const result = calculateCareerResult(state.answers, state.data);
  const mainStyle = result.mainStyle;
  const shouldShowLayoutDebug = hasLayoutDebugMode(state.root);
  state.root.classList.toggle("has-layout-debug", shouldShowLayoutDebug);

  state.root.innerHTML = `
    <article class="result-view" aria-labelledby="result-title">
      <section class="result-hero">
        <div class="result-kicker">你的结果</div>
        <div class="result-hero-main">
          <div class="result-title-block">
            <h1 id="result-title">${mainStyle.title}</h1>
          </div>
          ${renderCareerStyleIcon(mainStyle.id)}
        </div>
        <p class="result-summary">${mainStyle.summary}</p>
        <p class="result-detail">${mainStyle.detail}</p>
      </section>

      <section class="result-section result-directions" aria-labelledby="directions-title">
        <div class="section-heading">
          ${renderSectionIcon("directions")}
          <h2 id="directions-title">先看这 5 个方向</h2>
        </div>
        <div class="direction-list">
          ${result.topDirections
            .map(
              (direction) => `
                <div class="direction-card">
                  <div class="direction-head">
                    <h3>${direction.title}</h3>
                    <span>${direction.score}%</span>
                  </div>
                  <div class="direction-meter" aria-hidden="true">
                    <i style="width: ${direction.score}%"></i>
                  </div>
                  <p class="direction-summary">${direction.summary}</p>
                  <p class="direction-search">职位名：${direction.searchRoles.join("、")}</p>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="result-section result-action" aria-labelledby="action-title">
        <div class="section-heading">
          ${renderSectionIcon("action")}
          <h2 id="action-title">用 3 天试一试</h2>
        </div>
        <div class="action-list">
          ${state.data.actionPlan
            .map(
              (item, index) => `
                <div class="action-card">
                  <span class="action-day" aria-hidden="true">${index + 1}</span>
                  <div>
                    <h3>${item.title}</h3>
                    <p class="action-body">${item.body}</p>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="result-section result-avoid" aria-labelledby="avoid-title">
        <div class="section-heading">
          ${renderSectionIcon("avoid")}
          <h2 id="avoid-title">不太适合的环境</h2>
        </div>
        <p class="soft-note">你不是完全不能做这些工作，但如果长期处在下面这些环境里，可能会比较消耗。</p>
        <ul class="avoid-list">
          ${mainStyle.unsuitable.map((item) => `<li><span aria-hidden="true"></span>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="closing-section result-closing" aria-labelledby="closing-title">
        <div class="closing-title-row">
          <span class="closing-icon" aria-hidden="true">✦</span>
          <h2 id="closing-title">写给现在还迷茫的你</h2>
        </div>
        <div class="letter-note">
          <p>${mainStyle.closing}</p>
          <p>你现在不知道自己适合什么，不代表你没有方向感。先别急着给自己下结论，把方向拆小一点，去看、去问、去试，你会比现在清楚很多。</p>
        </div>
      </section>
    </article>
    ${
      shouldShowLayoutDebug
        ? renderLayoutDebugPanel({
            ariaLabel: "结果页调试面板",
            controls: resultLayoutDebugControls,
            description: "拖动滑块，直接看当前结果页模块变化。",
            title: "结果页调试",
          })
        : ""
    }
  `;

  state.root.querySelector("[data-action='restart']")?.addEventListener("click", () => {
    state.answers = {};
    state.currentIndex = 0;
    renderIntro(state);
  });

  if (shouldShowLayoutDebug) {
    setupLayoutDebugPanel(state.root);
  }
}

function renderIntroSymbol() {
  return `
    <div class="intro-symbol" aria-hidden="true">
      <svg class="intro-symbol-compass" viewBox="0 0 80 80" focusable="false">
        <circle cx="40" cy="40" r="28"></circle>
        <path d="M40 16v10"></path>
        <path d="M40 54v10"></path>
        <path d="M16 40h10"></path>
        <path d="M54 40h10"></path>
        <path class="intro-symbol-needle" d="M50 24 43 45 30 56 37 35z"></path>
        <circle class="intro-symbol-dot" cx="40" cy="40" r="4"></circle>
      </svg>
    </div>
  `;
}

function renderIntroDiagram() {
  return `
    <div class="intro-diagram-card" aria-label="测试结构示意">
      <span class="intro-diagram-corner intro-diagram-corner-left"></span>
      <span class="intro-diagram-corner intro-diagram-corner-right"></span>
      <span class="intro-diagram-label intro-diagram-label-left">20 题自测</span>
      <div class="intro-diagram-compass" aria-hidden="true">
        <svg viewBox="0 0 110 110" focusable="false">
          <path class="intro-diagram-axis" d="M55 13v84"></path>
          <path class="intro-diagram-axis" d="M13 55h84"></path>
          <path class="intro-diagram-ring" d="M30 69a31 31 0 0 1 39-39"></path>
          <path class="intro-diagram-path" d="M34 68c13-19 27-25 43-34"></path>
          <circle class="intro-diagram-dot" cx="55" cy="55" r="5"></circle>
        </svg>
      </div>
      <span class="intro-diagram-label intro-diagram-label-right">职业方向</span>
    </div>
  `;
}

function renderOptionIcon(index) {
  const icon = optionIcons[index] || optionIcons[0];
  return `
    <span class="option-icon" aria-hidden="true">
      <svg viewBox="0 0 80 80" focusable="false">${icon}</svg>
    </span>
  `;
}

function renderSectionIcon(type) {
  const icon = sectionIcons[type] || sectionIcons.directions;
  return `
    <span class="section-icon" aria-hidden="true">
      <svg viewBox="0 0 80 80" focusable="false">${icon}</svg>
    </span>
  `;
}

function renderCareerStyleIcon(styleId) {
  const icon = careerStyleIcons[styleId] || careerStyleIcons.analysis;
  return `
    <div class="result-icon" data-style-icon="${styleId}" aria-hidden="true">
      <svg viewBox="0 0 80 80" focusable="false">
        <circle class="icon-bg" cx="40" cy="40" r="34"></circle>
        ${icon}
      </svg>
    </div>
  `;
}

function hasLayoutDebugMode(root) {
  const view = root.ownerDocument?.defaultView;
  if (!view) return false;
  return new URLSearchParams(view.location.search).get("debug") === "layout";
}

function hasSampleResultMode(root) {
  const view = root.ownerDocument?.defaultView;
  if (!view) return false;
  return new URLSearchParams(view.location.search).get("result") === "sample";
}

function readCompletedAnswers(root, data) {
  const storage = getStorage(root);
  if (!storage) return null;

  try {
    const rawPayload = storage.getItem(COMPLETED_RESULT_STORAGE_KEY);
    if (!rawPayload) return null;
    const payload = JSON.parse(rawPayload);
    const answers = payload?.answers;
    if (!areCompleteAnswers(answers, data)) {
      storage.removeItem(COMPLETED_RESULT_STORAGE_KEY);
      return null;
    }
    return answers;
  } catch {
    storage.removeItem(COMPLETED_RESULT_STORAGE_KEY);
    return null;
  }
}

function saveCompletedAnswers(state) {
  if (!areCompleteAnswers(state.answers, state.data)) return;
  const storage = getStorage(state.root);
  if (!storage) return;

  storage.setItem(
    COMPLETED_RESULT_STORAGE_KEY,
    JSON.stringify({
      answers: state.answers,
      completedAt: new Date().toISOString(),
      version: 1,
    }),
  );
}

function areCompleteAnswers(answers, data) {
  if (!answers) return false;
  return data.questions.every((question) =>
    question.options.some((option) => option.id === answers[question.id]),
  );
}

function getStorage(root) {
  const view = root.ownerDocument?.defaultView;
  if (!view) return null;

  try {
    return view.localStorage;
  } catch {
    return null;
  }
}

function renderLayoutDebugPanel({ ariaLabel, controls, description, title }) {
  return `
    <aside class="layout-debug-panel" aria-label="${ariaLabel}">
      <div class="layout-debug-head">
        <strong>${title}</strong>
        <span>临时</span>
      </div>
      <p>${description}</p>
      <div class="layout-debug-controls">
        ${controls
          .map(
            (control) => `
              <label class="layout-debug-control">
                <span>
                  <span>${control.label}</span>
                  <output data-layout-output="${control.variable}">0px</output>
                </span>
                <input
                  type="range"
                  min="${control.min}"
                  max="${control.max}"
                  value="${control.defaultValue}"
                  step="${control.step}"
                  data-layout-var="${control.variable}"
                  data-layout-unit="${control.unit}"
                >
              </label>
            `,
          )
          .join("")}
      </div>
      <button class="layout-debug-reset" type="button" data-action="reset-layout">
        重置位置
      </button>
    </aside>
  `;
}

function setupLayoutDebugPanel(root) {
  const controls = [...root.querySelectorAll("[data-layout-var]")];
  const updateControl = (control, value) => {
    const formattedValue =
      control.dataset.layoutUnit === "scale" ? value : `${value}px`;
    const displayValue =
      control.dataset.layoutUnit === "scale"
        ? `${Math.round(Number(value) * 100)}%`
        : formattedValue;
    root.style.setProperty(control.dataset.layoutVar, formattedValue);
    root.querySelector(`[data-layout-output="${control.dataset.layoutVar}"]`).textContent =
      displayValue;
  };

  for (const control of controls) {
    updateControl(control, control.value);
    control.addEventListener("input", () => {
      updateControl(control, control.value);
    });
  }

  root.querySelector("[data-action='reset-layout']").addEventListener("click", () => {
    for (const control of controls) {
      control.value = control.defaultValue;
      updateControl(control, control.value);
    }
  });
}

if (typeof document !== "undefined") {
  const root = document.querySelector("#app");
  if (root) {
    renderCareerTest(root);
  }
}
