const number = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses += 1;

  if (guess == number) {
    alert(`${number} is the answer. It took you ${guesses} guesses`);
  } else if (guess > number) {
    alert("Try lower");
  } else if (guess < number) {
    alert("Try higher");
  }
};
