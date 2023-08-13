/*function getComputerChoice randomly returns rock, paper, scissors
init vars as strings with 'rock', 'paper', 'scissors'
use Math random with 3 choices
if 0 return rock etc...
 */

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

