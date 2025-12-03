document.getElementById("user-name").textContent = "John Doe";

// ===== DOM ELEMENTS =====
const taskListContainer = document.querySelector(".tasks-container");
const pendingStat = document.querySelector(".stat-pendingtask strong");
const completedStat = document.querySelector(".stat-completedtask strong");
const createdStat = document.querySelector(".stat-taskcreated strong");

// ===== LOAD TASKS FROM LOCALSTORAGE =====
let tasksArray = [];
const stored = localStorage.getItem("tasks");
if(stored) tasksArray = JSON.parse(stored);

// ===== UPDATE STATS =====
function updateStats() {
    const createdCount = tasksArray.length;
    const completedCount = tasksArray.filter(t => t.status === "completed").length;
    const pendingCount = tasksArray.filter(t => t.status === "pending").length;

    pendingStat.textContent = pendingCount;
    completedStat.textContent = completedCount;
    createdStat.textContent = createdCount;
}

// ===== RENDER TASKS (READ ONLY) =====
function renderTasks() {
    taskListContainer.innerHTML = "";

    // Only show pending tasks
    tasksArray
        .filter(task => task.status === "pending")
        .forEach(task => {
            const card = document.createElement("div");
            card.classList.add("task-card");

            const priorityClass = {
                Low: "priority-low",
                Medium: "priority-medium",
                High: "priority-high"
            }[task.priority];

            card.innerHTML = `
                <div class="task-header">
                    <span class="task-text">${task.text}</span>
                    <span class="task-priority ${priorityClass}">${task.priority}</span>
                    <span class="task-date">${task.date}</span>
                </div>
            `;
            taskListContainer.appendChild(card);
        });
}

// ===== INITIALIZE =====
renderTasks();
updateStats();
