/**
 * Guessing Game
 * Author: Md Ahsanul Hoque
 * Date: January 2, 2019
 */
let pickedNumber;
let theGuessNumber;

//numGuesser function expression
let numGuesser = function() {
  startGame();
  checkGuess(theGuessNumber);
};

//This method/function builds the initial skeleton of the guessing game
function startGame() {
  pickedNumber = Math.floor(1 + Math.random() * Math.floor(30));

  theGuessNumber = Number(prompt("Enter number: "));
  while (isNaN(theGuessNumber)) {
    alert("Invalid");
    theGuessNumber = Number(prompt("Guess again: "));
  }
}

//Check user input number with the number compute picked
function checkGuess(input) {
  if (input === pickedNumber) {
    if (confirm("Guess is correct, You won... Would you like to play again?")) {
      startGame();
      //recursive call
      checkGuess(theGuessNumber);
    } else {
      alert("Thanks For Playing");
    }
  } 
  else if (pickedNumber <= 3) {
    alert("Game is over");
  } 
  else if (input < pickedNumber) {
    prompt("Your guess is too low");
  } 
  else if (input > pickedNumber) {
    prompt("Your guess is too high");
  } else {
    alert("Incorrect");
  }
}

//calling numGuesser() method
numGuesser();
