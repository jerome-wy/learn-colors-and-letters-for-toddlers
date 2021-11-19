// ------ VARIABLES
let startBtn = document.getElementById('startGameBtn');
let instBtn = document.getElementById('instructionGameBtn');
let changeModeBtn = document.getElementById('changeModeBtn');
let changeDiffBtn = document.getElementById('difficultyBtn');
let squares = document.querySelectorAll('.colorSquare');
let textGenerator = document.getElementById('textGeneratorId');
let textGeneratorColor = document.getElementById('textGeneratorId').style.color;
let questionGenerator1 = document.getElementById('questionGenerator1');
let questionGenerator2 = document.getElementById('questionGenerator2');
let gameAlive = true;
let next = true;
let score = 0;
let userInput;
// -----------------------------------------
let gameDifficulty = ['Easy', 'Medium', 'Advanced'];
let gameMode = ['Letters', 'Numbers', 'Fun'];
let squareColor = [
  'rgb(123, 72, 201)', //Purple
  'rgb(14, 156, 44)', //Green
  'rgb(250, 129, 22)', //Orange
  'rgb(13, 13, 223)', //Blue
  'rgb(255, 246, 1)', //Yellow
  'rgb(254, 0, 0)' //Red
];

// ------- ARRAY VARIABLES - EASY MODE
let lettersEasy = [
  'Aa',
  'Bb',
  'Cc',
  'Dd',
  'Ee',
  'Ff',
  'Gg',
  'Hh',
  'Ii',
  'Jj',
  'Kk',
  'Ll',
  'Mm',
  'Nn',
  'Oo',
  'Pp',
  'Qq',
  'Rr',
  'Ss',
  'Tt',
  'Uu',
  'Vv',
  'Ww',
  'Xx',
  'Yy',
  'Zz'
];

let numbersEasy = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50
];
// -----------------------------------------

// ------ VARIABLES FOR RANDOM INDEX ------

//-- EASY MODE --
let squareRandomIndex = [Math.floor(Math.random() * squareColor.length)];
let randomSquare = squareColor[squareRandomIndex];

let letterRandomIndexEasy = [Math.floor(Math.random() * lettersEasy.length)];
let randomLetterEasy = lettersEasy[letterRandomIndexEasy];

let numberRandomIndexEasy = [Math.floor(Math.random() * numbersEasy.length)];
let randomNumberEasy = numbersEasy[numberRandomIndexEasy];

// -- MEDIUM MODE --

// -----------------------------------------

// ------ FUNCTIONS
// function changeDiff() {
//   gameDifficulty = gameDifficulty[0];
//   changeDiffBtn.addEventListener('click', function () {
//     changeDiffBtn.innerText = 'EASY';
//   });
// }

// changeDiff();

function changeDifficulty() {
  changeDiffBtn.addEventListener('click', function () {
    console.log('Change Difficulty button clicked!!');
  });
}

function startGameBtn() {
  startBtn.addEventListener('click', startGame());
}

function startGame() {
  changeMode();
  changeDifficulty();
  for (let i = 0; i < gameDifficulty.length; i++) {
    if (gameDifficulty[i] === true) {
      console.log(`Its set to ${gameDifficulty[i]}`);
    }
    for (let i = 0; i < gameMode.length; i++)
      if (gameMode[i] === true) {
        console.log(`Its set to ${gameMode[i]}`);
      }
  }
}

// randomLettersEasy(); // Calling function

// function randomNumbers() {
//   for (let num = 0; num < numbers.length; num++)
//     textGenerator.innerText = randomNumber;
//   textGenerator.style.color = randomSquare;
//   if (randomLetter === randomLetter) {
//     questionGenerator1.innerText = 'What';
//     questionGenerator2.innerText = 'is the NUMBER?';
//   }
// }
// randomNumbers();

// function compareAnswer() {
//   for (let letter = 0; i < letters.length; letter++) {
//     if (randomLetter = )
// }
// }
// randomLettersEasy();

// ------ EVENT LISTENERS
// squares[0].style.backgroundColor = squareColor[0];
// squares[1].style.backgroundColor = squareColor[1];
// squares[2].style.backgroundColor = squareColor[2];
// squares[3].style.backgroundColor = squareColor[3];
// squares[4].style.backgroundColor = squareColor[4];
// squares[5].style.backgroundColor = squareColor[5];

function randomLettersEasy() {
  textGenerator.innerText = randomLetterEasy;
  textGenerator.style.color = randomSquare;
  if (randomLetterEasy === randomLetterEasy) {
    questionGenerator1.innerText = 'What';
    questionGenerator2.innerText = 'is the LETTER?';
  }
}

for (let i = 0; i < squares.length; i++) {
  randomLettersEasy();
  squares[i].style.backgroundColor = squareColor[i];
  squares[i].addEventListener('click', function () {
    // while (squareColor[i] !== textGeneratorColor) {

    if (squareColor[i] == textGenerator.style.color) {
      randomLettersEasy();
    }
  });
}
