var $countdown = document.querySelector('.countdown-display');

function timeout() {
  $countdown.textContent -= 1;
  if ($countdown.textContent === '0') {
    $countdown.textContent = '~Earth Beeeeloooowwwww Us~';
    clearInterval(i);
  }
}

var i = setInterval(timeout, 1000);
