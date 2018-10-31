'use strict';

//match user guess to a solution

//user enters guess, lowercase, trim(steralize)
  //guess has to be valid (isValid)(has to be in letters array, has to be guess of 4, cant be empty, can/cant repeat,)
  //if not valid, tell why not valid, reprompt
  //if guess is valid, 
    //put guess on board. (pushToBoard) use push.
    //check for win (checkForWin). guess matches solution (check if strings are the same)
      //if match, print win message, reset, clear board
      //before hint is given, check turns used (hasGuessRemaining)(board length or counter).
        //if on turn 10, show solution, call them a loser, reset board (resetBoard)(its a win is similar write one reset function)
        //if not on turn 10, give user a hint(showHint)
          //hint: tell user how many letters are in right location and how many letters right letters (or wrong location wrong letter)

  //mastermind() {
  //  if isValid() {
  //    pushToBoard() {
  //      checkForWin() {
  //        'congrats!';
  //        reset();
  //      } else {
  //        hasGuessRemaining() {
  //  
  //        }
  //      }
  //    }
  //  } else 'please use good input;
  //  getPrompt()
  //}

// hint function, first want to check to see if letters are the same in the same place
//1. split('') to split into an array,
//2. loop through guess array (foreach)
//for each letter in guess array, check for corresponding letter in solution array
//if corresponding letter is equal, say its in the right place, and is the right letter
//else, if letter is in solution array its right letter wrong place




const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
  // your code here
}

const showHints=(guess)=>{
  const guessArr = guess.split('');
  const solutionArr = solution.split('');
  let rightLetterRightPlace = 0;
  let rightLetterWrongPlace = 0;
  guessArr.forEach((letter, index)=>{
    const correspondingLetter = solutionArr[index];
    if (letter == solutionArr[index]) {
      //add to right place right letter count
      rightLetterRightPlace ++;
    } else if (solutionArr.includes(letter)) {
      //add to right letter wrong place count
      rightLetterWrongPlace ++;
    } //else not in solution array (dont need to write anything)
  });
  return `${rightLetterRightPlace}-${rightLetterWrongPlace}`;
}


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution


  // if (isValid(guess)) {
  //   board.push(guess)
  //   if(checkForWin(guess)) {
  //     'tell user they won';
  //     resetBoard();
  //   } else if (!hasGuessesRemaining()) {
  //     'tell user they lost and show solution'
  //     reserBoard();
  //   } else {
  //     showHints()
  //   }
  // } else {
  //   'please enter four letters from A to H'

  // }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
