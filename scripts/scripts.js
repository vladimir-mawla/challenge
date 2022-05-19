function highlight(obj){
  var orig = obj.style.backgroundColor;
  obj.style.backgroundColor = 'white';
  setTimeout(function(){
       obj.style.backgroundColor = orig;
  }, 300);
}

/* SOUNDS*/
var green_audio = new Audio("./sounds/green.mp3");
var red_audio = new Audio("./sounds/red.mp3");
var yellow_audio = new Audio("./sounds/yellow.mp3");
var blue_audio = new Audio("./sounds/blue.mp3");
var wrong_audio = new Audio("./sounds/wrong.mp3")

/* Initializing arrays*/
let array =[]
let clicked_array = []

/* Adding a level variable*/
var level =0;

/* Starting game on keyboard click */
document.body.addEventListener('keydown', function (e) {
  start()
  clicked_button()

});
  

/* Adding function to initialize the game */
function start() {
  let x = Math.floor(Math.random() * 4) +1;
  level += 1;
  document.getElementById("text").innerHTML = "LEVEL " + level;
  play_button(x)
}

/* Adding function to play random sounds */
function play_button(x) {
  if(x==1) {
    green_audio.play();
    highlight(document.getElementById("green"))
    array.push(x)
  } else if(x==2) {
    red_audio.play();
    highlight(document.getElementById("red"))
    array.push(x)
  } else if(x==3) {
    yellow_audio.play();
    highlight(document.getElementById("yellow"))
    array.push(x)
  } else if(x==4) {
    blue_audio.play();
    highlight(document.getElementById("blue"))
    array.push(x)
  }}

/* Adding function to record played sounds */
function clicked_button() {
  if (green.addEventListener("click", () => {
    green_audio.play();
    clicked_array.push("1");
    checker(array.length-1);
  })); else if (red.addEventListener("click", () => {
    red_audio.play();
    clicked_array.push("2");
    checker(array.length-1);
  })); else if (yellow.addEventListener("click", () => {
    yellow_audio.play();
    clicked_array.push("3");
    checker(array.length-1);
  })); else if (blue.addEventListener("click", () => {
    blue_audio.play();
    clicked_array.push("4");
    checker(array.length-1);
  }));
}

/* Adding function to check if clicked_array is true */
function checker(x) {
  if ((array.length == clicked_array.length) && (array[x] == clicked_array[x])){
    setTimeout(function() {
      start();
    }, 1000);
  } else {
    game_over();
  }
}

/* Adding a function to end game*/
function game_over() {
  wrong_audio.play();
  level = 0;
  document.getElementById("text").innerHTML = "Game Over";
  clicked_array = [];
}