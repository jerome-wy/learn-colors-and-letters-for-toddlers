// ------ VARIABLES-----------
let startBtn = document.getElementById('startGameBtn');
let instBtn = document.getElementById('instructionGameBtn');
let darkModeBtn = document.getElementById('darkModeBtn');
let changeDiffBtn = document.getElementById('changeDiffBtn');
let lettersBtn = document.getElementById('lettersBtn');
let wordsBtn = document.getElementById('wordsBtn');
let colorText = document.querySelector('.colorText');
let addWordBtn = document.getElementById('addWordBtn');
let userInputForm = document.getElementById('userInputForm');
let pushTextBtn = document.getElementById('pushTextBtn');
let squares = document.querySelectorAll('.colorSquare');
let textGenerator = document.getElementById('textGeneratorId');
let textGeneratorColor = document.getElementById('textGeneratorId').style.color;
let questionGenerator1 = document.getElementById('questionGenerator1');
let questionGenerator2 = document.getElementById('questionGenerator2');
let answer = document.getElementById('answer');
let gameAlive = true;
let next = true;
let score = 0;

// -----------------------------------------
let squareColor = [
  'rgb(123, 72, 201)', //Purple
  'rgb(14, 156, 44)', //Green
  'rgb(250, 129, 22)', //Orange
  'rgb(13, 13, 223)', //Blue
  'rgb(255, 246, 1)', //Yellow
  'rgb(254, 0, 0)' //Red
];

let squareFunColor = [
  'rgb(52, 38, 75)', //Purple
  'rgb(32, 83, 45)', //Green
  'rgb(109, 74, 44)', //Orange
  'rgb(32, 32, 92)', //Blue
  'rgb(90, 88, 26)', //Yellow
  'rgb(100, 27, 27)' //Red
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
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 100, 101, 102, 103, 104, 105, 106,
  107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
  122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136,
  137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151,
  152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166,
  167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181,
  182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196,
  197, 198, 199, 200
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

function hideGameButtons() {
  lettersBtn.style.display = 'none';
  numbersBtn.style.display = 'none';
  wordsBtn.style.display = 'none';
}
//-----------------------------------------

//---- FUNCTIONS TO SHOW GENERATED TEXT -----
function generateLetters() {
  showEverything();
  textGenerator.innerText = randomLetter;
  textGenerator.style.color = randomSquare;
}

function generateNumbers() {
  textGenerator.innerText = randomNumber;
  textGenerator.style.color = randomSquare;
  showEverything();
}

function generateWords() {
  textGenerator.innerText = randomWord;
  textGenerator.style.color = randomSquare;
  showEverything();
}

function validateGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = squareColor[i];
    squares[i].addEventListener('click', function () {
      if (squareColor[i] === textGenerator.style.color) {
        squares[i].style.color = squareColor[i];
        answer.innerText = 'You are correct!';
        gameAlive = false;
      } else squareColor[i] != textGenerator.style.color, (answer.innerText = 'Try again!');
      gameAlive = true;
    });
  }
}

//-----------------------------------------

//---- FUNCTIONS GENERATE LETTER/NUMBER -----
function startLettersGame() {
  generateLetters();
  validateGame();
}

// need a better way to check 'winner function'
// check 'win condition'
// take paramater of cb and can call any of the generateLetter functions to reuse

function startNumbersGame() {
  generateNumbers();
  validateGame();
}

function startWordsGame() {
  generateWords();
  validateGame();
}

//------------------------------, ,-----------

//---- EVENT LISTENERS----------------------
changeDiffBtn.addEventListener('click', function () {
  hideEverything();
  lettersBtn.style.display = 'inline-block';
  numbersBtn.style.display = 'inline-block';
  wordsBtn.style.display = 'inline-block';
});

lettersBtn.addEventListener('click', function () {
  startLettersGame();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
  hideGameButtons();
  if (hideGameButtons == true) {
    generateLetters();
  }
});

numbersBtn.addEventListener('click', function () {
  startNumbersGame();
  hideGameButtons();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
});

wordsBtn.addEventListener('click', function () {
  startWordsGame();
  hideGameButtons();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
});

//---- CREATE A NEW PAGE SPECIFICALLY FOR NUMBERS
// advancedBtn.addEventListener('click', function () {
//   startAdvNumbersGame();
//   easyBtn.style.display = 'none';
//   mediumBtn.style.display = 'none';
//   advancedBtn.style.display = 'none';
//   document.querySelector('.allColorSquares').style.display = 'inline-block';
// });
// ---------------------------------------

// ADD WORD TO ARRAY --------------------
addWordBtn.addEventListener('click', function () {
  hideGameButtons();
  startWordsGame();
  showEverything();
  validateGame();
  document.querySelector('.allColorSquares').style.display = 'inline-block';
  userInputForm.style.display = 'inline-block';
  pushTextBtn.style.display = 'inline-block';
  pushTextBtn.addEventListener('click', function () {
    userInputForm.style.display = 'none';
    pushTextBtn.style.display = 'none';
    // generateAdvancedLetters();
    return wordsArray.unshift(userInputForm.value);
  });
});

darkModeBtn.addEventListener('click', function () {
  document.body.classList.toggle('darkMode');
});
// ----- CALL DEFAULT FUNCTIONS -----
hideEverything();
