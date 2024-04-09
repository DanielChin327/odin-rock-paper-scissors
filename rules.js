const choice = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock')

rockButton.addEventListener("click", function(){
  playGame('rock');
});

const paperButton = document.querySelector('.paper')

paperButton.addEventListener("click", function(){
  playGame('paper');
});

const scissorButton = document.querySelector('.scissor')

scissorButton.addEventListener("click", function(){
  playGame('scissor');
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
};
function updateScoreDisplay() {
  const scoreDisplay = document.querySelector('.score');
  scoreDisplay.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock') {
    if (computerSelection == 'rock') {
      updateScoreDisplay()
      return `It is a tie. Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'scissor') {
      playerScore++;
      updateScoreDisplay()
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'paper') {
      computerScore++;
      updateScoreDisplay()
      return `Computer Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
  }

  else if (playerSelection == 'paper') {
    if (computerSelection == 'paper') {
      return `It is a tie. Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'rock') {
      playerScore++;
      updateScoreDisplay()
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'scissor') {
      computerScore++;
      updateScoreDisplay()
      return `Computer Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
  }

  else if (playerSelection == 'scissor') {
    if (computerSelection == 'scissor') {
      return `It is a tie. Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'paper') {
      playerScore++;
      updateScoreDisplay()
      return `Player Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
    else if (computerSelection == 'rock') {
      computerScore++;
      updateScoreDisplay()
      return `Computer Wins! Player did: ${playerSelection} / Computer did: ${computerSelection}`;
    }
  }
  return `Invalid Input: ${playerSelection}`;
}


function checkFinalResult() {
  if (playerScore >= 5 || computerScore >= 5) {
      let finalResult = "";
      if (playerScore > computerScore) {
          finalResult = `You win the game! Final score - Player: ${playerScore}, Computer: ${computerScore}`;
      } else if (computerScore > playerScore) {
          finalResult = `You lose the game! Final score - Player: ${playerScore}, Computer: ${computerScore}`;
      } else {
          finalResult = `The game is a tie! Final score - Player: ${playerScore}, Computer: ${computerScore}`;
      }
      const finalMessage = document.querySelector(".final");
      finalMessage.textContent = finalResult;

      playerScore = 0;
      computerScore = 0;
  }
}

function playGame(clickedButton) {
    let playerSelection = clickedButton;
    let computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();

    let gameResult = playRound(playerSelection, computerSelection);

    const resultMessage = document.querySelector(".result");
    resultMessage.classList.add("message");
    resultMessage.textContent = gameResult;
    checkFinalResult();
}
