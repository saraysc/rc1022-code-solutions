function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var click = document.querySelector('.click-button');

click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var hovered = document.querySelector('.hover-button');
hovered.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var doubleClicked = document.querySelector('.double-click-button');
doubleClicked.addEventListener('dblclick', handleDoubleClick);
