const editTask = (event) => {
  const targetTask = event.target.closest('.task-card');
  const taskDescription = targetTask.querySelector('.tasks .list');

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.type = 'text';
  taskDescriptionInput.style.border = 'none';
  taskDescriptionInput.style.borderRadius = '5px';
  taskDescriptionInput.style.padding = '5px';
  taskDescriptionInput.style.backgroundColor = '#f2f2f2';

  taskDescriptionInput.value = taskDescription.textContent;

  const saveButton = document.createElement('button');
  saveButton.className = 'btn-actions';
  const saveImage = document.createElement('img');
  saveImage.style.width = '35px';
  saveImage.src = '/assets/images/icons8-save-48.png';
  saveImage.alt = 'button Save';
  saveButton.appendChild(saveImage);
  // eslint-disable-next-line no-undef
  saveButton.addEventListener('click', () => taskManager.saveTask(targetTask, taskDescription));

  const cancelButton = document.createElement('button');
  cancelButton.className = 'btn-actions';
  const cancelImage = document.createElement('img');
  cancelImage.style.width = '35px';
  cancelImage.src = '/assets/images/icons8-cancel-48.png';
  cancelImage.alt = 'button Cancel';
  cancelButton.appendChild(cancelImage);
  // eslint-disable-next-line no-undef
  cancelButton.addEventListener('click', () => taskManager.cancelTask(targetTask, taskDescription));

  taskDescription.textContent = '';

  taskDescription.appendChild(taskDescriptionInput);

  const actions = targetTask.querySelector('.actions');
  actions.textContent = '';
  actions.appendChild(saveButton);
  actions.appendChild(cancelButton);
};

export { editTask };
