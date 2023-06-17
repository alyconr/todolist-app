const loadTask = (taskManager) => {
  taskManager.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskManager.tasks.forEach((task) => taskManager.renderTasks(task));
};

export { loadTask };
