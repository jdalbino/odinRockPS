//crear una funcion que genera un valor random base.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//crear una funcion que genera 3 valores random base y en base a eso devuelve rock, paper o scissors.
function computerPlay() {
  let randomValue = getRandomInt(3);
  if (randomValue == 0) {
    return "rock";
  } else if (randomValue == 1) {
    return "paper";
  } else return "scissors";
}
let PlayerScore = 0;
let ComputerScore = 0;
//Function that creates 1 round of game and return result based on selection and computer selection.
function playRound(playerSelection, computerSelection) {
  //playerSelection = playerSelection.toLowerCase
    if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "rock") {
        return "Tie"
    } else if (computerSelection == "paper") {
        ComputerScore = ComputerScore + 1;
        return "You Loose Paper beats Rock"
    } else {
        PlayerScore = PlayerScore +1;
        return "You Win Rock Beats Scissors";
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "rock") {
        PlayerScore = PlayerScore +1;
        return "You Win Paper beats Rock"
    } else if (computerSelection == "paper") {
      return "Tie"
    } else {
        ComputerScore = ComputerScore + 1;
        return "You Loose Scissors Beats Paper"
    }
  } else {
    if (computerSelection == "rock") {
        ComputerScore = ComputerScore + 1;
        return "You Loose Rock Beats Scissors"
    } else if (computerSelection == "paper") {
        PlayerScore = PlayerScore +1;
        return "You Win Scissors Beats Paper"
    } else return "Tie"
  }
}
 
//const playerSelection = prompt("enter Rock,Paper, Scissors",);
//const computerSelection = computerPlay();
//const result = playRound(playerSelection, computerSelection)
//document.write("Player: " + playerSelection.toLowerCase() + ", Computer: " + computerSelection + ", Result: " + result)

for (i=1;i<=5;i++) {
    let playerSelection = prompt("Round " + i + ": Enter Rock,Paper or Scissors",);
    let computerSelection = computerPlay();
    let result = playRound(playerSelection,computerSelection);
    alert("Player: " + playerSelection.toLowerCase() + ", Computer: " + computerSelection + ", Result: " + result)
}
document.write("Score: " + "Player: " + PlayerScore + " Computer: " + ComputerScore)

