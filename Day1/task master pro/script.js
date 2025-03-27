let tasks = [];

const addTask = () => {
  const title = document.getElementById("taskTitle").value;
  const priority = document.getElementById("taskPriority").value;
  if (!title.trim()) return alert("Enter a valid task!");

  tasks.push({ title, priority, completed: false });
  document.getElementById("taskTitle").value = "";
  renderTasks();
};

const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

const searchTasks = () => {
  const query = document.getElementById("search").value.toLowerCase();
  renderTasks(tasks.filter((task) => task.title.toLowerCase().includes(query)));
};

const filterTasks = () => {
  const status = document.getElementById("filterStatus").value;
  let filteredTasks = tasks;
  if (status === "completed")
    filteredTasks = tasks.filter((task) => task.completed);
  if (status === "pending")
    filteredTasks = tasks.filter((task) => !task.completed);
  renderTasks(filteredTasks);
};

const renderTasks = (filtered = tasks) => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.innerHTML = `${task.title} - <strong>${task.priority}</strong>
            <button onclick="toggleTask(${index})">✔</button>
            <button onclick="deleteTask(${index})">❌</button>`;
    taskList.appendChild(li);
  });

  updateStats();
};

const updateStats = () => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  document.getElementById(
    "taskStats"
  ).innerText = `Total: ${total}, Completed: ${completed}, Pending: ${
    total - completed
  }`;
};
