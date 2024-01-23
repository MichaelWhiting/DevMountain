import './style.css';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js';
import setSharkImage from './src/sharkImage.js';
import getRandomWord from './src/randomWord.js';
import setupGuesses from './src/guess.js';

const generateDefaultHTML = () => {
  document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>

  <section id="reset-section"></section>

  <section id="difficulty-section"></section>
`;
}

generateDefaultHTML();

const initSharkwords = (difficulty) => {
  let numWrong = 0;
  const word = getRandomWord(difficulty);

  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector("#word-container"), word);

  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.disabled = true;

    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(document.querySelector("#shark-img"), numWrong);
    }

    const gameStatus = document.querySelector("#game-status");
    const buttons = document.querySelectorAll(".letterButton");

    // checks if there has been five guesses
    if (numWrong === 5) {
      gameStatus.innerHTML = "You lose!";
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }

    // checks if the user has completed the word
    const isWordComplete = Array.from(document.querySelectorAll(".letter-box")).every((element) => element.innerText !== '');
    if (isWordComplete) {
      gameStatus.innerHTML = "You win!"
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  }

  setupGuesses(document.querySelector("#letter-buttons"), handleGuess)
};

// const makeResetBtn = () => {
//   let resetSection = document.querySelector("#reset-section");
//   let resetButton = document.createElement("button");
//   resetButton.id = "resetButton"
//   resetButton.innerText = "Reset";
//   resetButton.addEventListener("click", resetGame)
  
//   resetSection.append(resetButton);
// }

const makeDifficultBtns = () => {
  let difficultySection = document.querySelector("#difficulty-section")
  let easyBtn = document.createElement("button");
  let mediumBtn = document.createElement("button");
  let hardBtn = document.createElement("button");
  easyBtn.className = "difButton";
  mediumBtn.className = "difButton";
  hardBtn.className = "difButton";

  easyBtn.innerText = "Easy";
  mediumBtn.innerText = "Medium";
  hardBtn.innerText = "Hard";

  easyBtn.addEventListener("click", () => resetGame("easy"));
  mediumBtn.addEventListener("click", () => resetGame("medium"));
  hardBtn.addEventListener("click", () => resetGame("hard"));

  difficultySection.append(easyBtn, mediumBtn, hardBtn);
}


const resetGame = (difficulty) => {
  generateDefaultHTML();
  makeDifficultBtns();
  initSharkwords(difficulty);
  // makeResetBtn();
};

// This is the inital start up code.
let difficulty = "medium"
initSharkwords(difficulty);
makeDifficultBtns();
// makeResetBtn()
