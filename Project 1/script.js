document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  const computerNumber = generateRandomNumbers(1, 51, 1); // Computer guesses one number
  let remainingPoints = 5; // User has 5 chances to guess
  let secondsLeft = 30;

  document.getElementById("startButton").disabled = true;
  document.getElementById("timer").style.display = "block";

  const timerElement = document.getElementById("timer");

  function updateTimer() {
    timerElement.textContent = `Time Left: ${secondsLeft} seconds`;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endGame(computerNumber);
    }

    secondsLeft--;
  }

  updateTimer();

  const timerInterval = setInterval(updateTimer, 1000);

  document.getElementById("guessButton").addEventListener("click", function () {
    const userGuess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
      setMessage("Please enter a valid number between 1 and 50.");
      return;
    }

    // Record the user's guess in the input boxes
    recordUserGuess(userGuess);

    if (userGuess === computerNumber[0]) {
      setMessage("Congratulations! You guessed the correct number.");
      endGame(computerNumber, true);
    } else {
      // Prompt the user if the guess is higher or lower
      if (userGuess < computerNumber[0]) {
        setMessage("Try again. Your guess is lower.");
      } else {
        setMessage("Try again. Your guess is higher.");
      }

      remainingPoints--;
      document.getElementById("points").textContent = remainingPoints;

      if (remainingPoints === 0) {
        endGame(computerNumber, false);
      }
    }

    // Clear the guessInput after recording the guess
    document.getElementById("guessInput").value = "";
  });

  function setMessage(message) {
    document.getElementById("computerMessage").textContent = message;
  }

  function recordUserGuess(guess) {
    // Assuming you have five input boxes with IDs: input1, input2, input3, input4, and input5
    const inputBoxes = document.querySelectorAll(".user-guess-input");

    // Find the first empty input box and set its value to the user's guess
    for (let i = 0; i < inputBoxes.length; i++) {
      if (inputBoxes[i].value === "") {
        inputBoxes[i].value = guess;
        break;
      }
    }
  }

  function endGame(computerNumber, isCorrectGuess) {
    if (isCorrectGuess) {
      setMessage(
        `Congratulations 🎉🎉🎉🎉🎉🎉!! You have guessed the correct number: ${computerNumber}.`
      );
    } else {
      setMessage(
        `Game Over 🙀! The number of the computer was: ${computerNumber}.`
      );
    }
    document.getElementById("guessButton").disabled = true;
  }

  // Function to generate an array of random numbers between min (inclusive) and max (exclusive)
  function generateRandomNumbers(min, max, count) {
    const randomNumbers = [];
    while (randomNumbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  }
}
