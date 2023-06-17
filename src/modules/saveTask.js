const saveTask = (taskManager, targetTask, taskDescription) => {
  const taskDescriptionInput = taskDescription.querySelector('input');
  const taskDescriptionText = taskDescriptionInput.value;

  if (taskDescriptionText) {
    taskDescription.textContent = taskDescriptionText;
  }

  const targetTaskIndex = Array.from(targetTask.parentNode.children).indexOf(
    targetTask
  );
  if (targetTaskIndex !== -1) {
    taskManager.tasks[targetTaskIndex] = {
      description: taskDescriptionText,
    };
    taskManager.saveTasktoLocalStorage();
  }

  window.location.reload();
};

export { saveTask };
