'use strict';

//whiteboarding
//getpromt to ask from which stack to move and where to.
//if endstack is empty then move, if not then check legal
//move has to be legal, (isLegal)
//if start number is smaller than end number then move piece
//if illegal move tell them and get prompt again
//if legal, pop off of initial stack and push onto next stack (movePiece)
//check for win
//if not win, reprompt
//if win, tell user you won, reset stack (stackReset)


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

const movePiece = (startStack, endStack) => {
  const start = stacks[startStack];
  const end = stacks[endStack];
  end.push(start.pop());
};

const isLegal = (startStack, endStack) => {
  const SSLastNum = stacks[startStack][stacks[startStack].length-1];
 const ESLastnum = stacks[endStack][stacks[endStack].length-1];
 if (ESLastnum > SSLastNum) {
   return true;
 } else {
   return false;
 };
};

const checkForWin = () => {
  let checkWin = false;
  const solution = [4, 3, 2, 1];
  for (index = 0; index < 4; index++) {
    if (stacks['c'][index] == solution[index]) {
      checkWin = true;
    } else {
      checkWin = false;
      break;
    };
  };
  if(checkWin) {
    return "You win!";
  } else {
    return "You suck";
  };
};

const resetStack = () => {
  let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
};

const towersOfHanoi = (startStack, endStack) => {
  if (stacks[endStack].length == 0) {
    movePiece(startStack, endStack);
  } else {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
      if (checkForWin()) {
        alert('Congrats!');
        resetStack();
      }
    } else {
      alert('Please enter a legal move')
    } 
  }
};

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
