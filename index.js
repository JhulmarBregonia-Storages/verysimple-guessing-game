let correctAnswer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById("submitBtn").onclick = function () {
  let guessValue = document.getElementById("myGuess").value;
  guesses += 1;

  if (guessValue == correctAnswer) {
    alert(`${correctAnswer} is correct! It took you ${guesses} guess(es)`);
    correctAnswer = Math.floor(Math.random() * 10) + 1;
    guesses = 0;
  } else if (guessValue < correctAnswer && guessValue > 0) {
    alert(`Higher! ${guesses} guess(es)`);
  } else if (guessValue > correctAnswer && guessValue < 11) {
    alert(`Lower! ${guesses} guess(es)`);
  } else {
    guesses -= 1
    alert(`Please pick a number between 1 - 10`);
  }
};
