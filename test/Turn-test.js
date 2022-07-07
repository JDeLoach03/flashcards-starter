
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

/*
evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
*/


describe('Turn', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });
  
    it('should be an instance of Turn', function() {
      const turn = new Turn();
      expect(turn).to.be.an.instanceof(Turn);
    }); 
  
    it('should be able to store a guess and a card', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      expect(turn.guess).to.equal('object');
      expect(turn.card).to.be.an.instanceof(Card);
    });      

    it('should be able to return a user guess', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        const userGuess = turn.returnGuess();
  
        expect(userGuess).to.equal('object');
    })

    it('should be able to return the user card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('object', card);
        const cardChosen = turn.returnCard()

        expect(cardChosen).to.equal(card);
    })

    it('should be able to evaluate if guess is correct', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('object', card);
        const checkGuess = turn.evaluateGuess()
        
        expect(checkGuess).to.be.true
    })

    it('should be able to evaluate if guess is incorrect', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('array', card);
        const checkGuess = turn.evaluateGuess()

        expect(checkGuess).to.be.false
    })

    it('should be able to give feedback if your answer is correct', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('object', card);
        const checkGuess = turn.evaluateGuess()
        const correctFeedback = turn.giveFeedback();

        expect(checkGuess).to.be.true
        expect(correctFeedback).to.equal('correct')
    })

    it ('should be able to give feedback if your answer is incorrect', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('function', card);
        const checkGuess = turn.evaluateGuess()
        const correctFeedback = turn.giveFeedback();

        expect(checkGuess).to.be.false
        expect(correctFeedback).to.equal('incorrect')
    })

    
  });

  