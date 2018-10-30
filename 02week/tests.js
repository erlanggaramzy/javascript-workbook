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
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      });
      it('should reprompt if given something other than rock paper or scissors', () => {
        assert.equal(rockPaperScissors('rcK', ' payper '), "This is not a valid move.");
        assert.equal(rockPaperScissors('sock', 'later'), "This is not a valid move.");
        assert.equal(rockPaperScissors('papier', 'dock'), "This is not a valid move.");
      });
      it('should scrub extra words if rock paper or scissors is also present', () => {
        assert.equal(rockPaperScissors('hard rock', 'flat paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('crumpled paper', 'sharp scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('brown rock', 'dull scissors'), "Hand one wins!");
      });
    });
  } else {
  
    getPrompt();
  
  }