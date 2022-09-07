//VARIABLER
//Hämtade från html
const calc = document.getElementById("calc");
const number = document.getElementById("number");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const select = document.getElementById("select");
const selectForm = document.getElementById("select-form");
const calcMethodSelect = document.getElementById("calcMethod");
const startBtn = document.getElementById("start");
const method = document.getElementById("method")

//variabler till funktioner
let x;
let y;
let randomAdd;
let time = 30;
let score = 0;
let calcMethod = "";
let timeInterval;
let insertedNumber;

//Hämtar värde till val av räknesätt
calcMethodSelect.value = "calcMethod" 

//startar funktion för att kunna ändra räknesätt
methodChange()

//Startar utmaningen genom funktionen startTime vid klick på startknapp
startBtn.addEventListener("click", function() {startTime()});

//Välja räknesätt
selectForm.addEventListener("change", (event) => {calcMethod = event.target.value; methodChange();})


//vid input sparas svaret till variabeln insertedNumber
number.addEventListener("input", (event) => {
  (insertedNumber) = event.target.value;
  //om något av följande
  if (
    ((calcMethod === "addition") && ((parseFloat(insertedNumber)) === (x + y))) 
    || 
    ((calcMethod === "subtraction") && ((parseFloat(insertedNumber)) === (x - y))) 
    || 
    ((calcMethod === "multiplication") && ((parseFloat(insertedNumber)) === (x * y))) 
    || 
    ((calcMethod === "division") && ((parseFloat(insertedNumber)) === ((x*y) / y)))
  ) {
    //Nytt tal
    addCalcToDOM();
    //Uppdatera poäng
    updateScore();
    //töm input
    event.target.value = "";
    number.focus();    
  }
}
)


//FUNKTIONER
//funktion startTime 
function startTime() {
  //startknapp blir disabled
  startBtn.disabled = true
  //lägg till tal
  addCalcToDOM()
  //fokus på input
  number.focus();
  //bestämmer nedräkning
  timeInterval = setInterval(countdown, 1000)
  //startar funktion för nedräkning
  countdown()
}

//Funktion countdown
function countdown(){
  //Räknar ner med -1
  time--
  //Visar nedräkningen 
  timeEl.innerHTML = time + "s";
  //när tiden blir noll - stoppa tiden och kör funktion gaveOver
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function addSubraction() {
  do {
  addNumber()
  }
  while (y >= x)
  return randomAdd = (`${x} - ${y}`);
}

function addDivision() {
  do {
    addNumber()
    }
    while (x === 0)
    return randomAdd = (`${x*y} / ${y}`);
}

function addNumber() {
  x = Math.floor(Math.random() * 11);
  y = Math.floor(Math.random() * 11);
}

//Funktion lägg till tal
function addRandomNumber(){
  //genererar random siffror
  
  //vid addition returnera plus-tal
    if (calcMethod === "addition") {
      addNumber()
      return randomAdd = (`${x} + ${y}`)
    }
    //vid subtraktion (och x högre siffra än y returnera minus-tal - borttaget)
    else if ((calcMethod === "subtraction")) {
      addSubraction()
    }
    //vid multiplikation returnera gånger-tal
    else if (calcMethod === "multiplication") {
      addNumber()
      return randomAdd = (`${x} x ${y}`)
    } 
    //vid delat returnera gångertal
    else if (calcMethod ==="division"){
      addDivision()
    }
    else {
      console.log("fel");
      return randomAdd = ("Nu blev något fel, ladda om sidan.")
    }
}



//funktion för att rätt text ska visas när användare gör val
function methodChange() {
  if (calcMethod === "addition") {
    method.innerHTML = "Addition"
    startBtn.disabled = false
  }
  else if (calcMethod === "subtraction") {
    method.innerHTML = "Subtraktion"
    startBtn.disabled = false
  }
  else if (calcMethod === "multiplication") {
    method.innerHTML = "Multiplikation"
    startBtn.disabled = false
  } 
  else if (calcMethod === "division"){
    method.innerHTML = "Division"
    startBtn.disabled = false
  }
  else {
    method.innerHTML = "Välj räknesätt"
    startBtn.disabled = true
  }
}

//funktion som lägger till talet
function addCalcToDOM() {
  addRandomNumber()
  calc.innerHTML = randomAdd;
}

//funktion som uppdaterar poäng
function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}

//funktion som visar end-game-container
function gameOver() {
  endgameEl.innerHTML = `<h1>Tiden är slut!</h1><p>Du fick ${score} poäng</p><button onClick="location.reload()">Försök igen</button>`
  endgameEl.style.display = "flex";
}