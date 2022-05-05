const calc = document.getElementById("calc");
const number = document.getElementById("number");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const select = document.getElementById("select");
const selectForm = document.getElementById("select-form");
const calcMethodSelect = document.getElementById("calcMethod");
const startBtn = document.getElementById("start");


let x;
let y;
let randomAdd;
let time = 30;
let score = 0;
let calcMethod = "addition";


/*calcMethodSelect.value = localStorage.getItem("calcMethod") !== null
? localStorage.getItem("calcMethod")
: "Addition";
*/
number.focus();

startBtn.addEventListener("click", function() {startTime()});

let timeInterval

function startTime() {
  startBtn.disabled = true
  addCalcToDOM()
  timeInterval = setInterval(countdown, 1000)
  countdown()
}

function countdown(){
  time--
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}



function addRandomNumber(){
  x = Math.floor(Math.random() * 11);
  y = Math.floor(Math.random() * 11);
  if (calcMethod === "addition") {
    return randomAdd = (`${x} + ${y}`);
  }
  else if (calcMethod === "subtraction") {
    return randomAdd = (`${x} - ${y}`);
  }
  else if (calcMethod === "multiplication") {
    return randomAdd = (`${x} x ${y}`);
  } 
  else {
    return randomAdd = (`${x} / ${y}`);
  }
}

function addCalcToDOM() {
  addRandomNumber()
  calc.innerHTML = randomAdd;
}


function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}

function gameOver() {
  endgameEl.innerHTML = `<h1>Tiden är slut!</h1><p>Du fick ${score} poäng</p><button onClick="location.reload()">Försök igen</button>`
  endgameEl.style.display = "flex";
}



number.addEventListener("input", (event) => {
  const insertedNumber = event.target.value;  
  console.log(insertedNumber);

  if (Number(insertedNumber) === x + y) {
    addCalcToDOM();
    updateScore();
    //clears input
    event.target.value = "";    
  }
})

/*selectForm.addEventListener("change", (event) => {
  calcMethod = event.target.value;
  localStorage.setItem("calcMethod", calcMethod);
})*/