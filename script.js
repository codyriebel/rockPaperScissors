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
  if (playerSelectionLower === computerSelection) {
    return 'Tie!'
  } else if (isWinner(playerSelectionLower, computerSelection)) {
    return `Winner! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Loser! ${computerSelection} beats ${playerSelection}`;
  }
}
 
function game() {
  let wins = 0;
  let losses = 0;
  for (i=0; i<5; i++) {
    let userInput = prompt('Rock, paper, or scissors?');
    let round = playRound(userInput, getComputerChoice());
    console.log(`round ${i}: ${round}`)
    if (round.includes('Winner')) {
      wins += 1;
    } else if (round.includes('Loser')) {
      losses += 1;
    }
  }
  console.log(`FINAL SCORE: player ${wins}, computer ${losses}`)
  if (wins === losses) {
    console.log('TIED');
  } else if (wins > losses) {
    console.log('WIN!!!');
  } else {
    console.log('LOST...');
  }
}

game();