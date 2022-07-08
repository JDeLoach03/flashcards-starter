
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
    let card;
    let turn;

    beforeEach(() => {
      card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      turn = new Turn('object', card);
    })

    it('should be a function', function() {
      expect(Turn).to.be.a('function');
    });
  
    it('should be an instance of Turn', function() {
      expect(turn).to.be.an.instanceof(Turn);
    }); 
  
    it('should be able to store a guess and a card', function() {
      expect(turn.guess).to.equal('object');
      expect(turn.card).to.be.an.instanceof(Card);
    });      

    it('should be able to return a user guess', function() {
        const userGuess = turn.returnGuess();
        expect(userGuess).to.equal('object');
    })

    it('should be able to return the user card', function() {
        const cardChosen = turn.returnCard();
        expect(cardChosen).to.equal(card);
    })

    it('should be able to evaluate if guess is correct', function () {
        const checkGuess = turn.evaluateGuess();
        expect(checkGuess).to.be.true;
    })

    it('should be able to evaluate if guess is incorrect', function() {
        let turn = new Turn('function', card);
        const checkGuess = turn.evaluateGuess();
        expect(checkGuess).to.be.false;
    })

    it('should be able to give feedback if your answer is correct', function() {
        const checkGuess = turn.evaluateGuess();
        const correctFeedback = turn.giveFeedback();
        expect(checkGuess).to.be.true;
        expect(correctFeedback).to.equal('correct');
    })

    it ('should be able to give feedback if your answer is incorrect', function() {
        let  turn = new Turn('function', card);
        const checkGuess = turn.evaluateGuess();
        const correctFeedback = turn.giveFeedback();
        expect(checkGuess).to.be.false;
        expect(correctFeedback).to.equal('incorrect');
    })

    
  });

  