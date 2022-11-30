let count = 3;
function timeout() {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(i);
  }

}

var i = setInterval(timeout, 1000);
