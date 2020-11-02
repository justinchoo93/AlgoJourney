const dragColumn = document.querySelector('.drag-column');
const dropColumn = document.querySelector('.drop-column');

// function to handle drag
const onDragStart = (e) => {
  e.dataTransfer.setData('text', e.target.id);
};

// add draggable box to drag container
const addDraggableBoxes = () => {
  const draggableBox = document.createElement('div');
  draggableBox.setAttribute('id', 'box1');
  draggableBox.setAttribute('class', 'draggable-box');
  draggableBox.setAttribute('draggable', 'true');

  draggableBox.addEventListener('dragstart', onDragStart);

  dragColumn.appendChild(draggableBox);
};

// handle drag over event
const onDragOver = (e) => {
  e.preventDefault();
};

addDraggableBoxes();

dropColumn.addEventListener('dragover', onDragOver);

// handle what happens after dropping
const onDrop = (e) => {
  const id = e.dataTransfer.getData('text');
  const draggableBox = document.querySelector('#box1');
  const dropzone = e.target;
  dropzone.appendChild(draggableBox);
  e.dataTransfer.clearData();
};

dropColumn.addEventListener('drop', onDrop);

addDraggableBoxes();
