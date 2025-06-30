const wordList = ["javascript", "angular", "hangman", "frontend", "backend"];
let selectedWord = "";
let guessed = [];
let wrongLetters = [];

const parts = [
  document.getElementById("head"),
  document.getElementById("body"),
  document.getElementById("left-arm"),
  document.getElementById("right-arm"),
  document.getElementById("left-leg")
];

const wordContainer = document.getElementById("word");
const lettersContainer = document.getElementById("letters");
const message = document.getElementById("message");
const wrong = document.getElementById("wrong");
const resetButton = document.getElementById("reset");
function setup() {
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  guessed = [];
  wrongLetters = [];
  message.textContent = "";
  wrong.textContent = "";
  displayWord();
  createKeyboard();
  parts.forEach(p => p.classList.remove("show"));
}

function displayWord() {
  wordContainer.innerHTML = selectedWord
    .split("")
    .map(letter => (guessed.includes(letter) ? letter : "_"))
    .join(" ");
  if (!wordContainer.textContent.includes("_")) {
    message.textContent = "🎉 You win!";
    disableAllButtons();
  }
}

function createKeyboard() {
  lettersContainer.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
    const btn = document.createElement("button");
    btn.textContent = String.fromCharCode(i);
    btn.classList.add("letter-button"); // optional for styling
    btn.addEventListener("click", () => handleGuess(btn));
    lettersContainer.appendChild(btn);
  }
}


function handleGuess(btn) {
  const letter = btn.textContent.toLowerCase();
  btn.disabled = true;

  if (selectedWord.includes(letter)) {
    btn.classList.add("correct");
    guessed.push(letter);
    displayWord();
  } else {
    btn.classList.add("wrong");
    wrongLetters.push(letter);
    wrong.textContent = wrongLetters.join(", ");
    showNextPart();
  }

  // End game checks
  if (!wordContainer.textContent.includes("_")) {
    message.textContent = "🎉 You win!";
    disableAllButtons();
  }

  if (wrongLetters.length === parts.length) {
    message.textContent = `💀 Game over! The word was "${selectedWord}"`;
    disableAllButtons();
  }
}

function showNextPart() {
  const part = parts[wrongLetters.length - 1];
  if (part) part.classList.add("show");
}

function disableAllButtons() {
  document.querySelectorAll(".letters button").forEach(btn => btn.disabled = true);
}

resetButton.addEventListener("click", setup);

setup();
