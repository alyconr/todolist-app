const saveTasktoLocalStorage = (taskManager) => {
  localStorage.setItem('tasks', JSON.stringify(taskManager.tasks));
};

export { saveTasktoLocalStorage };
