const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;

    beforeEach(() => {
        card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        card3 = new Card(12, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
        deck = new Deck([card1, card2, card3])
        round = new Round(deck);

    })

    it('should be a function', function() {
        expect(Round).to.be.a('function');
      });
    
    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    }); 

    it('should hold all of the cards within the deck array', function() {
        expect(round.deck).to.be.an('array')
        expect(round.deck).to.equal(deck.cards)
        expect(round.deck[1]).to.equal(deck.cards[1])
    })

    it('should return the current card in play', function() {
        expect(round.returnCurrentCard()).to.equal(round.deck[0])
    })

    it('should be able to hold incorrect guesses', function() { 
        expect(round.incorrectGuess).to.deep.equal([])
    })

    it('should start with no turns', function() {
        expect(round.turns).to.equal(0)
    })

    it('should be able to store the id for the incorrect guess', function() {
        round.takeTurn('function')
        round.takeTurn('iteration method')
        expect(round.incorrectGuess.length).to.equal(2)
    })

    it('should be able to evaluate feedback of guess', function() {
        let turnFeedback = round.takeTurn('array') 
        expect(turnFeedback).to.equal('correct')
        let turnFeedback2 = round.takeTurn('iteration method') 
        expect(turnFeedback2).to.equal('incorrect')
        
    })

    it('should be able to calculate correct guesses', function() { 
       round.takeTurn('array')// correct
       round.takeTurn('wild banana') //incorrect
    })

    it('should be able to end the round and show your percentage', function() {
        round.takeTurn('array')// correct
        round.takeTurn('wild banana') //incorrect
        expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
    })  
})