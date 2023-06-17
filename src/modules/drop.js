const drop = (event) => {
  event.preventDefault();
  const draggedTaskId = event.dataTransfer.getData('text/plain');
  const draggedTask = document.getElementById(draggedTaskId);
  const dropzone = event.target.closest('.task-card');
  const taskList = dropzone.querySelector('.tasks');

  dropzone.classList.remove('dragover');
  taskList.appendChild(draggedTask);
};

export { drop };
