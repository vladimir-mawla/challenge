function highlight(obj){
  var orig = obj.style.backgroundColor;
  obj.style.backgroundColor = 'white';
  setTimeout(function(){
       obj.style.backgroundColor = orig;
  }, 300);
}

document.body.addEventListener('keydown', function (e) {
  console.log('Hi Vlad!');

    window.addEventListener('keydown', (event) => {
      if(event) {
        event.preventDefault();
        document.getElementById("text").innerHTML = "LEVEL 1"
      }
    });

    /*Audio*/

    var green_audio = new Audio("./sounds/green.mp3");
    var red_audio = new Audio("./sounds/red.mp3");
    var yellow_audio = new Audio("./sounds/yellow.mp3");
    var blue_audio = new Audio("./sounds/blue.mp3");
    var wrong_audio = new Audio("./sounds/wrong.mp3")

    const green = document.getElementById('green');

    green.addEventListener('click', function handleClick() {
      console.log('green clicked');
      green_audio.play();

    });

    const red = document.getElementById('red');

    red.addEventListener('click', function handleClick() {
      console.log('red clicked');
      red_audio.play();
    });

    const yellow = document.getElementById('yellow');

    yellow.addEventListener('click', function handleClick() {
      console.log('yellow clicked');
      yellow_audio.play();
    });

    const blue = document.getElementById('blue');

    blue.addEventListener('click', function handleClick() {
      console.log('blue clicked');
      blue_audio.play();
    });
    
    

    let array =[]
    let clicked_array = []
    let x = Math.floor(Math.random() * 4) +1
    console.log(x)
    if(x==1) {
      green_audio.play();
      highlight(document.getElementById("green"))
    }
    else if(x==2) {
      red_audio.play();
      highlight(document.getElementById("red"))
    }
    else if(x==3) {
      yellow_audio.play();
      highlight(document.getElementById("yellow"))
    }
    else if(x==4) {
      blue_audio.play();
      highlight(document.getElementById("blue"))
    }
    array.push(x)

    const click_green = document.getElementById("green")
    click_green.addEventListener("click", () => {
      alert('hello');
    });
    if(document.getElementById("green").clicked == true)
    {
      console.log("success")
      clicked_array.push("1");
    }
    if(document.getElementById("red").clicked == true)
    {
      clicked_array.push("2");
    }
    if(document.getElementById("yellow").clicked == true)
    {
      clicked_array.push("3");
    }
    if(document.getElementById("blue").clicked == true)
    {
      clicked_array.push("4");
    }
    console.log(clicked_array)
});