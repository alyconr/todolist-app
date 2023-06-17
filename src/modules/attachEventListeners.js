const attachEventListeners = (taskManager) => {
  const addTaskForm = document.getElementById('taskForm');
  addTaskForm.addEventListener('submit', (event) => taskManager.addTask(event));

  const taskCards = document.querySelectorAll('.task-card');
  taskCards.forEach((card) => {
    card.addEventListener('dragstart', taskManager.dragStart);
    card.addEventListener('dragover', taskManager.dragOver);
    card.addEventListener('dragenter', taskManager.dragEnter);
    card.addEventListener('dragleave', taskManager.dragLeave);
    card.addEventListener('drop', taskManager.drop);
    card.addEventListener('dragend', taskManager.dragEnd);
  });
};

export { attachEventListeners };
