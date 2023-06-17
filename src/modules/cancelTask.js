const cancelTask = (taskManager, targetTask, taskDescription) => {
  const taskDescriptionInput = taskDescription.querySelector('input');
  const taskDescriptionText = taskDescriptionInput.value;

  if (taskDescriptionText) {
    taskDescription.textContent = taskDescriptionText;
  } else {
    targetTask.remove();
    const targetTaskIndex = Array.from(targetTask.parentNode.children).indexOf(
      targetTask
    );
    if (targetTaskIndex !== -1) {
      taskManager.tasks.splice(targetTaskIndex, 1);
      taskManager.saveTasktoLocalStorage();
    }
  }
  window.location.reload();
};

export { cancelTask };
