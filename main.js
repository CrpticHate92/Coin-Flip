// COIN FLIP SIMULATOR

// Coin HTML Variables
let outputcoinEl = document.getElementById("output-coin");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Coin Count Variables
let numHeads = 0;
let numTails = 0;

// Coin Event Listeners
document.getElementById("btn").addEventListener("click", coinFlip);

// Coin Function
function coinFlip() {
  let randnum = Math.random();
  console.log(randnum);

  // Simulate the Coin Flip
  if (randnum < 0.5) {
    outputcoinEl.innerHTML = "<img src='img/heads.png'/>";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputcoinEl.innerHTML = "<img src='img/tails.png'/>";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

// DICE ROLL SIMULATOR

// Dice HTML Variables
let outputdiceEl = document.getElementById("output-dice");
let dice1El = document.getElementById("dice-1");
let dice2El = document.getElementById("dice-2");
let dice3El = document.getElementById("dice-3");
let dice4El = document.getElementById("dice-4");
let dice5El = document.getElementById("dice-5");
let dice6El = document.getElementById("dice-6");

// Dice Count Variables
let numDice1 = 0;
let numDice2 = 0;
let numDice3 = 0;
let numDice4 = 0;
let numDice5 = 0;
let numDice6 = 0;

// Dice Event Listener
document.getElementById("dice-btn").addEventListener("click", diceRoll);

// Dice Function
function diceRoll() {
  let randnum1 = Math.random();
  console.log(randnum1);

  // Simulate The Dice Roll
  if (randnum1 < 0.16666666666) {
    outputdiceEl.innerHTML = "<img src='img/1.png'/>";
    numDice1++;
    dice1El.innerHTML = numDice1;
  } else if (randnum1 < 0.33333333332) {
    outputdiceEl.innerHTML = "<img src='img/2.png'/>";
    numDice2++;
    dice2El.innerHTML = numDice2;
  } else if (randnum1 < 0.49999999998) {
    outputdiceEl.innerHTML = "<img src='img/3.png'/>";
    numDice3++;
    dice3El.innerHTML = numDice3;
  } else if (randnum1 < 0.66666666664) {
    outputdiceEl.innerHTML = "<img src='img/4.png'/>";
    numDice4++;
    dice4El.innerHTML = numDice4;
  } else if (randnum1 < 0.83333333333) {
    outputdiceEl.innerHTML = "<img src='img/5.png'/>";
    numDice5++;
    dice5El.innerHTML = numDice5;
  } else {
    outputdiceEl.innerHTML = "<img src='img/6.png'/>";
    numDice6++;
    dice6El.innerHTML = numDice6;
  }
}
