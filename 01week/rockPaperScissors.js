'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// hand1 enters move, hand2 move (done for us)
// check to see if move is valid. checkValid
// if moves invalid redo moves (getprompt)
// check win state (loss or tie). checkWin()

function rockPaperScissors(hand1, hand2) {
  if (checkValid(hand1) && checkValid(hand2)) {
    if (hand1 == hand2) {
      return "It's a tie!";
    } 
    // hand1 = rock
    else if (hand1 == "rock") {
      if (hand2 == "scissors") {
          return "Hand one wins!";
      } else {
          return "Hand two wins!";
      };
    } 
    // hand1 = paper
    else if (hand1 == "paper") {
      if (hand2 == "rock") {
          return "Hand one wins!";
      } else {
          return "Hand two wins!";
      };
    }
    // hand1 = scissors
    else if (hand1 == "scissors") {
      if (hand2 == "paper") {
          return "Hand one wins!";
      } else {
          return "Hand two wins!";
      }
    }
  } else {
    console.log('Please redo');
  }
}

const checkValid = (hand) => {
  const lowerCase = hand.toLowerCase()
  if (lowerCase == 'rock' || lowerCase == 'paper' || lowerCase == 'scissors') {
    return true;
  } else {
    return false;
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
