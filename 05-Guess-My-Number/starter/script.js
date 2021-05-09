'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Hello shope';

// document.querySelector('.guess').value = 22;

var randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);

  if (guessValue > randomNumber && guessValue != 0) {
    score--;
    document.querySelector('.message').textContent = 'To higher';
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  } else if (guessValue < randomNumber && guessValue != 0) {
    score--;
    document.querySelector('.message').textContent = 'To low';
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  } else if (guessValue === randomNumber && guessValue != 0) {
    document.querySelector('.number').style.width = '35rem';
    document.querySelector('.number').textContent = randomNumber;

    document.body.style.backgroundColor = '#60b347';
    if (hightScore < score) {
      hightScore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${hightScore}`;
    }
  }
  if (!guessValue) {
    document.querySelector('.message').textContent = '💥 This is not a number ';
  }
  if (score <= 0) {
    document.querySelector('.label-score').textContent = `💥 you lost the game`;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.guess').value = 0;
  document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = randomNumber;
  document.querySelector('.number').textContent = '?';
});
