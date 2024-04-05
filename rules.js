const choice = ["rock", "paper", "scissor"];


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
};

const computerSelection = getComputerChoice();

let playerSelection = prompt("Rock, Paper, Scissor - SHOOT! (Type Rock, Paper, Scissor)");
playerSelection = playerSelection.toLowerCase();


function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      return `It is a tie. Player did: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else if (computerSelection == 'scissor') {
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else if (computerSelection == 'paper') {
      return `Computer Wins! Player did:: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else {
      return `Unrecognized input: (${playerSelection})`
    }
  }

  else if (playerSelection == 'paper') {
    if (computerSelection == 'paper') {
      return `It is a tie. Player did:: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else if (computerSelection == 'rock') {
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else if (computerSelection == 'scissor') {
      return `Computer Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else {
      return `Unrecognized input: (${playerSelection})`
    }
  }

  else if (playerSelection == 'scissor') {
    if (computerSelection == 'scissor') {
      return `It is a tie. Player did: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else if (computerSelection == 'paper') {
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`
    }
    else if (computerSelection == 'rock') {
      return `Computer Wins! Player did: pap${playerSelection} / Computer did: ${computerSelection}`
    }
    else {
      return `Unrecognized input: (${playerSelection})`
    }
  }
}


function playGame()
