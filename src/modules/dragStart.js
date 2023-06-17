const dragStart = (event) => {
  event.target.classList.add('dragging');
  event.dataTransfer.setData('text/plain', event.target.id);
};

export { dragStart };
