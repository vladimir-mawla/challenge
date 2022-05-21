/* SOUNDS*/
var green_audio = new Audio("./sounds/green.mp3");
var red_audio = new Audio("./sounds/red.mp3");
var yellow_audio = new Audio("./sounds/yellow.mp3");
var blue_audio = new Audio("./sounds/blue.mp3");
var wrong_audio = new Audio("./sounds/wrong.mp3")

/* Initializing arrays*/
var array =[]
var clicked_array = []


/* Adding a level variable*/
var level =0;

/* Starting game on keyboard click */
var handler = function(e) {
  start()
  clicked_button()


};
document.body.addEventListener('keydown', handler)


/* Adding function to initialize the game */
function start() {
  document.body.removeEventListener('keydown', handler);
  let x = Math.floor(Math.random() * 4) +1;
  level += 1;
  document.getElementById("text").innerHTML = "LEVEL " + level;
  clicked_array=[]
  play_button(x)
}

function highlight(obj){
  var orig = obj.style.backgroundColor;
  obj.style.backgroundColor = 'white';
  setTimeout(function(){
       obj.style.backgroundColor = orig;
  }, 300);
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
  }
}

/* Adding function to record played sounds */
function clicked_button() {
  if (green.addEventListener("click", () => {
    green_audio.play();
    clicked_array.push(1);
    checker(clicked_array.length-1);
  })); else if (red.addEventListener("click", () => {
    red_audio.play();
    clicked_array.push(2);
    checker(clicked_array.length-1);
  })); else if (yellow.addEventListener("click", () => {
    yellow_audio.play();
    clicked_array.push(3);
    checker(clicked_array.length-1);
  })); else if (blue.addEventListener("click", () => {
    blue_audio.play();
    clicked_array.push(4);
    checker(clicked_array.length-1);
  }));
}

/* Adding function to check if clicked_array is true */
function checker(x) {
  if (array[x] == clicked_array[x]){
    if (array.length == clicked_array.length){
      setTimeout(function() {
        start();
      }, 1000);
  }
  } else {
    game_over();
  }
}

/* Adding a function to end game*/
function game_over() {
  wrong_audio.play();
  level = 0;
  document.getElementById("text").innerHTML = "Game Over, Press Any Key To Restart";
  array = [];
  clicked_array =[];
  
  document.body.addEventListener('keydown', start);
}