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

// Get the audio elements
const ticSound = document.getElementById("tic-sound");
const gameOverSound = document.getElementById("game-over-sound");

// timer runner
let time = 25;
function timeRunner() {
  let x = setInterval(() => {
    if (time > 0) {
      // when time is 0, game stopped
      time--;
      document.querySelector("#timerVar").textContent = time;
      // console.log(time);
    } else {
      clearInterval(x);
      document.querySelector(
        "#game-window"
      ).innerHTML = `<h1>GAME OVER <br> Your Score is ${score}</h1>`;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    // Check if time reaches 5 and play tic sound
    if (time === 5) {
      ticSound.play(); // Play tic sound
      // console.log(`time 5 ${time}`);
    }

    // Check if time reaches 0 and play game over sound
    if (time === 0) {
      gameOverSound.play(); // Play game over sound
      console.log(`time 0 ${time}`);
      clearInterval(timerInterval); // Stop the timer
      alert("Game Over!"); // Optional alert
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
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
