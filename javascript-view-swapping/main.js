var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', onClick);

function onClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabs.length; i++) {
    if (event.target === $tabs[i]) {
      $tabs[i].className = 'tab active';
    }
    if ($tabs[i] !== event.target) {
      $tabs[i].className = 'tab';
    }
  }

  if (event.target.matches('.tab')) {
    var $data = event.target.getAttribute('data-view');

    for (var m = 0; m < $views.length; m++) {
      var value = $views[m].getAttribute('data-view');

      if (value[m] === $data[m]) {
        $views[m].className = 'view';
      } if (value[m] !== $data[m]) {
        $views[m].className = 'view hidden';
      }

    }
  }
}
