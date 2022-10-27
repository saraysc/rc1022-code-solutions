var $task = document.querySelector('.task-list');

$task.addEventListener('click', onClick);

function onClick(event) {
  console.log('event target:', event.target);
  console.log('event.target.tagName', event.target.tagName);
  // eslint-disable-next-line eqeqeq
  if (event.target && event.target.nodeName === 'BUTTON') {
    var closestTarget = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', closestTarget);
    closestTarget.remove();
  }

}
