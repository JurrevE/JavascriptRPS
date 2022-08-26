function getComputerChoice() {
  let compChoices = ["rock", "paper", "scissors"] // let computer pick [rock, paper, scissors]
  let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 // randomize rock paper and scissors
 
  if (randomizeChoice === 1) {
    return "rock";
  } else if (randomizeChoice === 2) {
    return "paper";
  } else if (randomizeChoice === 3) {
    return "scissors";
  }
 }
 
function playSingleRound(getComputerChoice, playerSelection) {
  if (getComputerChoice === playerSelection) {
      return "its a tie!"
  }
  else if (playerSelection == "rock")
      if (getComputerChoice == "paper")
      return "youve lost";
  
  else {
      return "player wins!"
  }

  else if (playerSelection == "paper")
  if (getComputerChoice == "scissors")
  return "youve lost";

  else {
      return "player wins!"
  }

  else if (playerSelection == "scissors")
      if (getComputerChoice == "rock")
      return "youve lost";

  else {
      return "player wins!"
  }
 
 }
 
const computerChoice = getComputerChoice();
console.log("Computer's Choice: ")
console.log(computerChoice);
let userInput = "paper"
let playerSelection = userInput.toLowerCase();

function game() {
  for (let i = 0; i < 5; i++)  {
      console.log(playSingleRound(getComputerChoice() , playerSelection))
  }
}

game();
