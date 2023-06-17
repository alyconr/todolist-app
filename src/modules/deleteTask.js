const deleteTask = (taskManager, targetTask, taskDescription) => {
  targetTask.remove();

  const targetTaskIndex = taskManager.tasks.findIndex(
    (task) => task.description === taskDescription
  );

  if (targetTaskIndex !== -1) {
    taskManager.tasks.splice(targetTaskIndex, 1);
    taskManager.saveTasktoLocalStorage();
  }
};

export { deleteTask };
