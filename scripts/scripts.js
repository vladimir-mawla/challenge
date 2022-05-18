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
    let x = Math.floor(Math.random() * 4) +1
    console.log(x)
    if(x) {
      green_audio.play();
    }
    array.push(x)

});