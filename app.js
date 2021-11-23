// ------ VARIABLES-----------
let startBtn = document.getElementById('startGameBtn');
let instBtn = document.getElementById('instructionGameBtn');
let darkModeBtn = document.getElementById('darkModeBtn');
let changeModeBtn = document.getElementById('changeModeBtn');
let lettersBtn = document.getElementById('lettersBtn');
let wordsBtn = document.getElementById('wordsBtn');
let colorText = document.querySelector('.colorText');
let addWordBtn = document.getElementById('addWordBtn');
let userInputForm = document.getElementById('userInputForm');
let pushTextBtn = document.getElementById('pushTextBtn');
let nextLetterIndexBtn = document.getElementById('nextLetterIndexBtn');
let nextNumberIndexBtn = document.getElementById('nextNumberIndexBtn');
let nextWordIndexBtn = document.getElementById('nextWordIndexBtn');
let squares = document.querySelectorAll('.colorSquare');
let textGenerator = document.getElementById('textGeneratorId');
let questionGenerator1 = document.getElementById('questionGenerator1');
let questionGenerator2 = document.getElementById('questionGenerator2');
let welcomeText = document.getElementById('welcomeText');
let answer = document.getElementById('answer');
let gameAlive = true;
let next = true;
let score = 0;
let scoreDisplay = document.getElementById('scoreDisplay');

// -----------------------------------------
let squareColor = [
  'rgb(123, 72, 201)', //Purple
  'rgb(14, 156, 44)', //Green
  'rgb(250, 129, 22)', //Orange
  'rgb(13, 13, 223)', //Blue
  'rgb(255, 246, 1)', //Yellow
  'rgb(254, 0, 0)' //Red
];

// ------- ARRAY VARIABLES - EASY MODE -----------
let lettersArray = [
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

let numbersArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100
];

// ----------- ARRAY VARIABLES - ADVANCED MODE -----------
let wordsArray = [
  'Ant',
  'Bat',
  'Cat',
  'Dog',
  'Eel',
  'Fox',
  'Gum',
  'Ham',
  'Ink',
  'Jam',
  'Kid',
  'Lip',
  'Mix',
  'Nut',
  'Owl',
  'Pig',
  'Que',
  'Run',
  'Sad',
  'Toy',
  'Use',
  'Vow',
  'Wow',
  'Zoo'
];

// -----------------------------------------

// ------ VARIABLES FOR RANDOM INDEX ------

let squareRandomIndex = [Math.floor(Math.random() * squareColor.length)];
let randomSquare = squareColor[squareRandomIndex];

// LETTERS -- NUMBERS -- WORDS

let letterRandomIndex = [Math.floor(Math.random() * lettersArray.length)];
let randomLetter = lettersArray[letterRandomIndex];

let numberRandomIndex = [Math.floor(Math.random() * numbersArray.length)];
let randomNumber = numbersArray[numberRandomIndex];

let wordsRandomIndex = [Math.floor(Math.random() * wordsArray.length)];
let randomWord = wordsArray[wordsRandomIndex];

// -----------------------------------------

// ------ FUNCTIONS

// HIDE EVERYTHING AT START -----------------
function hideEverything() {
  lettersBtn.style.display = 'none';
  numbersBtn.style.display = 'none';
  wordsBtn.style.display = 'none';
  colorText.style.display = 'none';
  userInputForm.style.display = 'none';
  document.querySelector('.allColorSquares').style.display = 'none';
  pushTextBtn.style.display = 'none';
  textGenerator.style.display = 'none';
  questionGenerator1.style.display = 'none';
  questionGenerator2.style.display = 'none';
  answer.style.display = 'none;';
  scoreDisplay.style.display = 'none';
  nextLetterIndexBtn.style.display = 'none';
  nextNumberIndexBtn.style.display = 'none';
  nextWordIndexBtn.style.display = 'none';
}

function showEverything() {
  colorText.style.display = 'inline-block';
  textGenerator.style.display = 'inline-block';
  questionGenerator1.style.display = 'inline-block';
  questionGenerator2.style.display = 'inline-block';
  questionGenerator1.innerText = 'What';
  questionGenerator2.innerText = 'is it?';
  answer.style.display = 'inline-block';
}

function showWordsEverything() {
  colorText.style.display = 'inline-block';
  textGenerator.style.display = 'inline-block';
  questionGenerator1.style.display = 'inline-block';
  questionGenerator2.style.display = 'inline-block';
  questionGenerator1.innerText = 'What';
  questionGenerator2.innerText = 'is it?';
  answer.style.display = 'inline-block';
}
function hideGameButtons() {
  lettersBtn.style.display = 'none';
  numbersBtn.style.display = 'none';
  wordsBtn.style.display = 'none';
}

function hideNextButtons() {
  nextLetterIndexBtn.style.display = 'none';
  nextNumberIndexBtn.style.display = 'none';
  nextWordIndexBtn.style.display = 'none';
}
//-----------------------------------------

//---- FUNCTIONS TO SHOW GENERATED TEXT -----
function generateLetters() {
  letterRandomIndex = [Math.floor(Math.random() * lettersArray.length)];
  randomLetter = lettersArray[letterRandomIndex];
  squareRandomIndex = [Math.floor(Math.random() * squareColor.length)];
  randomSquare = squareColor[squareRandomIndex];
  textGenerator.innerText = randomLetter;
  textGenerator.style.color = randomSquare;
  showEverything();
}

function generateNumbers() {
  numberRandomIndex = [Math.floor(Math.random() * numbersArray.length)];
  randomNumber = numbersArray[numberRandomIndex];
  squareRandomIndex = [Math.floor(Math.random() * squareColor.length)];
  randomSquare = squareColor[squareRandomIndex];
  textGenerator.innerText = randomNumber;
  textGenerator.style.color = randomSquare;
  showEverything();
}

function generateWords() {
  wordsRandomIndex = [Math.floor(Math.random() * wordsArray.length)];
  randomWord = wordsArray[wordsRandomIndex];
  textGenerator.innerText = randomWord;
  textGenerator.style.color = randomSquare;
  showEverything();
}

function validateLettersGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = squareColor[i];
    squares[i].addEventListener('click', function () {
      if (squareColor[i] === textGenerator.style.color) {
        squares[i].style.color = squareColor[i];
        answer.innerText = 'You are correct!';
        // score += parseInt(score + 1);
        scoreDisplay.style.display = 'inline-block';
        scoreDisplay.innerText = 'SCORE: ' + score;
        nextLetterIndexBtn.style.display = 'inline-block';
        gameAlive = false;
      }
      if (squareColor[i] != textGenerator.style.color) {
        answer.innerText = 'Try again!';
        gameAlive = true;
      }
    });
  }
}

function validateNumbersGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = squareColor[i];
    squares[i].addEventListener('click', function () {
      if (squareColor[i] === textGenerator.style.color) {
        squares[i].style.color = squareColor[i];
        answer.innerText = 'You are correct!';
        // score += parseInt(score + 1);
        scoreDisplay.style.display = 'inline-block';
        scoreDisplay.innerText = 'SCORE: ' + score;
        nextNumberIndexBtn.style.display = 'inline-block';
        gameAlive = false;
      }
      if (squareColor[i] != textGenerator.style.color) {
        answer.innerText = 'Try again!';
        gameAlive = true;
      }
    });
  }
}
function validateWordsGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = squareColor[i];
    squares[i].addEventListener('click', function () {
      if (squareColor[i] === textGenerator.style.color) {
        squares[i].style.color = squareColor[i];
        answer.innerText = 'You are correct!';
        // score += parseInt(score + 1);
        scoreDisplay.style.display = 'inline-block';
        scoreDisplay.innerText = 'SCORE: ' + score;
        nextWordIndexBtn.style.display = 'inline-block';
        gameAlive = false;
      }
      if (squareColor[i] != textGenerator.style.color) {
        answer.innerText = 'Try again!';
        gameAlive = true;
      }
    });
  }
}
//declare variable in if statement above for "match" - use switch case to match bgcolor -- put rgb in the switch case
//

//-----------------------------------------

//---- FUNCTIONS GENERATE LETTER/NUMBER -----
function startLettersGame() {
  generateLetters();
  validateLettersGame();
}

// need a better way to check 'winner function'
// check 'win condition'
// take paramater of cb and can call any of the generateLetter functions to reuse

function startNumbersGame() {
  generateNumbers();
  validateNumbersGame();
}

function startWordsGame() {
  generateWords();
  validateWordsGame();
}

//------------------------------, ,-----------

//---- EVENT LISTENERS----------------------
changeModeBtn.addEventListener('click', function () {
  // hideEverything();
  lettersBtn.style.display = 'inline-block';
  numbersBtn.style.display = 'inline-block';
  wordsBtn.style.display = 'inline-block';
  welcomeText.style.display = 'none';
  answer.style.display = 'none';
});

lettersBtn.addEventListener('click', function () {
  textGenerator.style.display = 'none';
  startLettersGame();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
  hideGameButtons();
  hideNextButtons();
});

numbersBtn.addEventListener('click', function () {
  startNumbersGame();
  hideGameButtons();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
  hideNextButtons();
});

wordsBtn.addEventListener('click', function () {
  startWordsGame();
  hideGameButtons();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
  hideNextButtons();
});

nextLetterIndexBtn.addEventListener('click', function () {
  answer.innerText = '';
  generateLetters();
  hideNextButtons();
});

nextNumberIndexBtn.addEventListener('click', function () {
  answer.innerText = '';
  generateNumbers();
  hideNextButtons();
});

nextWordIndexBtn.addEventListener('click', function () {
  answer.innerText = '';
  generateWords();
  hideNextButtons();
});
// ---------------------------------------

// ADD WORD TO ARRAY --------------------
addWordBtn.addEventListener('click', function () {
  hideGameButtons();
  validateWordsGame();
  generateWords();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
  welcomeText.style.display = 'none';
  userInputForm.style.display = 'inline-block';
  pushTextBtn.style.display = 'inline-block';
  pushTextBtn.addEventListener('click', function () {
    userInputForm.style.display = 'none';
    pushTextBtn.style.display = 'none';
    wordsArray.unshift(userInputForm.value);
    textGenerator.innerText = wordsArray[0];
  });
});

darkModeBtn.addEventListener('click', function () {
  document.body.classList.toggle('darkMode');
  welcomeText.style.display = 'none';
});
// ----- CALL DEFAULT FUNCTIONS -----
hideEverything();
