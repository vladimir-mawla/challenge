window.addEventListener('keydown', (event) => {
  if(event) {
    event.preventDefault();
    document.getElementById("text").innerHTML = "LEVEL 1"
  }
});

const green = document.getElementById('green');

green.addEventListener('click', function handleClick() {
  console.log('green clicked');
});

const red = document.getElementById('red');

red.addEventListener('click', function handleClick() {
  console.log('red clicked');
});

const yellow = document.getElementById('yellow');

yellow.addEventListener('click', function handleClick() {
  console.log('yellow clicked');
});

const blue = document.getElementById('blue');

blue.addEventListener('click', function handleClick() {
  console.log('blue clicked');
});
/*
function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}
?
*/
