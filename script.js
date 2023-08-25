const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function buttonEventHandler(event) {
  let playerChoice = event.target.id;
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
}

function activateButtons() {
  buttons.forEach((button) => {
    button.addEventListener('click', buttonEventHandler);
    button.addEventListener('mouseenter', () => button.style.opacity = 0.5);
    button.addEventListener('mouseleave', () => button.style.opacity = 1);
  });
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  results.textContent = '';
  score.textContent =  '';
  winner.textContent = '';
  activateButtons();
} 

function createResetButton() {
  let parent = document.querySelector('#winner');
  let resetButton = document.createElement('button');
  resetButton.textContent = 'Play again?';
  resetButton.addEventListener('click', reset);
  parent.appendChild(resetButton);
}

const isWinner = (player, computer) => {
  if (
    player === 'rock' && computer === 'scissors' ||
    player === 'paper' && computer === 'rock' ||
    player === 'scissors' && computer === 'paper'
  ) {
    return true;
  }
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = 'Tie!';
  } else if (isWinner(playerSelection, computerSelection)) {
    results.textContent = `Winner! ${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
  } else {
    results.textContent = `Loser! ${computerSelection} beats ${playerSelection}`;
    computerScore += 1;
  }

  score.textContent = `YOU: ${playerScore}, COMP: ${computerScore}`;

  if (playerScore === 5) {
    winner.textContent = 'YOU WIN!!!';
  } else if (computerScore === 5) {
    winner.textContent = 'GAME OVER';
  }

  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      button.removeEventListener('click', buttonEventHandler);
    });
    createResetButton();
  }
}

let playerScore = 0;
let computerScore = 0;

let results = document.querySelector('#results');
let score =  document.querySelector('#score');
let winner = document.querySelector('#winner');
const buttons = document.querySelectorAll('img');

activateButtons();
