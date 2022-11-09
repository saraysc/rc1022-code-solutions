var $countdown = document.querySelector('.countdown-display');

function timeout() {
  $countdown.textContent -= 1;
  if ($countdown.textContent === '0') {
    $countdown.textContent = '~Earth Beeeeloooowwwww Us~';
  }
}

var i = setInterval(timeout, 1000);
setTimeout(function () { clearInterval(i); }, 4000);
