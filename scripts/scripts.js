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

document.body.addEventListener('keydown', function (e) {
  console.log('Hi Vlad!');

    });
  


function start() {
  let x = Math.floor(Math.random() * 4) +1;
  array.push(x);
  document.getElementById("text").innerHTML = "LEVEL 1"
}

function play_button(x) {
  if(x==1) {
    green_audio.play();
    highlight(document.getElementById("green"))
    array.push(x)
  }
  else if(x==2) {
    red_audio.play();
    highlight(document.getElementById("red"))
    array.push(x)
  }
  else if(x==3) {
    yellow_audio.play();
    highlight(document.getElementById("yellow"))
    array.push(x)
  }
  else if(x==4) {
    blue_audio.play();
    highlight(document.getElementById("blue"))
    array.push(x)
  }
}

function clicked_button() {
  if (green.addEventListener("click", () => {
    clicked_array.push("1");
    console.log(clicked_array)
  })); else if (red.addEventListener("click", () => {
    clicked_array.push("2");
    console.log(clicked_array)
  })); else if (yellow.addEventListener("click", () => {
    clicked_array.push("3");
    console.log(clicked_array)
  })); else if (blue.addEventListener("click", () => {
    clicked_array.push("4");
    console.log(clicked_array)
  }));
}