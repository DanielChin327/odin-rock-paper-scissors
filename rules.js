const choice = ["rock", "paper", "scissor"];


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
};


function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock') {
    if (computerSelection == 'rock') {
      return `It is a tie. Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'scissor') {
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'paper') {
      return `Computer Wins! Player did:: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else {
      return `Unrecognized input: (${playerSelection})`
    }
  }

  else if (playerSelection == 'paper') {
    if (computerSelection == 'paper') {
      return `It is a tie. Player did:: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'rock') {
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'scissor') {
      return `Computer Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else {
      return `Unrecognized input: (${playerSelection})`
    }
  }

  else if (playerSelection == 'scissor') {
    if (computerSelection == 'scissor') {
      return `It is a tie. Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'paper') {
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'rock') {
      return `Computer Wins! Player did: pap${playerSelection} / Computer did: ${computerSelection}`;
    }
    else {
      return `Unrecognized input: (${playerSelection})`;
    }
  }

  return `Invalid Input: ${playerSelection}`;
}


function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, Scissor - SHOOT! (Type Rock, Paper, Scissor)");
    let computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();

    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Player Wins")){
      playerScore++;
    }
    else if (result.includes("Computer Wins")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final score - Player: ${playerScore}, Computer: ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game! Final score - Player: ${playerScore}, Computer: ${computerScore}`);
  } else {
    console.log(`The game is a tie! Final score - Player: ${playerScore}, Computer: ${computerScore}`);
  }
}

playGame();
