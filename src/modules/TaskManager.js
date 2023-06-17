class TaskManager {
  constructor() {
    this.tasks = [];
    this.attachEventListeners();
    this.loadTask();
  }

  addTask = (event) => {
    event.preventDefault();
    const taskDescriptionInput = document.getElementById('taskDescription').value;

    if (taskDescriptionInput.trim() === '') {
      const alertMessage = document.getElementById('alertMessage');
      alertMessage.textContent = 'Please enter a description for the task.';
      alertMessage.style.color = 'red';
      alertMessage.style.textAlign = 'center';
      alertMessage.style.display = 'block';
      return;
    }

    const alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'none';
    alertMessage.textContent = '';

    const task = {
      description: taskDescriptionInput,
    };

    this.tasks.push(task);
    this.renderTasks(task);
    this.saveTasktoLocalStorage();

    document.getElementById('taskDescription').value = '';
  };

  renderTasks = (task) => {
    const tasksListContainer = document.getElementById('tasksList');

    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.draggable = true; // Enable drag functionality
    taskCard.addEventListener('dragstart', this.dragStart);
    taskCard.addEventListener('dragover', this.dragOver);
    taskCard.addEventListener('dragenter', this.dragEnter);
    taskCard.addEventListener('dragleave', this.dragLeave);
    taskCard.addEventListener('drop', this.drop);
    taskCard.addEventListener('dragend', this.dragEnd);

    const tasks = document.createElement('ul');
    tasks.className = 'tasks';
    const taskItem1 = document.createElement('li');
    taskItem1.className = 'list';
    taskItem1.textContent = task.description;
    const taskItem2 = document.createElement('li');
    taskItem2.className = 'list';
    const taskItem2Link = document.createElement('a');
    const taskItem2Image = document.createElement('img');
    taskItem2Image.className = 'unchecked';
    taskItem2Image.src = '/assets/images/icons8-botón-de-radio-sin-marcar-48.png'; // Updated image path
    taskItem2Image.alt = 'unchecked';
    taskItem2Link.appendChild(taskItem2Image);
    taskItem2.appendChild(taskItem2Link);

    taskItem2Link.addEventListener('click', () => {
      if (taskItem2Image.classList.contains('unchecked')) {
        // Toggle to checked state
        taskItem2Image.src = '/assets/images/icons8-ok-48.png'; // Updated image path
        taskItem2Image.alt = 'checked';
        taskItem2Image.classList.remove('unchecked');
        taskItem1.style.textDecoration = 'line-through';
      } else {
        // Toggle to unchecked state
        taskItem2Image.src = '/assets/images/icons8-botón-de-radio-sin-marcar-48.png'; // Updated image path
        taskItem2Image.alt = 'unchecked';
        taskItem2Image.addEventListener('mouseover', () => {
          taskItem2Image.style.cursor = 'pointer';
        });
        taskItem2Image.classList.add('unchecked');
        taskItem1.style.textDecoration = 'none';
      }
    });

    tasks.appendChild(taskItem1);
    tasks.appendChild(taskItem2);

    const actions = document.createElement('ul');
    actions.className = 'actions';
    const actionItemEdit = document.createElement('li');
    actionItemEdit.className = 'li_actions';
    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn-actions';
    const imageEdit = document.createElement('img');
    imageEdit.src = '/assets/images/icons8-editar-48.png'; // Updated image path
    imageEdit.alt = 'button Edit';
    buttonEdit.appendChild(imageEdit);
    actionItemEdit.appendChild(buttonEdit);
    buttonEdit.addEventListener('click', (event) => this.editTask(event));

    const actionItemDelete = document.createElement('li');
    actionItemDelete.className = 'li_actions';
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete btn-actions';
    const imageDelete = document.createElement('img');
    imageDelete.src = '/assets/images/icons8-borrar-para-siempre-48.png';// Updated image path
    imageDelete.alt = 'button Delete';
    buttonDelete.appendChild(imageDelete);
    actionItemDelete.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', () => this.deleteTask(taskCard, task.description));

    actions.appendChild(actionItemEdit);
    actions.appendChild(actionItemDelete);

    taskCard.appendChild(tasks);
    taskCard.appendChild(actions);

    tasksListContainer.appendChild(taskCard);
  };

  editTask = (event) => {
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
    saveButton.addEventListener('click', () => this.saveTask(targetTask, taskDescription));

    const cancelButton = document.createElement('button');
    cancelButton.className = 'btn-actions';
    const cancelImage = document.createElement('img');
    cancelImage.style.width = '35px';
    cancelImage.src = '/assets/images/icons8-cancel-48.png';
    cancelImage.alt = 'button Cancel';
    cancelButton.appendChild(cancelImage);
    cancelButton.addEventListener('click', () => this.cancelTask(targetTask, taskDescription));

    taskDescription.textContent = '';
    taskDescription.appendChild(taskDescriptionInput);
    const actions = targetTask.querySelector('.actions');
    actions.textContent = '';
    actions.appendChild(saveButton);
    actions.appendChild(cancelButton);
  };

  deleteTask = (targetTask, taskDescription) => {
    targetTask.remove();

    const targetTaskIndex = this.tasks.findIndex(
      (task) => task.description === taskDescription
    );

    if (targetTaskIndex !== -1) {
      this.tasks.splice(targetTaskIndex, 1);
      this.saveTasktoLocalStorage();
    }
  };

  saveTask = (targetTask, taskDescription) => {
    const taskDescriptionInput = taskDescription.querySelector('input');
    const taskDescriptionText = taskDescriptionInput.value;

    if (taskDescriptionText) {
      taskDescription.textContent = taskDescriptionText;
    }

    const targetTaskIndex = Array.from(targetTask.parentNode.children).indexOf(
      targetTask
    );
    if (targetTaskIndex !== -1) {
      this.tasks[targetTaskIndex] = {
        description: taskDescriptionText,
      };
      this.saveTasktoLocalStorage();
    }

    window.location.reload();
  };

  cancelTask = (targetTask, taskDescription) => {
    const taskDescriptionInput = taskDescription.querySelector('input');
    const taskDescriptionText = taskDescriptionInput.value;

    if (taskDescriptionText) {
      taskDescription.textContent = taskDescriptionText;
    } else {
      targetTask.remove();
      const targetTaskIndex = Array.from(
        targetTask.parentNode.children
      ).indexOf(targetTask);
      if (targetTaskIndex !== -1) {
        this.tasks.splice(targetTaskIndex, 1);
        this.saveTasktoLocalStorage();
      }
    }
    window.location.reload();
  };

  loadTask = () => {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.tasks.forEach((task) => this.renderTasks(task));
  };

  saveTasktoLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  attachEventListeners = () => {
    const addTaskForm = document.getElementById('taskForm');
    addTaskForm.addEventListener('submit', (event) => this.addTask(event));

    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach((card) => {
      card.addEventListener('dragstart', this.dragStart);
      card.addEventListener('dragover', this.dragOver);
      card.addEventListener('dragenter', this.dragEnter);
      card.addEventListener('dragleave', this.dragLeave);
      card.addEventListener('drop', this.drop);
      card.addEventListener('dragend', this.dragEnd);
    });
  };

  dragStart = (event) => {
    event.target.classList.add('dragging');
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  dragOver = (event) => {
    event.preventDefault();
  };

  dragEnter = (event) => {
    event.target.classList.add('dragover');
  };

  dragLeave = (event) => {
    event.target.classList.remove('dragover');
  };

  drop = (event) => {
    event.preventDefault();
    const draggedTaskId = event.dataTransfer.getData('text/plain');
    const draggedTask = document.getElementById(draggedTaskId);
    const dropZone = event.target.closest('.task-card');

    if (dropZone && draggedTask) {
      dropZone.classList.remove('dragover');
      dropZone.parentNode.insertBefore(draggedTask, dropZone.nextSibling);
    }
  };

  dragEnd = (event) => {
    event.target.classList.remove('dragging');
  };
}

export default TaskManager;
