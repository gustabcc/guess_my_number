const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const allScores = document.querySelector('.score');
const allHighScores = document.querySelector('.highscore');
const again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function checkTheNumber() {
  let userGuess = Number(guess.value);
  if (!userGuess) {
    message.textContent = '⛔️ No number!';
  } else if (userGuess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = secretNumber;
    number.style.width = '30rem';
    body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      allHighScores.textContent = highscore;
    }
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
      userGuess > secretNumber
        ? (message.textContent = '📈 Too high!')
        : (message.textContent = '📉 Too low!');
      score--;
      allScores.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      allScores.textContent = 0;
    }
  }
}

function playAgain() {
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  allScores.textContent = 20;
  guess.value = '';
  body.style.backgroundColor = '#222';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

check.addEventListener('click', checkTheNumber);

again.addEventListener('click', playAgain);
