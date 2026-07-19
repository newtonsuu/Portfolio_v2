"use strict";

const ROADMAP = [
  {
    id: "week-1",
    number: "01",
    shortTitle: "Week 1",
    title: "Week 1",
    dateLabel: "Jul 20–26",
    subtitle: "Verify the essentials and open the offer conversation.",
    start: "2026-07-20",
    end: "2026-07-26",
    tasks: [
      { id: "w1-profile", text: "Complete the required career-readiness profile, save proof, and notify the appropriate academic office.", tag: "Academics" },
      { id: "w1-offer", text: "Request the written offer details: role, compensation, work setup, start date, and HR contact.", tag: "Career" },
      { id: "w1-documents", text: "Confirm that the registrar received every submitted graduation document.", tag: "Graduation" },
      { id: "w1-housing", text: "Submit the housing non-renewal notice after reviewing the required notice period.", tag: "Finance" },
      { id: "w1-modules", text: "Begin the five required student-success modules during focused evening blocks.", tag: "Academics" },
      { id: "w1-standing", text: "Verify official academic standing and graduation-honors eligibility with the registrar.", tag: "Graduation" }
    ]
  },
  {
    id: "week-2",
    number: "02",
    shortTitle: "Week 2",
    title: "Week 2",
    dateLabel: "Jul 27–Aug 2",
    subtitle: "Lock every graduation requirement before the deadline.",
    start: "2026-07-27",
    end: "2026-08-02",
    tasks: [
      { id: "w2-checkpoint", text: "Before the Jul 31 candidate deadline, confirm that the registrar and thesis checklists are complete.", tag: "Graduation" },
      { id: "w2-certificates", text: "Finish the student-success modules and organize every certificate and screenshot.", tag: "Academics" },
      { id: "w2-benefits", text: "Activate eligible student developer benefits while student access remains active.", tag: "Portfolio" },
      { id: "w2-followup", text: "Follow up on the written offer if a clear answer has not arrived.", tag: "Career" }
    ]
  },
  {
    id: "week-3",
    number: "03",
    shortTitle: "Week 3",
    title: "Week 3",
    dateLabel: "Aug 3–9",
    subtitle: "Close the internship well and launch the wider search.",
    start: "2026-08-03",
    end: "2026-08-09",
    tasks: [
      { id: "w3-commitment", text: "By Aug 4, secure either a signed offer or a written HR timeline for the decision.", tag: "Career" },
      { id: "w3-certificate", text: "Request an internship completion certificate for résumé proof and any required waiver.", tag: "Career" },
      { id: "w3-applications", text: "Apply to priority employers and at least ten junior development or security roles.", tag: "Career" },
      { id: "w3-resume", text: "Use the expected October 2026 graduation date and portfolio link consistently in every application.", tag: "Career" },
      { id: "w3-move-stage", text: "Pack nonessential items and complete the first stage of the move.", tag: "Personal" }
    ]
  },
  {
    id: "week-4",
    number: "04",
    shortTitle: "Week 4",
    title: "Week 4",
    dateLabel: "Aug 10–16",
    subtitle: "Complete the move and define the client delivery.",
    start: "2026-08-10",
    end: "2026-08-16",
    tasks: [
      { id: "w4-move", text: "Close out housing and direct any returned funds to protected savings.", tag: "Finance" },
      { id: "w4-workstation", text: "Set up the primary home workstation for reliable development and interviews.", tag: "Portfolio" },
      { id: "w4-client-scope", text: "Write the client modernization scope, including pages, features, timeline, and budget.", tag: "Client" }
    ]
  },
  {
    id: "weeks-5-8",
    number: "05",
    shortTitle: "Weeks 5–8",
    title: "Weeks 5–8",
    dateLabel: "Aug 17–Sep 13",
    subtitle: "Earn, build, interview, and turn work into proof.",
    start: "2026-08-17",
    end: "2026-09-13",
    tasks: [
      { id: "w5-client", text: "Finish and deploy the client modernization project, deliver it, invoice it, and request a referral.", tag: "Client" },
      { id: "w5-modules", text: "Complete the six career modules and organize all completion proof in the required folder structure.", tag: "Academics" },
      { id: "w5-portfolio", text: "Expand the portfolio with the SOC multi-agent case study and a client before-and-after story.", tag: "Portfolio" },
      { id: "w5-interviews", text: "Protect interview availability and track every application, response, owner, and next step.", tag: "Career" },
      { id: "w5-budget", text: "Keep weekly spending within plan and reach the protected graduation-fund target by Oct 1.", tag: "Finance" }
    ]
  },
  {
    id: "weeks-9-12",
    number: "06",
    shortTitle: "Weeks 9–12",
    title: "Weeks 9–12",
    dateLabel: "Sep 14–Oct 11",
    subtitle: "Finish the portfolio sprint and become clearance-ready.",
    start: "2026-09-14",
    end: "2026-10-11",
    tasks: [
      { id: "w9-soc", text: "Work through the SOC multi-agent implementation list once repository access is available.", tag: "Portfolio" },
      { id: "w9-job-hunter", text: "Use the AI job hunter in the live search and record portfolio-safe funnel metrics.", tag: "Career" },
      { id: "w9-forms", text: "Prepare transcript, diploma, yearbook, and clearance forms in advance.", tag: "Graduation" },
      { id: "w9-updates", text: "Monitor official channels for fee notices, pictorial schedules, and clearance timing.", tag: "Graduation" }
    ]
  },
  {
    id: "october-clearance",
    number: "07",
    shortTitle: "October",
    title: "October graduation & clearance",
    dateLabel: "Oct 12–31",
    subtitle: "Complete clearance, graduate, and enter payroll prepared.",
    start: "2026-10-12",
    end: "2026-10-31",
    tasks: [
      { id: "oct-requests", text: "Start transcript and diploma requests as soon as the official clearance notice arrives.", tag: "Graduation" },
      { id: "oct-proof", text: "Submit required academic proof and forms through the approved channels.", tag: "Graduation" },
      { id: "oct-route", text: "Group clearance appointments by location so each trip completes multiple objectives.", tag: "Graduation" },
      { id: "oct-approvals", text: "Finish final approvals, registrar validation, and required payments in the correct order.", tag: "Graduation" },
      { id: "oct-payments", text: "Prepare the required payment methods and keep refundable deposits separate from fees.", tag: "Finance" },
      { id: "oct-launch", text: "Confirm graduation, onboarding, payroll timing, and the standing savings budget.", tag: "Milestone" }
    ]
  }
];

const RULES = [
  "Do not sign a lease, loan, or major commitment based only on a verbal promise.",
  "Keep support commitments fixed and planned; avoid open-ended obligations.",
  "Combine each necessary trip with at least two useful objectives.",
  "Once saved, the graduation fund stays protected for the transition.",
  "If no preferred written offer exists by Sep 1, make the wider application campaign the primary plan."
];

const STORAGE_KEY = "jj-roadmap-session-v3";
const state = {
  completed: new Set(),
  filter: "all",
  search: ""
};

const TASKS = ROADMAP.flatMap((phase, phaseIndex) =>
  phase.tasks.map((task, taskIndex) => ({
    ...task,
    phaseId: phase.id,
    phaseTitle: phase.title,
    phaseDateLabel: phase.dateLabel,
    phaseIndex,
    taskIndex
  }))
);
const TASK_BY_ID = new Map(TASKS.map(task => [task.id, task]));
const VALID_TASK_IDS = new Set(TASK_BY_ID.keys());

const refs = {
  timeline: document.querySelector("#timeline"),
  rulesGrid: document.querySelector("#rules-grid"),
  phaseNavList: document.querySelector("#phase-nav-list"),
  progressPercent: document.querySelector("#progress-percent"),
  progressRing: document.querySelector("#progress-ring"),
  progressRingValue: document.querySelector("#progress-ring-value"),
  progressBar: document.querySelector("#progress-bar"),
  completedCount: document.querySelector("#completed-count"),
  totalCount: document.querySelector("#total-count"),
  currentPhase: document.querySelector("#current-phase"),
  currentPhaseNote: document.querySelector("#current-phase-note"),
  currentPhaseChip: document.querySelector("#current-phase-chip"),
  nextTask: document.querySelector("#next-task"),
  nextTaskMeta: document.querySelector("#next-task-meta"),
  nextActions: document.querySelector("#next-actions"),
  searchInput: document.querySelector("#task-search"),
  resultsSummary: document.querySelector("#results-summary"),
  emptyState: document.querySelector("#empty-state"),
  emptyTitle: document.querySelector("#empty-title"),
  emptyCopy: document.querySelector("#empty-copy"),
  clearView: document.querySelector("#clear-view"),
  toast: document.querySelector("#toast"),
  sessionBadge: document.querySelector("#session-badge"),
  sessionLabel: document.querySelector("#session-label"),
  resetDialog: document.querySelector("#reset-dialog"),
  openReset: document.querySelector("#open-reset"),
  jumpNext: document.querySelector("#jump-next"),
  focusNext: document.querySelector("#focus-next"),
  filterCountAll: document.querySelector("#filter-count-all"),
  filterCountIncomplete: document.querySelector("#filter-count-incomplete"),
  filterCountCompleted: document.querySelector("#filter-count-completed")
};

let storageEnabled = true;
let toastTimer;
let highlightTimer;
let activeDateKey = getTodayKey();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeSearch(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getTodayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCurrentPhase(today = getTodayKey()) {
  return ROADMAP.find(phase => phase.start <= today && today <= phase.end) || null;
}

function getPhaseTiming(phase, today = getTodayKey()) {
  if (phase.start <= today && today <= phase.end) return "current";
  if (today < phase.start) return "upcoming";
  return "past";
}

function getNextIncompleteTask() {
  return TASKS.find(task => !state.completed.has(task.id)) || null;
}

function getPhaseCompletion(phase) {
  return phase.tasks.reduce((count, task) => count + Number(state.completed.has(task.id)), 0);
}

function loadState() {
  let raw;

  try {
    raw = sessionStorage.getItem(STORAGE_KEY);
  } catch {
    storageEnabled = false;
    state.completed = new Set();
    return;
  }

  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    const completed = Array.isArray(saved?.completed) ? saved.completed : [];
    state.completed = new Set(completed.filter(id => VALID_TASK_IDS.has(id)));
  } catch {
    state.completed = new Set();
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      storageEnabled = false;
    }
  }
}

function persistState() {
  if (!storageEnabled) return;

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ completed: [...state.completed] }));
  } catch {
    storageEnabled = false;
    updateStorageBadge();
    showToast("Progress will stay in memory until this page closes.");
  }
}

function clearStoredState() {
  if (!storageEnabled) return;

  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    storageEnabled = false;
  }
}

function updateStorageBadge() {
  if (storageEnabled) {
    refs.sessionLabel.textContent = "Session progress";
    refs.sessionBadge.title = "Task progress is stored only in this browser tab's session";
    refs.sessionBadge.classList.remove("has-warning");
    return;
  }

  refs.sessionLabel.textContent = "In-memory only";
  refs.sessionBadge.title = "Session storage is unavailable; progress will last only while this page remains open";
  refs.sessionBadge.classList.add("has-warning");
}

function renderTimeline() {
  const today = getTodayKey();

  refs.timeline.innerHTML = ROADMAP.map(phase => {
    const timing = getPhaseTiming(phase, today);
    const completed = getPhaseCompletion(phase);
    const tasks = phase.tasks.map(task => {
      const done = state.completed.has(task.id);
      const searchText = normalizeSearch(`${phase.title} ${phase.dateLabel} ${phase.subtitle} ${task.text} ${task.tag}`);

      return `
        <li class="task-item${done ? " is-complete" : ""}" data-task-id="${escapeHtml(task.id)}" data-task-state="${done ? "completed" : "incomplete"}" data-search="${escapeHtml(searchText)}">
          <input class="task-check" id="task-${escapeHtml(task.id)}" type="checkbox" data-task-id="${escapeHtml(task.id)}"${done ? " checked" : ""}>
          <label class="task-copy" for="task-${escapeHtml(task.id)}">${escapeHtml(task.text)}</label>
          <span class="task-tag">${escapeHtml(task.tag)}</span>
        </li>`;
    }).join("");

    const currentAttribute = timing === "current" ? ' aria-current="step"' : "";
    const status = timing === "current"
      ? `Current · ${completed}/${phase.tasks.length} complete`
      : `${completed}/${phase.tasks.length} complete`;

    return `
      <section class="timeline-phase is-${timing}${completed === phase.tasks.length ? " is-complete" : ""}" id="${escapeHtml(phase.id)}" data-phase-id="${escapeHtml(phase.id)}" tabindex="-1" aria-labelledby="${escapeHtml(phase.id)}-title"${currentAttribute}>
        <div class="phase-marker" aria-hidden="true">${escapeHtml(phase.number)}</div>
        <div class="phase-content">
          <header class="phase-header">
            <div>
              <p class="phase-date">${escapeHtml(phase.dateLabel)}</p>
              <h3 id="${escapeHtml(phase.id)}-title">${escapeHtml(phase.title)}</h3>
              <p class="phase-subtitle">${escapeHtml(phase.subtitle)}</p>
            </div>
            <div class="phase-meta">
              <span class="phase-badge" data-phase-status="${escapeHtml(phase.id)}">${escapeHtml(status)}</span>
              <progress class="phase-progress" data-phase-progress="${escapeHtml(phase.id)}" max="${phase.tasks.length}" value="${completed}" aria-label="${escapeHtml(phase.title)} completion">${completed}/${phase.tasks.length}</progress>
            </div>
          </header>
          <ul class="task-list">${tasks}</ul>
        </div>
      </section>`;
  }).join("");
}

function renderPhaseNavigation() {
  const current = getCurrentPhase();

  const phaseButtons = ROADMAP.map(phase => {
    const completed = getPhaseCompletion(phase);
    const isCurrent = current?.id === phase.id;
    return `
      <button class="phase-nav-button${isCurrent ? " is-current" : ""}" type="button" data-phase-target="${escapeHtml(phase.id)}"${isCurrent ? ' aria-current="step"' : ""} aria-label="Jump to ${escapeHtml(phase.title)}, ${completed} of ${phase.tasks.length} tasks complete">
        <span class="phase-nav-number" aria-hidden="true">${escapeHtml(phase.number)}</span>
        <span class="phase-nav-copy">
          <strong>${escapeHtml(phase.shortTitle)}</strong>
          <small data-nav-progress="${escapeHtml(phase.id)}">${completed}/${phase.tasks.length} done</small>
        </span>
      </button>`;
  }).join("");

  refs.phaseNavList.innerHTML = `${phaseButtons}
    <button class="phase-nav-button phase-nav-rules" type="button" data-phase-target="standing-rules" aria-label="Jump to standing rules">
      <span class="phase-nav-number" aria-hidden="true">08</span>
      <span class="phase-nav-copy"><strong>Rules</strong><small>5 guardrails</small></span>
    </button>`;
}

function renderRules() {
  refs.rulesGrid.innerHTML = RULES.map((rule, index) => `
    <article class="rule-card">
      <span class="rule-number">RULE ${String(index + 1).padStart(2, "0")}</span>
      <p>${escapeHtml(rule)}</p>
    </article>
  `).join("");
}

function renderNextActions() {
  const next = TASKS.filter(task => !state.completed.has(task.id)).slice(0, 3);

  if (!next.length) {
    refs.nextActions.innerHTML = '<li class="next-actions-complete">All roadmap tasks are complete.</li>';
    return;
  }

  refs.nextActions.innerHTML = next.map(task => `
    <li>
      <button class="next-action-button" type="button" data-task-target="${escapeHtml(task.id)}">
        <span>${escapeHtml(task.text)}</span>
        <small>${escapeHtml(task.phaseTitle)}</small>
      </button>
    </li>
  `).join("");
}

function updateDashboard() {
  const done = state.completed.size;
  const total = TASKS.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const today = getTodayKey();
  const current = getCurrentPhase(today);
  const next = getNextIncompleteTask();

  refs.completedCount.textContent = String(done);
  refs.totalCount.textContent = String(total);
  refs.progressPercent.textContent = `${percent}%`;
  refs.progressBar.value = percent;
  refs.progressBar.textContent = `${percent}%`;
  refs.progressRingValue.setAttribute("stroke-dashoffset", String(100 - percent));
  refs.progressRing.setAttribute("aria-label", `Overall completion: ${percent} percent`);

  if (current) {
    refs.currentPhase.textContent = current.title;
    refs.currentPhaseNote.textContent = `${current.dateLabel} · ${current.subtitle}`;
    refs.currentPhaseChip.textContent = "Current";
    refs.currentPhaseChip.className = "metric-chip is-current";
  } else if (today < ROADMAP[0].start) {
    refs.currentPhase.textContent = "Roadmap begins Jul 20";
    refs.currentPhaseNote.textContent = "Use this time to prepare the first verification tasks.";
    refs.currentPhaseChip.textContent = "Upcoming";
    refs.currentPhaseChip.className = "metric-chip";
  } else {
    refs.currentPhase.textContent = "Execution window complete";
    refs.currentPhaseNote.textContent = "Review any unfinished tasks and close the remaining loops.";
    refs.currentPhaseChip.textContent = "Review";
    refs.currentPhaseChip.className = "metric-chip is-review";
  }

  if (next) {
    refs.nextTask.textContent = next.text;
    refs.nextTaskMeta.textContent = `${next.phaseTitle} · ${next.tag}`;
    refs.jumpNext.disabled = false;
    refs.focusNext.disabled = false;
  } else {
    refs.nextTask.textContent = "Everything is complete for this session.";
    refs.nextTaskMeta.textContent = "All three primary goals are supported by a finished plan.";
    refs.jumpNext.disabled = true;
    refs.focusNext.disabled = true;
  }

  updateFilterCounts();
  updatePhaseProgress();
  renderNextActions();
}

function updateFilterCounts() {
  const completed = state.completed.size;
  refs.filterCountAll.textContent = String(TASKS.length);
  refs.filterCountIncomplete.textContent = String(TASKS.length - completed);
  refs.filterCountCompleted.textContent = String(completed);
}

function updatePhaseProgress() {
  const today = getTodayKey();

  ROADMAP.forEach(phase => {
    const completed = getPhaseCompletion(phase);
    const timing = getPhaseTiming(phase, today);
    const phaseElement = document.getElementById(phase.id);
    const status = document.querySelector(`[data-phase-status="${phase.id}"]`);
    const progress = document.querySelector(`[data-phase-progress="${phase.id}"]`);
    const navButton = document.querySelector(`[data-phase-target="${phase.id}"]`);
    const navProgress = document.querySelector(`[data-nav-progress="${phase.id}"]`);
    const isComplete = completed === phase.tasks.length;

    phaseElement?.classList.toggle("is-current", timing === "current");
    phaseElement?.classList.toggle("is-upcoming", timing === "upcoming");
    phaseElement?.classList.toggle("is-past", timing === "past");
    phaseElement?.classList.toggle("is-complete", isComplete);

    if (phaseElement) {
      if (timing === "current") phaseElement.setAttribute("aria-current", "step");
      else phaseElement.removeAttribute("aria-current");
    }

    if (status) {
      status.textContent = timing === "current"
        ? `Current · ${completed}/${phase.tasks.length} complete`
        : `${completed}/${phase.tasks.length} complete`;
    }

    if (progress) {
      progress.value = completed;
      progress.textContent = `${completed}/${phase.tasks.length}`;
    }

    if (navButton) {
      navButton.classList.toggle("is-current", timing === "current");
      navButton.setAttribute("aria-label", `Jump to ${phase.title}, ${completed} of ${phase.tasks.length} tasks complete`);
      if (timing === "current") navButton.setAttribute("aria-current", "step");
      else navButton.removeAttribute("aria-current");
    }

    if (navProgress) navProgress.textContent = `${completed}/${phase.tasks.length} done`;
  });
}

function updateTaskRow(taskId) {
  const row = refs.timeline.querySelector(`[data-task-id="${taskId}"]`);
  if (!row) return;

  const done = state.completed.has(taskId);
  const checkbox = row.querySelector(".task-check");
  row.classList.toggle("is-complete", done);
  row.dataset.taskState = done ? "completed" : "incomplete";
  checkbox.checked = done;
}

function updateAllTaskRows() {
  TASKS.forEach(task => updateTaskRow(task.id));
}

function handleTaskChange(event) {
  const checkbox = event.target.closest(".task-check");
  if (!checkbox) return;

  const taskId = checkbox.dataset.taskId;
  if (!VALID_TASK_IDS.has(taskId)) return;

  if (checkbox.checked) {
    state.completed.add(taskId);
    showToast("Task completed for this session.");
  } else {
    state.completed.delete(taskId);
    showToast("Task returned to the incomplete list.");
  }

  updateTaskRow(taskId);
  persistState();
  updateDashboard();
  applyFilters();
}

function setFilter(filter) {
  if (!["all", "incomplete", "completed"].includes(filter)) return;
  state.filter = filter;

  document.querySelectorAll(".filter-button").forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  applyFilters();
}

function applyFilters() {
  const query = normalizeSearch(state.search);
  let visibleTasks = 0;

  refs.timeline.querySelectorAll(".timeline-phase").forEach(phase => {
    let visibleInPhase = 0;

    phase.querySelectorAll(".task-item").forEach(item => {
      const matchesSearch = !query || item.dataset.search.includes(query);
      const matchesFilter = state.filter === "all" || item.dataset.taskState === state.filter;
      const visible = matchesSearch && matchesFilter;
      item.hidden = !visible;
      if (visible) {
        visibleInPhase += 1;
        visibleTasks += 1;
      }
    });

    phase.hidden = visibleInPhase === 0;
  });

  const hasEmptyView = visibleTasks === 0;
  refs.timeline.hidden = hasEmptyView;
  refs.emptyState.hidden = !hasEmptyView;

  const viewLabel = state.filter === "all" ? "tasks" : `${state.filter} tasks`;
  refs.resultsSummary.textContent = query
    ? `Showing ${visibleTasks} of ${TASKS.length} ${viewLabel} matching “${state.search.trim()}”.`
    : `Showing ${visibleTasks} of ${TASKS.length} ${viewLabel}.`;

  if (hasEmptyView) updateEmptyState(query);
}

function updateEmptyState(query) {
  if (query) {
    refs.emptyTitle.textContent = "No matching tasks";
    refs.emptyCopy.textContent = `Nothing in this ${state.filter === "all" ? "roadmap" : state.filter + " view"} matches “${state.search.trim()}”.`;
    return;
  }

  if (state.filter === "completed") {
    refs.emptyTitle.textContent = "No completed tasks yet";
    refs.emptyCopy.textContent = "Check a task to begin building this session’s progress.";
    return;
  }

  if (state.filter === "incomplete") {
    refs.emptyTitle.textContent = "Everything is complete";
    refs.emptyCopy.textContent = "There are no incomplete tasks left in this session.";
    return;
  }

  refs.emptyTitle.textContent = "No tasks found";
  refs.emptyCopy.textContent = "Clear the current view and try again.";
}

function clearView({ focusSearch = false } = {}) {
  state.search = "";
  refs.searchInput.value = "";
  setFilter("all");
  if (focusSearch) refs.searchInput.focus();
}

function focusTask(taskId) {
  const task = TASK_BY_ID.get(taskId);
  if (!task) return;

  clearView();

  const row = refs.timeline.querySelector(`[data-task-id="${taskId}"]`);
  const checkbox = row?.querySelector(".task-check");
  if (!row || !checkbox) return;

  window.clearTimeout(highlightTimer);
  refs.timeline.querySelectorAll(".is-highlighted").forEach(item => item.classList.remove("is-highlighted"));
  row.classList.add("is-highlighted");
  row.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "center"
  });
  checkbox.focus({ preventScroll: true });
  highlightTimer = window.setTimeout(() => row.classList.remove("is-highlighted"), 2400);
  showToast(`Next action focused in ${task.phaseTitle}.`);
}

function focusNextTask() {
  const next = getNextIncompleteTask();
  if (!next) {
    showToast("Every roadmap task is complete.");
    return;
  }

  focusTask(next.id);
}

function jumpToPhase(targetId) {
  clearView();
  const target = document.getElementById(targetId);
  if (!target) return;

  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start"
  });
  target.focus({ preventScroll: true });
}

function openResetDialog() {
  if (!state.completed.size) {
    showToast("No session progress to reset.");
    return;
  }

  if (typeof refs.resetDialog.showModal === "function") {
    refs.resetDialog.returnValue = "cancel";
    refs.resetDialog.showModal();
    return;
  }

  if (window.confirm("Reset every checked task for this session?")) resetSession();
}

function resetSession() {
  state.completed.clear();
  clearStoredState();
  updateAllTaskRows();
  updateDashboard();
  applyFilters();
  showToast("Session progress reset.");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  refs.toast.textContent = message;
  refs.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => refs.toast.classList.remove("is-visible"), 2600);
}

function bindControls() {
  refs.timeline.addEventListener("change", handleTaskChange);

  refs.phaseNavList.addEventListener("click", event => {
    const button = event.target.closest("[data-phase-target]");
    if (button) jumpToPhase(button.dataset.phaseTarget);
  });

  refs.nextActions.addEventListener("click", event => {
    const button = event.target.closest("[data-task-target]");
    if (button) focusTask(button.dataset.taskTarget);
  });

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  refs.searchInput.addEventListener("input", event => {
    state.search = event.currentTarget.value;
    applyFilters();
  });

  refs.searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape" && refs.searchInput.value) {
      event.preventDefault();
      state.search = "";
      refs.searchInput.value = "";
      applyFilters();
    }
  });

  refs.clearView.addEventListener("click", () => clearView({ focusSearch: true }));
  refs.jumpNext.addEventListener("click", focusNextTask);
  refs.focusNext.addEventListener("click", focusNextTask);
  refs.openReset.addEventListener("click", openResetDialog);

  refs.resetDialog.addEventListener("close", () => {
    if (refs.resetDialog.returnValue === "confirm") resetSession();
  });

  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    const target = event.target;
    const isTyping = target instanceof HTMLInputElement
      || target instanceof HTMLTextAreaElement
      || target instanceof HTMLSelectElement
      || target?.isContentEditable;

    if (!isTyping && event.key === "/") {
      event.preventDefault();
      refs.searchInput.focus();
    } else if (!isTyping && event.key.toLowerCase() === "n") {
      event.preventDefault();
      focusNextTask();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      activeDateKey = getTodayKey();
      updateDashboard();
    }
  });

  window.setInterval(() => {
    const nextDateKey = getTodayKey();
    if (nextDateKey === activeDateKey) return;
    activeDateKey = nextDateKey;
    updateDashboard();
  }, 60_000);
}

function initialize() {
  loadState();
  renderTimeline();
  renderPhaseNavigation();
  renderRules();
  bindControls();
  updateStorageBadge();
  updateDashboard();
  applyFilters();
}

initialize();
