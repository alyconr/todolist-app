const renderTasks = (taskManager, task) => {
  if (task && task.description) {
    const tasksListContainer = document.getElementById('tasksList');

    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.draggable = true; // Enable drag functionality
    taskCard.addEventListener('dragstart', taskManager.dragStart);
    taskCard.addEventListener('dragover', taskManager.dragOver);
    taskCard.addEventListener('dragenter', taskManager.dragEnter);
    taskCard.addEventListener('dragleave', taskManager.dragLeave);
    taskCard.addEventListener('drop', taskManager.drop);
    taskCard.addEventListener('dragend', taskManager.dragEnd);

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
    taskItem2Image.src = './assets/images/icons8-botón-de-radio-sin-marcar-48.png'; // Updated image path
    taskItem2Image.alt = 'unchecked';
    taskItem2Link.appendChild(taskItem2Image);
    taskItem2.appendChild(taskItem2Link);

    taskItem2Link.addEventListener('click', () => {
      if (taskItem2Image.classList.contains('unchecked')) {
        // Toggle to checked state
        taskItem2Image.src = './assets/images/icons8-ok-48.png'; // Updated image path
        taskItem2Image.alt = 'checked';
        taskItem2Image.classList.remove('unchecked');
        taskItem1.style.textDecoration = 'line-through';
      } else {
        // Toggle to unchecked state
        taskItem2Image.src = './assets/images/icons8-botón-de-radio-sin-marcar-48.png'; // Updated image path
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
    imageEdit.src = './assets/images/icons8-editar-48.png'; // Updated image path
    imageEdit.alt = 'button Edit';
    buttonEdit.appendChild(imageEdit);
    actionItemEdit.appendChild(buttonEdit);
    buttonEdit.addEventListener('click', (event) => taskManager.editTask(event));

    const actionItemDelete = document.createElement('li');
    actionItemDelete.className = 'li_actions';
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete btn-actions';
    const imageDelete = document.createElement('img');
    imageDelete.src = './assets/images/icons8-borrar-para-siempre-48.png'; // Updated image path
    imageDelete.alt = 'button Delete';
    buttonDelete.appendChild(imageDelete);
    actionItemDelete.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', () => taskManager.deleteTask(taskCard, task.description));
    actions.appendChild(actionItemEdit);
    actions.appendChild(actionItemDelete);

    taskCard.appendChild(tasks);
    taskCard.appendChild(actions);

    tasksListContainer.appendChild(taskCard);
  }
};

export { renderTasks };
