let programmingLanguages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
];

let answer = ""; //blank
let maxwrong = 6;
let mistakes = 0;
let guessed = []; //blank array
let wordStatus = null;

// create a function called random word which it pickup a word in programmingLanguages

function randomWord() {
  answer =
    programmingLanguages[
      Math.floor(Math.random() * programmingLanguages.length)
    ];
  //   alert(answer);
}

//  generate the button

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` +
        letter +
        `'
          onClick="handleGuess('` +
        letter +
        `')"
        >
          ` +
        letter +
        `
        </button>
      `
    )
    .join("");
  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

document.getElementById("maxwrong").innerHTML = maxwrong;

// create a function guessword()
function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  document.getElementById("worSpotlight").innerHTML = wordStatus;
}

//  create a function  handleGuess

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);
  //   alert(answer);
  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLoss();
    updateHangamnPicture();
  }
}

// create fucntion updateHangamnPicture

function updateHangamnPicture() {
  document.getElementById("hangmanPic").src = "images/" + mistakes[0] + "0.jpg";
  document.getElementById("hangmanPic").src = "images/" + mistakes[1] + "1.jpg";
  document.getElementById("hangmanPic").src = "images/" + mistakes[2] + "2.jpg";
  document.getElementById("hangmanPic").src = "images/" + mistakes[3] + "3.jpg";
  document.getElementById("hangmanPic").src = "images/" + mistakes[4] + "4.jpg";
  document.getElementById("hangmanPic").src = "images/" + mistakes[5] + "5.jpg";
  document.getElementById("hangmanPic").src = "images/" + mistakes[6] + "6.jpg";
}

// create function checkIfGameWon

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You won!!!";
  }
}

// create function checkIfGameLoss
function checkIfGameLoss() {
  if (mistakes === maxwrong) {
    document.getElementById("worSpotlight").innerHTML =
      "The Answer was " + answer;
    document.getElementById("keyboard").innerHTML = "You Loss !!!";
  }
}

//  create function updateMistakes

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

//  create reset button

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "images/0.jpg";
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}
randomWord();
generateButtons();
guessedWord();
