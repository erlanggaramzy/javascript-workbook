'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//planning
//input text
//check to see if valid (make sure string, check if any numbers), if not ask to re enter a word. checkValid()
//check for uppercase, turn all to lowercase. fixCase()
//check to see if start with vowel, if vowel, add yay to end. checkVowel() return it back
//turn entered word to array(splice). turnIntoList()
//go through array until first vowel(loop until vowel). checkConsonent()
//take letters until first vowel and put to the end (pop) and add ay. addVowelAy()

function pigLatin(word) {
  var wordArray = turnToList(word);
  if (checkValid(wordArray)) {
    if (checkVowel(wordArray)) {
      return wordArray.join("") + "yay";
    } else {
      var vowelIndex = checkConsonant(wordArray);
      pushConsonant(wordArray, vowelIndex);
      return wordArray.join("") + "ay";
    }  //end of checkVowel()
  } else {
    return "Please remove any numbers and try again" 
  }  //end of checkValid()
}

const turnToList = (word) => {
  const lowerCase = word.toLowerCase();
  const trimmed = lowerCase.trim();
  const toList = trimmed.split("");
  return toList;
}

const checkValid = (word) => {
  const arrayLength = word.length;
  for (var i = 0; i < arrayLength; i++) {
    if (isNaN(word[i])) {
      return true;
    } else {
      return false;
    }
  }
}

const checkVowel = (word) => {
  const vowel = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < vowel.length; i++) {
    if (word[0] == vowel[i]) {
      return true;
    } 
  } 
  return false;
}

const checkConsonant = (word) => {
  const vowel = ["a", "e", "i", "o", "u"];
  var i = 0;
  var found = false;
  while (!found && i < word.length) {
    for (var j = 0; j < vowel.length; j++) {
      if (word[i] == vowel[j]) {
        found = true; 
        break;
      }
    }
    if (!found) {
      i++;
    }
  } 
  return i;
}

const pushConsonant = (word, firstVowelIndex) => {
  for (var i = 0; i < firstVowelIndex; i++) {
    const letter = word.shift();
    word.push(letter);
  }
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
