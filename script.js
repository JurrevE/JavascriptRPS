function getComputerChoice()  {
    let randomChoice = Math.floor(Math.random() * 3);
    
    if (randomChoice === 0) {
        return "Rock";
      } if (randomChoice === 1) {
        return "Paper";
      } if (randomChoice === 2) {
        return "Scissors";
      }
}
console.log(getComputerChoice());


