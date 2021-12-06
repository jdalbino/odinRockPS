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
      //checkResult();
      return "Tie";
    } else if (computerSelection == "paper") {
      ComputerScore = ComputerScore + 1;
      computer.innerHTML = ComputerScore;
      //checkResult();
      return "You Loose Paper beats Rock";
    } else {
      PlayerScore = PlayerScore + 1;
      player.innerHTML = PlayerScore;
      //checkResult();
      return "You Win Rock Beats Scissors";
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "rock") {
      PlayerScore = PlayerScore + 1;
      player.innerHTML = PlayerScore;
      //checkResult();
      return "You Win Paper beats Rock";
    } else if (computerSelection == "paper") {
      //checkResult();
      return "Tie";
    } else {
      ComputerScore = ComputerScore + 1;
      computer.innerHTML = ComputerScore;
      //checkResult();
      return "You Loose Scissors Beats Paper";
    }
  } else {
    if (computerSelection == "rock") {
      ComputerScore = ComputerScore + 1;
      computer.innerHTML = ComputerScore;
      //checkResult();
      return "You Loose Rock Beats Scissors";
    } else if (computerSelection == "paper") {
      PlayerScore = PlayerScore + 1;
      player.innerHTML = PlayerScore;
      //checkResult();
      return "You Win Scissors Beats Paper";
    } else {
      //checkResult();
      return "Tie";
    }
  }
}

//const playerSelection = prompt("enter Rock,Paper, Scissors",);
//const computerSelection = computerPlay();
//const result = playRound(playerSelection, computerSelection)
//document.write("Player: " + playerSelection.toLowerCase() + ", Computer: " + computerSelection + ", Result: " + result)

// for (i=1;i<=5;i++) {
//     let playerSelection = prompt("Round " + i + ": Enter Rock,Paper or Scissors",);
//     let computerSelection = computerPlay();
//     let result = playRound(playerSelection,computerSelection);
//     alert("Player: " + playerSelection.toLowerCase() + ", Computer: " + computerSelection + ", Result: " + result)
// }
// document.write("Score: " + "Player: " + PlayerScore + " Computer: " + ComputerScore)

// let currentPlayerSelectionRock = document.querySelector('.player_rock');
// let currentPlayerSelectionPaper = document.querySelector('.player_paper');
// let currentPlayerSelectionScissor = document.querySelector('.player_scissor');
let computerSelection = computerPlay();

let divselection = document.querySelector(".result_display");

const rockSelected = document.querySelector(".player_rock");
rockSelected.addEventListener("click", function () {
  divselection.innerHTML = playRound("rock", computerPlay());
  checkResult();
});

const paperSelected = document.querySelector(".player_paper");
paperSelected.addEventListener("click", function () {
  divselection.innerHTML = playRound("paper", computerPlay());
  checkResult();
});
const scissorSelected = document.querySelector(".player_scissor");
scissorSelected.addEventListener("click", function () {
  divselection.innerHTML = playRound("scissor", computerPlay());
  checkResult();
});

const player = document.querySelector(".player_score");
// player.innerHTML= PlayerScore;

const computer = document.querySelector(".computer_score");
// // computer.innerHTML= ComputerScore;

const restartGame = document.querySelector(".restartGame")
restartGame.addEventListener('click', function(){
restart();
})

let checkResult = function () {
  if ((PlayerScore == 5) | (ComputerScore == 5)) {
    if (PlayerScore < ComputerScore) {
      restart();
      alertLose();
    } else {
      restart();
      alertWin();
    }
  } else;
};

let alertWin = function() {
  setTimeout("",5000);
  alert("You Win");
}
let alertLose = function() {
  setTimeout("",5000);
  alert("You loose");
}

let restart = function () {
  //setTimeout('', 500);
  divselection.innerHTML = "";
  player.innerHTML = "";
  computer.innerHTML = "";
  PlayerScore = 0;
  ComputerScore = 0;
};
