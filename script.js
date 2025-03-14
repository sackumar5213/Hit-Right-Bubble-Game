// alert("hh");

// Create Bubbles
function bubbleMaker() {
  let bubble = "";
  for (let x = 1; x <= 84; x++) {
    let bubbleNum = Math.floor(Math.random() * 10);
    bubble = bubble + `<div class="bubble">${bubbleNum}</div>`;
  }

  document.querySelector("#game-window").innerHTML = bubble;
}

// Hit that Bubble Number
let hitNumber = 0;
function hit() {
  hitNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitVar").textContent = hitNumber;
}

// Score Increase whenever Called
let score = 0;
function GetScore() {
  score = score + 1;
  document.querySelector("#scoreVar").textContent = score;
}

// timer runner
let time = 20;
function timeRunner() {
  let x = setInterval(() => {
    if (time > 0) {
      // when time is 0, game stopped
      time--;
      document.querySelector("#timerVar").textContent = time;
      console.log(time);
    } else {
      clearInterval(x);
      document.querySelector(
        "#game-window"
      ).innerHTML = `<h1>GAME OVER <br> Your Score is ${score}</h1>`;
    }
  }, 1000);
}

function GameStart() {
  timeRunner(); // Start the Timer
  bubbleMaker();
  hit(); // change hit value after clicked

  document
    .querySelector("#game-window")
    .addEventListener("click", function (dets) {
      if (hitNumber === Number(dets.target.textContent)) {
        GetScore(); // when Correct Bubble clicked
        hit(); // change hit value after clicked
        bubbleMaker();
      }
    });
}

// Game Started
GameStart();
