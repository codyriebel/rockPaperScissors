/*
function getComputerChoice randomly returns rock, paper, scissors
init choice string
use Math random with 3 choices
if 0 return rock etc...


function getComputerChoice() {
  let choice = ''
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
  }
  return choice;
}

*/

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

console.log(getComputerChoice());

/* 
function playRound(playerSelection, computerSelection)
return string that declares winner
case insensitive playerSelection

def win
if tie, elif win, else lost
*/

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
  const playerSelectionLower = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 'Tie!'
  } else if (isWinner(playerSelection, computerSelection)) {
    return `Winner! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Loser! ${computerSelection} beats ${playerSelection}`;
  }
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));