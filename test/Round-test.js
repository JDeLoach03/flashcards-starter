const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {

    it('should be a function', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const card3 = new Card(12, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(Round).to.be.a('function');
      });
    
    it('should be an instance of Round', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const card3 = new Card(12, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
        const deck = new Deck([card1, card2, card3])
        const round = new Round(deck)

        expect(round).to.be.an.instanceof(Round);

    }); 

    it('should hold all of the cards within the deck array', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const card3 = new Card(12, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.deck).to.be.an('array')
        expect(round.deck).to.equal(deck.cards)
        expect(round.deck[1]).to.equal(deck.cards[1])
    })

    it('should return the current card in play', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const deck = new Deck([card1, card2])
        const round = new Round(deck)

        expect(round.returnCurrentCard()).to.equal(round.deck[0])
    })

    it('should be able to hold incorrect guesses', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const deck = new Deck([card1, card2])
        const round = new Round(deck)

        
        expect(round.incorrectGuess).to.deep.equal([])
    })

    it('should start with no turns', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const deck = new Deck([card1, card2])
        const round = new Round(deck)

        expect(round.turns).to.equal(0)
    })

    it('should be able to store the id for the incorrect guess', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const deck = new Deck([card1, card2])
        const round = new Round(deck)

        round.takeTurn('function')
        round.takeTurn('iteration method')


        expect(round.incorrectGuess.length).to.equal(2)
    })

})