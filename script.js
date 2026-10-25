
// Generate a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;

// Track the number of attempts
let attempts = 0;
let gameOver = false;

// Select HTML elements
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartButton = document.getElementById("restart-btn");
const guessButton = document.getElementById("guess-btn");

// Check the user's guess
guessForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (gameOver) {
        return;
    }

    const guess = Number(guessInput.value);

    // Validate the input
    if (
        guessInput.value.trim() === "" ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        message.textContent =
            "Please enter a whole number between 1 and 100.";
        return;
    }

    // Count valid guesses
    attempts++;
    attemptsDisplay.textContent = attempts;

    // Compare the guess with the target number
    if (guess === targetNumber) {
        message.textContent =
            `🎉 Correct! You guessed the number in ${attempts} attempt(s)!`;

        message.style.color = "green";
        gameOver = true;
        guessButton.disabled = true;
        guessInput.disabled = true;
    } else if (guess < targetNumber) {
        message.textContent = "📈 Too low! Try a higher number.";
        message.style.color = "#e67e22";
    } else {
        message.textContent = "📉 Too high! Try a lower number.";
        message.style.color = "#e67e22";
    }

    guessInput.value = "";

    if (!gameOver) {
        guessInput.focus();
    }
});

// Restart the game
restartButton.addEventListener("click", function () {
    targetNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;
    gameOver = false;

    attemptsDisplay.textContent = "0";
    message.textContent = "Let's start guessing!";
    message.style.color = "#555";

    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;

    guessInput.focus();
});
```